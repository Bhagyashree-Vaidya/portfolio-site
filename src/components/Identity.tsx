"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
          className="object-cover object-center"
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
          <div className="mb-2 font-mono text-sm uppercase tracking-widest text-text-tertiary">
            About
          </div>
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
            Shree spent her career building products that influence what customers discover, compare, and ultimately choose, from enterprise retail, healthcare, debt collection, and space industry. Her work spans search, merchandising, personalization, experimentation, and behavioral analytics, but she's known for asking a simpler question before writing a roadmap: Is this actually the problem worth solving? She enjoys working with customers, engineering teams, and business leaders to separate feature requests from real opportunities, helping organizations invest where customer value and business impact intersect.
          </p>
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
              src="/images/manager-v2.png"
              alt="Bhagyashree Vaidya"
              fill
              priority
              sizes="(min-width: 1280px) 58vw, (min-width: 768px) 56vw, 96vw"
              className="object-contain object-bottom md:object-right-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
