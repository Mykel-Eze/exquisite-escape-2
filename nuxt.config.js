// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  target: 'static',
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/ee-icon.png' },
        { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
      title: 'Exquisite Escape',
      meta: [
        { 
          name: 'author', 
          content: 'Exquisite Escape' },
        {
          hid: 'description',
          name: 'description',
          content: 'Explore, Journey, Discover, Adventure',
        },
        {
          name: 'Keywords',
          content: 'Exquisite Escape, Explore, Journey, Discover, Adventure',
        },
        { name: 'theme-color', content: '#00A79D' },
      ],
    },
  },
  loading: {
    color: '#00A79D',
    height: '5px',
  },
  css: [
    '@/assets/css/main.css',
    'materialize-css/dist/css/materialize.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
}
