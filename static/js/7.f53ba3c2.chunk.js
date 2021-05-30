/*! For license information please see 7.f53ba3c2.chunk.js.LICENSE.txt */
(this["webpackJsonprandom-movie"]=this["webpackJsonprandom-movie"]||[]).push([[7],{105:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r(0),a=r(1),i=(r(99),r(42)),c=r(16),s=r(18),f=(r(17),r(19)),l=r(21),u=r(23),m=44,p=a.forwardRef((function(e,t){var r=e.classes,n=e.className,o=e.color,i=void 0===o?"primary":o,l=e.disableShrink,p=void 0!==l&&l,y=e.size,d=void 0===y?40:y,b=e.style,h=e.thickness,v=void 0===h?3.6:h,j=e.value,O=void 0===j?0:j,S=e.variant,x=void 0===S?"indeterminate":S,g=Object(s.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),$={},k={},w={};if("determinate"===x||"static"===x){var P=2*Math.PI*((m-v)/2);$.strokeDasharray=P.toFixed(3),w["aria-valuenow"]=Math.round(O),$.strokeDashoffset="".concat(((100-O)/100*P).toFixed(3),"px"),k.transform="rotate(-90deg)"}return a.createElement("div",Object(c.a)({className:Object(f.a)(r.root,n,"inherit"!==i&&r["color".concat(Object(u.a)(i))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[x]),style:Object(c.a)({width:d,height:d},k,b),ref:t,role:"progressbar"},w,g),a.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(m," ").concat(m)},a.createElement("circle",{className:Object(f.a)(r.circle,p&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[x]),style:$,cx:m,cy:m,r:(m-v)/2,fill:"none",strokeWidth:v})))})),y=Object(l.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(p);t.default=function(e){var t=[],r=Object(a.useState)("choose"),c=Object(n.a)(r,2),s=c[0],f=c[1],l=Object(a.useState)(!1),u=Object(n.a)(l,2),m=u[0],p=u[1],d=function(){var e=Math.round(Math.random()*(t.length-0)+0);f(t[e]),b()},b=function(){p(!0);var e=setTimeout((function(){p(!1)}),3e3);return function(){clearTimeout(e)}};return Object(a.useEffect)((function(){!function(){var e=[];i.a.filter((function(e){return"Misagh"!==e.name&&"Series"!==e.name})).map((function(t){return e.push(t.movies)}));for(var r=0;r<e.length;r++)e[r].map((function(e){return!e.isWatched&&t.push(e.name)}))}()}),[d]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"random-container",children:[Object(o.jsxs)("div",{className:"chosen-view",children:[m&&Object(o.jsx)(y,{}),!m&&Object(o.jsx)("h1",{children:s})]}),Object(o.jsx)("button",{className:"choose-btn",onClick:d,children:"Choose"})]})})}},19:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},21:function(e,t,r){"use strict";var n=r(16),o=r(18),a=r(1),i=r.n(a),c=(r(17),r(26)),s=r.n(c),f=r(150),l=r(52),u=r(156),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){var a=t.defaultTheme,c=t.withTheme,m=void 0!==c&&c,p=t.name,y=Object(o.a)(t,["defaultTheme","withTheme","name"]);var d=p,b=Object(f.a)(e,Object(n.a)({defaultTheme:a,Component:r,name:p||r.displayName,classNamePrefix:d},y)),h=i.a.forwardRef((function(e,t){e.classes;var c,s=e.innerRef,f=Object(o.a)(e,["classes","innerRef"]),y=b(Object(n.a)({},r.defaultProps,e)),d=f;return("string"===typeof p||m)&&(c=Object(u.a)()||a,p&&(d=Object(l.a)({theme:c,name:p,props:f})),m&&!d.theme&&(d.theme=c)),i.a.createElement(r,Object(n.a)({ref:s||t,classes:y},d))}));return s()(h,r),h}},p=r(28);t.a=function(e,t){return m(e,Object(n.a)({defaultTheme:p.a},t))}},23:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(140);function o(e){if("string"!==typeof e)throw new Error(Object(n.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},26:function(e,t,r){"use strict";var n=r(27),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var f=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=p(r);o&&o!==y&&e(t,o,n)}var i=l(r);u&&(i=i.concat(u(r)));for(var c=s(t),d=s(r),b=0;b<i.length;++b){var h=i[b];if(!a[h]&&(!n||!n[h])&&(!d||!d[h])&&(!c||!c[h])){var v=m(r,h);try{f(t,h,v)}catch(j){}}}}return t}},27:function(e,t,r){"use strict";e.exports=r(29)},29:function(e,t,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,m=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,j=n?Symbol.for("react.fundamental"):60117,O=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case m:case i:case s:case c:case y:return e;default:switch(e=e&&e.$$typeof){case l:case p:case h:case b:case f:return e;default:return t}}case a:return t}}}function g(e){return x(e)===m}t.AsyncMode=u,t.ConcurrentMode=m,t.ContextConsumer=l,t.ContextProvider=f,t.Element=o,t.ForwardRef=p,t.Fragment=i,t.Lazy=h,t.Memo=b,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=y,t.isAsyncMode=function(e){return g(e)||x(e)===u},t.isConcurrentMode=g,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===h},t.isMemo=function(e){return x(e)===b},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===m||e===s||e===c||e===y||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===b||e.$$typeof===f||e.$$typeof===l||e.$$typeof===p||e.$$typeof===j||e.$$typeof===O||e.$$typeof===S||e.$$typeof===v)},t.typeOf=x},52:function(e,t,r){"use strict";function n(e){var t=e.theme,r=e.name,n=e.props;if(!t||!t.props||!t.props[r])return n;var o,a=t.props[r];for(o in a)void 0===n[o]&&(n[o]=a[o]);return n}r.d(t,"a",(function(){return n}))},99:function(e,t,r){}}]);
//# sourceMappingURL=7.f53ba3c2.chunk.js.map