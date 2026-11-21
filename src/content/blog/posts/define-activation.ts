import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "define-activation",
  "title": "What counts as activation, and why does the definition matter?",
  "metaTitle": "What Counts as Activation, and Why It Matters",
  "description": "A good activation metric is one observable action tied to real value, inside a time window. How to pick it, what goes wrong, and a shipping platform example.",
  "date": "2027-01-15",
  "category": "pm-problem",
  "tags": [
    "activation",
    "metrics",
    "onboarding",
    "growth"
  ],
  "body": [
    "Activation is the first moment a new user gets the value they signed up for, written down as one action you can observe, inside a time window. Sign-up isn't activation. A completed profile usually isn't either. Pick the action that, if it never happens, means the customer never really started.",
    "At Stallion Express we defined activation as a merchant creating their first shipping label within 7 days. Both halves did work. The label was the value: it meant a parcel was actually going somewhere. The 7-day window stopped us from counting someone who came back three months later as an onboarding win. With that definition in place, location-based matching to the nearest drop-off hub lifted first-shipment activation 22%. Without a tight definition, we couldn't have said what lifted, or by how much.",
    "Definitions go wrong in a few predictable ways. Teams pick an action that's easy to move but not tied to value, like clicking through a tour. Or they pick something so far downstream, like the tenth order, that you wait months to learn anything. Or the window is so loose that every user eventually counts. There's also a quiet political problem: once activation is a goal, people want a definition their work can move. Agree on it with the business and engineering before the quarter starts, write it down, and don't change it mid-test.",
    "On Monday, write your current activation definition in one sentence with a number of days in it. If you can't, that's the work. Then check how many users who hit it are still around a month later compared with those who didn't. If the two groups look similar, your activation event probably isn't the moment that matters, and it's worth testing a different one."
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
