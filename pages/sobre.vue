<template>
  <div>
    <!-- cabeçalho -->
    <app-header />
    <section class="sobre-section" title="Sobre nós">
      <div class="interior-width">
        <!-- título -->
        <h2 class="section-titulo">{Sobre nós}</h2>
        <hr class="border" />
        <div class="sobre-section-linha">
          <div class="sobre-section-coluna">
            <!-- texto sobre a empresa -->
            <section class="sobre" title="Sobre a empresa">
              <p>
                É importante lembrar de onde viemos para saber aonde queremos chegar. Antes de nos unirmos
                para formar uma das maiores empresas de desenvolvimento na área da tecnologia, tivemos uma
                história cheia de desafios e de conquistas, as quais nos trouxeram até aqui. Conheça os
                marcos mais importantes da nossa história!
              </p>
            </section>
          </div>
          <section class="sobre-section-coluna" title="vídeo da empresa">
            <div class="video" title="vídeo explicativo da empresa">
              <div class="embed">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_d1G9sW8iFM"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- rodapé -->
    <app-footer />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  components: {
    AppFooter,
    AppHeader
  },
  meta: [
      { name: 'authors', content: 'Aline Iasmim, Daphne Helena, Luís Fante, José Airton, Priscila Agda' }
    ],
    meta: [
      { name: 'description', content: 'Conheça os principais marcos de nossa trajetória!' }
    ],
    meta: [
      { name: 'keywords', content: 'Doctype, Hackathon Doctype, Aline Iasmim, Daphne Helena, Priscila Agda, José Airton, Luís Fante, Desenvolvimento de Apps ,Acessibilidade, Criação de Sites, Webdesign, SEO, Inteligência Artificial, Hackathon em Taquaritinga, Hackathon 2019, Empresas de Desenvolvimento em Taquaritinga.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  metaInfo: {
    meta: [
     
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'Sobre | Doctype'},
      {property: 'og:site_name', content: 'Doctype'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'http://localhost:3000/sobre'},
      {property: 'og:image', content: 'http://localhost:3000/espaco-hackathon.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Conheça os principais marcos de nossa trajetória!'},
  
      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'http://localhost:3000/sobre'},
      {name: 'twitter:title', content: 'Início | Doctype'},
      {name: 'twitter:description', content: 'Conheça os principais marcos de nossa trajetória!'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@PatricioDoctype'},
      {name: 'twitter:image:src', content: 'http://localhost:3000/planetas-hackathon.jpg'},
  
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Sobre | Doctype'},
      {itemprop: 'description', content: 'Conheça os principais marcos de nossa trajetória!'},
      {itemprop: 'image', content: 'http://localhost:3000/espaco-hackathon.jpg'}
    ],
    link: [
      {rel: 'canonical', href: 'http://localhost:3000//Doctype'}
    ]
  },
};
</script>