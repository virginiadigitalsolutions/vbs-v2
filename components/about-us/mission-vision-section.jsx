import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";

export default function AboutUsMissionVisionSection() {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AboutUsSectionEyebrow>Mission And Vision</AboutUsSectionEyebrow>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="vbs-card p-8 lg:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E0ECFF] text-lg font-bold text-[#1E3A8A]">
              M
            </div>
            <h2 className="mt-6 font-heading text-3xl text-slate-950">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              To provide structured, practical digital career guidance that
              helps individuals build relevant skills, choose appropriate
              learning pathways, and grow with long-term clarity.
            </p>
          </article>

          <article className="vbs-card p-8 lg:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#DDF7F4] text-lg font-bold text-[#0F766E]">
              V
            </div>
            <h2 className="mt-6 font-heading text-3xl text-slate-950">
              Our Vision
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              To become a trusted digital career guidance platform in India that
              supports learners at every stage, from early exploration to
              advanced professional positioning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
