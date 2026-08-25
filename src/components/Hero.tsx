"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll monitoring for desktop scroll-driven transforms (250vh height parent)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Panels opening (0% to 45% scroll)
  const xLeftPanel = useTransform(
    scrollYProgress,
    [0, 0.45],
    [shouldReduceMotion ? "-100%" : "0%", "-100%"]
  );
  const xRightPanel = useTransform(
    scrollYProgress,
    [0, 0.45],
    [shouldReduceMotion ? "100%" : "0%", "100%"]
  );

  // 2. Wordmark scaling and tracking tightening (0% to 50% scroll)
  const scaleWordmark = useTransform(
    scrollYProgress,
    [0, 0.5],
    [shouldReduceMotion ? 1.0 : 0.85, shouldReduceMotion ? 1.0 : 1.15]
  );
  const letterSpacingWordmark = useTransform(
    scrollYProgress,
    [0, 0.5],
    [shouldReduceMotion ? "0.02em" : "0.3em", "0.02em"]
  );

  // 3. Wordmark splitting (25% to 70% scroll)
  const xLeftWord = useTransform(
    scrollYProgress,
    [0.25, 0.7],
    [shouldReduceMotion ? "-35%" : "0%", "-35%"]
  );
  const xRightWord = useTransform(
    scrollYProgress,
    [0.25, 0.7],
    [shouldReduceMotion ? "35%" : "0%", "35%"]
  );

  // 4. Accent dots traveling outward (0% to 50% scroll)
  const xLeftDot = useTransform(
    scrollYProgress,
    [0, 0.5],
    [shouldReduceMotion ? "-45vw" : "0px", "-45vw"]
  );
  const xRightDot = useTransform(
    scrollYProgress,
    [0, 0.5],
    [shouldReduceMotion ? "45vw" : "0px", "45vw"]
  );

  // 5. Portrait overscale settling toward 1.0 (0% to 70% scroll)
  const scalePortrait = useTransform(
    scrollYProgress,
    [0, 0.7],
    [shouldReduceMotion ? 1.0 : 1.15, 1.0]
  );

  // 6. Subtle dark cinematic veil opacity (0% to 50% scroll)
  const opacityVeil = useTransform(
    scrollYProgress,
    [0, 0.5],
    [shouldReduceMotion ? 0.35 : 0.6, 0.35]
  );

  // 7. Metadata opacity fade (0% to 20% scroll)
  const opacityMeta = useTransform(
    scrollYProgress,
    [0, 0.2],
    [shouldReduceMotion ? 1 : 1, shouldReduceMotion ? 1 : 0]
  );

  // 8. Scroll down indicator fade (0% to 15% scroll)
  const opacityScroll = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative md:h-[250vh] w-full bg-background">
      
      {/* ========================================================================= */}
      {/* DESKTOP STICKY STAGE (md and up) */}
      {/* ========================================================================= */}
      <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden items-center justify-center">
        
        {/* Subtle grid line overlays for editorial layout accent */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-12 max-w-[1200px] mx-auto px-16 w-full z-30">
          <div className="col-span-1 border-l border-r border-border-custom/20 h-full" />
          <div className="col-span-5 h-full" />
          <div className="col-span-1 border-r border-border-custom/20 h-full" />
          <div className="col-span-4 h-full" />
          <div className="col-span-1 border-r border-border-custom/20 h-full" />
        </div>

        {/* LAYER 1: Full-Screen Cinematic Portrait (z-index 0) */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <motion.div style={{ scale: scalePortrait }} className="relative w-full h-full">
            <Image
              src="/Aarav.png"
              alt="Aarav Saini Portrait"
              fill
              sizes="100vw"
              priority
              className="object-cover grayscale contrast-105"
            />
          </motion.div>
        </div>

        {/* LAYER 1.5: Subtle Dark Cinematic Veil (z-index 5) */}
        <motion.div
          style={{ opacity: opacityVeil }}
          className="absolute inset-0 bg-[#080808] z-5 pointer-events-none"
        />

        {/* LAYER 2: Solid Dark Portal Panels (z-index 10) */}
        <motion.div
          style={{ x: xLeftPanel }}
          className="absolute left-0 top-0 w-1/2 h-full bg-background border-r border-border-custom/30 z-10"
        />
        <motion.div
          style={{ x: xRightPanel }}
          className="absolute right-0 top-0 w-1/2 h-full bg-background border-l border-border-custom/30 z-10"
        />

        {/* LAYER 2.5: Horizontal hairline + Traveling Accent Dots (z-index 15) */}
        <div className="absolute left-16 right-16 top-1/2 h-[1px] bg-border-custom/20 z-15 pointer-events-none">
          <motion.div
            style={{ x: xLeftDot }}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
          />
          <motion.div
            style={{ x: xRightDot }}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>

        {/* LAYER 3: Huge Typographical Overlay & Metadata (z-index 20) */}
        <div className="absolute inset-0 flex flex-col justify-between py-16 z-20 pointer-events-none">
          
          {/* Top Editorial Metadata */}
          <motion.div
            style={{ opacity: opacityMeta }}
            className="w-full flex justify-between max-w-[1200px] mx-auto px-16 text-secondary/60 font-mono text-[10px] uppercase tracking-wider"
          >
            <span>AI / Full-Stack / Builder</span>
            <span>Est. 2026</span>
          </motion.div>

          {/* Huge Central Typography Wrapper */}
          <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-16 relative">
            
            {/* Tagline */}
            <motion.span
              style={{ opacity: opacityMeta }}
              className="font-sans-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-6"
            >
              AI / FULL-STACK / BUILDER
            </motion.span>

            {/* Asymmetric Stacked Wordmark */}
            <motion.h1
              style={{ scale: scaleWordmark }}
              className="flex flex-col items-stretch w-full max-w-[90vw] lg:max-w-[85vw] mx-auto select-none font-serif-display font-black uppercase text-foreground leading-[0.8] py-2 relative"
            >
              {/* Upper Span (Align Left) */}
              <motion.span
                style={{ x: xLeftWord, letterSpacing: letterSpacingWordmark }}
                className="inline-block text-left text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem]"
              >
                Aarav
              </motion.span>
              
              {/* Lower Span (Align Right) */}
              <motion.span
                style={{ x: xRightWord, letterSpacing: letterSpacingWordmark }}
                className="inline-block text-right text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem]"
              >
                Saini
              </motion.span>
            </motion.h1>

          </div>

          {/* Bottom Scroll Indicator */}
          <motion.div
            style={{ opacity: opacityScroll }}
            className="w-full flex justify-center pb-4 pointer-events-none"
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

      {/* ========================================================================= */}
      {/* MOBILE LAYOUT (sm and below) */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col w-full h-auto py-12 px-5 bg-background text-left gap-8">
        
        {/* Tagline & Title */}
        <div className="flex flex-col w-full pt-4">
          <span className="font-sans-body text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
            AI / FULL-STACK / BUILDER
          </span>
          <div className="flex flex-col w-full font-serif-display text-5xl font-black uppercase text-foreground leading-[0.8] select-none">
            <span className="text-left">Aarav</span>
            <span className="text-right mt-2">Saini</span>
          </div>
        </div>

        {/* Portrait Image Block */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[19/24] bg-surface border border-border-custom p-3 overflow-hidden shadow-xl">
            <div className="relative w-full h-full">
              <Image
                src="/Aarav.png"
                alt="Aarav Saini Portrait"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                priority
                className="object-cover grayscale brightness-90 contrast-105"
              />
            </div>
          </div>
        </div>

        {/* Text Positioning Statement */}
        <div className="flex flex-col gap-6">
          <p className="font-sans-body text-sm text-secondary leading-relaxed max-w-[460px]">
            AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.
          </p>
        </div>

      </div>

    </div>
  );
};
