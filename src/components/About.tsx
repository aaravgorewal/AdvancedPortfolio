"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-[#EDE7DC]/13 py-32 md:py-40 bg-[#0A0C0E]">
      
      {/* Background 02 */}
      <motion.div 
        className="absolute right-[-2%] bottom-[-5%] select-none pointer-events-none z-0 flex items-center justify-center"
        style={{ y: shouldReduceMotion ? 0 : bgY }}
      >
        <span className="font-syne text-[40vw] md:text-[55vw] lg:text-[45vw] font-extrabold leading-[0.75] text-[#EDE7DC] opacity-[0.02] tracking-tighter m-0 p-0">
          02
        </span>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 text-left">
        
        {/* Section index indicator */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-[#E8913C] mb-12 md:mb-20"
        >
          ABOUT / 02
        </motion.div>
        
        <div className="flex flex-col lg:flex-row justify-between w-full">
          
          {/* ========================================= */}
          {/* LEFT COLUMN (Approx 60%) */}
          {/* ========================================= */}
          <div className="lg:w-[58%] flex flex-col justify-start mb-20 lg:mb-0">
            
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-[56px] leading-[1.1] font-extrabold text-[#EDE7DC] uppercase tracking-tighter mb-8 max-w-[650px] flex flex-col items-start">
              <motion.span 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: "easeOut" }}
                className="block mb-1"
              >
                I BUILD
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                className="text-[#E8913C] inline-block transition-all duration-500 hover:brightness-125 mb-1 cursor-default"
              >
                AI-POWERED PRODUCTS,
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
                className="block mb-1"
              >
                FULL-STACK SYSTEMS,
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
                className="block"
              >
                AND DIGITAL EXPERIENCES.
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
              className="text-[#9EA5A8] text-base lg:text-lg max-w-[500px] leading-relaxed font-sans-body"
            >
              I work across AI/ML, full-stack engineering, and product development, turning ideas into working systems, prototypes, and production-ready digital experiences.
            </motion.p>

            {/* Availability Strip */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-10 mt-10 border-t border-[#EDE7DC]/10 max-w-[500px]"
            >
              <span className="font-mono text-[10px] text-[#6C7378] tracking-[0.25em] uppercase">
                AVAILABLE FOR
              </span>
              <div className="flex flex-wrap gap-6">
                {["INTERNSHIPS", "FREELANCE", "COLLABORATIONS"].map((item, i) => (
                  <span 
                    key={i}
                    className="font-sans-body text-[10px] font-bold tracking-[0.1em] text-[#9EA5A8] uppercase hover:text-[#EDE7DC] transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            
          </div>
          
          {/* ========================================= */}
          {/* RIGHT COLUMN (Approx 35%) */}
          {/* ========================================= */}
          <div className="lg:w-[35%] flex flex-col justify-start lg:border-l lg:border-[#EDE7DC]/10 lg:pl-12 xl:pl-16">
            
            {/* Block 1: FOCUS */}
            <motion.div 
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
              className="flex flex-col border-b border-[#EDE7DC]/10 pb-10 mb-10"
            >
              <h3 className="font-mono text-[10px] text-[#6C7378] tracking-[0.25em] uppercase mb-5">
                FOCUS
              </h3>
              <div className="flex flex-col gap-4">
                {["AI / ML", "Full-Stack Engineering", "Product Development"].map((item, idx) => (
                  <span 
                    key={idx}
                    className="group/item font-syne text-lg font-bold text-[#EDE7DC] uppercase tracking-wide flex items-center hover:text-white hover:translate-x-[3px] transition-all duration-300 relative cursor-default"
                  >
                    <span className="absolute -left-4 w-1 h-1 bg-[#E8913C] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Block 2: BUILDING */}
            <motion.div 
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
              className="flex flex-col border-b border-[#EDE7DC]/10 pb-10 mb-10"
            >
              <h3 className="font-mono text-[10px] text-[#6C7378] tracking-[0.25em] uppercase mb-5">
                BUILDING
              </h3>
              <div className="flex flex-col gap-4">
                {["AI Systems", "Web Products", "Interactive Digital Experiences"].map((item, idx) => (
                  <span 
                    key={idx}
                    className="group/item font-syne text-lg font-bold text-[#EDE7DC] uppercase tracking-wide flex items-center hover:text-white hover:translate-x-[3px] transition-all duration-300 relative cursor-default"
                  >
                    <span className="absolute -left-4 w-1 h-1 bg-[#E8913C] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Block 3: ACADEMIC FOUNDATION */}
            <motion.div 
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
              className="flex flex-col relative pl-5 py-1 border-l-2 border-[#2E6B72]/40 hover:border-[#2E6B72] transition-colors duration-500"
            >
              <h3 className="font-mono text-[10px] text-[#2E6B72] tracking-[0.25em] uppercase mb-3">
                CURRENTLY / ACADEMIC
              </h3>
              <div className="flex flex-col gap-2">
                <span className="font-syne text-[15px] leading-snug font-bold text-[#EDE7DC] uppercase tracking-wide">
                  B.Tech in Artificial Intelligence & Machine Learning
                </span>
                <span className="font-sans-body text-[11px] text-[#9EA5A8] uppercase tracking-wider leading-relaxed">
                  Dewan V.S. Institute of Engineering & Technology, Meerut
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
