import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { roleExamples } from "@/components/career-guides/career-guides-data";
import Image from "next/image";

export default function CareerGuidesRolesSection() {
  return (
    <section className="vbs-section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-50/80 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-teal-50/80 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          <div className="max-w-2xl">
            <SectionEyebrow>How Digital Skills Translate Into Roles</SectionEyebrow>
            <h2 className="vbs-heading mt-6 font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
              Behind every role is a combination of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">skills working together</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Digital careers rarely rely on just one skill. They usually combine
              several related capabilities. When you understand that connection,
              career decisions become less confusing.
            </p>
            
            <div className="mt-10 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 opacity-50 rounded-3xl transform -rotate-3 scale-105"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-sm group">
                <Image 
                  src="/images/career_roles.png"
                  alt="Digital Professional Roles"
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {roleExamples.map((role) => (
              <article key={role.title} className="vbs-card p-6 sm:p-8 group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 relative z-10">
                  <div
                    className={`shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br ${role.accent} p-4 w-16 h-16 shadow-inner`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-black text-[#1d4ed8] shadow-sm group-hover:scale-110 transition-transform duration-500">
                      {role.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {role.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
