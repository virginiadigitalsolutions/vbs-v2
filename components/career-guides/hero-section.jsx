import Image from "next/image";
import SectionEyebrow from "@/components/career-guides/section-eyebrow";

export default function CareerGuidesHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.14),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <SectionEyebrow>Understand Where Digital Skills Can Take You</SectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            Digital Career Paths, Roles, and Long-Term Growth
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Explore real digital career paths, role expectations, growth
            potential, and how structured learning translates into professional
            outcomes.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Digital careers are not defined by titles alone, but by the
              skills and capabilities that support them.
            </p>
            <p>
              Understanding how roles evolve, what they demand, and how growth
              happens over time brings structure to career decisions.
            </p>
            <p>
              Clarity begins with seeing how skills translate into real
              professional pathways.
            </p>
          </div>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/80 p-3 shadow-[0_18px_40px_rgba(29,78,216,0.08)]">
            <Image
              src="/career-growth-roadmap.svg"
              alt="Digital career paths and skill growth roadmap in India"
              width={900}
              height={700}
              className="h-auto w-full rounded-[1.2rem]"
              priority
            />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#EEF2FF] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Role Expectations
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Titles make more sense when you understand the skill
                combinations behind them.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#ECFDF5] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Long-Term Growth
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Progress depends on depth, adaptability, and measurable
                contribution over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
