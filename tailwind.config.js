const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        base: {
          "light-cream": "#F7F4F0",
          cream: "#C0B7AF",
          "darker-cream": "#A28869",
          gray: "#8F8F8F",
          brown: "#6A6560",
          "dark-brown": "#474443",
          dark: "#2D2A27",
          darkest: "#2A2D2C",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        karla: ["var(--font-karla)", ...fontFamily.sans],
        marcellus: ["var(--font-marcellus)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
