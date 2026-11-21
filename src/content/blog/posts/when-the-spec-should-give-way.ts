import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "when-the-spec-should-give-way",
  "title": "When should your spec give way to engineering?",
  "metaTitle": "When Your Spec Should Give Way to Engineering",
  "description": "How to tell when a product spec has gone too far into implementation, what a PM should own instead, and how to hand state and edge cases to engineering.",
  "date": "2027-02-08",
  "category": "pm-problem",
  "tags": [
    "product specs",
    "engineering collaboration",
    "prd",
    "product craft"
  ],
  "body": [
    "Your spec should give way the moment it starts describing how the system works instead of what it has to achieve. A PM owns the outcome: what the customer needs, what counts as done, and what must never happen. Engineers usually understand the system's real behavior better than the spec does, so let them own how it gets there.",
    "I learned this at BrandingArc. We were building self-service AWS provisioning, and I wrote a linear workflow spec: step one, step two, step three. It didn't survive AWS edge cases. Real provisioning has partial failures, retries, and resources that exist in odd in-between states. Engineering redesigned the state logic, and the product was better for it. My spec had the right goal and the wrong shape. Looking back, the useful parts were the outcome and the failure cases I cared about, not the sequence.",
    "A good way to split it: the PM writes the problem, the constraints, the acceptance criteria, and the states the customer must be able to see. For example, a customer should always know whether provisioning is running, finished, or failed, and what to do next if it failed. Engineering decides how the system tracks and moves between those states. If you find yourself drawing a detailed flowchart of internal logic, ask whether a customer would notice if it were done differently. If they wouldn't, it probably isn't your call. If they would, write the outcome you need and let the team propose the design.",
    "For your next spec, try one change. Add a short section called \"what must be true\" and move every implementation detail into a separate \"current thinking\" section that engineering is free to replace. Then, in review, ask the engineers which edge cases the spec missed. Their answers are often the most useful part of the meeting."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
