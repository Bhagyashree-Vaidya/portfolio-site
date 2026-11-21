import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "let-customers-pay-in-their-currency",
  "title": "Should you let customers pay in their own currency?",
  "metaTitle": "Should Customers Pay in Their Own Currency?",
  "description": "Local currency pricing can lift conversion and adds real work in pricing, refunds and accounting. How a PM can weigh the trade-off and test it first.",
  "date": "2027-01-26",
  "category": "pm-problem",
  "tags": [
    "payments",
    "pricing",
    "international",
    "checkout"
  ],
  "body": [
    "Usually yes, if a meaningful share of your buyers live outside your home currency and you're ready for the work behind it. People hesitate when they can't tell what they'll actually pay. Showing a familiar currency removes that doubt. The cost is complexity that lands on finance, support and engineering long after launch.",
    "Start with the customer. A buyer who sees a foreign price has to guess the conversion, worry about their bank's fee, and wonder whether the final charge will match. That's friction at the exact moment you want none. Payment providers make showing and charging in multiple currencies technically easy now, which is why this decision often gets made quickly. The harder questions are business ones. Do you set local prices yourself or convert live? What happens to margin when the exchange rate moves? Who absorbs the conversion fee?",
    "Then the parts teams forget. Refunds in a different currency than your books, and what happens when the rate has moved since the purchase. Tax and invoicing rules that differ by country. Reporting, where revenue in four currencies needs one clear number for leadership. I spent years at Stallion Express, a cross-border shipping platform with 40,000+ merchants, and cross-border flows tend to surface edge cases like these faster than domestic ones. Someone needs to own each of them before launch, or support ends up owning them by default.",
    "On Monday, check what share of your traffic and failed checkouts comes from outside your home currency. If it's small, local currency probably isn't your biggest lever yet. If it's large, test showing an estimated local price next to your current one before you change how you charge. That tells you whether clarity alone helps, which is cheaper to ship than full multi-currency billing."
  ],
  "related": [
    {
      "href": "/case-studies/checkout-shipping-discovery",
      "label": "Case study: checkout shipping discovery"
    },
    {
      "href": "/expertise/ecommerce-omnichannel-product-management",
      "label": "Ecommerce and omnichannel product management"
    }
  ]
};

export default post;
