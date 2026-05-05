import { getAllBlogPosts, getBlogCategories } from "@/lib/blog-content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about-us",
    "/digital-skills",
    "/courses-certifications",
    "/career-guides",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.9 : 0.8,
  }));

  const categoryRoutes = getBlogCategories().map((category) => ({
    url: `${siteConfig.url}/blog/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const postRoutes = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.categorySlug}/${post.slug}`,
    lastModified: post.updatedAt || post.createdAt || post.dateLabel || now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
