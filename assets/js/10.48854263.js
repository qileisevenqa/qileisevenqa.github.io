(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(t,e,s){},196:function(t,e,s){"use strict";var i=s(176);s.n(i).a},227:function(t,e,s){"use strict";s.r(e);var i=s(2),a={name:"BlackWhite",data:()=>({toggle:!1}),computed:{getText(){return this.toggle?this.$t("turnoff_night_mode"):this.$t("turnon_night_mode")}},mounted(){this.toggle=Boolean(sessionStorage.getItem("switch_bw")),this.emit()},methods:{handle(){this.toggle=!this.toggle,sessionStorage.setItem("switch_bw",this.toggle||""),this.emit()},emit(){i.a.$emit("toggle_black_white",this.toggle)}}},n=(s(196),s(1)),c=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switch-bw"},[s("span",{staticClass:"switch-bw__text",class:{"switch-bw__text--turnon":t.toggle}},[t._v("\n    "+t._s(t.getText)+"\n  ")]),t._v(" "),s("label",{staticClass:"switch-bw__label",attrs:{for:"switch-bw"}},[s("input",{staticClass:"switch-bw__input",attrs:{type:"checkbox",id:"switch-bw",name:"switch-bw","aria-labelledby":"switch-bw-text"},domProps:{checked:t.toggle},on:{change:t.handle}}),t._v(" "),s("span",{staticClass:"switch-bw__ball"}),t._v(" "),s("span",{attrs:{id:"switch-bw-text",hidden:""}},[t._v("switch to black or white")])])])},[],!1,null,null,null);e.default=c.exports}}]);