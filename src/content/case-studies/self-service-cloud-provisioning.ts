import type { Doc } from "../types";

const doc: Doc = {
  kind: "case-study",
  slug: "self-service-cloud-provisioning",
  title: "Cutting AWS provisioning from 6–8 hours to 15–20 minutes with a self-service platform at BrandingArc",
  metaTitle: "Cutting AWS provisioning time by 95%",
  description:
    "How a 0-to-1 self-service AWS platform grew from 5 design partners to about 100 customers and cut 3-tier provisioning from 6–8 hours to 15–20 minutes.",
  answer:
    "Enterprise cloud teams were spending 6 to 8 hours provisioning a standard 3-tier AWS architecture. I took a self-service provisioning platform from 0 to 1 in 12 months: recruited 5 design partners, scoped the MVP to 4 service types covering about 80% of demand, and specified real-time validation for the naming errors that broke most first deployments. Provisioning fell to 15–20 minutes and adoption grew to about 100 customers.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["B2B SaaS", "Cloud infrastructure", "0-to-1", "Developer experience", "Platform"],
  facts: [
    { label: "Company", value: "BrandingArc (USA)" },
    { label: "Role", value: "Product Manager (May 2018 – Apr 2020); Associate Product Manager before that" },
    { label: "Dates", value: "Aug 2016 – Apr 2020" },
    {
      label: "Scope",
      value: "Self-service AWS infrastructure platform (PaaS) for enterprise cloud teams: guided provisioning for a 3-tier architecture (VPC, EC2, RDS, IAM)",
    },
    { label: "Team", value: "About 8 engineers and 2 designers, growing to about 12 engineers by GA (no reporting line)" },
  ],
  sections: [
    {
      id: "context",
      heading: "Business context",
      blocks: [
        {
          type: "p",
          text: "BrandingArc built a self-service AWS infrastructure platform, a PaaS for enterprise cloud teams. Its core job was guided provisioning for a standard 3-tier architecture: networking (VPC), compute (EC2), a database (RDS) and access control (IAM). We took it from 0 to 1 in 12 months.",
        },
      ],
    },
    {
      id: "problem",
      heading: "Customer problem",
      blocks: [
        {
          type: "p",
          text: "Setting up that 3-tier pattern took cloud teams 6 to 8 hours. The pattern spans several services that depend on each other, and when one piece is misconfigured the deployment fails and someone has to work out why.",
        },
      ],
    },
    {
      id: "role",
      heading: "My role and what I owned",
      blocks: [
        {
          type: "p",
          text: "I was the Product Manager for the platform, working with a team of about 8 engineers and 2 designers that grew to about 12 engineers by general availability. None of them reported to me.",
        },
        {
          type: "list",
          items: [
            "I recruited the first **5 design partners**.",
            "I ran customer interviews, analyzed usage data and did the competitive analysis.",
            "I set the MVP scope and wrote the product specs, including the pre-deployment validation.",
          ],
        },
      ],
    },
    {
      id: "discovery",
      heading: "Discovery and research",
      blocks: [
        {
          type: "p",
          text: "Customer interviews, usage data and competitive analysis shaped what to build first. The most useful single tool was a step-level funnel dashboard for the provisioning flow. It showed where first deployments failed, and the answer was specific: **resource-naming and validation errors caused most failed first deployments**.",
        },
        {
          type: "p",
          text: "That changed the priority. The fix was not a faster deployment engine; it was catching bad input before the deployment started.",
        },
      ],
    },
    {
      id: "decisions",
      heading: "Decisions and trade-offs",
      blocks: [
        {
          type: "p",
          text: "**Scope the MVP to what most customers needed.** Customers had asked for about a dozen AWS service types. I scoped the MVP to 4 service types that covered about 80% of demand. The trade-off was real: some enterprise prospects who needed services outside that set were lost. I accepted that in exchange for a focused MVP that served most customers well.",
        },
        {
          type: "p",
          text: "**Validate before deploying.** Based on the funnel finding, I specified real-time pre-deployment validation that checked resource names and inputs in real time and offered suggestions, instead of letting errors surface as a failed deployment.",
        },
      ],
    },
    {
      id: "execution",
      heading: "How we built and shipped it",
      blocks: [
        {
          type: "p",
          text: "Engineering built the platform from the specs; I owned the scope and the product requirements, including the validation behavior described above.",
        },
        {
          type: "p",
          text: "Growth after launch came through AWS Marketplace and word of mouth.",
        },
      ],
    },
    {
      id: "outcomes",
      heading: "Outcomes",
      blocks: [
        {
          type: "metrics",
          items: [
            { value: "6–8 h → 15–20 min", label: "Provisioning time for the 3-tier pattern", note: "A reduction of more than 95%" },
            { value: "20x", label: "Adoption growth", note: "From 5 design partners to about 100 customers" },
            { value: "4 types / ~80%", label: "MVP service types and share of demand covered" },
            { value: "3.6 → 4.0", label: "CSAT (5-point scale)", note: "Shared with other changes" },
          ],
        },
        {
          type: "callout",
          title: "How to read these numbers",
          text: "A customer counts as \"active\" if they had at least one live environment. The provisioning time applies to the 3-tier pattern, not every possible configuration. The CSAT improvement was shared with other changes shipped in the same period, so I do not attribute it to one feature.",
        },
      ],
    },
    {
      id: "lessons",
      heading: "What I learned",
      blocks: [
        {
          type: "p",
          text: "**My linear spec did not survive AWS.** I wrote the provisioning workflow as a linear sequence of steps. Real AWS behavior includes edge cases that do not fit a straight line, and engineering redesigned the state logic to handle them. The lesson I took: for infrastructure workflows, specify the states and transitions, including failure and retry, not just the happy path.",
        },
        {
          type: "p",
          text: "**Instrument each step.** The step-level funnel was what turned a vague sense that first deployments were hard into one specific cause we could fix.",
        },
        {
          type: "p",
          text: "**Scope cuts cost something.** Narrowing to 4 service types was right for most customers and lost some enterprise deals.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What did you personally own versus the team?",
      a: "I recruited the 5 design partners, ran interviews and analysis, set the MVP scope and wrote the specs, including the pre-deployment validation. Engineering built the platform and redesigned the state logic when my linear spec hit AWS edge cases. I had no reporting line over the team.",
    },
    {
      q: "Why only 4 service types at launch?",
      a: "Customers asked for about a dozen. Four covered about 80% of demand, so we shipped those first. Some enterprise prospects who needed other services were lost as a result.",
    },
    {
      q: "What drove the drop in provisioning time?",
      a: "Guided provisioning for the 3-tier pattern, plus real-time validation of resource names and settings. A step-level funnel showed naming and validation errors caused most failed first deployments, so catching them before deployment addressed the most common cause of failure.",
    },
  ],
  related: [
    { href: "/case-studies", label: "All case studies" },
    { href: "/case-studies/ai-agent-quality-evaluation", label: "Validation gates for an AI agent at VWO" },
    { href: "/#resume", label: "Full experience" },
  ],
};

export default doc;
