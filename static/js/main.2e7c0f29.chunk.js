(this["webpackJsonpcontest-helper-web"]=this["webpackJsonpcontest-helper-web"]||[]).push([[0],{168:function(e,t,a){e.exports=a(326)},177:function(e,t,a){},179:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),u=a.n(c),s=a(20),o=(a(177),a(178),a(179),a(330)),l=a(127),i=a(150),m=a(331);function p(){return Object(s.c)((function(e){return e.user}))}var f,d=a(49),b=a(7),E=a.n(b),v=a(25),h=a(12),O=a(17),j=E.a.mark(z),g=E.a.mark(U),w=E.a.mark(D),y="user/signIn",k="user/signOut",x="user/signInCompleted",I="user/signInError",q=Object(h.b)(y),T=Object(h.b)(k),C=Object(h.b)(x),F=Object(h.b)(I),S=Object(h.c)({status:"unauthorized",error:!1},(f={},Object(v.a)(f,T.type,(function(e,t){return{status:"unauthorized",error:!1}})),Object(v.a)(f,C.type,(function(e,t){return{status:"authorized",data:t.payload}})),Object(v.a)(f,F.type,(function(e,t){return{status:"unauthorized",error:!0}})),f));function z(e){var t,a,n;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t.id,n=t.password,r.next=3,Object(O.b)(C({username:"".concat(a,", ").concat(n)}));case 3:case"end":return r.stop()}}),j)}function U(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(y,z);case 2:case"end":return e.stop()}}),g)}function D(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([U()]);case 2:case"end":return e.stop()}}),w)}function R(){var e=Object(s.b)();return{requestSignIn:Object(n.useCallback)((function(t){e(q(t))}),[e]),requestSignOut:Object(n.useCallback)((function(){e(T())}),[e])}}var P="/",A="/signIn",B="/signUp",H="/teams",L="/createTeam",W=function(e){return"".concat(H,"?contest=").concat(e)},J=function(e){return"".concat(L,"?contest=").concat(e)},M=function(e){return"".concat(A,"?signUpSuccess=").concat(e)};function V(){var e,t=p(),a=Object(d.g)(),n=R().requestSignOut;return e="unauthorized"===t.status?[r.a.createElement(l.a,{key:"signIn",type:"primary",onClick:function(){a.push(A)}},"\ub85c\uadf8\uc778")]:[r.a.createElement(i.a,{key:"avatar"},"T"),r.a.createElement(l.a,{key:"signOut",type:"primary",onClick:function(){a.push(P),n()}},"\ub85c\uadf8\uc544\uc6c3")],r.a.createElement(m.a,{title:"Contest Helper",extra:e})}var $=a(45),G=a(327),K=a(328),N=a(332),Q=a(333),X=a(10);var Y,Z=N.a.create()((function(e){var t=e.form,a=R().requestSignIn,n=t.getFieldDecorator;return r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){if(!e){var n=t.id,r=t.password;a({id:n,password:r})}}))}},r.a.createElement(N.a.Item,null,n("id",{rules:[{required:!0,message:"\uc544\uc774\ub514\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}]})(r.a.createElement(Q.a,{prefix:r.a.createElement(X.a,{type:"user"}),placeholder:"\uc544\uc774\ub514"}))),r.a.createElement(N.a.Item,null,n("password",{rules:[{required:!0,message:"\ube44\ubc00\ubc88\ud638\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}]})(r.a.createElement(Q.a.Password,{prefix:r.a.createElement(X.a,{type:"lock"}),placeholder:"\ube44\ubc00\ubc88\ud638"}))),r.a.createElement(N.a.Item,null,r.a.createElement(l.a,{type:"primary",htmlType:"submit"},"\ub85c\uadf8\uc778")),r.a.createElement(N.a.Item,null,"\ud639\uc740 ",r.a.createElement("a",{href:B},"\ud68c\uc6d0\uac00\uc785 \ud558\uae30")))})),_=a(334);function ee(e){var t=e.msg;return r.a.createElement(_.a,{showIcon:!0,message:t,type:"error",banner:!0})}function te(){return new URLSearchParams(Object(d.h)().search)}function ae(e){var t=e.msg;return r.a.createElement(_.a,{showIcon:!0,message:t,type:"success",banner:!0})}function ne(){var e=p(),t=te();return"authorized"===e.status?r.a.createElement(d.a,{to:P}):r.a.createElement(G.a,null,r.a.createElement(K.a,{span:8}),r.a.createElement(K.a,{span:8,style:{marginTop:16}},"unauthorized"===e.status&&e.error&&r.a.createElement(ee,{msg:"\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4"}),t.get("signUpSuccess")&&r.a.createElement(ae,{msg:"\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4"}),r.a.createElement(Z,null)),r.a.createElement(K.a,{span:8}))}var re=E.a.mark(de),ce=E.a.mark(be),ue=E.a.mark(Ee),se="contest/fetchRequested",oe="contest/fetchLoading",le="content/fetchCompleted",ie=Object(h.b)(se),me=Object(h.b)(oe),pe=Object(h.b)(le),fe=Object(h.c)({status:"loading"},(Y={},Object(v.a)(Y,me.type,(function(e,t){return{status:"loading"}})),Object(v.a)(Y,pe.type,(function(e,t){return{status:"finished",data:t.payload}})),Y));function de(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)(me());case 2:return e.next=4,Object(O.b)(pe([{id:"test",title:"Hello",description:"World"}]));case 4:case"end":return e.stop()}}),re)}function be(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(se,de);case 2:case"end":return e.stop()}}),ce)}function Ee(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([be()]);case 2:case"end":return e.stop()}}),ue)}var ve,he=a(329),Oe=a(64);function je(e){var t=e.contest,a=e.visibleAddTeam,n=Object(d.g)();return r.a.createElement("div",null,r.a.createElement("p",null,t.title),r.a.createElement("p",null,t.description),a&&r.a.createElement(l.a,{onClick:function(){n.push(J(t.id))}},"\ud300 \uc0dd\uc131"),r.a.createElement(l.a,{onClick:function(){n.push(W(t.id))}},"\ud300 \ubaa9\ub85d"))}function ge(){var e=p(),t=Object(s.c)((function(e){return e.contest}));return"loading"===t.status?r.a.createElement(he.a,null):0===t.data.length?r.a.createElement(Oe.a,null):r.a.createElement("div",null,t.data.map((function(t){return r.a.createElement(je,{key:t.id,contest:t,visibleAddTeam:"authorized"===e.status})})))}function we(){var e=function(){var e=Object(s.b)();return{requestFetch:Object(n.useCallback)((function(){e(ie())}),[e])}}().requestFetch;return Object(n.useEffect)((function(){e()})),r.a.createElement(ge,null)}var ye,ke=E.a.mark(De),xe=E.a.mark(Re),Ie=E.a.mark(Pe),qe="team/fetchRequested",Te="team/fetchLoading",Ce="team/fetchCompleted",Fe=Object(h.b)(qe),Se=Object(h.b)(Te),ze=Object(h.b)(Ce),Ue=Object(h.c)({status:"loading"},(ve={},Object(v.a)(ve,Se.type,(function(e,t){return{status:"loading"}})),Object(v.a)(ve,ze.type,(function(e,t){return{status:"finished",data:t.payload}})),ve));function De(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,t.next=3,Object(O.b)(Se());case 3:return t.next=5,Object(O.b)(ze([{name:"Test",users:["A","B"]}]));case 5:case"end":return t.stop()}}),ke)}function Re(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(qe,De);case 2:case"end":return e.stop()}}),xe)}function Pe(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Re()]);case 2:case"end":return e.stop()}}),Ie)}function Ae(e){var t=e.member;return r.a.createElement("div",null,r.a.createElement("p",null,"Member: ",t))}function Be(e){var t=e.members;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(Ae,{key:e,member:e})})))}function He(e){var t=e.team;return r.a.createElement("div",null,r.a.createElement("p",null,t.name),r.a.createElement(Be,{members:t.users}))}function Le(){var e=Object(s.c)((function(e){return e.team}));return"loading"===e.status?r.a.createElement(he.a,null):0===e.data.length?r.a.createElement(Oe.a,null):r.a.createElement(r.a.Fragment,null,e.data.map((function(e){return r.a.createElement(He,{key:e.id,team:e})})))}function We(){var e=function(){var e=Object(s.b)();return{fetchRequest:Object(n.useCallback)((function(t){e(Fe(t))}),[e])}}().fetchRequest,t=te();return Object(n.useEffect)((function(){var a=t.get("contest");a&&e(a)})),r.a.createElement(Le,null)}var Je=E.a.mark(Ze),Me=E.a.mark(_e),Ve=E.a.mark(et),$e="signUp/request",Ge="signUp/success",Ke="signUp/error",Ne=Object(h.b)($e),Qe=Object(h.b)(Ge),Xe=Object(h.b)(Ke),Ye=Object(h.c)({status:"none",error:!1},(ye={},Object(v.a)(ye,Qe.type,(function(e,t){return{status:"success"}})),Object(v.a)(ye,Xe.type,(function(e,t){return{status:"none",error:!0}})),ye));function Ze(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,t.id,t.password,t.username,a.next=3,Object(O.b)(Qe());case 3:case"end":return a.stop()}}),Je)}function _e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)($e,Ze);case 2:case"end":return e.stop()}}),Me)}function et(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([_e()]);case 2:case"end":return e.stop()}}),Ve)}var tt,at=N.a.create()((function(e){var t=e.form,a=function(){var e=Object(s.b)();return{requestSignup:Object(n.useCallback)((function(t){return e(Ne(t))}),[e])}}().requestSignup,c=t.getFieldDecorator;return r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){if(!e){var n=t.id,r=t.password,c=t.name;a({id:n,password:r,username:c})}}))}},r.a.createElement(N.a.Item,null,c("name",{rules:[{required:!0,message:"\uc774\ub984\uc740 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}]})(r.a.createElement(Q.a,{placeholder:"\uc774\ub984"}))),r.a.createElement(N.a.Item,null,c("id",{rules:[{required:!0,message:"\uc544\uc774\ub514\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}]})(r.a.createElement(Q.a,{placeholder:"\uc544\uc774\ub514"}))),r.a.createElement(N.a.Item,{hasFeedback:!0},c("password",{rules:[{required:!0,message:"\ube44\ubc00\ubc88\ud638\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"},{validator:function(e,a,n){a&&t.validateFields(["confirm"],{force:!0}),n()}}]})(r.a.createElement(Q.a.Password,{prefix:r.a.createElement(X.a,{type:"lock"}),placeholder:"\ube44\ubc00\ubc88\ud638"}))),r.a.createElement(N.a.Item,{hasFeedback:!0},c("password-recheck",{rules:[{required:!0,message:"\ube44\ubc00\ubc88\ud638 \ud655\uc778\uc740 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"},{validator:function(e,a,n){a&&a!==t.getFieldValue("password")?n("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"):n()}}]})(r.a.createElement(Q.a.Password,{prefix:r.a.createElement(X.a,{type:"lock"}),placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}))),r.a.createElement(N.a.Item,null,r.a.createElement(l.a,{type:"primary",htmlType:"submit"},"\ud68c\uc6d0\uac00\uc785")))}));function nt(){var e=Object(s.c)((function(e){return e.signUp}));return"success"===e.status?r.a.createElement(d.a,{to:M(!0)}):r.a.createElement(G.a,null,r.a.createElement(K.a,{span:8}),r.a.createElement(K.a,{span:8,style:{marginTop:16}},e.error&&r.a.createElement(ee,{msg:"\ud68c\uc6d0\uac00\uc785\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4"}),r.a.createElement(at,null)),r.a.createElement(K.a,{span:8}))}var rt=E.a.mark(dt),ct=E.a.mark(bt),ut=E.a.mark(Et),st="createTeam/request",ot="createTeam/success",lt="createTeam/error",it=Object(h.b)(st),mt=Object(h.b)(ot),pt=Object(h.b)(lt),ft=Object(h.c)({status:"none",error:!1},(tt={},Object(v.a)(tt,mt.type,(function(e,t){return{status:"success"}})),Object(v.a)(tt,pt.type,(function(e,t){return{status:"none",error:!0}})),tt));function dt(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,t.name,t.contact,a.next=3,Object(O.b)(mt());case 3:case"end":return a.stop()}}),rt)}function bt(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(st,dt);case 2:case"end":return e.stop()}}),ct)}function Et(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([bt()]);case 2:case"end":return e.stop()}}),ut)}var vt={mapPropsToFields:function(e){var t=e.contestId;return{contestId:N.a.createFormField({value:t})}}},ht=N.a.create(vt)((function(e){var t=e.form,a=e.contestId,c=function(){var e=Object(s.b)();return{requestCreateTeam:Object(n.useCallback)((function(t){e(it(t))}),[e])}}().requestCreateTeam,u=t.getFieldDecorator;return r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){if(!e){var n=t.name,r=t.contact;c({contestId:a,name:n,contact:r})}}))}},r.a.createElement(N.a.Item,null,u("name",{rules:[{required:!0,message:"\ud300 \uc774\ub984\uc740 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}]})(r.a.createElement(Q.a,{placeholder:"\ud300 \uc774\ub984"}))),r.a.createElement(N.a.Item,null,u("contact",{rules:[{required:!0,message:"\uc5f0\ub77d\ucc98\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}]})(r.a.createElement(Q.a,{prefix:r.a.createElement(X.a,{type:"contacts"}),placeholder:"\uc5f0\ub77d\ucc98"}))),r.a.createElement(N.a.Item,null,r.a.createElement(l.a,{type:"primary",htmlType:"submit"},"\ud300 \uc0dd\uc131")))}));function Ot(){var e=p(),t=te(),a=Object(s.c)((function(e){return e.createTeam}));if("unauthorized"===e.status)return alert("\ub85c\uadf8\uc778 \ud6c4\uc5d0\ub9cc \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),r.a.createElement(d.a,{to:P});var n=t.get("contest");return n?"success"===a.status?r.a.createElement(d.a,{to:W(n)}):r.a.createElement(G.a,null,r.a.createElement(K.a,{span:8}),r.a.createElement(K.a,{span:8,style:{marginTop:16}},a.error&&r.a.createElement(ee,{msg:"\ud300 \uc0dd\uc131\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4"}),r.a.createElement(ht,{contestId:n})),r.a.createElement(K.a,{span:8})):(alert("\ub300\uc0c1 \uacf5\ubaa8\uc804\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"),r.a.createElement(d.a,{to:P}))}var jt=o.a.Header,gt=o.a.Content,wt=function(){return r.a.createElement($.a,{basename:"/contest-helper-web"},r.a.createElement(o.a,null,r.a.createElement(jt,{style:{backgroundColor:"#f5f5f5"}},r.a.createElement(V,null)),r.a.createElement(gt,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:P},r.a.createElement(we,null)),r.a.createElement(d.b,{path:A},r.a.createElement(ne,null)),r.a.createElement(d.b,{path:B},r.a.createElement(nt,null)),r.a.createElement(d.b,{path:H},r.a.createElement(We,null)),r.a.createElement(d.b,{path:L},r.a.createElement(Ot,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var yt=a(163),kt=a(164),xt=a(32),It=Object(xt.combineReducers)({contest:fe,user:S,team:Ue,signUp:Ye,createTeam:ft}),qt=E.a.mark(Tt);function Tt(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Ee(),D(),Pe(),et(),Et()]);case 2:case"end":return e.stop()}}),qt)}var Ct=function(){var e=Object(kt.a)(),t=Object(h.a)({reducer:It,middleware:[e].concat(Object(yt.a)(Object(h.d)())),devTools:!0});return e.run(Tt),t}();u.a.render(r.a.createElement(s.a,{store:Ct},r.a.createElement(wt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[168,1,2]]]);
//# sourceMappingURL=main.2e7c0f29.chunk.js.map