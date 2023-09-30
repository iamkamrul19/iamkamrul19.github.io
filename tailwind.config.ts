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
        md: "5rem",
        lg: "6.6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "100%",
        md: "780px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    fontFamily: {
      arOneSans: ["AR One Sans", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },

    extend: {
      colors: {
        "text-normal": "#8892b0",
        "text-highlight": "#64ffda",
        "text-info": "#ccd6f6",
        "text-sub-title": "#8892b0",
        "theme-bg": "#0a192f",
      },
    },
  },
  plugins: [],
};
export default config;
