import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { mistakesData, progressionMistakes } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesMistakesSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{mistakesData.eyebrow}</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[20ch]">
            {mistakesData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{mistakesData.heading.highlight}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {mistakesData.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {progressionMistakes.map((mistake) => (
            <article key={mistake} className="vbs-card group bg-white p-7 hover:border-red-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-400 mt-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <p className="text-base leading-7 text-slate-700 font-medium group-hover:text-slate-900">{mistake}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
