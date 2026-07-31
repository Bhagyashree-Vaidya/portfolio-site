"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const cursiveFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Case Study", href: "/#work" },
  { name: "Projects", href: "/projects/pama" },
  { name: "Research", href: "/#achievements" },
  { name: "About", href: "/#identity" },
];

export default function Navigation() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

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
        className={`relative flex items-center justify-between gap-12 px-6 md:px-8 transition-all duration-700 ease-out-expo overflow-hidden ${
          scrolled 
            ? "w-[95%] md:w-auto md:min-w-[750px] py-3 bg-white/75 backdrop-blur-xl border border-[#F0AFC0]/45 rounded-full shadow-[0_14px_40px_rgba(232,111,147,0.12)]"
            : "w-[95%] md:w-auto md:min-w-[750px] py-3 bg-white/40 backdrop-blur-md border border-[#F0AFC0]/20 rounded-full shadow-sm"
        }`}
      >
        <Link href="/" className={`text-3xl md:text-4xl text-[#E86F93] hover:text-[#9C2F55] transition-colors ${cursiveFont.className}`}>
          Shree
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="flex rounded-full border border-[#F0AFC0]/55 bg-[#FFF1EA] p-2.5 shadow-[0_10px_24px_rgba(232,111,147,0.10)] md:hidden flex-col gap-1.5">
          <div className="w-5 h-0.5 bg-[#9C2F55] rounded-full"></div>
          <div className="w-5 h-0.5 bg-[#9C2F55] rounded-full"></div>
        </button>

        {/* Progress Bar (visible only when scrolled) */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FFD6C8] to-[#E86F93]"
          style={{ width: "100%", scaleX: scrollYProgress, transformOrigin: "left" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.header>
  );
}
