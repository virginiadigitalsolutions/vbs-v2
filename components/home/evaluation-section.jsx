import SectionLabel from "@/components/home/section-label";
import { evaluationData, evaluationPoints } from "@/components/home/home-data";

export default function EvaluationSection() {
  return (
    <section className="vbs-section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="vbs-card relative overflow-hidden !bg-white p-10 lg:p-16 border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.05)] rounded-[3rem]">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#eef2ff]/50 to-transparent opacity-80" />
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl" />
          
          <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-xl">
              <SectionLabel className="bg-white border border-slate-100 shadow-sm px-4 py-1 rounded-full">{evaluationData.eyebrow}</SectionLabel>
              <h2 className="mt-8 font-heading text-4xl leading-[1.1] text-slate-900 sm:text-5xl font-black opacity-0 animate-fade-in-up delay-100">
                {evaluationData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{evaluationData.heading.highlight}</span> {evaluationData.heading.suffix}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-600 opacity-0 animate-fade-in-up delay-200">
                {evaluationData.description}
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 opacity-0 animate-fade-in-up delay-300 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
              {evaluationPoints.slice(0, 4).map((item, idx) => (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${idx % 2 === 1 ? 'sm:mt-8' : ''}`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-50 transition-colors">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
