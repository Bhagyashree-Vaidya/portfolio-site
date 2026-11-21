import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "upgrade-the-model-or-fix-the-harness",
  "title": "Your AI agent keeps failing. Upgrade the model or fix the harness?",
  "metaTitle": "AI Agent Failing? Model Upgrade vs Harness Fix",
  "description": "How to tell whether an AI agent's failures come from the model or from the harness around it, and how to decide where to spend the next sprint of engineering.",
  "date": "2026-12-01",
  "category": "pm-problem",
  "tags": [
    "ai agents",
    "evaluation",
    "llm",
    "reliability"
  ],
  "body": [
    "Before you upgrade the model, find out whether the model is what's failing. In my experience, a lot of agent failures come from the scaffolding around it: how context gets passed between steps, how tools get called, what gets checked before an action runs. A better model won't fix a harness that drops context halfway through a task.",
    "At VWO we had a model upgrade planned for Wingz, our A/B testing agent. Then a benchmark separated model capability from multi-step execution failures, and the results pointed at execution. We redirected the planned upgrade into an agent-harness reliability sprint. That matched what our failure taxonomy showed. Multi-step context loss was one of the top three categories, next to targeting misconfiguration and false \"winners.\" My first version of the taxonomy missed it entirely. An engineer caught it.",
    "Here's how to tell which problem you have. Test the model on single, well-formed tasks, separately from the full multi-step flow. If it gets the single tasks right and the flow still breaks, look at the harness. Then rank failures by **frequency times severity** so you fix what hurts most first. We started with 12 categories and later had 13. Over two months, critical errors went from about 9% to under 3.5%. Other changes shipped in the same window, so it wasn't a controlled test, and I can't credit the sprint alone. The PM's job here is to make the call visible: what the evidence says, what you're betting on, and what would change your mind.",
    "On Monday, take your last 50 agent failures and label each one by hand. Don't start with categories. Let them come out of the data, and ask an engineer to review your labels, since they'll spot things you won't. If most failures happen after the first step, put the upgrade on hold and look at the harness first."
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
