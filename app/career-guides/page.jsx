import CareerGuidesAiSection from "@/components/career-guides/ai-section";
import CareerGuidesAlignmentSection from "@/components/career-guides/alignment-section";
import CareerGuidesClaritySection from "@/components/career-guides/clarity-section";
import CareerGuidesGrowthSection from "@/components/career-guides/growth-section";
import CareerGuidesHeroSection from "@/components/career-guides/hero-section";
import CareerGuidesMistakesSection from "@/components/career-guides/mistakes-section";
import CareerGuidesProgressionSection from "@/components/career-guides/progression-section";
import CareerGuidesRolesSection from "@/components/career-guides/roles-section";

export const metadata = {
  title: "Digital Career Guides in India | Roles, Skills & Growth Paths",
  description:
    "Explore digital career paths in India. Understand roles, required skills, growth trajectories, and how certifications translate into long-term opportunities.",
};

export default function CareerGuidesPage() {
  return (
    <div>
      <CareerGuidesHeroSection />
      <CareerGuidesClaritySection />
      <CareerGuidesRolesSection />
      <CareerGuidesProgressionSection />
      <CareerGuidesGrowthSection />
      <CareerGuidesAiSection />
      <CareerGuidesMistakesSection />
      <CareerGuidesAlignmentSection />
    </div>
  );
}
