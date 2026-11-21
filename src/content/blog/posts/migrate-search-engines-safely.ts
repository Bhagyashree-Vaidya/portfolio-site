import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "migrate-search-engines-safely",
  "title": "How do you switch search engines without breaking relevance?",
  "metaTitle": "Switch Search Engines Without Breaking Relevance",
  "description": "How to move to a new search engine safely: build a judged set before you start, compare old and new on it, and run shadow traffic before customers see it.",
  "date": "2027-01-12",
  "category": "pm-problem",
  "tags": [
    "search",
    "migration",
    "relevance",
    "evaluation"
  ],
  "body": [
    "Measure before you move. Build a judged set of real queries on the old engine, run the same set on the new one, and send shadow traffic to the new engine before any customer sees its results. Most relevance regressions in a migration come from small defaults nobody wrote down, and a before and after comparison catches them.",
    "Search migrations usually happen for business or engineering reasons: cost, hosting, a feature the old system lacks. Customers don't care about any of that. They care that the query they typed last week still finds the same thing. The risk is that the old engine had years of tuning buried in it, like synonyms, boosts, stemming rules and field weights, and some of it lives only in config files or one engineer's memory. Before anyone writes migration code, I'd ask engineering to list every tuning rule the current setup applies, even the ones that look accidental.",
    "Then compare on numbers you trust. A judged set of a few hundred graded queries gives you a ranking metric like NDCG@5 for both engines. At VWO we tracked NDCG@5 (it moved from 0.68 to 0.74 there) alongside a 450 ms p95 latency budget, and that pairing is what I'd use for a migration too. Shadow traffic adds the reality check: real queries hit both engines, only the old one answers, and you diff the results. Big diffs on high-volume queries are where to look first.",
    "On Monday, if a migration is on your roadmap, ask for the judged set to be a launch requirement in the plan. Agree on what counts as a regression, maybe a drop in NDCG@5 beyond a set amount or any change on your top 20 queries. Then decide who signs off. A migration with no relevance owner tends to ship on schedule and get fixed in production."
  ],
  "related": [
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    },
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for PMs"
    }
  ]
};

export default post;
