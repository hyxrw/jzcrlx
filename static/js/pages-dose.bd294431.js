(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dose"],{"2c03":function(t,a,i){var s=i("d1c3");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("0bd987fb",s,!0,{sourceMap:!1,shadowMode:!1})},"2da4":function(t,a,i){"use strict";i.r(a);var s=i("fc3c"),n=i("b861");for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(l);i("99bf");var e=i("f0c5"),r=Object(e["a"])(n["default"],s["b"],s["c"],!1,null,"fa084538",null,!1,s["a"],void 0);a["default"]=r.exports},"99bf":function(t,a,i){"use strict";var s=i("2c03"),n=i.n(s);n.a},b861:function(t,a,i){"use strict";i.r(a);var s=i("de0e"),n=i.n(s);for(var l in s)["default"].indexOf(l)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(l);a["default"]=n.a},d1c3:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,".myTable[data-v-fa084538]{\r\n\t/* display: flex; */color:#00f;margin:8px;\r\n\t/* margin-right: 8px; */\r\n\t/* justify-content:flex-end; */\r\n\t/* text-align: center; */\r\n\t/* margin-top: 8px; */line-height:2em;border-radius:3px;border:transparent}.viewIpu[data-v-fa084538]{display:flex;justify-content:flex-start}.showLab[data-v-fa084538]{width:145px;text-align:left}.showIpu[data-v-fa084538]{width:calc(100% - 145px);text-align:left}.viewHome[data-v-fa084538]{\t\r\n    /* position: relative;\r\n\tfloat: left;\r\n\tleft: 50%;\t */max-width:500px;margin:0 auto;width:500px}.viewNext[data-v-fa084538]{\r\n\t/* float: left; */\r\n\t/* position: relative;\t\r\n\tleft: -50%; */bottom:var(--window-bottom);margin-bottom:10px}.weui-input[data-v-fa084538]{border:1px solid #66cdaa;width:100%;margin-left:2px;margin-right:2px;border-radius:3px}\r\n\r\n\r\n/*单位显示内容 */.labSmall[data-v-fa084538]{font-size:xx-small;color:green;margin-left:.2rem}\r\n\r\n\r\n/* 参考内容 */.ckViewButton[data-v-fa084538]{font-size:xx-small;line-height:1.2rem;color:#000;margin:%?20?%;margin-bottom:%?20?%}\r\n\r\n\r\n/* 线条样式 */.line[data-v-fa084538]{width:100%;height:%?2?%;background:#8a2be2;margin-top:%?10?%}\r\n\r\n\r\n/* 标题栏样式 */.showTitle[data-v-fa084538]{margin-top:10px;margin-bottom:0;background:green;color:#fff;border-radius:5px 5px 0 0!important;margin-left:10px;margin-right:10px}\r\n\r\n\r\n/* 署名内容 */.textShowName[data-v-fa084538]{color:#00f;font-size:xx-small;text-align:right;margin:10px;vertical-align:text-bottom}.viewget[data-v-fa084538]{margin-left:%?10?%;margin-right:%?10?%;margin-top:%?10?%;color:#00f;text-align:left}\r\n\r\n\r\n/* 文本的上标与下标 */sup[data-v-fa084538]{font-size:%?20?%;vertical-align:text-top}sub[data-v-fa084538]{font-size:%?20?%;vertical-align:text-bottom}.viewButton[data-v-fa084538]{\r\n\t/* display: flex;\t\t\t\r\n\t\tjustify-content:space-around;\t\t\r\n\t\twidth: 90%; \r\n\t\tmargin-bottom: 0rpx;\r\n\t\tmargin-top: 10rpx; */display:flex;flex-direction:row;justify-content:center;\r\n\t/* margin-top: 10px;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px; */margin:10px}.viewBackground[data-v-fa084538]{background-color:#e6e6fa;border-radius:3px}.mybutton[data-v-fa084538]{margin-left:1px;margin-right:1px;height:22.39px;font-size:xx-small\r\n\t/* width:70px; */}\r\n\r\n\r\n/* 显示结果区样式 */.showReturn[data-v-fa084538]{margin-left:0;margin-right:0;border:solid 1px green;border-radius:0 0 5px 5px;margin-left:10px;margin-right:10px}.-txtCenter-[data-v-fa084538]{text-align:center}\r\n\r\n\r\n/* 图标样式 */.-bgColorMoccasin-[data-v-fa084538]{background:#ffe4b5}.-bgColorYellow-[data-v-fa084538]{background:#ff0}.-bgPrimary-[data-v-fa084538]{background:#007aff}.-bgWarning-[data-v-fa084538]{background:#f0ad4e}.-bgSuccess-[data-v-fa084538]{background:#4cd964}.-bgColorOlive-[data-v-fa084538]{background:#8dc63f}.-bgColorTips-[data-v-fa084538]{background:#8cde9b}.-bgColorGrey-[data-v-fa084538]{background:#8799a3}\r\n\r\n\r\n/* 显示表格中的单元格样式 */.tdLab[data-v-fa084538]{width:140px;text-align:left}\r\n\r\n\r\n/* 输入表格中的单元格样式 */.tdIpu[data-v-fa084538]{width:calc(100% - 140px);text-align:left}.-txtLeft-[data-v-fa084538]{text-align:left}.-txtRight-[data-v-fa084538]{text-align:right}\r\n\r\n\r\n/* 自制button样式 */.viewToBut[data-v-fa084538]{color:#fff;font-size:small;height:20px;text-align:center;line-height:20px;border-radius:5px;width:100%;margin:0 5px 0 5px\r\n\t/*上右下左边界*/}\r\n\r\n\r\n/* 上面标题栏样式 */.topTitle[data-v-fa084538]{font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.viewCell[data-v-fa084538]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-fa084538]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em}.-bgSelect-[data-v-fa084538]{background-color:#3cb371}\r\n\r\n\r\n/* 上面标题栏样式 */",""]),t.exports=a},de0e:function(t,a,i){"use strict";(function(t){i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");var s={data:function(){return{strWt:60,strHCT:30,strXYBLL:200,strQZHLL:1600,strHZHLL:800,strTXBLL:800,strTSL:100,strCLL:"-",strFYL:"-",strJZFYL:"-",strLGFS:"-",strLGFSX:"-",numWidth:"100%"}},onLoad:function(t){this.subReadData("crrt-dose-mr","crrt-dose")},methods:{inputTZ:function(t){this.strWt=t.detail.value,this.gotoCalc()},inputHCT:function(t){this.strHCT=t.detail.value,this.gotoCalc()},inputXYBLL:function(t){this.strXYBLL=t.detail.value,this.gotoCalc()},inputQZHLL:function(t){this.strQZHLL=t.detail.value,this.gotoCalc()},inputHZHLL:function(t){this.strHZHLL=t.detail.value,this.gotoCalc()},inputTXBLL:function(t){this.strTXBLL=t.detail.value,this.gotoCalc()},inputTSL:function(t){this.strTSL=t.detail.value,this.gotoCalc()},btnJS:function(t){this.gotoCalc(),uni.showToast({title:"已计算出结果",icon:"success",duration:1e3})},gotoCalc:function(){this.calCLL(),this.calFYL(),this.calJZFYL(),this.calLGFS(),this.calLGFSX(),uni.setStorageSync("crrt-dose",this.$data)},btnClear:function(t){this.subReadData("crrt-dose-mr","crrt-dose")},subReadData:function(t,a){var i="";isNaN(uni.getStorageSync(t))?i=uni.getStorageSync(t):isNaN(uni.getStorageSync(a))&&(i=uni.getStorageSync(a)),isNaN(i)?(this.strWt=Number(i.strWt),this.strHCT=Number(i.strHCT),this.strXYBLL=Number(i.strXYBLL),this.strQZHLL=Number(i.strQZHLL),this.strHZHLL=Number(i.strHZHLL),this.strTXBLL=Number(i.strTXBLL),this.strTSL=Number(i.strTSL),this.strCLL="-",this.strFYL="-",this.strJZFYL="-",this.strLGFS="-",this.strLGFSX="-"):(this.strWt=60,this.strHCT=30,this.strXYBLL=200,this.strQZHLL=1600,this.strHZHLL=800,this.strTXBLL=800,this.strTSL=100,this.strCLL="-",this.strFYL="-",this.strJZFYL="-",this.strLGFS="-",this.strLGFSX="-")},calQp:function(){var t;return t=60*Number(this.strXYBLL)*(1-Number(this.strHCT)/100),t},calA:function(){var t,a=this.calQp();return t=a/(Number(this.strQZHLL)+a),t},calCLL:function(){var t=this.calA(),a=0;return a=t*(Number(this.strQZHLL)+Number(this.strHZHLL)+Number(this.strTSL))/Number(this.strWt),this.strCLL=a.toFixed(2),a},calFYL:function(){var t=0;return t=(Number(this.strQZHLL)+Number(this.strHZHLL)+Number(this.strTXBLL)+Number(this.strTSL))/Number(this.strWt),this.strFYL=t.toFixed(2),t},calJZFYL:function(){var t=this.calA(),a=0;return a=t*this.calFYL(),this.strJZFYL=a.toFixed(2),a},calLGFS:function(){var t=0,a=this.calQp();return t=(Number(this.strHZHLL)+Number(this.strTSL))/a,t*=100,this.strLGFS=t.toFixed(2),t},calLGFSX:function(){var t=0,a=this.calQp();return t=(Number(this.strQZHLL)+Number(this.strHZHLL)+Number(this.strTSL))/(a+Number(this.strQZHLL)),t*=100,this.strLGFSX=t.toFixed(2),t},btnSave:function(t){var a=this;uni.showModal({title:"询问",content:"您确定要将参数保存为默认吗?",success:function(i){if(i.confirm)try{uni.setStorageSync("crrt-dose-mr",a.$data),uni.showToast({title:"已保存为默认",icon:"success",duration:2e3})}catch(t){uni.showToast({title:"保存时发生错误",icon:"error",duration:2e3})}else i.cancel}})},setStyle:function(a){t("log",2," at pages/dose.vue:478"),this.$refs.viewHome.stytle.color="red"}}};a.default=s}).call(this,i("0de9")["log"])},fc3c:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return l})),i.d(a,"a",(function(){return s}));var s={crrtHead:i("96fd").default,uniIcons:i("3140").default,footQrCode:i("dc41").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"viewHome",style:{width:t.numWidth}},[i("v-uni-view",{staticClass:"viewNext"},[i("crrtHead",{attrs:{title:"治疗剂量计算"}}),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"compose",size:"20"}}),t._v("数据输入")],1),i("v-uni-view",{staticClass:"showReturn"},[i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("患者体重"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(kg)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"Wt",type:"digit",placeholder:"患者体重(kg)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputWt.apply(void 0,arguments)}},model:{value:t.strWt,callback:function(a){t.strWt=a},expression:"strWt"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("HCT"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(%)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"HCT",type:"digit",placeholder:"HCT(%)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputHCT.apply(void 0,arguments)}},model:{value:t.strHCT,callback:function(a){t.strHCT=a},expression:"strHCT"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("血液泵流量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/min)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"XYBLL",type:"digit",placeholder:"血液泵流量(ml/min)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputXYBLL.apply(void 0,arguments)}},model:{value:t.strXYBLL,callback:function(a){t.strXYBLL=a},expression:"strXYBLL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("前置换流量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"QZHLL",type:"digit",placeholder:"前置换流量(ml/h)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputQZHLL.apply(void 0,arguments)}},model:{value:t.strQZHLL,callback:function(a){t.strQZHLL=a},expression:"strQZHLL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("后置换流量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"HZHLL",type:"digit",placeholder:"后置换流量(ml/h)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputHZHLL.apply(void 0,arguments)}},model:{value:t.strHZHLL,callback:function(a){t.strHZHLL=a},expression:"strHZHLL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("透析泵流量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"TXBLL",type:"digit",placeholder:"透析泵流量(ml/h)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputTXBLL.apply(void 0,arguments)}},model:{value:t.strTXBLL,callback:function(a){t.strTXBLL=a},expression:"strTXBLL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("脱水量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"TSL",type:"digit",placeholder:"脱水量(ml/h)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputTSL.apply(void 0,arguments)}},model:{value:t.strTSL,callback:function(a){t.strTSL=a},expression:"strTSL"}})],1)])]),i("v-uni-view",{staticClass:"viewButton"},[i("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnJS.apply(void 0,arguments)}}},[t._v("计 算")]),i("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnSave.apply(void 0,arguments)}}},[t._v("保\n\t\t\t\t\t存")]),i("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"warn"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnClear.apply(void 0,arguments)}}},[t._v("重 置")])],1)],1),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"chat",size:"20"}}),t._v("计算结果")],1),i("v-uni-view",{staticClass:"showReturn"},[i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("超滤率"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/kg.h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:" weui-input -bgColorMoccasin-",model:{value:t.strCLL,callback:function(a){t.strCLL=a},expression:"strCLL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("废液量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/kg.h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:" weui-input -bgColorMoccasin-",model:{value:t.strFYL,callback:function(a){t.strFYL=a},expression:"strFYL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("矫正废液量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/kg.h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:" weui-input -bgColorMoccasin-",model:{value:t.strJZFYL,callback:function(a){t.strJZFYL=a},expression:"strJZFYL"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("滤过分数"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(%)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:" weui-input -bgColorMoccasin-",model:{value:t.strLGFS,callback:function(a){t.strLGFS=a},expression:"strLGFS"}})],1)]),i("tr",[i("td",{staticClass:"tdLab"},[i("v-uni-label",[t._v("滤过分数(新)"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(%)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:" weui-input -bgColorMoccasin-",model:{value:t.strLGFSX,callback:function(a){t.strLGFSX=a},expression:"strLGFSX"}})],1)])]),i("v-uni-view",{staticClass:"textShowName"},[t._v("深圳市中西医结合医院－谢锐威"),i("br"),t._v("E-mail:27165718@qq.com")])],1),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"wallet-filled",size:"20"}}),t._v("引用公式")],1),i("v-uni-view",{staticClass:"showReturn"},[i("v-uni-view",{staticClass:"ckViewButton"},[i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("前置换液泵速率: Q"),i("sup",[t._v("Pre")])]),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("后置换液泵速率: Q"),i("sup",[t._v("Post")])]),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("透析液泵速率: Q"),i("sub",[t._v("D")])]),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("脱水量: Q"),i("sup",[t._v("NET")])]),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("血液泵速率: Q"),i("sub",[t._v("B")])]),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("体重: Wt")]),i("v-uni-label",{staticClass:"labSmall"},[t._v("(kg)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("血浆流量(Q"),i("sub",[t._v("p")]),t._v(")＝Q"),i("sub",[t._v("B")]),t._v("× 60 × (1 - HCT)")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("稀释比例(A)＝ Q"),i("sub",[t._v("p")]),t._v("÷ (Q"),i("sup",[t._v("Pre")]),t._v("+ Q"),i("sub",[t._v("p")]),t._v(")")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("超滤率＝ A × (Q"),i("sup",[t._v("Pre")]),t._v("+ Q"),i("sup",[t._v("Post")]),t._v("+ Q"),i("sup",[t._v("NET")]),t._v(") ÷Wt")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("废液量＝(Q"),i("sup",[t._v("Pre")]),t._v("+ Q"),i("sup",[t._v("Post")]),t._v("+ Q"),i("sub",[t._v("D")]),t._v("+\n\t\t\t\t\t\tQ"),i("sup",[t._v("NET")]),t._v(")÷Wt")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("矫正废液量＝A × (Q"),i("sup",[t._v("Pre")]),t._v("+ Q"),i("sup",[t._v("Post")]),t._v("+ Q"),i("sub",[t._v("D")]),t._v("+\n\t\t\t\t\t\tQ"),i("sup",[t._v("NET")]),t._v(") ÷ Wt")])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("滤过分数＝Q"),i("sup",[t._v("Post")]),t._v("+ Q"),i("sup",[t._v("NET")]),t._v(") ÷ Q"),i("sub",[t._v("p")])])],1),i("v-uni-view",[i("v-uni-label",{staticClass:"mylab"},[t._v("滤过分数(新)＝(Q"),i("sup",[t._v("Pre")]),t._v("+ Q"),i("sup",[t._v("Post")]),t._v("+ Q"),i("sup",[t._v("NET")]),t._v(")\n\t\t\t\t\t\t÷(Q"),i("sub",[t._v("p")]),t._v("+\n\t\t\t\t\t\tQ"),i("sup",[t._v("Pre")]),t._v(")")])],1)],1)],1),i("footQrCode")],1)],1)},l=[]}}]);