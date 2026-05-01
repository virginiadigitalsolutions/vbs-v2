import Link from "next/link";

export default function BlogListGrid({ posts }) {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
              Latest Articles
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-slate-950">
              Blog posts built around skill clarity and career direction
            </h2>
          </div>
          <p className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            {posts.length} article{posts.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="vbs-card p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                <Link
                  href={`/blog/${post.categorySlug}`}
                  className="rounded-full bg-[#E0ECFF] px-4 py-2 text-[#1E3A8A] transition hover:bg-[#d5e5ff]"
                >
                  {post.category}
                </Link>
                <span>{post.dateLabel}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-950">
                {post.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
                <span className="rounded-full bg-[#EFF6FF] px-3 py-2 text-[#1E3A8A]">
                  Future-ready skills
                </span>
                <span className="rounded-full bg-[#ECFDF5] px-3 py-2 text-[#0F766E]">
                  India-focused
                </span>
              </div>
              <div className="mt-8">
                <Link href={`/blog/${post.categorySlug}/${post.slug}`} className="vbs-button-primary">
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
