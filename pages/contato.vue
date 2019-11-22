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