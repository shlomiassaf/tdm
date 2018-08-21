(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(l,n,t){"use strict";t.r(n);var e=t(0),a=t(222),u=function(){return function(l){l.addNavItem({title:"Orders",domain:"northwind",routerLink:{routerLink:["./northwind-app/orders"]}}),l.addNavItem({title:"Customers",domain:"northwind",routerLink:{routerLink:["./northwind-app/customers"]}}),l.addNavItem({title:"Employees",domain:"northwind",routerLink:{routerLink:["./northwind-app/employees"]}})}}(),b=t(227),r=t(205),i=t(202),o=t(226),c=t(206),d=t(193),s=t(11),m=t(233),p={customers:{query:function(){return m.a.query()},columns:["CustomerID","ContactName","ContactTitle","Country"]},employees:{query:function(){return m.b.query()},columns:["EmployeeID","FirstName","LastName","Title"]},orders:{query:function(){return m.c.query()},columns:["OrderID","OrderDate"]}},h=function(){function l(l,n){var t=this;this.activeRoute=l,this.router=n,this.dataSource=new a.a([]),this._subs=l.paramMap.subscribe(function(l){return t.onListTypeChange(l.get("listType"))})}return l.prototype.onListTypeChange=function(l){if(l){if(this.listType!==l)switch(l){case"customers":case"employees":case"orders":this.listType=l,this.collection=p[l].query(),this.columns=p[l].columns,this.dataSource.updateSource(this.collection.$rc.self$);break;default:this.router.navigate(["/page-404"])}}else this.router.navigate(["./orders"],{relativeTo:this.activeRoute,replaceUrl:!0})},l.prototype.ngOnDestroy=function(){this._subs.unsubscribe()},l}(),f=function(){function l(l){this.topNavService=l,l.pushDomain("northwind")}return l.prototype.ngOnDestroy=function(){this.topNavService.popDomain()},l}(),g=t(67),w=e.Ra({encapsulation:2,styles:[],data:{}});function y(l){return e.nb(0,[(l()(),e.Ta(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.Sa(1,212992,null,0,s.q,[s.b,e.R,e.j,[8,null],e.h],null,null)],function(l,n){l(n,1,0)},null)}var x=e.Pa("northwind-app-domain",f,function(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,1,"northwind-app-domain",[],null,null,null,y,w)),e.Sa(1,180224,null,0,f,[g.a],null,null)],null,null)},{},{},[]),k=t(138),S=t(45),v=t(5),j=t(27),R=t(4),T=(k.l,e.Ra({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-child,mat-footer-cell:first-child,mat-header-cell:first-child{padding-left:24px}[dir=rtl] mat-cell:first-child,[dir=rtl] mat-footer-cell:first-child,[dir=rtl] mat-header-cell:first-child{padding-left:0;padding-right:24px}mat-cell:last-child,mat-footer-cell:last-child,mat-header-cell:last-child{padding-right:24px}[dir=rtl] mat-cell:last-child,[dir=rtl] mat-footer-cell:last-child,[dir=rtl] mat-header-cell:last-child{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-child,td.mat-footer-cell:first-child,th.mat-header-cell:first-child{padding-left:24px}td.mat-cell:last-child,td.mat-footer-cell:last-child,th.mat-header-cell:last-child{padding-right:24px}"],data:{}}));function N(l){return e.nb(2,[e.jb(402653184,1,{_rowOutlet:0}),e.jb(402653184,2,{_headerRowOutlet:0}),e.jb(402653184,3,{_footerRowOutlet:0}),(l()(),e.Ta(3,16777216,null,null,1,null,null,null,null,null,null,null)),e.Sa(4,16384,[[2,4]],0,S.s,[e.R,e.k],null,null),(l()(),e.Ta(5,16777216,null,null,1,null,null,null,null,null,null,null)),e.Sa(6,16384,[[1,4]],0,S.q,[e.R,e.k],null,null),(l()(),e.Ta(7,16777216,null,null,1,null,null,null,null,null,null,null)),e.Sa(8,16384,[[3,4]],0,S.r,[e.R,e.k],null,null)],null,null)}k.k;var D=e.Ra({encapsulation:2,styles:[],data:{}});function q(l){return e.nb(2,[(l()(),e.Ta(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.Sa(1,147456,null,0,S.c,[e.R],null,null)],null,null)}k.g;var C=e.Ra({encapsulation:2,styles:[],data:{}});function O(l){return e.nb(2,[(l()(),e.Ta(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.Sa(1,147456,null,0,S.c,[e.R],null,null)],null,null)}k.d;var K=e.Ra({encapsulation:2,styles:[],data:{}});function L(l){return e.nb(2,[(l()(),e.Ta(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.Sa(1,147456,null,0,S.c,[e.R],null,null)],null,null)}k.i;var _=t(17),z=t(34),F=t(196),$=t(194),I=[[".tdm-app {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1; }\n\n.tdm-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n\n.tdm-navbar .title {\n    margin-right: 25px; }\n\nmain {\n  height: 100%;\n  width: 100%; }\n\nmain .main-view {\n    flex: 1;\n    height: 100%;\n    width: 100%; }\n\nmain .main-view router-outlet + * {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%; }\n\n.tdm-top-nav-link img {\n  height: 26px;\n  vertical-align: middle;\n  margin: 0 4px 3px 0; }\n\n.tdm-top-nav-link.active {\n  background: rgba(0, 0, 0, 0.1); }\n"]],E=e.Ra({encapsulation:2,styles:I,data:{}});function A(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.Sa(1,16384,null,0,k.e,[S.d,e.k],null,null),(l()(),e.lb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit)})}function B(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.Sa(1,16384,null,0,k.a,[S.d,e.k],null,null),(l()(),e.lb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit[n.parent.context.$implicit])})}function M(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,11,null,null,null,null,null,null,null)),e.Sa(1,16384,null,3,k.c,[],{name:[0,"name"]},null),e.jb(335544320,5,{cell:0}),e.jb(335544320,6,{headerCell:0}),e.jb(335544320,7,{footerCell:0}),e.ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),e.Ka(0,null,null,2,null,A)),e.Sa(7,16384,null,0,k.f,[e.N],null,null),e.ib(2048,[[6,4]],S.j,null,[k.f]),(l()(),e.Ka(0,null,null,2,null,B)),e.Sa(10,16384,null,0,k.b,[e.N],null,null),e.ib(2048,[[5,4]],S.b,null,[k.b])],function(l,n){l(n,1,0,n.context.$implicit)},null)}function X(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,q,D)),e.ib(6144,null,S.k,null,[k.g]),e.Sa(2,49152,null,0,k.g,[],null,null)],null,null)}function J(l){return e.nb(0,[(l()(),e.Ta(0,16777216,null,null,4,"mat-row",[["class","element-row mat-ripple mat-row"],["matRipple",""],["role","row"]],[[2,"mat-ripple-unbounded",null],[2,"expanded",null]],[[null,"click"]],function(l,n,t){var a=!0;"click"===n&&(a=!1!==e.db(l,4).onClick()&&a);return a},L,K)),e.ib(6144,null,S.m,null,[k.i]),e.Sa(2,212992,null,0,R.x,[e.k,e.z,_.a,[2,R.m],[2,z.a]],null,null),e.Sa(3,49152,null,0,k.i,[],null,null),e.Sa(4,16384,null,0,F.a,[e.R],{cdkDetailRow:[0,"cdkDetailRow"],template:[1,"template"]},null),(l()(),e.Ka(0,null,null,0))],function(l,n){var t=n.component;l(n,2,0),l(n,4,0,n.context.$implicit,t.tpl)},function(l,n){l(n,0,0,e.db(n,2).unbounded,e.db(n,4).expended)})}function P(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,14,"mat-table",[["class","mat-table"]],null,null,null,N,T)),e.Sa(1,2342912,[["table",4]],4,k.k,[e.s,e.h,e.k,[8,null],[2,j.b]],{dataSource:[0,"dataSource"]},null),e.jb(603979776,1,{_contentColumnDefs:1}),e.jb(603979776,2,{_contentRowDefs:1}),e.jb(603979776,3,{_contentHeaderRowDefs:1}),e.jb(603979776,4,{_contentFooterRowDefs:1}),e.Sa(6,16384,null,0,$.a,[],{dataSource:[0,"dataSource"]},null),(l()(),e.Ka(16777216,null,null,1,null,M)),e.Sa(8,278528,null,0,v.k,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ka(0,null,null,2,null,X)),e.Sa(10,540672,null,0,k.h,[e.N,e.s],{columns:[0,"columns"]},null),e.ib(2048,[[3,4]],S.l,null,[k.h]),(l()(),e.Ka(0,null,null,2,null,J)),e.Sa(13,540672,null,0,k.j,[e.N,e.s],{columns:[0,"columns"]},null),e.ib(2048,[[2,4]],S.n,null,[k.j])],function(l,n){var t=n.component;l(n,1,0,t.dataSource),l(n,6,0,t.dataSource),l(n,8,0,t.columns),l(n,10,0,t.columns),l(n,13,0,t.columns)},null)}var H=e.Pa("northwind-app",h,function(l){return e.nb(0,[(l()(),e.Ta(0,0,null,null,1,"northwind-app",[],null,null,null,P,E)),e.Sa(1,180224,null,0,h,[s.a,s.l],null,null)],null,null)},{},{},[]),Q=t(10),U=t(36),G=t(21),V=t(9),W=t(96),Y=t(50),Z=t(23),ll=t(94),nl=t(93),tl=t(22),el=t(95),al=t(53),ul=t(81),bl=t(80),rl=t(16),il=t(88),ol=t(57),cl=t(55),dl=t(65),sl=t(46),ml=t(201),pl=t(19),hl=t(41),fl=t(38),gl=t(160),wl=t(140),yl=t(107),xl=t(180),kl=t(106),Sl=t(141),vl=t(139),jl=t(119),Rl=t(175),Tl=t(207),Nl=t(176),Dl=t(204),ql=t(173),Cl=t(171),Ol=t(47),Kl=t(177),Ll=t(170),_l=t(178),zl=t(179),Fl=t(71),$l=t(49),Il=t(26),El=t(172),Al=t(60),Bl=t(90),Ml=t(89),Xl=t(91),Jl=t(64),Pl=t(7);t.d(n,"NorthwindAppModuleNgFactory",function(){return Hl});var Hl=e.Qa(u,[],function(l){return e.ab([e.bb(512,e.j,e.Ea,[[8,[b.a,r.a,i.a,i.b,o.a,c.b,c.a,d.a,x,H]],[3,e.j],e.x]),e.bb(4608,v.n,v.m,[e.u,[2,v.z]]),e.bb(4608,Q.j,Q.i,[Q.d,Q.g]),e.bb(5120,e.b,function(l,n){return[Q.m(l,n)]},[v.d,e.B]),e.bb(4608,U.g,U.g,[]),e.bb(4608,U.w,U.w,[]),e.bb(4608,G.k,G.q,[v.d,e.B,G.o]),e.bb(4608,G.r,G.r,[G.k,G.p]),e.bb(5120,G.a,function(l){return[l]},[G.r]),e.bb(4608,V.c,V.c,[V.i,V.e,e.j,V.h,V.f,e.r,e.z,v.d,j.b]),e.bb(5120,V.j,V.k,[V.c]),e.bb(5120,W.b,W.c,[V.c]),e.bb(4608,R.d,R.d,[]),e.bb(4608,Y.c,Y.c,[]),e.bb(5120,Z.b,Z.c,[V.c]),e.bb(4608,Z.d,Z.d,[V.c,e.r,[2,v.h],[2,Z.a],Z.b,[3,Z.d],V.e]),e.bb(5120,ll.b,ll.g,[V.c]),e.bb(5120,nl.a,nl.b,[V.c]),e.bb(4608,tl.f,R.e,[[2,R.i],[2,R.n]]),e.bb(4608,el.a,el.a,[]),e.bb(5120,al.b,al.c,[V.c]),e.bb(5120,ul.b,ul.a,[[3,ul.b]]),e.bb(5120,bl.b,bl.a,[[3,bl.b]]),e.bb(4608,rl.i,rl.i,[]),e.bb(5120,rl.a,rl.b,[V.c]),e.bb(4608,R.c,R.z,[[2,R.h],_.a]),e.bb(4608,il.a,il.a,[G.c,[2,ol.a]]),e.bb(1073742336,v.c,v.c,[]),e.bb(1073742336,Q.e,Q.e,[]),e.bb(1073742336,j.a,j.a,[]),e.bb(1073742336,cl.b,cl.b,[]),e.bb(1073742336,dl.a,dl.a,[]),e.bb(1073742336,sl.a,sl.a,[]),e.bb(1073742336,ml.a,ml.a,[[2,Q.k],e.B]),e.bb(1073742336,U.t,U.t,[]),e.bb(1073742336,U.r,U.r,[]),e.bb(1073742336,s.p,s.p,[[2,s.w],[2,s.l]]),e.bb(1073742336,G.e,G.e,[]),e.bb(1073742336,G.d,G.d,[]),e.bb(1073742336,pl.g,pl.g,[]),e.bb(1073742336,_.b,_.b,[]),e.bb(1073742336,hl.b,hl.b,[]),e.bb(1073742336,V.g,V.g,[]),e.bb(1073742336,R.n,R.n,[[2,R.f]]),e.bb(1073742336,R.y,R.y,[]),e.bb(1073742336,R.w,R.w,[]),e.bb(1073742336,R.t,R.t,[]),e.bb(1073742336,W.e,W.e,[]),e.bb(1073742336,fl.c,fl.c,[]),e.bb(1073742336,gl.d,gl.d,[]),e.bb(1073742336,wl.a,wl.a,[]),e.bb(1073742336,yl.f,yl.f,[]),e.bb(1073742336,Y.d,Y.d,[]),e.bb(1073742336,xl.c,xl.c,[]),e.bb(1073742336,Z.g,Z.g,[]),e.bb(1073742336,kl.c,kl.c,[]),e.bb(1073742336,Sl.b,Sl.b,[]),e.bb(1073742336,R.o,R.o,[]),e.bb(1073742336,vl.a,vl.a,[]),e.bb(1073742336,jl.b,jl.b,[]),e.bb(1073742336,Rl.c,Rl.c,[]),e.bb(1073742336,Tl.e,Tl.e,[]),e.bb(1073742336,Nl.c,Nl.c,[]),e.bb(1073742336,Dl.a,Dl.a,[]),e.bb(1073742336,ql.c,ql.c,[]),e.bb(1073742336,ll.e,ll.e,[]),e.bb(1073742336,Cl.b,Cl.b,[]),e.bb(1073742336,Ol.c,Ol.c,[]),e.bb(1073742336,Kl.c,Kl.c,[]),e.bb(1073742336,nl.d,nl.d,[]),e.bb(1073742336,Ll.h,Ll.h,[]),e.bb(1073742336,_l.b,_l.b,[]),e.bb(1073742336,zl.c,zl.c,[]),e.bb(1073742336,Fl.d,Fl.d,[]),e.bb(1073742336,el.b,el.b,[]),e.bb(1073742336,$l.d,$l.d,[]),e.bb(1073742336,Il.a,Il.a,[]),e.bb(1073742336,El.j,El.j,[]),e.bb(1073742336,Al.b,Al.b,[]),e.bb(1073742336,al.e,al.e,[]),e.bb(1073742336,ul.c,ul.c,[]),e.bb(1073742336,bl.c,bl.c,[]),e.bb(1073742336,S.p,S.p,[]),e.bb(1073742336,k.l,k.l,[]),e.bb(1073742336,rl.j,rl.j,[]),e.bb(1073742336,R.A,R.A,[]),e.bb(1073742336,R.q,R.q,[]),e.bb(1073742336,Bl.a,Bl.a,[]),e.bb(512,G.n,G.n,[]),e.bb(2048,G.l,null,[G.n]),e.bb(512,G.j,G.j,[G.l]),e.bb(2048,G.b,null,[G.j]),e.bb(512,G.f,G.m,[G.b,e.r]),e.bb(512,G.c,G.c,[G.f]),e.bb(1073742336,Ml.a,Ml.a,[[2,G.c],[2,ol.a]]),e.bb(1073742336,Xl.a,Xl.a,[]),e.bb(1073742336,Jl.a,Jl.a,[]),e.bb(1073742336,Jl.b,Jl.b,[]),e.bb(1073742336,u,u,[g.a]),e.bb(256,G.o,"XSRF-TOKEN",[]),e.bb(256,G.p,"X-XSRF-TOKEN",[]),e.bb(256,yl.a,{separatorKeyCodes:[Pl.g]},[]),e.bb(256,R.g,R.k,[]),e.bb(1024,s.j,function(){return[[{path:"",component:f,children:[{path:"",pathMatch:"full",component:h},{path:":listType",component:h}]}]]},[])])})}}]);