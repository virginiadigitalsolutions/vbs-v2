import { getContactMessages, insertContactMessage } from "@/lib/contact-db";

export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    ok: true,
    route: "contact",
    message: "Contact API is ready",
    messages: getContactMessages(),
  });
}

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body?.fullName || !body?.email || !body?.subject || !body?.message) {
    return Response.json(
      {
        ok: false,
        error: "fullName, email, subject, and message are required",
      },
      { status: 400 }
    );
  }

  const savedMessage = insertContactMessage({
    fullName: body.fullName.trim(),
    email: body.email.trim(),
    subject: body.subject.trim(),
    message: body.message.trim(),
  });

  return Response.json({
    ok: true,
    message: "Contact request received",
    data: savedMessage,
  });
}
