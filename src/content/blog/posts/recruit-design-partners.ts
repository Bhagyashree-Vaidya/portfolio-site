import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "recruit-design-partners",
  "title": "How do you recruit design partners for a new product?",
  "metaTitle": "How to Recruit Design Partners for a New Product",
  "description": "Good design partners have the pain, give you access, and accept that the product is unfinished. How to find them, what to offer, and what to say up front.",
  "date": "2027-02-02",
  "category": "pm-problem",
  "tags": [
    "design partners",
    "b2b",
    "customer research",
    "mvp"
  ],
  "body": [
    "Look for people with the pain right now, who can give you real access to their work, and who are fine with an unfinished product. All three matter. Someone with the pain but no time won't give you feedback. Someone with time but no pain will be polite and tell you nothing useful.",
    "At BrandingArc I recruited 5 design partners for a self-service AWS provisioning platform, and the product grew from those 5 to about 100 customers. The pain was easy to describe: provisioning took 6 to 8 hours, and we eventually got it to 15 to 20 minutes. A partner who lives with a delay like that has a reason to try early versions and say where they break. The step-level data from their first deployments is how we found that naming and validation errors caused most failures.",
    "Be honest about what's missing. Design partners will ask for everything, and the MVP can't do everything. We cut from about a dozen requested service types to 4 that covered about 80% of demand, and some enterprise prospects walked because of it. That's a real cost, and it's better to say it up front than to let partners assume their feature is coming. What you can offer instead is influence: direct access to the team, a say in the roadmap, early pricing. Write down what you'll ask of them too, like a monthly call and access to usage data, so nobody feels misled later.",
    "On Monday, write a one-paragraph description of the pain your product solves, in the customer's words. Send it to ten people you think have that pain and ask for 20 minutes. The ones who reply quickly with a story of their own are your likely partners. The ones who say it sounds interesting probably aren't, and that's useful to learn early."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
