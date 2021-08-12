<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     

    .row.justify-content-center
      .col-lg-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro/intro_01.png", alt="alt", style="max-width:500px;").m-auto
      .col-lg-7
        .cajon.clr-naranja.p-4
          p.mb-0 Las grandes ideas han surgido en momentos inspiradores y creativos, donde se combina el pensamiento divergente, lleno de ideas y el pensamiento convergente con la lógica que viabiliza y selecciona estas ideas. Todo lo anterior, va de la mano con la innovación que transforma la vida de las personas e impacta de manera positiva a los emprendedores. En este componente podrán encontrar aspectos importantes sobre la creatividad e innovación, una metodología conocida como Design Thinking o pensamiento de diseño y estrategias para optimizar los resultados obtenidos. 

    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
