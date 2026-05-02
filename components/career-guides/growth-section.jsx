import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { growthData, growthFactors } from "@/components/career-guides/career-guides-data";
import Image from "next/image";

export default function CareerGuidesGrowthSection() {
  return (
    <section className="vbs-section bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="vbs-card overflow-hidden p-0 rounded-[2.5rem] bg-white shadow-2xl shadow-blue-900/5 border border-slate-100">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            
            <div className="p-8 lg:p-14 lg:pr-10">
              <SectionEyebrow>{growthData.eyebrow}</SectionEyebrow>
              <h2 className="vbs-heading mt-6 font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
                {growthData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{growthData.heading.highlight}</span> {growthData.heading.suffix}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  {growthData.description}
                </p>
                <p className="font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 py-1">
                  Long-term growth depends less on certificates and more on
                  demonstrable capability and adaptability.
                </p>
              </div>
              
              <div className="mt-10 relative rounded-2xl overflow-hidden shadow-lg shadow-teal-900/10 group">
                <Image 
                  src={growthData.image.src}
                  alt={growthData.image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-8 lg:p-14 lg:pl-10 flex flex-col justify-center">
              <div className="grid gap-5">
                {growthFactors.map((factor, index) => (
                  <div
                    key={factor}
                    className="group flex gap-5 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold font-heading text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-2 group-hover:text-blue-500 transition-colors">
                        Factor 0{index + 1}
                      </p>
                      <p className="text-base leading-relaxed text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{factor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
