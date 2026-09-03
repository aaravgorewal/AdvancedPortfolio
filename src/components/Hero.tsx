"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll monitoring for desktop & mobile scroll-driven transforms (250vh height parent)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Panels opening (0% to 100% scroll progress) - Translate 50.5% panels completely off-screen by 110%
  const xLeftPanel = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "-110%" : "0%", "-110%"]
  );
  const xRightPanel = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "110%" : "0%", "110%"]
  );

  // 2. Wordmark scaling and display tracking (0% to 100% scroll progress)
  const scaleWordmark = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? 1.0 : 1.0, shouldReduceMotion ? 1.0 : 1.15]
  );
  const letterSpacingWordmark = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "-0.03em" : "-0.02em", "-0.03em"]
  );

  // 3. Wordmark splitting (0% to 100% scroll progress) - Translate spans outward by 40%
  const xLeftWord = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "-40%" : "0%", "-40%"]
  );
  const xRightWord = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "40%" : "0%", "40%"]
  );

  // 4. Accent dots traveling outward diagonally (0% to 100% scroll progress)
  const xLeftDot = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "-40vw" : "-3px", "-40vw"]
  );
  const yLeftDot = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "-35vh" : "-3px", "-35vh"]
  );

  const xRightDot = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "40vw" : "-3px", "40vw"]
  );
  const yRightDot = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? "35vh" : "-3px", "35vh"]
  );

  // 5. Image overscale settling toward 1.0 (0% to 100% scroll progress)
  const scalePortrait = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? 1.0 : 1.1, 1.0]
  );

  // 6. Subtle duotone wash opacity (0% to 100% scroll progress)
  const opacityDuotone = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? 0.35 : 0.0, 0.35]
  );

  // 7. Radial darkening veil opacity (0% to 100% scroll progress)
  const opacityVeil = useTransform(
    scrollYProgress,
    [0, 1.0],
    [shouldReduceMotion ? 0.4 : 0.65, 0.4]
  );

  // 8. Metadata opacity fade (0% to 20% scroll progress)
  const opacityMeta = useTransform(
    scrollYProgress,
    [0, 0.2],
    [shouldReduceMotion ? 1 : 1, shouldReduceMotion ? 1 : 0]
  );

  // 9. Scroll down indicator fade (0% to 15% scroll progress)
  return (
    <section
      ref={containerRef}
      id="hero-portal"
      className="relative h-[250vh] w-full bg-[#0A0C0E] touch-pan-y isolate"
    >
      {/* Sticky stage (fills viewport) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden select-none z-10">

        {/* LAYER 1: Full-Screen Cinematic Studio Atmosphere (z-index 0) */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <motion.div style={{ scale: scalePortrait }} className="relative w-full h-full">
            <Image
              src="/Aarav.png"
              alt="Aarav Saini Portrait"
              fill
              sizes="100vw"
              priority
              className="object-cover grayscale brightness-50 opacity-90"
            />
          </motion.div>

          {/* LAYER 1.5: Subtle Duotone wash overlay (z-index 2) */}
          <motion.div
            style={{ opacity: opacityDuotone }}
            className="absolute inset-0 bg-gradient-to-tr from-[#2E6B72] to-[#E8913C] mix-blend-overlay z-2 pointer-events-none"
          />

          {/* LAYER 1.8: Radial darkening veil (z-index 5) */}
          <motion.div
            style={{ opacity: opacityVeil }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0A0C0E_95%)] z-5 pointer-events-none"
          />
        </div>

        {/* LAYER 2: Solid Dark Portal Panels (z-index 20) */}
        <motion.div
          style={{ x: xLeftPanel }}
          className="absolute left-0 top-0 w-[50.5%] h-full bg-[#0A0C0E] border-r border-[#EDE7DC]/[0.05] z-20"
        />
        <motion.div
          style={{ x: xRightPanel }}
          className="absolute right-0 top-0 w-[50.5%] h-full bg-[#0A0C0E] border-l border-[#EDE7DC]/[0.05] z-20"
        />

        {/* LAYER 3: Corner Metadata Overlay (z-index 30) */}
        <div className="absolute inset-0 z-30 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
          <motion.div
            style={{ opacity: opacityMeta }}
            className="flex justify-between items-start text-[10px] uppercase tracking-widest font-semibold opacity-60 text-[#EDE7DC] font-sans-body"
          >
            <div>
              <span className="text-[#E8913C] mr-2">●</span>AI/ML × SOFTWARE × PRODUCT
            </div>

          </motion.div>
          <motion.div
            style={{ opacity: opacityMeta }}
            className="flex justify-between items-end text-[10px] uppercase tracking-widest font-semibold opacity-60 text-[#EDE7DC] font-sans-body"
          >

            <div className="flex items-center gap-2">
              <span>Scroll to Enter</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </div>
          </motion.div>
        </div>

        {/* LAYER 4: Centered Split Wordmark (z-index 40) */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <motion.h1
            style={{ scale: scaleWordmark, letterSpacing: letterSpacingWordmark }}
            className="font-syne text-[clamp(40px,12vw,180px)] font-extrabold flex leading-none tracking-tighter-custom uppercase text-[#EDE7DC]"
          >
            <motion.span
              style={{ x: xLeftWord }}
              className="inline-block"
            >
              AARAV
            </motion.span>
            <motion.span
              style={{ x: xRightWord }}
              className="inline-block ml-[0.1em]"
            >
              SAINI
            </motion.span>
          </motion.h1>
        </div>

        {/* LAYER 5: Accent Dots (z-index 40) */}
        <motion.div
          style={{ x: xLeftDot, y: yLeftDot }}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#E8913C] rounded-full z-40 animate-pulse"
        />
        <motion.div
          style={{ x: xRightDot, y: yRightDot }}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#2E6B72] rounded-full z-40 animate-pulse"
        />

      </div>
    </section>
  );
};
