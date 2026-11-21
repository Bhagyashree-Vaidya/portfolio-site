import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "how-big-should-a-golden-set-be",
  "title": "How big should a golden set be?",
  "metaTitle": "How Big Should a Golden Set Be for AI Evals?",
  "description": "How to size a golden set for AI evaluation: cover the decisions that matter, weight by risk, and grow it from real failures instead of picking a round number.",
  "date": "2026-12-15",
  "category": "pm-problem",
  "tags": [
    "golden set",
    "ai evaluation",
    "llm",
    "testing"
  ],
  "body": [
    "Big enough to cover the decisions that matter, and small enough that people will keep it accurate. There's no magic number. A few hundred well-chosen cases that map to your real risks beat thousands that mostly repeat the easy path.",
    "Ours at VWO had 600 pairs. It was built for Wingz, the agent that recommends, configures and launches A/B tests across 40 to 50 enterprise accounts. I'd describe 600 as a result, not a target. It's roughly what we needed to cover our failure categories with enough examples each to see a change, plus the common requests that make up most traffic. If I were sizing one from scratch, I'd start from the categories, not the total.",
    "Here's a way to think it through. List the decisions your product makes that could hurt a customer. For each, you want enough cases to notice when quality slips, and that number goes up with severity. A rare but costly mistake deserves more examples than its traffic share suggests, because you can't afford to miss it. The easy, frequent cases need fewer than you'd think, since they rarely regress. Then there's the human cost. Every pair needs a correct label, and labels go stale when the product changes. A set nobody maintains slowly turns into a test of last year's product. Someone has to own it, and it helps if engineering and product agree on who.",
    "To start, write your failure categories down and give each one a minimum of twenty to thirty cases, more for the severe ones. Fill them from real failures and real requests, not invented ones. Add every new production failure as a case. Then review a random tenth of the labels each quarter. If many are out of date, the set is too big for the team you have."
  ],
  "related": [
    {
      "href": "/insights/how-to-evaluate-ai-agents",
      "label": "How to evaluate AI agents"
    }
  ]
};

export default post;
