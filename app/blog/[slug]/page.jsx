import { notFound } from "next/navigation";

import BlogCategoryHero from "@/components/blog/blog-category-hero";
import BlogListGrid from "@/components/blog/blog-list-grid";
import BlogPostBody from "@/components/blog/blog-post-body";
import BlogPostHero from "@/components/blog/blog-post-hero";
import {
  blogCategories,
  blogPosts,
  getBlogCategoryBySlug,
  getBlogPostBySlug,
  getBlogPostsByCategorySlug,
} from "@/components/blog/blog-posts-data";

export function generateStaticParams() {
  return [
    ...blogCategories.map((category) => ({ slug: category.slug })),
    ...blogPosts.map((post) => ({ slug: post.slug })),
  ];
}

export function generateMetadata({ params }) {
  const category = getBlogCategoryBySlug(params.slug);

  if (category) {
    return {
      title: category.title,
      description: category.description,
    };
  }

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
  const category = getBlogCategoryBySlug(params.slug);

  if (category) {
    const posts = getBlogPostsByCategorySlug(category.slug);

    return (
      <div>
        <BlogCategoryHero category={category} postCount={posts.length} />
        <BlogListGrid posts={posts} />
      </div>
    );
  }

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
