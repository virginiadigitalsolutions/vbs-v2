export default function BlogListHero() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.15),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
            Blog
          </p>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            Practical blogs on digital skills, learning paths, and career growth
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Explore structured blog content that helps students and working
            professionals in India choose skills, courses, and career paths
            with more clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
