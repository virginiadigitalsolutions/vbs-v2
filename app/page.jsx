import AudienceSection from "@/components/home/audience-section";
import ConfusionSection from "@/components/home/confusion-section";
import CtaSection from "@/components/home/cta-section";
import EvaluationSection from "@/components/home/evaluation-section";
import FrameworkSection from "@/components/home/framework-section";
import HeroSection from "@/components/home/hero-section";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Career Guidance in India",
  description:
    "Clear digital career guidance in India for students and working professionals. Explore digital skills, courses, and career paths without hype or shortcuts.",
  path: "/",
  keywords: [
    "digital career guidance India",
    "digital skills India",
    "career guidance for students",
    "career guidance for working professionals",
    "courses and certifications India",
  ],
});

const homeFaqSchema = buildFAQSchema([
  {
    question: "What does Virginia Business Solutions help with?",
    answer:
      "Virginia Business Solutions helps students and working professionals in India make clearer decisions about digital skills, courses, certifications, and career paths.",
  },
  {
    question: "Who is this guidance for?",
    answer:
      "The guidance is designed for students, early-career learners, working professionals, and people exploring career transitions into digital roles.",
  },
  {
    question: "Does the site focus on India?",
    answer:
      "Yes. The platform is written with the Indian learner and career market in mind, while still covering globally relevant digital skills and long-term career concepts.",
  },
]);

const homePageSchema = buildWebPageSchema({
  title: "Digital Career Guidance in India",
  description:
    "Clear digital career guidance in India for students and working professionals. Explore digital skills, courses, and career paths without hype or shortcuts.",
  path: "/",
  about: [
    "Digital career guidance",
    "Digital skills",
    "Courses and certifications",
    "Career growth in India",
  ],
});

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([{ name: "Home", path: "/" }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HeroSection />
      <AudienceSection />
      <ConfusionSection />
      <FrameworkSection />
      <EvaluationSection />
      <CtaSection />
    </div>
  );
}
