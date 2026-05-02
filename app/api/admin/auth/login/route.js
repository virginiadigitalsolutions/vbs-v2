import { NextResponse } from "next/server";

import { authenticateAdminUser, buildSessionCookie, hasAdminUser } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body?.email || !body?.password) {
    return NextResponse.json(
      {
        ok: false,
        error: "Email and password are required.",
      },
      { status: 400 }
    );
  }

  if (!hasAdminUser()) {
    return NextResponse.json(
      {
        ok: false,
        error: "No admin account exists yet. Create one first.",
      },
      { status: 400 }
    );
  }

  try {
    const user = authenticateAdminUser(body);
    const sessionCookie = buildSessionCookie(user);
    const response = NextResponse.json({
      ok: true,
      message: "Login successful.",
      data: user,
    });

    response.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.options
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unable to login.",
      },
      { status: 401 }
    );
  }
}
