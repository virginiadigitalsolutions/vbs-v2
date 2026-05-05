import Link from "next/link";
import { notFound } from "next/navigation";

import BlogListGrid from "@/components/blog/blog-list-grid";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
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
    ...buildPageMetadata({
      title: category.title,
      description: category.description,
      path: `/blog/${category.slug}`,
      keywords: [category.name, "blog", "India", "career guidance"],
    }),
  };
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategorySlug(category.slug);
  const categoryPageSchema = buildWebPageSchema({
    title: category.title,
    description: category.description,
    path: `/blog/${category.slug}`,
    about: [category.name, "Blog articles", "Digital career guidance in India"],
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: category.name, path: `/blog/${category.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoryPageSchema),
        }}
      />
      <PageHero
        eyebrow={
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
            <Link href="/blog" className="transition hover:text-[#1d4ed8]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700">{category.name}</span>
          </div>
        }
        title={
          <>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">{category.banner}</p>
            <h1 className="font-heading text-5xl leading-[1.05] text-slate-950 sm:text-6xl">{category.title}</h1>
          </>
        }
        description={category.intro}
        meta={
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {posts.length} article{posts.length === 1 ? "" : "s"}
            </span>
            <span className="rounded-full bg-[#E0ECFF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
              Category: {category.name}
            </span>
          </div>
        }
        rightColumn={
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl">
            <div className="space-y-4">
              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Reading Focus</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Each category groups posts around one decision area so browsing stays focused and practical.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#ECFDF5] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">What You Will Find</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Clear explanations, career context, and structured recommendations for the topic you are exploring.
                </p>
              </div>
            </div>
          </div>
        }
      />
      <BlogListGrid posts={posts} />
    </div>
  );
}
