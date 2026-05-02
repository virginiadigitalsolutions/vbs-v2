import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { clustersData, skillClusters } from "@/components/digital-skills/digital-skills-data";
import Image from "next/image";

const clusterIcons = {
  "Marketing & Growth Skills": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  ),
  "Content & Communication Skills": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
  ),
  "Data & Analytics Skills": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  ),
  "Creative & Production Skills": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
  ),
  "AI & Automation Skills": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  ),
};

export default function DigitalSkillsClustersSection() {
  return (
    <section className="vbs-section bg-white relative" id="clusters">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:items-center">
          <div className="max-w-3xl animate-fade-in-up">
            <SectionEyebrow>{clustersData.eyebrow}</SectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl leading-[1.1] text-slate-900 sm:text-5xl">
              {clustersData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{clustersData.heading.highlight}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {clustersData.description}
            </p>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-[2rem] transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-sm group">
              <Image 
                src={clustersData.image.src}
                alt={clustersData.image.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillClusters.map((cluster, idx) => (
            <article 
              key={cluster.title} 
              className={`group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up delay-${(idx % 3) * 100 + 100}`}
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none ${cluster.accent}" />
              
              <div>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {clusterIcons[cluster.title] || (
                     <span className="text-xl font-black">{cluster.icon}</span>
                  )}
                </div>
                <h3 className="font-heading text-2xl text-slate-900 mb-4">
                  {cluster.title}
                </h3>
                <p className="text-base leading-7 text-slate-600 mb-6">
                  {cluster.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="text-sm font-medium leading-6 text-slate-800">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Who it's for</span>
                  {cluster.fit}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-fade-in-up delay-400">
          <p className="max-w-3xl text-center text-lg leading-8 text-slate-600 bg-slate-50 px-8 py-6 rounded-3xl border border-slate-100">
            <span className="font-semibold text-slate-900">Understanding these clusters is the first step.</span> The next is evaluating which specific skill within a cluster aligns with your goals and long-term adaptability.
          </p>
        </div>
      </div>
    </section>
  );
}
