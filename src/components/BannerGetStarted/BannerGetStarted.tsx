import { twMerge } from "tailwind-merge";

export const BannerGetStarted = () => (
  <article
    className={twMerge(
      "sm:background-boost sm:bg-violet-purple sm:flex sm:px-6 sm:py-23 sm:w-full",
      "lg:py-14",
    )}
  >
    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:gap-4 sm:items-center sm:max-w-page-container sm:mx-auto sm:w-full",
        "lg:gap-8",
      )}
    >
      <h2 className="sm:text-white sm:typography-H2">Boost your links today</h2>

      <button
        className={twMerge(
          "sm:button sm:duration-standard sm:ease-standard sm:transition-colors",
          "lg:gap-8",
        )}
      >
        Get Started
      </button>
    </div>
  </article>
);
