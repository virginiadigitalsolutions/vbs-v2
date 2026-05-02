import { requireAdminApiSession } from "@/lib/admin-session";
import { removeBlogPost, updateBlogPost } from "@/lib/blog-content";

export const runtime = "nodejs";

function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function PUT(request, { params }) {
  const session = await requireAdminApiSession();
  if (session instanceof Response) {
    return session;
  }

  const { id: rawId } = await params;
  const id = parseId(rawId);
  const body = await request.json().catch(() => null);

  if (!id || !body) {
    return Response.json(
      {
        ok: false,
        error: "Invalid request.",
      },
      { status: 400 }
    );
  }

  try {
    const post = updateBlogPost(id, body);

    return Response.json({
      ok: true,
      message: "Blog post updated successfully.",
      data: post,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unable to update blog post.",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(_request, { params }) {
  const session = await requireAdminApiSession();
  if (session instanceof Response) {
    return session;
  }

  const { id: rawId } = await params;
  const id = parseId(rawId);

  if (!id) {
    return Response.json(
      {
        ok: false,
        error: "Invalid blog id.",
      },
      { status: 400 }
    );
  }

  try {
    const post = removeBlogPost(id);

    return Response.json({
      ok: true,
      message: "Blog post deleted successfully.",
      data: post,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unable to delete blog post.",
      },
      { status: 400 }
    );
  }
}
