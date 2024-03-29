import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Hero = () => (
  <article className="sm:flex sm:flex-col sm:w-full">
    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:w-full",
        "lg:gap-1 lg:items-start lg:max-w-145 lg:text-left",
      )}
    >
      <h1 className="sm:text-deep-well sm:typography-H1">
        More than just shorter links
      </h1>

      <p
        className={twMerge(
          "sm:mb-4 sm:text-colorado-peak sm:typography-subtitle",
          "lg:mb-9",
        )}
      >
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>

      <Link
        className="sm:button sm:duration-standard sm:ease-standard sm:transition-colors"
        href="#"
      >
        Get Started
      </Link>
    </div>
  </article>
);
