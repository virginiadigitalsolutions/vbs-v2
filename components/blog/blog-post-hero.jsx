"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ShareButton({ post }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = post.title;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  const shareLinks = [
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-[#BFDBFE] hover:text-[#1d4ed8] hover:shadow-md"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Share Article
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-3 min-w-[200px] animate-fade-in-up rounded-2xl border border-slate-100 bg-white p-3 shadow-xl">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-[#EFF6FF] hover:text-[#1d4ed8]"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={handleCopy}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-[#EFF6FF] hover:text-[#1d4ed8]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogPostHero({ post }) {
  return (
    <section className="relative overflow-hidden pb-0 pt-24 lg:pt-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a42] via-[#132852] to-[#0b1a42]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.3),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(15,118,110,0.2),_transparent_50%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-white/50">
          <Link
            href="/blog"
            className="transition-colors hover:text-white/80"
          >
            Blog
          </Link>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-40"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <Link
            href={`/blog/${post.categorySlug}`}
            className="transition-colors hover:text-white/80"
          >
            {post.category}
          </Link>
        </nav>

        {/* Main hero grid: image left, info right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left: Banner image */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#1d4ed8]/30 via-[#0f766e]/20 to-[#f59e0b]/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <Image
                src="/blog-digital-skills-2026.png"
                alt={post.imageAlt}
                width={800}
                height={560}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a42]/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Post info */}
          <div className="flex flex-col gap-7">
            {/* Banner tagline */}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
              {post.banner}
            </p>

            {/* Title */}
            <h1 className="font-heading text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[2.5rem]">
              {post.title}
            </h1>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/blog/${post.categorySlug}`}
                className="rounded-full bg-[#1d4ed8]/20 px-4 py-2 text-sm font-semibold text-[#93bbfd] backdrop-blur-sm transition-all hover:bg-[#1d4ed8]/30 hover:text-white"
              >
                {post.category}
              </Link>
              <span className="flex items-center gap-1.5 text-sm font-medium text-white/50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {post.dateLabel}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-white/50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {post.readTime}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

            {/* Author row */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0f766e] text-lg font-bold text-white shadow-lg">
                {post.author
                  ? post.author
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                  : "VB"}
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  {post.author || "Virginia Business Solutions"}
                </p>
                <p className="text-sm font-medium text-white/50">
                  {post.authorRole || "Digital Skills & Career Growth"}
                </p>
              </div>
            </div>

            {/* Share button */}
            <ShareButton post={post} />
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="relative z-10 mt-12 lg:mt-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,48 C360,80 720,0 1080,48 C1260,64 1380,56 1440,48 L1440,80 L0,80 Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
