import type { Doc } from "../types";

const doc: Doc = {
  kind: "case-study",
  slug: "checkout-shipping-discovery",
  title: "Reducing checkout abandonment 14% at Stallion Express with multi-carrier rate comparison",
  metaTitle: "Cutting shipping checkout abandonment 14%",
  description:
    "How multi-carrier rate comparison and a best-value default cut checkout abandonment 14%, and location matching lifted first-shipment activation 22%.",
  answer:
    "Merchants on Stallion Express, a cross-border shipping platform, had to choose a carrier at checkout by weighing price, delivery time and reliability. I launched multi-carrier rate comparison with a best-value default ranking and faceted filters, which cut checkout abandonment 14% in an A/B test. Separately, location-based matching during onboarding connected new merchants to their nearest hub or Drop & Go location and lifted first-shipment activation 22%.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["E-commerce", "Checkout", "Ranking", "Onboarding", "A/B testing"],
  facts: [
    { label: "Company", value: "Stallion Express (including sister brand Shippy), cross-border e-commerce shipping" },
    { label: "Role", value: "Product Manager" },
    { label: "Dates", value: "Apr 2020 – Sep 2023 (Mississauga, Ontario)" },
    {
      label: "Scope",
      value: "Merchant checkout and shipping discovery: carrier comparison, default ranking, filters, and new-merchant onboarding",
    },
  ],
  sections: [
    {
      id: "context",
      heading: "Business context",
      blocks: [
        {
          type: "p",
          text: "Stallion Express is a cross-border e-commerce shipping platform with more than 40,000 registered merchants. The platform as a whole handles more than 5 million parcels a year; that is a platform figure, not something I drove. Merchants connect their stores through integrations with Shopify, Etsy, Amazon and eBay, then buy shipping labels through Stallion.",
        },
        {
          type: "p",
          text: "Checkout, the moment a merchant picks a carrier and buys a label, is where the platform earns its keep. If a merchant abandons it, no parcel ships.",
        },
      ],
    },
    {
      id: "problem",
      heading: "Customer problem",
      blocks: [
        {
          type: "p",
          text: "Choosing a shipping option is a three-way trade-off between price, delivery speed and how dependable the service is. Merchants needed to see those trade-offs for the available carriers in one place and reach a decision quickly. Each extra step or unclear choice at checkout was a chance to drop out.",
        },
        {
          type: "p",
          text: "New merchants had a second problem: getting to their first label at all. To ship, they needed to know which hub or Drop & Go drop-off location was near them and which carrier services were available there. I wanted them to get there without having to type in their location by hand.",
        },
      ],
    },
    {
      id: "role",
      heading: "My role and what I owned",
      blocks: [
        {
          type: "p",
          text: "As Product Manager I owned the checkout and shipping discovery experience: what the rate comparison showed, how options were ranked by default, which filters existed, and how new merchants were matched to locations during onboarding. Engineering built the features from those requirements.",
        },
      ],
    },
    {
      id: "decisions",
      heading: "Decisions and trade-offs",
      blocks: [
        {
          type: "p",
          text: "**Compare carriers side by side.** Rather than presenting one rate at a time, the checkout showed delivery times, prices and savings for multiple carriers next to each other. Merchants could see savings of 70% or more against retail rates. That figure is the value the comparison displayed to merchants, not an outcome I am claiming.",
        },
        {
          type: "p",
          text: "**Pick a sensible default.** A comparison table with no order pushes all the work onto the merchant. I chose a best-value default ranking that balanced cost, delivery speed and service reliability, instead of simply sorting by cheapest. Cheapest-first could have put slow or less reliable services at the top for merchants who cared about delivery promises.",
        },
        {
          type: "p",
          text: "**Give control without clutter.** Some merchants have firm requirements. Faceted filters for delivery speed, tracking and carrier preference let them narrow the list without making everyone else wade through options.",
        },
        {
          type: "p",
          text: "**Infer location instead of asking for it.** For onboarding, location-based personalization matched each new merchant to the nearest hub or Drop & Go location and to the carrier services available there, with no manual location entry.",
        },
      ],
    },
    {
      id: "execution",
      heading: "How we built and shipped it",
      blocks: [
        {
          type: "list",
          items: [
            "**Rate comparison:** multiple carriers shown together with delivery time, price and savings.",
            "**Default ranking:** best-value order combining cost, delivery speed and service reliability.",
            "**Faceted filters:** delivery speed, tracking and carrier preference.",
            "**Onboarding match:** new merchants connected to the nearest hub or [Drop & Go location](/case-studies/drop-off-network-and-shipping-assist) and the carrier services available to them.",
            "**Multi-currency payments:** a Stripe and PayPal multi-currency integration so US and Canadian merchants could pay in their own currency.",
          ],
        },
      ],
    },
    {
      id: "validation",
      heading: "Experimentation and validation",
      blocks: [
        {
          type: "p",
          text: "The rate comparison was validated with an A/B test, with checkout abandonment as the primary measure. For onboarding, activation was defined as a merchant generating their first label within 7 days of signing up, so we were measuring real shipping rather than account creation.",
        },
        {
          type: "p",
          text: "We also looked at how merchants used the new controls once they were live: how often they took the top-ranked option, and how often they reached for filters.",
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
            { value: "−14%", label: "Checkout abandonment", note: "Measured in an A/B test" },
            { value: "+22%", label: "First-shipment activation", note: "First label within 7 days, after location-based matching" },
            { value: "58%", label: "Chose the top-ranked option", note: "Position drives some of this" },
            { value: "24%", label: "Shipments where filters were used" },
          ],
        },
        {
          type: "callout",
          title: "How to read these numbers",
          text: "The 14% reduction in abandonment comes from an A/B test. The 58% who chose the top-ranked option should not be read as proof that the ranking was right: people pick the first option partly because it is first. The 70%+ savings figure is what merchants were shown against retail rates, not a result. The 5M+ parcels a year is a platform-wide number.",
        },
      ],
    },
    {
      id: "lessons",
      heading: "What I learned",
      blocks: [
        {
          type: "p",
          text: "**The default is a product decision.** Most merchants accept whatever sits at the top, so the ranking logic shapes behavior more than any filter. That makes it worth defining carefully, and it means the share of people picking the default is a weak signal of quality on its own. Position effects have to be accounted for before you celebrate a high click rate on the first slot.",
        },
        {
          type: "p",
          text: "**Filters are for the minority with firm needs.** A quarter of shipments used them. That is enough to justify them, and small enough to confirm the default had to do most of the work.",
        },
        {
          type: "p",
          text: "**Define activation by the real job.** Measuring the first label within 7 days kept the onboarding work honest. It tied location matching to whether merchants actually shipped, not whether they finished a sign-up form.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How did you validate the checkout change?",
      a: "With an A/B test on the multi-carrier rate comparison. Checkout abandonment fell 14% compared with the control.",
    },
    {
      q: "How did the default ranking work?",
      a: "It ranked shipping options by best value, balancing cost, delivery speed and service reliability, rather than by price alone. 58% chose the top-ranked option, though part of that is simply because it was shown first.",
    },
    {
      q: "What does the 22% activation lift measure?",
      a: "Activation meant a new merchant generating their first shipping label within 7 days. It rose 22% after onboarding started matching merchants to their nearest hub or Drop & Go location and available carrier services, without manual location entry.",
    },
  ],
  sources: [
    { label: "Baymard Institute: cart abandonment rate statistics", url: "https://baymard.com/lists/cart-abandonment-rate" },
    { label: "Faceted search (Wikipedia)", url: "https://en.wikipedia.org/wiki/Faceted_search" },
  ],
  related: [
    { href: "/expertise/ecommerce-omnichannel-product-management", label: "E-commerce and omnichannel product management" },
    { href: "/case-studies/drop-off-network-and-shipping-assist", label: "Drop & Go network and Shipping Assist at Stallion Express" },
    { href: "/expertise/search-product-management", label: "Search and ranking product management" },
    { href: "/insights/search-ranking-metrics-for-product-managers", label: "Search ranking metrics for product managers" },
  ],
};

export default doc;
