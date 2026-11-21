import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "designing-for-older-adults",
  "title": "How do you design a product flow for older adults?",
  "metaTitle": "How to Design a Product Flow for Older Adults",
  "description": "Practical ways to design for older adults: fewer choices up front, plain words, clear next steps and testing with real users, from Medicare plan work.",
  "date": "2027-02-14",
  "category": "pm-problem",
  "tags": [
    "accessibility",
    "ux",
    "healthcare",
    "older adults"
  ],
  "body": [
    "Design for older adults by cutting what they have to hold in their heads. Show fewer choices at once, use plain words, make the next step obvious, and test with real people in that age group instead of guessing. None of this is special treatment. It's good design that a lot of products skip because their team doesn't look like their users.",
    "At Unity Senior Health I worked on Medicare plan discovery. Shoppers saw 12 plans and many left without choosing. After 50+ interviews, three questions kept coming up: are my doctors in network, are my drugs covered, and what will I pay monthly. We built personalized ranking that cut 12 plans down to 4, with the criteria explained, and kept a \"show all plans\" option for anyone who wanted the full list. Plan-selection drop-off went down 32%.",
    "A few things carry over to most flows. Answer the questions people actually have, in their words, before anything else. Explain why you're showing what you're showing, because an unexplained recommendation can feel like a sales pitch. Always leave a way to see everything, so nobody feels boxed in. Be careful with ambiguous states: in our case, an \"unknown\" network status must never look like \"out of network,\" since people make real decisions from that label. And remember that older adults often shop with a family member or on the phone with an agent, so the screen should make sense to two people looking at it together.",
    "The best next step is to watch people use what you've built. Recruit five people from your actual audience, give them a real task, and stay quiet. Note every place they pause, reread, or ask what a word means. Fix those before you work on anything visual. You'll probably find the fixes are mostly about wording, and that's normal."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
