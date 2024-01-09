/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(18rem, 1fr))",
      },
      backgroundImage: {},
      colors: {
        "light-purple": "#D2B3FF",
        "bg-black": "#100F0F",
        "text-black": "#333E4C",
        "bg-hover": "#11111150",
        text: "#e5edf9",
        background: "#1e1e21",
        primary: "#e0a22e",
        secondary: "#6b1f8a",
        accent: "#d852cc",
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
};
