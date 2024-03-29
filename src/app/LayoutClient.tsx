"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type LayoutClientProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const LayoutClient = ({ children }: LayoutClientProps) => (
  <>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </>
);
