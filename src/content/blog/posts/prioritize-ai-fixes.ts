import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "prioritize-ai-fixes",
  "title": "How do you prioritize AI fixes when everything looks urgent?",
  "metaTitle": "How to Prioritize AI Fixes When Everything's Urgent",
  "description": "How to prioritize AI product fixes when everything looks urgent: rank by frequency times severity, weigh cost to fix, and say no to small stuff out loud.",
  "date": "2026-12-27",
  "category": "pm-problem",
  "tags": [
    "prioritization",
    "ai products",
    "failure taxonomy",
    "roadmap"
  ],
  "body": [
    "Rank failures by how often they happen times how much they hurt, then weigh how hard each one is to fix. That gives you an order you can defend. Without it, the latest screenshot in a group chat sets the priority, and the team spends the week on whatever was loudest.",
    "At VWO, our backlog for Wingz, the agent that sets up and launches A/B tests, ran on exactly this. We had a failure taxonomy, 12 and later 13 categories, ranked by frequency times severity. The top three were targeting misconfiguration, false winners, and multi-step context loss. When a new failure came in, the first question was which category it belonged to. That one step calmed a lot of debates, because a vivid failure in a low-ranked category could wait, and everyone could see why.",
    "Cost to fix is the second pass. Some high-ranked problems need a long rebuild, while a lower one might be a quick validation rule. I'd usually take a cheap fix for a mid-ranked category early, as long as it doesn't delay work on the top one. It also helps to separate fixes that remove a failure from ones that only catch it. Validation before execution catches problems. A better prompt or a better harness can stop them happening. Both count, and they have different costs. And be open about what you're not fixing. Writing down that a category is known and deferred, with a reason, protects trust with support and sales.",
    "If your backlog feels like a pile right now, pull the last month of failures and tag each one by cause. Count them. Give each category a severity from one to three based on customer harm. Multiply, sort, and share the top five with engineering. Ask them for a rough size on each. You'll have a defensible order by the end of the week."
  ],
  "related": [
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
