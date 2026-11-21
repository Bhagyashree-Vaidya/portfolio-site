import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "is-this-the-problem-worth-solving",
  "title": "How do you know a problem is actually worth solving?",
  "metaTitle": "How to Know a Problem Is Worth Solving",
  "description": "A practical test for deciding whether a problem belongs on your roadmap, with a real example from Medicare plan discovery and a step to try this week.",
  "date": "2026-11-24",
  "category": "pm-problem",
  "tags": [
    "product discovery",
    "roadmapping",
    "customer research",
    "prioritization"
  ],
  "body": [
    "A problem is worth solving when you can point to the people who have it and show what it costs them, using evidence instead of a feeling. If you can't do that yet, you've got a hunch. Hunches are fine. They just don't belong on a roadmap.",
    "Before I write a roadmap I ask one question: **is this actually the problem worth solving?** It sounds obvious. In practice, the request in front of you is often a solution someone already picked. At Unity Senior Health, the work was Medicare plan discovery. Shoppers saw 12 plans and many left without choosing. The easy brief would have been \"make the comparison page better.\" We ran 50+ interviews first, and three questions kept coming up: are my doctors in network, are my drugs covered, and what will I pay monthly. That changed the problem. The page wasn't short on information. People couldn't get answers to their own questions out of 12 plans.",
    "Once you know the problem, check it from the other sides. Does solving it move a number the business cares about? For us that was plan-selection drop-off and cost per enrollment. Can the team build a fix with the data you actually have? Who has to say yes before it ships? In Medicare, compliance does, and I learned to bring them in earlier than I first did. A problem can be real for customers and still not be ready if nobody can own the fix.",
    "Here's a test for Monday. Take the top item on your roadmap and write one sentence: who has this problem, and how do we know. If the \"how do we know\" part is a stakeholder's opinion, talk to five customers before you plan the sprint. You might confirm the problem. You might find it's a symptom of a different one, which is the more useful thing to learn early."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
