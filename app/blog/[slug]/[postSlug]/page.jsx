import { notFound } from "next/navigation";

import BlogPostBody from "@/components/blog/blog-post-body";
import BlogPostHero from "@/components/blog/blog-post-hero";
import {
  blogPosts,
  getBlogCategoryBySlug,
  getBlogPostBySlug,
} from "@/components/blog/blog-posts-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.categorySlug,
    postSlug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug, postSlug } = await params;

  // Verify category exists
  const category = getBlogCategoryBySlug(slug);
  if (!category) {
    return { title: "Blog" };
  }

  const post = getBlogPostBySlug(postSlug);
  if (!post || post.categorySlug !== slug) {
    return { title: "Blog" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug, postSlug } = await params;

  // Verify category exists
  const category = getBlogCategoryBySlug(slug);
  if (!category) {
    notFound();
  }

  const post = getBlogPostBySlug(postSlug);
  if (!post || post.categorySlug !== slug) {
    notFound();
  }

  return (
    <div>
      <BlogPostHero post={post} />
      <BlogPostBody post={post} />
    </div>
  );
}
