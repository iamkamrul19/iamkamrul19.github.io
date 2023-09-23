import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "0rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        "theme-text-normal": "#8892b0",
        "theme-text-highlight": "#64ffda",
        "theme-text-title": "#ccd6f6",
        "theme-text-sub-title": "#8892b0",
        "theme-bg": "#0A192F",
      },
    },
  },
  plugins: [],
};
export default config;
