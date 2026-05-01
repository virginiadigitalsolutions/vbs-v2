import BlogFilterableList from "@/components/blog/blog-filterable-list";
import BlogListHero from "@/components/blog/blog-list-hero";
import { blogCategories, blogPosts } from "@/components/blog/blog-posts-data";

export const metadata = {
  title: "Blog",
  description:
    "Explore practical blog articles on digital skills, courses, certifications, and career growth in India.",
};

export default function BlogPage() {
  return (
    <div>
      <BlogListHero />
      <BlogFilterableList categories={blogCategories} posts={blogPosts} />
    </div>
  );
}
