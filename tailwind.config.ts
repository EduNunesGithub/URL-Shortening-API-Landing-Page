import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "0.0625rem",
        3: "0.1875rem",
      },
      colors: {
        "aircraft-white": "#EFF1F7",
        "colorado-peak": "#9E9AA8",
        "deep-well": "#34313D",
        "firecracker-salmon": "#F46363",
        "mermaid-net": "#2BD0D0",
        "raisin-black": "#232127",
        silver: "#BFBFBF",
        "violet-purple": "#3A3054",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      gap: {
        23: "5.75rem",
        25: "6.25rem",
        38: "9.5rem",
        63: "15.75rem",
      },
      height: {
        22: "5.5rem",
        85: "21.25rem",
        120: "30rem",
      },
      margin: {
        21: "5.25rem",
        27: "6.75rem",
        30: "7.5rem",
        38: "9.5rem",
        42: "10.5rem",
      },
      maxWidth: {
        135: "33.75rem",
        141: "35.25rem",
        142: "35.5rem",
        145: "36.25rem",
        "page-container": "69.375rem",
      },
      padding: {
        13: "3.25rem",
        18: "4.5rem",
        23: "5.75rem",
        93: "23.25rem",
      },
      transitionDuration: {
        "emphasized-accelerate": "200ms",
        "emphasized-decelerate": "400ms",
        standard: "300ms",
      },
      transitionTimingFunction: {
        "emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
        "emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        standard: "cubic-bezier(0.2, 0.0, 0, 1.0)",
      },
      width: {
        22: "5.5rem",
        26: "6.5rem",
        128: "32rem",
        183: "45.75rem",
      },
    },
    screens: {
      sm: "0px",
      lg: "907.5px",
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => ({
      addComponents: addComponents({
        ".background-boost": {},
        ".background-shorten": {},
        ".button": {},
        ".typography-body-01": {},
        ".typography-body-02": {},
        ".typography-error": {},
        ".typography-H1": {},
        ".typography-H2": {},
        ".typography-H3": {},
        ".typography-H4": {},
        ".typography-link-01": {},
        ".typography-subtitle-01": {},
        ".typography-subtitle-02": {},
      }),
    })),
  ],
};

export default config;
