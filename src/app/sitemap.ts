import type { MetadataRoute } from "next";
import { ALL_DOCS, KIND_META, docPath } from "@/content/registry";
import { SITE_URL } from "@/lib/site";

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
    { url: `${SITE_URL}/projects/pama`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.5 },
  ];
  const docs: MetadataRoute.Sitemap = ALL_DOCS.map((d) => ({
    url: `${SITE_URL}${docPath(d)}`,
    lastModified: new Date(d.updated),
    changeFrequency: "yearly",
    priority: d.kind === "insight" ? 0.6 : 0.7,
  }));
  return [...pages, ...docs];
}
