import { CASE_STUDIES, EXPERTISE, INSIGHTS, docPath } from "@/content/registry";
import type { Doc } from "@/content/types";
import { PERSON, SHORT_BIO, SITE_URL } from "@/lib/site";
import { postPath, publishedPosts } from "@/content/blog";

// Experimental llms.txt (https://llmstxt.org): a plain-text map of the site for
// AI tools. Not a ranking factor; crawlable HTML remains the source of truth.
export const revalidate = 3600;

const line = (d: Doc) => `- [${d.title}](${SITE_URL}${docPath(d)}): ${d.description}`;

export function GET() {
  const body = `# ${PERSON.displayName}

> ${SHORT_BIO}

Contact: ${PERSON.email} · LinkedIn: ${PERSON.linkedin} · GitHub: ${PERSON.github}
Location: open to relocation, on-site, hybrid or remote. Open to Senior PM, AI PM and Technical PM roles.

## Experience
- VWO (Wingify), Senior Product Manager, AI Agents, Mar 2024 – Sep 2025: owned Wingz, an agentic AI product for A/B testing.
- Unity Senior Health, Technical Member, Product (Contract), Sep 2023 – Mar 2024: Medicare plan discovery and enrollment.
- Stallion Express, Product Manager, Apr 2020 – Sep 2023: cross-border shipping checkout, Drop & Go network, Shipping Assist.
- BrandingArc, Product Manager (2018–2020) and Associate PM (2016–2018): self-service AWS provisioning platform.
- University of Washington ECE FunLab, Graduate Product Developer, Mar – Jun 2026: Starlink signal data product.
- Education: M.S. Information Management, University of Washington (2026); B.E. Electrical Engineering, RTMNU (2016). PMP.

## Case studies
${CASE_STUDIES.map(line).join("\n")}

## Expertise
${EXPERTISE.map(line).join("\n")}

## Insights
${INSIGHTS.map(line).join("\n")}

## Blog (latest)
${publishedPosts().slice(0, 30).map((p) => `- [${p.title}](${SITE_URL}${postPath(p)}): ${p.description}`).join("\n") || "- First posts coming soon."}

## Research and projects
- [Confirmation Bias in LLM-Based AI Analytics Tools](${SITE_URL}/research/confirmation-bias-ai): June 2026 study.
- [PAMA](${SITE_URL}/projects/pama): AI-powered collaborative biography platform (UW iSchool microgrant).
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
