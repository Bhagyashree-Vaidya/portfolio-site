import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "hancock-whitney-trustmark-product-lens",
  "title": "Hancock Whitney is buying Trustmark. What is the product side of a bank conversion?",
  "metaTitle": "Hancock Whitney and Trustmark: Bank Conversion",
  "description": "Hancock Whitney agreed to acquire Trustmark, with a systems conversion planned for late 2027. What a PM would focus on to keep customers through the switch.",
  "date": "2027-01-25",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "banking",
    "migration",
    "retention"
  ],
  "body": [
    "The public facts: Hancock Whitney announced on November 12, 2026 that it will acquire Trustmark in an all-stock deal valued at about $3.2 billion. Closing is expected late in the first quarter of 2027, with a systems conversion planned for late 2027. As of November 2026 the deal is pending. The rest is my opinion on the product side of a conversion like this.",
    "For customers, a bank merger becomes real on conversion weekend. That's when cards, online banking logins, bill pay, direct deposits and statements switch over. In my view, the product risk isn't the headline features. It's the long tail of things people set up once and forgot about: a recurring payment to a landlord, a linked account at another bank, a saved payee with an odd name. If any of those break, the customer finds out when a payment bounces, and the bank's brand takes the hit.",
    "If I were on the product team, I'd start by inventorying every customer-configured item that has to survive conversion, then measure how many customers depend on each one. The rarest setups often cause the most support calls because nobody tested them. My closest experience is from BrandingArc, where a step-level funnel showed that resource-naming and validation errors broke most failed first deployments. That taught me to look for the specific step where things fail, not the average. For a conversion, I'd want that step-level view for logins and payments in the first week.",
    "If you want to work on problems like this as a PM, learn how migrations are planned and tested in regulated industries. Read a bank's public conversion FAQ and list everything it asks customers to do. Each item is a place where a customer might give up. Thinking that way is useful for any product that moves people from one system to another."
  ],
  "sources": [
    {
      "label": "Banking Dive: Hancock Whitney to buy Trustmark",
      "url": "https://www.bankingdive.com/news/hancock-whitney-buy-trustmark-3b-deal-bank-acquisition/874522/"
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
