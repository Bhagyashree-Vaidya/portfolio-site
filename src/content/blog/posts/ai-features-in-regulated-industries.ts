import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "ai-features-in-regulated-industries",
  "title": "How do you ship AI features in a regulated industry?",
  "metaTitle": "How to Ship AI Features in a Regulated Industry",
  "description": "How to ship AI features in a regulated industry: turn the rules into test cases early, bring compliance into design reviews, and keep humans on risky steps.",
  "date": "2026-12-25",
  "category": "pm-problem",
  "tags": [
    "regulated industries",
    "compliance",
    "ai product management",
    "healthcare"
  ],
  "body": [
    "Turn the rules into test cases before you build, and bring compliance in while designs are still cheap to change. In a regulated industry, the rules are part of the spec. Treating them as a sign-off at the end is how teams lose weeks.",
    "I learned a version of this at Unity Senior Health, working on Medicare plan discovery. I assumed disclaimer placement could match on mobile and desktop. It couldn't, and fixing it cost about 5 days. The fix itself was small. The lesson was about timing. After that, I brought compliance into design reviews earlier, so questions like that got asked when a change was a sketch, not a build.",
    "For AI features specifically, a few things help. Write each relevant rule as a concrete test: given this input, the product must show this, or must never say that. Those tests can run against model output on every change, which beats a reviewer reading samples once before launch. Be clear about which decisions the model makes and which ones a rule or a person makes, since regulators usually care about who decided and why. Keep logs that let you reconstruct a decision later. And keep a person on the steps where a wrong answer could hurt someone, at least until you have data showing the system is reliable there. That's slower, and it's the cost of working in these industries. Ownership should be explicit: compliance owns what the rules say, product owns how they show up, and engineering owns the tests.",
    "On Monday, ask your compliance partner for the three rules they worry about most for your feature. Turn each into a pass or fail test with a real example. Run them against your current build. Whatever fails is your first backlog item, and you've also given compliance something concrete to review."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    },
    {
      "href": "/insights/human-in-the-loop-ai-design",
      "label": "Human-in-the-loop AI design"
    }
  ]
};

export default post;
