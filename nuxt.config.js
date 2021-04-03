export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tuyenbaoveatp.io',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      // },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic',
      // },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700',
      // },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'http://unity.nasfactor.com/fonts/font-awesome/css/font-awesome.min.css',
      // },
      {
        rel: 'stylesheet',
        href: 'http://unity.nasfactor.com/css/all-stylesheets.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  script: [
    // {
    //   src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
    // },
    // {
    //   src:
    //     'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
    // },
    {
      src: 'http://unity.nasfactor.com/js/jquery-1.11.3/jquery.min.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/bootstrap.min.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/parallax/jquery.parallax-1.1.3.js',
    },
    {
      src:
        'http://unity.nasfactor.com/js/parallax/jquery.localscroll-1.2.7-min.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/contact/contact-form.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/fitvids/jquery.fitvids.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/owl-carousel/owl.carousel.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/isotope/jquery.isotope.min.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/isotope/custom-isotope-mansory.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/retina/retina.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/flexslider/jquery.flexslider.js',
    },
    {
      src: 'http://unity.nasfactor.com/js/custom/custom.js',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/sanity-blocks.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/sanity',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://tuyenbaoveatp.ga',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://tuyenbaoveatp.ga',
  },
  generate: {
    dir: 'docs',
  },
}
