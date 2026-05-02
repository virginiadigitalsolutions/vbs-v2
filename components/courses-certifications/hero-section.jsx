import Image from "next/image";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import CTAButton from "@/components/ui/cta-button";
import { heroData } from "@/components/courses-certifications/courses-data";

export default function CoursesHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.1),_transparent_60%),radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.1),_transparent_60%)] opacity-80" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <SectionEyebrow>{heroData.eyebrow}</SectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl font-black tracking-tight leading-[1.1] text-slate-900 sm:text-6xl lg:text-[4rem]">
            {heroData.heading.prefix} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
              {heroData.heading.highlight}
            </span>
            <br className="hidden sm:block" /> {heroData.heading.suffix}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600 font-medium">
            {heroData.description}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 border-l-4 border-blue-600 pl-6 bg-white/50 p-6 rounded-r-2xl shadow-sm backdrop-blur-sm">
            {heroData.paragraphs.map((p) => (
              <p key={p.substring(0, 30)}>{p}</p>
            ))}
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="#learning-stages" variant="primary">
              {heroData.buttons.primary.label}
            </CTAButton>
            <CTAButton href="#evaluation" variant="secondary" showArrow={false}>
              {heroData.buttons.secondary.label}
            </CTAButton>
          </div>
        </div>

        <div className="relative z-10 lg:ml-auto">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 opacity-30 blur-2xl transition duration-500 group-hover:opacity-50"></div>
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/40 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="overflow-hidden rounded-2xl bg-white">
                <Image
                  src={heroData.image.src}
                  alt={heroData.image.alt}
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            
            {/* Floating Badges */}
            {heroData.floatingBadges.map((badge, idx) => (
              <div key={badge.title} className={`absolute ${idx === 0 ? '-left-8 top-1/4 animate-bounce-slow' : '-right-8 bottom-1/4 animate-bounce-slow-reverse'} hidden sm:block`}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${badge.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-teal-100 text-teal-700'}`}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{badge.title}</p>
                    <p className="text-xs text-slate-500">{badge.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
