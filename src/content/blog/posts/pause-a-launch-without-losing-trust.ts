import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "pause-a-launch-without-losing-trust",
  "title": "How do you pause a launch without losing the team's trust?",
  "metaTitle": "How to Pause a Launch Without Losing Trust",
  "description": "How a PM can pause a launch without losing the team: show the evidence early, keep the decision narrow, and offer a smaller version that can ship now.",
  "date": "2026-12-16",
  "category": "pm-problem",
  "tags": [
    "launches",
    "stakeholder management",
    "ai agents",
    "decision making"
  ],
  "body": [
    "Pause with evidence, and come with a smaller launch you can ship. People can accept a delay. What wears down trust is a delay that feels like opinion, or one that leaves the team with nothing to show for the work.",
    "At VWO we were close to shipping fully automatic launch for Wingz, our agent that sets up and starts A/B tests for customers. Evals showed that some tests were targeting the wrong page. For a customer, that means running an experiment on traffic they never meant to touch. We paused the automatic version and shipped human approval first. The agent still did the setup, and a person confirmed before anything went live. The team still shipped, and the risky step got a check.",
    "A few things make this go better in general. Show the actual cases, not a summary. Engineers trust a concrete failure they can reproduce far more than a percentage on a slide. Keep the pause narrow: name the specific condition that has to be true to go ahead, so it doesn't become an open-ended hold. Say who decides when that condition is met. And give credit for the work already done, because a pause can feel like a judgment on the people who built it. Usually it isn't, and it helps to say so plainly.",
    "If you think you need to pause something this week, write three lines first. What did you see, with two or three real examples. What is the smallest version that avoids that risk. What would need to be true to ship the full version, and how you'll measure it. Share that with the team before the launch meeting, not in it. If you can't fill in the second line, the pause may need more thought."
  ],
  "related": [
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    },
    {
      "href": "/insights/human-in-the-loop-ai-design",
      "label": "Human-in-the-loop AI design"
    }
  ]
};

export default post;
