<template>
    <div>
        <app-header/>
      
    <section title="Pacotes Web">
        <h2 class="section-titulo">{Pacotes Web}</h2>
        <p class="texto"> 
        *Pacotes válidos apenas para os estilos apresentados. Para outros serviços e/ou sites difentes destes o preço será combinado. Entre em contato para mais informações :D 
        </p>
      
    </section>
    <section class="colunas">
        <section class="item" title="Pacote One-page">
            <h2 class="section-titulo">One-page</h2>
            <p class="servico-desc">"O necessário, somente o necessário[...]"</p>
            <p class="servico-titulo">Domínio</p>
            <p class="pequeno">Analytcs</p>
            <p class="servico-titulo">Formulários</p>
            <P class="pequeno">Até 5 campos</P>
            <p class="servico-titulo">Estatísticas do site</p>
            <p class="pequeno">1 ano</p>
            <p class="servico-titulo">Design exclusivo</p>
            <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
          
            <p class="servico-titulo">Design responsivo</p>
            <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Acessibilidade</p>
            <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Número de páginas</p>
            <p class="pequeno"> 1</p>
            <p class="servico-titulo">Cadastros</p>
            <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Técnicas SEO</p>
           <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Selo de aprovação &lt;!Doctype&gt;</p>
          <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="section-titulo"><strong>Total</strong></p>
            <h2 class="preco">R$3000,00</h2>
        </section>
        <section class="item" title="Pacote Institucional">
            <h2 class="section-titulo">Institucional</h2>
            <p class="servico-desc">"Deixe de lado o que não pode controlar[...]"</p>
            <p class="servico-titulo">Domínio</p>
            <p class="pequeno">Analytcs</p>
            <p class="servico-titulo">Painel administrativo</p>
           <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Formulários</p>
            <P class="pequeno">Ilimitado</P>
            <p class="servico-titulo">Estatísticas do site</p>
               <p class="pequeno">1 ano</p>
            <p class="servico-titulo">Vídeo de plano de fundo</p>
            <p class="pequeno"> até 5 GB</p>
            <p class="servico-titulo">Design exclusivo</p>
         <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Design responsivo</p>
        <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Acessibilidade</p>
        <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Cadastros/Login</p>
       <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Técnicas SEO</p>
     <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo">Chat bot</p>
         <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="servico-titulo"> Selo de aprovação &lt;!Doctype&gt;</p>
       <p class="pequeno"> <v-icon>mdi-check-decagram</v-icon></p>
            <p class="section-titulo"><strong>Total</strong></p>
            <h2 class="preco">R$7000,00</h2>
        </section>
    </section>
       
        
   
        <app-footer/>
    </div>
</template>

<script>
 import AppHeader from '../components/AppHeader'
  import AppFooter from '../components/AppFooter'
export default {
  components:{
    AppHeader,AppFooter,
  }
}
</script>
<style scoped>

.v-icon{
  color:#3cbb75;
  text-align: center;
}
.item{
    background-color: #dfe6e9;
    margin: 20px;
    padding: 10px;
   
}

.item p{
    text-align: center;
}

.pequeno{
    color: #3cbb75;
    font-weight: bold;
    font-size: 14px;
}

.preco{
    color: #58b8f5;
    text-align: center;
}

.colunas{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0 auto;
    max-width: 1300px;
    padding: 10px;
}

@media(max-width: 700px){
    .titulo{
        margin: 0 auto;
        max-width: 400px;
    }

    .coluna{
        display: none;
    }


    .colunas{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin: 0 auto;
        max-width: 590px;
        padding: 10px;
    }
   
}

/* @media(min-width: 500px){
   
    .coluna{
        display: none;
    }

    .colunas{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
        margin: 0 auto;
        max-width: 350px;
        padding: 10px;
    }
  
} */

@media(max-width: 360px){
   

    .coluna{
        display: none;
    }

    .colunas{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
        margin: 0 auto;
        max-width: 300px;
        padding: 10px;
    }
  
}
</style>

