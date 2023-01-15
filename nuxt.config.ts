export default defineNuxtConfig({
  build: {
    transpile: ['trpc-nuxt'],
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      baseUrl: process.env.NODE_ENV === 'production' ? process.env.URL : 'http://localhost:3000',
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
