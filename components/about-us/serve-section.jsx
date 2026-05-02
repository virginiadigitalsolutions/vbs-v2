import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import { serveData, serveGroups } from "@/components/about-us/about-us-data";

export default function AboutUsServeSection() {
  return (
    <section className="vbs-section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] bg-gradient-to-bl from-teal-50/80 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <AboutUsSectionEyebrow>{serveData.eyebrow}</AboutUsSectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
            {serveData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{serveData.heading.highlight}</span> {serveData.heading.suffix}
          </h2>
          <div className="mt-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full"></div>
            <p className="pl-6 text-lg leading-relaxed text-slate-600">
              {serveData.description}
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
             <div className="flex -space-x-3">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={`User ${i}`} width={40} height={40} className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <p className="text-sm font-medium text-slate-500">
               {serveData.socialProof} <span className="font-bold text-slate-800">{serveData.socialProofHighlight}</span>.
             </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-3xl opacity-30 transform rotate-3 scale-105"></div>
          {serveGroups.map((group, index) => (
            <article
              key={group}
              className={`relative vbs-card p-6 lg:p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index % 2 === 0 ? "bg-white/90 backdrop-blur-sm border border-slate-100" : "bg-slate-50/90 backdrop-blur-sm border border-slate-200/60"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 text-lg font-black text-blue-600 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                0{index + 1}
              </div>
              <p className="mt-5 text-base font-medium leading-relaxed text-slate-700 group-hover:text-slate-900 transition-colors">
                {group}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
