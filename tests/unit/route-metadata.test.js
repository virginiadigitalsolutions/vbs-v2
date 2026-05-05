import { describe, expect, it } from "vitest";

import { GET as llmsGet } from "@/app/llms.txt/route";
import manifest from "@/app/manifest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/lib/site-config";

describe("robots route", () => {
  it("allows public crawling and blocks admin/api routes", () => {
    const config = robots();

    expect(config.host).toBe(siteConfig.url);
    expect(config.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
    expect(config.rules[0].allow).toBe("/");
    expect(config.rules[0].disallow).toContain("/admin");
    expect(config.rules[0].disallow).toContain("/api");
  });
});

describe("manifest route", () => {
  it("returns a valid app manifest for India locale", () => {
    const webmanifest = manifest();

    expect(webmanifest.name).toBe(siteConfig.name);
    expect(webmanifest.lang).toBe("en-IN");
    expect(webmanifest.start_url).toBe("/");
    expect(webmanifest.icons).toHaveLength(2);
  });
});

describe("llms route", () => {
  it("returns a plain-text site guide for LLM crawlers", async () => {
    const response = llmsGet();
    const text = await response.text();

    expect(response.headers.get("Content-Type")).toContain("text/plain");
    expect(text).toContain("# Virginia Business Solutions");
    expect(text).toContain(`${siteConfig.url}/digital-skills`);
    expect(text).toContain("## Blog Articles");
  });
});

describe("sitemap route", () => {
  it("includes core public pages and blog entries", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain(`${siteConfig.url}/`);
    expect(urls).toContain(`${siteConfig.url}/about-us`);
    expect(urls).toContain(`${siteConfig.url}/blog`);
    expect(urls).toContain(`${siteConfig.url}/blog/digital-skills`);
    expect(
      urls.some((url) =>
        url.includes(
          "/blog/digital-skills/7-best-digital-skills-to-learn-in-2026-for-students-and-working-professionals-in-india"
        )
      )
    ).toBe(true);
  });

  it("does not expose admin pages in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls.some((url) => url.includes("/admin"))).toBe(false);
  });
});
