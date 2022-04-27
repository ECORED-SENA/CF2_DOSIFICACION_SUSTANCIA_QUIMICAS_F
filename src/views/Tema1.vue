<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Prueba de jarras 
      
    p(data-aos="fade-down") Para el tratamiento de aguas es necesario determinar los productos químicos y las cantidades que se requieren para su potabilización y el funcionamiento de manera óptima y se reduzcan los costos, para esto se realizan los ensayos de dosificación en escala de laboratorio y obtienen el nombre de pruebas de jarras. 

    .row.justify-content-between.align-items-stretch.mt-5
      .col-lg-3.p-color1.p-0(data-aos="flip-down")
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img1.jpg', alt='')
        p(data-aos="fade-down").p-4 Las pruebas de Jarras básicamente se utilizan para determinar la dosis óptima de coagulante en un proceso de tratamiento de aguas, pasando por tres fases que son: #[b mezcla rápida, mezcla lenta y sedimentación.]
      .col-lg-3.p-color2.p-0(data-aos="flip-down")
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img2.jpg', alt='')
        p(data-aos="fade-down").p-4 Para estas pruebas se utilizan 6 diferentes jarras en donde en cada una de ellas se añade una variación de coagulante, el cual permite la reducción de los coloides en suspensión mediante el proceso de floculación, lo cual permite ajustar el pH de cada muestra hasta llegar al valor necesario que oscila entre los 7.3 y los 7.6. 
           
      .col-lg-3.p-color1.p-0(data-aos="flip-down")
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img3.jpg', alt='')
        p(data-aos="fade-down").p-4 Estas representan una etapa muy importante dentro del proceso de tratamiento de aguas residuales dado que de su correcto desarrollo y cálculo de los respectivos parámetros se puede establecer la dosis óptima a usar a escala real en una PTAR.
          
      .col-lg-3.p-color2.p-0(data-aos="flip-down")
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img4.jpg', alt='')
        p(data-aos="fade-down").p-4 Cabe resaltar que las cantidades de los coagulantes deben variarse en rangos de 0,5 ml por cada litro de agua, ya que esto permite que la muestra no se sature.
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-6           
        .hr-blue
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-8
        p(data-aos="fade-down").text-center Vamos ahora a visualizar mediante el siguiente video el proceso de tratamiento de aguas, centrándonos en las tres fases que son: mezcla rápida, mezcla lenta y sedimentación. 

    
    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-12.up(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/L7GE-vkj9Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg_img1
      .row.justify-content-center.align-items-center.pt-5           
        .col-lg-8
          p(data-aos="fade-down").mt-5.color-gray.p-3.text-center Si realmente se ha realizado cada una de las fases explicadas, es momento entonces de tener claridad en el adecuado procedimiento para realizar la prueba de jarras: 
      img.img-a.img-t.mt-5(data-aos="slide-left")(src='@/assets/curso/temas/img6.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
