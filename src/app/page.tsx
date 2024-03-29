import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGIllustrationWorking from "#/SVG/illustration-working.svg";
import { Hero } from "@/components/Hero/Hero";

const Home = () => (
  <main className="sm:flex sm:flex-col sm:h-full sm:w-full">
    <section className="sm:flex sm:overflow-hidden sm:px-6 sm:w-full">
      <div
        className={twMerge(
          "sm:flex sm:flex-col sm:items-center sm:max-w-page-container sm:mx-auto sm:pt-93 sm:relative sm:w-full sm:z-0",
          "lg:items-end lg:justify-center lg:py-16",
        )}
      >
        <div
          className={twMerge(
            "sm:absolute sm:duration-standard sm:ease-standard sm:flex sm:h-85 sm:top-0 sm:transition-opacity sm:translate-x-[5.78125rem] sm:w-128 sm:-z-10",
            "lg:h-120 lg:left-auto lg:opacity-25 lg:top-auto lg:translate-x-72 lg:w-183",
            "min-[1104px]:opacity-100",
          )}
        >
          <Image
            alt=""
            blurDataURL={PNGPlaceholder.blurDataURL}
            className="sm:h-full sm:object-contain sm:w-full"
            height={500}
            loading="eager"
            placeholder="blur"
            priority
            src={SVGIllustrationWorking}
            width={750}
          />
        </div>

        <Hero />
      </div>
    </section>
  </main>
);

export default Home;