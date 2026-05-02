import { requireAdminApiSession } from "@/lib/admin-session";
import { importStaticBlogPost } from "@/lib/blog-content";

export const runtime = "nodejs";

export async function POST(request) {
  const session = await requireAdminApiSession();
  if (session instanceof Response) {
    return session;
  }

  const body = await request.json().catch(() => null);
  const slug = body?.slug?.trim();

  if (!slug) {
    return Response.json(
      {
        ok: false,
        error: "Blog slug is required.",
      },
      { status: 400 }
    );
  }

  try {
    const post = importStaticBlogPost(slug);

    return Response.json({
      ok: true,
      message: "Static blog imported into the database.",
      data: post,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unable to import blog.",
      },
      { status: 400 }
    );
  }
}
