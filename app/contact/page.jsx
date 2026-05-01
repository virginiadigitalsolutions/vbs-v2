import ContactCtaSection from "@/components/contact/cta-section";
import ContactFormSection from "@/components/contact/form-section";
import ContactHeroSection from "@/components/contact/hero-section";

export const metadata = {
  title: "Contact | Digital Career Guidance Platform in India",
  description:
    "Get in touch for general queries, feedback, or partnership inquiries related to digital career guidance, skills, and structured learning pathways.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactCtaSection />
    </div>
  );
}
