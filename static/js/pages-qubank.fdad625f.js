(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qubank"],{"19a6":function(t,e,a){var n=a("ed49");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("1bf3c43c",n,!0,{sourceMap:!1,shadowMode:!1})},2909:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,n.default)(t)||(0,r.default)(t)||(0,i.default)(t)||(0,o.default)()};var n=l(a("6005")),r=l(a("db90")),i=l(a("06c5")),o=l(a("3427"));function l(t){return t&&t.__esModule?t:{default:t}}},"30de":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{strUrl:"https://jzcrlx.gitee.io/static/",myItems:[{title:"深圳全科转岗题库",url:"html-tk/index-qkzg.html",shortTips:"500+"},{title:"执业医师资格考试题库",url:"html-tk/index-lczyyszgks.html",shortTips:"1W+"},{title:"护士资格考试题库",url:"html-tk/index-hszgks.html",shortTips:"1W+"},{title:"护理学题库（副高）",url:"html-hlfg/index.html",shortTips:"5W+"},{title:"基础医学题库",url:"html-tk/index-jcyx.html",shortTips:"1W+"},{title:"临床医学题库",url:"html-tk/index-lcyx.html",shortTips:"5K+"},{title:"护理学题库",url:"html-tk/index-hlx.html",shortTips:"1W+"},{title:"药学专业题库",url:"html-tk/index-yx.html",shortTips:"5K+"},{title:"中医专业题库",url:"html-tk/index-zyzy.html",shortTips:"5K+"},{title:"口腔医学题库",url:"html-tk/index-kqyx.html",shortTips:"5K+"},{title:"考研专区题库",url:"html-tk/index-kyzq.html",shortTips:"1W+"}],numWidth:"100%"}},onLoad:function(t){},methods:{gotoPageClick:function(t){"index"==t?uni.switchTab({url:"./"+t}):uni.navigateTo({url:"./"+t})},gotoQuBankPage:function(t){uni.navigateTo({url:"./qubankpage?url="+t})},gotoWebView:function(t,e){uni.navigateTo({url:"/pages/webview?url=https://jzcrlx.gitee.io/qu_bank/"+t+"&pageIndex="+e})}}};e.default=n},3427:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a("d9e2"),a("d401")},6005:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,n.default)(t)};var n=function(t){return t&&t.__esModule?t:{default:t}}(a("6b75"))},8112:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"footQrCode",data:function(){return{}}}},"84b4":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={myHead:a("d362").default,logoView:a("847e").default,uniList:a("62a9").default,uniListChat:a("9832").default,footQrCode:a("d21e").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"viewHome",style:{width:t.numWidth}},[a("v-uni-view",{staticClass:"viewNext"},[a("myHead",{attrs:{msg:"5"}}),a("logoView"),a("uni-list",[a("uni-list",{attrs:{border:!0}},t._l(t.myItems,(function(e){return a("uni-list-chat",{attrs:{title:e.title,avatar:t.strUrl+"qubankpage.png",note:"作者:谢锐威","show-badge":!0,time:e.shortTips,clickable:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoWebView(e.url,5)}}})})),1)],1),a("footQrCode")],1)],1)},i=[]},"8af4":function(t,e,a){"use strict";a.r(e);var n=a("8112"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},d21e:function(t,e,a){"use strict";a.r(e);var n=a("e34f"),r=a("8af4");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o=a("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"6c78170e",null,!1,n["a"],void 0);e["default"]=l.exports},da5f:function(t,e,a){"use strict";a.r(e);var n=a("84b4"),r=a("ef03");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("ec29");var o=a("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"f436a6ee",null,!1,n["a"],void 0);e["default"]=l.exports},db90:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630")},e34f:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"logoView",staticStyle:{"text-align":"center","margin-top":"28px","margin-bottom":"10px"}},[e("img",{staticStyle:{width:"70%"},attrs:{src:a("e651")}})])},r=[]},e651:function(t,e,a){t.exports=a.p+"static/img/QRCode.c31c2bf2.gif"},ec29:function(t,e,a){"use strict";var n=a("19a6"),r=a.n(n);r.a},ed49:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".myTable[data-v-f436a6ee]{\r\n\t/* display: flex; */color:#00f;margin:8px;\r\n\t/* margin-right: 8px; */\r\n\t/* justify-content:flex-end; */\r\n\t/* text-align: center; */\r\n\t/* margin-top: 8px; */line-height:2em;border-radius:3px;border:transparent}.viewIpu[data-v-f436a6ee]{display:flex;justify-content:flex-start}.showLab[data-v-f436a6ee]{width:145px;text-align:left}.showIpu[data-v-f436a6ee]{width:calc(100% - 145px);text-align:left}.viewHome[data-v-f436a6ee]{\t\r\n    /* position: relative;\r\n\tfloat: left;\r\n\tleft: 50%;\t */max-width:500px;margin:0 auto;width:500px}.viewNext[data-v-f436a6ee]{\r\n\t/* float: left; */\r\n\t/* position: relative;\t\r\n\tleft: -50%; */bottom:var(--window-bottom);margin-bottom:10px}.weui-input[data-v-f436a6ee]{border:1px solid #66cdaa;width:100%;margin-left:2px;margin-right:2px;border-radius:3px}\r\n\r\n\r\n/*单位显示内容 */.labSmall[data-v-f436a6ee]{font-size:xx-small;color:green;margin-left:.2rem}\r\n\r\n\r\n/* 参考内容 */.ckViewButton[data-v-f436a6ee]{font-size:xx-small;line-height:1.2rem;color:#000;margin:%?20?%;margin-bottom:%?20?%}\r\n\r\n\r\n/* 线条样式 */.line[data-v-f436a6ee]{width:100%;height:%?2?%;background:#8a2be2;margin-top:%?10?%}\r\n\r\n\r\n/* 标题栏样式 */.showTitle[data-v-f436a6ee]{margin-top:42px;margin-bottom:0;background:green;color:#fff;border-radius:5px 5px 0 0!important;margin-left:10px;margin-right:10px}\r\n\r\n\r\n/* 署名内容 */.textShowName[data-v-f436a6ee]{color:#00f;font-size:xx-small;text-align:right;margin:10px;vertical-align:text-bottom}.viewget[data-v-f436a6ee]{margin-left:%?10?%;margin-right:%?10?%;margin-top:%?10?%;color:#00f;text-align:left}\r\n\r\n\r\n/* 文本的上标与下标 */sup[data-v-f436a6ee]{font-size:%?20?%;vertical-align:text-top}sub[data-v-f436a6ee]{font-size:%?20?%;vertical-align:text-bottom}.viewButton[data-v-f436a6ee]{\r\n\t/* display: flex;\t\t\t\r\n\t\tjustify-content:space-around;\t\t\r\n\t\twidth: 90%; \r\n\t\tmargin-bottom: 0rpx;\r\n\t\tmargin-top: 10rpx; */display:flex;flex-direction:row;justify-content:center;\r\n\t/* margin-top: 10px;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px; */margin:10px}.viewBackground[data-v-f436a6ee]{background-color:#e6e6fa;border-radius:3px}.mybutton[data-v-f436a6ee]{margin-left:1px;margin-right:1px;height:22.39px;font-size:xx-small\r\n\t/* width:70px; */}\r\n\r\n\r\n/* 显示结果区样式 */.showReturn[data-v-f436a6ee]{margin-left:0;margin-right:0;border:solid 1px green;border-radius:0 0 5px 5px;margin-left:10px;margin-right:10px}.-txtCenter-[data-v-f436a6ee]{text-align:center}\r\n\r\n\r\n/* 图标样式 */.-bgColorMoccasin-[data-v-f436a6ee]{background:#ffe4b5}.-bgColorYellow-[data-v-f436a6ee]{background:#ff0}.-bgPrimary-[data-v-f436a6ee]{background:#007aff}.-bgWarning-[data-v-f436a6ee]{background:#f0ad4e}.-bgSuccess-[data-v-f436a6ee]{background:#4cd964}.-bgColorOlive-[data-v-f436a6ee]{background:#8dc63f}.-bgColorTips-[data-v-f436a6ee]{background:#8cde9b}.-bgColorGrey-[data-v-f436a6ee]{background:#8799a3}\r\n\r\n\r\n/* 显示表格中的单元格样式 */.tdLab[data-v-f436a6ee]{width:140px;text-align:left}\r\n\r\n\r\n/* 输入表格中的单元格样式 */.tdIpu[data-v-f436a6ee]{width:calc(100% - 140px);text-align:left}.-txtLeft-[data-v-f436a6ee]{text-align:left}.-txtRight-[data-v-f436a6ee]{text-align:right}\r\n\r\n\r\n/* 自制button样式 */.viewToBut[data-v-f436a6ee]{color:#fff;font-size:small;height:20px;text-align:center;line-height:20px;border-radius:5px;width:100%;margin:0 5px 0 5px\r\n\t/*上右下左边界*/}\r\n\r\n\r\n/* 上面标题栏样式 */.topTitle[data-v-f436a6ee]{font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.viewCell[data-v-f436a6ee]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-f436a6ee]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em}.-bgSelect-[data-v-f436a6ee]{background-color:#3cb371}\r\n\r\n\r\n/* 上面标题栏样式 */",""]),t.exports=e},ef03:function(t,e,a){"use strict";a.r(e);var n=a("30de"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a}}]);