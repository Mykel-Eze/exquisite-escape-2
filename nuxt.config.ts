// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  target: "static",
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-swiper", 
  // '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
  // "nuxt-vuefire"
],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/ee-icon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      title: "Exquisite Escape",
      meta: [
        {
          name: "author",
          content: "Exquisite Escape",
        },
        {
          hid: "description",
          name: "description",
          content: "Explore, Journey, Discover, Adventure",
        },
        {
          name: "Keywords",
          content: "Exquisite Escape, Explore, Journey, Discover, Adventure",
        },
        { name: "theme-color", content: "#00A79D" },
      ],
    },
  },
  loading: {
    color: "#00A79D",
    height: "5px",
  },
  css: [
    "@/assets/css/main.css",
    "materialize-css/dist/css/materialize.min.css",
    "@/assets/css/fonts.css",
    "@/assets/css/styles.css",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // vuefire: {
  //   auth: {
  //     enabled: true,
  //     errorMap: "debug",
  //     sessionCookie: true,
  //     // disable the poupup redirect resolver dependency
  //     popupRedirectResolver: false,
  //     persistence: ["indexedDBLocal"],
  //   },
  //   config: {
  //     apiKey: process.env.apiKey,
  //     authDomain: process.env.authDomain,
  //     projectId: process.env.projectId,
  //     storageBucket: process.env.storageBucket,
  //     messagingSenderId: process.env.messagingSenderId,
  //     appId: process.env.appId,
  //     measurementId: process.env.measurementId,
  //   },
  //   appCheck: {
  //     // Allows you to use a debug token in development
  //     debug: process.env.NODE_ENV !== "production",
  //     isTokenAutoRefreshEnabled: true,
  //     provider: "ReCaptchaV3",
  //     // Find the instructions in the Firebase documentation, link above
  //     key: "...",
  //   },
  // },
  // runtimeConfig: {
  //   public: {
  //     firebaseApiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
  //     firebaseAuthDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
  //     firebaseProjectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
  //     firebaseStorageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
  //     firebaseMessagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
  //     firebaseAppId: process.env.NUXT_ENV_FIREBASE_APP_ID,
  //     // firebaseApiKey: "AIzaSyBCktEEvTzoijIE-amJ3_zjcQgGAnSl_TY",
  //     // firebaseAuthDomain: "esquiste-application.firebaseapp.com",
  //     // firebaseProjectId: "esquiste-application",
  //     // firebaseStorageBucket: "esquiste-application.appspot.com",
  //     // firebaseMessagingSenderId: "1023224086785",
  //     // firebaseAppId: "1:1023224086785:web:4713ec50158db9682c9b00",
  //     // firebaseMeasurementId: "G-0RW2TYGN8C",
  //   },
  // },
  plugins: [],
  auth: {
    strategies: {
      google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        codeChallengeMethod: '',
        responseType: 'token id_token',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          token: 'https://oauth2.googleapis.com/token'
        },
        scope: ['openid', 'profile', 'email'],
      },
      facebook: {
        endpoints: {
          authorization: 'https://www.facebook.com/v10.0/dialog/oauth',
          userInfo: 'https://graph.facebook.com/me?fields=id,name,picture{url},email',
          token: 'https://graph.facebook.com/v10.0/oauth/access_token'
        },
        clientId: 'YOUR_FACEBOOK_APP_ID',
        responseType: 'token',
        scope: ['public_profile', 'email'],
      },
      twitter: {
        endpoints: {
          authorization: 'https://api.twitter.com/oauth/authenticate',
          userInfo: 'https://api.twitter.com/1.1/account/verify_credentials.json',
          token: 'https://api.twitter.com/oauth/request_token'
        },
        clientId: 'YOUR_TWITTER_CONSUMER_KEY',
        clientSecret: 'YOUR_TWITTER_CONSUMER_SECRET',
        responseType: 'token',
        scope: [],
      },
      apple: {
        clientId: 'YOUR_APPLE_CLIENT_ID',
        codeChallengeMethod: '',
        responseType: 'code id_token',
        endpoints: {
          authorization: 'https://appleid.apple.com/auth/authorize',
          userInfo: 'https://appleid.apple.com/auth/authorize',
          token: 'https://appleid.apple.com/auth/token'
        },
        scope: ['name', 'email'],
      }
    }
  },
  // axios: {
  //   baseURL: 'http://localhost:3000' // Replace with your API URL
  // },
};
