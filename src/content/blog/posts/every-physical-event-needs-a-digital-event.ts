import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "every-physical-event-needs-a-digital-event",
  "title": "Why does every physical hand-off need a tracking event?",
  "metaTitle": "Why Every Physical Hand-off Needs a Tracking Event",
  "description": "When a parcel or device changes hands without a tracking event, customers fill the silence with worry. Why to make it a launch criterion and how to check.",
  "date": "2027-01-21",
  "category": "pm-problem",
  "tags": [
    "logistics",
    "tracking",
    "operations",
    "launch criteria"
  ],
  "body": [
    "Every time something physical changes hands, a parcel, a key, a device, your system should record it. If it doesn't, the customer sees a gap, and a gap in tracking reads as lost. Make a tracking event for every hand-off a launch criterion, not a later improvement.",
    "At Stallion Express this came from a real problem. We ran a multi-stop relay, where a parcel moved between several points before reaching the carrier. Some of those hand-offs didn't produce a tracking event, which caused tracking gaps, and merchants complained. A parcel moving between stops can look stuck from the outside. When that happens, the system can't see what the people moving the parcels can see.",
    "Why does this get skipped? A common reason is that the physical process gets designed by operations and the tracking gets designed by engineering, and nobody owns the seam between them. Ops thinks of hand-offs as moments with people and vans. Engineering thinks of events in a database. The product job is to put both on one diagram and check that every arrow in the physical flow has a matching event, with a named owner for capturing it. Sometimes the capture is a scan, sometimes a partner API, sometimes a button a driver taps. It doesn't matter which, as long as it exists before launch. It's also cheaper to add an event before launch than to explain gaps to customers after.",
    "On Monday, draw your physical flow from the customer's hands to the final destination. Mark every point where custody changes. Then check your tracking data for each one. Any hand-off without an event is a future support ticket. Add those to your launch checklist and treat a missing event the same way you'd treat a missing payment confirmation."
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    },
    {
      "href": "/expertise/ecommerce-omnichannel-product-management",
      "label": "Ecommerce and omnichannel product management"
    }
  ]
};

export default post;
