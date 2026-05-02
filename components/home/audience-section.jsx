import Image from "next/image";
import SectionLabel from "@/components/home/section-label";
import { audienceData, audienceCards } from "@/components/home/home-data";

export default function AudienceSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel className="mx-auto bg-white shadow-sm border border-slate-100 px-4 py-1 rounded-full">{audienceData.eyebrow}</SectionLabel>
          <h2 className="vbs-heading mt-6 font-heading text-4xl sm:text-5xl font-bold leading-tight text-slate-900 opacity-0 animate-fade-in-up delay-100">
            {audienceData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{audienceData.heading.highlight}</span>
          </h2>
        </div>
        
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {audienceCards.map((card, idx) => (
            <article
              key={card.title}
              className={`relative vbs-card group p-8 bg-white/80 backdrop-blur-xl border border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up delay-${(idx + 2) * 100}`}
            >
              <div
                className={`absolute -right-12 -top-12 h-64 w-64 rounded-full blur-3xl opacity-20 ${card.tint} transition-transform group-hover:scale-110 duration-700 pointer-events-none`}
              />

              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-50 p-2 border border-slate-100 z-10 group-hover:border-blue-100 transition-colors">
                <div
                  className={`absolute left-4 top-4 rounded-xl px-4 py-2 text-sm font-black shadow-md border border-white/60 backdrop-blur-md z-20 ${card.iconWrap}`}
                >
                  {card.icon}
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={card.image}
                    alt={`${card.title} illustration`}
                    width={560}
                    height={360}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <h3 className="mt-8 font-heading text-2xl font-bold text-slate-900 relative z-10 group-hover:text-blue-700 transition-colors">
                {card.title}
              </h3>
              
              <div className="mt-5 space-y-4 relative z-10">
                {card.points.map((point, pointIdx) => (
                  <div key={pointIdx} className="flex items-start gap-3">
                     <svg className="w-5 h-5 shrink-0 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     <p className="text-base leading-relaxed text-slate-600 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
