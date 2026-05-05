import { heroData } from "@/components/courses-certifications/courses-data";
import CoursesDirectionSection from "@/components/courses-certifications/direction-section";
import CoursesEvaluationSection from "@/components/courses-certifications/evaluation-section";
import CoursesFreeVsPaidSection from "@/components/courses-certifications/free-vs-paid-section";
import CoursesMistakesSection from "@/components/courses-certifications/mistakes-section";
import CoursesProgressionSection from "@/components/courses-certifications/progression-section";
import SectionEyebrow from "@/components/courses-certifications/section-eyebrow";
import CoursesStructureSection from "@/components/courses-certifications/structure-section";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import CTAButton from "@/components/ui/cta-button";
import { HeroVisualPanel, PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "Digital Courses & Certifications in India",
  description:
    "Explore structured digital courses and certifications in India. Learn through beginner, intermediate, and advanced paths with clear guidance on free and paid options.",
  path: "/courses-certifications",
  keywords: [
    "digital courses India",
    "digital certifications India",
    "best online courses India",
    "structured learning paths",
    "career certifications India",
  ],
});

const coursesPageSchema = buildWebPageSchema({
  title: "Digital Courses & Certifications in India",
  description:
    "Explore structured digital courses and certifications in India. Learn through beginner, intermediate, and advanced paths with clear guidance on free and paid options.",
  path: "/courses-certifications",
  about: [
    "Digital courses",
    "Certifications in India",
    "Structured learning paths",
    "Course evaluation",
  ],
});

const coursesFaqSchema = buildFAQSchema([
  {
    question: "When should I choose a paid digital course?",
    answer:
      "Paid learning usually makes sense when you already know the skill direction, need a structured curriculum, want guided practice, or need stronger accountability.",
  },
  {
    question: "Do certifications automatically lead to jobs?",
    answer:
      "No. Certifications can support credibility, but real progress comes from practical capability, project-based proof, and alignment with actual career roles.",
  },
]);

export default function CoursesCertificationsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              {
                name: "Courses & Certifications",
                path: "/courses-certifications",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesFaqSchema) }}
      />
      <PageHero
        eyebrow={<SectionEyebrow>{heroData.eyebrow}</SectionEyebrow>}
        title={
          <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl lg:text-[4rem]">
            {heroData.heading.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600">
              {heroData.heading.highlight}
            </span>{" "}
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
          <>
            <CTAButton href="#learning-stages" variant="primary">
              {heroData.buttons.primary.label}
            </CTAButton>
            <CTAButton href="#evaluation" variant="secondary" showArrow={false}>
              {heroData.buttons.secondary.label}
            </CTAButton>
          </>
        }
        rightColumn={
          <HeroVisualPanel
            image={heroData.image}
            badge="Learning Path"
            floatingCards={heroData.floatingBadges}
            imageClassName="h-full w-full object-cover"
            containerClassName="aspect-[4/4.2] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        }
      />
      <CoursesStructureSection />
      <CoursesProgressionSection />
      <CoursesFreeVsPaidSection />
      <CoursesEvaluationSection />
      <CoursesMistakesSection />
      <CoursesDirectionSection />
    </div>
  );
}
