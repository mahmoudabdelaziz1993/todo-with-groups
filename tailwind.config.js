/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00587A",

          secondary: "#973FCF",

          accent: "#FFA500",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#8BC48A",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      "dark",
    ],
  },
};
