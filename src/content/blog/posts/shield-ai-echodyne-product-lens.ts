import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "shield-ai-echodyne-product-lens",
  "title": "Shield AI is buying Echodyne. How do you sell a component inside and outside a platform?",
  "metaTitle": "Shield AI and Echodyne: Selling Inside and Outside",
  "description": "The facts of Shield AI's planned Echodyne deal, the product tension of a component sold both standalone and inside a platform, and how PMs can prepare for it.",
  "date": "2027-02-12",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "platform strategy",
    "hardware",
    "defense tech"
  ],
  "body": [
    "The facts: Shield AI agreed to acquire Echodyne, a radar maker, in a deal announced November 5, 2026, worth up to $5.3 billion. As of November 2026, it's pending and expected to close in early 2027. The radar will still be sold standalone. That last point is the interesting one for product people, and what follows is my opinion on it, not anything the companies have said.",
    "Selling a component both inside your own platform and to everyone else creates a familiar tension. Platform teams want the best features first, tightly integrated. Standalone customers, some of whom may compete with the parent, want to know they're not getting a second-class version. If they start to suspect that, they'll look elsewhere. So the product team has to decide, and say clearly, what stays equal for everyone and what's genuinely better when you use the whole platform.",
    "If I were a PM there, I'd write that line down early and make it public inside the company. Which capabilities ship to every customer on the same day? Which integrations are platform-only, and why? Who decides when a request from the platform team conflicts with a request from a standalone customer? I've seen a smaller version of this in marketplaces. At Stallion Express we ran multi-carrier rate comparison with a best-value default, and the default only works if people trust it isn't quietly tilted. Neutrality has to be designed and kept, or it slowly erodes.",
    "If you want to work on problems like this as a PM, practice thinking in two customer groups at once. Take any product that's sold both on its own and as part of a bundle, and write down what each group would worry about. Then draft the one-paragraph promise you'd make to the standalone customers. Being able to hold both sides without picking one by default is most of the job."
  ],
  "sources": [
    {
      "label": "Washington Technology: Shield AI acquires radar maker Echodyne",
      "url": "https://www.washingtontechnology.com/companies/2026/11/shield-ai-acquires-radar-maker-echodyne-53-billion-deal/417086/"
    }
  ],
  "related": [
    {
      "href": "/expertise/ecommerce-omnichannel-product-management",
      "label": "Ecommerce and omnichannel product management"
    }
  ]
};

export default post;
