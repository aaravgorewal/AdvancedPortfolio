"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll monitoring for desktop scroll-driven transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Typography transitions
  const yText = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [0, shouldReduceMotion ? 0 : -80]
  );
  const opacityText = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    [1, shouldReduceMotion ? 1 : 0]
  );

  // Portrait image transformations
  const scalePortrait = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [1, shouldReduceMotion ? 1 : 1.08]
  );
  const xPortrait = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    ["0%", shouldReduceMotion ? "0%" : "-5%"]
  );

  // Scroll indicator fade
  const opacityScroll = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative md:h-[180vh] w-full bg-background"
    >
      {/* Sticky viewports wrapper */}
      <div className="md:sticky md:top-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full overflow-hidden flex flex-col justify-between">
        
        {/* Subtle grid line overlays for editorial layout feeling (desktop only) */}
        <div className="absolute inset-0 pointer-events-none hidden md:grid grid-cols-12 max-w-[1200px] mx-auto px-16 w-full">
          <div className="col-span-1 border-l border-r border-border-custom/30 h-full" />
          <div className="col-span-5 h-full" />
          <div className="col-span-1 border-r border-border-custom/30 h-full" />
          <div className="col-span-4 h-full" />
          <div className="col-span-1 border-r border-border-custom/30 h-full" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-16 w-full flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pt-8 md:pt-0">
          
          {/* Typography Content Panel */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="md:col-span-7 flex flex-col items-start z-10 text-left"
          >
            {/* Tagline */}
            <span className="font-sans-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              AI &bull; FULL-STACK &bull; BUILDER
            </span>

            {/* Title */}
            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-6 uppercase">
              Aarav Saini
            </h1>

            {/* Short positioning statement */}
            <p className="font-sans-body text-sm sm:text-base md:text-lg text-secondary max-w-[460px] leading-relaxed mb-8">
              AI/ML student and full-stack developer building modern, scalable,
              and user-focused digital products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="#work" variant="primary" className="w-full sm:w-auto">
                View Work
              </Button>
              <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
                Let&apos;s Connect
              </Button>
            </div>
          </motion.div>

          {/* Portrait Image Panel */}
          <div className="md:col-span-5 w-full flex justify-center md:justify-end z-0">
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] bg-surface border border-border-custom p-3 overflow-hidden shadow-2xl">
              <motion.div
                style={{ scale: scalePortrait, x: xPortrait }}
                className="relative w-full h-full"
              >
                <Image
                  src="/Aarav.png"
                  alt="Aarav Saini Portrait"
                  fill
                  sizes="(max-width: 768px) 320px, 380px"
                  priority
                  className="object-cover grayscale brightness-90 contrast-105"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          style={{ opacity: opacityScroll }}
          className="w-full flex justify-center pb-6 md:pb-8 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans-body text-[9px] uppercase tracking-widest text-secondary/60">
              Scroll to explore
            </span>
            <ArrowDown className="w-4 h-4 text-secondary/60 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
