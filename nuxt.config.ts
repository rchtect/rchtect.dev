// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "light", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
  },
  css: ["~/assets/css/tailwind.css"],
});
