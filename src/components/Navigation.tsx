"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Catalogue", href: "#catalogue" },
  { label: "Identity", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Dates", href: "#dates" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const sectionToNavMap: { [key: string]: string } = {
      catalogue: "#catalogue",
      about: "#about",
      experience: "#experience",
      dates: "#dates",
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const sections = ["catalogue", "about", "experience", "dates"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionToNavMap[sectionId] || "");
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 bg-[#EDE7DC] text-[#0A0C0E] px-4 py-2 font-sans-body text-xs font-semibold focus-ring"
      >
        Skip to content
      </a>

      {/* 58px Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-[58px] z-50 bg-[#0A0C0E]/80 backdrop-blur-xl border-b border-[#EDE7DC]/13 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            className="font-syne text-[15px] font-bold tracking-tight uppercase text-[#EDE7DC] hover:opacity-85 transition-opacity focus-ring"
            aria-label="Aarav Saini Home"
          >
            AARAV<span className="text-[#E8913C]">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Desktop Navigation">
            <ul className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`text-[10.5px] font-semibold uppercase tracking-[0.15em] font-sans-body transition-colors duration-200 focus-ring py-2 ${
                        isActive
                          ? "text-[#E8913C]"
                          : "text-[#9EA5A8] hover:text-[#E8913C]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="px-6 py-2.5 border border-[#EDE7DC]/20 rounded-none text-[10px] uppercase tracking-[0.15em] font-bold font-sans-body text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-all focus-ring">
              Contact
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#EDE7DC] focus-ring"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden absolute top-[58px] left-0 w-full border-t border-[#EDE7DC]/13 bg-[#0A0C0E]/95 backdrop-blur-xl"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col py-6 px-6 space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 font-sans-body text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-200 focus-ring ${
                        isActive
                          ? "text-[#E8913C]"
                          : "text-[#9EA5A8] hover:text-[#E8913C]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <button className="w-full text-center py-3 border border-[#EDE7DC]/20 rounded-none text-[10px] uppercase tracking-[0.15em] font-bold font-sans-body text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-all">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
