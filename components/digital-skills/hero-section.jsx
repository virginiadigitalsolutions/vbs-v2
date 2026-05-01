import SectionEyebrow from "@/components/digital-skills/section-eyebrow";

export default function DigitalSkillsHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.14),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <SectionEyebrow>
            Choosing the Right Digital Skills for Long-Term Growth
          </SectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            Understand which digital skills matter and how they shape real
            careers
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Understand which digital skills matter and how they shape real
            careers.
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Digital skills shape how modern teams operate, communicate, and
            solve problems. Yet not every trending tool or certification
            translates into meaningful career progress. Choosing the right skill
            requires understanding how it fits into real workflows, how it
            evolves with technology, and how it supports long-term adaptability
            rather than short-term momentum.
          </p>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_62%,#0f766e_100%)] p-7 text-white">
            <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
              Skill Decision Lens
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Choose skills that fit real workflows",
                "Focus on long-term adaptability over hype",
                "Look for role alignment, not just course popularity",
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
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#EEF2FF] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Long-Term Value
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Skills should remain useful even as tools and platforms keep
                changing.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#ECFDF5] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Real Application
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical execution matters more than collecting isolated
                credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
