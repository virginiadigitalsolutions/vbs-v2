import SectionEyebrow from "@/components/digital-skills/section-eyebrow";

export default function DigitalSkillsApproachSection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionEyebrow>
              Why Digital Skills Require a Structured Approach
            </SectionEyebrow>
            <h2 className="vbs-heading mt-6 max-w-[14ch]">
              Sustainable growth depends on layered capability, not isolated
              trends.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The digital ecosystem expands constantly. New platforms emerge,
              automation reshapes processes, and short-form content often
              amplifies simplified success stories.
            </p>
            <p>
              This creates the illusion that learning a single tool or
              completing one course is enough.
            </p>
            <p>
              In reality, sustainable growth depends on building layered
              capability. Foundational thinking, practical application, and
              adaptability to AI-driven changes matter more than isolated
              trends.
            </p>
            <p>
              Without structure, it becomes easy to invest time in skills that
              lack long-term relevance. Clarity begins by understanding how
              skills connect, not just what they are called.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
