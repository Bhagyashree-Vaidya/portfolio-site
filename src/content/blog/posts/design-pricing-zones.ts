import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "design-pricing-zones",
  "title": "How do you design pricing zones that don't break later?",
  "metaTitle": "How to Design Pricing Zones That Hold Up",
  "description": "Pricing zones hold up when they're built on cost, reused across products, and easy to explain. How to design them, who should own them, and what breaks.",
  "date": "2027-01-18",
  "category": "pm-problem",
  "tags": [
    "pricing",
    "logistics",
    "operations",
    "b2b"
  ],
  "body": [
    "Build zones on what it actually costs you to serve each area, make them reusable across products, and keep them simple enough that support can explain them on a call. Zones drawn for marketing reasons or one big customer tend to break the moment the network grows.",
    "At Stallion Express, as the Drop & Go network grew to 10+ partner locations, we replaced a single rate model with 32 pricing zones. A single rate is easy to explain but quietly wrong. Some areas cost far more to serve than others, and one flat price means either the cheap areas subsidize the expensive ones or you lose money in the expensive ones. Zones let price follow cost. The risk is going too far the other way. Hundreds of micro-zones are accurate and impossible for a merchant to predict, which hurts trust and conversion.",
    "A few things keep zones from breaking. Define them on data that's stable, like postal code areas, not on things that change weekly. Store them as data that product and ops can update, not as rules in code that need a release. Make every price traceable to a zone, so when a customer asks why they paid more, support can answer in one sentence. Also decide who owns zone changes. Pricing often sits between finance, ops and product, and if nobody owns it, every exception becomes a new rule.",
    "On Monday, pull your current pricing rules and count how many exceptions exist outside the main structure. If the exceptions outnumber the zones, the structure isn't matching cost anymore. Pick the three most common exceptions and see whether a zone change would absorb them. Then write a one-paragraph explanation of your zones a customer could follow. If you can't, simplify before you add more."
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
