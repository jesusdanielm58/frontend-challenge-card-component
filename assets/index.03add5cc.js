import{p as e,a as s,o as n,c as o,b as r,d as a,e as c}from"./vendor.943187bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();const t={};e("data-v-ca190068");const l={class:"card"},i=[r("div",{class:"card-header"},[r("img",{src:"/frontend-challenge-card-component/assets/illustration-hero.38d7bf58.svg",alt:"hero",class:"hero"})],-1),r("div",{class:"card-body"},[r("h1",null,"Order summary"),r("p",{class:"acentuado"},"You can now listen to millions of songs, audibooks, and poadcast on any device anywhere you like!"),r("div",{class:"song"},[r("img",{src:"/frontend-challenge-card-component/assets/icon-music.80cb256f.svg",alt:"music-icon"}),r("div",null,[r("p",{class:"plan"},"Annual Plan"),r("p",{class:"cost acentuado"},"$59.99/year")]),r("a",{href:"#",class:"change"},"Change")]),r("button",null,"Proceed to payment"),r("a",{href:"#",class:"cancel"},"Cancel Order")],-1)];s(),t.render=function(e,s){return n(),o("div",l,i)},t.__scopeId="data-v-ca190068";const d={class:"container"};c({setup:e=>(e,s)=>(n(),o("div",d,[a(t)]))}).mount("#app");
