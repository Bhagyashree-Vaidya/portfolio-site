import type { MetadataRoute } from "next";
import { ALL_DOCS, KIND_META, docPath } from "@/content/registry";
import { SITE_URL } from "@/lib/site";
import { postPath, publishedPosts } from "@/content/blog";
import { TEARDOWNS } from "@/content/teardowns";
import { DECKS } from "@/content/teardowns/decks";

// Re-check hourly so scheduled blog posts are listed on their publish date.
export const revalidate = 3600;

// Only canonical, indexable URLs. Content pages are added automatically from the registry.
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date("2026-11-21");
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 1 },
    ...Object.values(KIND_META).map((k) => ({
      url: `${SITE_URL}${k.base}`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/research/confirmation-bias-ai`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/resume`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/projects/pama`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.5 },
  ];
  const docs: MetadataRoute.Sitemap = ALL_DOCS.map((d) => ({
    url: `${SITE_URL}${docPath(d)}`,
    lastModified: new Date(d.updated),
    changeFrequency: "yearly",
    priority: d.kind === "insight" ? 0.6 : 0.7,
  }));
  const posts: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: new Date(publishedPosts()[0]?.date ?? "2026-11-21"), changeFrequency: "daily", priority: 0.7 },
    ...publishedPosts().map((p) => ({
      url: `${SITE_URL}${postPath(p)}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
  const tds: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/teardowns`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.6 },
    ...TEARDOWNS.map((t) => ({ url: `${SITE_URL}/teardowns/${t.slug}`, lastModified: new Date(t.date), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...DECKS.map((d) => ({ url: `${SITE_URL}/teardowns/decks/${d.id}`, lastModified: siteUpdated, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
  return [...pages, ...docs, ...posts, ...tds];
}
