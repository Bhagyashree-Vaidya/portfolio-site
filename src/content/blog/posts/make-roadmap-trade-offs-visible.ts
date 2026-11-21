import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "make-roadmap-trade-offs-visible",
  "title": "How do you make a roadmap trade-off visible to leadership?",
  "metaTitle": "How to Show Roadmap Trade-Offs to Leadership",
  "description": "How to show leadership what a roadmap choice costs: put what you're not doing next to what you are, bring the evidence and make the decision easy to review.",
  "date": "2027-03-02",
  "category": "pm-problem",
  "tags": [
    "roadmapping",
    "stakeholder management",
    "prioritization",
    "ai agents"
  ],
  "body": [
    "Show leadership what you're not doing right next to what you are, with the reason in one line. Most roadmaps only list the yeses, so the cost of each choice stays invisible. When the trade-off is on the page, leaders can push back on the decision itself instead of being surprised by it later.",
    "At VWO, a model upgrade was planned for Wingz, our LLM agent. A benchmark separated model capability from multi-step execution failures, and it showed that many of our problems came from the agent harness, not the model. So we redirected the planned upgrade to a harness reliability sprint. That's a trade-off leadership needs to see: a model upgrade is an easy thing to announce, and a reliability sprint is harder to explain. The benchmark made it explainable, because it pointed to where the failures actually were.",
    "A format that works: for each major item, write what you'll do, what you're choosing not to do instead, the evidence behind the choice and what would make you change your mind. That last part matters. It tells leadership you're not attached to the plan, just to the reasoning. Keep the evidence simple. One chart or one number usually beats a long deck. Think about who's affected, too. If sales was counting on the thing you're deferring, tell them before the leadership review, not during it. Nobody likes learning about a delay in a meeting with their boss.",
    "For your next planning cycle, add a \"not doing\" column to your roadmap and fill it honestly. Pick the single biggest trade-off and write it as a short paragraph: the options, the evidence and the call. Send it to your manager ahead of the review and ask what's missing. You'll walk in with fewer surprises on both sides."
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
