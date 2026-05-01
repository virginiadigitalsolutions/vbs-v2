import LegalSectionEyebrow from "@/components/legal/legal-section-eyebrow";

export default function LegalHeroSection({
  eyebrow,
  title,
  description,
  lastUpdated,
}) {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.14),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.12),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <LegalSectionEyebrow>{eyebrow}</LegalSectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            {description}
          </p>
          <p className="mt-8 text-sm font-semibold tracking-[0.12em] text-slate-500 uppercase">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#1E3A8A_0%,#2563EB_62%,#14B8A6_100%)] p-7 text-white">
            <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
              Important Note
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Review these pages before using the platform or submitting information.",
                "Third-party courses, providers, and external platforms remain independently governed.",
                "Questions about these policies can be shared at contact@virginiabusinesssolutions.in.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <p className="text-base leading-7 text-blue-50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
