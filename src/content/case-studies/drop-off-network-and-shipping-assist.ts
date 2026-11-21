import type { Doc } from "../types";

const doc: Doc = {
  kind: "case-study",
  slug: "drop-off-network-and-shipping-assist",
  title: "Building the Drop & Go parcel network and the Shipping Assist packaging line at Stallion Express",
  metaTitle: "Drop & Go network and Shipping Assist",
  description:
    "How I made partner storefronts a 10+ location parcel drop-off network with 32 pricing zones, and launched Shipping Assist, a packaging-supplies vertical.",
  answer:
    "Stallion Express needed physical places for merchants to hand over parcels without building warehouses. I made each partner storefront in the Drop & Go network a node in matching, pricing and routing, chose sites by postal-code data, and replaced a single rate model with 32 reusable pricing zones. The network grew to 10+ locations. I also launched Shipping Assist, selling packaging supplies at those locations; its outcome metrics are not published.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["Omnichannel", "Logistics", "Pricing", "New vertical", "Marketplace operations"],
  facts: [
    { label: "Company", value: "Stallion Express (including sister brand Shippy), cross-border e-commerce shipping" },
    { label: "Role", value: "Product Manager" },
    { label: "Dates", value: "Apr 2020 – Sep 2023 (Mississauga, Ontario)" },
    {
      label: "Scope",
      value: "Drop & Go partner drop-off network (10+ locations), 32-zone regional pricing, and the Shipping Assist packaging-supplies vertical",
    },
  ],
  sections: [
    {
      id: "context",
      heading: "Business context",
      blocks: [
        {
          type: "p",
          text: "Stallion Express is a cross-border e-commerce shipping platform with more than 40,000 registered merchants. Buying a label online is only half of shipping; the parcel still has to physically reach the network. **Drop & Go** solved that with partner retail storefronts where merchants drop off parcels, collected by daily pickup sweeps.",
        },
        {
          type: "p",
          text: "Drop & Go is an omnichannel product in the sense that a digital flow (signing up, buying a label, getting a quote) depends on a physical touchpoint (a storefront where the parcel changes hands). It is a parcel drop-off network, not buy online, pick up in store (BOPIS). The two share the same design problem of keeping physical and digital state in step, but I have not built BOPIS.",
        },
      ],
    },
    {
      id: "problem",
      heading: "Customer problem",
      blocks: [
        {
          type: "p",
          text: "Two merchant problems drove this work. First, merchants needed somewhere convenient to hand over parcels, and the business needed a way to provide that without the capital cost of building its own warehouses.",
        },
        {
          type: "p",
          text: "Second, I found that merchants were not packing parcels in the right packaging material. The drop-off point, where merchants were already standing with their parcels, was a natural place to help.",
        },
      ],
    },
    {
      id: "role",
      heading: "My role and what I owned",
      blocks: [
        {
          type: "list",
          items: [
            "**Operations and business development** found and negotiated the partner storefronts.",
            "**My part** was the product: making each location a node in the matching → pricing → routing chain, so a new storefront became something merchants could be matched to, quoted for and routed through.",
            "**Pricing:** I wrote the requirements for regional pricing; engineering built it.",
            "**Shipping Assist:** I identified the packaging problem, launched the vertical, and managed the packaging-supplies catalog.",
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
          text: "**Where to put locations.** Site selection looked at postal codes where merchant sign-ups were high but label generation was low. That gap pointed to areas with plenty of interested merchants who were not yet shipping, which is where a nearby drop-off point had the most room to help.",
        },
        {
          type: "p",
          text: "**What merchants were missing.** I identified that merchants were packing parcels in material that was not suited to shipping. That finding became the case for Shipping Assist.",
        },
      ],
    },
    {
      id: "decisions",
      heading: "Decisions and trade-offs",
      blocks: [
        {
          type: "p",
          text: "**Partners instead of warehouses.** Using partner storefronts meant near-zero capital cost compared with building warehouses. One trade-off is less direct control over each location, which put more weight on the digital side: matching, pricing, routing and tracking all had to work for locations the company did not run.",
        },
        {
          type: "p",
          text: "**Zones instead of a single rate.** The original model used one rate. I replaced it with reusable regional pricing covering 32 shipping zones. The zones were chosen through cost analysis from the much larger number of postal-code areas. Quotes were computed at checkout, and the zone model was designed to be reused as the network expanded, so adding coverage did not mean rebuilding pricing.",
        },
        {
          type: "p",
          text: "**Sell supplies where parcels are dropped off.** Shipping Assist put packaging supplies at Drop & Go locations, so merchants could buy what they needed at the moment they were already handing over a parcel.",
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
            "**Network:** Drop & Go expanded to more than 10 partner locations, each wired into matching, pricing and routing.",
            "**Matching:** new merchants were matched to their nearest hub or Drop & Go location during onboarding (see the [checkout and onboarding case study](/case-studies/checkout-shipping-discovery)).",
            "**Pricing:** 32 regional zones replaced the single rate model, with quotes computed at checkout.",
            "**Shipping Assist:** a new vertical where merchants can buy packaging supplies at Drop & Go locations across Canada when they drop off parcels, with a catalog I managed.",
          ],
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
            { value: "10+", label: "Drop & Go partner locations" },
            { value: "32", label: "Regional pricing zones", note: "Replacing a single rate model" },
            { value: "Near-zero", label: "Capital cost", note: "Compared with building warehouses" },
          ],
        },
        {
          type: "p",
          text: "The location network also fed the onboarding work: matching new merchants to their nearest hub or Drop & Go location was part of the change that lifted first-shipment activation 22%, covered in the [checkout case study](/case-studies/checkout-shipping-discovery).",
        },
        {
          type: "callout",
          title: "How to read these numbers",
          text: "The figures here describe what was built, not business results. Operations and business development secured the partner locations. Outcome metrics for Shipping Assist are not published, so I am not reporting any.",
        },
      ],
    },
    {
      id: "lessons",
      heading: "What I learned",
      blocks: [
        {
          type: "p",
          text: "Two of the lessons I value most from Stallion came from the physical side of the business, during Q4 demand forecasting and a hybrid allocation of parcels between an owned fleet and third-party carriers.",
        },
        {
          type: "p",
          text: "**Every physical state change needs a digital tracking event.** We ran a multi-stop relay in which parcels were transferred between vehicles. Those transfers were not reflected in tracking, so tracking updates were delayed and customers complained. Since then I treat \"every physical handoff emits a tracking event\" as a launch criterion, not a follow-up. That applies directly to a drop-off network, where a storefront handoff is exactly the kind of state change that can go missing.",
        },
        {
          type: "p",
          text: "**A forecast is not capacity.** The demand forecast was right, but capacity was wrong. A vehicle is not capacity without a driver. Planning has to count the constraint that actually binds, not the asset that is easiest to count.",
        },
        {
          type: "p",
          text: "**Look where the customer already is.** Shipping Assist solved a packaging problem at the point of drop-off, where merchants already were, rather than adding another step to the online flow.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What did you own versus operations and business development?",
      a: "Operations and business development found and negotiated the partner storefronts. I owned making each location work in the product: matching merchants to it, pricing shipments through it and routing parcels from it. Engineering built the pricing model from my requirements.",
    },
    {
      q: "Is Drop & Go the same as BOPIS?",
      a: "No. Drop & Go is a parcel drop-off network where merchants hand over outgoing parcels. BOPIS is a retail pattern where shoppers collect orders in store. Both connect a digital flow to a physical location, which is why the lessons overlap, but I have not built BOPIS.",
    },
    {
      q: "What results did Shipping Assist produce?",
      a: "Outcome metrics for Shipping Assist are not published. What I can say is that I identified the packaging problem, launched the vertical at Drop & Go locations across Canada, and managed its catalog.",
    },
  ],
  sources: [
    { label: "Click and collect (buy online, pick up in store), Wikipedia", url: "https://en.wikipedia.org/wiki/Click_and_collect" },
  ],
  related: [
    { href: "/expertise/ecommerce-omnichannel-product-management", label: "E-commerce and omnichannel product management" },
    { href: "/case-studies/checkout-shipping-discovery", label: "Reducing checkout abandonment at Stallion Express" },
    { href: "/case-studies", label: "All case studies" },
  ],
};

export default doc;
