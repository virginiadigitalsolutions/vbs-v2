import ContactCtaSection from "@/components/contact/cta-section";
import ContactFormSection from "@/components/contact/form-section";
import ContactSectionEyebrow from "@/components/contact/section-eyebrow";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch for general queries, feedback, or partnership inquiries related to digital career guidance, skills, and structured learning pathways.",
  path: "/contact",
  keywords: [
    "contact Virginia Business Solutions",
    "digital career guidance contact India",
    "career guidance enquiry India",
  ],
});

const contactPageSchema = buildWebPageSchema({
  title: "Contact",
  description:
    "Get in touch for general queries, feedback, or partnership inquiries related to digital career guidance, skills, and structured learning pathways.",
  path: "/contact",
  about: [
    "Contact Virginia Business Solutions",
    "Digital career guidance enquiries",
    "Learning guidance in India",
  ],
});

const contactFaqSchema = buildFAQSchema([
  {
    question: "What should I contact Virginia Business Solutions about?",
    answer:
      "You can reach out for digital skills questions, structured learning guidance, feedback, and relevant collaboration or partnership enquiries.",
  },
  {
    question: "Does the site offer guidance related to India?",
    answer:
      "Yes. The guidance is written primarily for students and working professionals in India exploring digital careers, courses, and long-term skill growth.",
  },
]);

export default function ContactPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      <PageHero
        eyebrow={<ContactSectionEyebrow>Get in Touch</ContactSectionEyebrow>}
        title={
          <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl">
            Contact Us
          </h1>
        }
        description="For questions, feedback, or collaboration inquiries related to digital skills and career guidance."
        body={
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              If you have questions about digital skills, learning pathways, or career direction, feel free to
              reach out. We also welcome feedback and relevant collaboration inquiries that align with our mission
              of structured digital career guidance.
            </p>
            <p>We aim to respond thoughtfully and within a reasonable timeframe.</p>
          </div>
        }
        rightColumn={
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_58%,#14b8a6_100%)] p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Reach Us Directly</p>
              <div className="mt-6 rounded-[1.25rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">Email</p>
                <a
                  href="mailto:contact@virginiabusinesssolutions.in"
                  className="mt-3 block break-all text-lg font-semibold text-white transition hover:text-blue-100"
                >
                  contact@virginiabusinesssolutions.in
                </a>
              </div>
              <div className="mt-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-base leading-7 text-blue-50">
                  Use the form for general queries, learning guidance, feedback, or partnership conversations.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-slate-200 bg-[#EEF2FF] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">Thoughtful Replies</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Messages are reviewed with context so guidance stays clear and relevant.
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-slate-200 bg-[#ECFDF5] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">Relevant Enquiries</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Best suited for digital skills, structured learning, and career direction conversations.
                </p>
              </div>
            </div>
          </div>
        }
      />
      <ContactFormSection />
      <ContactCtaSection />
    </div>
  );
}
