/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          // in case you want to change bg color
          "base-100": "#000000",
          primary: "#641ae6",
          secondary: "#d926a9",
        },
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          // in case you want to change bg color
          "base-100": "#f0e7db",
          primary: "#269ad9",
          secondary: "#641ae6",
        },
      },
    ],
  },
};
