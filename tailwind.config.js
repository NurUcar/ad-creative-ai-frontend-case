/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryMadderLake: "#D33737",
        primaryBlue: "#4CA7D4",
        secondaryFadingSunset: "#B5B5C3",
        maximumBlue: "#4CA7D4",
        removeRed: "#D33737",
        cadetGrey: "#9FA1BB",
      },
      backgroundImage: {
        "rick-and-morty-background": "url('/src/assets/img/background.jpg')",
      },
      transitionProperty: {
        maxHeight: "max-height",
      },
    },
  },
  plugins: [],
};
