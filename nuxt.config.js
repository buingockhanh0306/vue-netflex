import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,
  head: {
    title: "NetFlex",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/global.scss"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.API_KEY_FIREBASE,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      { code: "vi", file: "vi.json" },
    ],
    langDir: "locales/",
    defaultLocale: "vi",
    strategy: "no_prefix",
  },

  plugins: [
    "~/plugins/axios.js",
    "~/plugins/swiper.js",
    "~/plugins/lazyLoad.js",
    "~/plugins/starRate.js",
    "~/plugins/vuelidate.js",
    // "~/plugins/firebase.js",
  ],

  axios: {
    baseURL: process.env.BASE_URL,
    credentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  },
  build: {},

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#212121",
          textColor: "#ef2616",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  env: {
    apiKey: process.env.API_KEY,
    imageURL: process.env.IMAGE_URL,
  },
};
