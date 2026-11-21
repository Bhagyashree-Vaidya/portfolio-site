import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "read-a-bayesian-ab-test",
  "title": "How should a PM read a Bayesian A/B test result?",
  "metaTitle": "How to Read a Bayesian A/B Test Result",
  "description": "Probability to beat, expected loss, and a decision rule set before the test starts. How a PM can read a Bayesian A/B test result and turn it into a decision.",
  "date": "2027-01-29",
  "category": "pm-problem",
  "tags": [
    "experimentation",
    "ab testing",
    "statistics",
    "decision making"
  ],
  "body": [
    "Read two numbers and one rule. The probability that the variant beats the control tells you how confident to be. The expected loss tells you how much you'd give up if you ship it and you're wrong. The rule, set before the test started, tells you what combination of those two is good enough to act on.",
    "Probability to beat is the intuitive one. If it says 92%, the model thinks there's a 92% chance the variant is better on your chosen metric, given the data and its assumptions. It doesn't say how much better. That's where expected loss comes in. A variant can have a high probability to beat and a tiny real gain, or a lower probability with a large possible downside. For a reversible change, a modest probability with a small expected loss can be a fine reason to ship. For something risky or hard to undo, you want both numbers strongly in your favor.",
    "The mistakes I'd watch for are mostly human. Peeking every day and stopping when the number looks good. Changing the primary metric after seeing results. Treating 95% as a magic line when your decision rule said 90%. My work at VWO was on an AI agent that recommends, configures and launches A/B tests, and one of the failure categories we ranked highest was false winners, tests the agent called a success when the result didn't support it. People make that same mistake, and a written decision rule is the best guard against it.",
    "On Monday, before your next test, write three lines in the test plan: the primary metric, the probability to beat you'll accept, and the maximum expected loss you'll accept. Share it with your engineer and your manager. When the result comes in, read it against those lines instead of against your hopes. If it's inconclusive, say so plainly."
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
