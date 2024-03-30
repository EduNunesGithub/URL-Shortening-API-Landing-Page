import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGIllustrationWorking from "#/SVG/illustration-working.svg";
import { Advantages } from "@/components/Advantages/Advantages";
import { Form } from "@/components/Form/Form";
import { Hero } from "@/components/Hero/Hero";
import { ShortenedLinks } from "@/components/ShortenedLinks/ShortenedLinks";

const Home = () => (
  <main className="sm:flex sm:flex-col sm:h-full sm:w-full">
    <section
      className={twMerge(
        "sm:flex sm:mb-42 sm:overflow-hidden sm:px-6 sm:w-full",
        "lg:mb-38",
      )}
    >
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

    <div className="sm:bg-aircraft-white sm:flex sm:flex-col sm:w-full">
      <section
        className={twMerge(
          "sm:flex sm:items-center sm:justify-center sm:mb-20 sm:-mt-20 sm:px-6 sm:relative sm:w-full",
          "lg:mb-30 lg:-mt-21",
        )}
      >
        <h2 className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
          Form and list of shortened links
        </h2>

        <div className="sm:flex sm:flex-col sm:gap-6 sm:max-w-page-container sm:mx-auto sm:w-full">
          <Form />

          <ShortenedLinks />
        </div>
      </section>

      <section className="sm:flex sm:px-6 sm:w-full">
        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          <Advantages />
        </div>
      </section>
    </div>
  </main>
);

export default Home;
