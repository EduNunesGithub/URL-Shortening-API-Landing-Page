import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/Header/Navigation/Link/Link";

export type BaseProps = React.HTMLAttributes<HTMLElement> & {
  propsContainer?: React.HTMLAttributes<HTMLDivElement>;
  heading: React.ReactNode;
};

const Base = React.forwardRef<HTMLElement, BaseProps>(
  ({ children, className, heading, propsContainer, ...props }, ref) => {
    const id = React.useId();

    return (
      <div
        {...propsContainer}
        className={twMerge(
          "sm:flex sm:flex-col sm:items-center sm:text-center sm:w-full",
          propsContainer?.className,
        )}
      >
        <strong
          className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0"
          id={id}
        >
          {heading}
        </strong>

        <nav
          {...props}
          aria-labelledby={id}
          className={twMerge(
            "sm:flex sm:flex-col sm:gap-8 sm:items-center sm:w-full",
            "lg:flex-row lg:justify-start",
            className,
          )}
          ref={ref}
        >
          {children}
        </nav>
      </div>
    );
  },
);

export const Navigation = Object.assign(Base, {
  Link: Link,
});
