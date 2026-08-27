"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

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
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["20px", "0px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Connect actions delayed entrance
  const actionsY = useTransform(scrollYProgress, [0.1, 0.6], ["20px", "0px"]);
  const actionsOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  // Giant AARAV. Signature motion (CRITICAL FIX: Massive travel distance and scale)
  const signatureY = useTransform(scrollYProgress, [0, 1], ["450px", "-20px"]);
  const signatureX = useTransform(scrollYProgress, [0, 1], ["-8%", "6%"]);
  const signatureScale = useTransform(scrollYProgress, [0, 1], [0.78, 1.15]);
  const signatureOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.20]);
  const signatureLetterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.01em", "-0.06em"]);

  return (
    <footer ref={footerRef} className="relative pt-32 lg:pt-40 bg-[#0A0C0E] overflow-hidden border-t border-[#EDE7DC]/13 w-full min-h-[60vh] flex flex-col justify-between z-0">
      
      {/* Top Footer Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-24 w-full text-left">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          {/* Main callout heading and availability statement */}
          <motion.div 
            className="max-w-2xl"
            style={{ 
               y: shouldReduceMotion ? 0 : contentY, 
               opacity: shouldReduceMotion ? 1 : contentOpacity 
            }}
          >
            <h2 className="font-syne text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] mb-8 text-[#EDE7DC] tracking-tighter">
              Let&apos;s build<br />something.
            </h2>
            <p className="text-[#9EA5A8] text-sm md:text-base leading-relaxed font-sans-body max-w-lg">
              Available for internships, freelance projects, collaborations, and interesting technical problems.
            </p>
          </motion.div>

          {/* Connect actions */}
          <motion.div 
            className="flex flex-wrap gap-4 font-sans-body w-full lg:w-auto"
            style={{ 
               y: shouldReduceMotion ? 0 : actionsY, 
               opacity: shouldReduceMotion ? 1 : actionsOpacity 
            }}
          >
            <a
              href="mailto:sainiaarav331@gmail.com"
              className="px-8 py-4 border border-[#EDE7DC]/20 font-bold uppercase tracking-widest text-[10px] text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors duration-300 focus-ring text-center flex-1 sm:flex-none"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aaravgorewal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#EDE7DC]/20 font-bold uppercase tracking-widest text-[10px] text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors duration-300 focus-ring text-center flex-1 sm:flex-none"
            >
              LinkedIn
            </a>
          </motion.div>

        </div>
      </div>
      
      {/* Middle Spacer to connect content down to the sub-footer */}
      <div className="flex-1 min-h-[10vh] md:min-h-[15vh]"></div>
      
      {/* Sub-footer strip */}
      <div className="border-t border-[#EDE7DC]/13 py-8 px-6 md:px-24 flex justify-between max-w-[1200px] mx-auto w-full text-[9px] uppercase opacity-40 font-bold tracking-[0.2em] font-sans-body text-[#EDE7DC] relative z-20">
        <span>Privacy / Terms / Legal</span>
        <span>©2026 AARAV SAINI</span>
      </div>

      {/* Large Cropped Wordmark as visual signature */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden select-none pointer-events-none flex justify-center z-10">
        <motion.h1 
          className="font-syne font-extrabold uppercase leading-[0.75] whitespace-nowrap text-[#EDE7DC] m-0 p-0 text-[20vw] md:text-[22vw]"
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
