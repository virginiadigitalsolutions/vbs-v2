import Link from "next/link";
import SectionEyebrow from "@/components/digital-skills/section-eyebrow";

export default function DigitalSkillsNextStepsSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-8 text-white lg:p-10">
          <SectionEyebrow>Where to Go Next</SectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-white sm:text-5xl">
            Clarity begins with choosing the right skill. Progress continues
            with learning it strategically and applying it with intention.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-50/90">
            Once you&apos;ve identified which skill cluster aligns with your
            interests and strengths, the next step is structured learning.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/courses-certifications"
              className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/16"
            >
              <p className="text-sm font-bold tracking-[0.18em] text-sky-100 uppercase">
                Next Step
              </p>
              <h3 className="mt-3 font-heading text-3xl text-white">
                Courses & Certifications
              </h3>
              <p className="mt-3 text-base leading-7 text-sky-50/90">
                Explore curated learning paths and certifications that build
                depth and practical credibility.
              </p>
            </Link>

            <Link
              href="/career-guides"
              className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/16"
            >
              <p className="text-sm font-bold tracking-[0.18em] text-sky-100 uppercase">
                Then Explore
              </p>
              <h3 className="mt-3 font-heading text-3xl text-white">
                Career Guides
              </h3>
              <p className="mt-3 text-base leading-7 text-sky-50/90">
                Understand how specific skills translate into real roles, growth
                trajectories, and long-term positioning.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
