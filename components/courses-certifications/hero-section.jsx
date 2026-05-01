import Image from "next/image";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";

export default function CoursesHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.14),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <SectionEyebrow>Structured Learning Paths for Real Skill Development</SectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            Choosing the Right Courses and Certifications for Long-Term Growth
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Move from foundational knowledge to applied competence with clear,
            stage-based learning paths.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Once you&apos;ve identified the digital skill you want to develop,
              the next decision is how to learn it effectively.
            </p>
            <p>
              The internet offers countless courses, certifications, and
              training programs, but not all build meaningful capability.
            </p>
            <p>
              A structured learning progression helps you move from
              understanding concepts to applying them confidently in real-world
              scenarios. Learning is most effective when it follows a clear
              sequence rather than scattered enrollment.
            </p>
          </div>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/80 p-3 shadow-[0_18px_40px_rgba(29,78,216,0.08)]">
            <Image
              src="/courses-learning-path.svg"
              alt="Digital courses and certifications learning path in India"
              width={900}
              height={700}
              className="h-auto w-full rounded-[1.2rem]"
              priority
            />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#EEF2FF] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Stage-Based Learning
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Progress works best when each learning level builds on the
                previous one.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#ECFDF5] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Real Skill Development
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The right program should move you toward competence, not just
                completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
