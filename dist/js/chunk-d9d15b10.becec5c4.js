(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9d15b10"],{"02b5":function(t,e,n){"use strict";var a=n("22be"),r=n.n(a);r.a},"22be":function(t,e,n){},5548:function(t,e,n){"use strict";var a=n("e322"),r=n.n(a);r.a},7227:function(t,e,n){"use strict";var a=n("dba6"),r=n.n(a);r.a},"79d3":function(t,e,n){},"9bd0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,function(e,a){return n("div",{key:a,staticClass:"tab-control-item",class:{active:t.currentIndex===a},on:{click:function(e){t.itemClick(a)}}},[n("span",[t._v(t._s(e))])])}))},r=[],i={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("itemClick",t)}}},c=i,o=(n("e98b"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"6fc78b28",null);s.options.__file="TabControl.vue";e["a"]=s.exports},b196:function(t,e,n){"use strict";var a=n("c851"),r=n.n(a);r.a},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category"}},[n("nav-bar",{staticClass:"nav-bar"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),n("div",{staticClass:"content"},[n("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),n("scroll",{attrs:{id:"tab-content",data:[t.categoryData]}},[n("div",[n("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),n("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{itemClick:t.tabClick}}),n("tab-content-detail",{attrs:{"category-detail":t.showCategoryDetail}})],1)])],1)],1)},r=[];function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){i(t,e,n[e])})}return t}var o=n("a7ac"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{attrs:{id:"tab-menu"}},[n("div",{staticClass:"menu-list"},t._l(t.categories,function(e,a){return n("div",{key:a,staticClass:"menu-list-item",class:{active:a===t.currentIndex},on:{click:function(e){t.itemClick(a)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}))])},u=[],l=n("5d17"),b={name:"TabMenu",components:{Scroll:l["a"]},props:{categories:Array},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},f=b,g=(n("7227"),n("2877")),d=Object(g["a"])(f,s,u,!1,null,"1b58661f",null);d.options.__file="TabMenu.vue";var y=d.exports,m=n("9bd0"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.subcategories.list?n("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,function(e,a){return n("div",{key:a,staticClass:"item"},[n("a",{attrs:{href:e.link}},[n("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),n("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})):t._e()],1)},p=[],h=n("15ae"),_={name:"TabContentCategory",components:{GridView:h["a"]},props:{subcategories:{type:Object,default:function(){return[]}}}},C=_,k=(n("5548"),Object(g["a"])(C,v,p,!1,null,"2493d726",null));k.options.__file="TabContentCategory.vue";var D=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("grid-view",t._l(t.categoryDetail,function(t,e){return n("goods-list-item",{key:e,attrs:{goods:t}})}))},x=[],T=n("dfbc"),I={name:"TabContentDetail",components:{GridView:h["a"],GoodsListItem:T["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},O=I,j=(n("b196"),Object(g["a"])(O,w,x,!1,null,"4d391158",null));j.options.__file="TabContentDetail.vue";var S=j.exports,$=n("f350");function E(){return Object($["a"])({url:"/category"})}function P(t){return Object($["a"])({url:"/subcategory",params:{maitKey:t}})}function A(t,e){return Object($["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var G=n("b95e"),M=n("eecb"),B={name:"Category",components:{NavBar:o["a"],TabMenu:y,TabControl:m["a"],Scroll:l["a"],TabContentCategory:D,TabContentDetail:S},mixins:[M["b"]],data:function(){return{categories:[],categoryData:{},currentIndex:-1}},created:function(){this._getCategory()},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{_getCategory:function(){var t=this;E().then(function(e){t.categories=e.data.category.list;for(var n=0;n<t.categories.length;n++)t.categoryData[n]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t._getSubcategories(0)})},_getSubcategories:function(t){var e=this;this.currentIndex=t;var n=this.categories[t].maitKey;P(n).then(function(n){e.categoryData[t].subcategories=n.data,e.categoryData=c({},e.categoryData),e._getCategoryDetail(G["c"]),e._getCategoryDetail(G["d"]),e._getCategoryDetail(G["b"])})},_getCategoryDetail:function(t){var e=this,n=this.categories[this.currentIndex].miniWallkey;A(n,t).then(function(n){e.categoryData[e.currentIndex].categoryDetail[t]=n,e.categoryData=c({},e.categoryData)})},selectItem:function(t){this._getSubcategories(t)}}},J=B,K=(n("02b5"),Object(g["a"])(J,a,r,!1,null,"163a9a75",null));K.options.__file="Category.vue";e["default"]=K.exports},c851:function(t,e,n){},dba6:function(t,e,n){},e322:function(t,e,n){},e98b:function(t,e,n){"use strict";var a=n("79d3"),r=n.n(a);r.a},eecb:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var a=n("b95e"),r={data:function(){return{showBackTop:!1}},methods:{backTop:function(){this.$refs.scroll.scrollTo(0,0,300)}}},i={data:function(){return{currentType:a["c"]}},methods:{tabClick:function(t){switch(t){case 0:this.currentType=a["c"];break;case 1:this.currentType=a["b"];break;case 2:this.currentType=a["d"];break}console.log(this.currentType)}}}}}]);
//# sourceMappingURL=chunk-d9d15b10.becec5c4.js.map