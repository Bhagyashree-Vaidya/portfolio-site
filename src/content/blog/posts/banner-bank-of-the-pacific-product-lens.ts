import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "banner-bank-of-the-pacific-product-lens",
  "title": "Banner absorbed Bank of the Pacific. How do you migrate customers without losing them?",
  "metaTitle": "Banner and Bank of the Pacific: Migrating Customers",
  "description": "Banner completed its purchase of Pacific Financial, parent of Bank of the Pacific, with account migration planned for November 2026. What a PM would watch.",
  "date": "2027-01-28",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "banking",
    "migration",
    "onboarding"
  ],
  "body": [
    "The facts: Banner Corporation completed its acquisition of Pacific Financial Corporation, the parent of Bank of the Pacific in Washington and Oregon, on September 1, 2026, for about $186.8 million. Account migration was planned for November 2026. Beyond that, this post is my opinion about migrating customers in a deal like this, with no inside view of how it's going.",
    "A migration is an onboarding flow for people who never asked to be onboarded. They chose their bank, and now they're being asked to learn new logins, new cards and maybe a new app. In my view, the right mindset is to treat every migrated customer like a new user who could leave, because some will. Small community banks often win on familiarity, so the moment that matters is the first week after the switch, when someone tries to do a routine thing and it works differently.",
    "If I were on the team, I'd measure the migration as a funnel: received the notice, logged in to the new system, set up the card, made a first routine transaction. Then I'd look for the single step where the most people stall. That approach comes from BrandingArc, where we took provisioning from 6 to 8 hours down to 15 to 20 minutes, and a step-level funnel showed exactly which errors broke first deployments. I specified real-time validation in response. For a bank migration, the equivalent might be a login step that rejects old usernames or a card activation that needs a phone call.",
    "If you want to work on problems like this as a PM, practice reading funnels step by step instead of end to end. Take any multi-step flow you own and find the step with the biggest drop. Then watch a few people go through it. Migration work rewards that kind of patience, and it's a skill banks, SaaS companies and marketplaces all need."
  ],
  "sources": [
    {
      "label": "Banner Corporation: completes acquisition of Pacific Financial Corporation",
      "url": "https://investor.bannerbank.com/news/news-details/2026/Banner-Corporation-Completes-Acquisition-of-Pacific-Financial-Corporation/default.aspx"
    }
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
