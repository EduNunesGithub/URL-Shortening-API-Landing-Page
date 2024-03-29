import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    screens: {
      sm: "0px",
      lg: "907.5px",
    },
  },
  plugins: [],
};

export default config;
