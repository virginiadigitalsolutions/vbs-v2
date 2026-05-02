import { NextResponse } from "next/server";

import { clearSessionCookie } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST() {
  const cookie = clearSessionCookie();
  const response = NextResponse.json({
    ok: true,
    message: "Logged out.",
  });

  response.cookies.set(cookie.name, cookie.value, cookie.options);

  return response;
}
