import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "what-relevance-means-to-customers",
  "title": "What does \"relevant\" actually mean to a customer?",
  "metaTitle": "What Relevance Actually Means to Customers",
  "description": "What relevant means to a customer using search or ranking: finishing their task, not matching keywords, and how to define and measure it on your product.",
  "date": "2026-12-28",
  "category": "pm-problem",
  "tags": [
    "search",
    "relevance",
    "ranking",
    "customer research"
  ],
  "body": [
    "To a customer, a result is relevant if it helps them finish what they came to do. Matching the words they typed is only a rough guess at that. Two results can match a query equally well, and only one gets the person to their goal.",
    "I've seen this in two very different products. At VWO we worked on search with hybrid BM25 and vector retrieval, LambdaMART, and a cross-encoder reranker. Keyword retrieval finds literal matches. Vector retrieval finds things that mean something close. Neither knows what the user is trying to get done, so the reranker and the metrics have to carry that. At Stallion Express, ranking shipping options looked nothing like search, but the question was the same. For a merchant, the relevant option was the one that fit their cost and speed needs, so we built a best-value default ranking around that.",
    "So defining relevance is really defining the task. For a support search, it might be whether the person stopped searching and didn't open a ticket. For shopping, maybe whether they bought and kept the item. For a rate list, whether they shipped without changing their mind. Each definition has a trade-off. Task success is closer to what customers care about, but it's slower to measure and noisier than a click. Clicks are fast but reward results that look good and disappoint. Most teams end up using both, with clicks for quick checks and task success as the number that settles arguments. Product should own the definition, since it's a statement about what customers want.",
    "This week, pick ten common queries on your product and watch what people do after they click. Did they finish, come back, or search again? Write down, in a sentence, what finishing looks like for each. If you can't agree on that with your team, your relevance metric is guessing too."
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
