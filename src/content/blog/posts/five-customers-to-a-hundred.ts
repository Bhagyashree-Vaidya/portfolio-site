import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "five-customers-to-a-hundred",
  "title": "What changes when a product goes from 5 customers to 100?",
  "metaTitle": "Going From 5 Customers to 100: What Changes",
  "description": "What breaks when a B2B product grows from a handful of design partners to around a hundred customers, and the three areas a PM should rework before it hurts.",
  "date": "2027-02-04",
  "category": "pm-problem",
  "tags": [
    "b2b saas",
    "scaling",
    "self-serve",
    "customer success"
  ],
  "body": [
    "At five customers, the product is partly you. You answer the questions, explain the odd screen, and patch gaps by hand. At a hundred, that stops working, because nobody can sit next to every customer. The product has to explain itself, and the jobs you were doing quietly have to become features, docs, or a support process someone actually owns.",
    "At BrandingArc we built a self-service AWS provisioning platform. I recruited 5 design partners at the start, and we grew to about 100 customers. With design partners, a failed deployment was a call and a fix. With a hundred, failures turn into tickets, and tickets turn into churn if they pile up. A step-level funnel showed that resource-naming and validation errors broke most failed first deployments, so I specified real-time validation. That's the shape of the shift: something a person caught in a meeting has to be caught by the product instead.",
    "So look at three things. First, the questions you keep answering. Each repeated question is either a missing label, a missing doc, or a missing default. Second, support load. Ask who handles a stuck customer at 9 p.m. and whether that person has what they need. Third, the edge cases your design partners never hit. Early partners are usually forgiving and close to you. Customer number sixty is neither, and they'll use the product in ways nobody planned for. The trade-off is time. Hardening onboarding means fewer new features for a while, and someone in sales will feel that.",
    "A practical step: pull your last month of support conversations and tag each one by the step it came from. If one step shows up far more than the rest, fix that before you build anything new. It's dull work. It's also usually what decides whether customer number one hundred and one sticks around."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
