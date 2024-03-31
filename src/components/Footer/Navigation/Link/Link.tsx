import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export type LinkProps = NextLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => (
    <NextLink
      {...props}
      className={twMerge(
        "sm:duration-standard sm:ease-standard sm:text-silver sm:transition-colors sm:typography-link-01",
        "sm:hover:text-mermaid-net",
        className,
      )}
      ref={ref}
    />
  ),
);
