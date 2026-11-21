import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "ai-agent-says-one-thing-does-another",
  "title": "Why does an AI agent say it did one thing and do another?",
  "metaTitle": "Why AI Agents Say One Thing and Do Another",
  "description": "Why an AI agent's summary can disagree with what it actually did, how multi-step context loss causes it, and why you should evaluate actions, not words.",
  "date": "2026-12-12",
  "category": "pm-problem",
  "tags": [
    "ai agents",
    "evaluation",
    "reliability",
    "llm"
  ],
  "body": [
    "Usually because the agent's words and its actions come from different moments. It plans a step, takes several more, loses track of an earlier detail, and then writes a confident summary based on the plan rather than what happened. The fix starts with checking what the agent did, not what it says it did.",
    "At VWO we ran into this with Wingz, the agent that configures and launches A/B tests for customers. Multi-step context loss was one of the top three failure categories in our taxonomy. The pattern is simple to describe. The user asks for something specific early on, the agent works through several steps, and by the end a constraint from the start has slipped. The final message still reads well. That's what makes it dangerous, because a polished summary makes people trust the result more.",
    "So treat the agent's description as a claim to verify. In practice that means comparing the final state of the system against what the user asked for: which page is targeted, which audience, which goal. That check can run automatically for most actions, because the system state is data you already have. We added validation before execution for exactly this reason, so a mismatch gets caught before it affects a customer. It also changes how you read evals. If your graders only read transcripts, they'll mostly score the writing. Score the outcome.",
    "Next time you review agent failures, pull ten where the user complained and put three things side by side: the original request, the agent's summary, and the actual result. Mark every place the summary and the result disagree. If you find a lot of them, your evals probably reward the summary. Change one grader to check state instead, and see what your error rate looks like then."
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
