"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// --- DATA ---
const FEATURED_PROJECTS = [
  {
    title: "TRAVELVERSE AI",
    category: "AI PRODUCT",
    role: "FULL-STACK ENGINEER",
    description: "An intelligent travel planning engine leveraging generative AI to curate personalized itineraries and logistics.",
    year: "2024",
    tech: "NEXT.JS / OPENAI / TAILWIND",
    image: "/TravelVerse Ai.png",
  },
  {
    title: "MINDSET X",
    category: "AI PRODUCT",
    role: "FULL-STACK ENGINEER",
    description: "AI-driven mental wellness companion delivering personalized psychological insights and adaptive coaching.",
    year: "2025",
    tech: "REACT / PYTHON / FASTAPI",
    image: "/MindSetX.png",
  },
  {
    title: "EDUSMART",
    category: "EDTECH PLATFORM",
    role: "FULL-STACK ENGINEER",
    description: "Intelligent learning management ecosystem that adapts to student learning curves via machine learning algorithms.",
    year: "2023",
    tech: "NODE.JS / REACT / MONGODB",
    image: "/EduSmart.png",
  }
];

const CLIENT_PROJECTS = [
  { title: "FRESH BAKERS", type: "WEB / E-COMMERCE", role: "FULL-STACK", image: "/freshbakers.png", year: "2023" },
  { title: "CAFE MELLOW", type: "BRAND / WEB", role: "FRONTEND", image: "/cafemellow.png", year: "2023" },
  { title: "MR. PROPADVISOR", type: "WEB PLATFORM", role: "FULL-STACK", image: "/mrpropadvisor.png", year: "2024" },
  { title: "HYPHEN HOTELS", type: "WEB / BOOKING", role: "FULL-STACK", image: "/hypenhotel.png", year: "2024" },
  { title: "CYGNETT HOTELS", type: "WEB PLATFORM", role: "FULL-STACK", image: "/cygnetthotels.png", year: "2024" },
  { title: "OFFCULT", type: "DIGITAL EXPERIENCE", role: "FRONTEND", image: "/offcultclothing.png", year: "2025" },
];

// --- COMPONENTS ---




const FeaturedProject = ({ project, index }: { project: { title: string; category: string; role: string; description: string; year: string; tech: string; image: string }; index: number }) => {
  const shouldReduceMotion = useReducedMotion();
  
  const isFirst = index === 0;
  const isTextLeft = index % 2 === 0;

  // Stacking contexts: Main container -> project -> text -> image
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const textBlock = (
    <div className="flex flex-col justify-center h-full relative z-30 min-w-0 max-w-full">
      <motion.div variants={shouldReduceMotion ? {} : textVariants} className="mb-4 lg:mb-6">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#E8913C] font-sans-body">
          0{(index + 1)} / {project.category.split('/')[0].trim()}
        </span>
      </motion.div>

      <motion.div variants={shouldReduceMotion ? {} : textVariants} className="mb-6 lg:mb-8 min-w-0 max-w-full">
        {/* Title visibility fix: break-words, proper clamp, constrained width */}
        <h3 className="font-syne font-extrabold uppercase text-[#EDE7DC] tracking-tighter leading-[0.9] lg:leading-[0.85] text-[clamp(2.5rem,6vw,5.5rem)] xl:text-[clamp(3.5rem,6.5vw,7rem)] transition-colors duration-[400ms] group-hover:text-white group-focus-within:text-white break-words ">
          {project.title.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {word}{i !== project.title.split(' ').length - 1 && <br className="hidden lg:block" />}
              {i !== project.title.split(' ').length - 1 && <span className="lg:hidden"> </span>}
            </React.Fragment>
          ))}
        </h3>
      </motion.div>

      <motion.p variants={shouldReduceMotion ? {} : textVariants} className="font-sans-body text-[#9EA5A8] text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 max-w-md">
        {project.description}
      </motion.p>

      {/* Metadata */}
      <motion.div variants={shouldReduceMotion ? {} : textVariants} className="flex flex-col gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#6C7378] mb-10 lg:mb-14 relative pl-4 border-l border-[#EDE7DC]/10 group-hover:border-[#E8913C]/50 transition-colors duration-500">
        <span>{project.category}</span>
        <span>{project.role}</span>
        <span>{project.year}</span>
        <span className="mt-2 text-[#9EA5A8]">{project.tech}</span>
      </motion.div>

      <motion.div variants={shouldReduceMotion ? {} : textVariants}>
        <a href="#" aria-label={`View ${project.title} project`} className="flex items-center gap-3 group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0C0E] rounded-sm w-fit relative">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C] opacity-0 group-hover/btn:opacity-100 scale-0 group-hover/btn:scale-100 group-focus-visible/btn:opacity-100 group-focus-visible/btn:scale-100 transition-all duration-[400ms]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-sans-body text-[#6C7378] group-hover/btn:text-[#EDE7DC] group-focus-visible/btn:text-[#EDE7DC] transition-colors duration-[400ms]">
            View Project
          </span>
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#6C7378] group-hover/btn:text-[#EDE7DC] group-focus-visible/btn:text-[#EDE7DC] transition-transform duration-[400ms] group-hover/btn:translate-x-[6px] group-focus-visible/btn:translate-x-[6px]" />
        </a>
      </motion.div>
    </div>
  );

  const imageBlock = (
    <motion.div variants={shouldReduceMotion ? {} : imageVariants} className="w-full relative z-20 flex justify-center lg:justify-end">
      {/* Project Image Presentation */}
      <div className="w-full relative bg-[#0A0C0E]/50 overflow-hidden rounded-[4px] border border-[#EDE7DC]/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] aspect-[4/3] lg:aspect-[16/10] xl:aspect-[3/2] group-hover:border-[#EDE7DC]/20 transition-colors duration-500">
        <div className="w-full h-full relative cursor-pointer transform transition-transform duration-[500ms] ease-out group-hover:scale-[1.015]">
          <Image
            src={project.image}
            alt={`${project.title} project interface preview`}
            fill
            className="object-contain p-2 lg:p-4"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={isFirst}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.article 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-15%" }} 
      variants={containerVariants} 
      className={`w-full group relative mb-24 lg:mb-32 ${isFirst ? 'pt-8 lg:pt-10' : 'border-t border-[#EDE7DC]/10 pt-16 lg:pt-24'}`}
    >
      {/* Mobile Layout (Stacked Vertically) */}
      <div className="flex flex-col lg:hidden w-full px-5 min-w-0">
        {textBlock}
        <div className="mt-12 w-full min-w-0">
          {imageBlock}
        </div>
      </div>

      {/* Desktop Layouts (Alternating Strict Split) */}
      {/* grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr) prevents blowout */}
      <div className="hidden lg:block w-full min-w-0">
        {isTextLeft ? (
          <div className="grid grid-cols-[minmax(0,4fr)_minmax(0,6fr)] xl:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-16 xl:gap-24 items-center">
            <div className="w-full min-w-0 pr-4 xl:pr-8">{textBlock}</div>
            <div className="w-full min-w-0">{imageBlock}</div>
          </div>
        ) : (
          <div className="grid grid-cols-[minmax(0,6fr)_minmax(0,4fr)] xl:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] gap-16 xl:gap-24 items-center">
            <div className="w-full min-w-0">{imageBlock}</div>
            <div className="w-full min-w-0 pl-4 xl:pl-8">{textBlock}</div>
          </div>
        )}
      </div>
    </motion.article>
  );
};
const ClientArchive = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();
  const requestRef = useRef<number | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [prevHoveredIndex, setPrevHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (shouldReduceMotion || isTouch) return;
    
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(() => {
      // strictly constrain max translation to 15px (multiplier 30)
      const x = (clientX / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.5) * 30;
      const y = (clientY / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.5) * 30;
      setMousePos({ x, y });
    });
  }, [shouldReduceMotion]);

  const handleMouseEnter = useCallback((i: number) => {
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setHoveredIndex(prev => {
      if (prev !== i && prev !== null) {
        setPrevHoveredIndex(prev);
      }
      return i;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(prev => {
        if (prev !== null) {
          setPrevHoveredIndex(prev);
        }
        return null;
      });
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const titleRevealVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      variants={containerVariants}
      className="w-full flex flex-col relative pt-32 lg:pt-64 pb-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Client Archive"
    >
      <div className="flex flex-col mb-16 lg:mb-24 w-full">
        <motion.span variants={shouldReduceMotion ? {} : fadeUpVariants} className="font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-[#E8913C] mb-12">04 / Client Work</motion.span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="col-span-1 lg:col-span-8 flex flex-col">
            <h2 className="font-syne text-[clamp(45px,8vw,110px)] font-extrabold uppercase leading-[0.85] text-[#EDE7DC] tracking-tighter">
              <div className="overflow-hidden py-1"><motion.div variants={shouldReduceMotion ? {} : titleRevealVariants}>Selected</motion.div></div>
              <div className="overflow-hidden py-1"><motion.div variants={shouldReduceMotion ? {} : titleRevealVariants}>Client Work.</motion.div></div>
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 lg:pb-4">
            <motion.p variants={shouldReduceMotion ? {} : fadeUpVariants} className="font-sans-body text-sm text-[#9EA5A8] leading-relaxed max-w-sm">
              Polished digital experiences, platforms, and bespoke web solutions engineered for commercial partners.
            </motion.p>
          </div>
        </div>
        <motion.div variants={shouldReduceMotion ? {} : dividerVariants} style={{ transformOrigin: "left" }} className="w-full h-[1px] bg-[#EDE7DC]/10 mt-16 lg:mt-32" />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative mt-4">
        
        {/* Interactive List Column */}
        <div className="w-full lg:w-[58%] flex flex-col z-10 border-t border-[#EDE7DC]/10">
          {CLIENT_PROJECTS.map((client, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.button 
                type="button"
                variants={fadeUpVariants}
                key={client.title}
                onMouseEnter={() => handleMouseEnter(i)}
                onFocus={() => handleMouseEnter(i)}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                aria-expanded={isExpanded}
                aria-controls={`client-panel-${i}`}
                className="group flex flex-col py-6 lg:py-8 border-b border-[#EDE7DC]/10 cursor-pointer relative text-left focus-visible:outline-none focus-visible:bg-[#EDE7DC]/5 w-full transition-colors duration-500"
                
              >
                <div className="hidden lg:block absolute bottom-[-1px] left-0 h-[1px] w-0 bg-[#E8913C] group-hover:w-[40px] group-focus-visible:w-[40px] transition-all duration-300 ease-out" />

                {/* Desktop Row Layout */}
                <div className="hidden lg:flex items-center w-full transform transition-transform duration-300 ease-out group-hover:translate-x-[6px] group-focus-visible:translate-x-[6px] relative">
                  <span className="w-8 text-[10px] font-mono text-[#6C7378] group-hover:text-[#E8913C] group-focus-visible:text-[#E8913C] transition-colors duration-300 ease-out">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  
                  <span className="flex-1 font-syne text-2xl lg:text-[28px] font-extrabold uppercase text-[#6C7378] group-hover:text-[#EDE7DC] group-focus-visible:text-[#EDE7DC] transition-colors duration-300 ease-out">
                    {client.title}
                  </span>
                  
                  <span className="w-[140px] text-[10px] uppercase font-sans-body tracking-[0.2em] font-bold text-[#6C7378]">
                    {client.type}
                  </span>
                  
                  <span className="w-[110px] text-[10px] uppercase font-mono tracking-[0.2em] text-[#6C7378]">
                    {client.role}
                  </span>
                  
                  <span className="w-12 text-[10px] font-mono tracking-[0.2em] text-[#6C7378] text-right pr-4">
                    {client.year}
                  </span>
                  
                  <ArrowUpRight className="w-5 h-5 text-[#6C7378] group-hover:text-[#EDE7DC] group-focus-visible:text-[#EDE7DC] transition-all duration-300 ease-out group-hover:translate-x-[8px] group-focus-visible:translate-x-[8px]" />
                </div>

                {/* Mobile Row Layout */}
                <div className="flex lg:hidden w-full items-start justify-between py-2">
                  <span className="text-[10px] font-mono text-[#6C7378] mt-1 w-6">{(i + 1).toString().padStart(2, '0')}</span>
                  <div className="flex flex-col flex-1 px-4 gap-1.5">
                    <span className={`font-syne text-[22px] sm:text-[26px] font-extrabold uppercase leading-none transition-colors duration-300 ${isExpanded ? 'text-[#EDE7DC]' : 'text-[#6C7378]'}`}>{client.title}</span>
                    <span className="text-[9px] uppercase font-sans-body tracking-[0.2em] font-bold text-[#9EA5A8]">{client.type}</span>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 text-[#6C7378] transition-transform duration-[400ms] ease-out mt-0.5 ${isExpanded ? 'rotate-90 text-[#E8913C]' : ''}`} />
                </div>

                {/* Mobile Accordion */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      id={`client-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                      className="lg:hidden overflow-hidden flex flex-col"
                    >
                      <div className="pt-6 pb-4 flex flex-col gap-6">
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#6C7378]">
                          <span>{client.role}</span>
                          <span>{client.year}</span>
                        </div>
                        <div className="w-full aspect-[4/3] sm:aspect-[16/9] relative rounded-[4px] border border-[#EDE7DC]/10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                           <Image src={client.image} alt={`${client.title} project interface preview`} fill className="object-cover object-top" sizes="100vw" />
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans-body text-[#EDE7DC]">View Project</span>
                          <ArrowUpRight className="w-4 h-4 text-[#EDE7DC]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>

        {/* Desktop Sticky Floating Preview */}
        <div className="hidden lg:flex lg:w-[42%] sticky top-[20vh] h-[fit-content] pointer-events-none justify-end pr-4 lg:pr-8" aria-hidden="true">
          <div className="relative w-full max-w-[520px] flex flex-col pt-8">
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ 
                    opacity: { duration: 0.12, ease: "easeOut" },
                    scale: { duration: 0.15, ease: "easeOut" }
                  }}
                  className="w-full flex flex-col relative"
                >
                  <div className="flex flex-col mb-4 pl-1">
                    <span className="font-mono text-[10px] text-[#6C7378] tracking-[0.2em] mb-1">
                      {(hoveredIndex + 1).toString().padStart(2, '0')} / {(CLIENT_PROJECTS.length).toString().padStart(2, '0')}
                    </span>
                    <div className="h-4 relative">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={hoveredIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="font-sans-body text-[11px] font-bold uppercase tracking-[0.2em] text-[#EDE7DC] absolute left-0"
                        >
                          {CLIENT_PROJECTS[hoveredIndex].title}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>

                  <motion.div
                    animate={{ 
                      x: shouldReduceMotion ? 0 : mousePos.x, 
                      y: shouldReduceMotion ? 0 : mousePos.y 
                    }}
                    transition={{ 
                      x: { type: "spring", stiffness: 120, damping: 25 },
                      y: { type: "spring", stiffness: 120, damping: 25 }
                    }}
                    className="w-full aspect-[16/10] relative rounded-[2px] overflow-hidden bg-[#0A0C0E] border border-[#EDE7DC]/20 shadow-sm"
                  >
                    {/* Background Loading Spinner */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A0C0E]">
                      <div className="w-4 h-4 rounded-full border-2 border-[#EDE7DC]/10 border-t-[#E8913C] animate-spin" />
                    </div>

                    {/* Pre-mounted Image Stack with Directional Scaling */}
                    {CLIENT_PROJECTS.map((project, idx) => {
                      const isActive = hoveredIndex === idx;
                      const isOutgoing = prevHoveredIndex === idx && !isActive;

                      return (
                        <motion.div
                          key={project.title}
                          initial={false}
                          animate={{ 
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : (isOutgoing ? 0.98 : 1.02) 
                          }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                          className="absolute inset-0 w-full h-full"
                          style={{ 
                            pointerEvents: isActive ? 'auto' : 'none',
                            zIndex: isActive ? 10 : (isOutgoing ? 5 : 1) 
                          }}
                        >
                          <Image
                            src={project.image}
                            alt=""
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            loading="lazy"
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.section>
  );
};
export const Projects = () => {
  return (
    <section id="catalogue" className="relative w-full bg-[#0A0C0E] pt-32 pb-32 border-t border-[#EDE7DC]/13">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        
        {/* Editorial Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col mb-24 lg:mb-40 w-full"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const  } }
            }}
            className="font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-[#E8913C] mb-12"
          >
            03 / Selected Work
          </motion.span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            
            {/* Left Column: Heading */}
            <div className="col-span-1 lg:col-span-8 flex flex-col">
              <h2 className="font-syne text-[clamp(45px,8vw,110px)] font-extrabold uppercase leading-[0.85] text-[#EDE7DC] tracking-tighter">
                <div className="overflow-hidden py-1">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: "100%" },
                      visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const  } }
                    }}
                  >
                    Things I
                  </motion.div>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: "100%" },
                      visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const  } }
                    }}
                  >
                    Actually Built.
                  </motion.div>
                </div>
              </h2>
            </div>
            
            {/* Right Column: Description & Metadata */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 lg:pb-4">
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const  } }
                }}
                className="font-sans-body text-sm text-[#9EA5A8] leading-relaxed max-w-sm"
              >
                Selected products, client experiences, and systems built across AI, software, and digital experiences.
              </motion.p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const  } }
                }}
                className="flex flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.2em] font-bold text-[#6C7378]"
              >
                <div className="flex items-center gap-4"><span className="text-[#EDE7DC]">09</span> PROJECTS</div>
                <div className="flex items-center gap-4"><span className="text-[#E8913C]">03</span> PRODUCT SYSTEMS</div>
                <div className="flex items-center gap-4"><span className="text-[#2E6B72]">06</span> CLIENT EXPERIENCES</div>
              </motion.div>
            </div>
          </div>

          {/* Animated Divider before first project */}
          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const  } }
            }}
            style={{ transformOrigin: "left" }}
            className="w-full h-[1px] bg-[#EDE7DC]/10 mt-12 lg:mt-16"
          />
        </motion.div>

        {/* Part 1: Featured Products */}
        <div className="flex flex-col w-full">
          {FEATURED_PROJECTS.map((project, idx) => (
             <FeaturedProject key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Part 2: Client Archive */}
        <ClientArchive />

      </div>
    </section>
  );
};
