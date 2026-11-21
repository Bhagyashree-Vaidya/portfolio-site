import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DECKS, getDeck } from "@/content/teardowns/decks";
import { PERSON, SITE_URL, jsonLdString } from "@/lib/site";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return DECKS.map((d) => ({ id: d.id }));
}

const slideSrc = (id: string, n: number) => `/images/case-studies/${id}/slide-${n}.jpg`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = getDeck((await params).id);
  if (!d) return {};
  const path = `/teardowns/decks/${d.id}`;
  return {
    title: d.metaTitle,
    description: d.description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: d.metaTitle, description: d.description, images: [{ url: slideSrc(d.id, 1), width: 1920, height: 1080 }] },
  };
}

export default async function DeckPage({ params }: Props) {
  const d = getDeck((await params).id);
  if (!d) notFound();
  const url = `${SITE_URL}/teardowns/decks/${d.id}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: d.title,
        description: d.description,
        url,
        image: `${SITE_URL}${slideSrc(d.id, 1)}`,
        datePublished: "2026-11-21",
        dateModified: "2026-11-21",
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#person` },
        about: { "@type": "Organization", name: d.company },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Product teardowns", item: `${SITE_URL}/teardowns` },
          { "@type": "ListItem", position: 3, name: d.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <article className="mx-auto w-full max-w-[920px] px-5">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-text-secondary">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/teardowns" className="hover:underline">Product teardowns</Link>
        </nav>
        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: d.accent }}>Product teardown · {d.company}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">{d.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">{d.description}</p>
        <p className="mt-2 text-sm text-text-secondary">By {PERSON.displayName}. An independent teardown from public information; I have not worked at {d.company}.</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <Image src={slideSrc(d.id, 1)} alt={`${d.title}, cover slide`} width={1920} height={1080} priority unoptimized className="h-auto w-full" />
        </div>
        <p className="mt-3 text-sm">
          <Link href={`/#teardown-${d.id}`} className="font-medium text-[#9C2F55] underline underline-offset-2">Flip through the full slide deck</Link>
        </p>

        <section className="mt-10 space-y-3" aria-labelledby="summary">
          <h2 id="summary" className="font-display text-2xl font-semibold text-text-primary">The short version</h2>
          {d.summary.map((p) => <p key={p} className="leading-relaxed text-text-secondary">{p}</p>)}
        </section>

        <section className="mt-10" aria-labelledby="who">
          <h2 id="who" className="font-display text-2xl font-semibold text-text-primary">Who uses it (illustrative personas)</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {d.personas.map((p) => (
              <li key={p.name} className="rounded-2xl border border-black/5 bg-white/70 p-4">
                <p className="font-semibold text-text-primary">{p.name}</p>
                <p className="mt-2 text-sm text-text-secondary"><strong>Needs:</strong> {p.need}</p>
                <p className="mt-1 text-sm text-text-secondary"><strong>Pain:</strong> {p.pain}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="journeys">
          <h2 id="journeys" className="font-display text-2xl font-semibold text-text-primary">Where the journey breaks</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-black/10"><th className="py-2 pr-4">Moment</th><th className="py-2 pr-4">Pain point</th><th className="py-2">How it feels</th></tr></thead>
              <tbody>
                {d.journeys.map((j) => (
                  <tr key={j.moment} className="border-b border-black/5 align-top"><td className="py-2 pr-4 text-text-primary">{j.moment}</td><td className="py-2 pr-4 text-text-secondary">{j.pain}</td><td className="py-2 text-text-secondary">{j.feeling}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="build">
          <h2 id="build" className="font-display text-2xl font-semibold text-text-primary">What I would build</h2>
          <ol className="mt-4 space-y-4">
            {d.ideas.map((i, n) => (
              <li key={i.title} className="rounded-2xl border border-black/5 bg-white/70 p-4">
                <h3 className="font-semibold text-text-primary">{n + 1}. {i.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{i.what}</p>
                <p className="mt-1 text-sm text-text-secondary"><strong>Why:</strong> {i.why}</p>
                <p className="mt-1 text-sm text-text-secondary"><strong>Trade-off:</strong> {i.tradeoff}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10" aria-labelledby="measure">
          <h2 id="measure" className="font-display text-2xl font-semibold text-text-primary">How I would know it worked</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-text-secondary">{d.metrics.map((m) => <li key={m}>{m}</li>)}</ul>
        </section>

        <p className="mt-10 text-sm text-text-secondary">Sources: {d.sources.join(", ")}.</p>
        <p className="mt-4 text-sm">
          More: <Link href="/teardowns" className="underline underline-offset-2">all teardowns</Link> · <Link href="/case-studies" className="underline underline-offset-2">my own work (case studies)</Link>
        </p>
      </article>
    </main>
  );
}
