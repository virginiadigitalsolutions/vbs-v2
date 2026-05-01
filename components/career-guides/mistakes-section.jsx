import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { progressionMistakes } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesMistakesSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Mistakes That Slow Career Progression</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[14ch]">
            Career clarity reduces unnecessary pivots.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {progressionMistakes.map((mistake) => (
            <article key={mistake} className="vbs-card bg-white p-7">
              <p className="text-base leading-7 text-slate-700">{mistake}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
