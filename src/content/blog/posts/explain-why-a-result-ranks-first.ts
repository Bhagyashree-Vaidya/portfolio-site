import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "explain-why-a-result-ranks-first",
  "title": "Should you explain why a result is ranked first?",
  "metaTitle": "Should You Explain Why a Result Ranks First?",
  "description": "When ranking explanations build trust, when they add noise, and how to write one that's honest about what your system knows, using a Medicare example.",
  "date": "2027-01-11",
  "category": "pm-problem",
  "tags": [
    "ranking",
    "explainability",
    "trust",
    "ux"
  ],
  "body": [
    "When the stakes are high, yes. If someone is choosing insurance, a loan or a contractor, a one-line reason for why a result sits at the top makes the whole list easier to trust. For a playlist or a product grid, explanations mostly add clutter. Match the effort to the cost of a bad choice.",
    "At Unity Senior Health we ranked Medicare plans for each shopper and showed the criteria behind the ranking. The interviews had told us what people cared about: whether their doctors were in network, whether their drugs were covered, and what they'd pay monthly. So the explanations used those same terms. Saying a plan covers your listed drugs and fits your monthly budget is something a shopper can verify. A vague label like recommended for you gives them nothing to check, and in a regulated category it can read as steering.",
    "The hard part is honesty about uncertainty. If your data doesn't know whether a doctor is in network, the explanation has to say so. One rule we held to was that unknown network status must never look like out of network. That's a small UI decision with real consequences, because people make health decisions on it. Engineering has to expose the confidence of each signal, and product has to decide how each state is worded. Compliance should see the wording before launch, not after.",
    "On Monday, write down the top three reasons your system ranks things the way it does. If you can't state them in words your customer uses, that's your first problem, and no explanation UI will cover it. If you can, test a one-line explanation on your highest-stakes surface and watch whether people go deeper into the top results or still scroll past them."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    },
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for PMs"
    }
  ]
};

export default post;
