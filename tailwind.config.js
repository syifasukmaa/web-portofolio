/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blueGrey: {
          50: "#ECEFF1",
          100: "#CFD8DC",
          200: "#B0BEC5",
          300: "#90A4AE",
          400: "#78909C",
          500: "#607D8B",
          600: "#546E7A",
          700: "#455A64",
          800: "#37474F",
          900: "#263238",
        },

        blue: "#2B8EC9",
        darkBlue: "#1A6FA0",
        purple: "#607D8B",
        ygPurple: "#263238",
        ygBlue: "#ECEFF1",
        greys: "#546E7A",
        dark100: "#1A2327",
        dark200: "#263238",
        dark300: "#37474F",
        dark400: "#455A64",
        darkk400: "#455A64",
        dark500: "#546E7A",
        dark600: "#90A4AE",
        dark700: "#CFD8DC",
        light300: "#90A4AE",
        light500: "#B0BEC5",
        primary100: "#ECEFF1",
        primary400: "#90A4AE",
        primary500: "#78909C",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
