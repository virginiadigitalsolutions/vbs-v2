"use client";

import { useMemo, useState } from "react";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function splitLines(value) {
  return value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function joinLines(items) {
  return (items || []).join("\n");
}

function splitParagraphs(value) {
  return value
    .split(/\r?\n\r?\n+/)
    .map((item) => item.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);
}

function joinParagraphs(items) {
  return (items || []).join("\n\n");
}

function createEmptySkillCard() {
  return {
    title: "",
    description: "",
    bulletsText: "",
    whereItFitsText: "",
    suits: "",
    note: "",
  };
}

function createEmptySplitCard() {
  return {
    title: "",
    description: "",
    bulletsText: "",
    footer: "",
  };
}

function createEmptyMistakeCard() {
  return {
    title: "",
    description: "",
  };
}

function createEmptySection() {
  return {
    id: "",
    title: "",
    paragraphsText: "",
    listText: "",
    closing: "",
    decisionCardsText: "",
    stageCardsText: "",
    skillCards: [],
    splitCards: [],
    mistakeCards: [],
  };
}

function sectionToEditor(section) {
  return {
    id: section.id || "",
    title: section.title || "",
    paragraphsText: joinParagraphs(section.paragraphs),
    listText: joinLines(section.list),
    closing: section.closing || "",
    decisionCardsText: joinLines(section.decisionCards),
    stageCardsText: joinLines(section.stageCards),
    skillCards: (section.skillCards || []).map((item) => ({
      title: item.title || "",
      description: item.description || "",
      bulletsText: joinLines(item.bullets),
      whereItFitsText: joinLines(item.whereItFits),
      suits: item.suits || "",
      note: item.note || "",
    })),
    splitCards: (section.splitCards || []).map((item) => ({
      title: item.title || "",
      description: item.description || "",
      bulletsText: joinLines(item.bullets),
      footer: item.footer || "",
    })),
    mistakeCards: (section.mistakeCards || []).map((item) => ({
      title: item.title || "",
      description: item.description || "",
    })),
  };
}

function editorToSection(section) {
  const title = section.title.trim();
  const id = section.id.trim() || slugify(title) || "section";
  const parsed = {
    id,
    title,
  };

  const paragraphs = splitParagraphs(section.paragraphsText);
  if (paragraphs.length) {
    parsed.paragraphs = paragraphs;
  }

  const list = splitLines(section.listText);
  if (list.length) {
    parsed.list = list;
  }

  if (section.closing.trim()) {
    parsed.closing = section.closing.trim();
  }

  const decisionCards = splitLines(section.decisionCardsText);
  if (decisionCards.length) {
    parsed.decisionCards = decisionCards;
  }

  const stageCards = splitLines(section.stageCardsText);
  if (stageCards.length) {
    parsed.stageCards = stageCards;
  }

  const skillCards = section.skillCards
    .map((item) => ({
      title: item.title.trim(),
      description: item.description.trim(),
      bullets: splitLines(item.bulletsText),
      whereItFits: splitLines(item.whereItFitsText),
      suits: item.suits.trim(),
      note: item.note.trim(),
    }))
    .filter((item) => item.title);
  if (skillCards.length) {
    parsed.skillCards = skillCards;
  }

  const splitCards = section.splitCards
    .map((item) => ({
      title: item.title.trim(),
      description: item.description.trim(),
      bullets: splitLines(item.bulletsText),
      footer: item.footer.trim(),
    }))
    .filter((item) => item.title);
  if (splitCards.length) {
    parsed.splitCards = splitCards;
  }

  const mistakeCards = section.mistakeCards
    .map((item) => ({
      title: item.title.trim(),
      description: item.description.trim(),
    }))
    .filter((item) => item.title);
  if (mistakeCards.length) {
    parsed.mistakeCards = mistakeCards;
  }

  return parsed;
}

function createInitialForm(initialValues) {
  return {
    categorySlug: initialValues?.categorySlug || "digital-skills",
    title: initialValues?.title || "",
    slug: initialValues?.slug || "",
    excerpt: initialValues?.excerpt || "",
    metaTitle: initialValues?.metaTitle || "",
    metaDescription: initialValues?.metaDescription || "",
    banner: initialValues?.banner || "",
    imageAlt: initialValues?.imageAlt || "",
    dateLabel: initialValues?.dateLabel || "",
    readTime: initialValues?.readTime || "6 min read",
    author: initialValues?.author || "Virginia Business Solutions",
    authorRole:
      initialValues?.authorRole || "Digital Skills & Career Growth",
    introText: initialValues?.introText || "",
  };
}

function createInitialSections(initialValues) {
  if (initialValues?.sectionsJson) {
    try {
      const parsed = JSON.parse(initialValues.sectionsJson);
      if (Array.isArray(parsed) && parsed.length) {
        return parsed.map(sectionToEditor);
      }
    } catch {
      return [createEmptySection()];
    }
  }

  return [createEmptySection()];
}

function CardActions({ onRemove, onMoveUp, onMoveDown, disableUp, disableDown }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onMoveUp}
        disabled={disableUp}
        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 disabled:opacity-40"
      >
        Move Up
      </button>
      <button
        type="button"
        onClick={onMoveDown}
        disabled={disableDown}
        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 disabled:opacity-40"
      >
        Move Down
      </button>
      <button
        type="button"
        onClick={onRemove}
        className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700"
      >
        Remove
      </button>
    </div>
  );
}

export default function BlogForm({
  categories,
  mode = "create",
  initialValues,
  postId,
}) {
  const [formData, setFormData] = useState(() => createInitialForm(initialValues));
  const [sections, setSections] = useState(() => createInitialSections(initialValues));
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const serializedSections = useMemo(
    () =>
      sections
        .map(editorToSection)
        .filter((section) => section.title),
    [sections]
  );

  const toc = useMemo(
    () =>
      serializedSections.map((section) => ({
        id: section.id,
        label: section.title,
      })),
    [serializedSections]
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function updateSection(index, key, value) {
    setSections((current) =>
      current.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, [key]: value } : section
      )
    );
  }

  function addSection() {
    setSections((current) => [...current, createEmptySection()]);
  }

  function removeSection(index) {
    setSections((current) => current.filter((_, sectionIndex) => sectionIndex !== index));
  }

  function moveSection(index, direction) {
    setSections((current) => {
      const next = [...current];
      const target = direction === "up" ? index - 1 : index + 1;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function updateNestedArray(sectionIndex, key, nextItems) {
    setSections((current) =>
      current.map((section, index) =>
        index === sectionIndex ? { ...section, [key]: nextItems } : section
      )
    );
  }

  function updateNestedItem(sectionIndex, key, itemIndex, field, value) {
    const items = [...sections[sectionIndex][key]];
    items[itemIndex] = { ...items[itemIndex], [field]: value };
    updateNestedArray(sectionIndex, key, items);
  }

  function addNestedItem(sectionIndex, key, createItem) {
    updateNestedArray(sectionIndex, key, [...sections[sectionIndex][key], createItem()]);
  }

  function removeNestedItem(sectionIndex, key, itemIndex) {
    updateNestedArray(
      sectionIndex,
      key,
      sections[sectionIndex][key].filter((_, index) => index !== itemIndex)
    );
  }

  function moveNestedItem(sectionIndex, key, itemIndex, direction) {
    const items = [...sections[sectionIndex][key]];
    const target = direction === "up" ? itemIndex - 1 : itemIndex + 1;
    [items[itemIndex], items[target]] = [items[target], items[itemIndex]];
    updateNestedArray(sectionIndex, key, items);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const isEdit = mode === "edit";
    const url = isEdit ? `/api/admin/blogs/${postId}` : "/api/admin/blogs";
    const method = isEdit ? "PUT" : "POST";

    const payload = {
      ...formData,
      introJson: JSON.stringify(splitParagraphs(formData.introText), null, 2),
      tocJson: JSON.stringify(toc, null, 2),
      sectionsJson: JSON.stringify(serializedSections, null, 2),
    };

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            (isEdit ? "Failed to update blog post." : "Failed to create blog post.")
        );
      }

      setStatus({
        type: "success",
        message: isEdit
          ? `Blog updated. View it at /blog/${result.data.categorySlug}/${result.data.slug}`
          : `Blog created. View it at /blog/${result.data.categorySlug}/${result.data.slug}`,
      });

      if (!isEdit) {
        setFormData(createInitialForm());
        setSections([createEmptySection()]);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : isEdit
              ? "Failed to update blog post."
              : "Failed to create blog post.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!postId) {
      return;
    }

    const confirmed = window.confirm(
      "Delete this blog post? This action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`/api/admin/blogs/${postId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete blog post.");
      }

      setStatus({
        type: "success",
        message: "Blog deleted successfully. Returning to blog admin...",
      });

      window.setTimeout(() => {
        window.location.href = "/admin/blogs";
      }, 800);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to delete blog post.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  const actionLabel =
    mode === "edit"
      ? isSubmitting
        ? "Updating..."
        : "Update Blog Post"
      : isSubmitting
        ? "Creating..."
        : "Create Blog Post";

  return (
    <form className="grid gap-8" onSubmit={handleSubmit}>
      <div className="grid gap-6 lg:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Category</span>
          <select
            name="categorySlug"
            value={formData.categorySlug}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          >
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Title</span>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            placeholder="Enter blog title"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">
            Slug (optional)
          </span>
          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            placeholder="auto-generated-from-title"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">
            Read Time
          </span>
          <input
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            placeholder="6 min read"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Author</span>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">
            Author Role
          </span>
          <input
            name="authorRole"
            value={formData.authorRole}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">Excerpt</span>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          rows={3}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          placeholder="Short summary for blog cards"
          required
        />
      </label>

      <div className="grid gap-6 lg:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Meta Title</span>
          <input
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">
            Meta Description
          </span>
          <input
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Banner Text</span>
          <input
            name="banner"
            value={formData.banner}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Image Alt</span>
          <input
            name="imageAlt"
            value={formData.imageAlt}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">
          Intro Paragraphs
        </span>
        <textarea
          name="introText"
          value={formData.introText}
          onChange={handleChange}
          rows={8}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
          placeholder="Write intro paragraphs. Separate each paragraph with a blank line."
          required
        />
      </label>

      <div className="rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] px-5 py-4 text-sm leading-7 text-slate-700">
        This editor saves the same blog structure used by your existing dynamic
        article page. Fill only the block types you need inside each section.
      </div>

      <div className="grid gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-3xl text-slate-950">Sections</h3>
            <p className="mt-2 text-base text-slate-600">
              Add headings, paragraphs, lists, cards, and comparison blocks.
            </p>
          </div>
          <button
            type="button"
            onClick={addSection}
            className="rounded-full bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white"
          >
            Add Section
          </button>
        </div>

        {sections.map((section, sectionIndex) => (
          <article
            key={`section-${sectionIndex}`}
            className="rounded-[1.8rem] border border-slate-200 bg-white p-6 lg:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                  Section {sectionIndex + 1}
                </p>
                <h4 className="mt-2 font-heading text-2xl text-slate-950">
                  {section.title || "Untitled section"}
                </h4>
              </div>
              <CardActions
                onRemove={() => removeSection(sectionIndex)}
                onMoveUp={() => moveSection(sectionIndex, "up")}
                onMoveDown={() => moveSection(sectionIndex, "down")}
                disableUp={sectionIndex === 0}
                disableDown={sectionIndex === sections.length - 1}
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Section Title
                </span>
                <input
                  value={section.title}
                  onChange={(event) =>
                    updateSection(sectionIndex, "title", event.target.value)
                  }
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Anchor Id
                </span>
                <input
                  value={section.id}
                  onChange={(event) =>
                    updateSection(sectionIndex, "id", event.target.value)
                  }
                  placeholder="auto-from-title"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </label>
            </div>

            <div className="mt-6 grid gap-6">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Paragraphs
                </span>
                <textarea
                  value={section.paragraphsText}
                  onChange={(event) =>
                    updateSection(sectionIndex, "paragraphsText", event.target.value)
                  }
                  rows={6}
                  placeholder="Separate paragraphs with a blank line."
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  List Items
                </span>
                <textarea
                  value={section.listText}
                  onChange={(event) =>
                    updateSection(sectionIndex, "listText", event.target.value)
                  }
                  rows={4}
                  placeholder="One item per line."
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Closing Text
                </span>
                <textarea
                  value={section.closing}
                  onChange={(event) =>
                    updateSection(sectionIndex, "closing", event.target.value)
                  }
                  rows={3}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                />
              </label>

              <div className="grid gap-6 lg:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Decision Cards
                  </span>
                  <textarea
                    value={section.decisionCardsText}
                    onChange={(event) =>
                      updateSection(
                        sectionIndex,
                        "decisionCardsText",
                        event.target.value
                      )
                    }
                    rows={5}
                    placeholder="One card per line."
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Stage Cards
                  </span>
                  <textarea
                    value={section.stageCardsText}
                    onChange={(event) =>
                      updateSection(
                        sectionIndex,
                        "stageCardsText",
                        event.target.value
                      )
                    }
                    rows={5}
                    placeholder="One card per line."
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                  />
                </label>
              </div>
            </div>

            <div className="mt-8 grid gap-8">
              <div className="rounded-[1.4rem] border border-slate-200 bg-[#F8FAFC] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h5 className="font-heading text-2xl text-slate-950">
                    Skill Cards
                  </h5>
                  <button
                    type="button"
                    onClick={() =>
                      addNestedItem(sectionIndex, "skillCards", createEmptySkillCard)
                    }
                    className="rounded-full bg-[#E0ECFF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]"
                  >
                    Add Skill Card
                  </button>
                </div>

                <div className="mt-5 grid gap-5">
                  {section.skillCards.map((item, itemIndex) => (
                    <div
                      key={`skill-${itemIndex}`}
                      className="rounded-[1.2rem] border border-slate-200 bg-white p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h6 className="font-semibold text-slate-900">
                          Skill Card {itemIndex + 1}
                        </h6>
                        <CardActions
                          onRemove={() =>
                            removeNestedItem(sectionIndex, "skillCards", itemIndex)
                          }
                          onMoveUp={() =>
                            moveNestedItem(sectionIndex, "skillCards", itemIndex, "up")
                          }
                          onMoveDown={() =>
                            moveNestedItem(sectionIndex, "skillCards", itemIndex, "down")
                          }
                          disableUp={itemIndex === 0}
                          disableDown={itemIndex === section.skillCards.length - 1}
                        />
                      </div>

                      <div className="mt-4 grid gap-4 lg:grid-cols-2">
                        <input
                          value={item.title}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "skillCards",
                              itemIndex,
                              "title",
                              event.target.value
                            )
                          }
                          placeholder="Card title"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                        <input
                          value={item.suits}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "skillCards",
                              itemIndex,
                              "suits",
                              event.target.value
                            )
                          }
                          placeholder="Who it suits"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                      </div>
                      <textarea
                        value={item.description}
                        onChange={(event) =>
                          updateNestedItem(
                            sectionIndex,
                            "skillCards",
                            itemIndex,
                            "description",
                            event.target.value
                          )
                        }
                        rows={3}
                        placeholder="Description"
                        className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3"
                      />
                      <div className="mt-4 grid gap-4 lg:grid-cols-2">
                        <textarea
                          value={item.bulletsText}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "skillCards",
                              itemIndex,
                              "bulletsText",
                              event.target.value
                            )
                          }
                          rows={5}
                          placeholder="What it includes, one line per item"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                        <textarea
                          value={item.whereItFitsText}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "skillCards",
                              itemIndex,
                              "whereItFitsText",
                              event.target.value
                            )
                          }
                          rows={5}
                          placeholder="Where it fits, one line per item"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                      </div>
                      <textarea
                        value={item.note}
                        onChange={(event) =>
                          updateNestedItem(
                            sectionIndex,
                            "skillCards",
                            itemIndex,
                            "note",
                            event.target.value
                          )
                        }
                        rows={3}
                        placeholder="Reality check / note"
                        className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-slate-200 bg-[#F8FAFC] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h5 className="font-heading text-2xl text-slate-950">
                    Split Cards
                  </h5>
                  <button
                    type="button"
                    onClick={() =>
                      addNestedItem(sectionIndex, "splitCards", createEmptySplitCard)
                    }
                    className="rounded-full bg-[#E0ECFF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]"
                  >
                    Add Split Card
                  </button>
                </div>

                <div className="mt-5 grid gap-5">
                  {section.splitCards.map((item, itemIndex) => (
                    <div
                      key={`split-${itemIndex}`}
                      className="rounded-[1.2rem] border border-slate-200 bg-white p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h6 className="font-semibold text-slate-900">
                          Split Card {itemIndex + 1}
                        </h6>
                        <CardActions
                          onRemove={() =>
                            removeNestedItem(sectionIndex, "splitCards", itemIndex)
                          }
                          onMoveUp={() =>
                            moveNestedItem(sectionIndex, "splitCards", itemIndex, "up")
                          }
                          onMoveDown={() =>
                            moveNestedItem(sectionIndex, "splitCards", itemIndex, "down")
                          }
                          disableUp={itemIndex === 0}
                          disableDown={itemIndex === section.splitCards.length - 1}
                        />
                      </div>

                      <div className="mt-4 grid gap-4 lg:grid-cols-2">
                        <input
                          value={item.title}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "splitCards",
                              itemIndex,
                              "title",
                              event.target.value
                            )
                          }
                          placeholder="Card title"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                        <textarea
                          value={item.footer}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "splitCards",
                              itemIndex,
                              "footer",
                              event.target.value
                            )
                          }
                          rows={2}
                          placeholder="Footer text"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                      </div>
                      <textarea
                        value={item.description}
                        onChange={(event) =>
                          updateNestedItem(
                            sectionIndex,
                            "splitCards",
                            itemIndex,
                            "description",
                            event.target.value
                          )
                        }
                        rows={3}
                        placeholder="Description"
                        className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3"
                      />
                      <textarea
                        value={item.bulletsText}
                        onChange={(event) =>
                          updateNestedItem(
                            sectionIndex,
                            "splitCards",
                            itemIndex,
                            "bulletsText",
                            event.target.value
                          )
                        }
                        rows={5}
                        placeholder="Bullets, one item per line"
                        className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-slate-200 bg-[#F8FAFC] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h5 className="font-heading text-2xl text-slate-950">
                    Mistake Cards
                  </h5>
                  <button
                    type="button"
                    onClick={() =>
                      addNestedItem(sectionIndex, "mistakeCards", createEmptyMistakeCard)
                    }
                    className="rounded-full bg-[#E0ECFF] px-4 py-2 text-sm font-semibold text-[#1E3A8A]"
                  >
                    Add Mistake Card
                  </button>
                </div>

                <div className="mt-5 grid gap-5">
                  {section.mistakeCards.map((item, itemIndex) => (
                    <div
                      key={`mistake-${itemIndex}`}
                      className="rounded-[1.2rem] border border-slate-200 bg-white p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h6 className="font-semibold text-slate-900">
                          Mistake Card {itemIndex + 1}
                        </h6>
                        <CardActions
                          onRemove={() =>
                            removeNestedItem(sectionIndex, "mistakeCards", itemIndex)
                          }
                          onMoveUp={() =>
                            moveNestedItem(
                              sectionIndex,
                              "mistakeCards",
                              itemIndex,
                              "up"
                            )
                          }
                          onMoveDown={() =>
                            moveNestedItem(
                              sectionIndex,
                              "mistakeCards",
                              itemIndex,
                              "down"
                            )
                          }
                          disableUp={itemIndex === 0}
                          disableDown={itemIndex === section.mistakeCards.length - 1}
                        />
                      </div>

                      <div className="mt-4 grid gap-4">
                        <input
                          value={item.title}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "mistakeCards",
                              itemIndex,
                              "title",
                              event.target.value
                            )
                          }
                          placeholder="Card title"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                        <textarea
                          value={item.description}
                          onChange={(event) =>
                            updateNestedItem(
                              sectionIndex,
                              "mistakeCards",
                              itemIndex,
                              "description",
                              event.target.value
                            )
                          }
                          rows={3}
                          placeholder="Description"
                          className="rounded-2xl border border-slate-200 px-4 py-3"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-teal-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {actionLabel}
        </button>
        {mode === "edit" ? (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-8 py-4 text-base font-bold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isDeleting ? "Deleting..." : "Delete Blog Post"}
          </button>
        ) : null}
      </div>

      {status.message ? (
        <p
          className={
            status.type === "success"
              ? "text-sm font-medium text-emerald-700"
              : "text-sm font-medium text-rose-700"
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
