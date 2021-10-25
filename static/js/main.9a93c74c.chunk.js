(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{19:function(e,c,n){},20:function(e,c,n){},21:function(e,c,n){},31:function(e,c,n){},32:function(e,c,n){},33:function(e,c,n){},34:function(e,c,n){},35:function(e,c,n){},36:function(e,c,n){},37:function(e,c,n){},38:function(e,c,n){},39:function(e,c,n){"use strict";n.r(c);var t=n(1),a=n.n(t),r=n(12),s=n.n(r),i=(n(19),n(5));n(20);var o=n(6),l=n(2),j=(n(21),n(0));var d=function(e){var c=e.theme,n=e.setTheme,t=Object(l.f)();return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{className:"header-left",onClick:function(){t.push("/countries/")},children:Object(j.jsx)("p",{children:"Where in the world?"})}),Object(j.jsxs)("div",{className:"header-right",onClick:function(){n((function(e){var c="Dark"===e?"Light":"Dark";return window.localStorage.setItem("theme",c),c}))},children:["Dark"===c?Object(j.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sun",className:" mode-icon svg-inline--fa fa-sun",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(j.jsx)("path",{fill:"currentColor",d:"M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"})}):Object(j.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"moon",className:"mode-icon svg-inline--fa fa-moon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(j.jsx)("path",{fill:"currentColor",d:"M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"})}),Object(j.jsxs)("p",{className:"mode-text",children:["Dark"===c?"Light":"Dark"," Mode"]})]})]})};n(31),n(32);var u=function(e){var c=e.children;return Object(j.jsx)("div",{className:"searchSection-container",children:c})};n(33);var f=function(e){var c=e.state,n=e.setState;return Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"magnifying-glass",className:"search-icon svg-inline--fa fa-magnifying-glass",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(j.jsx)("path",{fill:"currentColor",d:"M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"})}),Object(j.jsx)("input",{type:"text",className:"search-input",value:c,onInput:function(e){n(e.target.value)},placeholder:"Search for a country..."})]})};n(34);var b=function(e){var c=e.state,n=e.setState,a=Object(t.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1];function l(e){n((function(c){return c===e?"":e})),o(!1)}return Object(j.jsxs)("div",{className:"filter-container",children:[Object(j.jsxs)("div",{className:"selection",onClick:function(){return o((function(e){return!e}))},children:[Object(j.jsx)("p",{className:"filter-placeholder",children:""!==c?c:"Filter by Region"}),Object(j.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-down",className:"arrow-icon svg-inline--fa fa-angle-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Object(j.jsx)("path",{fill:"currentColor",d:"M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"})})]}),s&&Object(j.jsxs)("div",{className:"filter-options",children:[Object(j.jsx)("div",{onClick:function(){return l("Africa")},children:"Africa"}),Object(j.jsx)("div",{onClick:function(){return l("Americas")},children:"Americas"}),Object(j.jsx)("div",{onClick:function(){return l("Asia")},children:"Asia"}),Object(j.jsx)("div",{onClick:function(){return l("Europe")},children:"Europe"}),Object(j.jsx)("div",{onClick:function(){return l("Oceania")},children:"Oceania"})]})]})};n(35),n(36);var h=function(e){var c=e.country,n=Object(l.f)();return Object(j.jsxs)("div",{className:"country-container",onClick:function(){window.localStorage.setItem("currentCountry",JSON.stringify(c)),n.push("country/".concat(c.name.common),{country:c})},children:[Object(j.jsx)("img",{className:"flag",src:c.flags.png,alt:"".concat(c.name.common," flag")}),Object(j.jsxs)("div",{className:"country-infos",children:[Object(j.jsx)("p",{className:"name",children:c.name.common}),Object(j.jsxs)("p",{className:"info",children:["Population: ",Object(j.jsx)("span",{children:new Intl.NumberFormat("en-EN").format(c.population)})]}),Object(j.jsxs)("p",{className:"info",children:["Region: ",Object(j.jsx)("span",{children:c.region})]}),Object(j.jsxs)("p",{className:"info",children:["Capital: ",Object(j.jsx)("span",{children:c.capital})]})]})]})};var m=function(e){var c=e.countries;return Object(j.jsx)("div",{className:"resultSection-countainer",children:void 0!==c&&c.map((function(e){return Object(j.jsx)(h,{country:e},e.name.official)}))})};var O=function(e){var c=e.data,n=Object(t.useState)(c),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(t.useState)(""),l=Object(i.a)(o,2),d=l[0],h=l[1],O=Object(t.useState)(""),x=Object(i.a)(O,2),v=x[0],g=x[1];return Object(t.useEffect)((function(){var e=""!==d?c.filter((function(e){return e.name.common.toLowerCase().includes(null===d||void 0===d?void 0:d.toLowerCase())})):c;e=""!==v?e.filter((function(e){return e.region===v})):e,s(e)}),[d,v,c]),Object(j.jsxs)("div",{className:"body-container",children:[Object(j.jsxs)(u,{children:[Object(j.jsx)(f,{state:d,setState:h}),Object(j.jsx)(b,{state:v,setState:g})]}),Object(j.jsx)(m,{countries:r})]})};n(37),n(38);var x=function(e){var c=e.country,n=Object(l.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"border-contry",onClick:function(){n.push("".concat(c.name.common),{country:c})},children:c.name.common},c.cioc)})};var v=function(e){var c,n,t,a=e.countries,r=(null!==(c=Object(l.g)().state)&&void 0!==c?c:JSON.parse(window.localStorage.getItem("currentCountry"))).country;console.log(r),window.scrollTo(0,0);var s=Object.values(r.name.nativeName),i=s[0].common;if(s.length>1)for(var o=1;o<s.length;o++)i+=", ".concat(s[o].common);var d=Object.values(r.tld),u=d[0];if(d.length>1)for(var f=1;f<d.length;f++)u+=", ".concat(d[f]);var b=Object.values(r.currencies),h=b[0].name;if(b.length>1)for(var m=1;m<b.length;m++)h+=", ".concat(b[m].name);var O=Object.values(r.languages),v=O[0];if(O.length>1)for(var g=1;g<O.length;g++)v+=", ".concat(O[g]);function p(e){var c=a.findIndex((function(c){return c.cca2===e||c.cca3===e||c.ccn3===e||c.cioc===e}));return a[c]}return Object(j.jsxs)("div",{className:"details-container",children:[Object(j.jsx)("div",{className:"flag-container",children:Object(j.jsx)("img",{className:"detail-flag",src:r.flags.svg,alt:"".concat(r.name.common," flag")})}),Object(j.jsxs)("div",{className:"info-container",children:[Object(j.jsx)("p",{children:r.name.common}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Native Name: ",Object(j.jsx)("span",{children:i})]}),Object(j.jsxs)("p",{children:["Population: ",Object(j.jsx)("span",{children:new Intl.NumberFormat("en-EN").format(r.population)})]}),Object(j.jsxs)("p",{children:["Region: ",Object(j.jsx)("span",{children:r.region})]}),Object(j.jsxs)("p",{children:["Sub Region: ",Object(j.jsx)("span",{children:r.subregion})]}),Object(j.jsxs)("p",{children:["Capital: ",Object(j.jsx)("span",{children:r.capital})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Top Level Domain: ",Object(j.jsx)("span",{children:u})]}),Object(j.jsxs)("p",{children:["Currencies: ",Object(j.jsx)("span",{children:h})]}),Object(j.jsxs)("p",{children:["Languages: ",Object(j.jsx)("span",{children:v})]})]})]}),Object(j.jsxs)("div",{className:"border-countries-container",children:[Object(j.jsx)("p",{children:"Border Countries: \xa0"}),(null===(n=r.borders)||void 0===n?void 0:n.length)>0?null===(t=r.borders)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(x,{country:p(e)})})):Object(j.jsx)("p",{className:"no-borders",children:"No country"})]})]})]})};var g=function(e){var c=e.data,n=Object(l.f)();return console.log(c),Object(j.jsxs)("div",{className:"detail-container",children:[Object(j.jsxs)("div",{className:"back",onClick:function(){return n.goBack()},children:[Object(j.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-left",className:"back-icon svg-inline--fa fa-arrow-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(j.jsx)("path",{fill:"currentColor",d:"M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"})}),Object(j.jsx)("p",{children:"Back"})]}),Object(j.jsx)(v,{countries:null!==c&&void 0!==c?c:JSON.parse(window.localStorage.getItem("cachedData"))})]})};var p=function(){var e,c=Object(t.useState)(),n=Object(i.a)(c,2),a=n[0],r=n[1],s=Object(t.useState)(null!==(e=window.localStorage.getItem("theme"))&&void 0!==e?e:"Dark"),u=Object(i.a)(s,2),f=u[0],b=u[1];return Object(t.useEffect)((function(){var e;e=r,fetch("https://restcountries.com/v3.1/all").then((function(e){return e.json()})).then((function(c){window.localStorage.setItem("cachedData",JSON.stringify(c)),e(c)}))}),[]),Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"App ".concat(f),children:[Object(j.jsx)(d,{theme:f,setTheme:b}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:["/","/countries"],exact:!0,children:Object(j.jsx)(O,{data:a})}),Object(j.jsx)(l.a,{path:["/country/:country","/countries/country/:country"],children:Object(j.jsx)(g,{data:a})})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(c){var n=c.getCLS,t=c.getFID,a=c.getFCP,r=c.getLCP,s=c.getTTFB;n(e),t(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),w()}},[[39,1,2]]]);
//# sourceMappingURL=main.9a93c74c.chunk.js.map