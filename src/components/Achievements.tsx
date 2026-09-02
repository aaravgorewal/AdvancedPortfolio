"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const AWARDS = [
  {
    id: "aw_drophack26",
    rank: "01",
    place: "1ST PLACE",
    event: "DROPHACK'26",
    year: "2026",
    type: "Hackathon",
    org: "Paytm Office Noida"
  },
  {
    id: "aw_devcreate",
    rank: "01",
    place: "1ST PLACE",
    event: "DEVCREATE BUILDFEST 1.0",
    year: "2025",
    type: "Buildfest",
    org: "Google Developer Groups Jalandhar (GDG Jalandhar)"
  },
  {
    id: "aw_techfest",
    rank: "02",
    place: "2ND PLACE",
    event: "TECHFEST 2025",
    year: "2025",
    type: "Techfest",
    org: "Meerut Institute of Technology"
  },
  {
    id: "aw1",
    rank: "02",
    place: "2ND PLACE",
    event: "TECHNOPHILIA",
    year: "2026",
    type: "National Level Tech Symposium",
    org: "Dewan VS Institute of Engineering and Technology"
  },
  {
    id: "aw2",
    rank: "03",
    place: "3RD PLACE",
    event: "NERDZ'26 HACKATHON",
    year: "2026",
    type: "National Level Hackathon",
    org: "Jamia Hamdard University"
  }
];

const CREDENTIALS = [
  { id: "c1", event: "HackShastra", issuer: "Participation Credential", year: "2025" },
  { id: "c2", event: "Hack For Green Bharat", issuer: "Participation Credential", year: "2025" },
];

export const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], ["30px", "0px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="w-full bg-[#0A0C0E] border-t border-[#EDE7DC]/13 pt-32 pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col mb-24 md:mb-32"
          style={{ 
             y: shouldReduceMotion ? 0 : headerY, 
             opacity: shouldReduceMotion ? 1 : headerOpacity 
          }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4"
          >
            07 / RECOGNITION
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tighter text-[#EDE7DC] leading-[0.9] mb-6"
          >
            RECOGNITION
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans-body text-xs md:text-sm text-[#9EA5A8] max-w-md tracking-wide leading-relaxed"
          >
            Results that made the build log worth keeping.
          </motion.p>
        </motion.div>

        {/* 1. Hero Awards */}
        <div className="flex flex-col w-full border-t border-[#EDE7DC]/13">
          {AWARDS.map((award, idx) => (
            <motion.div 
              key={award.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : idx * 0.2, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row md:items-center w-full border-b border-[#EDE7DC]/13 hover:border-[#E8913C]/40 transition-colors duration-500 py-16 md:py-24 cursor-default focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8913C]"
              tabIndex={0}
            >
              
              {/* Oversized Typographic Rank */}
              <div className="md:w-[40%] flex-shrink-0 relative flex flex-col justify-center mb-8 md:mb-0 transform transition-transform duration-500 group-hover:translate-x-4">
                 <motion.span 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: false }}
                   transition={{ duration: 0.7, delay: 0.2 + (idx * 0.1) }}
                   className={`font-syne text-[35vw] md:text-[18vw] lg:text-[16vw] font-extrabold transition-colors duration-500 leading-[0.75] tracking-tighter -ml-2 md:-ml-8 lg:-ml-12 select-none ${award.place === '1ST PLACE' ? 'text-[#E8913C]/25 group-hover:text-[#E8913C]/60' : award.place === '2ND PLACE' ? 'text-[#E8913C]/10 group-hover:text-[#E8913C]/30' : 'text-[#E8913C]/5 group-hover:text-[#E8913C]/20'}`}
                 >
                   {award.rank}
                 </motion.span>
                 <span className="absolute bottom-2 md:bottom-8 left-2 md:left-4 font-mono text-[9px] text-[#E8913C] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   → VERIFIED RANK
                 </span>
              </div>

              {/* Award Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between w-full px-4 md:px-0 z-10 transform transition-transform duration-500 group-hover:translate-x-2">
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col mb-8 md:mb-0"
                >
                  <span className="font-mono text-[10px] md:text-xs text-[#E8913C] tracking-widest font-bold uppercase mb-4">
                    {award.place}
                  </span>
                  <h3 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter mb-4 group-hover:text-white transition-colors duration-500">
                    {award.event}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                     <span className="font-sans-body text-xs md:text-sm text-[#9EA5A8] tracking-wide group-hover:text-[#EDE7DC] transition-colors duration-500">
                       {award.type}
                     </span>
                     <span className="font-sans-body text-[10px] md:text-xs text-[#6C7378] group-hover:text-[#9EA5A8] transition-colors duration-500">
                       {award.org}
                     </span>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1) }}
                  className="md:text-right flex flex-col items-start md:items-end md:pr-8"
                >
                  <span className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] mb-2 group-hover:text-[#9EA5A8] transition-colors duration-500">YEAR</span>
                  <span className="font-sans-body text-xl md:text-2xl font-bold text-[#EDE7DC] group-hover:text-white transition-colors duration-500">{award.year}</span>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Secondary Archive: Selected Credentials */}
        <div className="mt-24 md:mt-32 max-w-2xl">
          <div className="border-b border-[#EDE7DC]/13 pb-4 mb-8">
            <h3 className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] uppercase">
              Selected Credentials
            </h3>
          </div>

          <div className="flex flex-col w-full border-t border-[#EDE7DC]/13">
            {CREDENTIALS.map((cred, idx) => (
              <motion.div 
                key={cred.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-[#EDE7DC]/5 hover:border-[#6C7378]/30 transition-colors duration-300"
              >
                <div className="flex items-center flex-1 pr-4 mb-1 md:mb-0">
                  <span className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#9EA5A8]">
                    {cred.event}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-1 md:gap-12 md:w-1/2">
                  <span className="font-mono text-[8px] md:text-[9px] text-[#6C7378] uppercase tracking-widest text-left md:text-right">
                    {cred.issuer}
                  </span>
                  <span className="font-mono text-[8px] md:text-[9px] text-[#6C7378] font-bold text-left md:text-right md:w-12">
                    {cred.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
