(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"+3C/":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),s=r(a("d6i3")),u=r(a("CLrh")),c={namespace:"systemLogger",state:{result:{}},effects:{query:s.default.mark(function e(t,a){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,t.callback,n=a.call,c=a.put,e.next=4,n(u.default.systemLogger.list,r);case 4:return l=e.sent,e.next=7,c({type:"save",payload:l.result});case 7:case"end":return e.stop()}},e)}),queryById:s.default.mark(function e(t,a){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,c=a.call,e.next=4,c(u.default.systemLogger.list,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),insert:s.default.mark(function e(t,a){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,c=a.call,e.next=4,c(u.default.systemLogger.saveOrUpdate,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),remove:s.default.mark(function e(t,a){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,c=a.call,a.put,e.next=4,c(u.default.systemLogger.remove,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,n.default)({},e,{result:(0,n.default)({},t.payload)})}}},l=c;t.default=l}}]);