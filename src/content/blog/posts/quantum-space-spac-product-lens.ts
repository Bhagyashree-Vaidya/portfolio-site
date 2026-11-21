import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "quantum-space-spac-product-lens",
  "title": "Quantum Space is going public. What does product management look like for spacecraft?",
  "metaTitle": "Quantum Space Goes Public: Product for Spacecraft",
  "description": "The facts of Quantum Space's SPAC merger, what product management looks like for maneuverable spacecraft, and how a PM could prepare for it.",
  "date": "2027-02-18",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "space",
    "hardware",
    "spac"
  ],
  "body": [
    "The facts: Quantum Space, which builds maneuverable spacecraft, agreed to merge with Inflection Point Acquisition Corp VI at an enterprise value of about $1.2 billion. As of November 2026, the deal was expected to close in late November 2026, after which the company would list on the NYSE. I'm not making any claim about how the listing has gone since. The rest of this post is my view of the product work.",
    "Product management for spacecraft has the same core as any other product: who is the customer, what problem do they need solved, and what does success look like for them. What changes is the cost of being wrong. You can't patch hardware in orbit the way you patch an app. So far more of the work happens before launch, in requirements, testing and the agreements about what the spacecraft must do. A maneuverable spacecraft also adds a lot of operational decisions, like when to move, how much fuel to spend, and who approves a move.",
    "That last part is where I'd look first. It's a human-in-the-loop question. At VWO, we paused a fully automatic launch for an AI agent after evals showed some tests targeted the wrong page, and human approval shipped first. The stakes in orbit are different, but the reasoning carries over: decide which actions can run automatically, which need approval, and what evidence would let you loosen that later. Going public adds another layer, since milestones become things investors watch, and a PM will feel pressure to make dates look certain when they aren't.",
    "If you want to work on problems like this as a PM, get comfortable with long feedback loops and with writing requirements that can be tested before anything ships. You don't need an aerospace degree to start. Pick a hardware product you know and write down which failures can be fixed after launch and which can't. That list shapes almost every decision."
  ],
  "sources": [
    {
      "label": "PR Newswire: Quantum Space to list on NYSE upon closing of business combination",
      "url": "https://www.prnewswire.com/news-releases/quantum-space-inc-to-list-on-nyse-upon-closing-of-business-combination-with-inflection-point-acquisition-corp-vi-302946123.html"
    }
  ],
  "related": [
    {
      "href": "/insights/human-in-the-loop-ai-design",
      "label": "Human-in-the-loop AI design"
    }
  ]
};

export default post;
