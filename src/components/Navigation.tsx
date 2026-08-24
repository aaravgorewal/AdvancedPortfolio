"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // threshold for activation
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
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
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 bg-foreground text-background px-4 py-2 font-sans-body text-xs font-semibold focus-ring"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-xs border-b border-border-custom">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 h-16 sm:h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-serif-display text-base sm:text-lg font-bold tracking-tight text-foreground hover:opacity-85 transition-opacity focus-ring"
            aria-label="Aarav Saini Portfolio Home"
          >
            Aarav Saini
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Desktop Navigation">
            <ul className="flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`font-sans-body text-xs uppercase tracking-wider transition-colors duration-200 focus-ring py-2 ${
                        isActive
                          ? "text-accent italic font-semibold border-b border-accent"
                          : "text-secondary hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground focus-ring"
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
            className="md:hidden border-t border-border-custom bg-background"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col py-6 px-5 space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 font-sans-body text-sm uppercase tracking-wider transition-colors duration-200 focus-ring ${
                        isActive
                          ? "text-accent italic font-semibold"
                          : "text-secondary hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
