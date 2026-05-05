import { getAllBlogPosts } from "@/lib/blog-content";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

export function GET() {
  const posts = getAllBlogPosts();

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "This website provides structured guidance for digital skills, courses and certifications, and digital career paths for people in India.",
    "",
    "## Primary Sections",
    `- Home: ${siteConfig.url}/`,
    `- About Us: ${siteConfig.url}/about-us`,
    `- Digital Skills: ${siteConfig.url}/digital-skills`,
    `- Courses & Certifications: ${siteConfig.url}/courses-certifications`,
    `- Career Guides: ${siteConfig.url}/career-guides`,
    `- Blog: ${siteConfig.url}/blog`,
    `- Contact: ${siteConfig.url}/contact`,
    "",
    "## Topics Covered",
    "- Digital skills for students and working professionals in India",
    "- Course and certification evaluation",
    "- Career role clarity and progression",
    "- AI-aware career planning",
    "- SEO, content, analytics, and digital growth skills",
    "",
    "## Blog Articles",
    ...posts.map(
      (post) =>
        `- ${post.title}: ${siteConfig.url}/blog/${post.categorySlug}/${post.slug}`
    ),
    "",
    "## Contact",
    `- Email: ${siteConfig.contactEmail}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
