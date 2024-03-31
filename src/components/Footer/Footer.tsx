import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/Footer/Navigation/Navigation";
import { Social } from "@/components/Footer/Social/Social";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGIconFacebook from "#/SVG/icon-facebook.svg";
import SVGIconInstagram from "#/SVG/icon-instagram.svg";
import SVGIconPinterest from "#/SVG/icon-pinterest.svg";
import SVGIconTwitter from "#/SVG/icon-twitter.svg";
import SVGLogoFooter from "#/SVG/logo-footer.svg";

export const Footer = () => (
  <footer
    className={twMerge(
      "sm:bg-raisin-black sm:flex sm:px-6 sm:py-14 sm:w-full",
      "lg:py-18",
    )}
  >
    <div
      className={twMerge(
        "sm:gap-12 sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:max-w-page-container sm:mx-auto sm:justify-items-center sm:w-full",
        "lg:gap-25 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:justify-items-start",
      )}
    >
      <Link
        aria-label="Go back to home"
        className="sm:h-fit sm:flex sm:flex-shrink-0 sm:max-w-full sm:w-fit"
        href="/"
      >
        <Image
          alt="Shortly"
          blurDataURL={PNGPlaceholder.blurDataURL}
          className="sm:flex-shrink-0 sm:h-8 sm:max-w-full sm:object-contain sm:w-auto"
          height={32}
          placeholder="blur"
          src={SVGLogoFooter}
          width={130}
        />
      </Link>

      <div
        className={twMerge(
          "sm:gap-10 sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:justify-items-center sm:w-full",
          "lg:gap-25 lg:grid-cols-[auto_auto_auto] lg:justify-items-end lg:justify-self-end lg:max-w-full lg:w-fit",
        )}
      >
        <Navigation heading="Features">
          <Navigation.Link href="#">Link Shortening</Navigation.Link>
          <Navigation.Link href="#">Branded Links</Navigation.Link>
          <Navigation.Link href="#">Analytics</Navigation.Link>
        </Navigation>

        <Navigation heading="Resources">
          <Navigation.Link href="#">Blog</Navigation.Link>
          <Navigation.Link href="#">Developers</Navigation.Link>
          <Navigation.Link href="#">Support</Navigation.Link>
        </Navigation>

        <Navigation heading="Company">
          <Navigation.Link href="#">About</Navigation.Link>
          <Navigation.Link href="#">Our Team</Navigation.Link>
          <Navigation.Link href="#">Careers</Navigation.Link>
          <Navigation.Link href="#">Contact</Navigation.Link>
        </Navigation>
      </div>

      <Social heading="Social links">
        <Social.Link
          href="#"
          imageProps={{ alt: "Facebook", src: SVGIconFacebook }}
        />
        <Social.Link
          href="#"
          imageProps={{ alt: "Twitter", src: SVGIconTwitter }}
        />
        <Social.Link
          href="#"
          imageProps={{ alt: "Pinterest", src: SVGIconPinterest }}
        />
        <Social.Link
          href="#"
          imageProps={{ alt: "Instagram", src: SVGIconInstagram }}
        />
      </Social>
    </div>
  </footer>
);
