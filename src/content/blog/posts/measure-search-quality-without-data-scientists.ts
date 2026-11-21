import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "measure-search-quality-without-data-scientists",
  "title": "How do you measure search quality without a data science team?",
  "metaTitle": "Measure Search Quality Without Data Scientists",
  "description": "A small set of human-judged queries and two or three honest metrics will tell you more about search quality than a dashboard nobody trusts. How to start.",
  "date": "2027-01-06",
  "category": "pm-problem",
  "tags": [
    "search",
    "relevance",
    "metrics",
    "evaluation"
  ],
  "body": [
    "You don't need a data science team to measure search quality. You need a few hundred real queries, a person who knows the product judging what good results look like, and one or two ranking metrics you actually understand. That gets you further than click dashboards most teams can't interpret.",
    "Start with the customer. Pull queries from your logs, weighted toward what people really search, plus a handful of rare ones that matter to revenue or trust. For each query, have someone who knows the domain grade the top results: great, fine, wrong. Write the grading rules down so two people would mostly agree. That's your judged set. It's slow the first time and fast every time after. The business side is simple: when someone asks whether a ranking change is worth shipping, you have an answer that isn't a hunch.",
    "Then pick metrics that match how people use the page. NDCG@5 is a good default when people mostly look at the top few results. At VWO, search ran on hybrid BM25 plus vector retrieval with a reranker, and NDCG@5 went from 0.68 to 0.74 within a 450 ms p95 latency budget. That latency number matters as much as the relevance one. A better ranking that makes the page slow can lose you the people it was meant to help, so engineering and product should agree on the budget before anyone tunes anything.",
    "On Monday, export 200 queries and grade the top five results for 50 of them yourself. You'll learn where search fails faster than any report will show you. Then ask an engineer to compute NDCG@5 on that set for your current ranking. It's a baseline, and it's honest about its limits: a small set can miss problems in the long tail, so add queries every time a customer complains."
  ],
  "related": [
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for PMs"
    },
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    }
  ]
};

export default post;
