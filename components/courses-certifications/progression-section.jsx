import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import { learningStages } from "@/components/courses-certifications/courses-data";
import Image from "next/image";

export default function CoursesProgressionSection() {
  return (
    <section className="vbs-section relative bg-white" id="learning-stages">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-teal-50/50 blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          <div className="max-w-2xl">
            <SectionEyebrow>A Structured Learning Progression</SectionEyebrow>
            <h2 className="vbs-heading mt-6 font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
              Digital learning works best when approached in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">stages</span>.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              A clear progression ensures that each stage builds upon the previous one, contributing to long-term competence and practical capability. 
            </p>
            
            <div className="mt-10 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 opacity-50 rounded-3xl transform -rotate-3 scale-105"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-sm group">
                <Image 
                  src="/course_progression.png"
                  alt="Career growth and progression"
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {learningStages.map((stage, index) => (
              <article key={stage.title} className="vbs-card p-6 sm:p-8 group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 relative z-10">
                  <div
                    className={`shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br ${stage.accent} p-4 w-16 h-16 shadow-inner`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-black text-[#1d4ed8] shadow-sm">
                      {stage.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-700">
                      {stage.objective}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {stage.description}
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span> Best suited for
                        </p>
                        <ul className="space-y-1.5 text-sm text-slate-600">
                          {stage.suitedFor.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mr-2 text-blue-500">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-700"></span> Approach
                        </p>
                        <ul className="space-y-1.5 text-sm text-slate-600">
                          {stage.approach.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mr-2 text-teal-500">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 inline-block rounded-xl bg-slate-50 border border-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700">
                      {stage.closing}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
