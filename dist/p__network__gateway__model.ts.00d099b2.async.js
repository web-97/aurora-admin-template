(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{OuE5:function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE")),u=r(t("d6i3")),c=r(t("CLrh")),l={namespace:"gateway",state:{result:{}},effects:{query:u.default.mark(function e(a,t){var r,n,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,a.callback,n=t.call,l=t.put,e.next=4,n(c.default.gateway.list,r);case 4:return s=e.sent,e.next=7,l({type:"save",payload:s.result});case 7:case"end":return e.stop()}},e)}),remove:u.default.mark(function e(a,t){var r,n,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,l=t.call,t.put,e.next=4,l(c.default.gateway.remove,r);case 4:s=e.sent,n(s);case 6:case"end":return e.stop()}},e)}),insert:u.default.mark(function e(a,t){var r,n,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,l=t.call,t.put,e.next=4,l(c.default.gateway.insert,r);case 4:s=e.sent,n(s);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,n.default)({},e,{result:(0,n.default)({},a.payload)})}}},s=l;a.default=s}}]);