import type { Doc } from "../types";

const doc: Doc = {
  kind: "expertise",
  slug: "search-product-management",
  title: "Search product management: relevance, ranking and discovery",
  metaTitle: "Search Product Management: Ranking & Relevance",
  description:
    "What a search product manager does: retrieval, ranking, hybrid search, personalization and evaluation with NDCG and MRR, plus my production evidence.",
  answer:
    "A search product manager owns how people find things: which candidates are retrieved, how they are ranked, and how relevance is measured. The work covers keyword and vector retrieval, learning-to-rank and reranking, personalization, filters, and evaluation with offline metrics like NDCG alongside online metrics like click-through, conversion and zero-result rate. The product decision is usually a trade-off between relevance gains, latency and cost.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["Search", "Ranking", "Relevance", "Product discovery"],
  sections: [
    {
      id: "what-a-search-pm-does",
      heading: "What does a search product manager do?",
      blocks: [
        {
          type: "p",
          text: "Search looks like one box, but behind it is a pipeline. A search PM decides what each stage should optimize for, how to tell whether a change made results better, and when a gain is worth its cost in latency or compute.",
        },
        {
          type: "list",
          items: [
            "**Relevance definition.** Write down what a good result means for this product, in a form human raters can apply consistently.",
            "**Candidate retrieval.** Make sure the right items are in the pool at all. Ranking cannot fix an item that was never retrieved.",
            "**Ranking and reranking.** Order candidates with a learned model, then optionally rerank the top few with a slower, more accurate model.",
            "**Personalization.** Use what is known about the person (location, needs, history) to change ordering, and explain why when stakes are high.",
            "**Filters and facets.** Give people control when ranking alone cannot read their intent.",
            "**Evaluation and experimentation.** Combine offline metrics on labeled sets with online A/B tests, and use human evaluation as a release gate.",
          ],
        },
      ],
    },
    {
      id: "retrieval-and-ranking",
      heading: "Retrieval and ranking in plain terms",
      blocks: [
        {
          type: "p",
          text: "**BM25** is a keyword scoring function. It rewards documents that contain the query's terms, weighted by how rare each term is, and is strong on exact names, codes and specific phrases. **Vector (dense) retrieval** embeds queries and documents as vectors and finds items that are close in meaning, which helps with paraphrases and vague queries but can miss exact matches.",
        },
        {
          type: "p",
          text: "**Hybrid retrieval** runs both and merges the candidates, so you get exact-match precision and semantic recall. A **learning-to-rank** model such as LambdaMART then orders those candidates using many features, trained on relevance judgments. A **cross-encoder** reranker reads the query and each candidate together, which is more accurate and much slower, so it is applied only to a short list.",
        },
        {
          type: "table",
          head: ["Stage", "What it optimizes", "Typical PM question"],
          rows: [
            ["Retrieval (BM25, vector, hybrid)", "Recall: is the right item in the pool?", "How many relevant items never reach the ranker?"],
            ["Learning-to-rank", "Order of the candidate pool", "Which features and labels define relevance here?"],
            ["Cross-encoder rerank", "Precision at the very top", "Is the gain worth the latency and cost?"],
            ["Personalization and filters", "Fit to one person's intent", "What context can we use, and how do we explain it?"],
          ],
        },
      ],
    },
    {
      id: "evaluation",
      heading: "How search quality is measured",
      blocks: [
        {
          type: "list",
          items: [
            "**Precision@k**: share of the top k results that are relevant.",
            "**Recall**: share of all relevant items that were retrieved.",
            "**NDCG@k**: rewards putting the most relevant items highest, using graded labels.",
            "**MRR**: how high the first relevant result appears, averaged over queries.",
            "**Zero-result rate**: share of queries that return nothing. Often the fastest diagnostic for gaps in catalog or query handling.",
            "**Click-through rate and conversion**: online signals of whether people act on results. Both are affected by position bias, so they need careful experiment design.",
          ],
        },
        {
          type: "p",
          text: "Definitions, a worked NDCG calculation and guidance on choosing between them are in [Search ranking metrics for product managers](/insights/search-ranking-metrics-for-product-managers).",
        },
      ],
    },
    {
      id: "improving-discovery",
      heading: "How do product managers improve product discovery?",
      blocks: [
        {
          type: "p",
          text: "Discovery problems are often not ranking problems. In my work they have looked like three things: too many options shown at once, the wrong default, or missing controls.",
        },
        {
          type: "list",
          items: [
            "**Reduce the choice set with explained ranking.** At Unity Senior Health, shoppers were shown 12 Medicare plans at once and many left without choosing. Interviews and funnel analysis showed three questions dominated: are my doctors in network, are my drugs covered, and what will I pay each month. We ranked plans on those factors, showed 4 instead of 12, explained the criteria, and kept a show-all-plans option. Plan-selection drop-off fell 32%.",
            "**Pick a default that balances the real trade-off.** At Stallion Express, a best-value default ranking balanced cost, delivery speed and service reliability across carriers. 58% of merchants chose the top-ranked option, which partly reflects position, not only quality.",
            "**Add filters where intent varies.** Faceted filters for delivery speed, tracking and carrier preference were used on 24% of shipments.",
            "**Handle unknowns honestly.** On Medicare plans, an unknown network status must not look the same as out-of-network. Ranking signals with missing data need their own display state.",
          ],
        },
      ],
    },
    {
      id: "owned-vs-studied",
      heading: "What I have owned in production vs. studied",
      blocks: [
        {
          type: "table",
          head: ["Area", "My role", "Evidence"],
          rows: [
            [
              "Hybrid retrieval, LambdaMART ranking, cross-encoder reranking",
              "**Contributed**: product side of a team-built system (VWO). Engineering built the models.",
              "BM25 + vector retrieval; LambdaMART trained on human-labeled judgments; a cross-encoder selects the top 5 of about 50 candidates. NDCG@5 rose from 0.68 to 0.74 within a 450 ms p95 latency budget.",
            ],
            [
              "Model-size trade-off",
              "**Contributed** (VWO)",
              "A larger cross-encoder gave only a marginal NDCG gain at roughly 3× the cost and above the latency budget, so the smaller model shipped.",
            ],
            [
              "Human evaluation as a release gate",
              "**Contributed**: product side of the evaluation process (VWO)",
              "600-pair golden set. Reviewer agreement (Cohen's kappa) improved from 0.60 to 0.75. The gate caught 3 ranking regressions before release.",
            ],
            [
              "Bias in ranking signals",
              "**Contributed** (VWO)",
              "Reduced popularity and position bias in the ranking. The work spanned a migration from Elasticsearch to Algolia.",
            ],
            [
              "Default ranking and faceted filters",
              "**Owned** (Stallion Express)",
              "Best-value multi-carrier ranking; 58% chose the top option; filters used on 24% of shipments. Checkout abandonment down 14% in an A/B test of the rate-comparison launch.",
            ],
            [
              "Personalized ranking",
              "**Owned** the discovery journey (Unity Senior Health)",
              "Plans to compare cut from 12 to 4; plan-selection drop-off down 32%; validated with 4 A/B tests on questionnaire length, recommendation order and results layout.",
            ],
            [
              "Location-based matching",
              "**Owned** (Stallion Express)",
              "New merchants matched to the nearest hub or Drop & Go location during onboarding; first-shipment activation up 22%.",
            ],
            [
              "Query understanding (spelling, synonyms, intent classification)",
              "**Studied**",
              "No production work of my own to report.",
            ],
            [
              "Zero-result rate as a tracked KPI",
              "**Studied**",
              "I know the metric and how to use it; I have no published figure from my own work.",
            ],
          ],
        },
      ],
    },
    {
      id: "case-studies",
      heading: "Case studies with the full story",
      blocks: [
        {
          type: "list",
          items: [
            "[Checkout shipping discovery](/case-studies/checkout-shipping-discovery): multi-carrier rate comparison, best-value default ranking and filters at Stallion Express.",
            "[Medicare plan discovery](/case-studies/medicare-plan-discovery): personalized plan ranking with explained criteria at Unity Senior Health.",
            "[AI agent quality evaluation](/case-studies/ai-agent-quality-evaluation): the release-gate thinking that also shaped ranking evaluation at VWO.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Should I choose BM25 or vector search?",
      a: "Usually both. BM25 is strong on exact terms and identifiers; vector retrieval handles paraphrase and vague intent. Hybrid retrieval merges candidates from each, and a ranker decides the final order.",
    },
    {
      q: "What is the difference between ranking and reranking?",
      a: "Ranking orders the full candidate pool with a fast model. Reranking applies a slower, more accurate model to a short list at the top, for example choosing the top 5 of about 50 candidates.",
    },
    {
      q: "Why use human evaluation if you have click data?",
      a: "Clicks are shaped by position and presentation, so they can reward whatever was already ranked first. A labeled golden set with measured rater agreement gives a stable reference that can block a regression before customers see it.",
    },
    {
      q: "Is personalization always better?",
      a: "No. It helps when the system has reliable signals. At Unity Senior Health, IP address did not reliably identify a shopper's state, so verified ZIP or address data was prioritized over inferred location.",
    },
  ],
  sources: [
    { label: "Okapi BM25, Wikipedia", url: "https://en.wikipedia.org/wiki/Okapi_BM25" },
    { label: "Learning to rank, Wikipedia", url: "https://en.wikipedia.org/wiki/Learning_to_rank" },
    { label: "Nogueira and Cho (2019), Passage Re-ranking with BERT (arXiv)", url: "https://arxiv.org/abs/1901.04085" },
    { label: "Discounted cumulative gain, Wikipedia", url: "https://en.wikipedia.org/wiki/Discounted_cumulative_gain" },
    { label: "Mean reciprocal rank, Wikipedia", url: "https://en.wikipedia.org/wiki/Mean_reciprocal_rank" },
  ],
  related: [
    { href: "/insights/search-ranking-metrics-for-product-managers", label: "Search ranking metrics for product managers" },
    { href: "/case-studies/checkout-shipping-discovery", label: "Case study: Checkout shipping discovery" },
    { href: "/case-studies/medicare-plan-discovery", label: "Case study: Medicare plan discovery" },
    { href: "/expertise/ai-product-management", label: "AI product management" },
    { href: "/expertise/ecommerce-omnichannel-product-management", label: "E-commerce and omnichannel product management" },
  ],
};

export default doc;
