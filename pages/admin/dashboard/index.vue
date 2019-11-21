<template>
  <v-app id="inspire" >
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
    
      <v-list dense >
          <v-list-item two-line>
          <v-list-item-avatar>
            <v-avatar color="red">
      <span class="white--text headline">AD</span>
    </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Bem vindo!</v-list-item-title>
         
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="entrar">
          <v-list-item-action>
            <v-icon>mdi-rocket</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inscritos Hackathon</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
           <v-list-item @click="sair">
          <v-list-item-action>
            <v-icon>mdi-close</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      class="grey darken-4"
      justify="space-between"
    >
          <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
          <v-toolbar-title class="white--text">Painel Administrativo</v-toolbar-title>

          <v-spacer></v-spacer>

          <!-- <v-btn  @click="sair">Sair</v-btn> -->
        
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/bXNzZL"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

  </v-app>
  
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
    methods:{
      entrar(){
        this.$router.push('usuarios')
      },
      sair(){
        this.$router.push('/')
      }
    }
    
  }
</script>
