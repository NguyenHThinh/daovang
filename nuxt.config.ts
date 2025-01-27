// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "animate.css",
    // "~/assets/libs/bootstrap/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  srcDir: "src/",
  modules: ["nuxt-swiper", "@nuxt/image"],

  // swiper config
  swiper: {
    bundled: true,
    enableComposables: true,
  },
});
