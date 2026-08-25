"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="relative pt-48 bg-[#0A0C0E] overflow-hidden border-t border-[#EDE7DC]/13 w-full animate-fade-in">
      <div className="max-w-[1200px] mx-auto px-6 md:px-24 pb-24 text-left">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          {/* Main callout heading and availability statement */}
          <div className="max-w-2xl">
            <h2 className="font-syne text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] mb-8 text-[#EDE7DC] tracking-tighter">
              Let&apos;s build something.
            </h2>
            <p className="text-[#9EA5A8] text-sm md:text-base leading-relaxed font-sans-body max-w-lg">
              Available for internships, freelance projects, collaborations, and interesting technical problems.
            </p>
          </div>

          {/* Connect actions */}
          <div className="flex flex-wrap gap-4 font-sans-body w-full lg:w-auto">
            <a
              href="mailto:sainiaarav331@gmail.com"
              className="px-8 py-4 border border-[#EDE7DC]/20 font-bold uppercase tracking-widest text-[10px] text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors duration-300 focus-ring text-center flex-1 sm:flex-none"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aaravgorewal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#EDE7DC]/20 font-bold uppercase tracking-widest text-[10px] text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors duration-300 focus-ring text-center flex-1 sm:flex-none"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-[#EDE7DC]/20 font-bold uppercase tracking-widest text-[10px] text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-colors duration-300 focus-ring text-center flex-1 sm:flex-none"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
      
      {/* Sub-footer strip */}
      <div className="border-t border-[#EDE7DC]/13 py-12 px-6 md:px-24 flex justify-between max-w-[1200px] mx-auto text-[9px] uppercase opacity-40 font-bold tracking-[0.2em] font-sans-body text-[#EDE7DC]">
        <span>Privacy / Terms / Legal</span>
        <span>©2026 AARAV SAINI</span>
      </div>

      {/* Large Cropped Wordmark as visual signature */}
      <div className="translate-y-1/3 opacity-5 select-none pointer-events-none w-full overflow-hidden">
        <h1 className="font-syne text-[20vw] font-extrabold text-center uppercase leading-none tracking-tighter whitespace-nowrap text-[#EDE7DC]">
          AARAV SAINI
        </h1>
      </div>
    </footer>
  );
};
