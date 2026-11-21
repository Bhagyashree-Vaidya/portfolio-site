import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "should-personalization-show-all",
  "title": "If you personalize results, should you still offer \"show all\"?",
  "metaTitle": "Personalized Results: Should You Offer Show All?",
  "description": "Why a show all option makes personalized ranking easier to trust, when it matters most, and how to tell if people use it as a safety net or a complaint.",
  "date": "2027-01-09",
  "category": "pm-problem",
  "tags": [
    "personalization",
    "ranking",
    "trust",
    "choice"
  ],
  "body": [
    "Yes, in most cases. A **show all** option costs little to build and tells people you aren't hiding anything. Personalization works better when people believe they could check your work, even if most of them never do.",
    "At Unity Senior Health, Medicare shoppers were seeing 12 plans and many left without choosing. We built personalized ranking that narrowed the 12 down to 4, with the criteria explained, and kept a show all plans option right there. In that setting it wasn't optional. People were choosing health coverage for a full year, and some had a specific plan in mind from a neighbor or a mailer. If we'd taken the others away, those people would have had good reason to think the site was steering them.",
    "The trade-off is that a show all link can quietly undo the work. If it's too prominent, people click it out of habit and land back in the original overload. If it's buried, it looks like a trick. The placement I'd start with is visible but secondary, near the top of the shortlist, labeled plainly with the full count. There's also a compliance and fairness angle in regulated categories: who decides what goes in the top four, and can you explain that choice to a regulator? Product, legal and the business need to agree on that answer before launch.",
    "On Monday, look at how often people use your show all option, then split those users by whether they went on to choose something. High usage plus low conversion suggests your shortlist isn't matching what people came for. Low usage plus decent conversion suggests it's working as a safety net. Either way, read a handful of session recordings before you change the design."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
