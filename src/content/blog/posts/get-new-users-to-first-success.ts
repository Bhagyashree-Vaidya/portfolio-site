import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "get-new-users-to-first-success",
  "title": "How do you get a new user to their first success faster?",
  "metaTitle": "How to Get New Users to First Success Faster",
  "description": "The fastest path to first success is usually removing a decision or filling it in from context. How to find the one worth removing, with a shipping example.",
  "date": "2027-01-17",
  "category": "pm-problem",
  "tags": [
    "onboarding",
    "activation",
    "ux",
    "growth"
  ],
  "body": [
    "Remove a decision. Most new users don't stall because a step is long. They stall because a step asks them to choose something they don't understand yet. If you can make that choice for them, using context you already have, they get to the good part sooner.",
    "At Stallion Express, new merchants had to figure out where to drop off parcels before they could ship anything. That's a real decision with real consequences, and a new merchant doesn't know the network yet. We added location-based matching that pointed each merchant to the nearest drop-off hub, and first-shipment activation rose 22% (activation being a first label within 7 days). The merchant could still pick a different hub. We just stopped making them start from a blank map.",
    "Prefilling has a cost, and it's worth being honest about. A default you get wrong is worse than no default, because people trust it. Location is a good example: it's easy to infer, and it's often wrong in ways you don't see. In a different project I learned that IP address doesn't reliably tell you someone's state, so verified ZIP or address had to come first. Whatever you prefill, make it easy to see and easy to change. Engineering should log when people override the default. A high override rate means the context you're using isn't as good as you thought.",
    "On Monday, list every decision a new user makes before their first success. Next to each one, write what you already know that could answer it for them. Pick the one where you're most confident and test prefilling it. Measure time to first success and the override rate together, so you know whether you helped or just moved the confusion to a later step."
  ],
  "related": [
    {
      "href": "/case-studies/checkout-shipping-discovery",
      "label": "Case study: checkout shipping discovery"
    },
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
