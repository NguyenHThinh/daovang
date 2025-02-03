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
  modules: ["nuxt-swiper", "@nuxt/image", "@nuxtjs/i18n"],

  // swiper config
  swiper: {
    bundled: true,
    enableComposables: true,
  },
  
  // i18n config
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
        flag: "/_nuxt/assets/flag/en.png",
        domain: "https://en.daovang.vercel.app/",
      },
      {
        code: "vi",
        name: "Tiếng Việt",
        iso: "vi-VN",
        file: "vi.json",
        flag: "/_nuxt/assets/flag/vi.png",
        domain: "https://vi.daovang.vercel.app/",
      },
    ],
    defaultLocale: "vi",
    lazy: true,
    restructureDir: 'src/i18n/',
    langDir: "locales",
    strategy: "no_prefix",
    differentDomains: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  }
});
