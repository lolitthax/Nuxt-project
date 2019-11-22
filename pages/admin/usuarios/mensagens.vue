<template>
  <v-container>
    
    <v-data-table 
      :headers="headers"
      :items="mensagem"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
           <v-icon @click="sair">mdi-arrow-left</v-icon>
          <v-toolbar-title>Caixa de mensagens</v-toolbar-title>
         
          <v-spacer />
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }"
      class="text-justify"
      >
        <v-icon
          color="red"
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
        { text: 'Mensagem', value: 'mensage', sortable:false, width:400 },
      ],
      mensagem: []
    }
  },
  created () {
    const mensagem = this.$ls.get('mensagem')
    if (mensagem) this.mensagem = mensagem
  },
  methods: {
    editar (item) {
      this.$router.push(`/admin/usuarios/mensagens${item.id}`)
    },
    excluir (item) {
      let dados = this.$ls.get('mensagem')
      dados = dados.filter(u => u.id != item.id)
      this.$ls.set('mensagem', dados)
      this.usuarios = dados
    },
      sair(){
        this.$router.push('/admin/dashboard')
      },
  }
}
</script>