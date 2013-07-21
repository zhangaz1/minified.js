var l=!0,q=null,u=!1;if(/^u/.test(typeof define)){var N={};this.define=function(w,v){N[w]=v()};this.require=function(w){return N[w]}}define("minified",function(){function w(a){return a!=q?""+a:""}function v(a){return"string"==typeof a}function r(a){return"function"==typeof a&&!a.item}function x(a){return a&&a.nodeType}function s(a){return a&&a.length!=q&&!v(a)&&!x(a)&&!r(a)}function A(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function g(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function G(a,b){var c=[],d=r(b)?b:function(a){return b!=a};g(a,function(a,b){d(a,b)&&c.push(a)});return c}function E(a,b){var c=[];g(a,function(a,e){s(a=b(a,e))?g(a,function(a){c.push(a)}):a!=q&&c.push(a)});return c}function O(a,b){var c=[];A(a,function(a,e){s(a=b(a,e))?g(a,function(a){c.push(a)}):a!=q&&c.push(a)});return c}function m(a,b,c){return w(a).replace(b,c||"")}function B(a){return parseFloat(m(a,/^[^\d-]+/))}function J(a){return a.minified=a.minified||++V}function L(a,b){function c(a){if(x(a)&&!e[h=J(a)])d.push(a),e[h]=l}var d=[],e={},h;g(a,function(a){a=b(a);s(a)?g(a,c):c(a)});return d}function P(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:q},c=a.get(b);a.set(b);b=a.get("$height",l);a.set(c);return b}function Q(a){a()}function R(){g(H,Q);H=q}function S(a){H?H.push(a):n.setTimeout(a,0)}function T(a,b,c,d){return function(){var e=p(y.createElement(a));s(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function K(){function a(a,e){b==q&&(b=a,c=e,n.setTimeout(function(){g(d,Q)},0))}var b,c=[],d=[],e=a.then=function(a,e){function f(){try{var d=b?a:e;if(r(d)){var f=d.apply(q,c);f&&r(f.then)?f.then(function(a){j(l,[a])},function(a){j(u,[a])}):j(l,[f])}else j(b,c)}catch(g){j(u,[g])}}var j=K();b!=q?n.setTimeout(f,0):d.push(f);return j};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function U(a){return Y[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function p(a,b,c){return r(a)?S(a):new C(D(a,b,c))}function D(a,b,c){function d(a){a=function X(a){return s(a)?E(a,X):a}(a);return e?G(a,function(a){for(;a=a.parentNode;){if(a===e)return l;if(c)return u}}):a}var e,h,k,f,j;if(b&&1!=(b=D(b)).length)return L(b,function(b){return D(a,b,c)});e=b&&b[0];if(!v(a))return d(s(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return L(b,function(a){return D(a,e,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return D(b[2],D(b[1],e),c);if(a!=(b=m(a,/^#/)))return d([y.getElementById(b)]);e=e||y;h=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1];f=b[2];b=(k=e.getElementsByClassName&&f)?e.getElementsByClassName(f):e.getElementsByTagName(h||"*");if(h=k?h:f)j=RegExp("\\b"+h+"\\b","i"),b=G(b,function(a){return j.test(a[k?"nodeName":"className"])});return e?d(b):b}function M(a){var b;if(r(a))return a;if(!a||v(a)&&("*"==a||(b=/^([\w-]*)\.([\w-]+)$/.exec(a))||(b=/^([\w-]+)$/.exec(a)))){var c=b&&b[1]&&RegExp(b[1],"i"),d=b&&b[2]&&RegExp("\\b"+b[2]+"\\b","i");return function(a){return 1==x(a)&&(!c||c.test(a.nodeName))&&(!d||d.test(a.className))}}var e={};p(a).each(function(a){e[J(a)]=l});return function(a){return e[J(a)]}}function C(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var n=this,y=document,V=1,F={},H=[],I=[],Z=n.requestAnimationFrame||function(a){n.setTimeout(a,33)},z=!!y.all&&!H.map,Y={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};A({each:function(a){return g(this,a)},filter:function(a){return new C(G(this,a))},collect:function(a){return new C(E(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return new C(G(this,function(a,b){return b>=c&&b<d}))},find:function(a){for(var b,c=r(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if((b=c(this[d],d))!=q)return b},remove:function(){g(this,function(a){if(z){var b=function(a){g(F[a.minified],function(b){a.detachEvent("on"+b.n,b.h)});delete F[a.minified]};g(D("*",a),b);b(a)}a.parentNode.removeChild(a)})},text:function(){function a(b){var c=x(b);return 1==c?E(b.childNodes,a):5>c?b.data:q}return E(this,a).join("")},trav:function(a,b,c){var d=M(b),e=c||1e9;return new C(L(this,function(b){for(var c=[];(b=b[a])&&9!=b.nodeType&&c.length<e;)d(b)&&c.push(b);return c}))},select:function(a,b){return p(a,this,b)},is:function(a){var b=M(a);return!this.find(function(a){if(!b(a))return l})},only:function(a){return this.filter(M(a))},get:function(a,b){var c=this,d=c[0];if(d){if(v(a)){var e=m(m(a,/^%/,"data-"),/^[$@]/),h;h="$"==a?d.className:"$$"==a?z?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(h=z?B(d.style.filter)/100:B(d.style.opacity))?1:h:"$$slide"==a?c.get("$height"):/^\$/.test(a)?n.getComputedStyle?n.getComputedStyle(d,q).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^[@%]/.test(a)?d.getAttribute(e):d[e];return b?B(h):h}var k={};(s(a)?g:A)(a,function(a){k[a]=c.get(a,b)});return k}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=B(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?z?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px$/.test(b)?b:function(a,b,c){return d*(d&&P(p(c)))+"px"},$overflow:"hidden"}):g(c,function(c,d){var k=m(m(a,/^%/,"data-"),/^[@$]/),f=c.className||"",j=/^\$/.test(a)?c.style:c,t=r(b)?b(p(c).get(a),d,c):b;"$"==a?t!=q&&(g(t.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=f;f=m(f,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==f)f+=" "+b}),c.className=m(f,/^\s+|\s+(?=\s|$)/g)):"$$"==a?z?j.cssText=t:t!=q?c.setAttribute("style",t):c.removeAttribute("style"):/^[@%]/.test(a)?t!=q?j.setAttribute(k,t):j.removeAttribute(k):j[k]=t}):v(a)||r(a)?c.set("$",a):A(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return g(this,function(c,d){var e;(function k(a){s(a)?g(a,k):r(a)?k(a(c,d)):a!=q&&(a=x(a)?a:y.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(x(a)&&d?q:a)})},fill:function(a){return g(this,function(a){p(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return new C(E(this,function(b){var c=x(b);if(1==c){var d={$:b.className||q,$$:z?b.style.cssText:b.getAttribute("style")};g(b.attributes,function(a){var c=a.name;"id"!=c&&"style"!=c&&"class"!=c&&b.getAttribute(c)&&(d["@"+c]=a.value)});return T(b.tagName,d,p(b.childNodes).clone(),a)}return 5>c?b.data:q}))},animate:function(a,b,c,d){var e=this,h=[],k=/-?[\d.]+/,f,j=K(),t=r(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){f();j(u)};b=b||500;c=c||0;g(e,function(b){var c={a:p(b),c:{}};A(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*P(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),k,B(d)+B(m(e,/\+?=/))):e});h.push(c)});f=p.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(g(h,function(a){a.a.set(a.c)}),f(),d.time=q,j(l,[e])):g(h,function(d){A(d.b,function(e,h){var f="rgb(",j=d.c[e],g=a/b;if(/^#|rgb\(/.test(j))for(var n=0;3>n;n++)f+=Math.round(t(c(h,n),c(j,n),g))+(2>n?",":")");else f=m(j,k,w(t(B(h),B(j),g)));d.a.set(e,f)})})});return j},toggle:function(a,b,c,d){var e=this,h={},k=u,f=/\b(?=\w)/g,j;return b?e.set(a)&&function(f){if(f!==k)return j=(k=f===l||f===u?f:!k)?b:a,r(j)?j(e,c,d):c?e.animate(j,h.stop?h.stop()||h.time:c,d,h):e.set(j)&&void 0}:e.toggle(m(a,f,"-"),m(a,f,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,e=w(a.value),h=b[d];if(/form/i.test(a.tagName))p(a.elements).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))s(h)?h.push(e):b[d]=h==q?e:[h,e]});return b},on:function(a,b,c,d){return this.each(function(e,h){g(a.split(/\s/),function(a){var f=m(a,/\|/),j=d&&c,g=d||c,r=f==a;a=function(a,c){var d=a||n.event,e;if((e=(!b.apply(j||c||d.target,g||[d,h])||g)&&r)&&!c)d.stopPropagation&&(d.preventDefault(),d.stopPropagation()),d.returnValue=u,d.cancelBubble=l;return e};var p={e:e,h:a,n:f};(b.M=b.M||[]).push(p);z?(e.attachEvent("on"+f,a),(F[e.minified]=F[J(e)]||[]).push(p)):(e.addEventListener(f,a,l),(e.minified2=e.minified2||[]).push(p))})})},onOver:function(a){var b=[];return this.on("|mouseover |mouseout",function(c,d){var e="mouseout"!=c.type;b[d]!==e&&(b[d]=e,a.call(this,e,d))})},trigger:function(a,b){var c=b||{};return this.each(function e(b,k,f){var j;g(z?F[b.minified]:b.minified2,function(e){e.n==a&&(j=j||e.h(c,f||b))});b.parentNode&&!j&&e(b.parentNode,k,f||b)})}},function(a,b){C.prototype[a]=b});A({request:function(a,b,c,d,e,h){var k,f=c,j=0,g=K();try{k=n.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=q&&(d=d||{},!v(c)&&!x(c)&&(f=O(c,function W(a,b){return s(b)?E(b,function(b){return W(a,b)}):encodeURIComponent(a)+(b!=q?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!x(c)&&!v(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+f,f=q)),k.open(a,b,l,e,h),A(d,function(a,b){k.setRequestHeader(a,b)}),k.onreadystatechange=function(){4==k.readyState&&!j++&&(200==k.status?g(l,[k.responseText,k.responseXML]):g(u,[k.status,k.statusText,k.responseText]))},k.send(f)}catch(m){j||g(u,[0,q,w(m)])}return g},toJSON:function b(c){return c==q?""+c:v(c=c.valueOf())?'"'+m(c,/[\\\"\x00-\x1f\x22\x5c]/g,U)+'"':s(c)?"["+E(c,b).join()+"]":"object"==typeof c?"{"+O(c,function(c,e){return b(c)+":"+b(e)}).join()+"}":w(c)},parseJSON:n.JSON?n.JSON.parse:function(b){b=m(b,/[\x00\xad\u0600-\uffff]/g,U);if(/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:S,setCookie:function(b,c,d,e,h,g){y.cookie=b+"="+(g?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(h?"; domain="+escape(h):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(y.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={d:b,f:(new Date).getTime(),b:function(){for(var b=0;b<I.length;b++)I[b]===c&&I.splice(b--,1)}};2>I.push(c)&&function e(){g(I,function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&Z(e)}();return c.b},wait:function(b,c){var d=K();n.setTimeout(function(){d(l,c)},b||0);return d},off:function(b){g(b.M,function(b){z?(b.e.detachEvent("on"+b.n,b.h),F[b.e.minified]=G(F[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,l),b.e.minified2=G(b.e.minified2,b))});b.M=q}},function(b,c){p[b]=c});n.onload=R;y.addEventListener&&y.addEventListener("DOMContentLoaded",R,u);return{$:p,$$:function(b){return D(b)[0]},EE:T,M:C}});