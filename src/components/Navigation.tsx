"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Catalogue", href: "#catalogue" },
  { label: "Identity", href: "#about" },
  { label: "Dates", href: "#dates" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sectionToNavMap: { [key: string]: string } = {
      catalogue: "#catalogue",
      about: "#about",
      experience: "#experience",
      dates: "#dates",
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for detection
      const sections = ["catalogue", "about", "experience", "dates"];

      let current = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionToNavMap[sectionId];
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[60] bg-[#EDE7DC] text-[#0A0C0E] px-4 py-2 font-sans-body text-xs font-semibold focus-ring"
      >
        Skip to content
      </a>

      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(10, 12, 14, 0.85)" : "rgba(10, 12, 14, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: isScrolled ? "1px solid rgba(237, 231, 220, 0.08)" : "1px solid rgba(237, 231, 220, 0)",
        }}
      >
        <motion.div
          animate={{
            height: isScrolled ? "64px" : "88px",
            paddingLeft: isScrolled ? "16px" : "24px",
            paddingRight: isScrolled ? "16px" : "24px",
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1200px] mx-auto flex items-center justify-between lg:px-24"
        >
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <a
              href="#"
              onClick={scrollToTop}
              className="group font-syne text-[15px] font-bold tracking-tight uppercase text-[#EDE7DC] flex items-center focus-ring transition-all duration-300 hover:brightness-125 hover:tracking-normal hover:-translate-y-[1px]"
              aria-label="Aarav Saini Home"
            >
              AARAV<span className="text-[#E8913C] transition-colors duration-300">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Desktop Navigation">
            <ul className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.label} className="relative group flex items-center h-full">
                    <a
                      href={item.href}
                      className={`relative z-10 text-[10.5px] font-semibold uppercase tracking-[0.15em] font-sans-body transition-all duration-300 focus-ring py-2 flex items-center ${
                        isActive
                          ? "text-[#EDE7DC]"
                          : "text-[#9EA5A8] hover:text-[#EDE7DC] hover:-translate-y-[2px]"
                      }`}
                    >
                      {/* Subtle hover accent indicator */}
                      <span className="absolute -left-3 w-1 h-1 rounded-full bg-[#E8913C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.label}
                    </a>
                    {/* Active Section Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#E8913C]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <a 
              href="https://www.linkedin.com/in/aaravgorewal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-[#EDE7DC]/20 rounded-none text-[10px] uppercase tracking-[0.15em] font-bold font-sans-body text-[#EDE7DC] transition-all duration-300 hover:bg-[#EDE7DC] hover:text-[#0A0C0E] hover:border-[#EDE7DC] focus-ring flex items-center group/btn"
            >
              Contact
              <span className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 text-[#0A0C0E]">
                →
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#EDE7DC] focus-ring z-50 relative"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0C0E] flex flex-col justify-center px-6 md:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-8 w-full max-w-sm mx-auto">
              <ul className="flex flex-col space-y-6 text-center">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block font-syne text-3xl font-bold uppercase tracking-wide transition-colors duration-200 focus-ring ${
                          isActive ? "text-[#E8913C]" : "text-[#EDE7DC] hover:text-[#E8913C]"
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + NAV_ITEMS.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8"
                >
                  <a 
                    href="https://www.linkedin.com/in/aaravgorewal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-block px-10 py-4 border border-[#EDE7DC]/30 text-sm uppercase tracking-[0.2em] font-bold font-sans-body text-[#EDE7DC] hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-all"
                  >
                    Contact
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
