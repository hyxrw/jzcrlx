(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-solution"],{"34e1":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return e})),a.d(i,"a",(function(){return s}));var s={crrtHead:a("377f").default,uniIcons:a("b788").default,footQrCode:a("e276").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"viewHome",style:{width:t.numWidth}},[a("v-uni-view",{staticClass:"viewNext"},[a("crrtHead",{attrs:{title:"置换液计算"}}),a("v-uni-view",{staticClass:"showTitle"},[a("tr",[a("td",{staticClass:"tdLab",staticStyle:{width:"58%"}},[a("uni-icons",{staticClass:"titleIcon",staticStyle:{color:"white"},attrs:{type:"compose",size:"20"}}),t._v("基础液(单位:mmol/L)")],1),a("td",{staticClass:"tdIpu",staticStyle:{width:"37%","font-size":"x-small"}},[a("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.setShowJCY.apply(void 0,arguments)}}},[a("v-uni-radio",{staticClass:"myRadio",attrs:{value:"0",checked:0==t.blShowJCY}},[t._v("使用")]),a("v-uni-radio",{staticClass:"myRadio",attrs:{value:"1",checked:0!=t.blShowJCY}},[t._v("不使用")])],1)],1)])]),0==t.blShowJCY?a("v-uni-view",{staticClass:"showReturn"},[a("table",{staticClass:"myTable"},[a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("钠含量:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"jcyNa",type:"digit",placeholder:"钠含量(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyNa.apply(void 0,arguments)}},model:{value:t.strJcyNa,callback:function(i){t.strJcyNa=i},expression:"strJcyNa"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("氯含量:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"jcyCl",type:"digit",placeholder:"氯含量(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyCl.apply(void 0,arguments)}},model:{value:t.strJcyCl,callback:function(i){t.strJcyCl=i},expression:"strJcyCl"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("钾含量:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"jcyK",type:"digit",placeholder:"钾含量(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyK.apply(void 0,arguments)}},model:{value:t.strJcyK,callback:function(i){t.strJcyK=i},expression:"strJcyK"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("钙含量:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"jcyCa",type:"digit",placeholder:"钙含量(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyCa.apply(void 0,arguments)}},model:{value:t.strJcyCa,callback:function(i){t.strJcyCa=i},expression:"strJcyCa"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("镁含量:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"jcyMg",type:"digit",placeholder:"镁含量(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyMg.apply(void 0,arguments)}},model:{value:t.strJcyMg,callback:function(i){t.strJcyMg=i},expression:"strJcyMg"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("葡萄糖:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"jcyGS",type:"digit",placeholder:"葡萄糖(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyGS.apply(void 0,arguments)}},model:{value:t.strJcyGS,callback:function(i){t.strJcyGS=i},expression:"strJcyGS"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("碳酸盐:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"JcyHCO3",type:"digit",placeholder:"碳酸盐(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyHCO3.apply(void 0,arguments)}},model:{value:t.strJcyHCO3,callback:function(i){t.strJcyHCO3=i},expression:"strJcyHCO3"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60px"}},[a("v-uni-label",[t._v("总液量:")])],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input -bgColorYellow-",attrs:{id:"JcyZYL",type:"digit",placeholder:"总液量(mmol/L)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputJcyZYL.apply(void 0,arguments)}},model:{value:t.strJcyZYL,callback:function(i){t.strJcyZYL=i},expression:"strJcyZYL"}})],1)])])]):a("v-uni-view",{staticClass:"showReturn -txtCenter-",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setUserJCR.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{type:"bottom",size:"15"}}),a("uni-icons",{attrs:{type:"bottom",size:"15"}}),a("uni-icons",{attrs:{type:"bottom",size:"15"}})],1),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticClass:"titleIcon",staticStyle:{color:"white"},attrs:{type:"compose",size:"20"}}),t._v("液体量(单位:ml)")],1),a("v-uni-view",{staticClass:"showReturn"},[a("table",{staticClass:"myTable"},[a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("0.9%氯化钠:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"09NaCl",type:"digit",placeholder:"0.9%氯化钠(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input09NaCl.apply(void 0,arguments)}},model:{value:t.str09NaCl,callback:function(i){t.str09NaCl=i},expression:"str09NaCl"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("10%氯化钠:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"10NaCl",type:"digit",placeholder:"10%氯化钠(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input10NaCl.apply(void 0,arguments)}},model:{value:t.str10NaCl,callback:function(i){t.str10NaCl=i},expression:"str10NaCl"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("注射灭菌水:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"H2O",type:"digit",placeholder:"注射用水(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputH2O.apply(void 0,arguments)}},model:{value:t.strH2O,callback:function(i){t.strH2O=i},expression:"strH2O"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("5%葡萄糖:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"05GS",type:"digit",placeholder:"5%葡萄糖(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input05GS.apply(void 0,arguments)}},model:{value:t.str05GS,callback:function(i){t.str05GS=i},expression:"str05GS"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("50%葡萄糖:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"50GS",type:"digit",placeholder:"50%葡萄糖(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input50GS.apply(void 0,arguments)}},model:{value:t.str50GS,callback:function(i){t.str50GS=i},expression:"str50GS"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("10%氯化钾:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"10KCl",type:"digit",placeholder:"10%氯化钾(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input10KCl.apply(void 0,arguments)}},model:{value:t.str10KCl,callback:function(i){t.str10KCl=i},expression:"str10KCl"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("10%氯化钙:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"10CaCl",type:"digit",placeholder:"10%氯化钙(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input10CaCl.apply(void 0,arguments)}},model:{value:t.str10CaCl,callback:function(i){t.str10CaCl=i},expression:"str10CaCl"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("25%硫酸镁:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"25MgSO4",type:"digit",placeholder:"25%硫酸镁(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input25MgSO4.apply(void 0,arguments)}},model:{value:t.str25MgSO4,callback:function(i){t.str25MgSO4=i},expression:"str25MgSO4"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("5%氯化钙:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"05CaCl",type:"digit",placeholder:"5%氯化钙(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input05CaCl.apply(void 0,arguments)}},model:{value:t.str05CaCl,callback:function(i){t.str05CaCl=i},expression:"str05CaCl"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"100px"}},[t._v("5%碳酸氢钠:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"05NaHCO3",type:"digit",placeholder:"5%碳酸氢钠(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input05NaHCO3.apply(void 0,arguments)}},model:{value:t.str05NaHCO3,callback:function(i){t.str05NaHCO3=i},expression:"str05NaHCO3"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"120px"}},[t._v("10%葡萄糖酸钙:")]),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"10CG",type:"digit",placeholder:"10%葡萄糖酸钙(ml)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.input10CG.apply(void 0,arguments)}},model:{value:t.str10CG,callback:function(i){t.str10CG=i},expression:"str10CG"}})],1),a("td",{staticStyle:{width:"8px"}}),a("td",{staticClass:"tdLab",attrs:{colspan:"3"}},[a("v-uni-view",{staticClass:"viewButton"},[a("v-uni-view",{staticClass:"viewToBut -bgPrimary-",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnSave.apply(void 0,arguments)}}},[t._v("保存")]),a("v-uni-view",{staticClass:"viewToBut -bgWarning-",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnClear.apply(void 0,arguments)}}},[t._v("重置")])],1)],1)])])]),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticClass:"titleIcon",staticStyle:{color:"white"},attrs:{type:"chat",size:"20"}}),t._v("计算结果(单位:mmol/L)")],1),a("v-uni-view",{staticClass:"showReturn"},[a("table",{staticClass:"myTable",staticStyle:{width:"100%"}},[a("tr",[a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("钠(不含SB)："+t._s(t.strNaNoSB))]),a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("钠(含SB)："+t._s(t.strNaAddSB))])]),a("tr",[a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("氯离子："+t._s(t.strCl))]),a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("钾离子："+t._s(t.strK))])]),a("tr",[a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("钙离子："+t._s(t.strCa2))]),a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("镁离子："+t._s(t.strMg2))])]),a("tr",[a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("碳酸盐："+t._s(t.strHCO3))]),a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("葡萄糖："+t._s(t.strGlucose))])]),a("tr",[a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[t._v("液体总量："+t._s(t.strYTZL)+"ml")]),a("td",{staticClass:"tdLab",staticStyle:{width:"40%"}},[a("v-uni-view",{staticClass:"viewButton"},[a("v-uni-view",{staticClass:"viewToBut -bgPrimary-",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnJS.apply(void 0,arguments)}}},[t._v("计算")]),a("v-uni-view",{staticClass:"viewToBut -bgSuccess-",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnCopy.apply(void 0,arguments)}}},[t._v("复制")])],1)],1)])]),a("v-uni-view",{staticClass:"textShowName"},[t._v("深圳市中西医结合医院－谢锐威"),a("br"),t._v("E-mail:27165718@qq.com")])],1),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticClass:"titleIcon",staticStyle:{color:"white"},attrs:{type:"wallet-filled",size:"20"}}),t._v("引用公式")],1),a("v-uni-view",{staticClass:"showReturn"},[a("v-uni-view",{staticClass:"ckViewButton"},[a("v-uni-view",[t._v("[1]溶质摩尔数(mmol) = 溶液量 × 浓度 × 分子量"),a("br"),t._v("[2]摩尔浓度(mmol/L) = 溶质摩尔数(mmol) / 溶液体积(L)")])],1)],1),a("footQrCode")],1)],1)},e=[]},"3caa":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("a9e3");var s={data:function(){return{blShowJCY:0,strJcyNa:113,strJcyCl:118,strJcyK:0,strJcyCa:1.6,strJcyMg:.797,strJcyGS:10.6,strJcyHCO3:0,strJcyZYL:0,str09NaCl:3e3,str10NaCl:0,strH2O:750,str05GS:200,str50GS:0,str05CaCl:25,str10CaCl:0,str10CG:0,str25MgSO4:3,str10KCl:12,str05NaHCO3:250,strNaNoSB:"-",strNaAddSB:"-",strCl:"-",strK:"-",strCa2:"-",strMg2:"-",strHCO3:"-",strGlucose:"-",strYTZL:"-",strTempJcyZYL:0,numWidth:"100%"}},onLoad:function(t){this.subReadData("crrt-solution-mr","crrt-solution")},methods:{setUserJCR:function(){this.blShowJCY=0},setShowJCY:function(t){this.blShowJCY=t.detail.value,1==t.detail.value?(this.strJcyZYL=0,this.strTempJcyZYL=this.strJcyZYL,this.btnJS()):(this.strJcyZYL=Number(this.strTempJcyZYL),this.btnJS())},inputJcyNa:function(t){this.strJcyNa=t.detail.value,this.btnJS()},inputJcyCl:function(t){this.strJcyCl=t.detail.value,this.btnJS()},inputJcyK:function(t){this.strJcyK=t.detail.value,this.btnJS()},inputJcyCa:function(t){this.strJcyCa=t.detail.value,this.btnJS()},inputJcyMg:function(t){this.strJcyMg=t.detail.value,this.btnJS()},inputJcyGS:function(t){this.strJcyGS=t.detail.value,this.btnJS()},inputJcyHCO3:function(t){this.strJcyHCO3=t.detail.value,this.btnJS()},inputJcyZYL:function(t){this.strJcyZYL=t.detail.value,this.btnJS()},input09NaCl:function(t){this.str09NaCl=t.detail.value,this.btnJS()},input10NaCl:function(t){this.str10NaCl=t.detail.value,this.btnJS()},inputH2O:function(t){this.strH2O=t.detail.value,this.btnJS()},input05GS:function(t){this.str05GS=t.detail.value,this.btnJS()},input50GS:function(t){this.str50GS=t.detail.value,this.btnJS()},input05CaCl:function(t){this.str05CaCl=t.detail.value,this.btnJS()},input10CaCl:function(t){this.str10CaCl=t.detail.value,this.btnJS()},input10CG:function(t){this.str10CG=t.detail.value,this.btnJS()},input25MgSO4:function(t){this.str25MgSO4=t.detail.value,this.btnJS()},input10KCl:function(t){this.str10KCl=t.detail.value,this.btnJS()},input05NaHCO3:function(t){this.str05NaHCO3=t.detail.value,this.btnJS()},btnClear:function(t){this.subReadData("crrt-solution-mr","crrt-solution"),wx.showToast({title:"成功重置参数",icon:"success",duration:1e3})},btnJS:function(){this.gotoCalc(Number(this.str09NaCl),Number(this.str10NaCl),Number(this.strH2O),Number(this.str05GS),Number(this.str50GS),Number(this.str05CaCl),Number(this.str10CaCl),Number(this.str10CG),Number(this.str25MgSO4),Number(this.str10KCl),Number(this.str05NaHCO3),Number(this.strJcyNa),Number(this.strJcyCl),Number(this.strJcyK),Number(this.strJcyCa),Number(this.strJcyMg),Number(this.strJcyGS),Number(this.strJcyHCO3),Number(this.strJcyZYL)),uni.showToast({title:"已计算出结果",icon:"success",duration:1e3})},gotoCalc:function(t,i,a,s,n,e,l,r,c,o,u,d,p,h,v,C,b,y,f){var m;m=t+i+a+s+n+e+l+r+c+o+u;var g;g=Number(m)+f;var x=0;x=((.009*t+.1*i)/58.4*1e6+d*f)/(g-u);var w=0;w=(1e6*((.009*t+.1*i)/58.4+.05*u/84.01)+d*f)/g;var S=0;S=(1e6*((.009*t+.1*i)/58.44+.05*e*2/147.02+.1*l*2/147.02+.1*o/74.55)+p*f)/g;var J=0;J=(.1*o/74.55*1e6+h*f)/g;var N=0;N=(1e6*(.05*e/147.02+.1*l/147.02+.1*r/448.4)+v*f)/g;var L=0;L=(.25*c/246.48*1e6+C*f)/g;var O=0;O=(.05*u/84.01*1e6+y*f)/g;var _=0;_=((.05*s+.5*n)/198.17*1e6+b*f)/g,this.strYTZL=g,this.strNaNoSB=x.toFixed(2),this.strNaAddSB=w.toFixed(2),this.strCl=S.toFixed(2),this.strK=J.toFixed(2),this.strCa2=N.toFixed(2),this.strMg2=L.toFixed(2),this.strHCO3=O.toFixed(2),this.strGlucose=_.toFixed(2),uni.setStorageSync("crrt-solution",this.$data)},subReadData:function(t,i){var a="";isNaN(uni.getStorageSync(t))?a=uni.getStorageSync(t):isNaN(uni.getStorageSync(i))&&(a=uni.getStorageSync(i)),isNaN(a)?(this.strJcyNa=Number(a.strJcyNa),this.strJcyCl=Number(a.strJcyCl),this.strJcyK=Number(a.strJcyK),this.strJcyCa=Number(a.strJcyCa),this.strJcyMg=Number(a.strJcyMg),this.strJcyGS=Number(a.strJcyGS),this.strJcyHCO3=Number(a.strJcyHCO3),this.strJcyZYL=Number(a.strJcyZYL),this.str09NaCl=Number(a.str09NaCl),this.str10NaCl=Number(a.str10NaCl),this.strH2O=Number(a.strH2O),this.str05GS=Number(a.str05GS),this.str50GS=Number(a.str50GS),this.str05CaCl=Number(a.str05CaCl),this.str10CaCl=Number(a.str10CaCl),this.str10CG=Number(a.str10CG),this.str25MgSO4=Number(a.str25MgSO4),this.str10KCl=Number(a.str10KCl),this.str05NaHCO3=Number(a.str05NaHCO3),this.strNaNoSB="-",this.strNaAddSB="-",this.strCl="-",this.strK="-",this.strCa2="-",this.strMg2="-",this.strHCO3="-",this.strGlucose="-",this.strYTZL="-"):(this.strJcyNa=113,this.strJcyCl=118,this.strJcyK=0,this.strJcyCa=1.6,this.strJcyMg=.797,this.strJcyGS=10.6,this.strJcyHCO3=0,this.strJcyZYL=0,this.str09NaCl=3e3,this.str10NaCl=0,this.strH2O=750,this.str05GS=200,this.str50GS=0,this.str05CaCl=25,this.str10CaCl=0,this.str10CG=0,this.str25MgSO4=3,this.str10KCl=12,this.str05NaHCO3=250,this.strNaNoSB="-",this.strNaAddSB="-",this.strCl="-",this.strK="-",this.strCa2="-",this.strMg2="-",this.strHCO3="-",this.strGlucose="-",this.strYTZL="-")},btnCopy:function(t){uni.setClipboardData({data:"钠(不含SB)："+this.strNaNoSB+"(mmol/l)\n钠(含SB)："+this.strNaAddSB+"(mmol/l)\n氯含量："+this.strCl+"(mmol/l)\n钾含量："+this.strK+"(mmol/l)\n钙含量："+this.strCa2+"(mmol/l)\n镁含量："+this.strMg2+"(mmol/l)\n碳酸盐含量："+this.strHCO3+"(mmol/l)\n葡萄糖含量："+this.strGlucose+"(mmol/l)\n液体总量："+this.strYTZL+"(ml)\n\n=======================\n微信公众号:急诊超人老谢\n(仅做临床参考之用)\n欢迎批评指正\nE-mail:27165718@qq.com\n=======================",success:function(t){uni.showToast({title:"成功复制到粘贴板",icon:"success",duration:1e3})}})},btnSave:function(t){var i=this;uni.showModal({title:"询问",content:"您确定要将参数保存为默认吗?",success:function(t){t.confirm?(uni.setStorageSync("crrt-solution-mr",i.$data),uni.showToast({title:"已保存为默认",icon:"success",duration:1e3})):t.cancel}})}}};i.default=s},"46c4":function(t,i,a){"use strict";a.r(i);var s=a("34e1"),n=a("f91d");for(var e in n)["default"].indexOf(e)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(e);a("8101");var l=a("f0c5"),r=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,"f3c7a1b0",null,!1,s["a"],void 0);i["default"]=r.exports},8101:function(t,i,a){"use strict";var s=a("d7d7"),n=a.n(s);n.a},a2a0:function(t,i,a){var s=a("24fb");i=s(!1),i.push([t.i,".myTable[data-v-f3c7a1b0]{\r\n\t/* display: flex; */color:#00f;margin:8px;\r\n\t/* margin-right: 8px; */\r\n\t/* justify-content:flex-end; */\r\n\t/* text-align: center; */\r\n\t/* margin-top: 8px; */line-height:2em;border-radius:3px;border:transparent}.viewIpu[data-v-f3c7a1b0]{display:flex;justify-content:flex-start}.showLab[data-v-f3c7a1b0]{width:145px;text-align:left}.showIpu[data-v-f3c7a1b0]{width:calc(100% - 145px);text-align:left}.viewHome[data-v-f3c7a1b0]{\t\r\n    /* position: relative;\r\n\tfloat: left;\r\n\tleft: 50%;\t */max-width:500px;margin:0 auto;width:500px}.viewNext[data-v-f3c7a1b0]{\r\n\t/* float: left; */\r\n\t/* position: relative;\t\r\n\tleft: -50%; */bottom:var(--window-bottom);margin-bottom:10px}.weui-input[data-v-f3c7a1b0]{border:1px solid #66cdaa;width:100%;margin-left:2px;margin-right:2px;border-radius:3px}\r\n\r\n\r\n/*单位显示内容 */.labSmall[data-v-f3c7a1b0]{font-size:xx-small;color:green;margin-left:.2rem}\r\n\r\n\r\n/* 参考内容 */.ckViewButton[data-v-f3c7a1b0]{font-size:xx-small;line-height:1.2rem;color:#000;margin:%?20?%;margin-bottom:%?20?%}\r\n\r\n\r\n/* 线条样式 */.line[data-v-f3c7a1b0]{width:100%;height:%?2?%;background:#8a2be2;margin-top:%?10?%}\r\n\r\n\r\n/* 标题栏样式 */.showTitle[data-v-f3c7a1b0]{margin-top:10px;margin-bottom:0;background:green;color:#fff;border-radius:5px 5px 0 0!important;margin-left:10px;margin-right:10px}\r\n\r\n\r\n/* 署名内容 */.textShowName[data-v-f3c7a1b0]{color:#00f;font-size:xx-small;text-align:right;margin:10px;vertical-align:text-bottom}.viewget[data-v-f3c7a1b0]{margin-left:%?10?%;margin-right:%?10?%;margin-top:%?10?%;color:#00f;text-align:left}\r\n\r\n\r\n/* 文本的上标与下标 */sup[data-v-f3c7a1b0]{font-size:%?20?%;vertical-align:text-top}sub[data-v-f3c7a1b0]{font-size:%?20?%;vertical-align:text-bottom}.viewButton[data-v-f3c7a1b0]{\r\n\t/* display: flex;\t\t\t\r\n\t\tjustify-content:space-around;\t\t\r\n\t\twidth: 90%; \r\n\t\tmargin-bottom: 0rpx;\r\n\t\tmargin-top: 10rpx; */display:flex;flex-direction:row;justify-content:center;\r\n\t/* margin-top: 10px;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px; */margin:10px}.viewBackground[data-v-f3c7a1b0]{background-color:#e6e6fa;border-radius:3px}.mybutton[data-v-f3c7a1b0]{margin-left:1px;margin-right:1px;height:22.39px;font-size:xx-small\r\n\t/* width:70px; */}\r\n\r\n\r\n/* 显示结果区样式 */.showReturn[data-v-f3c7a1b0]{margin-left:0;margin-right:0;border:solid 1px green;border-radius:0 0 5px 5px;margin-left:10px;margin-right:10px}.-txtCenter-[data-v-f3c7a1b0]{text-align:center}\r\n\r\n\r\n/* 图标样式 */.-bgColorMoccasin-[data-v-f3c7a1b0]{background:#ffe4b5}.-bgColorYellow-[data-v-f3c7a1b0]{background:#ff0}.-bgPrimary-[data-v-f3c7a1b0]{background:#007aff}.-bgWarning-[data-v-f3c7a1b0]{background:#f0ad4e}.-bgSuccess-[data-v-f3c7a1b0]{background:#4cd964}.-bgColorOlive-[data-v-f3c7a1b0]{background:#8dc63f}.-bgColorTips-[data-v-f3c7a1b0]{background:#8cde9b}.-bgColorGrey-[data-v-f3c7a1b0]{background:#8799a3}\r\n\r\n\r\n/* 显示表格中的单元格样式 */.tdLab[data-v-f3c7a1b0]{width:140px;text-align:left}\r\n\r\n\r\n/* 输入表格中的单元格样式 */.tdIpu[data-v-f3c7a1b0]{width:calc(100% - 140px);text-align:left}.-txtLeft-[data-v-f3c7a1b0]{text-align:left}.-txtRight-[data-v-f3c7a1b0]{text-align:right}\r\n\r\n\r\n/* 自制button样式 */.viewToBut[data-v-f3c7a1b0]{color:#fff;font-size:small;height:20px;text-align:center;line-height:20px;border-radius:5px;width:100%;margin:0 5px 0 5px\r\n\t/*上右下左边界*/}\r\n\r\n\r\n/* 上面标题栏样式 */.topTitle[data-v-f3c7a1b0]{font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.viewCell[data-v-f3c7a1b0]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-f3c7a1b0]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em}.-bgSelect-[data-v-f3c7a1b0]{background-color:#3cb371}\r\n\r\n\r\n/* 上面标题栏样式 */.myRadio[data-v-f3c7a1b0]{margin-left:8px}.tdIpu[data-v-f3c7a1b0]{text-align:left;width:calc(90% / 2 - 92px);min-width:40px}.titleIcon[data-v-f3c7a1b0]{margin-left:10px;margin-right:2px}",""]),t.exports=i},d7d7:function(t,i,a){var s=a("a2a0");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a("4f06").default;n("a21c7560",s,!0,{sourceMap:!1,shadowMode:!1})},f91d:function(t,i,a){"use strict";a.r(i);var s=a("3caa"),n=a.n(s);for(var e in s)["default"].indexOf(e)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(e);i["default"]=n.a}}]);