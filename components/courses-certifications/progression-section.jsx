import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import { learningStages } from "@/components/courses-certifications/courses-data";

export default function CoursesProgressionSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>A Structured Learning Progression</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[15ch]">
            Digital learning works best when approached in stages.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {learningStages.map((stage) => (
            <article key={stage.title} className="vbs-card p-7">
              <div
                className={`rounded-[1.35rem] bg-gradient-to-br ${stage.accent} p-5`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#1d4ed8] shadow-sm">
                  {stage.icon}
                </div>
                <h3 className="mt-5 font-heading text-3xl leading-tight text-slate-900">
                  {stage.title}
                </h3>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-700">
                {stage.objective}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {stage.description}
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1d4ed8]">
                  Best suited for
                </p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                  {stage.suitedFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">
                  Recommended approach
                </p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                  {stage.approach.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 rounded-[1.1rem] bg-[#f8fafc] px-4 py-3 text-base leading-7 text-slate-700">
                {stage.closing}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
