"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Section } from "./ui/SectionGrid";
import Image from "next/image";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Monitor scroll progress relative to the container element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform bindings matching the reference implementation offsets
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-15, 15]);

  return (
    <div ref={containerRef} className="relative w-full">
      <Section id="about" className="relative min-h-screen flex items-center overflow-hidden border-b border-border-custom py-32">
        <div className="max-w-5xl z-10 text-left">
          
          {/* Section index indicator label */}
          <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C] mb-8">
            ABOUT / 02
          </div>
          
          {/* Main positioning statement */}
          <h2 className="font-serif-display text-[clamp(32px,5vw,64px)] leading-[1.05] font-extrabold max-w-[20ch] text-foreground uppercase tracking-tight mb-8">
            I build <span className="text-[#E8913C]">AI-powered products</span>, full-stack systems, and digital experiences.
          </h2>
          
          {/* Intersection copy */}
          <p className="text-[#9EA5A8] text-lg max-w-xl leading-relaxed mb-10 font-sans-body">
            My work sits at the intersection of AI/ML, software engineering, and product development—translating concepts into functional, scalable systems.
          </p>
          
          {/* Supporting credentials fold */}
          <div className="border-l border-[#2E6B72] pl-6 font-sans-body mb-16">
            <span className="text-[10px] font-mono text-[#2E6B72] uppercase tracking-wider block mb-1">
              Academic Foundation
            </span>
            <h4 className="text-[#EDE7DC] font-bold text-sm">
              B.Tech in Artificial Intelligence & Machine Learning
            </h4>
            <p className="text-[#9EA5A8] text-xs mt-0.5">
              Dewan V.S. Institute of Engineering & Technology
            </p>
          </div>

          {/* Large display index number */}
          <div>
            <span
              className="font-serif-display text-[140px] font-extrabold leading-none opacity-20 text-transparent"
              style={{ WebkitTextStroke: "1px var(--foreground)" }}
            >
              02
            </span>
          </div>
        </div>
        
        {/* Floating Circle Image */}
        <motion.div
          style={{ y, rotate }}
          className="absolute -right-20 top-1/4 w-[500px] h-[500px] rounded-full overflow-hidden opacity-20 pointer-events-none hidden md:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1571330735066-03add2f52c97?auto=format&fit=crop&q=80&w=1200"
            alt="Vinyl detail"
            fill
            sizes="500px"
            className="object-cover"
          />
        </motion.div>
      </Section>
    </div>
  );
};
