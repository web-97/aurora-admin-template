(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"1r+L":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE")),u=r(t("d6i3")),c=r(t("CLrh")),s={namespace:"org",state:{result:[]},effects:{query:u.default.mark(function e(a,t){var r,n,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(c.default.org.list,r);case 4:return l=e.sent,e.next=7,s({type:"save",payload:l.result});case 7:case"end":return e.stop()}},e)}),queryById:u.default.mark(function e(a,t){var r,n,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,e.next=4,s(c.default.org.list,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),insert:u.default.mark(function e(a,t){var r,n,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,e.next=4,s(c.default.org.saveOrUpdate,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),remove:u.default.mark(function e(a,t){var r,n,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,e.next=4,s(c.default.org.remove,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,n.default)({},e,{result:a.payload})}}},l=s;a.default=l}}]);