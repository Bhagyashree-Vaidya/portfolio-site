import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "better-ranking-model-lost-the-test",
  "title": "Why can a better ranking model still lose the A/B test?",
  "metaTitle": "Why a Better Ranking Model Can Lose the A/B Test",
  "description": "Why a ranking model that wins offline can still lose an A/B test: offline versus online metrics, latency, position bias, and how to check which one hit you.",
  "date": "2026-12-30",
  "category": "pm-problem",
  "tags": [
    "search",
    "ranking",
    "a/b testing",
    "metrics"
  ],
  "body": [
    "Because offline metrics and real users measure different things. A model can rank your labeled test set better and still lose in production if it's slower, if your labels don't match what people want, or if position effects swamp the difference. Better on paper is a hypothesis, and the A/B test is where you check it.",
    "At VWO, our search work moved NDCG@5 from 0.68 to 0.74, within a 450 ms p95 latency budget. NDCG@5 tells you how well the top five results match your relevance labels. It's a useful number, but it rests on two assumptions. The labels have to reflect what users actually value, and users have to experience the ranking the way the metric imagines. Neither is guaranteed. That's why we kept latency inside a fixed budget, because a slower page can cost more than a better ranking gains.",
    "When a better model loses, I'd check a few things in order. First, latency: compare response times between arms, especially at the slow end. Second, labels: pull queries where the new model changed the top result and ask whether a real user would prefer it. If your labelers judged by keyword match and users judge by task, the offline gain can be noise. Third, position bias. People click the top result partly because it's on top, so a test that changes the order can show odd click patterns that don't reflect quality. Fourth, test length and segments. Some gains only appear for certain query types and get diluted overall.",
    "If you're looking at a lost test right now, split the results by query type and by latency bucket before you decide anything. Then read twenty queries where the two models disagreed. You'll usually find the reason in an afternoon. If you don't, the honest call might be that the offline metric needs better labels."
  ],
  "related": [
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for product managers"
    },
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    }
  ]
};

export default post;
