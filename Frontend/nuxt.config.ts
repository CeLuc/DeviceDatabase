import { defineNuxtConfig } from "nuxt";
import tailwindTypography from "@tailwindcss/typography";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules are nuxt extensions
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs-alt/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs-alt/pinia",
  ],

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
    transpile: ["@apollo/client", "ts-invariant/process"],
  },

  // auth config
  auth: {
    strategies: {
      GraphQLScheme: {
        scheme: "~/scheme/graphqlScheme.ts",
        enabled: true,
        name: "GraphQLScheme",
      },
    },
    redirect: {
      login: "/login",
      logout: "/login?logout=true",
      callback: "/login",
      home: "/dashboard",
    },
  },

  // tailwindcss nuxt module configuration
  tailwindcss: {
    jit: true,
    cssPath: "./assets/css/tailwind.css",
    configPath: "./tailwind.config.js",
    exposeConfig: true,
    config: {
      plugins: [tailwindTypography],
    },
    injectPosition: 0,
    viewer: true,
  },

  // config for color-mode module
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "color-mode",
  },
});
