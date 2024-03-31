import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/Footer/Social/Link/Link";

export type BaseProps = React.HTMLAttributes<HTMLElement> & {
  heading: React.ReactNode;
};

const Base = React.forwardRef<HTMLElement, BaseProps>(
  ({ children, className, heading, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="sm:flex sm:flex-col sm:gap-6 sm:items-center sm:justify-center sm:relative sm:w-full">
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
            "sm:flex sm:gap-6 sm:items-center sm:justify-center sm:w-full",
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

export const Social = Object.assign(Base, {
  Link: Link,
});
