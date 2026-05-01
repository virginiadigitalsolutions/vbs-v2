import SectionLabel from "@/components/home/section-label";
import { evaluationPoints } from "@/components/home/home-data";

export default function EvaluationSection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card relative overflow-hidden !bg-white p-10 lg:p-16 border-none shadow-xl">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#eef2ff] to-transparent opacity-50" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel>Evaluation Criteria</SectionLabel>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-900 sm:text-5xl opacity-0 animate-fade-in-up delay-100">
                Every suggestion should earn trust before it earns attention.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 opacity-0 animate-fade-in-up delay-200">
                Recommendations are judged by relevance, depth, structure,
                long-term value, and whether they match the learner&apos;s stage.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 opacity-0 animate-fade-in-up delay-300">
              {evaluationPoints.slice(0, 4).map((item) => (
                <article
                  key={item.title}
                  className="vbs-mini-card !bg-slate-50 border-slate-100"
                >
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
