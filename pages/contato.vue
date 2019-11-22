<template>
  <div>
    <!-- cabeçalho -->
    <app-header />
    <section class="contato-section" title="Contato">
      <div class="meio-width">
        <h2 class="section-titulo">{Contato}</h2>
        <p>Nosso suporte "Patrício, o Ornitorrinco" adora receber menssagens!</p>
        <img class="etornico" src="../assets/platypus.svg" alt="ícone de um ornitorrinco" />
      </div>

      <v-row justify="space-around">
        <v-form ref="form" v-model="valid" lazy-validation id="form-contato">
          <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="mensage" :rules="mensageRules" label="Mensagem" required></v-text-field>

          <v-alert transition="scale-transition" type="success" :value="!!sucesso">{{sucesso}}</v-alert>
          <v-btn :disabled="!valid" @click="salvar" id="button">Enviar</v-btn>
        </v-form>
      </v-row>
    </section>

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
      { name: 'description', content: 'Fale com o Patrício, o Ornitorrinco nosso suporte que ama ler mensagens!' }
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
      {property: 'og:title', content: 'Contato | Doctype'},
      {property: 'og:site_name', content: 'Doctype'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'http://localhost:3000/contato'},
      {property: 'og:image', content: 'http://localhost:3000/espaco-hackathon.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Fale com o Patrício, o Ornitorrinco nosso suporte que ama ler mensagens!'},
  
      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'http://localhost:3000/contato'},
      {name: 'twitter:title', content: 'Início | Doctype'},
      {name: 'twitter:description', content: 'Fale com o Patrício, o Ornitorrinco nosso suporte que ama ler mensagens!'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@PatricioDoctype'},
      {name: 'twitter:image:src', content: 'http://localhost:3000/planetas-hackathon.jpg'},
  
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Contato | Doctype'},
      {itemprop: 'description', content: 'Fale com o Patrício, o Ornitorrinco nosso suporte que ama ler mensagens!'},
      {itemprop: 'image', content: 'http://localhost:3000/espaco-hackathon.jpg'}
    ],
    link: [
      {rel: 'canonical', href: 'http://localhost:3000//Doctype'}
    ]
  },
  data() {
    return {
      id: this.$route.params.id,
      modo: this.$route.params.id == "incluir" ? "Incluir" : "Editar",
      name: "",
      email: "",
      mensage:""
    };
  },

  data: () => ({
    sucesso:"",
    valid: false,
    name: "",
    nameRules: [v => !!v || "O campo Nome é obrigatório"],

    mensage: "",
    mensageRules: [v => !!v || "O campo Mensagem é obrigatório"],

    email: "",
    emailRules: [
      v => !!v || "E-mail é necessário",
      v => /.+@.+\..+/.test(v) || "O campo E-mail não é válido"
    ]
  }),

  created() {
    const mensagem = this.$ls.get("mensagem");
    if (mensagem) {
      const mensa = mensagem.find(u => u.id == this.id);
      if (mensa) {
        this.name = mensa.name;
        this.email = mensa.email;
        this.mensage = mensa.mensage;
      }
    }
  },

  methods: {
    gerarId() {
      return Math.round(Math.random() * 9999);
    },
    salvar() {
      let dados = this.$ls.get("mensagem");
      if (!dados) dados = [];
      dados.push({
        id: this.gerarId(),
        name: this.name,
        email: this.email,
        mensage: this.mensage
        
      });
      this.$ls.set("mensagem", dados);
      this.sucesso = 'Sua mensagem foi enviada com êxito!'
       this.$refs.form.reset()
    },
  }
};
</script>

<style scoped>
h2::after {
  content: "|";
  opacity: 1;
  display: inline-block;
  animation: pisca 0.7s infinite;
}
@keyframes pisca {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>