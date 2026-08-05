"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { caseStudiesData, CaseStudy, Slide } from "./caseStudiesData";

export default function InteractiveCaseStudies() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(caseStudiesData[0].id);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const activeCaseStudy = useMemo(
    () => caseStudiesData.find((c) => c.id === activeCaseStudyId) || caseStudiesData[0],
    [activeCaseStudyId]
  );

  const activeSlide = activeCaseStudy.slides[activeSlideIndex] || activeCaseStudy.slides[0];
  const accentColor = activeCaseStudy.accentColor;

  // Reset slide index when case study changes
  useEffect(() => {
    setActiveSlideIndex(0);
  }, [activeCaseStudyId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveSlideIndex((prev) => Math.min(prev + 1, activeCaseStudy.slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        setActiveSlideIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCaseStudy.slides.length]);

  return (
    <section 
      id="case-studies"
      className="relative w-full h-[100vh] min-h-[900px] overflow-hidden bg-transparent text-[#111111]"
      style={{ "--accent": accentColor } as React.CSSProperties}
    >
      <div className="mx-auto w-full max-w-[1600px] h-full flex flex-col pt-8 pb-6 px-16">
        
        {/* 1. Product Selector */}
        <nav className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar shrink-0">
          {caseStudiesData.map((study) => {
            const isActive = activeCaseStudyId === study.id;
            return (
              <button
                key={study.id}
                onClick={() => {
                  setActiveCaseStudyId(study.id);
                  setActiveSlideIndex(0);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 relative ${
                  isActive 
                    ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] text-[#111111] font-medium scale-105" 
                    : "text-[#666666] hover:bg-black/5"
                }`}
              >
                <span className="text-lg">{study.logo}</span>
                <span className="text-sm">{study.name}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-6 right-6 h-[2px]"
                    style={{ backgroundColor: accentColor }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Middle Area: Browser & Right Panel */}
        <div className="flex gap-8 flex-1 min-h-0 mb-6 relative">
          
          {/* 2 & 3. Main Browser Window */}
          <div className="flex-[3] relative flex flex-col min-w-0 bg-white rounded-[28px] overflow-hidden border border-black/5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_40px_80px_rgba(15,23,42,0.12)]">
            {/* Browser Toolbar */}
            <div className="h-12 border-b border-black/5 flex items-center px-4 shrink-0 bg-white z-10 relative">
              <div className="flex gap-2 mr-auto">
                <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
                <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
                <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
              </div>
              <div className="text-xs font-mono text-[#666666] tracking-wider absolute left-1/2 -translate-x-1/2">
                {activeCaseStudy.name.toLowerCase()}.app
              </div>
            </div>

            {/* Current Slide */}
            <div className="flex-1 relative bg-[#F5F5F5] overflow-hidden flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCaseStudyId}-${activeSlide.id}`}
                  initial={{ opacity: 0, scale: 0.985, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.985, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full max-h-[640px] flex items-center justify-center"
                >
                  {activeSlide.imageSrc ? (
                    <Image
                      src={activeSlide.imageSrc}
                      alt={activeSlide.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  ) : (
                    <div 
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-12 text-center rounded-[16px]"
                      style={{ backgroundColor: `${accentColor}10` }}
                    >
                      <span className="text-6xl mb-6">{activeCaseStudy.logo}</span>
                      <h2 className="text-4xl font-display font-medium mb-4" style={{ color: accentColor }}>
                        {activeSlide.title}
                      </h2>
                      {activeSlide.context && (
                        <p className="text-lg text-[#666666] max-w-lg">
                          {activeSlide.context.description}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 4, 5, 6, 7. Right Panel */}
          <div className="flex-[1] flex flex-col gap-6 overflow-y-auto no-scrollbar pb-4 pr-2">
            
            {/* 7. Page Navigator */}
            <div className="bg-white/40 backdrop-blur-md rounded-[24px] p-6 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] shrink-0">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#666666] mb-4">On this page</h3>
              <ul className="flex flex-col gap-1 relative">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/5 rounded-full" 
                />
                
                {activeCaseStudy.slides.map((slide, idx) => {
                  const isActive = idx === activeSlideIndex;
                  return (
                    <li key={slide.id} className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full z-10"
                          style={{ backgroundColor: accentColor }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <button
                        onClick={() => setActiveSlideIndex(idx)}
                        className={`w-full text-left py-2 px-4 rounded-lg flex gap-3 items-center transition-colors duration-200 ${
                          isActive ? "font-medium" : "text-[#666666] hover:bg-black/5"
                        }`}
                        style={{
                          backgroundColor: isActive ? `${accentColor}10` : 'transparent',
                          color: isActive ? accentColor : undefined
                        }}
                      >
                        <span className="text-xs font-mono opacity-50">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm">{slide.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>



            {/* 4. Context Panel */}
            <AnimatePresence mode="wait">
              {activeSlide.context && (
                <motion.div
                  key={`context-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/40 backdrop-blur-md rounded-[24px] p-6 border border-white/40 shadow-[0_4px_12px_rgba(15,23,42,0.04)] shrink-0"
                >
                  <h3 className="text-lg font-medium mb-2">{activeSlide.context.heading}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {activeSlide.context.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 5. Metrics Row */}
            <AnimatePresence mode="wait">
              {activeSlide.metrics && (
                <motion.div
                  key={`metrics-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-3 shrink-0"
                >
                  {activeSlide.metrics.map((m, i) => (
                    <div key={i} className="bg-white/40 backdrop-blur-md rounded-[18px] p-4 border border-white/40 shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex flex-col justify-center">
                      <div className="text-xl font-medium" style={{ color: accentColor }}>{m.value}</div>
                      <div className="text-xs text-[#666666] mt-1">{m.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* 6. CTA */}
            <AnimatePresence mode="wait">
              {activeSlide.cta && (
                <motion.div
                  key={`cta-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 mt-auto shrink-0 pt-4"
                >
                  {activeSlide.cta.map((c, i) => (
                    <a
                      key={i}
                      href={c.url}
                      className={`block w-full py-3 px-4 rounded-[24px] text-sm font-medium text-center transition-transform hover:-translate-y-0.5 backdrop-blur-md border ${
                        c.type === 'primary' 
                          ? "text-white border-transparent" 
                          : "bg-white/40 border-white/60 text-black hover:bg-white/60"
                      }`}
                      style={c.type === 'primary' ? { backgroundColor: accentColor } : {}}
                    >
                      {c.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* 8 & 9. Bottom Navigation & Thumbnail Strip */}
        <div className="flex flex-col gap-4 shrink-0 h-[140px] justify-end min-w-0 w-full max-w-full">
          
          <div className="flex items-center justify-between px-2 w-full max-w-full">
            <button
              onClick={() => setActiveSlideIndex((p) => Math.max(0, p - 1))}
              disabled={activeSlideIndex === 0}
              className="text-sm font-medium disabled:opacity-30 hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              &larr; Previous
            </button>
            <div className="text-sm font-mono text-[#666666]">
              {String(activeSlideIndex + 1).padStart(2, "0")} / {String(activeCaseStudy.slides.length).padStart(2, "0")}
            </div>
            <button
              onClick={() => setActiveSlideIndex((p) => Math.min(activeCaseStudy.slides.length - 1, p + 1))}
              disabled={activeSlideIndex === activeCaseStudy.slides.length - 1}
              className="text-sm font-medium disabled:opacity-30 hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              Next &rarr;
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 px-2 w-full max-w-full">
            {activeCaseStudy.slides.map((slide, idx) => {
              const isActive = idx === activeSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`relative shrink-0 rounded-[8px] overflow-hidden transition-all duration-300 ease-out shadow-[0_4px_12px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)] focus:outline-none`}
                  style={{
                    width: 80,
                    height: 50,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isActive ? `0 0 0 2px ${accentColor}` : undefined,
                    zIndex: isActive ? 10 : 1
                  }}
                >
                  {slide.imageSrc ? (
                    <Image
                      src={slide.imageSrc}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex flex-col items-center justify-center p-2 text-center"
                      style={{ backgroundColor: `${accentColor}10` }}
                    >
                      <span className="text-xl mb-1">{activeCaseStudy.logo}</span>
                      <span className="text-[10px] font-medium truncate w-full px-1" style={{ color: accentColor }}>{slide.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-white text-xs font-medium drop-shadow-md">{slide.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
