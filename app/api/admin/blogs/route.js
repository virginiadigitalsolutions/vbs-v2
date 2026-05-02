import { requireAdminApiSession } from "@/lib/admin-session";
import { createBlogPost, getAllBlogPosts } from "@/lib/blog-content";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdminApiSession();
  if (session instanceof Response) {
    return session;
  }

  return Response.json({
    ok: true,
    blogs: getAllBlogPosts(),
  });
}

export async function POST(request) {
  const session = await requireAdminApiSession();
  if (session instanceof Response) {
    return session;
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json(
      {
        ok: false,
        error: "Invalid request body.",
      },
      { status: 400 }
    );
  }

  try {
    const post = createBlogPost(body);

    return Response.json({
      ok: true,
      message: "Blog post created successfully.",
      data: post,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unable to create blog post.",
      },
      { status: 400 }
    );
  }
}
