import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/Footer/Navigation/Link/Link";

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
          "sm:flex sm:flex-col sm:gap-6 sm:items-center sm:text-center sm:w-full",
          "lg:items-start lg:text-left",
          propsContainer?.className,
        )}
      >
        <strong
          className="sm:text-white sm:typography-H4 sm:w-full"
          id={id}
        >
          {heading}
        </strong>

        <nav
          {...props}
          aria-labelledby={id}
          className={twMerge(
            "sm:flex sm:flex-col sm:gap-3 sm:items-center sm:w-full",
            "lg:items-start",
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
