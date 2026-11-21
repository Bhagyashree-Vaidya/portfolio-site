import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "work-with-engineers-when-not-the-expert",
  "title": "How do you work with engineers when you're not the technical expert?",
  "metaTitle": "Working With Engineers When You're Not the Expert",
  "description": "How a PM can work well with engineers on deep technical systems like search and AI agents: learn the trade-offs, ask good questions and own the why.",
  "date": "2027-02-24",
  "category": "pm-problem",
  "tags": [
    "engineering collaboration",
    "technical pm",
    "search",
    "ai agents"
  ],
  "body": [
    "You don't need to be the expert. You need to understand the trade-offs well enough to make good product calls, and to ask questions that help engineers explain them. Own the why: the customer problem, the constraints and what success looks like. Let the engineers own the how, and be honest when you don't follow something.",
    "At VWO, the search work used hybrid BM25 plus vector retrieval, LambdaMART ranking and a cross-encoder reranker. I couldn't have built that, and I didn't need to. What I needed was to know what each choice cost and bought. We moved NDCG@5 from 0.68 to 0.74 within a 450 ms p95 latency budget. When a bigger model gave a marginal gain at about 3x the cost, the smaller one shipped. That was a product decision, and making it only took understanding the trade-off: a small quality gain against cost and latency that customers would feel.",
    "Some questions that tend to help: what are we trading off here? What would make this fail in production? How will we know it's working, and what would we measure? What's the cheapest way to test this before we commit? Ask them early, and take the answers seriously. Engineers are usually glad to explain when they can tell you want the answer and aren't just checking a box. It also helps to learn the vocabulary of your area. Reading up on how NDCG works doesn't make you an engineer, but it means you can follow a design review and spot when a metric doesn't match what customers experience.",
    "For this week, pick one technical decision your team made recently and ask an engineer to walk you through the options they rejected. Write down the trade-off in two sentences and check it back with them. If you got it right, you now understand that system a bit better. If you didn't, the correction is the useful part."
  ],
  "related": [
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    },
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for product managers"
    }
  ]
};

export default post;
