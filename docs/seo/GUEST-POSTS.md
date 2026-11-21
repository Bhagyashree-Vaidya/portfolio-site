# Guest-post plan (backlinks + credibility)

Goal: three guest posts on established PM publications, each with an author bio linking to https://www.shreevaidya.com. A link from a respected PM site helps both rankings and trust far more than any single blog post on your own site.

Each guest post must be **original**. Don't republish a post from your own blog; publications usually refuse duplicates, and duplicates don't earn the link. Write a deeper version (1,200–1,800 words), then link from it to the matching case study.

## Where to submit (checked 2026-11-21)

| Publication | How to submit | Notes |
|---|---|---|
| Mind the Product | Email the draft to editor@mindtheproduct.com and fill in the contributor survey ([write for Mind the Product](https://www.mindtheproduct.com/write-for-mind-the-product/), [content types](https://www.mindtheproduct.com/content-types/), [style guide](https://www.mindtheproduct.com/write-for-mind-the-product/editorial-style-guide/)) | Favors firsthand experience. About 4 weeks of review; first open slot is January 2027. They may not reply if they pass. |
| Product Coalition | Writer sign-up form with your Medium @handle ([form](https://docs.google.com/forms/d/e/1FAIpQLSe91RaAjmAZrZ8bqjhOpAksXJ8SBo-sAmjL1_VqLqlXPvbHoQ/viewform), [about](https://www.productcoalition.com/about)) | Wants "reporters and educators, not pundits"; lessons learned, no self-promotion. Moved its main home to Substack in 2024, so check the About page first. |
| Product School blog | Guest blogging page ([guidelines](https://sites.google.com/productschool.com/guest-blogging-product-school), [write for Product School](https://productschool.com/blog/product-management-2/write-for-product-people-product-school-blog-expert/)) | Large audience of aspiring and practicing PMs. |

## Pitch 1: Mind the Product

**Subject:** Guest post pitch: We paused our AI agent's auto-launch, and it made the product better

Hi Mind the Product team,

I'm Shree Vaidya, a Senior PM in Seattle. At VWO I owned Wingz, an LLM agent that configures and launches A/B tests for enterprise customers (15K to 20K actions a week). I'd like to write about the decision to pause fully automatic launches and how we decided when the agent could act on its own.

The piece covers the failure taxonomy we built, why we moved validation in front of execution, how human review became a release gate rather than a crutch, and how critical errors fell from about 9% to under 3.5% in two months. It also covers the honest attribution caveats and the failure category we missed at first.

Draft outline below. Happy to adapt it to your style guide.

Best,
Shree
https://www.shreevaidya.com

**Outline:** the launch we paused · what "critical error" meant · a failure taxonomy ranked by frequency x severity · validation before execution · human review as a gate · results and what we can't claim · the category we missed · a checklist for PMs shipping agents.
Links to: /case-studies/ai-agent-quality-evaluation, /insights/how-to-evaluate-ai-agents

## Pitch 2: Product Coalition

**Title idea:** Showing 4 options instead of 12: personalization in a regulated funnel

What I learned launching a Medicare plan-discovery flow. Shoppers saw 12 plans and left. 50+ interviews showed three questions mattered (doctors, drugs, monthly cost). Ranking down to 4 plans, with explained criteria and a "show all" escape hatch, cut plan-selection drop-off 32%. It also covers the compliance lessons: "unknown" can't look like "no", IP location isn't good enough, and design compliance in from day one.
Links to: /case-studies/medicare-plan-discovery

## Pitch 3: Product School

**Title idea:** Why people abandon checkout over shipping, and the ranking change that helped

Multi-carrier comparison with a best-value default at a cross-border shipping platform for 40,000+ merchants: a 14% drop in checkout abandonment (A/B test). It covers how we defined "best value", why 58% picking the top option partly reflects position bias, and how location-based onboarding lifted first-shipment activation 22%.
Links to: /case-studies/checkout-shipping-discovery

## After each one is published
1. Add the article URL to the `sameAs` list in `src/lib/site.ts`.
2. Share it on LinkedIn with a link to the matching case study.
3. Note it in [MEASUREMENT.md](MEASUREMENT.md) so referral traffic can be checked a month later.
