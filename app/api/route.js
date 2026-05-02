export async function GET() {
  return Response.json({
    ok: true,
    message: "Next.js backend is running",
    timestamp: new Date().toISOString(),
  });
}
