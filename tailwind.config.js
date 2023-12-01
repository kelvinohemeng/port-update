/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      backgroundImage: {},
      colors: {
        "body-text": "#B5E65E",
        "bg-black": "#1c1a1c",
        "bg-subtle-black": "#161816",
        "bg-hover": "#11111150",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
    theme: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
