import type { Doc } from "../types";

const doc: Doc = {
  kind: "insight",
  slug: "search-ranking-metrics-for-product-managers",
  title: "Search ranking metrics for product managers",
  metaTitle: "Search Ranking Metrics for Product Managers",
  description:
    "A practical guide to search ranking metrics: precision@k, recall, NDCG with a worked example, MRR, zero-result rate, CTR, conversion and latency budgets.",
  answer:
    "Search ranking metrics fall into two groups. Offline metrics such as precision@k, recall, NDCG and MRR score results against human relevance labels before launch. Online metrics such as click-through rate, conversion and zero-result rate measure behavior after launch. Product managers should pair one offline metric that matches how results are shown with one online outcome metric, under a fixed latency budget.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["Search", "Ranking metrics", "NDCG", "Experimentation"],
  sections: [
    {
      id: "definition",
      heading: "What are search ranking metrics?",
      blocks: [
        {
          type: "p",
          text: "**Search ranking metrics** quantify how well a system orders results for a query. Some compare the ranked list against labeled judgments of relevance; others observe what people do with the list. A product manager does not need to implement them, but does need to choose which ones decide a launch, and to know what each one can hide.",
        },
        {
          type: "p",
          text: "For an overview of the search PM role and my evidence, see [Search product management](/expertise/search-product-management). This page goes deep on the metrics.",
        },
      ],
    },
    {
      id: "offline-metrics",
      heading: "Offline metrics: scoring against relevance labels",
      blocks: [
        {
          type: "p",
          text: "Offline metrics need a labeled set: queries, candidate results, and a relevance grade for each pair, assigned by trained raters. They are fast, repeatable and safe because no customer sees the change.",
        },
        {
          type: "list",
          items: [
            "**Precision@k**: of the top k results, how many are relevant. Easy to explain. Ignores order within the top k and needs binary labels.",
            "**Recall@k**: of all relevant items for the query, how many appear in the top k. The key metric for the retrieval stage, because a ranker cannot promote an item that was never retrieved.",
            "**NDCG@k** (normalized discounted cumulative gain): uses graded labels and discounts each result's value by its position, then divides by the best possible ordering so scores range from 0 to 1. The standard choice when results have degrees of relevance and the top positions matter most.",
            "**MRR** (mean reciprocal rank): for each query, 1 ÷ the rank of the first relevant result, averaged across queries. Best when the user needs one right answer, such as a known item or a navigational query.",
          ],
        },
      ],
    },
    {
      id: "ndcg-worked",
      heading: "A tiny NDCG calculation",
      blocks: [
        {
          type: "p",
          text: "Take one query with five results, graded 0 (not relevant) to 3 (highly relevant). DCG sums each grade divided by log₂(position + 1). This example uses the grade directly as the gain; some teams use 2^grade − 1, which weights highly relevant results more.",
        },
        {
          type: "table",
          caption: "Illustrative example, not production data.",
          head: ["Position", "Grade (shown order)", "Discount log₂(pos+1)", "Gain ÷ discount", "Grade (ideal order)", "Ideal gain ÷ discount"],
          rows: [
            ["1", "3", "1.000", "3.000", "3", "3.000"],
            ["2", "2", "1.585", "1.262", "3", "1.893"],
            ["3", "3", "2.000", "1.500", "2", "1.000"],
            ["4", "0", "2.322", "0.000", "1", "0.431"],
            ["5", "1", "2.585", "0.387", "0", "0.000"],
            ["Sum", "", "", "**DCG = 6.149**", "", "**IDCG = 6.324**"],
          ],
        },
        {
          type: "p",
          text: "NDCG@5 = 6.149 ÷ 6.324 ≈ **0.972**. Swapping positions 2 and 3 would make the list ideal and raise it to 1.0. On the same five results, precision@5 (counting any grade above 0 as relevant) is 4 ÷ 5 = 0.8 whether or not you swap them, which shows why NDCG is more sensitive to order.",
        },
        {
          type: "p",
          text: "MRR works on a set of queries. If the first relevant result appears at rank 1 for query A, rank 3 for query B, and nowhere for query C, MRR = (1 + 1/3 + 0) ÷ 3 ≈ 0.444.",
        },
      ],
    },
    {
      id: "online-metrics",
      heading: "Online metrics: what people actually do",
      blocks: [
        {
          type: "list",
          items: [
            "**Zero-result rate**: share of queries returning nothing. Usually points at catalog gaps, spelling, synonyms or overly strict filters rather than ranking.",
            "**Click-through rate (CTR)**: share of searches with a click, or clicks on a given position. A useful health signal, not proof of relevance.",
            "**Conversion**: share of searches that end in the target action, such as a purchase, a sign-up or a label printed. Closest to business value, but noisy and slow to move.",
            "**Reformulation and abandonment**: people retyping the query or leaving. Often the clearest sign of a failed search.",
            "**Latency (p95)**: the time within which 95% of searches return. A ranking gain that breaks the latency budget usually costs more in behavior than it adds.",
          ],
        },
      ],
    },
    {
      id: "position-bias",
      heading: "Position bias: why clicks mislead",
      blocks: [
        {
          type: "p",
          text: "**Position bias** is the tendency for people to click higher-ranked results more often regardless of relevance. If you train or judge a ranker on raw clicks, it learns to keep whatever is already on top. A related problem is popularity bias: items that were shown more get more clicks and are shown even more.",
        },
        {
          type: "list",
          items: [
            "Use human relevance labels as the offline reference, not clicks alone.",
            "In online tests, compare outcomes (conversion, reformulation) rather than only top-position CTR.",
            "Where you use click data for training, apply position-debiasing methods from the unbiased learning-to-rank literature.",
            "Be careful reading your own default: if most people pick the first option, part of that is the position.",
          ],
        },
      ],
    },
    {
      id: "how-to-choose",
      heading: "How to choose: a short framework",
      blocks: [
        {
          type: "table",
          head: ["If your product…", "Primary offline metric", "Primary online metric"],
          rows: [
            ["Shows a short ranked list where order matters", "NDCG@k with k = visible slots", "Conversion from search"],
            ["Needs one correct answer (known item, navigation)", "MRR", "Reformulation rate"],
            ["Feeds a reranker or LLM with candidates", "Recall@k at the retrieval cut-off", "Downstream NDCG or task success"],
            ["Has many empty searches", "Recall on failed queries", "Zero-result rate"],
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Match k to what users see. If five results are visible, NDCG@5 is more honest than NDCG@20.",
            "Set the latency budget before comparing models, so a slower model cannot win on relevance alone.",
            "Measure rater agreement on the labeled set; a metric is only as stable as its labels.",
            "Make the offline metric a release gate and the online metric the launch decision.",
          ],
        },
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: VWO and Stallion Express",
      blocks: [
        {
          type: "p",
          text: "At VWO, the search work combined hybrid retrieval (BM25 plus vector), a LambdaMART learning-to-rank model trained on human-labeled judgments, and a cross-encoder reranker that selects the top 5 of about 50 candidates. Engineering built the models. The headline offline metric was NDCG@5.",
        },
        {
          type: "metrics",
          items: [
            { value: "0.68 → 0.74", label: "NDCG@5", note: "Within a 450 ms p95 latency budget." },
            { value: "0.60 → 0.75", label: "Reviewer agreement (Cohen's kappa)", note: "On a 600-pair golden set used as a release gate." },
            { value: "3", label: "Ranking regressions caught before release", note: "By the human-evaluation gate." },
          ],
        },
        {
          type: "p",
          text: "The latency budget decided one choice. A larger cross-encoder gave only a marginal NDCG gain at roughly 3× the cost and went above the budget, so the smaller model shipped. The team also reduced popularity and position bias in the ranking, during a migration from Elasticsearch to Algolia.",
        },
        {
          type: "p",
          text: "At Stallion Express the \"search\" was choosing a shipping rate. I launched a best-value default ranking that balanced cost, delivery speed and service reliability. 58% of merchants picked the top-ranked option, but position drives some of that, so I did not treat it as proof the ranking was right. The outcome metric was checkout abandonment, which fell 14% in an A/B test of the rate-comparison launch. Faceted filters for delivery speed, tracking and carrier preference were used on 24% of shipments, a sign that one ranking could not serve every intent. Details are in the [checkout shipping discovery case study](/case-studies/checkout-shipping-discovery).",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      blocks: [
        {
          type: "list",
          items: [
            "**Optimizing CTR as if it were relevance.** It rewards position and attractive titles.",
            "**Choosing k by convention.** NDCG@10 on a page that shows four results measures the wrong thing.",
            "**Ignoring rater agreement.** If raters disagree, a small NDCG change can be noise.",
            "**Comparing models without a latency budget.** The bigger model often wins offline and loses online.",
            "**Fixing ranking when the issue is retrieval.** Check recall first; a missing item cannot be ranked.",
            "**Reading the top-option share as success.** A high pick rate for the default partly reflects its position.",
          ],
        },
      ],
    },
    {
      id: "limits",
      heading: "Limits of this guide",
      blocks: [
        {
          type: "p",
          text: "My production search work covers ranking inside B2B and marketplace products, with short result lists. I have not owned large-scale web search, query understanding systems, or ads ranking. I worked on the product side of the VWO ranking stack; engineering built and trained the models. I have no zero-result-rate figures of my own to share.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is NDCG or MRR better?",
      a: "Neither in general. NDCG suits ranked lists with graded relevance where several results matter. MRR suits tasks with one right answer. Pick the one that matches how people use the results.",
    },
    {
      q: "What is a good NDCG score?",
      a: "There is no universal threshold. Scores depend on the label scale, k and the query mix. Compare versions of your own system on the same labeled set rather than against numbers from other products.",
    },
    {
      q: "Why track offline metrics if A/B tests measure real behavior?",
      a: "Offline metrics are fast, cheap and safe, so they can block a regression before any customer sees it. A/B tests are slower and noisier but measure business outcomes. Use both.",
    },
    {
      q: "How does latency affect ranking decisions?",
      a: "Set a budget, such as a p95 target, and treat it as a constraint. At VWO a larger reranker was rejected because its small NDCG gain came at about 3× the cost and above the 450 ms p95 budget.",
    },
  ],
  sources: [
    { label: "Discounted cumulative gain, Wikipedia", url: "https://en.wikipedia.org/wiki/Discounted_cumulative_gain" },
    { label: "Mean reciprocal rank, Wikipedia", url: "https://en.wikipedia.org/wiki/Mean_reciprocal_rank" },
    { label: "Precision and recall, Wikipedia", url: "https://en.wikipedia.org/wiki/Precision_and_recall" },
    { label: "Learning to rank, Wikipedia", url: "https://en.wikipedia.org/wiki/Learning_to_rank" },
    { label: "Joachims, Swaminathan and Schnabel (2016), Unbiased Learning-to-Rank with Biased Feedback (arXiv)", url: "https://arxiv.org/abs/1608.04468" },
  ],
  related: [
    { href: "/expertise/search-product-management", label: "Search product management" },
    { href: "/case-studies/checkout-shipping-discovery", label: "Case study: Checkout shipping discovery" },
    { href: "/case-studies/medicare-plan-discovery", label: "Case study: Medicare plan discovery" },
    { href: "/insights/how-to-evaluate-ai-agents", label: "How to evaluate an AI agent before you let it act" },
  ],
};

export default doc;
