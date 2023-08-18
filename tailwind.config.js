/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        greys: '#666',
        blue: '#13b0f5',
        darkBlue: '#0284c7',
        purple: '#e70faa',
        ygPurple: '#42446E',
        ygBlue: '#f1f5f9',
        dark100: '#121212',
        dark200: '#282828',
        dark300: '#3f3f3f',
        darkk400: '#575757',
        dark600: '#8b8b8b',
        dark700: '#c2c0c0',
        light300: '#609ed4',
        light500: '#91b9e0',
        primary100: '#565bb8',
        primary400: '#918ed0',
        primary500: '#b6b2e0',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
