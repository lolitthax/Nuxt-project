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

          <v-text-field v-model="mensagem" :rules="mensagemRules" label="Mensagem" required></v-text-field>
          <v-alert transition="scale-transition" type="success" :value="!!sucesso">{{sucesso}}</v-alert>
          <v-btn :disabled="!valid" @click="validate" id="button">Enviar</v-btn>
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

  data: () => ({
    sucesso:"",
    valid: false,
    name: "",
    nameRules: [v => !!v || "O campo Nome é obrigatório"],
    mensagem: "",
    mensagemRules: [v => !!v || "O campo Mensagem é obrigatório"],

    email: "",
    emailRules: [
      v => !!v || "E-mail é necessário",
      v => /.+@.+\..+/.test(v) || "O campo E-mail não é válido"
    ]
  }),

  methods: {
    validate() {
      this.sucesso = 'Sua mensagem foi enviada com êxito!'
      this.$refs.form.reset()
    }
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