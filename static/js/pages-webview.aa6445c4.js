(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webview"],{"4d2d":function(n,t,e){"use strict";e.r(t);var r=e("91c3"),a=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},"4e84":function(n,t,e){var r=e("7bc0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var a=e("4f06").default;a("a729005c",r,!0,{sourceMap:!1,shadowMode:!1})},"56dc":function(n,t,e){"use strict";(function(n){e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{url:"",pageIndex:0}},onLoad:function(t){n("log",t," at pages/webview.vue:18"),this.url=t.url,this.pageIndex=t.pageIndex}};t.default=r}).call(this,e("0de9")["log"])},"7bc0":function(n,t,e){var r=e("24fb");t=r(!1),t.push([n.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 上面标题栏样式 */.topTitle[data-v-84aa8318]{width:100%;font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.divCell[data-v-84aa8318]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-84aa8318]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em;cursor:pointer}.activebg[data-v-84aa8318]{background-color:#3cb371}",""]),n.exports=t},"91c3":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:["msg"],data:function(){return{activeIndex:1}},onLoad:function(n){this.activeIndex=n.num},beforeMount:function(n){},methods:{gotoPageClick:function(n,t){this.divActiveClass=n,"index"==t?uni.switchTab({url:"../pages/"+t+"?num="+n}):uni.navigateTo({url:"../pages/"+t})},gotoNewPageUrl:function(n,t){window.open("https://hyxrw.gitee.io/ppt")},gotoWebView:function(n,t){uni.navigateTo({url:"/pages/webview?url="+t+"&pageIndex="+n})}}};t.default=r},"9e73":function(n,t,e){"use strict";e.r(t);var r=e("56dc"),a=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},"9e77":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var r={myHead:e("d362").default},a=function(){var n=this.$createElement,t=this._self._c||n;return t("v-uni-view",[t("myHead",{attrs:{msg:this.pageIndex}}),t("v-uni-web-view",{staticStyle:{top:"32px"},attrs:{src:this.url}})],1)},i=[]},a7d7:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"topTitle"},[e("v-uni-view",{staticClass:"divCell"},[e("v-uni-view",{staticClass:"oneItme",class:1==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(1,"index")}}},[n._v("首页")]),e("v-uni-view",{staticClass:"oneItme",class:2==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(2,"blood")}}},[n._v("血气")]),e("v-uni-view",{staticClass:"oneItme",class:3==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(3,"crrt")}}},[n._v("血滤")]),e("v-uni-view",{staticClass:"oneItme",class:4==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoWebView(4,"https://jzcrlx.gitee.io/calc")}}},[n._v("工具")]),e("v-uni-view",{staticClass:"oneItme",class:5==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(5,"qubank")}}},[n._v("题库")]),e("v-uni-view",{staticClass:"oneItme",class:6==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(6,"ppt")}}},[n._v("PPT")])],1)],1)},a=[]},be85:function(n,t,e){"use strict";var r=e("4e84"),a=e.n(r);a.a},d362:function(n,t,e){"use strict";e.r(t);var r=e("a7d7"),a=e("4d2d");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("be85");var o=e("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"84aa8318",null,!1,r["a"],void 0);t["default"]=c.exports},fce37:function(n,t,e){"use strict";e.r(t);var r=e("9e77"),a=e("9e73");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);var o=e("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"d3efd4a8",null,!1,r["a"],void 0);t["default"]=c.exports}}]);