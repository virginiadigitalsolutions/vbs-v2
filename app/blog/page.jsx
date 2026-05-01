import BlogListGrid from "@/components/blog/blog-list-grid";
import BlogListHero from "@/components/blog/blog-list-hero";
import { blogPosts } from "@/components/blog/blog-posts-data";

export const metadata = {
  title: "Blog",
  description:
    "Explore practical blog articles on digital skills, courses, certifications, and career growth in India.",
};

export default function BlogPage() {
  return (
    <div>
      <BlogListHero />
      <BlogListGrid posts={blogPosts} />
    </div>
  );
}
