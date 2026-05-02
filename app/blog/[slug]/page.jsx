import { notFound } from "next/navigation";

import BlogCategoryHero from "@/components/blog/blog-category-hero";
import BlogListGrid from "@/components/blog/blog-list-grid";
import {
  getBlogCategoryBySlug,
  getBlogPostsByCategorySlug,
  getBlogCategories,
} from "@/lib/blog-content";

export function generateStaticParams() {
  return getBlogCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    return { title: "Blog" };
  }

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategorySlug(category.slug);

  return (
    <div>
      <BlogCategoryHero category={category} postCount={posts.length} />
      <BlogListGrid posts={posts} />
    </div>
  );
}
