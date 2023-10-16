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
          "base-200": "#1a1a1a",
          primary: "#641ae6",
          secondary: "#d926a9",
          "base-content": "#dedede",
          "accent": "#dedede"
        },
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          // in case you want to change bg color
          "base-100": "#f0e7db",
          "base-200": "#f3ece2",
          primary: "#99DDFC",
          secondary: "#641ae6",
          "base-content": "#313131",
          "accent": "#000000"
        },
      },
    ],
  },
};
