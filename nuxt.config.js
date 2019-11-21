const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Doctype' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    meta: [
      { name: 'authors', content: 'Aline Iasmim, Daphne Helena, Luís Fante, José Airton, Priscila Agda' }
    ],
    meta: [
      { name: 'description', content: 'Seja bem-vindo a <!Doctype! Nós te ajudamos a alcançar objetivos futuros com o uso da tecnologia. Telefone(16)99165-2578.' }
    ],
    meta: [
      { name: 'keywords', content: 'Doctype, Hackathon Doctype, Aline Iasmim, Daphne Helena, Priscila Agda, José Airton, Luís Fante, Desenvolvimento de Apps ,Acessibilidade, Criação de Sites, Webdesign, SEO, Inteligência Artificial, Hackathon em Taquaritinga, Hackathon 2019, Empresas de Desenvolvimento em Taquaritinga.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  metaInfo: {
    meta: [
     
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'Início | Doctype'},
      {property: 'og:site_name', content: 'Doctype'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'http://localhost:3000/'},
      {property: 'og:image', content: 'http://localhost:3000/planetas-hackathon.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Seja bem-vindo a <!Doctype! Nós te ajudamos a alcançar objetivos futuros com o uso da tecnologia. Telefone(16)99165-2578.'},
  
      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'http://localhost:3000/'},
      {name: 'twitter:title', content: 'Início | Doctype'},
      {name: 'twitter:description', content: 'Seja bem-vindo a <!Doctype! Nós te ajudamos a alcançar objetivos futuros com o uso da tecnologia. Telefone(16)99165-2578.'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@PatricioDoctype'},
      {name: 'twitter:image:src', content: 'http://localhost:3000/planetas-hackathon.jpg'},
  
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Início | Doctype'},
      {itemprop: 'description', content: 'Seja bem-vindo a <!Doctype! Nós te ajudamos a alcançar objetivos futuros com o uso da tecnologia. Telefone(16)99165-2578.'},
      {itemprop: 'image', content: 'http://localhost:3000/planetas-hackathon.jpg'}
    ],
    link: [
      {rel: 'canonical', href: 'http://localhost:3000//Doctype'}
    ],
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-ls.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    themes: {
      dark: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
