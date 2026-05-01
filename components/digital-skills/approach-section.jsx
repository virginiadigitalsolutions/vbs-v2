import Image from "next/image";
import SectionEyebrow from "@/components/digital-skills/section-eyebrow";

export default function DigitalSkillsApproachSection() {
  return (
    <section className="vbs-section bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-50/60 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1 h-[400px] lg:h-[600px] w-full animate-fade-in-up">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-teal-500/5 rounded-[2.5rem] transform -rotate-3 scale-105" />
             <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                <Image 
                  src="/images/approach_illustration.png"
                  alt="Structured Approach"
                  fill
                  className="object-cover object-center"
                />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex flex-col items-center justify-center gap-1">
                   <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-2">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                   </div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Methodical</p>
                   <p className="text-sm font-black text-slate-800">Learning</p>
                </div>
             </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 animate-fade-in-up delay-200">
            <SectionEyebrow>
              Structured Approach
            </SectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl leading-[1.1] text-slate-900 sm:text-5xl">
              Sustainable growth depends on <span className="text-blue-700">layered capability</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                The digital ecosystem expands constantly. New platforms emerge, automation reshapes processes, and short-form content often amplifies simplified success stories. This creates the illusion that learning a single tool or completing one course is enough.
              </p>
              
              <div className="pl-6 border-l-2 border-blue-600 py-2 my-8">
                 <p className="text-xl font-medium text-slate-800 italic">
                   "In reality, sustainable growth depends on building layered capability. Foundational thinking, practical application, and adaptability to AI-driven changes matter more than isolated trends."
                 </p>
              </div>

              <p>
                Without structure, it becomes easy to invest time in skills that lack long-term relevance. Clarity begins by understanding how skills connect, not just what they are called.
              </p>
            </div>
            
            <div className="mt-10">
               <div className="inline-flex items-center gap-4 p-4 pr-6 bg-white rounded-full shadow-sm border border-slate-200">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <p className="font-semibold text-slate-800">Focus on foundational principles</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
