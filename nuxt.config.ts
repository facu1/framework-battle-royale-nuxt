// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Framework Battle Royale Nuxt",
      meta: [
        { name: "description", content: "Framework Battle Royale Nuxt" },
        {
          name: "keywords",
          content: "html, css, javascript, frontend, vue, nuxt",
        },
      ],
    },
  },
});
