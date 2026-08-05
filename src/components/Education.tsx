"use client";

import Image from "next/image";
import Section from "./Section";

export default function Education() {
  const skills = [
    "Product Strategy & Go-to-Market",
    "A/B Testing",
    "Customer & Market Research",
    "Stakeholder Management",
    "Business Strategy & Competitive Analysis",
    "Roadmap Prioritization",
    "Feature Experimentation"
  ];

  return (
    <Section id="education" className="!py-[20px] mt-[10vh]">
      <div className="mb-[20px]">
        <h3 className="text-sm md:text-base font-medium uppercase tracking-widest text-text-secondary mb-2">About</h3>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Education.</h2>
      </div>

      <div className="w-full lg:w-[100%] max-w-[1320px] mx-auto mt-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">

        {/* Left Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6">

          {/* Education Header Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold text-text-primary">University of Washington</h3>
            <p className="text-[#E86F93] font-medium text-lg leading-relaxed">
              Master of Science, Information Management | Product and AI Specialization
            </p>
            <div className="text-sm font-mono text-text-secondary mt-2">
              <p>Sep 2025 – Aug 2026 &nbsp;|&nbsp; Grade: 3.84</p>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-4 text-sm font-light text-text-secondary leading-relaxed">
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
          <div className="w-fit p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-mono uppercase tracking-widest text-[#E86F93] font-bold mb-6">Skills for University of Washington</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span key={idx} className="rounded-full border border-[#F0AFC0]/60 bg-white/70 backdrop-blur-sm px-4 py-2 text-[10px] font-mono text-text-primary shadow-sm hover:shadow-md hover:bg-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Image Carousel */}
        <div className="w-full lg:w-[43%] sticky top-32 flex flex-col gap-6">
          <div className="w-full aspect-[3/4] h-auto border-[6px] border-[#F0AFC0]/80 rounded-[2.5rem] bg-white/40 shadow-sm relative overflow-hidden flex items-center justify-center">
            <Image
              src="/images/education/education-1.jpeg"
              alt="Education Activity"
              fill
              className="object-cover z-10"
              unoptimized
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
