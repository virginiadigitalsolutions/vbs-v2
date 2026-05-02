import Image from "next/image";
import SectionLabel from "@/components/home/section-label";
import { confusionData, confusionPoints } from "@/components/home/home-data";

export default function ConfusionSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15)_0%,transparent_60%)] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 relative z-10">
        <div>
          <SectionLabel className="bg-white/10 text-slate-200 border-white/20 backdrop-blur-md px-4 py-1 rounded-full inline-block">{confusionData.eyebrow}</SectionLabel>
          <h2 className="mt-6 font-heading text-4xl sm:text-6xl font-black leading-tight text-white opacity-0 animate-fade-in-up delay-100">
            {confusionData.heading.line1}
            <br />
            <span className="text-slate-400">{confusionData.heading.line2}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{confusionData.heading.line3}</span>
          </h2>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-300 opacity-0 animate-fade-in-up delay-200">
            {confusionData.description}
          </p>
          <div className="mt-12 space-y-6 opacity-0 animate-fade-in-up delay-300">
            {confusionPoints.map((point, index) => (
              <div key={point} className="flex gap-5 items-start group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner text-lg font-black text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-400 transition-all duration-300">
                  0{index + 1}
                </div>
                <p className="text-lg leading-relaxed text-slate-300 mt-2 group-hover:text-white transition-colors">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in-up delay-400 lg:pl-10">
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-400/20 to-blue-500/20 rounded-[3rem] transform -rotate-3 scale-105 blur-2xl" />
          
          <div className="relative vbs-card !bg-white/10 backdrop-blur-2xl p-6 lg:p-8 shadow-2xl border border-white/20 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold tracking-widest uppercase text-slate-300 border border-white/10">
                {confusionData.image.badge}
              </span>
            </div>
            
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-2">
              <Image
                src={confusionData.image.src}
                alt={confusionData.image.alt}
                width={760}
                height={620}
                className="h-auto w-full rounded-[1rem] opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="absolute -left-6 top-1/3 animate-pulse-slow">
               <div className="bg-red-500/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-red-400">
                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
