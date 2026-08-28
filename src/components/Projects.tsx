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

  const yImage = useTransform(scrollYProgress, [0, 1], ["15%", "0%"]);
  const clipImage = useTransform(scrollYProgress, [0, 1], ["inset(15% 0% 15% 0%)", "inset(0% 0% 0% 0%)"]);
  const opacityText = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const yText = useTransform(scrollYProgress, [0.3, 1], ["30px", "0px"]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center w-full mb-32 lg:mb-48 group`}>
      
      {/* Image Block (60%) */}
      <div className="w-full lg:w-[60%] overflow-hidden relative aspect-[4/3] bg-[#0A0C0E]">
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
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Typography Block (40%) */}
      <motion.div 
        style={{ 
          opacity: shouldReduceMotion ? 1 : opacityText, 
          y: shouldReduceMotion ? 0 : yText 
        }}
        className="w-full lg:w-[40%] flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E8913C] font-sans-body">
            {project.category}
          </span>
          <span className="text-[10px] text-[#2E6B72] font-bold tracking-widest font-sans-body">
            / {project.year}
          </span>
        </div>

        <h3 className="font-syne text-4xl lg:text-6xl font-extrabold uppercase text-[#EDE7DC] tracking-tighter leading-[0.9] mb-6">
          {project.title}
        </h3>

        <p className="font-sans-body text-[#9EA5A8] text-sm leading-relaxed max-w-sm mb-10">
          {project.description}
        </p>

        <div className="flex flex-col gap-6 border-t border-[#EDE7DC]/10 pt-6">
           <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#6C7378] font-sans-body">
             {project.tech}
           </span>
           <div className="flex items-center gap-2 group/btn cursor-pointer text-[#EDE7DC] w-fit">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans-body group-hover/btn:text-[#E8913C] transition-colors">
               View Project
             </span>
             <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-[#E8913C] transition-transform duration-300" />
           </div>
        </div>
      </motion.div>

    </div>
  );
};

const ClientArchive = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative mt-16 lg:mt-32 border-t border-[#EDE7DC]/13 pt-24 lg:pt-32">
      
      {/* Interactive List Column (60%) */}
      <div className="w-full lg:w-[60%] flex flex-col z-10">
        <h4 className="font-sans-body text-xs uppercase tracking-[0.2em] font-bold text-[#E8913C] mb-12">
          Selected Client Work
        </h4>
        
        <div className="flex flex-col w-full border-t border-[#EDE7DC]/10">
          {CLIENT_PROJECTS.map((client, i) => (
            <div 
              key={client.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 lg:py-6 border-b border-[#EDE7DC]/10 hover:border-[#E8913C]/40 transition-colors duration-300 cursor-pointer relative"
            >
              {/* Amber Interaction Line (Desktop) */}
              <div className="hidden lg:block absolute bottom-[-1px] left-0 h-[1px] w-0 bg-[#E8913C] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              {/* Mobile Image (Only visible on Mobile) */}
              <div className="w-full aspect-[4/3] mb-6 relative overflow-hidden lg:hidden block">
                <Image src={client.image} alt={client.title} fill className="object-cover" sizes="100vw" />
              </div>

              {/* Title & Index */}
              <div className="flex items-center gap-6 md:gap-12 mb-4 lg:mb-0">
                <span className="text-[10px] font-mono font-bold text-[#6C7378] group-hover:text-[#EDE7DC] transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <span className="font-syne text-2xl md:text-3xl font-extrabold uppercase text-[#9EA5A8] group-hover:text-[#EDE7DC] transition-colors lg:group-hover:translate-x-3 duration-300">
                  {client.title}
                </span>
              </div>
              
              {/* Metadata & Arrow */}
              <div className="flex items-center gap-6 justify-between lg:justify-end w-full lg:w-auto lg:pl-4">
                <span className="text-[10px] font-sans-body uppercase tracking-[0.2em] font-bold text-[#6C7378] group-hover:text-[#EDE7DC] transition-colors">
                  {client.type}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#6C7378] group-hover:text-[#E8913C] lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Hover Preview Panel (Desktop Only 40%) */}
      <div className="hidden lg:block w-[40%] sticky top-40 h-[600px] pointer-events-none overflow-hidden bg-[#0A0C0E] border border-[#EDE7DC]/10">
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
              className="absolute inset-0 w-full h-full flex items-center justify-center text-[#6C7378] text-[9px] uppercase tracking-[0.3em] font-bold font-sans-body"
            >
              Hover to preview
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export const Projects = () => {
  return (
    <section id="catalogue" className="relative w-full bg-[#0A0C0E] pt-32 pb-32 border-t border-[#EDE7DC]/13">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-start mb-24 md:mb-40">
          <span className="font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-[#E8913C] mb-8">
            03 / Selected Work
          </span>
          <h2 className="font-syne text-[clamp(45px,8vw,110px)] font-extrabold uppercase leading-[0.85] text-[#EDE7DC] tracking-tighter mb-8 max-w-4xl">
            Things I<br />Actually Built.
          </h2>
          <p className="font-sans-body text-sm md:text-base text-[#9EA5A8] max-w-xl leading-relaxed">
            Selected products, client experiences, and systems built across AI, software, and digital experiences.
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
