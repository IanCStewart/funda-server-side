module.exports = { mainHtml, housesHtml, docHtml, offline, error };

function docHtml(body) {
  return `
    <!doctype html>
    <html lang="en">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="/manifest.json" rel="manifest">
      <script src="/funda.js" defer></script>
      <script>
        window.Typekit||(window.Typekit={}),window.Typekit.config={a:"6977685",c:[".tk-proxima-nova",'"proxima-nova",sans-serif'],dl:"AAAADwAAAAoAACjH",fi:[139,173,175,5474,25136],fc:[{id:139,family:"proxima-nova",src:"{scheme}://{hostname}/af/6d80a1/00000000000000003b9aefb8/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"700",style:"normal",primer:"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{id:173,family:"proxima-nova",src:"{scheme}://{hostname}/af/e22d4a/00000000000000003b9aefc2/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"600",style:"normal",primer:"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{id:175,family:"proxima-nova",src:"{scheme}://{hostname}/af/936fa1/00000000000000003b9aefc0/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"400",style:"normal",primer:"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{id:5474,family:"proxima-nova",src:"{scheme}://{hostname}/af/8a67b6/00000000000000003b9aefbc/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"300",style:"normal",primer:"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{id:25136,family:"proxima-nova",src:"{scheme}://{hostname}/af/f753fd/00000000000000003b9aefbe/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"500",style:"normal",primer:"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}}],fn:["proxima-nova",["n3","n4","n5","n6","n7"]],hn:"use.typekit.net",ht:"tk",js:"1.18.18",kt:"gco3gds",l:"typekit",p:"p.typekit.net",ps:1,type:"configurable",scheme:"https"},function(a,b,c){function d(a,b,c){return a.call.apply(a.bind,arguments)}function e(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function f(a,b,c){return f=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:e,f.apply(null,arguments)}function h(a){this.g=a||"-"}function i(){var a=[{name:"font-family",value:na.c[ra+1]}];this.g=[na.c[ra]],this.b=a}function j(a){for(var b=a.g.join(","),c=[],d=0;d<a.b.length;d++){var e=a.b[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function k(a,b){return(65535&a)*b+(((a>>>16)*b&65535)<<16)}function l(a,b){if(this.b=b||Array(Math.ceil(a/32)),!b)for(var c=0;c<this.b.length;c++)this.b[c]=0}function m(a,b,c){this.b=a,this.i=b,this.g=new l(a,c)}function o(b){if(b.length%4&&(b+=Array(5-b.length%4).join("=")),b=b.replace(/\-/g,"+").replace(/\_/g,"/"),a.atob)b=a.atob(b);else{if(b=b.replace(/=+$/,""),1==b.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var d,e,c=0,f=0,g="";e=b.charAt(f++);~e&&(d=c%4?64*d+e:e,c++%4)?g+=String.fromCharCode(255&d>>(-2*c&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);b=g}for(d=[],c=0;c<b.length;c+=4)d.push(b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3)<<0);b=d.shift(),c=d.shift(),this.b=new m(b,c,d)}function p(a,b,c,d){if(b=a.b.createElement(b),c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));return d&&b.appendChild(a.b.createTextNode(d)),b}function q(a,c,d){a=a.b.getElementsByTagName(c)[0],a||(a=b.documentElement),a.insertBefore(d,a.lastChild)}function r(a,b){a.b.body?b():a.b.addEventListener?a.b.addEventListener("DOMContentLoaded",b):a.b.attachEvent("onreadystatechange",function(){"interactive"!=a.b.readyState&&"complete"!=a.b.readyState||b()})}function s(a){a.parentNode&&a.parentNode.removeChild(a)}function t(a,b,c){var d=b||[];c=c||[],b=a.className.split(/\s+/);for(var e,f=0;f<d.length;f+=1){e=!1;for(var g=0;g<b.length;g+=1)if(d[f]===b[g]){e=!0;break}e||b.push(d[f])}for(d=[],f=0;f<b.length;f+=1){for(e=!1,g=0;g<c.length;g+=1)if(b[f]===c[g]){e=!0;break}e||d.push(b[f])}a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function v(a,c){var d=p(a,"style");d.setAttribute("type","text/css"),d.styleSheet?(q(a,"head",d),d.styleSheet.cssText=c):(d.appendChild(b.createTextNode(c)),q(a,"head",d))}function w(a,b,c){var d=a.b.getElementsByTagName("head")[0];if(d){var e=p(a,"script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))},d.appendChild(e),setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5e3)}}function x(a,b,c){this.g=a.g.document.documentElement,this.j=b,this.m=c,this.b=new h("-"),this.o=!1!==b.events,this.i=!1!==b.classes}function y(a){if(a.i){var b=u(a.g,a.b.b("wf","active")),c=[],d=[a.b.b("wf","loading")];b||c.push(a.b.b("wf","inactive")),t(a.g,c,d)}z(a,"inactive")}function z(a,b,c){if(a.o&&a.j[b])try{c?a.j[b](c.b,D(c)):a.j[b]()}catch(a){console.error('Typekit: Error in "'+b+'" callback',a)}a.m[b]&&(c?a.m[b](c.b,D(c)):a.m[b]())}function A(a,b,c){c=c||{},this.b=a,this.g=b,this.weight=c.weight||"400",this.style=c.style||"normal",this.B=c.primer||void 0,this.C=c.subset_id||void 0}function B(a){return("tk-"+a.b).slice(0,26)+"-"+D(a)}function C(a,b){return new A(b,a.g,{weight:a.weight,style:a.style,B:a.B,C:a.C})}function D(a){return a.style.charAt(0)+a.weight.charAt(0)}function E(){var a=b,c=navigator.userAgent;return/MSIE|Trident/.test(c)&&(a.documentMode?9>a.documentMode:1)?c="i":(/AppleWebKit/.test(c)&&/Android/.test(c)&&!/OPR|Chrome|CrMo|CriOS/.test(c)&&(a=/Android ([^;)]+)/.exec(c))&&a[1]?(a=parseFloat(a[1]),a=3.1<=a&&4.1>a):a=!1,a||(a=!!(/Silk/.test(c)&&/Linux|Ubuntu|Android/.test(c)&&(c=/Silk\/([\d\._]+)/.exec(c))&&c[1])&&2<=parseFloat(c[1])),c=a?"j":"k"),c}function F(a){this.b=a}function G(a,b){return a.b.replace(/\{([^\{\}]+)\}/g,function(a,c){if("?"==c.charAt(0)){for(var d=c.slice(1).split(","),e=[],f=0;f<d.length;f++)b[d[f]]&&e.push(d[f]+"="+encodeURIComponent(b[d[f]]));return e.length?"?"+e.join("&"):""}return encodeURIComponent(b[c]||"")})}function H(){this.b=[]}function I(a,b){for(var c=0;c<b.length;c++)a.b.push(b[c])}function J(a,b){for(var c=0;c<a.b.length;c++)b(a.b[c],c,a)}function K(a,b){if("i"===b){var c={},d=new H;J(a,function(a){c[a.b]||(c[a.b]={}),c[a.b][a.weight]||(c[a.b][a.weight]=[]),c[a.b][a.weight].push(a)});for(var e in c){for(var f=[400,300,200,100,500,600,700,800,900],g=400,h=0;h<f.length;h++)if(g=f[h],c[e][g]){I(d,c[e][g]);break}for(f=[700,800,900,600,500,400,300,200,100],h=0;h<f.length;h++){var i=f[h];if(c[e][i]&&g!==i){I(d,c[e][i]);break}}}return J(a,function(a){a=C(a,a.b.replace(/(-1|-2)$/,"").slice(0,28)+"-"+D(a)),d.b.push(a)}),d}return"x"===b?new H:a}function L(a,b,c,d,e){for(var f=[],g=0;g<b.length;g++){var h=b[g],i=G(new F(a.g),{scheme:c,hostname:d,format:h,primer:a.B,subset_id:a.C,fvd:D(a),extension:O(h),token:e,v:"3"});"i"===h?f.push("url("+i+")"):f.push("url("+i+') format("'+N(h)+'")')}return f.join(",")}function M(a,b,c,d,e,f){if("x"===b)return"";var g=[];return g.push("font-family:"+(f?B(a):a.b)),b="k"===b?L(a,["l","d","a"],c,d,e):L(a,[b],c,d,e),g.push("src:"+b),g.push("font-weight:"+a.weight),g.push("font-style:"+a.style),"@font-face{"+g.join(";")+";}"}function N(a){switch(a){case"d":return"woff";case"i":return"eot";case"l":return"woff2";default:return"opentype"}}function O(a){switch(a){case"d":return"woff";case"i":return"eot";case"l":return"woff2";default:return"otf"}}function P(a,b,c,d,e,f){var g=[];return J(a,function(a){g.push(M(a,b,c,d,e,f))}),g.join("")}function Q(a,b){this.g=a,this.i=b,this.b=p(this.g,"span",{"aria-hidden":"true"},this.i)}function R(a){q(a.g,"body",a.b)}function S(a){return"display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:"+a.b+" !important;font-weight:"+a.weight+" !important;font-style:"+a.style+" !important;"}function T(a,b,c,d,e,f,g,h){this.D=a,this.H=b,this.u=c,this.b=d,this.w=g||"BESbswy",this.g={},this.I=e||3e3,this.G=h,this.A=f||null,this.i=new Q(this.u,this.w),this.j=new Q(this.u,this.w),this.m=new Q(this.u,this.w),this.o=new Q(this.u,this.w),a=this.G?B(this.b):this.b.b,this.i.b.style.cssText=S(C(this.b,a+",serif")),this.j.b.style.cssText=S(C(this.b,a+",sans-serif")),this.m.b.style.cssText=S(C(this.b,"serif")),this.o.b.style.cssText=S(C(this.b,"sans-serif")),R(this.i),R(this.j),R(this.m),R(this.o)}function W(){if(null===V){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(a.navigator.userAgent);V=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}return V}function X(a,b,c){for(var d in U)if(U.hasOwnProperty(d)&&b===a.g[U[d]]&&c===a.g[U[d]])return!0;return!1}function Y(a){var d,b=a.i.b.offsetWidth,c=a.j.b.offsetWidth;(d=b===a.g.serif&&c===a.g["sans-serif"])||(d=W()&&X(a,b,c)),d?g()-a.F>=a.I?W()&&X(a,b,c)&&(!a.A||a.A.hasOwnProperty(a.b.b))?$(a,a.D):$(a,a.H):Z(a):$(a,a.D)}function Z(a){setTimeout(f(function(){Y(this)},a),50)}function $(a,b){setTimeout(f(function(){s(this.i.b),s(this.j.b),s(this.m.b),s(this.o.b),b(this.b)},a),0)}function _(a,b,c,d,e,f,g){this.i=a,this.u=b,this.b=d,this.m=c,this.g=e||3e3,this.o=f||void 0,this.j=g}function aa(a,b,c,d){this.w=a,this.b=b,this.g=0,this.o=this.m=!1,this.A=c,this.u=d}function ca(b,c,d){var e={},g=c.b.length;if(!g&&d)y(b.b);else{b.g+=g,d&&(b.m=d);var h=[];for(J(c,function(c){var d=b.b;if(d.i&&t(d.g,[d.b.b("wf",c.b,D(c),"loading")]),z(d,"fontloading",c),d=null,null===ba)if(a.FontFace){var g=/Gecko.*Firefox\/(\d+)/.exec(a.navigator.userAgent),i=/OS X.*Version\/10\..*Safari/.exec(a.navigator.userAgent)&&/Apple/.exec(a.navigator.vendor);ba=g?42<parseInt(g[1],10):!i}else ba=!1;d=ba?new _(f(b.i,b),f(b.j,b),b.w,c,b.A,"BESbswy",b.u):new T(f(b.i,b),f(b.j,b),b.w,c,b.A,e,"BESbswy",b.u),h.push(d)}),c=0;c<h.length;c++)h[c].start()}}function da(a){!--a.g&&a.m&&(a.o?(a=a.b,a.i&&t(a.g,[a.b.b("wf","active")],[a.b.b("wf","loading"),a.b.b("wf","inactive")]),z(a,"active")):y(a.b))}function ea(a,b){this.b=a,this.o=null,this.g=[];var c;"string"==typeof a.j?c=a.j:(c=a.g.location.protocol,"about:"==c&&(c=a.i.location.protocol),c="https:"==c?"https":"http"),this.j=c,this.A=b,this.m=this.w=null,this.u=new H,this.i=null}function fa(a,b){this.j=a,this.g=b,this.b=[]}function ga(a,b,c){b=G(a.j,{id:b}),w(a.g,b,c)}function ha(a,b){if(a.b.length){for(var c=new x(a.g,b,{}),d=0;d<a.b.length;d++)a.b[d].init();for(c.i&&t(c.g,[c.b.b("wf","loading")]),z(c,"loading"),c=0;c<a.b.length;c++)a.b[c].load(null,c==a.b.length-1,b);a.b=[]}}function ia(){var a=na.ps,b=na.ht,c=na.fi,d=na.a,e=na.kt,f=na.js,g=na.l;this.o=na.p,this.j=a,this.i=b,this.b=c||[],this.g=d||null,this.m=e||null,this.version=f||null,this.app=g||null}function ja(a){var b=new Image(1,1),c=!1;b.src=a,b.onload=function(){c=!0,b.onload=null},setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3e3)}if(!b.querySelector)return void(b.documentElement.className+=" wf-inactive");var g=Date.now||function(){return+new Date};h.prototype.b=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.g)},l.prototype.set=function(a){if(Math.floor(a/32+1)>this.b.length)throw Error("Index is out of bounds.");var b=Math.floor(a/32);this.b[b]|=1<<a-32*b},l.prototype.has=function(a){if(Math.floor(a/32+1)>this.b.length)throw Error("Index is out of bounds.");var b=Math.floor(a/32);return!!(this.b[b]&1<<a-32*b)};var n=[2449897292,4218179547,2675077685,1031960064,1478620578,1386343184,3194259988,2656050674,3012733295,2193273665];m.prototype.has=function(a){if("string"!=typeof a&&"number"!=typeof a)throw Error("Value should be a string or number.");for(var b="number"==typeof a,c=0;c<this.i;c++){var d;if(b)d=k(4294967295&a,3432918353),d=d<<15|d>>>17,d=k(d,461845907),d^=n[c]||0,d=d<<13|d>>>19,d=k(d,5)+3864292196,d^=4,d^=d>>>16,d=k(d,2246822507),d^=d>>>13,d=k(d,3266489909),d^=d>>>16,d=(d>>>0)%this.b;else{d=n[c]||0;var e,f,g=a.length%4,h=a.length-g;for(f=0;f<h;f+=4)e=(4294967295&a.charCodeAt(f+0))<<0|(4294967295&a.charCodeAt(f+1))<<8|(4294967295&a.charCodeAt(f+2))<<16|(4294967295&a.charCodeAt(f+3))<<24,e=k(e,3432918353),e=e<<15|e>>>17,e=k(e,461845907),d^=e,d=d<<13|d>>>19,d=k(d,5)+3864292196;switch(e=0,g){case 3:e^=(4294967295&a.charCodeAt(f+2))<<16;case 2:e^=(4294967295&a.charCodeAt(f+1))<<8;case 1:e^=(4294967295&a.charCodeAt(f+0))<<0,e=k(e,3432918353),e=e<<15|e>>>17,e=k(e,461845907),d^=e}d^=a.length,d=k(d^d>>>16,2246822507),d=k(d^d>>>13,3266489909),d=((d^d>>>16)>>>0)%this.b}if(!this.g.has(d))return!1}return!0},o.prototype.has=function(a){if(""===a)return!0;for(a=a.split(".");a.length;){var b=a.join("."),c="*."+b;if(this.b.has(b)||this.b.has(c)||this.b.has(encodeURIComponent(b))||this.b.has(encodeURIComponent(c)))return!0;a.shift()}return!1};var U={K:"serif",J:"sans-serif"},V=null;T.prototype.start=function(){this.g.serif=this.m.b.offsetWidth,this.g["sans-serif"]=this.o.b.offsetWidth,this.F=g(),Y(this)},_.prototype.start=function(){var a=this.m.g.document,b=this,c=g(),d=new Promise(function(d,e){function f(){g()-c>=b.g?e():a.fonts.load(b.b.style+" "+b.b.weight+" 300px "+(b.j?B(b.b):b.b.b),b.o).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=new Promise(function(a,c){setTimeout(c,b.g)});Promise.race([e,d]).then(function(){b.i(b.b)},function(){b.u(b.b)})};var ba=null;aa.prototype.i=function(a){var b=this.b;b.i&&t(b.g,[b.b.b("wf",a.b,D(a),"active")],[b.b.b("wf",a.b,D(a),"loading"),b.b.b("wf",a.b,D(a),"inactive")]),z(b,"fontactive",a),this.o=!0,da(this)},aa.prototype.j=function(a){var b=this.b;if(b.i){var c=u(b.g,b.b.b("wf",a.b,D(a),"active")),d=[],e=[b.b.b("wf",a.b,D(a),"loading")];c||d.push(b.b.b("wf",a.b,D(a),"inactive")),t(b.g,d,e)}z(b,"fontinactive",a),da(this)},ea.prototype.supportsConfiguredBrowser=function(){return!0},ea.prototype.init=function(){if(0<this.g.length){for(var a=[],b=0;b<this.g.length;b++)a.push(j(this.g[b]));v(this.b,a.join(""))}},ea.prototype.load=function(b,c,d){var e=this;if(d=d||{},this.m&&(b=location.hostname,!this.m.has(b)))return console.error('Typekit: the domain "'+b+'" isn\'t in the list of published domains for kit "'+this.w+'".'),void y(new x(this.b,d,{}));var f=d.hostname||this.A;b=d.timeout;var g=!!d.async,h=E(),i=K(this.u,h);if(d=new x(this.b,d,{active:function(){if(g){var b=P(i,h,e.j,f,e.i,!1);v(e.b,b)}if(e.o){var b=e.o,c=e.b,d=new F("{scheme}://{hostname}/p.gif{?s,k,app,ht,h,f,a,js,_}"),j=(a.__adobewebfontsappname__||b.app||"").toString().substr(0,20),c=c.g.location.hostname||c.i.location.hostname,k=[],l=[];a.Typekit?(a.Typekit.fonts||(a.Typekit.fonts=[]),l=a.Typekit.fonts):a.TypekitPreview&&(a.TypekitPreview.fonts||(a.TypekitPreview.fonts=[]),l=a.TypekitPreview.fonts);for(var m=0;m<b.b.length;m++){for(var n=!1,o=0;o<l.length;o++)if(b.b[m]===l[o]){n=!0;break}n||(k.push(b.b[m]),l.push(b.b[m]))}k.length&&ja(G(d,{scheme:"https",hostname:b.o,s:b.j,k:b.m,app:j,ht:b.i,h:c,f:k.join("."),a:b.g,js:b.version,_:(+new Date).toString()}))}},inactive:function(){if(g){var a=P(i,h,e.j,f,e.i,!1);v(e.b,a)}}}),i.b.length){var j=P(i,h,this.j,f,this.i,g);v(this.b,j);var k=new aa(this.b,d,b,g);r(e.b,function(){ca(k,i,c)})}else y(d)},fa.prototype.i=function(a){this.b.push(a)},fa.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]),c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)ga(this,c[g],function(){--f||ha(e,d)});else ha(this,d)};var ka=new function(){var b=a;this.g=this.i=b,this.b=this.g.document};if(a.Typekit||(a.Typekit={}),!a.Typekit.load){var la=new fa(new F("//"+(a.Typekit.config||{}).hn+"/{id}.js"),ka);a.Typekit.load=function(){la.load.apply(la,arguments)},a.Typekit.addKit=function(){la.i.apply(la,arguments)}}var ma,na=a.Typekit.config||{};if(ma=new ea(ka,na.hn),na.p&&(ma.o=new ia),na.fc)for(var oa=na.fc,pa=0;pa<oa.length;pa++)ma.u.b.push(new A(oa[pa].family,oa[pa].src,oa[pa].descriptors));if(na.scheme&&(ma.j=na.scheme),na.dl){var qa=na.dl;try{ma.m=new o(qa)}catch(a){}}if(na.kt&&(ma.w=na.kt),na.token&&(ma.i=na.token),na.c)for(var ra=0;ra<na.c.length;ra+=2)ma.g.push(new i);if(a.Typekit.addKit(ma),1===Math.round(30*Math.random())){var sa=a.Typekit.load,ta=[];a.Typekit.load=function(c){c=c||{};var d=c.active||function(){},e=c.fontactive||function(){},f=(new Date).getTime();c.active=function(){if(d(),!a.XDomainRequest){var c=new Image,e=function(b){if(b=JSON.stringify({fonts:ta,augmentations:[],font_loading:a.FontFace?"native":"non-native",active_duration:(new Date).getTime()-f,javascript_version:na.js,kit_type:"configurable",ad_blocker:b}),!a.XDomainRequest){var c=new XMLHttpRequest;c.open("POST","https://performance.typekit.net/"),c.send(b)}};c.src="https://p.typekit.net/p.gif?",c.onload=function(){for(var a=!1,c=0;c<b.styleSheets.length;c++)if(null===b.styleSheets[c].href&&/ghostery-purple-box/.test(b.styleSheets[c].ownerNode.textContent)){a=!0;break}e(a)},c.onerror=function(){e(!0)}}},c.fontactive=function(a,b){var c,d;e(a,b);a:{c=b.charAt(0),d=b.charAt(1),/[1-9]/.test(d)||(d=4),c="i"===c?"italic":"o"===c?"oblique":"normal",d+="00";for(var g=na.fc,h=0;h<g.length;h++)if(g[h].family===a&&g[h].descriptors.weight===d&&g[h].descriptors.style===c){c=g[h].id;break a}c=0}ta.push({id:c,duration:(new Date).getTime()-f,dynamic:!1})},sa(c)}}if(a.WebFont)try{a.Typekit.load()}catch(a){}}(this,document);
        try{Typekit.load({ async: true });}catch(e){}
      </script>
      <title>Funda | API</title>
      <script id="loadcss">
        // loadCSS
        !function(e){"use strict";var n=function(n,t,o){function i(e){return a.body?e():void setTimeout(function(){i(e)})}function r(){l.addEventListener&&l.removeEventListener("load",r),l.media=o||"all"}var d,a=e.document,l=a.createElement("link");if(t)d=t;else{var s=(a.body||a.getElementsByTagName("head")[0]).childNodes;d=s[s.length-1]}var f=a.styleSheets;l.rel="stylesheet",l.href=n,l.media="only x",i(function(){d.parentNode.insertBefore(l,t?d:d.nextSibling)});var u=function(e){for(var n=l.href,t=f.length;t--;)if(f[t].href===n)return e();setTimeout(function(){u(e)})};return l.addEventListener&&l.addEventListener("load",r),l.onloadcssdefined=u,u(r),l};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);
        var fontStyles = loadCSS('/style.css', document.getElementById("loadcss"));
      </script>
      <style>
        html,body,div,h1,p,img,fieldset,form,label,legend,article,footer,header,section{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,footer,header,section{display:block}body{line-height:1}:root{--color-orange:#F7A100;--color-light-blue:#E6F2F7;--color-blue:#60C5F8;--color-dark-blue:#0071B3;--color-brown:#53241B;--color-white:#FFF;--color-grey:#999;--color-black:#333;--text-large:calc(var(--text-body) * 2.25);--text-medium:calc(var(--text-body) * 1.75);--text-small:calc(var(--text-body) * 1.375);--text-body:1.6rem;--text-xs:1.2rem}html{font-size:62.5%;font-family:"proxima-nova";height:100%}body{height:100%;width:100vw}header{background:var(--color-orange);padding:1rem;color:var(--color-white)}header img{height:3.5rem}main{height:calc(100% - 5.5rem);width:100%}#chat{height:100%;width:100%;background:url(/assets/img/chat-background.jpg);background-size:cover;background-position:center;font-size:var(--text-body);position:relative}#chat-body{width:100%;padding:1.6rem;box-sizing:border-box;overflow-y:scroll;max-height:calc(100% - 4.8rem);position:absolute;bottom:4.8rem;left:0}#chat-body.nojs{max-height:100%;bottom:0}#chat footer{position:absolute;bottom:0;left:0;width:100%}#chat footer form{width:100%;height:4.8rem;position:relative}#chat footer input[type="text"]{width:100%;height:100%;padding:1.6rem;padding-right:6rem;box-sizing:border-box;border:none;font-size:inherit;line-height:var(--text-body)}#chat footer input[type="submit"]{position:absolute;top:0;right:0;padding:1.6rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;color:var(--color-dark-blue);border:none;font-size:inherit;line-height:var(--text-body)}#chat .message{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-white);margin-bottom:1rem;position:relative;padding-left:8rem}#chat .avatar{position:absolute;top:0;left:0}.avatar img{width:6rem;height:6rem}#chat header{font-weight:700;background:none;padding:0;padding-bottom:1rem;color:var(--color-black)}#chat .message p,#chat .message form{max-width:80%;padding:1rem;background:var(--color-blue);border-radius:.5rem}#chat .message p+form{margin-top:.5rem}#chat .message form{display:flex;flex-direction:column;justify-content:space-between}#chat .message form legend{font-weight:700;font-size:var(--text-small);margin-bottom:.5rem}#chat .message form fieldset{margin-bottom:1rem}#chat .message form fieldset section{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center}#chat .message form label{margin:0 .5rem;margin-bottom:.25rem;padding:1rem;background:var(--color-dark-blue)}#chat .message form input:checked+label{background:var(--color-orange)}#chat .message form input{font-size:var(--text-body);padding:calc(1.6rem / 2)}#chat .message form input[type="radio"]{opacity:0;position:absolute;z-index:-999}#chat .message form input[type="text"]{appearance:none;width:100%;border:none}#chat .message form input[type="submit"]{max-width:20rem;width:100%;background-color:var(--color-orange);color:var(--color-white);border:none;margin:0 auto}.hidden{display:none}
      </style>
      <body>
        <header><img src="/assets/img/logo.svg" alt="Funda Logo"></header>
        <main>
          <article id="chat">
            <section class="nojs" id="chat-body">
              ${body}
            </section>
            <footer>
              <form class="hidden" id="chat-form">
                <input id="chatInput" name="chatInput" type="text" placeholder="type something..." autocomplete="off" disabled />
                <input type="submit" value="send" disabled/>
              </form>
            </footer>
          </article>
        </main>
        <script>
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
          }
        </script>
      </body>
  `;
}

function error() {
  return `
    <section class="message fundapi">
      <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>404</h1></header>
      <p>Oopsies something went wrong. If you think what you did is supposed to work please mail me at <a href="mailto:ian@icstewart.com">ian@icstewart.com</a></p>
      <p>browse back <a href="/">home</a> to get back on track</p>
    </section>
  `;
}

function housesHtml(adress, image, price) {
  return `
    <section class="message house">
      <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>${adress}</h1></header>
      <p>
        <img class="house-img" src="${image}"/>
        ${price}
      </p>
    </section>
  `;
}

function mainHtml() {
  return `
    <section class="message fundapi">
      <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>Fundapi</h1></header>
      <p>Vul het onderstaande formulier in om een zoekopdracht te doen.</p>
      <form>
        <fieldset>
          <legend>Plaats</legend>
          <section>
            <input type="text" name="location" placeholder="Plaats" autocomplete="off" />
          </section>
        </fieldset>
        <fieldset>
          <legend>Type wooning</legend>
          <section>
            <input id="koop" type="radio" name="type" value="koop" checked />
            <label for="koop">Koop</label>
            <input id="huur" type="radio" name="type" value="huur" />
            <label for="huur">Huur</label>
          </section>
        </fieldset>
        <fieldset>
          <legend>Buiten ruimte</legend>
          <section>
            <input id="balkon" type="radio" name="outdoor" value="balkon" />
            <label for="balkon">Balkon</label>
            <input id="dakterass" type="radio" name="outdoor" value="dakterras" />
            <label for="dakterass">Dakterras</label>
            <input id="tuin" type="radio" name="outdoor" value="tuin" />
            <label for="tuin">Tuin</label>
          </section>
        </fieldset>
        <input type="submit" value="send" />
      </form>
    </section>
  `;
}

function offline() {
  return `
  <!doctype html>
  <html lang="en">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/manifest.json" rel="manifest">
    <script id="loadcss">
      // loadCSS
      !function(e){"use strict";var n=function(n,t,o){function i(e){return a.body?e():void setTimeout(function(){i(e)})}function r(){l.addEventListener&&l.removeEventListener("load",r),l.media=o||"all"}var d,a=e.document,l=a.createElement("link");if(t)d=t;else{var s=(a.body||a.getElementsByTagName("head")[0]).childNodes;d=s[s.length-1]}var f=a.styleSheets;l.rel="stylesheet",l.href=n,l.media="only x",i(function(){d.parentNode.insertBefore(l,t?d:d.nextSibling)});var u=function(e){for(var n=l.href,t=f.length;t--;)if(f[t].href===n)return e();setTimeout(function(){u(e)})};return l.addEventListener&&l.addEventListener("load",r),l.onloadcssdefined=u,u(r),l};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);
      var fontStyles = loadCSS('/style.css', document.getElementById("loadcss"));
    </script>
    <style>
      html,body,div,h1,p,img,fieldset,form,label,legend,article,footer,header,section{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,footer,header,section{display:block}body{line-height:1}:root{--color-orange:#F7A100;--color-light-blue:#E6F2F7;--color-blue:#60C5F8;--color-dark-blue:#0071B3;--color-brown:#53241B;--color-white:#FFF;--color-grey:#999;--color-black:#333;--text-large:calc(var(--text-body) * 2.25);--text-medium:calc(var(--text-body) * 1.75);--text-small:calc(var(--text-body) * 1.375);--text-body:1.6rem;--text-xs:1.2rem}html{font-size:62.5%;font-family:"proxima-nova";height:100%}body{height:100%;width:100vw}header{background:var(--color-orange);padding:1rem;color:var(--color-white)}header img{height:3.5rem}main{height:calc(100% - 5.5rem);width:100%}#chat{height:100%;width:100%;background:url(/assets/img/chat-background.jpg);background-size:cover;background-position:center;font-size:var(--text-body);position:relative}#chat-body{width:100%;padding:1.6rem;box-sizing:border-box;overflow-y:scroll;max-height:calc(100% - 4.8rem);position:absolute;bottom:4.8rem;left:0}#chat-body.nojs{max-height:100%;bottom:0}#chat footer{position:absolute;bottom:0;left:0;width:100%}#chat footer form{width:100%;height:4.8rem;position:relative}#chat footer input[type="text"]{width:100%;height:100%;padding:1.6rem;padding-right:6rem;box-sizing:border-box;border:none;font-size:inherit;line-height:var(--text-body)}#chat footer input[type="submit"]{position:absolute;top:0;right:0;padding:1.6rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;color:var(--color-dark-blue);border:none;font-size:inherit;line-height:var(--text-body)}#chat .message{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-white);margin-bottom:1rem;position:relative;padding-left:8rem}#chat .avatar{position:absolute;top:0;left:0}.avatar img{width:6rem;height:6rem}#chat header{font-weight:700;background:none;padding:0;padding-bottom:1rem;color:var(--color-black)}#chat .message p,#chat .message form{max-width:80%;padding:1rem;background:var(--color-blue);border-radius:.5rem}#chat .message p+form{margin-top:.5rem}#chat .message form{display:flex;flex-direction:column;justify-content:space-between}#chat .message form legend{font-weight:700;font-size:var(--text-small);margin-bottom:.5rem}#chat .message form fieldset{margin-bottom:1rem}#chat .message form fieldset section{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center}#chat .message form label{margin:0 .5rem;margin-bottom:.25rem;padding:1rem;background:var(--color-dark-blue)}#chat .message form input:checked+label{background:var(--color-orange)}#chat .message form input{font-size:var(--text-body);padding:calc(1.6rem / 2)}#chat .message form input[type="radio"]{opacity:0;position:absolute;z-index:-999}#chat .message form input[type="text"]{appearance:none;width:100%;border:none}#chat .message form input[type="submit"]{max-width:20rem;width:100%;background-color:var(--color-orange);color:var(--color-white);border:none;margin:0 auto}.hidden{display:none}
    </style>
    <title>Funda | API</title>
    <body>
      <header><img src="/assets/img/logo.svg" alt="Funda Logo"></header>
      <main>
        <article id="chat">
          <section class="nojs" id="chat-body">
            <section class="message house">
              <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
              <header><h1>Oflline</h1></header>
              <p>
                Kill the dino!
              </p>
            </section>
          </section>
          <footer>
            <form class="hidden" id="chat-form">
              <input id="chatInput" name="chatInput" type="text" placeholder="type something..." autocomplete="off" disabled />
              <input type="submit" value="send" disabled/>
            </form>
          </footer>
        </article>
      </main>
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      </script>
    </body>
  `
}
