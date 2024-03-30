import React from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  heading: React.ReactNode;
  imageProps: ImageProps;
  paragraph: React.ReactNode;
};

export const Card = ({ heading, imageProps, paragraph }: CardProps) => (
  <article
    className={twMerge(
      "sm:bg-white sm:flex sm:flex-col sm:gap-8 sm:h-fit sm:items-center sm:justify-center sm:pb-8 sm:px-8 sm:rounded-md sm:w-full",
      "lg:items-start lg:pb-10",
    )}
  >
    <div className="sm:bg-violet-purple sm:flex sm:h-22 sm:items-center sm:justify-center sm:-mt-11 sm:rounded-full sm:w-22">
      <Image
        {...imageProps}
        className="sm:h-10 sm:object-contain sm:w-10"
        height={40}
        placeholder="blur"
        width={40}
      />
    </div>

    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:gap-3 sm:items-center sm:text-center sm:w-full",
        "lg:items-start lg:text-left",
      )}
    >
      <h3 className="sm:text-deep-well sm:typography-H3">{heading}</h3>

      <p className="sm:text-colorado-peak sm:typography-body-02">{paragraph}</p>
    </div>
  </article>
);
