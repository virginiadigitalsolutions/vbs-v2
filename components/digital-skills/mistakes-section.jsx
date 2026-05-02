import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { mistakesData, mistakes } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsMistakesSection() {
  return (
    <section className="vbs-section bg-white relative overflow-hidden" id="mistakes">
      {/* Decorative Warning background */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-rose-50/50 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <SectionEyebrow className="text-rose-600">
            {mistakesData.eyebrow}
          </SectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-[1.1] text-slate-900 sm:text-5xl">
            {mistakesData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">{mistakesData.heading.highlight}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {mistakesData.description}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((mistake, index) => (
            <article 
              key={mistake.title} 
              className="group relative rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-rose-200 animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 100 + 100}ms` }}
            >
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-rose-400 to-orange-400 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start gap-4 mb-4">
                 <div className="flex-shrink-0 mt-1">
                   <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                   </svg>
                 </div>
                 <h3 className="font-heading text-2xl text-slate-900">
                   {mistake.title}
                 </h3>
              </div>
              <p className="text-base leading-7 text-slate-600 ml-10">
                {mistake.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-100 pt-10 text-center animate-fade-in-up delay-300">
          <p className="max-w-2xl mx-auto text-lg leading-8 text-slate-600">
            <span className="font-semibold text-slate-900">Avoiding these mistakes strengthens long-term positioning</span> and reduces unnecessary pivots.
          </p>
        </div>
      </div>
    </section>
  );
}
