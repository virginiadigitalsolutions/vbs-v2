import { freeVsPaidData, paidTriggers } from "@/components/courses-certifications/courses-data";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import Image from "next/image";

export default function CoursesFreeVsPaidSection() {
  return (
    <section className="vbs-section relative bg-blue-50/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          <div>
            <SectionEyebrow>{freeVsPaidData.eyebrow}</SectionEyebrow>
            <h2 className="vbs-heading mt-6 font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
              {freeVsPaidData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">{freeVsPaidData.heading.highlight}</span> {freeVsPaidData.heading.suffix}
            </h2>
            
            <div className="mt-12 space-y-8">
              <article className="vbs-card relative p-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-300 group-hover:bg-blue-400 transition-colors"></div>
                <p className="text-sm font-black tracking-widest text-slate-500 group-hover:text-blue-600 transition-colors uppercase">
                  Free Learning
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-slate-900">
                  Best for exploration and foundational clarity
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {freeVsPaidData.freeDescription}
                </p>
              </article>

              <article className="vbs-card relative p-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-300 group-hover:bg-teal-500 transition-colors"></div>
                <p className="text-sm font-black tracking-widest text-slate-500 group-hover:text-teal-600 transition-colors uppercase">
                  Paid Learning
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-slate-900">
                  Best when structure, feedback, and positioning matter
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 mb-6">
                  {freeVsPaidData.paidDescription}
                </p>
                <ul className="space-y-3">
                  {paidTriggers.map((item) => (
                    <li key={item} className="flex items-start text-base leading-relaxed text-slate-600">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full max-w-lg mx-auto">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 to-teal-400 opacity-20 blur-2xl transition duration-500 group-hover:opacity-40"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-2xl backdrop-blur-sm">
                <Image 
                  src="/course_freepaid.png"
                  alt="Free vs Paid Learning Comparison"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
