import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "human-review-crutch-or-feature",
  "title": "Is human review a crutch or a feature?",
  "metaTitle": "Human Review in AI Products: Crutch or Feature?",
  "description": "When human review in an AI product is a real feature and when it's a crutch, where judgment actually matters, and why you should track the override rate.",
  "date": "2026-12-21",
  "category": "pm-problem",
  "tags": [
    "human in the loop",
    "ai agents",
    "product design",
    "trust"
  ],
  "body": [
    "Human review is a feature when it sits where judgment matters and a crutch when it sits everywhere because nobody trusts the system. The difference shows up in the data. If reviewers almost never change anything, review is mostly cost. If they change a lot, the system isn't ready for that step.",
    "At VWO we used human review for high-risk actions in Wingz, the agent that sets up and launches A/B tests. We'd paused a fully automatic launch after evals showed some tests targeted the wrong page, and shipped human approval first. For that step it was clearly a feature. A customer would much rather confirm one screen than discover their experiment ran on the wrong traffic. Review sat alongside a failure taxonomy and validation before execution, so it wasn't the only safety net.",
    "The useful metric is the override rate: how often a reviewer changes or rejects what the system proposed. Track it by action type. Where it's very low over a long stretch, you have a case for removing review, or at least sampling it. Where it's high, the reviewer is doing real work, and you should look at what they're catching so the system can learn it. There's also a quieter risk. People who approve hundreds of good suggestions start approving without reading. So keep the review screen short, show the riskiest field first, and now and then check whether reviewers catch a planted error.",
    "On Monday, list every place your product asks a person to approve something. Next to each, write the override rate if you have it, and how much time review takes. If you don't have the rate, that's the first thing to log. Then pick the step with the lowest rate and the highest cost, and propose a small test of sampling instead of full review."
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
