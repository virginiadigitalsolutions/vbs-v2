import AboutUsApproachSection from "@/components/about-us/approach-section";
import AboutUsCtaSection from "@/components/about-us/cta-section";
import AboutUsDifferenceSection from "@/components/about-us/difference-section";
import AboutUsHeroSection from "@/components/about-us/hero-section";
import AboutUsMissionVisionSection from "@/components/about-us/mission-vision-section";
import AboutUsServeSection from "@/components/about-us/serve-section";

export const metadata = {
  title: "About | Digital Career Guidance Platform in India",
  description:
    "Learn why this digital career guidance platform exists and how it helps students and professionals in India make informed decisions about skills, courses, and long-term growth.",
};

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsHeroSection />
      <AboutUsMissionVisionSection />
      <AboutUsServeSection />
      <AboutUsApproachSection />
      <AboutUsDifferenceSection />
      <AboutUsCtaSection />
    </div>
  );
}
