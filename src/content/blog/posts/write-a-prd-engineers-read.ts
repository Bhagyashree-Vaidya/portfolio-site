import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "write-a-prd-engineers-read",
  "title": "How do you write a PRD engineers actually read?",
  "metaTitle": "How to Write a PRD Engineers Actually Read",
  "description": "A short PRD structure engineers will read: the problem, the constraints, acceptance criteria and open questions, plus a test to see if yours works.",
  "date": "2027-02-11",
  "category": "pm-problem",
  "tags": [
    "prd",
    "product specs",
    "engineering collaboration",
    "product craft"
  ],
  "body": [
    "Engineers read PRDs that are short, specific and honest about what's still unknown. Lead with the problem and who has it. Then list the constraints, the acceptance criteria, and the open questions. If a document takes twenty minutes to read and still leaves people unsure what \"done\" means, it'll get skimmed once and then ignored.",
    "Think about what an engineer needs from the document. They need to know why this matters, so they can make good small decisions without asking you. They need the hard limits: performance budgets, compliance rules, things that must not break. And they need a clear definition of done that a tester could check. What they usually don't need is three pages of market background or a screen-by-screen script of logic they'll design better themselves.",
    "A structure that tends to work: one paragraph on the problem, with evidence. A short list of constraints. Acceptance criteria written as plain statements a person could verify, such as \"if the address can't be verified, the user sees a prompt to enter a ZIP code.\" Then a section of open questions, each with an owner and a date. That last section matters more than people expect. It tells engineers where their input is wanted, and it stops the PRD from pretending to be more certain than it is. Keep a short change log at the top, too, so people can see what moved since they last looked.",
    "Here's a quick test. After you share your next PRD, ask one engineer to explain the problem and the definition of done back to you in two minutes, without the document open. If they can, the PRD did its job. If they can't, the gap they stumble on is the section to rewrite. It's a little awkward the first time. It saves a lot of rework later."
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
