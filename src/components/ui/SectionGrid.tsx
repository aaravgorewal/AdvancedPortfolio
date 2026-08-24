import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`w-full py-16 md:py-28 border-b border-border-custom last:border-b-0 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 w-full">
        {children}
      </div>
    </section>
  );
};

interface GridProps {
  className?: string;
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
}

export const SectionGrid = ({ className = "", children, cols = 12 }: GridProps) => {
  const colStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
    12: "grid-cols-1 md:grid-cols-12",
  };

  return (
    <div
      className={`grid gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16 ${colStyles[cols]} ${className}`}
    >
      {children}
    </div>
  );
};
