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
        nextProject("left");
      } else if (e.key === "ArrowLeft") {
        prevProject("right");
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
        prevProject("right");
      } else {
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
    <Section id="catalogue" className="px-6 md:px-24 py-32 bg-[#101317] border-b border-border-custom">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* LEFT COLUMN: Editorial Headers & Filters */}
        <div className="lg:col-span-4 flex flex-col pt-8 lg:sticky lg:top-32 lg:h-fit z-20">
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter mb-6 leading-[0.9]">
            Selected<br />Work
          </h2>
          <p className="text-[#9EA5A8] text-sm md:text-base font-sans-body mb-16 max-w-[280px] leading-relaxed">
            A catalogue of things I&apos;ve built for clients, hackathons and myself.
          </p>
          
          {/* Vertical Filter List */}
          <div className="flex flex-col gap-5 font-sans-body">
            {filterTabs.map((f) => {
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => handleFilterChange(f.id)}
                  className={`group flex items-center justify-between w-full max-w-[220px] text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 focus-ring outline-none ${
                    isActive ? "text-[#E8913C]" : "text-[#6C7378] hover:text-[#9EA5A8]"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className={`h-[1px] transition-all duration-500 ease-out ${
                      isActive ? 'bg-[#E8913C] w-12' : 'bg-transparent w-0 group-hover:bg-[#6C7378] group-hover:w-4'
                    }`}></span>
                    {f.label}
                  </span>
                  <span className={`font-mono transition-opacity duration-300 ${isActive ? "text-[#E8913C]" : "opacity-40"}`}>
                    {formatIndex(counts[f.id])}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: The Deck */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-end w-full min-h-[680px]">
          {filteredProjects.length === 0 ? (
            <div className="flex items-center justify-center w-full max-w-[500px] h-[680px]">
              <p className="text-[#6C7378] text-sm uppercase tracking-widest font-bold">No projects found.</p>
            </div>
          ) : (
            <>
              {/* Stack Container */}
              <div
                tabIndex={0}
                className="deck-container relative w-full max-w-[420px] md:max-w-[500px] h-[680px] focus-ring rounded-none outline-none touch-pan-y lg:mr-8"
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

                      {/* Visual Hero Area (55-60%) */}
                      <div className="w-full h-[55%] md:h-[60%] relative bg-[#0A0C0E] shrink-0 border-b border-[#EDE7DC]/10 overflow-hidden">
                        {card.image ? (
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
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#0A0C0E] overflow-hidden">
                             <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#EDE7DC_1px,transparent_1px),linear-gradient(to_bottom,#EDE7DC_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                             
                             <h2 className="font-syne text-[100px] leading-[0.85] font-extrabold text-[#EDE7DC] opacity-[0.02] tracking-tighter text-center break-all select-none scale-150 rotate-[-5deg]">
                               {card.title}
                             </h2>
                             
                             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                               <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E8913C] mb-2 drop-shadow-md">
                                 SYSTEM ASSET
                               </span>
                               <span className="font-mono text-[#6C7378] text-[10px] tracking-widest bg-[#0A0C0E]/50 px-2 py-1 border border-[#EDE7DC]/10">
                                 {card.id}
                               </span>
                             </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Focused Editorial Content (40-45%) */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col font-sans-body justify-between">
                        
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C]">
                              [ {card.type === "client" ? "CLIENT WORK" : card.type} ]
                            </span>
                            <span className="text-[10px] font-mono text-[#2E6B72] uppercase tracking-widest font-semibold">
                              {card.id} {card.year ? `/ ${card.year}` : ""}
                            </span>
                          </div>

                          <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter leading-tight mb-2">
                            {card.title}
                          </h3>
                          {card.description && (
                            <div className="text-[11px] md:text-xs text-[#9EA5A8] font-medium uppercase tracking-widest line-clamp-2">
                              {card.description}
                            </div>
                          )}
                        </div>

                        <div className="mt-auto pt-6 flex flex-col gap-5">
                          {card.technologies && (
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#2E6B72] rounded-none inline-block opacity-80"></span>
                              <span className="text-[9px] uppercase text-[#6C7378] tracking-[0.2em] font-bold truncate">
                                {card.technologies}
                              </span>
                            </div>
                          )}

                          <div className="pt-4 border-t border-[#EDE7DC]/10 flex flex-row gap-2">
                            {card.liveUrl && (
                              <a href={card.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 block w-full text-center py-3 border border-[#EDE7DC]/20 uppercase text-[10px] font-bold tracking-widest text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors focus-ring">
                                LIVE WEBSITE
                              </a>
                            )}
                            {card.githubUrl && (
                              <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 block w-full text-center py-3 border border-[#EDE7DC]/20 uppercase text-[10px] font-bold tracking-widest text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors focus-ring">
                                GITHUB
                              </a>
                            )}
                            {!card.liveUrl && !card.githubUrl && (
                              <button disabled className="w-full text-center py-3 border border-[#EDE7DC]/5 uppercase text-[10px] font-bold tracking-widest text-[#6C7378] cursor-not-allowed">
                                EXPLORE PROJECT
                              </button>
                            )}
                          </div>
                        </div>

                      </div>

                    </motion.div>
                  );
                })}
              </div>

              {/* HUD Footer (Under Deck) */}
              <div className="mt-12 flex flex-col w-full max-w-[420px] md:max-w-[500px] lg:mr-8">
                {/* Progress Info & Bar */}
                <div className="flex flex-col w-full mb-8">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em]">
                      <span className="text-[#EDE7DC]">{formatIndex(currentIndex + 1)}</span>
                      <span className="text-[#6C7378] ml-1">/ {formatIndex(filteredProjects.length)}</span>
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#6C7378] opacity-50">
                      INDEX
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-[#EDE7DC]/10 relative">
                    <div 
                      style={{ width: `${progressPercent}%` }} 
                      className="absolute top-0 left-0 h-full bg-[#E8913C] transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Interaction hints */}
                <div className="flex justify-between items-center w-full text-[9px] font-bold uppercase tracking-[0.2em] text-[#6C7378]">
                   <span className="cursor-pointer hover:text-[#EDE7DC] transition-colors" onClick={() => prevProject("right")}>← PREV</span>
                   <span className="opacity-30 tracking-[0.3em]">SWIPE / THROW</span>
                   <span className="cursor-pointer hover:text-[#EDE7DC] transition-colors" onClick={() => nextProject("left")}>NEXT →</span>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </Section>
  );
};
