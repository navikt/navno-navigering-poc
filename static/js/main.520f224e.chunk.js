(this["webpackJsonpnav-navigering-poc"]=this["webpackJsonpnav-navigering-poc"]||[]).push([[0],{33:function(e,n,t){e.exports=t(82)},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(0),i=t.n(a),o=t(25),l=t.n(o),c=t(7),u=t(1),s=t(8),d=t(83),m=Object(d.a)((function(e,n){switch(n){case"ingenMeny":return Object(s.a)(Object(s.a)({},e),{},{visMeny:!1});case"meny":return Object(s.a)(Object(s.a)({},e),{},{visMeny:!0});case"skjulIkoner":return Object(s.a)(Object(s.a)({},e),{},{visIkoner:!1});case"visIkoner":return Object(s.a)(Object(s.a)({},e),{},{visIkoner:!0});case"kortMeny":return Object(s.a)(Object(s.a)({},e),{},{visMeny:!0,langMeny:!1});case"langMeny":return Object(s.a)(Object(s.a)({},e),{},{visMeny:!0,langMeny:!0});default:return console.error("unhandled action:",n),e}}),{visMeny:!0,visIkoner:!0,langMeny:!0}),v=Object(c.a)(m,2),p=v[0],k=v[1],f=t(26),g={colors:t.n(f).a},b=t(84);function h(){var e=Object(r.a)(["\n  background-color: transparent;\n  padding: 0.7rem;\n  border: 0.2rem solid ",";\n  border-radius: 0.4rem;\n"]);return h=function(){return e},e}function E(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, auto);\n  grid-gap: 1rem;\n"]);return E=function(){return e},e}function j(){var e=Object(r.a)(["\n  border-radius: 50%;\n  background-color: ",";\n  border: 0.2rem solid ",";\n  padding: 0.5rem;\n  opacity: 0.6;\n"]);return j=function(){return e},e}function O(){var e=Object(r.a)(["\n  position: absolute;\n  padding: 1rem;\n  background-color: white;\n  min-width: 15rem;\n  border: 0.2rem "," solid;\n  filter: drop-shadow(0.2rem 0.2rem 3rem black);\n"]);return O=function(){return e},e}function M(){var e=Object(r.a)(["\n  position: absolute;\n  right: 0;\n  margin-top: 1rem;\n  padding: 1rem;\n  display: inline-flex;\n  justify-content: flex-end;\n  z-index: 1000;\n"]);return M=function(){return e},e}var y=u.c.div(M()),L=u.c.div(O(),g.colors.navLimeGronnLighten80),w=u.c.button(j(),g.colors.navLimeGronnLighten80,g.colors.navLimeGronn),x=u.c.div(E()),z=u.c.button(h(),g.colors.navLimeGronnLighten80);var C=function(){var e=p(),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(c.a)(i,2),l=o[0],u=o[1],s=Object(a.useRef)(null);return Object(b.a)(s,(function(){return u(!1)})),a.createElement(y,null,l&&a.createElement(L,{ref:s},a.createElement("h2",null,"Demo-controlls:"),a.createElement(x,null,a.createElement(z,{onClick:function(){return r(t.visMeny?"ingenMeny":"meny")}},t.visMeny?"Skjul":"Vis"," meny"),a.createElement(z,{onClick:function(){return r(t.visIkoner?"skjulIkoner":"visIkoner")}},t.visIkoner?"Skjul":"Vis"," ikoner"),a.createElement(z,{onClick:function(){return r(t.langMeny?"kortMeny":"langMeny")}},t.langMeny?"Skjul":"Vis"," underpunkter i meny"))),a.createElement(w,{onClick:function(){return u(!l)}},"DC"))};var B=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 23",fill:"none"},e),a.createElement("path",{clipRule:"evenodd",d:"M21.5 5.56a5 5 0 11-10.001 0 5 5 0 0110.001 0v0z",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.5 4.56a.5.5 0 100 1 .5.5 0 000-1z",fill:"#000"}),a.createElement("path",{d:"M23.5 22.5v-16",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{clipRule:"evenodd",d:"M16.689 20.516a2.56 2.56 0 01-2.56-2.56c0-2.643-3.107-3.211-4.478-1.73-1.368-1.481-4.479-.913-4.479 1.73A2.559 2.559 0 01.5 19.396c1.92 4.314 7.297 3.515 9.151.665 1.853 2.85 7.23 3.649 9.154-.665a2.554 2.554 0 01-2.116 1.12v0z",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M19.5 5.56a3 3 0 01-3 3",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}))};var I=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 25 24",fill:"none"},e),a.createElement("path",{clipRule:"evenodd",d:"M15.513 2.5c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2s3.358-2 7.5-2c4.143 0 7.5.896 7.5 2v0z",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.513 2.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.513 5.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{clipRule:"evenodd",d:"M23.513 15.5c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2s3.358-2 7.5-2c4.143 0 7.5.896 7.5 2v0z",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M23.513 15.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M23.513 18.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3M15.513 8.5v3c0 1.104-3.357 2-7.5 2-4.142 0-7.5-.896-7.5-2v-3",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M.513 11.5v3c0 1.104 3.358 2 7.5 2h.5",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M.513 14.5v3c0 1.104 3.358 2 7.5 2h.5M15.513 11.5v2",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}))};var A=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 25 20",fill:"none"},e),a.createElement("path",{clipRule:"evenodd",d:"M22.513 16.5a2 2 0 11-4.002-.001 2 2 0 014.002.001v0zM4.513 18.5v-17a1 1 0 012 0v17h-2v0zM16.513 15.5a3 3 0 11-6 0 3 3 0 016 0v0z",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M19.013 6l-1 4M12.513 8l1 1M13.013 8.5l-4.5 4.5M21.513 10h-5.5l-2.5 2.5M6.513 18.5h-6M4.513 13.5h-3",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M22.435 17h1.078v-5.5l-2-1.5V4.5a2 2 0 00-2-2h-2a9 9 0 00-9 9V17h2.406M16.106 17h2.484",stroke:"#3E3832",strokeLinecap:"round",strokeLinejoin:"round"}))};var S=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 13 24",fill:"none"},e),a.createElement("path",{clipRule:"evenodd",d:"M6.5 7.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7v0zM6.5 9C3.462 9 1 13.5 1 18.5h3.5v5h4v-5H12c0-5-2.463-9.5-5.5-9.5v0z",stroke:"#000",strokeLinejoin:"round"}))};var R=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),a.createElement("path",{clipRule:"evenodd",d:"M6.5 17.5h-6v-9a3 3 0 016 0v9z",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M3.5 5.5h17a3 3 0 013 3v9h-17M13.5 17.5v6M2.5 15.5h2M4.5 5.5v-3",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{clipRule:"evenodd",d:"M7.5.5h-3v2h3v-2z",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}))};var _=function(e){return a.createElement("svg",{viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0.5 13.5H6.5L8 11.5L10 14.498L12.5 9.49805L14.5 16.5L16 13.5H23.5",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M21.2549 11.498C22.0149 9.89404 22.4999 8.22504 22.4999 6.57404C22.4999 -1.11896 13.1839 -1.71096 11.9999 5.98204C10.8169 -1.71096 1.49991 -1.11896 1.49991 7.16504C1.49991 8.66504 1.84791 10.12 2.41091 11.498",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M4.7305 15.498C7.8165 19.623 12.0005 22.394 12.0005 22.394C12.0005 22.394 15.7565 19.483 18.7765 15.498",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}))};var V=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 22",fill:"none"},e),a.createElement("path",{d:"M.5 20c0 2 23 2 23 0M17.545 21.344L19.5.5h-15l1.956 20.844M6.125 17.5h11.729M5.77 13.5h12.46",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round"}))};var F=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none"},e),a.createElement("path",{clipRule:"evenodd",d:"M17.499 10.5a4 4 0 11-8 0 4 4 0 018 0v0zM3.5 5.5a1.5 1.5 0 11-2.999.001A1.5 1.5 0 013.5 5.5v0zM23.5 2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0v0zM3.5 22a1.5 1.5 0 11-2.999.001A1.5 1.5 0 013.5 22v0zM14.999 22a1.5 1.5 0 11-2.999.001A1.5 1.5 0 0115 22v0z",stroke:"#000",strokeLinejoin:"round"}),a.createElement("path",{d:"M3.06 20.94l7.62-7.603M16.333 7.677l4.605-4.615M3.35 6.15l6.473 2.774M20.561 14.03l-3.616-1.496M13.499 20.5v-6",stroke:"#000",strokeLinejoin:"round"}),a.createElement("path",{clipRule:"evenodd",d:"M23.5 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0v0z",stroke:"#000",strokeLinejoin:"round"}))},H={title:"nav.no","omr\xe5der":[{title:"Arbeidss\xf8ker eller permittert",ikon:a.createElement(A,null),beskrivelse:"Om jobb, registrering, CV og dagpenger",sider:["Arbeidsledig","Permittert","Har s\xf8kt dagpenger","Utenfor arbeidslivet lenge","Jeg er ung","Ledige stillinger"]},{title:"Sykdom",ikon:a.createElement(_,null),beskrivelse:"Om sykepenger, sykmelding og hvordan komme tilbake i jobb",sider:["I fare for \xe5 bli syk","Syk hva n\xe5","Yrkesskade","Har v\xe6rt syk lenge"]},{title:"Pensjon",ikon:a.createElement(B,null),beskrivelse:"Om alderspensjon, beregne og s\xf8ke pensjon, AFP, utland og pensjon",sider:["Snart pensjonist","Blir pensjonist","Er pensjonert"]},{title:"Barn",ikon:a.createElement(S,null),beskrivelse:"Barn, sykdom, foreldrepenger, alene med barn, kontantst\xf8tte",sider:["Skal f\xe5 barn","Alene med barn","Sykt barn"]},{title:"\xd8konomisk hjelp",ikon:a.createElement(I,null),beskrivelse:"N\xf8dhjelp, bost\xf8tte",sider:["Jeg har ikke penger","Trenger sted \xe5 bo","Trenger hjelp"]},{title:"Ditt NAV",ikon:a.createElement(R,null),beskrivelse:"Innloggede tjenester, dialog med nav, personlig oppf\xf8lging, mine s\xf8knader, mine utbetalinger",sider:["Min innboks","Mine utbetalinger","Mine s\xf8knader"]},{title:"Arbeidsgiver",ikon:a.createElement(V,null),beskrivelse:"Permittere ansatte, ansatt er syk, tilrettelegge, kontakt med NAV",sider:["Ansatt er sykemeldt","Tilrettelegge for ansatt","Permittere ansatte"]},{title:"Sammarbeidspartnere",ikon:a.createElement(F,null),beskrivelse:"Leger, bostyrer, tiltaksarrang\xf8r, kommune, aldershjem",sider:["Lege eller annen behandler","Bostyrer","Tiltaksarrang\xf8r eller leverand\xf8r","Jobber med hjelpemidler i kommune/leverand\xf8r"]}]},N={"omr\xe5de":void 0,side:void 0,state:"forside"},P=Object(d.a)((function(e,n){switch(n.type){case"velgOmr\xe5de":return Object(s.a)(Object(s.a)({},e),{},{"omr\xe5de":n.omr\u00e5de,side:void 0,state:"omr\xe5de"});case"velgSide":return Object(s.a)(Object(s.a)({},e),{},{side:n.side,state:"side"});case"clear":return Object(s.a)({},N);default:return console.error("unhandled action:",n),e}}),N),q=Object(c.a)(P,2),J=q[0],T=q[1],D=t(16),G=t.n(D);function U(){var e=Object(r.a)(["\n  padding: 1rem 0.5rem 2rem;\n  margin: 1rem auto auto;\n  max-width: 60rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  @media (max-width: 60em) {\n    grid-template-columns: 1fr;\n  }\n  grid-gap: 1.5rem;\n  .lenkepanel {\n    margin-bottom: 0;\n    h3 {\n      margin-top: 0.5rem;\n    }\n    p {\n      margin-bottom: 0.5rem;\n    }\n  }\n"]);return U=function(){return e},e}var Y=u.c.div(U());function K(){var e=Object(r.a)(["\n  .lenkepanel__heading {\n    display: flex;\n    align-items: center;\n  }\n  svg {\n    width: 2.5rem;\n    max-height: 2.5rem;\n    margin-right: 1.5rem;\n    stroke-width: 1.2;\n    flex-shrink: 0;\n  }\n"]);return K=function(){return e},e}var Q=Object(u.c)(G.a)(K());var W=function(){var e=J(),n=Object(c.a)(e,2)[1],t=p(),r=Object(c.a)(t,2),i=r[0];return r[1],a.createElement(Y,null,H.omr\u00e5der.map((function(e){return a.createElement(Q,{href:"#",tittelProps:"normaltekst",border:!0,onClick:function(){return n({type:"velgOmr\xe5de","omr\xe5de":e})}},i.visIkoner&&e.ikon,a.createElement("div",null,a.createElement("h3",null,e.title),a.createElement("p",null,e.beskrivelse)))})))};function X(){var e=Object(r.a)(["\n  h2 {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  svg {\n    width: 2.5rem;\n    max-height: 2.5rem;\n    margin-right: 1.5rem;\n    stroke-width: 1.2;\n  }\n"]);return X=function(){return e},e}var Z=u.c.div(X());var $=function(){var e=J(),n=Object(c.a)(e,2),t=n[0],r=n[1],i=p(),o=Object(c.a)(i,1)[0],l=t.omr\u00e5de;return a.createElement(Z,null,a.createElement("h2",null,o.visIkoner&&l.ikon,l.title),a.createElement(Y,null,l.sider.map((function(e){return a.createElement(G.a,{href:"#",border:!0,tittelProps:"normaltekst",onClick:function(){return r({type:"velgSide",side:e})}},a.createElement("h3",null,e),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quisquam."))}))))},ee=t(31);function ne(){var e=Object(r.a)(["\n  margin: auto;\n  margin-top: 2rem;\n  padding: 1rem;\n  max-width: 45rem;\n  h2 {\n    text-align: center;\n    font-size: 2rem;\n    margin-bottom: 2rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n    margin-top: 2.5rem;\n  }\n"]);return ne=function(){return e},e}var te=u.c.div(ne());var re=function(){var e=J(),n=Object(c.a)(e,2),t=n[0],r=(n[1],t.side);return a.createElement(a.Fragment,null,a.createElement(te,null,a.createElement("h2",null,r),Object(ee.a)(new Array(10)).map((function(){return a.createElement(a.Fragment,null,a.createElement("h3",null,"Tittel"),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci amet commodi consequatur debitis delectus dolorem dolores ducimus esse ex facilis fuga laboriosam maiores modi mollitia nesciunt obcaecati officia pariatur placeat quod sapiente sint suscipit tempore vel vero vitae voluptatibus? Alias autem laborum quaerat suscipit!"))}))))};var ae=function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 269 169"},e),a.createElement("defs",null,a.createElement("path",{id:"prefix__a",d:"M22.4 43.42V.69H.57v42.73h21.85z"})),a.createElement("g",{fill:"none"},a.createElement("path",{fill:"#c30000",d:"M125.3 168.94A84.47 84.47 0 11125.34 0a84.47 84.47 0 01-.02 168.94zM0 121.36l17.27-42.73h16.58l-17.24 42.73zm213.04 0l17.05-42.73h9.04l-17.04 42.73z"}),a.createElement("g",{transform:"translate(246 77.94)"},a.createElement("mask",{id:"prefix__b",fill:"#fff"},a.createElement("use",{href:"#prefix__a"})),a.createElement("path",{fill:"#c30000",d:"M.56 43.42L17.6.69h4.8L5.37 43.42z",mask:"url(#prefix__b)"})),a.createElement("path",{fill:"#FEFEFE",d:"M197.36 78.63h-15.02s-1.03 0-1.4.91l-8.3 25.44-8.31-25.44c-.37-.91-1.4-.91-1.4-.91h-28.88c-.62 0-1.15.52-1.15 1.14v8.64c0-6.85-7.29-9.78-11.56-9.78-9.56 0-15.96 6.3-17.96 15.87-.1-6.35-.63-8.63-2.34-10.96a11 11 0 00-3.16-2.9c-2.55-1.48-4.84-2.01-9.75-2.01h-5.77s-1.04 0-1.41.91L75.7 92.56V79.77c0-.62-.52-1.14-1.15-1.14H61.2s-1.03 0-1.4.91l-5.47 13.53s-.54 1.36.7 1.36h5.14v25.78c0 .64.5 1.15 1.14 1.15h13.24c.63 0 1.15-.5 1.15-1.15V94.43h5.16c2.96 0 3.58.08 4.74.62.69.26 1.32.79 1.66 1.4.7 1.31.87 2.9.87 7.54v16.22c0 .64.51 1.15 1.15 1.15h12.69s1.43 0 2-1.42l2.8-6.95c3.75 5.24 9.9 8.37 17.55 8.37h1.67s1.44 0 2.02-1.42l4.9-12.13v12.4c0 .64.52 1.15 1.14 1.15H147s1.43 0 2-1.42c0 0 5.19-12.86 5.2-12.96h.01c.2-1.07-1.15-1.07-1.15-1.07h-4.62V83.85l14.54 36.1c.57 1.4 2 1.4 2 1.4h15.3s1.44 0 2.01-1.4L198.42 80c.56-1.38-1.06-1.38-1.06-1.38zm-64.46 27.28h-8.7a6.28 6.28 0 110-12.55h2.44a6.29 6.29 0 016.26 6.28v6.27z"})))},ie=t(32);function oe(){var e=Object(r.a)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n"]);return oe=function(){return e},e}var le=Object(u.b)(oe()),ce=u.c.button.withConfig({displayName:"MenyButton__IkonButtonStyle",componentId:"gvi4kh-0"})(["margin-left:1rem;",";font-size:1.1rem;font-weight:600;border-radius:50%;opacity:0.9;display:flex;justify-content:center;align-items:center;color:",";&:hover{opacity:0.7;}"],le,g.colors.navBla),ue=u.c.svg.withConfig({displayName:"MenyButton__StyledSvg",componentId:"gvi4kh-1"})(["margin-right:0.5rem;height:1.3em;stroke:currentColor;stroke-width:0.4;stroke-linecap:round;"]);function se(e){return e.isOpen?a.createElement(ue,{viewBox:"0.5 0.5 3 3"},a.createElement("path",{d:"M 1.2 1.2 L 2.8 2.8"}),a.createElement("path",{d:"M 1.2 2.8 L 2.8 1.2"})):a.createElement(ue,{viewBox:"0.5 0.5 3 3"},[1,2,3].map((function(e){return a.createElement("path",{d:"M 1 ".concat(e," L 3.3 ").concat(e)})})))}var de=function(e){var n=e.isOpen,t=(e.label,Object(ie.a)(e,["isOpen","label"]));return a.createElement(ce,Object.assign({"aria-expanded":n},t),a.createElement(se,{isOpen:n}),a.createElement("span",null,e.label))},me=t(18),ve=t.n(me),pe=t(11),ke=t.n(pe);function fe(){var e=Object(r.a)(["\n  background-color: transparent;\n  border: none;\n  font-weight: 600;\n  font-size: calc(0.8rem + 1.5vmin);\n  &:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n  &:not(:last-child) {\n    > * {\n      margin-right: 2vmin;\n    }\n  }\n  &:last-child {\n    > *:nth-child(2) {\n      display: none;\n    }\n  }\n"]);return fe=function(){return e},e}function ge(){var e=Object(r.a)(["\n  text-align: center;\n"]);return ge=function(){return e},e}var be=u.c.div(ge()),he=u.c.button(fe());function Ee(e){return a.createElement(he,{className:"lenke",onClick:e.onClick},a.createElement("span",null,e.label),a.createElement(ke.a,{type:"h\xf8yre"}))}var je=function(){var e=J(),n=Object(c.a)(e,2),t=n[0],r=n[1],i=t.omr\u00e5de,o=t.side;return a.createElement(be,null,a.createElement(Ee,{label:"nav.no",onClick:function(){return r({type:"clear"})}}),i&&a.createElement(Ee,{label:i.title,onClick:function(){return r({type:"velgOmr\xe5de","omr\xe5de":i})}}),o&&a.createElement(Ee,{label:o,onClick:function(){return null}}))};function Oe(){var e=Object(r.a)(["\n  padding-left: 5rem;\n  margin-bottom: 1rem;\n"]);return Oe=function(){return e},e}function Me(){var e=Object(r.a)([""]);return Me=function(){return e},e}function ye(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  background: transparent;\n  border: none;\n  color: ",";\n  font-size: ",";\n  text-align: left;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n  svg {\n    width: 2rem;\n    max-height: 2rem;\n    margin-right: 1.5rem;\n    stroke-width: 1.2;\n    opacity: 0.8;\n  }\n"]);return ye=function(){return e},e}function Le(){var e=Object(r.a)(["\n      grid-auto-rows: 4rem;\n    "]);return Le=function(){return e},e}function we(){var e=Object(r.a)(["\n  padding: 2rem 1rem 3rem;\n  position: absolute;\n  left: 0;\n  background-color: white;\n  width: 100vw;\n  border: 0.15rem solid ",";\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(2, minmax(10rem, 20rem));\n  @media (max-width: 40em) {\n    grid-template-columns: 1fr;\n  }\n  ",";\n  z-index: 10;\n"]);return we=function(){return e},e}var xe=u.c.div(we(),g.colors.navLysBla,(function(e){return e.kortMeny&&Object(u.b)(Le())})),ze=u.c.button(ye(),g.colors.navBla,(function(e){return e.small?"1rem":"1.2rem"})),Ce=u.c.div(Me()),Be=u.c.div(Oe());var Ie=function(e){var n=p(),t=Object(c.a)(n,1)[0];return a.createElement(xe,{kortMeny:!t.langMeny},H.omr\u00e5der.map((function(n){return a.createElement(Ce,null,a.createElement(ze,{onClick:function(){return e.setOmr\u00e5de(n)}},t.visIkoner&&n.ikon,n.title),t.langMeny&&a.createElement(Be,null,n.sider.slice(0,3).map((function(e){return a.createElement(ze,{small:!0},e)})),a.createElement(ze,{small:!0},"Mer..")))})))};function Ae(){var e=Object(r.a)(["\n  flex-grow: 1;\n  > * {\n    @media not all and (min-width: 1200px) {\n      display: none;\n    }\n  }\n"]);return Ae=function(){return e},e}function Se(){var e=Object(r.a)(["\n  padding: 1rem 0;\n  @media (min-width: 1200px) {\n    display: none;\n  }\n"]);return Se=function(){return e},e}function Re(){var e=Object(r.a)(["\n  text-transform: none;\n  padding: 0.5em 1.2em;\n"]);return Re=function(){return e},e}function _e(){var e=Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 1.6rem;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return _e=function(){return e},e}function Ve(){var e=Object(r.a)(["\n  padding: 1rem;\n  border-bottom: 0.2rem solid ",";\n  display: flex;\n  align-items: center;\n"]);return Ve=function(){return e},e}var Fe=u.c.div(Ve(),g.colors.navLysBla),He=u.c.button(_e()),Ne=Object(u.c)(ve.a)(Re()),Pe=u.c.div(Se()),qe=u.c.div(Ae());var Je=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(a.useRef)(null),o=p(),l=Object(c.a)(o,1)[0],u=J(),s=Object(c.a)(u,2)[1];return Object(b.a)(i,(function(){return r(!1)})),a.createElement("div",{ref:i},a.createElement(Fe,null,a.createElement(He,{onClick:function(){return s({type:"clear"})}},a.createElement(ae,{height:"2.5rem"})),l.visMeny&&a.createElement(de,{isOpen:t,onClick:function(){return r(!t)},label:"Meny"}),a.createElement(qe,null,a.createElement(je,null)),a.createElement(Ne,{onClick:function(){return s({type:"velgOmr\xe5de","omr\xe5de":H.omr\u00e5der.find((function(e){return e.title.includes("Ditt NAV")}))})}},"Logg inn")),t&&a.createElement(Ie,{"setOmr\xe5de":function(e){s({type:"velgOmr\xe5de","omr\xe5de":e}),r(!1)}}),a.createElement(Pe,null,a.createElement(je,null)))};function Te(){var e=Object(r.a)(["\n  min-height: 6rem;\n  border-top: 0.2rem solid ",";\n"]);return Te=function(){return e},e}var De=u.c.div(Te(),g.colors.navLysBla);var Ge=function(){return a.createElement(De,null)};function Ue(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 1fr;\n  min-height: 100vh;\n  justify-content: space-between;\n"]);return Ue=function(){return e},e}var Ye=u.c.div(Ue());var Ke=function(){var e=J(),n=Object(c.a)(e,1)[0];return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null),i.a.createElement(Ye,null,i.a.createElement(Je,null),"forside"===n.state&&i.a.createElement(W,null),"omr\xe5de"===n.state&&i.a.createElement($,null),"side"===n.state&&i.a.createElement(re,null),i.a.createElement(Ge,null)))};t(81);function Qe(){var e=Object(r.a)(["\n    *:focus {\n      outline: none;\n      box-shadow: 0 0 0 .18rem ",";\n      border-radius: 0.2rem;\n  }\n"]);return Qe=function(){return e},e}var We=Object(u.a)(Qe(),g.colors.fokusFarge);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null,i.a.createElement(k,null,i.a.createElement(We,null),i.a.createElement(Ke,null)))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.520f224e.chunk.js.map