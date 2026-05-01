import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import {
  differencePoints,
  focusPoints,
} from "@/components/about-us/about-us-data";

export default function AboutUsDifferenceSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <article className="vbs-card p-8 lg:p-10">
          <AboutUsSectionEyebrow>What Makes This Different</AboutUsSectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-950">
            Clear guidance without shortcuts, hype, or isolated decisions
          </h2>
          <div className="mt-8 space-y-4">
            {differencePoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.25rem] border border-slate-200 bg-[#F5F7FA] p-5"
              >
                <p className="text-base leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="vbs-card p-8 lg:p-10">
          <p className="text-sm font-bold tracking-[0.2em] text-[#0F766E] uppercase">
            Instead, We Focus On
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {focusPoints.map((point, index) => (
              <div
                key={point}
                className={`rounded-[1.35rem] border p-5 ${
                  index % 2 === 0
                    ? "border-[#BFDBFE] bg-[#E0ECFF]"
                    : "border-[#CCFBF1] bg-[#ECFDF5]"
                }`}
              >
                <p className="text-base font-semibold leading-7 text-slate-800">
                  {point}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-8 text-slate-600">
            The digital landscape evolves rapidly. Structured clarity allows
            individuals to evolve with it.
          </p>
        </article>
      </div>
    </section>
  );
}
