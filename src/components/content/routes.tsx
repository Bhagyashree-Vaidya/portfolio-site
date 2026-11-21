import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { DocKind } from "@/content/types";
import { DOCS_BY_KIND, KIND_META, docPath, getDoc } from "@/content/registry";
import { SITE_URL, jsonLdString } from "@/lib/site";
import DocPage from "./DocPage";

type SlugProps = { params: Promise<{ slug: string }> };

export function staticParams(kind: DocKind) {
  return () => DOCS_BY_KIND[kind].map((d) => ({ slug: d.slug }));
}

export function docMetadata(kind: DocKind) {
  return async ({ params }: SlugProps): Promise<Metadata> => {
    const doc = getDoc(kind, (await params).slug);
    if (!doc) return {};
    const path = docPath(doc);
    return {
      title: doc.metaTitle,
      description: doc.description,
      alternates: { canonical: path },
      openGraph: {
        type: "article",
        url: path,
        title: doc.metaTitle,
        description: doc.description,
        publishedTime: doc.published,
        modifiedTime: doc.updated,
        authors: [`${SITE_URL}/`],
      },
      twitter: { card: "summary_large_image", title: doc.metaTitle, description: doc.description },
    };
  };
}

export function docPage(kind: DocKind) {
  return async function Page({ params }: SlugProps) {
    const doc = getDoc(kind, (await params).slug);
    if (!doc) notFound();
    return <DocPage doc={doc} />;
  };
}

export function indexMetadata(kind: DocKind, title: string, description: string): Metadata {
  const base = KIND_META[kind].base;
  return {
    title,
    description,
    alternates: { canonical: base },
    openGraph: { url: base, title, description },
  };
}

export function IndexPage({ kind, heading, intro }: { kind: DocKind; heading: string; intro: string }) {
  const meta = KIND_META[kind];
  const docs = DOCS_BY_KIND[kind];
  const url = `${SITE_URL}${meta.base}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: heading,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: { "@id": `${SITE_URL}/#person` },
        hasPart: docs.map((d) => ({ "@type": kind === "expertise" ? "WebPage" : "Article", name: d.title, url: `${SITE_URL}${docPath(d)}` })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: meta.label, item: url },
        ],
      },
    ],
  };
  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-secondary">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[#9C2F55]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-text-primary">{meta.label}</li>
          </ol>
        </nav>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">{heading}</h1>
        <p className="mt-4 max-w-[720px] text-lg leading-relaxed text-text-secondary">{intro}</p>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {docs.map((d) => (
            <li key={d.slug} className="flex flex-col rounded-2xl border border-border-primary bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
                <Link href={docPath(d)} className="hover:text-[#9C2F55]">{d.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-text-secondary">{d.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                {d.tags.slice(0, 4).map((t) => (
                  <li key={t} className="rounded-full border border-[#F0AFC0] px-3 py-1 font-mono text-xs text-[#9C2F55]">{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
