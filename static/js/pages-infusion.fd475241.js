(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-infusion"],{"0a88":function(t,e,i){var a=i("92bc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0d510f76",a,!0,{sourceMap:!1,shadowMode:!1})},"0dc8":function(t,e,i){var a=i("3bf9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("da38939e",a,!0,{sourceMap:!1,shadowMode:!1})},"161a":function(t,e,i){"use strict";i.r(e);var a=i("aaad"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"2ae3":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9"),i("a434");var a={data:function(){return{listDoseAll:[{value:0,text:"g"},{value:1,text:"mg"},{value:2,text:"ug"},{value:3,text:"ng"},{value:4,text:"U"}],lsitTime:[{value:0,text:"h"},{value:1,text:"min"}],listNewDrugName:["硝酸甘油","硝普钠","肾上腺素","去甲肾","咪达唑仑","多巴胺","米力农","尼卡地平","乌拉地尔","地佐辛","芬太尼","阿曲库铵","奥曲肽","垂体后叶素","胰岛素","奥美拉唑"],blInputNewDrugNameIsFocus:0,strSelectBtnId:"",strSelectBtnName:"",strDrugDose:0,strDrugWater:50,strAllDrug:0,strDoseNumber:0,strDoseNow1:0,strTimeNow1:0,strTZ:60,strSpeed:0,strNewDrugName:"",blJLtoSD:0,numWidth:"100%"}},onLoad:function(t){isNaN(uni.getStorageSync("infusion"))?(this.strSelectBtnId="",this.strSelectBtnName="",this.strDrugDose=uni.getStorageSync("infusion").strDrugDose,this.strDrugWater=uni.getStorageSync("infusion").strDrugWater,this.strAllDrug=uni.getStorageSync("infusion").strAllDrug,this.strDoseNumber=uni.getStorageSync("infusion").strDoseNumber,this.strDoseNow1=uni.getStorageSync("infusion").strDoseNow1,this.strTimeNow1=uni.getStorageSync("infusion").strTimeNow1,this.strTZ=uni.getStorageSync("infusion").strTZ,this.strSpeed=uni.getStorageSync("infusion").strSpeed,this.strNewDrugName="",this.blJLtoSD=uni.getStorageSync("infusion").blJLtoSD):(this.strSelectBtnId="",this.strSelectBtnName="",this.strDrugDose=0,this.strDrugWater=50,this.strAllDrug=0,this.strDoseNumber=0,this.strDoseNow1=0,this.strTimeNow1=0,this.strTZ=60,this.strSpeed=0,this.strNewDrugName="",this.blJLtoSD=0);var e=uni.getStorageSync("infusion_Favorite");isNaN(e)?this.infusion_Favorite=e:this.infusion_Favorite=[]},methods:{setDoseForDrug:function(t){this.strDrugDose=t,this.modalName=null,("U"==this.listDoseAll[t].text||"U"==this.listDoseAll[this.strDoseNow1].text)&&(this.strDoseNow1=t),0==this.blJLtoSD?this.gotoCalc():this.gotoCalcForSpeedToDose()},setJL1:function(t){this.strDoseNow1=t,this.modalName=null,("U"==this.listDoseAll[t].text||"U"==this.listDoseAll[this.strDrugDose].text)&&(this.strDrugDose=t),0==this.blJLtoSD?this.gotoCalc():this.gotoCalcForSpeedToDose()},setSJ2:function(t){this.strTimeNow1=t,this.modalName=null,0==this.blJLtoSD?this.gotoCalc():this.gotoCalcForSpeedToDose()},setDoseOfAdminUnit1:function(t){this.strDoseNow1=t,this.gotoCalcForSpeedToDose()},setDoseOfAdminUnit2:function(t){this.strTimeNow1=t,this.gotoCalcForSpeedToDose()},setJLtoSD:function(t){this.blJLtoSD=t.currentTarget.dataset.var},inpuNumChange:function(t){0==this.blJLtoSD?this.gotoCalc():this.gotoCalcForSpeedToDose()},gotoCalc:function(t){var e=this.listDoseAll[this.strDrugDose].text,i=this.listDoseAll[this.strDoseNow1].text,a=this.gotoNg(Number(this.strDoseNumber),i),n=Number(this.strTZ),s=this.gotoNg(Number(this.strAllDrug),e),r=Number(this.strDrugWater),o=s/r,l=0;l="h"==this.lsitTime[this.strTimeNow1].text?a*n:60*a*n;var c=l/o;0!=c&0==c.toFixed(2)?this.strSpeed="<0.01":this.strSpeed=c.toFixed(2),uni.setStorageSync("infusion",this.$data)},gotoNg:function(t,e){var i=Number(t);switch(e){case"g":return 1e9*i;case"mg":return 1e6*i;case"ug":return 1e3*i;case"ng":return i;default:return i}},ngGotoNowDose:function(t,e){var i=Number(t);switch(e){case"g":return i/1e9;case"mg":return i/1e6;case"ug":return i/1e3;case"ng":return i;default:return i}},gotoCalcForSpeedToDose:function(e){var i=this.listDoseAll[this.strDrugDose].text,a=this.listDoseAll[this.strDoseNow1].text,n=this.gotoNg(Number(this.strAllDrug),i),s=Number(this.strDrugWater),r=Number(this.strSpeed),o=n/s,l=this.ngGotoNowDose(Number(o*r),a),c=Number(this.strTZ),u=0;switch(this.lsitTime[this.strTimeNow1].text){case"h":u=l/c;break;default:u=l/c/60;break}0!=u&0==u.toFixed(2)?this.strDoseNumber="<0.01":this.strDoseNumber=u.toFixed(2),t("log",this.$data," at pages/infusion.vue:500"),uni.setStorageSync("infusion",this.$data)},gotoNewOrDelFavorit:function(t){var e=this;switch(t.currentTarget.dataset.name){case"new":if(""==this.strNewDrugName)return void uni.showToast({title:"请输入新增的药名",icon:"error",duration:1e3});var i={id:Date.now(),name:this.strNewDrugName,strDrugDose:this.strDrugDose,strDrugWater:this.strDrugWater,strAllDrug:this.strAllDrug,strDoseNumber:this.strDoseNumber,strDoseNow1:this.strDoseNow1,strTimeNow1:this.strTimeNow1,strTZ:this.strTZ,strSpeed:this.strSpeed,blJLtoSD:this.blJLtoSD};if(isNaN(this.infusion_Favorite)){var a=this.infusion_Favorite;a.push(i),this.infusion_Favorite=a,uni.setStorageSync("infusion_Favorite",this.infusion_Favorite)}else this.infusion_Favorite=[i],uni.setStorageSync("infusion_Favorite",this.infusion_Favorite);uni.showToast({title:"成功新增["+this.strNewDrugName+"]",icon:"success",duration:1e3}),this.strNewDrugName="",this.strSelectBtnId="",this.strSelectBtnName="";break;case"del":if(""==this.strSelectBtnId)return void uni.showToast({title:"请先选中再删除",icon:"error",duration:1e3});uni.showModal({title:"询问",content:"您确定要删除["+this.strSelectBtnName+"]吗?",success:function(t){if(t.confirm){var i=e.delArrayReturnNewArray(e.infusion_Favorite,e.strSelectBtnId,1);e.infusion_Favorite=i,e.strSelectBtnId="",e.strSelectBtnName="",uni.setStorageSync("infusion_Favorite",e.infusion_Favorite),uni.showToast({title:"已删除",icon:"success",duration:1e3})}}});break;case"check":this.blInputNewDrugNameIsFocus=1}},delArrayReturnNewArray:function(t,e,i){for(var a=null,n=0;n<t.length;n++)Number(t[n].id)!=Number(e)||(a=n);return t.splice(a,i),t},btnToFavoriteTap:function(t){this.strSelectBtnId==t.currentTarget.dataset.id?(this.strSelectBtnId="",this.strSelectBtnName=""):(this.strSelectBtnId=t.currentTarget.dataset.id,this.strSelectBtnName=t.currentTarget.dataset.name,this.gotoGiftToPage(this.infusion_Favorite,t.currentTarget.dataset.id))},gotoGiftToPage:function(t,e){for(var i=0;i<t.length;i++)t[i].id==e&&(this.strDrugDose=t[i].strDrugDose,this.strDrugWater=t[i].strDrugWater,this.strAllDrug=t[i].strAllDrug,this.strDoseNumber=t[i].strDoseNumber,this.strDoseNow1=t[i].strDoseNow1,this.strTimeNow1=t[i].strTimeNow1,this.strTZ=t[i].strTZ,this.strSpeed=t[i].strSpeed,this.blJLtoSD=t[i].blJLtoSD)},inputNewDrugNameFocus:function(t){this.blInputNewDrugNameIsFocus=1},inputNewDrugNameBlur:function(t){},btnNewDrugToInput:function(t){this.strNewDrugName=t.currentTarget.dataset.name,this.blInputNewDrugNameIsFocus=0}}};e.default=a}).call(this,i("0de9")["log"])},"3bf9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".myTable[data-v-10f15b9e]{\r\n\t/* display: flex; */color:#00f;margin:8px;\r\n\t/* margin-right: 8px; */\r\n\t/* justify-content:flex-end; */\r\n\t/* text-align: center; */\r\n\t/* margin-top: 8px; */line-height:2em;border-radius:3px;border:transparent}.viewIpu[data-v-10f15b9e]{display:flex;justify-content:flex-start}.showLab[data-v-10f15b9e]{width:145px;text-align:left}.showIpu[data-v-10f15b9e]{width:calc(100% - 145px);text-align:left}.viewHome[data-v-10f15b9e]{\t\r\n    /* position: relative;\r\n\tfloat: left;\r\n\tleft: 50%;\t */max-width:500px;margin:0 auto;width:500px}.viewNext[data-v-10f15b9e]{\r\n\t/* float: left; */\r\n\t/* position: relative;\t\r\n\tleft: -50%; */bottom:var(--window-bottom);margin-bottom:10px}.weui-input[data-v-10f15b9e]{border:1px solid #66cdaa;width:100%;margin-left:2px;margin-right:2px;border-radius:3px}\r\n\r\n\r\n/*单位显示内容 */.labSmall[data-v-10f15b9e]{font-size:xx-small;color:green;margin-left:.2rem}\r\n\r\n\r\n/* 参考内容 */.ckViewButton[data-v-10f15b9e]{font-size:xx-small;line-height:1.2rem;color:#000;margin:%?20?%;margin-bottom:%?20?%}\r\n\r\n\r\n/* 线条样式 */.line[data-v-10f15b9e]{width:100%;height:%?2?%;background:#8a2be2;margin-top:%?10?%}\r\n\r\n\r\n/* 标题栏样式 */.showTitle[data-v-10f15b9e]{margin-top:42px;margin-bottom:0;background:green;color:#fff;border-radius:5px 5px 0 0!important;margin-left:10px;margin-right:10px}\r\n\r\n\r\n/* 署名内容 */.textShowName[data-v-10f15b9e]{color:#00f;font-size:xx-small;text-align:right;margin:10px;vertical-align:text-bottom}.viewget[data-v-10f15b9e]{margin-left:%?10?%;margin-right:%?10?%;margin-top:%?10?%;color:#00f;text-align:left}\r\n\r\n\r\n/* 文本的上标与下标 */sup[data-v-10f15b9e]{font-size:%?20?%;vertical-align:text-top}sub[data-v-10f15b9e]{font-size:%?20?%;vertical-align:text-bottom}.viewButton[data-v-10f15b9e]{\r\n\t/* display: flex;\t\t\t\r\n\t\tjustify-content:space-around;\t\t\r\n\t\twidth: 90%; \r\n\t\tmargin-bottom: 0rpx;\r\n\t\tmargin-top: 10rpx; */display:flex;flex-direction:row;justify-content:center;\r\n\t/* margin-top: 10px;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px; */margin:10px}.viewBackground[data-v-10f15b9e]{background-color:#e6e6fa;border-radius:3px}.mybutton[data-v-10f15b9e]{margin-left:1px;margin-right:1px;height:22.39px;font-size:xx-small\r\n\t/* width:70px; */}\r\n\r\n\r\n/* 显示结果区样式 */.showReturn[data-v-10f15b9e]{margin-left:0;margin-right:0;border:solid 1px green;border-radius:0 0 5px 5px;margin-left:10px;margin-right:10px}.-txtCenter-[data-v-10f15b9e]{text-align:center}\r\n\r\n\r\n/* 图标样式 */.-bgColorMoccasin-[data-v-10f15b9e]{background:#ffe4b5}.-bgColorYellow-[data-v-10f15b9e]{background:#ff0}.-bgPrimary-[data-v-10f15b9e]{background:#007aff}.-bgWarning-[data-v-10f15b9e]{background:#f0ad4e}.-bgSuccess-[data-v-10f15b9e]{background:#4cd964}.-bgColorOlive-[data-v-10f15b9e]{background:#8dc63f}.-bgColorTips-[data-v-10f15b9e]{background:#8cde9b}.-bgColorGrey-[data-v-10f15b9e]{background:#8799a3}\r\n\r\n\r\n/* 显示表格中的单元格样式 */.tdLab[data-v-10f15b9e]{width:140px;text-align:left}\r\n\r\n\r\n/* 输入表格中的单元格样式 */.tdIpu[data-v-10f15b9e]{width:calc(100% - 140px);text-align:left}.-txtLeft-[data-v-10f15b9e]{text-align:left}.-txtRight-[data-v-10f15b9e]{text-align:right}\r\n\r\n\r\n/* 自制button样式 */.viewToBut[data-v-10f15b9e]{color:#fff;font-size:small;height:20px;text-align:center;line-height:20px;border-radius:5px;width:100%;margin:0 5px 0 5px\r\n\t/*上右下左边界*/}\r\n\r\n\r\n/* 上面标题栏样式 */.topTitle[data-v-10f15b9e]{font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.viewCell[data-v-10f15b9e]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-10f15b9e]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em}.-bgSelect-[data-v-10f15b9e]{background-color:#3cb371}\r\n\r\n\r\n/* 上面标题栏样式 */.-inputHeight33px-[data-v-10f15b9e]{height:33px}\r\n\r\n\r\n/* 选中的按键样式 */.selectBut[data-v-10f15b9e]{color:#fff;font-size:large;text-align:center;border-radius:5px;width:100%;margin:0;background:#007aff\r\n\t/*上右下左边界*/}\r\n\r\n\r\n/* 没选择时的but样式 */.notSelectBut[data-v-10f15b9e]{border:1px solid rgba(0,0,0,.2);background:#f8f8f8;color:#000;font-size:large;text-align:center;border-radius:5px;width:100%;margin:0}\r\n\r\n\r\n/* 放置But的表格样式 */.tableToButJS[data-v-10f15b9e]{top:0;margin:0;width:100%;font-size:large}\r\n\r\n\r\n/* [新增][删除] */.viewOnFavorite[data-v-10f15b9e]{color:#fff;font-size:medium;text-align:center;margin-left:%?5?%;margin-right:%?5?%;width:%?100?%;display:flex;display:table-cell;justify-content:flex-start;border-radius:%?10?%}.viewNewAndDel[data-v-10f15b9e]{width:95%;display:flex;margin:%?20?%;text-align:center;justify-content:center}\r\n\r\n\r\n/* 新增药名输入框 */.viewNewAndDel uni-input[data-v-10f15b9e]{width:90%;border:1px solid #66cdaa;color:green;font-weight:700;text-align:center;font-size:medium}\r\n\r\n\r\n/* 每个药物的按键 */.viewFavorite[data-v-10f15b9e]{border-radius:%?5?%;font-size:medium;min-width:%?80?%;text-align:center;margin:4px;border-radius:5px;color:#fff}.viewFavoriteAll[data-v-10f15b9e]{display:grid;grid-template-columns:auto auto auto auto}.viewNewDrugToInput[data-v-10f15b9e]{display:grid;grid-template-columns:auto auto auto auto}",""]),t.exports=e},"3cd1":function(t,e,i){"use strict";i.r(e);var a=i("2ae3"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"3eb8":function(t,e,i){"use strict";i.r(e);var a=i("9874"),n=i("3cd1");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("f95f");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"10f15b9e",null,!1,a["a"],void 0);e["default"]=o.exports},8112:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"footQrCode",data:function(){return{}}}},"8af4":function(t,e,i){"use strict";i.r(e);var a=i("8112"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"92bc":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";@media screen and (max-width:500px){.hide-on-phone[data-v-39a5be4c]{display:none}}.uni-stat__select[data-v-39a5be4c]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-39a5be4c]{width:100%;flex:1}.uni-stat__actived[data-v-39a5be4c]{width:100%;flex:1}.uni-label-text[data-v-39a5be4c]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-39a5be4c]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-39a5be4c]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-39a5be4c]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-39a5be4c]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-39a5be4c]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-39a5be4c]{font-size:14px;color:#909399}.uni-select__selector[data-v-39a5be4c]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-39a5be4c]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-39a5be4c],\n.uni-select__selector-item[data-v-39a5be4c]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-39a5be4c]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-39a5be4c]:last-child,\n.uni-select__selector-item[data-v-39a5be4c]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-39a5be4c]{opacity:.4;cursor:default}\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-39a5be4c],\n.uni-popper__arrow[data-v-39a5be4c]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-39a5be4c]{-webkit-filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-39a5be4c]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-39a5be4c]{width:100%;color:#333;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-39a5be4c]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-39a5be4c]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),t.exports=e},9477:function(t,e,i){"use strict";var a=i("0a88"),n=i.n(a);n.a},9874:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={crrtHead:i("6158").default,uniIcons:i("be20").default,uniDataSelect:i("c839").default,footQrCode:i("d21e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"viewHome",style:{width:t.numWidth}},[i("v-uni-view",{staticClass:"viewNext"},[i("crrtHead",{attrs:{title:"输液(泵)速度计算"}}),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"compose",size:"20"}}),t._v("药物配置")],1),i("v-uni-view",{staticClass:"showReturn"},[i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"35%"}},[t._v("药物剂量：")]),i("td",{staticClass:"tdIpu",staticStyle:{width:"30%"}},[i("v-uni-input",{staticClass:"weui-input -txtCenter- -inputHeight33px-",attrs:{type:"digit","data-id":"AllDrug",placeholder:"药物剂量("+t.listDoseAll[t.strDrugDose].text+")"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)}},model:{value:t.strAllDrug,callback:function(e){t.strAllDrug=e},expression:"strAllDrug"}})],1),i("td",{staticStyle:{width:"30%"}},[i("uni-data-select",{staticStyle:{color:"blue","margin-left":"5px"},attrs:{localdata:t.listDoseAll,clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setDoseForDrug.apply(void 0,arguments)}},model:{value:t.strDrugDose,callback:function(e){t.strDrugDose=e},expression:"strDrugDose"}})],1)]),i("tr",[i("td",{staticClass:"tdLab -txtRight-"},[t._v("配成药液总量：")]),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input -txtCenter- -inputHeight33px-",attrs:{type:"digit","data-id":"DrugWater",placeholder:"药液总量(ml)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)}},model:{value:t.strDrugWater,callback:function(e){t.strDrugWater=e},expression:"strDrugWater"}})],1),i("td",[i("v-uni-label",{staticStyle:{"margin-left":"5px"}},[t._v("ml")])],1)])]),i("v-uni-view",{staticClass:"-bgColorTips- -txtCenter-",staticStyle:{"border-radius":"0 0 5px 5px !important",color:"blue",height:"1.5em"}},[t._v("将\n\t\t\t\t\t"+t._s(t.strAllDrug)+" "+t._s(t.listDoseAll[t.strDrugDose].text)+" 药剂配成 "+t._s(t.strDrugWater)+" ml 的药液")])],1),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"compose",size:"20"}}),t._v("给药剂量 -（"+t._s(0==t.blJLtoSD?"按剂量算速度":"按速度算剂量")+")")],1),i("v-uni-view",{staticClass:"showReturn",staticStyle:{"margin-bottom":"0px"}},[i("table",{staticClass:"tableToButJS"},[i("tr",{staticStyle:{margin:"0px",width:"100%"}},[i("td",{staticStyle:{margin:"0px",width:"50%"}},[i("v-uni-view",{class:0==t.blJLtoSD?"selectBut":"notSelectBut",attrs:{"data-var":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setJLtoSD.apply(void 0,arguments)}}},[0==t.blJLtoSD?i("uni-icons",{staticStyle:{color:"#fff"},attrs:{type:"checkbox",size:"20"}}):t._e(),t._v("按剂量算速度")],1)],1),i("td",{staticStyle:{margin:"0px",width:"50%"}},[i("v-uni-view",{class:0==t.blJLtoSD?"notSelectBut":"selectBut",attrs:{"data-var":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setJLtoSD.apply(void 0,arguments)}}},[1==t.blJLtoSD?i("uni-icons",{staticStyle:{color:"#fff"},attrs:{type:"checkbox",size:"20"}}):t._e(),t._v("按速度算剂量")],1)],1)])]),0==t.blJLtoSD?i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"20%"}},[t._v("剂量：")]),i("td",{staticClass:"tdIpu",staticStyle:{width:"30%"}},[i("v-uni-input",{staticClass:"weui-input -txtCenter- -inputHeight33px-",attrs:{type:"digit",placeholder:"剂量("+t.listDoseAll[t.strDoseNow1].text+")"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)}},model:{value:t.strDoseNumber,callback:function(e){t.strDoseNumber=e},expression:"strDoseNumber"}})],1),i("td",{staticStyle:{width:"20%"}},[i("uni-data-select",{staticStyle:{color:"blue","margin-left":"5px"},attrs:{localdata:t.listDoseAll,clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setJL1.apply(void 0,arguments)}},model:{value:t.strDoseNow1,callback:function(e){t.strDoseNow1=e},expression:"strDoseNow1"}})],1),i("td",{staticClass:"-txtCenter-",staticStyle:{width:"20%"}},[t._v("/ kg /")]),i("td",{staticStyle:{width:"20%"}},[i("uni-data-select",{staticStyle:{color:"blue","margin-left":"5px"},attrs:{localdata:t.lsitTime,clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setSJ2.apply(void 0,arguments)}},model:{value:t.strTimeNow1,callback:function(e){t.strTimeNow1=e},expression:"strTimeNow1"}})],1)]),i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"30%"}},[t._v("体重：")]),i("td",[i("v-uni-input",{staticClass:"weui-input -txtCenter- -inputHeight33px-",attrs:{type:"digit",placeholder:"体重(kg)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)}},model:{value:t.strTZ,callback:function(e){t.strTZ=e},expression:"strTZ"}})],1),i("td",{staticClass:"tdLab"},[i("v-uni-label",{staticStyle:{"margin-left":"5px"}},[t._v("kg")])],1)])]):i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"20%"}},[t._v("速度：")]),i("td",{staticClass:"tdIpu",staticStyle:{width:"30%"}},[i("v-uni-input",{staticClass:"weui-input -txtCenter- -inputHeight33px-",attrs:{type:"digit",placeholder:"速度(ml/h)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)}},model:{value:t.strSpeed,callback:function(e){t.strSpeed=e},expression:"strSpeed"}})],1),i("td",{staticClass:"tdLab -txtCenter-",staticStyle:{width:"20px"}},[i("v-uni-label",{staticStyle:{"margin-left":"5px"}},[t._v("ml/h")])],1)]),i("tr",[i("td",{staticClass:"tdLab -txtRight-"},[t._v("体重：")]),i("td",[i("v-uni-input",{staticClass:"weui-input -txtCenter- -inputHeight33px-",attrs:{type:"digit",placeholder:"体重(kg)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)}},model:{value:t.strTZ,callback:function(e){t.strTZ=e},expression:"strTZ"}})],1),i("td",{staticClass:"tdLab"},[i("v-uni-label",{staticStyle:{"margin-left":"5px"}},[t._v("kg")])],1)])])]),i("v-uni-view"),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"chat",size:"20"}}),t._v("计算结果")],1),i("v-uni-view",{staticClass:"showReturn"},[0==t.blJLtoSD?i("v-uni-view",[i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab -txtRight-"},[t._v("输液速度为：")]),i("td",{staticClass:"-txtCenter-",staticStyle:{width:"calc(80% - 120px)"}},[t._v(t._s(t.strSpeed))]),i("td",{staticClass:"-txtCenter-",staticStyle:{width:"60px"}},[t._v("ml/h")])])])]):i("v-uni-view",[i("table",{staticClass:"myTable",staticStyle:{"margin-left":"0px"}},[i("tr",{staticStyle:{"margin-left":"0px"}},[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{"margin-left":"0px"}},[t._v("给药剂量为：")]),i("td",{staticClass:"-txtCenter-",staticStyle:{width:"calc(80% - 180px)"}},[t._v(t._s(t.strDoseNumber))]),i("td",{staticStyle:{width:"20px"}},[i("uni-data-select",{staticStyle:{color:"blue","margin-left":"5px"},attrs:{localdata:t.listDoseAll,clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setDoseOfAdminUnit1.apply(void 0,arguments)}},model:{value:t.strDoseNow1,callback:function(e){t.strDoseNow1=e},expression:"strDoseNow1"}})],1),i("td",{staticClass:"-txtCenter-",staticStyle:{width:"60px"}},[t._v("/ kg /")]),i("td",{staticClass:"tdIpu",staticStyle:{width:"20px"}},[i("uni-data-select",{staticStyle:{color:"blue","margin-left":"5px"},attrs:{localdata:t.lsitTime,clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setDoseOfAdminUnit2.apply(void 0,arguments)}},model:{value:t.strTimeNow1,callback:function(e){t.strTimeNow1=e},expression:"strTimeNow1"}})],1)])])])],1),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"chat",size:"20"}}),t._v("收藏夹")],1),i("v-uni-view",{staticClass:"showReturn"},[i("v-uni-view",{staticClass:"viewFavoriteAll"},t._l(t.infusion_Favorite,(function(e){return i("v-uni-view",{staticClass:"viewFavorite",class:t.strSelectBtnId==e.id?"-bgColorOlive-":"-bgPrimary-",attrs:{"data-id":e.id,"data-index":t.index,"data-name":e.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnToFavoriteTap.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1),i("v-uni-view",{staticClass:"viewNewAndDel"},[i("v-uni-input",{attrs:{type:"text","data-id":"newDrugName",placeholder:"请输入药名(新增并保存当前参数)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inpuNumChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.inputNewDrugNameFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputNewDrugNameBlur.apply(void 0,arguments)}},model:{value:t.strNewDrugName,callback:function(e){t.strNewDrugName=e},expression:"strNewDrugName"}}),i("v-uni-view",{staticClass:"viewOnFavorite -bgPrimary-",attrs:{"data-name":"check"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoNewOrDelFavorit.apply(void 0,arguments)}}},[t._v("选名")]),i("v-uni-view",{staticClass:"viewOnFavorite",class:""==t.strNewDrugName?"-bgColorGrey-":"-bgPrimary-",attrs:{"data-name":"new"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoNewOrDelFavorit.apply(void 0,arguments)}}},[t._v("新增")]),i("v-uni-view",{staticClass:"viewOnFavorite",class:""==t.strSelectBtnId?"-bgColorGrey-":"-bgPrimary-",attrs:{"data-name":"del"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoNewOrDelFavorit.apply(void 0,arguments)}}},[t._v("删除")])],1),1==t.blInputNewDrugNameIsFocus?i("v-uni-view",{staticClass:"viewNewDrugToInput"},t._l(t.listNewDrugName,(function(e){return i("v-uni-view",{staticClass:"viewFavorite -bgSuccess-",staticStyle:{margin:"4px"},attrs:{"data-name":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnNewDrugToInput.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1):t._e()],1),i("footQrCode")],1)],1)},s=[]},aaad:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("7db0"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("c975"),i("99af");var a={name:"uni-stat-select",mixins:[t.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var t=this;this.debounceGet=this.debounce((function(){t.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var t=this.placeholder,e={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return e?t+e:t},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},valueCom:function(t,e){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=null;return function(){for(var a=this,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];i&&clearTimeout(i),i=setTimeout((function(){t.apply(a,s)}),e)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var t="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var e;if(this.collection&&(e=this.getCache()),e||0===e)t=e;else{var i="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(i=this.mixinDatacomResData[this.defItem-1].value),t=i}(t||0===t)&&this.emit(t)}else t=this.valueCom;var a=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=a?this.formatItemName(a):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(i){i.value===t&&(e=i.disable)})),e},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),this.collection&&this.setCache(t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,i=t.value,a=t.channel_code;if(a=a?"(".concat(a,")"):"",this.format){var n="";for(var s in n=this.format,t)n=n.replace(new RegExp("{".concat(s,"}"),"g"),t[s]);return n}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(i,")"):e||"未命名".concat(a)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),i=uni.getStorageSync(this.cacheKey)||{};i[e]=t,uni.setStorageSync(this.cacheKey,i)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};delete e[t],uni.setStorageSync(this.cacheKey,e)}}};e.default=a}).call(this,i("a9ff")["default"])},c1f5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("be20").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-stat__select"},[t.label?i("span",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),i("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":t.current}},[i("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":t.disabled}},[i("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}},[t.current?i("v-uni-view",{staticClass:"uni-select__input-text"},[t._v(t._s(t.current))]):i("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[t._v(t._s(t.typePlaceholder))]),t.current&&t.clear&&!t.disabled?i("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearVal.apply(void 0,arguments)}}}):i("uni-icons",{attrs:{type:t.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),t.showSelector?i("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}}):t._e(),t.showSelector?i("v-uni-view",{staticClass:"uni-select__selector"},[i("v-uni-view",{staticClass:"uni-popper__arrow"}),i("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===t.mixinDatacomResData.length?i("v-uni-view",{staticClass:"uni-select__selector-empty"},[i("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._l(t.mixinDatacomResData,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-select__selector-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change(e)}}},[i("v-uni-text",{class:{"uni-select__selector__disabled":e.disable}},[t._v(t._s(t.formatItemName(e)))])],1)}))],2)],1):t._e()],1)],1)],1)},s=[]},c839:function(t,e,i){"use strict";i.r(e);var a=i("c1f5"),n=i("161a");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("9477");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"39a5be4c",null,!1,a["a"],void 0);e["default"]=o.exports},d21e:function(t,e,i){"use strict";i.r(e);var a=i("e34f"),n=i("8af4");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6c78170e",null,!1,a["a"],void 0);e["default"]=o.exports},e34f:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"logoView",staticStyle:{"text-align":"center","margin-top":"28px","margin-bottom":"10px"}},[e("img",{staticStyle:{width:"70%"},attrs:{src:i("e651")}})])},n=[]},e651:function(t,e,i){t.exports=i.p+"static/img/QRCode.c31c2bf2.gif"},f95f:function(t,e,i){"use strict";var a=i("0dc8"),n=i.n(a);n.a}}]);