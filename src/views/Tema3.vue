<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diseño de un plan de acción

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/img_3_01.svg", alt="alt", style="max-width:400px").m-auto
      .col-lg-8
        p.top_deco.deco--mint La puesta en marcha de una estrategia, por lo general, requiere una cantidad considerable de acciones. Por eso es importante traducir esas acciones en los pasos que se deben llevar a cabo para cumplir con los objetivos propuestos. La finalidad de un plan de acción es plasmar las tareas a realizar de forma ordenada y de una manera lógica, que consecuente permiten alcanzar unos resultados concretos.
        p Entre los beneficios que ofrece un plan de acción podemos enumerar los siguientes:

        ul.fa-ul.mb-4
          li #[span.fa-li #[i.txt-orange.fas.fa-check]] Es posible dividir las actividades más grandes en pasos más pequeños, lo cual hace que sea más factible lograrlo, lo que se conoce como victorias tempranas.
          li #[span.fa-li #[i.txt-orange.fas.fa-check]] Se definen prioridades y plazos, algunas acciones son más urgentes, necesarias o prerrequisito de otras.
          li #[span.fa-li #[i.txt-orange.fas.fa-check]] Permite optimizar y gestionar el tiempo y recursos, incrementando las posibilidades de hacer lo correcto en el momento oportuno. 
          li.mb-0 #[span.fa-li #[i.txt-orange.fas.fa-check]] Se organiza una rutina de trabajo, fomentando la disciplina y ampliando las oportunidades de éxito.

        p.top_bottom.deco--mint El plan de acción es una herramienta muy utilizada en el ámbito de la organización y a nivel personal; es por ello, que se encuentra una variedad de aplicaciones que permiten la elaboración de un plan de acción; también se puede utilizar una hoja de cálculo tradicional (Excel) Google Calendar o aplicaciones de productividad. 

    p Existen muchas maneras de graficar un plan de acción. Aquí se propone lo siguiente: 

    p.mb-5 Primero, debemos utilizar un formato para facilitar la comprensión de lo planteado. A continuación presentamos un ejemplo (cada campo de este formato, contiene a manera explicativa la información que debe registrarse).

    figure.mb-5
      img(src="@/assets/curso/tema3/tabla_3_01.svg", alt="alt", style="max-width:750px;").m-auto

    h3 Ejemplo aplicado
    p.mb-5 Retome nuevamente el caso del ciclista Egan Bernal. ¿Qué acciones debería realizar para alcanzar la meta de ser el ganador del Tour de Francia? Analice el plan de acción propuesto como ejemplo y a partir de este, elabore el suyo para cumplir con su propósito.

    figure.mb-5
      img(src="@/assets/curso/tema3/tabla_3_02.svg", alt="alt", style="max-width:750px;").m-auto

    .row
      .col-lg-8.mb-4.mb-lg-0
        p Plan de contingencia. ¿Qué hacer en caso de que las cosas salgan mal? Cuando se elabora el plan de acción es necesario contemplar que a pesar de la planeación, hay eventos que no se pueden controlar y que pueden poner en riesgo cumplir la meta propuesta; sin embargo, no se debe desistir, por el contrario, se debe determinar qué hacer si el plan de acción no se cumple; aquí es donde se tiene en cuenta el comúnmente llamado plan B, el cual permite alcanzar el mismo fin, a través de otros medios. Cuando es imprescindible obtener resultados acordes con nuestras expectativas es necesario tener un plan B, el cual sirve para posibilitar el logro de un resultado efectivo, que no se pudo obtener con un plan inicial. 
      .col-lg-4(data-aos="fade-left")
        figure.mb-5
          img(src="@/assets/curso/tema3/img_3_02.svg", alt="alt", style="max-width:750px;").m-auto



    


    

 

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
