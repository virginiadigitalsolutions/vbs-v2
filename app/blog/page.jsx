import BlogFilterableList from "@/components/blog/blog-filterable-list";
import BlogListHero from "@/components/blog/blog-list-hero";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog-content";

export const metadata = {
  title: "Blog",
  description:
    "Explore practical blog articles on digital skills, courses, certifications, and career growth in India.",
};

export default function BlogPage() {
  const categories = getBlogCategories();
  const posts = getAllBlogPosts();

  return (
    <div>
      <BlogListHero />
      <BlogFilterableList categories={categories} posts={posts} />
    </div>
  );
}
