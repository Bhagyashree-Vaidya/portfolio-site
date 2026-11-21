import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "ab-testing-with-low-traffic",
  "title": "How do you run A/B tests when you don't have much traffic?",
  "metaTitle": "How to Run A/B Tests With Low Traffic",
  "description": "Low-traffic A/B tests can still be useful if you test bigger changes, run them longer, read results as probabilities, and pick metrics closer to the change.",
  "date": "2027-01-27",
  "category": "pm-problem",
  "tags": [
    "experimentation",
    "ab testing",
    "b2b",
    "statistics"
  ],
  "body": [
    "Test bigger changes, run them longer, and measure something close to the change. With low traffic you can't detect a 2% lift in a reasonable time, so stop trying. Test changes you'd expect to move the number a lot, and read the results as a probability, not a pass or fail.",
    "This is the normal situation in B2B. At VWO, where I owned an AI agent that recommends, configures and launches A/B tests, customers were enterprise accounts, and plenty of real products have far fewer users than a consumer app. The usual advice to just wait for significance can mean waiting months. Meanwhile the product changes underneath the test, and the result tells you about a version that no longer exists.",
    "A few things help. Pick a primary metric that sits close to the change, like completion of the step you redesigned, rather than revenue three steps later. Close metrics have more signal per user. Bayesian reads are useful here because they answer a question PMs actually have: how likely is it that B beats A, and how much do I lose if I'm wrong? A 90% chance with a small expected loss can be a fine reason to ship a low-risk change. For high-risk changes, raise the bar. Also consider whether you need a test at all. Sometimes five customer interviews and a careful rollout teach you more than a test that can't reach a conclusion.",
    "On Monday, before your next test, estimate how many users will see it per week and what lift you'd need to detect. Ask an analyst or use a sample size calculator. If the answer is longer than a quarter, either make the change bolder, move the metric closer, or decide in advance what probability and expected loss you'll accept. Write that down before you look at any data."
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
