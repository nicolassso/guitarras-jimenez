(this["webpackJsonpguitarras-jimenez"]=this["webpackJsonpguitarras-jimenez"]||[]).push([[0],{12:function(e,a,c){},24:function(e,a,c){},26:function(e,a,c){},27:function(e,a,c){},33:function(e,a,c){},34:function(e,a,c){"use strict";c.r(a);var s=c(1),t=c.n(s),n=c(18),i=c.n(n),r=(c(12),c(6)),l=c(2),o=c(9),j=c(11),d=(c(24),c.p+"static/media/1.907ad9b7.jpg"),b=c.p+"static/media/1.0f95be4b.jpg",u=c.p+"static/media/IMG_8543.4395fd95.jpg",m=c.p+"static/media/2.da129d1a.jpg",h=c.p+"static/media/3.501ba640.jpg",O=c(0),x=[{player:{title:"Big Jazz",desc:"Guitarra Big Jazz con un terminado hecho a mano",image:d}},{player:{title:"Bossa Classic",desc:"Guitarra Bossa Classic con un terminado hecho a mano en M\xe1laga, Espa\xf1a",image:b}},{player:{title:"Big Jazz",desc:"Guitarra Big Jazz con un terminado hecho a mano",image:u}},{player:{title:"Bossa Classic",desc:"Guitarra Bossa Classic con un terminado hecho a mano en M\xe1laga, Espa\xf1a",image:m}},{player:{title:"Bossa Classic",desc:"Guitarra Bossa Classic con un terminado hecho a mano en M\xe1laga, Espa\xf1a",image:h}}],v=x.length;x.push.apply(x,x);var f=function(e){var a=e.pos,c=e.idx,s=(e.activeIdx,function(e,a){var c={styles:{transform:"translateX(".concat(30*e,"rem)")},player:x[a].player};switch(e){case v-1:case v+1:c.styles=Object(j.a)(Object(j.a)({},c.styles),{},{filter:"grayscale(1)"});break;case v:break;default:c.styles=Object(j.a)(Object(j.a)({},c.styles),{},{opacity:0})}return c}(a,c));return Object(O.jsxs)("li",{className:"carousel__slide-item",style:s.styles,children:[Object(O.jsx)("div",{className:"carousel__slide-item-img-link",children:Object(O.jsx)("img",{src:s.player.image,alt:s.player.title})}),Object(O.jsxs)("div",{className:"carousel-slide-item__body",children:[Object(O.jsx)("h4",{children:s.player.title}),Object(O.jsx)("p",{children:s.player.desc})]})]})},p=Array.from(Array(x.length).keys()),N=function(){var e=t.a.useState(p),a=Object(o.a)(e,2),c=a[0],s=a[1],n=t.a.useState(!1),i=Object(o.a)(n,2),r=i[0],l=i[1],j=t.a.useState(0),d=Object(o.a)(j,2),b=d[0],u=d[1],m=c.length,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;r||(l(!0),s((function(a){return a.map((function(c,s){return a[(s+e)%m]}))})))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;r||(l(!0),s((function(a){return a.map((function(c,s){return a[(s-e+m)%m]}))})))};return t.a.useEffect((function(){r&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(a){return setTimeout(a,e)}))}(300).then((function(){return l(!1)}))}),[r]),t.a.useEffect((function(){u((v-c[0]%v)%v)}),[c]),Object(O.jsx)("div",{className:"carousel__wrap",children:Object(O.jsxs)("div",{className:"carousel__inner",children:[Object(O.jsx)("button",{className:"carousel__btn carousel__btn--prev",onClick:function(){return h()},children:Object(O.jsx)("i",{className:"carousel__btn-arrow carousel__btn-arrow--left"})}),Object(O.jsx)("div",{className:"carousel__container",children:Object(O.jsx)("ul",{className:"carousel__slide-list",children:c.map((function(e,a){return Object(O.jsx)(f,{idx:a,pos:e,activeIdx:b},a)}))})}),Object(O.jsx)("button",{className:"carousel__btn carousel__btn--next",onClick:function(){return x()},children:Object(O.jsx)("i",{className:"carousel__btn-arrow carousel__btn-arrow--right"})}),Object(O.jsx)("div",{className:"carousel__dots",children:c.slice(0,v).map((function(e,a){return Object(O.jsx)("button",{onClick:function(){return(e=a)<b&&h(b-e),void(e>b&&x(e-b));var e},className:a===b?"dot active":"dot"},a)}))})]})})};c(26);var g=function(){return Object(O.jsx)("div",{className:"hero-container",children:Object(O.jsx)("div",{className:"carousel",children:Object(O.jsx)(N,{})})})};c(27);var _=function(){return Object(O.jsxs)("div",{className:"footer-container",children:[Object(O.jsx)("div",{className:"footer-links",children:Object(O.jsx)("div",{className:"footer-link-wrapper",children:Object(O.jsxs)("div",{className:"footer-link-items",children:[Object(O.jsx)("h2",{children:"Dise\xf1o"}),Object(O.jsx)(r.b,{to:"/",children:"Nicol\xe1s Leal"})]})})}),Object(O.jsx)("section",{className:"social-media",children:Object(O.jsxs)("div",{className:"social-media-wrap",children:[Object(O.jsx)("small",{className:"website-rights",children:"Nicol\xe1s Leal \xa9 2021"}),Object(O.jsxs)("div",{className:"social-icons",children:[Object(O.jsx)(r.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(O.jsx)("i",{className:"fab fa-facebook-f"})}),Object(O.jsx)(r.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(O.jsx)("i",{className:"fab fa-instagram"})})]})]})})]})};var k=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(_,{})]})};function y(){return Object(O.jsx)("h1",{className:"products",children:"PRODUCTS"})}c(33);var C=c.p+"static/media/logo-guitar.f1ce8a64.PNG";var w=function(){var e=Object(s.useState)(!1),a=Object(o.a)(e,2),c=a[0],t=a[1],n=Object(s.useState)(!0),i=Object(o.a)(n,2),l=(i[0],i[1]),j=function(){return t(!1)},d=function(){window.innerWidth<=960?l(!1):l(!0)};Object(s.useEffect)((function(){d()}),[]),window.addEventListener("resize",d);var b=function(){document.getElementById("nuestras-guitarras").scrollIntoView(!0)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{className:"navbar active",children:Object(O.jsxs)("div",{className:"navbar-container",children:[Object(O.jsx)("div",{className:"menu-icon",onClick:function(){return t(!c)},children:Object(O.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(O.jsx)("div",{className:"section-left",children:Object(O.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(O.jsx)("li",{className:"nav-item active",children:Object(O.jsx)(r.b,{to:"/products",className:"nav-links",onClick:j,children:"Guitars & Bass"})}),Object(O.jsx)("li",{className:"nav-item active",children:Object(O.jsx)(r.b,{to:"/",href:b,className:"nav-links",onClick:j,children:"Amps & Cabinets"})}),Object(O.jsx)("li",{className:"nav-item active",children:Object(O.jsx)(r.b,{to:"/",href:b,className:"nav-links",onClick:j,children:"In Process"})})]})}),Object(O.jsx)("div",{className:"section-center",children:Object(O.jsx)("img",{className:"navbar-logo active",alt:"logo",src:C,height:"200px"})}),Object(O.jsx)("div",{className:"section-right",children:Object(O.jsxs)("ul",{className:c?"nav-menu active-2":"nav-menu",children:[Object(O.jsx)("li",{className:"nav-item active",children:Object(O.jsx)(r.b,{to:"/",href:b,className:"nav-links",onClick:j,children:"Videos"})}),Object(O.jsx)("li",{className:"nav-item active",children:Object(O.jsx)(r.b,{to:"/",href:b,className:"nav-links",onClick:j,children:"Contact"})})]})})]})})})};var B=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(r.a,{basename:"/guitarras-jimenez",children:[Object(O.jsx)(w,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(l.a,{exact:!0,path:"/products",component:y})]})]})})};i.a.render(Object(O.jsx)(B,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4d9a06f0.chunk.js.map