import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import Image from "next/image";
import { missionVisionData } from "@/components/about-us/about-us-data";

export default function AboutUsMissionVisionSection() {
  return (
    <section className="vbs-section bg-[#F5F7FA] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-tr from-blue-100/50 to-teal-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AboutUsSectionEyebrow>{missionVisionData.eyebrow}</AboutUsSectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-950 sm:text-5xl">
            {missionVisionData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{missionVisionData.heading.highlight}</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] items-center">
          
          <article className="vbs-card p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-2xl font-black text-blue-700 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
              {missionVisionData.mission.icon}
            </div>
            <h2 className="font-heading text-3xl text-slate-950 mb-4 group-hover:text-blue-700 transition-colors">
              {missionVisionData.mission.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {missionVisionData.mission.description}
            </p>
          </article>

          <div className="relative w-full max-w-[280px] aspect-square mx-auto hidden lg:block animate-pulse-slow">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-teal-300 rounded-full opacity-20 blur-2xl"></div>
             <Image 
               src={missionVisionData.image.src}
               alt={missionVisionData.image.alt}
               fill
               className="object-contain drop-shadow-2xl"
             />
          </div>

          <article className="vbs-card p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 text-2xl font-black text-teal-700 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
              {missionVisionData.vision.icon}
            </div>
            <h2 className="font-heading text-3xl text-slate-950 mb-4 group-hover:text-teal-700 transition-colors">
              {missionVisionData.vision.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {missionVisionData.vision.description}
            </p>
          </article>
          
        </div>
      </div>
    </section>
  );
}
