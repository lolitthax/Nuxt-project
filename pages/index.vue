<template>
  <div>
    <!-- cabeçalho -->
    <app-header/>
    <!-- parallax -->
     <v-parallax title="Anúncio do Hackathon"
        :src="require('assets/planetas-hackathon.jpg')"
        alt="imagem contendo ilustração de planetas e estrelas"
      >
      <h1 class=" text-center titulo-parallax">#HACKATHON &lt;!DOCTYPE&gt;</h1>
      <h3 class="text-center sub-parallax ">Um evento de outro mundo!</h3>
        
     <div class="text-center">
          <v-btn class="ma-5" outlined color="white" href="/hackathon">saiba mais</v-btn>
      </div>
        </v-parallax>
        <!-- final da parallax -->
        <!-- seção de serviços prestados -->
    <section class="servicos-section" title="Seção O que fazemos">
        <!-- título com texto e hr -->
        <h2 class="section-titulo">{O que fazemos}</h2>
        <p class="texto">
          Tudo feito com muito <strike>café</strike> amor e profissionalismo</p>
        <hr class="border"/>
        <!-- final -->

        <!-- container co informações -->
        <div class="container">
        <!-- Caixa -->
          <div class="box" title="Apps" >
            <!-- íone -->
            <div class="icon">
              
                <v-icon x-large >mdi-cellphone</v-icon>
            </div>
            <!-- final do ícone -->
            <!-- título do serviço -->
            <h3 class="servico-titulo">Apps</h3>
            <!-- descrição -->
            <p class="servico-desc">
              Desenvolvemos de aplicativos e jogos para celulares dos sistemas Androind, iOS e Windows Phone.
            </p>
          </div>
            <!-- final da caixa -->

            <!-- caixa -->
          <div class="box" title="Acessibilidade">
            <!-- ícone -->
            <div class="icon">
              <v-icon x-large>mdi-human</v-icon>

            </div>
            <!-- final de ícone -->
            <!-- título -->
            <h3 class="servico-titulo">Acessibilidade</h3>
            <!-- descrição -->
            <p class="servico-desc">
              Nós da  &lt;!DOCTYPE&gt; garantimos que nossos serviços proporcionem a inclusão de pessoas com ou sem deficiência.  
            </p>
          </div>
          <!-- final da caixa -->

          <!-- caixa -->
          <div class="box" title="Inteligência Artificial">
            <!-- ícone -->
            <div class="icon">
              
                <v-icon x-large >mdi-brain</v-icon>
            </div>
            <!-- ícone -->
            <!-- título -->
            <h3 class="servico-titulo">Inteligência artificial</h3>
            <!-- descrição -->
            <p class="servico-desc">
              Criamos aplicações que aprendem a base de dados para lidarem com grande volume de informações seja por texto, voz ou fotos.
            </p>
          </div>
          <!-- final da caixa -->

          <!-- caixa -->
          <div class="box" title="Otimização de sites">
            <!-- ícone -->
            <div class="icon">
              
                <v-icon x-large >mdi-clipboard-pulse-outline</v-icon>
            </div>
            <!-- final ícone -->
            <!-- título -->
            <h3 class="servico-titulo">Otimização de sites (SEO)</h3>
            <!-- descrição -->
            <p class="servico-desc">
              Utilizamos do conjunto de técnicas SEO para deixar a pesquisa pelo seu site na primeira página em qualquer mecanismo de busca.
            </p>
          </div>
          <!-- final da caixa -->

          <!-- caixa -->
          <div class="box" title="Criação de sites" >
            <!-- ícone -->
            <div class="icon">
              
                <v-icon x-large>mdi-code-tags</v-icon>
            </div>
            <!-- final ícone -->
            <!-- título -->
            <h3 class="servico-titulo">Sites</h3>
            <!-- descrição -->
            <p class="servico-desc">
              Oferecemos os melhores serviços de criação e manutenção de sites responsivos (HTML e CSS) + um painel de controle (VueCli).
            </p>
          </div> 
          <!-- final da caixa -->
          
          <!-- caixa -->
          <div class="box" title="Webdesign" >
            <!-- ícone -->
            <div class="icon">
              
                <v-icon x-large>mdi-fountain-pen-tip</v-icon>
            </div>
            <!-- final ícone -->
            <!-- título -->
            <h3 class="servico-titulo">Webdesign</h3>
            <!-- descrição -->
            <p class="servico-desc">
              Aplicamos fundamentos de Design para a criação de layouts para sites. Utilizando conhecimentos como Tipografia, Teoria das cores, Diagramação, Gestalt, entre outros.
            </p>
            </div>
            <!-- final da caixa -->
            <!-- container -->
        </div>
    </section>
    <!-- final da seção -->
     
     <!--parallax -->
       <v-parallax title="Anúncio do portifólio do projeto"
         dark
        :src="require('assets/planetas-hackathon.jpg')" alt="imagem contendo ilustração de planetas e estrelas"
       >
       <h2 class=" text-center titulo-parallax">Não deixe o portal fechar!</h2>
      <h3 class="text-center sub-parallax ">Faça seu passaporte!</h3>
      <div class="text-center">
          <v-btn class="ma-5" outlined color="white" href="/hackathon">saiba mais</v-btn>
      </div>
   
              </v-parallax>
           <!-- final da parallax  -->
  <!-- rodapé -->
 <app-footer/>
  </div>
</template>
<script>
 import AppHeader from '../components/AppHeader'
  import AppFooter from '../components/AppFooter'
export default {
  components:{
    AppHeader,AppFooter,
  },
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
    ],
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
    ]
  }
}
</script>
