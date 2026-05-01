import Link from "next/link";
import SectionEyebrow from "@/components/digital-skills/section-eyebrow";

export default function DigitalSkillsNextStepsSection() {
  return (
    <section className="vbs-section bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-8 text-white lg:p-14 shadow-2xl animate-fade-in-up">
          {/* Background patterns */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2)_0%,transparent_70%)] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <SectionEyebrow className="text-teal-200">Where to Go Next</SectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-white sm:text-5xl">
              Clarity begins with choosing the right skill. Progress continues
              with learning it strategically.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Once you&apos;ve identified which skill cluster aligns with your
              interests and strengths, the next step is structured learning.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/courses-certifications"
              className="group relative rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 overflow-hidden"
            >
              <div className="absolute right-8 top-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform transition-transform group-hover:rotate-45">
                 <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
              <p className="text-sm font-bold tracking-[0.18em] text-teal-300 uppercase mb-4">
                Next Step
              </p>
              <h3 className="font-heading text-3xl text-white mb-4">
                Courses & Certifications
              </h3>
              <p className="text-base leading-7 text-blue-100">
                Explore curated learning paths and certifications that build
                depth and practical credibility.
              </p>
            </Link>

            <Link
              href="/career-guides"
              className="group relative rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 overflow-hidden"
            >
              <div className="absolute right-8 top-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform transition-transform group-hover:rotate-45">
                 <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
              <p className="text-sm font-bold tracking-[0.18em] text-blue-300 uppercase mb-4">
                Then Explore
              </p>
              <h3 className="font-heading text-3xl text-white mb-4">
                Career Guides
              </h3>
              <p className="text-base leading-7 text-blue-100">
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
