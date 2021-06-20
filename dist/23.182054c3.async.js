(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{IDIB:function(e,l,a){"use strict";var t=a("g09b");Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0,a("+L6B");var n=t(a("2/Rp"));a("7Kak");var s=t(a("9yH6"));a("OaEy");var p=t(a("2fM7"));a("5NDa");var o=t(a("5rEg")),r=t(a("q1tI")),d=new Map;d.set("timer",[{label:"cron\u8868\u8fbe\u5f0f",key:"config.cron",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u6267\u884c\u53c2\u6570\uff08JSON\uff09",key:"config.params",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:3})}]),d.set("spring-event",[{label:"\u63a8\u9001\u4e8b\u4ef6\u7c7b\u578b",key:"config.cron",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:3,placeholder:"\u7c7b\u5168\u540d"})},{label:"\u76d1\u542c\u4e8b\u4ef6\u7c7b\u578b",key:"config.params",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:3,placeholder:"\u7c7b\u5168\u540d"})}]),d.set("device-operation",[{label:"\u64cd\u4f5c",key:"config.operation",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(p.default,null,r.default.createElement(p.default.Option,{value:"ONLINE"},"\u4e0a\u7ebf"),r.default.createElement(p.default.Option,{value:"OFFLINE"},"\u4e0b\u7ebf"),r.default.createElement(p.default.Option,{value:"ENCODE"},"\u7f16\u7801"),r.default.createElement(p.default.Option,{value:"DECODE"},"\u89e3\u7801"),r.default.createElement(p.default.Option,{value:"SEND_MESSAGE"},"\u53d1\u9001\u6d88\u606f"),r.default.createElement(p.default.Option,{value:"HANDLE_MESSAGE"},"\u6865\u63a5\u53d1\u5f80\u8bbe\u5907\u7684\u6d88\u606f"),r.default.createElement(p.default.Option,{value:"REPLY_MESSAGE"},"\u56de\u590d\u5e73\u53f0\u8bbe\u5907\u6d88\u606f"))},{label:"\u4f20\u8f93\u534f\u8bae",key:"config.transport",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(p.default,null,r.default.createElement(p.default.Option,{value:"MQTT"},"MQTT"),r.default.createElement(p.default.Option,{value:"other"},"\u5176\u4ed6"))},{label:"\u8bbe\u5907ID",key:"config.deviceId",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:3,placeholder:"${#deviceId}"})}]),d.set("mqtt-client",[{label:"MQTT\u8fde\u63a5",key:"config.clientId",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(p.default,null,r.default.createElement(p.default.Option,{value:"ONLINE"},"\u5f00\u53d1\u4e2d"))},{label:"\u64cd\u4f5c",key:"config.clientType",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(p.default,null,r.default.createElement(p.default.Option,{value:"consumer"},"\u63a5\u6536\u6d88\u606f"),r.default.createElement(p.default.Option,{value:"producer"},"\u53d1\u9001\u6d88\u606f"))},{label:"\u6d88\u606f\u4f53\u7c7b\u578b",key:"config.payloadType",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(p.default,null,r.default.createElement(p.default.Option,{value:"JSON"},"JSON"),r.default.createElement(p.default.Option,{value:"STRING"},"\u5b57\u7b26\u4e32"),r.default.createElement(p.default.Option,{value:"BINARY"},"BINARY"),r.default.createElement(p.default.Option,{value:"HEX"},"16\u8fdb\u5236\u5b57\u7b26"))},{label:"\u4e3b\u9898\uff08Topic\uff09",key:"config.topics",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:2})},{label:"\u4e3b\u9898\u53d8\u91cf",key:"config.topicVariables",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:3,placeholder:"\u63a5\u6536\u6d88\u606f\u65f6\u6709\u6548: \u4f8b:/topic/{deviceId}/{key},\u4e0b\u6e38\u901a\u8fc7vars\u53d8\u91cf\u83b7\u53d6\u5360\u4f4d\u7b26\u5bf9\u5e94\u7684\u53d8\u91cf."})}]),d.set("sms-sender",[{label:"\u53d1\u4fe1\u4eba",key:"config.senderId",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u6536\u4fe1\u4eba",key:"config.sendTo",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u77ed\u4fe1\u6a21\u7248",key:"config.templateId",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default,{placeholder:"\u77ed\u4fe1\u6a21\u7248\u548c\u77ed\u4fe1\u5185\u5bb9\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a"})},{label:"\u77ed\u4fe1\u5185\u5bb9",key:"config.text",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(o.default.TextArea,{rows:3,placeholder:"\u53d8\u91cf\u63cf\u8ff0\uff1a${#attr[error_stack]},${#attr[error_message]},${#attr[error_type]} "})}]),d.set("data-mapping",[{label:"\u4fdd\u7559\u539f\u5b57\u6bb5",key:"config.keepSourceData",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(s.default.Group,null,r.default.createElement(s.default,{value:!0},"\u662f"),r.default.createElement(s.default,{value:!1},"\u5426"))},{label:"\u8f6c\u6362\u89c4\u5219",key:"config.keepSourceData",styles:{lg:{span:24},md:{span:24},sm:{span:24}},formStyle:{wrapperCol:{span:24},labelCol:{span:24}},component:r.default.createElement(n.default,null,"\u7f16\u8f91")}]),d.set("device-message-consumer",[{label:"\u8bbe\u5907\u578b\u53f7",key:"config.deviceModelId",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)}]),d.set("event-restrict",[{label:"\u5230\u671f\u65f6\u95f4\uff08\u79d2\uff09",key:"config.expireTimeInterval",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u9650\u6d41\u65b9\u5f0f",key:"config.restrictType",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)}]),d.set("http",[{label:"HTTP\u5730\u5740",key:"config.url",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u8bf7\u6c42\u65b9\u5f0f",key:"config.method",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u8bf7\u6c42\u5934",key:"config.headers",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u53c2\u6570",key:"config.params",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,{placeholder:"\u586b\u5199json\u6216\u8005\u8868\u8fbe\u5f0f${#data}"})}]),d.set("script",[{label:"\u811a\u672c\u8bed\u8a00",key:"config.lang",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(o.default,null)},{label:"\u811a\u672c",key:"config.script",styles:{lg:{span:24},md:{span:24},sm:{span:24}},component:r.default.createElement(n.default,null,"\u7f16\u8f91")}]);var m=d;l.default=m}}]);