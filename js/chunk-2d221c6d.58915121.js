(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221c6d"],{cc90:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c={class:"section__title"};function s(t,e,n,s,i,d){var l=Object(o["F"])("TodoList");return Object(o["x"])(),Object(o["i"])(o["a"],null,[Object(o["j"])("h1",c,Object(o["H"])(d.title),1),Object(o["m"])(l,{list:d.sorted},null,8,["list"])],64)}n("99af"),n("4e82");var i=n("ed08"),d=n("0d3f"),l={components:{TodoList:d["a"]},computed:{list:function(){return this.$store.getters.completed},title:function(){return this.list.length?"You have completed ".concat(this.list.length," todo").concat(Object(i["a"])(this.list)):"You haven't completed any todos yet"},sorted:function(){return this.list.sort((function(t,e){return e.dateCompleted-t.dateCompleted}))}}},r=n("6b0d"),u=n.n(r);const a=u()(l,[["render",s]]);e["default"]=a}}]);
//# sourceMappingURL=chunk-2d221c6d.58915121.js.map