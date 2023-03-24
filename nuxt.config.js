export default {
  generate: {
    dir: 'docs'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/myportfolio/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    title: 'ポートフォリオサイト',
    htmlAttrs: {
    lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

// OGP
{ hid: 'og:type', property: 'og:type', content: 'website' },
{ hid: 'og:title', property: 'og:title', content: 'ポートフォリオサイト' },
{ hid: 'og:description', property: 'og:description', content: 'ポートフォリオサイトです' },
{ hid: 'og:url', property: 'og:url', content: 'https://nontan.github.io/myportfolio/' },
{ hid: 'og:image', property: 'og:image', content: '/OGP.png' },

// Twitter Card
{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
{ hid: 'twitter:title', name: 'twitter:title', content: 'ポートフォリオサイト' },
{ hid: 'twitter:description', name: 'twitter:description', content: 'ポートフォリオサイトです' },
{ hid: 'twitter:image', name: 'twitter:image', content: '/OGP.png' },
],

//メニュー部分
link: [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  { rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap', },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],

//Google Analytics
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID',
          async: true,
        },
        {
          hid: 'gtag-init',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_TRACKING_ID');
          `,
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],

//Google Analytics部分終わり

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    // main.cssをインポート
    '@/assets/main.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

// font-awesomeを使うために記述
    '~/plugins/font-awesome.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    // Tailwind CSSを追加
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

  }
}
