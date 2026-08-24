import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border-custom py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans-body">
        <span className="font-serif-display text-sm font-bold tracking-tight text-foreground select-none">
          Aarav Saini
        </span>
        
        <p className="text-[10px] text-secondary uppercase tracking-widest text-center sm:text-right select-none">
          &copy; {currentYear} Aarav Saini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
