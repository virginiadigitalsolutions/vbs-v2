import Link from "next/link";

export default function BlogCategoryHero({ category, postCount }) {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.15),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
            <Link href="/blog" className="transition hover:text-[#1d4ed8]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700">{category.name}</span>
          </div>
          <p className="mt-6 text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
            {category.banner}
          </p>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            {category.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            {category.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {postCount} article{postCount === 1 ? "" : "s"}
            </span>
            <span className="rounded-full bg-[#E0ECFF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
              Category: {category.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
