import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/home/section-label";
import CTAButton from "@/components/ui/cta-button";
import { heroData } from "@/components/home/home-data";

export default function HeroSection() {
  return (
    <section className="vbs-section min-h-[90vh] flex items-center relative overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-gradient-to-bl from-teal-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl opacity-80 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/60 via-teal-50/40 to-transparent rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 relative z-10 pt-10">
        <div className="relative z-10 max-w-3xl">
          <SectionLabel className="mb-6 inline-block bg-white shadow-sm border border-slate-100 rounded-full px-4 py-1">{heroData.eyebrow}</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] text-slate-900 opacity-0 animate-fade-in-up delay-100">
            {heroData.heading.prefix}{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500">{heroData.heading.highlight}</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-teal-100/50 -z-10 rounded-full blur-sm"></span>
            </span>
            <br className="hidden sm:block" />
            <span className="text-slate-800">{heroData.heading.suffix}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-slate-600 opacity-0 animate-fade-in-up delay-200">
            {heroData.description}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300">
            <CTAButton href={heroData.buttons.primary.href} variant="primary">
              {heroData.buttons.primary.label}
            </CTAButton>
            <CTAButton href={heroData.buttons.secondary.href} variant="secondary" showArrow={false}>
              {heroData.buttons.secondary.label}
            </CTAButton>
          </div>

          <div className="mt-16 grid max-w-2xl gap-6 sm:grid-cols-3 opacity-0 animate-fade-in-up delay-400">
            {heroData.featureCards.map((card) => (
              <div key={card.title} className="group relative rounded-2xl bg-white p-5 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-5 w-10 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} /></svg>
                </div>
                <p className="text-sm font-bold text-slate-900">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in-up delay-500 lg:pl-10">
          {/* Decorative glow behind the image */}
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-blue-400/30 to-teal-300/30 blur-2xl transform rotate-3 scale-105" />
          
          <div className="relative vbs-card p-4 lg:p-6 bg-white/60 backdrop-blur-xl border border-white shadow-2xl">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-widest uppercase text-blue-600 border border-blue-100">
                {heroData.heroImage.badge}
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-50 p-2">
              <Image
                src={heroData.heroImage.src}
                alt={heroData.heroImage.alt}
                width={720}
                height={560}
                className="h-auto w-full rounded-xl transition-transform duration-700 hover:scale-105 object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-10 animate-bounce-slow">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-4 pr-6">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{heroData.floatingBadge.label}</p>
                <p className="text-sm font-black text-slate-900">{heroData.floatingBadge.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
