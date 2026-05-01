import ContactSectionEyebrow from "@/components/contact/section-eyebrow";

export default function ContactHeroSection() {
  return (
    <section className="vbs-section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.16),_transparent_48%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.14),_transparent_48%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <ContactSectionEyebrow>Get in Touch</ContactSectionEyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.06] text-slate-950 sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            For questions, feedback, or collaboration inquiries related to
            digital skills and career guidance.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              If you have questions about digital skills, learning pathways, or
              career direction, feel free to reach out. We also welcome
              feedback and relevant collaboration inquiries that align with our
              mission of structured digital career guidance.
            </p>
            <p>
              We aim to respond thoughtfully and within a reasonable timeframe.
            </p>
          </div>
        </div>

        <div className="vbs-card p-6 lg:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#1E3A8A_0%,#2563EB_62%,#14B8A6_100%)] p-7 text-white">
            <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
              Reach Us Directly
            </p>
            <div className="mt-6 rounded-[1.25rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
                Email
              </p>
              <a
                href="mailto:contact@virginiabusinesssolutions.in"
                className="mt-3 block break-all text-lg font-semibold text-white transition hover:text-blue-100"
              >
                contact@virginiabusinesssolutions.in
              </a>
            </div>
            <div className="mt-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-7 text-blue-50">
                Use the form for general queries, learning guidance, feedback,
                or partnership conversations.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#EEF2FF] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Thoughtful Replies
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Messages are reviewed with context so guidance stays clear and
                relevant.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-slate-200 bg-[#ECFDF5] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Relevant Enquiries
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Best suited for digital skills, structured learning, and career
                direction conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
