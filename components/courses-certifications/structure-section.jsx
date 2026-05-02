import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import Image from "next/image";
import { structureData } from "@/components/courses-certifications/courses-data";

export default function CoursesStructureSection() {
  return (
    <section className="vbs-section bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          <div className="order-2 lg:order-1 relative group perspective-1000">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-3xl opacity-20 blur-xl transition duration-500 group-hover:opacity-40"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white bg-white/50 backdrop-blur-sm">
              <Image 
                src="/course_structure.png"
                alt="Structured learning framework"
                width={700}
                height={500}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionEyebrow>{structureData.eyebrow}</SectionEyebrow>
            <h2 className="vbs-heading mt-6 font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
              {structureData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{structureData.heading.highlight}</span> {structureData.heading.suffix}
            </h2>
            
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full"></div>
              <div className="pl-6">
                <p>
                  {structureData.description}
                </p>
                <p className="mt-4 font-semibold text-slate-800">
                  Clear progression ensures that each stage builds on the previous
                  one and contributes to long-term competence.
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4 flex-wrap">
              {structureData.stages.map((stage) => (
                <div key={stage.label} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100">
                  <div className={`w-2 h-2 rounded-full ${
                    stage.color === 'blue' ? 'bg-blue-500' : 
                    stage.color === 'teal' ? 'bg-teal-500' : 'bg-purple-500'
                  }`}></div>
                  <span className="text-sm font-bold text-slate-700">{stage.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
