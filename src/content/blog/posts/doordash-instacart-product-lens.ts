import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "doordash-instacart-product-lens",
  "title": "DoorDash is buying Instacart. What should the product teams fix first?",
  "metaTitle": "DoorDash and Instacart: A Product Manager's View",
  "description": "What DoorDash's planned Instacart deal could mean for product teams, where I'd focus first as a PM, and how to build skills for this kind of integration.",
  "date": "2026-11-26",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "grocery delivery",
    "marketplaces",
    "integration"
  ],
  "body": [
    "Short version: nothing has to change for users until the deal closes, and that's a long way off. DoorDash agreed to acquire Instacart for about $17 billion, or $65 a share, announced October 29, 2026. It's pending approvals and expected to close at the end of 2027 or in the first half of 2028. For the product teams, the near-term work is mostly planning.",
    "Two things have been said publicly that a PM can work with. The Instacart brand and app stay. And Instacart shoppers can choose whether to take DoorDash orders. That second point is where I'd look first if I were on the team. It's a supply-side product decision. A shopper who opts in will see a new kind of order in their app, possibly with different rules or timing. Each difference needs a clear screen and a clear default, and the choice has to be easy to find and easy to reverse, or it isn't much of a choice.",
    "If I were on the team, I'd also map the hand-offs early. At Stallion Express I learned that **every physical hand-off needs a tracking event**. We ran a multi-stop relay that created tracking gaps, and it led to complaints. Two companies sharing a pool of shoppers means more places where an order moves between systems. A customer waiting on groceries won't care whose system dropped the update. They'll just see that it's late and nobody told them.",
    "For PMs who want this kind of work: integration roles reward people who can describe how two systems actually behave, down to the event level, and who are patient with long timelines. Here's an exercise. Pick two apps you use and write down every place an order changes hands. Then mark the step you'd trust least and say why. That's a good interview answer, and it's close to what the job looks like day to day."
  ],
  "sources": [
    {
      "label": "WSMV: DoorDash to buy Instacart for $17 billion",
      "url": "https://www.wsmv.com/2026/10/29/doordash-buy-instacart-17-billion-big-consolidation-grocery-delivery/"
    }
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    },
    {
      "href": "/expertise/ecommerce-omnichannel-product-management",
      "label": "Ecommerce and omnichannel product management"
    }
  ]
};

export default post;
