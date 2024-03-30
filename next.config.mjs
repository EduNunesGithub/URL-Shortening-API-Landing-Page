import bundle from "@next/bundle-analyzer";

const analyzer = bundle({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default analyzer(nextConfig);
