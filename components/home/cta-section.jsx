import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.05),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in-up">
          <h2 className="vbs-heading">
            Start with the right question before you start another course.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            If you are unsure what to learn next, the most useful place to begin
            is clarity about the skill itself.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/digital-skills"
              className="vbs-button-primary text-lg px-8 py-4"
            >
              Explore Digital Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
