import { contactSubjects } from "@/components/contact/contact-data";
import ContactSectionEyebrow from "@/components/contact/section-eyebrow";

export default function ContactFormSection() {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="vbs-card p-8 lg:p-10">
            <ContactSectionEyebrow>Get In Touch</ContactSectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-950">
              Send your message with the right context
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Share your question, feedback, or collaboration interest with a
              little context so the response can be more useful and relevant.
            </p>

            <form className="mt-10 grid gap-6">
              <div className="grid gap-2">
                <label
                  htmlFor="full-name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="email-address"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {contactSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about your question or enquiry"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </div>

              <div>
                <button type="submit" className="vbs-button-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>

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
