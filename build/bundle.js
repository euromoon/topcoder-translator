var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function l(){return f(" ")}function d(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){e.value=null==t?"":t}function m(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}let g;function v(e){g=e}const y=[],b=[],w=[],x=[],E=Promise.resolve();let C=!1;function O(e){w.push(e)}const M=new Set;let A=0;function k(){const e=g;do{for(;A<y.length;){const e=y[A];A++,v(e),S(e.$$)}for(v(null),y.length=0,A=0;b.length;)b.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];M.has(t)||(M.add(t),t())}w.length=0}while(y.length);for(;x.length;)x.pop()();C=!1,M.clear(),v(e)}function S(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const T=new Set;function j(e,t){-1===e.$$.dirty[0]&&(y.push(e),C||(C=!0,E.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(a,i,u,c,f,l,d,p=[-1]){const h=g;v(a);const m=a.$$={fragment:null,ctx:null,props:l,update:e,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||h.$$.root};d&&d(m.root);let y=!1;if(m.ctx=u?u(a,i.props||{},((e,t,...n)=>{const r=n.length?n[0]:t;return m.ctx&&f(m.ctx[e],m.ctx[e]=r)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](r),y&&j(a,e)),t})):[],m.update(),y=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);m.fragment&&m.fragment.l(e),e.forEach(s)}else m.fragment&&m.fragment.c();i.intro&&((b=a.$$.fragment)&&b.i&&(T.delete(b),b.i(w))),function(e,n,a,i){const{fragment:u,on_mount:s,on_destroy:c,after_update:f}=e.$$;u&&u.m(n,a),i||O((()=>{const n=s.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]})),f.forEach(O)}(a,i.target,i.anchor,i.customElement),k()}var b,w;v(h)}var $=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},B=Object.prototype.toString;function N(e){return"[object Array]"===B.call(e)}function q(e){return void 0===e}function R(e){return null!==e&&"object"==typeof e}function D(e){if("[object Object]"!==B.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function L(e){return"[object Function]"===B.call(e)}function I(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),N(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var U={isArray:N,isArrayBuffer:function(e){return"[object ArrayBuffer]"===B.call(e)},isBuffer:function(e){return null!==e&&!q(e)&&null!==e.constructor&&!q(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:R,isPlainObject:D,isUndefined:q,isDate:function(e){return"[object Date]"===B.call(e)},isFile:function(e){return"[object File]"===B.call(e)},isBlob:function(e){return"[object Blob]"===B.call(e)},isFunction:L,isStream:function(e){return R(e)&&L(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:I,merge:function e(){var t={};function n(n,r){D(t[r])&&D(n)?t[r]=e(t[r],n):D(n)?t[r]=e({},n):N(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)I(arguments[r],n);return t},extend:function(e,t,n){return I(t,(function(t,r){e[r]=n&&"function"==typeof t?$(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function _(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var F=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(U.isURLSearchParams(t))r=t.toString();else{var o=[];U.forEach(t,(function(e,t){null!=e&&(U.isArray(e)?t+="[]":e=[e],U.forEach(e,(function(e){U.isDate(e)?e=e.toISOString():U.isObject(e)&&(e=JSON.stringify(e)),o.push(_(t)+"="+_(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function H(){this.handlers=[]}H.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},H.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},H.prototype.forEach=function(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var V=H,z=function(e,t,n){return U.forEach(n,(function(n){e=n(e,t)})),e},X=function(e){return!(!e||!e.__CANCEL__)},W=function(e,t){U.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},G=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},J=U.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),U.isString(r)&&i.push("path="+r),U.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Y=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Z=U.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=U.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},Q=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;U.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+u)}var s,c,f=(s=e.baseURL,c=e.url,s&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(s,c):c);if(a.open(e.method.toUpperCase(),F(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r,o,i,u,s,c="getAllResponseHeaders"in a?(r=a.getAllResponseHeaders(),s={},r?(U.forEach(r.split("\n"),(function(e){if(u=e.indexOf(":"),o=U.trim(e.substr(0,u)).toLowerCase(),i=U.trim(e.substr(u+1)),o){if(s[o]&&Y.indexOf(o)>=0)return;s[o]="set-cookie"===o?(s[o]?s[o]:[]).concat([i]):s[o]?s[o]+", "+i:i}})),s):s):null,f={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:c,config:e,request:a};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(G("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),a=null}},a.onabort=function(){a&&(n(G("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(G("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(G(t,e,"ECONNABORTED",a)),a=null},U.isStandardBrowserEnv()){var l=(e.withCredentials||Z(f))&&e.xsrfCookieName?J.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in a&&U.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),r||(r=null),a.send(r)}))},K={"Content-Type":"application/x-www-form-urlencoded"};function ee(e,t){!U.isUndefined(e)&&U.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var te,ne={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(te=Q),te),transformRequest:[function(e,t){return W(t,"Accept"),W(t,"Content-Type"),U.isFormData(e)||U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e)?e:U.isArrayBufferView(e)?e.buffer:U.isURLSearchParams(e)?(ee(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):U.isObject(e)?(ee(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ne.headers={common:{Accept:"application/json, text/plain, */*"}},U.forEach(["delete","get","head"],(function(e){ne.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){ne.headers[e]=U.merge(K)}));var re=ne;function oe(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ae=function(e){return oe(e),e.headers=e.headers||{},e.data=z(e.data,e.headers,e.transformRequest),e.headers=U.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),U.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||re.adapter)(e).then((function(t){return oe(e),t.data=z(t.data,t.headers,e.transformResponse),t}),(function(t){return X(t)||(oe(e),t&&t.response&&(t.response.data=z(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ie=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function u(e,t){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge(e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function s(r){U.isUndefined(t[r])?U.isUndefined(e[r])||(n[r]=u(void 0,e[r])):n[r]=u(e[r],t[r])}U.forEach(r,(function(e){U.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),U.forEach(o,s),U.forEach(a,(function(r){U.isUndefined(t[r])?U.isUndefined(e[r])||(n[r]=u(void 0,e[r])):n[r]=u(void 0,t[r])})),U.forEach(i,(function(r){r in t?n[r]=u(e[r],t[r]):r in e&&(n[r]=u(void 0,e[r]))}));var c=r.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return U.forEach(f,s),n};function ue(e){this.defaults=e,this.interceptors={request:new V,response:new V}}ue.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ie(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ae,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},ue.prototype.getUri=function(e){return e=ie(this.defaults,e),F(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},U.forEach(["delete","get","head","options"],(function(e){ue.prototype[e]=function(t,n){return this.request(ie(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){ue.prototype[e]=function(t,n,r){return this.request(ie(r||{},{method:e,url:t,data:n}))}}));var se=ue;function ce(e){this.message=e}ce.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ce.prototype.__CANCEL__=!0;var fe=ce;function le(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new fe(e),t(n.reason))}))}le.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},le.source=function(){var e;return{token:new le((function(t){e=t})),cancel:e}};var de=le;function pe(e){var t=new se(e),n=$(se.prototype.request,t);return U.extend(n,se.prototype,t),U.extend(n,t),n}var he=pe(re);he.Axios=se,he.create=function(e){return pe(ie(he.defaults,e))},he.Cancel=fe,he.CancelToken=de,he.isCancel=X,he.all=function(e){return Promise.all(e)},he.spread=function(e){return function(t){return e.apply(null,t)}},he.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var me=he,ge=he;me.default=ge;var ve=me,ye={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},be={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},we=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],xe={CSS:{},springs:{}};function Ee(e,t,n){return Math.min(Math.max(e,t),n)}function Ce(e,t){return e.indexOf(t)>-1}function Oe(e,t){return e.apply(null,t)}var Me={arr:function(e){return Array.isArray(e)},obj:function(e){return Ce(Object.prototype.toString.call(e),"Object")},pth:function(e){return Me.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||Me.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return Me.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return Me.hex(e)||Me.rgb(e)||Me.hsl(e)},key:function(e){return!ye.hasOwnProperty(e)&&!be.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function Ae(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function ke(e,t){var n=Ae(e),r=Ee(Me.und(n[0])?1:n[0],.1,100),o=Ee(Me.und(n[1])?100:n[1],.1,100),a=Ee(Me.und(n[2])?10:n[2],.1,100),i=Ee(Me.und(n[3])?0:n[3],.1,100),u=Math.sqrt(o/r),s=a/(2*Math.sqrt(o*r)),c=s<1?u*Math.sqrt(1-s*s):0,f=s<1?(s*u-i)/c:-i+u;function l(e){var n=t?t*e/1e3:e;return n=s<1?Math.exp(-n*s*u)*(1*Math.cos(c*n)+f*Math.sin(c*n)):(1+f*n)*Math.exp(-n*u),0===e||1===e?e:1-n}return t?l:function(){var t=xe.springs[e];if(t)return t;for(var n=1/6,r=0,o=0;;)if(1===l(r+=n)){if(++o>=16)break}else o=0;var a=r*n*1e3;return xe.springs[e]=a,a}}function Se(e){return void 0===e&&(e=10),function(t){return Math.ceil(Ee(t,1e-6,1)*e)*(1/e)}}var Te,je,Pe=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function o(e,o,a){return((t(o,a)*e+n(o,a))*e+r(o))*e}function a(e,o,a){return 3*t(o,a)*e*e+2*n(o,a)*e+r(o)}return function(t,n,r,i){if(0<=t&&t<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(t!==n||r!==i)for(var s=0;s<11;++s)u[s]=o(s*e,t,r);return function(e){return t===n&&r===i||0===e||1===e?e:o(c(e),n,i)}}function c(n){for(var i=0,s=1;10!==s&&u[s]<=n;++s)i+=e;--s;var c=i+(n-u[s])/(u[s+1]-u[s])*e,f=a(c,t,r);return f>=.001?function(e,t,n,r){for(var i=0;i<4;++i){var u=a(t,n,r);if(0===u)return t;t-=(o(t,n,r)-e)/u}return t}(n,c,t,r):0===f?c:function(e,t,n,r,a){var i,u,s=0;do{(i=o(u=t+(n-t)/2,r,a)-e)>0?n=u:t=u}while(Math.abs(i)>1e-7&&++s<10);return u}(n,i,i+e,t,r)}}}(),$e=(Te={linear:function(){return function(e){return e}}},je={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=Ee(e,1,10),r=Ee(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){je[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(je).forEach((function(e){var t=je[e];Te["easeIn"+e]=t,Te["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},Te["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},Te["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),Te);function Be(e,t){if(Me.fnc(e))return e;var n=e.split("(")[0],r=$e[n],o=Ae(e);switch(n){case"spring":return ke(e,t);case"cubicBezier":return Oe(Pe,o);case"steps":return Oe(Se,o);default:return Oe(r,o)}}function Ne(e){try{return document.querySelectorAll(e)}catch(e){return}}function qe(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,o=[],a=0;a<n;a++)if(a in e){var i=e[a];t.call(r,i,a,e)&&o.push(i)}return o}function Re(e){return e.reduce((function(e,t){return e.concat(Me.arr(t)?Re(t):t)}),[])}function De(e){return Me.arr(e)?e:(Me.str(e)&&(e=Ne(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Le(e,t){return e.some((function(e){return e===t}))}function Ie(e){var t={};for(var n in e)t[n]=e[n];return t}function Ue(e,t){var n=Ie(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function _e(e,t){var n=Ie(e);for(var r in t)n[r]=Me.und(e[r])?t[r]:e[r];return n}function Fe(e){return Me.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:Me.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):Me.hsl(e)?function(e){var t,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),a=parseInt(o[1],10)/360,i=parseInt(o[2],10)/100,u=parseInt(o[3],10)/100,s=o[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=u;else{var f=u<.5?u*(1+i):u+i-u*i,l=2*u-f;t=c(l,f,a+1/3),n=c(l,f,a),r=c(l,f,a-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+s+")"}(e):void 0;var t,n}function He(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function Ve(e,t){return Me.fnc(e)?e(t.target,t.id,t.total):e}function ze(e,t){return e.getAttribute(t)}function Xe(e,t,n){if(Le([n,"deg","rad","turn"],He(t)))return t;var r=xe.CSS[t+n];if(!Me.und(r))return r;var o=document.createElement(e.tagName),a=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=100+n;var i=100/o.offsetWidth;a.removeChild(o);var u=i*parseFloat(t);return xe.CSS[t+n]=u,u}function We(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?Xe(e,o,n):o}}function Ge(e,t){return Me.dom(e)&&!Me.inp(e)&&(!Me.nil(ze(e,t))||Me.svg(e)&&e[t])?"attribute":Me.dom(e)&&Le(we,t)?"transform":Me.dom(e)&&"transform"!==t&&We(e,t)?"css":null!=e[t]?"object":void 0}function Je(e){if(Me.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;t=r.exec(n);)o.set(t[1],t[2]);return o}}function Ye(e,t,n,r){var o=Ce(t,"scale")?1:0+function(e){return Ce(e,"translate")||"perspective"===e?"px":Ce(e,"rotate")||Ce(e,"skew")?"deg":void 0}(t),a=Je(e).get(t)||o;return n&&(n.transforms.list.set(t,a),n.transforms.last=t),r?Xe(e,a,r):a}function Ze(e,t,n,r){switch(Ge(e,t)){case"transform":return Ye(e,t,r,n);case"css":return We(e,t,n);case"attribute":return ze(e,t);default:return e[t]||0}}function Qe(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=He(e)||0,o=parseFloat(t),a=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return o+a+r;case"-":return o-a+r;case"*":return o*a+r}}function Ke(e,t){if(Me.col(e))return Fe(e);if(/\s/g.test(e))return e;var n=He(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function et(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function tt(e){for(var t,n=e.points,r=0,o=0;o<n.numberOfItems;o++){var a=n.getItem(o);o>0&&(r+=et(t,a)),t=a}return r}function nt(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*ze(e,"r")}(e);case"rect":return function(e){return 2*ze(e,"width")+2*ze(e,"height")}(e);case"line":return function(e){return et({x:ze(e,"x1"),y:ze(e,"y1")},{x:ze(e,"x2"),y:ze(e,"y2")})}(e);case"polyline":return tt(e);case"polygon":return function(e){var t=e.points;return tt(e)+et(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function rt(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;Me.svg(t)&&Me.svg(t.parentNode);)t=t.parentNode;return t}(e),o=r.getBoundingClientRect(),a=ze(r,"viewBox"),i=o.width,u=o.height,s=n.viewBox||(a?a.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function ot(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var o=rt(e.el,e.svg),a=r(),i=r(-1),u=r(1),s=n?1:o.w/o.vW,c=n?1:o.h/o.vH;switch(e.property){case"x":return(a.x-o.x)*s;case"y":return(a.y-o.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function at(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Ke(Me.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:Me.str(e)||t?r.split(n):[]}}function it(e){return qe(e?Re(Me.arr(e)?e.map(De):De(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function ut(e){var t=it(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:Je(e)}}}))}function st(e,t){var n=Ie(t);if(/^spring/.test(n.easing)&&(n.duration=ke(n.easing)),Me.arr(e)){var r=e.length;2===r&&!Me.obj(e[0])?e={value:e}:Me.fnc(t.duration)||(n.duration=t.duration/r)}var o=Me.arr(e)?e:[e];return o.map((function(e,n){var r=Me.obj(e)&&!Me.pth(e)?e:{value:e};return Me.und(r.delay)&&(r.delay=n?0:t.delay),Me.und(r.endDelay)&&(r.endDelay=n===o.length-1?t.endDelay:0),r})).map((function(e){return _e(e,n)}))}function ct(e,t){var n=[],r=t.keyframes;for(var o in r&&(t=_e(function(e){for(var t=qe(Re(e.map((function(e){return Object.keys(e)}))),(function(e){return Me.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var o=t[r];n[o]=e.map((function(e){var t={};for(var n in e)Me.key(n)?n==o&&(t.value=e[n]):t[n]=e[n];return t}))},o=0;o<t.length;o++)r(o);return n}(r),t)),t)Me.key(o)&&n.push({name:o,tweens:st(t[o],e)});return n}function ft(e,t){var n;return e.tweens.map((function(r){var o=function(e,t){var n={};for(var r in e){var o=Ve(e[r],t);Me.arr(o)&&1===(o=o.map((function(e){return Ve(e,t)}))).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),a=o.value,i=Me.arr(a)?a[1]:a,u=He(i),s=Ze(t.target,e.name,u,t),c=n?n.to.original:s,f=Me.arr(a)?a[0]:c,l=He(f)||He(s),d=u||l;return Me.und(i)&&(i=c),o.from=at(f,d),o.to=at(Qe(i,f),d),o.start=n?n.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=Be(o.easing,o.duration),o.isPath=Me.pth(a),o.isPathTargetInsideSVG=o.isPath&&Me.svg(t.target),o.isColor=Me.col(o.from.original),o.isColor&&(o.round=1),n=o,o}))}var lt={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,o){if(r.list.set(t,n),t===r.last||o){var a="";r.list.forEach((function(e,t){a+=t+"("+e+") "})),e.style.transform=a}}};function dt(e,t){ut(e).forEach((function(e){for(var n in t){var r=Ve(t[n],e),o=e.target,a=He(r),i=Ze(o,n,a,e),u=Qe(Ke(r,a||He(i)),i),s=Ge(o,n);lt[s](o,n,u,e.transforms,!0)}}))}function pt(e,t){return qe(Re(e.map((function(e){return t.map((function(t){return function(e,t){var n=Ge(e.target,t.name);if(n){var r=ft(t,e),o=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}(e,t)}))}))),(function(e){return!Me.und(e)}))}function ht(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,o.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,o.endDelay=n?o.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,o}var mt=0;var gt=[],vt=function(){var e;function t(n){for(var r=gt.length,o=0;o<r;){var a=gt[o];a.paused?(gt.splice(o,1),r--):(a.tick(n),o++)}e=o>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){bt.suspendWhenDocumentHidden&&(yt()?e=cancelAnimationFrame(e):(gt.forEach((function(e){return e._onDocumentVisibility()})),vt()))})),function(){e||yt()&&bt.suspendWhenDocumentHidden||!(gt.length>0)||(e=requestAnimationFrame(t))}}();function yt(){return!!document&&document.hidden}function bt(e){void 0===e&&(e={});var t,n=0,r=0,o=0,a=0,i=null;function u(e){var t=window.Promise&&new Promise((function(e){return i=e}));return e.finished=t,t}var s=function(e){var t=Ue(ye,e),n=Ue(be,e),r=ct(n,e),o=ut(e.targets),a=pt(o,r),i=ht(a,n),u=mt;return mt++,_e(t,{id:u,children:[],animatables:o,animations:a,duration:i.duration,delay:i.delay,endDelay:i.endDelay})}(e);function c(){var e=s.direction;"alternate"!==e&&(s.direction="normal"!==e?"normal":"reverse"),s.reversed=!s.reversed,t.forEach((function(e){return e.reversed=s.reversed}))}function f(e){return s.reversed?s.duration-e:e}function l(){n=0,r=f(s.currentTime)*(1/bt.speed)}function d(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=s.animations,r=n.length;t<r;){var o=n[t],a=o.animatable,i=o.tweens,u=i.length-1,c=i[u];u&&(c=qe(i,(function(t){return e<t.end}))[0]||c);for(var f=Ee(e-c.start-c.delay,0,c.duration)/c.duration,l=isNaN(f)?1:c.easing(f),d=c.to.strings,p=c.round,h=[],m=c.to.numbers.length,g=void 0,v=0;v<m;v++){var y=void 0,b=c.to.numbers[v],w=c.from.numbers[v]||0;y=c.isPath?ot(c.value,l*b,c.isPathTargetInsideSVG):w+l*(b-w),p&&(c.isColor&&v>2||(y=Math.round(y*p)/p)),h.push(y)}var x=d.length;if(x){g=d[0];for(var E=0;E<x;E++){d[E];var C=d[E+1],O=h[E];isNaN(O)||(g+=C?O+C:O+" ")}}else g=h[0];lt[o.type](a.target,o.property,g,a.transforms),o.currentValue=g,t++}}function h(e){s[e]&&!s.passThrough&&s[e](s)}function m(e){var l=s.duration,m=s.delay,g=l-s.endDelay,v=f(e);s.progress=Ee(v/l*100,0,100),s.reversePlayback=v<s.currentTime,t&&function(e){if(s.reversePlayback)for(var n=a;n--;)d(e,t[n]);else for(var r=0;r<a;r++)d(e,t[r])}(v),!s.began&&s.currentTime>0&&(s.began=!0,h("begin")),!s.loopBegan&&s.currentTime>0&&(s.loopBegan=!0,h("loopBegin")),v<=m&&0!==s.currentTime&&p(0),(v>=g&&s.currentTime!==l||!l)&&p(l),v>m&&v<g?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,h("changeBegin")),h("change"),p(v)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,h("changeComplete")),s.currentTime=Ee(v,0,l),s.began&&h("update"),e>=l&&(r=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(n=o,h("loopComplete"),s.loopBegan=!1,"alternate"===s.direction&&c()):(s.paused=!0,s.completed||(s.completed=!0,h("loopComplete"),h("complete"),!s.passThrough&&"Promise"in window&&(i(),u(s)))))}return u(s),s.reset=function(){var e=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.loopBegan=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===e,s.remaining=s.loop,t=s.children;for(var n=a=t.length;n--;)s.children[n].reset();(s.reversed&&!0!==s.loop||"alternate"===e&&1===s.loop)&&s.remaining++,p(s.reversed?s.duration:0)},s._onDocumentVisibility=l,s.set=function(e,t){return dt(e,t),s},s.tick=function(e){o=e,n||(n=o),m((o+(r-n))*bt.speed)},s.seek=function(e){m(f(e))},s.pause=function(){s.paused=!0,l()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,gt.push(s),l(),vt())},s.reverse=function(){c(),s.completed=!s.reversed,l()},s.restart=function(){s.reset(),s.play()},s.remove=function(e){xt(it(e),s)},s.reset(),s.autoplay&&s.play(),s}function wt(e,t){for(var n=t.length;n--;)Le(e,t[n].animatable.target)&&t.splice(n,1)}function xt(e,t){var n=t.animations,r=t.children;wt(e,n);for(var o=r.length;o--;){var a=r[o],i=a.animations;wt(e,i),i.length||a.children.length||r.splice(o,1)}n.length||r.length||t.pause()}function Et(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ct(e){let t,n,r=e[8]+"";return{c(){t=c("span"),n=f(r)},m(e,r){u(e,t,r),i(t,n)},p(e,t){2&t&&r!==(r=e[8]+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(n,r)},d(e){e&&s(t)}}}function Ot(t){let n,o,a,f,g,v,y,b,w,x,E,C,O,M,A,k=Array.from(t[1]),S=[];for(let e=0;e<k.length;e+=1)S[e]=Ct(Et(t,k,e));return{c(){n=c("main"),o=c("h1"),o.textContent="topcoder translator",a=l(),f=c("div"),g=c("div"),v=c("span"),v.textContent="Input (Portuguese)",y=l(),b=c("input"),w=l(),x=c("div"),E=c("div");for(let e=0;e<S.length;e+=1)S[e].c();C=l(),O=c("span"),O.textContent="Output (English)",p(o,"class","title svelte-u5fq0h"),m(v,"display","block"),p(b,"type","text"),p(b,"class","svelte-u5fq0h"),p(g,"class","labelInput svelte-u5fq0h"),p(E,"class","translation svelte-u5fq0h"),m(O,"display","block"),m(O,"margin-bottom","2em"),p(x,"class","labelOutput svelte-u5fq0h"),p(f,"class","card svelte-u5fq0h"),p(n,"class","svelte-u5fq0h")},m(e,r){u(e,n,r),i(n,o),i(n,a),i(n,f),i(f,g),i(g,v),i(g,y),i(g,b),h(b,t[0]),i(f,w),i(f,x),i(x,E);for(let e=0;e<S.length;e+=1)S[e].m(E,null);t[7](E),i(x,C),i(x,O),M||(A=[d(b,"input",t[5]),d(b,"input",t[6])],M=!0)},p(e,[t]){if(1&t&&b.value!==e[0]&&h(b,e[0]),2&t){let n;for(k=Array.from(e[1]),n=0;n<k.length;n+=1){const r=Et(e,k,n);S[n]?S[n].p(r,t):(S[n]=Ct(r),S[n].c(),S[n].m(E,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=k.length}},i:e,o:e,d(e){e&&s(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(S,e),t[7](null),M=!1,r(A)}}}function Mt(e,t,n){let r,o,a="felicidade",i="";async function u(e){let t=await ve.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=en&dt=t&q="+encodeURI(e));return console.log(t.data[0][0][0]),t.data[0][0][0]}u(a).then((e=>n(1,i=e)));return[a,i,r,o,u,function(){a=this.value,n(0,a)},()=>{r&&clearTimeout(r),n(2,r=setTimeout((()=>{u(a).then((e=>{n(1,i=e),window.requestAnimationFrame((()=>{bt.timeline({loop:!1}).add({targets:o.children,delay:bt.stagger(50),scale:[0,1],rotate:[90,0],duration:50*e.length,easing:"spring(1, 80, 10, 0)"})}))}))}),1e3))},function(e){b[e?"unshift":"push"]((()=>{o=e,n(3,o)}))}]}bt.version="3.2.1",bt.speed=1,bt.suspendWhenDocumentHidden=!0,bt.running=gt,bt.remove=function(e){for(var t=it(e),n=gt.length;n--;){xt(t,gt[n])}},bt.get=Ze,bt.set=dt,bt.convertPx=Xe,bt.path=function(e,t){var n=Me.str(e)?Ne(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:rt(n),totalLength:nt(n)*(r/100)}}},bt.setDashoffset=function(e){var t=nt(e);return e.setAttribute("stroke-dasharray",t),t},bt.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?Be(t.easing):null,o=t.grid,a=t.axis,i=t.from||0,u="first"===i,s="center"===i,c="last"===i,f=Me.arr(e),l=f?parseFloat(e[0]):parseFloat(e),d=f?parseFloat(e[1]):0,p=He(f?e[1]:e)||0,h=t.start||0+(f?l:0),m=[],g=0;return function(e,t,v){if(u&&(i=0),s&&(i=(v-1)/2),c&&(i=v-1),!m.length){for(var y=0;y<v;y++){if(o){var b=s?(o[0]-1)/2:i%o[0],w=s?(o[1]-1)/2:Math.floor(i/o[0]),x=b-y%o[0],E=w-Math.floor(y/o[0]),C=Math.sqrt(x*x+E*E);"x"===a&&(C=-x),"y"===a&&(C=-E),m.push(C)}else m.push(Math.abs(i-y));g=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/g)*g}))),"reverse"===n&&(m=m.map((function(e){return a?e<0?-1*e:-e:Math.abs(g-e)})))}return h+(f?(d-l)/g:l)*(Math.round(100*m[t])/100)+p}},bt.timeline=function(e){void 0===e&&(e={});var t=bt(e);return t.duration=0,t.add=function(n,r){var o=gt.indexOf(t),a=t.children;function i(e){e.passThrough=!0}o>-1&&gt.splice(o,1);for(var u=0;u<a.length;u++)i(a[u]);var s=_e(n,Ue(be,e));s.targets=s.targets||e.targets;var c=t.duration;s.autoplay=!1,s.direction=t.direction,s.timelineOffset=Me.und(r)?c:Qe(r,c),i(t),t.seek(s.timelineOffset);var f=bt(s);i(f),a.push(f);var l=ht(a,e);return t.delay=l.delay,t.endDelay=l.endDelay,t.duration=l.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},bt.easing=Be,bt.penner=$e,bt.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),P(this,e,Mt,Ot,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
