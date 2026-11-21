import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "combine-an-llm-with-a-rules-engine",
  "title": "When should you pair an LLM with a rules engine?",
  "metaTitle": "When to Pair an LLM With a Rules Engine",
  "description": "When to pair an LLM with a rules engine: let the model read messy input, let rules make the decisions, and send the edge cases to people who can check them.",
  "date": "2026-12-24",
  "category": "pm-problem",
  "tags": [
    "llm",
    "rules engine",
    "automation",
    "ai product management"
  ],
  "body": [
    "Pair them when the input is messy but the decision has to be exact. The LLM reads documents and pulls out the facts. The rules engine decides what those facts mean. People check the edge cases. Each part does the thing it's good at, and you can explain every decision afterward.",
    "At Unity Senior Health, we used this setup for policy issuing in Medicare. LLM extraction pulled the needed details from documents, a rules engine applied the policy logic, and human review handled the cases the system flagged. Issuing time dropped 35%, at 99.2% accuracy. The split mattered as much as the model. Insurance rules change and get audited, so we wanted them written down where compliance could read them, not buried in a prompt.",
    "Here's how I'd think about the trade-off in general. An LLM alone is flexible but hard to audit. It can apply a rule correctly most of the time and still get it wrong in a way nobody can trace. Rules alone are precise but can't read a scanned form or a free-text note. Putting the model in front of the rules gives you both, with a clean line between them: the model's output is a set of fields, and those fields can be checked. That line also tells you where to send work to people. If the model isn't confident about a field, or a rule hits a case it wasn't written for, route it to a reviewer. Ownership gets clearer too. Engineering owns extraction quality, while compliance and product own the rules.",
    "To try this, pick one decision your team makes from documents. Write the rules for it in plain language first, before any code. If you can't, the problem is the policy, not the model. If you can, test whether an LLM can fill in the inputs those rules need, and measure accuracy per field."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    },
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
