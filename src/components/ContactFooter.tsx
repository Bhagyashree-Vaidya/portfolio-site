import Image from "next/image";
import Link from "next/link";
import { PERSON, mailto } from "@/lib/site";

const linkCls = "hover:text-[#9C2F55] hover:underline underline-offset-2";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative z-10 w-full overflow-hidden bg-bg-primary">
      {/* The paper-cut campus stays fully visible; the card sits in the sky. */}
      <div className="relative mx-auto w-full max-w-[1320px] px-4 pt-12 pb-8 sm:px-6 md:pt-16 md:pb-10">
        <div className="relative z-10 rounded-[24px] bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.15)] backdrop-blur-md sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div>
              <h2 className="text-3xl font-display font-bold tracking-tight text-text-primary md:text-4xl">Get in touch.</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-primary md:text-base">
                Open to Senior PM, AI PM and Technical PM roles in search, personalization and e-commerce. On-site, hybrid or remote, and open to relocation.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li>
                  <a href={mailto("Hello from shreevaidya.com")} className="inline-block rounded-md bg-[#B83B67] px-4 py-2 text-sm font-medium text-white hover:bg-[#9C2F55]">
                    Email me
                  </a>
                </li>
                <li>
                  <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md border border-[#B83B67] bg-white px-4 py-2 text-sm font-medium text-[#9C2F55] hover:bg-[#FFF1EA]">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={PERSON.resumePdf ?? mailto("Résumé request from shreevaidya.com")} className="inline-block rounded-md border border-[#B83B67] bg-white px-4 py-2 text-sm font-medium text-[#9C2F55] hover:bg-[#FFF1EA]">
                    Résumé (PDF)
                  </a>
                </li>
                <li>
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md border border-[#B83B67] bg-white px-4 py-2 text-sm font-medium text-[#9C2F55] hover:bg-[#FFF1EA]">
                    GitHub
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-xs text-text-secondary">{PERSON.email}</p>
            </div>
            <nav aria-label="Site" className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-3">
              <div>
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-text-secondary">Work</p>
                <ul className="space-y-1">
                  <li><Link href="/#resume" className={linkCls}>Experience</Link></li>
                  <li><Link href="/case-studies" className={linkCls}>Case studies</Link></li>
                  <li><Link href="/resume" className={linkCls}>Résumé (text)</Link></li>
                  <li><Link href="/projects/pama" className={linkCls}>PAMA project</Link></li>
                </ul>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-text-secondary">Expertise</p>
                <ul className="space-y-1">
                  <li><Link href="/expertise" className={linkCls}>All expertise</Link></li>
                  <li><Link href="/expertise/ai-product-management" className={linkCls}>AI product</Link></li>
                  <li><Link href="/expertise/search-product-management" className={linkCls}>Search</Link></li>
                  <li><Link href="/expertise/ecommerce-omnichannel-product-management" className={linkCls}>E-commerce</Link></li>
                </ul>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-text-secondary">Writing</p>
                <ul className="space-y-1">
                  <li><Link href="/insights" className={linkCls}>Insights</Link></li>
                  <li><Link href="/blog" className={linkCls}>Blog</Link></li>
                  <li><Link href="/teardowns" className={linkCls}>Teardowns</Link></li>
                  <li><Link href="/research/confirmation-bias-ai" className={linkCls}>Research</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Image
        src="/images/footer-landscape.webp"
        alt="Paper-cut illustration of a university campus with cherry blossoms"
        width={2400}
        height={1339}
        unoptimized
        loading="lazy"
        sizes="100vw"
        className="relative block h-auto w-full"
      />
      <p className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
        © 2026 {PERSON.displayName}.
      </p>
    </footer>
  );
}
