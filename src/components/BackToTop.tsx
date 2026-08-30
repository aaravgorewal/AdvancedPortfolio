"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Rocket } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (shouldReduceMotion) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsLaunching(true);
    
    // Short launch animation before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Reset state after reaching the top (the button will naturally unmount because isVisible becomes false)
      setTimeout(() => {
        setIsLaunching(false);
      }, 500);
    }, 350); 
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] flex items-center justify-center w-[42px] h-[42px] md:w-[46px] md:h-[46px] rounded-full bg-[#0A0C0E]/80 backdrop-blur-md border border-[#EDE7DC]/10 hover:border-[#E8913C]/30 hover:bg-[#0F1115]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C0E] transition-colors duration-300 overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          <motion.div
            variants={{
              initial: { y: 0, rotate: 0, scale: 1, opacity: 1 },
              hover: { y: -2, rotate: -8, scale: 1 },
              launch: { y: -40, rotate: -8, scale: 0.8, opacity: 0 }
            }}
            initial="initial"
            whileHover={!shouldReduceMotion && !isLaunching ? "hover" : undefined}
            animate={isLaunching ? "launch" : "initial"}
            transition={{
              duration: isLaunching ? 0.35 : 0.4,
              ease: isLaunching ? [0.6, -0.05, 0.9, 0.9] : [0.16, 1, 0.3, 1]
            }}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Subtle amber glow behind the rocket on hover */}
            <div className="absolute inset-0 w-full h-full bg-[#E8913C] blur-[8px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full pointer-events-none" />
            
            <Rocket
              strokeWidth={1.5}
              className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#EDE7DC] group-hover:text-[#E8913C] transition-colors duration-300 relative z-10"
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
