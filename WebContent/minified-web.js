var l=!0,t=null,u=!1;if(/^u/.test(typeof define)){var O={};this.define=function(x,v){O[x]=v()};this.require=function(x){return O[x]}}define("minified",function(){function x(a){return a!=t?""+a:""}function v(a){return"string"==typeof a}function r(a){return a&&a.nodeType}function q(a){return a&&a.length!=t&&!v(a)&&!r(a)&&!n(a)}function X(a){return a}function A(a,c){for(var b in a)a.hasOwnProperty(b)&&c(b,a[b]);return a}function h(a,c){for(var b=0;a&&b<a.length;b++)c(a[b],b);return a}function G(a,c){var b=[],d=n(c)?c:function(a){return c!=a};h(a,function(a,c){d(a,c)&&b.push(a)});return b}function B(a,c){var b=[];h(a,function(a,e){q(a=c(a,e))?h(a,function(a){b.push(a)}):a!=t&&b.push(a)});return b}function P(a,c){var b=[];A(a,function(a,e){q(a=c(a,e))?h(a,function(a){b.push(a)}):a!=t&&b.push(a)});return b}function m(a,c,b){return x(a).replace(c,b||"")}function J(a){return RegExp("\\b"+a+"\\b","i")}function n(a){return"function"==typeof a&&!a.item}function C(a){return parseFloat(m(a,/^[^\d-]+/))}function K(a){return a.minified=a.minified||++Y}function M(a,c){function b(a){if(r(a)&&!e[g=K(a)])d.push(a),e[g]=l}var d=[],e={},g;h(a,function(a){a=c(a);q(a)?h(a,b):b(a)});return d}function Q(a){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:t},b=a.get(c);a.set(c);c=a.get("$height",l);a.set(b);return c}function R(a){a()}function S(a,c){h(c,function(a){a.e.detachEvent("on"+a.n,a.h)})}function T(){h(H,R);H=t}function U(a){H?H.push(a):s.setTimeout(a,0)}function V(a,c,b,d){return function(){var e=p(y.createElement(a));q(c)||"object"!=typeof c?e.add(c):e.set(c).add(b);d&&d(e);return e}}function W(a){return Z[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function p(a,c,b){return n(a)?U(a):new F(D(a,c,b))}function D(a,c,b){function d(a){a=function $(a){return q(a)?B(a,$):a}(a);return e?G(a,function(a){for(;a=a.parentNode;){if(a===e)return l;if(b)return u}}):a}var e,g,k,f,j;if(c&&1!=(c=D(c)).length)return M(c,function(c){return D(a,c,b)});e=c&&c[0];if(!v(a))return d(q(a)?a:[a]);if(1<(c=a.split(/\s*,\s*/)).length)return M(c,function(a){return D(a,e,b)});if(c=/(\S+)\s+(.+)$/.exec(a))return D(c[2],D(c[1],e),b);if(a!=(c=m(a,/^#/)))return d([y.getElementById(c)]);e=e||y;g=(c=/([\w-]*)\.?([\w-]*)/.exec(a))[1];f=c[2];c=(k=e.getElementsByClassName&&f)?e.getElementsByClassName(f):e.getElementsByTagName(g||"*");if(g=k?g:f)j=J(g),c=G(c,function(a){return j.test(a[k?"nodeName":"className"])});return e?d(c):c}function L(a,c){var b;if(n(a))return a;if(!a||v(a)&&("*"==a||(b=/^([\w-]*)\.([\w-]+)$/.exec(a))||(b=/^([\w-]+)$/.exec(a)))){var d=b&&b[1]&&J(b[1]),e=b&&b[2]&&J(b[2]);return function(a){return 1==r(a)&&(!d||d.test(a.nodeName))&&(!e||e.test(a.className))}}var g={};p(a,c).each(function(a){g[K(a)]=l});return function(a){return g[K(a)]}}function N(){function a(a,e){c==t&&(c=a,b=e,s.setTimeout(function(){h(d,R)},0))}var c,b=[],d=[],e=a.then=function(a,e){function f(){try{var d=c?a:e;if(n(d)){var f=d.apply(t,b);f&&n(f.then)?f.then(function(a){j(l,[a])},function(a){j(u,[a])}):j(l,[f])}else j(c,b)}catch(h){j(u,[h])}}var j=N();c!=t?s.setTimeout(f,0):d.push(f);return j};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function F(a){for(var c=this.length=a.length,b=0;b<c;b++)this[b]=a[b]}var s=this,y=document,Y=1,E={},H=[],I=[],ba=s.requestAnimationFrame||function(a){s.setTimeout(a,33)},z=!!y.all&&!H.map,Z={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};A({each:function(a){return h(this,a)},filter:function(a){return new F(G(this,a))},collect:function(a){return new F(B(this,a))},sub:function(a,c){var b=0>a?this.length+a:a,d=0<=c?c:this.length+(c||0);return this.filter(function(a,c){return c>=b&&c<d})},find:function(a){for(var c,b=n(a)?a:function(c,b){if(a===c)return b},d=0;d<this.length;d++)if((c=b(this[d],d))!=t)return c},remove:function(){h(this,function(a){if(z&&1==r(a)){var c=function(a){S(0,E[a.minified]);delete E[a.minified]};h(D("*",a),c);c(a)}a.parentNode.removeChild(a)})},text:function(){function a(c){var b=r(c);return 1==b?B(c.childNodes,a):5>b?c.data:t}return B(this,a).join("")},trav:function(a,c,b){var d=L("number"==typeof c?t:c),e="number"==typeof c?c:b||1e9;return new F(M(this,function(c){for(var b=[];(c=c[a])&&b.length<e;)d(c)&&b.push(c);return b}))},select:function(a,c){return p(a,this,c)},is:function(a){var c=L(a);return!this.find(function(a){if(!c(a))return l})},only:function(a){return this.filter(L(a))},get:function(a,c){var b=this,d=b[0];if(d){if(v(a)){var e=m(m(a,/^%/,"data-"),/^[$@]/),g;g="$"==a?d.className:"$$"==a?z?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(g=z?C(d.style.filter)/100:C(d.style.opacity))?1:g:"$$slide"==a?b.get("$height"):/^\$/.test(a)?s.getComputedStyle?s.getComputedStyle(d,t).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^[@%]/.test(a)?d.getAttribute(e):d[e];return c?C(g):g}var k={};(q(a)?h:A)(a,function(a){k[a]=b.get(a,c)});return k}},set:function(a,c){var b=this,d;void 0!==c?"$$fade"==a||"$$slide"==a?b.set({$visibility:0<(d=C(c))?"visible":"hidden",$display:"block"}).set("$$fade"==a?z?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px/.test(c)?c:function(a,c,b){return d*(d&&Q(p(b)))+"px"},$overflow:"hidden"}):h(b,function(b,d){var k=m(m(a,/^%/,"data-"),/^[@$]/),f=b.className||"",j=/^\$/.test(a)?b.style:b,w=n(c)?c(p(b).get(a),d,b):c;"$"==a?w!=t&&(h(w.split(/\s+/),function(a){var c=m(a,/^[+-]/),b=f;f=m(f,J(c));if(/^\+/.test(a)||c==a&&b==f)f+=" "+c}),b.className=m(f,/^\s+|\s+(?=\s|$)/g)):"$$"==a?z?j.cssText=w:w!=t?b.setAttribute("style",w):b.removeAttribute("style"):/^[@%]/.test(a)?w!=t?j.setAttribute(k,w):j.removeAttribute(k):j[k]=w}):v(a)||n(a)?b.set("$",a):A(a,function(a,c){b.set(a,c)});return b},add:function(a,c){return h(this,function(b,d){var e;(function k(a){q(a)?h(a,k):n(a)?k(a(b,d)):a!=t&&(a=r(a)?a:y.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):c?c(a,b,b.parentNode):b.appendChild(a),e=a)})(r(a)&&d?t:a)})},fill:function(a){return h(this,function(a){p(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,d){d.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,d){d.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,d){d.replaceChild(a,b)})},clone:function(a){return new F(B(this,function(c){var b=r(c);if(1==b){var d={$:c.className||t,$$:z?c.style.cssText:c.getAttribute("style")};h(c.attributes,function(a){var b=a.name;"id"!=b&&"style"!=b&&"class"!=b&&c.getAttribute(b)&&(d["@"+b]=a.value)});return V(c.tagName,d,p(c.childNodes).clone(),a)}return 5>b?c.data:t}))},animate:function(a,c,b,d){var e=this,g=[],k=/-?[\d.]+/,f,j=N(),w=n(b)?b:function(a,c,d){return a+d*(c-a)*(b+(1-b)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){f();j(u)};c=c||500;b=b||0;h(e,function(b){var c={a:p(b),c:{}};A(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*Q(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),k,C(d)+C(m(e,/\+?=/))):e});g.push(c)});f=p.loop(function(a){function b(a,c){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*c,2):(a=a.charAt(1+c))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[c])}d.time=a;a>=c||0>a?(h(g,function(a){a.a.set(a.c)}),f(),d.time=t,j(l,[e])):h(g,function(d){A(d.b,function(e,g){var f="rgb(",j=d.c[e],h=a/c;if(/^#|rgb\(/.test(j))for(var n=0;3>n;n++)f+=Math.round(w(b(g,n),b(j,n),h))+(2>n?",":")");else f=m(j,k,x(w(C(g),C(j),h)));d.a.set(e,f)})})});return j},toggle:function(a,c,b,d){var e=this,g={},k=u,f=/\b(?=\w)/g,j;return c?e.set(a)&&function(f){if(f!==k)return j=(k=f===l||f===u?f:!k)?c:a,n(j)?j(e,b,d):b?e.animate(j,g.stop?g.stop()||g.time:b,d,g):e.set(j)&&void 0}:e.toggle(m(a,f,"-"),m(a,f,"+"))},values:function(a){var c=a||{};this.each(function(a){var d=a.name,e=x(a.value),g=c[d];if(/form/i.test(a.tagName))p(B(a.elements,X)).values(c);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))q(g)?g.push(e):c[d]=g==t?e:[g,e]});return c},on:function(a,c,b,d){return this.each(function(e,g){h(a.split(/\s/),function(a){var f=m(a,/\|/),j=n(c)||t,h=j?c:b,p=j&&d&&b,q=j&&(d||b),v=f==a,r=j?t:L(c,e),j=function(a,c){var b=a||s.event,d,e=c||b.target;if(!r||r(e))if((d=(!h.apply(p||e,q||[b,g])||q)&&v)&&!c)b.stopPropagation&&(b.preventDefault(),b.stopPropagation()),b.returnValue=u,b.cancelBubble=l;return d};a={e:e,h:j,n:f};(h.M=h.M||[]).push(a);z?(e.attachEvent("on"+f,j),f=K(e),(E[f]=E[f]||[]).push(a)):(e.addEventListener(f,j,u),(e.minified2=e.minified2||[]).push(a))})})},onOver:function(a){var c=this,b=[];return c.on("|mouseover |mouseout",function(d,e){var g="mouseout"!=d.type,k=d.relatedTarget||d.toElement;if(b[e]!==g&&(g||!k||k!=c[e]&&!p(k).trav("parentNode",c[e]).length))b[e]=g,a.call(this,g,e)})},trigger:function(a,c){return this.each(function(b){for(var d,e=b;e&&!d;)h(z?E[e.minified]:e.minified2,function(e){e.n==a&&(d=d||e.h(c,b))}),e=e.parentNode})}},function(a,c){F.prototype[a]=c});A({request:function(a,c,b,d,e,g){var k,f=b,j=0,h=N();try{k=s.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),b!=t&&(d=d||{},!v(b)&&!r(b)&&(f=P(b,function aa(a,b){return q(b)?B(b,function(b){return aa(a,b)}):encodeURIComponent(a)+(b!=t?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!r(b)&&!v(b)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(c+="?"+f,f=t)),k.open(a,c,l,e,g),A(d,function(a,b){k.setRequestHeader(a,b)}),k.onreadystatechange=function(){4==k.readyState&&!j++&&(200==k.status?h(l,[k.responseText,k.responseXML]):h(u,[k.status,k.statusText,k.responseText]))},k.send(f)}catch(m){j||h(u,[0,t,x(m)])}return h},toJSON:function c(b){return b==t?""+b:v(b=b.valueOf())?'"'+m(b,/[\\\"\x00-\x1f\x22\x5c]/g,W)+'"':q(b)?"["+B(b,c).join()+"]":"object"==typeof b?"{"+P(b,function(b,e){return c(b)+":"+c(e)}).join()+"}":x(b)},parseJSON:s.JSON?s.JSON.parse:function(c){c=m(c,/[\x00\xad\u0600-\uffff]/g,W);if(/^[[\],:{}\s]*$/.test(m(m(c,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+c+")")},ready:U,setCookie:function(c,b,d,e,g,h){y.cookie=c+"="+(h?b:escape(b))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(g?"; domain="+escape(g):"")},getCookie:function(c,b){var d,e=(d=RegExp("(^|;)\\s*"+c+"=([^;]*)").exec(y.cookie))&&d[2];return b?e:e&&unescape(e)},loop:function(c){var b={d:c,f:(new Date).getTime(),b:function(){for(var c=0;c<I.length;c++)I[c]===b&&I.splice(c--,1)}};2>I.push(b)&&function e(){h(I,function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&ba(e)}();return b.b},off:function(c){h(c.M,function(b){z?(b.e.detachEvent("on"+b.n,b.h),E[b.e.minified]=G(E[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,u),b.e.minified2=G(b.e.minified2,b))});c.M=t}},function(c,b){p[c]=b});s.onload=T;y.addEventListener&&y.addEventListener("DOMContentLoaded",T,u);s.g=function(){h(E,S)};return{$:p,$$:function(c){return D(c)[0]},EE:V,M:F}});