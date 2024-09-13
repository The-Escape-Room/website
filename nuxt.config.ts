// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in'},
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    plugins: ['~/server/plugins/mongodb.ts'],
  },
  modules: ["@nuxt/eslint", 'vuetify-nuxt-module'],
  runtimeConfig: {
    mongodbUri: '',
  },
  vuetify: {
    vuetifyOptions: './vuetify.config.ts',
  },
});
