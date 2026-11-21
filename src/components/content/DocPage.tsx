import Link from "next/link";
import type { Block, Doc } from "@/content/types";
import { KIND_META } from "@/content/registry";
import { PERSON, SITE_URL, jsonLdString, mailto } from "@/lib/site";
import RichText from "./RichText";

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="text-base md:text-lg leading-relaxed text-text-secondary"><RichText text={block.text} /></p>;
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={`${block.ordered ? "list-decimal" : "list-disc"} space-y-2 pl-6 text-base md:text-lg leading-relaxed text-text-secondary`}>
          {block.items.map((it, i) => <li key={i}><RichText text={it} /></li>)}
        </Tag>
      );
    }
    case "callout":
      return (
        <aside className="rounded-2xl border border-[#F0AFC0]/60 bg-[#FFF1EA] p-5 md:p-6">
          {block.title && <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[#9C2F55]">{block.title}</p>}
          <p className="text-base leading-relaxed text-text-primary"><RichText text={block.text} /></p>
        </aside>
      );
    case "metrics":
      return (
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((m, i) => (
            <div key={i} className="rounded-2xl border border-border-primary bg-white p-5">
              <dt className="text-sm text-text-secondary"><RichText text={m.label} /></dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-[#9C2F55]">{m.value}</dd>
              {m.note && <dd className="mt-2 text-sm text-text-muted"><RichText text={m.note} /></dd>}
            </div>
          ))}
        </dl>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-border-primary bg-white">
          <table className="w-full min-w-[560px] text-left text-sm md:text-base">
            {block.caption && <caption className="p-4 text-left text-sm text-text-secondary">{block.caption}</caption>}
            <thead className="bg-[#FFF1EA]">
              <tr>{block.head.map((h, i) => <th key={i} scope="col" className="p-3 font-semibold text-text-primary">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i} className="border-t border-border-primary align-top">
                  {r.map((c, j) => <td key={j} className="p-3 text-text-secondary"><RichText text={c} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function docJsonLd(doc: Doc) {
  const meta = KIND_META[doc.kind];
  const url = `${SITE_URL}${meta.base}/${doc.slug}`;
  const person = { "@id": `${SITE_URL}/#person` };
  const main =
    doc.kind === "expertise"
      ? { "@type": "WebPage", about: doc.tags.map((t) => ({ "@type": "Thing", name: t })) }
      : { "@type": "Article", headline: doc.title, author: person, publisher: person, datePublished: doc.published, dateModified: doc.updated, keywords: doc.tags.join(", ") };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...main,
        "@id": `${url}#page`,
        url,
        name: doc.title,
        description: doc.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntityOfPage: url,
        author: person,
        image: `${SITE_URL}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: meta.label, item: `${SITE_URL}${meta.base}` },
          { "@type": "ListItem", position: 3, name: doc.title, item: url },
        ],
      },
    ],
  };
}

export default function DocPage({ doc }: { doc: Doc }) {
  const meta = KIND_META[doc.kind];
  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(docJsonLd(doc)) }} />
      <article className="mx-auto w-full max-w-[860px] px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-secondary">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[#9C2F55]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={meta.base} className="hover:text-[#9C2F55]">{meta.label}</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-text-primary">{doc.title}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#9C2F55]">{meta.singular}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl">{doc.title}</h1>
          <p className="mt-5 text-sm text-text-secondary">
            By <Link href="/#identity" className="underline underline-offset-2">{PERSON.displayName}</Link>, {PERSON.jobTitle}
            {" · "}Published <time dateTime={doc.published}>{fmt(doc.published)}</time>
            {doc.updated !== doc.published && <>{" · "}Updated <time dateTime={doc.updated}>{fmt(doc.updated)}</time></>}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
            {doc.tags.map((t) => (
              <li key={t} className="rounded-full border border-[#F0AFC0] bg-white/70 px-3 py-1 font-mono text-xs text-[#9C2F55]">{t}</li>
            ))}
          </ul>
        </header>

        <section aria-labelledby="short-answer" className="mb-10 rounded-2xl border-l-4 border-[#B83B67] bg-white p-6 shadow-sm">
          <h2 id="short-answer" className="mb-2 font-mono text-xs uppercase tracking-widest text-[#9C2F55]">Short answer</h2>
          <p className="text-lg leading-relaxed text-text-primary"><RichText text={doc.answer} /></p>
        </section>

        {doc.facts && (
          <dl className="mb-10 grid grid-cols-1 gap-x-8 gap-y-4 rounded-2xl border border-border-primary bg-white p-6 sm:grid-cols-2">
            {doc.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">{f.label}</dt>
                <dd className="mt-1 text-text-primary"><RichText text={f.value} /></dd>
              </div>
            ))}
          </dl>
        )}

        <nav aria-labelledby="toc" className="mb-12">
          <h2 id="toc" className="mb-3 font-mono text-xs uppercase tracking-widest text-text-secondary">On this page</h2>
          <ol className="grid gap-1 text-sm sm:grid-cols-2">
            {doc.sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-text-secondary hover:text-[#9C2F55]">{s.heading}</a></li>
            ))}
            {doc.faqs?.length ? <li><a href="#faq" className="text-text-secondary hover:text-[#9C2F55]">FAQ</a></li> : null}
          </ol>
        </nav>

        <div className="space-y-14">
          {doc.sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28 space-y-5">
              <h2 id={`${s.id}-h`} className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">{s.heading}</h2>
              {s.blocks.map((b, i) => <BlockView key={i} block={b} />)}
            </section>
          ))}

          {doc.faqs?.length ? (
            <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28 space-y-6">
              <h2 id="faq-h" className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">Frequently asked questions</h2>
              {doc.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-semibold text-text-primary">{f.q}</h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary"><RichText text={f.a} /></p>
                </div>
              ))}
            </section>
          ) : null}

          {doc.sources?.length ? (
            <section aria-labelledby="sources-h" className="space-y-3">
              <h2 id="sources-h" className="font-display text-xl font-semibold text-text-primary">Sources and further reading</h2>
              <ul className="list-disc space-y-1 pl-6 text-text-secondary">
                {doc.sources.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#9C2F55] underline underline-offset-2">{s.label}</a></li>
                ))}
              </ul>
            </section>
          ) : null}

          <section aria-labelledby="related-h" className="rounded-2xl border border-border-primary bg-white p-6">
            <h2 id="related-h" className="mb-3 font-display text-xl font-semibold text-text-primary">Related</h2>
            <ul className="space-y-2">
              {doc.related.map((r) => (
                <li key={r.href}><Link href={r.href} className="text-[#9C2F55] underline underline-offset-2">{r.label}</Link></li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cta-h" className="rounded-2xl bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] p-8">
            <h2 id="cta-h" className="font-display text-2xl font-semibold text-text-primary">Hiring for this kind of work?</h2>
            <p className="mt-2 text-text-secondary">Shree is open to Senior PM, AI PM and Technical PM roles, on-site, hybrid or remote, and open to relocation.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={mailto(`About: ${doc.title}`)} className="rounded-md bg-[#B83B67] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#9C2F55]">Email Shree</a>
              <Link href="/#resume" className="rounded-md border border-[#B83B67] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#9C2F55] hover:bg-white">See her experience</Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
