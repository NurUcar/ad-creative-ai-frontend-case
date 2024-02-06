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
      },
      backgroundImage: {
        "rick-and-morty-background": "url('/src/assets/img/background.jpg')",
      },
    },
  },
  plugins: [],
};
