import DigitalSkillsAiSection from "@/components/digital-skills/ai-section";
import DigitalSkillsApproachSection from "@/components/digital-skills/approach-section";
import DigitalSkillsClustersSection from "@/components/digital-skills/clusters-section";
import { heroData } from "@/components/digital-skills/digital-skills-data";
import DigitalSkillsEvaluationSection from "@/components/digital-skills/evaluation-section";
import DigitalSkillsMistakesSection from "@/components/digital-skills/mistakes-section";
import DigitalSkillsNextStepsSection from "@/components/digital-skills/next-steps-section";
import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import CTAButton from "@/components/ui/cta-button";
import { HeroVisualPanel, PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "Digital Skills for Long-Term Growth",
  description:
    "Digital skills guide for students and professionals in India. Understand foundational skills, AI impact, and how to choose the right path for long-term growth.",
  path: "/digital-skills",
  keywords: [
    "digital skills India",
    "best digital skills to learn",
    "future proof skills India",
    "digital skills for students",
    "digital skills for professionals",
  ],
});

const digitalSkillsPageSchema = buildWebPageSchema({
  title: "Digital Skills for Long-Term Growth",
  description:
    "Digital skills guide for students and professionals in India. Understand foundational skills, AI impact, and how to choose the right path for long-term growth.",
  path: "/digital-skills",
  about: [
    "Digital skills",
    "Future-proof skills",
    "AI-aware skill selection",
    "Career growth in India",
  ],
});

const digitalSkillsFaqSchema = buildFAQSchema([
  {
    question: "How do I choose the right digital skill?",
    answer:
      "Start by checking whether the skill is foundational, transferable across roles, and resilient as AI changes workflows. Then connect it to real job roles and project-based application.",
  },
  {
    question: "Are digital skills still valuable with AI growing fast?",
    answer:
      "Yes. The strongest digital skills are evolving, not disappearing. Strategic thinking, communication, analysis, and practical execution remain highly valuable alongside AI tools.",
  },
]);

export default function DigitalSkillsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Digital Skills", path: "/digital-skills" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(digitalSkillsPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(digitalSkillsFaqSchema),
        }}
      />
      <PageHero
        eyebrow={<SectionEyebrow>{heroData.eyebrow}</SectionEyebrow>}
        title={
          <h1 className="font-heading text-5xl leading-[1.04] text-slate-950 sm:text-6xl md:text-[4rem]">
            {heroData.heading.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600">
              {heroData.heading.highlight}
            </span>
          </h1>
        }
        description={heroData.description}
        actions={
          <>
            <CTAButton href={heroData.buttons.primary.href} variant="primary">
              {heroData.buttons.primary.label}
            </CTAButton>
            <CTAButton href={heroData.buttons.secondary.href} variant="secondary" showArrow={false}>
              {heroData.buttons.secondary.label}
            </CTAButton>
          </>
        }
        meta={
          <div className="flex w-fit items-center gap-4 rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-500"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-600">
              Join <span className="font-bold text-blue-700">{heroData.socialProof.count}</span>{" "}
              {heroData.socialProof.text}
            </p>
          </div>
        }
        rightColumn={
          <HeroVisualPanel
            image={{ ...heroData.image, fill: true }}
            badge="Skill Focus"
            floatingCards={[
              {
                title: heroData.floatingBadges[0].title,
                subtitle: heroData.floatingBadges[0].subtitle,
                iconPath: heroData.floatingBadges[0].iconPath,
              },
              {
                label: heroData.floatingBadges[1].label,
                title: heroData.floatingBadges[1].title,
                subtitle: heroData.floatingBadges[1].subtitle,
              },
            ]}
            containerClassName="aspect-[4/4.3] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        }
      />
      <DigitalSkillsApproachSection />
      <DigitalSkillsClustersSection />
      <DigitalSkillsEvaluationSection />
      <DigitalSkillsAiSection />
      <DigitalSkillsMistakesSection />
      <DigitalSkillsNextStepsSection />
    </div>
  );
}
