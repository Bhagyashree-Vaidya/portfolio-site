import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "unknown-should-never-look-like-no",
  "title": "Why should \"unknown\" never look like \"no\" in your product?",
  "metaTitle": "Why \"Unknown\" Should Never Look Like \"No\"",
  "description": "Why products must show missing data differently from a negative answer, how that mistake misleads users, and a quick audit to find it in your own product.",
  "date": "2027-02-16",
  "category": "pm-problem",
  "tags": [
    "data quality",
    "ux",
    "healthcare",
    "trust"
  ],
  "body": [
    "If your data doesn't know the answer, the screen has to say so. Showing \"unknown\" the same way you show \"no\" turns a gap in your data into a false fact. People make real decisions from those labels, so the difference between \"we don't know\" and \"it isn't\" matters as much as any feature you ship.",
    "At Unity Senior Health, part of Medicare plan discovery was showing whether a shopper's doctors were in a plan's network. Network data isn't always complete. We set a firm rule: **\"unknown\" network status must never look like \"out of network.\"** If someone sees a red \"no\" next to their doctor, they may drop a plan that would have worked for them. If they see \"we couldn't confirm this,\" they know to check, and they can still choose well.",
    "This problem is easy to create by accident. A database field is often true, false, or empty, and a lazy display rule treats empty as false. Engineers aren't wrong to build it that way when the spec doesn't say otherwise. So it's on the PM to name the states explicitly: yes, no, unknown, and sometimes \"pending.\" Each needs its own label, its own look, and ideally a next step, like \"call your doctor's office to confirm.\" There's a trade-off. More states make the UI busier, and some teams worry that showing \"unknown\" makes the product look weak. In my view, being honest about gaps builds more trust than a clean screen that's sometimes wrong.",
    "Here's an audit you can do this week. List every yes or no indicator in your product: availability, eligibility, coverage, status badges. For each one, ask engineering what happens when the underlying value is missing. Wherever the answer is \"it shows as no,\" write a ticket. Then look at how often the value is actually missing. That number tells you how urgent the fix is."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
