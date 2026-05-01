import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";

export default function CoursesStructureSection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionEyebrow>Why Course Selection Requires Structure</SectionEyebrow>
            <h2 className="vbs-heading mt-6 max-w-[14ch]">
              Clear progression turns scattered learning into usable expertise.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Online education has expanded rapidly across platforms and
              providers. Introductory tutorials, bootcamps, certification
              programs, and advanced specializations are all available, often
              without clarity on depth or expected outcomes.
            </p>
            <p>
              Without structure, learners risk investing time in fragmented
              modules that do not connect into usable expertise.
            </p>
            <p>
              Clear progression ensures that each stage builds on the previous
              one and contributes to long-term competence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
