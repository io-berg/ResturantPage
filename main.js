(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),l=new URL(t(122),t.b),d=i()(a()),u=s()(l);d.push([e.id,"body {\n    background-image: url("+u+");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n#title-bar {\n    font-family: 'Raleway', sans-serif;\n    text-align: center;\n    letter-spacing: 20px;\n    color:white;\n    font-size: x-large;\n}\n\n#resturant-title {\n    text-align: center;\n    font-family: 'Playfair Display', serif;\n    color:white;\n}\n\n\n#nav-bar {\n    padding: 0;\n    top: 5rem;\n    height: 4rem;\n    width: 100%;\n    position: inherit;\n    display:flex;\n    align-content: center;\n    justify-content: center;\n}\n\n#nav-bar-link-list {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    padding-left: 0px;\n}\n\n#content {\n    width:800px;\n    background-color: white;\n    margin: auto;\n}\n\n.nav-bar-link {\n    display: flex;\n    background-color: rgb(241, 241, 241);\n    color:black;\n    text-decoration: none;\n    height:64px;\n    width: 200px;\n    border-radius: 5px 5px 0px 0px;\n}\n\n.nav-bar-link :hover {\n    background-color: aqua;\n}\n\n.nav-text {\n    text-align: center;\n    margin:auto;\n    text-decoration: none;\n    font-family: 'Raleway', sans-serif;\n    color:black;\n    font-weight: bolder;\n}",""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},122:(e,n,t)=>{e.exports=t.p+"9c6135c396af00b80f95.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.querySelector("#content");function h(){y.style.fontFamily="Raleway",y.style.display="flex",y.style.flexDirection="column",y.style.alignItems="center",function(){const e=document.createElement("h1");e.innerText="Welcome to the honeyshop",e.style.textAlign="center",e.style.marginBottom="2px",y.appendChild(e)}(),function(){const e=document.createElement("h3");e.innerText="Where the secret ingredient is always honey",e.style.textAlign="center",e.style.marginTop=0,y.appendChild(e)}(),function(){const e=document.createElement("div");e.style.textAlign="center";const n=document.createElement("h3");n.innerText="Open Hours",n.textAlign="center";var t=["Monday: "+v.monday,"Tuesday: "+v.tuesday,"Wednesday: "+v.wednesday,"Thursday: "+v.thursday,"Friday: "+v.friday,"Saturday: "+v.saturday,"Sunday: "+v.sunday];e.appendChild(n),t.forEach((n=>{const t=document.createElement("p");t.innerText=n,e.appendChild(t)})),y.appendChild(e)}(),function(){const e=document.createElement("div"),n=document.createElement("h3");n.innerText="Location";const t=document.createElement("p");t.innerText="123 Street Street, Cityville, Country",e.appendChild(n),e.appendChild(t),y.appendChild(e),e.style.marginBottom="40px"}()}var v={monday:"8am - 8pm",tuesday:"6am - 6pm",wednesday:"6am - 6pm",thursday:"6am - 6pm",friday:"10am - 12pm",saturday:"10am - 12pm",sunday:"10am - 6pm"};t(122),document.querySelector("#homeBtn").addEventListener("click",(function(){document.querySelector("#content").innerHTML="",h()})),h()})()})();