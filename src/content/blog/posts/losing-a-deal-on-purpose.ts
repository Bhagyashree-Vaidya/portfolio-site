import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "losing-a-deal-on-purpose",
  "title": "Is it ever right to lose a deal on purpose?",
  "metaTitle": "Is It Ever Right to Lose a Deal on Purpose?",
  "description": "When saying no to a big prospect protects the product, how to judge the trade-off and what to tell sales, with a real MVP scoping example from my work.",
  "date": "2027-02-10",
  "category": "pm-problem",
  "tags": [
    "prioritization",
    "mvp",
    "enterprise sales",
    "product strategy"
  ],
  "body": [
    "Yes, sometimes. If winning a deal means building something most of your customers will never use, and it delays the work that serves them, losing it can be the right call. It shouldn't be casual, and it shouldn't be the PM's decision alone. It should be a clear trade-off that the business agrees to with eyes open.",
    "At BrandingArc, customers asked for about a dozen AWS service types in our provisioning platform. We cut the MVP to 4, which covered about 80% of demand. Some enterprise prospects walked because the service they needed wasn't there. That had a real cost, and I don't want to pretend otherwise. The upside was focus: a smaller set we could make reliable, on a platform that went from 6 to 8 hours of provisioning to 15 to 20 minutes.",
    "When you face this, ask a few questions. How many other customers want what this prospect wants? If the answer is \"basically nobody,\" you're being asked to build a fork of your product. What happens to the roadmap if you say yes? Name the specific things that slip. Is there a later path? Sometimes the honest answer is \"not now, and here's when we'd revisit it,\" which keeps the door open. And who owns the decision? Sales owns the relationship and the number. Product owns the roadmap. Leadership usually has to make the final call, so give them both sides on one page.",
    "Next time a big deal hinges on a feature, write a short note before anyone commits. State what the deal is worth, what it would cost to build and maintain, what slips, and how many other customers would benefit. Share it with sales before the meeting, not after. Even when the answer ends up being yes, the note makes the cost visible, which is usually the part that gets skipped."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
