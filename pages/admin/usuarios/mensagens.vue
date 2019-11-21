<template>
  <v-container>
    
    <v-data-table 
      :headers="headers"
      :items="usuarios"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
           <v-icon @click="sair">mdi-arrow-left</v-icon>
          <v-toolbar-title>Caixa de mensagens</v-toolbar-title>
         
          <v-spacer />
          
          <!-- <v-btn
            color="primary"
            to="/admin/usuarios/incluir"
            class="elevation-1"
            small
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn> -->
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }"
      class="text-justify"
      >
        <v-icon
          color="primary"
          class="mr-2"
          @click="editar(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="pink"
          @click="excluir(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        Não há mensagens!
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Nome ', value: 'name', sortable:false, width:400 },
        { text: 'E-mail', value: 'email', sortable:false, width:400},
        { text: 'Mensagem', value: 'idade', sortable:false, width:400 },
        // { text: 'Faculdade', value: 'faculdade', sortable:false, width:100 },
        // { text: 'Curso', value: 'curso' , sortable:false, width:100},
        // { text: 'Estado', value: 'estado' , sortable:false, width:100},
        // { text: 'Cidade', value: 'cidade' , sortable:false, width:100},
        // { text: 'Endereço', value: 'endereco' , sortable:false, width:100},
        // { text: 'Telefone', value: 'telefone' , sortable:false, width:100},
        // { text: 'Ações', value: 'action', sortable: false, width: 100 }
      ],
      usuarios: []
    }
  },
  created () {
    const usuarios = this.$ls.get('usuarios')
    if (usuarios) this.usuarios = usuarios
  },
  methods: {
    editar (item) {
      this.$router.push(`/admin/usuarios/${item.id}`)
    },
    excluir (item) {
      let dados = this.$ls.get('usuarios')
      dados = dados.filter(u => u.id != item.id)
      this.$ls.set('usuarios', dados)
      this.usuarios = dados
    },
      sair(){
        this.$router.push('/admin/dashboard')
      },
  }
}
</script>