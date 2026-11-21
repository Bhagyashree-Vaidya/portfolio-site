import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "enterprise-implementations-without-services-trap",
  "title": "How do you run enterprise implementations without turning into a services company?",
  "metaTitle": "Enterprise Implementations Without a Services Trap",
  "description": "How a product team can support heavy enterprise setups without drifting into custom services work, by spotting repeat work and turning it into product.",
  "date": "2027-02-07",
  "category": "pm-problem",
  "tags": [
    "enterprise",
    "b2b saas",
    "implementation",
    "product strategy"
  ],
  "body": [
    "You avoid the services trap by treating every implementation as research. Do the custom work when you have to, but write down what you did and why. When the same task shows up for the third customer, it stops being a favor and becomes a product requirement. Without that habit, the custom work keeps growing until it quietly becomes the business.",
    "Enterprise customers usually need more setup than a self-serve customer: integrations, permissions, data migration, configuration that matches how they already work. Sales wants to say yes. Customer success wants to keep accounts happy. Engineering gets pulled into one-off scripts. Each request makes sense on its own. Together, they can eat the roadmap. The PM's job is to see the pattern across accounts, because nobody else is looking at all of them at once.",
    "At BrandingArc, our customers were provisioning AWS infrastructure through our platform, and the setup work was real. One thing that helped was measuring where first deployments failed instead of relying on what people remembered. A step-level funnel showed that resource-naming and validation errors broke most failed first deployments. That was repeat work hiding in plain sight: the same kind of mistake, fixed by hand again and again. Real-time validation turned it into product. The general lesson is that the repeat work is often small and boring, which is exactly why it gets left as a manual task.",
    "Here's a simple start. Keep a shared log of implementation tasks with three columns: what was done, which customer, and how long it took. Review it every month with whoever runs implementations. Anything that appears three times gets a product conversation. Some things should stay services, because they're truly unique or rare, and that's fine. The log just makes the choice visible, so it isn't made by default."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
