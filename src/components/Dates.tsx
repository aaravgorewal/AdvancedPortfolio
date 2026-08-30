"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";
import { Section } from "./ui/SectionGrid";

interface ExperienceItem {
   id: string;
   period: string;
   role: string;
   organization: string;
   type: string;
}

interface HackathonItem {
   id: string;
   tag: string;
   event: string;
   role: string;
   contribution: string;
   result: string;
}

const EXPERIENCE: ExperienceItem[] = [
   { id: "6", period: "Jan 2022 – Pres", role: "FREELANCE WEB DEVELOPER", organization: "SELF-EMPLOYED", type: "CLIENT DEVELOPMENT" },
   { id: "5", period: "Oct 2024 – Pres", role: "CAMPUS COORDINATOR", organization: "GDG ON CAMPUS", type: "TECHNICAL LEADERSHIP" },
   { id: "7", period: "Oct 2025", role: "ORGANIZER (HACKDAY)", organization: "HACKTOBERFEST 2025", type: "TECHNICAL EVENT" },
   { id: "4", period: "Dec 2025 – Aug 2026", role: "CAMPUS AMBASSADOR", organization: "GEEKSFORGEEKS", type: "DEVELOPER PROGRAM" },
   { id: "2", period: "Jan 2026 – Pres", role: "TECHNICAL TEAM MEMBER", organization: "IEEE DVSIET", type: "TECHNICAL SECTION" },
   { id: "3", period: "Mar 2026 – Jul 2026", role: "FRONTEND DEVELOPER", organization: "ENTHU.AI", type: "INTERNSHIP" },
   { id: "1", period: "May 2026 – Pres", role: "CAMPUS AMBASSADOR", organization: "GOOGLE GEMINI", type: "DEVELOPER PROGRAM" },
];

const HACKATHONS: HackathonItem[] = [
   { id: "1", tag: "BUILD", event: "HACKCBS 8.0", role: "DEVELOPER", contribution: "SAFEBIO VAULT WEB PROTOTYPE", result: "PROTOTYPE BUILT" },
   { id: "2", tag: "HACK", event: "HACKFUSION 2026", role: "FULL-STACK ENG", contribution: "ARDUINO VOICE COMMAND RELAYS", result: "PROJECT COMPLETED" },
   { id: "3", tag: "SHIP", event: "RIFT ’26", role: "TEAM LEAD", contribution: "EDULEARN STUDY PACING ENGINE", result: "PRESENTED" },
   { id: "4", tag: "LEAD", event: "HACKTOBERFEST 2025", role: "ORGANIZER", contribution: "DVSIET HACKDAY EVENT COORDINATION", result: "EVENT CONCLUDED" },
];

const StationDesktop = ({ item, index, activeIndex }: { item: ExperienceItem, index: number, activeIndex: number }) => {
   const isActive = index === activeIndex;
   const pos = `${(index / 6) * 100}%`;

   const isEven = index % 2 === 0;
   const alignClass = index === 0 ? "items-start text-left" : index === 6 ? "items-end text-right" : "items-center text-center";
   const flexAlign = index === 0 ? "left-0" : index === 6 ? "right-0" : "left-1/2 -translate-x-1/2";
   const nodeAlignClass = index === 0 ? "left-0 origin-left" : index === 6 ? "right-0 origin-right" : "left-1/2 -translate-x-1/2 origin-center";

   const year = item.period.match(/\d{4}/)?.[0] || "";
   const yOffset = isEven ? 20 : -20;

   return (
      <div className="absolute top-1/2 -translate-y-1/2 z-10" style={{ left: pos }}>

         <div className={`absolute ${isEven ? 'bottom-full mb-10' : 'top-full mt-10'} flex flex-col min-w-[200px] w-max ${flexAlign}`}>
            <motion.div initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : yOffset }} transition={{ duration: 0.5, ease: "easeOut" }} className={`flex flex-col ${alignClass} pointer-events-none`}>
               <span className="font-mono text-[9px] text-[#E8913C] uppercase tracking-widest mb-1">{item.type}</span>
               <span className="font-syne text-lg lg:text-xl font-bold text-[#EDE7DC] uppercase tracking-tight leading-tight mb-0.5">{item.role}</span>
               <span className="font-sans-body text-[10px] text-[#9EA5A8] uppercase tracking-widest mb-1.5">{item.organization}</span>
               <span className="font-mono text-[9px] text-[#6C7378] uppercase tracking-widest">{item.period}</span>
            </motion.div>
         </div>

         <motion.div
            initial={false}
            animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            className={`absolute w-[1px] h-[32px] bg-[#E8913C]/40 ${nodeAlignClass} ${isEven ? 'bottom-1/2 origin-bottom' : 'top-1/2 origin-top'}`}
         />

         <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${nodeAlignClass} ${isActive ? 'w-[2px] h-[16px] bg-[#E8913C]' : 'w-[1px] h-[8px] bg-[#6C7378]/40'}`} />

         <motion.div initial={false} animate={{ opacity: isActive ? 0 : 1 }} className={`absolute ${isEven ? 'top-full mt-4' : 'bottom-full mb-4'} flex flex-col w-max ${flexAlign}`}>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6C7378] transition-colors duration-500">
               {year}
            </span>
         </motion.div>
      </div>
   );
};

const StationMobile = ({ item, index, activeIndex }: { item: ExperienceItem, index: number, activeIndex: number }) => {
   const isActive = index === activeIndex;
   const pos = `${(index / 6) * 100}%`;
   const year = item.period.match(/\d{4}/)?.[0] || "";

   return (
      <div className="absolute left-0 w-full z-10" style={{ top: pos }}>

         <div className={`absolute top-0 left-[-1px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isActive ? 'w-[16px] h-[2px] bg-[#E8913C]' : 'w-[8px] h-[1px] bg-[#6C7378]/40'}`} />

         <motion.div
            initial={false}
            animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            className="absolute top-0 left-0 w-[20px] h-[1px] bg-[#E8913C]/40 origin-left -translate-y-1/2"
         />

         <div className="absolute top-0 left-6 -translate-y-1/2 flex flex-col items-start">
            <motion.span animate={{ opacity: isActive ? 0 : 1 }} className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6C7378] transition-colors duration-500">
               {year}
            </motion.span>
         </div>

         <div className="absolute top-0 left-10 -translate-y-1/2 flex flex-col items-start w-[240px]">
            <motion.div
               initial={false}
               animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               className="flex flex-col pointer-events-none"
            >
               <span className="font-mono text-[9px] text-[#E8913C] uppercase tracking-widest mb-0.5">{item.type}</span>
               <span className="font-syne text-sm font-bold text-[#EDE7DC] uppercase tracking-tight leading-tight mb-0.5">{item.role}</span>
               <span className="font-sans-body text-[10px] text-[#9EA5A8] uppercase tracking-widest mb-1">{item.organization}</span>
               <span className="font-mono text-[9px] text-[#6C7378] uppercase tracking-widest">{item.period}</span>
            </motion.div>
         </div>
      </div>
   );
};


const BuilderLogSection = () => {
   const containerRef = React.useRef<HTMLDivElement>(null);
   const shouldReduceMotion = useReducedMotion();

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 60%", "end 80%"]
   });
   const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
   const [activeIndex, setActiveIndex] = React.useState(0);
   const [expandedId, setExpandedId] = React.useState<string | null>(null);

   useMotionValueEvent(smoothProgress, "change", (latest) => {
      if (shouldReduceMotion) return;
      const idx = Math.min(HACKATHONS.length - 1, Math.max(0, Math.round(latest * (HACKATHONS.length - 1))));
      setActiveIndex(idx);
   });

   const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         setExpandedId(prev => prev === id ? null : id);
      } else if (e.key === 'Escape') {
         setExpandedId(null);
      }
   };

   return (
      <div ref={containerRef} className="w-full pb-32 pt-24">

         {/* Header and HUD merged */}
         <div className="flex flex-col md:flex-row md:items-end justify-between px-6 md:px-12 lg:px-24 mb-24 md:mb-32">
            <div>
               <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4">
                  06 / LOGS
               </div>
               <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tighter text-[#EDE7DC] leading-[0.9]">
                  Build.<br />Hack.<br />Ship.
               </h2>
            </div>

            <div className="flex flex-col items-start md:items-end mt-12 md:mt-0 pointer-events-none">
               <span className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] mb-3">BUILDER LOG</span>
               <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-24 md:w-32 h-[2px] bg-[#EDE7DC]/10 origin-left overflow-hidden">
                     <motion.div
                        className="w-full h-full bg-[#E8913C] origin-left"
                        style={{ scaleX: shouldReduceMotion ? 1 : smoothProgress }}
                     />
                  </div>
                  <span className="font-mono text-xs md:text-sm text-[#E8913C] tracking-widest font-bold">
                     LOG 0{activeIndex + 1} <span className="text-[#6C7378] font-normal">/ 0{HACKATHONS.length}</span>
                  </span>
               </div>
            </div>
         </div>

         <div className="relative w-full flex flex-col">
            {/* Vertical Scan Line */}
            <div className="absolute left-8 md:left-[30%] top-0 bottom-0 w-[1px] bg-[#EDE7DC]/10">
               <motion.div
                  className="absolute top-0 left-0 right-0 bg-[#E8913C] origin-top"
                  style={{ scaleY: shouldReduceMotion ? 1 : smoothProgress, height: '100%' }}
               />
            </div>

            <div className="flex flex-col space-y-24 md:space-y-32">
               {HACKATHONS.map((item, idx) => {
                  const isActive = shouldReduceMotion ? true : idx === activeIndex;
                  const isPast = shouldReduceMotion ? true : idx < activeIndex;
                  const isExpanded = expandedId === item.id;

                  return (
                     <div
                        key={item.id}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedId(prev => prev === item.id ? null : item.id)}
                        onKeyDown={(e) => handleKeyDown(e, item.id)}
                        className="group relative flex flex-col md:flex-row items-start w-full md:pl-[30%] px-6 md:px-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#E8913C] focus-visible:ring-offset-8 focus-visible:ring-offset-[#0A0C0E]"
                     >
                        {/* Node on scanline */}
                        <div className={`absolute left-8 md:left-[30%] -translate-x-1/2 top-4 w-[16px] h-[2px] transition-all duration-500 ${isActive ? 'bg-[#E8913C]' : isPast ? 'bg-[#EDE7DC]/40' : 'bg-[#6C7378]/30'} group-hover:bg-[#E8913C] group-focus-visible:bg-[#E8913C]`} />

                        {/* Category marker */}
                        <motion.div
                           initial={false}
                           animate={{
                              opacity: isActive ? 1 : 0.4,
                              x: shouldReduceMotion ? 0 : (isActive ? 0 : -15)
                           }}
                           transition={{ duration: 0.5, ease: "easeOut" }}
                           className="md:absolute md:left-0 md:w-[25%] md:text-right pl-12 md:pl-0 pt-1 md:pt-2 transition-transform duration-500 group-hover:translate-x-2"
                        >
                           <span className={`font-mono text-[10px] md:text-xs tracking-widest font-bold transition-colors duration-500 ${isActive ? 'text-[#E8913C]' : 'text-[#6C7378]'} group-hover:text-[#E8913C]`}>
                              [ {item.tag} ]
                           </span>
                        </motion.div>

                        {/* Entry Content (Title + Accordion) */}
                        <div className="flex-1 pl-12 md:pl-16 pt-8 md:pt-0 flex flex-col w-full max-w-4xl transition-transform duration-500 group-hover:translate-x-2">
                           <motion.div
                              initial={false}
                              animate={{
                                 opacity: isActive ? 1 : 0.3,
                                 y: shouldReduceMotion ? 0 : (isActive ? 0 : 20)
                              }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              className="flex flex-col"
                           >
                              <div className="flex items-center">
                                 <span className={`font-syne text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter transition-colors duration-500 ${isActive ? 'text-[#EDE7DC]' : 'text-[#9EA5A8]'} group-hover:text-[#EDE7DC]`}>
                                    {item.event}
                                 </span>
                                 <span className="inline-block transform transition-transform duration-300 translate-x-0 group-hover:translate-x-3 group-focus-visible:translate-x-3 text-[#6C7378] group-hover:text-[#E8913C] ml-4 md:ml-6 text-xl md:text-3xl">
                                    →
                                 </span>
                              </div>

                              {/* Horizontal Rule */}
                              <motion.div
                                 initial={false}
                                 animate={{
                                    scaleX: shouldReduceMotion ? 1 : (isActive ? 1 : 0),
                                    opacity: isActive ? 1 : 0
                                 }}
                                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                 className={`w-full h-[1px] origin-left mt-8 mb-2 transition-colors duration-500 ${isExpanded ? 'bg-[#E8913C]/60' : 'bg-[#2E6B72]/40'} group-hover:bg-[#E8913C]/40`}
                              />

                              {/* Accordion Expansion */}
                              <AnimatePresence>
                                 {isExpanded && (
                                    <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: 'auto', opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                                       className="overflow-hidden"
                                    >
                                       <div className="pt-8 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
                                          <div className="flex flex-col">
                                             <span className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] mb-2">ROLE</span>
                                             <span className="font-sans-body text-xs md:text-sm font-bold tracking-widest uppercase text-[#EDE7DC]">{item.role}</span>
                                          </div>
                                          <div className="flex flex-col">
                                             <span className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] mb-2">CONTRIBUTION</span>
                                             <span className="font-sans-body text-xs md:text-sm tracking-wide uppercase text-[#EDE7DC]">{item.contribution}</span>
                                          </div>

                                          <div className="flex flex-col sm:col-span-2">
                                             <span className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] mb-2">STATUS</span>
                                             <span className="font-mono text-[10px] md:text-xs tracking-widest font-bold uppercase text-[#E8913C]">{item.result}</span>
                                          </div>
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </motion.div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export const Dates = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const shouldReduceMotion = useReducedMotion();

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

   const [activeIndex, setActiveIndex] = useState(0);

   useMotionValueEvent(smoothProgress, "change", (latest) => {
      const idx = Math.min(6, Math.max(0, Math.round(latest * 6)));
      setActiveIndex(idx);
   });

   const progressPercent = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

   return (
      <Section id="dates" className="bg-[#101317] border-b border-border-custom text-left p-0 m-0 relative">

         {/* 1. Experience Timeline (Career Transit) */}
         <div className="w-full relative min-h-[100dvh]">
            {shouldReduceMotion ? (
               <div className="px-6 md:px-24 pt-32 pb-24">
                  <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C] mb-4">05 / EXPERIENCE LOG</div>
                  <h2 className="font-syne text-4xl font-bold uppercase text-[#EDE7DC] mb-12">Career Transit</h2>
                  <div className="flex flex-col gap-8">
                     {EXPERIENCE.map((item) => (
                        <div key={item.id} className="flex flex-col">
                           <span className="text-[#E8913C] font-mono text-xs">{item.period}</span>
                           <span className="text-[#EDE7DC] font-syne text-lg uppercase mt-1">{item.role}</span>
                           <span className="text-[#9EA5A8] font-sans-body text-xs uppercase">{item.organization}</span>
                        </div>
                     ))}
                  </div>
               </div>
            ) : (
               <div ref={containerRef} className="h-[400vh] w-full relative">
                  <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-24 pb-12">

                     {/* Header */}
                     <div className="flex-none mb-16 md:mb-24 px-6 md:px-24">
                        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C] mb-4">
                           05 / EXPERIENCE LOG
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between">
                           <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tighter text-[#EDE7DC] leading-[0.9]">
                              Career<br />Transit
                           </h2>
                        </div>
                     </div>

                     {/* Route Container */}
                     <div className="relative flex-1 w-full flex flex-col justify-center overflow-hidden">

                        {/* HUD Top Right */}
                        <div className="absolute top-8 md:top-12 right-6 md:right-12 lg:right-24 flex flex-col items-end pointer-events-none z-30">
                           <span className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] mb-1">EXPERIENCE LOG</span>
                           <span className="font-mono text-sm text-[#E8913C] tracking-widest font-bold">
                              STATION 0{activeIndex + 1} <span className="text-[#6C7378] font-normal">/ 07</span>
                           </span>
                        </div>

                        {/* HUD Bottom Right (Only visibly emphasized at the end) */}
                        <div className={`absolute bottom-8 md:bottom-12 right-6 md:right-12 lg:right-24 flex flex-col items-end pointer-events-none z-30 transition-opacity duration-500 ${activeIndex === 6 ? 'opacity-100' : 'opacity-0'}`}>
                           <span className="font-mono text-[9px] text-[#E8913C] tracking-[0.2em] mb-1">CURRENT POSITION</span>
                           <span className="font-mono text-[10px] text-[#EDE7DC] tracking-widest uppercase text-right">
                              {EXPERIENCE[6].organization}
                           </span>
                        </div>

                        {/* Desktop Route Line */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[85%] max-w-[1600px] top-1/2 h-[2px] bg-[#EDE7DC]/10 -translate-y-1/2">
                           <span className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 font-mono text-[9px] text-[#6C7378] tracking-[0.2em]">PAST</span>
                           <span className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 font-mono text-[9px] text-[#E8913C] tracking-[0.2em] font-bold">PRESENT</span>

                           <motion.div className="absolute left-0 top-0 bottom-0 bg-[#E8913C] origin-left" style={{ scaleX: smoothProgress, width: '100%' }} />

                           {EXPERIENCE.map((item, i) => (
                              <StationDesktop key={item.id} item={item} index={i} activeIndex={activeIndex} />
                           ))}

                           {/* T-Class Technical Transit Carriage (Desktop) */}
                           <motion.div
                              className="absolute top-1/2 flex items-center h-[20px] w-[64px] bg-[#0A0C0E] border border-[#6C7378]/60 -translate-y-1/2 -translate-x-1/2 z-20 shadow-none rounded-[1px]"
                              style={{ left: progressPercent }}
                           >
                              <div className="absolute -bottom-[2px] left-[10px] w-[3px] h-[3px] bg-[#6C7378]" />
                              <div className="absolute -bottom-[2px] right-[20px] w-[3px] h-[3px] bg-[#6C7378]" />
                              <div className="flex-1 flex items-center justify-center pl-1">
                                 <span className="font-mono text-[9px] font-bold text-[#9EA5A8] tracking-widest">
                                    T-0{activeIndex + 1}
                                 </span>
                              </div>
                              <div className="w-[6px] h-full bg-[#E8913C] ml-auto" />
                           </motion.div>
                        </div>

                        {/* Mobile Route Line */}
                        <div className="md:hidden absolute top-24 bottom-24 left-12 w-[2px] bg-[#EDE7DC]/10">
                           <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#6C7378] tracking-[0.2em]">PAST</div>
                           <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#E8913C] tracking-[0.2em] font-bold">PRESENT</div>

                           <motion.div className="absolute top-0 left-0 right-0 bg-[#E8913C] origin-top" style={{ scaleY: smoothProgress, height: '100%' }} />

                           {EXPERIENCE.map((item, i) => (
                              <StationMobile key={item.id} item={item} index={i} activeIndex={activeIndex} />
                           ))}

                           {/* T-Class Technical Transit Carriage (Mobile) */}
                           <motion.div
                              className="absolute left-1/2 flex flex-col items-center w-[20px] h-[64px] bg-[#0A0C0E] border border-[#6C7378]/60 -translate-x-1/2 -translate-y-1/2 z-20 shadow-none rounded-[1px]"
                              style={{ top: progressPercent }}
                           >
                              <div className="absolute -left-[2px] top-[10px] w-[3px] h-[3px] bg-[#6C7378]" />
                              <div className="absolute -left-[2px] bottom-[20px] w-[3px] h-[3px] bg-[#6C7378]" />
                              <div className="flex-1 flex items-center justify-center pt-2">
                                 <span className="font-mono text-[9px] font-bold text-[#9EA5A8] tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                    T-0{activeIndex + 1}
                                 </span>
                              </div>
                              <div className="w-full h-[6px] bg-[#E8913C] mt-auto" />
                           </motion.div>
                        </div>

                     </div>
                  </div>
               </div>
            )}
         </div>

         <div className="px-6 md:px-24 pb-32">
            {/* 2. Build Hack Ship Section */}
            <div className="border-t border-[#EDE7DC]/13">
               <BuilderLogSection />
            </div>

            {/* 3. Credentials & Metrics Footer Grid */}
            <div className="grid md:grid-cols-2 gap-16 border-t border-[#EDE7DC]/13 pt-24 font-sans-body">

               {/* Left: Education */}
               <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4 block">
                     07 / ACADEMICS
                  </span>
                  <h3 className="font-syne text-2xl font-bold uppercase text-[#EDE7DC] mb-6">
                     Education
                  </h3>
                  <div className="border-l border-[#E8913C] pl-6">
                     <span className="text-[10px] font-mono text-[#E8913C] uppercase tracking-wider block mb-2 font-semibold">
                        August 2024 – July 2028
                     </span>
                     <h4 className="text-[#EDE7DC] font-bold text-lg mb-1">
                        B.Tech in Artificial Intelligence & Machine Learning
                     </h4>
                     <p className="text-[#9EA5A8] text-xs">
                        Dewan V.S. Institute of Engineering and Technology, Meerut
                     </p>
                  </div>
               </div>

               {/* Right: Metrics */}
               <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4 block">
                     08 / METRICS
                  </span>
                  <h3 className="font-syne text-2xl font-bold uppercase text-[#EDE7DC] mb-6">
                     Aggregated Output
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                     <div>
                        <span className="font-syne text-4xl md:text-5xl font-extrabold text-[#E8913C] block mb-2 leading-none">
                           15+
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold">
                           Hackathons
                        </span>
                     </div>
                     <div>
                        <span className="font-syne text-4xl md:text-5xl font-extrabold text-[#E8913C] block mb-2 leading-none">
                           06
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold">
                           Wins
                        </span>
                     </div>
                     <div>
                        <span className="font-syne text-4xl md:text-5xl font-extrabold text-[#E8913C] block mb-2 leading-none">
                           10+
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold">
                           Deployments
                        </span>
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </Section>
   );
};
