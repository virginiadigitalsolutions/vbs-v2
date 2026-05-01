import DigitalSkillsAiSection from "@/components/digital-skills/ai-section";
import DigitalSkillsApproachSection from "@/components/digital-skills/approach-section";
import DigitalSkillsClustersSection from "@/components/digital-skills/clusters-section";
import DigitalSkillsEvaluationSection from "@/components/digital-skills/evaluation-section";
import DigitalSkillsHeroSection from "@/components/digital-skills/hero-section";
import DigitalSkillsMistakesSection from "@/components/digital-skills/mistakes-section";
import DigitalSkillsNextStepsSection from "@/components/digital-skills/next-steps-section";

export const metadata = {
  title: "Digital Skills for Long-Term Growth",
  description:
    "Digital skills guide for students and professionals in India. Understand foundational skills, AI impact, and how to choose the right path for long-term growth.",
};

export default function DigitalSkillsPage() {
  return (
    <div>
      <DigitalSkillsHeroSection />
      <DigitalSkillsApproachSection />
      <DigitalSkillsClustersSection />
      <DigitalSkillsEvaluationSection />
      <DigitalSkillsAiSection />
      <DigitalSkillsMistakesSection />
      <DigitalSkillsNextStepsSection />
    </div>
  );
}
