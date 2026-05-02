import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import { approachData, approachSteps } from "@/components/about-us/about-us-data";
import Image from "next/image";

export default function AboutUsApproachSection() {
  return (
    <section className="vbs-section bg-[linear-gradient(180deg,#E0ECFF_0%,#F8FBFF_100%)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-200/40 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:items-center">
          <div className="max-w-3xl">
            <AboutUsSectionEyebrow>{approachData.eyebrow}</AboutUsSectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl sm:text-5xl font-bold leading-tight text-slate-950">
              {approachData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{approachData.heading.highlight}</span>
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-slate-600 space-y-6">
              <p>
                Our content follows a simple, structured progression:
                <span className="inline-flex items-center gap-2 px-3 py-1 ml-2 rounded-full bg-blue-100/50 text-blue-700 font-bold text-sm border border-blue-200">
                  Skills
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  Courses
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  Careers
                </span>
              </p>
              <p>
                {approachData.description}
              </p>
              <p className="pl-4 border-l-4 border-blue-500 font-medium text-slate-800">
                This framework ensures that decisions are intentional rather than
                reactive. Digital growth does not follow a single timeline. Our
                role is to provide clarity at every stage.
              </p>
            </div>
          </div>

          <div className="relative group perspective-1000 mt-10 lg:mt-0">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-teal-300 opacity-20 blur-xl rounded-3xl transition duration-500 group-hover:opacity-40"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 shadow-2xl backdrop-blur-sm p-4">
              <div className="rounded-2xl overflow-hidden bg-white">
                <Image 
                  src={approachData.image.src}
                  alt={approachData.image.alt}
                  width={600}
                  height={500}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {approachSteps.map((step, index) => (
            <article key={step.title} className="vbs-card p-8 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="font-heading text-8xl font-black text-blue-600">{index + 1}</span>
              </div>
              <p className="text-sm font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4 inline-block bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                {step.number}
              </p>
              <h3 className="font-heading text-2xl font-bold text-slate-950 group-hover:text-blue-700 transition-colors relative z-10">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 relative z-10">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
