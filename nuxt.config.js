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
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700',
      },
      {
        rel: 'stylesheet',
        href: '/fonts/font-awesome/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/stylesheet.css',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'http://tuyenbaoveatp.ga',
          logo: 'http://tuyenbaoveatp.ga/images/logo.png',
        },
      },
      {
        src:
          'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
      },
      {
        src:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
      },
      {
        src: '/js/app.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

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
    routes: [
      {
        _id: '29a39648-4731-4f86-8ecc-8fb2771de26b',
        slug: {
          _type: 'slug',
          current: '/',
        },
        title: 'Vĩnh Yên - Tuyển gấp 5 Nhân viên bảo vệ nhà máy KCN Khai Quang',
      },
      {
        _id: '29a39648-4731-4f86-8ecc-8fb2771de26b',
        slug: {
          _type: 'slug',
          current:
            'vinh-yen-tuyen-gap-5-nhan-vien-bao-ve-nha-may-kcn-khai-quang',
        },
        title: 'Vĩnh Yên - Tuyển gấp 5 Nhân viên bảo vệ nhà máy KCN Khai Quang',
      },
      {
        _id: '44384eba-45a7-4089-bbc7-54ac22c5a78e',
        slug: {
          _type: 'slug',
          current: 'tuyen-bao-ve-tai-vinh-tuong-bao-ve-sieu-thi-bigc-vinh-phuc',
        },
        title: 'Tuyển bảo vệ tại vĩnh tường - Bảo vệ Siêu Thị BigC Vĩnh Phúc',
      },
      {
        _id: 'f3c39e0b-8346-4af5-bc4c-0e9d51b5db6d',
        slug: {
          _type: 'slug',
          current:
            'tuyen-bao-ve-tai-vinh-phuc-tim-viec-lam-bao-ve-chinh-thuc-thoi-vu',
        },
        title:
          'Tuyển bảo vệ tại vĩnh phúc, tìm việc làm bảo vệ chính thức thời vụ',
      },
    ].map((item) => '/' + item.slug.current),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://tuyenbaoveatp.ga',
  },
  generate: {
    dir: 'docs',
  },
}
