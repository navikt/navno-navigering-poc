(this["webpackJsonpnav-navigering-poc"]=this["webpackJsonpnav-navigering-poc"]||[]).push([[0],{47:function(e,n,t){e.exports=t(98)},97:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var r=t(16),i=t(1),o=t(0),a=t.n(o),l=t(38),s=t.n(l),c=t(8),d=t(6),m=t(99),u=Object(m.a)((function(e,n){switch(n){case"skjulMeny":return Object(d.a)(Object(d.a)({},e),{},{visMeny:!1});case"visMeny":return Object(d.a)(Object(d.a)({},e),{},{visMeny:!0});case"skjulIkoner":return Object(d.a)(Object(d.a)({},e),{},{visIkoner:!1});case"visIkoner":return Object(d.a)(Object(d.a)({},e),{},{visIkoner:!0});case"ikkeVisUndersiderIMeny":return Object(d.a)(Object(d.a)({},e),{},{visMeny:!0,undersiderIMeny:!1});case"visUndersiderIMeny":return Object(d.a)(Object(d.a)({},e),{},{visMeny:!0,undersiderIMeny:!0});case"visBr\xf8dsmuler":return Object(d.a)(Object(d.a)({},e),{},{"visBr\xf8dsmuler":!0});case"skjulBr\xf8dsmuler":return Object(d.a)(Object(d.a)({},e),{},{"visBr\xf8dsmuler":!1});case"skjulUndersiderPaForside":return Object(d.a)(Object(d.a)({},e),{},{undersiderPaForside:!1});case"visUndersiderPaForside":return Object(d.a)(Object(d.a)({},e),{},{undersiderPaForside:!0});case"visFeatured":return Object(d.a)(Object(d.a)({},e),{},{featuredContent:!0});case"skjulFeatured":return Object(d.a)(Object(d.a)({},e),{},{featuredContent:!1})}}),{visMeny:!0,visIkoner:!0,undersiderIMeny:!0,undersiderPaForside:!1,"visBr\xf8dsmuler":!0,featuredContent:!1}),p=Object(c.a)(u,2),v=p[0],g=p[1],k=t(39),h={colors:t.n(k).a},f=t(100),b=t(26),E=i.c.div.withConfig({displayName:"DemoControlls__Wrapper",componentId:"sc-2eg5qb-0"})(["position:absolute;right:0;margin-top:1rem;padding:1rem;display:inline-flex;justify-content:flex-end;z-index:1000;"]),j=i.c.div.withConfig({displayName:"DemoControlls__PopDown",componentId:"sc-2eg5qb-1"})(["position:absolute;padding:1rem;background-color:white;min-width:18rem;border:0.2rem "," solid;filter:drop-shadow(0.2rem 0.2rem 3rem black);"],h.colors.navLimeGronnLighten80),M=i.c.button.withConfig({displayName:"DemoControlls__MenuButton",componentId:"sc-2eg5qb-2"})(["border-radius:50%;background-color:",";border:0.2rem solid ",";padding:0.5rem;opacity:0.6;z-index:10;"],h.colors.navLimeGronnLighten80,h.colors.navLimeGronn),y=i.c.div.withConfig({displayName:"DemoControlls__Grid",componentId:"sc-2eg5qb-3"})(["display:grid;grid-template-columns:repeat(auto-fill,auto);grid-gap:1rem;"]),L=i.c.div.withConfig({displayName:"DemoControlls__CheckBoxStyle",componentId:"sc-2eg5qb-4"})(["font-size:1.2rem;display:flex;align-items:center;input{width:1.3rem;height:1.3rem;margin-right:0.5rem;}"]);function w(e){var n=Object(o.useRef)(Object(b.guid)()).current;return o.createElement(L,null,o.createElement("input",{id:n,type:"checkbox",checked:e.checked,onClick:e.onClick}),o.createElement("label",{htmlFor:n},e.label))}var C=function(){var e=v(),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(o.useState)(!0),a=Object(c.a)(i,2),l=a[0],s=a[1],d=Object(o.useRef)(null);return Object(f.a)(d,(function(){return s(!1)})),o.createElement(E,{ref:d},o.createElement(M,{onClick:function(){return s(!l)}},"DC"),l&&o.createElement(j,null,o.createElement("h2",null,"Demo-controlls:"),o.createElement(y,null,o.createElement(w,{onClick:function(){return r(t.visMeny?"skjulMeny":"visMeny")},label:"Vis meny",checked:t.visMeny}),o.createElement(w,{onClick:function(){return r(t.visIkoner?"skjulIkoner":"visIkoner")},label:"Vis ikoner",checked:t.visIkoner}),o.createElement(w,{onClick:function(){r(t.undersiderIMeny?"ikkeVisUndersiderIMeny":"visUndersiderIMeny")},label:"Vis underpunkter i meny",checked:t.undersiderIMeny}),o.createElement(w,{onClick:function(){return r(t.visBr\u00f8dsmuler?"skjulBr\xf8dsmuler":"visBr\xf8dsmuler")},label:"Vis br\xf8dsmuler",checked:t.visBr\u00f8dsmuler}),o.createElement(w,{onClick:function(){return r(t.undersiderPaForside?"skjulUndersiderPaForside":"visUndersiderPaForside")},label:"Vis undersider p\xe5 forside",checked:t.undersiderPaForside}),o.createElement(w,{onClick:function(){return r(t.featuredContent?"skjulFeatured":"visFeatured")},label:"Vis topp tre p\xe5 forside",checked:t.featuredContent}))))};var O=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 23",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M21.5 5.56a5 5 0 11-10.001 0 5 5 0 0110.001 0v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.5 4.56a.5.5 0 100 1 .5.5 0 000-1z",fill:"#000"}),o.createElement("path",{d:"M23.5 22.5v-16",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M16.689 20.516a2.56 2.56 0 01-2.56-2.56c0-2.643-3.107-3.211-4.478-1.73-1.368-1.481-4.479-.913-4.479 1.73A2.559 2.559 0 01.5 19.396c1.92 4.314 7.297 3.515 9.151.665 1.853 2.85 7.23 3.649 9.154-.665a2.554 2.554 0 01-2.116 1.12v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M19.5 5.56a3 3 0 01-3 3",strokeLinecap:"round",strokeLinejoin:"round"}))};var x=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 25 24",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M15.513 2.5c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2s3.358-2 7.5-2c4.143 0 7.5.896 7.5 2v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M15.513 2.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M15.513 5.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M23.513 15.5c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2s3.358-2 7.5-2c4.143 0 7.5.896 7.5 2v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M23.513 15.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M23.513 18.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3M15.513 8.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M.513 11.5v3c0 1.104 3.358 2 7.5 2h.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M.513 14.5v3c0 1.104 3.358 2 7.5 2h.5M15.513 11.5v2",strokeLinecap:"round",strokeLinejoin:"round"}))};var z=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 25 20",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M22.513 16.5a2 2 0 11-4.002-.001 2 2 0 014.002.001v0zM4.513 18.5v-17a1 1 0 012 0v17h-2v0zM16.513 15.5a3 3 0 11-6 0 3 3 0 016 0v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M19.013 6l-1 4M12.513 8l1 1M13.013 8.5l-4.5 4.5M21.513 10h-5.5l-2.5 2.5M6.513 18.5h-6M4.513 13.5h-3",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M22.435 17h1.078v-5.5l-2-1.5V4.5a2 2 0 00-2-2h-2a9 9 0 00-9 9V17h2.406M16.106 17h2.484",strokeLinecap:"round",strokeLinejoin:"round"}))};var _=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M.5 8.572V12c0 .943.175 1.714 1 1.714v5.143h3v-5.143c.824 0 .999-.772 1-1.714V8.572h-5v0zM18.5 8.572V12c0 .943.175 1.714 1 1.714v5.143h3v-5.143c.824 0 .999-.772 1-1.714V8.572h-5v0zM8.5 8.572h7v5.714c0 1.257-.9 2.286-2 2.286v6.857h-3v-6.857c-1.101 0-2-1.029-2-2.286V8.572v0zM4.5 4.571c0 .947-.672 1.715-1.5 1.715S1.5 5.518 1.5 4.57c0-.946.672-1.714 1.5-1.714s1.5.768 1.5 1.714v0zM22.5 4.571c0 .947-.672 1.715-1.5 1.715s-1.5-.768-1.5-1.715c0-.946.672-1.714 1.5-1.714s1.5.768 1.5 1.714v0zM14.5 3.429c0 1.578-1.119 2.857-2.5 2.857S9.5 5.007 9.5 3.429C9.5 1.85 10.619.572 12 .572s2.5 1.278 2.5 2.857v0z",strokeLinejoin:"round"}))};var I=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M6.5 17.5h-6v-9a3 3 0 016 0v9z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.5 5.5h17a3 3 0 013 3v9h-17M13.5 17.5v6M2.5 15.5h2M4.5 5.5v-3",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M7.5.5h-3v2h3v-2z",strokeLinecap:"round",strokeLinejoin:"round"}))};var N=function(e){return o.createElement("svg",{viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.5 13.5H6.5L8 11.5L10 14.498L12.5 9.49805L14.5 16.5L16 13.5H23.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M21.2549 11.498C22.0149 9.89404 22.4999 8.22504 22.4999 6.57404C22.4999 -1.11896 13.1839 -1.71096 11.9999 5.98204C10.8169 -1.71096 1.49991 -1.11896 1.49991 7.16504C1.49991 8.66504 1.84791 10.12 2.41091 11.498",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4.7305 15.498C7.8165 19.623 12.0005 22.394 12.0005 22.394C12.0005 22.394 15.7565 19.483 18.7765 15.498",strokeLinecap:"round",strokeLinejoin:"round"}))};var B=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 22",fill:"none"},e),o.createElement("path",{d:"M.5 20c0 2 23 2 23 0M17.545 21.344L19.5.5h-15l1.956 20.844M6.125 17.5h11.729M5.77 13.5h12.46",strokeLinecap:"round",strokeLinejoin:"round"}))};var S=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M17.499 10.5a4 4 0 11-8 0 4 4 0 018 0v0zM3.5 5.5a1.5 1.5 0 11-2.999.001A1.5 1.5 0 013.5 5.5v0zM23.5 2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0v0zM3.5 22a1.5 1.5 0 11-2.999.001A1.5 1.5 0 013.5 22v0zM14.999 22a1.5 1.5 0 11-2.999.001A1.5 1.5 0 0115 22v0z",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.06 20.94l7.62-7.603M16.333 7.677l4.605-4.615M3.35 6.15l6.473 2.774M20.561 14.03l-3.616-1.496M13.499 20.5v-6",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M23.5 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0v0z",strokeLinejoin:"round"}))};var V=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M3.5 3.5h11",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M8.5 12.5h-5v-6h5v6z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M11.5 8.5h3M10.5 10.5h4M10.5 12.5h4M3.5 14.5h11M3.5 16.5h11M3.5 18.5h11M19.5 5.5h2v15a1 1 0 11-2 0V2h-2v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M20.5 23.5h-17a3 3 0 01-3-3V.5h17v20a3 3 0 006 0v-17h-4",strokeLinecap:"round",strokeLinejoin:"round"}))};var R=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 25 25",fill:"none"},e),o.createElement("path",{d:"M.513 23.5h23",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M4.513 18.5h-3v5h3v-5zM10.513 13.5h-3v10h3v-10zM16.513 15.5h-3v8h3v-8zM22.513 8.5h-3v15h3v-15zM4.013 11.5a1 1 0 11-2 0 1 1 0 012 0v0zM10.013 6.5a1 1 0 11-2 0 1 1 0 012 0v0zM16.013 8.5a1 1 0 11-2 0 1 1 0 012 0v0zM22.013 1.5a1 1 0 11-2 0 1 1 0 012 0v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.781 10.86l4.464-3.72M9.958 6.815l4.135 1.378M20.362 2.259l-4.699 5.48",strokeLinecap:"round",strokeLinejoin:"round"}))};var F=function(){return o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.209 8.41412L20.709 4.08412L14.5 7.66912V0.500122H9.5V7.66812L3.293 4.08412L0.792999 8.41412L7 12.0001L0.792999 15.5841L3.293 19.9141L9.5 16.3291V23.5001H14.5V16.3291L20.709 19.9141L23.209 15.5841L17 12.0001L23.209 8.41412V8.41412Z",strokeLinecap:"round",strokeLinejoin:"round"}))};var P=function(){return o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.5 12C23.5 18.353 18.351 23.5 12 23.5C5.648 23.5 0.5 18.353 0.5 12C0.5 5.65 5.648 0.5 12 0.5C18.351 0.5 23.5 5.65 23.5 12V12Z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M20.5 4.25549C20.5 4.25549 20 7.00049 18 8.00049C16 7.50049 14 9.00049 14.5 9.00049C15 9.00049 15.5 11.0005 15.5 11.0005C16 11.5005 17 11.0005 17 11.0005C18.25 12.2505 15 14.5005 15 15.0005C15 15.5005 16.25 15.7505 15.5 16.5005C14.75 17.2505 14 17.5005 14 17.5005C14 20.0005 11.5 20.0005 11 20.0005C10.5 20.0005 9.5 18.0005 9.5 17.5005C9.5 17.0005 10 16.5005 10 16.0005C10 15.5005 9 14.5005 9 14.5005C9 12.5005 7.5 13.0005 6 13.0005C4.5 13.0005 4.5 11.0005 4.5 11.0005C4.5 11.0005 4.5 7.50049 7 7.00049C9.5 6.50049 9.5 7.50049 9.5 7.50049C10.5 8.50049 12.5 7.50049 13.5 7.50049C13.5 7.50049 14 4.00049 13 4.50049C12 5.00049 11.104 4.61349 11 3.50049C10.854 1.93749 15.363 1.00049 15.363 1.00049",strokeLinecap:"round",strokeLinejoin:"round"}))};var A=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M10 17.47c-1.041-.058-2.147-.21-3-.47l-5.5 2.5 2-4.5c-1.93-1.543-3-3.623-3-6C.5 4.306 5.164.5 10.918.5S21.5 4.306 21.5 9c0 .523-.059 1.034-.171 1.53",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M23.5 23.5h-12l6-12 6 12v0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M17.5 16.41v3.271",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 20.774a.544.544 0 10-.002 1.088.544.544 0 00.002-1.088z",fill:"#000"}))};var T=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 17",fill:"none"},e),o.createElement("path",{d:"M21 6.5h2.5M21 6.5l-1.25-2.166M21 6.5l-1.25 2.165M18 5.5H8c-3.59 0-6.5 3-6.5 5.5 0 1.748.5 3.5 1.816 3.5h6.69c2.994-.999 3.494-6 3.494-6l4.5-1M10.5 8.5h1",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M10.5 3.5h-2v2h2v-2z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M9.5 3.5v-3M.5 1.5h18M3.5 14.5l-.5 2M10.006 14.5l.494 2M.5 16a.5.5 0 00.5.5h11.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M6.5 10.5h-3a3 3 0 013-3v3z",strokeLinecap:"round",strokeLinejoin:"round"}))};var H=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 22 15",fill:"none"},e),o.createElement("path",{d:"M6.92 6.76l9.604-5.51a1.5 1.5 0 012.048.549",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M15.082 6.76L5.48 1.25a1.5 1.5 0 00-2.048.549",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M9.502 10.5a4 4 0 11-8 0 4 4 0 018 0v0zM12.502 10.5a4 4 0 108 0 4 4 0 00-8 0v0z",strokeLinejoin:"round"}),o.createElement("path",{d:"M9.502 10.5a1.5 1.5 0 013 0",strokeLinejoin:"round"}),o.createElement("path",{d:"M1.501 10.714h-1M20.501 10.714h1",strokeLinecap:"round",strokeLinejoin:"round"}))};var D=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{clipRule:"evenodd",d:"M10.5 23.5h-6V.5h6v23zM16.5 23.5h-6v-15h6v15z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12.5 21.5h2M7.5 2.5v13",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M8.5 21.5h-2v-4h2v4z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M13.5 10.5v9M2.5 6.5v14",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{clipRule:"evenodd",d:"M.5 23.5h4v-20h-4v20zM23.404 22.75l-2.904.75-5-19.365 2.904-.75 5 19.365v0z",strokeLinecap:"round",strokeLinejoin:"round"}))},U={title:"nav.no","omr\xe5der":[{title:"Koronavirus",ikon:o.createElement(F,null),beskrivelse:"Hva gjelder i min situasjon?",sider:["Jeg har blitt syk","Jeg har blitt permittert"],featured:!0},{title:"E\xd8S-saken",ikon:o.createElement(P,null),beskrivelse:"Informasjon og status",sider:["Jeg har mistet rettighetene mine"],featured:!0},{title:"Arbeidss\xf8ker eller permittert",ikon:o.createElement(z,null),beskrivelse:"Jobb, registrering, dagpenger og oppf\xf8lging",sider:["Har mistet jobben","Er permittert","Har s\xf8kt dagpenger","Er l\xe6rling","Har v\xe6rt utenfor arbeidslivet lenge","Ung og lite jobberfaring","Ledige stillinger"]},{title:"Helse",ikon:o.createElement(N,null),beskrivelse:"Sykepenger, sykmelding, AAP, uf\xf8retrygd, yrkesskade, yrkessykdom og sykdom i familien",sider:["Sykmeldt","Skal s\xf8ke eller har AAP","Skal s\xf8ke eller har uf\xf8retrygd","Sykdom i familien","Har yrkesskade eller yrkessykdom"]},{title:"Familie",ikon:o.createElement(_,null),beskrivelse:"Venter barn, alene med barn, mistet et familiemedlem, kontantst\xf8tte, barnetrygd, barnebidrag og foreldreansvar",sider:["Venter barn","Alene med barn","Skal s\xf8ke kontantst\xf8tte","Har mistet et familiemedlem","Betaler eller mottar barnebidrag","Har foreldreansvar (farskap og morskap)"]},{title:"Pensjon",ikon:o.createElement(O,null),beskrivelse:"Beregne og s\xf8ke pensjon, avtalefestetpensjon, andre pensjonsordninger, alderspensjon og utland ",sider:["Vil beregne fremtidig pensjon","Skal s\xf8ke om alderspensjon","Skal s\xf8ke om avtalefestet pensjon","Bor i Norge og skal s\xf8ke pensjon fra utlandet","Vil ta med alderspensjon til utlandet","Om alderspensjon","Om andre pensjonsordninger","Om omsorgsarbeid og pensjonsopptjening"]},{title:"\xd8konomisk sosialhjelp og r\xe5dgivning",ikon:o.createElement(x,null),beskrivelse:"\xd8konomisk sosialhjelp, n\xf8dhjelp, r\xe5dgivning og gjeldsr\xe5dgivning",sider:["Trenger \xf8konomisk sosialhjelp","Trenger \xf8konomisk r\xe5dgivning/gjeldsr\xe5dgivning","Trenger hjelp til bolig","Er i en n\xf8dssituasjon","Trenger r\xe5d og veiledning"]},{title:"Nedsatt funksjonsevne",ikon:o.createElement(H,null),beskrivelse:"Hjelpemidler, tilrettelegging, tolketjenesten, bil og flere tjenester",sider:["Skal s\xf8ke om et hjelpemiddel","Trenger tjenester (tolk, bil m.fl.)","Trenger funksjonsassistanse","Lese- og skrivevansker","Nedsatt syn","Nedsatt h\xf8rsel","Vansker med tale og spr\xe5k","Vansker med \xe5 huske, planlegge og organisere","Vansker med bevegelse og forflytning"]},{title:"Ditt NAV",ikon:o.createElement(I,null),beskrivelse:"Innloggede tjenester, dialog med nav, personlig oppf\xf8lging, mine s\xf8knader, mine utbetalinger",sider:["Min innboks","Mine utbetalinger","Mine s\xf8knader"],featured:!0},{title:"Til eller fra Norge",ikon:o.createElement(T,null),beskrivelse:"Jobb og opphold i utlandet, jobb og opphold i Norge",sider:["Skal jobbe eller oppholde meg i utlandet","\xd8nsker jobb eller opphold i Norge"]},{title:"Arbeidsgiver",ikon:o.createElement(B,null),beskrivelse:"Permittere ansatte, ansatt er syk, tilrettelegge, kontakt med NAV",sider:["Ansatt er sykemeldt","Tilrettelegge for ansatt","Permittere ansatte"]},{title:"Sammarbeidspartnere",ikon:o.createElement(S,null),beskrivelse:"Leger, bostyrer, tiltaksarrang\xf8r, kommune, aldershjem",sider:["Lege eller annen behandler","Bostyrer","Tiltaksarrang\xf8r eller leverand\xf8r","Jobber med hjelpemidler i kommune/leverand\xf8r"]},{title:"Klage",ikon:o.createElement(A,null),beskrivelse:"Klage, feil, hjelp, har blitt behandlet d\xe5rlig",sider:["Jeg har blitt behandlet d\xe5rlig","Jeg vil klage p\xe5 vedtak"]},{title:"Nyheter",ikon:o.createElement(V,null),beskrivelse:"Nyheter, endringer, for journalister, E\xd8S-saken",sider:["Grunnbell\xf8pet endres i dag","Ny NAV-direkt\xf8r","Koronasituasjonen fortsetter"]},{title:"Statistikk",ikon:o.createElement(R,null),beskrivelse:"Nyheter, tall",sider:["Ny unders\xf8kelse","Flere er arbeidsledige","Rekkordstor p\xe5gang"]},{title:"Flere temaer",ikon:o.createElement(D,null),beskrivelse:"Saksbehandlingstider, utbetalinger, satser, kurs, innkreving og innbetaling,meldekort",sider:["Skal sjekke saksbehandlingstid","Skal sjekke utbetalinger","Skal sende meldekort","Skal sjekke st\xf8nadssatsen min","Skal sjekke kurs fra NAV","Om innkreving fra NAV","Om innbetaling til NAV"]}]},q=t(7);var J=function(){var e,n,t=Object(q.f)(),r=Object(q.e)();return{"omr\xe5de":U.omr\u00e5der.find((function(e){return e.title===t.omrade})),side:t.side,state:(e=t.omrade,n=t.side,e&&n?"side":e?"omr\xe5de":"forside"),navigerTil:function(e,n){console.log(e,n),e&&n?r.push("/navno-navigering-poc/".concat(e.title,"/").concat(n)):e?r.push("/navno-navigering-poc/".concat(e.title)):r.push("/navno-navigering-poc")}}},G=t(23),K=t.n(G),Z=i.c.div.withConfig({displayName:"LenkepanelGrid",componentId:"z9mdjk-0"})(["justify-self:center;padding:3rem 0.5rem 4rem;max-width:60rem;display:grid;width:100%;grid-template-columns:repeat(2,1fr);@media (max-width:60em){grid-template-columns:1fr;}grid-gap:1.5rem;.lenkepanel{margin-bottom:0;h3,p{margin:0 0 0.5rem;}}"]),W=t(15),Q=t.n(W),X=t(44);function Y(){var e=Object(r.a)(["\n      grid-auto-rows: 4rem;\n    "]);return Y=function(){return e},e}var $=i.c.div.withConfig({displayName:"PopDown__Style",componentId:"sc-1cziuiu-0"})(["position:absolute;left:0;z-index:10;box-shadow:0 1rem 1rem #0004;"]),ee=i.c.div.withConfig({displayName:"PopDown__Grid",componentId:"sc-1cziuiu-1"})(["padding:2rem 1rem 3rem;background-color:white;width:100vw;border-bottom:0.2rem solid ",";display:grid;justify-content:center;grid-template-columns:repeat(2,minmax(10rem,20rem));@media (max-width:40em){grid-template-columns:1fr;}",";"],h.colors.navLysBla,(function(e){return e.kortMeny&&Object(i.b)(Y())})),ne=i.c.button.withConfig({displayName:"PopDown__MenyKnapp",componentId:"sc-1cziuiu-2"})(["display:flex;align-items:center;background:transparent;border:none;color:",";font-size:",";text-align:left;cursor:pointer;&:hover{text-decoration:underline;}svg{width:2rem;max-height:2rem;margin-right:1.5rem;stroke-width:1.2;opacity:0.8;}"],h.colors.navBla,(function(e){return e.small?"1rem":"1.2rem"})),te=Object(i.c)(ne).withConfig({displayName:"PopDown__ChevronKnapp",componentId:"sc-1cziuiu-3"})(["transition:0.3s;> *{margin-right:0.5rem;}&:hover{margin-left:0.5rem;}"]),re=i.c.div.withConfig({displayName:"PopDown__UndersiderStyle",componentId:"sc-1cziuiu-4"})(["margin:0.5rem 0 0.5rem 5rem;"]);function ie(e){return o.createElement("div",null,e.omr\u00e5de.sider.slice(0,2).map((function(n){return o.createElement(te,{small:!0,onClick:function(){return e.hanldeNaviger(e.omr\u00e5de,n)}},e.chevron&&o.createElement(W.HoyreChevron,null)," ",n)})),o.createElement(ne,{small:!0,onClick:function(){return e.hanldeNaviger(e.omr\u00e5de)}},"Mer.."))}var oe=function(e){var n=v(),t=Object(c.a)(n,1)[0],r=J().navigerTil,i=function(n,t){r(n,t),e.lukkMeny()};return o.createElement($,null,o.createElement(X.UnmountClosed,{isOpened:e.open},o.createElement(ee,{kortMeny:!t.undersiderIMeny},U.omr\u00e5der.map((function(e){return o.createElement("div",null,o.createElement(ne,{onClick:function(){return i(e)}},t.visIkoner&&e.ikon,e.title),t.undersiderIMeny&&o.createElement(re,null,o.createElement(ie,{"omr\xe5de":e,hanldeNaviger:i})))})))))};function ae(e,n){return function(t){return!function e(n,t){return t instanceof Array?t.some((function(t){return e(n,t)})):!!(n.target instanceof Node&&t.current)&&t.current.contains(n.target)}(t,e)&&n(t)}}var le=i.c.div.withConfig({displayName:"ToppTrePanel__Style",componentId:"sc-4fw2xh-0"})(["padding:0.5rem;margin-top:2rem;display:grid;grid-gap:1rem;grid-template-columns:repeat(auto-fit,minmax(18rem,1fr));grid-auto-rows:minmax(12rem,auto);"]),se=i.c.button.withConfig({displayName:"ToppTrePanel__Panel",componentId:"sc-4fw2xh-1"})(["overflow:hidden;background-color:",";padding:1rem;color:white;border:none;display:flex;align-items:center;cursor:pointer;transition:0.5s;&:hover{transform:scale(1.05);}svg{flex-shrink:0;width:2.5rem;max-height:2.5rem;margin-right:1rem;stroke-width:1.2;transform:scale(3.5) translate(1rem,0.5rem);opacity:0.3;}"],h.colors.navBla),ce=i.c.div.withConfig({displayName:"ToppTrePanel__PanelContent",componentId:"sc-4fw2xh-2"})(["align-self:flex-start;flex-grow:1;h3{font-size:1.5rem;}h3,p{margin:0.25rem 0;}"]);var de=function(e){var n=J(),t=v(),r=Object(c.a)(t,1)[0];return o.createElement(le,null,e.omr\u00e5der.map((function(e){return o.createElement(se,{onClick:function(){return n.navigerTil(e)}},r.visIkoner&&e.ikon,o.createElement(ce,null,o.createElement("h3",null,e.title),o.createElement("p",null,e.beskrivelse)))})))},me=Object(i.c)(K.a).withConfig({displayName:"Forside__StyledLenkepanel",componentId:"zp04o1-0"})([".lenkepanel__heading{display:flex;align-items:center;}svg{width:2.5rem;max-height:2.5rem;margin-right:1.5rem;stroke-width:1.2;flex-shrink:0;}"]);function ue(e){var n=v(),t=Object(c.a)(n,1)[0],r=J().navigerTil,i=Object(o.useRef)(null);return o.createElement(me,{key:e.omr\u00e5de.title,href:"#",tittelProps:"normaltekst",border:!0,onClick:ae(i,(function(){return r(e.omr\u00e5de)}))},t.visIkoner&&e.omr\u00e5de.ikon,o.createElement("div",null,o.createElement("h3",null,e.omr\u00e5de.title),!t.undersiderPaForside&&o.createElement("p",null,e.omr\u00e5de.beskrivelse),t.undersiderPaForside&&o.createElement("div",{ref:i},o.createElement(ie,{"omr\xe5de":e.omr\u00e5de,hanldeNaviger:r,chevron:!0}))))}var pe=function(){var e=v(),n=Object(c.a)(e,1)[0],t=U.omr\u00e5der,r=t.filter((function(e){return e.featured})),i=t.filter((function(e){return!e.featured})),a=n.featuredContent?i:t;return o.createElement(o.Fragment,null,n.featuredContent&&o.createElement(de,{"omr\xe5der":r}),o.createElement(Z,null,a.map((function(e){return o.createElement(ue,{key:e.title,"omr\xe5de":e})}))))},ve=i.c.div.withConfig({displayName:"Omrde__Style",componentId:"fsyeon-0"})(["h2{font-size:2rem;margin-bottom:2rem;display:flex;align-items:center;justify-content:center;}svg{width:2.5rem;max-height:2.5rem;margin-right:1.5rem;stroke-width:1.2;}display:flex;flex-direction:column;align-items:center;"]);var ge=function(){var e=J(),n=e.omr\u00e5de,t=e.navigerTil,r=v(),i=Object(c.a)(r,1)[0];return o.createElement(ve,null,o.createElement("h2",null,i.visIkoner&&n.ikon,n.title),o.createElement(Z,null,n.sider.map((function(e){return o.createElement(K.a,{key:e,href:"#",border:!0,tittelProps:"normaltekst",onClick:function(){return t(n,e)}},o.createElement("h3",null,e),o.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quisquam."))}))))},ke=t(45),he=i.c.div.withConfig({displayName:"Side__Style",componentId:"sc-11ocbeg-0"})(["margin:auto;margin-top:2rem;padding:1rem;max-width:45rem;h2{text-align:center;font-size:2rem;margin-bottom:2rem;}h3{font-size:1.5rem;margin-top:2.5rem;}"]);var fe=function(){var e=J().side;return o.createElement(o.Fragment,null,o.createElement(he,null,o.createElement("h2",null,e),Object(ke.a)(new Array(10)).map((function(){return o.createElement(o.Fragment,null,o.createElement("h3",null,"Tittel"),o.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci amet commodi consequatur debitis delectus dolorem dolores ducimus esse ex facilis fuga laboriosam maiores modi mollitia nesciunt obcaecati officia pariatur placeat quod sapiente sint suscipit tempore vel vero vitae voluptatibus? Alias autem laborum quaerat suscipit!"))}))))};var be=function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 269 169"},e),o.createElement("defs",null,o.createElement("path",{id:"prefix__a",d:"M22.4 43.42V.69H.57v42.73h21.85z"})),o.createElement("g",{fill:"none"},o.createElement("path",{fill:"#c30000",d:"M125.3 168.94A84.47 84.47 0 11125.34 0a84.47 84.47 0 01-.02 168.94zM0 121.36l17.27-42.73h16.58l-17.24 42.73zm213.04 0l17.05-42.73h9.04l-17.04 42.73z"}),o.createElement("g",{transform:"translate(246 77.94)"},o.createElement("mask",{id:"prefix__b",fill:"#fff"},o.createElement("use",{href:"#prefix__a"})),o.createElement("path",{fill:"#c30000",d:"M.56 43.42L17.6.69h4.8L5.37 43.42z",mask:"url(#prefix__b)"})),o.createElement("path",{fill:"#FEFEFE",d:"M197.36 78.63h-15.02s-1.03 0-1.4.91l-8.3 25.44-8.31-25.44c-.37-.91-1.4-.91-1.4-.91h-28.88c-.62 0-1.15.52-1.15 1.14v8.64c0-6.85-7.29-9.78-11.56-9.78-9.56 0-15.96 6.3-17.96 15.87-.1-6.35-.63-8.63-2.34-10.96a11 11 0 00-3.16-2.9c-2.55-1.48-4.84-2.01-9.75-2.01h-5.77s-1.04 0-1.41.91L75.7 92.56V79.77c0-.62-.52-1.14-1.15-1.14H61.2s-1.03 0-1.4.91l-5.47 13.53s-.54 1.36.7 1.36h5.14v25.78c0 .64.5 1.15 1.14 1.15h13.24c.63 0 1.15-.5 1.15-1.15V94.43h5.16c2.96 0 3.58.08 4.74.62.69.26 1.32.79 1.66 1.4.7 1.31.87 2.9.87 7.54v16.22c0 .64.51 1.15 1.15 1.15h12.69s1.43 0 2-1.42l2.8-6.95c3.75 5.24 9.9 8.37 17.55 8.37h1.67s1.44 0 2.02-1.42l4.9-12.13v12.4c0 .64.52 1.15 1.14 1.15H147s1.43 0 2-1.42c0 0 5.19-12.86 5.2-12.96h.01c.2-1.07-1.15-1.07-1.15-1.07h-4.62V83.85l14.54 36.1c.57 1.4 2 1.4 2 1.4h15.3s1.44 0 2.01-1.4L198.42 80c.56-1.38-1.06-1.38-1.06-1.38zm-64.46 27.28h-8.7a6.28 6.28 0 110-12.55h2.44a6.29 6.29 0 016.26 6.28v6.27z"})))},Ee=t(46);function je(){var e=Object(r.a)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n"]);return je=function(){return e},e}var Me=Object(i.b)(je()),ye=i.c.button.withConfig({displayName:"MenyButton__IkonButtonStyle",componentId:"gvi4kh-0"})(["margin-left:1rem;",";font-size:1.1rem;font-weight:600;border-radius:50%;opacity:0.9;display:flex;justify-content:center;align-items:center;color:",";&:hover{opacity:0.7;}"],Me,h.colors.navBla),Le=i.c.svg.withConfig({displayName:"MenyButton__StyledSvg",componentId:"gvi4kh-1"})(["margin-right:0.5rem;height:1.3em;stroke-width:0.4;stroke-linecap:round;"]);function we(e){return e.isOpen?o.createElement(Le,{viewBox:"0.5 0.5 3 3"},o.createElement("path",{d:"M 1.2 1.2 L 2.8 2.8"}),o.createElement("path",{d:"M 1.2 2.8 L 2.8 1.2"})):o.createElement(Le,{viewBox:"0.5 0.5 3 3"},[1,2,3].map((function(e){return o.createElement("path",{key:e,d:"M 1 ".concat(e," L 3.3 ").concat(e)})})))}var Ce=function(e){var n=e.isOpen,t=(e.label,Object(Ee.a)(e,["isOpen","label"]));return o.createElement(ye,Object.assign({"aria-expanded":n},t),o.createElement(we,{isOpen:n}),o.createElement("span",null,e.label))},Oe=t(27),xe=t.n(Oe),ze=i.c.div.withConfig({displayName:"Brodsmuler__Style",componentId:"y5boyi-0"})(["text-align:center;"]),_e=i.c.button.withConfig({displayName:"Brodsmuler__BrdsmuleStyle",componentId:"y5boyi-1"})(["background-color:transparent;border:none;font-weight:600;font-size:calc(0.8rem + 1.5vmin);&:hover{cursor:pointer;text-decoration:underline;}&:not(:last-child){> *{margin-right:2vmin;}}&:last-child{> *:nth-child(2){display:none;}}"]);function Ie(e){return o.createElement(_e,{className:"lenke",onClick:e.onClick},o.createElement("span",null,e.label),o.createElement(Q.a,{type:"h\xf8yre"}))}var Ne=function(){var e=J(),n=e.omr\u00e5de,t=e.side,r=e.navigerTil,i=v();return Object(c.a)(i,1)[0].visBr\u00f8dsmuler?o.createElement(ze,null,o.createElement(Ie,{label:"nav.no",onClick:function(){return r()}}),n&&o.createElement(Ie,{label:n.title,onClick:function(){return r(n)}}),t&&o.createElement(Ie,{label:t,onClick:function(){return null}})):null},Be=i.c.div.withConfig({displayName:"Meny__Style",componentId:"xke8m9-0"})(["padding:1rem;border-bottom:0.2rem solid ",";display:flex;align-items:center;"],h.colors.navLysBla),Se=i.c.button.withConfig({displayName:"Meny__NavButton",componentId:"xke8m9-1"})(["display:inline-flex;align-items:center;background:transparent;border:none;cursor:pointer;font-size:1.6rem;&:hover{opacity:0.8;}"]),Ve=Object(i.c)(xe.a).withConfig({displayName:"Meny__LoggInnKnapp",componentId:"xke8m9-2"})(["text-transform:none;padding:0.5em 1.2em;"]),Re=i.c.div.withConfig({displayName:"Meny__ShowOnSmallScreen",componentId:"xke8m9-3"})(["padding:1rem 0;@media (min-width:1200px){display:none;}"]),Fe=i.c.div.withConfig({displayName:"Meny__ShowOnBigScreen",componentId:"xke8m9-4"})(["flex-grow:1;> *{@media not all and (min-width:1200px){display:none;}}"]);var Pe=function(){var e=Object(o.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(o.useRef)(null),a=v(),l=Object(c.a)(a,1)[0],s=J().navigerTil;Object(f.a)(i,(function(){return r(!1)}));var d=function(e){s(e),r(!1)};return o.createElement("div",{ref:i},o.createElement(Be,null,o.createElement(Se,{onClick:function(){return d()}},o.createElement(be,{height:"2.5rem"})),l.visMeny&&o.createElement(Ce,{isOpen:t,onClick:function(){return r(!t)},label:"Meny"}),o.createElement(Fe,null,o.createElement(Ne,null)),o.createElement(Ve,{onClick:function(){return d(U.omr\u00e5der.find((function(e){return e.title.includes("Ditt NAV")})))}},"Logg inn")),o.createElement(oe,{lukkMeny:function(){return r(!1)},open:t}),o.createElement(Re,null,o.createElement(Ne,null)))},Ae=i.c.div.withConfig({displayName:"Footer__Style",componentId:"sc-1mcuizw-0"})(["min-height:6rem;border-top:0.2rem solid ",";"],h.colors.navLysBla);var Te=function(){return o.createElement(Ae,null)};function He(){var e=Object(r.a)(["\n    .ReactCollapse--collapse {\n        transition: height 0.3s;\n    }\n  svg {\n    stroke: currentColor;\n  }\n"]);return He=function(){return e},e}var De=Object(i.a)(He()),Ue=i.c.div.withConfig({displayName:"App__Style",componentId:"sc-10gr5o-0"})(["display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:1fr;min-height:100vh;"]),qe=i.c.div.withConfig({displayName:"App__Content",componentId:"sc-10gr5o-1"})(["margin-left:auto;margin-right:auto;"]);var Je=function(){var e=J().state;return a.a.createElement(a.a.Fragment,null,a.a.createElement(De,null),a.a.createElement(C,null),a.a.createElement(Ue,null,a.a.createElement(Pe,null),a.a.createElement(qe,null,"forside"===e&&a.a.createElement(pe,null),"omr\xe5de"===e&&a.a.createElement(ge,null),"side"===e&&a.a.createElement(fe,null)),a.a.createElement(Te,null)))},Ge=(t(97),t(28));function Ke(){var e=Object(r.a)(["\n    *:focus {\n      outline: none;\n      box-shadow: 0 0 0 .18rem ",";\n      border-radius: 0.2rem;\n  }\n"]);return Ke=function(){return e},e}var Ze=Object(i.a)(Ke(),h.colors.fokusFarge);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null,a.a.createElement(Ze,null),a.a.createElement(Ge.a,null,a.a.createElement(q.a,{path:"/:domain?/:omrade?/:side?",children:a.a.createElement(Je,null)})))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.fdef6d29.chunk.js.map