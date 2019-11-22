<template>
  <v-app >
      <nuxt />
  </v-app>
</template>

<style lang="scss">
$Preto: black;
$Branco: white;
$Gelo: #ddd;
$Verde:#2ecc71;
$Roxo:purple;
$Capslock: uppercase;
$Fonte: "Space Mono", monospace;
$Título: 3rem; /*esse é no mobile first na parallax*/
$Título-Section: 1.7rem; /*título das seções*/
$Sub-titulo: 1.5rem; /*subtítulos das sections*/
$Título-desktop: 5rem; /*título da parallax no desktop*/
$P-parallax: 1.2rem; /*sub desktop parallax*/
$Icone: 33px;
$Descrição: 16px;
$Negrito: bolder;
template{
  scroll-behavior: smooth;  
}
%titulos{
  text-transform: $Capslock; 
  font-size: $Título-Section;
}
%borda {
  width: 160px;
  height: 2px;
  background: black;
  margin: 40px auto;
}
%text-justify {
  text-align: justify;
}
%align-centro {
  text-align: center;
}
%justify-cento {
  justify-content: center;
}
%flex-container {
  display: flex;
  flex-wrap: wrap;
}
%icones-inicial {
  line-height: 70px;
  transform: rotate(-45deg);
}
%icones-caixa {
  display: inline-block;
  border: 3px solid $Preto;
  color: $Preto;
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  margin-bottom: 30px;
  margin-top: 16px;
  transition: 0.3s linear;
}
// scss
body {
  margin: 0;
  padding: 0;
  font-family: $Fonte;
}
  .titulo-parallax {
    font-size: $Título;
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.253); 
  }

.servicos-section {
  padding: 60px 0;
}
.section-titulo {
@extend %titulos;
@extend %align-centro;
}
.texto {
  font-size: $Sub-titulo;
  @extend %align-centro;
  padding: 0 10px;;
}
.border {
  @extend %borda;
}
.container {
  @extend %flex-container;
  @extend %justify-cento;

  flex-wrap: wrap;
}
.box {
  max-width: 50%;
  padding: 50px;
  @extend %align-centro;
  cursor: pointer;
}
.icon {
  @extend %icones-caixa;
  color: $Preto;
}

.icon .v-icon {
  line-height: 70px;
  transform: rotate(-45deg);
  font-size: $Icone;
}
.box:hover .icon, .contato-section button:hover  {
  background: $Preto;
 
}

.servico-titulo {
  font-size: $Título-Section;
  text-transform: $Capslock;
  margin-bottom: 10px;
}
.servico-titulo-hack{
  font-size: $Título-Section;
  text-transform: $Capslock;
  margin-bottom: 10px;
  color:$Roxo;
  font-weight: bold;
}
.servico-desc {
  font-size: $Descrição;
}

// sobre
.sobre-section {
  width: 100%;
  padding: 40px 0;
}
.interior-width {
  padding: 0 20px;
  margin: auto;
}

.sobre-section-linha {
  @extend %flex-container;
  flex-wrap: wrap;
}

.sobre-section-coluna {
  flex: 100%;
  margin: 10px 0;
}
.sobre {
  padding-right: 30px;
  padding: 0;
}
.sobre p {
  @extend %text-justify;
  margin-bottom: 20px;
  font-size: $Descrição;
  font-weight: 300;
}
.embed {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}
.embed iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
}
// hackathon
.conter{
  padding:10px;
  position:relative;
}

.conter:before{
  content:'';
  width:8px;
  height: 100%;
  background:$Preto;
  position:absolute;
  left:20px;
}

.content{
  background-color:$Gelo;
  padding:20px;
  margin:20px 60px;
  border-radius:8px;
  position: relative;
}

.content:before{
  content:'';
  width:20px;
  height:50px;
  background-color:$Gelo;
  position:absolute;
  left:-10px;
  top:50%;
  transform: translatey(-50%) rotate(40deg);
}
.content:after{
  content:'';
  width:36px;
  height:36px;
  background:$Verde;
  background-image: url(../assets/alien.svg);
  border: 4px solid $Preto;
  border-radius: 50%;
  position:absolute;
  left:-65px;
  top:50%;
  transform: translatey(-50%);
}
// contato
.contato-section{
  padding: 80px 0;
  @extend %align-centro;
}
#formulario{
  width: 50%;
}
#form-contato{
width: 70%;
}
.meio-width{
  max-width: 700px;
  margin: 0 auto;
}
.name,.email,.message{
  background: none;
  border:none;
  /* outline é contorno */
  outline: none;
  border-bottom: 1px solid;
  color:$Preto;
  padding: 10px 6px;
  font-size: $Descrição;
  margin-bottom: 40px;
}
.name{
  float: left;
  width: 100%;

}
.email{
  float: right;
  width: 100%;
}
.message{
  min-width: 100%;
  max-width: 100%;
}
#button{
  background: none;
  color: $Preto;
  border: 1px solid $Preto;
  padding: 15px 20px 30px;
  border-radius: 8px;
  text-transform: $Capslock;
  font-size: $Descrição;
  transition: 0.4s linear;
  cursor: pointer;
}
.patricio{
  width: 40%;
  height: 30%;

}
.etornico{
  width: 30%;
  height: 15%;
}
// medias
@media screen and (min-width: 360px) {
  .sobre-section-coluna {
    flex: 50%;
  }
  .etornico{
  width: 80px;
  height: 100px;
 
}
.patricio{
   width: 400px;
  height: 300px;
}
.servico-titulo{
  font-size: $Descrição;
}
  .video {
    padding-left: 30px;
  }
 #formulario{
  width: 70%;
}
#form-contato{
width: 30%;
}
 
}

@media screen and (min-width: 960px) {
  .box {
    max-width: 45%;
  }
  .titulo-parallax {
    font-size: $Título-desktop;
  }
  .sub-parallax {
    font-size: $P-parallax;
  }

}

@media screen and (max-width: 480px) {
  .box {
    max-width: 100%;
  }
}

</style>