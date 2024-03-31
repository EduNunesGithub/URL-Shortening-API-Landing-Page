"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { setCookie } from "cookies-next";
import { database } from "@/database/database";

export type LayoutClientProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const LayoutClient = ({ children }: LayoutClientProps) => {
  React.useLayoutEffect(() => {
    (async () => {
      const count = await database.links.count();

      setCookie("database-links-count", count);
    })();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
