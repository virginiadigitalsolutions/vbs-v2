import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="vbs-card bg-white p-8 text-center lg:p-12">
          <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
            Page Not Found
          </p>
          <h1 className="mt-6 font-heading text-4xl leading-tight text-slate-950 lg:text-5xl">
            This page could not be found
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The page you requested may have moved, been renamed, or may not
            exist yet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="vbs-button-primary">
              Go Home
            </Link>
            <Link href="/blog" className="vbs-button-secondary">
              Visit Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
