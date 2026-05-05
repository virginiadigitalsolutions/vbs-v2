import { describe, expect, it } from "vitest";

import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildOrganizationSchema,
  buildPageMetadata,
  buildWebPageSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

describe("buildPageMetadata", () => {
  it("creates canonical, open graph, twitter, and robots metadata", () => {
    const metadata = buildPageMetadata({
      title: "Digital Skills for Long-Term Growth",
      description: "Guidance for choosing durable digital skills in India.",
      path: "/digital-skills",
      keywords: ["digital skills India", "career growth"],
    });

    expect(metadata.alternates.canonical).toBe("/digital-skills");
    expect(metadata.openGraph.url).toBe(
      `${siteConfig.url}/digital-skills`
    );
    expect(metadata.openGraph.images[0].url).toBe(
      `${siteConfig.url}${siteConfig.ogImage}`
    );
    expect(metadata.twitter.card).toBe("summary_large_image");
    expect(metadata.robots.index).toBe(true);
    expect(metadata.keywords).toContain("digital skills India");
  });

  it("marks admin-style pages as noindex when requested", () => {
    const metadata = buildPageMetadata({
      title: "Admin",
      description: "Admin dashboard",
      path: "/admin",
      noIndex: true,
    });

    expect(metadata.robots.index).toBe(false);
    expect(metadata.robots.follow).toBe(false);
    expect(metadata.robots.googleBot.noimageindex).toBe(true);
  });
});

describe("schema builders", () => {
  it("builds organization schema with India service area", () => {
    const schema = buildOrganizationSchema();

    expect(schema["@type"]).toBe(siteConfig.businessType);
    expect(schema.areaServed.name).toBe("India");
    expect(schema.logo).toBe(`${siteConfig.url}/vbs-logo.png`);
  });

  it("builds website schema without a fake search action", () => {
    const schema = buildWebsiteSchema();

    expect(schema["@type"]).toBe("WebSite");
    expect(schema.url).toBe(siteConfig.url);
    expect(schema.potentialAction).toBeUndefined();
  });

  it("builds breadcrumb schema with absolute URLs", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Digital Skills", path: "/blog/digital-skills" },
    ]);

    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[1].item).toBe(`${siteConfig.url}/blog`);
  });

  it("builds web page schema with topical about items", () => {
    const schema = buildWebPageSchema({
      title: "Digital Skills for Long-Term Growth",
      description: "A guide to durable digital skills in India.",
      path: "/digital-skills",
      about: ["Digital skills", "Career growth in India"],
    });

    expect(schema["@type"]).toBe("WebPage");
    expect(schema.url).toBe(`${siteConfig.url}/digital-skills`);
    expect(schema.about).toHaveLength(2);
    expect(schema.about[0].name).toBe("Digital skills");
  });

  it("builds faq schema for answer engines", () => {
    const schema = buildFAQSchema([
      {
        question: "What does this site help with?",
        answer: "It helps with digital skills and career guidance.",
      },
    ]);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(1);
    expect(schema.mainEntity[0].acceptedAnswer.text).toContain("career guidance");
  });

  it("normalizes article dates to ISO when possible", () => {
    const expectedIsoDate = new Date("May 1, 2026").toISOString();

    const schema = buildArticleSchema({
      title: "7 Best Digital Skills",
      metaTitle: "7 Best Digital Skills to Learn in 2026",
      metaDescription: "A practical guide for India.",
      excerpt: "A practical guide for India.",
      author: "Virginia Business Solutions",
      category: "Digital Skills",
      categorySlug: "digital-skills",
      slug: "7-best-digital-skills",
      dateLabel: "May 1, 2026",
    });

    expect(schema["@type"]).toBe("Article");
    expect(schema.mainEntityOfPage).toBe(
      `${siteConfig.url}/blog/digital-skills/7-best-digital-skills`
    );
    expect(schema.datePublished).toBe(expectedIsoDate);
    expect(schema.publisher.logo.url).toBe(`${siteConfig.url}/vbs-logo.png`);
  });
});
