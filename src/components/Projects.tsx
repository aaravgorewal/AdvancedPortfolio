"use client";

import React, { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion, PanInfo } from "framer-motion";
import { Section } from "./ui/SectionGrid";
import Image from "next/image";
import { PROJECTS } from "../data/projects";

type FilterType = "all" | "client" | "personal" | "hackathon";

export const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thrown, setThrown] = useState<{ [key: number]: "left" | "right" | null }>({});
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter(p => p.type === filter);
  }, [filter]);

  const counts = useMemo(() => ({
    all: PROJECTS.length,
    client: PROJECTS.filter(p => p.type === "client").length,
    personal: PROJECTS.filter(p => p.type === "personal").length,
    hackathon: PROJECTS.filter(p => p.type === "hackathon").length,
  }), []);

  const handleFilterChange = (f: FilterType) => {
    if (f !== filter) {
      setFilter(f);
      setCurrentIndex(0);
      setThrown({});
    }
  };

  const dragX = useMotionValue(0);
  const rotateDrag = useTransform(dragX, [-150, 150], [-8, 8]);
  const scaleDrag = useTransform(dragX, [-150, 0, 150], [1.02, 1, 1.02]);

  // Contextual directional feedback
  const dragLeftOpacity = useTransform(dragX, [0, -40], [0, 1]);
  const dragRightOpacity = useTransform(dragX, [0, 40], [0, 1]);

  const nextProject = useCallback((direction: "left" | "right" = "left") => {
    if (filteredProjects.length === 0) return;
    
    const cardToThrow = currentIndex;
    setThrown((prev) => ({ ...prev, [cardToThrow]: direction }));
    
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setThrown((prev) => {
        const updated = { ...prev };
        delete updated[cardToThrow];
        return updated;
      });
    }, 600);
  }, [currentIndex, filteredProjects.length]);

  const prevProject = useCallback((direction: "left" | "right" = "right") => {
    if (filteredProjects.length === 0) return;
    
    const cardToThrow = currentIndex;
    setThrown((prev) => ({ ...prev, [cardToThrow]: direction }));
    
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setCurrentIndex(prevIndex);

    setTimeout(() => {
      setThrown((prev) => {
        const updated = { ...prev };
        delete updated[cardToThrow];
        return updated;
      });
    }, 600);
  }, [currentIndex, filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (shouldReduceMotion || filteredProjects.length === 0) return;
      if (e.key === "ArrowRight") {
        nextProject("left"); // Throw left on Next
      } else if (e.key === "ArrowLeft") {
        prevProject("right"); // Throw right on Prev
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldReduceMotion, nextProject, prevProject, filteredProjects.length]);

  const progressPercent = filteredProjects.length > 0 
    ? ((currentIndex + 1) / filteredProjects.length) * 100 
    : 0;

  const formatIndex = (idx: number) => {
    return idx < 10 ? `0${idx}` : `${idx}`;
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 60) {
      if (info.offset.x > 0) {
        // Drag right -> throw right, previous project
        prevProject("right");
      } else {
        // Drag left -> throw left, next project
        nextProject("left");
      }
      dragX.set(0); 
    } else {
      dragX.set(0);
    }
  };

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: "all", label: "ALL" },
    { id: "client", label: "CLIENT" },
    { id: "personal", label: "PERSONAL" },
    { id: "hackathon", label: "HACKATHON" }
  ];

  return (
    <Section id="catalogue" className="px-6 md:px-24 py-32 bg-[#101317] border-b border-border-custom flex flex-col items-center">
      
      <div className="w-full max-w-3xl mb-12 text-center">
        <h2 className="font-syne text-3xl md:text-5xl font-bold text-[#EDE7DC] uppercase tracking-tighter mb-8">
          Selected Work
        </h2>
        
        {/* Minimal Editorial Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-8 mb-6 font-sans-body">
          {filterTabs.map((f, i) => {
            const isActive = filter === f.id;
            return (
              <Fragment key={f.id}>
                <button
                  onClick={() => handleFilterChange(f.id)}
                  className={`text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors focus-ring outline-none ${
                    isActive ? "text-[#E8913C]" : "text-[#6C7378] hover:text-[#9EA5A8]"
                  }`}
                >
                  {f.label}
                  <span className="opacity-40 ml-[0.35rem]">/ {counts[f.id]}</span>
                </button>
                {i < filterTabs.length - 1 && (
                  <span className="text-[#EDE7DC]/10 text-[10px] select-none">|</span>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full min-h-[680px]">
        {filteredProjects.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[400px]">
            <p className="text-[#6C7378] text-sm uppercase tracking-widest font-bold">No projects found.</p>
          </div>
        ) : (
          <div
            tabIndex={0}
            className="deck-container relative w-full max-w-[420px] md:max-w-[500px] h-[680px] focus-ring rounded-none outline-none touch-pan-y"
            aria-label={`Aarav Saini Project Sleeves Stack. Use Left and Right arrow keys to swipe.`}
          >
            {filteredProjects.map((card, idx) => {
              const isTop = idx === currentIndex;
              const cardThrown = thrown[idx];
              const relativeIndex = (idx - currentIndex + filteredProjects.length) % filteredProjects.length;

              let positionClass = "z-10 translate-x-4 translate-y-4 rotate-2";
              let opacityClass = "opacity-100";
              
              if (relativeIndex === 0) {
                positionClass = "z-50 translate-x-0 translate-y-0 rotate-0";
              } else if (relativeIndex === 1) {
                positionClass = "z-45 translate-x-2 -translate-y-2 -rotate-1";
              } else if (relativeIndex === 2) {
                positionClass = "z-30 translate-x-4 translate-y-2 rotate-2";
              } else if (relativeIndex === 3) {
                positionClass = "z-20 -translate-x-2 translate-y-4 -rotate-1";
              } else if (relativeIndex === 4) {
                positionClass = "z-10 translate-x-3 -translate-y-3 rotate-2";
              } else {
                opacityClass = "opacity-0 pointer-events-none";
              }

              let transformStyle = {};
              if (cardThrown === "left") {
                transformStyle = { transform: "translate(-150%, -10%) rotate(-30deg)", opacity: 0, pointerEvents: "none" };
              } else if (cardThrown === "right") {
                transformStyle = { transform: "translate(150%, -10%) rotate(30deg)", opacity: 0, pointerEvents: "none" };
              }

              return (
                <motion.div
                  key={card.id}
                  drag={isTop && !shouldReduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={isTop ? handleDragEnd : undefined}
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
                  className={`card absolute inset-0 bg-[#0A0C0E] border border-[#EDE7DC]/10 shadow-2xl transition-all duration-500 ease-out select-none flex flex-col ${
                    cardThrown ? "" : positionClass
                  } ${cardThrown ? "" : opacityClass}`}
                >
                  
                  {/* Directional Drag Feedback */}
                  {isTop && !cardThrown && (
                    <>
                      <motion.div 
                        style={{ opacity: dragLeftOpacity }} 
                        className="absolute top-4 right-4 z-50 text-[9px] uppercase tracking-[0.2em] font-bold text-[#E8913C] bg-[#0A0C0E]/80 px-3 py-1.5 border border-[#E8913C]/20 backdrop-blur-md pointer-events-none"
                      >
                        NEXT →
                      </motion.div>
                      <motion.div 
                        style={{ opacity: dragRightOpacity }} 
                        className="absolute top-4 left-4 z-50 text-[9px] uppercase tracking-[0.2em] font-bold text-[#E8913C] bg-[#0A0C0E]/80 px-3 py-1.5 border border-[#E8913C]/20 backdrop-blur-md pointer-events-none"
                      >
                        ← PREVIOUS
                      </motion.div>
                    </>
                  )}

                  {/* Visual Hero Area */}
                  <div className="w-full h-56 md:h-64 relative bg-[#1A1D21] shrink-0 border-b border-[#EDE7DC]/10 overflow-hidden">
                    {card.image && (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500 pointer-events-none"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Editorial Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col font-sans-body overflow-hidden">
                    
                    {/* Metadata Header */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C]">
                        [ {card.type === "client" ? "CLIENT WORK" : card.type} ]
                      </span>
                      <span className="text-[10px] font-mono text-[#2E6B72] uppercase tracking-widest font-semibold">
                        {card.id} {card.year ? `/ ${card.year}` : ""}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter mb-1">
                      {card.title}
                    </h3>
                    {card.description && (
                      <div className="text-xs text-[#9EA5A8] font-semibold mb-6 uppercase tracking-wider">
                        {card.description}
                      </div>
                    )}

                    {/* Scrollable details */}
                    <div className="flex-1 overflow-y-auto pr-2 space-y-5 scrollbar-hide">
                      {card.clientGoal && (
                        <div>
                          <span className="text-[9px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">Client Goal</span>
                          <p className="text-[#9EA5A8] text-xs leading-relaxed">{card.clientGoal}</p>
                        </div>
                      )}
                      
                      {card.solution && (
                        <div>
                          <span className="text-[9px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">Solution</span>
                          <p className="text-[#9EA5A8] text-xs leading-relaxed">{card.solution}</p>
                        </div>
                      )}

                      {card.technologies && (
                        <div>
                          <span className="text-[9px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">Technologies</span>
                          <p className="text-[#EDE7DC] text-[11px] font-semibold uppercase tracking-wider">
                            {card.technologies}
                          </p>
                        </div>
                      )}

                      {card.client && (
                        <div>
                          <span className="text-[9px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">Client</span>
                          <p className="text-[#EDE7DC] text-[11px] font-semibold uppercase tracking-wider">
                            {card.client}
                          </p>
                        </div>
                      )}

                      {card.outcome && (
                        <div>
                          <span className="text-[9px] uppercase text-[#6C7378] tracking-widest font-bold block mb-1">Outcome</span>
                          <p className="text-[#EDE7DC] text-[11px] font-semibold uppercase tracking-wider">
                            {card.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA Footer */}
                    <div className="pt-6 mt-auto border-t border-[#EDE7DC]/10">
                      {card.liveUrl ? (
                        <a href={card.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 border border-[#EDE7DC]/20 uppercase text-[10px] font-bold tracking-widest text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors focus-ring">
                          VISIT LIVE WEBSITE
                        </a>
                      ) : (
                        <button disabled className="block w-full text-center py-3 border border-[#EDE7DC]/5 uppercase text-[10px] font-bold tracking-widest text-[#6C7378] cursor-not-allowed">
                          VISIT LIVE WEBSITE
                        </button>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

        {/* Deck progress indicator */}
        {filteredProjects.length > 0 && (
          <div className="mt-16 flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-4 w-full max-w-[240px]">
              <span className="text-[10px] font-mono text-[#9EA5A8]">
                {formatIndex(currentIndex + 1)}
              </span>
              <div className="flex-1 h-[1px] bg-[#EDE7DC]/20 relative">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="absolute top-0 left-0 h-full bg-[#E8913C] transition-all duration-300"
                />
              </div>
              <span className="text-[10px] font-mono text-[#6C7378]">
                {formatIndex(filteredProjects.length)}
              </span>
            </div>
          </div>
        )}

      </div>
    </Section>
  );
};
