import type { Metadata } from "next";
import Link from "next/link";
import { TEARDOWNS } from "@/content/teardowns";
import { DECKS } from "@/content/teardowns/decks";

export const metadata: Metadata = {
  title: "Product Teardowns: Spotify, Airbnb, Amazon and More",
  description:
    "Independent product teardowns by Shree Vaidya: who uses each product, where the journey breaks, and what she would build and measure next.",
  alternates: { canonical: "/teardowns" },
};

export default function TeardownsIndex() {
  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Product teardowns</h1>
        <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-text-secondary">
          Independent teardowns of products I use but haven&apos;t worked on: who uses them, where the journey breaks, and
          what I&apos;d build and measure. For my own work, see the{" "}
          <Link href="/case-studies" className="text-[#9C2F55] underline underline-offset-2">case studies</Link>.
        </p>
        <h2 className="mt-12 font-display text-2xl font-semibold text-text-primary">Slide-deck teardowns</h2>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DECKS.map((d) => (
            <li key={d.id}>
              <Link href={`/teardowns/decks/${d.id}`} className="block h-full overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition-transform hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/case-studies/${d.id}/slide-1.jpg`} alt={`${d.title}, cover slide`} loading="lazy" className="aspect-video w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: d.accent }}>{d.company}</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-text-primary">{d.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-14 font-display text-2xl font-semibold text-text-primary">Written teardowns</h2>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEARDOWNS.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/teardowns/${t.slug}`}
                className="block h-full rounded-[28px] p-6 shadow-[8px_10px_20px_rgba(0,0,0,0.15),inset_-5px_-5px_10px_rgba(0,0,0,0.15),inset_5px_5px_10px_rgba(255,255,255,0.15)] transition-transform hover:-translate-y-1"
                style={{ background: t.brand.bg, color: t.brand.ink }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider opacity-90">{t.product}</p>
                <h2 className="mt-2 text-xl font-bold leading-snug">{t.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
