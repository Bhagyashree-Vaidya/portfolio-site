import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "payward-tribe-product-lens",
  "title": "Kraken's parent is buying Tribe Capital. Can a crypto app sell private-market products?",
  "metaTitle": "Kraken's Parent Buys Tribe Capital: A PM View",
  "description": "What Payward's planned Tribe Capital deal could mean for a crypto app's product teams, the questions I'd ask first as a PM, and how to prepare for this work.",
  "date": "2027-01-04",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "fintech",
    "crypto",
    "regulated products"
  ],
  "body": [
    "Maybe, but selling private-market products is mostly a trust and compliance problem, not an interface one. Who can buy, what they're told, and what happens when they want to sell are harder questions than how the screen looks. As of November 2026, this deal is pending, so nothing has changed for users yet.",
    "The facts: Payward, Kraken's parent company, announced on November 18, 2026 that it will acquire Tribe Capital, a venture capital firm and asset manager. It's expected to close in the first quarter of 2027. Kraken's co-CEO co-founded Tribe. No product plans for Kraken users have been announced, so everything below is my opinion, not a prediction.",
    "If I were a PM there, I'd start with eligibility and disclosure. Private-market products often come with rules about who can invest and what they must be told. Those rules have to show up correctly on every screen and every device. At Unity Senior Health, on Medicare plan discovery, I saw how easy this is to underestimate. I assumed disclaimer placement could match on mobile and desktop. It couldn't, and it cost about 5 days. After that I brought compliance into design reviews earlier. In a crypto app, where people are used to trading instantly, I'd also think hard about liquidity. A product you can't easily sell needs to say so plainly, at the moment someone is deciding.",
    "If you want to work on problems like this as a PM, practice designing for the constraint instead of around it. Pick a product with a real restriction, like a lock-up period, and sketch how you'd tell a first-time buyer about it in one screen. Show it to a friend and ask them to explain it back. If they can't, keep going. That skill matters a lot in regulated products."
  ],
  "sources": [
    {
      "label": "The Block: Kraken parent Payward to acquire Tribe Capital",
      "url": "https://theblock.co/news/business/2026-11-18-kraken-parent-payward-tribe-capital-443522"
    }
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
