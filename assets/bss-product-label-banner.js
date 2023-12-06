!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){const n=e=>{let t=!1;if(e&&e.length)for(let n=0;n<e.length;n++)if(1==e[n].enable_allowed_countries)return t=!0,t;return t};e.exports={bssGetCountryCode:(e,t)=>{let r=n(e.configData),o=n(e.configDataBanner),a=(e=>{let t=!1;if(e&&e.length)for(let n=0;n<e.length;n++)if(1==e[n].label_text_enable&&e[n].translations&&e[n].translations.length)return t=!0,t;return t})(e.configData);if(!e.countryCode)if(e.currentPlan&&("ten_usd"==e.currentPlan||"twenty_usd"==e.currentPlan)&&(r||o||a)){let n="";"undefined"!=typeof Storage&&sessionStorage.countryCode&&"NA"!=sessionStorage.countryCode&&"undefined"!=sessionStorage.countryCode&&(n=sessionStorage.countryCode),""==n?t.ajax({url:"https://geo-ip-service.bsscommerce.com/geoip/getCountryByIP",data:{domain:Shopify.shop,app:"label"},method:"POST",success:function(t){t.success?(e.countryCode=t.countryCode,"undefined"!=typeof Storage&&(sessionStorage.countryCode=t.countryCode)):console.log("Could not get country by IP")}}):e.countryCode=n}else e.countryCode="UNDEFINED"},bssProductLabelLoadScript:(e,t)=>{var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n)},compareVersion:(e,t)=>{if("string"!=typeof e)return!1;if("string"!=typeof t)return!1;e=e.split("."),t=t.split(".");const n=Math.min(e.length,t.length);for(let r=0;r<n;++r){if(e[r]=parseInt(e[r],10),t[r]=parseInt(t[r],10),e[r]>t[r])return 1;if(e[r]<t[r])return-1}return e.length==t.length?0:e.length<t.length?-1:1}}},function(e,t,n){"use strict";function r(e,t){let n="";if(0==e.banner_text_background_type)n=`background-color: ${e.banner_text_background_color};`;else if(1==e.banner_text_background_type){n=`background-image: ${`linear-gradient(${0==e.banner_background_preset?"to right":1==e.banner_background_preset?"to bottom":2==e.banner_background_preset?"45deg":"135deg"}, ${e.banner_background_gradient[0]} , ${e.banner_background_gradient[1]})`};`}else n=`background-image: url(${e.banner_background_cdn_img})`;if(e.customer_type,e.customer_type,0==e.product_type);else if(("ten_usd"==BSS_PL.currentPlan||"twenty_usd"==BSS_PL.currentPlan)&&2==e.product_type){if(!e.tags)return;{let n=e.tags.split(","),r=t.tags;if(!n.length)return;if(!r.length)return;if(!n.filter((function(e){return-1!==r.indexOf(e)})).length)return}}return`<div class="bss-pl-banner-wrapper" style="\n            width: 100%;\n            height: 60px;\n            text-align: center;\n            overflow: hidden;\n            font-weight: 600;\n            position: relative;\n            ">\n                <div style ="\n                    width: 100%;\n                    height: 60px;\n                    position: absolute;\n                    opacity: ${e.banner_background_opacity/100};\n                    ${n}\n                "> </div>\n                <${e.banner_clickable?"a ":"div "} ${e.banner_clickable?`href='${e.clickable_url}'`:""} ${e.is_open_in_newtab?'target="_blank"':""} class="bss-pl-banner"  style="\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    text-decoration: none;\n                    width: 100%;\n                    height: 60px;\n                    position: absolute;\n                    color: ${e.banner_text_color?e.banner_text_color.toString():"#000000"};\n                    font-family: ${e.banner_text_font_family||"inherit"};\n                    font-size: ${e.banner_text_font_size||16}px;\n                    font-style: ${!e.banner_text_formatting||1!=e.banner_text_formatting&&3!=e.banner_text_formatting?"normal":"italic"};\n                    font-weight: ${!e.banner_text_formatting||2!=e.banner_text_formatting&&3!=e.banner_text_formatting?"normal":"bold"};\n                ">`+unescape(e.banner_text)+`\n                </${e.banner_clickable?"a":"div"}>\n                ${e.is_add_x_button?'<span class="close-banner" style="position: absolute; top: 1px; right: 0px; color: #26282a; cursor: pointer; font-size: 15px; z-index:7; width:30px; height:25px; background: transparent;">&#10005;</span>':""}\n        </div>`}function o(e,t,n,o){var a="products"==t,i=""==n[0]&&!n[1],c="";"pages"==t&&(c=n[n.length-1]);var l="collections"==t||-1!==n.indexOf("collections")&&!a&&!i,s="search"==t||"search-results"==c||"search-results-page"==c||-1!==n.indexOf("search")&&!a&&!l&&!i,u=!(l||a||s||i);if(e.isAllowCountry=function(t){var n=!0;t.enable_allowed_countries&&t.locations&&(n=-1!==t.locations.split(",").indexOf(e.countryCode));return n},e.configDataBanner&&e.configDataBanner.length){const n=e.configDataBanner.filter(t=>{var n=function(e,t,n){var r=!0;if(n.enable_visibility_date&&("ten_usd"==t.currentPlan||"twenty_usd"==t.currentPlan)){var o=new Date;n.from_date&&!n.to_date?o<new Date(n.from_date)&&(r=!1):n.to_date&&!n.from_date?o>new Date(n.to_date)&&(r=!1):n.from_date&&n.to_date?(o<new Date(n.from_date)||o>new Date(n.to_date))&&(r=!1):n.from_date||n.to_date||(r=!0)}return r}(0,e,t),r=function(e,t){const n=t.enable_fixed_time,r=JSON.parse(t.fixed_time);let o=!0;if(n&&("ten_usd"==e.currentPlan||"twenty_usd"==e.currentPlan)){let e=new Date,t=e.getDay();if(r[t].selected){if(!r[t].allDay){let n=+(e.getHours().toString()+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()).toString()),a=+r[t].timeStart.replace(":",""),i=+r[t].timeEnd.replace(":","");(n<a||n>i)&&(o=!1)}}else o=!1}return o}(e,t);const o=t.pages.split(",");return e.isAllowCountry(t)&&(o.includes("1")&&a||o.includes("2")&&l||o.includes("7")&&i||o.includes("3")&&u||o.includes("4")&&s)&&n&&r});"free"==e.currentPlan||"five_usd"==e.currentPlan?!0:n.slice(0).reverse().map(t=>{var r,o,a;(function(e,t){var n=!0;if(0==t.customer_type)n=!0;else if(3==t.customer_type){n=!1;let r=e.customerTags.split(",");for(let e=0;e<r.length;e++)if(null!==t.customer_tags&&void 0!==t.customer_tags&&""!==r[e]&&t.customer_tags.includes(r[e])){n=!0;break}}else 1==t.customer_type?n="null"!=e.customerTags:2==t.customer_type?("null"==e.customerId||-1==t.customer_ids.indexOf(e.customerId))&&(n=!1):n=!0;if(2==t.exclude_customer_type){let r=e.customerTags.split(",");for(let e=0;e<r.length;e++)if(null!==t.exclude_customer_tags&&void 0!==t.exclude_customer_tags&&""!==r[e]&&t.exclude_customer_tags.includes(r[e])){n=!1;break}}else 1==t.exclude_customer_type&&"null"!=e.customerId&&-1!=t.exclude_customer_ids.indexOf(e.customerId)&&(n=!1);return n})(e,t)||(o=t,(a=(r=n).indexOf(o))>-1&&r.splice(a,1))}),n.map(n=>{if("products"!=t||2!=n.product_type||"ten_usd"!=e.currentPlan&&"twenty_usd"!=e.currentPlan){if(0==n.product_type||2==n.product_type&&("free"==e.currentPlan||"five_usd"==e.currentPlan)){let t=r(n),o=document.querySelector(".bss-pl-banner-wrapper");if(t&&0==n.position&&!o){let r=document.querySelector("body");29495==e.storeId&&n.banner_scroll&&(r=document.querySelector("body header"));var a=document.createElement("div");n.banner_scroll&&(a.style.position="sticky",a.style.top="0",a.style.zIndex="9999"),a.innerHTML=t,r.prepend(a)}}}else{let t=new XMLHttpRequest;t.open("GET",o),t.onreadystatechange=()=>{if(t.readyState===XMLHttpRequest.DONE){const o=t.status;(0===o||o>=200&&o<400)&&function(t){var o=[],a=document.querySelectorAll("#label-product-metafields-info"),i=document.querySelectorAll("#main-label-product-metafields-info");try{if(o=(o=JSON.parse(t)).filter(e=>null!==e.price&&null!==e.available),a.length)for(let e=0;e<a.length;e++)o.push(JSON.parse(a[e].innerText));if(i.length)for(let e=0;e<i.length;e++)o.push(JSON.parse(i[e].innerText))}catch(e){console.log("Product banner: JSON parse returns no item")}o.length&&o.map((function(t){let o=r(n,t),a=document.querySelector(".bss-pl-banner-wrapper");if(o&&0==n.position&&!a){let t=document.querySelector("body");29495==e.storeId&&n.banner_scroll&&(t=document.querySelector("body header"));var i=document.createElement("div");n.banner_scroll&&(i.style.position="sticky",i.style.top="0",i.style.zIndex="9999"),i.innerHTML=o,t.prepend(i)}}))}(t.responseText)}},t.send()}});const c=setInterval(()=>{const e=document.querySelector(".close-banner"),t=document.querySelector(".bss-pl-banner-wrapper");e&&e.addEventListener("click",()=>{t.remove()}),e&&t&&clearInterval(c)},300)}}n.d(t,"a",(function(){return i}));var a=n(0);function i(e){var t=[],n=[],r=window.location.pathname;r.endsWith("/")&&(r=r.slice(0,-1));var i=r.split("/"),c=i[i.length-1],l=i[i.length-2];"/search"==r&&(l=i[i.length-1]),1==i.length&&(l=""),"products"==l&&-1==t.indexOf(c)&&(t.push(c),n.push('handle:"'+decodeURIComponent(c)+'"'));var s="/search.js?q="+n.join(" OR ")+"&view=bss.product.labels",u=encodeURI(s);const d=(e={},t)=>{Object(a.bssGetCountryCode)(e,t),o(e,l,i,u)};"undefined"==typeof jQuery||-1==Object(a.compareVersion)(jQuery.fn.jquery,"1.7")?Object(a.bssProductLabelLoadScript)("//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",(function(){var t=jQuery.noConflict(!0);d(e,t)})):d(e,jQuery)}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(1);(document.querySelector('script[src*="bss-pl.js"]')||"production"!=e.env.ENVIRONMENT)&&Object(t.a)(BSS_PL)}.call(this,n(3))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,s=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&p())}function p(){if(!u){var e=c(f);u=!0;for(var t=s.length;t;){for(l=s,s=[];++d<t;)l&&l[d].run();d=-1,t=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function _(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new g(e,t)),1!==s.length||u||c(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=_,o.addListener=_,o.once=_,o.off=_,o.removeListener=_,o.removeAllListeners=_,o.emit=_,o.prependListener=_,o.prependOnceListener=_,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);