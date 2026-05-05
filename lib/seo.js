import { siteConfig } from "@/lib/site-config";

function normalizePath(path = "/") {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function toAbsoluteUrl(path = "/") {
  return new URL(normalizePath(path), siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image = siteConfig.ogImage,
  noIndex = false,
}) {
  const canonicalPath = normalizePath(path);
  const absoluteUrl = toAbsoluteUrl(canonicalPath);
  const imageUrl = image?.startsWith("http") ? image : toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      url: absoluteUrl,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.businessType,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: toAbsoluteUrl("/vbs-logo.png"),
    image: toAbsoluteUrl(siteConfig.ogImage),
    email: siteConfig.contactEmail,
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    knowsAbout: [
      "Digital skills",
      "Career guidance",
      "Courses and certifications",
      "SEO",
      "Digital marketing",
      "Career growth in India",
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IN",
  };
}

export function buildBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildWebPageSchema({
  title,
  description,
  path = "/",
  about = [],
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: toAbsoluteUrl(path),
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: about.map((item) => ({
      "@type": "Thing",
      name: item,
    })),
  };
}

export function buildFAQSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(post) {
  const normalizedPublishedDate = normalizeSchemaDate(post.createdAt || post.dateLabel);
  const normalizedModifiedDate = normalizeSchemaDate(
    post.updatedAt || post.createdAt || post.dateLabel
  );

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: [toAbsoluteUrl(siteConfig.ogImage)],
    author: {
      "@type": "Organization",
      name: post.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/vbs-logo.png"),
      },
    },
    datePublished: normalizedPublishedDate,
    dateModified: normalizedModifiedDate,
    mainEntityOfPage: toAbsoluteUrl(`/blog/${post.categorySlug}/${post.slug}`),
    articleSection: post.category,
    inLanguage: "en-IN",
    keywords: [post.category, "India", "digital skills", "career guidance"],
  };
}

function normalizeSchemaDate(value) {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString();
}
