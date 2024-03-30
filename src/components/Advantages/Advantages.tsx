import React from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/Advantages/Card/Card";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGIconBrandRecognition from "#/SVG/icon-brand-recognition.svg";
import SVGIconDetailedRecords from "#/SVG/icon-detailed-records.svg";
import SVGIconFullyCustomizable from "#/SVG/icon-fully-customizable.svg";

export const Advantages = () => {
  const id = React.useId();

  return (
    <article
      className={twMerge(
        "sm:flex sm:flex-col sm:gap-23 sm:items-center sm:w-full",
        "lg:gap-63",
      )}
    >
      <div
        className={twMerge(
          "sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:w-full",
          "lg:gap-5 lg:max-w-135",
        )}
      >
        <h2
          className="sm:text-deep-well sm:typography-H2"
          id={id}
        >
          Advanced Statistics
        </h2>

        <p className="sm:text-colorado-peak sm:typography-body-01">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div
        className={twMerge(
          "sm:flex sm:items-center sm:justify-center sm:relative sm:w-full sm:z-0",
          "lg:items-start",
        )}
      >
        <div
          className={twMerge(
            "sm:absolute sm:bg-mermaid-net sm:h-full sm:w-2 sm:-z-10",
            "lg:h-2 lg:w-full",
          )}
        />

        <ul
          aria-labelledby={id}
          className={twMerge(
            "sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:gap-23 sm:items-center sm:justify-center sm:w-full",
            "lg:gap-8 lg:grid-cols-3 lg:items-start",
          )}
        >
          <li className={twMerge("sm:flex sm:w-full", "lg:-mt-38")}>
            <Card
              heading="Brand Recognition"
              imageProps={{
                alt: "",
                blurDataURL: PNGPlaceholder.blurDataURL,
                src: SVGIconBrandRecognition,
              }}
              paragraph="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
          </li>

          <li className={twMerge("sm:flex sm:w-full", "lg:-mt-27")}>
            <Card
              heading="Detailed Records"
              imageProps={{
                alt: "",
                blurDataURL: PNGPlaceholder.blurDataURL,
                src: SVGIconDetailedRecords,
              }}
              paragraph="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
          </li>

          <li className={twMerge("sm:flex sm:w-full", "lg:-mt-16")}>
            <Card
              heading="Fully Customizable"
              imageProps={{
                alt: "",
                blurDataURL: PNGPlaceholder.blurDataURL,
                src: SVGIconFullyCustomizable,
              }}
              paragraph="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </li>
        </ul>
      </div>
    </article>
  );
};
