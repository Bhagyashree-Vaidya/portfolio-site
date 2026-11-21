import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "what-to-measure-before-launching-an-ai-agent",
  "title": "What should you measure before you launch an AI agent?",
  "metaTitle": "What to Measure Before Launching an AI Agent",
  "description": "The three numbers I'd want before launching an AI agent: severity-weighted error rate, coverage of real tasks, and how easily each action can be undone.",
  "date": "2026-12-09",
  "category": "pm-problem",
  "tags": [
    "ai agents",
    "evaluation",
    "launch",
    "metrics"
  ],
  "body": [
    "Before an AI agent goes live, I'd want three numbers: how often it makes a serious mistake, how much of real usage your tests actually cover, and how many of its actions can be undone. Accuracy on a demo set tells you very little. A rare error that launches the wrong thing for a paying customer counts for more than ten typos.",
    "Start with a severity-weighted error rate. Count errors, but weight them by what they cost the customer. At VWO I owned Wingz, an LLM agent that recommends, configures and launches A/B tests. We tracked critical errors specifically, and over two months that rate went from about 9% to under 3.5%. I'm careful with that number, because other changes shipped in the same window, so it wasn't a controlled test. Still, it was the number that told us whether the agent was safe to hand more work.",
    "Coverage is the second one, and it's easy to skip. Your eval set reflects the tasks you thought of. Real users bring others. Compare what people actually ask for in a beta against what your tests contain, and look for the gaps. Then reversibility. Sort the agent's actions into ones a customer can undo in a click and ones they can't. The irreversible ones need stricter checks, or a person approving them, before launch. That's a product call as much as an engineering one, so put the list in the spec where everyone can argue with it.",
    "On Monday, list every action your agent can take and give each one two scores: how bad it is when wrong, and how hard it is to undo. Anything high on both gets validation before it runs. Then pull fifty real requests and check how many your test set already covers. If it's under half, you know what to build next."
  ],
  "related": [
    {
      "href": "/insights/how-to-evaluate-ai-agents",
      "label": "How to evaluate AI agents"
    },
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
