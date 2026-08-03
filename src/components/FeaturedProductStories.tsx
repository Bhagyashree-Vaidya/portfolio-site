"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";

const projects = [
  { title: "HBCU Digital Equity", video: "/videos/projects/HBCU.webm" },
  { title: "Starlink Spectrogram Tool" },
  { title: "Neighborhood Care Exchange" },
  { title: "OwnerView" },
  { title: "SpinFlix" },
  { title: "The Great Courtroom" },
  { title: "Wooshippy" },
];

export default function FeaturedProductStories() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Section id="work" className="!py-[20px] mt-[10vh]">
      <div className="mb-[20px]">
        <h3 className="text-sm md:text-base font-medium uppercase tracking-widest text-text-secondary mb-2">Product Stories</h3>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Featured Work.</h2>
      </div>

      <div className="w-full max-w-[1320px] mx-auto mt-8 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Pagination + Image Box */}
        <div className="w-full lg:w-[55%] flex gap-4 md:gap-8 sticky top-32">
          {/* Pagination Dots */}
          <div className="flex flex-col items-center gap-5 py-12 shrink-0">
            {projects.map((_, idx) => {
              const isActive = expandedIndex === idx;
              const distance = expandedIndex !== null ? Math.abs(expandedIndex - idx) : 3;
              
              let sizeClass = "w-3 h-3"; 
              if (isActive) sizeClass = "w-6 h-6"; 
              else if (distance === 1) sizeClass = "w-4 h-4"; 

              return (
                <motion.div
                  key={idx}
                  animate={{
                    backgroundColor: isActive ? "#E86F93" : "#D1D5DB",
                  }}
                  className={`${sizeClass} rounded-full cursor-pointer transition-all duration-300 shadow-sm`}
                  onClick={() => setExpandedIndex(idx)}
                />
              );
            })}
          </div>

          {/* Image Container wrapper to hold the lamp */}
          <div className="flex-1 relative">
            <div className="w-full h-[450px] md:h-[550px] border-[6px] border-[#F0AFC0]/80 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-sm relative overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-white"
                >
                  {expandedIndex !== null && projects[expandedIndex]?.video ? (
                    <video 
                      src={projects[expandedIndex].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-[1.15]"
                    />
                  ) : (
                    <span className="text-text-muted font-mono text-sm uppercase tracking-widest relative z-10 font-semibold text-[#E86F93]/60">Image Placeholder</span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Lamp floating on the right edge */}
            <div className="absolute -right-6 md:-right-12 -bottom-12 w-20 md:w-32 h-[450px] md:h-[550px] z-20 pointer-events-none">
              <Image 
                src="/images/hero-parallax/lampglow.svg" 
                alt="Decorative Lamp Glow" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full lg:w-[45%] flex flex-col pt-4 pb-8 px-6 md:px-10 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-sm relative z-10">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div 
                key={idx}
                className="group"
              >
                <button 
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="flex w-full items-center justify-between py-5 text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <h3 className={`text-base md:text-lg font-normal uppercase tracking-wide transition-colors duration-300 ${isExpanded ? 'text-[#E86F93]' : 'text-[#E86F93]/50 group-hover:text-[#E86F93]'}`}>
                      {project.title}
                    </h3>
                  </div>
                  <div className={`text-[#E86F93] transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 flex flex-col space-y-6">
                        <p className="text-base text-text-secondary font-light leading-relaxed">
                          This is a placeholder description for <strong>{project.title}</strong>. We will fill this in with the actual product story, metrics, and case study details later.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="rounded-full border border-[#F0AFC0]/40 bg-white/50 px-4 py-1.5 text-xs font-mono text-[#E86F93]">METRIC 1 PLACEHOLDER</span>
                          <span className="rounded-full border border-[#F0AFC0]/40 bg-white/50 px-4 py-1.5 text-xs font-mono text-[#E86F93]">METRIC 2 PLACEHOLDER</span>
                        </div>
                        <button className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-[#E86F93] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#D65D82]">
                          Explore Case Study →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
