import Link from "next/link";

import { requireAdminSession } from "@/lib/admin-session";
import { getContactMessages } from "@/lib/contact-db";
import { getAllBlogPosts } from "@/lib/blog-content";

export const runtime = "nodejs";

export const metadata = {
  title: "Admin",
  description: "Admin panel for contact form messages.",
};

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function AdminPage() {
  await requireAdminSession();
  const messages = getContactMessages();
  const posts = getAllBlogPosts();

  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8">
          <div className="vbs-card p-8 lg:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                  Admin Panel
                </p>
                <h1 className="font-heading text-4xl leading-tight text-slate-950">
                  Dashboard
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Manage contact enquiries and create blog content from one place.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[1.6rem] border border-slate-200 bg-white p-7">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                  Blog Module
                </p>
                <h2 className="mt-4 font-heading text-3xl text-slate-950">
                  Create and publish blog posts
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Add new blog posts from the admin panel and publish them to
                  the public blog pages automatically.
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
                    {posts.length} post{posts.length === 1 ? "" : "s"}
                  </span>
                  <Link
                    href="/admin/blogs"
                    className="rounded-full bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a3278]"
                  >
                    Open Blog Admin
                  </Link>
                </div>
              </article>

              <article className="rounded-[1.6rem] border border-slate-200 bg-white p-7">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Contact Module
                </p>
                <h2 className="mt-4 font-heading text-3xl text-slate-950">
                  Review contact messages
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Check new enquiries submitted from your public contact form.
                </p>
                <div className="mt-6">
                  <span className="rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#0F766E]">
                    {messages.length} message{messages.length === 1 ? "" : "s"}
                  </span>
                </div>
              </article>
            </div>
          </div>

          <div className="vbs-card overflow-hidden p-8 lg:p-10">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                Contact Messages
              </p>
              <h2 className="font-heading text-3xl leading-tight text-slate-950">
                Latest enquiries
              </h2>
            </div>

            <div className="mt-8 overflow-x-auto">
              {messages.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600">
                  No messages yet.
                </div>
              ) : (
                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr className="text-left text-sm uppercase tracking-[0.16em] text-slate-500">
                      <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                        Name
                      </th>
                      <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                        Email
                      </th>
                      <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                        Subject
                      </th>
                      <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                        Message
                      </th>
                      <th className="border-b border-slate-200 px-4 py-4 font-semibold">
                        Received
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((item) => (
                      <tr key={item.id} className="align-top">
                        <td className="border-b border-slate-100 px-4 py-5 font-semibold text-slate-900">
                          {item.fullName}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                          {item.email}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                          {item.subject}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                          <p className="max-w-md whitespace-pre-wrap leading-7">
                            {item.message}
                          </p>
                        </td>
                        <td className="border-b border-slate-100 px-4 py-5 text-slate-700">
                          {formatDate(item.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
