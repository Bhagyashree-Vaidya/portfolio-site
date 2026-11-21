import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "one-page-product-strategy",
  "title": "How do you write a one-page product strategy?",
  "metaTitle": "How to Write a One-Page Product Strategy",
  "description": "A simple format for a one-page product strategy: the problem, the bet, how you'll measure it and what you won't do, plus a test for clarity.",
  "date": "2027-02-25",
  "category": "pm-problem",
  "tags": [
    "product strategy",
    "roadmapping",
    "communication",
    "product craft"
  ],
  "body": [
    "A one-page strategy answers four things: what problem you're solving, what you're betting will solve it, how you'll know, and what you're deliberately not doing. If you can't fit it on a page, the strategy usually isn't clear yet. Length tends to hide indecision more than it adds detail.",
    "Start with the problem, stated from the customer's side, with the evidence behind it. Before I write a roadmap I ask whether this is actually the problem worth solving, and the strategy page is where that question should get a written answer. Then the bet: the one or two moves you believe will make the biggest difference, and why you believe it. Keep it specific. \"Improve onboarding\" is a theme. \"Get new users to their first valuable action within a day\" is a bet you can be wrong about, which is the point.",
    "Next, the measure. Pick one main metric the team can move and a guardrail that shouldn't get worse, so you don't win one number by damaging another. Then the non-goals. This section does more work than it looks like. Writing \"we will not build custom integrations this half\" saves weeks of debate later, because the answer is already on paper and agreed. It also gives other teams a fair warning. The trade-off with a short strategy is nuance. Some readers will want more, so link to the research and analysis instead of pasting it in. The page is for direction. The appendix is for detail.",
    "To test your draft, hand it to someone outside your team, like a sales lead or a designer from another group, and ask them three questions afterward. What are we trying to do? What are we not doing? How will we know it worked? If their answers match yours, you're done. If they don't, rewrite the section they got wrong first. That's usually where your own thinking is fuzziest."
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
