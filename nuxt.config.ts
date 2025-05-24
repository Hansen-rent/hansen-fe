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
      script: [
        { src: "/scripts/core.min.js", tagPosition: "bodyClose" },
        { src: "/scripts/script.js", tagPosition: "bodyClose" },
      ],
    },
  },

  css: [
    "~/assets/styles/bootstrap.css",
    "~/assets/styles/fonts.css",
    "~/assets/styles/style.css",
  ],

  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
});
