<template>
  <div>
    <!-- cabeçalho -->
    <app-header />
    <section class="sobre-section" title="Sobre nós">
      <div class="interior-width">
        <!-- título -->
        <h2 class="section-titulo">{Sobre nós}</h2>
        <hr class="border" />
        <div class="sobre-section-linha">
          <div class="sobre-section-coluna">
            <!-- texto sobre a empresa -->
            <section class="sobre" title="Sobre a empresa">
              <p>
                É importante lembrar de onde viemos para saber aonde queremos chegar. Antes de nos unirmos
                para formar uma das maiores empresas de desenvolvimento na área da tecnologia, tivemos uma
                história cheia de desafios e de conquistas, as quais nos trouxeram até aqui. Conheça os
                marcos mais importantes da nossa história!
              </p>
            </section>
          </div>
          <section class="sobre-section-coluna" title="vídeo da empresa">
            <div class="video" title="vídeo explicativo da empresa">
              <div class="embed">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/sVZpHFXcFJw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- rodapé -->
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
  }
};
</script>