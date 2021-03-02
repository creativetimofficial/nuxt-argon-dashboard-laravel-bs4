/*!

=========================================================
* Nuxt Argon Dashboard Laravel - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel
* Copyright Creative Tim (https://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)

* Coded by www.creative-tim.com & www.binarcode.com & www.updivision.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const pkg = require("./package");
console.log("ENV", process.env.NODE_ENV);
const { default: isDemo } = require("./plugins/isDemo");

module.exports = {
  env: {
    apiUrl: process.env.API_BASE_URL,
    baseUrl: process.env.BASE_URL,
    isDemo: process.env.IS_DEMO,
    apiKey: process.env.API_KEY,
  },
  mode: "spa",
  router: {
    base: "/",
    linkExactActiveClass: "active"
  },
  meta: {
    ogType: false,
    ogDescription: false,
    author: false,
    ogTitle: false,
    description: false,
    viewport: false,
    charset: false,
   },
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt Argon Dashboard Laravel by Creative Tim & UPDIVISION",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Nuxt Argon Dashboard Laravel comes with an API-powered Laravel backend, a Nuxt frontend and an awesome-looking Argon design."
      },
      {
        name: "keywords",
        content:
          "creative tim, updivision, html dashboard, nuxt, laravel, vue, vuejs, json:api, json, api, html css dashboard laravel, nuxt argon dashboard laravel, nuxt argon dashboard, argon admin, nuxt dashboard, nuxt admin, web dashboard, bootstrap 4 dashboard laravel, bootstrap 4, css3 dashboard, bootstrap 4 admin laravel, argon dashboard bootstrap 4 laravel, frontend, responsive bootstrap 4 dashboard, argon dashboard, argon laravel bootstrap 4 dashboard"
      },
      {
        itemprop: "name",
        content: "Nuxt Argon Dashboard Laravel by Creative Tim & UPDIVISION"
      },
      {
        itemprop: "description",
        content:
          "Nuxt Argon Dashboard Laravel comes with an API-powered Laravel backend, a Nuxt frontend and an awesome-looking Argon design."
      },
      {
        itemprop: "image",
        content:
          "https://s3.amazonaws.com/creativetim_bucket/products/350/original/opt_ad_nuxt_laravel_thumbnail.jpg"
      },
      {
        name: "twitter:card",
        content: "product"
      },
      {
        name: "twitter:site",
        content: "@creativetim"
      },
      {
        name: "twitter:title",
        content: "Nuxt Argon Dashboard Laravel by Creative Tim & UPDIVISION"
      },
      {
        name: "twitter:description",
        content:
          "Nuxt Argon Dashboard Laravel comes with an API-powered Laravel backend, a Nuxt frontend and an awesome-looking Argon design."
      },
      {
        name: "twitter:creator",
        content: "@creativetim"
      },
      {
        name: "twitter:image",
        content:
          "https://s3.amazonaws.com/creativetim_bucket/products/350/original/opt_ad_nuxt_laravel_thumbnail.jpg"
      },
      {
        property: "fb:app_id",
        content: "655968634437471"
      },
      {
        property: "og:title",
        content: "Nuxt Argon Dashboard Laravel by Creative Tim & UPDIVISION"
      },
      {
        property: "og:type",
        content: "article"
      },
      {
        property: "og:url",
        content:
          "https://www.creative-tim.com/live/nuxt-argon-dashboard-laravel"
      },
      {
        property: "og:image",
        content:
          "https://s3.amazonaws.com/creativetim_bucket/products/350/original/opt_ad_nuxt_laravel_thumbnail.jpg"
      },
      {
        property: "og:description",
        content:
          "Nuxt Argon Dashboard Laravel comes with an API-powered Laravel backend, a Nuxt frontend and an awesome-looking Argon design."
      },
      {
        property: "og:site_name",
        content: "Creative Tim"
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "assets/css/nucleo/css/nucleo.css",
    "assets/sass/argon.scss",
    "~assets/css/style.css"
  ],

  router: {
    middleware: ['auth']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/dashboard/dashboard-plugin",
    { src: "~/plugins/dashboard/world-map", ssr: false },
    "~/plugins/dashboard/JsonApi.js",
    "~/plugins/isDemo.js",
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    "@nuxtjs/toast"
  ],
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/local.html#options
   */
  auth: {
    strategies: {
      local: {
        _scheme: "~/util/authCustomStrategy.js",
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "access_token"
          },
          logout: { url: "/logout", method: "post" },
          user: {
            url: "/me",
            method: "get",
            propertyName: false
          }
        }
      },
      redirect: {
        login: "/login",
        logout: "/",
        callback: "/login",
        home: "/dashboard"
      }
    }
  },

  /*
   ** Notification toast module configuration
   ** See https://github.com/nuxt-community/modules/tree/master/packages/toast?ref=madewithvuejs.com
   */
  toast: {
    position: "top-right",
    duration: 5000,
    keepOnHover: true,
    fullWidth: false,
    fitToScreen: true,
    className: "vue-toast-custom",
    closeOnSwipe: true,
    register: [
      // Register custom toasts
      // @todo add custom messages as they come : login failed, register failed etc
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_BASE_URL,
    headers: {
      common: {
        Accept: "application/vnd.api+json",
        "content-type": "application/vnd.api+json"
      },
      post: {
        "content-type": "application/vnd.api+json"
      },
      patch: {
        "content-type": "application/vnd.api+json"
      },
      delete: {
        "content-type": "application/vnd.api+json"
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    extractCSS: process.env.NODE_ENV === "production",
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk"
          }
        ]
      ]
    }
  }
};
