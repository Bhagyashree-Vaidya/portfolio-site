import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "bigger-model-or-latency-budget",
  "title": "Bigger model or faster page? How to choose",
  "metaTitle": "Bigger Model or Faster Page? How to Choose",
  "description": "How to choose between a bigger model and a faster page: compare the marginal quality gain against its cost and your latency budget before you decide.",
  "date": "2026-12-31",
  "category": "pm-problem",
  "tags": [
    "latency",
    "ai models",
    "search",
    "trade-offs"
  ],
  "body": [
    "Set the latency budget first, then pick the best model that fits inside it. If a bigger model only adds a small quality gain at a large cost, the smaller one usually wins. Customers feel slowness on every query. They notice a small ranking gain only sometimes.",
    "At VWO we faced this in search. The pipeline used hybrid retrieval, LambdaMART, and a cross-encoder reranker, and we had a 450 ms p95 budget. A bigger reranker gave a marginal gain at about 3x the cost. So the smaller one shipped. With the smaller model, NDCG@5 still went from 0.68 to 0.74, inside the budget. The bigger one would have added cost on every query for a gain users would have struggled to notice.",
    "Here's how I'd frame the trade-off for any team. Quality, latency, and cost all move together, and you rarely get to pick all three. Write the budget as a percentile, like p95, not an average, because the slow tail is what people remember. Then ask what the extra quality buys in customer terms. Does it change the top result for a meaningful share of queries, or only reorder results lower down? On the business side, multiply the cost difference by real traffic. Small per-query costs get large fast. On the tech side, check whether you can get some of the gain in cheaper ways, like better candidates going into the reranker. And give the budget an owner, so it doesn't quietly grow one feature at a time.",
    "If you have this decision on your desk, run both models on a sample of real queries and count how often the top result differs. If it's rare, you probably have your answer. If it's common, look at those cases by hand and judge whether the bigger model's choice is actually better for the person searching."
  ],
  "related": [
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for product managers"
    },
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
