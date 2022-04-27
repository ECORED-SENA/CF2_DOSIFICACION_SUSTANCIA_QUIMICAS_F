<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center.py-4
      .col-lg-7.col-xxl-6.py-4.py-sm-5.banner-principal__info.ps-5
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img.img-t.img-a(:src="globalData.imagenBannerPrincipal" style="max-width: 360px")
    .imagen_flotante_1: img(src="@/assets/curso/banner/float1.svg")
    .imagen_flotante_2: img(src="@/assets/curso/banner/float2.svg")
    .imagen_flotante_3: img(src="@/assets/curso/banner/float3.svg")

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px !important
  z-index: 3
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center
  &__info
    display: flex
    flex-direction: column
    justify-content: center
  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px
  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em
      @media (max-width: $bp-max-xs)
        font-size: 2em
  &__descripcion
    margin-bottom: 20px
  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 4rem!important
  &__img
    //animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 70px
    top: 80%
    left: 28% !important
    z-index: 0
    @media (min-width: 1400px)
      left: -3%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 90px
    top: 15px !important
    left: 50% !important
    @media (min-width: 1400px)
      top: 15px !important
      left: 50% !important
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 60px
    top: 70%
    right: 14% !important
    z-index: 0
    @media (min-width: 1400px)
      right: -2%
@keyframes float1
  0%
    transform: translateY(20px)
  100%
    transform: translateY(0px)
@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
  .banner-principal__info
    padding-left: 15px  !important
  .imagen_flotante
    &_1, &_2, &_3, &_4, &_5
      display: none
  .imagen_escalable
    &_6, &_7, &_8
      display: none
</style>
