export default function PageShell({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-heading text-4xl leading-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
