(this["webpackJsonpweb-admin"]=this["webpackJsonpweb-admin"]||[]).push([[0],{28:function(e,a,t){e.exports=t(51)},33:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),c=t.n(r),o=(t(33),t(11)),s=t(3),m=(t(34),t(35),t(18)),i=t(14),u=t(10);function d(){var e=Object(n.useState)({userName:"",password:""}),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(s.f)();var o=function(){u.auth().signInWithEmailAndPassword(t.userName,t.password).then((function(e){console.log(e.user.email),localStorage.setItem("email",e.user.email),c.push("/home")})).catch((function(e){alert("No se pudo iniciar sesion")}))};function d(e){var a=e.target.name,n=e.target.value;r("userName"==a?Object(m.a)(Object(m.a)({},t),{},{userName:n}):Object(m.a)(Object(m.a)({},t),{},{password:n}))}return l.a.createElement("div",{className:"container-fluid vh-100"},l.a.createElement("div",{className:"row justify-content-center h-100"},l.a.createElement("div",{className:"col-md-6 d-flex align-items-center"},l.a.createElement("div",{className:"card shadow w-100",style:{height:"16em"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"usuario"},"Usuario"),l.a.createElement("input",{type:"text",className:"form-control",id:"usuario","aria-describedby":"emailHelp",name:"userName",onChange:d})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Password"},"Contrase\xf1a"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",id:"Password",onChange:d})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-2"},"Ingresar")))))))}function b(){var e=Object(s.f)();return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(o.b,{className:"navbar-brand",to:"/home"},"Empresa"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle my-2 my-lg-0",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},localStorage.getItem("email")),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l.a.createElement(o.b,{className:"dropdown-item",onClick:function(){u.auth().signOut().then((function(){e.push("/")})).catch((function(e){}))}},"Cerrar sesion")))))}function p(e){var a=e.userData,t=e.questions;return Object(n.useEffect)((function(){console.log(t)}),[t]),l.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"".concat(null===a||void 0===a?void 0:a.name," ").concat(null===a||void 0===a?void 0:a.lastName)),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h3",null,"Preguntas de seleccion multiple"),l.a.createElement("ul",null,Object.values(null===a||void 0===a?void 0:a.answers).map((function(e,a){return l.a.createElement("li",null,a+1,"-",Array.isArray(t)?t[a+1].question:"",Array.isArray(t)?Object.entries(t[a+1].options).map((function(a,t){return l.a.createElement("ul",null,e.option===a[0]?1!==e.rating?l.a.createElement("li",{className:"bg-danger"},a[0]," - ",a[1]):l.a.createElement("li",{className:"bg-success"},a[0]," - ",a[1]):l.a.createElement("li",null,a[0]," - ",a[1]))})):"")})))))))}function E(e){var a=e.UsersData,t=e.questions,r=Object(n.useState)({lastName:"",name:"",answers:[{rating:0,option:""}]}),c=Object(i.a)(r,2),o=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{userData:o,questions:t}),l.a.createElement("div",{className:"table-responsive-lg"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Nombre"),l.a.createElement("th",{scope:"col"},"Apellido"),l.a.createElement("th",{scope:"col"},"Calificacion"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,Object.values(a).map((function(e,a){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},a+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,(t=e.answers,Object.values(t).map((function(e){return e})).map((function(e){return e.rating})).reduce((function(e,a){return e+a})))),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){s(e)}},"Ver mas")));var t}))))))}function v(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),o=Object(i.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){var e=u.database().ref();e.child("users").on("value",(function(e){r(e.val())})),e.child("questions").on("value",(function(e){m(e.val())}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement("div",{className:"container mt-4"},l.a.createElement("h3",null,"Calificaciones de usuarios"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,{UsersData:t,questions:s})))))}var g=function(){return Object(n.useEffect)((function(){fetch("https://vr-web-admin.firebaseio.com/questions.json")}),[]),l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/home"},l.a.createElement(v,null)),l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(d,null)),l.a.createElement(o.a,{path:"*"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.initializeApp({apiKey:"AIzaSyA3Gkt6AcTUQnbipSfIOEsD3Q9-a-OCosY",authDomain:"vr-web-admin.firebaseapp.com",databaseURL:"https://vr-web-admin.firebaseio.com",projectId:"vr-web-admin",storageBucket:"vr-web-admin.appspot.com",messagingSenderId:"1043041595425",appId:"1:1043041595425:web:edeb929f4faccc32bc7360"}),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.1a4884a9.chunk.js.map