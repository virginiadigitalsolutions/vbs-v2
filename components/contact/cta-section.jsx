import Link from "next/link";

import ContactSectionEyebrow from "@/components/contact/section-eyebrow";

export default function ContactCtaSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card p-8 lg:p-12">
          <ContactSectionEyebrow>Keep Exploring</ContactSectionEyebrow>
          <h2 className="mt-6 max-w-4xl font-heading text-4xl leading-tight text-slate-950 lg:text-5xl">
            Continue with structured guidance across skills, learning, and careers
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            If you are still exploring your next step, start with the skill
            foundation first and then move into learning paths and role
            direction with more clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/digital-skills" className="vbs-button-primary">
              Explore Digital Skills
            </Link>
            <Link href="/courses-certifications" className="vbs-button-secondary">
              View Courses & Certifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
