import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  target: 'static',
  css: ['~/assets/main.css'],
  serverMiddleware: [
    { path: '/api/hello', handler: '~/server/api/hello.ts'},
  ],
  modules: ['nuxt-vuefire'],
  vuefire: {
    auth: true,
    config: {
      apiKey: process.env.NUXT_APP_FIREBASE_KEY,
      authDomain: process.env.NUXT_APP_FIREBASE_DOMAIN,
      // database: process.env.NUXT_APP_FIREBASE_DATABASE,
      projectId: process.env.NUXT_APP_FIREBASE_PROJECT_ID,
      // storageBucket: process.env.NUXT_APP_FIREBASE_STORAGE_BUCKET,
      // senderId: process.env.NUXT_APP_FIREBASE_SENDER_ID,
      appId: process.env.NUXT_APP_FIREBASE_APPID,
    },
  },
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_APP_FIREBASE_KEY,
      authDomain: process.env.NUXT_APP_FIREBASE_DOMAIN,
      // database: process.env.NUXT_APP_FIREBASE_DATABASE,
      projectId: process.env.NUXT_APP_FIREBASE_PROJECT_ID,
      // storageBucket: process.env.NUXT_APP_FIREBASE_STORAGE_BUCKET,
      // senderId: process.env.NUXT_APP_FIREBASE_SENDER_ID,
      appId: process.env.NUXT_APP_FIREBASE_APPID,
    },
  },
})
