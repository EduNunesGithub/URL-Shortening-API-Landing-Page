import React from "react";
import { twMerge } from "tailwind-merge";

export type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: React.ReactNode;
  label: React.ReactNode;
  propsLabel?: React.HTMLAttributes<HTMLLabelElement>;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, error, label, propsLabel, ...props }, ref) => (
    <label
      {...propsLabel}
      className={twMerge(
        "sm:flex sm:flex-col sm:gap-1 sm:items-center sm:justify-center sm:relative sm:w-full",
        "lg:gap-2",
        propsLabel?.className,
      )}
    >
      <span className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
        {label}
      </span>

      <input
        {...props}
        className={twMerge(
          "sm:border-3 sm:border-transparent sm:h-12 sm:px-[0.8125rem] sm:rounded-md sm:text-deep-well sm:typography-subtitle-02 sm:w-full",
          "sm:placeholder:opacity-50 sm:placeholder:text-deep-well",
          "lg:h-16 lg:px-[1.8125rem]",
          error !== undefined &&
            "sm:border-firecracker-salmon sm:placeholder:text-firecracker-salmon",
          className,
        )}
        ref={ref}
      />

      {error !== undefined && (
        <span className="sm:text-left sm:text-firecracker-salmon sm:typography-error sm:w-full">
          {error}
        </span>
      )}
    </label>
  ),
);
