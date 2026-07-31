"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children,
  className = ""
}: { 
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-32 md:py-48 w-full max-w-[1320px] mx-auto px-6 ${className}`}>
      <div className="relative z-20">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 md:mb-32"
          >
            {subtitle && (
              <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">
                {subtitle}
              </h3>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
}
