"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// --- DATA ---
const FEATURED_PROJECTS = [
  {
    title: "TRAVELVERSE AI",
    category: "AI PRODUCT / FULL-STACK",
    description: "An intelligent travel planning engine leveraging generative AI to curate personalized itineraries and logistics.",
    year: "2024",
    tech: "Next.js / OpenAI / Tailwind",
    image: "/TravelVerse Ai.png",
  },
  {
    title: "MINDSET X",
    category: "AI / PRODUCT / FULL-STACK",
    description: "AI-driven mental wellness companion delivering personalized psychological insights and adaptive coaching.",
    year: "2025",
    tech: "React / Python / FastApi",
    image: "/MindSetX.png",
  },
  {
    title: "EDUSMART",
    category: "AI / EDTECH / FULL-STACK",
    description: "Intelligent learning management ecosystem that adapts to student learning curves via machine learning algorithms.",
    year: "2023",
    tech: "TypeScript / Node.js / Postgres",
    image: "/EduSmart.png",
  }
];

const CLIENT_PROJECTS = [
  { title: "FRESH BAKERS", type: "Bakery / E-Commerce", image: "/freshbakers.png", year: "2023" },
  { title: "CAFE MELLOW", type: "Hospitality / Brand", image: "/cafemellow.png", year: "2023" },
  { title: "MR. PROPADVISOR", type: "Real Estate / Platform", image: "/mrpropadvisor.png", year: "2024" },
  { title: "HYPHEN HOTELS", type: "Hospitality / Booking", image: "/hypenhotel.png", year: "2024" },
  { title: "CYGNETT HOTELS", type: "Hospitality / Enterprise", image: "/cygnetthotels.png", year: "2024" },
  { title: "OFFCULT", type: "Fashion / E-Commerce", image: "/offcultclothing.png", year: "2025" },
];

// --- COMPONENTS ---

const FeaturedProject = ({ project, index }: { project: { title: string; category: string; description: string; year: string; tech: string; image: string }; index: number }) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

  const yImage = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const clipImage = useTransform(scrollYProgress, [0, 1], ["inset(10% 0% 10% 0%)", "inset(0% 0% 0% 0%)"]);

  return (
    <div ref={ref} className="flex flex-col w-full mb-32 lg:mb-40 group border-t border-[#EDE7DC]/10 pt-12 lg:pt-16">
      
      {/* TOP ROW: Title & Category */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full mb-8 lg:mb-12 gap-6">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E8913C] font-sans-body">
            {project.category}
          </span>
          <h3 className="font-syne text-[clamp(40px,6vw,80px)] font-extrabold uppercase text-[#EDE7DC] tracking-tighter leading-[0.85]">
            {project.title}
          </h3>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[#9EA5A8] font-mono text-[10px] uppercase tracking-widest pb-2">
          <span>INDEX 0{(index + 1)}</span>
          <span className="text-[#2E6B72]">/ {project.year}</span>
        </div>
      </div>

      {/* MAIN IMAGE (Cinematic full width) */}
      <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-[#0A0C0E] relative overflow-hidden mb-10 lg:mb-12">
        <motion.div 
          style={{ 
            y: shouldReduceMotion ? 0 : yImage,
            clipPath: shouldReduceMotion ? "none" : clipImage,
          }}
          className="w-full h-full relative"
        >
          <motion.div
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.03 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative cursor-crosshair"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: Metadata & Description Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-start">
        <div className="lg:col-span-3 flex flex-col gap-3">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#6C7378] font-sans-body">
            Technologies
          </span>
          <span className="text-[11px] uppercase tracking-widest text-[#EDE7DC] font-semibold font-sans-body leading-relaxed max-w-[200px]">
            {project.tech}
          </span>
        </div>
        
        <div className="lg:col-span-7 flex flex-col">
          <p className="font-sans-body text-[#9EA5A8] text-sm md:text-base leading-relaxed lg:max-w-xl">
            {project.description}
          </p>
        </div>

        <div className="lg:col-span-2 flex justify-start lg:justify-end items-start pt-2 lg:pt-0">
          <div className="flex items-center gap-2 group/btn cursor-pointer text-[#EDE7DC]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans-body group-hover/btn:text-[#E8913C] transition-colors">
              View Project
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-[#E8913C] transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientArchive = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col relative border-t border-[#EDE7DC]/13 pt-24 lg:pt-32">
      
      {/* Archive Header */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-sans-body text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6B72]">
            Commercial & Partners
          </span>
          <h3 className="font-syne text-[clamp(40px,6vw,72px)] font-extrabold uppercase text-[#EDE7DC] tracking-tighter leading-[0.85]">
            Client Archive.
          </h3>
        </div>
        <div className="max-w-xs text-[#9EA5A8] text-sm font-sans-body leading-relaxed pb-2">
          Polished digital experiences, platforms, and bespoke web solutions built for clients.
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
        
        {/* Interactive List Column (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col z-10">
          <div className="flex flex-col w-full border-t border-[#EDE7DC]/10">
            {CLIENT_PROJECTS.map((client, i) => (
              <div 
                key={client.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex flex-col lg:flex-row lg:items-center justify-between py-6 lg:py-8 border-b border-[#EDE7DC]/10 hover:border-[#E8913C]/40 transition-colors duration-300 cursor-pointer relative"
              >
                {/* Amber Interaction Line (Desktop) */}
                <div className="hidden lg:block absolute bottom-[-1px] left-0 h-[1px] w-0 bg-[#E8913C] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                {/* Mobile Image (Only visible on Mobile) */}
                <div className="w-full aspect-[16/9] mb-6 relative overflow-hidden lg:hidden block">
                  <Image src={client.image} alt={client.title} fill className="object-cover" sizes="100vw" />
                </div>

                {/* Title & Index */}
                <div className="flex items-center gap-6 lg:gap-8 mb-4 lg:mb-0 lg:w-[55%]">
                  <span className="text-[10px] font-mono font-bold text-[#6C7378] group-hover:text-[#EDE7DC] transition-colors">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-syne text-2xl lg:text-3xl font-extrabold uppercase text-[#9EA5A8] group-hover:text-[#EDE7DC] transition-colors lg:group-hover:translate-x-4 duration-300">
                    {client.title}
                  </span>
                </div>
                
                {/* Metadata & Arrow */}
                <div className="flex items-center gap-6 justify-between lg:justify-end w-full lg:w-[45%] lg:pr-4">
                  <span className="text-[10px] font-sans-body uppercase tracking-[0.2em] font-bold text-[#6C7378] group-hover:text-[#EDE7DC] transition-colors text-right">
                    {client.type}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#6C7378] shrink-0 group-hover:text-[#E8913C] lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Hover Preview Panel (Desktop Only 40%) */}
        <div className="hidden lg:block w-[40%] sticky top-40 aspect-[4/5] max-h-[600px] pointer-events-none overflow-hidden bg-[#0A0C0E] border border-[#EDE7DC]/10">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={CLIENT_PROJECTS[hoveredIndex].image}
                  alt={CLIENT_PROJECTS[hoveredIndex].title}
                  fill
                  className="object-cover"
                  sizes="40vw"
                  priority={hoveredIndex < 2}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-[#6C7378] font-sans-body"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2">Hover to preview</span>
                <span className="text-[10px] text-[#EDE7DC]/20">Client Archive Index</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="catalogue" className="relative w-full bg-[#0A0C0E] pt-32 pb-32 border-t border-[#EDE7DC]/13">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-start mb-16 md:mb-24">
          <span className="font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-[#E8913C] mb-8">
            03 / Selected Work
          </span>
          <h2 className="font-syne text-[clamp(45px,8vw,110px)] font-extrabold uppercase leading-[0.85] text-[#EDE7DC] tracking-tighter mb-8 max-w-4xl">
            Things I<br />Actually Built.
          </h2>
          <p className="font-sans-body text-sm md:text-base text-[#9EA5A8] max-w-xl leading-relaxed">
            Selected products, systems, and digital experiences engineered across the AI and commercial sectors.
          </p>
        </div>

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
