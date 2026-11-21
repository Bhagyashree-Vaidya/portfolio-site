import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// All public pages are open to search and AI crawlers (Googlebot, Bingbot,
// OAI-SearchBot, PerplexityBot, etc. all match "*"). To opt out of model
// training while staying in AI search, add e.g. { userAgent: "GPTBot", disallow: "/" }.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
