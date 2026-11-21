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
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);

  // Auto-play removed so user can read at their own pace

  const rec = recommendations[currentIndex];
  
  const words = rec.text.split(" ");
  const isLong = words.length > 20;
  const displayText = isExpanded || !isLong ? rec.text : words.slice(0, 20).join(" ") + "...";

  return (
    <Section id="evidence" className="!py-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-1">Recommendations</h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Evidence.</h2>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={prevSlide} aria-label="Previous recommendation" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F0AFC0]/60 bg-white text-[#E86F93] shadow-sm hover:bg-[#FFF1EA]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span className="font-mono text-xs text-text-muted">{currentIndex + 1} / {recommendations.length}</span>
          <button onClick={nextSlide} aria-label="Next recommendation" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F0AFC0]/60 bg-white text-[#E86F93] shadow-sm hover:bg-[#FFF1EA]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid w-full items-start gap-6 rounded-[24px] border border-[#F0AFC0]/50 bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] p-5 shadow-sm md:grid-cols-[1.4fr_1fr] md:p-7"
        >
          <div className="flex h-full flex-col">
            <p className="whitespace-pre-line text-[15px] font-light leading-relaxed text-text-primary md:text-base">
              <span className="mr-1 font-serif text-2xl leading-none text-[#E86F93]">&ldquo;</span>
              {displayText}
              {isLong && (
                <button onClick={() => setIsExpanded(!isExpanded)} className="ml-2 font-medium text-[#E86F93] hover:text-[#7C3B49]">
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              )}
            </p>
            <div className="mt-auto pt-4">
              <p className="font-display text-lg font-bold tracking-tight text-text-primary">{rec.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#C2456E]">{rec.title}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-muted">{rec.relationship} · {rec.date}</p>
            </div>
          </div>
          {rec.snapshot && (
            <div className="overflow-hidden rounded-xl border-2 border-white/70 bg-white/60 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={rec.snapshot} alt={`LinkedIn recommendation from ${rec.name}`} loading="lazy" className="max-h-[260px] w-full object-contain object-top" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
