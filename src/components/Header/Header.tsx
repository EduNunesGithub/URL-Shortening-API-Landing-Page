import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Menu } from "@/components/Header/Menu/Menu";
import { Navigation } from "@/components/Header/Navigation/Navigation";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGLogo from "#/SVG/logo.svg";

export const Header = () => (
  <header
    className={twMerge(
      "sm:bg-white sm:flex sm:px-6 sm:py-10 sm:shadow sm:sticky sm:top-0 sm:w-full sm:z-10",
      "lg:py-12",
    )}
  >
    <div
      className={twMerge(
        "sm:grid sm:grid-cols-[auto_auto] sm:grid-rows-[auto] sm:items-center sm:justify-between sm:max-w-page-container sm:mx-auto sm:w-full",
        "lg:gap-10 lg:grid-cols-[auto_1fr_auto]",
      )}
    >
      <Link
        className="sm:flex sm:flex-shrink-0 sm:h-fit sm:w-fit"
        href="/"
      >
        <Image
          alt="Shortly"
          blurDataURL={PNGPlaceholder.blurDataURL}
          className="sm:flex-shrink-0 sm:h-8 sm:max-w-full sm:object-contain sm:w-auto"
          height={32}
          placeholder="blur"
          src={SVGLogo}
          width={130}
        />
      </Link>

      <Navigation
        heading="General links"
        propsContainer={{ className: twMerge("sm:hidden", "lg:flex") }}
      >
        <Navigation.Link href="#">Features</Navigation.Link>
        <Navigation.Link href="#">Pricing</Navigation.Link>
        <Navigation.Link href="#">Resources</Navigation.Link>
      </Navigation>

      <div
        className={twMerge(
          "sm:hidden",
          "lg:flex lg:gap-8 lg:items-center lg:text-center lg:w-fit",
        )}
      >
        <Link
          className={twMerge(
            "sm:duration-standard sm:ease-standard sm:flex-shrink-0 sm:text-colorado-peak sm:transition-colors sm:typography-link-02",
            "sm:hover:text-deep-well",
          )}
          href="#"
        >
          Login
        </Link>

        <Link
          className={twMerge(
            "sm:button sm:duration-standard sm:ease-standard sm:min-h-12 sm:transition-colors sm:!typography-link-02 sm:w-full",
            "lg:min-h-10 lg:py-1",
          )}
          href="#"
        >
          Sign Up
        </Link>
      </div>

      <Menu />
    </div>
  </header>
);
