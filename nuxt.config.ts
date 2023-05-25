// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  extends: ["nuxt-seo-kit"],
  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "nuxt-mail",
    "@vee-validate/nuxt",
  ],
  mail: {
    message: {
      to: process.env.MAIL_TO,
    },
    smtp: {
      host: process.env.MAIL_SMTP_HOST,
      port: process.env.MAIL_SMTP_PORT,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    },
  },
  axios: { baseURL: process.env.BASE_URL },
  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/logo_180.png", sizes: "180x180" },
        { rel: "mask-icon-icon", href: "/logo_512.png", color: "#EBEAEF" },
      ],
      meta: [{ name: "theme-color", content: "#EBEAEF" }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://bye-bye-betty.netlify.app",
      siteName:
        "2003 TJ.II Jeep Wrangler Renegade | A classic still in it's prime.",
      siteDescription:
        "Built in 2003, this 6 Cylinder 4.0L engine, it's 5 speed manual gearbox coupled with the H/L ratio 4WD, still gets the job done and continues to look good doing it. The vehicle is currently being prepared for sale and will ba available shortly.",
      language: "en-NZ", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  css: ["~/assets/css/main.scss"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "2003 TJ.II Jeep Wrangler Renegade | A classic still in it's prime.",
      short_name: "Classic Jeep for Sale",
      description:
        "Built in 2003, this 6 Cylinder 4.0L engine, it's 5 speed manual gearbox coupled with the H/L ratio 4WD, still gets the job done and continues to look good doing it. The vehicle is currently being prepared for sale and will ba available shortly.",
      theme_color: "#EBEAEF",
      icons: [
        {
          src: "logo_192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "logo_512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      // globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 1800,
    },
    devOptions: {
      enabled: true,
      type: "module",
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
