<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Análisis de resultados agua cruda

    p(data-aos="fade-down") Es necesario tener en cuenta dos pasos fundamentales, la coagulación, en donde se desestabilizan los coloides por medio de la neutralización de las cargas, y la floculación, en donde se forman los flóculos y es posible su decantación.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img7.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Mediante el uso de la prueba de jarras se determinarán las dosis de químicos necesarias para la potabilización del agua. El pH juega un papel muy importante para determinar los fenómenos de coagulación y floculación, dado que el pH debe estar dentro de la zona que corresponde al mínimo de solubilidad de los iones metálicos del coagulante que se haya utilizado. 

        p(data-aos="fade-down").mt-5 El pH desempeña un papel muy importante en el estudio de los fenómenos de coagulación-floculación, preferiblemente el pH debe quedar dentro de la zona correspondiente al mínimo de solubilidad de los iones metálicos del coagulante usado. La temperatura también es un factor que influye bastante, ya que según disminuye la temperatura del agua deberá aumentarse la dosis de productos químicos utilizados como coagulante para obtener unos flóculos adecuados.   

    .row.justify-content-between.align-items-stretch.mt-5
      .col-lg-4.tarjeta--boton.color-primario.text-white--hover.bg-color1.p-4(data-aos="fade-left")
        img.img-t.img-a.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')         
        p.mt-4 El tiempo de mezclado del coagulante en el agua que se va a tratar será el necesario para que el producto coagulante que se vaya a utilizar se disuelva con la mayor brevedad posible. 
                              
      .col-lg-4.tarjeta--boton.color-primario.text-white--hover.bg-color2.p-4(data-aos="fade-down")
        img.img-t.img-a.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img9.svg', alt='')         
        p.mt-4 Teniendo en cuenta que el tiempo de coagulación es menos de un segundo se debe tener certeza que la neutralización sea total antes de añadir el coagulante. 

      .col-lg-4.tarjeta--boton.color-primario.text-white--hover.bg-color3.p-4(data-aos="fade-right")
        img.img-t.img-a.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img10.svg', alt='')         
        p.mt-4 Para la evaluación de los resultados de una prueba de jarras no existen unos criterios los cuales deban ser seguidos estrictamente. 
   
    p(data-aos="fade-down").mt-5.text-center No obstante, al momento de la práctica se pueden observar diferentes criterios los cuales nos guiaran para analizar los resultados, los cuales son: 
      
    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-9.up
        ul.lista-ul--color
          li(data-aos="fade-down") 
            i.lista-ul__vineta
            p.mb-0 Las características de los flóculos, su tamaño, si son uniformes, la velocidad con la que aparecen, el peso aparente que presentan. 
          li(data-aos="fade-down") 
            i.lista-ul__vineta
            p.mb-0 La claridad y la transparencia de la muestra son el criterio con mayor relevancia, es por esto por lo que en la mayoría de plantas de tratamiento de aguas encontramos turbidímetros para poder observar si la muestra es totalmente transparente o si presenta materiales suspendidos. 
          li(data-aos="fade-down") 
            i.lista-ul__vineta
            p.mb-0 Se debe tener en cuenta la velocidad con la que se sedimentan los flóculos en el momento que se detiene de agitar el equipo. Allí se podrán observar diferentes parámetros tales como lo son la sedimentación apresurada, lenta o casi nula. 
 
    .row.justify-content-end.align-items-center     
      .col-lg-5.d-none.d-lg-block
        img.img-t.img-a.i-up(data-aos="zoom-in")(src='@/assets/curso/temas/img12.png', alt='')  

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0.text-center Es de valioso interés que en este análisis de resultados de agua cruda también se logre incorporar métodos estándar para análisis de aguas en laboratorio.
    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Métodos estándar para análisis de aguas en laboratorio
        .row.justify-content-start.align-items-center(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.t-up
            img.img-t(src='@/assets/curso/temas/icon.svg',alt='') 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-3.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img13.svg', alt='') 
      .col-lg-9
        p(data-aos="fade-down") Una vez se realiza la recepción de las muestras en el laboratorio se procede con la asignación a un analista para su procesamiento. Esto implica someter la muestra objeto de estudio a una serie de procesos que buscan determinar las características de la fuente de origen. Para esto, es necesario cumplir con los métodos definidos y previamente validados para su análisis en el laboratorio.

        p(data-aos="fade-down") Dentro de los métodos estándar más reconocidos para el análisis muestreo y análisis de aguas se encuentran el <i>Standard Methods</i> y las Normas ISO.   

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10.bg-color4.px-5        
        p(data-aos="fade-down").mt-4.text-center #[b #[i Standard methods]]
        .row.justify-content-center.align-items-center    
          .col-lg-4
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img14.svg', alt='') 
        p(data-aos="fade-down").mt-5 El <i>Standard Methods</i> es un referente que, de manera integral, compila todos los aspectos relacionados con las técnicas de análisis de agua incluyendo las aguas residuales.

        p(data-aos="fade-down").p-yellow.p-4.mb-0 Este referente ha sido publicado desde 1905 y desde entonces se actualiza constantemente, hoy en día va en su edición número 23. Esta es una publicación producida con recursos y conocimiento conjunto de las 3 asociaciones de salud pública y agua, reconocidas a nivel mundial: la Asociación Americana de la Salud Pública (APHA), Asociación Americana de trabajos del Agua (AWWA) y la Federación Ambiental del Agua (WEF).

        p(data-aos="fade-down").mt-5 El <i>Standard Methods</i> contiene más de 400 métodos para el análisis de agua, debidamente revisados y aprobados por expertos. Estos métodos están divididos en 10 apartados que van desde el apartado 1000 al 10000.
      .bg_img2
        .row.justify-content-center.align-items-center         
          .col-lg-10.bg-color5.px-5.pb-5       
            img.img-t.img-a.my-5(data-aos="zoom-in")(src='@/assets/curso/temas/img15.svg', alt='')

            p(data-aos="fade-down") En cada uno de los apartados citados anteriormente se encuentra información sobre las técnicas de muestreo, incluyendo la preservación y el almacenamiento de aguas para cada uno de los parámetros analizados dentro de estos 10 tipos de ensayo.

            p(data-aos="fade-down") Puede consultar el resumen de los contenidos de cada apartado en la versión <em>web</em> disponible en el siguiente enlace:
            .row.justify-content-center.align-items-center.mt-5    
              .col-lg-8(data-aos="fade-down") 
                a.anexo.mb-4.mb-lg-0.bg-a(href="https://www.standardmethods.org/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.text-white Enlace <em>web</em>. Para consultar las normas internacionales por las cuales también son regidos los ensayos de laboratorio que se realizan en el país, puede consultar los <i>Standard Methods for the examination of water and wastewater</i>.            

        p(data-aos="fade-down").mt-5.text-center #[b Normas ISO]

        .row.justify-content-center.align-items-center    
          .col-lg-4
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img14.svg', alt='') 
        .row.justify-content-center.align-items-center        
          .col-lg-10                    
            p(data-aos="fade-down").mt-5 Las normas ISO son otro referente importante para el muestreo y análisis microbiológico y fisicoquímico del agua, elaborados por la organización internacional de normalización ISO con sede en Ginebra Suiza y conformada por más de 160 países miembros.

    .row.justify-content-center.align-items-end.mt-5           
      .col-lg-10.bg-color6.pt-4               
        .row.justify-content-center.align-items-end       
          .col-lg-8.p-4.ps-5.up
            p(data-aos="fade-down") Las normas son realizadas por comités técnicos, expertos en cada uno de los temas de normalización. En el caso del muestreo y análisis de agua, el comité técnico encargado es el ISO TC 146 y el subcomité 6 es el encargado de trabajar en guías y normas para el muestreo de aguas. El subcomité 4 es el encargado de trabajar específicamente en los aspectos relacionados con el análisis microbiológico de aguas.

            p(data-aos="fade-down") La serie de normas 5667 proporciona directrices para la toma de muestras para el análisis de la calidad del agua. En el caso de muestreo para análisis microbiológico se recomienda consultar la ISO 19458.       
          .col-lg-4.up
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img17.png', alt='') 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        p(data-aos="fade-down") Las guías y normas ISO son revisadas y adoptadas como normas técnicas colombianas por el Instituto Colombiano de normas técnicas (ICONTEC). Entonces, para consultar las normas ISO traducidas al español y adaptadas al ámbito colombiano se recomienda consultar las normas NTC- ISO.

        img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-6 
        a.anexo.mb-4.mb-lg-0.bg-a(href="https://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.text-white Enlace <em>web</em>. Debe ingresar a biblioteca SENA, ir a ICONTEC, buscar norma NTV 5667 y escoger la que desee visualizar. 
</template>

<script>
export default {
  name: 'Tema2',
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
