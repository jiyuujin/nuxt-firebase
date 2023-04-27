import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  target: 'static',
  css: ['~/assets/main.css'],
  serverMiddleware: [
    { path: '/api/hello', handler: '~/server/api/hello.ts'},
  ],
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
})
