(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s,o,r=n(1),a=n.n(r),i=n(6),O=n.n(i),l=n(2);!function(t){t[t.POMODORO=0]="POMODORO",t[t.SHORT_BREAK=1]="SHORT_BREAK",t[t.LONG_BREAK=2]="LONG_BREAK"}(c||(c={})),function(t){t.KUMHB_SANS="KUMHB_SANS",t.ROBOTO_SLAB="ROBOTO_SLAB",t.SPACE_MONO="SPACE_MONO"}(s||(s={})),function(t){t.SALMON="SALMON",t.CYAN="CYAN",t.PURPLE="PURPLE"}(o||(o={}));var j=n(0),_=function(t){var e=t.currentMode,n=t.setCurrentMode,s=function(t){return"header__button ".concat(e===t?"header__button--active":"")};return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"pomodoro"}),Object(j.jsxs)("div",{className:"header__buttons",children:[Object(j.jsx)("button",{className:s(c.POMODORO),onClick:function(){return n(c.POMODORO)},children:"pomodoro"}),Object(j.jsx)("button",{className:s(c.SHORT_BREAK),onClick:function(){return n(c.SHORT_BREAK)},children:"short break"}),Object(j.jsx)("button",{className:s(c.LONG_BREAK),onClick:function(){return n(c.LONG_BREAK)},children:"long break"})]})]})},u=n(3),b=n(5),d=n.p+"static/media/icon-settings.e0a317db.svg",m=n.p+"static/media/icon-close.79cfecaf.svg",h=function(t){var e=t.timer,n=t.setTimer,c=t.currentFont,a=t.currentColor,i=t.setCurrentFont,O=t.setCurrentColor,_=Object(r.useState)(!1),h=Object(l.a)(_,2),N=h[0],x=h[1],p=Object(r.useState)(a),g=Object(l.a)(p,2),S=g[0],A=g[1],f=Object(r.useState)(c),B=Object(l.a)(f,2),k=B[0],v=B[1],C=Object(r.useState)({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak}),M=Object(l.a)(C,2),R=M[0],E=M[1],L=function(t){return"".concat(k===t?"active":"")},P=function(t){return"".concat(S===t?"active":"")},K=function(t){E(Object(b.a)(Object(b.a)({},R),{},Object(u.a)({},t.target.name,parseInt(t.target.value))))};return Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsx)("img",{src:d,alt:"icon settings",onClick:function(){return x(!0)}}),N&&Object(j.jsxs)("div",{className:"settings__content",children:[Object(j.jsxs)("div",{className:"settings__content__header",children:[Object(j.jsx)("h3",{children:"Settings"}),Object(j.jsx)("img",{src:m,alt:"icon close",onClick:function(){x(!1),E({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak}),A(a),i(c),console.log(c)}})]}),Object(j.jsxs)("div",{className:"settings__content__time",children:[Object(j.jsx)("span",{className:"settings__content__category--title",children:"TIME (MINUTES)"}),Object(j.jsxs)("div",{className:"settings__content__time__content",children:[Object(j.jsxs)("div",{className:"settings__content__time__content__input-wrapper",children:[Object(j.jsx)("label",{children:"pomodoro"}),Object(j.jsx)("input",{name:"pomodoro",type:"number",min:"1",value:R.pomodoro,onChange:K})]}),Object(j.jsxs)("div",{className:"settings__content__time__content__input-wrapper",children:[Object(j.jsx)("label",{children:"short break"}),Object(j.jsx)("input",{name:"shortBreak",type:"number",min:"1",value:R.shortBreak,onChange:K})]}),Object(j.jsxs)("div",{className:"settings__content__time__content__input-wrapper",children:[Object(j.jsx)("label",{children:"long break"}),Object(j.jsx)("input",{name:"longBreak",type:"number",min:"1",value:R.longBreak,onChange:K})]})]})]}),Object(j.jsxs)("div",{className:"settings__content__font",children:[Object(j.jsx)("span",{className:"settings__content__category--title",children:"FONT"}),Object(j.jsxs)("div",{className:"settings__content__font__content",children:[Object(j.jsx)("button",{className:L(s.KUMHB_SANS),onClick:function(){return v(s.KUMHB_SANS)},children:"Aa"}),Object(j.jsx)("button",{className:L(s.ROBOTO_SLAB),onClick:function(){return v(s.ROBOTO_SLAB)},children:"Aa"}),Object(j.jsx)("button",{className:L(s.SPACE_MONO),onClick:function(){return v(s.SPACE_MONO)},children:"Aa"})]})]}),Object(j.jsxs)("div",{className:"settings__content__color",children:[Object(j.jsx)("span",{className:"settings__content__category--title",children:"COLOR"}),Object(j.jsxs)("div",{className:"settings__content__color__content",children:[Object(j.jsx)("button",{className:P(o.SALMON),onClick:function(){return A(o.SALMON)}}),Object(j.jsx)("button",{className:P(o.CYAN),onClick:function(){return A(o.CYAN)}}),Object(j.jsx)("button",{className:P(o.PURPLE),onClick:function(){return A(o.PURPLE)}})]})]}),Object(j.jsx)("div",{className:"settings__content__apply",children:Object(j.jsx)("button",{onClick:function(){x(!1),n(R),O(S),i(k)},children:"Apply"})})]})]})},N=function(t){var e=t.timer,n=(t.currentMode,Object(r.useRef)(null));e.pomodoro;return Object(j.jsxs)("button",{className:"timer",children:[Object(j.jsx)("svg",{children:Object(j.jsx)("circle",{cx:"50%",cy:"50%",r:"170",strokeDasharray:"1164",strokeDashoffset:"0"})}),Object(j.jsxs)("div",{className:"timer__content",children:[Object(j.jsx)("span",{ref:n,className:"timer__content__count",children:e.pomodoro}),Object(j.jsx)("span",{className:"timer__content__action",children:"PAUSE"})]})]})};var x=function(){var t=document.body.parentNode,e=Object(r.useState)(c.POMODORO),n=Object(l.a)(e,2),a=n[0],i=n[1],O=Object(r.useState)(s.KUMHB_SANS),u=Object(l.a)(O,2),b=u[0],d=u[1],m=Object(r.useState)(o.SALMON),x=Object(l.a)(m,2),p=x[0],g=x[1],S=Object(r.useState)({pomodoro:10,shortBreak:5,longBreak:15}),A=Object(l.a)(S,2),f=A[0],B=A[1];return Object(r.useEffect)((function(){t.setAttribute("data-font",b),t.setAttribute("data-color",p)}),[t,b,p]),console.log(b),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(_,{currentMode:a,setCurrentMode:i}),Object(j.jsx)(N,{timer:f,currentMode:a}),Object(j.jsx)(h,{timer:f,setTimer:B,currentFont:b,setCurrentFont:d,currentColor:p,setCurrentColor:g})]})};n(12);O.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c04eb1eb.chunk.js.map