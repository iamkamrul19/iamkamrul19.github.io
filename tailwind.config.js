/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
