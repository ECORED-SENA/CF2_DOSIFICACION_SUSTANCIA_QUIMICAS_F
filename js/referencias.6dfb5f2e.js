(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(t,n,e){"use strict";e("95c5")},"13aa":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},i=[],r={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=r,o=(e("0095"),e("2877")),c=Object(o["a"])(s,a,i,!1,null,null,null);n["default"]=c.exports},"3cb4":function(t,n,e){"use strict";e("ddc8")},"4e82":function(t,n,e){"use strict";var a=e("23e7"),i=e("1c0b"),r=e("7b0b"),s=e("d039"),o=e("a640"),c=[],u=c.sort,l=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),d=o("sort"),m=l||!f||!d;a({target:"Array",proto:!0,forced:m},{sort:function(t){return void 0===t?u.call(r(this)):u.call(r(this),i(t))}})},"64ef":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return e("div",{key:n.link,staticClass:"referencias__item"},[e("span",{domProps:{innerHTML:t._s(n.referencia)}}),n.link?e("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(n.link)}}),e("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e(),e("hr",{staticClass:"my-3"})])})),0)],1)},i=[],r=e("2909"),s=(e("4e82"),e("ac1f"),e("1276"),e("13aa")),o=e("ecc5"),c={name:"Referencias",components:{BannerInterno:s["default"]},mixins:[o["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,n=Object(r["a"])(this.referenciasData).sort((function(n,e){var a=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),i=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase());return a<i?-1:a>i?1:0}));return n}}},u=c,l=(e("3cb4"),e("2877")),f=Object(l["a"])(u,a,i,!1,null,null,null);n["default"]=f.exports},"95c5":function(t,n,e){},ddc8:function(t,n,e){},ecc5:function(t,n,e){"use strict";n["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),n=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||n}},methods:{quitarAcentos(t){const n=t.replace(/<\/?[^>]+(>|$)/g,""),e={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return n.split("").map(t=>e[t]||t).join("").toString()}}}}}]);
//# sourceMappingURL=referencias.6dfb5f2e.js.map