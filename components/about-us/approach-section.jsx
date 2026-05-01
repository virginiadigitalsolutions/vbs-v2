import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import { approachSteps } from "@/components/about-us/about-us-data";

export default function AboutUsApproachSection() {
  return (
    <section className="vbs-section bg-[linear-gradient(180deg,#E0ECFF_0%,#F8FBFF_100%)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AboutUsSectionEyebrow>Our Approach</AboutUsSectionEyebrow>
        <div className="mt-6 max-w-3xl">
          <h2 className="font-heading text-4xl leading-tight text-slate-950">
            Skills to courses to careers, in one clear progression
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our content follows a simple, structured progression:
            <span className="font-semibold text-slate-900">
              {" "}
              Skills → Courses → Careers
            </span>
            . First, we help you understand which digital skills are
            foundational and sustainable. Next, we guide you through structured
            learning pathways from beginner to advanced stages. Finally, we
            connect those skills and certifications to real career roles,
            growth trajectories, and long-term positioning.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This framework ensures that decisions are intentional rather than
            reactive. Digital growth does not follow a single timeline. Our
            role is to provide clarity at every stage.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {approachSteps.map((step) => (
            <article key={step.title} className="vbs-card p-8">
              <p className="text-sm font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                {step.number}
              </p>
              <h3 className="mt-4 font-heading text-3xl text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
