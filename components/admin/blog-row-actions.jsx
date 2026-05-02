"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogRowActions({ post }) {
  const [isImporting, setIsImporting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleImport() {
    setIsImporting(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/blogs/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: post.slug }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to import blog.");
      }

      setMessage("Imported");
      window.setTimeout(() => {
        window.location.href = `/admin/blogs/${result.data.id}/edit`;
      }, 400);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Import failed");
    } finally {
      setIsImporting(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href={`/blog/${post.categorySlug}/${post.slug}`}
        className="text-sm font-semibold text-[#2563EB] transition hover:text-[#1E3A8A]"
      >
        View
      </Link>
      {post.id ? (
        <Link
          href={`/admin/blogs/${post.id}/edit`}
          className="text-sm font-semibold text-[#0f766e] transition hover:text-[#0b5f59]"
        >
          Edit
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleImport}
          disabled={isImporting}
          className="text-sm font-semibold text-[#0f766e] transition hover:text-[#0b5f59] disabled:opacity-60"
        >
          {isImporting ? "Importing..." : "Import To DB"}
        </button>
      )}
      {message ? <span className="text-xs text-slate-500">{message}</span> : null}
    </div>
  );
}
