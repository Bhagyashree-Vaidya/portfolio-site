import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "scope-mvp-when-customers-want-everything",
  "title": "How do you scope an MVP when every customer wants something different?",
  "metaTitle": "How to Scope an MVP When Customers Want It All",
  "description": "How to cut MVP scope to what most customers need, accept who you'll lose, and explain the trade-off, using a real AWS provisioning launch as the example.",
  "date": "2026-11-28",
  "category": "pm-problem",
  "tags": [
    "mvp",
    "scoping",
    "prioritization",
    "b2b saas"
  ],
  "body": [
    "Scope an MVP around the demand you see most often, and accept that you'll lose some customers by doing it. Trying to satisfy every request means shipping nothing for a long time. Pick the smallest set that covers most real use, say clearly what's out, and have a plan for the people who walk.",
    "At BrandingArc we built a self-service AWS provisioning platform. Customers asked for about a dozen service types. We launched with 4, which covered about 80% of demand. Some enterprise prospects walked. That cost us, and it was a trade we made on purpose, because the alternative was a much longer build before anyone could use it. We grew from 5 design partners, whom I recruited, to about 100 customers, and provisioning went from 6 to 8 hours down to 15 to 20 minutes.",
    "Here's how I'd think it through. Count requests by **how many customers need them**, not by how loudly they ask. Then look at what each item costs to build and support. Engineering's view matters a lot here, because some small-sounding requests drag a pile of edge cases with them. I learned that one directly: my linear workflow spec didn't survive AWS edge cases, and engineering redesigned the state logic. Scope that looks small on paper can be big in the system. The PM owns the cut line. Sales and leadership should hear it early, with names of the accounts likely to be disappointed, so nobody is surprised in a renewal call.",
    "The honest limit: a cut like this only works if your demand data is real. Design partners are a small sample, and they lean toward whoever said yes first. Before you lock scope, write down the customers you expect to lose and what it would take to win them back later. If that list makes you uneasy, your cut might be too deep, or you might need more partners before you decide."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
