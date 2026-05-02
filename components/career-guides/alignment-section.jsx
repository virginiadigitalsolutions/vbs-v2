import Link from "next/link";
import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import CTAButton from "@/components/ui/cta-button";
import { alignmentData } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesAlignmentSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(29,78,216,0.05),_transparent_60%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-[3rem] bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-10 shadow-[0_30px_60px_-15px_rgba(29,78,216,0.3)] lg:p-16">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2)_0%,transparent_60%)] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-md mb-6">
                 <p className="text-sm font-bold tracking-[0.18em] text-teal-300 uppercase">{alignmentData.eyebrow}</p>
              </div>
              <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200">{alignmentData.heading.highlight}</span> {alignmentData.heading.suffix}
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-blue-50/90 font-medium">
                {alignmentData.paragraphs.map((p) => (
                  <p key={p.substring(0, 30)}>{p}</p>
                ))}
                <p className="text-white border-l-4 border-teal-400 pl-4 bg-white/5 py-2 rounded-r-xl">
                  {alignmentData.callout}
                </p>
              </div>
            </div>

            {/* Right Content - Cards */}
            <div className="grid gap-6 sm:grid-cols-1">
              {alignmentData.cards.map((card, idx) => (
                <div key={card.title} className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
                  <div className={`absolute ${idx === 0 ? 'top-0 right-0' : 'bottom-0 right-0'} w-32 h-32 ${idx === 0 ? 'bg-blue-400/20' : 'bg-teal-400/20'} rounded-full blur-2xl transform ${idx === 0 ? 'translate-x-1/2 -translate-y-1/2' : 'translate-x-1/3 translate-y-1/3'} group-hover:${idx === 0 ? 'bg-blue-400/30' : 'bg-teal-400/30'} transition-colors`} />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {idx === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <p className={`text-xs font-bold tracking-[0.18em] ${idx === 0 ? 'text-teal-300' : 'text-blue-300'} uppercase`}>
                        {card.eyebrow}
                      </p>
                      <h3 className="font-heading text-2xl text-white mt-1">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-blue-50/80 mb-6">
                    {card.description}
                  </p>
                  <CTAButton href={card.buttonHref} variant="light" className="w-full !px-6 !py-3 !text-sm">
                    {card.buttonLabel}
                  </CTAButton>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
