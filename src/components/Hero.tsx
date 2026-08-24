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

  // 1. Panels opening (0% to 40% scroll)
  const xLeftPanel = useTransform(
    scrollYProgress,
    [0, 0.4],
    [shouldReduceMotion ? "-100%" : "0%", "-100%"]
  );
  const xRightPanel = useTransform(
    scrollYProgress,
    [0, 0.4],
    [shouldReduceMotion ? "100%" : "0%", "100%"]
  );

  // 2. Wordmark growing and tracking tightening (0% to 60% scroll)
  const scaleWordmark = useTransform(
    scrollYProgress,
    [0, 0.6],
    [shouldReduceMotion ? 1.0 : 0.8, shouldReduceMotion ? 1.0 : 1.3]
  );
  const letterSpacingWordmark = useTransform(
    scrollYProgress,
    [0, 0.6],
    [shouldReduceMotion ? "0.02em" : "0.5em", "0.02em"]
  );

  // 3. Wordmark splitting (30% to 80% scroll)
  const xLeftWord = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    [shouldReduceMotion ? "-120px" : "0px", "-120px"]
  );
  const xRightWord = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    [shouldReduceMotion ? "120px" : "0px", "120px"]
  );

  // 4. Portrait subtle scale (30% to 80% scroll)
  const scalePortrait = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    [0.95, 1.05]
  );

  // 5. Metadata opacity fade (0% to 25% scroll)
  const opacityMeta = useTransform(
    scrollYProgress,
    [0, 0.25],
    [shouldReduceMotion ? 1 : 1, shouldReduceMotion ? 1 : 0]
  );

  // 6. Scroll down indicator fade
  const opacityScroll = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative md:h-[200vh] w-full bg-background">
      
      {/* ========================================================================= */}
      {/* DESKTOP STICKY LAYOUT (md and up) */}
      {/* ========================================================================= */}
      <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden items-center justify-center">
        
        {/* Subtle grid line overlays for editorial layout feeling */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-12 max-w-[1200px] mx-auto px-16 w-full z-30">
          <div className="col-span-1 border-l border-r border-border-custom/20 h-full" />
          <div className="col-span-5 h-full" />
          <div className="col-span-1 border-r border-border-custom/20 h-full" />
          <div className="col-span-4 h-full" />
          <div className="col-span-1 border-r border-border-custom/20 h-full" />
        </div>

        {/* LAYER 1: The Portrait (z-index 0) */}
        <div className="absolute z-0 w-[340px] h-[430px] border border-border-custom bg-surface p-3 overflow-hidden shadow-2xl">
          <motion.div style={{ scale: scalePortrait }} className="relative w-full h-full">
            <Image
              src="/Aarav.png"
              alt="Aarav Saini Portrait"
              fill
              sizes="340px"
              priority
              className="object-cover grayscale brightness-90 contrast-105"
            />
          </motion.div>
        </div>

        {/* LAYER 2: The Portal Panels (z-index 10) */}
        <motion.div
          style={{ x: xLeftPanel }}
          className="absolute left-0 top-0 w-1/2 h-full bg-background border-r border-border-custom/30 z-10"
        />
        <motion.div
          style={{ x: xRightPanel }}
          className="absolute right-0 top-0 w-1/2 h-full bg-background border-l border-border-custom/30 z-10"
        />

        {/* LAYER 3: Wordmark & Supporting Metadata (z-index 20) */}
        <div className="absolute inset-0 flex flex-col justify-between py-16 z-20 pointer-events-none">
          
          {/* Top Metadata */}
          <motion.div
            style={{ opacity: opacityMeta }}
            className="w-full flex justify-between max-w-[1200px] mx-auto px-16 text-secondary/60 font-mono text-[10px] uppercase tracking-wider"
          >
            <span>AI / Full-Stack / Builder</span>
            <span>Est. 2026</span>
          </motion.div>

          {/* Central Typography and CTAs */}
          <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-16 relative">
            
            {/* Tagline */}
            <motion.span
              style={{ opacity: opacityMeta }}
              className="font-sans-body text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-6"
            >
              AI &bull; FULL-STACK &bull; BUILDER
            </motion.span>

            {/* Title / Wordmark splits */}
            <motion.h1
              style={{ scale: scaleWordmark, letterSpacing: letterSpacingWordmark }}
              className="font-serif-display text-7xl lg:text-8xl font-black uppercase text-foreground leading-none flex items-center justify-center gap-4 relative py-2"
            >
              <motion.span style={{ x: xLeftWord }} className="inline-block">
                Aarav
              </motion.span>
              <motion.span style={{ x: xRightWord }} className="inline-block">
                Saini
              </motion.span>
            </motion.h1>

            {/* Positioning Statement and CTAs */}
            <motion.div
              style={{ opacity: opacityMeta }}
              className="flex flex-col items-center mt-8 pointer-events-auto"
            >
              <p className="font-sans-body text-base text-secondary max-w-[460px] text-center leading-relaxed mb-8">
                AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.
              </p>
              
              <div className="flex items-center gap-4">
                <Button href="#work" variant="primary">
                  View Work
                </Button>
                <Button href="#contact" variant="secondary">
                  Let&apos;s Connect
                </Button>
              </div>
            </motion.div>

          </div>

          {/* Scroll down indicator */}
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
        
        {/* Tagline */}
        <div className="flex flex-col items-start pt-4">
          <span className="font-sans-body text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
            AI &bull; FULL-STACK &bull; BUILDER
          </span>
          {/* Title */}
          <h1 className="font-serif-display text-4xl sm:text-5xl font-black uppercase text-foreground leading-[1.1]">
            Aarav Saini
          </h1>
        </div>

        {/* Portrait Image Block */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[260px] sm:max-w-[320px] aspect-[19/24] bg-surface border border-border-custom p-3 overflow-hidden shadow-xl">
            <div className="relative w-full h-full">
              <Image
                src="/Aarav.png"
                alt="Aarav Saini Portrait"
                fill
                sizes="(max-width: 768px) 260px, 320px"
                priority
                className="object-cover grayscale brightness-90 contrast-105"
              />
            </div>
          </div>
        </div>

        {/* Text Positioning Statement & CTAs */}
        <div className="flex flex-col gap-6">
          <p className="font-sans-body text-sm text-secondary leading-relaxed max-w-[460px]">
            AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.
          </p>
          
          <div className="flex flex-col gap-3 w-full">
            <Button href="#work" variant="primary" className="w-full">
              View Work
            </Button>
            <Button href="#contact" variant="secondary" className="w-full">
              Let&apos;s Connect
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
};
