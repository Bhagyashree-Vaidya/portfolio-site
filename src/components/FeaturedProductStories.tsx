"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

const projects = [
  { 
    title: "Starlink Spectrogram Tool", 
    video: "/videos/projects/stralink.webm", 
    color: "#68CACA", 
    link: "https://starlink-spectrogram-tool.streamlit.app/",
    description: "An advanced data visualization tool for Starlink satellite metrics and spectrogram analysis.",
    metrics: ["Python", "Streamlit", "Data Science"]
  },
  { 
    title: "OwnerView", 
    video: "/videos/projects/ownerview.webm", 
    color: "#5022E2", 
    link: "https://bhagyashree-vaidya.github.io/OwnerView/",
    description: "A powerful analytics dashboard that helps e-commerce store owners track performance and grow their business.",
    metrics: ["React", "TypeScript", "Tailwind CSS"]
  },
  { 
    title: "The Great Courtroom", 
    video: "/videos/projects/the-great-courtroom.webm", 
    color: "#B3847C", 
    link: "https://council.shreevaidya.com/",
    description: "An immersive digital experience exploring historical courtroom cases with interactive timelines.",
    metrics: ["Next.js", "Framer Motion", "WebGL"]
  },
  { 
    title: "SpinFlix", 
    video: "/videos/projects/spinflix.webm", 
    color: "#FB7DDD", 
    link: "https://bhagyashree-vaidya.github.io/spinflix/",
    description: "A dynamic movie discovery platform with tailored recommendations and a sleek dark mode UI.",
    metrics: ["React", "Redux", "REST API"]
  },
  { 
    title: "HBCU Digital Equity", 
    video: "/videos/projects/HBCU.webm", 
    color: "#855EC2", 
    link: "https://hbcu-digital-equity-research-projec.vercel.app/",
    description: "A comprehensive digital equity dashboard for the HBCU Library Alliance tracking broadband metrics.",
    metrics: ["Next.js", "D3.js", "PostgreSQL"]
  },
  { 
    title: "Neighborhood Care Exchange", 
    video: "/videos/projects/Neighbourshood-care.webm", 
    color: "#106B8F", 
    link: "https://neighborhood-care-exchange.vercel.app/",
    description: "A community-driven platform connecting neighbors for mutual aid, resource sharing, and local support.",
    metrics: ["Vue.js", "Firebase", "Node.js"]
  },
  { 
    title: "Wooshippy", 
    video: "/videos/projects/For-git-wooshippy.webm", 
    color: "#D2431B", 
    link: "https://github.com/Bhagyashree-Vaidya/wooshippy",
    description: "A streamlined shipping and logistics management tool designed for small to medium-sized businesses.",
    metrics: ["React", "Express", "MongoDB"]
  },
];

export default function FeaturedProductStories() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const activeProject = projects[expandedIndex];
  const activeColor = activeProject.color || '#E86F93';

  return (
    <Section id="work" className="!py-[40px] mt-[10vh] relative overflow-visible">
      {/* Soft dynamic background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-[0.15]"
          animate={{ backgroundColor: activeColor }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="mb-[20px] relative z-10 pl-4 lg:pl-0">
        <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Product Stories</h3>
        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">
          Featured <span style={{ color: activeColor }} className="transition-colors duration-700">Work.</span>
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto mt-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start px-4 lg:px-0">
        
        {/* Left Side: Browser Mockup & Pagination */}
        <div className="w-full lg:w-[60%] flex gap-4 md:gap-8 sticky top-24 shrink-0 z-20">
          
          {/* Vertical Pagination */}
          <div className="hidden lg:flex flex-col items-center pt-32 shrink-0 gap-4">
            <span className="text-[11px] font-mono text-text-muted mb-6">
              0{expandedIndex + 1} / 0{projects.length}
            </span>
            <div className="w-[1px] h-12 bg-border-primary mb-2"></div>
            {projects.map((_, idx) => {
              const isActive = expandedIndex === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setExpandedIndex(idx)}
                  className="rounded-full cursor-pointer shadow-sm relative"
                  animate={{
                    backgroundColor: isActive ? (projects[idx].color || "#E86F93") : "#D1D5DB",
                    width: isActive ? 10 : 6,
                    height: isActive ? 32 : 6,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="absolute -inset-3"></div> {/* Click target expansion */}
                </motion.div>
              );
            })}
          </div>

          {/* Browser Mockup */}
          <div className="flex-1 relative group w-full pt-6">
            <motion.div 
              className="w-full rounded-[24px] bg-white/70 backdrop-blur-xl border border-white overflow-hidden relative"
              animate={{ 
                boxShadow: `0 35px 65px -15px ${activeColor}40, 0 0 0 1px ${activeColor}15`,
                y: [0, -6, 0]
              }}
              transition={{ 
                boxShadow: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Browser Header */}
              <div className="h-[52px] border-b border-[#E8E8E8]/60 bg-white/60 backdrop-blur-md flex items-center px-5 justify-between relative z-10">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-inner" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-inner" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-inner" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-5/12 max-w-[300px] h-7 bg-white/80 shadow-sm rounded-lg flex items-center justify-center text-[11px] font-mono text-text-secondary tracking-wide">
                  <svg className="w-3.5 h-3.5 mr-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                  {projects[expandedIndex].title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app
                </div>
                <div className="w-4 h-4 opacity-40 text-text-primary">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
              </div>

              {/* Video Content */}
              <div className="w-full aspect-[16/10] relative bg-[#fafafa] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={expandedIndex}
                    initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {projects[expandedIndex]?.video ? (
                      <video
                        src={projects[expandedIndex].video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 text-text-muted font-mono text-sm uppercase tracking-widest font-semibold">
                        Image Placeholder
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {/* Glossy overlay for realism */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Elegant Card Stack */}
        <div className="w-full lg:w-[40%] flex flex-col gap-5 relative z-20 pb-20 pt-16">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;
            const cardColor = project.color || '#E86F93';
            const num = (idx + 1).toString().padStart(2, '0');

            return (
              <motion.div 
                key={idx}
                layout
                onClick={() => setExpandedIndex(idx)}
                className={`relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${isExpanded ? 'border-transparent shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] scale-100' : 'border-[#E8E8E8] bg-white/40 hover:bg-white/80 shadow-sm hover:shadow-md scale-[0.98] hover:scale-100'}`}
              >
                {/* Active Background Gradient */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 z-0 backdrop-blur-xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,1) 0%, ${cardColor}15 100%)`
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Left Accent Bar */}
                {isExpanded && (
                  <motion.div 
                    layoutId="activeAccent"
                    className="absolute left-0 top-0 bottom-0 w-[6px] z-10"
                    style={{ backgroundColor: cardColor, borderRadius: '24px 0 0 24px' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="relative z-10 px-5 py-3.5 flex flex-col">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className={`text-[11px] font-mono transition-colors duration-300 rounded-lg px-2.5 py-1.5 ${isExpanded ? 'text-white' : 'text-text-muted bg-gray-100/70'}`}
                        style={isExpanded ? { backgroundColor: cardColor } : {}}
                      >
                        {num}
                      </div>
                      <h3 
                        className={`text-[17px] font-display font-medium transition-colors duration-300`}
                        style={isExpanded ? { color: '#111111' } : { color: '#D65D82' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Arrow Icon */}
                    {isExpanded ? (
                      <a 
                        href={project.link || "#"}
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white shadow-sm hover:shadow-md hover:scale-110"
                        style={{ color: cardColor }}
                        title="View Project"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    ) : (
                      <div 
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 bg-transparent rotate-0"
                        style={{ color: '#8A8A8A' }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2 pl-[48px]">
                          <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          {/* Metrics / Tech Stack */}
                          <div className="flex gap-4 mb-2">
                            {project.metrics?.map((metric, mIdx) => (
                              <div key={mIdx} className="flex flex-col gap-1">
                                <span 
                                  className="text-[16px] font-bold tracking-tight"
                                  style={{ color: cardColor }}
                                >
                                  {metric}
                                </span>
                                <span className="text-[11px] text-text-secondary">
                                  Technology
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </Section>
  );
}
