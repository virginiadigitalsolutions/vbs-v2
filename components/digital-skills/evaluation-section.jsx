import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { evaluationPoints } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsEvaluationSection() {
  return (
    <section className="vbs-section bg-[#eef2ff]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>
            How to Evaluate a Digital Skill Before Committing
          </SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[14ch]">
            Demand matters, but sustainability matters more.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choosing a skill requires more than identifying demand. It requires
            examining how sustainable and transferable that skill will be over
            time. Before investing time or money, consider the following:
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {evaluationPoints.map((item, index) => (
            <article key={item.title} className="vbs-card bg-white p-7">
              <p className="text-sm font-black tracking-[0.18em] text-[#1d4ed8] uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-heading text-2xl text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-600">
          Evaluating a skill through this lens helps reduce impulsive decisions
          and builds a more resilient foundation for long-term growth.
        </p>
      </div>
    </section>
  );
}
