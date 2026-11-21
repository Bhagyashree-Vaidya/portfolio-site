import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import RichText from "@/components/content/RichText";
import { TEARDOWNS, getTeardown } from "@/content/teardowns";
import { PERSON, SITE_URL, jsonLdString } from "@/lib/site";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

// Four colors only: the brand color, navy, white, and a warm yellow accent.
const NAVY = "#1F2540";
const YELLOW = "#F5C542";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return TEARDOWNS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTeardown((await params).slug);
  if (!t) return {};
  const path = `/teardowns/${t.slug}`;
  return {
    title: t.metaTitle,
    description: t.description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: t.metaTitle, description: t.description },
  };
}

function Ribbon({ children, ink }: { children: React.ReactNode; ink: string }) {
  // Arrow-shaped section label, like the Zomato deck.
  return (
    <h2
      className="inline-block py-2 pl-5 pr-10 text-sm font-bold uppercase tracking-wider"
      style={{
        background: ink === "#FFFFFF" ? "rgba(255,255,255,0.18)" : "rgba(31,37,64,0.12)",
        color: ink,
        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
      }}
    >
      {children}
    </h2>
  );
}

const clay =
  "rounded-[28px] p-6 md:p-7 shadow-[10px_12px_24px_rgba(0,0,0,0.22),inset_-6px_-6px_12px_rgba(0,0,0,0.25),inset_6px_6px_12px_rgba(255,255,255,0.08)]";

function Step({ n, ink }: { n: number; ink: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.18),3px_4px_8px_rgba(0,0,0,0.2)]"
      style={{ background: YELLOW, color: NAVY }}
    >
      {n}
    </span>
  );
}

export default async function TeardownPage({ params }: Props) {
  const t = getTeardown((await params).slug);
  if (!t) notFound();
  const ink = t.brand.ink;
  const url = `${SITE_URL}/teardowns/${t.slug}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: t.title,
        description: t.description,
        url,
        datePublished: t.date,
        dateModified: t.date,
        author: { "@id": `${SITE_URL}/#person` },
        about: { "@type": "Organization", name: t.company },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Product teardowns", item: `${SITE_URL}/teardowns` },
          { "@type": "ListItem", position: 3, name: t.title, item: url },
        ],
      },
    ],
  };
  const sections = ["About", "Who uses it", "Journeys", "What I'd build", "How I'd measure it"];

  return (
    <main className="w-full bg-bg-primary pt-20">
      <div className={`${poppins.className} w-full pt-10 pb-20`} style={{ background: t.brand.bg, color: ink }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-90">
          <Link href="/" className="underline-offset-2 hover:underline">Home</Link>
          {" / "}
          <Link href="/teardowns" className="underline-offset-2 hover:underline">Product teardowns</Link>
        </nav>

        <header className={`${clay} mb-10`} style={{ background: NAVY, color: "#FFFFFF" }}>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: YELLOW }}>
            Product teardown · {t.product}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">{t.title}</h1>
          <p className="mt-4 max-w-[62ch] text-base leading-[1.7] opacity-90">{t.description}</p>
          <p className="mt-4 text-sm opacity-75">
            By {PERSON.displayName}. An independent teardown from public information; I have not worked at {t.company}.
          </p>
          <ol className="mt-6 flex flex-wrap gap-3" aria-label="Sections">
            {sections.map((s, i) => (
              <li key={s} className="flex items-center gap-2 text-sm">
                <Step n={i + 1} ink={ink} /> <span>{s}</span>
              </li>
            ))}
          </ol>
        </header>

        <section aria-label="About" className="mb-12 space-y-5">
          <Ribbon ink={ink}>About {t.company}</Ribbon>
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-base leading-[1.75] md:text-lg">
              {t.about.map((p, i) => <p key={i}><RichText text={p} /></p>)}
            </div>
            <div className={clay} style={{ background: NAVY, color: "#FFFFFF" }}>
              <ul className="space-y-3">
                {t.facts.map((f) => (
                  <li key={f.label} className="leading-snug">
                    <span className="font-semibold">{f.label}:</span>{" "}
                    <span style={{ color: YELLOW }} className="font-semibold">{f.value}</span>
                    <span className="block text-xs opacity-70">Source: {f.source}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-label="Who uses it" className="mb-12 space-y-5">
          <Ribbon ink={ink}>Who uses it (illustrative personas)</Ribbon>
          <div className="grid gap-6 md:grid-cols-2">
            {t.personas.map((p) => (
              <div key={p.name} className={clay} style={{ background: NAVY, color: "#FFFFFF" }}>
                <div className="flex items-center gap-4">
                  <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold" style={{ background: YELLOW, color: NAVY }}>
                    {p.name[0]}
                  </span>
                  <div>
                    <p className="text-lg font-semibold">{p.name}, {p.age}</p>
                    <p className="text-sm opacity-80">{p.who}</p>
                  </div>
                </div>
                <p className="mt-4 leading-[1.7]"><span className="font-semibold">Goal:</span> {p.goal}</p>
                <p className="mt-2 leading-[1.7]"><span className="font-semibold">Frustration:</span> {p.frustration}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Journeys" className="mb-12 space-y-5">
          <Ribbon ink={ink}>Journeys, pain points and emotions</Ribbon>
          <div className="grid gap-6 md:grid-cols-3">
            {t.journeys.map((j) => (
              <div key={j.name} className={clay} style={{ background: NAVY, color: "#FFFFFF" }}>
                <h3 className="text-lg font-semibold" style={{ color: YELLOW }}>{j.name}</h3>
                <p className="mt-3 leading-[1.7]"><span className="font-semibold">User journey:</span> {j.journey}</p>
                <p className="mt-2 leading-[1.7]"><span className="font-semibold">Pain point:</span> {j.painpoint}</p>
                <p className="mt-2 leading-[1.7]"><span className="font-semibold">Emotion:</span> {j.emotion}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="What I'd build" className="mb-12 space-y-5">
          <Ribbon ink={ink}>What I&apos;d build or test</Ribbon>
          <ol className="space-y-6">
            {t.ideas.map((idea, i) => (
              <li key={idea.title} className={`${clay} flex gap-4`} style={{ background: NAVY, color: "#FFFFFF" }}>
                <Step n={i + 1} ink={ink} />
                <div>
                  <h3 className="text-lg font-semibold">{idea.title}</h3>
                  <p className="mt-2 leading-[1.7]"><span className="font-semibold">What:</span> {idea.what}</p>
                  <p className="mt-2 leading-[1.7]"><span className="font-semibold">Why:</span> {idea.why}</p>
                  <p className="mt-2 leading-[1.7]"><span className="font-semibold">Trade-off:</span> {idea.tradeoff}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-label="How I'd measure it" className="mb-12 space-y-5">
          <Ribbon ink={ink}>How I&apos;d know it worked</Ribbon>
          <ul className={`${clay} space-y-2 list-disc pl-10`} style={{ background: NAVY, color: "#FFFFFF" }}>
            {t.metrics.map((m) => <li key={m} className="leading-[1.7]">{m}</li>)}
          </ul>
        </section>

        <section aria-label="Sources" className="space-y-3 text-sm">
          <h2 className="font-semibold">Sources</h2>
          <ul className="list-disc space-y-1 pl-6">
            {t.sources.map((s) => (
              <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{s.label}</a></li>
            ))}
          </ul>
          <p className="pt-4">
            More: <Link href="/teardowns" className="underline underline-offset-2">all teardowns</Link> ·{" "}
            <Link href="/case-studies" className="underline underline-offset-2">my own work (case studies)</Link>
          </p>
        </section>
      </div>
      </div>
    </main>
  );
}
