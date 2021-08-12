<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Capacidad creativa e innovadora

    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-4 En este tema conocerá la definición de creatividad e innovación, los factores que pueden bloquear la creatividad, tipos y categorías de innovación, así como la importancia del desarrollo de la capacidad creativa en la toma de decisiones y su aplicabilidad según desafíos y oportunidades del entorno.
        .cajon.clr-mint.p-4.mb-4
          p.mb-0 Para un mejor aprendizaje, se recomienda responder a las preguntas y ejercicios de reflexión propuestos en el desarrollo de los contenidos, para ello puede disponer de una bitácora física (cuaderno) o digital. Este será su diario de viaje.
        p La bitácora no constituye una actividad evaluativa, ayudará a que el aprendizaje sea más exitoso, si se realizan ejercicios permanentes. 
      .col-lg-6(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img_1_01.svg", alt="alt",style="max-width:610px;").m-auto

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

    .row.mb-5
      .col-lg-6
        p A continuación, se hace una reflexión sobre la siguiente frase:
      .col-lg-6(data-aos="fade-left")
        .bloque-texto-b.clr-mint_quote.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 La imaginación es el principio de la creación, imaginamos lo que deseamos, queremos lo que imaginamos y, por fin, creamos lo que queremos.            
            i.fas.fa-quote-right
            br
            p - George Bernard Shaw

    p.mb-5 La creatividad es de gran importancia en la toma de decisiones porque genera oportunidad de implementar estrategias de diferenciación, frente a la solución de los desafíos que retan al ser humano a lo largo de su vida.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Ahora bien, existen factores que pueden afectar que fluya la creatividad, dentro de los cuales se encuentran:          

    .row.justify-content-center.mb-4
      .col-md-5.col-xl.mb-4
        .c-tarjeta(data-aos="flip-left")
          .c-icon
          p.mb-0 El miedo a cometer errores, impide experimentar.
      .col-md-5.col-xl.mb-4
        .c-tarjeta(data-aos="flip-left")
          .c-icon
          p.mb-0 Baja autoestima, genera desconfianza de las propias capacidades.
      .col-md-5.col-xl.mb-4
        .c-tarjeta(data-aos="flip-left")
          .c-icon
          p.mb-0 Emplear las mismas soluciones,  impide resolver problemas  de manera innovadora.
      .col-md-5.col-xl.mb-4
        .c-tarjeta(data-aos="flip-left")
          .c-icon
          p.mb-0 Ser demasiado crítico, afecta la generación de nuevas ideas.
      .col-md-5.col-xl.mb-4
        .c-tarjeta(data-aos="flip-left")
          .c-icon
          p.mb-0 Seguir la rutina, impide ver los problemas de manera diferente.

    p.mb-5 Si la creatividad es la generación de ideas originales, la puesta en práctica y desarrollo de las mismas para dar soluciones diferentes a lo ya existente es lo que se conoce como innovación.

    figure(data-aos="flip-right").mb-5
      img(src="@/assets/curso/tema1/img_1_02.svg", alt="alt", style="max-width:700px").m-auto

    separador

    #t_1_1.titulo-segundo
      h2 1.1 Tipos y categorías

    p.mb-5 De acuerdo con el manual de Oslo (2018): #[span.orange se identifica una clasificación de la innovación en cuanto a sus tipos y categorías.]

    h3.mb-5 Tipos:

    .c-slyder.c-slyder--emerald.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Innovación en producto/servicio
            p El reto estratégico para las empresas es generar cambios significativos a sus productos o servicios que conlleven a la mejora de sus características, funciones o resultados.
            p Uno de los ejemplos más representativos que existen es el iPhone, revolucionando la industria de la telefonía celular, el cual posee muchas versiones que se lanzan anualmente, con distintas mejoras.     
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slider_1_1_01.png', alt='Texto que describa la imagen')             
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Innovación en proceso
            p Otra manera de innovar es transformar la forma en que se hacen las cosas dentro de una organización mediante la implementación o adecuación de procesos de fabricación, logística o distribución, que conlleva a minimizar los costos de producción, mejorar la calidad, disminuir los tiempos; entre otros. 
            p Un ejemplo es la empresa de correos DHL, que implementó el uso de drones para el servicio de entrega de paquetes (hasta de 5 kg) a una distancia máxima de 8 km dentro del perímetro urbano, permitiendo un ahorro hasta de 80% en los costos por entrega, además de una reducción de consumo energético y huella de carbono.     
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slider_1_1_02.png', alt='Texto que describa la imagen')             
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Innovación en la gestión (organizacional y marketing)
            p Redefinir nuevos métodos organizacionales que incluyen mejoras en las actividades de gestión de la empresa. (gestión del conocimiento, recursos humanos, gestión de la cadena de valor, administración, sistema de calidad, etc.).
            p Un ejemplo a citar es la entidad bancaria Bancolombia, la cual ha creado diferentes soluciones tecnológicas no solo para digitalizar sus servicios sino también para mejorar la gestión financiera y contable propia y de sus clientes.    
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slider_1_1_03.png', alt='Texto que describa la imagen') 

    h4.mb-5 Categorías:  

    .c-slyder.c-slyder--aqua.mb-5
      SlyderA                  
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Incremental
            p Se crea un valor sobre un producto y/o servicio existente, añadiendo nuevas mejoras (agregar, suprimir o combinar). Las mejoras son tendientes a satisfacer la experiencia de usuario, e involucran un grado de novedad estética u otras cualidades subjetivas al producto o servicio. 
            p Dentro de los ejemplos de innovación incremental podemos encontrar la elaboración de la cerveza sin alcohol, solo a base de cebada, con la misma calidad y de la misma línea de bebidas, pero sin alcohol, destinada a un público específico que prefiere optar por esta alternativa. 
            p Piense en el jabón de baño con olor, esta innovación se considera incremental, ¿por qué cree que se justificó realizar esta innovación? Registre su respuesta en su bitácora personal. Recuerde que la bitácora no constituye una actividad evaluativa.   
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slider_1_1_04.png', alt='Texto que describa la imagen')             
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Sustancial
            p Presenta novedades frente a la funcionalidad y en menor medida al diseño y presentación.
            p Un ejemplo de innovación sustancial es el motor eléctrico (alto valor tecnológico) en comparación al motor diésel en los vehículos. También podemos ubicar en esta categoría las actualizaciones permanentes de los teléfonos móviles añadiendo nuevas mejoras y funcionalidades a lo largo del tiempo.   
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slider_1_1_05.png', alt='Texto que describa la imagen')             
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Radical
            p Se incorpora al mercado un producto o servicio que en sí mismo es capaz de generar una categoría que no se conocía antes, al enfocarse en la base de un nuevo producto o servicio no conocido con anterioridad. La innovación radical requiere de un amplio proceso investigativo y una alta inversión para “inventar” algo que no existe. 
            p Así también, este tipo de innovación supone un alto riesgo; si se tiene en mente una innovación radical vale la pena preguntarse: ¿será rentable? ¿Por qué alguien no lo ha pensado antes?
            p Un ejemplo de innovación radical es el de la empresa Amazon que visionó la venta de libros virtuales, o la invención de la imprenta.   
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slider_1_1_06.png', alt='Texto que describa la imagen')  

    .row.justify-content-center.mb-5
      .col-auto
        .h-card--avatar.h-card--avatar--olive
          .h-card--avatar__icon        
            img(src="@/assets/curso/tema1/icon_1_1_01.svg", alt="alt").m-auto
          .h-card--avatar__body
            p.mb-0.text-white Le propongo como ejercicio identificar otros ejemplos representativos y consignar su respuesta en la bitácora.

    separador

    #t_1_2.titulo-segundo
      h2 1.2 Design thinking

    
    p ¿Cómo se pueden aplicar la creatividad, y la innovación según desafíos y oportunidades del entorno? 
    p.mb-5 Existen diversas formas de hacerlo, una de ellas es el pensamiento de diseño o design thinking.

    h3.mb-5 ¿Qué es design thinking?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Según:
        .bloque-texto-b.clr-mint_quote.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Es un proceso creativo que consiste en definir el problema que se pretende abordar para entenderlo y, posteriormente, implementar las soluciones, siempre enfocando el proceso hacia las necesidades del usuario.          
            i.fas.fa-quote-right
            br
            p - Benet (2017)

        p Según:
        .bloque-texto-b.clr-mint_quote.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Es importante que las soluciones que se diseñan ofrezcan al usuario un valor añadido reconocible y que, al mismo tiempo, sea técnicamente viable y financieramente sostenible a largo plazo, en otras palabras, que sean soluciones innovadoras.            
            i.fas.fa-quote-right
            br
            p - Denkmodell (2019)

      .col-lg-5(data-aos="flip-left")
        figure
          img(src="@/assets/curso/tema1/img_1_2_01.svg", alt="alt", style="max-width:500px").m-auto

    p.mb-4 Este proceso se desarrolla en las siguientes etapas:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Explorar")
        .col-12
          p Esta etapa se centra en la generación de una pregunta de búsqueda, permite identificar un problema, centrado en el QUIÉN (usuario). 

      div(titulo="Comprender")
        .row
          .col-12.mb-4
            p Esta etapa se enfoca en conocer a QUIÉN se le va a resolver el problema, planteando preguntas básicas como: edad, sexo, nivel de ingresos, estrato y preguntas más especificas relacionadas con intereses, dificultades y expectativas; el objetivo es identificar las necesidades y oportunidades de los usuarios.
            p En esta etapa se puede indagar sobre los siguientes aspectos, también conocido como mapa de empatía:
          .col.mb-4
            figure
              img(src="@/assets/curso/tema1/img_1_2_02.svg", alt="alt", style="max-width:900px;").m-auto

      div(titulo="Idear")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p Como lo indica el nombre, esta fase consiste en la generación de ideas innovadoras para la solución al problema planteado. Para este fin se reúne un equipo multidisciplinar, normalmente a través de talleres de cocreación. Contar con personas con diferentes perfiles permite ampliar el espectro y enriquecer las soluciones.  La ideación suele iniciar con un brainstorming o lluvia de ideas. 
            p De la cantidad y calidad de ideas creadas dependerá la generación de soluciones factibles y creativas.
          .col-md-9.col-lg-5
            figure
              img(src="@/assets/curso/tema1/img_1_2_03.svg", alt="alt", style="max-width:900px;").m-auto

      div(titulo="Prototipar")
        .row.justify-content-center
          .col-12.mb-4
            p Esta etapa se describe cómo “pensar con las manos”. El objetivo es desarrollar diseños de prueba, con el fin de verificar la viabilidad de las ideas de manera fácil, rentable y efectiva, corregir defectos antes de generar un proyecto piloto.  Los prototipos deben ser tangibles para animar al usuario a probarlos. 
            p El prototipo es la materialización de la idea, los prototipos reducen la incertidumbre permitiendo acercarse a la solución más viable.          
              
      div(titulo="Testar (o fase de prueba)")
        .row.justify-content-center
          .col-12.mb-4
            p En esta etapa se ponen a prueba las ideas, se recibe retroalimentación del usuario para descartar fallas, mejorar el prototipo y presentar una versión mejorada. La validación del prototipo es necesaria, cuantas más pruebas se realicen mayores serán las oportunidades de éxito. Generalmente se siguen los siguientes pasos:
          .col
            figure
              img(src="@/assets/curso/tema1/img_1_2_04.svg", alt="alt", style="max-width:900px;").m-auto
     
    p.mb-5 Después de la fase de prueba, puede ser necesario:

    .row.justify-content-center.mb-5
      .col-auto(data-aos="flip-left").mb-4
        .h-card--avatar.h-card--avatar--olive
          .h-card--avatar__icon        
            img(src="@/assets/curso/tema1/icon_1_2_01.svg", alt="alt").m-auto
          .h-card--avatar__body
            p.mb-0.text-white Descartar
      .col-auto(data-aos="flip-left").mb-4
        .h-card--avatar.h-card--avatar--olive
          .h-card--avatar__icon        
            img(src="@/assets/curso/tema1/icon_1_2_01.svg", alt="alt").m-auto
          .h-card--avatar__body
            p.mb-0.text-white Mejorar o adaptar el prototipo.
      .col-auto(data-aos="flip-left").mb-4
        .h-card--avatar.h-card--avatar--olive
          .h-card--avatar__icon        
            img(src="@/assets/curso/tema1/icon_1_2_01.svg", alt="alt").m-auto
          .h-card--avatar__body
            p.mb-0.text-white Retomando los anteriores pasos del proceso.

    .row.justify-content-center
      .col-lg-4.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img_1_2_05.svg", alt="alt", style="max-width:400px").m-auto
      .col-lg-8        
        .tarjeta.clr--olive.p-3.mb-4(data-aos="fade-left")
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/tema1/icon_1_2_02.svg", style="width:65px")
            .col
              .row.justify-content-between
                .col.mb-3.mb-sm-0
                  h5.mb-1.text-white Ejemplo aplicado de Design Thinking                  
                  p.text-small.text-white Lo invitamos a leer y analizar el siguiente ejemplo, donde encontrará los temas anteriormente mencionados, aplicados a un ejemplo real.   
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Ejemplo_aplicado_de_Design_Thinking.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

        p.mb-4 Es importante para tener referentes y temas relacionados con lo expuesto anteriormente, revisar y consultar diferentes materiales dispuestos, para que el análisis realizado sea realizado con mayor conocimiento de experiencias y posibles sucesos.
        .tarjeta.clr--olive.p-3.mb-4(data-aos="fade-left")
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/tema1/icon_1_2_03.svg", style="width:65px")
            .col
              .row(data-aos="fade-left").justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1.text-white Cartilla: comportamiento emprendedor camino al logro                 
                  p.text-small.text-white Para profundizar en este tema, lo invito a revisar la cartilla  comportamiento emprendedor, unidad 5. Creatividad emprendedora, página 60 a 67.  
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Cartilla_comportamiento_emprendedor.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download







    
  
</template>

<script>
export default {
  name: 'Tema1',
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
