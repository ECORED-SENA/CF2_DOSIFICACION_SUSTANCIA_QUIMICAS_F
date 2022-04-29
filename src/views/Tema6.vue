<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Normatividad de calidad de agua

    p(data-aos="fade-down") En Colombia, la calidad del agua se rige por diferentes normas y decretos que abarcan todos los parámetros y características que debe tener el agua para el consumo humano y animal, el Decreto 1575 de 2007 describe que el agua potable es aquella que cumpla con las características físicas, químicas y microbiológicas que están reglamentadas en las normas de calidad de agua en Colombia.
    p(data-aos="fade-down") En la siguiente tabla se relacionan los parámetros de mayor relevancia y control en el monitoreo de la calidad de agua, según la Resolución 2115 de 2007:    

    .bg_img6
      .row.justify-content-center.align-items-center         
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mt-5 
            h5 Tabla 2.
            span Resolución 2115 de 2007

          .tabla-a.color-color-primario
            table
              caption Nota. SENA, 2021.
              thead.bg-tabla-a
                tr
                  th.bg-tabla-a Características físicas
                  th.bg-tabla-a Valor máximo aceptable

              tbody
                tr.table-bg1
                  td Color aparente 
                  td 15

                tr.table-bg
                  td Olor y sabor
                  td Aceptable

                tr.table-bg1
                  td Turbiedad
                  td s  

              thead.bg-tabla-a
                tr
                  th.bg-tabla-a Características químicas
                  th.bg-tabla-a Valor máximo aceptable                  
              tbody
                tr.table-bg1
                  td Cloro residual
                  td 0,3 a 2,0

                tr.table-bg
                  td pH
                  td 6,5 a 9,0

                tr.table-bg1
                  td Nitratos
                  td 10

                tr.table-bg
                  td Dureza total
                  td 300

                tr.table-bg1
                  td Sulfatos
                  td 250 

                tr.table-bg
                  td Nitritos
                  td 0,1

                tr.table-bg1
                  td Carbono orgánico total
                  td 5,0

                tr.table-bg
                  td Sulfatos
                  td 250

                tr.table-bg1
                  td Manganeso
                  td 0,1

                tr.table-bg
                  td Hierro total
                  td 0,3

                tr.table-bg1
                  td Alcalinidad total
                  td 200

                tr.table-bg
                  td Aluminio
                  td 0,2

                tr.table-bg1
                  td Coliformes totales
                  td 0 UFC/100cm3

                tr.table-bg
                  td Coliformes fecales
                  td 0 UFC/100cm2

                tr.table-bg1
                  td Mercurio
                  td 0,001

                tr.table-bg
                  td Cianuro libre
                  td 0,05

              thead.bg-tabla-a
                tr
                  th.bg-tabla-a Características microbiológicas
                  th.bg-tabla-a Valor máximo aceptable               
              tbody
                tr.table-bg1
                  td Coliformes totales
                  td 0

                tr.table-bg
                  td <i>Eschericha</i> coli
                  td 0

                tr.table-bg1
                  td Mesófilos
                  td ≤ 100

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-botones.p-4.pb-0.mt-5
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/temas/img54.png")

            .col-md.col-lg-6
              p #[b Resolución 2115 de 2007], por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.
              
              a.boton.color-acento-botones.mb-4(href="https://laboratoriodeanalisis.lasalle.edu.co/wcm/connect/LIAC/d951c109-a227-44a3-8a42-1d1f87db2b43/Resoluci%C3%B3n_2115-2007.pdf?MOD=AJPERES&CVID=lMo0SFe" target="_blank")
                span Enlace web
                i.fas.fa-link
    p(data-aos="fade-down").mt-5 A continuación, se describen cuáles son las normas que rigen la calidad del agua potable en Colombia: 
    .titulo-sexto.color-acento-contenido.mt-5 
      h5 Tabla 3.
      span Normas Calidad Agua Potable

    .tabla-a.color-color-primario
      table
        caption Nota. SENA, 2021.
        thead.bg-tabla-a
          tr
            th.table-t.bg-tabla-a Norma
            th.bg-tabla-a Concepto
            th.table-t.bg-tabla-a Enlaces

        tbody
          tr.table-bg2
            td #[b Decreto 1575 de 2007]
            td Protección y control de la calidad del agua.
            td 
              a.anexo.mb-4.mb-lg-0.bg-a(href="https://www.ins.gov.co/TyS/Documents/Decreto%201575%20de%202007%2CMPS-MAVDT.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-white Enlace <i>web</i>
          tr.table-bg1
            td #[b Resolución 2115 de 2007]
            td Características, instrumentos básicos y frecuencias del control y vigilancia para la calidad del agua para consumo humano.
            td 
              a.anexo.mb-4.mb-lg-0.bg-a(href="https://laboratoriodeanalisis.lasalle.edu.co/wcm/connect/LIAC/d951c109-a227-44a3-8a42-1d1f87db2b43/Resoluci%C3%B3n_2115-2007.pdf?MOD=AJPERES&CVID=lMo0SFe" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-white Enlace <i>web</i>            

          tr.table-bg2
            td #[b Resolución 0811 de 2008]
            td Lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución. 
            td 
              a.anexo.mb-4.mb-lg-0.bg-a(href="http://aplicacionespruebas.ins.gov.co/sivicap_new/Anexos/Resoluciones/Resolucion811de2008PuntosMuestreo.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-white Enlace <i>web</i>

          tr.table-bg1
            td #[b Resolución 082 de 2009]
            td Formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano. 
            td 
              a.anexo.mb-4.mb-lg-0.bg-a(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2009%20Resoluci%C3%B3n%20082%20Buenas%20pr%C3%A1cticas%20sanitarias.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-white Enlace <i>web</i>            

          tr.table-bg2
            td #[b Resolución 0082 de 2009]
            td Lineamientos para la formulación de mapas de riesgos de cuencas.
            td 
              a.anexo.mb-4.mb-lg-0.bg-a(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2009%20Resoluci%C3%B3n%20082%20Buenas%20pr%C3%A1cticas%20sanitarias.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-white Enlace <i>web</i>                               
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema6',
  components: {
    BannerInterno,
  },
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
