import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Only canonical, indexable URLs. Add new routes here when they ship.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-21");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/research/confirmation-bias-ai`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/projects/pama`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
