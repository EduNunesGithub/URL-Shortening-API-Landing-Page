"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/ShortenedLinks/Card/Card";
import shortener from "@/lib/shortener/shortener";

export type ShortenedLinksProps = {
  placeholderCount: number;
};

export const ShortenedLinks = ({
  placeholderCount = 0,
}: ShortenedLinksProps) => {
  const { data, status } = useQuery({
    queryFn: () => shortener("GET {}", {}),
    queryKey: ["todos"],
  });

  if (status === "pending" && placeholderCount !== 0)
    return (
      <div
        aria-hidden
        className={twMerge(
          "sm:flex sm:flex-col sm:gap-6 sm:w-full",
          "lg:gap-4",
        )}
      >
        {new Array(placeholderCount).fill(0).map(({}, index) => (
          <div
            className={twMerge(
              "sm:bg-mermaid-net sm:flex sm:overflow-hidden sm:pb-40 sm:rounded-md sm:skeleton sm:w-full",
              "lg:pb-18",
            )}
            key={index}
          >
            <div
              className={twMerge(
                "sm:border-b-1 sm:border-b-mermaid-net sm:flex sm:w-full",
                "lg:hidden",
              )}
            />
          </div>
        ))}
      </div>
    );

  if (status === "error" || data === undefined || data.length === 0)
    return null;

  const sorted = data.toSorted(({ id: idA }, { id: idB }) => idB - idA);

  return (
    <ul
      aria-label="List of links"
      className={twMerge("sm:flex sm:flex-col sm:gap-6 sm:w-full", "lg:gap-4")}
    >
      {sorted.map(({ id, shortened_url, url }) => (
        <li
          className="sm:flex sm:w-full"
          key={id}
        >
          <Card
            id={id}
            shortened_url={shortened_url}
            url={url}
          />
        </li>
      ))}
    </ul>
  );
};
