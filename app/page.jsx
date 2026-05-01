import AudienceSection from "@/components/home/audience-section";
import ConfusionSection from "@/components/home/confusion-section";
import CtaSection from "@/components/home/cta-section";
import EvaluationSection from "@/components/home/evaluation-section";
import FrameworkSection from "@/components/home/framework-section";
import HeroSection from "@/components/home/hero-section";

export const metadata = {
  title: "Digital Career Guidance in India",
  description:
    "Clear digital career guidance in India for students and working professionals. Explore digital skills, courses, and career paths without hype or shortcuts.",
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AudienceSection />
      <ConfusionSection />
      <FrameworkSection />
      <EvaluationSection />
      <CtaSection />
    </div>
  );
}
