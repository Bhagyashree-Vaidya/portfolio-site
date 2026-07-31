"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./Section";

export default function Education() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const eduImages = [
    "/images/education/edu-1.jpg",
    "/images/education/edu-2.jpg",
    "/images/education/edu-3.jpg",
    "/images/education/edu-4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % eduImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [eduImages.length]);

  const skills = [
    "Strategic Product Thinking",
    "Product Strategy & Go-to-Market",
    "A/B Testing",
    "Customer & Market Research",
    "Stakeholder Management",
    "Business Strategy & Competitive Analysis",
    "Roadmap Prioritization",
    "Feature Experimentation"
  ];

  return (
    <Section id="education" className="!py-[20px]">
      <div className="mb-[20px]">
        <h3 className="text-sm md:text-base font-medium uppercase tracking-widest text-text-secondary mb-2">About</h3>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Education.</h2>
      </div>

      <div className="w-full max-w-[1320px] mx-auto mt-8 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col gap-10">
          
          {/* Education Header Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold text-text-primary">University of Washington</h3>
            <p className="text-[#E86F93] font-medium text-lg leading-relaxed">
              Master of Science, Information Management | Program Product Management Consulting Specialization
            </p>
            <div className="flex flex-col gap-1.5 text-sm font-mono text-text-secondary mt-4">
              <p>Sep 2025 – Aug 2026</p>
              <p>Grade: 3.84</p>
              <p className="mt-2 text-text-primary font-medium">Activities and societies: Co-founded, PAMA, UW iStartup micro-grant winner</p>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-6 text-base font-light text-text-secondary leading-relaxed">
            <p>
              Throughout my graduate work and projects, I've learned to approach that question from multiple angles. I use strategic frameworks to understand markets and competitive dynamics, experimentation to validate assumptions, AI and customer analytics to uncover patterns in user behavior, and program management to turn strategy into execution.
            </p>
            <p>
              What ties all of this together is evidence. Whether I'm evaluating a new market, prioritizing product investments, designing an experiment, or analyzing thousands of customer reviews with AI, my goal is the same: reduce uncertainty, identify what matters most, and help teams make decisions backed by data instead of intuition.
            </p>
            <p>
              I want to build products that solve meaningful customer problems, and I believe the best product managers are not the ones with the most ideas, but the ones who consistently ask the right questions, challenge assumptions, learn quickly, and translate evidence into action.
            </p>
          </div>

          {/* Skills (Pink Box) */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-mono uppercase tracking-widest text-[#E86F93] font-bold mb-6">Skills for University of Washington</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span key={idx} className="rounded-full border border-[#F0AFC0]/60 bg-white/70 backdrop-blur-sm px-4 py-2 text-xs font-mono text-text-primary shadow-sm hover:shadow-md hover:bg-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Image Carousel */}
        <div className="w-full lg:w-[45%] sticky top-32 flex flex-col gap-6">
          <div className="w-full h-[500px] md:h-[650px] border-[6px] border-[#F0AFC0]/80 rounded-[2.5rem] bg-white/40 shadow-sm relative overflow-hidden flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* 
                  Using unoptimized placeholder for now. 
                  Make sure to save your images as /public/images/education/edu-1.jpg etc. 
                */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] flex items-center justify-center">
                  <span className="text-[#E86F93]/60 font-mono text-sm uppercase tracking-widest font-semibold z-0">Missing Image: edu-{currentImageIndex + 1}.jpg</span>
                </div>
                <Image 
                  src={eduImages[currentImageIndex]} 
                  alt={`Education Activity ${currentImageIndex + 1}`}
                  fill
                  className="object-cover z-10"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-4">
            {eduImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`transition-all duration-300 rounded-full shadow-sm ${
                  currentImageIndex === idx 
                    ? 'w-6 h-3 bg-[#E86F93]' 
                    : 'w-3 h-3 bg-[#D1D5DB] hover:bg-[#F0AFC0]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
