// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  app: {
    head: {
      title: "Hansen Rent",
      meta: [
        {
          name: "description",
          content: "Оренда будівельної техніки по Україні",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Lato:400,700%7CPoppins:300,400,500,600,700",
        },
      ],
      script: [
        { src: "/scripts/core.min.js", tagPosition: "bodyClose" },
        // { src: "/scripts/script.js", tagPosition: "bodyClose" },
      ],
    },
  },

  css: ["~/assets/styles/index.css"],

  modules: ["@nuxt/content"],

  devtools: { enabled: false },
  compatibilityDate: "2025-05-15",
});
