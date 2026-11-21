import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "marsh-wilshire-product-lens",
  "title": "Marsh is buying Wilshire. What does it mean for analytics products used by advisors?",
  "metaTitle": "Marsh and Wilshire: Analytics for Advisors",
  "description": "Marsh agreed to acquire Wilshire, an investment consulting and analytics firm. Where a PM would look first when analytics products move under a new parent.",
  "date": "2027-01-13",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "analytics",
    "wealth management",
    "b2b"
  ],
  "body": [
    "The public facts are short. Marsh announced on November 10, 2026 that it will acquire Wilshire, an investment consulting and analytics firm, with closing expected in the first quarter of 2027. As of November 2026 the deal is pending. What follows is my opinion on where product work tends to matter in a deal like this, not a description of either company's plans.",
    "Analytics products for advisors live or die on trust in the numbers. An advisor puts a chart in front of a client and has to defend it. In my view, the first risk in any integration is that two organizations define the same metric slightly differently, like returns, fees or benchmark periods, and the difference surfaces in a client meeting. The second is access and consent. Client data often comes with specific permissions about who can see it and for what purpose, and those don't automatically transfer just because the systems will eventually merge.",
    "If I were on the product team, I'd start by mapping which customers use which reports, and which of those reports feed regulated or client-facing documents. Those get frozen until definitions are reconciled. My closest experience is from Unity Senior Health, where compliance shaped how Medicare information could appear on screen. I assumed disclaimer placement could match on mobile and desktop, and it couldn't, which cost about five days. After that, I brought compliance into design reviews earlier. In financial analytics I'd do that from day one.",
    "If you want to work on problems like this as a PM, learn how metric definitions are governed and how consent rules work in your industry. Pick one number your company reports to customers and trace how it's calculated. Then write down who would need to approve a change to it. That map is the first thing an integration team needs."
  ],
  "sources": [
    {
      "label": "Mercer: Marsh to acquire Wilshire",
      "url": "https://www.mercer.com/about/newsroom/marsh-to-acquire-wilshire/"
    }
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    },
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
