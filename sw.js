if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return n[e]||(r=new Promise(async r=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=r}else importScripts(e),r()})),r.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},r=(r,n)=>{Promise.all(r.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(r)};self.define=(r,s,i)=>{n[r]||(n[r]=Promise.resolve().then(()=>{let n={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return n;case"module":return o;default:return e(r)}})).then(e=>{const r=i(...e);return n.default||(n.default=r),n})}))}}define("./sw.js",["./workbox-ff448b7f"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"bundle.css",revision:"481efda61aa980fa086b135c4e3f03d4"},{url:"bundle.js",revision:"b37f43d4ddb93eb8703a459df73b564f"},{url:"favicon.png",revision:"c8f26ae99b1a32a101924c83781a87a9"},{url:"html2canvas.min.js",revision:"07dfafa027eb2f5e81f234eeaa30ec16"},{url:"icon.png",revision:"c0e7522596d105b700d1d6d0cbbcd47c"},{url:"index.html",revision:"f8cf0f8a1ad847ed72baa4e365d9454f"},{url:"pokemon_icon_000.png",revision:"b8fd366bba04e4f3157a3f1c5d579bc2"}],{}),e.registerRoute(/.*json$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*PogoAssets.*\.(?:png)$/,new e.CacheFirst({cacheName:"pm-shiny-cache--cdn-image",plugins:[new e.ExpirationPlugin({maxEntries:1e3,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
