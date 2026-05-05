import { expect, test } from "@playwright/test";

test("main public pages load and core navigation works", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /make smarter decisions about/i })).toBeVisible();

  await page.getByRole("link", { name: "Digital Skills" }).first().click();
  await expect(page).toHaveURL(/\/digital-skills$/);
  await expect(page.getByRole("heading", { name: /navigate your career with/i })).toBeVisible();

  await page.getByRole("link", { name: "Courses & Certifications" }).first().click();
  await expect(page).toHaveURL(/\/courses-certifications$/);
  await expect(page.getByRole("heading", { name: /choosing the right/i })).toBeVisible();

  await page.getByRole("link", { name: "Career Guides" }).first().click();
  await expect(page).toHaveURL(/\/career-guides$/);
  await expect(page.getByRole("heading", { name: /digital career/i })).toBeVisible();

  await page.getByRole("link", { name: "Blog" }).first().click();
  await expect(page).toHaveURL(/\/blog$/);
  await expect(page.getByRole("heading", { name: /practical blogs on digital skills/i })).toBeVisible();
});

test("seo and discovery endpoints respond successfully", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  await expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  await expect(await sitemap.text()).toContain("/digital-skills");

  const manifest = await request.get("/manifest.webmanifest");
  expect(manifest.ok()).toBeTruthy();
  const manifestJson = await manifest.json();
  expect(manifestJson.lang).toBe("en-IN");

  const llms = await request.get("/llms.txt");
  expect(llms.ok()).toBeTruthy();
  await expect(await llms.text()).toContain("## Primary Sections");
});

test("contact form submits successfully", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel("Full Name").fill("E2E Smoke Test");
  await page.getByLabel("Email Address").fill("e2e-smoke@example.com");
  await page.getByLabel("Subject").selectOption("General Query");
  await page.getByLabel("Message").fill("This is an automated end-to-end smoke test submission.");
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("Your message has been saved successfully.")).toBeVisible();
});
