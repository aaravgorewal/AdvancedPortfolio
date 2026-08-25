"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { Section } from "./ui/SectionGrid";
import Image from "next/image";

interface CardItem {
  index: number;
  catalog: string;
  title: string;
  date: string;
  image: string;
  category: string;
  year: string;
  problem: string;
  whatIBuilt: string;
  features: string;
  tech: string;
  contribution: string;
  type: string;
}

const CARDS: CardItem[] = [
  {
    index: 0,
    catalog: "PROJECT-01",
    title: "MINDSETX",
    date: "AI Wellness Vault adapts to mood trends.",
    image: "/Minee.png",
    category: "AI/ML · FULL-STACK",
    year: "2026",
    problem: "Standard wellness apps lack deep personalization and compromise user data privacy.",
    whatIBuilt: "A secure mood-tracking portal leveraging local client-side AI analysis to recommend wellness tips.",
    features: "Zero-knowledge Bio Vault, client-side model processing, mood analytics dashboard.",
    tech: "React, Node.js, AI Logic, MongoDB, Tailwind CSS",
    contribution: "Lead Full-Stack Developer",
    type: "Personal Project",
  },
  {
    index: 1,
    catalog: "PROJECT-02",
    title: "ASSETFLOW",
    date: "AI-powered asset management platform.",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    category: "FULL-STACK · SYSTEM",
    year: "2026",
    problem: "Manual inventory audits cause inconsistent logs and asset verification overhead.",
    whatIBuilt: "A tracking system incorporating barcode queries and predictive demand estimations.",
    features: "Dynamic scanning system, live status tables, structured demand calculations.",
    tech: "React, Next.js, Express, MongoDB, Node.js",
    contribution: "Lead Developer",
    type: "Freelance Project",
  },
  {
    index: 2,
    catalog: "PROJECT-03",
    title: "TRAVELVERSE AI",
    date: "Intelligent itinerary trip builder.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    category: "AI/ML · NEXT.JS",
    year: "2026",
    problem: "Travel planning involves manual search lookups and tedious schedule sequencing.",
    whatIBuilt: "An itinerary planner querying multiple destination APIs to map trip schedules.",
    features: "API connectors, automatic route sequencing, customizable travel tags.",
    tech: "Next.js, Python, OpenAI API, Tailwind CSS",
    contribution: "Creator",
    type: "Hackathon Project",
  },
  {
    index: 3,
    catalog: "PROJECT-04",
    title: "EDULEARN PLATFORM",
    date: "Smart structured learning platform.",
    image: "https://images.unsplash.com/photo-1514525253361-b840b1e92842?auto=format&fit=crop&q=80&w=800",
    category: "NEXT.JS · NODE.JS",
    year: "2025",
    problem: "Students experience cognitive fatigue due to disjointed study tools.",
    whatIBuilt: "A keyboard-traversable learning workspace organizing resources and automations.",
    features: "Central calendar pacing algorithm, workspace layouts, optimized load times under 1 second.",
    tech: "Next.js, Node.js, Express, Tailwind CSS",
    contribution: "Frontend Developer",
    type: "Personal Project",
  },
  {
    index: 4,
    catalog: "PROJECT-05",
    title: "AI RELAY BRIDGE",
    date: "WebSocket gateway voice controller.",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    category: "HARDWARE · WEB LLM",
    year: "2025",
    problem: "Software models lack direct interaction loops with physical hardware devices.",
    whatIBuilt: "A WebSocket gateway connecting conversational inputs to Arduino microcontroller triggers.",
    features: "Arduino hardware interfaces, real-time command sockets, latency optimization under 150ms.",
    tech: "React, Python, Arduino C++, WebSockets",
    contribution: "Embedded & Full-Stack Developer",
    type: "Hackathon Project",
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thrown, setThrown] = useState<{ [key: number]: "left" | "right" | null }>({});
  const shouldReduceMotion = useReducedMotion();

  // Motion value tracking for top card horizontal drag
  const dragX = useMotionValue(0);
  const rotateDrag = useTransform(dragX, [-150, 150], [-12, 12]);
  const scaleDrag = useTransform(dragX, [-150, 0, 150], [1.03, 1, 1.03]);

  // Handle manual deck throw
  const executeThrow = useCallback((direction: "left" | "right") => {
    setThrown((prev) => ({ ...prev, [currentIndex]: direction }));
    const nextIndex = (currentIndex + 1) % CARDS.length;
    setCurrentIndex(nextIndex);

    // If cycled back to start, clear thrown states after exit animation completes
    if (nextIndex === 0) {
      setTimeout(() => {
        setThrown({});
      }, 600);
    }
  }, [currentIndex]);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (shouldReduceMotion) return;
      if (e.key === "ArrowLeft") {
        executeThrow("left");
      } else if (e.key === "ArrowRight") {
        executeThrow("right");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldReduceMotion, executeThrow]);

  // Calculated progress bar width matching index
  const progressPercent = ((currentIndex + 1) / CARDS.length) * 100;
  const activeCard = CARDS[currentIndex];

  return (
    <Section id="catalogue" className="px-6 md:px-24 py-32 bg-[#101317] border-b border-border-custom">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Column: Catalogue Metadata (Dynamic to selected card) */}
        <div className="text-left flex flex-col justify-center min-h-[520px]">
          <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C] mb-4">
            [ {activeCard.type} ]
          </div>
          <span className="text-[10px] font-mono text-[#2E6B72] uppercase tracking-widest font-semibold block mb-2">
            {activeCard.catalog}{" // "}{activeCard.year}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-8 text-[#EDE7DC] uppercase tracking-tighter">
            {activeCard.title}
          </h2>
          
          <div className="space-y-6 font-sans-body mb-8">
            <div>
              <span className="text-[10px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">
                The Problem
              </span>
              <p className="text-[#9EA5A8] text-sm leading-relaxed max-w-lg">
                {activeCard.problem}
              </p>
            </div>
            
            <div>
              <span className="text-[10px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">
                What I Built
              </span>
              <p className="text-[#9EA5A8] text-sm leading-relaxed max-w-lg">
                {activeCard.whatIBuilt}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-lg border-t border-[#EDE7DC]/13 pt-6">
              <div>
                <span className="text-[10px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">
                  My Contribution
                </span>
                <p className="text-[#EDE7DC] text-xs font-semibold uppercase tracking-wider">
                  {activeCard.contribution}
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">
                  Technologies
                </span>
                <p className="text-[#EDE7DC] text-xs font-semibold uppercase tracking-wider">
                  {activeCard.tech}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 border border-[#EDE7DC]/20 uppercase text-[10px] font-bold tracking-widest text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors focus-ring">
              View GitHub
            </button>
            <button className="px-6 py-3 bg-[#EDE7DC]/5 uppercase text-[10px] font-bold tracking-widest text-[#EDE7DC] hover:bg-[#EDE7DC]/10 transition-colors focus-ring">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right Column: Throwable Cards Deck */}
        <div className="relative flex flex-col items-center">
          <div
            tabIndex={0}
            className="deck-container relative w-[320px] h-[360px] md:w-[400px] md:h-[440px] focus-ring rounded-lg outline-none touch-pan-y"
            aria-label="Aarav Saini Project Sleeves Stack. Use Left and Right arrow keys to swipe."
          >
            {CARDS.map((card) => {
              const isTop = card.index === currentIndex;
              const cardThrown = thrown[card.index];
              const relativeIndex = (card.index - currentIndex + CARDS.length) % CARDS.length;

              // Card stack physical offset positions
              let positionClass = "z-10 translate-x-4 translate-y-4 rotate-3";
              if (relativeIndex === 0) {
                positionClass = "z-50 translate-x-0 translate-y-0 rotate-0";
              } else if (relativeIndex === 1) {
                positionClass = "z-45 translate-x-2 -translate-y-2 -rotate-2";
              } else if (relativeIndex === 2) {
                positionClass = "z-30 translate-x-4 translate-y-2 rotate-3";
              } else if (relativeIndex === 3) {
                positionClass = "z-20 -translate-x-2 translate-y-4 -rotate-1";
              } else if (relativeIndex === 4) {
                positionClass = "z-10 translate-x-3 -translate-y-3 rotate-4";
              }

              // Apply thrown styles
              let transformStyle = {};
              if (cardThrown === "left") {
                transformStyle = { transform: "translate(-200%, -30%) rotate(-60deg)", opacity: 0, pointerEvents: "none" };
              } else if (cardThrown === "right") {
                transformStyle = { transform: "translate(200%, -30%) rotate(60deg)", opacity: 0, pointerEvents: "none" };
              }

              return (
                <motion.div
                  key={card.index}
                  drag={isTop && !shouldReduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(event, info) => {
                    if (isTop && Math.abs(info.offset.x) > 60) {
                      executeThrow(info.offset.x > 0 ? "right" : "left");
                    } else if (isTop) {
                      dragX.set(0);
                    }
                  }}
                  style={
                    cardThrown
                      ? transformStyle
                      : isTop
                      ? {
                          x: dragX,
                          rotate: rotateDrag,
                          scale: scaleDrag,
                        }
                      : {}
                  }
                  className={`card absolute inset-0 bg-[#0A0C0E] border border-[#EDE7DC]/10 p-5 shadow-2xl transition-all duration-500 ease-out select-none flex flex-col justify-between ${
                    cardThrown ? "" : positionClass
                  }`}
                >
                  <div className="w-full aspect-square overflow-hidden mb-4 relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                    />
                  </div>
                  
                  <div className="flex flex-col text-left text-[#EDE7DC] font-sans-body">
                    <div className="flex justify-between items-start text-[8px] uppercase tracking-wider opacity-50 font-bold mb-1">
                      <span>{card.catalog}</span>
                      <span>{card.year}</span>
                    </div>
                    <div className="font-syne font-bold text-base uppercase leading-tight mb-1">
                      {card.title}
                    </div>
                    <div className="text-[10px] text-[#9EA5A8] leading-tight mb-2">
                      {card.date}
                    </div>
                    <div className="text-[8px] uppercase tracking-widest text-[#E8913C] font-semibold">
                      {card.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Deck progress indicator */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-32 h-[1px] bg-[#EDE7DC]/20 relative">
              <div
                style={{ width: `${progressPercent}%` }}
                className="absolute top-0 left-0 h-full bg-[#E8913C] transition-all duration-300"
              />
            </div>
            <div className="text-[9px] uppercase tracking-widest opacity-30 font-sans-body font-semibold">
              Grab and swipe or use arrow keys
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
