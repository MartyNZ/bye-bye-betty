// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt", "@nuxtjs/color-mode", "@nuxtjs/google-fonts"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
        },
      ],
    },
  },
  css: ["~/assets/css/main.scss"],
  pwa: {
    manifest: {
      icons: [
        {
          src: "assets/images/logo_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "assets/images/logo_1024.png",
          sizes: "1024x1024",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      "Josefin+Sans": true,
      Lato: [100, 300, 500, 700],
      Raleway: {
        wght: [100, 400, 700],
        ital: [100, 400],
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
