"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SHORT_BIO } from "@/lib/site";

export default function Identity() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-24, 24]);
  const personY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [42, -54]);
  const personScale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.985, 1.025, 1]);

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="relative z-10 min-h-screen w-full overflow-hidden border-t border-border-primary/50 bg-bg-primary"
    >
      <motion.div className="absolute inset-[-4%]" style={{ y: backgroundY }}>
        <Image
          src="/images/intro-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
      </motion.div>

      <div className="relative z-20 mx-auto grid w-full max-w-[1540px] gap-8 px-6 pt-[120px] pb-12 md:grid-cols-12 md:gap-4 lg:px-10">
        
        {/* Title row (spans across the top) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 col-span-full mb-[20px]"
        >
          <h1 className="mb-3 font-mono text-sm uppercase tracking-widest text-text-secondary">
            Bhagyashree (Shree) Vaidya · Senior Product Manager, AI &amp; Search · Seattle, WA
          </h1>
          <h2 className="text-3xl font-display font-medium leading-[1.1] tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] relative z-30 w-full max-w-none md:whitespace-nowrap">
            I move customer <br />
            intent into <br />
            purchase decisions.
          </h2>
        </motion.div>

        {/* Paragraph row (left side) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative z-20 max-w-[640px] md:col-span-5 self-start pt-2"
        >
          <p className="max-w-[620px] text-sm font-light leading-relaxed text-text-primary sm:text-base md:text-lg lg:text-xl">
            {SHORT_BIO}
          </p>
          <p className="mt-4 max-w-[620px] text-sm font-light leading-relaxed text-text-primary sm:text-base md:text-lg">
            Before writing a roadmap, she asks a simple question: is this actually the problem worth solving? She works with customers, engineering teams and business leaders to separate feature requests from real opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 pointer-events-auto">
            <a
              href="#contact"
              className="rounded-md bg-[#B83B67] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#9C2F55]"
            >
              Contact Shree
            </a>
            <a
              href="#resume"
              className="rounded-md border border-[#B83B67] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#9C2F55] transition-colors hover:bg-white"
            >
              View experience
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative z-10 min-h-[520px] w-full overflow-visible md:col-span-7 md:min-h-[780px] lg:min-h-[880px] xl:min-h-[960px] md:-mt-32 lg:-mt-48 xl:-mt-64 pointer-events-none"
        >
          <motion.div className="absolute inset-0 will-change-transform" style={{ y: personY, scale: personScale }}>
            <Image
              src="/images/manager.webp"
              alt="Shree Vaidya, Product Manager, with a speech bubble that reads: I hate seeing customers settle for the wrong product simply because we made the right one too hard to find."
              fill
              priority
              unoptimized
              sizes="(min-width: 1280px) 58vw, (min-width: 768px) 56vw, 96vw"
              className="object-contain object-bottom md:object-right-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
