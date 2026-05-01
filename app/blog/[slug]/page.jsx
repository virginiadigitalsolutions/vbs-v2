import { notFound } from "next/navigation";

import BlogPostBody from "@/components/blog/blog-post-body";
import BlogPostHero from "@/components/blog/blog-post-hero";
import { getBlogPostBySlug, blogPosts } from "@/components/blog/blog-posts-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <BlogPostHero post={post} />
      <BlogPostBody post={post} />
    </div>
  );
}
