/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F0E",
          2: "#10161A",
        },
        paper: "#F5F3EE",
        mist: "#93A29C",
        teal: {
          DEFAULT: "#2BC4B0",
          dim: "#1B7F72",
          bright: "#5EEAD4",
        },
        amber: {
          DEFAULT: "#F2994A",
          dim: "#B8672A",
          bright: "#FFB672",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
