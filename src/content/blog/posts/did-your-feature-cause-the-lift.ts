import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "did-your-feature-cause-the-lift",
  "title": "The metric went up. Did your feature actually cause it?",
  "metaTitle": "Did Your Feature Actually Cause the Lift?",
  "description": "How to tell whether your feature caused a metric to move or just happened at the same time, and how to report results honestly without a clean test.",
  "date": "2026-12-06",
  "category": "pm-problem",
  "tags": [
    "experimentation",
    "metrics",
    "causality",
    "a/b testing"
  ],
  "body": [
    "Maybe. A metric going up after you ship tells you something changed. It doesn't tell you what. To say your feature caused it, you need a comparison: a group that got the feature and a group that didn't, over the same period.",
    "I have an example from my own work. At VWO, critical errors on Wingz, our A/B testing agent, went from about 9% to under 3.5% in two months, a drop of more than 61%. We'd built a failure taxonomy, added validation before execution and put human review on high-risk actions. Other changes shipped in the same window, though, so **it wasn't a controlled test**. I can say our changes were part of it. I can't say how much each one did, and I try not to.",
    "How to think it through. First, ask what else changed in the same period: other releases, pricing, seasonality, a big customer onboarding, a marketing push. Second, check whether the lift shows up where your feature actually touches users. If you changed onboarding and retention also moved for long-time users who never saw it, something else is going on. Third, be honest about who benefits from the story. Every team wants the win, and a PM who over-claims tends to lose credibility the first time someone checks the numbers. Data science or analytics can help a lot here, so bring them in before the results review, not after.",
    "For your next launch, decide before shipping how you'll know it worked. If you can run an A/B test, run it. If you can't, hold back a small group, stagger the rollout by region, or at least write down what else is shipping that week. When you report results, say which kind of evidence you have. \"This is correlation, and here's why I still think it helped\" holds up better in a review than a bold claim someone can poke a hole in."
  ],
  "related": [
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    },
    {
      "href": "/insights/how-to-evaluate-ai-agents",
      "label": "How to evaluate AI agents"
    }
  ]
};

export default post;
