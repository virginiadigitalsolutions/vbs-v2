import { paidTriggers } from "@/components/courses-certifications/courses-data";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";

export default function CoursesFreeVsPaidSection() {
  return (
    <section className="vbs-section bg-[#eef2ff]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Free vs Paid Learning</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[15ch]">
            The right choice depends on your stage, not marketing pressure.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="vbs-card bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
              Free Learning
            </p>
            <h3 className="mt-4 font-heading text-3xl text-slate-900">
              Best for exploration and foundational clarity
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Free resources are effective when the goal is exploration or
              foundational clarity. They allow learners to test interest before
              making financial commitments.
            </p>
          </article>

          <article className="vbs-card bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Paid Learning
            </p>
            <h3 className="mt-4 font-heading text-3xl text-slate-900">
              Best when structure, feedback, and positioning matter
            </h3>
            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
              {paidTriggers.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
