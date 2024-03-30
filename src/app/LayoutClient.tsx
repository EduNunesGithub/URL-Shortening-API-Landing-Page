"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type LayoutClientProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const LayoutClient = ({ children }: LayoutClientProps) => (
  <>
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);
