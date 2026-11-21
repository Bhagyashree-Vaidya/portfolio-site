import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "show-savings-without-a-gimmick",
  "title": "How do you show savings without it feeling like a gimmick?",
  "metaTitle": "How to Show Savings Without It Feeling Fake",
  "description": "Savings messages work when the comparison is real and the numbers are plain. How to pick an honest baseline, show the math, and test if people believe it.",
  "date": "2027-01-14",
  "category": "pm-problem",
  "tags": [
    "pricing",
    "conversion",
    "trust",
    "ecommerce"
  ],
  "body": [
    "Savings feel real when people can see what you're comparing against and could check it themselves. Show the actual alternative price next to yours, in plain numbers, at the moment they're deciding. Inflated reference prices and countdown timers do the opposite. People have seen too many of them.",
    "The baseline is the whole game. Compare against something the customer would really do otherwise: the price at the store down the road, the rate they'd pay going direct, last month's price. If your comparison is against a list price nobody pays, the savings claim is technically true and practically dishonest, and customers can usually tell. The business temptation is to pick the most flattering baseline. The product job is to pick the one that survives a skeptical customer and, in some industries, a regulator.",
    "At Stallion Express, a cross-border shipping platform, the comparison that mattered was between carriers. We built multi-carrier rate comparison with a best-value default ranking, and in an A/B test it cut checkout abandonment 14%. What made that work, in my view, was that every price on the screen was a real rate the merchant could buy right then. Nothing was a reference figure. The savings were visible as the gap between options, and the merchant could pick a pricier, faster one if they wanted. Engineering had to keep those rates live, which is harder than showing a static badge, and worth it.",
    "On Monday, find every savings claim in your product and write down the baseline behind each one. If you can't name it, or it's a price almost nobody pays, rewrite it or remove it. Then test the honest version against the current one. If conversion holds and refund requests or support tickets drop, you've learned the gimmick wasn't doing the work you thought."
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
