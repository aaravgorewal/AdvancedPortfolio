# Shared UI Primitives

## Button
- **File**: `src/components/ui/Button.tsx`
- **Description**: Reusable button/link component with primary, secondary, and ghost variants.
- **Key props**: `variant`, `href`, `disabled`, `type`, `onClick`, `children`, `className`
- **Source**:
```tsx
import React, { forwardRef } from "react";
import Link from "next/link";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
  id?: string;
}

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      href,
      disabled,
      type = "button",
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans-body text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 focus-ring cursor-pointer select-none rounded-none border border-solid disabled:opacity-50 disabled:pointer-events-none px-6 py-3 h-11 sm:h-12";

    const variantStyles = {
      primary:
        "bg-foreground text-background border-foreground hover:bg-transparent hover:text-foreground active:bg-foreground/10",
      secondary:
        "bg-transparent text-foreground border-border-custom hover:border-foreground hover:text-foreground active:bg-foreground/5",
      ghost:
        "bg-transparent text-secondary border-transparent hover:text-foreground active:bg-foreground/5",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
      if (disabled) {
        return (
          <span
            className={`${combinedClassName} opacity-50 pointer-events-none`}
            {...props}
          >
            {children}
          </span>
        );
      }

      const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={combinedClassName}
            onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
            {...props}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={combinedClassName}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
```

## SectionGrid
- **File**: `src/components/ui/SectionGrid.tsx`
- **Description**: Shared layout containers for sections and grids.
- **Key props**: `id`, `className`, `children`, `cols`
- **Source**:
```tsx
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
```
