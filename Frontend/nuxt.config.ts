import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // disable generating the shim for *.vue files because volar overtake-mode is activated
  typescript: {
    shim: false,
  },

  // default values for environment variables
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    },
  },

  // build configuration
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  // global css files
  css: ["~/assets/css/tailwind.css"],
});
