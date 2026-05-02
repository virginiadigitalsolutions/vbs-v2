import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import Image from "next/image";
import { heroData } from "@/components/about-us/about-us-data";

export default function AboutUsHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.1),_transparent_60%),radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.1),_transparent_60%)] opacity-80" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        
        <div className="relative z-10 max-w-3xl animate-fade-in-up">
          <AboutUsSectionEyebrow>
            {heroData.eyebrow}
          </AboutUsSectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl font-black tracking-tight leading-[1.1] text-slate-900 sm:text-6xl lg:text-[4rem]">
            {heroData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">{heroData.heading.highlight}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600 font-medium">
            {heroData.description}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 border-l-4 border-blue-600 pl-6 bg-slate-50/50 p-6 rounded-r-2xl shadow-sm backdrop-blur-sm">
            {heroData.paragraphs.map((p) => (
              <p key={p.substring(0, 30)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:ml-auto animate-fade-in-up delay-200 w-full">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-teal-500 opacity-30 blur-2xl transition duration-500 group-hover:opacity-50"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/40 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[2rem] bg-white relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src={heroData.image.src}
                  alt={heroData.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Card Overlay */}
            <div className="absolute -bottom-10 -left-6 sm:-left-12 lg:-left-20 max-w-[280px] sm:max-w-xs animate-bounce-slow">
              <div className="rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                 <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
                   Our Purpose
                 </p>
                 <ul className="space-y-2">
                   {heroData.purposePoints.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                       <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
