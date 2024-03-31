import React from "react";
import Image, { ImageProps } from "next/image";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import PNGPlaceholder from "#/PNG/placeholder.png";

export type LinkProps = NextLinkProps &
  React.HTMLAttributes<HTMLAnchorElement> & {
    imageProps: ImageProps;
  };

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, imageProps, ...props }, ref) => (
    <NextLink
      {...props}
      aria-label={imageProps.alt}
      className={twMerge(
        "sm:duration-standard sm:ease-standard sm:h-fit sm:transition-colors sm:w-fit",
        "sm:hover:text-mermaid-net",
        className,
      )}
      ref={ref}
    >
      <Image
        {...imageProps}
        blurDataURL={PNGPlaceholder.blurDataURL}
        className="sm:h-6 sm:object-contain sm:w-6"
        height={24}
        placeholder="blur"
        width={24}
      />
    </NextLink>
  ),
);
