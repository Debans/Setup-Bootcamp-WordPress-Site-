(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[4],{1:function(t,e){t.exports=googlesitekit.i18n},13:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return l}));var r="core/user",i="connected_url_mismatch",a="googlesitekit_authenticate",o="googlesitekit_setup",u="googlesitekit_view_dashboard",c="googlesitekit_view_shared_dashboard",s="googlesitekit_manage_options",l="googlesitekit_read_shared_module_data"},263:function(t,e,n){"use strict";(function(t){var r=n(61),i=n.n(r),a=n(264),o=t._googlesitekitAPIFetchData||{},u=o.nonce,c=o.nonceEndpoint,s=o.preloadedData,l=o.rootURL;i.a.nonceEndpoint=c,i.a.nonceMiddleware=i.a.createNonceMiddleware(u),i.a.rootURLMiddleware=i.a.createRootURLMiddleware(l),i.a.preloadingMiddleware=Object(a.a)(s),i.a.use(i.a.nonceMiddleware),i.a.use(i.a.mediaUploadMiddleware),i.a.use(i.a.rootURLMiddleware),i.a.use(i.a.preloadingMiddleware),e.default=i.a}).call(this,n(18))},264:function(t,e,n){"use strict";var r=n(248);e.a=function(t){var e=Object.keys(t).reduce((function(e,n){return e[Object(r.getStablePath)(n)]=t[n],e}),{}),n=!1;return function(t,i){if(n)return i(t);setTimeout((function(){n=!0}),1e3);var a=t.parse,o=void 0===a||a,u=t.path;if("string"==typeof t.path){var c,s=(null===(c=t.method)||void 0===c?void 0:c.toUpperCase())||"GET",l=Object(r.getStablePath)(u);if(o&&"GET"===s&&e[l]){var f=Promise.resolve(e[l].body);return delete e[l],f}if("OPTIONS"===s&&e[s]&&e[s][l]){var d=Promise.resolve(e[s][l]);return delete e[s][l],d}}return i(t)}}},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},30:function(t,e,n){"use strict";(function(t){var r,i;n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=new Set((null===(r=t)||void 0===r||null===(i=r._googlesitekitBaseData)||void 0===i?void 0:i.enabledFeatures)||[]),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e instanceof Set&&e.has(t)}}).call(this,n(18))},31:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return m}));var r=n(87),i=t._googlesitekitBaseData||{},a=i.activeModules,o=void 0===a?[]:a,u=i.isSiteKitScreen,c=i.trackingEnabled,s=i.trackingID,l=i.referenceSiteURL,f=i.userIDHash,d=i.isAuthenticated,v={activeModules:o,trackingEnabled:c,trackingID:s,referenceSiteURL:l,userIDHash:f,isSiteKitScreen:u,userRoles:i.userRoles,isAuthenticated:d,pluginVersion:"1.74.0"},p=Object(r.a)(v),g=p.enableTracking,h=p.disableTracking,b=(p.isTrackingEnabled,p.initializeSnippet),m=p.trackEvent;function y(t){t?g():h()}u&&c&&b()}).call(this,n(18))},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(35),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="string"==typeof t;if(!e)return!1;var n=t.split("-");return 3===n.length&&Object(r.a)(new Date(t))}},43:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w}));var r=n(5),i=n.n(r),a=n(14),o=n.n(a),u=(n(24),n(7));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l,f="googlesitekit_".concat("1.74.0","_"),d=["sessionStorage","localStorage"],v=[].concat(d),p=function(){var e=o()(i.a.mark((function e(n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[n]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,a="__storage_test__",r.setItem(a,a),r.removeItem(a),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==r.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();function g(){return h.apply(this,arguments)}function h(){return(h=o()(i.a.mark((function e(){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===l){e.next=2;break}return e.abrupt("return",l);case 2:n=c(v),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=15;break}if(a=r.value,!l){e.next=9;break}return e.abrupt("continue",13);case 9:return e.next=11,p(a);case 11:if(!e.sent){e.next=13;break}l=t[a];case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return void 0===l&&(l=null),e.abrupt("return",l);case 25:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})))).apply(this,arguments)}var b=function(){var t=o()(i.a.mark((function t(e){var n,r,a,o,u,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(!(n=t.sent)){t.next=10;break}if(!(r=n.getItem("".concat(f).concat(e)))){t.next=10;break}if(a=JSON.parse(r),o=a.timestamp,u=a.ttl,c=a.value,s=a.isError,!o||u&&!(Math.round(Date.now()/1e3)-o<u)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:c,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=o()(i.a.mark((function e(n,r){var a,o,c,s,l,d,v,p,h=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h.length>2&&void 0!==h[2]?h[2]:{},o=a.ttl,c=void 0===o?u.b:o,s=a.timestamp,l=void 0===s?Math.round(Date.now()/1e3):s,d=a.isError,v=void 0!==d&&d,e.next=3,g();case 3:if(!(p=e.sent)){e.next=14;break}return e.prev=5,p.setItem("".concat(f).concat(n),JSON.stringify({timestamp:l,ttl:c,value:r,isError:v})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=o()(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(!(r=e.sent)){e.next=13;break}return e.prev=4,r.removeItem("".concat(f).concat(n)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=o()(i.a.mark((function e(){var n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(!(n=e.sent)){e.next=14;break}for(e.prev=4,r=[],a=0;a<n.length;a++)0===(o=n.key(a)).indexOf(f)&&r.push(o.substring(f.length));return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,n(18))},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return c}));var r=n(111);function i(t){try{return new URL(t).pathname}catch(t){}return null}function a(t,e){try{return new URL(e,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof e?e:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function u(t){return/^#\w[A-Za-z0-9-_]*$/.test(t)}function c(t,e){if(!Object(r.a)(t))return t;if(t.length<=e)return t;var n=new URL(t),i=t.replace(n.origin,"");if(i.length<e)return i;var a=i.length-Math.floor(e)+1;return"…"+i.substr(a)}},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(28);function i(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},58:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return p.a})),n.d(e,"g",(function(){return m})),n.d(e,"f",(function(){return w})),n.d(e,"l",(function(){return g}));var r="Invalid dateString parameter, it must be a string.",i='Invalid date range, it must be a string with the format "last-x-days".',a=3600,o=86400,u=604800,c=n(10),s=n.n(c),l=n(35),f=function(t){var e=new Date(t);s()(Object(l.a)(e),"Date param must construct to a valid date instance or be a valid date instance itself.");var n="".concat(e.getMonth()+1),r="".concat(e.getDate());return[e.getFullYear(),n.length<2?"0".concat(n):n,r.length<2?"0".concat(r):r].join("-")},d=n(12),v=n.n(d),p=n(41),g=function(t){s()(Object(p.a)(t),r);var e=t.split("-"),n=v()(e,3),i=n[0],a=n[1],o=n[2];return new Date(i,a-1,o)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=g(t);return n.setDate(n.getDate()-e),f(n)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return 3===e.length&&"last"===e[0]&&!Number.isNaN(e[1])&&!Number.isNaN(parseFloat(e[1]))&&"days"===e[2]};function m(t){var e=t.match(/last-(\d+)-days/);if(e&&e[1])return parseInt(e[1],10);throw new Error("Unrecognized date range slug.")}var y=n(1);function w(){var t=function(t){return Object(y.sprintf)(
/* translators: %s: number of days */
Object(y._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},605:function(t,e,n){"use strict";(function(t){var r=n(5),i=n.n(r),a=n(14),o=n.n(a),u=n(10),c=n.n(u),s=n(263),l=n(302),f=n(43),d=n(7),v=n(92),p=n(728),g=n(13),h=!0,b=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=[t,e,n].filter((function(t){return!!t&&t.length}));return 3===i.length&&r&&r.constructor===Object&&Object.keys(r).length&&i.push(Object(d.y)(r)),i.join("::")},m=function(e){var n,r,i,a,o=null===(n=t.googlesitekit)||void 0===n||null===(r=n.data)||void 0===r||null===(i=r.dispatch)||void 0===i?void 0:i.call(r,g.a);o&&(e.code===v.a?o.setPermissionScopeError(e):(null===(a=e.data)||void 0===a?void 0:a.reconnectURL)&&o.setAuthError(e))},y=function(){var e=o()(i.a.mark((function e(n,r,a){var o,u,v,g,h,y,w,O,j,_,x,S,D,E,P,I,L,N=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=N.length>3&&void 0!==N[3]?N[3]:{},u=o.bodyParams,v=o.cacheTTL,g=void 0===v?d.b:v,h=o.method,y=void 0===h?"GET":h,w=o.queryParams,O=o.useCache,j=void 0===O?void 0:O,_=o.signal,c()(n,"`type` argument for requests is required."),c()(r,"`identifier` argument for requests is required."),c()(a,"`datapoint` argument for requests is required."),x="GET"===y&&(void 0!==j?j:k()),S=b(n,r,a,w),!x){e.next=18;break}return e.next=9,Object(f.b)(S);case 9:if(D=e.sent,E=D.cacheHit,P=D.value,!D.isError){e.next=16;break}throw m(P),P;case 16:if(!E){e.next=18;break}return e.abrupt("return",P);case 18:return e.prev=18,e.next=21,Object(s.default)({data:u,method:y,signal:_,path:Object(l.a)("/google-site-kit/v1/".concat(n,"/").concat(r,"/data/").concat(a),w)});case 21:if(I=e.sent,!x){e.next=25;break}return e.next=25,Object(f.d)(S,I,{ttl:g});case 25:return e.abrupt("return",I);case 28:if(e.prev=28,e.t0=e.catch(18),!(null==_?void 0:_.aborted)){e.next=32;break}throw e.t0;case 32:if(!(null===e.t0||void 0===e.t0||null===(L=e.t0.data)||void 0===L?void 0:L.cacheTTL)){e.next=35;break}return e.next=35,Object(f.d)(S,e.t0,{ttl:e.t0.data.cacheTTL,isError:!0});case 35:throw Object(p.a)({method:y,datapoint:a,type:n,identifier:r,error:e.t0}),m(e.t0),t.console.error("Google Site Kit API Error","method:".concat(y),"datapoint:".concat(a),"type:".concat(n),"identifier:".concat(r),'error:"'.concat(e.t0.message,'"')),e.t0;case 39:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var t=o()(i.a.mark((function t(e,n,r,a){var o,u,c,s,l,f,v=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.cacheTTL,c=void 0===u?d.b:u,s=o.useCache,l=void 0===s?void 0:s,f=o.signal,t.abrupt("return",y(e,n,r,{cacheTTL:c,queryParams:a,useCache:l,signal:f}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),O=function(){var t=o()(i.a.mark((function t(e,n,r,a){var o,u,c,s,l,f,d,v=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.method,c=void 0===u?"POST":u,s=o.queryParams,l=void 0===s?{}:s,f=o.signal,t.next=3,y(e,n,r,{bodyParams:{data:a},method:c,queryParams:l,useCache:!1,signal:f});case 3:return d=t.sent,t.next=6,j(e,n,r);case 6:return t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),k=function(){return h},j=function(){var t=o()(i.a.mark((function t(e,n,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b(e,n,r),t.next=3,Object(f.c)();case 3:t.sent.forEach((function(t){0===t.indexOf(a)&&Object(f.a)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),_={invalidateCache:j,get:w,set:O,setUsingCache:function(t){return h=!!t},usingCache:k};e.a=_}).call(this,n(18))},63:function(t,e,n){"use strict";(function(t){var r=n(0),i=n.n(r),a=n(9),o=n.n(a);function ChangeArrow(e){var n=e.direction,r=e.invertColor,i=e.width,a=e.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(n),{"googlesitekit-change-arrow--inverted-color":r}),width:i,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:i.a.string,invertColor:i.a.bool,width:i.a.number,height:i.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,n(3))},64:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var r=n(29),i=n.n(r),a=n(70),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:a.a.sanitize(t,e)}};function u(t){var e,n="object"===i()(t)?t.toString():t;return null==n||null===(e=n.replace)||void 0===e?void 0:e.call(n,/\/+$/,"")}},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(2),i=function(t){return function(e){return function FilteredComponent(n){return Object(r.createElement)(r.Fragment,{},"",Object(r.createElement)(e,n),t)}}}},7:function(t,e,n){"use strict";n.d(e,"z",(function(){return u.b})),n.d(e,"w",(function(){return c.a})),n.d(e,"A",(function(){return c.b})),n.d(e,"y",(function(){return v})),n.d(e,"f",(function(){return p.b})),n.d(e,"n",(function(){return p.c})),n.d(e,"u",(function(){return g.c})),n.d(e,"v",(function(){return g.d})),n.d(e,"r",(function(){return g.b})),n.d(e,"m",(function(){return g.a})),n.d(e,"h",(function(){return h.a})),n.d(e,"s",(function(){return w})),n.d(e,"g",(function(){return O})),n.d(e,"b",(function(){return k.b})),n.d(e,"a",(function(){return k.a})),n.d(e,"c",(function(){return k.e})),n.d(e,"j",(function(){return k.f})),n.d(e,"x",(function(){return k.l})),n.d(e,"k",(function(){return j.b})),n.d(e,"q",(function(){return j.c})),n.d(e,"e",(function(){return j.a})),n.d(e,"p",(function(){return _.b})),n.d(e,"l",(function(){return _.a})),n.d(e,"t",(function(){return _.d})),n.d(e,"o",(function(){return x})),n.d(e,"d",(function(){return S})),n.d(e,"B",(function(){return D})),n.d(e,"i",(function(){return E}));var r=n(119),i=n.n(r),a=n(115),o=n.n(a),u=n(31),c=n(64),s=n(29),l=n.n(s),f=n(80),d=n.n(f),v=function(t){return d()(JSON.stringify(function t(e){var n={};return Object.keys(e).sort().forEach((function(r){var i=e[r];i&&"object"===l()(i)&&!Array.isArray(i)&&(i=t(i)),n[r]=i})),n}(t)))};var p=n(82),g=(n(85),n(73)),h=n(65);function b(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function m(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function y(t){return t.replace(/\n/gi,"<br>")}function w(t){for(var e=t,n=0,r=[b,m,y];n<r.length;n++){e=(0,r[n])(e)}return e}var O=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},k=n(58),j=n(86),_=n(50),x=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},S=function(t,e){if("0"===t||0===t||isNaN(t))return null;var n=(e-t)/t;return isNaN(n)||!i()(n)?null:n},D=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},E=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return o()(e)}},70:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n(120),i=n.n(r)()(t)}).call(this,n(18))},728:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),i=n.n(r),a=n(14),o=n.n(a),u=n(7),c=["fetch_error"];function s(t){return l.apply(this,arguments)}function l(){return(l=o()(i.a.mark((function t(e){var n,r,a,o,s,l,f,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.method,o=e.type,s=e.identifier,l=e.datapoint,(f=e.error)&&!c.includes(null==f?void 0:f.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(f.code),(null===(n=f.data)||void 0===n?void 0:n.reason)&&(d+=", reason: ".concat(f.data.reason)),t.next=7,Object(u.z)("api_error","".concat(a,":").concat(o,"/").concat(s,"/data/").concat(l),"".concat(f.message," (").concat(d,")"),(null===(r=f.data)||void 0===r?void 0:r.status)||f.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},73:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return x}));var r=n(12),i=n.n(r),a=n(29),o=n.n(a),u=n(6),c=n.n(u),s=n(17),l=n.n(s),f=n(27),d=n(68),v=n.n(d),p=n(1);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=m(t,e),r=n.formatUnit,i=n.formatDecimal;try{return r()}catch(t){return i()}},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var n=Math.floor(t/60/60),r=Math.floor(t/60%60),i=Math.floor(t%60);return{hours:n,minutes:r,seconds:i,formatUnit:function(){var a=e.unitDisplay,o=h(h({unitDisplay:void 0===a?"short":a},l()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?j(i,h(h({},o),{},{unit:"second"})):Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?j(i,h(h({},o),{},{unit:"second"})):"",r?j(r,h(h({},o),{},{unit:"minute"})):"",n?j(n,h(h({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(p.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(p.__)("%ds","google-site-kit"),i);if(0===t)return e;var a=Object(p.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(p.__)("%dm","google-site-kit"),r),o=Object(p.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(p.__)("%dh","google-site-kit"),n);return Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?e:"",r?a:"",n?o:"").trim()}}},y=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in millions.
Object(p.__)("%sM","google-site-kit"),j(y(t),t%10==0?{}:e)):1e4<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t))):1e3<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t),t%10==0?{}:e)):j(t,{signDisplay:"never",maximumFractionDigits:1})},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var n={};if("%"===e)n={style:"percent",maximumFractionDigits:2};else{if("s"===e)return b(t,{unitDisplay:"narrow"});e&&"string"==typeof e?n={style:"currency",currency:e}:Object(f.isPlainObject)(e)&&(n=h({},e))}var r=n,i=r.style,a=void 0===i?"metric":i;return"metric"===a?w(t):"duration"===a?b(t,e):j(t,n)},k=v()(console.warn),j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,a=l()(e,["locale"]);try{return new Intl.NumberFormat(r,a).format(t)}catch(e){k("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r),", ").concat(JSON.stringify(a)," ).format( ").concat(o()(t)," )"),e.message)}for(var u={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},c=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(a);f<d.length;f++){var v=i()(d[f],2),p=v[0],g=v[1];u[p]&&g===u[p]||(c.includes(p)||(s[p]=g))}try{return new Intl.NumberFormat(r,s).format(t)}catch(e){return new Intl.NumberFormat(r).format(t)}},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,i=e.style,a=void 0===i?"long":i,o=e.type,u=void 0===o?"conjunction":o;if(Intl.ListFormat){var c=new Intl.ListFormat(r,{style:a,type:u});return c.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(p.__)(", ","google-site-kit");return t.join(s)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=Object(f.get)(e,["_googlesitekitLegacyData","locale"]);if(n){var r=n.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,n(18))},82:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f}));var r=n(12),i=n.n(r),a=n(1);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=null,n=null,r=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),i=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(r&&i)return!1;if(e=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),n=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===e&&null===n)return!1;var o=document.createElement("span");o.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(t));var u=document.createElement("span");u.setAttribute("class","plugin-count"),u.setAttribute("aria-hidden","true"),u.textContent=t;var c=document.createElement("span");return c.setAttribute("class","screen-reader-text"),c.textContent=Object(a.sprintf)(
/* translators: %d is the number of notifications */
Object(a._n)("%d notification","%d notifications",t,"google-site-kit"),t),o.appendChild(u),o.appendChild(c),e&&null===r&&e.appendChild(o),n&&null===i&&n.appendChild(o),o},s=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},l=function(t){for(var e=location.search.substr(1).split("&"),n={},r=0;r<e.length;r++)n[e[r].split("=")[0]]=decodeURIComponent(e[r].split("=")[1]);return t?n.hasOwnProperty(t)?decodeURIComponent(n[t].replace(/\+/g," ")):"":n},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,n=new URL(e.href);if(t)return n.searchParams&&n.searchParams.get?n.searchParams.get(t):l(t);var r,a={},u=o(n.searchParams.entries());try{for(u.s();!(r=u.n()).done;){var c=i()(r.value,2),s=c[0],f=c[1];a[s]=f}}catch(t){u.e(t)}finally{u.f()}return a}}).call(this,n(18))},85:function(t,e,n){"use strict";(function(t){n(46),n(47)}).call(this,n(18))},86:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(201),i=n(63),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var a=n.invertColor,o=void 0!==a&&a;return Object(r.a)(t.createElement(i.a,{direction:e>0?"up":"down",invertColor:o}))},o=function(t){var e,n,r,i,a,o,u,c,s,l,f,d,v,p,g;if(void 0!==t)return 1===(null==t||null===(e=t[0])||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.rows)||void 0===r?void 0:r.length)||(null==t||null===(i=t[0])||void 0===i||null===(a=i.data)||void 0===a||null===(o=a.rows)||void 0===o||null===(u=o[0])||void 0===u||null===(c=u.metrics)||void 0===c||null===(s=c[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(v=d.totals)||void 0===v||null===(p=v[0])||void 0===p||null===(g=p.values)||void 0===g?void 0:g[0])},u=function(t,e){return t>0&&e>0?t/e-1:t>0?1:e>0?-1:0}}).call(this,n(3))},87:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n(6),i=n.n(r),a=n(88),o=n(89);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,i=c(c({},s),e);i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(a.a)(i,n);return{enableTracking:function(){i.trackingEnabled=!0},disableTracking:function(){i.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:Object(o.a)(i,n,u,r)}}}).call(this,n(18))},88:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n(51),i=n(28);function a(e,n){var a,o=Object(r.a)(n);return function(){var n=t.document;if(void 0===a&&(a=!!n.querySelector("script[".concat(i.b,"]"))),!a){var r=n.createElement("script");r.setAttribute(i.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(i.a),n.head.appendChild(r),o("js",new Date),o("config",e.trackingID,{send_page_view:e.isSiteKitScreen}),a=!0}}}}).call(this,n(18))},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(5),i=n.n(r),a=n(6),o=n.n(a),u=n(14),c=n.n(u),s=n(51),l=n(30);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n,r){var a=Object(s.a)(e);return function(){var e=c()(i.a.mark((function e(o,u,c,s){var f,v,p,g,h,b,m,y,w,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=t.activeModules,v=t.referenceSiteURL,p=t.trackingEnabled,g=t.trackingID,h=t.userIDHash,b=t.userRoles,m=void 0===b?[]:b,y=t.isAuthenticated,w=t.pluginVersion,p){e.next=3;break}return e.abrupt("return");case 3:return n(),O={send_to:g,event_category:o,event_label:c,value:s,dimension1:v,dimension2:m.join(","),dimension3:h,dimension4:w||"",dimension5:Array.from(l.a).join(","),dimension6:f.join(","),dimension7:y?1:0},e.abrupt("return",new Promise((function(t){var e,n,i=setTimeout((function(){r.console.warn('Tracking event "'.concat(u,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),c=function(){clearTimeout(i),t()};a("event",u,d(d({},O),{},{event_callback:c})),(null===(e=r._gaUserPrefs)||void 0===e||null===(n=e.ioo)||void 0===n?void 0:n.call(e))&&c()})));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}()}},908:function(t,e,n){"use strict";n.r(e),function(t){var r=n(605);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.a),e.default=r.a}.call(this,n(18))},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return u}));n(57);var r="missing_required_scopes",i="insufficientPermissions",a="forbidden";function o(t){return(null==t?void 0:t.code)===r}function u(t){var e;return[i,a].includes(null==t||null===(e=t.data)||void 0===e?void 0:e.reason)}}},[[908,1,0]]]);