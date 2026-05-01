import Link from "next/link";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";

export default function CoursesDirectionSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-8 text-white lg:p-10">
          <SectionEyebrow>Connecting Learning to Direction</SectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-white sm:text-5xl">
            Choosing what to learn is important. Understanding why you are
            learning it matters even more.
          </h2>
          <div className="mt-6 space-y-5 max-w-4xl text-lg leading-8 text-sky-50/90">
            <p>
              Courses and certifications are only one part of professional
              growth. The value of any program becomes clearer when it is
              connected to a specific skill pathway and long-term role
              trajectory.
            </p>
            <p>
              Alignment between skill, course selection, and role expectations
              creates stronger positioning over time.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/digital-skills"
              className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 transition hover:bg-white/16"
            >
              <p className="text-sm font-bold tracking-[0.18em] text-sky-100 uppercase">
                Start With
              </p>
              <h3 className="mt-3 font-heading text-3xl text-white">
                Digital Skills
              </h3>
              <p className="mt-3 text-base leading-7 text-sky-50/90">
                Build clarity about the skill itself before choosing a course
                or certification path.
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
                See how structured learning connects to role trajectories and
                long-term positioning.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
