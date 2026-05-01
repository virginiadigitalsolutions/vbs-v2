"use client";

import { useState } from "react";
import Link from "next/link";

import BlogListGrid from "@/components/blog/blog-list-grid";

export default function BlogFilterableList({ categories, posts }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.categorySlug === activeCategory);

  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card bg-white p-7 lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
                Categories
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight text-slate-950">
                Browse articles by category or filter them instantly
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Choose a category page for focused reading, or use the filter
                below to refine the article list without leaving this page.
              </p>
            </div>
            <p className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
              Showing {filteredPosts.length} article
              {filteredPosts.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.slug}
                className="rounded-[1.5rem] border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-heading text-2xl text-slate-950">
                    {category.name}
                  </h3>
                  <Link
                    href={`/blog/${category.slug}`}
                    className="rounded-full bg-[#E0ECFF] px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition hover:bg-[#d5e5ff]"
                  >
                    Open Category
                  </Link>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {category.intro}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeCategory === "all"
                  ? "bg-[#1E3A8A] text-white shadow-[0_10px_24px_rgba(30,58,138,0.25)]"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#BFDBFE] hover:text-[#1E3A8A]"
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category.slug
                    ? "bg-[#1E3A8A] text-white shadow-[0_10px_24px_rgba(30,58,138,0.25)]"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#BFDBFE] hover:text-[#1E3A8A]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <BlogListGrid posts={filteredPosts} />
    </section>
  );
}
