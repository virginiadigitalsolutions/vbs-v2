import crypto from "node:crypto";

import { contactDb } from "@/lib/contact-db";

const SESSION_COOKIE = "vbs_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;
const AUTH_SECRET =
  process.env.ADMIN_AUTH_SECRET || "vbs-dev-admin-secret-change-me";

contactDb.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const derivedKey = crypto
    .pbkdf2Sync(password, salt, 120000, 32, "sha256")
    .toString("hex");

  return `${salt}:${derivedKey}`;
}

function verifyPassword(password, storedHash) {
  const [salt, expectedHash] = storedHash.split(":");

  if (!salt || !expectedHash) {
    return false;
  }

  const actualHash = crypto
    .pbkdf2Sync(password, salt, 120000, 32, "sha256")
    .toString("hex");

  return crypto.timingSafeEqual(
    Buffer.from(actualHash, "utf8"),
    Buffer.from(expectedHash, "utf8")
  );
}

function signPayload(payload) {
  return crypto
    .createHmac("sha256", AUTH_SECRET)
    .update(payload)
    .digest("base64url");
}

function createSessionToken(user) {
  const payload = Buffer.from(
    JSON.stringify({
      userId: user.id,
      email: user.email,
      exp: Date.now() + SESSION_DURATION_MS,
    })
  ).toString("base64url");

  return `${payload}.${signPayload(payload)}`;
}

function verifySessionToken(token) {
  if (!token || !token.includes(".")) {
    return null;
  }

  const [payload, signature] = token.split(".");
  const expectedSignature = signPayload(payload);

  if (
    !signature ||
    signature.length !== expectedSignature.length ||
    !crypto.timingSafeEqual(
      Buffer.from(signature, "utf8"),
      Buffer.from(expectedSignature, "utf8")
    )
  ) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    if (!parsed?.userId || !parsed?.email || !parsed?.exp) {
      return null;
    }

    if (Date.now() > parsed.exp) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function getAdminUserCount() {
  const result = contactDb.prepare("SELECT COUNT(*) AS count FROM admin_users").get();
  return Number(result.count || 0);
}

export function hasAdminUser() {
  return getAdminUserCount() > 0;
}

export function getAdminUserByEmail(email) {
  return (
    contactDb
      .prepare(
        `
        SELECT id, email, password_hash AS passwordHash, created_at AS createdAt
        FROM admin_users
        WHERE lower(email) = lower(?)
      `
      )
      .get(email) || null
  );
}

export function createAdminUser({ email, password }) {
  if (hasAdminUser()) {
    throw new Error("Admin user already exists.");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  if (!normalizedEmail || !normalizedPassword) {
    throw new Error("Email and password are required.");
  }

  if (normalizedPassword.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  const passwordHash = hashPassword(normalizedPassword);

  const result = contactDb
    .prepare(
      `
      INSERT INTO admin_users (email, password_hash)
      VALUES (?, ?)
    `
    )
    .run(normalizedEmail, passwordHash);

  return {
    id: Number(result.lastInsertRowid),
    email: normalizedEmail,
  };
}

export function authenticateAdminUser({ email, password }) {
  const user = getAdminUserByEmail(email);

  if (!user || !verifyPassword(password.trim(), user.passwordHash)) {
    throw new Error("Invalid email or password.");
  }

  return {
    id: user.id,
    email: user.email,
  };
}

export function buildSessionCookie(user) {
  return {
    name: SESSION_COOKIE,
    value: createSessionToken(user),
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_DURATION_MS / 1000,
    },
  };
}

export function clearSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: "",
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    },
  };
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export function verifyAdminSessionToken(token) {
  return verifySessionToken(token);
}
