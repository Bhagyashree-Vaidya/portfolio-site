import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "customer-interviews-that-change-the-roadmap",
  "title": "How do you run customer interviews that actually change the roadmap?",
  "metaTitle": "Customer Interviews That Change the Roadmap",
  "description": "How to run customer interviews that shift what you build: ask about past behavior, listen for repeated questions and turn patterns into product decisions.",
  "date": "2027-02-26",
  "category": "pm-problem",
  "tags": [
    "customer research",
    "user interviews",
    "product discovery",
    "roadmapping"
  ],
  "body": [
    "Interviews change the roadmap when you ask about what people actually did, not what they'd like, and when you look for what repeats across many conversations. One strong quote is an anecdote. The same question coming up again and again from different people is a pattern, and patterns are what earn a place on the roadmap.",
    "At Unity Senior Health, for Medicare plan discovery, we ran 50+ interviews. Three questions dominated: are my doctors in network, are my drugs covered, and what will I pay monthly. That's a very short list for a very complicated product, and it gave us a clear direction. We built personalized ranking around those questions, and then validated it with 4 A/B tests instead of trusting the interviews alone. Interviews told us what mattered. The tests told us whether our fix actually helped.",
    "A few habits make interviews more useful. Ask people to walk you through the last time they did the task. \"Tell me about the last time you picked a plan\" gets better answers than \"what would you want in a plan tool?\" Listen for the questions people ask themselves out loud, since those often turn into the features that matter. Don't pitch your idea in the interview. Once people know what you hope to hear, they tend to be kind and agree. Afterward, tag every note by theme, and count. Bring engineering and design to a few sessions too. A pattern lands harder with the team when they heard it themselves than when it shows up in a slide.",
    "For your next round, set a goal before you start: what decision will these interviews inform? Write it at the top of your guide. After every five interviews, review the tags with your team and ask whether anything has repeated enough to change a plan. If nothing has after twenty, that's a finding too. Your question may be the wrong one."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
