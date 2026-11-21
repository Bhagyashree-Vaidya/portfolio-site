import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "archimed-biomark-product-lens",
  "title": "ARCHIMED carved out Biomark Scientific. What does product work look like in a carve-out?",
  "metaTitle": "ARCHIMED and Biomark: Product Work in a Carve-Out",
  "description": "The facts of ARCHIMED's carve-out of Standard BioTools' microfluidics business, where product teams focus first in a carve-out, and how PMs can prepare.",
  "date": "2027-02-21",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "carve-out",
    "life sciences",
    "integration"
  ],
  "body": [
    "The facts: around November 3, 2026, ARCHIMED completed its acquisition of Standard BioTools' microfluidics business. The business now operates as Biomark Scientific and makes genomic testing systems. It's a carve-out, meaning a piece of a larger company became its own company. That's all I'm drawing from the reporting. The rest is my opinion about what product work in a carve-out tends to involve.",
    "A carve-out is close to the opposite of an integration. Instead of merging two systems, you're pulling one apart. Products that used to rely on the parent company's shared services, like ordering, billing, support tools, data systems or even the website, may need new homes. Customers mostly don't care about any of that. They care that their instruments keep working, their orders still go through and someone answers when they call. So the first product job is often invisible: keeping the experience steady while the plumbing underneath gets replaced.",
    "If I were a PM there, I'd map every place a customer touches something that used to belong to the parent. Each one is a possible break. At Stallion Express I learned that every physical hand-off needs a tracking event; a multi-stop relay we ran caused tracking gaps and customer complaints. A carve-out has the same risk in software form. Any time an order or a support ticket moves between an old system and a new one, it can get lost. I'd want a clear owner and a clear status for each of those hand-offs before any migration starts.",
    "If you want to work on problems like this as a PM, practice drawing dependency maps: what a product relies on that its team doesn't own. Try it on a product you know well. Then ask which dependency, if it vanished tomorrow, customers would notice first. Carve-out work rewards people who are patient with unglamorous migration work and careful about what customers see during it."
  ],
  "sources": [
    {
      "label": "Sheppard Mullin: ARCHIMED acquisition of Standard BioTools' microfluidics business",
      "url": "https://www.sheppard.com/news-and-events/press-releases/sheppard-advises-archimed-in-acquisition-of-standard-biotools-microfluidics-business"
    }
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
