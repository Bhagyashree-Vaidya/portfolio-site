import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "metric-moved-not-sure-why",
  "title": "The metric moved and you're not sure why. Now what?",
  "metaTitle": "The Metric Moved and You Don't Know Why",
  "description": "When a metric moves and several things shipped at once, use a change log, segment the data, and keep a holdout next time. How to say what you don't know.",
  "date": "2027-02-01",
  "category": "pm-problem",
  "tags": [
    "metrics",
    "analytics",
    "attribution",
    "experimentation"
  ],
  "body": [
    "Start with what changed, then where it changed, and be honest about what you can't separate. Pull every release, config change and outside event from the period. Split the metric by segments that each change would affect. If you still can't isolate a cause, say so plainly and set up a holdout so next time you can.",
    "At VWO I owned Wingz, an LLM agent that recommends, configures and launches A/B tests, and critical errors fell from about 9% to under 3.5% in two months. We'd built a failure taxonomy, added validation before execution, and put human review on high-risk actions. Other changes shipped in the same window, though, so it wasn't a controlled test. The honest summary is that the work contributed to the drop, and we can't say exactly how much each piece did. I'd rather report that than claim the whole improvement for one change.",
    "The change log is the most useful tool and the one teams keep worst. Engineering releases, pricing tweaks, a marketing email, a seasonal pattern, an outage at a partner. Write them all in one place with dates. Then segment. If your change only touched one customer type, did the metric move only for them? If it moved everywhere at once, the cause is probably something broader. Segments won't prove anything, but they rule things out fast. The trade-off is time. You can spend weeks on attribution, and at some point the better move is to accept some uncertainty and design the next change so it can be measured.",
    "On Monday, start a shared change log if you don't have one. One row per change, with a date, owner and what it touched. For your next big change, ask for a small holdout group that doesn't get it. That single habit turns most metric mysteries into a comparison you can actually read."
  ],
  "related": [
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    },
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
