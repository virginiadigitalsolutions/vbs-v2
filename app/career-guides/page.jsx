import CareerGuidesAiSection from "@/components/career-guides/ai-section";
import CareerGuidesAlignmentSection from "@/components/career-guides/alignment-section";
import CareerGuidesClaritySection from "@/components/career-guides/clarity-section";
import { heroData } from "@/components/career-guides/career-guides-data";
import CareerGuidesGrowthSection from "@/components/career-guides/growth-section";
import CareerGuidesMistakesSection from "@/components/career-guides/mistakes-section";
import CareerGuidesProgressionSection from "@/components/career-guides/progression-section";
import CareerGuidesRolesSection from "@/components/career-guides/roles-section";
import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import CTAButton from "@/components/ui/cta-button";
import { HeroVisualPanel, PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "Digital Career Guides in India",
  description:
    "Explore digital career paths in India. Understand roles, required skills, growth trajectories, and how certifications translate into long-term opportunities.",
  path: "/career-guides",
  keywords: [
    "digital career guides India",
    "digital career paths India",
    "career growth in digital marketing",
    "digital job roles India",
    "career planning India",
  ],
});

const careerGuidesPageSchema = buildWebPageSchema({
  title: "Digital Career Guides in India",
  description:
    "Explore digital career paths in India. Understand roles, required skills, growth trajectories, and how certifications translate into long-term opportunities.",
  path: "/career-guides",
  about: [
    "Digital career paths",
    "Role expectations",
    "Career growth in India",
    "Digital roles",
  ],
});

const careerGuidesFaqSchema = buildFAQSchema([
  {
    question: "How do digital skills connect to career roles?",
    answer:
      "Digital roles are built on combinations of skills. Understanding the skill cluster, then the learning path, and then the role expectations makes career progression more intentional.",
  },
  {
    question: "What matters most for long-term digital career growth?",
    answer:
      "Long-term growth depends on skill depth, adaptability, practical experience, industry context, and learning how to work alongside AI rather than ignoring it.",
  },
]);

export default function CareerGuidesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Career Guides", path: "/career-guides" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careerGuidesPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careerGuidesFaqSchema),
        }}
      />
      <PageHero
        eyebrow={<SectionEyebrow>{heroData.eyebrow}</SectionEyebrow>}
        title={
          <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl lg:text-[4rem]">
            {heroData.heading.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600">
              {heroData.heading.highlight}
            </span>
            {heroData.heading.suffix}
          </h1>
        }
        description={heroData.description}
        body={
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            {heroData.paragraphs.map((p) => (
              <p key={p.substring(0, 30)}>{p}</p>
            ))}
          </div>
        }
        actions={
          <CTAButton href="#clarity" variant="primary">
            {heroData.button.label}
          </CTAButton>
        }
        rightColumn={
          <HeroVisualPanel
            image={heroData.image}
            badge="Career Paths"
            floatingCards={heroData.floatingBadges}
            imageClassName="h-full w-full object-cover"
            containerClassName="aspect-[4/4.3] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        }
      />
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
