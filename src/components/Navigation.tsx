"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { PERSON } from "@/lib/site";

const cursiveFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

type NavItem = { name: string; href: string; children?: { name: string; href: string; note: string; highlight?: boolean }[] };

const navItems: NavItem[] = [
  { name: "About", href: "/#identity" },
  { name: "Teardowns", href: "/teardowns" },
  {
    name: "Product 101",
    href: "/insights",
    children: [
      { name: "Insights", href: "/insights", note: "Practical PM guides" },
      { name: "Search", href: "/expertise/search-product-management", note: "Search, ranking and relevance" },
      // TODO: swap "#" for the Udemy course URL once it is published.
      { name: "Udemy course", href: "#", note: "Coming soon", highlight: true },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out-expo flex justify-center ${
        scrolled ? "pt-4" : "pt-4 md:pt-5"
      }`}
    >
      <div 
        className={`relative flex items-center justify-between gap-8 px-6 md:px-8 transition-all duration-700 ease-out-expo ${
          scrolled 
            ? "w-[95%] lg:w-auto lg:min-w-[820px] py-3 bg-white/75 backdrop-blur-xl border border-[#F0AFC0]/45 rounded-full shadow-[0_14px_40px_rgba(232,111,147,0.12)]"
            : "w-full max-w-[1320px] py-3 bg-transparent border-transparent rounded-none"
        }`}
      >
        <Link href="/" className={`text-3xl md:text-4xl text-[#B83B67] hover:text-[#9C2F55] transition-colors ${cursiveFont.className} ${!scrolled && "drop-shadow-md"}`} aria-label="Shree Vaidya, home">
          Shree
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors duration-300 whitespace-nowrap hover:text-[#E86F93] group-focus-within:text-[#E86F93]"
                >
                  {item.name}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="w-64 rounded-2xl border border-[#F0AFC0]/45 bg-white/95 p-2 shadow-[0_14px_40px_rgba(232,111,147,0.15)] backdrop-blur-xl">
                    {item.children.map((c) => (
                      <li key={c.name}>
                        <Link
                          href={c.href}
                          className={c.highlight
                            ? "mt-1 block rounded-xl bg-[#F550B5] px-3 py-2.5 text-white shadow-[0_8px_20px_rgba(245,80,181,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-[#E93FA6]"
                            : "block rounded-xl px-3 py-2.5 hover:bg-[#FFF1EA]"}
                        >
                          <span className={`block text-sm font-semibold ${c.highlight ? "text-white" : "text-text-primary"}`}>{c.name}</span>
                          <span className={`block text-xs ${c.highlight ? "text-white/90" : "text-text-secondary"}`}>{c.note}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-[#E86F93] transition-colors duration-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ),
          )}
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-[#E86F93] transition-colors duration-300 flex items-center ml-2"
            aria-label="LinkedIn Profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex rounded-full border border-[#F0AFC0]/55 bg-[#FFF1EA] p-2.5 shadow-[0_10px_24px_rgba(232,111,147,0.10)] lg:hidden flex-col gap-1.5"
        >
          <div className="w-5 h-0.5 bg-[#9C2F55] rounded-full"></div>
          <div className="w-5 h-0.5 bg-[#9C2F55] rounded-full"></div>
        </button>

        {/* Progress Bar (visible only when scrolled), clipped to the pill shape */}
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${scrolled ? "rounded-full" : ""}`}>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FFD6C8] to-[#E86F93]"
            style={{ width: "100%", scaleX: scrollYProgress, transformOrigin: "left" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute top-full mt-2 w-[95%] rounded-2xl border border-[#F0AFC0]/45 bg-white/95 p-4 shadow-lg backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.name}>
                  <p className="px-3 pt-3 pb-1 font-mono text-[11px] uppercase tracking-widest text-text-secondary">{item.name}</p>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.name}>
                        <Link
                          href={c.href}
                          onClick={() => setMenuOpen(false)}
                          className={c.highlight
                            ? "mx-3 my-1 block rounded-lg bg-[#F550B5] px-3 py-2.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(245,80,181,0.35)]"
                            : "block rounded-lg px-6 py-2.5 text-base font-medium text-text-primary hover:bg-[#FFF1EA]"}
                        >
                          {c.name}{c.highlight ? <span className="ml-2 text-xs font-medium text-white/90">{c.note}</span> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-[#FFF1EA]"
                  >
                    {item.name}
                  </Link>
                </li>
              ),
            )}
            <li>
              <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="block rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-[#FFF1EA]">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
