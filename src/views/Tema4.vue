<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Cloración

    p(data-aos="fade-down") La cloración es un método muy sencillo y eficaz para la desinfección de aguas y hacerla potable. 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.holder.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/img38.jpg", alt="")

            .text.p-lg-2.p-3
              .row.text-center.pt-2
                .p.mt-0 Consiste básicamente en  
                p.mb-5 introducir productos clorados que en su mayoría son pastillas, en el agua para matar todos aquellos microorganismos que se encuentren presentes. 
      .col-lg-3.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.holder.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/img39.jpg", alt="")
            .text.p-lg-2.p-3
              .row.text-center.pt-2
                .p.mt-0 Usualmente el proceso tarda 
                p.mb-5 alrededor de unos 30 minutos y gracias al efecto remanente que tiene el cloro, el efecto continuo durante horas o incluso días.
      .col-lg-3.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.holder.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/img40.jpg", alt="a")
            .text.p-lg-2.p-3
              .row.text-center.pt-2
                .p.mt-0 Este procedimiento se utiliza en 
                p.mb-5 las grandes redes de distribución de agua potable desde hace ya varias décadas atrás añadiendo cloro al agua para que durante su transporte no se contamine con microorganismos presentes en los sistemas de alcantarillado.   
      .col-lg-3.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.holder.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/img41.jpg", alt="a")
            .text.p-lg-2.p-3
              .row.text-center.pt-2
                .p.mt-0 Este tratamiento permite evitar
                p.mb-5 enfermedades como lo son fiebres tifoideas, disentería y la cólera, aunque es incapaz de eliminar algunos parásitos patógenos, ya que este proceso desinfecta el agua, pero no la purifica por completo. 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        p(data-aos="fade-down").p-yellow.p-4.mb-0.text-center.radius El proceso de clorar agua para consumo humano tiene tres etapas, dentro de las cuales existen equipos y procedimientos diferentes. Las etapas de la cloración del agua en una planta de tratamiento se describen en la siguiente tabla:

        .titulo-sexto.color-acento-contenido.mt-5 
          h5 Tabla 1.
          span Etapas de Cloración

        .tabla-a.color-color-primario
          table
            caption Nota. SENA, 2021.
            thead
              tr
                th.table-t Etapa
                th Concepto

            tbody
              tr
                td.table-t #[b Precloración ]
                td.px-4 En la etapa de precloración es donde se agrega la cantidad de cloro necesaria en el punto de interrupción para garantizar que el nivel de cloro residual pueda alcanzar niveles de desinfección mas lejanos.

              tr.table-bg
                td.table-t #[b Desinfección en plantas]
                td.px-4 La etapa de desinfección se realiza dentro del depósito, es allí donde se genera el agua tratada. Se debe determinar el tiempo de contacto para que se mantenga el nivel residual de cloro y así asegurar que no haya una contaminación microbiológica. 

              tr
                td.table-t #[b Postcloración]
                td.px-4 Una vez que el agua haya salido del último tanque es posible adicionar cloro para garantizar que los niveles residuales sean adecuados para el consumo humano. El equipo de control deberá ser el responsable de esta adición. 
         
    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-6
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-8.ps-2
            h5.mb-0 Curva demanda de cloro
        .row.justify-content-start.align-items-center(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.t-up
            img.img-t(src='@/assets/curso/temas/icon.svg',alt='')          

    p(data-aos="fade-down").mt-5 Cuando se aplica cloro al agua que tiene agentes conductores, amoniaco y aminas orgánicas se mide y se genera una gráfica se puede obtener una curva como se observa en la imagen 2, esta curva se conoce como la demanda de cloro. Allí se puede observar el incremento exponencial en la demanda de cloro, posteriormente podemos ver una declinación y finalmente un nuevo incremento el cual es conocido como punto de quiebre.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        p(data-aos="fade-down").mt-0.color-mx.text-center.px-5.py-3 Estos cambios repentinos se presentan porque al inicio se logra satisfacer la demanda del cloro y hace que las monocloraminas y las dicloraminas aumenten, aunque luego disminuyan el segundo incremento se produce por la acción del cloro residual. 

    img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img46.svg', alt='') 

    p(data-aos="fade-down").mt-5 Se debe resaltar que la demanda de cloro será diferente para cada muestra de agua ya que esta dependerá de la dosis de cloro que fue aplicada, de su magnitud y del tiempo de contacto, así mismo como el pH y la temperatura de la misma. En términos generales, cuanto mayor sea el tiempo de contacto y la temperatura del agua, más efectiva será la desinfección. 

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  data: () => ({
    mostrarIndicador: true,
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
