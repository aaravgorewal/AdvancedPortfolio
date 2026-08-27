"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Section } from "./ui/SectionGrid";

const CAPABILITIES_DATA = [
  { id: "01", category: "AI / MACHINE LEARNING", stack: "Python · OpenAI API · Gemini · AI Agents" },
  { id: "02", category: "FULL-STACK ENGINEERING", stack: "React · Next.js · TypeScript · Tailwind CSS" },
  { id: "03", category: "BACKEND / DATA", stack: "Node.js · Express.js · MongoDB · PostgreSQL" },
  { id: "04", category: "PRODUCT DEVELOPMENT", stack: "REST APIs · Dashboards · Responsive Interfaces · SaaS Architecture" },
  { id: "05", category: "CREATIVE DEVELOPMENT", stack: "Framer Motion · Three.js · 3D / AR" },
  { id: "06", category: "RAPID PROTOTYPING", stack: "Git · GitHub · Rapid MVP Development" },
];

const CapabilityRow = ({ item, shouldReduceMotion }: { item: { id: string, category: string, stack: string }, shouldReduceMotion: boolean | null }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["center 85%", "center 15%"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const y = useTransform(smoothProgress, [0, 0.5, 1], [0, -16, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.15, 1, 0.15]);
  const indexColor = useTransform(smoothProgress, [0, 0.5, 1], ["#6C7378", "#E8913C", "#6C7378"]);
  const titleColor = useTransform(smoothProgress, [0, 0.5, 1], ["#6C7378", "#EDE7DC", "#6C7378"]);
  const techColor = useTransform(smoothProgress, [0, 0.5, 1], ["#6C7378", "#9EA5A8", "#6C7378"]);
  const indicatorScale = useTransform(smoothProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  
  if (shouldReduceMotion) {
    return (
      <div className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-14 border-b border-[#EDE7DC]/10 relative">
        <div className="absolute left-[-24px] md:left-[-40px] top-[20%] bottom-[20%] w-[2px] bg-[#E8913C]" />
        <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] font-bold mb-3 md:mb-0 md:w-1/4 text-[#E8913C]">
          CAP—{item.id}
        </div>
        <h3 className="font-syne text-xl md:text-3xl font-extrabold uppercase tracking-tighter md:w-1/3 mb-3 md:mb-0 text-[#EDE7DC]">
          {item.category}
        </h3>
        <div className="font-sans-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:w-5/12 text-[#9EA5A8] font-bold leading-relaxed">
          {item.stack}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={rowRef}
      style={{ y, opacity }}
      className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-14 border-b border-[#EDE7DC]/10 relative"
    >
      <motion.div 
        style={{ scaleY: indicatorScale }}
        className="absolute left-[-24px] md:left-[-40px] top-[20%] bottom-[20%] w-[2px] bg-[#E8913C] origin-center z-10"
      />
      <motion.div 
        style={{ color: indexColor }}
        className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] font-bold mb-3 md:mb-0 md:w-1/4"
      >
        CAP—{item.id}
      </motion.div>
      <motion.h3 
        style={{ color: titleColor }}
        className="font-syne text-xl md:text-3xl font-extrabold uppercase tracking-tighter md:w-1/3 mb-3 md:mb-0"
      >
        {item.category}
      </motion.h3>
      <motion.div 
        style={{ color: techColor }}
        className="font-sans-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:w-5/12 font-bold leading-relaxed"
      >
        {item.stack}
      </motion.div>
    </motion.div>
  );
};

export const Capabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"]
  });

  const smoothRail = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Section id="capabilities" className="bg-[#0A0C0E] border-b border-[#EDE7DC]/10 py-24 md:py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 gap-8 md:gap-16" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left mb-10 md:mb-16"
        >
          <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#6C7378] mb-4">
            04 / TECHNICAL ARSENAL
          </span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-[0.9]">
            Capabilities
          </h2>
        </motion.div>

        {/* Interactive List Container */}
        <div className="relative flex w-full">
          
          {/* Vertical Progress Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#EDE7DC]/10">
            {!shouldReduceMotion && (
              <motion.div 
                className="absolute top-0 left-0 right-0 bottom-0 bg-[#E8913C] origin-top"
                style={{ scaleY: smoothRail }}
              />
            )}
          </div>

          <div className="w-full pl-6 md:pl-10 flex flex-col relative">
             {CAPABILITIES_DATA.map((item) => (
               <CapabilityRow 
                 key={item.id} 
                 item={item} 
                 shouldReduceMotion={shouldReduceMotion} 
               />
             ))}
          </div>

        </div>
      </div>
    </Section>
  );
};
