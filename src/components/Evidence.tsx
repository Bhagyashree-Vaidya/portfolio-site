"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";

const recommendations = [
  {
    name: "Tracie D. Hall",
    title: "Executive Director | Strategist | Advocate TIME100 Awardee",
    relationship: "Tracie D. was Bhagyashree's mentor",
    date: "May 18, 2026",
    text: `I highly recommend Shree for her exceptional ability to connect technical innovation with mission-driven impact. She played a critical role in building a platform for the Alliance that pulls real Census ACS data for all 103 member schools and transforms it into accessible, community-level visualizations of broadband access, income disparities, educational attainment, and insurance gaps. What impressed me most was not only her technical expertise in data pipelines, mapping, and visualization, but her ability to align those skills thoughtfully with the equity-centered goals of the project. Shree approaches complex challenges with both analytical rigor and a deep understanding of how data can be used to illuminate disparities, strengthen decision-making, and support communities. She brings an uncommon combination of technical sophistication, creativity, speed in execution, and purpose-driven leadership to her work. She would be an asset to any organization.`,
    snapshot: "/images/recommendations/tracie.png",
  },
  {
    name: "Jesse Chiu",
    title: "PhD student @ECE, UW",
    relationship: "Jesse worked with Bhagyashree on the same team",
    date: "June 13, 2026",
    text: `I worked with Bhagyashree on the Starlink spectrogram processing project. She contributed to the satellite track detection pipeline and related analysis tools. The project involved several technical challenges, and she worked on improving different parts of the workflow. For example, when the original detector produced fragmented detections on real-world captures, she explored approaches such as curve fitting, fragment merging, and matching refinements to improve detection quality.`,
    snapshot: "/images/recommendations/jesse.png",
  },
  {
    name: "Robyn Bodmann",
    title: "Digital & Graphic Design",
    relationship: "Robyn was Bhagyashree's client",
    date: "September 30, 2023",
    text: `Bhagyashree is very passionate and has a great vision for her work. While working on a web project together, I learned that she can get any complex functionality request done. She makes sure all the deadlines are met, and is always available for meetings and discussions. I like the fact that she has the ability to follow creative direction while using her basic knowledge of UX principles, thus further adding to the user journey experience. She's a great listener. She makes sure that whatever project she is working on meets its highest possible standards. What a pleasure it was to work with her. I recommend her to anyone who needs website assistance.`,
    snapshot: "/images/recommendations/robyn.png",
  },
  {
    name: "Jason Paradise",
    title: "Co-Founder & CRO at Athos AI | Unity Senior Health",
    relationship: "Jason was Bhagyashree's client",
    date: "April 7, 2022",
    text: `Efficient is the what comes to mind when I think about Bhagyashree !!! I have worked with many web developers, when it comes to e-commerce, LMS, trading membership sites and web apps, Bhagyashree is one of the most reliable. We've worked together for many projects and aside from her skills, what I appreciate most is how responsive she is - when it's late in her time zone or a weekend and I need some urgent support or updates, Bhagyashree will usually be available to assist. If you are looking for a proficient and trustworthy remote web dev you I highly recommend her.`,
    snapshot: "/images/recommendations/jason.png",
  },
  {
    name: "Christopher Gulizia",
    title: "Project Manager | CAPM, Strategy",
    relationship: "Christopher managed Bhagyashree directly",
    date: "April 5, 2022",
    text: `Bhagyashree's work goes above and beyond our expectations. When we hired her to help with our website development, she provided insights that helped us make clear decisions for our company's new look in server infrastructure. In the past 2 years, she has shown an incredible level of hard work and dedication. She can deal with conflicting priorities in high-pressure situations.`,
    snapshot: "/images/recommendations/christopher.png",
  },
  {
    name: "Joe George",
    title: "Founder Of WP Tech Care – 24/7 WordPress Support & Design",
    relationship: "Joe was Bhagyashree's client",
    date: "April 17, 2020",
    text: `I highly recommend Bhagyashree for her professionalism, quality of work, and meeting task deadlines as they come due. I hired her for customizing my Wordpress website, specifically Ninja Forms. I needed her to customize the styling of my forms using some html and css code. Ninja Forms isn't user-friendly. Even with their paid CSS extension, I wasn't able to edit the forms to my liking because there are some severe limitations on how much you can edit. Ninja Forms specifically told me the styling modifications cannot extend beyond the plugins limitations. To make matters worse, another big downside was any custom changes you make can break the responsiveness especially on mobile devices.

Given these insurmountable challenges, it was very cumbersome to figure it out a way to add my custom styling changes while keeping mobile responsiveness intact.

Even with her extensive background in coding and Wordpress, Bhagyashree was not used to seeing this type of setup in her usual line of business. Such a simple task of editing the formatting, look, and feel of the forms actually took a lot of time and creativity. Bhagyashree really had to think outside of the box to make this work; thankfully, she did and I found her at the nick of time!!! She was God-sent without a doubt!

I can wholeheartedly vouch for Bhagyashree 100 percent. She defied the odds and turned the tables upside down. She completed the project on time, edited all the Ninja Forms to my liking with the right custom html and css codes, and made sure all forms were responsive across all devices.`,
    snapshot: "/images/recommendations/joe-george.png",
  }
];

export default function Evidence() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const rec = recommendations[currentIndex];

  return (
    <Section id="evidence" className="!py-[20px]">
      <div className="mb-[20px]">
        <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Recommendations</h3>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary">Evidence.</h2>
      </div>

      <div className="relative w-full max-w-[1000px] mx-auto mt-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full break-inside-avoid p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/50 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-500"
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Decorative Quote Mark */}
              <div className="text-8xl md:text-9xl font-serif text-[#E86F93]/10 absolute -top-10 -left-6 select-none leading-none z-0">
                "
              </div>
              
              {/* Review Text */}
              <p className="text-lg md:text-xl font-light text-text-primary leading-relaxed mt-6 mb-10 relative z-10">
                {rec.text}
              </p>
              
              {/* Image Snapshot */}
              {rec.snapshot && (
                <div className="mb-10 overflow-hidden rounded-[1.5rem] border-[4px] border-white/60 shadow-sm relative z-10 bg-white/50 w-full max-w-[700px]">
                  <img 
                    src={rec.snapshot} 
                    alt={`Recommendation from ${rec.name}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Author Info */}
              <div className="mt-auto pt-6 border-t border-[#F0AFC0]/40 flex flex-col gap-1 relative z-10">
                <span className="font-display font-bold tracking-tight text-xl md:text-2xl text-text-primary">
                  {rec.name}
                </span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#E86F93] font-semibold mt-1">
                  {rec.title}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-text-muted mt-2">
                  <span>{rec.relationship}</span>
                  <span className="hidden md:inline text-[#E86F93]">•</span>
                  <span>{rec.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button 
            onClick={prevSlide} 
            className="w-12 h-12 rounded-full bg-white border border-[#F0AFC0]/60 flex items-center justify-center text-[#E86F93] hover:bg-[#FFF1EA] hover:scale-105 transition-all shadow-sm"
            aria-label="Previous Recommendation"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div className="flex gap-3">
            {recommendations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full shadow-sm ${
                  currentIndex === idx 
                    ? 'w-8 h-3 bg-[#E86F93]' 
                    : 'w-3 h-3 bg-[#D1D5DB] hover:bg-[#F0AFC0]'
                }`}
                aria-label={`Go to recommendation ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className="w-12 h-12 rounded-full bg-white border border-[#F0AFC0]/60 flex items-center justify-center text-[#E86F93] hover:bg-[#FFF1EA] hover:scale-105 transition-all shadow-sm"
            aria-label="Next Recommendation"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
