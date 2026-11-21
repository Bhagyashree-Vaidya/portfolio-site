import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "compliance-in-design-reviews",
  "title": "Why does compliance belong in design reviews, not after them?",
  "metaTitle": "Why Compliance Belongs in Design Reviews",
  "description": "Why bringing compliance into design reviews early saves rework in regulated products, what to ask them, and an example of a late review costing about 5 days.",
  "date": "2027-02-17",
  "category": "pm-problem",
  "tags": [
    "compliance",
    "regulated products",
    "design process",
    "healthcare"
  ],
  "body": [
    "Bring compliance in while designs are still sketches. If they only see the work at the end, every concern they raise turns into rework, and the team starts to see them as a blocker. Early on, the same concerns are just design constraints, and they're much cheaper to handle.",
    "At Unity Senior Health, in Medicare plan discovery, I assumed disclaimer placement could match on mobile and desktop. It couldn't. The required disclosures didn't fit the mobile layout the way they did on desktop, and fixing that cost about 5 days. After that, I brought compliance into design reviews earlier. It's a small change in process, and it moved those conversations to the point where a fix was a redraw instead of a rebuild.",
    "Think about it from the compliance team's side. They're accountable if something goes wrong, and they often get handed finished work with a deadline attached. That's a hard spot. Inviting them early gives them context and time. Ask them specific questions, too: which statements need a disclaimer, where it must appear, whether it can be behind a tap or must be visible, and which words are off limits. Write their answers into the design system so nobody has to ask again for the next feature. The trade-off is meeting time. Not every design review needs them, so agree on which kinds of change do: anything about pricing, eligibility, claims or required disclosures, for example.",
    "A good first step: ask your compliance partner for the three issues they flag most often on late reviews. Turn each into a checklist item for designers. Then invite them to the next review where one of those topics comes up. If the review finds nothing, that's fine. You've still saved them from reading the whole thing cold a week before launch."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
