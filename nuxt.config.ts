import { Configuration } from "@nuxt/types"
import colors from "vuetify/es5/util/colors"
import config from "./config"

const { title, description } = config

const nuxtConfig: Configuration = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: description
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/compositionAPI", "@/plugins/vuexPersistedstate"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "nuxt-typed-vuex"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: title,
      title,
      short_name: title,
      "og:title": title,
      description,
      "og:description": description,
      lang: "ja",
      theme_color: "#4dba87",
      background_color: "#000000",
      display: "standalone",
      icons: [
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    workbox: {
      dev: true // 開発環境でもPWAできるように
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/typed-vuex/]
  }
}

export default nuxtConfig
