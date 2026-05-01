import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import { evaluationChecks } from "@/components/courses-certifications/courses-data";

export default function CoursesEvaluationSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card overflow-hidden p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow>How to Evaluate Any Course or Certification</SectionEyebrow>
              <h2 className="vbs-heading mt-6 max-w-[14ch]">
                Discipline in evaluation prevents wasted effort.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Before enrolling, ask whether the learning path is structured,
                practical, relevant, and aligned with your long-term direction.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Evaluating courses with discipline prevents wasted effort and
                unnecessary switching.
              </p>
            </div>

            <div className="grid gap-4">
              {evaluationChecks.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-black tracking-[0.18em] text-[#1d4ed8] uppercase">
                    Check 0{index + 1}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
