import { contactSubjects } from "@/components/contact/contact-data";
import ContactFormClient from "@/components/contact/contact-form-client";

export default function ContactFormSection() {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <ContactFormClient />

          <div className="grid gap-6">
            <article className="vbs-card bg-white p-8">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0f766e] uppercase">
                Contact Details
              </p>
              <h3 className="mt-5 font-heading text-3xl text-slate-950">
                Drop us a line
              </h3>
              <a
                href="mailto:contact@virginiabusinesssolutions.in"
                className="mt-4 block text-lg font-semibold text-[#2563EB] transition hover:text-[#1E3A8A]"
              >
                contact@virginiabusinesssolutions.in
              </a>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Best for questions related to digital skills, structured
                learning pathways, and career guidance direction.
              </p>
            </article>

            <article className="vbs-card bg-[#E0ECFF]/80 p-8">
              <p className="text-sm font-bold tracking-[0.2em] text-[#1E3A8A] uppercase">
                Enquiry Types
              </p>
              <div className="mt-5 grid gap-3">
                {contactSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="rounded-[1.1rem] border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
