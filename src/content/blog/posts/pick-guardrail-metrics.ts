import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "pick-guardrail-metrics",
  "title": "How do you pick guardrail metrics for an experiment?",
  "metaTitle": "How to Pick Guardrail Metrics for Experiments",
  "description": "Guardrail metrics are the things that must not get worse while you chase your main goal. How to choose them, how many to track, and what to do when one moves.",
  "date": "2027-01-30",
  "category": "pm-problem",
  "tags": [
    "experimentation",
    "metrics",
    "ab testing",
    "guardrails"
  ],
  "body": [
    "A guardrail is a number that must not get worse while you try to improve something else. Pick it by asking what could quietly break if your test wins. If you're making a choice easier, the guardrail might be whether people choose well. If you're speeding up checkout, it might be refunds or support contacts.",
    "At Unity Senior Health we were narrowing Medicare plans from 12 down to 4 with personalized ranking, and we validated it with 4 A/B tests. The main goal was getting more people to choose a plan. A shortlist can do that in a bad way too, by pushing people toward plans that don't fit them. The interviews had told us what fit meant to shoppers: their doctors in network, their drugs covered, a monthly cost they could pay. Those are the kinds of questions I'd turn into guardrails. Cost per enrollment was also a business number we watched, and it went from $210 to $172. A win on enrollments that raised cost, or hurt fit, wouldn't have been a win.",
    "Keep the list short. Two or three guardrails is usually plenty. Every extra metric adds a chance that one moves by noise and stalls a good change. Pick ones with a clear story: if this gets worse, here's who is hurt. Decide before the test how much movement counts as a problem and who decides what happens next. Guardrails also need an owner outside the team running the test, ideally someone from support, finance or compliance, who will speak up if their number slips.",
    "On Monday, take your next planned test and ask the team one question: if this wins, what could it break? Write down the top two answers as guardrails with a threshold for each. Share the list with whoever owns those numbers. If nobody can name a risk, the change is either very safe or nobody has thought hard about it yet."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
