if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const u=e=>r(e,o),c={module:{uri:o},exports:t,require:u};s[o]=Promise.all(i.map((e=>c[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuepwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vuepwa/css/app.094a564c.css",revision:null},{url:"/vuepwa/index.html",revision:"6a836fca08a3275a99362777ba861fa5"},{url:"/vuepwa/js/app.0b6c92e8.js",revision:null},{url:"/vuepwa/js/chunk-vendors.31dc5f66.js",revision:null},{url:"/vuepwa/manifest.json",revision:"0cecec95db209a32781eb20aa8416046"},{url:"/vuepwa/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
