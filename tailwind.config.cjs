/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        wave: "wave 2.5s infinite",
        gradient: "gradient 4s linear infinite",
      },
      backgroundImage: {
        "acv-linear": "linear-gradient(95deg, #D24074 0%, #6518B4 100%)",
        "acv-solid": "linear-gradient(95deg, #D24074 0%, #D24074 100%)",
      },
      colors: {
        acv: {
          background: "#090E16",
          purple: "#6518B4",
          red: "#D24074",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "5%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        gradient: {
          "0%": {
            backgroundSize: "100% 100%",
            transform: "rotate(0deg)",
          },
          "100%": {
            backgroundSize: "400px 400px",
            transform: "rotate(360deg)",
          },
        },
      },
      maxWidth: {
        app: "90rem",
      },
    },
  },
  plugins: [],
};
