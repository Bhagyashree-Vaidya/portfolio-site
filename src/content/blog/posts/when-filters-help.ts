import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "when-filters-help",
  "title": "When do filters help, and when do they hide the answer?",
  "metaTitle": "When Filters Help and When They Hide the Answer",
  "description": "When filters help customers find the right option and when they hide it: use filters for the few with strong needs and good defaults for everyone else.",
  "date": "2027-01-03",
  "category": "pm-problem",
  "tags": [
    "filters",
    "search",
    "ux",
    "choice"
  ],
  "body": [
    "Filters help people who already know what they need. For everyone else, they can hide the answer behind a set of choices the person doesn't yet understand. Good defaults should serve most people, and filters should serve the minority with a specific need.",
    "At Stallion Express, merchants comparing shipping rates used filters on 24% of shipments. Everyone else went with the default ranking or picked from the list as shown. That split told us a lot. About a quarter of merchants had a real constraint, like a delivery deadline or a carrier they preferred, and filters were how they expressed it. The rest needed a good default far more than they needed more controls.",
    "A few things decide whether a filter is helping. Does the customer know the vocabulary? A filter labeled by technical service level only helps if the person knows what that means. Does filtering ever leave them with nothing? An empty result with no explanation feels like the product failed, so show what was removed and offer to relax a filter. Do filters hide better options? If someone filters by a carrier name, they might miss a cheaper, faster option they'd have liked. Sometimes a short note helps, like showing one strong option outside the filter. There's also an engineering cost. Every filter has to stay accurate as data changes, so each one should earn its place with real use.",
    "On Monday, pull usage for every filter you have. List how often each one is used and how often it leads to an empty or near-empty result. Filters with very low use are candidates to remove or fold into the default. Filters that often lead to empty results need better handling. And if one filter is used far more than the rest, ask whether it should shape the default instead."
  ],
  "related": [
    {
      "href": "/case-studies/checkout-shipping-discovery",
      "label": "Case study: checkout shipping discovery"
    },
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    }
  ]
};

export default post;
