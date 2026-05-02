import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import {
  differenceData,
  differencePoints,
  focusPoints,
} from "@/components/about-us/about-us-data";

export default function AboutUsDifferenceSection() {
  return (
    <section className="vbs-section bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 relative z-10">
        <article className="vbs-card p-8 lg:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <AboutUsSectionEyebrow>{differenceData.eyebrow}</AboutUsSectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
              {differenceData.heading.prefix} <span className="text-red-500/80 line-through decoration-red-500/40 decoration-4">shortcuts</span> or hype
            </h2>
            <div className="mt-10 space-y-4">
              {differencePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/20 blur-3xl rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
               <p className="text-xs font-bold tracking-[0.2em] text-teal-300 uppercase">
                 {differenceData.focusCard.eyebrow}
               </p>
            </div>
            
            <h2 className="mt-4 font-heading text-3xl font-bold text-white mb-8">
              {differenceData.focusCard.heading}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-teal-300 mb-4">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-blue-50">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xl leading-relaxed text-blue-100 font-medium">
                {differenceData.focusCard.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
