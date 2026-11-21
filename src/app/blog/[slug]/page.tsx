import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichText from "@/components/content/RichText";
import { CATEGORY_LABEL, getPost, isPublished, postPath, publishedPosts } from "@/content/blog";
import { PERSON, SITE_URL, jsonLdString, mailto } from "@/lib/site";

// Posts published by build time are prerendered. Later ones render on first
// request after their date (dynamicParams) and are cached for an hour.
export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post || !isPublished(post)) return {};
  const path = postPath(post);
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: post.metaTitle, description: post.description, publishedTime: post.date },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.description },
  };
}

const fmt = (d: string) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post || !isPublished(post)) notFound();

  const url = `${SITE_URL}${postPath(post)}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en-US",
        keywords: post.tags.join(", "),
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
        image: `${SITE_URL}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  const recent = publishedPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="w-full bg-bg-primary pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <article className="mx-auto w-full max-w-[720px] px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-secondary">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[#9C2F55]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-[#9C2F55]">Blog</Link></li>
          </ol>
        </nav>
        <p className="font-mono text-xs uppercase tracking-widest text-[#9C2F55]">{CATEGORY_LABEL[post.category]}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-4xl">{post.title}</h1>
        <p className="mt-4 text-sm text-text-secondary">
          By <Link href="/#identity" className="underline underline-offset-2">{PERSON.displayName}</Link> ·{" "}
          <time dateTime={post.date}>{fmt(post.date)}</time>
        </p>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-primary">
          {post.body.map((para, i) => (
            <p key={i}><RichText text={para} /></p>
          ))}
        </div>

        {post.sources?.length ? (
          <section aria-labelledby="sources-h" className="mt-10">
            <h2 id="sources-h" className="font-display text-lg font-semibold text-text-primary">Sources</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-text-secondary">
              {post.sources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#9C2F55] underline underline-offset-2">{s.label}</a></li>
              ))}
            </ul>
          </section>
        ) : null}

        {post.related?.length ? (
          <section aria-labelledby="related-h" className="mt-10">
            <h2 id="related-h" className="font-display text-lg font-semibold text-text-primary">Related on this site</h2>
            <ul className="mt-2 space-y-1">
              {post.related.map((r) => (
                <li key={r.href}><Link href={r.href} className="text-[#9C2F55] underline underline-offset-2">{r.label}</Link></li>
              ))}
            </ul>
          </section>
        ) : null}

        <aside className="mt-12 rounded-2xl bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] p-6">
          <p className="text-text-primary">
            I&apos;m a Senior Product Manager working on AI agents, search and e-commerce.{" "}
            <a href={mailto(`About: ${post.title}`)} className="text-[#9C2F55] underline underline-offset-2">Email me</a> or{" "}
            <Link href="/case-studies" className="text-[#9C2F55] underline underline-offset-2">read my case studies</Link>.
          </p>
        </aside>

        {recent.length ? (
          <section aria-labelledby="more-h" className="mt-12 border-t border-border-primary pt-8">
            <h2 id="more-h" className="font-display text-lg font-semibold text-text-primary">More posts</h2>
            <ul className="mt-3 space-y-2">
              {recent.map((p) => (
                <li key={p.slug}><Link href={postPath(p)} className="text-[#9C2F55] underline underline-offset-2">{p.title}</Link></li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </main>
  );
}
