<template>
  <div>
    <app-header />
    <v-parallax
      title="Anúncio do Hackathon"
      dark
      :src="require('assets/espaco-hackathon.jpg')"
      alt="imagem contendo ilustração de planetas e estrelas"
    >
      <h1 class="text-center titulo-parallax">{HACKATHON}</h1>
      <h4 class="text-center sub-parallax">A 12º edição está de outro mundo!</h4>
    </v-parallax>

    <section class="sobre-section" title="Sobre nós">
      <!-- título -->
      <div class="sobre-section-linha">
        <div class="sobre-section-coluna">
          <!-- texto sobre a empresa -->
          <h2 class="section-titulo">{Start}</h2>
           <p class="texto">
              Plunct, Plact, Zum! Não haverá #Hackaton algum... se você não se
              inscrever! Apresse-se e garanta seu passaporte para embarcar na 12º Edição.
              <strong>
                Inscrições válidas até
                <time datetime="”03-12-2019”">03/12</time>
              </strong>.
            </p>
          <section class="interior-width" title="Formulário de inscrições">
           
            <v-row justify="center">
              <v-form ref="form" v-model="valid" lazy-validation id="formulario">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nome"
                  color="purple darken-4"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  color="purple darken-4"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="idade"
                  :rules="idadeRules"
                  label="Idade"
                  color="purple darken-4"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="cidade"
                  :rules="cidadeRules"
                  label="Cidade"
                  color="purple darken-4"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="estado"
                  :rules="estadoRules"
                  label="Estado"
                  color="purple darken-4"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="endereco"
                  :rules="enderecoRules"
                  label="Endereço"
                  color="purple darken-4"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="telefone"
                  :rules="telefoneRules"
                  label="Telefone +(DD)"
                  color="purple darken-4"
                  required
                ></v-text-field>
                <v-btn :disabled="!valid" @click="salvar"  id="button">Enviar</v-btn>
                 <v-alert transition="scale-transition" type="success" :value="!!sucesso">{{sucesso}}</v-alert>
              </v-form>
            </v-row>
          </section>
        </div>
        <section class="sobre-section-coluna" title="formulário de inscrição">
          <h2 class="section-titulo">{Premiação}</h2>
          <ul>
            <li class="servico-desc">
              <h3 class="servico-titulo-hack">1ºlugar</h3>Estágio de 1 ano (remunerado), notebooks Acer e R$2000,00 para cada integrante.
            </li>

            <li class="servico-desc">
              <h3 class="servico-titulo-hack">2ºlugar</h3>R$1000,00 para cada integrante.
            </li>

            <li class="servico-desc">
              <h3 class="servico-titulo-hack">3ºlugar</h3>R$500,00 para cada integrante.
            </li>
          </ul>
          <div class="contato-section">
            <img class="patricio" src="../assets/planet.svg" alt />
          </div>
        </section>
      </div>
    </section>

    <section class="sobre-section">
      <div class="interior-width">
        <div class="sobre-section-linha">
          <div class="sobre-section-coluna">
            <!-- perguntas frequentes-->
            <section class="sobre" title="Perguntas Frequentes">
              <h2 class="section-titulo">f.a.q.</h2>

              <ul>
                <li class="servico-desc">
                  <h3 class="servico-titulo-hack">A participação é paga?</h3>Não. A participação do evento é gratuita. No entanto, os custos de
                  viagem, estadia e outros fora do evento são de responsabilidade do
                  participante.
                </li>

                <li class="servico-desc">
                  <h3 class="servico-titulo-hack">O evento é presencial ou online?</h3>O Hackathon é presencial. O nosso Q.G é na Av. Antônio Neudenir Benagna Micali,107 Taquaritinga-SP.
                </li>

                <li class="servico-desc">
                  <h3 class="servico-titulo-hack">Existe um limite de idade para participar?</h3>Sim. Uma vez que a nossa intenção é contratar novos profissionais talentosos, limitamos a participação apenas para pessoas com idade superior a 16 anos.
                </li>

                <li class="servico-desc">
                  <h3 class="servico-titulo-hack">Posso escolher minha equipe?</h3>Não. As equipes serão organizadas no dia na hora do evento. Valorizamos o trabalho em equipe independentemente de quem sejam os envolvidos.
                </li>
                <li class="servico-desc">
                  <h3
                    class="servico-titulo-hack"
                  >As esquipes serão compostas por quantos integrantes?</h3>As equipes terão entre 2 à 5 integrantes no máximo.
                </li>
                <li class="servico-desc">
                  <h3 class="servico-titulo-hack">Ainda está com dúvidas?</h3>Se ainda tiver qualquer dúvida, pode falar sempre com a gente no email oi@suporte.com.br.
                </li>
              </ul>
            </section>
          </div>

          <section class="sobre-section-coluna" title="Datas e horários">
            <div class="conter">
              <div class="content" title="Período de inscrições">
                <p class="servico-titulo-hack">
                  09:00am de
                  <time datetime="”10-11-2019”">10/11</time> à 11:59pm de
                  <time datetime="”03-12-2019”">03/12</time>
                </p>
                <p class="servico-desc">Período de inscrições.</p>
              </div>
              <div class="content" title="Dia do evento">
                <p class="servico-titulo-hack">
                  <time datetime="”10-12-2019”">10/11</time> e
                  <time datetime="”11-12-2019”">03/12</time> das 09:00am às 05:00pm
                </p>
                <p class="servico-desc">12ª edição do #Hackathon 2019</p>
              </div>
              <div class="content" title="Divulgação dos resultados">
                <p class="servico-titulo-hack">
                  A partir da 12:00pm do dia
                  <time datetime="”10-12-2019”">20/12</time>
                </p>
                <p
                  class="servico-desc"
                >Divulgação dos resultados e equipe vencedora. Não esqueça de verificar seu email!</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
   <v-parallax
      title="Anúncio do Hackathon"
      dark
      :src="require('assets/espaco-hackathon.jpg')"
      alt="imagem contendo ilustração de planetas e estrelas"
    >
      <h1 class="text-center titulo-parallax">{HACKATHON}</h1>
      <h4 class="text-center sub-parallax">Pegue carona nessa cauda de cometa!</h4>
    </v-parallax>
  
    <app-footer />
  </div>
</template>


<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter
  },
   meta: [
      { name: 'authors', content: 'Aline Iasmim, Daphne Helena, Luís Fante, José Airton, Priscila Agda' }
    ],
    meta: [
      { name: 'description', content: 'Venha fazer parte do nosso time! não deixe o portal fechar, o Hackathon <!DOCTYPE> 2019 é de outro mundo!' }
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
      {property: 'og:title', content: 'Hackathon | Doctype'},
      {property: 'og:site_name', content: 'Doctype'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'http://localhost:3000/hackathon'},
      {property: 'og:image', content: 'http://localhost:3000/espaco-hackathon.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Venha fazer parte do nosso time! não deixe o portal fechar, o Hackathon <!DOCTYPE> 2019 é de outro mundo!'},
  
      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'http://localhost:3000/hackathon'},
      {name: 'twitter:title', content: 'Início | Doctype'},
      {name: 'twitter:description', content: 'Venha fazer parte do nosso time! não deixe o portal fechar, o Hackathon <!DOCTYPE> 2019 é de outro mundo!'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@PatricioDoctype'},
      {name: 'twitter:image:src', content: 'http://localhost:3000/planetas-hackathon.jpg'},
  
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Hackathon | Doctype'},
      {itemprop: 'description', content: 'Venha fazer parte do nosso time! não deixe o portal fechar, o Hackathon <!DOCTYPE> 2019 é de outro mundo!'},
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
      idade: "",
      endereco: "",
      estado: "",
      cidade: "",
      telefone: ""
    };
  },

  data: () => ({
    sucesso:"",
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Nome é um campo obrigatório",
      v => (v && v.length <= 50) || "Nome deve conter no máximo 50 caractéres"
    ],
    idade: "",
    idadeRules: [
      v => !!v || "Idade é um campo obrigatório",
      v => (v  >= 16) || "Somente participantes de idade igual ou superior a 16"
    ],

    email: "",
    emailRules: [
      v => !!v || "E-mail é um campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail inválido"
    ],
    telefone: "",
    telefoneRules: [
      v => !!v || "Telefone é um campo obrigatório",
      v =>(v && v.length >= 11) || "Telefone deve conter no máximo 11 caractéres"
    ],
    cidade: "",
    cidadeRules: [v => !!v || "Cidade é um campo obrogatório"],
    estado: "",
    estadoRules: [
      v => !!v || "Estado é um campo obrigatório",
      v => (v && v.length == 2) || "Estado deve conter apenas 2 caractéres"
    ],
    endereco: "",
    enderecoRules: [v => !!v || "Endereço é um campo obrigatório"]
  }),

  created() {
    const usuarios = this.$ls.get("usuarios");
    if (usuarios) {
      const usuario = usuarios.find(u => u.id == this.id);
      if (usuario) {
        this.name = usuario.name;
        this.email = usuario.email;
        this.idade = usuario.idade;
        this.endereco = usuario.endereco;
        this.estado = usuario.estado;
        this.cidade = usuario.estado;
        this.telefone = usuario.telefone;
      }
    }
  },

  methods: {
 
    gerarId() {
      return Math.round(Math.random() * 9999);
    },
    salvar() {
      let dados = this.$ls.get("usuarios");
      if (!dados) dados = [];
      dados.push({
        id: this.gerarId(),
        name: this.name,
        email: this.email,
        idade: this.idade,
        faculdade: this.faculdade,
        curso: this.curso,
        estado: this.estado,
        endereco: this.endereco,
        cidade: this.cidade,
        telefone: this.telefone
      });
      this.$ls.set("usuarios", dados);
      this.sucesso = 'Inscrição realizada!'
    },
    cancelar() {
      this.$router.push("/admin/usuarios");
    }
  }
};
</script>


<style scoped>
p {
  padding-top: 10px;
  /* font-weight: bold; */
}
h3 {
  color: #1e272e;
}
li {
  list-style: none;
  /* padding-left: 10px; */
}
h2::after {
  content: "|";
  opacity: 1;
  display: inline-block;
  animation: pisca 0.7s infinite;
}
.v-text-field label {
  color: black;
}
.time {
  height: 100%;
  margin-top: 15px;
  width: 600px;
  background-size: cover;
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