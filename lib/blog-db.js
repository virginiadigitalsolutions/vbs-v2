import { contactDb } from "@/lib/contact-db";

contactDb.exec(`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category_name TEXT NOT NULL,
    category_slug TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    meta_title TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    banner TEXT NOT NULL,
    image_alt TEXT NOT NULL,
    date_label TEXT NOT NULL,
    read_time TEXT NOT NULL,
    author TEXT NOT NULL,
    author_role TEXT NOT NULL,
    intro_json TEXT NOT NULL,
    toc_json TEXT NOT NULL DEFAULT '[]',
    sections_json TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

const blogColumns = contactDb
  .prepare("PRAGMA table_info(blog_posts)")
  .all()
  .map((column) => column.name);

if (!blogColumns.includes("toc_json")) {
  contactDb.exec(
    "ALTER TABLE blog_posts ADD COLUMN toc_json TEXT NOT NULL DEFAULT '[]'"
  );
}

export function insertBlogPost(post) {
  const statement = contactDb.prepare(`
    INSERT INTO blog_posts (
      title,
      slug,
      category_name,
      category_slug,
      excerpt,
      meta_title,
      meta_description,
      banner,
      image_alt,
      date_label,
      read_time,
      author,
      author_role,
      intro_json,
      toc_json,
      sections_json
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const result = statement.run(
    post.title,
    post.slug,
    post.category,
    post.categorySlug,
    post.excerpt,
    post.metaTitle,
    post.metaDescription,
    post.banner,
    post.imageAlt,
    post.dateLabel,
    post.readTime,
    post.author,
    post.authorRole,
    JSON.stringify(post.intro),
    JSON.stringify(post.toc || []),
    JSON.stringify(post.sections)
  );

  return {
    id: Number(result.lastInsertRowid),
    createdAt: new Date().toISOString(),
    ...post,
  };
}

export function getStoredBlogPostById(id) {
  const statement = contactDb.prepare(`
    SELECT
      id,
      title,
      slug,
      category_name AS category,
      category_slug AS categorySlug,
      excerpt,
      meta_title AS metaTitle,
      meta_description AS metaDescription,
      banner,
      image_alt AS imageAlt,
      date_label AS dateLabel,
      read_time AS readTime,
      author,
      author_role AS authorRole,
      intro_json AS introJson,
      toc_json AS tocJson,
      sections_json AS sectionsJson,
      created_at AS createdAt
    FROM blog_posts
    WHERE id = ?
  `);

  const row = statement.get(id);

  if (!row) {
    return null;
  }

  return {
    ...row,
    intro: JSON.parse(row.introJson),
    toc: JSON.parse(row.tocJson),
    sections: JSON.parse(row.sectionsJson),
  };
}

export function updateStoredBlogPost(id, post) {
  const statement = contactDb.prepare(`
    UPDATE blog_posts
    SET
      title = ?,
      slug = ?,
      category_name = ?,
      category_slug = ?,
      excerpt = ?,
      meta_title = ?,
      meta_description = ?,
      banner = ?,
      image_alt = ?,
      date_label = ?,
      read_time = ?,
      author = ?,
      author_role = ?,
      intro_json = ?,
      toc_json = ?,
      sections_json = ?
    WHERE id = ?
  `);

  const result = statement.run(
    post.title,
    post.slug,
    post.category,
    post.categorySlug,
    post.excerpt,
    post.metaTitle,
    post.metaDescription,
    post.banner,
    post.imageAlt,
    post.dateLabel,
    post.readTime,
    post.author,
    post.authorRole,
    JSON.stringify(post.intro),
    JSON.stringify(post.toc || []),
    JSON.stringify(post.sections),
    id
  );

  return result.changes > 0;
}

export function deleteStoredBlogPost(id) {
  const statement = contactDb.prepare(`
    DELETE FROM blog_posts
    WHERE id = ?
  `);

  const result = statement.run(id);
  return result.changes > 0;
}

export function getStoredBlogPosts() {
  const statement = contactDb.prepare(`
    SELECT
      id,
      title,
      slug,
      category_name AS category,
      category_slug AS categorySlug,
      excerpt,
      meta_title AS metaTitle,
      meta_description AS metaDescription,
      banner,
      image_alt AS imageAlt,
      date_label AS dateLabel,
      read_time AS readTime,
      author,
      author_role AS authorRole,
      intro_json AS introJson,
      toc_json AS tocJson,
      sections_json AS sectionsJson,
      created_at AS createdAt
    FROM blog_posts
    ORDER BY datetime(created_at) DESC, id DESC
  `);

  return statement.all().map((row) => ({
    ...row,
    intro: JSON.parse(row.introJson),
    toc: JSON.parse(row.tocJson),
    sections: JSON.parse(row.sectionsJson),
  }));
}
