"use client";

import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { TextField } from "@/components/TextField/TextField";
import {
  ShortenerForm,
  useShortenerForm,
} from "@/hooks/useShortenerForm/useShortenerForm";
import shortener from "@/lib/shortener/shortener";

export const Form = () => {
  const { formState, handleSubmit, register, reset, watch } =
    useShortenerForm();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: ShortenerForm) => shortener("POST {url}", data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const { status } = useQuery({
    queryFn: () => [],
    queryKey: ["todos"],
  });

  return (
    <form
      autoComplete="off"
      className={twMerge(
        "sm:bg-violet-purple sm:flex sm:flex-col sm:gap-4 sm:p-6 sm:rounded-xl sm:w-full",
        "lg:flex-row lg:gap-6 lg:items-start lg:px-16 lg:py-13",
        Object.keys(formState.errors).length !== 0 && "lg:pb-[1.625rem]",
      )}
      onSubmit={handleSubmit((data) => mutateAsync(data))}
    >
      <TextField
        {...register("url")}
        error={formState.errors.url?.message}
        label="Shorten a link here..."
        placeholder="Shorten a link here..."
      />

      <button
        className={twMerge(
          "sm:button sm:duration-standard sm:ease-standard sm:min-h-12 sm:py-2 sm:rounded-md sm:text-lg sm:leading-[1.6875rem] sm:transition-colors sm:w-full",
          "lg:flex-shrink-0 lg:h-fit lg:min-h-16 lg:text-xl lg:leading-[1.875rem] lg:w-fit",
        )}
        type="submit"
      >
        Shorten It!
      </button>
    </form>
  );
};
