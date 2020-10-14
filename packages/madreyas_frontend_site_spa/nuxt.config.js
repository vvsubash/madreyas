import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Storybook
  storybook: {
    stories: ['~/stories/**/*.stories.js'],
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Madreyas App',
    title: 'Madreyas App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'Description',
        content: 'This app is made to manage your small scale dairy',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    noscript: [
      { innerHTML: 'This is a webapp and requires javascript to work.' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/main.css'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/firebase', '~/plugins/authPersistense'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  generate: {
    exclude: [/^\/app/],
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/date-fns',
  ],
  // Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      name: 'Madreyas App',
      short_name: 'Madreyas',
      theme_color: `#3367D6`,
    },
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
