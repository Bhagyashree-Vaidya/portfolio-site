import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "choose-a-default-sort",
  "title": "How do you choose a default sort order?",
  "metaTitle": "How to Choose a Default Sort Order",
  "description": "How to choose a default sort order: start from what most people want, explain what the default means, and make it easy for everyone else to change it.",
  "date": "2027-01-02",
  "category": "pm-problem",
  "tags": [
    "ranking",
    "defaults",
    "ux",
    "ecommerce"
  ],
  "body": [
    "Pick the order most people would choose for themselves, say plainly what it's based on, and make it easy to change. A default is a decision you're making on behalf of everyone who doesn't touch it, and that's most people. So it deserves as much care as any feature on the page.",
    "At Stallion Express, a cross-border shipping platform, we built multi-carrier rate comparison with a best-value default ranking. In an A/B test, it cut checkout abandonment 14%. Most merchants, 58%, picked the top-ranked option. I'd read that number carefully, because position alone pulls people toward the top. It shows the default had a lot of influence, which is exactly why we had to be clear about what best value meant.",
    "Here's how I'd work through it. Start with the customer's goal, not your inventory. If most people want the cheapest acceptable option, sort by that. If they want the fastest, sort by that. When the goal is a mix, like cost and speed together, define the blend and write it down. Then check whose interest the default serves. It's tempting to rank by margin or by which partner pays more. That might work for a while, but if customers sense it, they stop trusting the top result, and the whole list gets harder to use. Explain the default in a short label, so people know what they're looking at. And give the people who care a quick way to re-sort.",
    "To test your current default, check two numbers: how often people pick the top option, and how often they re-sort. Then interview five people who re-sorted and ask why. If they all say the same thing, your default may be missing a factor most people care about. If the reasons vary, the default is probably fine, and the sort control is doing its job."
  ],
  "related": [
    {
      "href": "/case-studies/checkout-shipping-discovery",
      "label": "Case study: checkout shipping discovery"
    }
  ]
};

export default post;
