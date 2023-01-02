export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1',
    databaseUrl: process.env.DATABASE_URL,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@huntersofbook/naive-ui-nuxt',
    '@sidebase/nuxt-auth',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  extends: ['@sidebase/core'],

  auth: {
    isEnabled: true,

    enableGlobalAppMiddleware: true,
  },

  colorMode: {
    classSuffix: '',
  },
})
