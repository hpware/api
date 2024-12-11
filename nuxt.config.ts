// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/robots', 'nuxt-umami'],

  routeRules: {
    '/': {prerender: true},
    '/app/**': {cors: true},
    '/api/**': {cors:true},
  },
  umami: {
    enabled: true,
    host: 'https://data.yuanhau.com',
    autoTrack: true,
    id: '7add4cf7-307d-494c-8dbb-81fd5c9615ac',
    ignoreLocalhost: true,
  },
})