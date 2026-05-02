import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { evaluationData, evaluationPoints } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsEvaluationSection() {
  return (
    <section className="vbs-section bg-slate-900 text-white relative overflow-hidden" id="evaluation">
      {/* Dark mode background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <SectionEyebrow className="text-blue-400">
            {evaluationData.eyebrow}
          </SectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-[1.1] text-white sm:text-5xl">
            {evaluationData.heading.prefix} <span className="text-blue-400">{evaluationData.heading.highlight}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {evaluationData.description}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {evaluationPoints.map((item, index) => (
            <article 
              key={item.title} 
              className="group relative rounded-[2rem] bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 transition-colors hover:bg-slate-800 animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 100 + 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-black text-blue-400 border border-blue-500/20">
                   {index + 1}
                 </div>
                 <h3 className="font-heading text-xl text-white leading-tight">
                   {item.title}
                 </h3>
              </div>
              <p className="text-base leading-7 text-slate-400">
                {item.text}
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-[2rem] p-1 animate-fade-in-up delay-300">
          <div className="bg-slate-900 rounded-[1.85rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <p className="text-xl leading-8 text-slate-200">
                Evaluating a skill through this lens helps reduce impulsive decisions and builds a more resilient foundation for long-term growth.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors">
              Start Evaluating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
