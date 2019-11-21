<template>
  <div>
    <footer class="flex-rw">
      <!-- seção de icones -->
      <section class="footer-social-section flex-rw">
        <!-- icones -->
        <span class="footer-social-overlap footer-social-icons-wrapper">
          <a
            href="https://behance.com"
            class="generic-anchor behance"
            target="_blank"
            title="Behance"
          >
            <v-icon>mdi-behance</v-icon>
          </a>
          <a
            href="https://www.facebook.com"
            class="generic-anchor facebook"
            target="_blank"
            title="Facebook"
          >
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a
            href="https://www.gmail.com"
            class="generic-anchor gmail"
            target="_blank"
            title="Gmail"
          >
            <v-icon>mdi-gmail</v-icon>
          </a>
          <a
            href="https://www.twitter.com"
            class="generic-anchor twitter"
            target="_blank"
            title="Twitter"
          >
            <v-icon>mdi-twitter</v-icon>
          </a>
        </span>
        <!-- final dos ícones -->
      </section>
      <!-- final da seção de icones -->

      <!-- últimas informações -->
      <section class="footer-bottom-section flex-rw">
        <div class="footer-bottom-wrapper">
          <v-icon>mdi-copyright</v-icon>
2019 All Rights Reserved &lt;!DOCTYPE&gt;.
        </div>
        <div class="footer-bottom-wrapper">
          <address class="footer-address" role="company address">
            Av. Antonio Neudenir Benagna Micali,107. Taquaritinga-SP
            Tel:(16)99166-2578
          </address>
        </div>
      </section>
      <!-- final das últimas informações -->
    
    </footer>
      <app-butop/>
   
    <!-- final do footer -->
  </div>
</template>
<script>
 import AppButop from './AppButop'
export default {
  components:{
    AppButop,
  }
}
</script>
<style  scoped>
/* html,
body {
  height: 100%;
} */

/* body {
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  font-family: "Space Mono", monospace;
  justify-content: space-between;
} */

a {
  text-decoration: none;
}

.v-icon {
  color: white;
}

.flex-rw {
  display: flex;
  flex-flow: row wrap;
}

footer {
  background: black;
  margin-top: auto;
  width: 100%;
}
.footer-social-icons-wrapper {
  line-height: 53%;
}
.footer-social-section {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  /* position: relative; */
  margin-top: 5px;
}

.footer-social-overlap {
  position: relative;
  background-color: black;
}

.footer-social-connect {
  font: 3.5rem;
  color: #fff;
}

.footer-social-overlap > a {
  font-size: 2em;
}

.footer-bottom-section {
  width: 100%;
  padding: 10px;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}

.footer-bottom-wrapper {
  font-size: 1rem;
  color: #fff;
  /* align-items: center; */
  text-align: center;
}

.footer-social-overlap > a:not(:first-child) {
  margin-left: 10px;
}

.footer-address {
  display: inline;
  font-style: normal;
}

@media screen and (min-width: 568px) {
  .footer-social-overlap > a {
    font-size: 1rem;
  }

  .footer-social-overlap {
    display: flex;
    justify-content: center;
  }

  .footer-bottom-section {
    padding: 0 5px 10px 5px;
  }
  .footer-bottom-wrapper {
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-size: 1rem;
  }
}
</style>