/** @type {import('tailwindcss').Config} */
/* eslint-disable  */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "body-col": "#003351",
        gray: {
          50: "#F8FaFc",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0f172A",
        },
        primary: {
          50: "#e8ecf0",
          100: "#7790a9",
          200: "#3c6084",
          300: "#143f6b",
          400: "#0e2c4b",
          500: "#0c2641",
        },
        secondary: {
          50: "#feeeee",
          100: "#f99b9b",
          200: "#f77070",
          300: "#f55353",
          400: "#ac3a3a",
          500: "#953333",
        },
        accent: {
          50: "#fff7eb",
          100: "#fed28c",
          200: "#febe5b",
          300: "#feb139",
          400: "#b27c28",
          500: "#9b6c23",
        },
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "25%": {
            opacity: "0.25",
            transform: "translateX(-75px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateX(-50px)",
          },
          "75%": {
            opacity: "0.75",
            transform: "translateX(-25px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "25%": {
            opacity: "0.25",
            transform: "translateX(75px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateX(50px)",
          },
          "75%": {
            opacity: "0.75",
            transform: "translateX(25px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 400ms ease-in-out",
        "slide-in-right": "slide-in-right 400ms ease-in-out",
      },
    },
  },
};
