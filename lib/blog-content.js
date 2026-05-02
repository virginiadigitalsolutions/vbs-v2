import { blogCategories, blogPosts } from "@/components/blog/blog-posts-data";
import {
  deleteStoredBlogPost,
  getStoredBlogPostById,
  getStoredBlogPosts,
  insertBlogPost,
  updateStoredBlogPost,
} from "@/lib/blog-db";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseParagraphBlocks(value) {
  return value
    .split(/\r?\n\r?\n+/)
    .map((item) => item.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);
}

function buildSectionsFromText(content) {
  const sections = [];
  const normalized = content.replace(/\r\n/g, "\n").trim();

  if (!normalized) {
    return [
      {
        id: "overview",
        title: "Overview",
        paragraphs: ["Content will be added soon."],
      },
    ];
  }

  const matches = [...normalized.matchAll(/^##\s+(.+)$/gm)];

  if (matches.length === 0) {
    return [
      {
        id: "overview",
        title: "Overview",
        paragraphs: parseParagraphBlocks(normalized),
      },
    ];
  }

  matches.forEach((match, index) => {
    const title = match[1].trim();
    const start = match.index + match[0].length;
    const end =
      index + 1 < matches.length ? matches[index + 1].index : normalized.length;
    const body = normalized.slice(start, end).trim();
    const idBase = slugify(title) || `section-${index + 1}`;

    sections.push({
      id: idBase,
      title,
      paragraphs: parseParagraphBlocks(body),
    });
  });

  return sections.filter((section) => section.paragraphs.length > 0);
}

function buildToc(sections) {
  return sections.map((section) => ({
    id: section.id,
    label: section.title,
  }));
}

function toSortableTimestamp(post) {
  if (post.createdAt) {
    const createdAtValue = Date.parse(post.createdAt);
    if (!Number.isNaN(createdAtValue)) {
      return createdAtValue;
    }
  }

  const labelValue = Date.parse(post.dateLabel);
  return Number.isNaN(labelValue) ? 0 : labelValue;
}

function normalizeStoredPost(post) {
  return {
    ...post,
    toc: post.toc?.length ? post.toc : buildToc(post.sections),
  };
}

function stringifySections(sections) {
  return sections
    .map(
      (section) =>
        `## ${section.title}\n\n${(section.paragraphs || []).join("\n\n")}`.trim()
    )
    .join("\n\n");
}

export function getBlogCategories() {
  return blogCategories;
}

export function getAllBlogPosts() {
  const storedPosts = getStoredBlogPosts().map(normalizeStoredPost);
  const storedSlugs = new Set(storedPosts.map((post) => post.slug));
  const staticPosts = blogPosts.filter((post) => !storedSlugs.has(post.slug));
  const mergedPosts = [...storedPosts, ...staticPosts];

  return mergedPosts.sort(
    (left, right) => toSortableTimestamp(right) - toSortableTimestamp(left)
  );
}

export function getBlogCategoryBySlug(slug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostBySlug(slug) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getStoredBlogPostForEdit(id) {
  const post = getStoredBlogPostById(id);

  if (!post) {
    return null;
  }

  return {
    ...post,
    introText: (post.intro || []).join("\n\n"),
    content: stringifySections(post.sections || []),
    introJson: JSON.stringify(post.intro || [], null, 2),
    tocJson: JSON.stringify(
      post.toc?.length ? post.toc : buildToc(post.sections || []),
      null,
      2
    ),
    sectionsJson: JSON.stringify(post.sections || [], null, 2),
  };
}

export function getStaticBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getBlogPostsByCategorySlug(categorySlug) {
  return getAllBlogPosts().filter((post) => post.categorySlug === categorySlug);
}

export function createBlogPost(input) {
  return saveBlogPost(input);
}

export function importStaticBlogPost(slug) {
  const staticPost = getStaticBlogPostBySlug(slug);

  if (!staticPost) {
    throw new Error("Static blog post not found.");
  }

  const existingStoredPost = getStoredBlogPosts().find((post) => post.slug === slug);
  if (existingStoredPost) {
    return existingStoredPost;
  }

  return insertBlogPost({
    slug: staticPost.slug,
    category: staticPost.category,
    categorySlug: staticPost.categorySlug,
    title: staticPost.title,
    metaTitle: staticPost.metaTitle,
    metaDescription: staticPost.metaDescription,
    banner: staticPost.banner,
    imageAlt: staticPost.imageAlt,
    excerpt: staticPost.excerpt,
    dateLabel: staticPost.dateLabel,
    readTime: staticPost.readTime,
    author: staticPost.author,
    authorRole: staticPost.authorRole,
    intro: staticPost.intro,
    toc: staticPost.toc || buildToc(staticPost.sections),
    sections: staticPost.sections,
  });
}

function saveBlogPost(input, existingId) {
  const category = getBlogCategoryBySlug(input.categorySlug);

  if (!category) {
    throw new Error("Selected category is invalid.");
  }

  const title = input.title.trim();
  const slug = slugify(input.slug?.trim() || title);
  const intro = parseIntroInput(input);
  const sections = parseSectionsInput(input);
  const toc = parseTocInput(input, sections);

  if (!title || !slug) {
    throw new Error("Title is required.");
  }

  const existingPost = getBlogPostBySlug(slug);
  if (existingPost && Number(existingPost.id) !== Number(existingId)) {
    throw new Error("A blog with this slug already exists.");
  }

  const today = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const blogPost = {
    slug,
    category: category.name,
    categorySlug: category.slug,
    title,
    metaTitle: input.metaTitle.trim() || title,
    metaDescription: input.metaDescription.trim() || input.excerpt.trim(),
    banner: input.banner.trim() || title,
    imageAlt: input.imageAlt.trim() || title,
    excerpt: input.excerpt.trim(),
    dateLabel: input.dateLabel.trim() || today,
    readTime: input.readTime.trim() || "6 min read",
    author: input.author.trim() || "Virginia Business Solutions",
    authorRole: input.authorRole.trim() || "Digital Skills & Career Growth",
    intro,
    toc,
    sections,
  };

  if (!blogPost.excerpt) {
    throw new Error("Excerpt is required.");
  }

  if (blogPost.intro.length === 0) {
    throw new Error("Intro is required.");
  }

  if (existingId) {
    const updated = updateStoredBlogPost(existingId, blogPost);

    if (!updated) {
      throw new Error("Blog post not found.");
    }

    return {
      id: Number(existingId),
      ...blogPost,
    };
  }

  return insertBlogPost(blogPost);
}

export function updateBlogPost(id, input) {
  const existingPost = getStoredBlogPostById(id);

  if (!existingPost) {
    throw new Error("Blog post not found.");
  }

  return saveBlogPost(input, id);
}

export function removeBlogPost(id) {
  const existingPost = getStoredBlogPostById(id);

  if (!existingPost) {
    throw new Error("Blog post not found.");
  }

  const deleted = deleteStoredBlogPost(id);

  if (!deleted) {
    throw new Error("Blog post could not be deleted.");
  }

  return existingPost;
}

function parseJsonField(value, fieldName) {
  try {
    return JSON.parse(value);
  } catch {
    throw new Error(`${fieldName} must be valid JSON.`);
  }
}

function parseIntroInput(input) {
  const introJson = input.introJson?.trim();

  if (introJson) {
    const parsed = parseJsonField(introJson, "Intro JSON");

    if (!Array.isArray(parsed) || parsed.some((item) => typeof item !== "string")) {
      throw new Error("Intro JSON must be an array of strings.");
    }

    return parsed.map((item) => item.trim()).filter(Boolean);
  }

  return parseParagraphBlocks(input.introText?.trim() || "");
}

function parseSectionsInput(input) {
  const sectionsJson = input.sectionsJson?.trim();

  if (sectionsJson) {
    const parsed = parseJsonField(sectionsJson, "Sections JSON");

    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("Sections JSON must be a non-empty array.");
    }

    const invalidSection = parsed.find(
      (section) =>
        !section ||
        typeof section !== "object" ||
        typeof section.id !== "string" ||
        typeof section.title !== "string"
    );

    if (invalidSection) {
      throw new Error("Each section must contain string id and title fields.");
    }

    return parsed;
  }

  return buildSectionsFromText(input.content?.trim() || "");
}

function parseTocInput(input, sections) {
  const tocJson = input.tocJson?.trim();

  if (tocJson) {
    const parsed = parseJsonField(tocJson, "Table of contents JSON");

    if (
      !Array.isArray(parsed) ||
      parsed.some(
        (item) =>
          !item ||
          typeof item !== "object" ||
          typeof item.id !== "string" ||
          typeof item.label !== "string"
      )
    ) {
      throw new Error("Table of contents JSON must be an array of { id, label } objects.");
    }

    return parsed;
  }

  return buildToc(sections);
}
