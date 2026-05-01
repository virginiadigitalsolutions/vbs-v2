import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { mistakes } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsMistakesSection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Common Mistakes When Choosing Digital Skills</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[15ch]">
            Better access to learning does not automatically create better
            decisions.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The availability of online courses and tutorials has made digital
            learning more accessible than ever. However, accessibility does not
            eliminate poor decision-making. Some common mistakes include:
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((mistake) => (
            <article key={mistake.title} className="vbs-card bg-white p-7">
              <h3 className="font-heading text-2xl text-slate-900">
                {mistake.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {mistake.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-600">
          Avoiding these mistakes strengthens long-term positioning and reduces
          unnecessary pivots.
        </p>
      </div>
    </section>
  );
}
