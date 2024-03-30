"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/ShortenedLinks/Card/Card";
import shortener from "@/lib/shortener/shortener";

export const ShortenedLinks = () => {
  const { data, status } = useQuery({
    queryFn: () => shortener("GET {}", {}),
    queryKey: ["todos"],
  });

  if (status === "error" || status === "pending") return null;

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
