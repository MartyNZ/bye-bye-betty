// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://bye-bye-betty.netlify.app/",
      siteName:
        "2003 TJ.II Jeep Wrangler Renegade | A classic still in it's prime.",
      siteDescription:
        "Built in 2003, this 6 Cylinder 4.0L engine, it's 5 speed manual gearbox coupled with the H/L ratio 4WD, still gets the job done and continues to look good doing it. The vehicle is currently being prepared for sale and will ba available shortly.",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
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
