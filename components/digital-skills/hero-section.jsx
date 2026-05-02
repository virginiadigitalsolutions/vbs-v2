import Image from "next/image";
import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import CTAButton from "@/components/ui/cta-button";
import { heroData } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.08),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.08),_transparent_48%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-50 to-transparent z-0" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 relative z-10">
        
        {/* Text Content */}
        <div className="relative z-10 max-w-3xl animate-fade-in-up">
          <SectionEyebrow>
            {heroData.eyebrow}
          </SectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.08] text-slate-950 sm:text-6xl md:text-[4rem] tracking-tight">
            {heroData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">{heroData.heading.highlight}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
            {heroData.description}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <CTAButton href={heroData.buttons.primary.href} variant="primary">
              {heroData.buttons.primary.label}
            </CTAButton>
            <CTAButton href={heroData.buttons.secondary.href} variant="secondary" showArrow={false}>
              {heroData.buttons.secondary.label}
            </CTAButton>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
             <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <p className="text-sm font-medium text-slate-600">
               Join <span className="text-blue-700 font-bold">{heroData.socialProof.count}</span> {heroData.socialProof.text}
             </p>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up delay-200">
          {/* Main Visual Card */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[500px] rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-teal-50/30 border border-slate-100 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <Image
              src={heroData.image.src}
              alt={heroData.image.alt}
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            
            {/* Floating Elements overlay */}
            <div className="absolute top-8 -left-6 md:-left-12 bg-white/90 backdrop-blur-md border border-slate-200/50 p-4 rounded-2xl shadow-xl animate-[fade-in-up_1s_ease-out_0.5s_both]">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={heroData.floatingBadges[0].iconPath} /></svg>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{heroData.floatingBadges[0].title}</p>
                   <p className="text-sm font-bold text-slate-900">{heroData.floatingBadges[0].subtitle}</p>
                 </div>
               </div>
            </div>

            <div className="absolute bottom-12 -right-4 md:-right-8 bg-white/90 backdrop-blur-md border border-slate-200/50 p-5 rounded-2xl shadow-xl animate-[fade-in-up_1s_ease-out_0.8s_both]">
               <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">{heroData.floatingBadges[1].label}</p>
               <div className="flex items-end gap-2">
                 <span className="text-3xl font-black text-slate-900 leading-none">{heroData.floatingBadges[1].title}</span>
                 <span className="text-sm font-medium text-slate-500 pb-1">{heroData.floatingBadges[1].subtitle}</span>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
