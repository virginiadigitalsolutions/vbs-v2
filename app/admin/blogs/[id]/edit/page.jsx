import Link from "next/link";
import { notFound } from "next/navigation";

import BlogForm from "@/components/admin/blog-form";
import { requireAdminSession } from "@/lib/admin-session";
import { getBlogCategories, getStoredBlogPostForEdit } from "@/lib/blog-content";

export const runtime = "nodejs";

export const metadata = {
  title: "Edit Blog",
  description: "Update or delete blog posts from the admin panel.",
};

export default async function AdminEditBlogPage({ params }) {
  await requireAdminSession();
  const { id } = await params;
  const categories = getBlogCategories();
  const post = getStoredBlogPostForEdit(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card p-8 lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                Admin Panel
              </p>
              <h1 className="mt-3 font-heading text-4xl leading-tight text-slate-950">
                Edit blog post
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Update content, change slug details, or delete this stored blog
                post.
              </p>
            </div>
            <Link
              href="/admin/blogs"
              className="rounded-full bg-[#E0ECFF] px-5 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:bg-[#d5e5ff]"
            >
              Back To Blog Admin
            </Link>
          </div>

          <div className="mt-8">
            <BlogForm
              categories={categories}
              mode="edit"
              initialValues={post}
              postId={post.id}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
