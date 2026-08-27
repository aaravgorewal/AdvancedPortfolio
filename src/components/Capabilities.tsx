"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from "framer-motion";
import { Section } from "./ui/SectionGrid";

const CAPABILITIES_DATA = [
  { id: "01", category: "AI / MACHINE LEARNING", stack: "Python · OpenAI API · Gemini · AI Agents" },
  { id: "02", category: "FULL-STACK ENGINEERING", stack: "React · Next.js · TypeScript · Tailwind CSS" },
  { id: "03", category: "BACKEND / DATA", stack: "Node.js · Express.js · MongoDB · PostgreSQL" },
  { id: "04", category: "PRODUCT DEVELOPMENT", stack: "REST APIs · Dashboards · Responsive Interfaces · SaaS Architecture" },
  { id: "05", category: "CREATIVE DEVELOPMENT", stack: "Framer Motion · Three.js · 3D / AR" },
  { id: "06", category: "RAPID PROTOTYPING", stack: "Git · GitHub · Rapid MVP Development" },
];

const CarouselItem = ({ item, index, progress }: { item: { id: string, category: string, stack: string }, index: number, progress: MotionValue<number> }) => {
  const center = index / 5;
  
  const y = useTransform(progress, 
    [center - 0.4, center - 0.2, center, center + 0.2, center + 0.4], 
    [320, 160, 0, -160, -320]
  );
  const scale = useTransform(progress,
    [center - 0.4, center - 0.2, center, center + 0.2, center + 0.4],
    [0.75, 0.85, 1, 0.85, 0.75]
  );
  const opacity = useTransform(progress,
    [center - 0.4, center - 0.2, center, center + 0.2, center + 0.4],
    [0, 0.3, 1, 0.3, 0]
  );
  
  const titleColor = useTransform(progress, [center - 0.1, center, center + 0.1], ["#6C7378", "#EDE7DC", "#6C7378"]);
  const indexColor = useTransform(progress, [center - 0.1, center, center + 0.1], ["#2E6B72", "#E8913C", "#2E6B72"]);
  const techOpacity = useTransform(progress, [center - 0.1, center, center + 0.1], [0, 1, 0]);
  const techY = useTransform(progress, [center - 0.1, center, center + 0.1], [-10, 0, -10]);

  return (
    <div className="absolute top-1/2 left-0 w-full" style={{ transform: 'translateY(-50%)' }}>
      <motion.div 
        style={{ y, opacity, scale, transformOrigin: "left center" }}
        className="flex flex-col items-start"
      >
        <motion.div style={{ color: indexColor }} className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-2">
          CAP—{item.id}
        </motion.div>
        <motion.h3 style={{ color: titleColor }} className="font-syne text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-4">
          {item.category}
        </motion.h3>
        <motion.div style={{ opacity: techOpacity, y: techY }} className="font-sans-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#9EA5A8] leading-relaxed max-w-xl">
          {item.stack}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Capabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
          <div className="flex flex-col gap-12 border-l border-[#E8913C]/20 pl-6 md:pl-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E8913C]" />
            {CAPABILITIES_DATA.map((item) => (
              <div key={item.id} className="flex flex-col items-start relative">
                <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-2 text-[#E8913C]">
                  CAP—{item.id}
                </div>
                <h3 className="font-syne text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-4 text-[#EDE7DC]">
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
        <div className="sticky top-0 h-[100dvh] w-full max-w-7xl mx-auto px-6 md:px-24 flex flex-col justify-center">
          
          <div className="flex-none pt-24 md:pt-32 pb-8">
            <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#6C7378] mb-4 block">
              04 / TECHNICAL ARSENAL
            </span>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-[0.9]">
              Technical<br/>Architecture
            </h2>
          </div>

          <div className="flex-1 relative w-full flex items-center mb-16 md:mb-24">
             {/* Progress Rail */}
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#EDE7DC]/10">
                <motion.div className="w-full h-full bg-[#E8913C] origin-top" style={{ scaleY: smoothProgress }} />
             </div>

             {/* Carousel Items Container */}
             <div className="relative w-full h-full ml-8 md:ml-16 overflow-hidden mask-vertical-edges">
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
