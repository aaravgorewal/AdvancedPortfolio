"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Inline SVG Icons for absolute dependency safety and pristine visual weight control
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aaravgorewal/",
    Icon: LinkedinIcon,
    iconClass: "group-hover:-translate-y-[2px] group-hover:translate-x-[2px]",
  },
  {
    name: "GitHub",
    href: "https://github.com/aaravgorewal",
    Icon: GithubIcon,
    iconClass: "group-hover:rotate-[4deg]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aaravgorewal1/",
    Icon: InstagramIcon,
    iconClass: "group-hover:scale-[1.08]",
  },
  {
    name: "X",
    href: "https://x.com/aaravgorewal",
    Icon: XIcon,
    iconClass: "group-hover:translate-x-[2px] group-hover:translate-y-[2px]",
  },
];

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // The footer is the last element on the page, so the maximum possible scroll 
  // is when its bottom hits the bottom of the viewport ("end end").
  // Mapping from when its top enters ("start end") to when its bottom hits ("end end").
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Main content entrance motion (subtle)
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["30px", "0px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const actionsY = useTransform(scrollYProgress, [0.1, 0.5], ["30px", "0px"]);
  const actionsOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const socialY = useTransform(scrollYProgress, [0.2, 0.6], ["30px", "0px"]);
  const socialOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // Giant AARAV. Signature motion (CRITICAL FIX: Massive travel distance and scale)
  const signatureY = useTransform(scrollYProgress, [0, 1], ["500px", "40px"]);
  const signatureX = useTransform(scrollYProgress, [0, 1], ["-8%", "6%"]);
  const signatureScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.05]);
  const signatureOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.20]);
  const signatureLetterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.01em", "-0.06em"]);

  return (
    <footer ref={footerRef} className="relative pt-24 lg:pt-32 bg-[#0A0C0E] overflow-hidden border-t border-[#EDE7DC]/13 w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-between z-0">
      
      {/* Top Footer Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-24 w-full text-left">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-12">
          
          {/* Main callout heading and availability statement */}
          <motion.div 
            className="max-w-2xl"
            style={{ 
               y: shouldReduceMotion ? 0 : contentY, 
               opacity: shouldReduceMotion ? 1 : contentOpacity 
            }}
          >
            <h2 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] mb-8 text-[#EDE7DC] tracking-tighter">
              Let&apos;s build<br />something.
            </h2>
            <p className="text-[#9EA5A8] text-sm md:text-base leading-relaxed font-sans-body max-w-lg">
              Available for internships, freelance projects, collaborations, and interesting technical problems.
            </p>
          </motion.div>

          {/* Connect actions & Social Network */}
          <div className="flex flex-col gap-12 w-full lg:w-auto lg:min-w-[320px]">
            
            {/* 1. Primary CTA */}
            <motion.div
              style={{ 
                 y: shouldReduceMotion ? 0 : actionsY, 
                 opacity: shouldReduceMotion ? 1 : actionsOpacity 
              }}
            >
              <a
                href="mailto:sainiaarav331@gmail.com"
                className="inline-flex items-center justify-between lg:justify-center w-full lg:w-auto px-10 py-6 border border-[#EDE7DC]/20 font-bold uppercase tracking-[0.2em] text-[10px] text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] hover:border-[#EDE7DC] transition-all duration-300 focus-ring group font-sans-body min-h-[44px]"
              >
                <span>Email / Contact</span>
                <ArrowRight className="w-4 h-4 ml-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* 2. Secondary Social Connections */}
            <motion.div 
              className="flex flex-col gap-4"
              style={{ 
                 y: shouldReduceMotion ? 0 : socialY, 
                 opacity: shouldReduceMotion ? 1 : socialOpacity 
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9EA5A8] font-sans-body mb-2">
                Connect / Network
              </span>
              
              <div className="flex flex-col w-full">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="group flex items-center justify-between py-5 border-b border-[#EDE7DC]/10 hover:border-[#EDE7DC]/30 transition-all duration-300 w-full lg:min-w-[320px] hover:translate-x-[4px] min-h-[44px]"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <span className={`text-[#9EA5A8] group-hover:text-[#EDE7DC] transition-all duration-300 transform ${item.iconClass}`}>
                        <item.Icon className="w-4 h-4 stroke-[1.5]" />
                      </span>
                      {/* Text */}
                      <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#9EA5A8] group-hover:text-[#EDE7DC] transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                    {/* Arrow & Indicator */}
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9EA5A8] group-hover:text-[#EDE7DC] transition-all duration-300 transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
      
      {/* Middle Spacer to connect content down to the sub-footer */}
      <div className="flex-1 min-h-[15vh] md:min-h-[20vh]"></div>
      
      {/* Sub-footer strip */}
      <div className="border-t border-[#EDE7DC]/13 py-8 px-6 md:px-24 flex flex-col md:flex-row gap-4 justify-between items-center max-w-[1200px] mx-auto w-full text-[9px] uppercase opacity-40 font-bold tracking-[0.2em] font-sans-body text-[#EDE7DC] relative z-20">
        <span>Privacy / Terms / Legal</span>
        <span>©2026 AARAV SAINI</span>
      </div>

      {/* Large Cropped Wordmark as visual signature */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden select-none pointer-events-none flex justify-center z-10">
        <motion.h1 
          className="font-syne font-extrabold uppercase leading-[0.75] whitespace-nowrap text-[#EDE7DC] m-0 p-0 text-[16vw] sm:text-[20vw] md:text-[22vw]"
          style={{
             y: shouldReduceMotion ? "-20px" : signatureY,
             x: shouldReduceMotion ? "6%" : signatureX,
             scale: shouldReduceMotion ? 1.15 : signatureScale,
             opacity: shouldReduceMotion ? 0.20 : signatureOpacity,
             letterSpacing: shouldReduceMotion ? "-0.06em" : signatureLetterSpacing,
             transformOrigin: "bottom center"
          }}
        >
          AARAV.
        </motion.h1>
      </div>
      
    </footer>
  );
};
