import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";

export default function AboutUsHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.16),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <AboutUsSectionEyebrow>
            Bringing Structure to Digital Career Decisions
          </AboutUsSectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            Why This Platform Exists
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            We help students and professionals in India make informed choices
            about digital skills, learning paths, and long-term career growth.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Access to information has never been easier. Yet confusion around
              skills, certifications, and career direction continues to grow.
              Learners often move from one course to another without
              understanding how those decisions connect to long-term outcomes.
            </p>
            <p>
              This platform exists to reduce that confusion by offering
              structured, stage-based guidance that aligns learning with real
              professional growth.
            </p>
          </div>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#1E3A8A_0%,#2563EB_62%,#14B8A6_100%)] p-7 text-white">
            <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
              Platform Purpose
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Reduce confusion around digital choices",
                "Connect learning decisions to long-term outcomes",
                "Support students and professionals with clear progression",
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
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#E0ECFF] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1E3A8A]">
                Structured
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Decisions become clearer when skills, learning paths, and roles
                are connected in sequence.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#ECFDF5] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Long-Term
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The goal is sustainable growth, not short-term momentum or
                reactive decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
