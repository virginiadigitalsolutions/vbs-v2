import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import { mistakesData, commonMistakes } from "@/components/courses-certifications/courses-data";
import Image from "next/image";

export default function CoursesMistakesSection() {
  return (
    <section className="vbs-section bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-400/20 to-blue-500/20 opacity-30 blur-2xl transition duration-500 group-hover:opacity-60"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white bg-white/40 backdrop-blur-sm">
                <Image 
                  src="/course_mistakes.png"
                  alt="Overcoming common learning mistakes"
                  width={600}
                  height={500}
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-6">
                  <p className="text-white font-medium text-lg">Finding clarity through structured progression</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionEyebrow>{mistakesData.eyebrow}</SectionEyebrow>
            <h2 className="vbs-heading mt-6 font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
              {mistakesData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">{mistakesData.heading.highlight}</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 mb-10">
              {mistakesData.description}
            </p>

            <div className="grid gap-4">
              {commonMistakes.map((mistake, index) => (
                <article 
                  key={index} 
                  className="vbs-card bg-white p-5 pr-8 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-orange-200 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                    {mistake}
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
