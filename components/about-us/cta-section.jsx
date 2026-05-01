import Link from "next/link";

import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";

export default function AboutUsCtaSection() {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card p-8 lg:p-12">
          <AboutUsSectionEyebrow>Building Careers With Clarity</AboutUsSectionEyebrow>
          <h2 className="mt-6 max-w-4xl font-heading text-4xl leading-tight text-slate-950 lg:text-5xl">
            Start with the right foundation and build with intention
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Digital careers are built through informed decisions, consistent
              effort, and thoughtful progression. When skills, learning
              pathways, and career direction align, growth becomes sustainable.
            </p>
            <p>
              This platform was created to make that alignment clearer.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/digital-skills" className="vbs-button-primary">
              Explore Digital Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
