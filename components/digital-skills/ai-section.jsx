import Image from "next/image";
import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { aiData, aiExamples } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsAiSection() {
  return (
    <section className="vbs-section bg-[#f8fafc] relative overflow-hidden" id="ai-impact">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-tr from-blue-600/10 to-teal-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:items-center">
          
          <div className="animate-fade-in-up">
            <SectionEyebrow>{aiData.eyebrow}</SectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl leading-[1.1] text-slate-900 sm:text-5xl">
              {aiData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">{aiData.heading.highlight}</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                {aiData.description}
              </p>
              <div className="p-6 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-500 rounded-l-[1.5rem]" />
                 <p className="font-medium text-slate-800">
                   "The shift is not about competing with automation, but learning how to integrate it effectively."
                 </p>
              </div>
              <p>
                Digital professionals who understand how AI augments their skill set are better positioned for long-term adaptability. When evaluating a skill today, it is no longer enough to ask whether it is in demand. The more important question is how that skill evolves alongside intelligent tools.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200">
             {/* AI Image / Graphic */}
             <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
               <Image 
                 src={aiData.image.src} 
                 alt={aiData.image.alt} 
                 fill 
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    AI Integration
                  </div>
                  <h3 className="text-xl font-bold text-white">Augmenting Human Capability</h3>
               </div>
             </div>
             
             {/* Dynamic Examples */}
             <div className="space-y-4 relative">
                <div className="absolute -left-4 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
                {aiExamples.map((example, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6"
                  >
                    <div className="absolute left-[-1.15rem] top-2.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <p className="text-base leading-7 text-slate-700 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      {example}
                    </p>
                  </div>
                ))}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
