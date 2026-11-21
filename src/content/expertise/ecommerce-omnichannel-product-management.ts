import type { Doc } from "../types";

const doc: Doc = {
  kind: "expertise",
  slug: "ecommerce-omnichannel-product-management",
  title: "E-commerce and omnichannel product management",
  metaTitle: "E-commerce and Omnichannel Product Management",
  description:
    "What an e-commerce and omnichannel product manager does: checkout conversion, shipping cost clarity, merchant activation, physical networks and pricing.",
  answer:
    "An e-commerce and omnichannel product manager connects the digital journey to the physical operation behind it. That means improving checkout conversion, making costs clear before payment, activating new sellers, and turning physical locations, pricing zones and catalogs into parts of one system. The skill is weighing customer experience against fulfillment cost and capacity, and making sure every physical event shows up correctly in the digital product.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["E-commerce", "Omnichannel", "Checkout conversion", "Marketplaces"],
  sections: [
    {
      id: "what-the-role-covers",
      heading: "What does an e-commerce and omnichannel product manager do?",
      blocks: [
        {
          type: "p",
          text: "In e-commerce, the screen is the storefront, but the promise on the screen depends on warehouses, carriers, stores and pricing rules. Omnichannel work is about making those channels behave like one product: a customer or merchant should get consistent prices, status and options whether they act online or at a physical location.",
        },
        {
          type: "list",
          items: [
            "**Checkout conversion.** Remove surprises at the payment step, especially unexpected costs.",
            "**Shipping cost transparency.** Show price, speed and reliability side by side so the choice is easy.",
            "**Seller or merchant onboarding.** Get new accounts to their first meaningful action quickly.",
            "**Physical and digital network.** Treat each store, hub or drop-off point as a node with data, pricing and routing.",
            "**Pricing structure.** Design regional pricing that can be computed at checkout and reused as the network grows.",
            "**Catalog.** Decide what is sold, how it is organized and where it is available.",
            "**Fulfillment trade-offs.** Balance speed, cost and capacity, especially at seasonal peaks.",
          ],
        },
      ],
    },
    {
      id: "skills",
      heading: "What skills does an omnichannel product manager need?",
      blocks: [
        {
          type: "list",
          items: [
            "**Systems thinking across physical and digital.** A new location is not live until it exists in matching, pricing, routing and tracking.",
            "**Comfort with operations data.** Postal-code demand, pickup schedules, capacity and carrier performance drive product decisions.",
            "**Experiment design.** Checkout and onboarding changes should be A/B tested where traffic allows, with honest attribution where it does not.",
            "**Partnership with operations and business development.** They find and negotiate partners; the PM makes the partner usable inside the product.",
            "**Launch criteria that include the physical world.** Every physical state change needs a matching digital event, or customers lose trust in tracking.",
          ],
        },
      ],
    },
    {
      id: "retail-conversion",
      heading: "How does a product manager improve retail conversion?",
      blocks: [
        {
          type: "p",
          text: "Research compiled by the Baymard Institute puts average documented online cart abandonment at roughly 70%, and extra costs such as shipping are the most commonly cited reason. That points at a practical rule: show the full cost, and the options for reducing it, before the customer commits.",
        },
        {
          type: "p",
          text: "At Stallion Express I launched multi-carrier rate comparison at checkout, showing delivery times, prices and savings side by side, with a best-value default ranking that balanced cost, speed and service reliability. An A/B test showed checkout abandonment fell 14%. Activation is the other lever: matching new merchants to the nearest hub or Drop & Go location during onboarding, without manual location entry, lifted first-shipment activation (first label within 7 days) by 22%.",
        },
      ],
    },
    {
      id: "prioritizing-journeys",
      heading: "How do product managers prioritize retail customer journeys?",
      blocks: [
        {
          type: "p",
          text: "I prioritize journeys by where intent is high and completion is low. That gap is where a fix pays back fastest.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Find high intent, low completion.** Drop & Go sites were chosen where merchant sign-ups were high but label generation was low, by postal code.",
            "**Find the dominant questions.** At Unity Senior Health, 50+ customer interviews and funnel analysis showed three questions drove plan choice. We built ranking around them.",
            "**Fix the step where people stall.** On the merchant journey at Stallion, the work went to checkout (cost and carrier choice) and the first shipment, because a merchant who never prints a first label never becomes active.",
            "**Check the physical dependency.** If the fix depends on capacity, people or partners, plan for them before launch.",
          ],
        },
      ],
    },
    {
      id: "bopis",
      heading: "BOPIS and how my drop-off network work relates",
      blocks: [
        {
          type: "p",
          text: "**BOPIS** (buy online, pick up in store) lets a shopper purchase online and collect the order at a physical store. It depends on accurate store-level inventory, order routing to the right store, pickup readiness notifications and a smooth handoff at the counter.",
        },
        {
          type: "callout",
          title: "Honest scope",
          text: "I have not built BOPIS. The adjacent pattern I have worked on is Drop & Go at Stallion Express: partner retail storefronts where merchants drop off parcels, with daily pickup sweeps. It runs in the opposite direction (goods flow from customer to network, not network to customer), but several problems transfer: choosing locations from demand data, making each store a node in matching, pricing and routing, and making sure each physical handoff produces a tracking event.",
        },
      ],
    },
    {
      id: "owned-vs-studied",
      heading: "What I have owned in production vs. studied",
      blocks: [
        {
          type: "table",
          head: ["Area", "My role", "Evidence"],
          rows: [
            [
              "Checkout shipping comparison and default ranking",
              "**Owned** (Stallion Express)",
              "Checkout abandonment down 14% (A/B test). 58% chose the top-ranked option. Filters used on 24% of shipments.",
            ],
            [
              "Merchant onboarding and activation",
              "**Owned** (Stallion Express)",
              "First-shipment activation up 22% with location-based matching to the nearest hub or Drop & Go location.",
            ],
            [
              "Drop & Go physical network",
              "**Owned** the product side; operations and business development found and negotiated partners",
              "Expanded to 10+ partner locations, each a node in matching, pricing and routing. Near-zero capital cost compared with building warehouses.",
            ],
            [
              "Regional pricing zones",
              "**Owned** requirements; engineering built it",
              "Single rate model replaced by 32 reusable pricing zones chosen by cost analysis, with quotes computed at checkout.",
            ],
            [
              "Packaging-supplies catalog (Shipping Assist)",
              "**Owned** (Stallion Express)",
              "I identified that merchants were not packing parcels in the right material and launched a vertical selling packaging supplies at Drop & Go locations. Outcome metrics are not published.",
            ],
            [
              "Multi-currency payments",
              "**Contributed** (Stallion Express)",
              "Stripe and PayPal multi-currency integration so US and Canadian merchants could pay in their own currency.",
            ],
            [
              "Peak-season demand and carrier allocation",
              "**Contributed** (Stallion Express)",
              "Q4 demand forecasting and a hybrid owned-fleet and third-party carrier allocation. Lesson: a vehicle is not capacity without a driver.",
            ],
            [
              "Consumer plan-shopping journey",
              "**Owned** (Unity Senior Health)",
              "Plan-selection drop-off down 32%; acquisition cost from $210 to $172 per enrollment.",
            ],
            [
              "BOPIS, store inventory accuracy, in-store pickup",
              "**Studied**",
              "Not built. Drop & Go is the adjacent pattern I have worked on.",
            ],
          ],
        },
      ],
    },
    {
      id: "case-studies",
      heading: "Case studies with the full story",
      blocks: [
        {
          type: "list",
          items: [
            "[Checkout shipping discovery](/case-studies/checkout-shipping-discovery): rate comparison, best-value ranking and filters.",
            "[Drop-off network and Shipping Assist](/case-studies/drop-off-network-and-shipping-assist): Drop & Go locations, pricing zones and the packaging catalog.",
            "[Medicare plan discovery](/case-studies/medicare-plan-discovery): prioritizing a consumer journey with interviews and funnel data.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between multichannel and omnichannel?",
      a: "Multichannel means selling or serving through several channels. Omnichannel means those channels share data and behave consistently, so status, pricing and options match wherever the customer acts.",
    },
    {
      q: "What is the most common cause of checkout abandonment?",
      a: "Industry research from the Baymard Institute lists extra costs, such as shipping, as the most commonly cited reason. Showing full costs and cheaper options earlier is usually the first fix to test.",
    },
    {
      q: "Have you built buy online, pick up in store?",
      a: "No. I have worked on Drop & Go, a parcel drop-off network at partner retail storefronts. Location selection, store-as-network-node data and handoff tracking transfer to BOPIS; store inventory accuracy does not.",
    },
    {
      q: "What launch criterion would you add for any physical network feature?",
      a: "Every physical state change must create a digital tracking event. A multi-stop relay at Stallion was not reflected in tracking, which delayed updates and caused complaints.",
    },
  ],
  sources: [
    { label: "Baymard Institute, Cart Abandonment Rate Statistics", url: "https://baymard.com/lists/cart-abandonment-rate" },
    { label: "Click and collect (buy online, pick up in store), Wikipedia", url: "https://en.wikipedia.org/wiki/Click_and_collect" },
    { label: "A/B testing, Wikipedia", url: "https://en.wikipedia.org/wiki/A/B_testing" },
  ],
  related: [
    { href: "/case-studies/checkout-shipping-discovery", label: "Case study: Checkout shipping discovery" },
    { href: "/case-studies/drop-off-network-and-shipping-assist", label: "Case study: Drop-off network and Shipping Assist" },
    { href: "/expertise/search-product-management", label: "Search product management" },
    { href: "/insights/search-ranking-metrics-for-product-managers", label: "Search ranking metrics for product managers" },
  ],
};

export default doc;
