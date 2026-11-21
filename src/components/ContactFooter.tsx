import Image from "next/image";
import { PERSON, mailto } from "@/lib/site";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative z-10 w-full bg-bg-primary overflow-hidden">
      <div className="mx-auto w-full max-w-[1320px] px-6 pt-20 pb-10">
        <p className="text-sm font-mono uppercase tracking-widest text-text-secondary mb-2">Contact</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary">Get in touch.</h2>
        <p className="mt-4 max-w-[640px] text-base md:text-lg font-light leading-relaxed text-text-primary">
          Shree is open to Senior Product Manager, AI Product Manager and Technical Product Manager roles in
          search, personalization and e-commerce, in Seattle or hybrid/remote.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <a
              href={mailto("Hello from shreevaidya.com")}
              className="inline-block rounded-md bg-[#B83B67] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9C2F55]"
            >
              Email {PERSON.email}
            </a>
          </li>
          <li>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-[#B83B67] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#9C2F55] transition-colors hover:bg-white"
            >
              Message on LinkedIn
            </a>
          </li>
          <li>
            <a
              href={PERSON.resumePdf ?? mailto("Résumé request from shreevaidya.com")}
              className="inline-block rounded-md border border-[#B83B67] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#9C2F55] transition-colors hover:bg-white"
            >
              {PERSON.resumePdf ? "Download résumé (PDF)" : "Request résumé"}
            </a>
          </li>
          <li>
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-[#B83B67] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#9C2F55] transition-colors hover:bg-white"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <Image
        src="/images/Main.svg"
        alt=""
        aria-hidden="true"
        width={2400}
        height={883}
        unoptimized
        sizes="100vw"
        className="block h-auto w-full"
      />
    </footer>
  );
}
