"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, MotionValue, useMotionValueEvent } from "framer-motion";
import { Section } from "./ui/SectionGrid";

const CAPABILITIES_DATA = [
  { id: "01", category: "AI / MACHINE LEARNING", stack: "Python · OpenAI API · Gemini · Qdrant" },
  { id: "02", category: "FULL-STACK ENGINEERING", stack: "React · Next.js · TypeScript · Tailwind CSS" },
  { id: "03", category: "BACKEND / DATA", stack: "Node.js · Express.js · FastAPI · MongoDB" },
  { id: "04", category: "PRODUCT DEVELOPMENT", stack: "REST APIs · WebSockets · Systems Architecture" },
  { id: "05", category: "CREATIVE DEVELOPMENT", stack: "Framer Motion · 3D Integration" },
  { id: "06", category: "RAPID PROTOTYPING", stack: "Git · GitHub · MVP Development" },
];

const CarouselItem = ({ item, index, progress }: { item: { id: string, category: string, stack: string }, index: number, progress: MotionValue<number> }) => {
  const center = index / 5;
  
  // Safe spread to prevent overlapping on mobile: 120px steps
  const y = useTransform(progress, 
    [center - 0.4, center - 0.2, center, center + 0.2, center + 0.4], 
    [240, 120, 0, -120, -240]
  );
  
  const scale = useTransform(progress,
    [center - 0.4, center - 0.2, center, center + 0.2, center + 0.4],
    [0.75, 0.85, 1, 0.85, 0.75]
  );
  
  // Inactive capabilities remain muted (opacity 0.4 keeps Teal visible)
  const opacity = useTransform(progress,
    [center - 0.4, center - 0.2, center, center + 0.2, center + 0.4],
    [0, 0.4, 1, 0.4, 0]
  );
  
  // Dynamic Z-index to ensure the active item always sits on top
  const zIndex = useTransform(progress, [center - 0.1, center, center + 0.1], [0, 10, 0]);
  
  const titleColor = useTransform(progress, [center - 0.1, center, center + 0.1], ["#6C7378", "#EDE7DC", "#6C7378"]);
  const indexColor = useTransform(progress, [center - 0.1, center, center + 0.1], ["#2E6B72", "#E8913C", "#2E6B72"]);
  
  // Technology reveals specifically on the active item
  const techOpacity = useTransform(progress, [center - 0.1, center, center + 0.1], [0, 1, 0]);
  
  // Exactly 20px movement for the active capability's tech stack revealing
  const techY = useTransform(progress, [center - 0.1, center, center + 0.1], [20, 0, -20]);

  return (
    <div className="absolute top-1/2 left-0 w-full" style={{ transform: 'translateY(-50%)' }}>
      <motion.div 
        style={{ y, opacity, scale, zIndex, transformOrigin: "left center" }}
        className="flex flex-col items-start relative"
      >
        <motion.div style={{ color: indexColor }} className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-2">
          CAP—{item.id}
        </motion.div>
        {/* Adjusted mobile typography to text-2xl to minimize aggressive line wrapping */}
        <motion.h3 style={{ color: titleColor }} className="font-syne text-2xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter mb-4">
          {item.category}
        </motion.h3>
        <motion.div style={{ opacity: techOpacity, y: techY }} className="font-sans-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#9EA5A8] leading-relaxed max-w-xl">
          {item.stack}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Roster = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(smoothProgress, "change", (latest) => {
     const idx = Math.min(5, Math.max(0, Math.round(latest * 5)));
     setActiveIndex(idx);
  });

  if (shouldReduceMotion) {
    return (
      <Section id="capabilities" className="bg-[#0A0C0E] py-24 md:py-40 border-b border-[#EDE7DC]/10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-24">
          <div className="mb-16">
            <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#6C7378] mb-4 block">
              04 / TECHNICAL ARSENAL
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-[0.9]">
                Technical<br/>Architecture
              </h2>
              <div className="font-mono text-sm md:text-base uppercase tracking-[0.2em] font-bold text-[#E8913C] mt-6 md:mt-0">
                06 / 06
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 border-l border-[#E8913C]/20 pl-6 md:pl-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E8913C]" />
            {CAPABILITIES_DATA.map((item) => (
              <div key={item.id} className="flex flex-col items-start relative">
                <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-2 text-[#E8913C]">
                  CAP—{item.id}
                </div>
                <h3 className="font-syne text-2xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-[#EDE7DC]">
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

  return (
    <Section id="capabilities" className="bg-[#0A0C0E] p-0 m-0 relative border-b border-[#EDE7DC]/10">
      <div ref={containerRef} className="h-[400vh] w-full relative">
        {/* Sticky vertical scroll-controlled architecture navigator */}
        <div className="sticky top-0 h-[100dvh] w-full max-w-7xl mx-auto px-6 md:px-24 flex flex-col justify-center">
          
          <div className="flex-none pt-24 md:pt-32 pb-8">
            <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#6C7378] mb-4 block">
              04 / TECHNICAL ARSENAL
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-[0.9]">
                Technical<br/>Architecture
              </h2>
              {/* Counter shows 01 / 06, etc. */}
              <div className="font-mono text-sm md:text-base uppercase tracking-[0.2em] font-bold text-[#E8913C] mt-6 md:mt-0">
                0{activeIndex + 1} / 06
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full flex items-center mb-16 md:mb-24">
             {/* Thin vertical progress rail grows with scroll */}
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#EDE7DC]/10">
                <motion.div className="w-full h-full bg-[#E8913C] origin-top" style={{ scaleY: smoothProgress }} />
             </div>

             {/* Dynamic Carousel Container */}
             <div className="relative w-full h-full ml-8 md:ml-16 overflow-hidden">
               {CAPABILITIES_DATA.map((item, i) => (
                 <CarouselItem key={item.id} item={item} index={i} progress={smoothProgress} />
               ))}
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
