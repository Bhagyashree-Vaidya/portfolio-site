import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "talk-about-team-wins",
  "title": "How do you talk about team wins without overclaiming?",
  "metaTitle": "How to Talk About Team Wins Without Overclaiming",
  "description": "How PMs can describe results honestly in resumes, reviews and interviews: name your part, credit others and be clear about what the data can and can't prove.",
  "date": "2027-02-28",
  "category": "pm-problem",
  "tags": [
    "career",
    "communication",
    "interviews",
    "product management"
  ],
  "body": [
    "Say what the team achieved, then say exactly what your part was. Be clear about what the data proves and what it doesn't. That's it. Overclaiming usually isn't lying. It's leaving out the other people and the other causes, and experienced interviewers tend to notice when a story has only one person in it.",
    "Here's how I describe Wingz, the LLM agent I owned at VWO. Critical errors dropped from about 9% to under 3.5% in two months. My part was the product side: a failure taxonomy that ranked categories by frequency times severity, validation before execution, and human review for high-risk actions. Engineering built it. The first version of my taxonomy also missed multi-step context loss, and an engineer caught it. And other changes shipped in the same window, so it wasn't a controlled test. All of that is true, and it makes the story more believable, not less.",
    "A simple structure helps. State the outcome as a team result, with the number. Name your specific contribution as a decision or an artifact: \"I defined,\" \"I specified,\" \"I made the call to.\" Name who built it. Then add the honest caveat about causation if there is one. If you ran an A/B test, say so, because that's stronger evidence. If you didn't, say the result happened alongside other changes. Interviewers often care more about the reasoning than the number, so be ready to explain what you'd do differently. The trade-off is that caveats feel like they shrink your impact. In practice, they usually make the rest of what you say easier to trust.",
    "Try this with your resume. Pick your top three bullets and ask, for each one: could a teammate read this and agree with every word? If any would wince, rewrite it until they wouldn't. Then practice saying the caveat out loud. It gets much easier after the first few times."
  ],
  "related": [
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
