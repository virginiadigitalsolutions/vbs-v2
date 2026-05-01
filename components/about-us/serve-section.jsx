import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import { serveGroups } from "@/components/about-us/about-us-data";

export default function AboutUsServeSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8">
        <div>
          <AboutUsSectionEyebrow>Who We Serve</AboutUsSectionEyebrow>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-950">
            Guidance designed for every stage of digital career growth
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We serve school students exploring digital possibilities, college
            students preparing for employment, freshers entering the workforce,
            experienced professionals seeking advancement, and individuals
            considering career transitions, including those restarting or
            reshaping their careers after personal milestones.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {serveGroups.map((group, index) => (
            <article
              key={group}
              className={`vbs-card p-7 ${
                index % 2 === 0 ? "bg-[#E0ECFF]/70" : "bg-[#F5F7FA]/90"
              }`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2563EB] shadow-sm">
                0{index + 1}
              </div>
              <p className="mt-5 text-base leading-7 text-slate-700">{group}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
