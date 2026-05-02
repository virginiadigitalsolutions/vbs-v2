import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const dataDirectory = path.join(process.cwd(), "data");
const databasePath = path.join(dataDirectory, "contact.sqlite");

function createDatabase() {
  fs.mkdirSync(dataDirectory, { recursive: true });

  const database = new DatabaseSync(databasePath);

  database.exec(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return database;
}

const globalForDatabase = globalThis;

export const contactDb =
  globalForDatabase.__contactDb ?? createDatabase();

if (!globalForDatabase.__contactDb) {
  globalForDatabase.__contactDb = contactDb;
}

export function insertContactMessage({ fullName, email, subject, message }) {
  const statement = contactDb.prepare(`
    INSERT INTO contact_messages (full_name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `);

  const result = statement.run(fullName, email, subject, message);

  return {
    id: Number(result.lastInsertRowid),
    fullName,
    email,
    subject,
    message,
  };
}

export function getContactMessages() {
  const statement = contactDb.prepare(`
    SELECT
      id,
      full_name AS fullName,
      email,
      subject,
      message,
      created_at AS createdAt
    FROM contact_messages
    ORDER BY datetime(created_at) DESC, id DESC
  `);

  return statement.all();
}
