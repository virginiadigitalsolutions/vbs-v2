import AboutUsApproachSection from "@/components/about-us/approach-section";
import { heroData } from "@/components/about-us/about-us-data";
import AboutUsCtaSection from "@/components/about-us/cta-section";
import AboutUsDifferenceSection from "@/components/about-us/difference-section";
import AboutUsMissionVisionSection from "@/components/about-us/mission-vision-section";
import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import AboutUsServeSection from "@/components/about-us/serve-section";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { HeroVisualPanel, PageHero } from "@/components/ui/page-hero";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn why this digital career guidance platform exists and how it helps students and professionals in India make informed decisions about skills, courses, and long-term growth.",
  path: "/about-us",
  keywords: [
    "about Virginia Business Solutions",
    "digital career guidance platform India",
    "career guidance mission India",
  ],
});

const aboutPageSchema = buildWebPageSchema({
  title: "About",
  description:
    "Learn why this digital career guidance platform exists and how it helps students and professionals in India make informed decisions about skills, courses, and long-term growth.",
  path: "/about-us",
  about: [
    "Digital career guidance platform",
    "Career clarity",
    "Digital learning paths",
  ],
});

const aboutFaqSchema = buildFAQSchema([
  {
    question: "Why does this platform exist?",
    answer:
      "The platform exists to reduce confusion around digital skills, learning pathways, and career growth by offering structured guidance for learners in India.",
  },
  {
    question: "What makes the platform different?",
    answer:
      "It focuses on clarity before commitment, connecting skills, courses, and career outcomes instead of pushing isolated enrollments or short-term trends.",
  },
]);

export default function AboutUsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />
      <PageHero
        eyebrow={<AboutUsSectionEyebrow>{heroData.eyebrow}</AboutUsSectionEyebrow>}
        title={
          <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl lg:text-[4rem]">
            {heroData.heading.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600">
              {heroData.heading.highlight}
            </span>
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
        rightColumn={
          <HeroVisualPanel
            image={{ ...heroData.image, fill: true }}
            badge="Our Purpose"
            imageClassName="object-cover"
            containerClassName="aspect-[4/4.4] sm:aspect-[5/4] lg:aspect-[4/5]"
            bottomCard={
              <>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-teal-700">
                  Our Purpose
                </p>
                <ul className="space-y-2.5">
                  {heroData.purposePoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        }
      />
      <AboutUsMissionVisionSection />
      <AboutUsServeSection />
      <AboutUsApproachSection />
      <AboutUsDifferenceSection />
      <AboutUsCtaSection />
    </div>
  );
}
