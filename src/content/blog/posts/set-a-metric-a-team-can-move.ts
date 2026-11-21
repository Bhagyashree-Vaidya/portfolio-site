import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "set-a-metric-a-team-can-move",
  "title": "How do you set a metric a team can actually move?",
  "metaTitle": "How to Set a Metric a Team Can Actually Move",
  "description": "How to pick a product metric your team can actually influence: make it leading, owned and honestly defined, with a real activation definition as an example.",
  "date": "2027-03-01",
  "category": "pm-problem",
  "tags": [
    "metrics",
    "activation",
    "okrs",
    "product analytics"
  ],
  "body": [
    "A good team metric is close to the work, owned by the team and defined precisely enough that nobody can argue about it later. Revenue matters, but most teams can't move it directly in a quarter. Pick a leading metric that predicts the outcome you care about, and write down exactly how it's counted.",
    "At Stallion Express, we defined activation as a merchant creating their first label within 7 days. That definition did a lot of work. It was specific, it described something merchants actually wanted, and it was early enough that the team could influence it. Location-based matching to the nearest drop-off hub lifted first-shipment activation 22%. Because the definition was clear, everyone knew what that number meant, and nobody could quietly redefine it to look better.",
    "When you set a metric, check three things. Is it leading? It should move within weeks of a change, so the team can learn from it. Is it owned? The team should be able to influence most of what drives it. If marketing controls who signs up and your team controls onboarding, a metric about onboarding completion fits better than one about sign-ups. Is it honest? Define the window, the event and what counts, and pair it with a guardrail so you can't win by cutting corners. A team that pushes activation up by making the first step trivially easy hasn't helped anyone. It's also worth checking that the metric connects to the business. Compare people who hit it with people who didn't and see whether they stick around longer.",
    "This week, write your team's main metric as one precise sentence: the event, the time window and the population. Share it with engineering and ask whether the data supports that exact definition today. If it doesn't, fixing the tracking comes before any target. A metric nobody can measure reliably won't guide anyone."
  ],
  "related": [
    {
      "href": "/case-studies/checkout-shipping-discovery",
      "label": "Case study: checkout shipping discovery"
    },
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
