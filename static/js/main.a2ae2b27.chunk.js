(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactList:"ContactList_contactList__1uuJE",title:"ContactList_title__3zeho",list:"ContactList_list__1h3IQ",text:"ContactList_text__y7jb6",button:"ContactList_button__1y3KY"}},16:function(t,e,n){t.exports={container:"Filter_container__2onki",label:"Filter_label__3wJ9q",fiSearch:"Filter_fiSearch__28lDY",input:"Filter_input__3kwjW"}},22:function(t,e,n){t.exports={text:"Stats_text__3-h76",span:"Stats_span__32jXj"}},34:function(t,e,n){t.exports={container:"App_container__3QeRa"}},49:function(t,e,n){},7:function(t,e,n){t.exports={container:"Form_container__ly1CI",label:"Form_label__1-Ujv",button:"Form_button__1PnQZ",ioIosPhonePortrait:"Form_ioIosPhonePortrait__1hjUL",spanName:"Form_spanName__1wKhS",input:"Form_input__5Xge6"}},77:function(t,e,n){"use strict";n.r(e);var c,a,r,o=n(1),s=n(0),i=n.n(s),u=n(14),l=n.n(u),b=n(3),j=n(2),O=n(8),d=n(4),f=n(36),m=Object(b.b)("contacts/fetchContactRequest"),h=Object(b.b)("contacts/fetchContactSuccess"),p=Object(b.b)("contacts/fetchContactRejected"),_=Object(b.b)("contacts/addContactRequest"),x=Object(b.b)("contacts/addContactSuccess"),v=Object(b.b)("contacts/addContactRejected"),C=Object(b.b)("contacts/deleteContactRequest"),N=Object(b.b)("contacts/deleteContactSuccess"),g=Object(b.b)("contacts/deleteContactRejected"),y=Object(b.b)("contact/filter"),F={filterContacts:y},w=Object(b.c)([],(c={},Object(d.a)(c,h,(function(t,e){return e.payload})),Object(d.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(d.a)(c,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),L=Object(b.c)(!1,(a={},Object(d.a)(a,m,(function(){return!0})),Object(d.a)(a,h,(function(){return!1})),Object(d.a)(a,p,(function(){return!1})),Object(d.a)(a,_,(function(){return!0})),Object(d.a)(a,x,(function(){return!1})),Object(d.a)(a,v,(function(){return!1})),Object(d.a)(a,C,(function(){return!0})),Object(d.a)(a,N,(function(){return!1})),Object(d.a)(a,g,(function(){return!1})),a)),k=Object(b.c)(null,(r={},Object(d.a)(r,p,(function(t,e){return e.payload})),Object(d.a)(r,m,(function(){return null})),Object(d.a)(r,v,(function(t,e){return e.payload})),Object(d.a)(r,g,(function(t,e){return e.payload})),r)),S=Object(b.c)("",Object(d.a)({},y,(function(t,e){return e.payload}))),P=Object(j.c)({items:w,isLoading:L,error:k,filter:S}),R=Object(j.c)({contacts:P}),E=Object(b.a)({reducer:R,middleware:Object(b.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}}),devTools:!1}),I=n(6),q=(n(48),n(49),n(23)),A=n(21),J=n.n(A),Q=n(33),U=n(11),z=n.n(U);z.a.defaults.baseURL="http://localhost:3030";var D=n(35),K=n(10),T=n.n(K),X=n(7),Y=n.n(X);function B(){var t=Object(s.useState)(""),e=Object(q.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)(""),r=Object(q.a)(a,2),i=r[0],u=r[1],l=Object(I.c)((function(t){return t.contacts.items})),b=Object(I.b)(),j=T.a.generate(),O=T.a.generate(),d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a)}},f=function(){c(""),u("")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(t){var e;(t.preventDefault(),l.some((function(t){return t.name===n})))?alert("".concat(n," is alreadi in contacts")):""!==n&&""!==i?(b((e={name:n,number:i},function(t){var n={name:e.name,number:e.number};t(_()),z.a.post("/contacts",n).then((function(e){var n=e.data;return t(x(n))})).catch((function(e){return t(v(e))}))})),f()):alert("Enter name and number please ! ")},children:[Object(o.jsxs)("div",{className:Y.a.container,children:[Object(o.jsxs)("label",{htmlFor:j,className:Y.a.label,children:["Name ",Object(o.jsx)("span",{className:Y.a.spanName,children:"name"})]}),Object(o.jsx)("input",{type:"text",name:"name",id:j,value:n,onChange:d,className:Y.a.input,placeholder:"Enter name",autoComplete:"Off"})]}),Object(o.jsxs)("div",{className:Y.a.container,children:[Object(o.jsxs)("label",{htmlFor:O,className:Y.a.label,children:["Number",Object(o.jsx)("span",{className:Y.a.ioIosPhonePortrait,children:Object(o.jsx)(D.a,{})})]}),Object(o.jsx)("input",{type:"tel",name:"number",id:O,value:i,onChange:d,className:Y.a.input,placeholder:"Enter number"})]}),Object(o.jsx)("button",{type:"submit",className:Y.a.button,children:"Add contact"})]})})}var G=n(16),M=n.n(G);function W(){var t=Object(I.c)((function(t){return t.contacts.Filter})),e=Object(I.b)(),n=T.a.generate();return Object(o.jsxs)("div",{className:M.a.container,children:[Object(o.jsx)("label",{htmlFor:n,className:M.a.label,children:"Find contacts of name"}),Object(o.jsx)("input",{type:"text",value:t,onChange:function(t){return e(F.filterContacts(t.target.value))},id:n,className:M.a.input,placeholder:"Enter name please"})]})}var Z=n(22),H=n.n(Z);function V(){var t=Object(I.c)((function(t){return t.contacts.items.length}));return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:H.a.text,children:["Total contact : ",Object(o.jsx)("span",{className:H.a.span,children:t})]})})}var $=n(12),tt=n.n($);function et(){var t=Object(I.c)((function(t){return function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t.contacts.items,t.contacts.filter)})),e=Object(I.b)();Object(s.useEffect)((function(){e(function(){var t=Object(Q.a)(J.a.mark((function t(e){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(m()),z.a.get("/contacts").then((function(t){return e(h(t.data))})).catch((function(t){return e(p(t.message))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]);var n=function(t){return e(function(t){return function(e){e(C()),z.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(g(t))}))}}(t))};return Object(o.jsx)("ul",{className:tt.a.contactList,children:t.length>0&&t.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(o.jsxs)("li",{className:tt.a.list,children:[Object(o.jsxs)("p",{className:tt.a.text,children:[e," : ",c]}),Object(o.jsx)("button",{className:tt.a.button,type:"button",onClick:function(){return n(a)},children:"delete"})]},a)}))})}var nt=n(34),ct=n.n(nt);function at(){return Object(o.jsxs)("div",{className:ct.a.container,children:[Object(o.jsx)("h3",{style:{textAlign:"center",color:"var(--primary-color)"},children:"Goit-react-hw-07-phonebook"}),Object(o.jsx)("h1",{children:"Phonebook"}),Object(o.jsx)(B,{}),Object(o.jsx)("h2",{children:"Contacts"}),Object(o.jsx)(W,{}),Object(o.jsx)(V,{}),Object(o.jsx)(et,{})]})}l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(I.a,{store:E,children:Object(o.jsx)(at,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a2ae2b27.chunk.js.map