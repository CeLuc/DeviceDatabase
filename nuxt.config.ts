import { setAbsoluteSqliteDatabaseUrlForPrisma } from "@sidebase/nuxt-prisma";

// setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: "0.0.1",
    databaseUrl: process.env.DATABASE_URL,
    originUrl: process.env.ORIGIN_URL,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@huntersofbook/naive-ui-nuxt",
    "@sidebase/nuxt-auth",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
  extends: ["@sidebase/nuxt-prisma"],

  auth: {
    isEnabled: true,
    origin: process.env.ORIGIN_URL,

    enableGlobalAppMiddleware: true,
  },

  colorMode: {
    classSuffix: "",
  },
});
