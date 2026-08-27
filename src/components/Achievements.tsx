"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const AWARDS = [
  {
    id: "aw1",
    rank: "2ND",
    event: "Technophilia",
    place: "2ND PLACE",
    year: "2026",
    type: "National Level Tech Symposium",
    org: "Dewan VS Institute Of Engineering And Technology"
  },
  {
    id: "aw2",
    rank: "3RD",
    event: "NERDZ'26 Hackathon",
    place: "3RD PLACE",
    year: "2026",
    type: "National Level Hackathon",
    org: "Jamia Hamdard University"
  }
];

const HACKATHONS = [
  { id: "h1", event: "HackCBS 8.0", role: "Developer", year: "2025" },
  { id: "h2", event: "RIFT '26", role: "Team Lead", year: "2026" },
  { id: "h3", event: "HackFusion 2026", role: "Full-Stack Engineer", year: "2026" },
  { id: "h4", event: "Convolve 4.0", role: "AI/ML Hackathon", year: "2026" },
  { id: "h5", event: "HackCraft 3.0", role: "Runner Up", year: "2026" },
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
    <section ref={containerRef} className="w-full bg-[#0A0C0E] border-t border-[#EDE7DC]/13 pt-32 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col mb-24"
          style={{ 
             y: shouldReduceMotion ? 0 : headerY, 
             opacity: shouldReduceMotion ? 1 : headerOpacity 
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4">
            07 / PROOF
          </span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tighter text-[#EDE7DC] leading-[0.9] mb-6">
            PROOF OF WORK
          </h2>
          <p className="font-sans-body text-xs md:text-sm text-[#9EA5A8] max-w-md tracking-wide leading-relaxed">
            A record of competitions, builds, leadership, and results.
          </p>
        </motion.div>

        {/* 1. Primary Awards */}
        <div className="mb-32">
          <div className="border-b border-[#EDE7DC]/13 pb-4 mb-12">
            <h3 className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] uppercase">
              Primary: Awards
            </h3>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {AWARDS.map((award, idx) => (
              <motion.div 
                key={award.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : idx * 0.1, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-start md:items-center w-full group relative"
              >
                {/* Rank Indicator */}
                <div className="mb-6 md:mb-0 md:mr-16 flex items-center justify-center shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#E8913C]/30 flex items-center justify-center bg-[#E8913C]/5 group-hover:bg-[#E8913C]/10 transition-colors duration-500">
                    <span className="font-syne text-xl md:text-3xl font-extrabold text-[#E8913C] tracking-tighter">
                      {award.rank}
                    </span>
                  </div>
                </div>

                {/* Award Details */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between w-full border-b border-[#EDE7DC]/5 md:border-none pb-6 md:pb-0">
                  <div className="flex flex-col mb-4 md:mb-0">
                    <span className="font-mono text-[10px] text-[#E8913C] tracking-widest font-bold uppercase mb-2">
                      {award.place}
                    </span>
                    <h4 className="font-syne text-2xl md:text-4xl font-extrabold text-[#EDE7DC] uppercase tracking-tighter mb-2">
                      {award.event}
                    </h4>
                    <span className="font-sans-body text-xs text-[#9EA5A8] tracking-wide">
                      {award.type} {award.org ? ` — ${award.org}` : ""}
                    </span>
                  </div>
                  
                  <div className="md:text-right flex flex-col items-start md:items-end">
                    <span className="font-mono text-[10px] text-[#6C7378] tracking-[0.2em] mb-1">YEAR</span>
                    <span className="font-sans-body text-sm font-bold text-[#EDE7DC]">{award.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Selected Hackathons */}
        <div className="mb-16">
          <div className="border-b border-[#EDE7DC]/13 pb-4 mb-8">
            <h3 className="font-mono text-[9px] text-[#6C7378] tracking-[0.2em] uppercase">
              Selected Hackathons
            </h3>
          </div>

          <div className="flex flex-col w-full">
            {HACKATHONS.map((hack, idx) => (
              <motion.div 
                key={hack.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-5%" }}
                transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : idx * 0.05, ease: "easeOut" }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[#EDE7DC]/10 hover:border-[#E8913C]/40 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center flex-1 pr-4 transform transition-transform duration-300 group-hover:translate-x-3 mb-2 sm:mb-0">
                  <span className="font-mono text-[9px] text-[#E8913C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 font-bold">
                    →
                  </span>
                  <span className="font-sans-body text-sm md:text-base font-bold uppercase tracking-wider text-[#9EA5A8] group-hover:text-[#EDE7DC] transition-colors duration-300">
                    {hack.event}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-16 sm:w-1/2 transform transition-transform duration-300 group-hover:-translate-x-1">
                  <span className="font-mono text-[10px] md:text-xs text-[#6C7378] group-hover:text-[#2E6B72] transition-colors duration-300 uppercase tracking-widest text-left sm:text-right">
                    {hack.role}
                  </span>
                  <span className="font-mono text-[10px] md:text-xs text-[#6C7378] group-hover:text-[#EDE7DC] transition-colors duration-300 font-bold text-left sm:text-right w-12">
                    {hack.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Credentials Option */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="pt-12 text-center md:text-left"
        >
          <a 
            href="#" 
            className="inline-flex items-center font-mono text-[10px] text-[#6C7378] hover:text-[#E8913C] uppercase tracking-[0.2em] transition-colors duration-300 group cursor-not-allowed"
            onClick={(e) => e.preventDefault()}
            title="Credentials link unavailable"
          >
            VIEW CREDENTIALS
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
