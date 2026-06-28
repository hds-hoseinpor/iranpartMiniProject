import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: true },
  routeRules: {
    "/user-tickets": { redirect: "/" },
  },
  css: [
    "./assets/css/main.css",
    "./assets/css/base.css",
    "./assets/css/components.css",
    "./assets/css/fonts.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBase: "http://api.fixent.ir/api/",
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "fa", dir: "rtl" },
      title: "تیکت‌های پشتیبانی",
    },
  },
});
