(function(e){function t(t){for(var l,n,i=t[0],s=t[1],c=t[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],l=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(l=!1)}l&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var l={},a={app:0},o=[];function n(t){if(l[t])return l[t].exports;var r=l[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=l,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var l=r("85ec"),a=r.n(l);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var l=r("2b0e"),a=r("cca1"),o=r.n(a),n=(r("8842"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,"background-color":"#491d70","text-color":"#fff","active-text-color":"#ffd04b",mode:"horizontal"}},[r("el-menu-item",{attrs:{index:"1"}},[e._v("Home")])],1),r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"1.5%"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("Dining Staffing Prediction Form")])]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",size:"mini"}},[r("el-form-item",{attrs:{label:"Meal type",prop:"meal",required:""}},[r("el-select",{staticStyle:{"margin-left":"-59%"},attrs:{placeholder:"please select",required:""},model:{value:e.form.meal,callback:function(t){e.$set(e.form,"meal",t)},expression:"form.meal"}},[r("el-option",{attrs:{label:"Breakfast",value:"0"}}),r("el-option",{attrs:{label:"Lunch",value:"1"}}),r("el-option",{attrs:{label:"Dinner",value:"2"}})],1)],1),r("el-form-item",{attrs:{label:"Day",prop:"day",required:""}},[r("el-select",{staticStyle:{"margin-left":"-59%"},attrs:{placeholder:"please select"},model:{value:e.form.day,callback:function(t){e.$set(e.form,"day",t)},expression:"form.day"}},[r("el-option",{attrs:{label:"Sunday",value:"0"}}),r("el-option",{attrs:{label:"Monday",value:"1"}}),r("el-option",{attrs:{label:"Tuesday",value:"2"}}),r("el-option",{attrs:{label:"Wednesday",value:"3"}}),r("el-option",{attrs:{label:"Thursday",value:"4"}}),r("el-option",{attrs:{label:"Friday",value:"5"}}),r("el-option",{attrs:{label:"Saturday",value:"6"}})],1)],1),r("el-form-item",{attrs:{label:"Location",prop:"location",required:""}},[r("el-select",{staticStyle:{"margin-left":"-59%"},attrs:{placeholder:"please select"},model:{value:e.form.location,callback:function(t){e.$set(e.form,"location",t)},expression:"form.location"}},[r("el-option",{attrs:{label:"Buffet",value:"0"}}),r("el-option",{attrs:{label:"The Mix",value:"1"}}),r("el-option",{attrs:{label:"Edge",value:"2"}})],1)],1),r("el-form-item",{attrs:{label:"Week Number",prop:"week",required:""}},[r("el-input",{staticStyle:{width:"40%","margin-left":"-58%"},model:{value:e.form.week,callback:function(t){e.$set(e.form,"week",t)},expression:"form.week"}})],1),r("el-form-item",{attrs:{label:"Year",prop:"year",required:""}},[r("el-input",{staticStyle:{width:"40%","margin-left":"-58%"},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})],1),r("el-form-item",{attrs:{label:"Temperature",prop:"temp",required:""}},[r("el-input",{staticStyle:{width:"40%","margin-left":"-58%"},model:{value:e.form.temp,callback:function(t){e.$set(e.form,"temp",t)},expression:"form.temp"}})],1),r("el-form-item",{attrs:{label:"Snow Amount",prop:"snow",required:""}},[r("el-input",{staticStyle:{width:"40%","margin-left":"-58%"},model:{value:e.form.snow,callback:function(t){e.$set(e.form,"snow",t)},expression:"form.snow"}})],1),r("el-form-item",{attrs:{label:"Precipitation Amount",prop:"prec",required:""}},[r("el-input",{staticStyle:{width:"40%","margin-left":"-58%"},model:{value:e.form.prec,callback:function(t){e.$set(e.form,"prec",t)},expression:"form.prec"}})],1),r("el-form-item",{attrs:{label:"Semester",prop:"semester",required:""}},[r("el-radio-group",{staticStyle:{"margin-left":"-60%"},attrs:{size:"small"},model:{value:e.form.semester,callback:function(t){e.$set(e.form,"semester",t)},expression:"form.semester"}},[r("el-radio",{attrs:{border:"",label:"Fall",value:"1"}}),r("el-radio",{staticStyle:{"margin-left":"-10%"},attrs:{border:"",label:"Spring",value:"0"}})],1)],1),r("el-form-item",{attrs:{label:"Event type",prop:"type"}},[r("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-checkbox-button",{staticStyle:{"margin-left":"-23%"},attrs:{label:"NOAA(Severe weather)",name:"type"}}),r("el-checkbox-button",{attrs:{label:"Football/Holiday Weekend",name:"type"}})],1)],1),r("el-form-item",{staticStyle:{"margin-left":"-25%"},attrs:{size:"large"}},[r("el-button",{staticStyle:{color:"black","background-color":"#FFD100"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("Predict")])],1)],1)],1)],1)}),i=[],s=r("bc3a"),c=r.n(s),u={name:"App",data:function(){return{msg:"",activeIndex:"1",activeIndex2:"1",form:{day:"",meal:"",prec:"",snow:"",type:[],temp:"",year:"",week:"",location:"",semester:""},rules:{day:[{required:!0,message:"Please check your inputs!",trigger:"blur"}],location:[{required:!0,message:"Please select Activity zone",trigger:"blur"}],year:[{required:!0,message:"Please check your inputs",trigger:"blur"}],snow:[{required:!0,message:"Please check your inputs!",trigger:"blur"}],prec:[{required:!0,message:"Please check your inputs!",trigger:"blur"}],temp:[{required:!0,message:"Please check your inputs!",trigger:"blur"}],semester:[{required:!0,message:"Please check your inputs!",trigger:"blur"}],week:[{required:!0,message:"Please check your inputs!",trigger:"blur"}],meal:[{required:!0,message:"Please check your inputs!",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&c.a.post("http://localhost:5000/api/getPredictions",t.form).then((function(e){alert("The predicted customers is: "+e.data)}))}))}}},m=u,p=(r("034f"),r("2877")),f=Object(p["a"])(m,n,i,!1,null,null,null),d=f.exports;l["a"].use(o.a),new l["a"]({el:"#app",render:function(e){return e(d)}})},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.b6751b3c.js.map