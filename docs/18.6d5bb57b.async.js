(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{BVyt:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("q1tI")),r=a("yP6+"),i=r.Guide.Text,u=function(){for(var e=[],t=0;t<50;t++){var a={};a.type="".concat(t),a.value=10,e.push(a)}for(var l=[],u=0;u<50;u++){var o={};o.type="".concat(u),o.value=10,25===u&&(o.value=14),u>25&&(o.value=0),l.push(o)}var d={type:{range:[0,1]},value:{sync:!0}},c={type:{tickCount:3}};return n.default.createElement(r.Chart,{height:600,data:[1],scale:d,padding:[0,0,200,0],forceFit:!0},n.default.createElement(r.View,{data:e,scale:c},n.default.createElement(r.Coord,{type:"polar",startAngle:-9/8*Math.PI,endAngle:1/8*Math.PI,radius:.55,innerRadius:.95}),n.default.createElement(r.Geom,{type:"interval",position:"type*value",color:"rgba(0, 0, 0, 0.09)",size:6}),n.default.createElement(r.Axis,{name:"type",grid:null,line:null,tickLine:null,label:{offset:-20,textStyle:{fontSize:18,fill:"#CBCBCB",textAlign:"center"},formatter:function(e){return"49"===e?50:e}}}),n.default.createElement(r.Axis,{name:"value",visible:!1})),n.default.createElement(r.View,{data:l},n.default.createElement(r.Coord,{type:"polar",startAngle:-9/8*Math.PI,endAngle:1/8*Math.PI,radius:.8,innerRadius:.75}),n.default.createElement(r.Geom,{type:"interval",position:"type*value",color:["value","#3023AE-#53A0FD"],opacity:1,size:6}),n.default.createElement(r.Guide,null,n.default.createElement(i,{position:["50%","65%"],content:"26\xb0",style:{fill:"#262626",fontSize:64,textAlign:"center",textBaseline:"middle"}}))))},o=u;t.default=o}}]);