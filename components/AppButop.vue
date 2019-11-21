<template>
  <div>
       <a class="gotopbtn" href="#"> <v-icon color="white" x-large title="Ir ao topo">mdi-arrow-up</v-icon></a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  scroll-behavior: smooth;
}
.gotopbtn{
  position: fixed;
  width: 50px;
  height: 50px;
  background: #22a6b3;
  opacity: 0.8;
  border-radius: 10px;
  bottom: 40px;
  right: 10px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 22px;
}
</style>