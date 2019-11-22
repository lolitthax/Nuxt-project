<template>
<section>
     <v-container>
    <v-row justify='space-around' >
      
        <v-card 
      ref="form" 
        v-model="valid" 
        lazy-validation
        id="formulario"
      justify='space-around'>

          <v-text-field 
          v-model="name" 
          :rules="nameRules" 
          label="Nome" 
          color="purple darken-4"
          required>
          </v-text-field>

          <v-text-field 
          v-model="email" 
          :rules="emailRules" 
          label="E-mail" 
          color="purple darken-4"
          required>
          </v-text-field>

          <v-text-field 
          v-model="idade" 
          :rules="idadeRules" 
          label="Idade"
          color="purple darken-4" 
          required>
          </v-text-field>


          <v-text-field 
          v-model="estado" 
          :rules="estadoRules" 
          label="Estado" 
          color="purple darken-4"
          required>
          </v-text-field>

          <v-text-field 
          v-model="cidade" 
          :rules="cidadeRules" 
          label="Cidade" 
          color="purple darken-4"
          required>
          </v-text-field>

          <v-text-field 
          v-model="endereco" 
          :rules="cursoRules" 
          label="Endereço" 
          color="purple darken-4"
          required>
          </v-text-field>

          <v-text-field 
          v-model="telefone" 
          :rules="telefoneRules" 
          label="Telefone +(DD)" 
          color="purple darken-4"
          required>
          </v-text-field>

          <v-btn color="primary" @click="salvar" :disabled="!valid">
            <v-icon small class="mr-2">mdi-content-save</v-icon>
            Salvar
          </v-btn>

          <v-btn color="secondary" text @click="cancelar">
            <v-icon small class="mr-2">mdi-undo</v-icon>
            Cancelar
          </v-btn>
      </v-card>
      
    </v-row>
      
  </v-container>
</section>
 
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      modo: this.$route.params.id == 'incluir' ? 'Incluir' : 'Editar',
      name: '',
      email: '',
      idade:'',
    
      endereco:'',
      estado:'',
      cidade:'',
      telefone:'',
  }
},
  data: () =>({
        valid: true,
      name:"",
      nameRules: [
        v => !!v || 'Nome completo é obrigatório',
      ],
      email:"",
     emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => (v && v.length <= 100) || 'E-mail deve ter no máximo 100 caracteres',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ter um formato válido'
      ]
  }),
  created (){
    const usuarios = this.$ls.get('usuarios')
    if (usuarios) {
      const usuario = usuarios.find(u => u.id == this.id)
      if (usuario) {
        this.name = usuario.name
        this.email = usuario.email
        this.idade = usuario.idade
        this.endereco = usuario.endereco
        this.estado = usuario.estado
        this.cidade = usuario.estado
        this.telefone = usuario.telefone
      }
    }
},

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    gerarId () {
      return Math.round(Math.random() * 9999)
    },
    salvar () {
     
      let dados = this.$ls.get('usuarios')
      if (!dados) dados = []
      dados.push({
        id: this.gerarId(),
        name: this.name,
        email: this.email,
        idade: this.nascimento,
        faculdade: this.faculdade,
        curso: this.curso,
        estado: this.estado,
        endereco: this.endereco,
        cidade: this.cidade,
        telefone: this.telefone,
      } 
      )
      this.$ls.set('usuarios', dados)
       
    },
    cancelar () {
      this.$router.push('/admin/usuarios')
    },
  }
  }
</script>



<style>

.v-card{
  padding: 10px;
  border-radius: 5px;
}

</style>