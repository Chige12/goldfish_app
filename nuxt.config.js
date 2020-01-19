export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'blue',
    height: '5px'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/ress.css', 'video.js/dist/video-js.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vuetify', ssr: false },
    { src: '~/plugins/persistedstate.js', ssr: false },
    { src: '~/plugins/firebase', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    defaultAssets: { icons: 'mdiSvg' }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  styleResources: {
    scss: ['~/assets/styles/variables.scss', '~/assets/styles/mixins.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  manifest: {
    name: 'Goldfish-app',
    short_name: 'きんぎょ',
    title: 'Goldfish-app',
    description: 'オンラインで金魚を観察・鑑賞できるアプリ',
    display: 'standalone',
    lang: 'ja',
    theme_color: '#e45e8a',
    background_color: '#fff',
    scope: '/',
    start_url: '/'
  }
}
