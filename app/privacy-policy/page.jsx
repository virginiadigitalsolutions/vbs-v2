import LegalContentSection from "@/components/legal/legal-content-section";
import LegalSectionEyebrow from "@/components/legal/legal-section-eyebrow";
import { privacySections } from "@/components/legal/legal-page-data";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Virginia Business Solutions collects, uses, and protects personal information related to digital career guidance enquiries and website usage.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "Virginia Business Solutions privacy"],
});

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow={<LegalSectionEyebrow>Privacy Policy</LegalSectionEyebrow>}
        title={
          <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl">Privacy Policy</h1>
        }
        description="This Privacy Policy explains how we collect, use, and protect your information."
        meta={<p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Last Updated: February 25, 2026</p>}
        rightColumn={
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_58%,#14b8a6_100%)] p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Important Note</p>
              <div className="mt-6 space-y-4">
                {[
                  "Review these pages before using the platform or submitting information.",
                  "Third-party courses, providers, and external platforms remain independently governed.",
                  "Questions about these policies can be shared at contact@virginiabusinesssolutions.in.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <p className="text-base leading-7 text-blue-50">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
      <LegalContentSection
        intro="Virginia Business Solutions (â€œwe,â€ â€œour,â€ or â€œthis platformâ€) operates as a digital informational guidance provider focused on digital skills, learning pathways, and career clarity."
        sections={privacySections}
      />
    </div>
  );
}
