webpackJsonp([1],{NHnr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n("7+uW"),t={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"Content"},[i("router-view")],1)])},staticRenderFns:[]};var s=n("VU/8")({name:"App"},t,!1,function(e){n("zexq")},null,null).exports,o=n("/ocq"),r=n("Dd8w"),c=n.n(r),d=n("NYxO"),m={name:"Categories",data:function(){return{}},computed:c()({},Object(d.b)(["Categories","Topics"])),methods:{setVisible:function(e){this.Categories.map(function(i){i!==e&&(i.isVisible=!1)}),e.isVisible=!e.isVisible},filterTopics:function(e){return this.Topics.filter(function(i){return i.id===e.id&&i.name.toLowerCase().includes(e.search.toLowerCase())}).slice(e.pagination[0],e.pagination[1])},prev:function(e){e.pagination[0]-=5,e.pagination[1]-=5,this.$forceUpdate()},next:function(e){e.pagination[0]+=5,e.pagination[1]+=5,this.$forceUpdate()}}},u={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"Categories"},e._l(e.Categories,function(i,a){return n("div",{key:i+a,staticClass:"Category"},[n("div",{staticClass:"catName"},[e._v(e._s(i.name)+" "),n("button",{on:{click:function(n){return e.setVisible(i)}}},[e._v("+")])]),e._v(" "),i.isVisible?n("div",{staticClass:"Topics"},[n("input",{directives:[{name:"model",rawName:"v-model",value:i.search,expression:"c.search"}],staticClass:"Search",attrs:{type:"search",placeholder:"Search in "+i.name},domProps:{value:i.search},on:{input:function(n){n.target.composing||e.$set(i,"search",n.target.value)}}}),e._v(" "),e._l(e.filterTopics(i),function(i,a){return n("div",{key:i+a,staticClass:"Topic"},[e._v(e._s(i.name))])}),e._v(" "),n("div",{staticClass:"Pagination"},[n("button",{on:{click:function(n){return e.prev(i)}}},[e._v("Prev")]),e._v(" "),n("button",{on:{click:function(n){return e.next(i)}}},[e._v("Next")])])],2):e._e()])}),0)},staticRenderFns:[]},p=n("VU/8")(m,u,!1,null,null,null).exports;a.a.use(o.a);var l=new o.a({routes:[{path:"/",name:"Categories",component:p}]}),A=n("ZTUR"),C=n.n(A);a.a.use(d.a);const v=new d.a.Store({state:{Categories:C.a.Categories,Topics:C.a.Topics},getters:{Categories:e=>e.Categories,Topics:e=>e.Topics},mutations:{}});n("griA");a.a.config.productionTip=!1,new a.a({el:"#app",store:v,router:l,components:{App:s},template:"<App/>"})},ZTUR:function(e,i){e.exports={Categories:[{id:42,name:"VUE",isVisible:!1,pagination:[0,5],search:""},{id:43,name:"ANGULAR",isVisible:!1,pagination:[0,5],search:""},{id:44,name:"REACT",isVisible:!1,pagination:[0,5],search:""}],Topics:[{id:42,name:"VUE1"},{id:42,name:"VUE2"},{id:42,name:"VUE3"},{id:42,name:"VUE4"},{id:42,name:"VUE5"},{id:42,name:"VUE6"},{id:42,name:"VUE7"},{id:42,name:"VUE8"},{id:42,name:"VUE9"},{id:42,name:"VUE10"},{id:43,name:"ANGULAR1"},{id:43,name:"ANGULAR2"},{id:43,name:"ANGULAR3"},{id:43,name:"ANGULAR4"},{id:43,name:"ANGULAR5"},{id:43,name:"ANGULAR6"},{id:43,name:"ANGULAR7"},{id:43,name:"ANGULAR8"},{id:43,name:"ANGULAR9"},{id:43,name:"ANGULAR10"},{id:44,name:"REACT1"},{id:44,name:"REACT2"},{id:44,name:"REACT3"},{id:44,name:"REACT4"},{id:44,name:"REACT5"},{id:44,name:"REACT6"},{id:44,name:"REACT7"},{id:44,name:"REACT8"},{id:44,name:"REACT9"},{id:44,name:"REACT10"}]}},griA:function(e,i){},zexq:function(e,i){}},["NHnr"]);
//# sourceMappingURL=app.8c761a10de42f47d6c02.js.map