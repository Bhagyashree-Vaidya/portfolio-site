import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "find-the-step-that-breaks-onboarding",
  "title": "How do you find the one step that breaks onboarding?",
  "metaTitle": "How to Find the Step That Breaks Onboarding",
  "description": "How to instrument onboarding step by step, find where new users actually fail, and pick a fix, with an example from a self-service AWS provisioning platform.",
  "date": "2026-12-02",
  "category": "pm-problem",
  "tags": [
    "onboarding",
    "activation",
    "funnels",
    "analytics"
  ],
  "body": [
    "Instrument every step of onboarding separately, then look for where people stop. In my experience it's often one or two steps doing most of the damage. An overall activation number tells you there's a problem. Step-level data tells you where it is.",
    "At BrandingArc we built a self-service AWS provisioning platform. When we looked at a step-level funnel, resource-naming and validation errors were behind most failed first deployments. That's not where I'd have guessed. Naming sounds like the easy part, but it's where people hit errors they didn't expect. I specified **real-time validation**, so people could see a problem while they were still filling in the field, instead of after they'd submitted.",
    "How to think it through. Product defines the steps and what counts as done for each one. Engineering adds the events, and someone has to check they fire in the right order, because a funnel built on broken events will point you at the wrong step with total confidence. Then there's the fix. The cheaper option is often a clearer error message after the fact. The better option catches the mistake before it happens. Which one you pick depends on how many people hit that step, how bad the failure is for them, and how much engineering time you can get. Write down the definition of activation before you start too. A loose definition lets every team find a number that says they're winning.",
    "On Monday, list your onboarding steps and check that each one has its own event. If two steps share one, split them. Then pull a week of data and find the biggest single drop. Before you design anything, watch five people go through that step, live or in recordings. The funnel shows where people stop. Watching them shows you why."
  ],
  "related": [
    {
      "href": "/case-studies/self-service-cloud-provisioning",
      "label": "Case study: self-service cloud provisioning"
    }
  ]
};

export default post;
