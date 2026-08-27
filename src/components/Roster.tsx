"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Section } from "./ui/SectionGrid";

const CAPABILITIES_DATA = [
  { id: "1", category: "AI / MACHINE LEARNING", stack: "Python · OpenAI API · Gemini · Qdrant" },
  { id: "2", category: "FULL-STACK ENGINEERING", stack: "React · Next.js · TypeScript · Tailwind CSS" },
  { id: "3", category: "BACKEND / DATA", stack: "Node.js · Express.js · FastAPI · MongoDB" },
  { id: "4", category: "PRODUCT DEVELOPMENT", stack: "REST APIs · WebSockets · Systems Architecture" },
  { id: "5", category: "CREATIVE DEVELOPMENT", stack: "Framer Motion · 3D Integration" },
  { id: "6", category: "RAPID PROTOTYPING", stack: "Git · GitHub · MVP Development" },
];

const transitionVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 25 : -25,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -25 : 25,
    opacity: 0,
  }),
};

export const Roster = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  
  const [state, setState] = useState({ index: 0, direction: 1 });
  
  useMotionValueEvent(smoothProgress, "change", (latest) => {
     // Map scroll progress strictly to integer index 0-5
     const newIdx = Math.min(5, Math.max(0, Math.floor(latest * 5.999)));
     if (newIdx !== state.index) {
        setState((prev) => ({
           index: newIdx,
           direction: newIdx > prev.index ? 1 : -1
        }));
     }
  });

  if (shouldReduceMotion) {
    return (
      <Section id="capabilities" className="bg-[#0A0C0E] py-24 md:py-40 border-b border-[#EDE7DC]/10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-24">
          <div className="mb-16">
            <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#6C7378] mb-4 block">
              04 / TECHNICAL ARSENAL
            </span>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-[0.9]">
              Technical<br/>Architecture
            </h2>
          </div>
          <div className="flex flex-col gap-16 border-l border-[#E8913C]/20 pl-6 md:pl-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E8913C]" />
            {CAPABILITIES_DATA.map((item) => (
              <div key={item.id} className="flex flex-col items-start relative">
                <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-2 text-[#E8913C]">
                  0{item.id}
                </div>
                <h3 className="font-syne text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4 text-[#EDE7DC]">
                  {item.category}
                </h3>
                <div className="font-sans-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#9EA5A8] leading-relaxed max-w-xl">
                  {item.stack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }

  const activeItem = CAPABILITIES_DATA[state.index];
  const prevItem = state.index > 0 ? CAPABILITIES_DATA[state.index - 1] : null;
  const nextItem = state.index < 5 ? CAPABILITIES_DATA[state.index + 1] : null;

  return (
    <Section id="capabilities" className="bg-[#0A0C0E] p-0 m-0 relative border-b border-[#EDE7DC]/10">
      {/* 400vh container gives room for natural scroll-driven state changes */}
      <div ref={containerRef} className="h-[400vh] w-full relative">
        <div className="sticky top-0 h-[100dvh] w-full max-w-7xl mx-auto px-6 md:px-24 flex flex-col justify-center">
          
          {/* Header */}
          <div className="flex-none pt-24 md:pt-32 pb-4">
            <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#6C7378] mb-4 block">
              04 / TECHNICAL ARSENAL
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-[0.9]">
                Technical<br/>Architecture
              </h2>
            </div>
          </div>

          {/* Core Interactive Layout */}
          <div className="flex-1 relative w-full flex flex-col justify-center mb-16 md:mb-24 pl-8 md:pl-16">
             
             {/* Progress Rail & Marker */}
             <div className="absolute left-0 top-8 bottom-8 w-[1px] bg-[#EDE7DC]/10">
                <motion.div className="w-full bg-[#E8913C] origin-top h-full" style={{ scaleY: smoothProgress }} />
                {/* Active focal marker statically pinned to the center of the rail */}
                <div className="absolute left-[-1px] top-1/2 w-[3px] h-[32px] bg-[#E8913C] -translate-y-1/2 z-10" />
             </div>

             {/* Focus Window Array */}
             <div className="flex flex-col justify-center h-[300px] md:h-[400px] w-full max-w-3xl relative">
                
                {/* Absolute Top-Right Counter */}
                <div className="absolute -top-4 right-0 font-mono text-sm uppercase tracking-widest font-bold text-[#E8913C]">
                   0{state.index + 1} / 06
                </div>

                {/* PREVIOUS CAPABILITY SLOT */}
                <div className="relative h-[40px] md:h-[60px] w-full flex items-end">
                   <AnimatePresence custom={state.direction}>
                      {prevItem && (
                         <motion.div
                            key={prevItem.id}
                            custom={state.direction}
                            variants={transitionVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-end opacity-40"
                         >
                            <div className="flex items-center gap-4 text-[#6C7378] mb-2">
                               <span className="font-mono text-[10px] text-[#2E6B72]">0{prevItem.id}</span>
                               <span className="font-syne text-xs md:text-sm uppercase font-bold tracking-widest truncate">
                                  {prevItem.category}
                               </span>
                            </div>
                         </motion.div>
                      )}
                   </AnimatePresence>
                </div>

                <div className="w-4 h-4 flex items-center justify-start text-[#6C7378]/30 text-[8px] my-1 ml-[46px]">↓</div>

                {/* ACTIVE DOMINANT SLOT */}
                <div className="relative h-[140px] md:h-[180px] w-full">
                   <AnimatePresence custom={state.direction}>
                      <motion.div
                         key={activeItem.id}
                         custom={state.direction}
                         variants={transitionVariants}
                         initial="enter"
                         animate="center"
                         exit="exit"
                         transition={{ duration: 0.4, ease: "easeInOut" }}
                         className="absolute inset-0 flex flex-col justify-center"
                      >
                         <div className="font-mono text-sm md:text-base font-bold text-[#E8913C] mb-2">
                            0{activeItem.id}
                         </div>
                         <h3 className="font-syne text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter mb-4 leading-tight">
                            {activeItem.category}
                         </h3>
                         <div className="font-sans-body text-xs md:text-sm tracking-[0.2em] font-bold text-[#9EA5A8] leading-relaxed">
                            {activeItem.stack}
                         </div>
                      </motion.div>
                   </AnimatePresence>
                </div>

                <div className="w-4 h-4 flex items-center justify-start text-[#6C7378]/30 text-[8px] my-1 ml-[46px]">↓</div>

                {/* NEXT CAPABILITY SLOT */}
                <div className="relative h-[40px] md:h-[60px] w-full flex items-start">
                   <AnimatePresence custom={state.direction}>
                      {nextItem && (
                         <motion.div
                            key={nextItem.id}
                            custom={state.direction}
                            variants={transitionVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-start opacity-40"
                         >
                            <div className="flex items-center gap-4 text-[#6C7378] mt-2">
                               <span className="font-mono text-[10px] text-[#2E6B72]">0{nextItem.id}</span>
                               <span className="font-syne text-xs md:text-sm uppercase font-bold tracking-widest truncate">
                                  {nextItem.category}
                               </span>
                            </div>
                         </motion.div>
                      )}
                   </AnimatePresence>
                </div>

             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
