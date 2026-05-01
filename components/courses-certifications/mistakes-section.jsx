import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import { commonMistakes } from "@/components/courses-certifications/courses-data";

export default function CoursesMistakesSection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Common Mistakes in Course Selection</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[15ch]">
            Structured progression reduces avoidable mistakes.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {commonMistakes.map((mistake) => (
            <article key={mistake} className="vbs-card bg-white p-7">
              <p className="text-base leading-7 text-slate-700">{mistake}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
