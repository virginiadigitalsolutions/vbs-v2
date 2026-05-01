import LegalContentSection from "@/components/legal/legal-content-section";
import LegalHeroSection from "@/components/legal/legal-hero-section";
import { privacySections } from "@/components/legal/legal-page-data";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read how Virginia Business Solutions collects, uses, and protects personal information related to digital career guidance enquiries and website usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <LegalHeroSection
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="This Privacy Policy explains how we collect, use, and protect your information."
        lastUpdated="February 25, 2026"
      />
      <LegalContentSection
        intro="Virginia Business Solutions (“we,” “our,” or “this platform”) operates as a digital informational guidance provider focused on digital skills, learning pathways, and career clarity."
        sections={privacySections}
      />
    </div>
  );
}
