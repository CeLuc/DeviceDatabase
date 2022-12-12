export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', '@sidebase/nuxt-auth'],
  extends: ['@sidebase/nuxt-prisma'],

  auth: {
    isEnabled: true,
    origin: 'http://localhost:3000',
    enableGlobalAppMiddleware: true
  }
})
