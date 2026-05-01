import Link from "next/link";
import SectionEyebrow from "@/components/career-guides/section-eyebrow";

export default function CareerGuidesAlignmentSection() {
  return (
    <section className="vbs-section bg-[#eef2ff]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-8 text-white lg:p-10">
          <SectionEyebrow>Aligning Skills, Courses, and Career Direction</SectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-white sm:text-5xl">
            Progress becomes intentional when skills, learning, and role
            direction connect.
          </h2>
          <div className="mt-6 space-y-5 max-w-4xl text-lg leading-8 text-sky-50/90">
            <p>
              Strong career progression begins with choosing the right skill
              foundation and building it through structured learning.
            </p>
            <p>
              Understanding digital skills provides clarity at the starting
              point. Structured courses strengthen application. Career awareness
              aligns those efforts with long-term outcomes.
            </p>
            <p>
              When these three elements connect, progression becomes intentional
              rather than reactive.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/digital-skills"
              className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/16"
            >
              <p className="text-sm font-bold tracking-[0.18em] text-sky-100 uppercase">
                Foundation
              </p>
              <h3 className="mt-3 font-heading text-3xl text-white">
                Digital Skills
              </h3>
              <p className="mt-3 text-base leading-7 text-sky-50/90">
                Understand the skills and capabilities that shape modern digital
                roles.
              </p>
            </Link>

            <Link
              href="/courses-certifications"
              className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/16"
            >
              <p className="text-sm font-bold tracking-[0.18em] text-sky-100 uppercase">
                Application
              </p>
              <h3 className="mt-3 font-heading text-3xl text-white">
                Courses & Certifications
              </h3>
              <p className="mt-3 text-base leading-7 text-sky-50/90">
                Build capability through structured learning paths that support
                long-term positioning.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
