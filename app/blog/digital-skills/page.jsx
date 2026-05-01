import { notFound } from "next/navigation";

import BlogCategoryHero from "@/components/blog/blog-category-hero";
import BlogListGrid from "@/components/blog/blog-list-grid";
import {
  getBlogCategoryBySlug,
  getBlogPostsByCategorySlug,
} from "@/components/blog/blog-posts-data";

const categorySlug = "digital-skills";

export const metadata = {
  title: "Digital Skills Blog",
  description:
    "Explore digital skills blog articles for students and professionals in India, with practical guidance on choosing relevant skills for long-term career growth.",
};

export default function DigitalSkillsCategoryPage() {
  const category = getBlogCategoryBySlug(categorySlug);
  const posts = getBlogPostsByCategorySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div>
      <BlogCategoryHero category={category} postCount={posts.length} />
      <BlogListGrid posts={posts} />
    </div>
  );
}
