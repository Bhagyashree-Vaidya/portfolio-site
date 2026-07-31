"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Section from "./Section";

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mock pagination for now
  const pages = [0, 1, 2, 3];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    // Calculate which item is most in view based on scroll position
    const scrollRatio = target.scrollTop / target.clientHeight;
    const index = Math.min(
      pages.length - 1,
      Math.max(0, Math.round(scrollRatio))
    );
    setActiveIndex(index);
  };

  return (
    <Section id="resume" className="!py-[20px]">
      <div className="mb-[20px]">
        <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Resume</h3>
        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">Experience.</h2>
      </div>
      <div className="w-full max-w-[1200px] mx-auto">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-[#F0AFC0]/40 p-5 md:px-8 mb-12 w-full rounded-2xl shadow-sm">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary tracking-tight">Resume</h2>
          <a 
            href="#"
            className="bg-[#E86F93] hover:bg-[#D65D82] text-white font-medium py-2.5 px-6 rounded-md shadow-[0_8px_20px_rgba(232,111,147,0.3)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(232,111,147,0.4)] hover:-translate-y-0.5"
          >
            Download PDF
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Left Column */}
          <div className="w-full lg:w-[35%] flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl text-text-primary border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-[#E86F93] to-transparent pointer-events-none"></div>
              <h3 className="text-2xl font-display font-semibold mb-2 relative z-10 text-text-primary">Bhagyashree Vaidya</h3>
              <p className="text-[#E86F93] text-sm font-medium mb-2 leading-relaxed relative z-10">
                Senior Product Manager | AI Personalization & Recommendation Systems | Bayesian A/B Testing | Product Analytics | Driving Growth via Behavioral Data | MSIM (Product & AI) @ UW '26
              </p>
            </div>

            <div className="px-2 font-medium flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                Linkedin <span className="text-xl">↗</span>
              </a>
              <a href="#" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                Git link <span className="text-xl">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[65%] flex gap-4 md:gap-8 items-start">
            {/* Scrollable Box */}
            <div 
              ref={containerRef}
              onScroll={handleScroll}
              className="flex-1 h-[600px] border-[6px] border-[#F0AFC0]/60 rounded-[2.5rem] overflow-y-auto bg-white/40 backdrop-blur-md px-8 md:px-12 shadow-sm relative scroll-smooth no-scrollbar snap-y snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex flex-col">
                {/* Placeholder Entry 1 */}
                <div className="w-full h-[600px] shrink-0 snap-start snap-always flex flex-col justify-center gap-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-gray-200 pb-4">
                    <h4 className="text-2xl font-display font-semibold text-text-primary">Placeholder Role Title</h4>
                    <span className="font-mono text-sm text-text-tertiary">Jan 2025 - Present</span>
                  </div>
                  <h5 className="text-[#E86F93] font-medium font-mono text-sm uppercase tracking-widest mt-2">Company Name</h5>
                  <ul className="list-disc list-inside space-y-3 text-text-secondary leading-relaxed font-light mt-4">
                    <li>This is a placeholder bullet point describing a key achievement or responsibility.</li>
                    <li>Another bullet point detailing specific technologies used or metrics moved during this role.</li>
                    <li>A third bullet point to show how a multi-line description looks in the layout when text wraps.</li>
                  </ul>
                </div>

                {/* Placeholder Entry 2 */}
                <div className="w-full h-[600px] shrink-0 snap-start snap-always flex flex-col justify-center gap-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-gray-200 pb-4">
                    <h4 className="text-2xl font-display font-semibold text-text-primary">Previous Role Title</h4>
                    <span className="font-mono text-sm text-text-tertiary">Mar 2023 - Dec 2024</span>
                  </div>
                  <h5 className="text-[#E86F93] font-medium font-mono text-sm uppercase tracking-widest mt-2">Previous Company</h5>
                  <ul className="list-disc list-inside space-y-3 text-text-secondary leading-relaxed font-light mt-4">
                    <li>This is a placeholder bullet point describing a key achievement or responsibility.</li>
                    <li>Another bullet point detailing specific technologies used or metrics moved during this role.</li>
                  </ul>
                </div>

                {/* Placeholder Entry 3 */}
                <div className="w-full h-[600px] shrink-0 snap-start snap-always flex flex-col justify-center gap-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-gray-200 pb-4">
                    <h4 className="text-2xl font-display font-semibold text-text-primary">Earlier Role Title</h4>
                    <span className="font-mono text-sm text-text-tertiary">Jun 2020 - Feb 2023</span>
                  </div>
                  <h5 className="text-[#E86F93] font-medium font-mono text-sm uppercase tracking-widest mt-2">Earlier Company</h5>
                  <ul className="list-disc list-inside space-y-3 text-text-secondary leading-relaxed font-light mt-4">
                    <li>This is a placeholder bullet point describing a key achievement or responsibility.</li>
                    <li>Another bullet point detailing specific technologies used or metrics moved during this role.</li>
                    <li>A third bullet point to show how a multi-line description looks in the layout when text wraps.</li>
                  </ul>
                </div>

                {/* Placeholder Entry 4 */}
                <div className="w-full h-[600px] shrink-0 snap-start snap-always flex flex-col justify-center gap-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-gray-200 pb-4">
                    <h4 className="text-2xl font-display font-semibold text-text-primary">First Role Title</h4>
                    <span className="font-mono text-sm text-text-tertiary">Aug 2018 - May 2020</span>
                  </div>
                  <h5 className="text-[#E86F93] font-medium font-mono text-sm uppercase tracking-widest mt-2">First Company</h5>
                  <ul className="list-disc list-inside space-y-3 text-text-secondary leading-relaxed font-light mt-4">
                    <li>This is a placeholder bullet point describing a key achievement or responsibility.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex flex-col items-center justify-center gap-5 py-12 sticky top-1/3">
              {pages.map((page, idx) => {
                const isActive = activeIndex === idx;
                const distance = Math.abs(activeIndex - idx);
                
                // Calculate size based on distance from active index
                let sizeClass = "w-3 h-3"; // Default small
                if (isActive) sizeClass = "w-5 h-5"; // Active large
                else if (distance === 1) sizeClass = "w-4 h-4"; // Adjacent medium

                return (
                  <motion.div
                    key={idx}
                    animate={{
                      backgroundColor: isActive ? "#E86F93" : "#D1D5DB",
                    }}
                    className={`${sizeClass} rounded-full cursor-pointer transition-all duration-300 shadow-sm`}
                    onClick={() => {
                      if (containerRef.current) {
                        const targetScroll = idx * containerRef.current.clientHeight;
                        containerRef.current.scrollTo({ top: targetScroll, behavior: 'smooth' });
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
