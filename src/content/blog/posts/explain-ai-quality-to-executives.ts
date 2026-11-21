import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "explain-ai-quality-to-executives",
  "title": "How do you explain AI quality to executives who want one number?",
  "metaTitle": "Explaining AI Quality to Executives in One Number",
  "description": "How to give executives the single AI quality number they want without hiding the risk: pick one headline metric and always pair it with what it leaves out.",
  "date": "2026-12-19",
  "category": "pm-problem",
  "tags": [
    "ai product management",
    "metrics",
    "stakeholder management",
    "evaluation"
  ],
  "body": [
    "Give them the one number, and always say what it hides in the same breath. Executives ask for one number because they have to compare many things quickly. That's fair. Your job is to pick a number that tracks real harm to customers and to keep its blind spot visible.",
    "At VWO, the number we used for Wingz, our agent that sets up and launches A/B tests, was the critical error rate. Over two months it went from about 9% to under 3.5%, more than 61% lower. It was a good headline because it was about errors that hurt customers, not overall accuracy. But I always paired it with a caveat. Other changes shipped in the same window, so it wasn't a controlled test, and I couldn't credit any single fix with the whole drop.",
    "A few things help the number hold up. Pick one that moves when customers are hurt, not one that moves when the model gets better at easy cases. Define it in one sentence that someone outside the team can repeat. Show the trend, not a snapshot. And name the risk it doesn't capture. For an agent, that might be a rare, severe failure that barely moves the rate, or a new kind of failure you haven't categorized yet. Saying that upfront protects you later, when the number looks fine and something still goes wrong.",
    "Before your next review, write the headline on one line and the caveat on the line under it. Show both to a peer outside your team and ask them to explain it back. If they can't, the definition needs work. If they repeat the number but drop the caveat, make the caveat shorter. It has to travel with the number, or it won't travel at all."
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    },
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
