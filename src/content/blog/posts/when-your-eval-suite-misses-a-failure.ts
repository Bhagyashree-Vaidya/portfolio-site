import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "when-your-eval-suite-misses-a-failure",
  "title": "What do you do when your eval suite misses a failure?",
  "metaTitle": "When Your AI Eval Suite Misses a Failure",
  "description": "What to do when your AI eval suite misses a whole kind of failure: add the category, re-score the backlog, and make it cheap for anyone to flag the next gap.",
  "date": "2026-12-18",
  "category": "pm-problem",
  "tags": [
    "ai evaluation",
    "failure taxonomy",
    "quality",
    "teams"
  ],
  "body": [
    "Add the missing category, then go back and re-score what you already have. A miss like that usually means your old numbers were too optimistic, and you want to know by how much. After that, make it easy for the next person to report a gap, because there will be one.",
    "This happened to us at VWO. Our first failure taxonomy for Wingz, the agent that sets up and launches A/B tests, missed multi-step context loss completely. An engineer caught it. It went on to become one of the top three categories. That's the part I'd stress. A category you never named doesn't show up as small in your reports. It doesn't show up at all.",
    "Here's how I'd handle it in general. First, write a clear definition and a few examples, so people tag it the same way. Second, run it over past failures and the golden set. Your error rates will likely go up, and that's fine, as long as you explain why. If you report trends to leadership, mark the change, so nobody reads a new category as a quality drop. Third, ask why the suite missed it. Often it's because tests were written by people imagining failures rather than reading them, or because graders only looked at the final answer. Fixing that habit matters more than the one category.",
    "This week, set up one simple channel where anyone, including support and engineering, can post a failure that doesn't fit your current categories. Review it on a fixed day. When three posts look alike, draft a new category. And credit the person who spotted it by name in your notes. People flag more when they see it lands."
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
