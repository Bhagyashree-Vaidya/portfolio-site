import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_LABEL, postPath, publishedPosts } from "@/content/blog";
import { SITE_URL, jsonLdString } from "@/lib/site";

// Re-check hourly so scheduled posts appear on their publish date without a redeploy.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog: Product Problems, Worked Through",
  description:
    "Short posts from Shree Vaidya on real product problems: AI agents, search and ranking, checkout, onboarding, and what M&A deals mean for the product teams inside them.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: "Blog | Shree Vaidya" },
};

const fmt = (d: string) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export default function BlogIndex() {
  const posts = publishedPosts();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Shree Vaidya's blog",
    author: { "@id": `${SITE_URL}/#person` },
    blogPost: posts.slice(0, 30).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}${postPath(p)}`,
      datePublished: p.date,
    })),
  };
  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <div className="mx-auto w-full max-w-[860px] px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-secondary">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[#9C2F55]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-text-primary">Blog</li>
          </ol>
        </nav>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Blog</h1>
        <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-text-secondary">
          Short posts on product problems I have run into, and how I would work through them: the customer, the
          business, the tech, and the trade-offs. Plus what big acquisitions mean for the product teams inside them.
        </p>
        {posts.length === 0 ? (
          <p className="mt-12 text-text-secondary">The first post goes up soon.</p>
        ) : (
          <ol className="mt-12 divide-y divide-border-primary border-y border-border-primary">
            {posts.map((p) => (
              <li key={p.slug} className="py-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#9C2F55]">
                  {CATEGORY_LABEL[p.category]} · <time dateTime={p.date}>{fmt(p.date)}</time>
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text-primary">
                  <Link href={postPath(p)} className="hover:text-[#9C2F55]">{p.title}</Link>
                </h2>
                <p className="mt-2 text-text-secondary">{p.description}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
}
