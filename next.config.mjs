import bundle from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";

const analyzer = bundle({
  enabled: process.env.ANALYZE === "true",
});

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default analyzer(withSerwist(nextConfig));
