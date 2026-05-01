import SectionEyebrow from "@/components/career-guides/section-eyebrow";

export default function CareerGuidesClaritySection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionEyebrow>Why Career Clarity Matters</SectionEyebrow>
            <h2 className="vbs-heading mt-6 max-w-[14ch]">
              Learning gains meaning when it connects to real roles.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Choosing a digital skill or course is only part of the equation.
              Understanding how that skill connects to real job roles and
              long-term growth provides essential context.
            </p>
            <p>
              Without this connection, learning can feel disconnected from
              practical outcomes.
            </p>
            <p>
              Digital careers are not defined by titles alone. They are shaped
              by skill combinations, experience depth, and adaptability to
              technological shifts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
