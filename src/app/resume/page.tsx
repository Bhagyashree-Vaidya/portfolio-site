import type { Metadata } from "next";
import Link from "next/link";
import { PERSON, SITE_URL, jsonLdString, mailto, personJsonLd } from "@/lib/site";

// Plain, server-rendered résumé. Same facts and wording as the master résumé,
// so search and AI tools that look up résumé phrases land on a verified page.
export const metadata: Metadata = {
  title: "Résumé: Senior Product Manager, AI & Search",
  description:
    "Résumé of Bhagyashree (Shree) Vaidya, Senior Product Manager: VWO (Wingz AI agent), Unity Senior Health, Stallion Express, BrandingArc. UW MS, PMP.",
  alternates: { canonical: "/resume" },
  openGraph: { url: "/resume", type: "profile" },
};

const roles = [
  {
    org: "VWO (Wingify)", title: "Senior Product Manager, AI Agents", dates: "Mar 2024 – Sep 2025", place: "India (remote)",
    points: [
      "Owned Wingz end to end, a production LLM-powered A/B testing agent that automated 15K–20K test configuration actions per week for 40–50 enterprise accounts.",
      "Reduced critical agent errors by more than 61% in two months (about 9% to under 3.5%) with a failure taxonomy, risk-based validation gates and human review for high-risk actions.",
      "Built the AI evaluation framework with subject-matter experts, including a 600-pair golden set, cutting evaluation review from 1–2 days to under a minute.",
      "Improved search and recommendation relevance with hybrid retrieval, LambdaMART learning-to-rank and cross-encoder reranking (NDCG@5 0.68 to 0.74 within a 450 ms p95 budget).",
      "Managed implementation for 65+ enterprise clients and raised trial activation 16%.",
    ],
  },
  {
    org: "Unity Senior Health", title: "Technical Member, Product (Contract)", dates: "Sep 2023 – Mar 2024", place: "USA (remote)",
    points: [
      "Owned the consumer Medicare plan discovery and enrollment journey through the 2024 Annual Enrollment Period.",
      "Cut plan-selection drop-off 32% and acquisition cost from $210 to $172 per enrollment; reduced plans to compare from 12 to 4 with personalized ranking, validated through 4 A/B tests.",
      "Redesigned enrollment intake with LLM extraction, a rules engine and human review: policy issuing time down 35% at 99.2% accuracy.",
      "Wrote 40 test cases from CMS, HIPAA and TCPA rules and led UAT across 12 pilot states.",
    ],
  },
  {
    org: "Stallion Express", title: "Product Manager", dates: "Apr 2020 – Sep 2023", place: "Mississauga, Ontario, Canada",
    points: [
      "Cut checkout abandonment 14% with multi-carrier rate comparison and a best-value default ranking.",
      "Lifted first-shipment activation 22% with location-based matching to nearby drop-off hubs.",
      "Launched Shipping Assist, a new vertical selling packaging supplies at Drop & Go locations across Canada.",
      "Expanded the Drop & Go network to 10+ locations on reusable pricing infrastructure covering 32 shipping zones.",
    ],
  },
  {
    org: "BrandingArc", title: "Product Manager (2018–2020); Associate Product Manager (2016–2018)", dates: "Aug 2016 – Apr 2020", place: "USA",
    points: [
      "Grew a self-service AWS provisioning platform 20x, from 5 design partners to about 100 customers.",
      "Cut provisioning time more than 95%, from 6–8 hours to 15–20 minutes, by specifying real-time pre-deployment validation.",
      "Scoped the MVP to 4 service types covering about 80% of demand.",
    ],
  },
  {
    org: "University of Washington, ECE FunLab", title: "Graduate Product Developer, Satellite Signal Research", dates: "Mar 2026 – Jun 2026", place: "On-site",
    points: [
      "Built a 0-to-1 Python and Streamlit data product comparing detected Starlink signals with orbital models: processing from hours to under a minute, 90%+ detection accuracy.",
    ],
  },
];

export default function ResumePage() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ProfilePage", "@id": `${SITE_URL}/resume#page`, url: `${SITE_URL}/resume`, name: "Résumé of Bhagyashree (Shree) Vaidya", mainEntity: { "@id": `${SITE_URL}/#person` } },
      personJsonLd(),
    ],
  };
  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <article className="mx-auto w-full max-w-[820px] px-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary">Bhagyashree (Shree) Vaidya</h1>
        <p className="mt-2 text-lg text-text-secondary">Senior Product Manager · AI agents, search &amp; personalization · Open to relocation</p>
        <p className="mt-2 text-sm text-text-secondary">
          <a href={mailto("From your résumé page")} className="underline">{PERSON.email}</a> ·{" "}
          <a href={PERSON.linkedin} className="underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·{" "}
          <a href={PERSON.github} className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-text-primary">Summary</h2>
          <p className="mt-3 leading-relaxed text-text-secondary">
            Product manager with 8+ years across e-commerce, cross-border shipping, Medicare insurance and B2B SaaS. Work covers search,
            ranking and recommendations, production LLM agents and AI evaluation, experimentation and funnel analytics, and
            enterprise implementation. M.S. in Information Management, University of Washington. PMP.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-text-primary">Experience</h2>
          <div className="mt-4 space-y-8">
            {roles.map((r) => (
              <div key={r.org}>
                <h3 className="text-lg font-semibold text-text-primary">{r.title}, {r.org}</h3>
                <p className="text-sm text-text-secondary">{r.dates} · {r.place}</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-text-secondary">
                  {r.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-text-primary">Education and certification</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-text-secondary">
            <li>M.S. Information Management, University of Washington (2026)</li>
            <li>B.E. Electrical Engineering, Rashtrasant Tukadoji Maharaj Nagpur University (2016)</li>
            <li>Project Management Professional (PMP), Project Management Institute (2026)</li>
          </ul>
        </section>

        <p className="mt-10 text-text-secondary">
          Details and trade-offs behind these results are in the <Link href="/case-studies" className="text-[#9C2F55] underline">case studies</Link>.
        </p>
      </article>
    </main>
  );
}
