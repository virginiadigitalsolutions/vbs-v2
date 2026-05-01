import Image from "next/image";

export default function BlogPostHero({ post }) {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.16),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
            <span className="rounded-full bg-[#E0ECFF] px-4 py-2 text-[#1E3A8A]">
              {post.category}
            </span>
            <span>{post.dateLabel}</span>
            <span>{post.readTime}</span>
          </div>
          <p className="mt-6 text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
            {post.banner}
          </p>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            {post.title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
            <Image
              src="/blog-digital-skills-2026.svg"
              alt={post.imageAlt}
              width={800}
              height={640}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
