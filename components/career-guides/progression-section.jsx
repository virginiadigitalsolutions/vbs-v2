import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { careerStages } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesProgressionSection() {
  return (
    <section className="vbs-section bg-[#eef2ff]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Career Progression by Stage</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[14ch]">
            Growth changes form as you move from learning to leadership.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {careerStages.map((stage) => (
            <article key={stage.title} className="vbs-card p-7">
              <div
                className={`rounded-[1.35rem] bg-gradient-to-br ${stage.accent} p-5`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#1d4ed8] shadow-sm">
                  {stage.icon}
                </div>
                <h3 className="mt-5 font-heading text-3xl text-slate-900">
                  {stage.title}
                </h3>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-700">
                {stage.intro}
              </p>
              <ul className="mt-5 space-y-2 text-base leading-7 text-slate-600">
                {stage.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
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
