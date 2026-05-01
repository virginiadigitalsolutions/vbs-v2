import LegalContentSection from "@/components/legal/legal-content-section";
import LegalHeroSection from "@/components/legal/legal-hero-section";
import { termsSections } from "@/components/legal/legal-page-data";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using Virginia Business Solutions, including service scope, informational use, affiliate disclosures, and user responsibilities.",
};

export default function TermsAndConditionsPage() {
  return (
    <div>
      <LegalHeroSection
        eyebrow="Terms & Conditions"
        title="Terms & Conditions"
        description="By accessing and using this website, you agree to the following terms."
        lastUpdated="February 25, 2026"
      />
      <LegalContentSection sections={termsSections} />
    </div>
  );
}
