(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{101:function(e,t,a){e.exports=a(221)},219:function(e,t,a){},22:function(e,t,a){e.exports={container:"Cards_container__10wDC",card:"Cards_card__23Ggw",infected:"Cards_infected__2pI8G",recovered:"Cards_recovered__1Hs_K",deaths:"Cards_deaths__ndc6W"}},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),o=a.n(c),l=a(4),u=a.n(l),i=a(10),s=a(88),m=a(89),d=a(98),f=a(97),p=a(34),v=a.n(p),E="https://covid19.mathdro.id/api",h=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,v.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E,a="".concat(E,"/countries/").concat(t),e.prev=2,e.next=5,v.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=(a(70),a(44)),O=a.n(y),x=a(240),C=a(245),j=a(241),N=a(242),w=a(21),S=a.n(w),k=a(45),D=a.n(k),P=a(22),I=a.n(P),R=function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.lastUpdate,o=t.recovered;return a?r.a.createElement("div",{className:I.a.container},r.a.createElement(x.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(x.a,{item:!0,component:C.a,xs:12,md:3,className:D()(I.a.card,I.a.infected)},r.a.createElement(j.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(N.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(N.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(N.a,{variant:"body2"},"Active"))),r.a.createElement(x.a,{item:!0,component:C.a,xs:12,md:3,className:D()(I.a.card,I.a.recovered)},r.a.createElement(j.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(N.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:o.value,duration:2,separator:","})),r.a.createElement(N.a,{color:"textSecondary"},new Date(c).toDateString()))),r.a.createElement(x.a,{item:!0,component:C.a,xs:12,md:3,className:D()(I.a.card,I.a.deaths)},r.a.createElement(j.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Death"),r.a.createElement(N.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(N.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(N.a,{variant:"body2"},"Deaths"))))):"Loading..."},M=a(16),B=a(56),A=a(94),L=a.n(A),T=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,l=e.country,s=Object(n.useState)([]),m=Object(M.a)(s,2),d=m[0],f=m[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=d.length?r.a.createElement(B.b,{data:{labels:d.map((function(e){return e.date})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"red",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deaths",borderColor:"black",backgroundColor:"rgba(0, 0, 0, .5)",fill:!0}]}}):null,v=a?r.a.createElement(B.a,{data:{labels:["Infects","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(0,255,0, .5)","rgba(0, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null;return r.a.createElement("div",{className:L.a.container},l?v:p)},U=a(246),J=a(243),G=a(95),H=a.n(G),V=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(M.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(U.a,{className:H.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},K=a(244),q=a(25),X=a(9),z=a.n(X);a(219);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W=r.a.createElement("path",{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",className:""}),Z=function(e){var t=e.svgRef,a=e.title,n=Q(e,["svgRef","title"]);return r.a.createElement("svg",F({viewBox:"0 0 320 512",ref:t},n),a?r.a.createElement("title",null,a):null,W)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(Z,F({svgRef:t},e))}));a.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var te=r.a.createElement("path",{d:"M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z",className:""}),ae=function(e){var t=e.svgRef,a=e.title,n=ee(e,["svgRef","title"]);return r.a.createElement("svg",$({viewBox:"0 0 256 512",ref:t},n),a?r.a.createElement("title",null,a):null,te)},ne=r.a.forwardRef((function(e,t){return r.a.createElement(ae,$({svgRef:t},e))}));a.p;function re(e){return r.a.createElement("nav",{className:z.a.navbar},r.a.createElement("ul",{className:z.a["navbar-nav"]},r.a.createElement(ce,null),r.a.createElement("span",{className:z.a.flexbuffer}),e.children),r.a.createElement("div",{className:z.a.navbuffer}))}function ce(){return r.a.createElement("div",{className:z.a.title},r.a.createElement(q.b,{to:"/"},r.a.createElement("h3",null,"COVID-19 Tracker")))}function oe(e){var t=Object(n.useState)(!1),a=Object(M.a)(t,2),c=a[0],o=a[1];return r.a.createElement("li",{className:z.a["nav-item"]},r.a.createElement("a",{href:"#a",className:z.a["icon-button"],onClick:function(){return o(!c)}},e.icon),c&&e.children)}function le(){var e=Object(n.useState)("main"),t=Object(M.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),l=Object(M.a)(o,2),u=l[0],i=l[1],s=Object(n.useRef)(null);function m(e){var t=e.offsetHeight;i(t)}function d(e){return r.a.createElement("div",{className:z.a["menu-item"],onClick:function(){return e.goToMenu&&c(e.goToMenu)}},r.a.createElement("span",{className:z.a["icon-button"]},e.leftIcon),e.children,r.a.createElement("span",{className:z.a["icon-right"]},e.rightIcon))}return Object(n.useEffect)((function(){var e;i(null===(e=s.current)||void 0===e?void 0:e.firstChild.offsetHeight)}),[]),r.a.createElement("div",{className:z.a.dropdown,style:{height:u},ref:s},r.a.createElement(K.a,{in:"main"===a,timeout:500,unmountOnExit:!0,classNames:"menu-primary",onEnter:m},r.a.createElement("div",{className:z.a.menu},r.a.createElement(q.b,{to:"/COVID-19-summary"},r.a.createElement(d,null,"Global Statistics")),r.a.createElement(d,{leftIcon:r.a.createElement(ne,null),goToMenu:"CountryPicker"},"CountryPicker"),r.a.createElement(q.b,{to:"/about"},r.a.createElement(d,null,"About")))),r.a.createElement(K.a,{in:"CountryPicker"===a,timeout:500,unmountOnExit:!0,classNames:"menu-secondary",onEnter:m},r.a.createElement("div",{className:z.a.menu},r.a.createElement(q.b,{to:"/countryPickerPage"},r.a.createElement(d,null,"Country Picker")),r.a.createElement(d,{leftIcon:"<",goToMenu:"main"},"Go Back"))))}var ue=function(){return r.a.createElement(re,null,r.a.createElement(oe,{icon:r.a.createElement(Y,null)},r.a.createElement(le,null)))},ie=a(28),se=a.n(ie),me=function(e){var t=e.country,a=Object(n.useState)([]),c=Object(M.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,b(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),o.confirmed?r.a.createElement(x.a,{item:!0,component:C.a,xs:9,sm:2,xm:2,className:se.a.card},r.a.createElement(j.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement("hr",{className:se.a.lineShadow}),r.a.createElement(N.a,{className:se.a.textContainer},r.a.createElement("span",null,"Confirmed: "),r.a.createElement(S.a,{start:0,end:o.confirmed.value,duration:2,separator:","})),r.a.createElement(N.a,{className:se.a.textContainer},r.a.createElement("span",null,"Recovered: "),r.a.createElement(S.a,{start:0,end:o.recovered.value,duration:2,separator:","})),r.a.createElement(N.a,{className:se.a.textContainer},r.a.createElement("span",null,"Deaths: "),r.a.createElement(S.a,{start:0,end:o.deaths.value,duration:2,separator:","})))):"Loading"},de=a(20);var fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"https://covid19.mathdro.id/api"),r.a.createElement("h2",null,"Technologies used:"),r.a.createElement("p",null,"HTML/CSS ",r.a.createElement("br",null),"ReactJS ",r.a.createElement("br",null),"NodeJS ",r.a.createElement("br",null),"Express ",r.a.createElement("br",null),"MongoDB ",r.a.createElement("br",null),"Material UI ",r.a.createElement("br",null),"Router ",r.a.createElement("br",null),"Axios ",r.a.createElement("br",null),"Javascript"))},pe=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return console.log(t),console.log(a),r.a.createElement(q.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ue,null),r.a.createElement(de.c,null,r.a.createElement(de.a,{path:"/COVID-19-summary",exact:!0},r.a.createElement("h2",null,"COVID-19 Tracker"),r.a.createElement("div",{className:O.a.cardContainer},r.a.createElement(x.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(me,{country:"USA"}),r.a.createElement(me,{country:"China"}),r.a.createElement(me,{country:"Korea, South"})))),r.a.createElement(de.a,{path:"/about",component:fe}),r.a.createElement(de.a,{path:"/countryPickerPage"},r.a.createElement(R,{data:t}),r.a.createElement("div",{className:O.a.container},r.a.createElement(V,{handleCountryChange:this.handleCountryChange})),r.a.createElement("div",{className:O.a.container},r.a.createElement(T,{data:t,country:a}))))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root"))},28:function(e,t,a){e.exports={container:"singularCard_container__2Fwkm",card:"singularCard_card__2KN9-",infected:"singularCard_infected__1t9EH",recovered:"singularCard_recovered__U5SMX",deaths:"singularCard_deaths__1TmEP",textContainer:"singularCard_textContainer__3BOj9"}},44:function(e,t,a){e.exports={container:"App_container__1fpIO",cardContainer:"App_cardContainer__1Zj2S"}},70:function(e,t,a){},9:function(e,t,a){e.exports={title:"Nav_title__1q9dX",flexbuffer:"Nav_flexbuffer__2qeF-",navbuffer:"Nav_navbuffer__1dSAP",navbar:"Nav_navbar__23LQn","navbar-nav":"Nav_navbar-nav__3u-xt","nav-item":"Nav_nav-item__2M8jn","icon-button":"Nav_icon-button__10TDI",dropdown:"Nav_dropdown__18Cru",menu:"Nav_menu__2pMol","menu-item":"Nav_menu-item__KbqBR","icon-right":"Nav_icon-right__1dXyg"}},94:function(e,t,a){e.exports={container:"Chart_container__y-0J7"}},95:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__P5pax"}}},[[101,1,2]]]);
//# sourceMappingURL=main.189cbe65.chunk.js.map