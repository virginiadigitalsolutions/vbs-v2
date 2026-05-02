import Link from "next/link";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import { directionData } from "@/components/courses-certifications/courses-data";

export default function CoursesDirectionSection() {
  return (
    <section className="vbs-section bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(29,78,216,0.4),_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(15,118,110,0.4),_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md mb-6">
            <span className="text-sm font-bold tracking-widest text-blue-300 uppercase">{directionData.eyebrow}</span>
          </div>
          <h2 className="mt-2 font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            {directionData.heading.prefix} <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">
              {directionData.heading.highlight}
            </span>
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-blue-100/80 max-w-2xl mx-auto">
            {directionData.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <Link
            href="/digital-skills"
            className="group relative rounded-[2rem] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] transition-colors group-hover:bg-white/15"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-black tracking-[0.2em] text-blue-300 uppercase mb-3">
                Start With
              </p>
              <h3 className="font-heading text-4xl font-bold text-white mb-4">
                Digital Skills
              </h3>
              <p className="text-lg leading-relaxed text-blue-100/70 mt-auto">
                Build clarity about the skill itself before choosing a course or certification path. Understand the fundamentals.
              </p>
              
              <div className="mt-8 flex items-center text-blue-300 font-bold group-hover:text-white transition-colors">
                Explore Skills 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href={directionData.button.href}
            className="group relative rounded-[2rem] p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] transition-colors group-hover:bg-white/15"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-8 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-sm font-black tracking-[0.2em] text-teal-300 uppercase mb-3">
                Then Explore
              </p>
              <h3 className="font-heading text-4xl font-bold text-white mb-4">
                Career Guides
              </h3>
              <p className="text-lg leading-relaxed text-blue-100/70 mt-auto">
                See how structured learning connects to role trajectories and long-term professional positioning.
              </p>
              
              <div className="mt-8 flex items-center text-teal-300 font-bold group-hover:text-white transition-colors">
                {directionData.button.label} 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
