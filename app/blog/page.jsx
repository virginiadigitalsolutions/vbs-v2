import BlogFilterableList from "@/components/blog/blog-filterable-list";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog-content";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Explore practical blog articles on digital skills, courses, certifications, and career growth in India.",
  path: "/blog",
  keywords: [
    "digital skills blog India",
    "career guidance blog India",
    "SEO blog India",
    "digital marketing careers India",
  ],
});

const blogPageSchema = buildWebPageSchema({
  title: "Blog",
  description:
    "Explore practical blog articles on digital skills, courses, certifications, and career growth in India.",
  path: "/blog",
  about: [
    "Digital skills blog",
    "Career guidance blog",
    "India-focused digital growth content",
  ],
});

export default function BlogPage() {
  const categories = getBlogCategories();
  const posts = getAllBlogPosts();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <PageHero
        eyebrow={<p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1d4ed8]">Blog</p>}
        title={
          <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl">
            Practical blogs on digital skills, learning paths, and career growth
          </h1>
        }
        description="Explore structured blog content that helps students and working professionals in India choose skills, courses, and career paths with more clarity."
        rightColumn={
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#EEF2FF] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">Clear Analysis</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Guidance built around structured decision-making, not trend chasing.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#ECFDF5] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">Career Context</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Articles connect skills, learning choices, and real professional outcomes.
                </p>
              </div>
            </div>
          </div>
        }
      />
      <BlogFilterableList categories={categories} posts={posts} />
    </div>
  );
}
