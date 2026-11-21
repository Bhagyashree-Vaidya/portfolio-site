import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "build-a-failure-taxonomy",
  "title": "How do you build a failure taxonomy for an AI product?",
  "metaTitle": "How to Build a Failure Taxonomy for AI Products",
  "description": "How to build a failure taxonomy for an AI product from real failures, rank categories by frequency and severity, and keep the list honest as things change.",
  "date": "2026-12-10",
  "category": "pm-problem",
  "tags": [
    "ai products",
    "evaluation",
    "failure analysis",
    "prioritization"
  ],
  "body": [
    "Build it from real failures, not from a brainstorm. Collect the cases where the product got it wrong, group them by what went wrong, and rank the groups by how often they happen times how much they hurt. That ranking is the useful part. A taxonomy without it is just a list of bad things.",
    "At VWO we did this for Wingz, our agent that sets up and launches A/B tests. The first version had 12 categories, later 13, ranked by frequency times severity. The top three were targeting misconfiguration, false winners, and multi-step context loss. That order mattered more than the names. It told engineering where an hour of work would remove the most harm, and it gave me a way to say no to fixes that were real but small.",
    "A few things make a taxonomy work in practice. Keep categories about cause, not symptom, so each one points at a fix. Write a one-line definition and two examples for each, so two people tagging the same failure land in the same bucket. Agree on what severity means for the customer before you score anything, or the loudest person sets it. And expect to be wrong. Our first version missed multi-step context loss entirely. An engineer caught it. Adding a category should be cheap, and you should re-score old failures when you do.",
    "If you're starting from zero, pull the last fifty failures you know about from support tickets, logs, or your own testing. Tag each with a short cause in plain words. Merge the duplicates. You'll probably end up with eight to fifteen groups. Score each one, sort, and share the top three with your team. Then ask the people closest to the failures what's missing."
  ],
  "related": [
    {
      "href": "/insights/how-to-evaluate-ai-agents",
      "label": "How to evaluate AI agents"
    },
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
