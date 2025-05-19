// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  app: {
    head: {
      title: "Hansen Rent — Оренда спецтехніки",
      meta: [
        {
          name: "description",
          content: "Оренда будівельної техніки по Україні",
        },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
});
