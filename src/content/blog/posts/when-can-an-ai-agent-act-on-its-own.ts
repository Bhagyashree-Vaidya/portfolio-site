import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "when-can-an-ai-agent-act-on-its-own",
  "title": "When should an AI agent act on its own, and when should a human approve?",
  "metaTitle": "When Should an AI Agent Act Without Approval?",
  "description": "How to decide which AI agent actions can run automatically and which need human approval, based on what a mistake costs and how fast anyone would see it.",
  "date": "2026-11-25",
  "category": "pm-problem",
  "tags": [
    "ai agents",
    "human in the loop",
    "ai product management",
    "risk"
  ],
  "body": [
    "Let an agent act on its own when a mistake is cheap to undo and easy to spot. When a wrong action is expensive, hard to reverse, or invisible until a customer complains, put a human approval step in front of it. Autonomy gets earned per action type, based on evidence. You don't hand it to the whole product on day one.",
    "At VWO I owned Wingz, an LLM agent that recommends, configures and launches A/B tests for enterprise accounts. The plan was a fully automatic launch. Our evals showed some tests were targeting the wrong page, so we paused it, and human approval shipped first. A test on the wrong page uses up a customer's traffic and can hand them a result they might act on. That's a mistake worth a click to prevent.",
    "Here's how I'd sort it. List every action the agent can take, then rate each one on two things: how bad is it if it's wrong, and how quickly would anyone find out? Low on both, let it run. High on either, add **validation before execution** and a review step. That's roughly where we landed at VWO, with checks before anything executed and human review for high-risk actions. Engineering owns the checks. The PM owns where the line sits and has to be able to explain it. Customers should be able to see why an action is waiting on them, or the review step just feels like the product being slow.",
    "The honest limit: approval steps add friction, and people can start rubber-stamping them. So treat review as temporary for each action type, and measure it. Track how often reviewers change or reject what the agent proposed. If that number stays near zero for a good while, you have a case for loosening the gate on that action. If it doesn't, you've learned exactly where the agent still needs work, which is useful too."
  ],
  "related": [
    {
      "href": "/insights/human-in-the-loop-ai-design",
      "label": "Human-in-the-loop AI design"
    },
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
