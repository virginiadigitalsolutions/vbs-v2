import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { skillClusters } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsClustersSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Core Digital Skill Clusters</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[15ch]">
            Understand the categories before focusing on specific tools.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Digital skills are easier to evaluate when grouped into broader
            categories. Instead of focusing on individual tools or trending
            platforms, it helps to understand how different skills function
            within the larger digital ecosystem. Below are the primary clusters
            that shape most digital roles today.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillClusters.map((cluster) => (
            <article key={cluster.title} className="vbs-card p-7">
              <div
                className={`rounded-[1.35rem] bg-gradient-to-br ${cluster.accent} p-5`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#1d4ed8] shadow-sm">
                  {cluster.icon}
                </div>
                <h3 className="mt-5 font-heading text-3xl text-slate-900">
                  {cluster.title}
                </h3>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-600">
                {cluster.description}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {cluster.fit}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-600">
          Understanding these clusters is the first step. The next is
          evaluating which specific skill within a cluster aligns with your
          goals and long-term adaptability.
        </p>
      </div>
    </section>
  );
}
