import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "schneider-ptc-product-lens",
  "title": "Schneider Electric is buying PTC. Can design data and operations data finally talk?",
  "metaTitle": "Schneider Electric and PTC: Linking Design and Ops",
  "description": "What Schneider Electric's planned PTC deal means for linking design and operations data, where I'd focus first as a PM, and how to prepare for this work.",
  "date": "2027-01-01",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "industrial software",
    "data integration",
    "plm"
  ],
  "body": [
    "They can, but the hard part is agreeing on what a single thing is called in both worlds. As of November 2026, Schneider Electric plans to acquire PTC and has said it wants to link PTC's design data with AVEVA's operations data. Making that link useful is a product problem before it's a data problem.",
    "The facts: Schneider Electric announced in October 2026 that it will acquire PTC, the CAD and PLM software company, for $22.6 billion in equity value. It's expected to close by the third quarter of 2027. The stated aim is linking PTC design data with AVEVA operations data. Beyond that, the product plans aren't public, and the rest is my opinion.",
    "If I were a PM on this, I'd start with one asset, like a single pump, and trace it through both systems. In design it has a part number, versions, and specs. In operations it has a tag, sensor readings, and maintenance history. Someone has to decide how those records match, and what happens when the design changes after the pump is installed. I'd expect the real world to be messier than the plan. At BrandingArc, my linear workflow spec for AWS provisioning didn't survive real edge cases, and engineering redesigned the state logic. Industrial assets have far more edge cases than cloud resources: replacements, field modifications, parts from other vendors. I'd want engineers and plant operators in the room early to list them.",
    "If you want to work on problems like this as a PM, learn how one physical thing gets described differently by the people who design it and the people who run it. Talk to someone in manufacturing or facilities if you can. Ask what they call a part and what the designers call it. The gap between those two answers is the product."
  ],
  "sources": [
    {
      "label": "Design News: Schneider Electric nabs PTC for $22.6B",
      "url": "https://www.designnews.com/automation/schneider-electric-nabs-ptc-for-22-6b-to-drive-industrial-ai"
    }
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
