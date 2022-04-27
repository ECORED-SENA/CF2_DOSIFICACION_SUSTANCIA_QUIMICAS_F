<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Unidades de medida

    p(data-aos="fade-down").text-center En esta unidad de medida se debe tener muy presente las dos siguientes.

    .tarjeta--container.row.mt-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/img47.svg', alt='')          
        h4.text-center Medición del caudal
        p Es necesario conocer y medir constantemente y con exactitud el caudal del agua cruda que se va a tratar ya que este dato será de vital importancia al momento de calcular los químicos que deberán ser adicionados. 
        p Para la medición del caudal se utiliza la canaleta <i>Parshall</i>, vertedero o canal cuando es un flujo libre. Por lectura visual utilizando una regleta o por lectura y registro electrónico a través de un sensor eléctrico o ultrasonido.

      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='')          
        h4.text-center Dosificación de coagulante
        p Al momento de dosificar el coagulante se deberá agregar equitativamente sobre todo el caudal para producir la desestabilización y aglutinación de los sólidos que se encuentran suspendidos en el agua. El coagulante que se utiliza con mayor frecuencia es el sulfato de aluminio junto con el cloruro férrico. Estos son aplicados mediante dosificadores asegurando la aplicación homogénea del coagulante.
        p Para la correcta determinación de la dosis adecuada de insumos químicos es necesario tener en cuenta los siguientes pasos: 
        .row.justify-content-center.mt-3
          .col-2
            a.boton.color-color-acento-botones.indicador__container(@click="modal1 = true")
              span Pasos
              .indicador--click(v-if="mostrarIndicador")
            ModalA(:abrir-modal.sync="modal1")
              .row.align-items-center
                .col-11
                  ul.lista-ul--color.mb-0
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Al agua cruda se le debe determinar los parámetros: temperatura, turbiedad, color y pH.
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 En cada uno de los recipientes del equipo de jarras se deben adicionar dos litros de agua que previamente ha sido agitada.
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Es necesario tomar volúmenes conocidos de coagulante PAC a una concentración de 1% (P/V), para dosificar en las 6 jarras de 2 litros cada una.
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Se deben ubicar las paletas dentro de las jarras.
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Se activa y se pone en marcha el sistema de agitación al máximo (300 rpm).
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Una vez inicie el proceso de agitación, se dosifica el coagulante, de tal modo que en todas las jarras se aplique a la misma profundidad y al mismo tiempo. 
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Una vez transcurridos 20 o 30 segundos de agitación, se disminuye la velocidad de rotación de las paletas a 30 rpm y se deja flocular durante 15 minutos.
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Transcurrido el tiempo de floculación, se suspende la agitación y se extrae las paletas, ubicando las jarras con precaución sobre la mesa.
                    li(data-aos="fade-down") 
                      i.lista-ul__vineta
                      p.mb-0 Una vez transcurridos 5 minutos de sedimentación se deben tomar muestras de cada una de las jarras que sean a la misma profundidad y a al mismo tiempo y se les analiza la turbiedad, el color, el pH y el índice de <i>Wilcomb</i>. La jarra con las mejores características se define como la óptima.

    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-6
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-8.ps-2
            h5.mb-0 Equipos de dosificación 
        .row.justify-content-start.align-items-center(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.t-up
            img.img-t(src='@/assets/curso/temas/icon.svg',alt='')   

    p(data-aos="fade-down").mt-5 Los equipos de dosificación son utilizados para suministrar una cantidad de producto fija en el siguiente proceso, estos equipos permiten una gran precisión volumétrica y una continuidad y reproducibilidad. Existen dos tipos de equipos, los volumétricos y los gravimétricos, Los sistemas volumétricos dosifican el material en función de las cantidades, los sistemas gravimétricos pesan el material y lo dosifican en función de la masa.

    .bg_img5
      .row.justify-content-center.align-items-center.mt-5           
        .col-lg-10(data-aos="slide-left")
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center.align-items-center.pb-1(titulo="Bombas dosificadoras") 
              .col-lg-4 
                img.img-t.img-a.my-3(src='@/assets/curso/temas/img49.jpg', alt='') 
              .col-lg-8
                p Las bombas dosificadoras están diseñadas para inyectar un químico líquido en la abertura de un fluido. Estos químicos deben ser introducidos en pequeñas cantidades por lo cual es necesario un control preciso y que sean capaces de administrar de manera constante el mismo volumen. Una bomba dosificadora siempre debe permitir el ajuste del caudal de una manera lineal y su diseño debe garantizar la reproductividad, la repetitividad y la presión del volumen desplazado.

              p  Estas bombas dosificadoras se encuentran en gran variedad y algunos de los tipos más usados son: bombas de diafragma, bombas electromagnéticas y bombas electromecánicas. Las bombas dosificadoras se utilizan para el manejo de cloro, soda, coagulantes, polímeros, floculantes entre otros.

            .row.justify-content-center.align-items-center.pb-1(titulo="Cloración") 
              .col-lg-4 
                img.img-t.img-a.my-3(src='@/assets/curso/temas/img50.jpg', alt='') 
              .col-lg-8
                p La cloración es un procedimiento de esterilización y desinfección del agua mediante el uso de cloro o compuestos clorados. Su acción germicida erradica las bacterias, mohos y algas. Es por esto que al utilizar el cloro podemos erradicar los agentes patógenos y así conseguiremos eliminar las enfermedades transferidas por el agua. 

            .row.justify-content-center.align-items-center.pb-1(titulo="Tanques de mezcla") 
              .col-lg-4 
                img.img-t.img-a.my-3(src='@/assets/curso/temas/img49.jpg', alt='') 
              .col-lg-8
                p Estos tanques están diseñados específicamente para la mezcla de dos o más sustancias, pero sin generar ninguna reacción química. Por lo tanto, son parte fundamental en los procesos de dosificación. Son generalmente de forma cilíndrica y pueden ser operados por lotes, con recirculación o en flujo continuo.

                p Antes de manipular una sustancia química se debe conocer la hoja de datos de seguridad en la cual debe estar estipulada la siguiente información: 
                .row.justify-content-center.mt-3
                  .col-5
                    a.boton.color-color-acento-botones.indicador__container(@click="modal2 = true")
                      span Datos de seguridad 
                      .indicador--click(v-if="mostrarIndicador")
                    ModalA(:abrir-modal.sync="modal2")
                      .row.align-items-center
                        .col-lg-4
                          img.img-t.img-a.my-3(src='@/assets/curso/temas/img52.jpg', alt='')
                        .col-lg-8
                          ul.lista-ul--color.mb-0
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Nombre, fórmula del producto químico e identificación de la compañía y fábrica que lo realiza.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Deben estar identificados los peligros.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 La composición e información sobre los componentes debe ser explícita. 
                            li 
                              i.lista-ul__vineta
                              p.mb-0 El procedimiento de primeros auxilios en caso de accidente. 
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Se deben establecer las medidas en caso de incendio.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Las medidas a tomar en caso de vertido accidental.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 El manejo y almacenamiento del producto. 
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Los controles de exposición y protección del personal.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Las propiedades físicas y químicas del producto. 
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Su estabilidad y reactividad.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Debe estar detallada la información toxicológica.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Es necesario tener las consideraciones de disposición.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Información sobre transporte.
 
      p(data-aos="fade-down").mt-5.text-center Adicional a ello, es indispensable contar con lo siguiente:

      p(data-aos="fade-down").mt-5.text-center #[b Equipo de seguridad]

      .row.justify-content-center.align-items-center    
        .col-lg-4
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img14.svg', alt='') 
      p(data-aos="fade-down").mt-5.text-center Para trabajo rutinario con sustancias químicas y/o residuos peligrosos se debe contar al menos con el siguiente equipo de seguridad:          
      .row.justify-content-center.align-items-center.mt-5    
        .col-lg-7
          .tarjeta.tarjeta--azul.p-4.radius1(data-aos="flip-down")
            SlyderA
              .row.justify-content-center.align-items-center
                .col-12
                  p.text-center.mb-0 Casco protector.  
              .row.justify-content-center.align-items-center
                .col-12
                  p.text-center.mb-0 Gafas de seguridad.
              .row.justify-content-center.align-items-center
                .col-12
                  p.text-center.mb-0 Máscaras para polvo o gases peligrosos.
              .row.justify-content-center.align-items-center
                .col-11
                  p.text-center.mb-0  Ropa de protección contra salpicaduras químicas.
              .row.justify-content-center.align-items-center
                .col-12
                  p.text-center.mb-0 Guantes de caucho o látex. 
              .row.justify-content-center.align-items-center
                .col-12
                  p.text-center.mb-0 Delantal plástico o de goma.
              .row.justify-content-center.align-items-center
                .col-12
                  p.text-center.mb-0 Botas de seguridad punta de acero. 

      p(data-aos="fade-down").mt-5.text-center Procedimientos de manipulación
      .row.justify-content-center.align-items-center    
        .col-lg-4
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img14.svg', alt='')

      p(data-aos="fade-down").text-center.mt-5 Para el manejo de productos químicos es necesario tener en cuenta los siguientes procedimientos:

    img.img-t.img-a.mt-5(data-aos="slide-left")(src='@/assets/curso/temas/img53.svg', alt='')

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
