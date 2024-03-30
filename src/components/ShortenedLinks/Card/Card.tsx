import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "@/database/database";

export type CardProps = Link;

export const Card = ({ id, shortened_url, url }: CardProps) => {
  const [clipboard, setClipboard] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    if (clipboard === false) return;

    const timeout = setTimeout(() => {
      setClipboard(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [clipboard]);

  return (
    <div
      className={twMerge(
        "sm:bg-white sm:flex sm:flex-col sm:gap-2 sm:pb-4 sm:pt-2 sm:px-4 sm:rounded-md sm:w-full",
        "lg:flex-row lg:gap-6 lg:items-center lg:pl-8 lg:pr-6 lg:pt-4",
      )}
    >
      <strong
        aria-label="Original url"
        className={twMerge(
          "sm:overflow-hidden sm:text-deep-well sm:text-ellipsis sm:text-nowrap sm:typography-subtitle-02",
          "lg:mr-auto",
        )}
      >
        {url}
      </strong>

      <div
        className={twMerge(
          "sm:border-b-1 sm:border-b-colorado-peak sm:flex sm:opacity-25 sm:w-full",
          "lg:hidden",
        )}
      />

      <span
        aria-label="Shortened url"
        className={twMerge(
          "sm:overflow-hidden sm:text-ellipsis sm:text-mermaid-net sm:text-nowrap sm:typography-subtitle-02",
          "lg:flex-shrink-0",
        )}
      >
        {shortened_url}
      </span>

      <button
        className={twMerge(
          "sm:button sm:duration-standard sm:ease-standard sm:min-h-10 sm:py-1 sm:rounded-md sm:text-base sm:transition-colors sm:w-full",
          "lg:flex-shrink-0 lg:text-[0.9375rem] lg:leading-[1.4375rem] lg:w-26",
          clipboard !== false &&
            "sm:bg-violet-purple sm:cursor-not-allowed sm:hover:bg-violet-purple",
        )}
        onClick={async () =>
          navigator.clipboard
            .writeText(shortened_url)
            .then(() => setClipboard(true))
        }
      >
        {clipboard === false ? "Copy" : "Copied!"}
      </button>
    </div>
  );
};
