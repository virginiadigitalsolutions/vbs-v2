import { notFound } from "next/navigation";

import BlogPostBody from "@/components/blog/blog-post-body";
import BlogPostHero from "@/components/blog/blog-post-hero";
import { buildArticleSchema, buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import {
  getBlogCategoryBySlug,
  getBlogPostBySlug,
  getAllBlogPosts,
} from "@/lib/blog-content";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
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
    ...buildPageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      path: `/blog/${slug}/${postSlug}`,
      type: "article",
      keywords: [post.category, "India", "digital skills", "career guidance"],
    }),
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

  const articleSchema = buildArticleSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.name, path: `/blog/${category.slug}` },
    { name: post.title, path: `/blog/${category.slug}/${post.slug}` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostHero post={post} />
      <BlogPostBody post={post} />
    </div>
  );
}
