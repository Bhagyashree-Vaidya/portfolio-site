// Single source of truth for identity facts used in metadata, JSON-LD,
// the sitemap and contact links. Keep in sync with the master résumé.

export const SITE_URL = "https://www.shreevaidya.com";

export const PERSON = {
  name: "Bhagyashree Vaidya",
  preferredName: "Shree Vaidya",
  displayName: "Bhagyashree (Shree) Vaidya",
  jobTitle: "Senior Product Manager",
  location: "Seattle, WA",
  email: "bhagyashreevaidya08@gmail.com",
  // Live profile (verified 2026-11-21). The old /in/bhagyashree-vaidya-6b47a811a/ URL is dead.
  linkedin: "https://www.linkedin.com/in/shree-vaidya/",
  github: "https://github.com/Bhagyashree-Vaidya",
  // Set to "/Shree_Vaidya_Resume.pdf" once the PDF is added to /public.
  resumePdf: null as string | null,
};

export const SHORT_BIO =
  "Bhagyashree (Shree) Vaidya is a Seattle-based Senior Product Manager with 8+ years in product across e-commerce, cross-border shipping, Medicare insurance and B2B SaaS. At VWO she owned Wingz, an agentic AI product for A/B testing. Her work focuses on search, ranking, personalization and AI evaluation. She holds an M.S. in Information Management from the University of Washington and is PMP certified.";

export const META_DESCRIPTION =
  "Shree Vaidya is a Seattle Senior Product Manager building AI agents, search and personalization for e-commerce. UW MS '26, PMP.";

export const mailto = (subject?: string) =>
  `mailto:${PERSON.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    alternateName: [PERSON.preferredName, PERSON.displayName],
    givenName: "Bhagyashree",
    familyName: "Vaidya",
    jobTitle: PERSON.jobTitle,
    description:
      "Seattle-based Senior Product Manager specializing in search, ranking, personalization and agentic AI for e-commerce and B2B SaaS.",
    url: `${SITE_URL}/`,
    email: `mailto:${PERSON.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    sameAs: [PERSON.linkedin, PERSON.github, "https://receivablesinfo.com/author/bhagyashree-vaidya/"],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Washington", sameAs: "https://www.washington.edu/" },
      { "@type": "CollegeOrUniversity", name: "Rashtrasant Tukadoji Maharaj Nagpur University" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "M.S. Information Management",
        credentialCategory: "degree",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Washington" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "B.E. Electrical Engineering",
        credentialCategory: "degree",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "Rashtrasant Tukadoji Maharaj Nagpur University" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Project Management Professional (PMP)",
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: "Project Management Institute" },
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Product Manager",
      occupationLocation: { "@type": "City", name: "Seattle, WA" },
      skills: "Search and ranking, personalization, agentic AI, LLM evaluation, A/B testing, e-commerce, SQL, Python",
    },
    knowsAbout: [
      "Product management",
      "Search relevance",
      "Learning to rank",
      "Personalization",
      "Agentic AI",
      "LLM evaluation",
      "Human-in-the-loop AI",
      "A/B testing",
      "E-commerce",
      "Checkout optimization",
      "Shipping and logistics",
      "Medicare marketplaces",
    ],
  };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd(),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: "Shree Vaidya",
        inLanguage: "en-US",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: `${SITE_URL}/`,
        name: "Shree Vaidya | Senior Product Manager, AI & Search",
        mainEntity: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
      },
    ],
  };
}

export function pageJsonLd(opts: { path: string; name: string; type?: string; extra?: Record<string, unknown> }) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": opts.type ?? "WebPage",
        "@id": `${url}#page`,
        url,
        name: opts.name,
        isPartOf: { "@id": WEBSITE_ID },
        author: { "@id": PERSON_ID },
        ...opts.extra,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: opts.name, item: url },
        ],
      },
    ],
  };
}

/** Serialize JSON-LD safely for a <script> tag. */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
