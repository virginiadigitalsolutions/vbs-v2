import Link from "next/link";

import BlogForm from "@/components/admin/blog-form";
import BlogRowActions from "@/components/admin/blog-row-actions";
import { requireAdminSession } from "@/lib/admin-session";
import { getBlogCategories, getAllBlogPosts } from "@/lib/blog-content";

export const runtime = "nodejs";

export const metadata = {
  title: "Admin Blogs",
  description: "Create and manage blog posts from the admin panel.",
};

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function AdminBlogsPage() {
  await requireAdminSession();
  const categories = getBlogCategories();
  const posts = getAllBlogPosts();

  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8">
          <div className="vbs-card p-8 lg:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                  Admin Panel
                </p>
                <h1 className="mt-3 font-heading text-4xl leading-tight text-slate-950">
                  Create blog post
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  Add new blog content here. Published posts will appear on the
                  public blog pages automatically.
                </p>
              </div>
              <Link
                href="/admin"
                className="rounded-full bg-[#E0ECFF] px-5 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:bg-[#d5e5ff]"
              >
                Back To Admin
              </Link>
            </div>

            <div className="mt-8">
              <BlogForm categories={categories} />
            </div>
          </div>

          <div className="vbs-card overflow-hidden p-8 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                  Published Blogs
                </p>
                <h2 className="mt-3 font-heading text-3xl text-slate-950">
                  Current blog list
                </h2>
              </div>
              <p className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
                {posts.length} post{posts.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr className="text-left text-sm uppercase tracking-[0.16em] text-slate-500">
                    <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                      Title
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                      Category
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                      Slug
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                      Source
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                      Date
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={`${post.categorySlug}-${post.slug}`} className="align-top">
                      <td className="border-b border-slate-100 px-4 py-5 font-semibold text-slate-900">
                        {post.title}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                        {post.category}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                        {post.slug}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                        {post.id ? "Database" : "Static file"}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                        {post.createdAt ? formatDate(post.createdAt) : post.dateLabel}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-5">
                        <BlogRowActions post={post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
