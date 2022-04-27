<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Lineamientos técnicos de agua potable y saneamiento

    img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img19.jpg', alt='') 

    .bg_img3.px-5
      p(data-aos="fade-down").mt-5 Para le regulación del sector de potabilización del agua contamos con el reglamento técnico del sector de agua potable y saneamiento básico RAS, el cual es una herramienta creada por el ministerio de vivienda en Colombia para mejorar la calidad de la prestación de servicios en agua potable y saneamiento básico, estas guías tienen mucha información de diseño.

      p(data-aos="fade-down") En Colombia el uso de las guías y manuales del RAS es obligatorio para los sistemas de captación, conducción, almacenamiento y tratamiento de agua residual y potable según la Resolución 0330 de 2017. Hasta el momento hay 14 manuales definidos por el gobierno sobre las buenas prácticas en el sector de saneamiento y agua en Colombia y a su vez están disponibles 8 guías para que las personas involucradas en desarrollo de proyectos en agua y saneamiento básico puedan desenvolverse correctamente. 

      .row.justify-content-center.align-items-center.mt-5           
        .col-lg-8
          SlyderF(columnas="col-lg-12")
            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-t.img-a(src='@/assets/curso/temas/img20.png', alt='') 
                p.p-color-slyder.pt-5.p-5.t-up1.mb-0 En Colombia el uso de las Guías y Manuales del RAS es obligatorio para los sistemas de captación, conducción, almacenamiento y tratamiento de agua residual y potable según la Resolución 0330 de 2017.

            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-t.img-a(src='@/assets/curso/temas/img21.png', alt='') 
                p.p-color-slyder.pt-5.p-5.t-up1.mb-0 Hasta el momento hay 14 manuales definidos por el gobierno sobre las buenas prácticas en el sector de saneamiento y agua en Colombia.


            .row.justify-content-center.align-items-center
              .col-lg-12
                img.img-t.img-a(src='@/assets/curso/temas/img22.png', alt='') 
                p.p-color-slyder.pt-5.p-5.t-up1.mb-0 Asu vez están disponibles 8 guías para que las personas involucradas en desarrollo de proyectos en agua y saneamiento básico podamos desenvolverse correctamente.
       
      p(data-aos="fade-down").mt-5 La Resolución 0330 de 2017 reglamenta cuales son los requisitos técnicos que se deben cumplir en cada una de las etapas, de diseño, construcción, puesta en marcha, operación, mantenimiento y rehabilitación de aquella infraestructura que esté relacionada con los servicios de alcantarillado, acueducto y aseo. 
      .row.justify-content-center.align-items-center.mt-5       
        .col-lg-6
          p(data-aos="fade-down").text-center.mb-0.p-color7.p-4  El contenido que maneja esta Resolución 0330 de 2012 es el siguiente: 
          
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-4.p-0.my-1
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img55.png', alt='')           
        .col-lg-8.my-2
          ul.lista-ul--color
            li(data-aos="fade-down").mb-0 
              i.lista-ul__vineta
              p.mb-0 Se presentan las condiciones generales del reglamento técnico para los sectores de agua potable y saneamiento básico.
            li(data-aos="fade-down").mb-0 
              i.lista-ul__vineta
              p.mb-0 Se especifican los requisitos técnicos: en esta resolución se esclarecen los procesos que se deben involucrar en el diseño, la construcción y previa supervisión de los sistemas de acueducto, alcantarillado y aseo que se desarrollen en el país. 
            li(data-aos="fade-down").mb-0 
              i.lista-ul__vineta
              p.mb-0 Se hace un control y régimen de sanciones del reglamento técnico del sector de agua potable y saneamiento básico.
            li(data-aos="fade-down").mb-0 
              i.lista-ul__vineta
              p.mb-0 Se enumeran las certificaciones, licencias y permisos necesarios dentro del reglamento técnico del sector de agua potable y saneamiento básico.
            li(data-aos="fade-down").mb-0 
              i.lista-ul__vineta
              p.mb-0 Definición de conceptos.

    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-6
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-8.ps-2
            h5.mb-0 Pruebas de tratabilidad
        .row.justify-content-start.align-items-center(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.t-up
            img.img-t(src='@/assets/curso/temas/icon.svg',alt='') 

    p(data-aos="fade-down").mt-5 Las pruebas de tratabilidad son utilizadas para definir el diseño adecuado de una planta de tratamiento de agua para potabilización dado que este es el método que más se utiliza para poder determinar y evaluar los procesos de coagulación y floculación. 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10 
        .bloque-texto-g1.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img24.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 El color y la turbiedad son algunas de las características del agua las cuales representan una mayor calificación dentro del Índice de Riesgo de la Calidad del Agua (IRCA), es por esto que los objetivos de una planta de tratamiento deben estar enfocados a obtener unas condiciones óptimas de tratabilidad del agua. 

    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-6
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-8.ps-2
            h5.mb-0 NTC Prueba de jarras 
        .row.justify-content-start.align-items-center(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.t-up
            img.img-t(src='@/assets/curso/temas/icon.svg',alt='') 
             
    .row.justify-content-center.align-items-center          
      .col-lg-12.bg_img4.p-5
        .row.justify-content-center.align-items-center          
          .col-lg-10
            p(data-aos="fade-down") Para la correcta realización de la prueba de jarras para la determinación de la correcta tratabilidad del agua se encuentra la Norma #[b Técnica Colombiana NTC 3903], procedimiento para el método de jarras en la coagulación-floculación del agua.
        .row.justify-content-center.align-items-center.mt-5          
          .col-lg-4(data-aos="fade-down")  
            a.anexo.mb-4.bg-a(href="https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=2947 o en ICONTEC NT 3903" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.text-white #[b Anexo.] Técnica Colombiana NTC 3903.

        .row.justify-content-center.align-items-center          
          .col-lg-10                                 
            p(data-aos="fade-down").mt-5 Dentro de esta norma se encuentran los procedimientos necesarios para el tratamiento de aguas con el fin de reducir materiales disueltos, en suspensión y coloidales mediante procesos de coagulación y floculación química. 

        .row.justify-content-center.align-items-center.mt-5          
          .col-lg-10 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img36.svg', alt='') 

    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-6
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-8.ps-2
            h5.mb-0 Cálculo de remoción
        .row.justify-content-start.align-items-center(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.t-up
            img.img-t(src='@/assets/curso/temas/icon.svg',alt='') 

    p(data-aos="fade-down").text-center.mt-5 Para poder obtener un cálculo acertado de la remoción de la carga contaminante en un sistema de tratamiento de aguas se debe utilizar la siguiente fórmula: 
    
    img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img37.svg', alt='') 

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

<style lang="sass"></style>
