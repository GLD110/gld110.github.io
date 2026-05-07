(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();function Wx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Sd={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function DE(){if(k0)return Nl;k0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var c in s)c!=="key"&&(u[c]=s[c])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:f,ref:s!==void 0?s:null,props:u}}return Nl.Fragment=t,Nl.jsx=n,Nl.jsxs=n,Nl}var X0;function LE(){return X0||(X0=1,Sd.exports=DE()),Sd.exports}var _e=LE(),yd={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function UE(){if(W0)return te;W0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function x(P,V,G){this.props=P,this.context=V,this.refs=S,this.updater=G||T}x.prototype.isReactComponent={},x.prototype.setState=function(P,V){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,V,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=x.prototype;function A(P,V,G){this.props=P,this.context=V,this.refs=S,this.updater=G||T}var L=A.prototype=new w;L.constructor=A,M(L,x.prototype),L.isPureReactComponent=!0;var F=Array.isArray;function O(){}var D={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function b(P,V,G){var Y=G.ref;return{$$typeof:o,type:P,key:V,ref:Y!==void 0?Y:null,props:G}}function U(P,V){return b(P.type,V,P.props)}function J(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function $(P){var V={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(G){return V[G]})}var ht=/\/+/g;function k(P,V){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):V.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(V){P.status==="pending"&&(P.status="fulfilled",P.value=V)},function(V){P.status==="pending"&&(P.status="rejected",P.reason=V)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,V,G,Y,dt){var xt=typeof P;(xt==="undefined"||xt==="boolean")&&(P=null);var Mt=!1;if(P===null)Mt=!0;else switch(xt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(P.$$typeof){case o:case t:Mt=!0;break;case _:return Mt=P._init,z(Mt(P._payload),V,G,Y,dt)}}if(Mt)return dt=dt(P),Mt=Y===""?"."+k(P,0):Y,F(dt)?(G="",Mt!=null&&(G=Mt.replace(ht,"$&/")+"/"),z(dt,V,G,"",function(Wt){return Wt})):dt!=null&&(J(dt)&&(dt=U(dt,G+(dt.key==null||P&&P.key===dt.key?"":(""+dt.key).replace(ht,"$&/")+"/")+Mt)),V.push(dt)),1;Mt=0;var Tt=Y===""?".":Y+":";if(F(P))for(var Ot=0;Ot<P.length;Ot++)Y=P[Ot],xt=Tt+k(Y,Ot),Mt+=z(Y,V,G,xt,dt);else if(Ot=y(P),typeof Ot=="function")for(P=Ot.call(P),Ot=0;!(Y=P.next()).done;)Y=Y.value,xt=Tt+k(Y,Ot++),Mt+=z(Y,V,G,xt,dt);else if(xt==="object"){if(typeof P.then=="function")return z(Z(P),V,G,Y,dt);throw V=String(P),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(P,V,G){if(P==null)return P;var Y=[],dt=0;return z(P,Y,"","",function(xt){return V.call(G,xt,dt++)}),Y}function K(P){if(P._status===-1){var V=P._result;V=V(),V.then(function(G){(P._status===0||P._status===-1)&&(P._status=1,P._result=G)},function(G){(P._status===0||P._status===-1)&&(P._status=2,P._result=G)}),P._status===-1&&(P._status=0,P._result=V)}if(P._status===1)return P._result.default;throw P._result}var ot=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ft={map:H,forEach:function(P,V,G){H(P,function(){V.apply(this,arguments)},G)},count:function(P){var V=0;return H(P,function(){V++}),V},toArray:function(P){return H(P,function(V){return V})||[]},only:function(P){if(!J(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return te.Activity=g,te.Children=ft,te.Component=x,te.Fragment=n,te.Profiler=s,te.PureComponent=A,te.StrictMode=a,te.Suspense=d,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,te.__COMPILER_RUNTIME={__proto__:null,c:function(P){return D.H.useMemoCache(P)}},te.cache=function(P){return function(){return P.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(P,V,G){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Y=M({},P.props),dt=P.key;if(V!=null)for(xt in V.key!==void 0&&(dt=""+V.key),V)!X.call(V,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&V.ref===void 0||(Y[xt]=V[xt]);var xt=arguments.length-2;if(xt===1)Y.children=G;else if(1<xt){for(var Mt=Array(xt),Tt=0;Tt<xt;Tt++)Mt[Tt]=arguments[Tt+2];Y.children=Mt}return b(P.type,dt,Y)},te.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},te.createElement=function(P,V,G){var Y,dt={},xt=null;if(V!=null)for(Y in V.key!==void 0&&(xt=""+V.key),V)X.call(V,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(dt[Y]=V[Y]);var Mt=arguments.length-2;if(Mt===1)dt.children=G;else if(1<Mt){for(var Tt=Array(Mt),Ot=0;Ot<Mt;Ot++)Tt[Ot]=arguments[Ot+2];dt.children=Tt}if(P&&P.defaultProps)for(Y in Mt=P.defaultProps,Mt)dt[Y]===void 0&&(dt[Y]=Mt[Y]);return b(P,xt,dt)},te.createRef=function(){return{current:null}},te.forwardRef=function(P){return{$$typeof:c,render:P}},te.isValidElement=J,te.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:K}},te.memo=function(P,V){return{$$typeof:p,type:P,compare:V===void 0?null:V}},te.startTransition=function(P){var V=D.T,G={};D.T=G;try{var Y=P(),dt=D.S;dt!==null&&dt(G,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(O,ot)}catch(xt){ot(xt)}finally{V!==null&&G.types!==null&&(V.types=G.types),D.T=V}},te.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},te.use=function(P){return D.H.use(P)},te.useActionState=function(P,V,G){return D.H.useActionState(P,V,G)},te.useCallback=function(P,V){return D.H.useCallback(P,V)},te.useContext=function(P){return D.H.useContext(P)},te.useDebugValue=function(){},te.useDeferredValue=function(P,V){return D.H.useDeferredValue(P,V)},te.useEffect=function(P,V){return D.H.useEffect(P,V)},te.useEffectEvent=function(P){return D.H.useEffectEvent(P)},te.useId=function(){return D.H.useId()},te.useImperativeHandle=function(P,V,G){return D.H.useImperativeHandle(P,V,G)},te.useInsertionEffect=function(P,V){return D.H.useInsertionEffect(P,V)},te.useLayoutEffect=function(P,V){return D.H.useLayoutEffect(P,V)},te.useMemo=function(P,V){return D.H.useMemo(P,V)},te.useOptimistic=function(P,V){return D.H.useOptimistic(P,V)},te.useReducer=function(P,V,G){return D.H.useReducer(P,V,G)},te.useRef=function(P){return D.H.useRef(P)},te.useState=function(P){return D.H.useState(P)},te.useSyncExternalStore=function(P,V,G){return D.H.useSyncExternalStore(P,V,G)},te.useTransition=function(){return D.H.useTransition()},te.version="19.2.3",te}var q0;function zp(){return q0||(q0=1,yd.exports=UE()),yd.exports}var Vn=zp();const NE=Wx(Vn);var Md={exports:{}},Ol={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function OE(){return Y0||(Y0=1,(function(o){function t(z,H){var K=z.length;z.push(H);t:for(;0<K;){var ot=K-1>>>1,ft=z[ot];if(0<s(ft,H))z[ot]=H,z[K]=ft,K=ot;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var H=z[0],K=z.pop();if(K!==H){z[0]=K;t:for(var ot=0,ft=z.length,P=ft>>>1;ot<P;){var V=2*(ot+1)-1,G=z[V],Y=V+1,dt=z[Y];if(0>s(G,K))Y<ft&&0>s(dt,G)?(z[ot]=dt,z[Y]=K,ot=Y):(z[ot]=G,z[V]=K,ot=V);else if(Y<ft&&0>s(dt,K))z[ot]=dt,z[Y]=K,ot=Y;else break t}}return H}function s(z,H){var K=z.sortIndex-H.sortIndex;return K!==0?K:z.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,c=f.now();o.unstable_now=function(){return f.now()-c}}var d=[],p=[],_=1,g=null,v=3,y=!1,T=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=z)a(p),H.sortIndex=H.expirationTime,t(d,H);else break;H=n(p)}}function F(z){if(M=!1,L(z),!T)if(n(d)!==null)T=!0,O||(O=!0,$());else{var H=n(p);H!==null&&Z(F,H.startTime-z)}}var O=!1,D=-1,X=5,b=-1;function U(){return S?!0:!(o.unstable_now()-b<X)}function J(){if(S=!1,O){var z=o.unstable_now();b=z;var H=!0;try{t:{T=!1,M&&(M=!1,w(D),D=-1),y=!0;var K=v;try{e:{for(L(z),g=n(d);g!==null&&!(g.expirationTime>z&&U());){var ot=g.callback;if(typeof ot=="function"){g.callback=null,v=g.priorityLevel;var ft=ot(g.expirationTime<=z);if(z=o.unstable_now(),typeof ft=="function"){g.callback=ft,L(z),H=!0;break e}g===n(d)&&a(d),L(z)}else a(d);g=n(d)}if(g!==null)H=!0;else{var P=n(p);P!==null&&Z(F,P.startTime-z),H=!1}}break t}finally{g=null,v=K,y=!1}H=void 0}}finally{H?$():O=!1}}}var $;if(typeof A=="function")$=function(){A(J)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,k=ht.port2;ht.port1.onmessage=J,$=function(){k.postMessage(null)}}else $=function(){x(J,0)};function Z(z,H){D=x(function(){z(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var K=v;v=H;try{return z()}finally{v=K}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=v;v=z;try{return H()}finally{v=K}},o.unstable_scheduleCallback=function(z,H,K){var ot=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ot+K:ot):K=ot,z){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=K+ft,z={id:_++,callback:H,priorityLevel:z,startTime:K,expirationTime:ft,sortIndex:-1},K>ot?(z.sortIndex=K,t(p,z),n(d)===null&&z===n(p)&&(M?(w(D),D=-1):M=!0,Z(F,K-ot))):(z.sortIndex=ft,t(d,z),T||y||(T=!0,O||(O=!0,$()))),z},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(z){var H=v;return function(){var K=v;v=H;try{return z.apply(this,arguments)}finally{v=K}}}})(Td)),Td}var j0;function PE(){return j0||(j0=1,Ed.exports=OE()),Ed.exports}var bd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function zE(){if(Z0)return On;Z0=1;var o=zp();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(d,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:d,containerInfo:p,implementation:_}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(d,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(d,p,null,_)},On.flushSync=function(d){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,d)return d()}finally{f.T=p,a.p=_,a.d.f()}},On.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},On.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},On.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var _=p.as,g=c(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=c(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},On.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=c(_,p.crossOrigin);a.d.L(d,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(d,p){if(typeof d=="string")if(p){var _=c(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},On.requestFormReset=function(d){a.d.r(d)},On.unstable_batchedUpdates=function(d,p){return d(p)},On.useFormState=function(d,p,_){return f.H.useFormState(d,p,_)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.3",On}var K0;function BE(){if(K0)return bd.exports;K0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),bd.exports=zE(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function FE(){if(Q0)return Ol;Q0=1;var o=PE(),t=zp(),n=BE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function c(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return d(h),e;if(m===l)return d(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var E=!1,R=h.child;R;){if(R===r){E=!0,r=h,l=m;break}if(R===l){E=!0,l=h,r=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===r){E=!0,r=m,l=h;break}if(R===l){E=!0,l=m,r=h;break}R=R.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),A=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function k(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case O:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case A:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return i=e.displayName||null,i!==null?i:k(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return k(e(i))}catch{}}return null}var Z=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ot=[],ft=-1;function P(e){return{current:e}}function V(e){0>ft||(e.current=ot[ft],ot[ft]=null,ft--)}function G(e,i){ft++,ot[ft]=e.current,e.current=i}var Y=P(null),dt=P(null),xt=P(null),Mt=P(null);function Tt(e,i){switch(G(xt,i),G(dt,e),G(Y,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?h0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=h0(i),e=d0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(Y),G(Y,e)}function Ot(){V(Y),V(dt),V(xt)}function Wt(e){e.memoizedState!==null&&G(Mt,e);var i=Y.current,r=d0(i,e.type);i!==r&&(G(dt,e),G(Y,r))}function ue(e){dt.current===e&&(V(Y),V(dt)),Mt.current===e&&(V(Mt),wl._currentValue=K)}var at,vn;function It(e){if(at===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);at=i&&i[1]||"",vn=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+e+vn}var Qt=!1;function Bt(e,i){if(!e||Qt)return"";Qt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var nt=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){nt=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){nt=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&nt&&typeof ct.stack=="string")return[ct.stack,nt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var I=E.split(`
`),et=R.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===et.length)for(l=I.length-1,h=et.length-1;1<=l&&0<=h&&I[l]!==et[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==et[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==et[h]){var pt=`
`+I[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=h);break}}}finally{Qt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?It(r):""}function He(e,i){switch(e.tag){case 26:case 27:case 5:return It(e.type);case 16:return It("Lazy");case 13:return e.child!==i&&i!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return Bt(e.type,!1);case 11:return Bt(e.type.render,!1);case 1:return Bt(e.type,!0);case 31:return It("Activity");default:return""}}function ee(e){try{var i="",r=null;do i+=He(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var B=Object.prototype.hasOwnProperty,C=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,yt=o.unstable_shouldYield,St=o.unstable_requestPaint,gt=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,Ct=o.unstable_ImmediatePriority,Nt=o.unstable_UserBlockingPriority,qt=o.unstable_NormalPriority,ie=o.unstable_LowPriority,vt=o.unstable_IdlePriority,Me=o.log,le=o.unstable_setDisableYieldValue,Kt=null,Lt=null;function Dt(e){if(typeof Me=="function"&&le(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(Kt,e)}catch{}}var kt=Math.clz32?Math.clz32:re,Se=Math.log,Xe=Math.LN2;function re(e){return e>>>=0,e===0?32:31-(Se(e)/Xe|0)|0}var Et=256,W=262144,Rt=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?h=bt(l):(E&=R,E!==0?h=bt(E):r||(r=R&~e,r!==0&&(h=bt(r))))):(R=l&~m,R!==0?h=bt(R):E!==0?h=bt(E):r||(r=l&~e,r!==0&&(h=bt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Gt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ce(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function Ke(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function tn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function we(e,i,r,l,h,m){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(r=E&~r;0<r;){var pt=31-kt(r),_t=1<<pt;R[pt]=0,I[pt]=-1;var nt=et[pt];if(nt!==null)for(et[pt]=null,pt=0;pt<nt.length;pt++){var ct=nt[pt];ct!==null&&(ct.lane&=-536870913)}r&=~_t}l!==0&&xn(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function xn(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-kt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function li(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-kt(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Io(e,i){var r=i&-i;return r=(r&42)!==0?1:Ho(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ga(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Go(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:z0(e.type))}function zr(e,i){var r=H.p;try{return H.p=e,i()}finally{H.p=r}}var Gi=Math.random().toString(36).slice(2),rn="__reactFiber$"+Gi,Un="__reactProps$"+Gi,Va="__reactContainer$"+Gi,Vo="__reactEvents$"+Gi,N="__reactListeners$"+Gi,Q="__reactHandles$"+Gi,lt="__reactResources$"+Gi,ut="__reactMarker$"+Gi;function rt(e){delete e[rn],delete e[Un],delete e[Vo],delete e[N],delete e[Q]}function wt(e){var i=e[rn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Va]||r[rn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=S0(e);e!==null;){if(r=e[rn])return r;e=S0(e)}return i}e=r,r=e.parentNode}return null}function Pt(e){if(e=e[rn]||e[Va]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Xt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Yt(e){var i=e[lt];return i||(i=e[lt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ft(e){e[ut]=!0}var Jt=new Set,$t={};function be(e,i){sn(e,i),sn(e+"Capture",i)}function sn(e,i){for($t[e]=i,e=0;e<i.length;e++)Jt.add(i[e])}var on=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ai={},Ie={};function se(e){return B.call(Ie,e)?!0:B.call(Ai,e)?!1:on.test(e)?Ie[e]=!0:(Ai[e]=!0,!1)}function ka(e,i,r){if(se(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Pe(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Tn(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function In(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xa(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ko(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){r=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ln(e){if(!e._valueTracker){var i=Xa(e)?"checked":"value";e._valueTracker=ko(e,i,""+e[i])}}function Ji(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Xa(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wn=/[\n"\\]/g;function Nn(e){return e.replace(Wn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xo(e,i,r,l,h,m,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+In(i)):e.value!==""+In(i)&&(e.value=""+In(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?mf(e,E,In(i)):r!=null?mf(e,E,In(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+In(R):e.removeAttribute("name")}function Wo(e,i,r,l,h,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){ln(e);return}r=r!=null?""+In(r):"",i=i!=null?""+In(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),ln(e)}function mf(e,i,r){i==="number"&&Wa(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ys(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+In(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function om(e,i,r){if(i!=null&&(i=""+In(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+In(r):""}function lm(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Z(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=In(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),ln(e)}function Ms(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var by=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function um(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||by.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function cm(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&um(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&um(e,m,i[m])}function _f(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ay=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fu(e){return Ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fa(){}var gf=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,Ts=null;function fm(e){var i=Pt(e);if(i&&(e=i.stateNode)){var r=e[Un]||null;t:switch(e=i.stateNode,i.type){case"input":if(Xo(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Nn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Un]||null;if(!h)throw Error(a(90));Xo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Ji(l)}break t;case"textarea":om(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&ys(e,!!r.multiple,i,!1)}}}var xf=!1;function hm(e,i,r){if(xf)return e(i,r);xf=!0;try{var l=e(i);return l}finally{if(xf=!1,(Es!==null||Ts!==null)&&(Ju(),Es&&(i=Es,e=Ts,Ts=Es=null,fm(i),e)))for(i=0;i<e.length;i++)fm(e[i])}}function qo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Un]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ha)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{Sf=!1}var qa=null,yf=null,hu=null;function dm(){if(hu)return hu;var e,i=yf,r=i.length,l,h="value"in qa?qa.value:qa.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var E=r-e;for(l=1;l<=E&&i[r-l]===h[m-l];l++);return hu=h.slice(e,1<l?1-l:void 0)}function du(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function pu(){return!0}function pm(){return!1}function qn(e){function i(r,l,h,m,E){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?pu:pm,this.isPropagationStopped=pm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),i}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=qn(Br),jo=g({},Br,{view:0,detail:0}),Cy=qn(jo),Mf,Ef,Zo,_u=g({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(Mf=e.screenX-Zo.screenX,Ef=e.screenY-Zo.screenY):Ef=Mf=0,Zo=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),mm=qn(_u),wy=g({},_u,{dataTransfer:0}),Dy=qn(wy),Ly=g({},jo,{relatedTarget:0}),Tf=qn(Ly),Uy=g({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=qn(Uy),Oy=g({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Py=qn(Oy),zy=g({},Br,{data:0}),_m=qn(zy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Iy[e])?!!i[e]:!1}function bf(){return Hy}var Gy=g({},jo,{key:function(e){if(e.key){var i=By[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=du(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(e){return e.type==="keypress"?du(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?du(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vy=qn(Gy),ky=g({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=qn(ky),Xy=g({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),Wy=qn(Xy),qy=g({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=qn(qy),jy=g({},_u,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=qn(jy),Ky=g({},Br,{newState:0,oldState:0}),Qy=qn(Ky),Jy=[9,13,27,32],Af=ha&&"CompositionEvent"in window,Ko=null;ha&&"documentMode"in document&&(Ko=document.documentMode);var $y=ha&&"TextEvent"in window&&!Ko,vm=ha&&(!Af||Ko&&8<Ko&&11>=Ko),xm=" ",Sm=!1;function ym(e,i){switch(e){case"keyup":return Jy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bs=!1;function tM(e,i){switch(e){case"compositionend":return Mm(i);case"keypress":return i.which!==32?null:(Sm=!0,xm);case"textInput":return e=i.data,e===xm&&Sm?null:e;default:return null}}function eM(e,i){if(bs)return e==="compositionend"||!Af&&ym(e,i)?(e=dm(),hu=yf=qa=null,bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vm&&i.locale!=="ko"?null:i.data;default:return null}}var nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!nM[e.type]:i==="textarea"}function Tm(e,i,r,l){Es?Ts?Ts.push(l):Ts=[l]:Es=l,i=rc(i,"onChange"),0<i.length&&(r=new mu("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Qo=null,Jo=null;function iM(e){s0(e,0)}function gu(e){var i=Xt(e);if(Ji(i))return e}function bm(e,i){if(e==="change")return i}var Am=!1;if(ha){var Rf;if(ha){var Cf="oninput"in document;if(!Cf){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),Cf=typeof Rm.oninput=="function"}Rf=Cf}else Rf=!1;Am=Rf&&(!document.documentMode||9<document.documentMode)}function Cm(){Qo&&(Qo.detachEvent("onpropertychange",wm),Jo=Qo=null)}function wm(e){if(e.propertyName==="value"&&gu(Jo)){var i=[];Tm(i,Jo,e,vf(e)),hm(iM,i)}}function aM(e,i,r){e==="focusin"?(Cm(),Qo=i,Jo=r,Qo.attachEvent("onpropertychange",wm)):e==="focusout"&&Cm()}function rM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(Jo)}function sM(e,i){if(e==="click")return gu(i)}function oM(e,i){if(e==="input"||e==="change")return gu(i)}function lM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ui=typeof Object.is=="function"?Object.is:lM;function $o(e,i){if(ui(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!B.call(i,h)||!ui(e[h],i[h]))return!1}return!0}function Dm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lm(e,i){var r=Dm(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Dm(r)}}function Um(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Um(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Nm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Wa(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Wa(e.document)}return i}function wf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var uM=ha&&"documentMode"in document&&11>=document.documentMode,As=null,Df=null,tl=null,Lf=!1;function Om(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lf||As==null||As!==Wa(l)||(l=As,"selectionStart"in l&&wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),tl&&$o(tl,l)||(tl=l,l=rc(Df,"onSelect"),0<l.length&&(i=new mu("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=As)))}function Fr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Rs={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionrun:Fr("Transition","TransitionRun"),transitionstart:Fr("Transition","TransitionStart"),transitioncancel:Fr("Transition","TransitionCancel"),transitionend:Fr("Transition","TransitionEnd")},Uf={},Pm={};ha&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Ir(e){if(Uf[e])return Uf[e];if(!Rs[e])return e;var i=Rs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Pm)return Uf[e]=i[r];return e}var zm=Ir("animationend"),Bm=Ir("animationiteration"),Fm=Ir("animationstart"),cM=Ir("transitionrun"),fM=Ir("transitionstart"),hM=Ir("transitioncancel"),Im=Ir("transitionend"),Hm=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Vi(e,i){Hm.set(e,i),be(i,[e])}var vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],Cs=0,Of=0;function xu(){for(var e=Cs,i=Of=Cs=0;i<e;){var r=Ri[i];Ri[i++]=null;var l=Ri[i];Ri[i++]=null;var h=Ri[i];Ri[i++]=null;var m=Ri[i];if(Ri[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}m!==0&&Gm(r,h,m)}}function Su(e,i,r,l){Ri[Cs++]=e,Ri[Cs++]=i,Ri[Cs++]=r,Ri[Cs++]=l,Of|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Pf(e,i,r,l){return Su(e,i,r,l),yu(e)}function Hr(e,i){return Su(e,null,null,i),yu(e)}function Gm(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-kt(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function yu(e){if(50<Ml)throw Ml=0,Xh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ws={};function dM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,r,l){return new dM(e,i,r,l)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,i){var r=e.alternate;return r===null?(r=ci(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Vm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Mu(e,i,r,l,h,m){var E=0;if(l=e,typeof e=="function")zf(e)&&(E=1);else if(typeof e=="string")E=vE(e,r,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=ci(31,r,i,h),e.elementType=b,e.lanes=m,e;case M:return Gr(r.children,h,m,i);case S:E=8,h|=24;break;case x:return e=ci(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case F:return e=ci(13,r,i,h),e.elementType=F,e.lanes=m,e;case O:return e=ci(19,r,i,h),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:E=10;break t;case w:E=9;break t;case L:E=11;break t;case D:E=14;break t;case X:E=16,l=null;break t}E=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ci(E,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function Gr(e,i,r,l){return e=ci(7,e,l,i),e.lanes=r,e}function Bf(e,i,r){return e=ci(6,e,null,i),e.lanes=r,e}function km(e){var i=ci(18,null,null,0);return i.stateNode=e,i}function Ff(e,i,r){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Xm=new WeakMap;function Ci(e,i){if(typeof e=="object"&&e!==null){var r=Xm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:ee(i)},Xm.set(e,i),i)}return{value:e,source:i,stack:ee(i)}}var Ds=[],Ls=0,Eu=null,el=0,wi=[],Di=0,Ya=null,$i=1,ta="";function pa(e,i){Ds[Ls++]=el,Ds[Ls++]=Eu,Eu=e,el=i}function Wm(e,i,r){wi[Di++]=$i,wi[Di++]=ta,wi[Di++]=Ya,Ya=e;var l=$i;e=ta;var h=32-kt(l)-1;l&=~(1<<h),r+=1;var m=32-kt(i)+h;if(30<m){var E=h-h%5;m=(l&(1<<E)-1).toString(32),l>>=E,h-=E,$i=1<<32-kt(i)+h|r<<h|l,ta=m+e}else $i=1<<m|r<<h|l,ta=e}function If(e){e.return!==null&&(pa(e,1),Wm(e,1,0))}function Hf(e){for(;e===Eu;)Eu=Ds[--Ls],Ds[Ls]=null,el=Ds[--Ls],Ds[Ls]=null;for(;e===Ya;)Ya=wi[--Di],wi[Di]=null,ta=wi[--Di],wi[Di]=null,$i=wi[--Di],wi[Di]=null}function qm(e,i){wi[Di++]=$i,wi[Di++]=ta,wi[Di++]=Ya,$i=i.id,ta=i.overflow,Ya=e}var bn=null,Ge=null,me=!1,ja=null,Li=!1,Gf=Error(a(519));function Za(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(Ci(i,e)),Gf}function Ym(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[rn]=e,i[Un]=l,r){case"dialog":he("cancel",i),he("close",i);break;case"iframe":case"object":case"embed":he("load",i);break;case"video":case"audio":for(r=0;r<Tl.length;r++)he(Tl[r],i);break;case"source":he("error",i);break;case"img":case"image":case"link":he("error",i),he("load",i);break;case"details":he("toggle",i);break;case"input":he("invalid",i),Wo(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":he("invalid",i);break;case"textarea":he("invalid",i),lm(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||c0(i.textContent,r)?(l.popover!=null&&(he("beforetoggle",i),he("toggle",i)),l.onScroll!=null&&he("scroll",i),l.onScrollEnd!=null&&he("scrollend",i),l.onClick!=null&&(i.onclick=fa),i=!0):i=!1,i||Za(e,!0)}function jm(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:bn=bn.return}}function Us(e){if(e!==bn)return!1;if(!me)return jm(e),me=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||rd(e.type,e.memoizedProps)),r=!r),r&&Ge&&Za(e),jm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ge=x0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ge=x0(e)}else i===27?(i=Ge,ur(e.type)?(e=cd,cd=null,Ge=e):Ge=i):Ge=bn?Ni(e.stateNode.nextSibling):null;return!0}function Vr(){Ge=bn=null,me=!1}function Vf(){var e=ja;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),ja=null),e}function nl(e){ja===null?ja=[e]:ja.push(e)}var kf=P(null),kr=null,ma=null;function Ka(e,i,r){G(kf,i._currentValue),i._currentValue=r}function _a(e){e._currentValue=kf.current,V(kf)}function Xf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Wf(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var R=m;m=h;for(var I=0;I<i.length;I++)if(R.context===i[I]){m.lanes|=r,R=m.alternate,R!==null&&(R.lanes|=r),Xf(m.return,r,e),l||(E=null);break t}m=R.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),Xf(E,r,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Ns(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var R=h.type;ui(h.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(h===Mt.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}h=h.return}e!==null&&Wf(i,e,r,l),i.flags|=262144}function Tu(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xr(e){kr=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Zm(kr,e)}function bu(e,i){return kr===null&&Xr(e),Zm(e,i)}function Zm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ma===null){if(e===null)throw Error(a(308));ma=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ma=ma.next=i;return r}var pM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},mM=o.unstable_scheduleCallback,_M=o.unstable_NormalPriority,un={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new pM,data:new Map,refCount:0}}function il(e){e.refCount--,e.refCount===0&&mM(_M,function(){e.controller.abort()})}var al=null,Yf=0,Os=0,Ps=null;function gM(e,i){if(al===null){var r=al=[];Yf=0,Os=Kh(),Ps={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Yf++,i.then(Km,Km),i}function Km(){if(--Yf===0&&al!==null){Ps!==null&&(Ps.status="fulfilled");var e=al;al=null,Os=0,Ps=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function vM(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var Qm=z.S;z.S=function(e,i){Og=gt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&gM(e,i),Qm!==null&&Qm(e,i)};var Wr=P(null);function jf(){var e=Wr.current;return e!==null?e:ze.pooledCache}function Au(e,i){i===null?G(Wr,Wr.current):G(Wr,i.pool)}function Jm(){var e=jf();return e===null?null:{parent:un._currentValue,pool:e}}var zs=Error(a(460)),Zf=Error(a(474)),Ru=Error(a(542)),Cu={then:function(){}};function $m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function t_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(fa,fa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,n_(e),e;default:if(typeof i.status=="string")i.then(fa,fa);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,n_(e),e}throw Yr=i,zs}}function qr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Yr=r,zs):r}}var Yr=null;function e_(){if(Yr===null)throw Error(a(459));var e=Yr;return Yr=null,e}function n_(e){if(e===zs||e===Ru)throw Error(a(483))}var Bs=null,rl=0;function wu(e){var i=rl;return rl+=1,Bs===null&&(Bs=[]),t_(Bs,e,i)}function sl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Du(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function i_(e){function i(j,q){if(e){var tt=j.deletions;tt===null?(j.deletions=[q],j.flags|=16):tt.push(q)}}function r(j,q){if(!e)return null;for(;q!==null;)i(j,q),q=q.sibling;return null}function l(j){for(var q=new Map;j!==null;)j.key!==null?q.set(j.key,j):q.set(j.index,j),j=j.sibling;return q}function h(j,q){return j=da(j,q),j.index=0,j.sibling=null,j}function m(j,q,tt){return j.index=tt,e?(tt=j.alternate,tt!==null?(tt=tt.index,tt<q?(j.flags|=67108866,q):tt):(j.flags|=67108866,q)):(j.flags|=1048576,q)}function E(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function R(j,q,tt,mt){return q===null||q.tag!==6?(q=Bf(tt,j.mode,mt),q.return=j,q):(q=h(q,tt),q.return=j,q)}function I(j,q,tt,mt){var Vt=tt.type;return Vt===M?pt(j,q,tt.props.children,mt,tt.key):q!==null&&(q.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===X&&qr(Vt)===q.type)?(q=h(q,tt.props),sl(q,tt),q.return=j,q):(q=Mu(tt.type,tt.key,tt.props,null,j.mode,mt),sl(q,tt),q.return=j,q)}function et(j,q,tt,mt){return q===null||q.tag!==4||q.stateNode.containerInfo!==tt.containerInfo||q.stateNode.implementation!==tt.implementation?(q=Ff(tt,j.mode,mt),q.return=j,q):(q=h(q,tt.children||[]),q.return=j,q)}function pt(j,q,tt,mt,Vt){return q===null||q.tag!==7?(q=Gr(tt,j.mode,mt,Vt),q.return=j,q):(q=h(q,tt),q.return=j,q)}function _t(j,q,tt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Bf(""+q,j.mode,tt),q.return=j,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return tt=Mu(q.type,q.key,q.props,null,j.mode,tt),sl(tt,q),tt.return=j,tt;case T:return q=Ff(q,j.mode,tt),q.return=j,q;case X:return q=qr(q),_t(j,q,tt)}if(Z(q)||$(q))return q=Gr(q,j.mode,tt,null),q.return=j,q;if(typeof q.then=="function")return _t(j,wu(q),tt);if(q.$$typeof===A)return _t(j,bu(j,q),tt);Du(j,q)}return null}function nt(j,q,tt,mt){var Vt=q!==null?q.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Vt!==null?null:R(j,q,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===Vt?I(j,q,tt,mt):null;case T:return tt.key===Vt?et(j,q,tt,mt):null;case X:return tt=qr(tt),nt(j,q,tt,mt)}if(Z(tt)||$(tt))return Vt!==null?null:pt(j,q,tt,mt,null);if(typeof tt.then=="function")return nt(j,q,wu(tt),mt);if(tt.$$typeof===A)return nt(j,q,bu(j,tt),mt);Du(j,tt)}return null}function ct(j,q,tt,mt,Vt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(tt)||null,R(q,j,""+mt,Vt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return j=j.get(mt.key===null?tt:mt.key)||null,I(q,j,mt,Vt);case T:return j=j.get(mt.key===null?tt:mt.key)||null,et(q,j,mt,Vt);case X:return mt=qr(mt),ct(j,q,tt,mt,Vt)}if(Z(mt)||$(mt))return j=j.get(tt)||null,pt(q,j,mt,Vt,null);if(typeof mt.then=="function")return ct(j,q,tt,wu(mt),Vt);if(mt.$$typeof===A)return ct(j,q,tt,bu(q,mt),Vt);Du(q,mt)}return null}function Ut(j,q,tt,mt){for(var Vt=null,ve=null,zt=q,ae=q=0,pe=null;zt!==null&&ae<tt.length;ae++){zt.index>ae?(pe=zt,zt=null):pe=zt.sibling;var xe=nt(j,zt,tt[ae],mt);if(xe===null){zt===null&&(zt=pe);break}e&&zt&&xe.alternate===null&&i(j,zt),q=m(xe,q,ae),ve===null?Vt=xe:ve.sibling=xe,ve=xe,zt=pe}if(ae===tt.length)return r(j,zt),me&&pa(j,ae),Vt;if(zt===null){for(;ae<tt.length;ae++)zt=_t(j,tt[ae],mt),zt!==null&&(q=m(zt,q,ae),ve===null?Vt=zt:ve.sibling=zt,ve=zt);return me&&pa(j,ae),Vt}for(zt=l(zt);ae<tt.length;ae++)pe=ct(zt,j,ae,tt[ae],mt),pe!==null&&(e&&pe.alternate!==null&&zt.delete(pe.key===null?ae:pe.key),q=m(pe,q,ae),ve===null?Vt=pe:ve.sibling=pe,ve=pe);return e&&zt.forEach(function(pr){return i(j,pr)}),me&&pa(j,ae),Vt}function Zt(j,q,tt,mt){if(tt==null)throw Error(a(151));for(var Vt=null,ve=null,zt=q,ae=q=0,pe=null,xe=tt.next();zt!==null&&!xe.done;ae++,xe=tt.next()){zt.index>ae?(pe=zt,zt=null):pe=zt.sibling;var pr=nt(j,zt,xe.value,mt);if(pr===null){zt===null&&(zt=pe);break}e&&zt&&pr.alternate===null&&i(j,zt),q=m(pr,q,ae),ve===null?Vt=pr:ve.sibling=pr,ve=pr,zt=pe}if(xe.done)return r(j,zt),me&&pa(j,ae),Vt;if(zt===null){for(;!xe.done;ae++,xe=tt.next())xe=_t(j,xe.value,mt),xe!==null&&(q=m(xe,q,ae),ve===null?Vt=xe:ve.sibling=xe,ve=xe);return me&&pa(j,ae),Vt}for(zt=l(zt);!xe.done;ae++,xe=tt.next())xe=ct(zt,j,ae,xe.value,mt),xe!==null&&(e&&xe.alternate!==null&&zt.delete(xe.key===null?ae:xe.key),q=m(xe,q,ae),ve===null?Vt=xe:ve.sibling=xe,ve=xe);return e&&zt.forEach(function(wE){return i(j,wE)}),me&&pa(j,ae),Vt}function Ue(j,q,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===M&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var Vt=tt.key;q!==null;){if(q.key===Vt){if(Vt=tt.type,Vt===M){if(q.tag===7){r(j,q.sibling),mt=h(q,tt.props.children),mt.return=j,j=mt;break t}}else if(q.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===X&&qr(Vt)===q.type){r(j,q.sibling),mt=h(q,tt.props),sl(mt,tt),mt.return=j,j=mt;break t}r(j,q);break}else i(j,q);q=q.sibling}tt.type===M?(mt=Gr(tt.props.children,j.mode,mt,tt.key),mt.return=j,j=mt):(mt=Mu(tt.type,tt.key,tt.props,null,j.mode,mt),sl(mt,tt),mt.return=j,j=mt)}return E(j);case T:t:{for(Vt=tt.key;q!==null;){if(q.key===Vt)if(q.tag===4&&q.stateNode.containerInfo===tt.containerInfo&&q.stateNode.implementation===tt.implementation){r(j,q.sibling),mt=h(q,tt.children||[]),mt.return=j,j=mt;break t}else{r(j,q);break}else i(j,q);q=q.sibling}mt=Ff(tt,j.mode,mt),mt.return=j,j=mt}return E(j);case X:return tt=qr(tt),Ue(j,q,tt,mt)}if(Z(tt))return Ut(j,q,tt,mt);if($(tt)){if(Vt=$(tt),typeof Vt!="function")throw Error(a(150));return tt=Vt.call(tt),Zt(j,q,tt,mt)}if(typeof tt.then=="function")return Ue(j,q,wu(tt),mt);if(tt.$$typeof===A)return Ue(j,q,bu(j,tt),mt);Du(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,q!==null&&q.tag===6?(r(j,q.sibling),mt=h(q,tt),mt.return=j,j=mt):(r(j,q),mt=Bf(tt,j.mode,mt),mt.return=j,j=mt),E(j)):r(j,q)}return function(j,q,tt,mt){try{rl=0;var Vt=Ue(j,q,tt,mt);return Bs=null,Vt}catch(zt){if(zt===zs||zt===Ru)throw zt;var ve=ci(29,zt,null,j.mode);return ve.lanes=mt,ve.return=j,ve}finally{}}}var jr=i_(!0),a_=i_(!1),Qa=!1;function Kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=yu(e),Gm(e,null,r),i}return Su(e,l,i,r),yu(e)}function ol(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,li(e,r)}}function Jf(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var $f=!1;function ll(){if($f){var e=Ps;if(e!==null)throw e}}function ul(e,i,r,l){$f=!1;var h=e.updateQueue;Qa=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var I=R,et=I.next;I.next=null,E===null?m=et:E.next=et,E=I;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==E&&(R===null?pt.firstBaseUpdate=et:R.next=et,pt.lastBaseUpdate=I))}if(m!==null){var _t=h.baseState;E=0,pt=et=I=null,R=m;do{var nt=R.lane&-536870913,ct=nt!==R.lane;if(ct?(de&nt)===nt:(l&nt)===nt){nt!==0&&nt===Os&&($f=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ut=e,Zt=R;nt=i;var Ue=r;switch(Zt.tag){case 1:if(Ut=Zt.payload,typeof Ut=="function"){_t=Ut.call(Ue,_t,nt);break t}_t=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=Zt.payload,nt=typeof Ut=="function"?Ut.call(Ue,_t,nt):Ut,nt==null)break t;_t=g({},_t,nt);break t;case 2:Qa=!0}}nt=R.callback,nt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[nt]:ct.push(nt))}else ct={lane:nt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(et=pt=ct,I=_t):pt=pt.next=ct,E|=nt;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);pt===null&&(I=_t),h.baseState=I,h.firstBaseUpdate=et,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),ar|=E,e.lanes=E,e.memoizedState=_t}}function r_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function s_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)r_(r[e],i)}var Fs=P(null),Lu=P(0);function o_(e,i){e=ba,G(Lu,e),G(Fs,i),ba=e|i.baseLanes}function th(){G(Lu,ba),G(Fs,Fs.current)}function eh(){ba=Lu.current,V(Fs),V(Lu)}var fi=P(null),Ui=null;function tr(e){var i=e.alternate;G(en,en.current&1),G(fi,e),Ui===null&&(i===null||Fs.current!==null||i.memoizedState!==null)&&(Ui=e)}function nh(e){G(en,en.current),G(fi,e),Ui===null&&(Ui=e)}function l_(e){e.tag===22?(G(en,en.current),G(fi,e),Ui===null&&(Ui=e)):er()}function er(){G(en,en.current),G(fi,fi.current)}function hi(e){V(fi),Ui===e&&(Ui=null),V(en)}var en=P(0);function Uu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||ld(r)||ud(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ga=0,ne=null,De=null,cn=null,Nu=!1,Is=!1,Zr=!1,Ou=0,cl=0,Hs=null,xM=0;function Qe(){throw Error(a(321))}function ih(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ui(e[r],i[r]))return!1;return!0}function ah(e,i,r,l,h,m){return ga=m,ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?W_:xh,Zr=!1,m=r(l,h),Zr=!1,Is&&(m=c_(i,r,l,h)),u_(e),m}function u_(e){z.H=dl;var i=De!==null&&De.next!==null;if(ga=0,cn=De=ne=null,Nu=!1,cl=0,Hs=null,i)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&Tu(e)&&(fn=!0))}function c_(e,i,r,l){ne=e;var h=0;do{if(Is&&(Hs=null),cl=0,Is=!1,25<=h)throw Error(a(301));if(h+=1,cn=De=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=q_,m=i(r,l)}while(Is);return m}function SM(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?fl(i):i,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ne.flags|=1024),i}function rh(){var e=Ou!==0;return Ou=0,e}function sh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function oh(e){if(Nu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Nu=!1}ga=0,cn=De=ne=null,Is=!1,cl=Ou=0,Hs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ne.memoizedState=cn=e:cn=cn.next=e,cn}function nn(){if(De===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var i=cn===null?ne.memoizedState:cn.next;if(i!==null)cn=i,De=e;else{if(e===null)throw ne.alternate===null?Error(a(467)):Error(a(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},cn===null?ne.memoizedState=cn=e:cn=cn.next=e}return cn}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(e){var i=cl;return cl+=1,Hs===null&&(Hs=[]),e=t_(Hs,e,i),i=ne,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?W_:xh),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fl(e);if(e.$$typeof===A)return An(e)}throw Error(a(438,String(e)))}function lh(e){var i=null,r=ne.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Pu(),ne.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=U;return i.index++,r}function va(e,i){return typeof i=="function"?i(e):i}function Bu(e){var i=nn();return uh(i,De,e)}function uh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var R=E=null,I=null,et=i,pt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(de&_t)===_t:(ga&_t)===_t){var nt=et.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Os&&(pt=!0);else if((ga&nt)===nt){et=et.next,nt===Os&&(pt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(R=I=_t,E=m):I=I.next=_t,ne.lanes|=nt,ar|=nt;_t=et.action,Zr&&r(m,_t),m=et.hasEagerState?et.eagerState:r(m,_t)}else nt={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(R=I=nt,E=m):I=I.next=nt,ne.lanes|=_t,ar|=_t;et=et.next}while(et!==null&&et!==i);if(I===null?E=m:I.next=R,!ui(m,e.memoizedState)&&(fn=!0,pt&&(r=Ps,r!==null)))throw r;e.memoizedState=m,e.baseState=E,e.baseQueue=I,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ch(e){var i=nn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);ui(m,i.memoizedState)||(fn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function f_(e,i,r){var l=ne,h=nn(),m=me;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!ui((De||h).memoizedState,r);if(E&&(h.memoizedState=r,fn=!0),h=h.queue,dh(p_.bind(null,l,h,e),[e]),h.getSnapshot!==i||E||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,Gs(9,{destroy:void 0},d_.bind(null,l,h,r,i),null),ze===null)throw Error(a(349));m||(ga&127)!==0||h_(l,i,r)}return r}function h_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ne.updateQueue,i===null?(i=Pu(),ne.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function d_(e,i,r,l){i.value=r,i.getSnapshot=l,m_(i)&&__(e)}function p_(e,i,r){return r(function(){m_(i)&&__(e)})}function m_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ui(e,r)}catch{return!0}}function __(e){var i=Hr(e,2);i!==null&&Qn(i,e,2)}function fh(e){var i=Hn();if(typeof e=="function"){var r=e;if(e=r(),Zr){Dt(!0);try{r()}finally{Dt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},i}function g_(e,i,r,l){return e.baseState=r,uh(e,De,typeof l=="function"?l:va)}function yM(e,i,r,l,h){if(Hu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,v_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function v_(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var R=r(h,l),I=z.S;I!==null&&I(E,R),x_(e,i,R)}catch(et){hh(e,i,et)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=r(h,l),x_(e,i,m)}catch(et){hh(e,i,et)}}function x_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){S_(e,i,l)},function(l){return hh(e,i,l)}):S_(e,i,r)}function S_(e,i,r){i.status="fulfilled",i.value=r,y_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,v_(e,r)))}function hh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,y_(i),i=i.next;while(i!==l)}e.action=null}function y_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function M_(e,i){return i}function E_(e,i){if(me){var r=ze.formState;if(r!==null){t:{var l=ne;if(me){if(Ge){e:{for(var h=Ge,m=Li;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ni(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ge=Ni(h.nextSibling),l=h.data==="F!";break t}}Za(l)}l=!1}l&&(i=r[0])}}return r=Hn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:M_,lastRenderedState:i},r.queue=l,r=V_.bind(null,ne,l),l.dispatch=r,l=fh(!1),m=vh.bind(null,ne,!1,l.queue),l=Hn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=yM.bind(null,ne,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function T_(e){var i=nn();return b_(i,De,e)}function b_(e,i,r){if(i=uh(e,i,M_)[0],e=Bu(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=fl(i)}catch(E){throw E===zs?Ru:E}else l=i;i=nn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ne.flags|=2048,Gs(9,{destroy:void 0},MM.bind(null,h,r),null)),[l,m,e]}function MM(e,i){e.action=i}function A_(e){var i=nn(),r=De;if(r!==null)return b_(i,r,e);nn(),i=i.memoizedState,r=nn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Gs(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=ne.updateQueue,i===null&&(i=Pu(),ne.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function R_(){return nn().memoizedState}function Fu(e,i,r,l){var h=Hn();ne.flags|=e,h.memoizedState=Gs(1|i,{destroy:void 0},r,l===void 0?null:l)}function Iu(e,i,r,l){var h=nn();l=l===void 0?null:l;var m=h.memoizedState.inst;De!==null&&l!==null&&ih(l,De.memoizedState.deps)?h.memoizedState=Gs(i,m,r,l):(ne.flags|=e,h.memoizedState=Gs(1|i,m,r,l))}function C_(e,i){Fu(8390656,8,e,i)}function dh(e,i){Iu(2048,8,e,i)}function EM(e){ne.flags|=4;var i=ne.updateQueue;if(i===null)i=Pu(),ne.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function w_(e){var i=nn().memoizedState;return EM({ref:i,nextImpl:e}),function(){if((ye&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function D_(e,i){return Iu(4,2,e,i)}function L_(e,i){return Iu(4,4,e,i)}function U_(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function N_(e,i,r){r=r!=null?r.concat([e]):null,Iu(4,4,U_.bind(null,i,e),r)}function ph(){}function O_(e,i){var r=nn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&ih(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function P_(e,i){var r=nn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&ih(i,l[1]))return l[0];if(l=e(),Zr){Dt(!0);try{e()}finally{Dt(!1)}}return r.memoizedState=[l,i],l}function mh(e,i,r){return r===void 0||(ga&1073741824)!==0&&(de&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=zg(),ne.lanes|=e,ar|=e,r)}function z_(e,i,r,l){return ui(r,i)?r:Fs.current!==null?(e=mh(e,r,l),ui(e,i)||(fn=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(de&261930)===0?(fn=!0,e.memoizedState=r):(e=zg(),ne.lanes|=e,ar|=e,i)}function B_(e,i,r,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var E=z.T,R={};z.T=R,vh(e,!1,i,r);try{var I=h(),et=z.S;if(et!==null&&et(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=vM(I,l);hl(e,i,pt,mi(e))}else hl(e,i,l,mi(e))}catch(_t){hl(e,i,{then:function(){},status:"rejected",reason:_t},mi())}finally{H.p=m,E!==null&&R.types!==null&&(E.types=R.types),z.T=E}}function TM(){}function _h(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=F_(e).queue;B_(e,h,i,K,r===null?TM:function(){return I_(e),r(l)})}function F_(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:K},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function I_(e){var i=F_(e);i.next===null&&(i=e.alternate.memoizedState),hl(e,i.next.queue,{},mi())}function gh(){return An(wl)}function H_(){return nn().memoizedState}function G_(){return nn().memoizedState}function bM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=mi();e=Ja(r);var l=$a(i,e,r);l!==null&&(Qn(l,i,r),ol(l,i,r)),i={cache:qf()},e.payload=i;return}i=i.return}}function AM(e,i,r){var l=mi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hu(e)?k_(i,r):(r=Pf(e,i,r,l),r!==null&&(Qn(r,e,l),X_(r,i,l)))}function V_(e,i,r){var l=mi();hl(e,i,r,l)}function hl(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))k_(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,R=m(E,r);if(h.hasEagerState=!0,h.eagerState=R,ui(R,E))return Su(e,i,h,0),ze===null&&xu(),!1}catch{}finally{}if(r=Pf(e,i,h,l),r!==null)return Qn(r,e,l),X_(r,i,l),!0}return!1}function vh(e,i,r,l){if(l={lane:2,revertLane:Kh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(i)throw Error(a(479))}else i=Pf(e,r,l,2),i!==null&&Qn(i,e,2)}function Hu(e){var i=e.alternate;return e===ne||i!==null&&i===ne}function k_(e,i){Is=Nu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function X_(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,li(e,r)}}var dl={readContext:An,use:zu,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};dl.useEffectEvent=Qe;var W_={readContext:An,use:zu,useCallback:function(e,i){return Hn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:C_,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Fu(4194308,4,U_.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Fu(4194308,4,e,i)},useInsertionEffect:function(e,i){Fu(4,2,e,i)},useMemo:function(e,i){var r=Hn();i=i===void 0?null:i;var l=e();if(Zr){Dt(!0);try{e()}finally{Dt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Hn();if(r!==void 0){var h=r(i);if(Zr){Dt(!0);try{r(i)}finally{Dt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=AM.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var i=Hn();return e={current:e},i.memoizedState=e},useState:function(e){e=fh(e);var i=e.queue,r=V_.bind(null,ne,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:ph,useDeferredValue:function(e,i){var r=Hn();return mh(r,e,i)},useTransition:function(){var e=fh(!1);return e=B_.bind(null,ne,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=ne,h=Hn();if(me){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),ze===null)throw Error(a(349));(de&127)!==0||h_(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,C_(p_.bind(null,l,m,e),[e]),l.flags|=2048,Gs(9,{destroy:void 0},d_.bind(null,l,m,r,i),null),r},useId:function(){var e=Hn(),i=ze.identifierPrefix;if(me){var r=ta,l=$i;r=(l&~(1<<32-kt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Ou++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=xM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:gh,useFormState:E_,useActionState:E_,useOptimistic:function(e){var i=Hn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=vh.bind(null,ne,!0,r),r.dispatch=i,[e,i]},useMemoCache:lh,useCacheRefresh:function(){return Hn().memoizedState=bM.bind(null,ne)},useEffectEvent:function(e){var i=Hn(),r={impl:e};return i.memoizedState=r,function(){if((ye&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},xh={readContext:An,use:zu,useCallback:O_,useContext:An,useEffect:dh,useImperativeHandle:N_,useInsertionEffect:D_,useLayoutEffect:L_,useMemo:P_,useReducer:Bu,useRef:R_,useState:function(){return Bu(va)},useDebugValue:ph,useDeferredValue:function(e,i){var r=nn();return z_(r,De.memoizedState,e,i)},useTransition:function(){var e=Bu(va)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:fl(e),i]},useSyncExternalStore:f_,useId:H_,useHostTransitionStatus:gh,useFormState:T_,useActionState:T_,useOptimistic:function(e,i){var r=nn();return g_(r,De,e,i)},useMemoCache:lh,useCacheRefresh:G_};xh.useEffectEvent=w_;var q_={readContext:An,use:zu,useCallback:O_,useContext:An,useEffect:dh,useImperativeHandle:N_,useInsertionEffect:D_,useLayoutEffect:L_,useMemo:P_,useReducer:ch,useRef:R_,useState:function(){return ch(va)},useDebugValue:ph,useDeferredValue:function(e,i){var r=nn();return De===null?mh(r,e,i):z_(r,De.memoizedState,e,i)},useTransition:function(){var e=ch(va)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:fl(e),i]},useSyncExternalStore:f_,useId:H_,useHostTransitionStatus:gh,useFormState:A_,useActionState:A_,useOptimistic:function(e,i){var r=nn();return De!==null?g_(r,De,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:lh,useCacheRefresh:G_};q_.useEffectEvent=w_;function Sh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yh={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=mi(),h=Ja(l);h.payload=i,r!=null&&(h.callback=r),i=$a(e,h,l),i!==null&&(Qn(i,e,l),ol(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=mi(),h=Ja(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=$a(e,h,l),i!==null&&(Qn(i,e,l),ol(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=mi(),l=Ja(r);l.tag=2,i!=null&&(l.callback=i),i=$a(e,l,r),i!==null&&(Qn(i,e,r),ol(i,e,r))}};function Y_(e,i,r,l,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!$o(r,l)||!$o(h,m):!0}function j_(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&yh.enqueueReplaceState(i,i.state,null)}function Kr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Z_(e){vu(e)}function K_(e){console.error(e)}function Q_(e){vu(e)}function Gu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function J_(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Mh(e,i,r){return r=Ja(r),r.tag=3,r.payload={element:null},r.callback=function(){Gu(e,i)},r}function $_(e){return e=Ja(e),e.tag=3,e}function tg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){J_(i,r,l)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){J_(i,r,l),typeof h!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function RM(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Ns(i,r,h,!0),r=fi.current,r!==null){switch(r.tag){case 31:case 13:return Ui===null?$u():r.alternate===null&&Je===0&&(Je=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Cu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Yh(e,l,h)),!1;case 22:return r.flags|=65536,l===Cu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Yh(e,l,h)),!1}throw Error(a(435,r.tag))}return Yh(e,l,h),$u(),!1}if(me)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Gf&&(e=Error(a(422),{cause:l}),nl(Ci(e,r)))):(l!==Gf&&(i=Error(a(423),{cause:l}),nl(Ci(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ci(l,r),h=Mh(e.stateNode,l,h),Jf(e,h),Je!==4&&(Je=2)),!1;var m=Error(a(520),{cause:l});if(m=Ci(m,r),yl===null?yl=[m]:yl.push(m),Je!==4&&(Je=2),i===null)return!0;l=Ci(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Mh(r.stateNode,l,e),Jf(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rr===null||!rr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=$_(h),tg(h,e,r,l),Jf(r,h),!1}r=r.return}while(r!==null);return!1}var Eh=Error(a(461)),fn=!1;function Rn(e,i,r,l){i.child=e===null?a_(i,null,r,l):jr(i,e.child,r,l)}function eg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var E={};for(var R in l)R!=="ref"&&(E[R]=l[R])}else E=l;return Xr(i),l=ah(e,i,r,E,m,h),R=rh(),e!==null&&!fn?(sh(e,i,h),xa(e,i,h)):(me&&R&&If(i),i.flags|=1,Rn(e,i,l,h),i.child)}function ng(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!zf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,ig(e,i,m,l,h)):(e=Mu(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Lh(e,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:$o,r(E,l)&&e.ref===i.ref)return xa(e,i,h)}return i.flags|=1,e=da(m,l),e.ref=i.ref,e.return=i,i.child=e}function ig(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if($o(m,l)&&e.ref===i.ref)if(fn=!1,i.pendingProps=l=m,Lh(e,h))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,xa(e,i,h)}return Th(e,i,r,l,h)}function ag(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return rg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Au(i,m!==null?m.cachePool:null),m!==null?o_(i,m):th(),l_(i);else return l=i.lanes=536870912,rg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Au(i,m.cachePool),o_(i,m),er(),i.memoizedState=null):(e!==null&&Au(i,null),th(),er());return Rn(e,i,h,r),i.child}function pl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function rg(e,i,r,l,h){var m=jf();return m=m===null?null:{parent:un._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Au(i,null),th(),l_(i),e!==null&&Ns(e,i,l,!0),i.childLanes=h,null}function Vu(e,i){return i=Xu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function sg(e,i,r){return jr(i,e.child,null,r),e=Vu(i,i.pendingProps),e.flags|=2,hi(i),i.memoizedState=null,e}function CM(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Vu(i,l),i.lanes=536870912,pl(null,e);if(nh(i),(e=Ge)?(e=v0(e,Li),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},r=km(e),r.return=i,i.child=r,bn=i,Ge=null)):e=null,e===null)throw Za(i);return i.lanes=536870912,null}return Vu(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(nh(i),h)if(i.flags&256)i.flags&=-257,i=sg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(fn||Ns(e,i,r,!1),h=(r&e.childLanes)!==0,fn||h){if(l=ze,l!==null&&(E=Io(l,r),E!==0&&E!==m.retryLane))throw m.retryLane=E,Hr(e,E),Qn(l,e,E),Eh;$u(),i=sg(e,i,r)}else e=m.treeContext,Ge=Ni(E.nextSibling),bn=i,me=!0,ja=null,Li=!1,e!==null&&qm(i,e),i=Vu(i,l),i.flags|=4096;return i}return e=da(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ku(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Th(e,i,r,l,h){return Xr(i),r=ah(e,i,r,l,void 0,h),l=rh(),e!==null&&!fn?(sh(e,i,h),xa(e,i,h)):(me&&l&&If(i),i.flags|=1,Rn(e,i,r,h),i.child)}function og(e,i,r,l,h,m){return Xr(i),i.updateQueue=null,r=c_(i,l,r,h),u_(e),l=rh(),e!==null&&!fn?(sh(e,i,m),xa(e,i,m)):(me&&l&&If(i),i.flags|=1,Rn(e,i,r,m),i.child)}function lg(e,i,r,l,h){if(Xr(i),i.stateNode===null){var m=ws,E=r.contextType;typeof E=="object"&&E!==null&&(m=An(E)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Kf(i),E=r.contextType,m.context=typeof E=="object"&&E!==null?An(E):ws,m.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Sh(i,r,E,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&yh.enqueueReplaceState(m,m.state,null),ul(i,l,m,h),ll(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var R=i.memoizedProps,I=Kr(r,R);m.props=I;var et=m.context,pt=r.contextType;E=ws,typeof pt=="object"&&pt!==null&&(E=An(pt));var _t=r.getDerivedStateFromProps;pt=typeof _t=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||et!==E)&&j_(i,m,l,E),Qa=!1;var nt=i.memoizedState;m.state=nt,ul(i,l,m,h),ll(),et=i.memoizedState,R||nt!==et||Qa?(typeof _t=="function"&&(Sh(i,r,_t,l),et=i.memoizedState),(I=Qa||Y_(i,r,I,l,nt,et,E))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),m.props=l,m.state=et,m.context=E,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Qf(e,i),E=i.memoizedProps,pt=Kr(r,E),m.props=pt,_t=i.pendingProps,nt=m.context,et=r.contextType,I=ws,typeof et=="object"&&et!==null&&(I=An(et)),R=r.getDerivedStateFromProps,(et=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==_t||nt!==I)&&j_(i,m,l,I),Qa=!1,nt=i.memoizedState,m.state=nt,ul(i,l,m,h),ll();var ct=i.memoizedState;E!==_t||nt!==ct||Qa||e!==null&&e.dependencies!==null&&Tu(e.dependencies)?(typeof R=="function"&&(Sh(i,r,R,l),ct=i.memoizedState),(pt=Qa||Y_(i,r,pt,l,nt,ct,I)||e!==null&&e.dependencies!==null&&Tu(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ct,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ct,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),m.props=l,m.state=ct,m.context=I,l=pt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,ku(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=jr(i,e.child,null,h),i.child=jr(i,null,r,h)):Rn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=xa(e,i,h),e}function ug(e,i,r,l){return Vr(),i.flags|=256,Rn(e,i,r,l),i.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ah(e){return{baseLanes:e,cachePool:Jm()}}function Rh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=pi),e}function cg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(me){if(h?tr(i):er(),(e=Ge)?(e=v0(e,Li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},r=km(e),r.return=i,i.child=r,bn=i,Ge=null)):e=null,e===null)throw Za(i);return ud(e)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,h?(er(),h=i.mode,R=Xu({mode:"hidden",children:R},h),l=Gr(l,h,r,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Ah(r),l.childLanes=Rh(e,E,r),i.memoizedState=bh,pl(null,l)):(tr(i),Ch(i,R))}var I=e.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(m)i.flags&256?(tr(i),i.flags&=-257,i=wh(e,i,r)):i.memoizedState!==null?(er(),i.child=e.child,i.flags|=128,i=null):(er(),R=l.fallback,h=i.mode,l=Xu({mode:"visible",children:l.children},h),R=Gr(R,h,r,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,jr(i,e.child,null,r),l=i.child,l.memoizedState=Ah(r),l.childLanes=Rh(e,E,r),i.memoizedState=bh,i=pl(null,l));else if(tr(i),ud(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var et=E.dgst;E=et,l=Error(a(419)),l.stack="",l.digest=E,nl({value:l,source:null,stack:null}),i=wh(e,i,r)}else if(fn||Ns(e,i,r,!1),E=(r&e.childLanes)!==0,fn||E){if(E=ze,E!==null&&(l=Io(E,r),l!==0&&l!==I.retryLane))throw I.retryLane=l,Hr(e,l),Qn(E,e,l),Eh;ld(R)||$u(),i=wh(e,i,r)}else ld(R)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,Ge=Ni(R.nextSibling),bn=i,me=!0,ja=null,Li=!1,e!==null&&qm(i,e),i=Ch(i,l.children),i.flags|=4096);return i}return h?(er(),R=l.fallback,h=i.mode,I=e.child,et=I.sibling,l=da(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,et!==null?R=da(et,R):(R=Gr(R,h,r,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,pl(null,l),l=i.child,R=e.child.memoizedState,R===null?R=Ah(r):(h=R.cachePool,h!==null?(I=un._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=Jm(),R={baseLanes:R.baseLanes|r,cachePool:h}),l.memoizedState=R,l.childLanes=Rh(e,E,r),i.memoizedState=bh,pl(e.child,l)):(tr(i),r=e.child,e=r.sibling,r=da(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=r,i.memoizedState=null,r)}function Ch(e,i){return i=Xu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Xu(e,i){return e=ci(22,e,null,i),e.lanes=0,e}function wh(e,i,r){return jr(i,e.child,null,r),e=Ch(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function fg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Xf(e.return,i,r)}function Dh(e,i,r,l,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=r,E.tailMode=h,E.treeForkCount=m)}function hg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var E=en.current,R=(E&2)!==0;if(R?(E=E&1|2,i.flags|=128):E&=1,G(en,E),Rn(e,i,l,r),l=me?el:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fg(e,r,i);else if(e.tag===19)fg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Uu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Dh(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Uu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Dh(i,!0,r,null,m,l);break;case"together":Dh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function xa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ar|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ns(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=da(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=da(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Lh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Tu(e)))}function wM(e,i,r){switch(i.tag){case 3:Tt(i,i.stateNode.containerInfo),Ka(i,un,e.memoizedState.cache),Vr();break;case 27:case 5:Wt(i);break;case 4:Tt(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,nh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(tr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?cg(e,i,r):(tr(i),e=xa(e,i,r),e!==null?e.sibling:null);tr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Ns(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return hg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),G(en,en.current),l)break;return null;case 22:return i.lanes=0,ag(e,i,r,i.pendingProps);case 24:Ka(i,un,e.memoizedState.cache)}return xa(e,i,r)}function dg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!Lh(e,r)&&(i.flags&128)===0)return fn=!1,wM(e,i,r);fn=(e.flags&131072)!==0}else fn=!1,me&&(i.flags&1048576)!==0&&Wm(i,el,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=qr(i.elementType),i.type=e,typeof e=="function")zf(e)?(l=Kr(e,l),i.tag=1,i=lg(null,i,e,l,r)):(i.tag=0,i=Th(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===L){i.tag=11,i=eg(null,i,e,l,r);break t}else if(h===D){i.tag=14,i=ng(null,i,e,l,r);break t}}throw i=k(e)||e,Error(a(306,i,""))}}return i;case 0:return Th(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=Kr(l,i.pendingProps),lg(e,i,l,h,r);case 3:t:{if(Tt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Qf(e,i),ul(i,l,null,r);var E=i.memoizedState;if(l=E.cache,Ka(i,un,l),l!==m.cache&&Wf(i,[un],r,!0),ll(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=ug(e,i,l,r);break t}else if(l!==h){h=Ci(Error(a(424)),i),nl(h),i=ug(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=Ni(e.firstChild),bn=i,me=!0,ja=null,Li=!0,r=a_(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Vr(),l===h){i=xa(e,i,r);break t}Rn(e,i,l,r)}i=i.child}return i;case 26:return ku(e,i),e===null?(r=T0(i.type,null,i.pendingProps,null))?i.memoizedState=r:me||(r=i.type,e=i.pendingProps,l=sc(xt.current).createElement(r),l[rn]=i,l[Un]=e,Cn(l,r,e),Ft(l),i.stateNode=l):i.memoizedState=T0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Wt(i),e===null&&me&&(l=i.stateNode=y0(i.type,i.pendingProps,xt.current),bn=i,Li=!0,h=Ge,ur(i.type)?(cd=h,Ge=Ni(l.firstChild)):Ge=h),Rn(e,i,i.pendingProps.children,r),ku(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&me&&((h=l=Ge)&&(l=rE(l,i.type,i.pendingProps,Li),l!==null?(i.stateNode=l,bn=i,Ge=Ni(l.firstChild),Li=!1,h=!0):h=!1),h||Za(i)),Wt(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,rd(h,m)?l=null:E!==null&&rd(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=ah(e,i,SM,null,null,r),wl._currentValue=h),ku(e,i),Rn(e,i,l,r),i.child;case 6:return e===null&&me&&((e=r=Ge)&&(r=sE(r,i.pendingProps,Li),r!==null?(i.stateNode=r,bn=i,Ge=null,e=!0):e=!1),e||Za(i)),null;case 13:return cg(e,i,r);case 4:return Tt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=jr(i,null,l,r):Rn(e,i,l,r),i.child;case 11:return eg(e,i,i.type,i.pendingProps,r);case 7:return Rn(e,i,i.pendingProps,r),i.child;case 8:return Rn(e,i,i.pendingProps.children,r),i.child;case 12:return Rn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),Rn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Xr(i),h=An(h),l=l(h),i.flags|=1,Rn(e,i,l,r),i.child;case 14:return ng(e,i,i.type,i.pendingProps,r);case 15:return ig(e,i,i.type,i.pendingProps,r);case 19:return hg(e,i,r);case 31:return CM(e,i,r);case 22:return ag(e,i,r,i.pendingProps);case 24:return Xr(i),l=An(un),e===null?(h=jf(),h===null&&(h=ze,m=qf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},Kf(i),Ka(i,un,h)):((e.lanes&r)!==0&&(Qf(e,i),ul(i,null,null,r),ll()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ka(i,un,l)):(l=m.cache,Ka(i,un,l),l!==h.cache&&Wf(i,[un],r,!0))),Rn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Sa(e){e.flags|=4}function Uh(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Hg())e.flags|=8192;else throw Yr=Cu,Zf}else e.flags&=-16777217}function pg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!w0(i))if(Hg())e.flags|=8192;else throw Yr=Cu,Zf}function Wu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Te():536870912,e.lanes|=i,Ws|=i)}function ml(e,i){if(!me)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function DM(e,i,r){var l=i.pendingProps;switch(Hf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(i),null;case 1:return Ve(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),_a(un),Ot(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Us(i)?Sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vf())),Ve(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Sa(i),m!==null?(Ve(i),pg(i,m)):(Ve(i),Uh(i,h,null,l,r))):m?m!==e.memoizedState?(Sa(i),Ve(i),pg(i,m)):(Ve(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sa(i),Ve(i),Uh(i,h,e,l,r)),null;case 27:if(ue(i),r=xt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ve(i),null}e=Y.current,Us(i)?Ym(i):(e=y0(h,l,r),i.stateNode=e,Sa(i))}return Ve(i),null;case 5:if(ue(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ve(i),null}if(m=Y.current,Us(i))Ym(i);else{var E=sc(xt.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(h,{is:l.is}):E.createElement(h)}}m[rn]=i,m[Un]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Cn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Sa(i)}}return Ve(i),Uh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Sa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=xt.current,Us(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=bn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[rn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||c0(e.nodeValue,r)),e||Za(i,!0)}else e=sc(e).createTextNode(l),e[rn]=i,i.stateNode=e}return Ve(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Us(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[rn]=i}else Vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ve(i),e=!1}else r=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(hi(i),i):(hi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ve(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Us(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[rn]=i}else Vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ve(i),h=!1}else h=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(hi(i),i):(hi(i),null)}return hi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Wu(i,i.updateQueue),Ve(i),null);case 4:return Ot(),e===null&&td(i.stateNode.containerInfo),Ve(i),null;case 10:return _a(i.type),Ve(i),null;case 19:if(V(en),l=i.memoizedState,l===null)return Ve(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)ml(l,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Uu(e),m!==null){for(i.flags|=128,ml(l,!1),e=m.updateQueue,i.updateQueue=e,Wu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)Vm(r,e),r=r.sibling;return G(en,en.current&1|2),me&&pa(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&gt()>Ku&&(i.flags|=128,h=!0,ml(l,!1),i.lanes=4194304)}else{if(!h)if(e=Uu(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Wu(i,e),ml(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!me)return Ve(i),null}else 2*gt()-l.renderingStartTime>Ku&&r!==536870912&&(i.flags|=128,h=!0,ml(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=gt(),e.sibling=null,r=en.current,G(en,h?r&1|2:r&1),me&&pa(i,l.treeForkCount),e):(Ve(i),null);case 22:case 23:return hi(i),eh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ve(i),i.subtreeFlags&6&&(i.flags|=8192)):Ve(i),r=i.updateQueue,r!==null&&Wu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&V(Wr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),_a(un),Ve(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function LM(e,i){switch(Hf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return _a(un),Ot(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ue(i),null;case 31:if(i.memoizedState!==null){if(hi(i),i.alternate===null)throw Error(a(340));Vr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(hi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Vr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return V(en),null;case 4:return Ot(),null;case 10:return _a(i.type),null;case 22:case 23:return hi(i),eh(),e!==null&&V(Wr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return _a(un),null;case 25:return null;default:return null}}function mg(e,i){switch(Hf(i),i.tag){case 3:_a(un),Ot();break;case 26:case 27:case 5:ue(i);break;case 4:Ot();break;case 31:i.memoizedState!==null&&hi(i);break;case 13:hi(i);break;case 19:V(en);break;case 10:_a(i.type);break;case 22:case 23:hi(i),eh(),e!==null&&V(Wr);break;case 24:_a(un)}}function _l(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,E=r.inst;l=m(),E.destroy=l}r=r.next}while(r!==h)}}catch(R){Re(i,i.return,R)}}function nr(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var E=l.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,h=i;var I=r,et=R;try{et()}catch(pt){Re(h,I,pt)}}}l=l.next}while(l!==m)}}catch(pt){Re(i,i.return,pt)}}function _g(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{s_(i,r)}catch(l){Re(e,e.return,l)}}}function gg(e,i,r){r.props=Kr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Re(e,i,l)}}function gl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Re(e,i,h)}}function ea(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Re(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Re(e,i,h)}else r.current=null}function vg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Re(e,e.return,h)}}function Nh(e,i,r){try{var l=e.stateNode;$M(l,e.type,r,i),l[Un]=i}catch(h){Re(e,e.return,h)}}function xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function Oh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ph(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(l===27&&ur(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Ph(e,i,r),e=e.sibling;e!==null;)Ph(e,i,r),e=e.sibling}function qu(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&ur(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(qu(e,i,r),e=e.sibling;e!==null;)qu(e,i,r),e=e.sibling}function Sg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Cn(i,l,r),i[rn]=e,i[Un]=r}catch(m){Re(e,e.return,m)}}var ya=!1,hn=!1,zh=!1,yg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function UM(e,i){if(e=e.containerInfo,id=dc,e=Nm(e),wf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,R=-1,I=-1,et=0,pt=0,_t=e,nt=null;e:for(;;){for(var ct;_t!==r||h!==0&&_t.nodeType!==3||(R=E+h),_t!==m||l!==0&&_t.nodeType!==3||(I=E+l),_t.nodeType===3&&(E+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)nt=_t,_t=ct;for(;;){if(_t===e)break e;if(nt===r&&++et===h&&(R=E),nt===m&&++pt===l&&(I=E),(ct=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=ct}r=R===-1||I===-1?null:{start:R,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(ad={focusedElem:e,selectionRange:r},dc=!1,Sn=i;Sn!==null;)if(i=Sn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Sn=e;else for(;Sn!==null;){switch(i=Sn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Ut=Kr(r.type,h);e=l.getSnapshotBeforeUpdate(Ut,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Re(r,r.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)od(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Sn=e;break}Sn=i.return}}function Mg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(e,r),l&4&&_l(5,r);break;case 1:if(Ea(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(E){Re(r,r.return,E)}else{var h=Kr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Re(r,r.return,E)}}l&64&&_g(r),l&512&&gl(r,r.return);break;case 3:if(Ea(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{s_(e,i)}catch(E){Re(r,r.return,E)}}break;case 27:i===null&&l&4&&Sg(r);case 26:case 5:Ea(e,r),i===null&&l&4&&vg(r),l&512&&gl(r,r.return);break;case 12:Ea(e,r);break;case 31:Ea(e,r),l&4&&bg(e,r);break;case 13:Ea(e,r),l&4&&Ag(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=GM.bind(null,r),oE(e,r))));break;case 22:if(l=r.memoizedState!==null||ya,!l){i=i!==null&&i.memoizedState!==null||hn,h=ya;var m=hn;ya=l,(hn=i)&&!m?Ta(e,r,(r.subtreeFlags&8772)!==0):Ea(e,r),ya=h,hn=m}break;case 30:break;default:Ea(e,r)}}function Eg(e){var i=e.alternate;i!==null&&(e.alternate=null,Eg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&rt(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Yn=!1;function Ma(e,i,r){for(r=r.child;r!==null;)Tg(e,i,r),r=r.sibling}function Tg(e,i,r){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Kt,r)}catch{}switch(r.tag){case 26:hn||ea(r,i),Ma(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||ea(r,i);var l=We,h=Yn;ur(r.type)&&(We=r.stateNode,Yn=!1),Ma(e,i,r),Al(r.stateNode),We=l,Yn=h;break;case 5:hn||ea(r,i);case 6:if(l=We,h=Yn,We=null,Ma(e,i,r),We=l,Yn=h,We!==null)if(Yn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(r.stateNode)}catch(m){Re(r,i,m)}else try{We.removeChild(r.stateNode)}catch(m){Re(r,i,m)}break;case 18:We!==null&&(Yn?(e=We,_0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),$s(e)):_0(We,r.stateNode));break;case 4:l=We,h=Yn,We=r.stateNode.containerInfo,Yn=!0,Ma(e,i,r),We=l,Yn=h;break;case 0:case 11:case 14:case 15:nr(2,r,i),hn||nr(4,r,i),Ma(e,i,r);break;case 1:hn||(ea(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&gg(r,i,l)),Ma(e,i,r);break;case 21:Ma(e,i,r);break;case 22:hn=(l=hn)||r.memoizedState!==null,Ma(e,i,r),hn=l;break;default:Ma(e,i,r)}}function bg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$s(e)}catch(r){Re(i,i.return,r)}}}function Ag(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$s(e)}catch(r){Re(i,i.return,r)}}function NM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new yg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new yg),i;default:throw Error(a(435,e.tag))}}function Yu(e,i){var r=NM(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=VM.bind(null,e,l);l.then(h,h)}})}function jn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:if(ur(R.type)){We=R.stateNode,Yn=!1;break t}break;case 5:We=R.stateNode,Yn=!1;break t;case 3:case 4:We=R.stateNode.containerInfo,Yn=!0;break t}R=R.return}if(We===null)throw Error(a(160));Tg(m,E,h),We=null,Yn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Rg(i,e),i=i.sibling}var ki=null;function Rg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(i,e),Zn(e),l&4&&(nr(3,e,e.return),_l(3,e),nr(5,e,e.return));break;case 1:jn(i,e),Zn(e),l&512&&(hn||r===null||ea(r,r.return)),l&64&&ya&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=ki;if(jn(i,e),Zn(e),l&512&&(hn||r===null||ea(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[ut]||m[rn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Cn(m,l,r),m[rn]=e,Ft(m),l=m;break t;case"link":var E=R0("link","href",h).get(l+(r.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(R,1);break e}}m=h.createElement(l),Cn(m,l,r),h.head.appendChild(m);break;case"meta":if(E=R0("meta","content",h).get(l+(r.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(R,1);break e}}m=h.createElement(l),Cn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[rn]=e,Ft(m),l=m}e.stateNode=l}else C0(h,e.type,e.stateNode);else e.stateNode=A0(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?C0(h,e.type,e.stateNode):A0(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nh(e,e.memoizedProps,r.memoizedProps)}break;case 27:jn(i,e),Zn(e),l&512&&(hn||r===null||ea(r,r.return)),r!==null&&l&4&&Nh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(jn(i,e),Zn(e),l&512&&(hn||r===null||ea(r,r.return)),e.flags&32){h=e.stateNode;try{Ms(h,"")}catch(Ut){Re(e,e.return,Ut)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Nh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(zh=!0);break;case 6:if(jn(i,e),Zn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Ut){Re(e,e.return,Ut)}}break;case 3:if(uc=null,h=ki,ki=oc(i.containerInfo),jn(i,e),ki=h,Zn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{$s(i.containerInfo)}catch(Ut){Re(e,e.return,Ut)}zh&&(zh=!1,Cg(e));break;case 4:l=ki,ki=oc(e.stateNode.containerInfo),jn(i,e),Zn(e),ki=l;break;case 12:jn(i,e),Zn(e);break;case 31:jn(i,e),Zn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yu(e,l)));break;case 13:jn(i,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zu=gt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yu(e,l)));break;case 22:h=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,et=ya,pt=hn;if(ya=et||h,hn=pt||I,jn(i,e),hn=pt,ya=et,Zn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||I||ya||hn||Qr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(m=I.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=I.stateNode;var _t=I.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;R.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ut){Re(I,I.return,Ut)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(Ut){Re(I,I.return,Ut)}}}else if(i.tag===18){if(r===null){I=i;try{var ct=I.stateNode;h?g0(ct,!0):g0(I.stateNode,!1)}catch(Ut){Re(I,I.return,Ut)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Yu(e,r))));break;case 19:jn(i,e),Zn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yu(e,l)));break;case 30:break;case 21:break;default:jn(i,e),Zn(e)}}function Zn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(xg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Oh(e);qu(e,m,h);break;case 5:var E=r.stateNode;r.flags&32&&(Ms(E,""),r.flags&=-33);var R=Oh(e);qu(e,R,E);break;case 3:case 4:var I=r.stateNode.containerInfo,et=Oh(e);Ph(e,et,I);break;default:throw Error(a(161))}}catch(pt){Re(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Cg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ea(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Mg(e,i.alternate,i),i=i.sibling}function Qr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:nr(4,i,i.return),Qr(i);break;case 1:ea(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&gg(i,i.return,r),Qr(i);break;case 27:Al(i.stateNode);case 26:case 5:ea(i,i.return),Qr(i);break;case 22:i.memoizedState===null&&Qr(i);break;case 30:Qr(i);break;default:Qr(i)}e=e.sibling}}function Ta(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ta(h,m,r),_l(4,m);break;case 1:if(Ta(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){Re(l,l.return,et)}if(l=m,h=l.updateQueue,h!==null){var R=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)r_(I[h],R)}catch(et){Re(l,l.return,et)}}r&&E&64&&_g(m),gl(m,m.return);break;case 27:Sg(m);case 26:case 5:Ta(h,m,r),r&&l===null&&E&4&&vg(m),gl(m,m.return);break;case 12:Ta(h,m,r);break;case 31:Ta(h,m,r),r&&E&4&&bg(h,m);break;case 13:Ta(h,m,r),r&&E&4&&Ag(h,m);break;case 22:m.memoizedState===null&&Ta(h,m,r),gl(m,m.return);break;case 30:break;default:Ta(h,m,r)}i=i.sibling}}function Bh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&il(r))}function Fh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&il(e))}function Xi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wg(e,i,r,l),i=i.sibling}function wg(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(e,i,r,l),h&2048&&_l(9,i);break;case 1:Xi(e,i,r,l);break;case 3:Xi(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&il(e)));break;case 12:if(h&2048){Xi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Re(i,i.return,I)}}else Xi(e,i,r,l);break;case 31:Xi(e,i,r,l);break;case 13:Xi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Xi(e,i,r,l):vl(e,i):m._visibility&2?Xi(e,i,r,l):(m._visibility|=2,Vs(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Bh(E,i);break;case 24:Xi(e,i,r,l),h&2048&&Fh(i.alternate,i);break;default:Xi(e,i,r,l)}}function Vs(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,R=r,I=l,et=E.flags;switch(E.tag){case 0:case 11:case 15:Vs(m,E,R,I,h),_l(8,E);break;case 23:break;case 22:var pt=E.stateNode;E.memoizedState!==null?pt._visibility&2?Vs(m,E,R,I,h):vl(m,E):(pt._visibility|=2,Vs(m,E,R,I,h)),h&&et&2048&&Bh(E.alternate,E);break;case 24:Vs(m,E,R,I,h),h&&et&2048&&Fh(E.alternate,E);break;default:Vs(m,E,R,I,h)}i=i.sibling}}function vl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:vl(r,l),h&2048&&Bh(l.alternate,l);break;case 24:vl(r,l),h&2048&&Fh(l.alternate,l);break;default:vl(r,l)}i=i.sibling}}var xl=8192;function ks(e,i,r){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Dg(e,i,r),e=e.sibling}function Dg(e,i,r){switch(e.tag){case 26:ks(e,i,r),e.flags&xl&&e.memoizedState!==null&&xE(r,ki,e.memoizedState,e.memoizedProps);break;case 5:ks(e,i,r);break;case 3:case 4:var l=ki;ki=oc(e.stateNode.containerInfo),ks(e,i,r),ki=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=xl,xl=16777216,ks(e,i,r),xl=l):ks(e,i,r));break;default:ks(e,i,r)}}function Lg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Sl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Sn=l,Ng(l,e)}Lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Sl(e),e.flags&2048&&nr(9,e,e.return);break;case 3:Sl(e);break;case 12:Sl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ju(e)):Sl(e);break;default:Sl(e)}}function ju(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Sn=l,Ng(l,e)}Lg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:nr(8,i,i.return),ju(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,ju(i));break;default:ju(i)}e=e.sibling}}function Ng(e,i){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:nr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:il(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Sn=l;else t:for(r=e;Sn!==null;){l=Sn;var h=l.sibling,m=l.return;if(Eg(l),l===r){Sn=null;break t}if(h!==null){h.return=m,Sn=h;break t}Sn=m}}}var OM={getCacheForType:function(e){var i=An(un),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return An(un).controller.signal}},PM=typeof WeakMap=="function"?WeakMap:Map,ye=0,ze=null,fe=null,de=0,Ae=0,di=null,ir=!1,Xs=!1,Ih=!1,ba=0,Je=0,ar=0,Jr=0,Hh=0,pi=0,Ws=0,yl=null,Kn=null,Gh=!1,Zu=0,Og=0,Ku=1/0,Qu=null,rr=null,mn=0,sr=null,qs=null,Aa=0,Vh=0,kh=null,Pg=null,Ml=0,Xh=null;function mi(){return(ye&2)!==0&&de!==0?de&-de:z.T!==null?Kh():Go()}function zg(){if(pi===0)if((de&536870912)===0||me){var e=W;W<<=1,(W&3932160)===0&&(W=262144),pi=e}else pi=536870912;return e=fi.current,e!==null&&(e.flags|=32),pi}function Qn(e,i,r){(e===ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Ys(e,0),or(e,de,pi,!1)),tn(e,r),((ye&2)===0||e!==ze)&&(e===ze&&((ye&2)===0&&(Jr|=r),Je===4&&or(e,de,pi,!1)),na(e))}function Bg(e,i,r){if((ye&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Gt(e,i),h=l?FM(e,i):qh(e,i,!0),m=l;do{if(h===0){Xs&&!l&&or(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!zM(r)){h=qh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;h=yl;var I=R.current.memoizedState.isDehydrated;if(I&&(Ys(R,E).flags|=256),E=qh(R,E,!1),E!==2){if(Ih&&!I){R.errorRecoveryDisabledLanes|=m,Jr|=m,h=4;break t}m=Kn,Kn=h,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){Ys(e,0),or(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:or(l,i,pi,!ir);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Zu+300-gt(),10<h)){if(or(l,i,pi,!ir),jt(l,0,!0)!==0)break t;Aa=i,l.timeoutHandle=p0(Fg.bind(null,l,r,Kn,Qu,Gh,i,pi,Jr,Ws,ir,m,"Throttled",-0,0),h);break t}Fg(l,r,Kn,Qu,Gh,i,pi,Jr,Ws,ir,m,null,-0,0)}}break}while(!0);na(e)}function Fg(e,i,r,l,h,m,E,R,I,et,pt,_t,nt,ct){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},Dg(i,m,_t);var Ut=(m&62914560)===m?Zu-gt():(m&4194048)===m?Og-gt():0;if(Ut=SE(_t,Ut),Ut!==null){Aa=m,e.cancelPendingCommit=Ut(qg.bind(null,e,i,m,r,l,h,E,R,I,pt,_t,null,nt,ct)),or(e,m,E,!et);return}}qg(e,i,m,r,l,h,E,R,I)}function zM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!ui(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(e,i,r,l){i&=~Hh,i&=~Jr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-kt(h),E=1<<m;l[m]=-1,h&=~E}r!==0&&xn(e,r,i)}function Ju(){return(ye&6)===0?(El(0),!1):!0}function Wh(){if(fe!==null){if(Ae===0)var e=fe.return;else e=fe,ma=kr=null,oh(e),Bs=null,rl=0,e=fe;for(;e!==null;)mg(e.alternate,e),e=e.return;fe=null}}function Ys(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,nE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Aa=0,Wh(),ze=e,fe=r=da(e.current,null),de=i,Ae=0,di=null,ir=!1,Xs=Gt(e,i),Ih=!1,Ws=pi=Hh=Jr=ar=Je=0,Kn=yl=null,Gh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-kt(l),m=1<<h;i|=e[h],l&=~m}return ba=i,xu(),r}function Ig(e,i){ne=null,z.H=dl,i===zs||i===Ru?(i=e_(),Ae=3):i===Zf?(i=e_(),Ae=4):Ae=i===Eh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,fe===null&&(Je=1,Gu(e,Ci(i,e.current)))}function Hg(){var e=fi.current;return e===null?!0:(de&4194048)===de?Ui===null:(de&62914560)===de||(de&536870912)!==0?e===Ui:!1}function Gg(){var e=z.H;return z.H=dl,e===null?dl:e}function Vg(){var e=z.A;return z.A=OM,e}function $u(){Je=4,ir||(de&4194048)!==de&&fi.current!==null||(Xs=!0),(ar&134217727)===0&&(Jr&134217727)===0||ze===null||or(ze,de,pi,!1)}function qh(e,i,r){var l=ye;ye|=2;var h=Gg(),m=Vg();(ze!==e||de!==i)&&(Qu=null,Ys(e,i)),i=!1;var E=Je;t:do try{if(Ae!==0&&fe!==null){var R=fe,I=di;switch(Ae){case 8:Wh(),E=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var et=Ae;if(Ae=0,di=null,js(e,R,I,et),r&&Xs){E=0;break t}break;default:et=Ae,Ae=0,di=null,js(e,R,I,et)}}BM(),E=Je;break}catch(pt){Ig(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ma=kr=null,ye=l,z.H=h,z.A=m,fe===null&&(ze=null,de=0,xu()),E}function BM(){for(;fe!==null;)kg(fe)}function FM(e,i){var r=ye;ye|=2;var l=Gg(),h=Vg();ze!==e||de!==i?(Qu=null,Ku=gt()+500,Ys(e,i)):Xs=Gt(e,i);t:do try{if(Ae!==0&&fe!==null){i=fe;var m=di;e:switch(Ae){case 1:Ae=0,di=null,js(e,i,m,1);break;case 2:case 9:if($m(m)){Ae=0,di=null,Xg(i);break}i=function(){Ae!==2&&Ae!==9||ze!==e||(Ae=7),na(e)},m.then(i,i);break t;case 3:Ae=7;break t;case 4:Ae=5;break t;case 7:$m(m)?(Ae=0,di=null,Xg(i)):(Ae=0,di=null,js(e,i,m,7));break;case 5:var E=null;switch(fe.tag){case 26:E=fe.memoizedState;case 5:case 27:var R=fe;if(E?w0(E):R.stateNode.complete){Ae=0,di=null;var I=R.sibling;if(I!==null)fe=I;else{var et=R.return;et!==null?(fe=et,tc(et)):fe=null}break e}}Ae=0,di=null,js(e,i,m,5);break;case 6:Ae=0,di=null,js(e,i,m,6);break;case 8:Wh(),Je=6;break t;default:throw Error(a(462))}}IM();break}catch(pt){Ig(e,pt)}while(!0);return ma=kr=null,z.H=l,z.A=h,ye=r,fe!==null?0:(ze=null,de=0,xu(),Je)}function IM(){for(;fe!==null&&!yt();)kg(fe)}function kg(e){var i=dg(e.alternate,e,ba);e.memoizedProps=e.pendingProps,i===null?tc(e):fe=i}function Xg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=og(r,i,i.pendingProps,i.type,void 0,de);break;case 11:i=og(r,i,i.pendingProps,i.type.render,i.ref,de);break;case 5:oh(i);default:mg(r,i),i=fe=Vm(i,ba),i=dg(r,i,ba)}e.memoizedProps=e.pendingProps,i===null?tc(e):fe=i}function js(e,i,r,l){ma=kr=null,oh(i),Bs=null,rl=0;var h=i.return;try{if(RM(e,h,i,r,de)){Je=1,Gu(e,Ci(r,e.current)),fe=null;return}}catch(m){if(h!==null)throw fe=h,m;Je=1,Gu(e,Ci(r,e.current)),fe=null;return}i.flags&32768?(me||l===1?e=!0:Xs||(de&536870912)!==0?e=!1:(ir=e=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wg(i,e)):tc(i)}function tc(e){var i=e;do{if((i.flags&32768)!==0){Wg(i,ir);return}e=i.return;var r=DM(i.alternate,i,ba);if(r!==null){fe=r;return}if(i=i.sibling,i!==null){fe=i;return}fe=i=e}while(i!==null);Je===0&&(Je=5)}function Wg(e,i){do{var r=LM(e.alternate,e);if(r!==null){r.flags&=32767,fe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){fe=e;return}fe=e=r}while(e!==null);Je=6,fe=null}function qg(e,i,r,l,h,m,E,R,I){e.cancelPendingCommit=null;do ec();while(mn!==0);if((ye&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Of,we(e,r,m,E,R,I),e===ze&&(fe=ze=null,de=0),qs=i,sr=e,Aa=r,Vh=m,kh=h,Pg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kM(qt,function(){return Qg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,h=H.p,H.p=2,E=ye,ye|=4;try{UM(e,i,r)}finally{ye=E,H.p=h,z.T=l}}mn=1,Yg(),jg(),Zg()}}function Yg(){if(mn===1){mn=0;var e=sr,i=qs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var l=H.p;H.p=2;var h=ye;ye|=4;try{Rg(i,e);var m=ad,E=Nm(e.containerInfo),R=m.focusedElem,I=m.selectionRange;if(E!==R&&R&&R.ownerDocument&&Um(R.ownerDocument.documentElement,R)){if(I!==null&&wf(R)){var et=I.start,pt=I.end;if(pt===void 0&&(pt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(pt,R.value.length);else{var _t=R.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var ct=nt.getSelection(),Ut=R.textContent.length,Zt=Math.min(I.start,Ut),Ue=I.end===void 0?Zt:Math.min(I.end,Ut);!ct.extend&&Zt>Ue&&(E=Ue,Ue=Zt,Zt=E);var j=Lm(R,Zt),q=Lm(R,Ue);if(j&&q&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==q.node||ct.focusOffset!==q.offset)){var tt=_t.createRange();tt.setStart(j.node,j.offset),ct.removeAllRanges(),Zt>Ue?(ct.addRange(tt),ct.extend(q.node,q.offset)):(tt.setEnd(q.node,q.offset),ct.addRange(tt))}}}}for(_t=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_t.length;R++){var mt=_t[R];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}dc=!!id,ad=id=null}finally{ye=h,H.p=l,z.T=r}}e.current=i,mn=2}}function jg(){if(mn===2){mn=0;var e=sr,i=qs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var l=H.p;H.p=2;var h=ye;ye|=4;try{Mg(e,i.alternate,i)}finally{ye=h,H.p=l,z.T=r}}mn=3}}function Zg(){if(mn===4||mn===3){mn=0,St();var e=sr,i=qs,r=Aa,l=Pg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,qs=sr=null,Kg(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(rr=null),Ga(r),i=i.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Kt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,h=H.p,H.p=2,z.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var R=l[E];m(R.value,{componentStack:R.stack})}}finally{z.T=i,H.p=h}}(Aa&3)!==0&&ec(),na(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===Xh?Ml++:(Ml=0,Xh=e):Ml=0,El(0)}}function Kg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,il(i)))}function ec(){return Yg(),jg(),Zg(),Qg()}function Qg(){if(mn!==5)return!1;var e=sr,i=Vh;Vh=0;var r=Ga(Aa),l=z.T,h=H.p;try{H.p=32>r?32:r,z.T=null,r=kh,kh=null;var m=sr,E=Aa;if(mn=0,qs=sr=null,Aa=0,(ye&6)!==0)throw Error(a(331));var R=ye;if(ye|=4,Ug(m.current),wg(m,m.current,E,r),ye=R,El(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Kt,m)}catch{}return!0}finally{H.p=h,z.T=l,Kg(e,i)}}function Jg(e,i,r){i=Ci(r,i),i=Mh(e.stateNode,i,2),e=$a(e,i,2),e!==null&&(tn(e,2),na(e))}function Re(e,i,r){if(e.tag===3)Jg(e,e,r);else for(;i!==null;){if(i.tag===3){Jg(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){e=Ci(r,e),r=$_(2),l=$a(i,r,2),l!==null&&(tg(r,l,i,e),tn(l,2),na(l));break}}i=i.return}}function Yh(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new PM;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(Ih=!0,h.add(r),e=HM.bind(null,e,i,r),i.then(e,e))}function HM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ze===e&&(de&r)===r&&(Je===4||Je===3&&(de&62914560)===de&&300>gt()-Zu?(ye&2)===0&&Ys(e,0):Hh|=r,Ws===de&&(Ws=0)),na(e)}function $g(e,i){i===0&&(i=Te()),e=Hr(e,i),e!==null&&(tn(e,i),na(e))}function GM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),$g(e,r)}function VM(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),$g(e,r)}function kM(e,i){return C(e,i)}var nc=null,Zs=null,jh=!1,ic=!1,Zh=!1,lr=0;function na(e){e!==Zs&&e.next===null&&(Zs===null?nc=Zs=e:Zs=Zs.next=e),ic=!0,jh||(jh=!0,WM())}function El(e,i){if(!Zh&&ic){Zh=!0;do for(var r=!1,l=nc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var E=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-kt(42|e)+1)-1,m&=h&~(E&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,i0(l,m))}else m=de,m=jt(l,l===ze?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Gt(l,m)||(r=!0,i0(l,m));l=l.next}while(r);Zh=!1}}function XM(){t0()}function t0(){ic=jh=!1;var e=0;lr!==0&&eE()&&(e=lr);for(var i=gt(),r=null,l=nc;l!==null;){var h=l.next,m=e0(l,i);m===0?(l.next=null,r===null?nc=h:r.next=h,h===null&&(Zs=r)):(r=l,(e!==0||(m&3)!==0)&&(ic=!0)),l=h}mn!==0&&mn!==5||El(e),lr!==0&&(lr=0)}function e0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-kt(m),R=1<<E,I=h[E];I===-1?((R&r)===0||(R&l)!==0)&&(h[E]=Ce(R,i)):I<=i&&(e.expiredLanes|=R),m&=~R}if(i=ze,r=de,r=jt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&st(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Gt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&st(l),Ga(r)){case 2:case 8:r=Nt;break;case 32:r=qt;break;case 268435456:r=vt;break;default:r=qt}return l=n0.bind(null,e),r=C(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&st(l),e.callbackPriority=2,e.callbackNode=null,2}function n0(e,i){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ec()&&e.callbackNode!==r)return null;var l=de;return l=jt(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bg(e,l,i),e0(e,gt()),e.callbackNode!=null&&e.callbackNode===r?n0.bind(null,e):null)}function i0(e,i){if(ec())return null;Bg(e,i,!0)}function WM(){iE(function(){(ye&6)!==0?C(Ct,XM):t0()})}function Kh(){if(lr===0){var e=Os;e===0&&(e=Et,Et<<=1,(Et&261888)===0&&(Et=256)),lr=e}return lr}function a0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fu(""+e)}function r0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function qM(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=a0((h[Un]||null).action),E=l.submitter;E&&(i=(i=E[Un]||null)?a0(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var R=new mu("action","action",null,l,h);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(lr!==0){var I=E?r0(h,E):new FormData(h);_h(r,{pending:!0,data:I,method:h.method,action:m},null,I)}}else typeof m=="function"&&(R.preventDefault(),I=E?r0(h,E):new FormData(h),_h(r,{pending:!0,data:I,method:h.method,action:m},m,I))},currentTarget:h}]})}}for(var Qh=0;Qh<Nf.length;Qh++){var Jh=Nf[Qh],YM=Jh.toLowerCase(),jM=Jh[0].toUpperCase()+Jh.slice(1);Vi(YM,"on"+jM)}Vi(zm,"onAnimationEnd"),Vi(Bm,"onAnimationIteration"),Vi(Fm,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(cM,"onTransitionRun"),Vi(fM,"onTransitionStart"),Vi(hM,"onTransitionCancel"),Vi(Im,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),be("onBeforeInput",["compositionend","keypress","textInput","paste"]),be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function s0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var R=l[E],I=R.instance,et=R.currentTarget;if(R=R.listener,I!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=et;try{m(h)}catch(pt){vu(pt)}h.currentTarget=null,m=I}else for(E=0;E<l.length;E++){if(R=l[E],I=R.instance,et=R.currentTarget,R=R.listener,I!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=et;try{m(h)}catch(pt){vu(pt)}h.currentTarget=null,m=I}}}}function he(e,i){var r=i[Vo];r===void 0&&(r=i[Vo]=new Set);var l=e+"__bubble";r.has(l)||(o0(i,e,2,!1),r.add(l))}function $h(e,i,r){var l=0;i&&(l|=4),o0(r,e,l,i)}var ac="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[ac]){e[ac]=!0,Jt.forEach(function(r){r!=="selectionchange"&&(ZM.has(r)||$h(r,!1,e),$h(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ac]||(i[ac]=!0,$h("selectionchange",!1,i))}}function o0(e,i,r,l){switch(z0(i)){case 2:var h=EE;break;case 8:h=TE;break;default:h=md}r=h.bind(null,i,r,e),h=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function ed(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var R=l.stateNode.containerInfo;if(R===h)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;R!==null;){if(E=wt(R),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=m=E;continue t}R=R.parentNode}}l=l.return}hm(function(){var et=m,pt=vf(r),_t=[];t:{var nt=Hm.get(e);if(nt!==void 0){var ct=mu,Ut=e;switch(e){case"keypress":if(du(r)===0)break t;case"keydown":case"keyup":ct=Vy;break;case"focusin":Ut="focus",ct=Tf;break;case"focusout":Ut="blur",ct=Tf;break;case"beforeblur":case"afterblur":ct=Tf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Wy;break;case zm:case Bm:case Fm:ct=Ny;break;case Im:ct=Yy;break;case"scroll":case"scrollend":ct=Cy;break;case"wheel":ct=Zy;break;case"copy":case"cut":case"paste":ct=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=gm;break;case"toggle":case"beforetoggle":ct=Qy}var Zt=(i&4)!==0,Ue=!Zt&&(e==="scroll"||e==="scrollend"),j=Zt?nt!==null?nt+"Capture":null:nt;Zt=[];for(var q=et,tt;q!==null;){var mt=q;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||j===null||(mt=qo(q,j),mt!=null&&Zt.push(bl(q,mt,tt))),Ue)break;q=q.return}0<Zt.length&&(nt=new ct(nt,Ut,null,r,pt),_t.push({event:nt,listeners:Zt}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",nt&&r!==gf&&(Ut=r.relatedTarget||r.fromElement)&&(wt(Ut)||Ut[Va]))break t;if((ct||nt)&&(nt=pt.window===pt?pt:(nt=pt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ct?(Ut=r.relatedTarget||r.toElement,ct=et,Ut=Ut?wt(Ut):null,Ut!==null&&(Ue=u(Ut),Zt=Ut.tag,Ut!==Ue||Zt!==5&&Zt!==27&&Zt!==6)&&(Ut=null)):(ct=null,Ut=et),ct!==Ut)){if(Zt=mm,mt="onMouseLeave",j="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=gm,mt="onPointerLeave",j="onPointerEnter",q="pointer"),Ue=ct==null?nt:Xt(ct),tt=Ut==null?nt:Xt(Ut),nt=new Zt(mt,q+"leave",ct,r,pt),nt.target=Ue,nt.relatedTarget=tt,mt=null,wt(pt)===et&&(Zt=new Zt(j,q+"enter",Ut,r,pt),Zt.target=tt,Zt.relatedTarget=Ue,mt=Zt),Ue=mt,ct&&Ut)e:{for(Zt=KM,j=ct,q=Ut,tt=0,mt=j;mt;mt=Zt(mt))tt++;mt=0;for(var Vt=q;Vt;Vt=Zt(Vt))mt++;for(;0<tt-mt;)j=Zt(j),tt--;for(;0<mt-tt;)q=Zt(q),mt--;for(;tt--;){if(j===q||q!==null&&j===q.alternate){Zt=j;break e}j=Zt(j),q=Zt(q)}Zt=null}else Zt=null;ct!==null&&l0(_t,nt,ct,Zt,!1),Ut!==null&&Ue!==null&&l0(_t,Ue,Ut,Zt,!0)}}t:{if(nt=et?Xt(et):window,ct=nt.nodeName&&nt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&nt.type==="file")var ve=bm;else if(Em(nt))if(Am)ve=oM;else{ve=rM;var zt=aM}else ct=nt.nodeName,!ct||ct.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?et&&_f(et.elementType)&&(ve=bm):ve=sM;if(ve&&(ve=ve(e,et))){Tm(_t,ve,r,pt);break t}zt&&zt(e,nt,et),e==="focusout"&&et&&nt.type==="number"&&et.memoizedProps.value!=null&&mf(nt,"number",nt.value)}switch(zt=et?Xt(et):window,e){case"focusin":(Em(zt)||zt.contentEditable==="true")&&(As=zt,Df=et,tl=null);break;case"focusout":tl=Df=As=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,Om(_t,r,pt);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":Om(_t,r,pt)}var ae;if(Af)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else bs?ym(e,r)&&(pe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(pe="onCompositionStart");pe&&(vm&&r.locale!=="ko"&&(bs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&bs&&(ae=dm()):(qa=pt,yf="value"in qa?qa.value:qa.textContent,bs=!0)),zt=rc(et,pe),0<zt.length&&(pe=new _m(pe,e,null,r,pt),_t.push({event:pe,listeners:zt}),ae?pe.data=ae:(ae=Mm(r),ae!==null&&(pe.data=ae)))),(ae=$y?tM(e,r):eM(e,r))&&(pe=rc(et,"onBeforeInput"),0<pe.length&&(zt=new _m("onBeforeInput","beforeinput",null,r,pt),_t.push({event:zt,listeners:pe}),zt.data=ae)),qM(_t,e,et,r,pt)}s0(_t,i)})}function bl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function rc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=qo(e,r),h!=null&&l.unshift(bl(e,h,m)),h=qo(e,i),h!=null&&l.push(bl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function KM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function l0(e,i,r,l,h){for(var m=i._reactName,E=[];r!==null&&r!==l;){var R=r,I=R.alternate,et=R.stateNode;if(R=R.tag,I!==null&&I===l)break;R!==5&&R!==26&&R!==27||et===null||(I=et,h?(et=qo(r,m),et!=null&&E.unshift(bl(r,et,I))):h||(et=qo(r,m),et!=null&&E.push(bl(r,et,I)))),r=r.return}E.length!==0&&e.push({event:i,listeners:E})}var QM=/\r\n?/g,JM=/\u0000|\uFFFD/g;function u0(e){return(typeof e=="string"?e:""+e).replace(QM,`
`).replace(JM,"")}function c0(e,i){return i=u0(i),u0(e)===i}function Le(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ms(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ms(e,""+l);break;case"className":Pe(e,"class",l);break;case"tabIndex":Pe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,r,l);break;case"style":cm(e,l,m);break;case"data":if(i!=="object"){Pe(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=fu(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Le(e,i,"name",h.name,h,null),Le(e,i,"formEncType",h.formEncType,h,null),Le(e,i,"formMethod",h.formMethod,h,null),Le(e,i,"formTarget",h.formTarget,h,null)):(Le(e,i,"encType",h.encType,h,null),Le(e,i,"method",h.method,h,null),Le(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=fu(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=fa);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=fu(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":he("beforetoggle",e),he("toggle",e),ka(e,"popover",l);break;case"xlinkActuate":Tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ka(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ay.get(r)||r,ka(e,r,l))}}function nd(e,i,r,l,h,m){switch(r){case"style":cm(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Ms(e,l):(typeof l=="number"||typeof l=="bigint")&&Ms(e,""+l);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"onClick":l!=null&&(e.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$t.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Un]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ka(e,r,l)}}}function Cn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Le(e,i,m,E,r,null)}}h&&Le(e,i,"srcSet",r.srcSet,r,null),l&&Le(e,i,"src",r.src,r,null);return;case"input":he("invalid",e);var R=m=E=h=null,I=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":h=pt;break;case"type":E=pt;break;case"checked":I=pt;break;case"defaultChecked":et=pt;break;case"value":m=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Le(e,i,l,pt,r,null)}}Wo(e,m,R,I,et,E,h,!1);return;case"select":he("invalid",e),l=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(R=r[h],R!=null))switch(h){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":l=R;default:Le(e,i,h,R,r,null)}i=m,r=E,e.multiple=!!l,i!=null?ys(e,!!l,i,!1):r!=null&&ys(e,!!l,r,!0);return;case"textarea":he("invalid",e),m=h=l=null;for(E in r)if(r.hasOwnProperty(E)&&(R=r[E],R!=null))switch(E){case"value":l=R;break;case"defaultValue":h=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Le(e,i,E,R,r,null)}lm(e,l,h,m);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(l=r[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Le(e,i,I,l,r,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(l=0;l<Tl.length;l++)he(Tl[l],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Le(e,i,et,l,r,null)}return;default:if(_f(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&nd(e,i,pt,l,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(l=r[R],l!=null&&Le(e,i,R,l,r,null))}function $M(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,R=null,I=null,et=null,pt=null;for(ct in r){var _t=r[ct];if(r.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=_t;default:l.hasOwnProperty(ct)||Le(e,i,ct,null,l,_t)}}for(var nt in l){var ct=l[nt];if(_t=r[nt],l.hasOwnProperty(nt)&&(ct!=null||_t!=null))switch(nt){case"type":m=ct;break;case"name":h=ct;break;case"checked":et=ct;break;case"defaultChecked":pt=ct;break;case"value":E=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==_t&&Le(e,i,nt,ct,l,_t)}}Xo(e,E,R,I,et,pt,m,h);return;case"select":ct=E=R=nt=null;for(m in r)if(I=r[m],r.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":ct=I;default:l.hasOwnProperty(m)||Le(e,i,m,null,l,I)}for(h in l)if(m=l[h],I=r[h],l.hasOwnProperty(h)&&(m!=null||I!=null))switch(h){case"value":nt=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==I&&Le(e,i,h,m,l,I)}i=R,r=E,l=ct,nt!=null?ys(e,!!r,nt,!1):!!l!=!!r&&(i!=null?ys(e,!!r,i,!0):ys(e,!!r,r?[]:"",!1));return;case"textarea":ct=nt=null;for(R in r)if(h=r[R],r.hasOwnProperty(R)&&h!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Le(e,i,R,null,l,h)}for(E in l)if(h=l[E],m=r[E],l.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":nt=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Le(e,i,E,h,l,m)}om(e,nt,ct);return;case"option":for(var Ut in r)if(nt=r[Ut],r.hasOwnProperty(Ut)&&nt!=null&&!l.hasOwnProperty(Ut))switch(Ut){case"selected":e.selected=!1;break;default:Le(e,i,Ut,null,l,nt)}for(I in l)if(nt=l[I],ct=r[I],l.hasOwnProperty(I)&&nt!==ct&&(nt!=null||ct!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Le(e,i,I,nt,l,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in r)nt=r[Zt],r.hasOwnProperty(Zt)&&nt!=null&&!l.hasOwnProperty(Zt)&&Le(e,i,Zt,null,l,nt);for(et in l)if(nt=l[et],ct=r[et],l.hasOwnProperty(et)&&nt!==ct&&(nt!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,i));break;default:Le(e,i,et,nt,l,ct)}return;default:if(_f(i)){for(var Ue in r)nt=r[Ue],r.hasOwnProperty(Ue)&&nt!==void 0&&!l.hasOwnProperty(Ue)&&nd(e,i,Ue,void 0,l,nt);for(pt in l)nt=l[pt],ct=r[pt],!l.hasOwnProperty(pt)||nt===ct||nt===void 0&&ct===void 0||nd(e,i,pt,nt,l,ct);return}}for(var j in r)nt=r[j],r.hasOwnProperty(j)&&nt!=null&&!l.hasOwnProperty(j)&&Le(e,i,j,null,l,nt);for(_t in l)nt=l[_t],ct=r[_t],!l.hasOwnProperty(_t)||nt===ct||nt==null&&ct==null||Le(e,i,_t,nt,l,ct)}function f0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,E=h.initiatorType,R=h.duration;if(m&&R&&f0(E)){for(E=0,R=h.responseEnd,l+=1;l<r.length;l++){var I=r[l],et=I.startTime;if(et>R)break;var pt=I.transferSize,_t=I.initiatorType;pt&&f0(_t)&&(I=I.responseEnd,E+=pt*(I<R?1:(R-et)/(I-et)))}if(--l,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var id=null,ad=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function h0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function rd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sd=null;function eE(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var p0=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,iE=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(e){return m0.resolve(null).then(e).catch(aE)}:p0;function aE(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function _0(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),$s(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Al(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Al(r);for(var m=r.firstChild;m;){var E=m.nextSibling,R=m.nodeName;m[ut]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=E}}else r==="body"&&Al(e.ownerDocument.body);r=h}while(r);$s(i)}function g0(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function od(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":od(r),rt(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function rE(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ut])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function sE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ni(e.nextSibling),e===null))return null;return e}function v0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ni(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$?"||e.data==="$~"}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oE(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ni(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var cd=null;function x0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Ni(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function S0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function y0(e,i,r){switch(i=sc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);rt(e)}var Oi=new Map,M0=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ra=H.d;H.d={f:lE,r:uE,D:cE,C:fE,L:hE,m:dE,X:mE,S:pE,M:_E};function lE(){var e=Ra.f(),i=Ju();return e||i}function uE(e){var i=Pt(e);i!==null&&i.tag===5&&i.type==="form"?I_(i):Ra.r(e)}var Ks=typeof document>"u"?null:document;function E0(e,i,r){var l=Ks;if(l&&typeof i=="string"&&i){var h=Nn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),M0.has(h)||(M0.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Cn(i,"link",e),Ft(i),l.head.appendChild(i)))}}function cE(e){Ra.D(e),E0("dns-prefetch",e,null)}function fE(e,i){Ra.C(e,i),E0("preconnect",e,i)}function hE(e,i,r){Ra.L(e,i,r);var l=Ks;if(l&&e&&i){var h='link[rel="preload"][as="'+Nn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Nn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Nn(r.imageSizes)+'"]')):h+='[href="'+Nn(e)+'"]';var m=h;switch(i){case"style":m=Qs(e);break;case"script":m=Js(e)}Oi.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Oi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Rl(m))||i==="script"&&l.querySelector(Cl(m))||(i=l.createElement("link"),Cn(i,"link",e),Ft(i),l.head.appendChild(i)))}}function dE(e,i){Ra.m(e,i);var r=Ks;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Nn(l)+'"][href="'+Nn(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Js(e)}if(!Oi.has(m)&&(e=g({rel:"modulepreload",href:e},i),Oi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Cl(m)))return}l=r.createElement("link"),Cn(l,"link",e),Ft(l),r.head.appendChild(l)}}}function pE(e,i,r){Ra.S(e,i,r);var l=Ks;if(l&&e){var h=Yt(l).hoistableStyles,m=Qs(e);i=i||"default";var E=h.get(m);if(!E){var R={loading:0,preload:null};if(E=l.querySelector(Rl(m)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Oi.get(m))&&fd(e,r);var I=E=l.createElement("link");Ft(I),Cn(I,"link",e),I._p=new Promise(function(et,pt){I.onload=et,I.onerror=pt}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:R},h.set(m,E)}}}function mE(e,i){Ra.X(e,i);var r=Ks;if(r&&e){var l=Yt(r).hoistableScripts,h=Js(e),m=l.get(h);m||(m=r.querySelector(Cl(h)),m||(e=g({src:e,async:!0},i),(i=Oi.get(h))&&hd(e,i),m=r.createElement("script"),Ft(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function _E(e,i){Ra.M(e,i);var r=Ks;if(r&&e){var l=Yt(r).hoistableScripts,h=Js(e),m=l.get(h);m||(m=r.querySelector(Cl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Oi.get(h))&&hd(e,i),m=r.createElement("script"),Ft(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function T0(e,i,r,l){var h=(h=xt.current)?oc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Qs(r.href),r=Yt(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Qs(r.href);var m=Yt(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Rl(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Oi.set(e,r),m||gE(h,e,r,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Js(r),r=Yt(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Qs(e){return'href="'+Nn(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function b0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function gE(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Cn(i,"link",r),Ft(i),e.head.appendChild(i))}function Js(e){return'[src="'+Nn(e)+'"]'}function Cl(e){return"script[async]"+e}function A0(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Nn(r.href)+'"]');if(l)return i.instance=l,Ft(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ft(l),Cn(l,"style",h),lc(l,r.precedence,e),i.instance=l;case"stylesheet":h=Qs(r.href);var m=e.querySelector(Rl(h));if(m)return i.state.loading|=4,i.instance=m,Ft(m),m;l=b0(r),(h=Oi.get(h))&&fd(l,h),m=(e.ownerDocument||e).createElement("link"),Ft(m);var E=m;return E._p=new Promise(function(R,I){E.onload=R,E.onerror=I}),Cn(m,"link",l),i.state.loading|=4,lc(m,r.precedence,e),i.instance=m;case"script":return m=Js(r.src),(h=e.querySelector(Cl(m)))?(i.instance=h,Ft(h),h):(l=r,(h=Oi.get(m))&&(l=g({},r),hd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ft(h),Cn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,lc(l,r.precedence,e));return i.instance}function lc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,E=0;E<l.length;E++){var R=l[E];if(R.dataset.precedence===i)m=R;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var uc=null;function R0(e,i,r){if(uc===null){var l=new Map,h=uc=new Map;h.set(r,l)}else h=uc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[ut]||m[rn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var R=l.get(E);R?R.push(m):l.set(E,[m])}}return l}function C0(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function vE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xE(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Qs(l.href),m=i.querySelector(Rl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=cc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,Ft(m);return}m=i.ownerDocument||i,l=b0(l),(h=Oi.get(h))&&fd(l,h),m=m.createElement("link"),Ft(m);var E=m;E._p=new Promise(function(R,I){E.onload=R,E.onerror=I}),Cn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=cc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var dd=0;function SE(e,i){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&dd===0&&(dd=62500*tE());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>dd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(yE,e),fc=null,cc.call(e))}function yE(e,i){if(!(i.state.loading&4)){var r=fc.get(e);if(r)var l=r.get(null);else{r=new Map,fc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),l=E)}l&&r.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||l,m===l&&r.set(null,h),r.set(E,h),this.count++,l=cc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var wl={$$typeof:A,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function ME(e,i,r,l,h,m,E,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function D0(e,i,r,l,h,m,E,R,I,et,pt,_t){return e=new ME(e,i,r,E,I,et,pt,_t,R),i=1,m===!0&&(i|=24),m=ci(3,null,null,i),e.current=m,m.stateNode=e,i=qf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},Kf(m),e}function L0(e){return e?(e=ws,e):ws}function U0(e,i,r,l,h,m){h=L0(h),l.context===null?l.context=h:l.pendingContext=h,l=Ja(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=$a(e,l,i),r!==null&&(Qn(r,e,i),ol(r,e,i))}function N0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function pd(e,i){N0(e,i),(e=e.alternate)&&N0(e,i)}function O0(e){if(e.tag===13||e.tag===31){var i=Hr(e,67108864);i!==null&&Qn(i,e,67108864),pd(e,67108864)}}function P0(e){if(e.tag===13||e.tag===31){var i=mi();i=Ho(i);var r=Hr(e,i);r!==null&&Qn(r,e,i),pd(e,i)}}var dc=!0;function EE(e,i,r,l){var h=z.T;z.T=null;var m=H.p;try{H.p=2,md(e,i,r,l)}finally{H.p=m,z.T=h}}function TE(e,i,r,l){var h=z.T;z.T=null;var m=H.p;try{H.p=8,md(e,i,r,l)}finally{H.p=m,z.T=h}}function md(e,i,r,l){if(dc){var h=_d(l);if(h===null)ed(e,i,l,pc,r),B0(e,l);else if(AE(h,e,i,r,l))l.stopPropagation();else if(B0(e,l),i&4&&-1<bE.indexOf(e)){for(;h!==null;){var m=Pt(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=bt(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var I=1<<31-kt(E);R.entanglements[1]|=I,E&=~I}na(m),(ye&6)===0&&(Ku=gt()+500,El(0))}}break;case 31:case 13:R=Hr(m,2),R!==null&&Qn(R,m,2),Ju(),pd(m,2)}if(m=_d(l),m===null&&ed(e,i,l,pc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else ed(e,i,l,null,r)}}function _d(e){return e=vf(e),gd(e)}var pc=null;function gd(e){if(pc=null,e=wt(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=f(i),e!==null)return e;e=null}else if(r===31){if(e=c(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return pc=e,null}function z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case Ct:return 2;case Nt:return 8;case qt:case ie:return 32;case vt:return 268435456;default:return 32}default:return 32}}var vd=!1,cr=null,fr=null,hr=null,Dl=new Map,Ll=new Map,dr=[],bE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B0(e,i){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(i.pointerId)}}function Ul(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Pt(i),i!==null&&O0(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function AE(e,i,r,l,h){switch(i){case"focusin":return cr=Ul(cr,e,i,r,l,h),!0;case"dragenter":return fr=Ul(fr,e,i,r,l,h),!0;case"mouseover":return hr=Ul(hr,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Dl.set(m,Ul(Dl.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Ll.set(m,Ul(Ll.get(m)||null,e,i,r,l,h)),!0}return!1}function F0(e){var i=wt(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){e.blockedOn=i,zr(e.priority,function(){P0(r)});return}}else if(i===31){if(i=c(r),i!==null){e.blockedOn=i,zr(e.priority,function(){P0(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=_d(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);gf=l,r.target.dispatchEvent(l),gf=null}else return i=Pt(r),i!==null&&O0(i),e.blockedOn=r,!1;i.shift()}return!0}function I0(e,i,r){mc(e)&&r.delete(i)}function RE(){vd=!1,cr!==null&&mc(cr)&&(cr=null),fr!==null&&mc(fr)&&(fr=null),hr!==null&&mc(hr)&&(hr=null),Dl.forEach(I0),Ll.forEach(I0)}function _c(e,i){e.blockedOn===i&&(e.blockedOn=null,vd||(vd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,RE)))}var gc=null;function H0(e){gc!==e&&(gc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(gd(l||r)===null)continue;break}var m=Pt(r);m!==null&&(e.splice(i,3),i-=3,_h(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function $s(e){function i(I){return _c(I,e)}cr!==null&&_c(cr,e),fr!==null&&_c(fr,e),hr!==null&&_c(hr,e),Dl.forEach(i),Ll.forEach(i);for(var r=0;r<dr.length;r++){var l=dr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<dr.length&&(r=dr[0],r.blockedOn===null);)F0(r),r.blockedOn===null&&dr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],E=h[Un]||null;if(typeof m=="function")E||H0(r);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Un]||null)R=E.formAction;else if(gd(h)!==null)continue}else R=E.action;typeof R=="function"?r[l+1]=R:(r.splice(l,3),l-=3),H0(r)}}}function G0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function xd(e){this._internalRoot=e}vc.prototype.render=xd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=mi();U0(r,l,e,i,null,null)},vc.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;U0(e.current,2,null,e,null,null),Ju(),i[Va]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Go();e={blockedOn:null,target:e,priority:i};for(var r=0;r<dr.length&&i!==0&&i<dr[r].priority;r++);dr.splice(r,0,e),r===0&&F0(e)}};var V0=t.version;if(V0!=="19.2.3")throw Error(a(527,V0,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var CE={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Kt=xc.inject(CE),Lt=xc}catch{}}return Ol.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=Z_,m=K_,E=Q_;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=D0(e,1,!1,null,null,r,l,null,h,m,E,G0),e[Va]=i.current,td(e),new xd(i)},Ol.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=Z_,E=K_,R=Q_,I=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),i=D0(e,1,!0,i,r??null,l,h,I,m,E,R,G0),i.context=L0(null),r=i.current,l=mi(),l=Ho(l),h=Ja(l),h.callback=null,$a(r,h,l),r=l,i.current.lanes=r,tn(i,r),na(i),e[Va]=i.current,td(e),new vc(i)},Ol.version="19.2.3",Ol}var J0;function IE(){if(J0)return Md.exports;J0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Md.exports=FE(),Md.exports}var HE=IE();const GE=Wx(HE),VE=({isDarkMode:o,toggleTheme:t})=>_e.jsxs("nav",{className:"fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-transparent pointer-events-none",children:[_e.jsxs("div",{className:`text-lg font-medium tracking-tight pointer-events-auto cursor-pointer flex items-center gap-1 transition-colors duration-500 ${o?"text-white":"text-black"}`,children:[_e.jsx("span",{className:"font-serif italic text-xl mr-1",children:"⌘"})," Delphi"]}),_e.jsxs("div",{className:"hidden md:flex items-center gap-4 bg-white/0 backdrop-blur-[2px] px-6 py-2 rounded-full pointer-events-auto",children:[_e.jsx("div",{className:"flex items-center gap-8 mr-4",children:["Use Cases","Discover","About"].map(n=>_e.jsx("a",{href:"#",className:`text-sm font-medium transition-colors duration-300 ${o?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"}`,children:n},n))}),_e.jsx("button",{onClick:t,className:`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${o?"bg-white/10 hover:bg-white/20 text-white":"bg-black/5 hover:bg-black/10 text-black"}`,"aria-label":"Toggle theme",children:o?_e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_e.jsx("circle",{cx:"12",cy:"12",r:"5"}),_e.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):_e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:_e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})]}),_e.jsx("div",{className:"pointer-events-auto",children:_e.jsxs("button",{className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 group ${o?"bg-white text-black hover:bg-gray-200":"bg-black text-white hover:bg-gray-900"}`,children:["Get started now ",_e.jsx("span",{className:"group-hover:translate-x-0.5 transition-transform",children:"→"})]})})]});function Oa(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function qx(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ro={duration:.5,overwrite:!1,delay:0},Bp,Ln,qe,Ii=1e8,Fe=1/Ii,hp=Math.PI*2,kE=hp/4,XE=0,Yx=Math.sqrt,WE=Math.cos,qE=Math.sin,En=function(t){return typeof t=="string"},$e=function(t){return typeof t=="function"},Ba=function(t){return typeof t=="number"},Fp=function(t){return typeof t>"u"},ca=function(t){return typeof t=="object"},ti=function(t){return t!==!1},Ip=function(){return typeof window<"u"},Sc=function(t){return $e(t)||En(t)},jx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,YE=/random\([^)]+\)/g,jE=/,\s*/g,$0=/(?:-?\.?\d|\.)+/gi,Zx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ad=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kx=/[+-]=-?[.\d]+/,ZE=/[^,'"\[\]\s]+/gi,KE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,ia,dp,Hp,Ti={},jc={},Qx,Jx=function(t){return(jc=Co(t,Ti))&&oi},Gp=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Zl=function(t,n){return!n&&console.warn(t)},$x=function(t,n){return t&&(Ti[t]=n)&&jc&&(jc[t]=n)||Ti},Kl=function(){return 0},QE={suppressEvents:!0,isStart:!0,kill:!1},Xc={suppressEvents:!0,kill:!1},JE={suppressEvents:!0},Vp={},Ar=[],pp={},tS,vi={},Rd={},tv=30,Wc=[],kp="",Xp=function(t){var n=t[0],a,s;if(ca(n)||$e(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=Wc.length;s--&&!Wc[s].targetTest(n););a=Wc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new TS(t[s],a)))||t.splice(s,1);return t},fs=function(t){return t._gsap||Xp(Hi(t))[0]._gsap},eS=function(t,n,a){return(a=t[n])&&$e(a)?t[n]():Fp(a)&&t.getAttribute&&t.getAttribute(n)||a},ei=function(t,n){return(t=t.split(",")).forEach(n)||t},an=function(t){return Math.round(t*1e5)/1e5||0},Ye=function(t){return Math.round(t*1e7)/1e7||0},Mo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},$E=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},Zc=function(){var t=Ar.length,n=Ar.slice(0),a,s;for(pp={},Ar.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Wp=function(t){return!!(t._initted||t._startAt||t.add)},nS=function(t,n,a,s){Ar.length&&!Ln&&Zc(),t.render(n,a,!!(Ln&&n<0&&Wp(t))),Ar.length&&!Ln&&Zc()},iS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(ZE).length<2?n:En(t)?t.trim():t},aS=function(t){return t},bi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},tT=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Co=function(t,n){for(var a in n)t[a]=n[a];return t},ev=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=ca(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},Kc=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},Xl=function(t){var n=t.parent||je,a=t.keyframes?tT(Fn(t.keyframes)):bi;if(ti(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},eT=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},rS=function(t,n,a,s,u){var f=t[s],c;if(u)for(c=n[u];f&&f[u]>c;)f=f._prev;return f?(n._next=f._next,f._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=f,n.parent=n._dp=t,n},of=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,f=n._next;u?u._next=f:t[a]===n&&(t[a]=f),f?f._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},Lr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},hs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},nT=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},mp=function(t,n,a,s){return t._startAt&&(Ln?t._startAt.revert(Xc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},iT=function o(t){return!t||t._ts&&o(t.parent)},nv=function(t){return t._repeat?wo(t._tTime,t=t.duration()+t._rDelay)*t:0},wo=function(t,n){var a=Math.floor(t=Ye(t/n));return t&&a===t?a-1:a},Qc=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},lf=function(t){return t._end=Ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||Fe)||0))},uf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Ye(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),lf(t),a._dirty||hs(a,t)),t},sS=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=Qc(t.rawTime(),n),(!n._dur||ru(0,n.totalDuration(),a)-n._tTime>Fe)&&n.render(a,!0)),hs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Fe}},ra=function(t,n,a,s){return n.parent&&Lr(n),n._start=Ye((Ba(a)?a:a||t!==je?zi(t,a,n):t._time)+n._delay),n._end=Ye(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),rS(t,n,"_first","_last",t._sort?"_start":0),_p(n)||(t._recent=n),s||sS(t,n),t._ts<0&&uf(t,t._tTime),t},oS=function(t,n){return(Ti.ScrollTrigger||Gp("scrollTrigger",n))&&Ti.ScrollTrigger.create(n,t)},lS=function(t,n,a,s,u){if(Yp(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!Ln&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&tS!==Si.frame)return Ar.push(t),t._lazy=[u,s],1},aT=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},_p=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},rT=function(t,n,a,s){var u=t.ratio,f=n<0||!n&&(!t._start&&aT(t)&&!(!t._initted&&_p(t))||(t._ts<0||t._dp._ts<0)&&!_p(t))?0:1,c=t._rDelay,d=0,p,_,g;if(c&&t._repeat&&(d=ru(0,t._tDur,n),_=wo(d,c),t._yoyo&&_&1&&(f=1-f),_!==wo(t._tTime,c)&&(u=1-f,t.vars.repeatRefresh&&t._initted&&t.invalidate())),f!==u||Ln||s||t._zTime===Fe||!n&&t._zTime){if(!t._initted&&lS(t,n,s,a,d))return;for(g=t._zTime,t._zTime=n||(a?Fe:0),a||(a=n&&!g),t.ratio=f,t._from&&(f=1-f),t._time=0,t._tTime=d,p=t._pt;p;)p.r(f,p.d),p=p._next;n<0&&mp(t,n,a,!0),t._onUpdate&&!a&&yi(t,"onUpdate"),d&&t._repeat&&!a&&t.parent&&yi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===f&&(f&&Lr(t,1),!a&&!Ln&&(yi(t,f?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},sT=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Do=function(t,n,a,s){var u=t._repeat,f=Ye(n)||0,c=t._tTime/t._tDur;return c&&!s&&(t._time*=f/t._dur),t._dur=f,t._tDur=u?u<0?1e10:Ye(f*(u+1)+t._rDelay*u):f,c>0&&!s&&uf(t,t._tTime=t._tDur*c),t.parent&&lf(t),a||hs(t.parent,t),t},iv=function(t){return t instanceof Xn?hs(t):Do(t,t._dur)},oT={_start:0,endTime:Kl,totalDuration:Kl},zi=function o(t,n,a){var s=t.labels,u=t._recent||oT,f=t.duration()>=Ii?u.endTime(!1):t._dur,c,d,p;return En(n)&&(isNaN(n)||n in s)?(d=n.charAt(0),p=n.substr(-1)==="%",c=n.indexOf("="),d==="<"||d===">"?(c>=0&&(n=n.replace(/=/,"")),(d==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(p?(c<0?u:a).totalDuration()/100:1)):c<0?(n in s||(s[n]=f),s[n]):(d=parseFloat(n.charAt(c-1)+n.substr(c+1)),p&&a&&(d=d/100*(Fn(a)?a[0]:a).totalDuration()),c>1?o(t,n.substr(0,c-1),a)+d:f+d)):n==null?f:+n},Wl=function(t,n,a){var s=Ba(n[1]),u=(s?2:1)+(t<2?0:1),f=n[u],c,d;if(s&&(f.duration=n[1]),f.parent=a,t){for(c=f,d=a;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=ti(d.vars.inherit)&&d.parent;f.immediateRender=ti(c.immediateRender),t<2?f.runBackwards=1:f.startAt=n[u-1]}return new pn(n[0],f,n[u+1])},Pr=function(t,n){return t||t===0?n(t):n},ru=function(t,n,a){return a<t?t:a>n?n:a},Bn=function(t,n){return!En(t)||!(n=KE.exec(t))?"":n[1]},lT=function(t,n,a){return Pr(a,function(s){return ru(t,n,s)})},gp=[].slice,uS=function(t,n){return t&&ca(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ca(t[0]))&&!t.nodeType&&t!==ia},uT=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return En(s)&&!n||uS(s,1)?(u=a).push.apply(u,Hi(s)):a.push(s)})||a},Hi=function(t,n,a){return qe&&!n&&qe.selector?qe.selector(t):En(t)&&!a&&(dp||!Lo())?gp.call((n||Hp).querySelectorAll(t),0):Fn(t)?uT(t,a):uS(t)?gp.call(t,0):t?[t]:[]},vp=function(t){return t=Hi(t)[0]||Zl("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Hi(n,a.querySelectorAll?a:a===t?Zl("Invalid scope")||Hp.createElement("div"):t)}},cS=function(t){return t.sort(function(){return .5-Math.random()})},fS=function(t){if($e(t))return t;var n=ca(t)?t:{each:t},a=ds(n.ease),s=n.from||0,u=parseFloat(n.base)||0,f={},c=s>0&&s<1,d=isNaN(s)||c,p=n.axis,_=s,g=s;return En(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(_=s[0],g=s[1]),function(v,y,T){var M=(T||n).length,S=f[M],x,w,A,L,F,O,D,X,b;if(!S){if(b=n.grid==="auto"?0:(n.grid||[1,Ii])[1],!b){for(D=-Ii;D<(D=T[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=f[M]=[],x=d?Math.min(b,M)*_-.5:s%b,w=b===Ii?0:d?M*g/b-.5:s/b|0,D=0,X=Ii,O=0;O<M;O++)A=O%b-x,L=w-(O/b|0),S[O]=F=p?Math.abs(p==="y"?L:A):Yx(A*A+L*L),F>D&&(D=F),F<X&&(X=F);s==="random"&&cS(S),S.max=D-X,S.min=X,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),S.b=M<0?u-M:u,S.u=Bn(n.amount||n.each)||0,a=a&&M<0?yS(a):a}return M=(S[v]-S.min)/S.max||0,Ye(S.b+(a?a(M):M)*S.v)+S.u}},xp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=Ye(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Ba(a)?0:Bn(a))}},hS=function(t,n){var a=Fn(t),s,u;return!a&&ca(t)&&(s=a=t.radius||Ii,t.values?(t=Hi(t.values),(u=!Ba(t[0]))&&(s*=s)):t=xp(t.increment)),Pr(n,a?$e(t)?function(f){return u=t(f),Math.abs(u-f)<=s?u:f}:function(f){for(var c=parseFloat(u?f.x:f),d=parseFloat(u?f.y:0),p=Ii,_=0,g=t.length,v,y;g--;)u?(v=t[g].x-c,y=t[g].y-d,v=v*v+y*y):v=Math.abs(t[g]-c),v<p&&(p=v,_=g);return _=!s||p<=s?t[_]:f,u||_===f||Ba(f)?_:_+Bn(f)}:xp(t))},dS=function(t,n,a,s){return Pr(Fn(t)?!n:a===!0?!!(a=0):!s,function(){return Fn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},cT=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,f){return f(u)},s)}},fT=function(t,n){return function(a){return t(parseFloat(a))+(n||Bn(a))}},hT=function(t,n,a){return mS(t,n,0,1,a)},pS=function(t,n,a){return Pr(a,function(s){return t[~~n(s)]})},dT=function o(t,n,a){var s=n-t;return Fn(t)?pS(t,o(0,t.length),n):Pr(a,function(u){return(s+(u-t)%s)%s+t})},pT=function o(t,n,a){var s=n-t,u=s*2;return Fn(t)?pS(t,o(0,t.length-1),n):Pr(a,function(f){return f=(u+(f-t)%u)%u||0,t+(f>s?u-f:f)})},Ql=function(t){return t.replace(YE,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(jE);return dS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},mS=function(t,n,a,s,u){var f=n-t,c=s-a;return Pr(u,function(d){return a+((d-t)/f*c||0)})},mT=function o(t,n,a,s){var u=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!u){var f=En(t),c={},d,p,_,g,v;if(a===!0&&(s=1)&&(a=null),f)t={p:t},n={p:n};else if(Fn(t)&&!Fn(n)){for(_=[],g=t.length,v=g-2,p=1;p<g;p++)_.push(o(t[p-1],t[p]));g--,u=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},a=n}else s||(t=Co(Fn(t)?[]:{},t));if(!_){for(d in n)qp.call(c,t,d,"get",n[d]);u=function(T){return Kp(T,c)||(f?t.p:t)}}}return Pr(a,u)},av=function(t,n,a){var s=t.labels,u=Ii,f,c,d;for(f in s)c=s[f]-n,c<0==!!a&&c&&u>(c=Math.abs(c))&&(d=f,u=c);return d},yi=function(t,n,a){var s=t.vars,u=s[n],f=qe,c=t._ctx,d,p,_;if(u)return d=s[n+"Params"],p=s.callbackScope||t,a&&Ar.length&&Zc(),c&&(qe=c),_=d?u.apply(p,d):u.call(p),qe=f,_},Gl=function(t){return Lr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ln),t.progress()<1&&yi(t,"onInterrupt"),t},xo,_S=[],gS=function(t){if(t)if(t=!t.name&&t.default||t,Ip()||t.headless){var n=t.name,a=$e(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:Kl,render:Kp,add:qp,kill:LT,modifier:DT,rawVars:0},f={targetTest:0,get:0,getSetter:Zp,aliases:{},register:0};if(Lo(),t!==s){if(vi[n])return;bi(s,bi(Kc(t,u),f)),Co(s.prototype,Co(u,Kc(t,f))),vi[s.prop=n]=s,t.targetTest&&(Wc.push(s),Vp[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}$x(n,s),t.register&&t.register(oi,s,ni)}else _S.push(t)},Be=255,Vl={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Cd=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Be+.5|0},vS=function(t,n,a){var s=t?Ba(t)?[t>>16,t>>8&Be,t&Be]:0:Vl.black,u,f,c,d,p,_,g,v,y,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vl[t])s=Vl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),f=t.charAt(2),c=t.charAt(3),t="#"+u+u+f+f+c+c+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Be,s&Be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Be,t&Be]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match($0),!n)d=+s[0]%360/360,p=+s[1]/100,_=+s[2]/100,f=_<=.5?_*(p+1):_+p-_*p,u=_*2-f,s.length>3&&(s[3]*=1),s[0]=Cd(d+1/3,u,f),s[1]=Cd(d,u,f),s[2]=Cd(d-1/3,u,f);else if(~t.indexOf("="))return s=t.match(Zx),a&&s.length<4&&(s[3]=1),s}else s=t.match($0)||Vl.transparent;s=s.map(Number)}return n&&!T&&(u=s[0]/Be,f=s[1]/Be,c=s[2]/Be,g=Math.max(u,f,c),v=Math.min(u,f,c),_=(g+v)/2,g===v?d=p=0:(y=g-v,p=_>.5?y/(2-g-v):y/(g+v),d=g===u?(f-c)/y+(f<c?6:0):g===f?(c-u)/y+2:(u-f)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(p*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},xS=function(t){var n=[],a=[],s=-1;return t.split(Rr).forEach(function(u){var f=u.match(vo)||[];n.push.apply(n,f),a.push(s+=f.length+1)}),n.c=a,n},rv=function(t,n,a){var s="",u=(t+s).match(Rr),f=n?"hsla(":"rgba(",c=0,d,p,_,g;if(!u)return t;if(u=u.map(function(v){return(v=vS(v,n,1))&&f+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=xS(t),d=a.c,d.join(s)!==_.c.join(s)))for(p=t.replace(Rr,"1").split(vo),g=p.length-1;c<g;c++)s+=p[c]+(~d.indexOf(c)?u.shift()||f+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!p)for(p=t.split(Rr),g=p.length-1;c<g;c++)s+=p[c]+u[c];return s+p[g]},Rr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),_T=/hsl[a]?\(/,SS=function(t){var n=t.join(" "),a;if(Rr.lastIndex=0,Rr.test(n))return a=_T.test(n),t[1]=rv(t[1],a),t[0]=rv(t[0],a,xS(t[1])),!0},Jl,Si=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,f=u,c=[],d,p,_,g,v,y,T=function M(S){var x=o()-s,w=S===!0,A,L,F,O;if((x>t||x<0)&&(a+=x-n),s+=x,F=s-a,A=F-f,(A>0||w)&&(O=++g.frame,v=F-g.time*1e3,g.time=F=F/1e3,f+=A+(A>=u?4:u-A),L=1),w||(d=p(M)),L)for(y=0;y<c.length;y++)c[y](F,v,O,S)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Qx&&(!dp&&Ip()&&(ia=dp=window,Hp=ia.document||{},Ti.gsap=oi,(ia.gsapVersions||(ia.gsapVersions=[])).push(oi.version),Jx(jc||ia.GreenSockGlobals||!ia.gsap&&ia||{}),_S.forEach(gS)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=_||function(S){return setTimeout(S,f-g.time*1e3+1|0)},Jl=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(d),Jl=0,p=Kl},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){u=1e3/(S||240),f=g.time*1e3+u},add:function(S,x,w){var A=x?function(L,F,O,D){S(L,F,O,D),g.remove(A)}:S;return g.remove(S),c[w?"unshift":"push"](A),Lo(),A},remove:function(S,x){~(x=c.indexOf(S))&&c.splice(x,1)&&y>=x&&y--},_listeners:c},g})(),Lo=function(){return!Jl&&Si.wake()},ge={},gT=/^[\d.\-M][\d.\-,\s]/,vT=/["']/g,xT=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,f=a.length,c,d,p;u<f;u++)d=a[u],c=u!==f-1?d.lastIndexOf(","):d.length,p=d.substr(0,c),n[s]=isNaN(p)?p.replace(vT,"").trim():+p,s=d.substr(c+1).trim();return n},ST=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},yT=function(t){var n=(t+"").split("("),a=ge[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[xT(n[1])]:ST(t).split(",").map(iS)):ge._CE&&gT.test(t)?ge._CE("",t):a},yS=function(t){return function(n){return 1-t(1-n)}},MS=function o(t,n){for(var a=t._first,s;a;)a instanceof Xn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},ds=function(t,n){return t&&($e(t)?t:ge[t]||yT(t))||n},Ss=function(t,n,a,s){a===void 0&&(a=function(d){return 1-n(1-d)}),s===void 0&&(s=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},f;return ei(t,function(c){ge[c]=Ti[c]=u,ge[f=c.toLowerCase()]=a;for(var d in u)ge[f+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=ge[c+"."+d]=u[d]}),u},ES=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},wd=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),f=u/hp*(Math.asin(1/s)||0),c=function(_){return _===1?1:s*Math.pow(2,-10*_)*qE((_-f)*u)+1},d=t==="out"?c:t==="in"?function(p){return 1-c(1-p)}:ES(c);return u=hp/u,d.config=function(p,_){return o(t,p,_)},d},Dd=function o(t,n){n===void 0&&(n=1.70158);var a=function(f){return f?--f*f*((n+1)*f+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:ES(a);return s.config=function(u){return o(t,u)},s};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ss(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;Ss("Elastic",wd("in"),wd("out"),wd());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(c){return c<n?o*c*c:c<a?o*Math.pow(c-1.5/t,2)+.75:c<s?o*(c-=2.25/t)*c+.9375:o*Math.pow(c-2.625/t,2)+.984375};Ss("Bounce",function(f){return 1-u(1-f)},u)})(7.5625,2.75);Ss("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ss("Circ",function(o){return-(Yx(1-o*o)-1)});Ss("Sine",function(o){return o===1?1:-WE(o*kE)+1});Ss("Back",Dd("in"),Dd("out"),Dd());ge.SteppedEase=ge.steps=Ti.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,f=1-Fe;return function(c){return((s*ru(0,f,c)|0)+u)*a}}};Ro.ease=ge["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return kp+=o+","+o+"Params,"});var TS=function(t,n){this.id=XE++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:eS,this.set=n?n.getSetter:Zp},$l=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Do(this,+n.duration,1,1),this.data=n.data,qe&&(this._ctx=qe,qe.data.push(this)),Jl||Si.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Lo(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(uf(this,a),!u._dp||u.parent||sS(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ra(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Fe||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),nS(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+nv(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+nv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?wo(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Fe?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Qc(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Fe?0:this._rts,this.totalTime(ru(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),lf(this),nT(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Fe&&(this._tTime-=Fe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=Ye(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ra(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ti(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qc(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=JE);var s=Ln;return Ln=a,Wp(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Ln=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,iv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,iv(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(zi(this,a),ti(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ti(s)),this._dur||(this._zTime=-Fe),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Fe,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-Fe)},t.eventCallback=function(a,s,u){var f=this.vars;return arguments.length>1?(s?(f[a]=s,u&&(f[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete f[a],this):f[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(f){var c=$e(a)?a:aS,d=function(){var _=s.then;s.then=null,u&&u(),$e(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=_),f(c),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},t.kill=function(){Gl(this)},o})();bi($l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Fe,_prom:0,_ps:!1,_rts:1});var Xn=(function(o){qx(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=ti(a.sortChildren),je&&ra(a.parent||je,Oa(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&oS(Oa(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,f){return Wl(0,arguments,this),this},n.from=function(s,u,f){return Wl(1,arguments,this),this},n.fromTo=function(s,u,f,c){return Wl(2,arguments,this),this},n.set=function(s,u,f){return u.duration=0,u.parent=this,Xl(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new pn(s,u,zi(this,f),1),this},n.call=function(s,u,f){return ra(this,pn.delayedCall(0,s,u),f)},n.staggerTo=function(s,u,f,c,d,p,_){return f.duration=u,f.stagger=f.stagger||c,f.onComplete=p,f.onCompleteParams=_,f.parent=this,new pn(s,f,zi(this,d)),this},n.staggerFrom=function(s,u,f,c,d,p,_){return f.runBackwards=1,Xl(f).immediateRender=ti(f.immediateRender),this.staggerTo(s,u,f,c,d,p,_)},n.staggerFromTo=function(s,u,f,c,d,p,_,g){return c.startAt=f,Xl(c).immediateRender=ti(c.immediateRender),this.staggerTo(s,u,c,d,p,_,g)},n.render=function(s,u,f){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,_=s<=0?0:Ye(s),g=this._zTime<0!=s<0&&(this._initted||!p),v,y,T,M,S,x,w,A,L,F,O,D;if(this!==je&&_>d&&s>=0&&(_=d),_!==this._tTime||f||g){if(c!==this._time&&p&&(_+=this._time-c,s+=this._time-c),v=_,L=this._start,A=this._ts,x=!A,g&&(p||(c=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,S=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,u,f);if(v=Ye(_%S),_===d?(M=this._repeat,v=p):(F=Ye(_/S),M=~~F,M&&M===F&&(v=p,M--),v>p&&(v=p)),F=wo(this._tTime,S),!c&&this._tTime&&F!==M&&this._tTime-F*S-this._dur<=0&&(F=M),O&&M&1&&(v=p-v,D=1),M!==F&&!this._lock){var X=O&&F&1,b=X===(O&&M&1);if(M<F&&(X=!X),c=X?0:_%p?p:_,this._lock=1,this.render(c||(D?0:Ye(M*S)),u,!p)._lock=0,this._tTime=_,!u&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,F=M),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,c=X?p:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;MS(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=sT(this,Ye(c),Ye(v)),w&&(_-=v-(v=w._start))),this._tTime=_,this._time=v,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&_&&p&&!u&&!F&&(yi(this,"onStart"),this._tTime!==_))return this;if(v>=c&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&w!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,u,f),v!==this._time||!this._ts&&!x){w=0,T&&(_+=this._zTime=-Fe);break}}y=T}else{y=this._last;for(var U=s<0?s:v;y;){if(T=y._prev,(y._act||U<=y._end)&&y._ts&&w!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(U-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(U-y._start)*y._ts,u,f||Ln&&Wp(y)),v!==this._time||!this._ts&&!x){w=0,T&&(_+=this._zTime=U?-Fe:Fe);break}}y=T}}if(w&&!u&&(this.pause(),w.render(v>=c?0:-Fe)._zTime=v>=c?1:-1,this._ts))return this._start=L,lf(this),this.render(s,u,f);this._onUpdate&&!u&&yi(this,"onUpdate",!0),(_===d&&this._tTime>=this.totalDuration()||!_&&c)&&(L===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(_===d&&this._ts>0||!_&&this._ts<0)&&Lr(this,1),!u&&!(s<0&&!c)&&(_||c||!d)&&(yi(this,_===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var f=this;if(Ba(u)||(u=zi(this,u,s)),!(s instanceof $l)){if(Fn(s))return s.forEach(function(c){return f.add(c,u)}),this;if(En(s))return this.addLabel(s,u);if($e(s))s=pn.delayedCall(0,s);else return this}return this!==s?ra(this,s,u):this},n.getChildren=function(s,u,f,c){s===void 0&&(s=!0),u===void 0&&(u=!0),f===void 0&&(f=!0),c===void 0&&(c=-Ii);for(var d=[],p=this._first;p;)p._start>=c&&(p instanceof pn?u&&d.push(p):(f&&d.push(p),s&&d.push.apply(d,p.getChildren(!0,u,f)))),p=p._next;return d},n.getById=function(s){for(var u=this.getChildren(1,1,1),f=u.length;f--;)if(u[f].vars.id===s)return u[f]},n.remove=function(s){return En(s)?this.removeLabel(s):$e(s)?this.killTweensOf(s):(s.parent===this&&of(this,s),s===this._recent&&(this._recent=this._last),hs(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ye(Si.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=zi(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,f){var c=pn.delayedCall(0,u||Kl,f);return c.data="isPause",this._hasPause=1,ra(this,c,zi(this,s))},n.removePause=function(s){var u=this._first;for(s=zi(this,s);u;)u._start===s&&u.data==="isPause"&&Lr(u),u=u._next},n.killTweensOf=function(s,u,f){for(var c=this.getTweensOf(s,f),d=c.length;d--;)Sr!==c[d]&&c[d].kill(s,u);return this},n.getTweensOf=function(s,u){for(var f=[],c=Hi(s),d=this._first,p=Ba(u),_;d;)d instanceof pn?$E(d._targets,c)&&(p?(!Sr||d._initted&&d._ts)&&d.globalTime(0)<=u&&d.globalTime(d.totalDuration())>u:!u||d.isActive())&&f.push(d):(_=d.getTweensOf(c,u)).length&&f.push.apply(f,_),d=d._next;return f},n.tweenTo=function(s,u){u=u||{};var f=this,c=zi(f,s),d=u,p=d.startAt,_=d.onStart,g=d.onStartParams,v=d.immediateRender,y,T=pn.to(f,bi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:u.duration||Math.abs((c-(p&&"time"in p?p.time:f._time))/f.timeScale())||Fe,onStart:function(){if(f.pause(),!y){var S=u.duration||Math.abs((c-(p&&"time"in p?p.time:f._time))/f.timeScale());T._dur!==S&&Do(T,S,0,1).render(T._time,!0,!0),y=1}_&&_.apply(T,g||[])}},u));return v?T.render(0):T},n.tweenFromTo=function(s,u,f){return this.tweenTo(u,bi({startAt:{time:zi(this,s)}},f))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),av(this,zi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),av(this,zi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Fe)},n.shiftChildren=function(s,u,f){f===void 0&&(f=0);var c=this._first,d=this.labels,p;for(s=Ye(s);c;)c._start>=f&&(c._start+=s,c._end+=s),c=c._next;if(u)for(p in d)d[p]>=f&&(d[p]+=s);return hs(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,f;u;)f=u._next,this.remove(u),u=f;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),hs(this)},n.totalDuration=function(s){var u=0,f=this,c=f._last,d=Ii,p,_,g;if(arguments.length)return f.timeScale((f._repeat<0?f.duration():f.totalDuration())/(f.reversed()?-s:s));if(f._dirty){for(g=f.parent;c;)p=c._prev,c._dirty&&c.totalDuration(),_=c._start,_>d&&f._sort&&c._ts&&!f._lock?(f._lock=1,ra(f,c,_-c._delay,1)._lock=0):d=_,_<0&&c._ts&&(u-=_,(!g&&!f._dp||g&&g.smoothChildTiming)&&(f._start+=Ye(_/f._ts),f._time-=_,f._tTime-=_),f.shiftChildren(-_,!1,-1/0),d=0),c._end>u&&c._ts&&(u=c._end),c=p;Do(f,f===je&&f._time>u?f._time:u,1,1),f._dirty=0}return f._tDur},t.updateRoot=function(s){if(je._ts&&(nS(je,Qc(s,je)),tS=Si.frame),Si.frame>=tv){tv+=Ei.autoSleep||120;var u=je._first;if((!u||!u._ts)&&Ei.autoSleep&&Si._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Si.sleep()}}},t})($l);bi(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var MT=function(t,n,a,s,u,f,c){var d=new ni(this._pt,t,n,0,1,DS,null,u),p=0,_=0,g,v,y,T,M,S,x,w;for(d.b=a,d.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Ql(s)),f&&(w=[a,s],f(w,t,n),a=w[0],s=w[1]),v=a.match(Ad)||[];g=Ad.exec(s);)T=g[0],M=s.substring(p,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),T!==v[_++]&&(S=parseFloat(v[_-1])||0,d._pt={_next:d._pt,p:M||_===1?M:",",s:S,c:T.charAt(1)==="="?Mo(S,T)-S:parseFloat(T)-S,m:y&&y<4?Math.round:0},p=Ad.lastIndex);return d.c=p<s.length?s.substring(p,s.length):"",d.fp=c,(Kx.test(s)||x)&&(d.e=0),this._pt=d,d},qp=function(t,n,a,s,u,f,c,d,p,_){$e(s)&&(s=s(u||0,t,f));var g=t[n],v=a!=="get"?a:$e(g)?p?t[n.indexOf("set")||!$e(t["get"+n.substr(3)])?n:"get"+n.substr(3)](p):t[n]():g,y=$e(g)?p?RT:CS:jp,T;if(En(s)&&(~s.indexOf("random(")&&(s=Ql(s)),s.charAt(1)==="="&&(T=Mo(v,s)+(Bn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||Sp)return!isNaN(v*s)&&s!==""?(T=new ni(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?wT:wS,0,y),p&&(T.fp=p),c&&T.modifier(c,this,t),this._pt=T):(!g&&!(n in t)&&Gp(n,s),MT.call(this,t,n,v,s,y,d||Ei.stringFilter,p))},ET=function(t,n,a,s,u){if($e(t)&&(t=ql(t,u,n,a,s)),!ca(t)||t.style&&t.nodeType||Fn(t)||jx(t))return En(t)?ql(t,u,n,a,s):t;var f={},c;for(c in t)f[c]=ql(t[c],u,n,a,s);return f},bS=function(t,n,a,s,u,f){var c,d,p,_;if(vi[t]&&(c=new vi[t]).init(u,c.rawVars?n[t]:ET(n[t],s,u,f,a),a,s,f)!==!1&&(a._pt=d=new ni(a._pt,u,t,0,1,c.render,c,0,c.priority),a!==xo))for(p=a._ptLookup[a._targets.indexOf(u)],_=c._props.length;_--;)p[c._props[_]]=d;return c},Sr,Sp,Yp=function o(t,n,a){var s=t.vars,u=s.ease,f=s.startAt,c=s.immediateRender,d=s.lazy,p=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=t._dur,M=t._startAt,S=t._targets,x=t.parent,w=x&&x.data==="nested"?x.vars.targets:S,A=t._overwrite==="auto"&&!Bp,L=t.timeline,F,O,D,X,b,U,J,$,ht,k,Z,z,H;if(L&&(!v||!u)&&(u="none"),t._ease=ds(u,Ro.ease),t._yEase=g?yS(ds(g===!0?u:g,Ro.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!L&&!!s.runBackwards,!L||v&&!s.stagger){if($=S[0]?fs(S[0]).harness:0,z=$&&s[$.prop],F=Kc(s,Vp),M&&(M._zTime<0&&M.progress(1),n<0&&_&&c&&!y?M.render(-1,!0):M.revert(_&&T?Xc:QE),M._lazy=0),f){if(Lr(t._startAt=pn.set(S,bi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ti(d),startAt:null,delay:0,onUpdate:p&&function(){return yi(t,"onUpdate")},stagger:0},f))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Ln||!c&&!y)&&t._startAt.revert(Xc),c&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!M){if(n&&(c=!1),D=bi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&ti(d),immediateRender:c,stagger:0,parent:x},F),z&&(D[$.prop]=z),Lr(t._startAt=pn.set(S,D)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Ln?t._startAt.revert(Xc):t._startAt.render(-1,!0)),t._zTime=n,!c)o(t._startAt,Fe,Fe);else if(!n)return}for(t._pt=t._ptCache=0,d=T&&ti(d)||d&&!T,O=0;O<S.length;O++){if(b=S[O],J=b._gsap||Xp(S)[O]._gsap,t._ptLookup[O]=k={},pp[J.id]&&Ar.length&&Zc(),Z=w===S?O:w.indexOf(b),$&&(ht=new $).init(b,z||F,t,Z,w)!==!1&&(t._pt=X=new ni(t._pt,b,ht.name,0,1,ht.render,ht,0,ht.priority),ht._props.forEach(function(K){k[K]=X}),ht.priority&&(U=1)),!$||z)for(D in F)vi[D]&&(ht=bS(D,F,t,Z,b,w))?ht.priority&&(U=1):k[D]=X=qp.call(t,b,D,"get",F[D],Z,w,0,s.stringFilter);t._op&&t._op[O]&&t.kill(b,t._op[O]),A&&t._pt&&(Sr=t,je.killTweensOf(b,k,t.globalTime(n)),H=!t.parent,Sr=0),t._pt&&d&&(pp[J.id]=1)}U&&LS(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!H,v&&n<=0&&L.render(Ii,!0,!0)},TT=function(t,n,a,s,u,f,c,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!p)for(p=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Sp=1,t.vars[n]="+=0",Yp(t,c),Sp=0,d?Zl(n+" not eligible for reset"):1;p.push(_)}for(y=p.length;y--;)g=p[y],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+f*_.c,_.c=a-_.s,g.e&&(g.e=an(a)+Bn(g.e)),g.b&&(g.b=_.s+Bn(g.b))},bT=function(t,n){var a=t[0]?fs(t[0]).harness:0,s=a&&a.aliases,u,f,c,d;if(!s)return n;u=Co({},n);for(f in s)if(f in u)for(d=s[f].split(","),c=d.length;c--;)u[d[c]]=u[f];return u},AT=function(t,n,a,s){var u=n.ease||s||"power1.inOut",f,c;if(Fn(n))c=a[t]||(a[t]=[]),n.forEach(function(d,p){return c.push({t:p/(n.length-1)*100,v:d,e:u})});else for(f in n)c=a[f]||(a[f]=[]),f==="ease"||c.push({t:parseFloat(t),v:n[f],e:u})},ql=function(t,n,a,s,u){return $e(t)?t.call(n,a,s,u):En(t)&&~t.indexOf("random(")?Ql(t):t},AS=kp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",RS={};ei(AS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return RS[o]=1});var pn=(function(o){qx(t,o);function t(a,s,u,f){var c;typeof s=="number"&&(u.duration=s,s=u,u=null),c=o.call(this,f?s:Xl(s))||this;var d=c.vars,p=d.duration,_=d.delay,g=d.immediateRender,v=d.stagger,y=d.overwrite,T=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,w=s.parent||je,A=(Fn(a)||jx(a)?Ba(a[0]):"length"in s)?[a]:Hi(a),L,F,O,D,X,b,U,J;if(c._targets=A.length?Xp(A):Zl("GSAP target "+a+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,T||v||Sc(p)||Sc(_)){if(s=c.vars,L=c.timeline=new Xn({data:"nested",defaults:M||{},targets:w&&w.data==="nested"?w.vars.targets:A}),L.kill(),L.parent=L._dp=Oa(c),L._start=0,v||Sc(p)||Sc(_)){if(D=A.length,U=v&&fS(v),ca(v))for(X in v)~AS.indexOf(X)&&(J||(J={}),J[X]=v[X]);for(F=0;F<D;F++)O=Kc(s,RS),O.stagger=0,x&&(O.yoyoEase=x),J&&Co(O,J),b=A[F],O.duration=+ql(p,Oa(c),F,b,A),O.delay=(+ql(_,Oa(c),F,b,A)||0)-c._delay,!v&&D===1&&O.delay&&(c._delay=_=O.delay,c._start+=_,O.delay=0),L.to(b,O,U?U(F,b,A):0),L._ease=ge.none;L.duration()?p=_=0:c.timeline=0}else if(T){Xl(bi(L.vars.defaults,{ease:"none"})),L._ease=ds(T.ease||s.ease||"none");var $=0,ht,k,Z;if(Fn(T))T.forEach(function(z){return L.to(A,z,">")}),L.duration();else{O={};for(X in T)X==="ease"||X==="easeEach"||AT(X,T[X],O,T.easeEach);for(X in O)for(ht=O[X].sort(function(z,H){return z.t-H.t}),$=0,F=0;F<ht.length;F++)k=ht[F],Z={ease:k.e,duration:(k.t-(F?ht[F-1].t:0))/100*p},Z[X]=k.v,L.to(A,Z,$),$+=Z.duration;L.duration()<p&&L.to({},{duration:p-L.duration()})}}p||c.duration(p=L.duration())}else c.timeline=0;return y===!0&&!Bp&&(Sr=Oa(c),je.killTweensOf(A),Sr=0),ra(w,Oa(c),u),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(g||!p&&!T&&c._start===Ye(w._time)&&ti(g)&&iT(Oa(c))&&w.data!=="nested")&&(c._tTime=-Fe,c.render(Math.max(0,-_)||0)),S&&oS(Oa(c),S),c}var n=t.prototype;return n.render=function(s,u,f){var c=this._time,d=this._tDur,p=this._dur,_=s<0,g=s>d-Fe&&!_?d:s<Fe?0:s,v,y,T,M,S,x,w,A,L;if(!p)rT(this,s,u,f);else if(g!==this._tTime||!s||f||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,A=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,u,f);if(v=Ye(g%M),g===d?(T=this._repeat,v=p):(S=Ye(g/M),T=~~S,T&&T===S?(v=p,T--):v>p&&(v=p)),x=this._yoyo&&T&1,x&&(L=this._yEase,v=p-v),S=wo(this._tTime,M),v===c&&!f&&this._initted&&T===S)return this._tTime=g,this;T!==S&&(A&&this._yEase&&MS(A,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=f=1,this.render(Ye(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(lS(this,_?s:v,f,u,g))return this._tTime=0,this;if(c!==this._time&&!(f&&this.vars.repeatRefresh&&T!==S))return this;if(p!==this._dur)return this.render(s,u,f)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(L||this._ease)(v/p),this._from&&(this.ratio=w=1-w),!c&&g&&!u&&!S&&(yi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(w,y.d),y=y._next;A&&A.render(s<0?s:A._dur*A._ease(v/this._dur),u,f)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&mp(this,s,u,f),yi(this,"onUpdate")),this._repeat&&T!==S&&this.vars.onRepeat&&!u&&this.parent&&yi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&mp(this,s,!0,!0),(s||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Lr(this,1),!u&&!(_&&!c)&&(g||c||x)&&(yi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,f,c,d){Jl||Si.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Yp(this,p),_=this._ease(p/this._dur),TT(this,s,u,f,c,_,p,d)?this.resetTo(s,u,f,c,1):(uf(this,0),this.parent||rS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?Gl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var f=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Sr&&Sr.vars.overwrite!==!0)._first||Gl(this),this.parent&&f!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/f,0,1),this}var c=this._targets,d=s?Hi(s):c,p=this._ptLookup,_=this._pt,g,v,y,T,M,S,x;if((!u||u==="all")&&eT(c,d))return u==="all"&&(this._pt=0),Gl(this);for(g=this._op=this._op||[],u!=="all"&&(En(u)&&(M={},ei(u,function(w){return M[w]=1}),u=M),u=bT(c,u)),x=c.length;x--;)if(~d.indexOf(c[x])){v=p[x],u==="all"?(g[x]=u,T=v,y={}):(y=g[x]=g[x]||{},T=u);for(M in T)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&of(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&Gl(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return Wl(1,arguments)},t.delayedCall=function(s,u,f,c){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:f,onReverseCompleteParams:f,callbackScope:c})},t.fromTo=function(s,u,f){return Wl(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,f){return je.killTweensOf(s,u,f)},t})($l);bi(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(o){pn[o]=function(){var t=new Xn,n=gp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var jp=function(t,n,a){return t[n]=a},CS=function(t,n,a){return t[n](a)},RT=function(t,n,a,s){return t[n](s.fp,a)},CT=function(t,n,a){return t.setAttribute(n,a)},Zp=function(t,n){return $e(t[n])?CS:Fp(t[n])&&t.setAttribute?CT:jp},wS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},wT=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},DS=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Kp=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},DT=function(t,n,a,s){for(var u=this._pt,f;u;)f=u._next,u.p===s&&u.modifier(t,n,a),u=f},LT=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?of(this,n,"_pt"):n.dep||(a=1),n=s;return!a},UT=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},LS=function(t){for(var n=t._pt,a,s,u,f;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:f)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:f=n,n=a}t._pt=u},ni=(function(){function o(n,a,s,u,f,c,d,p,_){this.t=a,this.s=u,this.c=f,this.p=s,this.r=c||wS,this.d=d||this,this.set=p||jp,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=UT,this.m=a,this.mt=u,this.tween=s},o})();ei(kp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Vp[o]=1});Ti.TweenMax=Ti.TweenLite=pn;Ti.TimelineLite=Ti.TimelineMax=Xn;je=new Xn({sortChildren:!1,defaults:Ro,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=SS;var ps=[],qc={},NT=[],sv=0,OT=0,Ld=function(t){return(qc[t]||NT).map(function(n){return n()})},yp=function(){var t=Date.now(),n=[];t-sv>2&&(Ld("matchMediaInit"),ps.forEach(function(a){var s=a.queries,u=a.conditions,f,c,d,p;for(c in s)f=ia.matchMedia(s[c]).matches,f&&(d=1),f!==u[c]&&(u[c]=f,p=1);p&&(a.revert(),d&&n.push(a))}),Ld("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),sv=t,Ld("matchMedia"))},US=(function(){function o(n,a){this.selector=a&&vp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=OT++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){$e(a)&&(u=s,s=a,a=$e);var f=this,c=function(){var p=qe,_=f.selector,g;return p&&p!==f&&p.data.push(f),u&&(f.selector=vp(u)),qe=f,g=s.apply(f,arguments),$e(g)&&f._r.push(g),qe=p,f.selector=_,f.isReverted=!1,g};return f.last=c,a===$e?c(f,function(d){return f.add(null,d)}):a?f[a]=c:c},t.ignore=function(a){var s=qe;qe=null,a(this),qe=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof pn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var c=u.getTweens(),d=u.data.length,p;d--;)p=u.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(_){return c.splice(c.indexOf(_),1)}));for(c.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),d=u.data.length;d--;)p=u.data[d],p instanceof Xn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof pn)&&p.revert&&p.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var f=ps.length;f--;)ps[f].id===this.id&&ps.splice(f,1)},t.revert=function(a){this.kill(a||{})},o})(),PT=(function(){function o(n){this.contexts=[],this.scope=n,qe&&qe.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){ca(a)||(a={matches:a});var f=new US(0,u||this.scope),c=f.conditions={},d,p,_;qe&&!f.selector&&(f.selector=qe.selector),this.contexts.push(f),s=f.add("onMatch",s),f.queries=a;for(p in a)p==="all"?_=1:(d=ia.matchMedia(a[p]),d&&(ps.indexOf(f)<0&&ps.push(f),(c[p]=d.matches)&&(_=1),d.addListener?d.addListener(yp):d.addEventListener("change",yp)));return _&&s(f,function(g){return f.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),Jc={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return gS(s)})},timeline:function(t){return new Xn(t)},getTweensOf:function(t,n){return je.getTweensOf(t,n)},getProperty:function(t,n,a,s){En(t)&&(t=Hi(t)[0]);var u=fs(t||{}).get,f=a?aS:iS;return a==="native"&&(a=""),t&&(n?f((vi[n]&&vi[n].get||u)(t,n,a,s)):function(c,d,p){return f((vi[c]&&vi[c].get||u)(t,c,d,p))})},quickSetter:function(t,n,a){if(t=Hi(t),t.length>1){var s=t.map(function(_){return oi.quickSetter(_,n,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var f=vi[n],c=fs(t),d=c.harness&&(c.harness.aliases||{})[n]||n,p=f?function(_){var g=new f;xo._pt=0,g.init(t,a?_+a:_,xo,0,[t]),g.render(1,g),xo._pt&&Kp(1,xo)}:c.set(t,d);return f?p:function(_){return p(t,d,a?_+a:_,c,1)}},quickTo:function(t,n,a){var s,u=oi.to(t,bi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),f=function(d,p,_){return u.resetTo(n,d,p,_)};return f.tween=u,f},isTweening:function(t){return je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ds(t.ease,Ro.ease)),ev(Ro,t||{})},config:function(t){return ev(Ei,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,f=t.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!vi[c]&&!Ti[c]&&Zl(n+" effect requires "+c+" plugin.")}),Rd[n]=function(c,d,p){return a(Hi(c),bi(d||{},u),p)},f&&(Xn.prototype[n]=function(c,d,p){return this.add(Rd[n](c,ca(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,n){ge[t]=ds(n)},parseEase:function(t,n){return arguments.length?ds(t,n):ge},getById:function(t){return je.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Xn(t),s,u;for(a.smoothChildTiming=ti(t.smoothChildTiming),je.remove(a),a._dp=0,a._time=a._tTime=je._time,s=je._first;s;)u=s._next,(n||!(!s._dur&&s instanceof pn&&s.vars.onComplete===s._targets[0]))&&ra(a,s,s._start-s._delay),s=u;return ra(je,a,0),a},context:function(t,n){return t?new US(t,n):qe},matchMedia:function(t){return new PT(t)},matchMediaRefresh:function(){return ps.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||yp()},addEventListener:function(t,n){var a=qc[t]||(qc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=qc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:dT,wrapYoyo:pT,distribute:fS,random:dS,snap:hS,normalize:hT,getUnit:Bn,clamp:lT,splitColor:vS,toArray:Hi,selector:vp,mapRange:mS,pipe:cT,unitize:fT,interpolate:mT,shuffle:cS},install:Jx,effects:Rd,ticker:Si,updateRoot:Xn.updateRoot,plugins:vi,globalTimeline:je,core:{PropTween:ni,globals:$x,Tween:pn,Timeline:Xn,Animation:$l,getCache:fs,_removeLinkedListItem:of,reverting:function(){return Ln},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return Bp=t}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Jc[o]=pn[o]});Si.add(Xn.updateRoot);xo=Jc.to({},{duration:0});var zT=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},BT=function(t,n){var a=t._targets,s,u,f;for(s in n)for(u=a.length;u--;)f=t._ptLookup[u][s],f&&(f=f.d)&&(f._pt&&(f=zT(f,s)),f&&f.modifier&&f.modifier(n[s],t,a[u],s))},Ud=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,f){f._onInit=function(c){var d,p;if(En(u)&&(d={},ei(u,function(_){return d[_]=1}),u=d),n){d={};for(p in u)d[p]=n(u[p]);u=d}BT(c,u)}}}},oi=Jc.registerPlugin({name:"attr",init:function(t,n,a,s,u){var f,c,d;this.tween=a;for(f in n)d=t.getAttribute(f)||"",c=this.add(t,"setAttribute",(d||0)+"",n[f],s,u,0,0,f),c.op=f,c.b=d,this._props.push(f)},render:function(t,n){for(var a=n._pt;a;)Ln?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Ud("roundProps",xp),Ud("modifiers"),Ud("snap",hS))||Jc;pn.version=Xn.version=oi.version="3.14.2";Qx=1;Ip()&&Lo();ge.Power0;ge.Power1;ge.Power2;ge.Power3;ge.Power4;ge.Linear;ge.Quad;ge.Cubic;ge.Quart;ge.Quint;ge.Strong;ge.Elastic;ge.Back;ge.SteppedEase;ge.Bounce;ge.Sine;ge.Expo;ge.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ov,yr,Eo,Qp,cs,lv,Jp,FT=function(){return typeof window<"u"},Fa={},rs=180/Math.PI,To=Math.PI/180,to=Math.atan2,uv=1e8,$p=/([A-Z])/g,IT=/(left|right|width|margin|padding|x)/i,HT=/[\s,\(]\S/,oa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mp=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},GT=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},VT=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},kT=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},XT=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},NS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},OS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},WT=function(t,n,a){return t.style[n]=a},qT=function(t,n,a){return t.style.setProperty(n,a)},YT=function(t,n,a){return t._gsap[n]=a},jT=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},ZT=function(t,n,a,s,u){var f=t._gsap;f.scaleX=f.scaleY=a,f.renderTransform(u,f)},KT=function(t,n,a,s,u){var f=t._gsap;f[n]=a,f.renderTransform(u,f)},Ze="transform",ii=Ze+"Origin",QT=function o(t,n){var a=this,s=this.target,u=s.style,f=s._gsap;if(t in Fa&&u){if(this.tfm=this.tfm||{},t!=="transform")t=oa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(c){return a.tfm[c]=Pa(s,c)}):this.tfm[t]=f.x?f[t]:Pa(s,t),t===ii&&(this.tfm.zOrigin=f.zOrigin);else return oa.transform.split(",").forEach(function(c){return o.call(a,c,n)});if(this.props.indexOf(Ze)>=0)return;f.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ii,n,"")),t=Ze}(u||n)&&this.props.push(t,n,u[t])},PS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},JT=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,f;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace($p,"-$1").toLowerCase());if(this.tfm){for(f in this.tfm)s[f]=this.tfm[f];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=Jp(),(!u||!u.isStart)&&!a[Ze]&&(PS(a),s.zOrigin&&a[ii]&&(a[ii]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},zS=function(t,n){var a={target:t,props:[],revert:JT,save:QT};return t._gsap||oi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},BS,Ep=function(t,n){var a=yr.createElementNS?yr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):yr.createElement(t);return a&&a.style?a:yr.createElement(t)},Mi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace($p,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Uo(n)||n,1)||""},cv="O,Moz,ms,Ms,Webkit".split(","),Uo=function(t,n,a){var s=n||cs,u=s.style,f=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);f--&&!(cv[f]+t in u););return f<0?null:(f===3?"ms":f>=0?cv[f]:"")+t},Tp=function(){FT()&&window.document&&(ov=window,yr=ov.document,Eo=yr.documentElement,cs=Ep("div")||{style:{}},Ep("div"),Ze=Uo(Ze),ii=Ze+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",BS=!!Uo("perspective"),Jp=oi.core.reverting,Qp=1)},fv=function(t){var n=t.ownerSVGElement,a=Ep("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Eo.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Eo.removeChild(a),u},hv=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},FS=function(t){var n,a;try{n=t.getBBox()}catch{n=fv(t),a=1}return n&&(n.width||n.height)||a||(n=fv(t)),n&&!n.width&&!n.x&&!n.y?{x:+hv(t,["x","cx","x1"])||0,y:+hv(t,["y","cy","y1"])||0,width:0,height:0}:n},IS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&FS(t))},Ur=function(t,n){if(n){var a=t.style,s;n in Fa&&n!==ii&&(n=Ze),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace($p,"-$1").toLowerCase())):a.removeAttribute(n)}},Mr=function(t,n,a,s,u,f){var c=new ni(t._pt,n,a,0,1,f?OS:NS);return t._pt=c,c.b=s,c.e=u,t._props.push(a),c},dv={deg:1,rad:1,turn:1},$T={grid:1,flex:1},Nr=function o(t,n,a,s){var u=parseFloat(a)||0,f=(a+"").trim().substr((u+"").length)||"px",c=cs.style,d=IT.test(n),p=t.tagName.toLowerCase()==="svg",_=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=s==="px",y=s==="%",T,M,S,x;if(s===f||!u||dv[s]||dv[f])return u;if(f!=="px"&&!v&&(u=o(t,n,a,"px")),x=t.getCTM&&IS(t),(y||f==="%")&&(Fa[n]||~n.indexOf("adius")))return T=x?t.getBBox()[d?"width":"height"]:t[_],an(y?u/T*g:u/100*T);if(c[d?"width":"height"]=g+(v?f:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===yr||!M.appendChild)&&(M=yr.body),S=M._gsap,S&&y&&S.width&&d&&S.time===Si.time&&!S.uncache)return an(u/S.width*g);if(y&&(n==="height"||n==="width")){var w=t.style[n];t.style[n]=g+s,T=t[_],w?t.style[n]=w:Ur(t,n)}else(y||f==="%")&&!$T[Mi(M,"display")]&&(c.position=Mi(t,"position")),M===t&&(c.position="static"),M.appendChild(cs),T=cs[_],M.removeChild(cs),c.position="absolute";return d&&y&&(S=fs(M),S.time=Si.time,S.width=M[_]),an(v?T*u/g:T&&u?g/T*u:0)},Pa=function(t,n,a,s){var u;return Qp||Tp(),n in oa&&n!=="transform"&&(n=oa[n],~n.indexOf(",")&&(n=n.split(",")[0])),Fa[n]&&n!=="transform"?(u=eu(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:tf(Mi(t,ii))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=$c[n]&&$c[n](t,n,a)||Mi(t,n)||eS(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Nr(t,n,u,a)+a:u},t1=function(t,n,a,s){if(!a||a==="none"){var u=Uo(n,t,1),f=u&&Mi(t,u,1);f&&f!==a?(n=u,a=f):n==="borderColor"&&(a=Mi(t,"borderTopColor"))}var c=new ni(this._pt,t.style,n,0,1,DS),d=0,p=0,_,g,v,y,T,M,S,x,w,A,L,F;if(c.b=a,c.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Mi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=Mi(t,n)||s,M?t.style[n]=M:Ur(t,n)),_=[a,s],SS(_),a=_[0],s=_[1],v=a.match(vo)||[],F=s.match(vo)||[],F.length){for(;g=vo.exec(s);)S=g[0],w=s.substring(d,g.index),T?T=(T+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(T=1),S!==(M=v[p++]||"")&&(y=parseFloat(M)||0,L=M.substr((y+"").length),S.charAt(1)==="="&&(S=Mo(y,S)+L),x=parseFloat(S),A=S.substr((x+"").length),d=vo.lastIndex-A.length,A||(A=A||Ei.units[n]||L,d===s.length&&(s+=A,c.e+=A)),L!==A&&(y=Nr(t,n,M,A)||0),c._pt={_next:c._pt,p:w||p===1?w:",",s:y,c:x-y,m:T&&T<4||n==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=n==="display"&&s==="none"?OS:NS;return Kx.test(s)&&(c.e=0),this._pt=c,c},pv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e1=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=pv[a]||a,n[1]=pv[s]||s,n.join(" ")},n1=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,f=a._gsap,c,d,p;if(u==="all"||u===!0)s.cssText="",d=1;else for(u=u.split(","),p=u.length;--p>-1;)c=u[p],Fa[c]&&(d=1,c=c==="transformOrigin"?ii:Ze),Ur(a,c);d&&(Ur(a,Ze),f&&(f.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",eu(a,1),f.uncache=1,PS(s)))}},$c={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var f=t._pt=new ni(t._pt,n,a,0,0,n1);return f.u=s,f.pr=-10,f.tween=u,t._props.push(a),1}}},tu=[1,0,0,1,0,0],HS={},GS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},mv=function(t){var n=Mi(t,Ze);return GS(n)?tu:n.substr(7).match(Zx).map(an)},tm=function(t,n){var a=t._gsap||fs(t),s=t.style,u=mv(t),f,c,d,p;return a.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,u=[d.a,d.b,d.c,d.d,d.e,d.f],u.join(",")==="1,0,0,1,0,0"?tu:u):(u===tu&&!t.offsetParent&&t!==Eo&&!a.svg&&(d=s.display,s.display="block",f=t.parentNode,(!f||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,c=t.nextElementSibling,Eo.appendChild(t)),u=mv(t),d?s.display=d:Ur(t,"display"),p&&(c?f.insertBefore(t,c):f?f.appendChild(t):Eo.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},bp=function(t,n,a,s,u,f){var c=t._gsap,d=u||tm(t,!0),p=c.xOrigin||0,_=c.yOrigin||0,g=c.xOffset||0,v=c.yOffset||0,y=d[0],T=d[1],M=d[2],S=d[3],x=d[4],w=d[5],A=n.split(" "),L=parseFloat(A[0])||0,F=parseFloat(A[1])||0,O,D,X,b;a?d!==tu&&(D=y*S-T*M)&&(X=L*(S/D)+F*(-M/D)+(M*w-S*x)/D,b=L*(-T/D)+F*(y/D)-(y*w-T*x)/D,L=X,F=b):(O=FS(t),L=O.x+(~A[0].indexOf("%")?L/100*O.width:L),F=O.y+(~(A[1]||A[0]).indexOf("%")?F/100*O.height:F)),s||s!==!1&&c.smooth?(x=L-p,w=F-_,c.xOffset=g+(x*y+w*M)-x,c.yOffset=v+(x*T+w*S)-w):c.xOffset=c.yOffset=0,c.xOrigin=L,c.yOrigin=F,c.smooth=!!s,c.origin=n,c.originIsAbsolute=!!a,t.style[ii]="0px 0px",f&&(Mr(f,c,"xOrigin",p,L),Mr(f,c,"yOrigin",_,F),Mr(f,c,"xOffset",g,c.xOffset),Mr(f,c,"yOffset",v,c.yOffset)),t.setAttribute("data-svg-origin",L+" "+F)},eu=function(t,n){var a=t._gsap||new TS(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,f="px",c="deg",d=getComputedStyle(t),p=Mi(t,ii)||"0",_,g,v,y,T,M,S,x,w,A,L,F,O,D,X,b,U,J,$,ht,k,Z,z,H,K,ot,ft,P,V,G,Y,dt;return _=g=v=M=S=x=w=A=L=0,y=T=1,a.svg=!!(t.getCTM&&IS(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Ze]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Ze]!=="none"?d[Ze]:"")),s.scale=s.rotate=s.translate="none"),D=tm(t,a.svg),a.svg&&(a.uncache?(K=t.getBBox(),p=a.xOrigin-K.x+"px "+(a.yOrigin-K.y)+"px",H=""):H=!n&&t.getAttribute("data-svg-origin"),bp(t,H||p,!!H||a.originIsAbsolute,a.smooth!==!1,D)),F=a.xOrigin||0,O=a.yOrigin||0,D!==tu&&(J=D[0],$=D[1],ht=D[2],k=D[3],_=Z=D[4],g=z=D[5],D.length===6?(y=Math.sqrt(J*J+$*$),T=Math.sqrt(k*k+ht*ht),M=J||$?to($,J)*rs:0,w=ht||k?to(ht,k)*rs+M:0,w&&(T*=Math.abs(Math.cos(w*To))),a.svg&&(_-=F-(F*J+O*ht),g-=O-(F*$+O*k))):(dt=D[6],G=D[7],ft=D[8],P=D[9],V=D[10],Y=D[11],_=D[12],g=D[13],v=D[14],X=to(dt,V),S=X*rs,X&&(b=Math.cos(-X),U=Math.sin(-X),H=Z*b+ft*U,K=z*b+P*U,ot=dt*b+V*U,ft=Z*-U+ft*b,P=z*-U+P*b,V=dt*-U+V*b,Y=G*-U+Y*b,Z=H,z=K,dt=ot),X=to(-ht,V),x=X*rs,X&&(b=Math.cos(-X),U=Math.sin(-X),H=J*b-ft*U,K=$*b-P*U,ot=ht*b-V*U,Y=k*U+Y*b,J=H,$=K,ht=ot),X=to($,J),M=X*rs,X&&(b=Math.cos(X),U=Math.sin(X),H=J*b+$*U,K=Z*b+z*U,$=$*b-J*U,z=z*b-Z*U,J=H,Z=K),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=an(Math.sqrt(J*J+$*$+ht*ht)),T=an(Math.sqrt(z*z+dt*dt)),X=to(Z,z),w=Math.abs(X)>2e-4?X*rs:0,L=Y?1/(Y<0?-Y:Y):0),a.svg&&(H=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!GS(Mi(t,Ze)),H&&t.setAttribute("transform",H))),Math.abs(w)>90&&Math.abs(w)<270&&(u?(y*=-1,w+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,w+=w<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+f,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+f,a.z=v+f,a.scaleX=an(y),a.scaleY=an(T),a.rotation=an(M)+c,a.rotationX=an(S)+c,a.rotationY=an(x)+c,a.skewX=w+c,a.skewY=A+c,a.transformPerspective=L+f,(a.zOrigin=parseFloat(p.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ii]=tf(p)),a.xOffset=a.yOffset=0,a.force3D=Ei.force3D,a.renderTransform=a.svg?a1:BS?VS:i1,a.uncache=0,a},tf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Nd=function(t,n,a){var s=Bn(n);return an(parseFloat(n)+parseFloat(Nr(t,"x",a+"px",s)))+s},i1=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,VS(t,n)},$r="0deg",Pl="0px",ts=") ",VS=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,f=a.x,c=a.y,d=a.z,p=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,T=a.scaleX,M=a.scaleY,S=a.transformPerspective,x=a.force3D,w=a.target,A=a.zOrigin,L="",F=x==="auto"&&t&&t!==1||x===!0;if(A&&(g!==$r||_!==$r)){var O=parseFloat(_)*To,D=Math.sin(O),X=Math.cos(O),b;O=parseFloat(g)*To,b=Math.cos(O),f=Nd(w,f,D*b*-A),c=Nd(w,c,-Math.sin(O)*-A),d=Nd(w,d,X*b*-A+A)}S!==Pl&&(L+="perspective("+S+ts),(s||u)&&(L+="translate("+s+"%, "+u+"%) "),(F||f!==Pl||c!==Pl||d!==Pl)&&(L+=d!==Pl||F?"translate3d("+f+", "+c+", "+d+") ":"translate("+f+", "+c+ts),p!==$r&&(L+="rotate("+p+ts),_!==$r&&(L+="rotateY("+_+ts),g!==$r&&(L+="rotateX("+g+ts),(v!==$r||y!==$r)&&(L+="skew("+v+", "+y+ts),(T!==1||M!==1)&&(L+="scale("+T+", "+M+ts),w.style[Ze]=L||"translate(0, 0)"},a1=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,f=a.x,c=a.y,d=a.rotation,p=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,T=a.xOrigin,M=a.yOrigin,S=a.xOffset,x=a.yOffset,w=a.forceCSS,A=parseFloat(f),L=parseFloat(c),F,O,D,X,b;d=parseFloat(d),p=parseFloat(p),_=parseFloat(_),_&&(_=parseFloat(_),p+=_,d+=_),d||p?(d*=To,p*=To,F=Math.cos(d)*g,O=Math.sin(d)*g,D=Math.sin(d-p)*-v,X=Math.cos(d-p)*v,p&&(_*=To,b=Math.tan(p-_),b=Math.sqrt(1+b*b),D*=b,X*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),F*=b,O*=b)),F=an(F),O=an(O),D=an(D),X=an(X)):(F=g,X=v,O=D=0),(A&&!~(f+"").indexOf("px")||L&&!~(c+"").indexOf("px"))&&(A=Nr(y,"x",f,"px"),L=Nr(y,"y",c,"px")),(T||M||S||x)&&(A=an(A+T-(T*F+M*D)+S),L=an(L+M-(T*O+M*X)+x)),(s||u)&&(b=y.getBBox(),A=an(A+s/100*b.width),L=an(L+u/100*b.height)),b="matrix("+F+","+O+","+D+","+X+","+A+","+L+")",y.setAttribute("transform",b),w&&(y.style[Ze]=b)},r1=function(t,n,a,s,u){var f=360,c=En(u),d=parseFloat(u)*(c&&~u.indexOf("rad")?rs:1),p=d-s,_=s+p+"deg",g,v;return c&&(g=u.split("_")[1],g==="short"&&(p%=f,p!==p%(f/2)&&(p+=p<0?f:-f)),g==="cw"&&p<0?p=(p+f*uv)%f-~~(p/f)*f:g==="ccw"&&p>0&&(p=(p-f*uv)%f-~~(p/f)*f)),t._pt=v=new ni(t._pt,n,a,s,p,GT),v.e=_,v.u="deg",t._props.push(a),v},_v=function(t,n){for(var a in n)t[a]=n[a];return t},s1=function(t,n,a){var s=_v({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",f=a.style,c,d,p,_,g,v,y,T;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),f[Ze]=n,c=eu(a,1),Ur(a,Ze),a.setAttribute("transform",p)):(p=getComputedStyle(a)[Ze],f[Ze]=n,c=eu(a,1),f[Ze]=p);for(d in Fa)p=s[d],_=c[d],p!==_&&u.indexOf(d)<0&&(y=Bn(p),T=Bn(_),g=y!==T?Nr(a,d,p,T):parseFloat(p),v=parseFloat(_),t._pt=new ni(t._pt,c,d,g,v-g,Mp),t._pt.u=T||0,t._props.push(d));_v(c,s)};ei("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",f=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(c){return t<2?o+c:"border"+c+o});$c[t>1?"border"+o:o]=function(c,d,p,_,g){var v,y;if(arguments.length<4)return v=f.map(function(T){return Pa(c,T,p)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},f.forEach(function(T,M){return y[T]=v[M]=v[M]||v[(M-1)/2|0]}),c.init(d,y,g)}});var kS={name:"css",register:Tp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var f=this._props,c=t.style,d=a.vars.startAt,p,_,g,v,y,T,M,S,x,w,A,L,F,O,D,X,b;Qp||Tp(),this.styles=this.styles||zS(t),X=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(vi[M]&&bS(M,n,a,s,t,u)))){if(y=typeof _,T=$c[M],y==="function"&&(_=_.call(a,s,t,u),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=Ql(_)),T)T(this,t,M,_,a)&&(D=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Rr.lastIndex=0,Rr.test(p)||(S=Bn(p),x=Bn(_),x?S!==x&&(p=Nr(t,M,p,x)+x):S&&(_+=S)),this.add(c,"setProperty",p,_,s,u,0,0,M),f.push(M),X.push(M,0,c[M]);else if(y!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(a,s,t,u):d[M],En(p)&&~p.indexOf("random(")&&(p=Ql(p)),Bn(p+"")||p==="auto"||(p+=Ei.units[M]||Bn(Pa(t,M))||""),(p+"").charAt(1)==="="&&(p=Pa(t,M))):p=Pa(t,M),v=parseFloat(p),w=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),w&&(_=_.substr(2)),g=parseFloat(_),M in oa&&(M==="autoAlpha"&&(v===1&&Pa(t,"visibility")==="hidden"&&g&&(v=0),X.push("visibility",0,c.visibility),Mr(this,c,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=oa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),A=M in Fa,A){if(this.styles.save(M),b=_,y==="string"&&_.substring(0,6)==="var(--"){if(_=Mi(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var U=t.style.perspective;t.style.perspective=_,_=Mi(t,"perspective"),U?t.style.perspective=U:Ur(t,"perspective")}g=parseFloat(_)}if(L||(F=t._gsap,F.renderTransform&&!n.parseTransform||eu(t,n.parseTransform),O=n.smoothOrigin!==!1&&F.smooth,L=this._pt=new ni(this._pt,c,Ze,0,1,F.renderTransform,F,0,-1),L.dep=1),M==="scale")this._pt=new ni(this._pt,F,"scaleY",F.scaleY,(w?Mo(F.scaleY,w+g):g)-F.scaleY||0,Mp),this._pt.u=0,f.push("scaleY",M),M+="X";else if(M==="transformOrigin"){X.push(ii,0,c[ii]),_=e1(_),F.svg?bp(t,_,0,O,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==F.zOrigin&&Mr(this,F,"zOrigin",F.zOrigin,x),Mr(this,c,M,tf(p),tf(_)));continue}else if(M==="svgOrigin"){bp(t,_,1,O,0,this);continue}else if(M in HS){r1(this,F,M,v,w?Mo(v,w+_):_);continue}else if(M==="smoothOrigin"){Mr(this,F,"smooth",F.smooth,_);continue}else if(M==="force3D"){F[M]=_;continue}else if(M==="transform"){s1(this,_,t);continue}}else M in c||(M=Uo(M)||M);if(A||(g||g===0)&&(v||v===0)&&!HT.test(_)&&M in c)S=(p+"").substr((v+"").length),g||(g=0),x=Bn(_)||(M in Ei.units?Ei.units[M]:S),S!==x&&(v=Nr(t,M,p,x)),this._pt=new ni(this._pt,A?F:c,M,v,(w?Mo(v,w+g):g)-v,!A&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?XT:Mp),this._pt.u=x||0,A&&b!==_?(this._pt.b=p,this._pt.e=b,this._pt.r=kT):S!==x&&x!=="%"&&(this._pt.b=p,this._pt.r=VT);else if(M in c)t1.call(this,t,M,p,w?w+_:_);else if(M in t)this.add(t,M,p||t[M],w?w+_:_,s,u);else if(M!=="parseTransform"){Gp(M,_);continue}A||(M in c?X.push(M,0,c[M]):typeof t[M]=="function"?X.push(M,2,t[M]()):X.push(M,1,p||t[M])),f.push(M)}}D&&LS(this)},render:function(t,n){if(n.tween._time||!Jp())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Pa,aliases:oa,getSetter:function(t,n,a){var s=oa[n];return s&&s.indexOf(",")<0&&(n=s),n in Fa&&n!==ii&&(t._gsap.x||Pa(t,"x"))?a&&lv===a?n==="scale"?jT:YT:(lv=a||{})&&(n==="scale"?ZT:KT):t.style&&!Fp(t.style[n])?WT:~n.indexOf("-")?qT:Zp(t,n)},core:{_removeProperty:Ur,_getMatrix:tm}};oi.utils.checkPrefix=Uo;oi.core.getStyleSaver=zS;(function(o,t,n,a){var s=ei(o+","+t+","+n,function(u){Fa[u]=1});ei(t,function(u){Ei.units[u]="deg",HS[u]=1}),oa[s[13]]=o+","+t,ei(a,function(u){var f=u.split(":");oa[f[1]]=s[f[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ei.units[o]="px"});oi.registerPlugin(kS);var Yl=oi.registerPlugin(kS)||oi;Yl.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const em="160",o1=0,gv=1,l1=2,XS=1,u1=2,Na=3,Or=0,ai=1,sa=2,Cr=0,bo=1,vv=2,xv=3,Sv=4,c1=5,ls=100,f1=101,h1=102,yv=103,Mv=104,d1=200,p1=201,m1=202,_1=203,Ap=204,Rp=205,g1=206,v1=207,x1=208,S1=209,y1=210,M1=211,E1=212,T1=213,b1=214,A1=0,R1=1,C1=2,ef=3,w1=4,D1=5,L1=6,U1=7,WS=0,N1=1,O1=2,wr=0,P1=1,z1=2,B1=3,F1=4,I1=5,H1=6,qS=300,No=301,Oo=302,Cp=303,wp=304,cf=306,Dp=1e3,Zi=1001,Lp=1002,kn=1003,Ev=1004,Od=1005,xi=1006,G1=1007,nu=1008,Dr=1009,V1=1010,k1=1011,nm=1012,YS=1013,Er=1014,Tr=1015,iu=1016,jS=1017,ZS=1018,ms=1020,X1=1021,Ki=1023,W1=1024,q1=1025,_s=1026,Po=1027,Y1=1028,KS=1029,j1=1030,QS=1031,JS=1033,Pd=33776,zd=33777,Bd=33778,Fd=33779,Tv=35840,bv=35841,Av=35842,Rv=35843,$S=36196,Cv=37492,wv=37496,Dv=37808,Lv=37809,Uv=37810,Nv=37811,Ov=37812,Pv=37813,zv=37814,Bv=37815,Fv=37816,Iv=37817,Hv=37818,Gv=37819,Vv=37820,kv=37821,Id=36492,Xv=36494,Wv=36495,Z1=36283,qv=36284,Yv=36285,jv=36286,ty=3e3,gs=3001,K1=3200,Q1=3201,J1=0,$1=1,Fi="",wn="srgb",Ia="srgb-linear",im="display-p3",ff="display-p3-linear",nf="linear",ke="srgb",af="rec709",rf="p3",eo=7680,Zv=519,tb=512,eb=513,nb=514,ey=515,ib=516,ab=517,rb=518,sb=519,Kv=35044,Qv="300 es",Up=1035,za=2e3,sf=2001;class Bo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,f=s.length;u<f;u++)s[u].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=Math.PI/180,Np=180/Math.PI;function su(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function $n(o,t,n){return Math.max(t,Math.min(n,o))}function ob(o,t){return(o%t+t)%t}function Gd(o,t,n){return(1-n)*o+n*t}function Jv(o){return(o&o-1)===0&&o!==0}function Op(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function zl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(t=0,n=0){Oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos($n(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*s+t.x,this.y=u*s+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,n,a,s,u,f,c,d,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,f,c,d,p)}set(t,n,a,s,u,f,c,d,p){const _=this.elements;return _[0]=t,_[1]=s,_[2]=c,_[3]=n,_[4]=u,_[5]=d,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,f=a[0],c=a[3],d=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],T=a[8],M=s[0],S=s[3],x=s[6],w=s[1],A=s[4],L=s[7],F=s[2],O=s[5],D=s[8];return u[0]=f*M+c*w+d*F,u[3]=f*S+c*A+d*O,u[6]=f*x+c*L+d*D,u[1]=p*M+_*w+g*F,u[4]=p*S+_*A+g*O,u[7]=p*x+_*L+g*D,u[2]=v*M+y*w+T*F,u[5]=v*S+y*A+T*O,u[8]=v*x+y*L+T*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],f=t[4],c=t[5],d=t[6],p=t[7],_=t[8];return n*f*_-n*c*p-a*u*_+a*c*d+s*u*p-s*f*d}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],f=t[4],c=t[5],d=t[6],p=t[7],_=t[8],g=_*f-c*p,v=c*d-_*u,y=p*u-f*d,T=n*g+a*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(s*p-_*a)*M,t[2]=(c*a-s*f)*M,t[3]=v*M,t[4]=(_*n-s*d)*M,t[5]=(s*u-c*n)*M,t[6]=y*M,t[7]=(a*d-p*n)*M,t[8]=(f*n-a*u)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,f,c){const d=Math.cos(u),p=Math.sin(u);return this.set(a*d,a*p,-a*(d*f+p*c)+f+t,-s*p,s*d,-s*(-p*f+d*c)+c+n,0,0,1),this}scale(t,n){return this.premultiply(Vd.makeScale(t,n)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Vd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new ce;function ny(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function au(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function lb(){const o=au("canvas");return o.style.display="block",o}const $v={};function jl(o){o in $v||($v[o]=!0,console.warn(o))}const tx=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ex=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yc={[Ia]:{transfer:nf,primaries:af,toReference:o=>o,fromReference:o=>o},[wn]:{transfer:ke,primaries:af,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[ff]:{transfer:nf,primaries:rf,toReference:o=>o.applyMatrix3(ex),fromReference:o=>o.applyMatrix3(tx)},[im]:{transfer:ke,primaries:rf,toReference:o=>o.convertSRGBToLinear().applyMatrix3(ex),fromReference:o=>o.applyMatrix3(tx).convertLinearToSRGB()}},ub=new Set([Ia,ff]),Ne={enabled:!0,_workingColorSpace:Ia,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!ub.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,n){if(this.enabled===!1||t===n||!t||!n)return o;const a=yc[t].toReference,s=yc[n].fromReference;return s(a(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return yc[o].primaries},getTransfer:function(o){return o===Fi?nf:yc[o].transfer}};function Ao(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kd(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let no;class iy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{no===void 0&&(no=au("canvas")),no.width=t.width,no.height=t.height;const a=no.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=no}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=au("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let f=0;f<u.length;f++)u[f]=Ao(u[f]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ao(n[a]/255)*255):n[a]=Ao(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cb=0;class ay{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=su(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let f=0,c=s.length;f<c;f++)s[f].isDataTexture?u.push(Xd(s[f].image)):u.push(Xd(s[f]))}else u=Xd(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function Xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fb=0;class ri extends Bo{constructor(t=ri.DEFAULT_IMAGE,n=ri.DEFAULT_MAPPING,a=Zi,s=Zi,u=xi,f=nu,c=Ki,d=Dr,p=ri.DEFAULT_ANISOTROPY,_=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=su(),this.name="",this.source=new ay(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===gs?wn:Fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dp:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Lp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dp:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Lp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wn?gs:ty}set encoding(t){jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===gs?wn:Fi}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=qS;ri.DEFAULT_ANISOTROPY=1;class Dn{constructor(t=0,n=0,a=0,s=1){Dn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*s+f[12]*u,this.y=f[1]*n+f[5]*a+f[9]*s+f[13]*u,this.z=f[2]*n+f[6]*a+f[10]*s+f[14]*u,this.w=f[3]*n+f[7]*a+f[11]*s+f[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const d=t.elements,p=d[0],_=d[4],g=d[8],v=d[1],y=d[5],T=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,L=(y+1)/2,F=(x+1)/2,O=(_+v)/4,D=(g+M)/4,X=(T+S)/4;return A>L&&A>F?A<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(A),s=O/a,u=D/a):L>F?L<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(L),a=O/s,u=X/s):F<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(F),a=D/u,s=X/u),this.set(a,s,u,n),this}let w=Math.sqrt((S-T)*(S-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(S-T)/w,this.y=(g-M)/w,this.z=(v-_)/w,this.w=Math.acos((p+y+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hb extends Bo{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Dn(0,0,t,n),this.scissorTest=!1,this.viewport=new Dn(0,0,t,n);const s={width:t,height:n,depth:1};a.encoding!==void 0&&(jl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),a.colorSpace=a.encoding===gs?wn:Fi),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},a),this.texture=new ri(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps,this.texture.internalFormat=a.internalFormat,this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}setSize(t,n,a=1){(this.width!==t||this.height!==n||this.depth!==a)&&(this.width=t,this.height=n,this.depth=a,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new ay(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends hb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ry extends ri{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class db extends ri{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,f,c){let d=a[s+0],p=a[s+1],_=a[s+2],g=a[s+3];const v=u[f+0],y=u[f+1],T=u[f+2],M=u[f+3];if(c===0){t[n+0]=d,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(c===1){t[n+0]=v,t[n+1]=y,t[n+2]=T,t[n+3]=M;return}if(g!==M||d!==v||p!==y||_!==T){let S=1-c;const x=d*v+p*y+_*T+g*M,w=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const F=Math.sqrt(A),O=Math.atan2(F,x*w);S=Math.sin(S*O)/F,c=Math.sin(c*O)/F}const L=c*w;if(d=d*S+v*L,p=p*S+y*L,_=_*S+T*L,g=g*S+M*L,S===1-c){const F=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=F,p*=F,_*=F,g*=F}}t[n]=d,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,u,f){const c=a[s],d=a[s+1],p=a[s+2],_=a[s+3],g=u[f],v=u[f+1],y=u[f+2],T=u[f+3];return t[n]=c*T+_*g+d*y-p*v,t[n+1]=d*T+_*v+p*g-c*y,t[n+2]=p*T+_*y+c*v-d*g,t[n+3]=_*T-c*g-d*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,f=t._order,c=Math.cos,d=Math.sin,p=c(a/2),_=c(s/2),g=c(u/2),v=d(a/2),y=d(s/2),T=d(u/2);switch(f){case"XYZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"YXZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"ZXY":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"ZYX":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"YZX":this._x=v*_*g+p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g-v*y*T;break;case"XZY":this._x=v*_*g-p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],f=n[1],c=n[5],d=n[9],p=n[2],_=n[6],g=n[10],v=a+c+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-d)*y,this._y=(u-p)*y,this._z=(f-s)*y}else if(a>c&&a>g){const y=2*Math.sqrt(1+a-c-g);this._w=(_-d)/y,this._x=.25*y,this._y=(s+f)/y,this._z=(u+p)/y}else if(c>g){const y=2*Math.sqrt(1+c-a-g);this._w=(u-p)/y,this._x=(s+f)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-a-c);this._w=(f-s)/y,this._x=(u+p)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($n(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,f=t._w,c=n._x,d=n._y,p=n._z,_=n._w;return this._x=a*_+f*c+s*p-u*d,this._y=s*_+f*d+u*c-a*p,this._z=u*_+f*p+a*d-s*c,this._w=f*_-a*c-s*d-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,u=this._z,f=this._w;let c=f*t._w+a*t._x+s*t._y+u*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=f,this._x=a,this._y=s,this._z=u,this;const d=1-c*c;if(d<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*a+n*this._x,this._y=y*s+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,c),g=Math.sin((1-n)*_)/p,v=Math.sin(n*_)/p;return this._w=f*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=Math.random(),n=Math.sqrt(1-t),a=Math.sqrt(t),s=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(s),a*Math.sin(u),a*Math.cos(u),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,n=0,a=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(nx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(nx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,f=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*f,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*f,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,f=t.y,c=t.z,d=t.w,p=2*(f*s-c*a),_=2*(c*n-u*s),g=2*(u*a-f*n);return this.x=n+d*p+f*g-c*_,this.y=a+d*_+c*p-u*g,this.z=s+d*g+u*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,f=n.x,c=n.y,d=n.z;return this.x=s*d-u*c,this.y=u*f-a*d,this.z=a*c-s*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Wd.copy(this).projectOnVector(t),this.sub(Wd)}reflect(t){return this.sub(Wd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos($n(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(n),this.y=a*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wd=new it,nx=new ou;class lu{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,c=u.count;f<c;f++)t.isMesh===!0?t.getVertexPosition(f,Wi):Wi.fromBufferAttribute(u,f),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Mc.copy(a.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const s=t.children;for(let u=0,f=s.length;u<f;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bl),Ec.subVectors(this.max,Bl),io.subVectors(t.a,Bl),ao.subVectors(t.b,Bl),ro.subVectors(t.c,Bl),mr.subVectors(ao,io),_r.subVectors(ro,ao),es.subVectors(io,ro);let n=[0,-mr.z,mr.y,0,-_r.z,_r.y,0,-es.z,es.y,mr.z,0,-mr.x,_r.z,0,-_r.x,es.z,0,-es.x,-mr.y,mr.x,0,-_r.y,_r.x,0,-es.y,es.x,0];return!qd(n,io,ao,ro,Ec)||(n=[1,0,0,0,1,0,0,0,1],!qd(n,io,ao,ro,Ec))?!1:(Tc.crossVectors(mr,_r),n=[Tc.x,Tc.y,Tc.z],qd(n,io,ao,ro,Ec))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ca=[new it,new it,new it,new it,new it,new it,new it,new it],Wi=new it,Mc=new lu,io=new it,ao=new it,ro=new it,mr=new it,_r=new it,es=new it,Bl=new it,Ec=new it,Tc=new it,ns=new it;function qd(o,t,n,a,s){for(let u=0,f=o.length-3;u<=f;u+=3){ns.fromArray(o,u);const c=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),d=t.dot(ns),p=n.dot(ns),_=a.dot(ns);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>c)return!1}return!0}const pb=new lu,Fl=new it,Yd=new it;class hf{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):pb.setFromPoints(t).getCenter(a);let s=0;for(let u=0,f=t.length;u<f;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fl.subVectors(t,this.center);const n=Fl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Fl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fl.copy(t.center).add(Yd)),this.expandByPoint(Fl.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wa=new it,jd=new it,bc=new it,gr=new it,Zd=new it,Ac=new it,Kd=new it;class sy{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=wa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,n),wa.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){jd.copy(t).add(n).multiplyScalar(.5),bc.copy(n).sub(t).normalize(),gr.copy(this.origin).sub(jd);const u=t.distanceTo(n)*.5,f=-this.direction.dot(bc),c=gr.dot(this.direction),d=-gr.dot(bc),p=gr.lengthSq(),_=Math.abs(1-f*f);let g,v,y,T;if(_>0)if(g=f*d-c,v=f*c-d,T=u*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,y=g*(g+f*v+2*c)+v*(f*g+v+2*d)+p}else v=u,g=Math.max(0,-(f*v+c)),y=-g*g+v*(v+2*d)+p;else v=-u,g=Math.max(0,-(f*v+c)),y=-g*g+v*(v+2*d)+p;else v<=-T?(g=Math.max(0,-(-f*u+c)),v=g>0?-u:Math.min(Math.max(-u,-d),u),y=-g*g+v*(v+2*d)+p):v<=T?(g=0,v=Math.min(Math.max(-u,-d),u),y=v*(v+2*d)+p):(g=Math.max(0,-(f*u+c)),v=g>0?u:Math.min(Math.max(-u,-d),u),y=-g*g+v*(v+2*d)+p);else v=f>0?-u:u,g=Math.max(0,-(f*v+c)),y=-g*g+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(jd).addScaledVector(bc,v),y}intersectSphere(t,n){wa.subVectors(t.center,this.origin);const a=wa.dot(this.direction),s=wa.dot(wa)-a*a,u=t.radius*t.radius;if(s>u)return null;const f=Math.sqrt(u-s),c=a-f,d=a+f;return d<0?null:c<0?this.at(d,n):this.at(c,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,f,c,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),a>f||u>s||((u>a||isNaN(a))&&(a=u),(f<s||isNaN(s))&&(s=f),g>=0?(c=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(c=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),a>d||c>s)||((c>a||a!==a)&&(a=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,n,a,s,u){Zd.subVectors(n,t),Ac.subVectors(a,t),Kd.crossVectors(Zd,Ac);let f=this.direction.dot(Kd),c;if(f>0){if(s)return null;c=1}else if(f<0)c=-1,f=-f;else return null;gr.subVectors(this.origin,t);const d=c*this.direction.dot(Ac.crossVectors(gr,Ac));if(d<0)return null;const p=c*this.direction.dot(Zd.cross(gr));if(p<0||d+p>f)return null;const _=-c*gr.dot(Kd);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(t,n,a,s,u,f,c,d,p,_,g,v,y,T,M,S){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,f,c,d,p,_,g,v,y,T,M,S)}set(t,n,a,s,u,f,c,d,p,_,g,v,y,T,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=u,x[5]=f,x[9]=c,x[13]=d,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=T,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/so.setFromMatrixColumn(t,0).length(),u=1/so.setFromMatrixColumn(t,1).length(),f=1/so.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,f=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=f*_,y=f*g,T=c*_,M=c*g;n[0]=d*_,n[4]=-d*g,n[8]=p,n[1]=y+T*p,n[5]=v-M*p,n[9]=-c*d,n[2]=M-v*p,n[6]=T+y*p,n[10]=f*d}else if(t.order==="YXZ"){const v=d*_,y=d*g,T=p*_,M=p*g;n[0]=v+M*c,n[4]=T*c-y,n[8]=f*p,n[1]=f*g,n[5]=f*_,n[9]=-c,n[2]=y*c-T,n[6]=M+v*c,n[10]=f*d}else if(t.order==="ZXY"){const v=d*_,y=d*g,T=p*_,M=p*g;n[0]=v-M*c,n[4]=-f*g,n[8]=T+y*c,n[1]=y+T*c,n[5]=f*_,n[9]=M-v*c,n[2]=-f*p,n[6]=c,n[10]=f*d}else if(t.order==="ZYX"){const v=f*_,y=f*g,T=c*_,M=c*g;n[0]=d*_,n[4]=T*p-y,n[8]=v*p+M,n[1]=d*g,n[5]=M*p+v,n[9]=y*p-T,n[2]=-p,n[6]=c*d,n[10]=f*d}else if(t.order==="YZX"){const v=f*d,y=f*p,T=c*d,M=c*p;n[0]=d*_,n[4]=M-v*g,n[8]=T*g+y,n[1]=g,n[5]=f*_,n[9]=-c*_,n[2]=-p*_,n[6]=y*g+T,n[10]=v-M*g}else if(t.order==="XZY"){const v=f*d,y=f*p,T=c*d,M=c*p;n[0]=d*_,n[4]=-g,n[8]=p*_,n[1]=v*g+M,n[5]=f*_,n[9]=y*g-T,n[2]=T*g-y,n[6]=c*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mb,t,_b)}lookAt(t,n,a){const s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),vr.crossVectors(a,_i),vr.lengthSq()===0&&(Math.abs(a.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),vr.crossVectors(a,_i)),vr.normalize(),Rc.crossVectors(_i,vr),s[0]=vr.x,s[4]=Rc.x,s[8]=_i.x,s[1]=vr.y,s[5]=Rc.y,s[9]=_i.y,s[2]=vr.z,s[6]=Rc.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,f=a[0],c=a[4],d=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],T=a[2],M=a[6],S=a[10],x=a[14],w=a[3],A=a[7],L=a[11],F=a[15],O=s[0],D=s[4],X=s[8],b=s[12],U=s[1],J=s[5],$=s[9],ht=s[13],k=s[2],Z=s[6],z=s[10],H=s[14],K=s[3],ot=s[7],ft=s[11],P=s[15];return u[0]=f*O+c*U+d*k+p*K,u[4]=f*D+c*J+d*Z+p*ot,u[8]=f*X+c*$+d*z+p*ft,u[12]=f*b+c*ht+d*H+p*P,u[1]=_*O+g*U+v*k+y*K,u[5]=_*D+g*J+v*Z+y*ot,u[9]=_*X+g*$+v*z+y*ft,u[13]=_*b+g*ht+v*H+y*P,u[2]=T*O+M*U+S*k+x*K,u[6]=T*D+M*J+S*Z+x*ot,u[10]=T*X+M*$+S*z+x*ft,u[14]=T*b+M*ht+S*H+x*P,u[3]=w*O+A*U+L*k+F*K,u[7]=w*D+A*J+L*Z+F*ot,u[11]=w*X+A*$+L*z+F*ft,u[15]=w*b+A*ht+L*H+F*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],f=t[1],c=t[5],d=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],T=t[3],M=t[7],S=t[11],x=t[15];return T*(+u*d*g-s*p*g-u*c*v+a*p*v+s*c*y-a*d*y)+M*(+n*d*y-n*p*v+u*f*v-s*f*y+s*p*_-u*d*_)+S*(+n*p*g-n*c*y-u*f*g+a*f*y+u*c*_-a*p*_)+x*(-s*c*_-n*d*g+n*c*v+s*f*g-a*f*v+a*d*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],f=t[4],c=t[5],d=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],T=t[12],M=t[13],S=t[14],x=t[15],w=g*S*p-M*v*p+M*d*y-c*S*y-g*d*x+c*v*x,A=T*v*p-_*S*p-T*d*y+f*S*y+_*d*x-f*v*x,L=_*M*p-T*g*p+T*c*y-f*M*y-_*c*x+f*g*x,F=T*g*d-_*M*d-T*c*v+f*M*v+_*c*S-f*g*S,O=n*w+a*A+s*L+u*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/O;return t[0]=w*D,t[1]=(M*v*u-g*S*u-M*s*y+a*S*y+g*s*x-a*v*x)*D,t[2]=(c*S*u-M*d*u+M*s*p-a*S*p-c*s*x+a*d*x)*D,t[3]=(g*d*u-c*v*u-g*s*p+a*v*p+c*s*y-a*d*y)*D,t[4]=A*D,t[5]=(_*S*u-T*v*u+T*s*y-n*S*y-_*s*x+n*v*x)*D,t[6]=(T*d*u-f*S*u-T*s*p+n*S*p+f*s*x-n*d*x)*D,t[7]=(f*v*u-_*d*u+_*s*p-n*v*p-f*s*y+n*d*y)*D,t[8]=L*D,t[9]=(T*g*u-_*M*u-T*a*y+n*M*y+_*a*x-n*g*x)*D,t[10]=(f*M*u-T*c*u+T*a*p-n*M*p-f*a*x+n*c*x)*D,t[11]=(_*c*u-f*g*u-_*a*p+n*g*p+f*a*y-n*c*y)*D,t[12]=F*D,t[13]=(_*M*s-T*g*s+T*a*v-n*M*v-_*a*S+n*g*S)*D,t[14]=(T*c*s-f*M*s-T*a*d+n*M*d+f*a*S-n*c*S)*D,t[15]=(f*g*s-_*c*s+_*a*d-n*g*d-f*a*v+n*c*v)*D,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,f=t.x,c=t.y,d=t.z,p=u*f,_=u*c;return this.set(p*f+a,p*c-s*d,p*d+s*c,0,p*c+s*d,_*c+a,_*d-s*f,0,p*d-s*c,_*d+s*f,u*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,f){return this.set(1,a,u,0,t,1,f,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,f=n._y,c=n._z,d=n._w,p=u+u,_=f+f,g=c+c,v=u*p,y=u*_,T=u*g,M=f*_,S=f*g,x=c*g,w=d*p,A=d*_,L=d*g,F=a.x,O=a.y,D=a.z;return s[0]=(1-(M+x))*F,s[1]=(y+L)*F,s[2]=(T-A)*F,s[3]=0,s[4]=(y-L)*O,s[5]=(1-(v+x))*O,s[6]=(S+w)*O,s[7]=0,s[8]=(T+A)*D,s[9]=(S-w)*D,s[10]=(1-(v+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let u=so.set(s[0],s[1],s[2]).length();const f=so.set(s[4],s[5],s[6]).length(),c=so.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],qi.copy(this);const p=1/u,_=1/f,g=1/c;return qi.elements[0]*=p,qi.elements[1]*=p,qi.elements[2]*=p,qi.elements[4]*=_,qi.elements[5]*=_,qi.elements[6]*=_,qi.elements[8]*=g,qi.elements[9]*=g,qi.elements[10]*=g,n.setFromRotationMatrix(qi),a.x=u,a.y=f,a.z=c,this}makePerspective(t,n,a,s,u,f,c=za){const d=this.elements,p=2*u/(n-t),_=2*u/(a-s),g=(n+t)/(n-t),v=(a+s)/(a-s);let y,T;if(c===za)y=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(c===sf)y=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,f,c=za){const d=this.elements,p=1/(n-t),_=1/(a-s),g=1/(f-u),v=(n+t)*p,y=(a+s)*_;let T,M;if(c===za)T=(f+u)*g,M=-2*g;else if(c===sf)T=u*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const so=new it,qi=new Mn,mb=new it(0,0,0),_b=new it(1,1,1),vr=new it,Rc=new it,_i=new it,ix=new Mn,ax=new ou;class br{constructor(t=0,n=0,a=0,s=br.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],f=s[4],c=s[8],d=s[1],p=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin($n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin($n(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,u));break;case"ZYX":this._y=Math.asin(-$n(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin($n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-$n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(c,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return ix.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ix,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ax.setFromEuler(this),this.setFromQuaternion(ax,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class oy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gb=0;const rx=new it,oo=new ou,Da=new Mn,Cc=new it,Il=new it,vb=new it,xb=new ou,sx=new it(1,0,0),ox=new it(0,1,0),lx=new it(0,0,1),Sb={type:"added"},yb={type:"removed"};class si extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const t=new it,n=new br,a=new ou,s=new it(1,1,1);function u(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new ce}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return oo.setFromAxisAngle(t,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,n){return oo.setFromAxisAngle(t,n),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(sx,t)}rotateY(t){return this.rotateOnAxis(ox,t)}rotateZ(t){return this.rotateOnAxis(lx,t)}translateOnAxis(t,n){return rx.copy(t).applyQuaternion(this.quaternion),this.position.add(rx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(sx,t)}translateY(t){return this.translateOnAxis(ox,t)}translateZ(t){return this.translateOnAxis(lx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Cc.copy(t):Cc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(Il,Cc,this.up):Da.lookAt(Cc,Il,this.up),this.quaternion.setFromRotationMatrix(Da),s&&(Da.extractRotation(s.matrixWorld),oo.setFromRotationMatrix(Da),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yb)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Da.multiply(t.parent.matrixWorld)),t.applyMatrix4(Da),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,t,vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,xb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++){const u=n[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let u=0,f=s.length;u<f;u++){const c=s[u];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function u(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];u(t.shapes,g)}else u(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(u(t.materials,this.material[d]));s.material=c}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(u(t.animations,d))}}if(n){const c=f(t.geometries),d=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),v=f(t.skeletons),y=f(t.animations),T=f(t.nodes);c.length>0&&(a.geometries=c),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),T.length>0&&(a.nodes=T)}return a.object=s,a;function f(c){const d=[];for(const p in c){const _=c[p];delete _.metadata,d.push(_)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}si.DEFAULT_UP=new it(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new it,La=new it,Qd=new it,Ua=new it,lo=new it,uo=new it,ux=new it,Jd=new it,$d=new it,tp=new it;let wc=!1;class ji{constructor(t=new it,n=new it,a=new it){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Yi.subVectors(t,n),s.cross(Yi);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){Yi.subVectors(s,n),La.subVectors(a,n),Qd.subVectors(t,n);const f=Yi.dot(Yi),c=Yi.dot(La),d=Yi.dot(Qd),p=La.dot(La),_=La.dot(Qd),g=f*p-c*c;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(p*d-c*_)*v,T=(f*_-c*d)*v;return u.set(1-y-T,T,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getUV(t,n,a,s,u,f,c,d){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),this.getInterpolation(t,n,a,s,u,f,c,d)}static getInterpolation(t,n,a,s,u,f,c,d){return this.getBarycoord(t,n,a,s,Ua)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(u,Ua.x),d.addScaledVector(f,Ua.y),d.addScaledVector(c,Ua.z),d)}static isFrontFacing(t,n,a,s){return Yi.subVectors(a,n),La.subVectors(t,n),Yi.cross(La).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Yi.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ji.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,a,s,u){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),ji.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}getInterpolation(t,n,a,s,u){return ji.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let f,c;lo.subVectors(s,a),uo.subVectors(u,a),Jd.subVectors(t,a);const d=lo.dot(Jd),p=uo.dot(Jd);if(d<=0&&p<=0)return n.copy(a);$d.subVectors(t,s);const _=lo.dot($d),g=uo.dot($d);if(_>=0&&g<=_)return n.copy(s);const v=d*g-_*p;if(v<=0&&d>=0&&_<=0)return f=d/(d-_),n.copy(a).addScaledVector(lo,f);tp.subVectors(t,u);const y=lo.dot(tp),T=uo.dot(tp);if(T>=0&&y<=T)return n.copy(u);const M=y*p-d*T;if(M<=0&&p>=0&&T<=0)return c=p/(p-T),n.copy(a).addScaledVector(uo,c);const S=_*T-y*g;if(S<=0&&g-_>=0&&y-T>=0)return ux.subVectors(u,s),c=(g-_)/(g-_+(y-T)),n.copy(s).addScaledVector(ux,c);const x=1/(S+M+v);return f=M*x,c=v*x,n.copy(a).addScaledVector(lo,f).addScaledVector(uo,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function ep(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Ee{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,n),this}setRGB(t,n,a,s=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ne.toWorkingColorSpace(this,s),this}setHSL(t,n,a,s=Ne.workingColorSpace){if(t=ob(t,1),n=$n(n,0,1),a=$n(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,f=2*a-u;this.r=ep(f,u,t+1/3),this.g=ep(f,u,t),this.b=ep(f,u,t-1/3)}return Ne.toWorkingColorSpace(this,s),this}setStyle(t,n=wn){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=s[1],c=s[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wn){const a=ly[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}copyLinearToSRGB(t){return this.r=kd(t.r),this.g=kd(t.g),this.b=kd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Ne.fromWorkingColorSpace(zn.copy(this),t),Math.round($n(zn.r*255,0,255))*65536+Math.round($n(zn.g*255,0,255))*256+Math.round($n(zn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.fromWorkingColorSpace(zn.copy(this),n);const a=zn.r,s=zn.g,u=zn.b,f=Math.max(a,s,u),c=Math.min(a,s,u);let d,p;const _=(c+f)/2;if(c===f)d=0,p=0;else{const g=f-c;switch(p=_<=.5?g/(f+c):g/(2-f-c),f){case a:d=(s-u)/g+(s<u?6:0);break;case s:d=(u-a)/g+2;break;case u:d=(a-s)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=_,t}getRGB(t,n=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=wn){Ne.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,a=zn.g,s=zn.b;return t!==wn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+n,xr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(xr),t.getHSL(Dc);const a=Gd(xr.h,Dc.h,n),s=Gd(xr.s,Dc.s,n),u=Gd(xr.l,Dc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ee;Ee.NAMES=ly;let Mb=0;class uu extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=su(),this.name="",this.type="Material",this.blending=bo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ef,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(a.blending=this.blending),this.side!==Or&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ap&&(a.blendSrc=this.blendSrc),this.blendDst!==Rp&&(a.blendDst=this.blendDst),this.blendEquation!==ls&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ef&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const f=[];for(const c in u){const d=u[c];delete d.metadata,f.push(d)}return f}if(n){const u=s(t.textures),f=s(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class am extends uu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=WS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new it,Lc=new Oe;class la{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Kv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(t),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=zl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=zl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=zl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=zl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=zl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),s=Jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),s=Jn(s,this.array),u=Jn(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kv&&(t.usage=this.usage),t}}class uy extends la{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class cy extends la{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ua extends la{constructor(t,n,a){super(new Float32Array(t),n,a)}}let Eb=0;const Pi=new Mn,np=new si,co=new it,gi=new lu,Hl=new lu,yn=new it;class Ha extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=su(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ny(t)?cy:uy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ce().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,a){return Pi.makeTranslation(t,n,a),this.applyMatrix4(Pi),this}scale(t,n,a){return Pi.makeScale(t,n,a),this.applyMatrix4(Pi),this}lookAt(t){return np.lookAt(t),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){const n=[];for(let a=0,s=t.length;a<s;a++){const u=t[a];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new ua(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new it,1/0);return}if(t){const a=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let u=0,f=n.length;u<f;u++){const c=n[u];Hl.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(gi.min,Hl.min),gi.expandByPoint(yn),yn.addVectors(gi.max,Hl.max),gi.expandByPoint(yn)):(gi.expandByPoint(Hl.min),gi.expandByPoint(Hl.max))}gi.getCenter(a);let s=0;for(let u=0,f=t.count;u<f;u++)yn.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(yn));if(n)for(let u=0,f=n.length;u<f;u++){const c=n[u],d=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)yn.fromBufferAttribute(c,p),d&&(co.fromBufferAttribute(t,p),yn.add(co)),s=Math.max(s,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.array,s=n.position.array,u=n.normal.array,f=n.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,p=[],_=[];for(let U=0;U<c;U++)p[U]=new it,_[U]=new it;const g=new it,v=new it,y=new it,T=new Oe,M=new Oe,S=new Oe,x=new it,w=new it;function A(U,J,$){g.fromArray(s,U*3),v.fromArray(s,J*3),y.fromArray(s,$*3),T.fromArray(f,U*2),M.fromArray(f,J*2),S.fromArray(f,$*2),v.sub(g),y.sub(g),M.sub(T),S.sub(T);const ht=1/(M.x*S.y-S.x*M.y);isFinite(ht)&&(x.copy(v).multiplyScalar(S.y).addScaledVector(y,-M.y).multiplyScalar(ht),w.copy(y).multiplyScalar(M.x).addScaledVector(v,-S.x).multiplyScalar(ht),p[U].add(x),p[J].add(x),p[$].add(x),_[U].add(w),_[J].add(w),_[$].add(w))}let L=this.groups;L.length===0&&(L=[{start:0,count:a.length}]);for(let U=0,J=L.length;U<J;++U){const $=L[U],ht=$.start,k=$.count;for(let Z=ht,z=ht+k;Z<z;Z+=3)A(a[Z+0],a[Z+1],a[Z+2])}const F=new it,O=new it,D=new it,X=new it;function b(U){D.fromArray(u,U*3),X.copy(D);const J=p[U];F.copy(J),F.sub(D.multiplyScalar(D.dot(J))).normalize(),O.crossVectors(X,J);const ht=O.dot(_[U])<0?-1:1;d[U*4]=F.x,d[U*4+1]=F.y,d[U*4+2]=F.z,d[U*4+3]=ht}for(let U=0,J=L.length;U<J;++U){const $=L[U],ht=$.start,k=$.count;for(let Z=ht,z=ht+k;Z<z;Z+=3)b(a[Z+0]),b(a[Z+1]),b(a[Z+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new la(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new it,u=new it,f=new it,c=new it,d=new it,p=new it,_=new it,g=new it;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),_.subVectors(f,u),g.subVectors(s,u),_.cross(g),c.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),p.fromBufferAttribute(a,S),c.add(_),d.add(_),p.add(_),a.setXYZ(T,c.x,c.y,c.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),_.subVectors(f,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(c,d){const p=c.array,_=c.itemSize,g=c.normalized,v=new p.constructor(d.length*_);let y=0,T=0;for(let M=0,S=d.length;M<S;M++){c.isInterleavedBufferAttribute?y=d[M]*c.data.stride+c.offset:y=d[M]*_;for(let x=0;x<_;x++)v[T++]=p[y++]}return new la(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ha,a=this.index.array,s=this.attributes;for(const c in s){const d=s[c],p=t(d,a);n.setAttribute(c,p)}const u=this.morphAttributes;for(const c in u){const d=[],p=u[c];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,a);d.push(y)}n.morphAttributes[c]=d}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,d=f.length;c<d;c++){const p=f[c];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let u=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(s[d]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const s=t.attributes;for(const p in s){const _=s[p];this.setAttribute(p,_.clone(n))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cx=new Mn,is=new sy,Uc=new hf,fx=new it,fo=new it,ho=new it,po=new it,ip=new it,Nc=new it,Oc=new Oe,Pc=new Oe,zc=new Oe,hx=new it,dx=new it,px=new it,Bc=new it,Fc=new it;class Qi extends si{constructor(t=new Ha,n=new am){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=s.length;u<f;u++){const c=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const c=this.morphTargetInfluences;if(u&&c){Nc.set(0,0,0);for(let d=0,p=u.length;d<p;d++){const _=c[d],g=u[d];_!==0&&(ip.fromBufferAttribute(g,t),f?Nc.addScaledVector(ip,_):Nc.addScaledVector(ip.sub(n),_))}n.add(Nc)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Uc.copy(a.boundingSphere),Uc.applyMatrix4(u),is.copy(t.ray).recast(t.near),!(Uc.containsPoint(is.origin)===!1&&(is.intersectSphere(Uc,fx)===null||is.origin.distanceToSquared(fx)>(t.far-t.near)**2))&&(cx.copy(u).invert(),is.copy(t.ray).applyMatrix4(cx),!(a.boundingBox!==null&&is.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,is)))}_computeIntersections(t,n,a){let s;const u=this.geometry,f=this.material,c=u.index,d=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(c!==null)if(Array.isArray(f))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=f[S.materialIndex],w=Math.max(S.start,y.start),A=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let L=w,F=A;L<F;L+=3){const O=c.getX(L),D=c.getX(L+1),X=c.getX(L+2);s=Ic(this,x,t,a,p,_,g,O,D,X),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const w=c.getX(S),A=c.getX(S+1),L=c.getX(S+2);s=Ic(this,f,t,a,p,_,g,w,A,L),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(f))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=f[S.materialIndex],w=Math.max(S.start,y.start),A=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let L=w,F=A;L<F;L+=3){const O=L,D=L+1,X=L+2;s=Ic(this,x,t,a,p,_,g,O,D,X),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const w=S,A=S+1,L=S+2;s=Ic(this,f,t,a,p,_,g,w,A,L),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function Tb(o,t,n,a,s,u,f,c){let d;if(t.side===ai?d=a.intersectTriangle(f,u,s,!0,c):d=a.intersectTriangle(s,u,f,t.side===Or,c),d===null)return null;Fc.copy(c),Fc.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(Fc);return p<n.near||p>n.far?null:{distance:p,point:Fc.clone(),object:o}}function Ic(o,t,n,a,s,u,f,c,d,p){o.getVertexPosition(c,fo),o.getVertexPosition(d,ho),o.getVertexPosition(p,po);const _=Tb(o,t,n,a,fo,ho,po,Bc);if(_){s&&(Oc.fromBufferAttribute(s,c),Pc.fromBufferAttribute(s,d),zc.fromBufferAttribute(s,p),_.uv=ji.getInterpolation(Bc,fo,ho,po,Oc,Pc,zc,new Oe)),u&&(Oc.fromBufferAttribute(u,c),Pc.fromBufferAttribute(u,d),zc.fromBufferAttribute(u,p),_.uv1=ji.getInterpolation(Bc,fo,ho,po,Oc,Pc,zc,new Oe),_.uv2=_.uv1),f&&(hx.fromBufferAttribute(f,c),dx.fromBufferAttribute(f,d),px.fromBufferAttribute(f,p),_.normal=ji.getInterpolation(Bc,fo,ho,po,hx,dx,px,new it),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:c,b:d,c:p,normal:new it,materialIndex:0};ji.getNormal(fo,ho,po,g.normal),_.face=g}return _}class cu extends Ha{constructor(t=1,n=1,a=1,s=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:f};const c=this;s=Math.floor(s),u=Math.floor(u),f=Math.floor(f);const d=[],p=[],_=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,a,n,t,f,u,0),T("z","y","x",1,-1,a,n,-t,f,u,1),T("x","z","y",1,1,t,a,n,s,f,2),T("x","z","y",1,-1,t,a,-n,s,f,3),T("x","y","z",1,-1,t,n,a,s,u,4),T("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(d),this.setAttribute("position",new ua(p,3)),this.setAttribute("normal",new ua(_,3)),this.setAttribute("uv",new ua(g,2));function T(M,S,x,w,A,L,F,O,D,X,b){const U=L/D,J=F/X,$=L/2,ht=F/2,k=O/2,Z=D+1,z=X+1;let H=0,K=0;const ot=new it;for(let ft=0;ft<z;ft++){const P=ft*J-ht;for(let V=0;V<Z;V++){const G=V*U-$;ot[M]=G*w,ot[S]=P*A,ot[x]=k,p.push(ot.x,ot.y,ot.z),ot[M]=0,ot[S]=0,ot[x]=O>0?1:-1,_.push(ot.x,ot.y,ot.z),g.push(V/D),g.push(1-ft/X),H+=1}}for(let ft=0;ft<X;ft++)for(let P=0;P<D;P++){const V=v+P+Z*ft,G=v+P+Z*(ft+1),Y=v+(P+1)+Z*(ft+1),dt=v+(P+1)+Z*ft;d.push(V,G,dt),d.push(G,Y,dt),K+=6}c.addGroup(y,K,b),y+=K,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Gn(o){const t={};for(let n=0;n<o.length;n++){const a=zo(o[n]);for(const s in a)t[s]=a[s]}return t}function bb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function fy(o){return o.getRenderTarget()===null?o.outputColorSpace:Ne.workingColorSpace}const Ab={clone:zo,merge:Gn};var Rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends uu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rb,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zo(t.uniforms),this.uniformsGroups=bb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?n.uniforms[s]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[s]={type:"m4",value:f.toArray()}:n.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class hy extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=za}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bi extends hy{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(Hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,a,s,u,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Hd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;u+=f.offsetX*s/d,n-=f.offsetY*a/p,s*=f.width/d,a*=f.height/p}const c=this.filmOffset;c!==0&&(u+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const mo=-90,_o=1;class wb extends si{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bi(mo,_o,t,n);s.layers=this.layers,this.add(s);const u=new Bi(mo,_o,t,n);u.layers=this.layers,this.add(u);const f=new Bi(mo,_o,t,n);f.layers=this.layers,this.add(f);const c=new Bi(mo,_o,t,n);c.layers=this.layers,this.add(c);const d=new Bi(mo,_o,t,n);d.layers=this.layers,this.add(d);const p=new Bi(mo,_o,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,f,c,d]=n;for(const p of n)this.remove(p);if(t===za)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===sf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,c,d,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,u),t.setRenderTarget(a,1,s),t.render(n,f),t.setRenderTarget(a,2,s),t.render(n,c),t.setRenderTarget(a,3,s),t.render(n,d),t.setRenderTarget(a,4,s),t.render(n,p),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class dy extends ri{constructor(t,n,a,s,u,f,c,d,p,_){t=t!==void 0?t:[],n=n!==void 0?n:No,super(t,n,a,s,u,f,c,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Db extends vs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];n.encoding!==void 0&&(jl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gs?wn:Fi),this.texture=new dy(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cu(5,5,5),u=new xs({name:"CubemapFromEquirect",uniforms:zo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ai,blending:Cr});u.uniforms.tEquirect.value=n;const f=new Qi(s,u),c=n.minFilter;return n.minFilter===nu&&(n.minFilter=xi),new wb(1,10,this).update(t,f),n.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(t,n,a,s){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,s);t.setRenderTarget(u)}}const ap=new it,Lb=new it,Ub=new ce;class ss{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=ap.subVectors(a,n).cross(Lb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(ap),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||Ub.getNormalMatrix(t),s=this.coplanarPoint(ap).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new hf,Hc=new it;class py{constructor(t=new ss,n=new ss,a=new ss,s=new ss,u=new ss,f=new ss){this.planes=[t,n,a,s,u,f]}set(t,n,a,s,u,f){const c=this.planes;return c[0].copy(t),c[1].copy(n),c[2].copy(a),c[3].copy(s),c[4].copy(u),c[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=za){const a=this.planes,s=t.elements,u=s[0],f=s[1],c=s[2],d=s[3],p=s[4],_=s[5],g=s[6],v=s[7],y=s[8],T=s[9],M=s[10],S=s[11],x=s[12],w=s[13],A=s[14],L=s[15];if(a[0].setComponents(d-u,v-p,S-y,L-x).normalize(),a[1].setComponents(d+u,v+p,S+y,L+x).normalize(),a[2].setComponents(d+f,v+_,S+T,L+w).normalize(),a[3].setComponents(d-f,v-_,S-T,L-w).normalize(),a[4].setComponents(d-c,v-g,S-M,L-A).normalize(),n===za)a[5].setComponents(d+c,v+g,S+M,L+A).normalize();else if(n===sf)a[5].setComponents(c,g,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(Hc.x=s.normal.x>0?t.max.x:t.min.x,Hc.y=s.normal.y>0?t.max.y:t.min.y,Hc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function my(){let o=null,t=!1,n=null,a=null;function s(u,f){n(u,f),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function Nb(o,t){const n=t.isWebGL2,a=new WeakMap;function s(p,_){const g=p.array,v=p.usage,y=g.byteLength,T=o.createBuffer();o.bindBuffer(_,T),o.bufferData(_,g,v),p.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)M=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:T,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:y}}function u(p,_,g){const v=_.array,y=_._updateRange,T=_.updateRanges;if(o.bindBuffer(g,p),y.count===-1&&T.length===0&&o.bufferSubData(g,0,v),T.length!==0){for(let M=0,S=T.length;M<S;M++){const x=T[M];n?o.bufferSubData(g,x.start*v.BYTES_PER_ELEMENT,v,x.start,x.count):o.bufferSubData(g,x.start*v.BYTES_PER_ELEMENT,v.subarray(x.start,x.start+x.count))}_.clearUpdateRanges()}y.count!==-1&&(n?o.bufferSubData(g,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count):o.bufferSubData(g,y.offset*v.BYTES_PER_ELEMENT,v.subarray(y.offset,y.offset+y.count)),y.count=-1),_.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),a.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=a.get(p);_&&(o.deleteBuffer(_.buffer),a.delete(p))}function d(p,_){if(p.isGLBufferAttribute){const v=a.get(p);(!v||v.version<p.version)&&a.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=a.get(p);if(g===void 0)a.set(p,s(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(g.buffer,p,_),g.version=p.version}}return{get:f,remove:c,update:d}}class df extends Ha{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,f=n/2,c=Math.floor(a),d=Math.floor(s),p=c+1,_=d+1,g=t/c,v=n/d,y=[],T=[],M=[],S=[];for(let x=0;x<_;x++){const w=x*v-f;for(let A=0;A<p;A++){const L=A*g-u;T.push(L,-w,0),M.push(0,0,1),S.push(A/c),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let w=0;w<c;w++){const A=w+p*x,L=w+p*(x+1),F=w+1+p*(x+1),O=w+1+p*x;y.push(A,L,O),y.push(L,F,O)}this.setIndex(y),this.setAttribute("position",new ua(T,3)),this.setAttribute("normal",new ua(M,3)),this.setAttribute("uv",new ua(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new df(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,QA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_R=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ER=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Ob,alphahash_pars_fragment:Pb,alphamap_fragment:zb,alphamap_pars_fragment:Bb,alphatest_fragment:Fb,alphatest_pars_fragment:Ib,aomap_fragment:Hb,aomap_pars_fragment:Gb,batching_pars_vertex:Vb,batching_vertex:kb,begin_vertex:Xb,beginnormal_vertex:Wb,bsdfs:qb,iridescence_fragment:Yb,bumpmap_pars_fragment:jb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Kb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:Jb,color_fragment:$b,color_pars_fragment:tA,color_pars_vertex:eA,color_vertex:nA,common:iA,cube_uv_reflection_fragment:aA,defaultnormal_vertex:rA,displacementmap_pars_vertex:sA,displacementmap_vertex:oA,emissivemap_fragment:lA,emissivemap_pars_fragment:uA,colorspace_fragment:cA,colorspace_pars_fragment:fA,envmap_fragment:hA,envmap_common_pars_fragment:dA,envmap_pars_fragment:pA,envmap_pars_vertex:mA,envmap_physical_pars_fragment:RA,envmap_vertex:_A,fog_vertex:gA,fog_pars_vertex:vA,fog_fragment:xA,fog_pars_fragment:SA,gradientmap_pars_fragment:yA,lightmap_fragment:MA,lightmap_pars_fragment:EA,lights_lambert_fragment:TA,lights_lambert_pars_fragment:bA,lights_pars_begin:AA,lights_toon_fragment:CA,lights_toon_pars_fragment:wA,lights_phong_fragment:DA,lights_phong_pars_fragment:LA,lights_physical_fragment:UA,lights_physical_pars_fragment:NA,lights_fragment_begin:OA,lights_fragment_maps:PA,lights_fragment_end:zA,logdepthbuf_fragment:BA,logdepthbuf_pars_fragment:FA,logdepthbuf_pars_vertex:IA,logdepthbuf_vertex:HA,map_fragment:GA,map_pars_fragment:VA,map_particle_fragment:kA,map_particle_pars_fragment:XA,metalnessmap_fragment:WA,metalnessmap_pars_fragment:qA,morphcolor_vertex:YA,morphnormal_vertex:jA,morphtarget_pars_vertex:ZA,morphtarget_vertex:KA,normal_fragment_begin:QA,normal_fragment_maps:JA,normal_pars_fragment:$A,normal_pars_vertex:tR,normal_vertex:eR,normalmap_pars_fragment:nR,clearcoat_normal_fragment_begin:iR,clearcoat_normal_fragment_maps:aR,clearcoat_pars_fragment:rR,iridescence_pars_fragment:sR,opaque_fragment:oR,packing:lR,premultiplied_alpha_fragment:uR,project_vertex:cR,dithering_fragment:fR,dithering_pars_fragment:hR,roughnessmap_fragment:dR,roughnessmap_pars_fragment:pR,shadowmap_pars_fragment:mR,shadowmap_pars_vertex:_R,shadowmap_vertex:gR,shadowmask_pars_fragment:vR,skinbase_vertex:xR,skinning_pars_vertex:SR,skinning_vertex:yR,skinnormal_vertex:MR,specularmap_fragment:ER,specularmap_pars_fragment:TR,tonemapping_fragment:bR,tonemapping_pars_fragment:AR,transmission_fragment:RR,transmission_pars_fragment:CR,uv_pars_fragment:wR,uv_pars_vertex:DR,uv_vertex:LR,worldpos_vertex:UR,background_vert:NR,background_frag:OR,backgroundCube_vert:PR,backgroundCube_frag:zR,cube_vert:BR,cube_frag:FR,depth_vert:IR,depth_frag:HR,distanceRGBA_vert:GR,distanceRGBA_frag:VR,equirect_vert:kR,equirect_frag:XR,linedashed_vert:WR,linedashed_frag:qR,meshbasic_vert:YR,meshbasic_frag:jR,meshlambert_vert:ZR,meshlambert_frag:KR,meshmatcap_vert:QR,meshmatcap_frag:JR,meshnormal_vert:$R,meshnormal_frag:t2,meshphong_vert:e2,meshphong_frag:n2,meshphysical_vert:i2,meshphysical_frag:a2,meshtoon_vert:r2,meshtoon_frag:s2,points_vert:o2,points_frag:l2,shadow_vert:u2,shadow_frag:c2,sprite_vert:f2,sprite_frag:h2},At={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},aa={basic:{uniforms:Gn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Gn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ee(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Gn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Gn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Gn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Ee(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Gn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Gn([At.points,At.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Gn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Gn([At.common,At.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Gn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Gn([At.sprite,At.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Gn([At.common,At.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Gn([At.lights,At.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};aa.physical={uniforms:Gn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Gc={r:0,b:0,g:0};function d2(o,t,n,a,s,u,f){const c=new Ee(0);let d=u===!0?0:1,p,_,g=null,v=0,y=null;function T(S,x){let w=!1,A=x.isScene===!0?x.background:null;A&&A.isTexture&&(A=(x.backgroundBlurriness>0?n:t).get(A)),A===null?M(c,d):A&&A.isColor&&(M(A,1),w=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(o.autoClear||w)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),A&&(A.isCubeTexture||A.mapping===cf)?(_===void 0&&(_=new Qi(new cu(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:zo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,O,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),_.material.uniforms.envMap.value=A,_.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,_.material.toneMapped=Ne.getTransfer(A.colorSpace)!==ke,(g!==A||v!==A.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=A,v=A.version,y=o.toneMapping),_.layers.enableAll(),S.unshift(_,_.geometry,_.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Qi(new df(2,2),new xs({name:"BackgroundMaterial",uniforms:zo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(A.colorSpace)!==ke,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=A,v=A.version,y=o.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null))}function M(S,x){S.getRGB(Gc,fy(o)),a.buffers.color.setClear(Gc.r,Gc.g,Gc.b,x,f)}return{getClearColor:function(){return c},setClearColor:function(S,x=1){c.set(S),d=x,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(S){d=S,M(c,d)},render:T}}function p2(o,t,n,a){const s=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=a.isWebGL2?null:t.get("OES_vertex_array_object"),f=a.isWebGL2||u!==null,c={},d=S(null);let p=d,_=!1;function g(k,Z,z,H,K){let ot=!1;if(f){const ft=M(H,z,Z);p!==ft&&(p=ft,y(p.object)),ot=x(k,H,z,K),ot&&w(k,H,z,K)}else{const ft=Z.wireframe===!0;(p.geometry!==H.id||p.program!==z.id||p.wireframe!==ft)&&(p.geometry=H.id,p.program=z.id,p.wireframe=ft,ot=!0)}K!==null&&n.update(K,o.ELEMENT_ARRAY_BUFFER),(ot||_)&&(_=!1,X(k,Z,z,H),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))}function v(){return a.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function y(k){return a.isWebGL2?o.bindVertexArray(k):u.bindVertexArrayOES(k)}function T(k){return a.isWebGL2?o.deleteVertexArray(k):u.deleteVertexArrayOES(k)}function M(k,Z,z){const H=z.wireframe===!0;let K=c[k.id];K===void 0&&(K={},c[k.id]=K);let ot=K[Z.id];ot===void 0&&(ot={},K[Z.id]=ot);let ft=ot[H];return ft===void 0&&(ft=S(v()),ot[H]=ft),ft}function S(k){const Z=[],z=[],H=[];for(let K=0;K<s;K++)Z[K]=0,z[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:z,attributeDivisors:H,object:k,attributes:{},index:null}}function x(k,Z,z,H){const K=p.attributes,ot=Z.attributes;let ft=0;const P=z.getAttributes();for(const V in P)if(P[V].location>=0){const Y=K[V];let dt=ot[V];if(dt===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(dt=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(dt=k.instanceColor)),Y===void 0||Y.attribute!==dt||dt&&Y.data!==dt.data)return!0;ft++}return p.attributesNum!==ft||p.index!==H}function w(k,Z,z,H){const K={},ot=Z.attributes;let ft=0;const P=z.getAttributes();for(const V in P)if(P[V].location>=0){let Y=ot[V];Y===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(Y=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(Y=k.instanceColor));const dt={};dt.attribute=Y,Y&&Y.data&&(dt.data=Y.data),K[V]=dt,ft++}p.attributes=K,p.attributesNum=ft,p.index=H}function A(){const k=p.newAttributes;for(let Z=0,z=k.length;Z<z;Z++)k[Z]=0}function L(k){F(k,0)}function F(k,Z){const z=p.newAttributes,H=p.enabledAttributes,K=p.attributeDivisors;z[k]=1,H[k]===0&&(o.enableVertexAttribArray(k),H[k]=1),K[k]!==Z&&((a.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Z),K[k]=Z)}function O(){const k=p.newAttributes,Z=p.enabledAttributes;for(let z=0,H=Z.length;z<H;z++)Z[z]!==k[z]&&(o.disableVertexAttribArray(z),Z[z]=0)}function D(k,Z,z,H,K,ot,ft){ft===!0?o.vertexAttribIPointer(k,Z,z,K,ot):o.vertexAttribPointer(k,Z,z,H,K,ot)}function X(k,Z,z,H){if(a.isWebGL2===!1&&(k.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();const K=H.attributes,ot=z.getAttributes(),ft=Z.defaultAttributeValues;for(const P in ot){const V=ot[P];if(V.location>=0){let G=K[P];if(G===void 0&&(P==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),P==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){const Y=G.normalized,dt=G.itemSize,xt=n.get(G);if(xt===void 0)continue;const Mt=xt.buffer,Tt=xt.type,Ot=xt.bytesPerElement,Wt=a.isWebGL2===!0&&(Tt===o.INT||Tt===o.UNSIGNED_INT||G.gpuType===YS);if(G.isInterleavedBufferAttribute){const ue=G.data,at=ue.stride,vn=G.offset;if(ue.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)F(V.location+It,ue.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let It=0;It<V.locationSize;It++)L(V.location+It);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let It=0;It<V.locationSize;It++)D(V.location+It,dt/V.locationSize,Tt,Y,at*Ot,(vn+dt/V.locationSize*It)*Ot,Wt)}else{if(G.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)F(V.location+ue,G.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ue=0;ue<V.locationSize;ue++)L(V.location+ue);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let ue=0;ue<V.locationSize;ue++)D(V.location+ue,dt/V.locationSize,Tt,Y,dt*Ot,dt/V.locationSize*ue*Ot,Wt)}}else if(ft!==void 0){const Y=ft[P];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(V.location,Y);break;case 3:o.vertexAttrib3fv(V.location,Y);break;case 4:o.vertexAttrib4fv(V.location,Y);break;default:o.vertexAttrib1fv(V.location,Y)}}}}O()}function b(){$();for(const k in c){const Z=c[k];for(const z in Z){const H=Z[z];for(const K in H)T(H[K].object),delete H[K];delete Z[z]}delete c[k]}}function U(k){if(c[k.id]===void 0)return;const Z=c[k.id];for(const z in Z){const H=Z[z];for(const K in H)T(H[K].object),delete H[K];delete Z[z]}delete c[k.id]}function J(k){for(const Z in c){const z=c[Z];if(z[k.id]===void 0)continue;const H=z[k.id];for(const K in H)T(H[K].object),delete H[K];delete z[k.id]}}function $(){ht(),_=!0,p!==d&&(p=d,y(p.object))}function ht(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:$,resetDefaultState:ht,dispose:b,releaseStatesOfGeometry:U,releaseStatesOfProgram:J,initAttributes:A,enableAttribute:L,disableUnusedAttributes:O}}function m2(o,t,n,a){const s=a.isWebGL2;let u;function f(_){u=_}function c(_,g){o.drawArrays(u,_,g),n.update(g,u,1)}function d(_,g,v){if(v===0)return;let y,T;if(s)y=o,T="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[T](u,_,g,v),n.update(g,u,v)}function p(_,g,v){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<v;T++)this.render(_[T],g[T]);else{y.multiDrawArraysWEBGL(u,_,0,g,0,v);let T=0;for(let M=0;M<v;M++)T+=g[M];n.update(T,u,1)}}this.setMode=f,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function _2(o,t,n){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");a=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const d=u(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=f||t.has("WEBGL_draw_buffers"),_=n.logarithmicDepthBuffer===!0,g=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),x=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,L=f||t.has("OES_texture_float"),F=A&&L,O=f?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:s,getMaxPrecision:u,precision:c,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:A,floatFragmentTextures:L,floatVertexTextures:F,maxSamples:O}}function g2(o){const t=this;let n=null,a=0,s=!1,u=!1;const f=new ss,c=new ce,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||T===null||T.length===0||u&&!S)u?_(null):p();else{const w=u?0:a,A=w*4;let L=x.clippingState||null;d.value=L,L=_(T,v,A,y);for(let F=0;F!==A;++F)L[F]=n[F];x.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,T){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,T!==!0||S===null){const x=y+M*4,w=v.matrixWorldInverse;c.getNormalMatrix(w),(S===null||S.length<x)&&(S=new Float32Array(x));for(let A=0,L=y;A!==M;++A,L+=4)f.copy(g[A]).applyMatrix4(w,c),f.normal.toArray(S,L),S[L+3]=f.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function v2(o){let t=new WeakMap;function n(f,c){return c===Cp?f.mapping=No:c===wp&&(f.mapping=Oo),f}function a(f){if(f&&f.isTexture){const c=f.mapping;if(c===Cp||c===wp)if(t.has(f)){const d=t.get(f).texture;return n(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new Db(d.height/2);return p.fromEquirectangularTexture(o,f),t.set(f,p),f.addEventListener("dispose",s),n(p.texture,f.mapping)}else return null}}return f}function s(f){const c=f.target;c.removeEventListener("dispose",s);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}class x2 extends hy{constructor(t=-1,n=1,a=1,s=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,f=a+t,c=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,c-=_*this.view.offsetY,d=c-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const So=4,mx=[.125,.215,.35,.446,.526,.582],us=20,rp=new x2,_x=new Ee;let sp=null,op=0,lp=0;const os=(1+Math.sqrt(5))/2,go=1/os,gx=[new it(1,1,1),new it(-1,1,1),new it(1,1,-1),new it(-1,1,-1),new it(0,os,go),new it(0,os,-go),new it(go,0,os),new it(-go,0,os),new it(os,go,0),new it(-os,go,0)];class vx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100){sp=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,a,s,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sp,op,lp),t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===No||t.mapping===Oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sp=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel();const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:iu,format:Ki,colorSpace:Ia,depthBuffer:!1},s=xx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xx(t,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S2(u)),this._blurMaterial=y2(u,t,n)}return s}_compileMaterial(t){const n=new Qi(this._lodPlanes[0],t);this._renderer.compile(n,rp)}_sceneToCubeUV(t,n,a,s){const c=new Bi(90,1,n,a),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(_x),_.toneMapping=wr,_.autoClear=!1;const y=new am({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),T=new Qi(new cu,y);let M=!1;const S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,M=!0):(y.color.copy(_x),M=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(c.up.set(0,d[x],0),c.lookAt(p[x],0,0)):w===1?(c.up.set(0,0,d[x]),c.lookAt(0,p[x],0)):(c.up.set(0,d[x],0),c.lookAt(0,0,p[x]));const A=this._cubeSize;Vc(s,w*A,x>2?A:0,A,A),_.setRenderTarget(s),M&&_.render(T,c),_.render(t,c)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=g,t.background=S}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===No||t.mapping===Oo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const u=s?this._cubemapMaterial:this._equirectMaterial,f=new Qi(this._lodPlanes[0],u),c=u.uniforms;c.envMap.value=t;const d=this._cubeSize;Vc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(f,rp)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const u=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),f=gx[(s-1)%gx.length];this._blur(t,s-1,s,u,f)}n.autoClear=a}_blur(t,n,a,s,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,s,"latitudinal",u),this._halfBlur(f,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,f,c){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Qi(this._lodPlanes[s],p),v=p.uniforms,y=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*us-1),M=u/T,S=isFinite(u)?1+Math.floor(_*M):us;S>us&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${us}`);const x=[];let w=0;for(let D=0;D<us;++D){const X=D/M,b=Math.exp(-X*X/2);x.push(b),D===0?w+=b:D<S&&(w+=2*b)}for(let D=0;D<x.length;D++)x[D]=x[D]/w;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:A}=this;v.dTheta.value=T,v.mipInt.value=A-a;const L=this._sizeLods[s],F=3*L*(s>A-So?s-A+So:0),O=4*(this._cubeSize-L);Vc(n,F,O,3*L,2*L),d.setRenderTarget(n),d.render(g,rp)}}function S2(o){const t=[],n=[],a=[];let s=o;const u=o-So+1+mx.length;for(let f=0;f<u;f++){const c=Math.pow(2,s);n.push(c);let d=1/c;f>o-So?d=mx[f-o+So-1]:f===0&&(d=0),a.push(d);const p=1/(c-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,M=3,S=2,x=1,w=new Float32Array(M*T*y),A=new Float32Array(S*T*y),L=new Float32Array(x*T*y);for(let O=0;O<y;O++){const D=O%3*2/3-1,X=O>2?0:-1,b=[D,X,0,D+2/3,X,0,D+2/3,X+1,0,D,X,0,D+2/3,X+1,0,D,X+1,0];w.set(b,M*T*O),A.set(v,S*T*O);const U=[O,O,O,O,O,O];L.set(U,x*T*O)}const F=new Ha;F.setAttribute("position",new la(w,M)),F.setAttribute("uv",new la(A,S)),F.setAttribute("faceIndex",new la(L,x)),t.push(F),s>So&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function xx(o,t,n){const a=new vs(o,t,n);return a.texture.mapping=cf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Vc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function y2(o,t,n){const a=new Float32Array(us),s=new it(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Sx(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function yx(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function rm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M2(o){let t=new WeakMap,n=null;function a(c){if(c&&c.isTexture){const d=c.mapping,p=d===Cp||d===wp,_=d===No||d===Oo;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=t.get(c);return n===null&&(n=new vx(o)),g=p?n.fromEquirectangular(c,g):n.fromCubemap(c,g),t.set(c,g),g.texture}else{if(t.has(c))return t.get(c).texture;{const g=c.image;if(p&&g&&g.height>0||_&&g&&s(g)){n===null&&(n=new vx(o));const v=p?n.fromEquirectangular(c):n.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",u),v.texture}else return null}}}return c}function s(c){let d=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&d++;return d===p}function u(c){const d=c.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function E2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(a){a.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(a){const s=n(a);return s===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function T2(o,t,n,a){const s={},u=new WeakMap;function f(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);for(const T in v.morphAttributes){const M=v.morphAttributes[T];for(let S=0,x=M.length;S<x;S++)t.remove(M[S])}v.removeEventListener("dispose",f),delete s[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(g,v){return s[v.id]===!0||(v.addEventListener("dispose",f),s[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const T in v)t.update(v[T],o.ARRAY_BUFFER);const y=g.morphAttributes;for(const T in y){const M=y[T];for(let S=0,x=M.length;S<x;S++)t.update(M[S],o.ARRAY_BUFFER)}}function p(g){const v=[],y=g.index,T=g.attributes.position;let M=0;if(y!==null){const w=y.array;M=y.version;for(let A=0,L=w.length;A<L;A+=3){const F=w[A+0],O=w[A+1],D=w[A+2];v.push(F,O,O,D,D,F)}}else if(T!==void 0){const w=T.array;M=T.version;for(let A=0,L=w.length/3-1;A<L;A+=3){const F=A+0,O=A+1,D=A+2;v.push(F,O,O,D,D,F)}}else return;const S=new(ny(v)?cy:uy)(v,1);S.version=M;const x=u.get(g);x&&t.remove(x),u.set(g,S)}function _(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:c,update:d,getWireframeAttribute:_}}function b2(o,t,n,a){const s=a.isWebGL2;let u;function f(y){u=y}let c,d;function p(y){c=y.type,d=y.bytesPerElement}function _(y,T){o.drawElements(u,T,c,y*d),n.update(T,u,1)}function g(y,T,M){if(M===0)return;let S,x;if(s)S=o,x="drawElementsInstanced";else if(S=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[x](u,T,c,y*d,M),n.update(T,u,M)}function v(y,T,M){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<M;x++)this.render(y[x]/d,T[x]);else{S.multiDrawElementsWEBGL(u,T,0,c,y,0,M);let x=0;for(let w=0;w<M;w++)x+=T[w];n.update(x,u,1)}}this.setMode=f,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=v}function A2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,c){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=c*(u/3);break;case o.LINES:n.lines+=c*(u/2);break;case o.LINE_STRIP:n.lines+=c*(u-1);break;case o.LINE_LOOP:n.lines+=c*u;break;case o.POINTS:n.points+=c*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function R2(o,t){return o[0]-t[0]}function C2(o,t){return Math.abs(t[1])-Math.abs(o[1])}function w2(o,t,n){const a={},s=new Float32Array(8),u=new WeakMap,f=new Dn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function d(p,_,g){const v=p.morphTargetInfluences;if(t.isWebGL2===!0){const T=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,M=T!==void 0?T.length:0;let S=u.get(_);if(S===void 0||S.count!==M){let Z=function(){ht.dispose(),u.delete(_),_.removeEventListener("dispose",Z)};var y=Z;S!==void 0&&S.texture.dispose();const A=_.morphAttributes.position!==void 0,L=_.morphAttributes.normal!==void 0,F=_.morphAttributes.color!==void 0,O=_.morphAttributes.position||[],D=_.morphAttributes.normal||[],X=_.morphAttributes.color||[];let b=0;A===!0&&(b=1),L===!0&&(b=2),F===!0&&(b=3);let U=_.attributes.position.count*b,J=1;U>t.maxTextureSize&&(J=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const $=new Float32Array(U*J*4*M),ht=new ry($,U,J,M);ht.type=Tr,ht.needsUpdate=!0;const k=b*4;for(let z=0;z<M;z++){const H=O[z],K=D[z],ot=X[z],ft=U*J*4*z;for(let P=0;P<H.count;P++){const V=P*k;A===!0&&(f.fromBufferAttribute(H,P),$[ft+V+0]=f.x,$[ft+V+1]=f.y,$[ft+V+2]=f.z,$[ft+V+3]=0),L===!0&&(f.fromBufferAttribute(K,P),$[ft+V+4]=f.x,$[ft+V+5]=f.y,$[ft+V+6]=f.z,$[ft+V+7]=0),F===!0&&(f.fromBufferAttribute(ot,P),$[ft+V+8]=f.x,$[ft+V+9]=f.y,$[ft+V+10]=f.z,$[ft+V+11]=ot.itemSize===4?f.w:1)}}S={count:M,texture:ht,size:new Oe(U,J)},u.set(_,S),_.addEventListener("dispose",Z)}let x=0;for(let A=0;A<v.length;A++)x+=v[A];const w=_.morphTargetsRelative?1:1-x;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",v),g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,n),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const T=v===void 0?0:v.length;let M=a[_.id];if(M===void 0||M.length!==T){M=[];for(let L=0;L<T;L++)M[L]=[L,0];a[_.id]=M}for(let L=0;L<T;L++){const F=M[L];F[0]=L,F[1]=v[L]}M.sort(C2);for(let L=0;L<8;L++)L<T&&M[L][1]?(c[L][0]=M[L][0],c[L][1]=M[L][1]):(c[L][0]=Number.MAX_SAFE_INTEGER,c[L][1]=0);c.sort(R2);const S=_.morphAttributes.position,x=_.morphAttributes.normal;let w=0;for(let L=0;L<8;L++){const F=c[L],O=F[0],D=F[1];O!==Number.MAX_SAFE_INTEGER&&D?(S&&_.getAttribute("morphTarget"+L)!==S[O]&&_.setAttribute("morphTarget"+L,S[O]),x&&_.getAttribute("morphNormal"+L)!==x[O]&&_.setAttribute("morphNormal"+L,x[O]),s[L]=D,w+=D):(S&&_.hasAttribute("morphTarget"+L)===!0&&_.deleteAttribute("morphTarget"+L),x&&_.hasAttribute("morphNormal"+L)===!0&&_.deleteAttribute("morphNormal"+L),s[L]=0)}const A=_.morphTargetsRelative?1:1-w;g.getUniforms().setValue(o,"morphTargetBaseInfluence",A),g.getUniforms().setValue(o,"morphTargetInfluences",s)}}return{update:d}}function D2(o,t,n,a){let s=new WeakMap;function u(d){const p=a.render.frame,_=d.geometry,g=t.get(d,_);if(s.get(g)!==p&&(t.update(g),s.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return g}function f(){s=new WeakMap}function c(d){const p=d.target;p.removeEventListener("dispose",c),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:f}}class _y extends ri{constructor(t,n,a,s,u,f,c,d,p,_){if(_=_!==void 0?_:_s,_!==_s&&_!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&_===_s&&(a=Er),a===void 0&&_===Po&&(a=ms),super(null,s,u,f,c,d,_,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=c!==void 0?c:kn,this.minFilter=d!==void 0?d:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gy=new ri,vy=new _y(1,1);vy.compareFunction=ey;const xy=new ry,Sy=new db,yy=new dy,Mx=[],Ex=[],Tx=new Float32Array(16),bx=new Float32Array(9),Ax=new Float32Array(4);function Fo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=Mx[s];if(u===void 0&&(u=new Float32Array(s),Mx[s]=u),t!==0){a.toArray(u,0);for(let f=1,c=0;f!==t;++f)c+=n,o[f].toArray(u,c)}return u}function _n(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function gn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function pf(o,t){let n=Ex[t];n===void 0&&(n=new Int32Array(t),Ex[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function L2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function U2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;o.uniform2fv(this.addr,t),gn(n,t)}}function N2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;o.uniform3fv(this.addr,t),gn(n,t)}}function O2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;o.uniform4fv(this.addr,t),gn(n,t)}}function P2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(_n(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(_n(n,a))return;Ax.set(a),o.uniformMatrix2fv(this.addr,!1,Ax),gn(n,a)}}function z2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(_n(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(_n(n,a))return;bx.set(a),o.uniformMatrix3fv(this.addr,!1,bx),gn(n,a)}}function B2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(_n(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(_n(n,a))return;Tx.set(a),o.uniformMatrix4fv(this.addr,!1,Tx),gn(n,a)}}function F2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function I2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;o.uniform2iv(this.addr,t),gn(n,t)}}function H2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;o.uniform3iv(this.addr,t),gn(n,t)}}function G2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;o.uniform4iv(this.addr,t),gn(n,t)}}function V2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function k2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;o.uniform2uiv(this.addr,t),gn(n,t)}}function X2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;o.uniform3uiv(this.addr,t),gn(n,t)}}function W2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;o.uniform4uiv(this.addr,t),gn(n,t)}}function q2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);const u=this.type===o.SAMPLER_2D_SHADOW?vy:gy;n.setTexture2D(t||u,s)}function Y2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||Sy,s)}function j2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||yy,s)}function Z2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||xy,s)}function K2(o){switch(o){case 5126:return L2;case 35664:return U2;case 35665:return N2;case 35666:return O2;case 35674:return P2;case 35675:return z2;case 35676:return B2;case 5124:case 35670:return F2;case 35667:case 35671:return I2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return k2;case 36295:return X2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return Z2}}function Q2(o,t){o.uniform1fv(this.addr,t)}function J2(o,t){const n=Fo(t,this.size,2);o.uniform2fv(this.addr,n)}function $2(o,t){const n=Fo(t,this.size,3);o.uniform3fv(this.addr,n)}function tC(o,t){const n=Fo(t,this.size,4);o.uniform4fv(this.addr,n)}function eC(o,t){const n=Fo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function nC(o,t){const n=Fo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function iC(o,t){const n=Fo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function aC(o,t){o.uniform1iv(this.addr,t)}function rC(o,t){o.uniform2iv(this.addr,t)}function sC(o,t){o.uniform3iv(this.addr,t)}function oC(o,t){o.uniform4iv(this.addr,t)}function lC(o,t){o.uniform1uiv(this.addr,t)}function uC(o,t){o.uniform2uiv(this.addr,t)}function cC(o,t){o.uniform3uiv(this.addr,t)}function fC(o,t){o.uniform4uiv(this.addr,t)}function hC(o,t,n){const a=this.cache,s=t.length,u=pf(n,s);_n(a,u)||(o.uniform1iv(this.addr,u),gn(a,u));for(let f=0;f!==s;++f)n.setTexture2D(t[f]||gy,u[f])}function dC(o,t,n){const a=this.cache,s=t.length,u=pf(n,s);_n(a,u)||(o.uniform1iv(this.addr,u),gn(a,u));for(let f=0;f!==s;++f)n.setTexture3D(t[f]||Sy,u[f])}function pC(o,t,n){const a=this.cache,s=t.length,u=pf(n,s);_n(a,u)||(o.uniform1iv(this.addr,u),gn(a,u));for(let f=0;f!==s;++f)n.setTextureCube(t[f]||yy,u[f])}function mC(o,t,n){const a=this.cache,s=t.length,u=pf(n,s);_n(a,u)||(o.uniform1iv(this.addr,u),gn(a,u));for(let f=0;f!==s;++f)n.setTexture2DArray(t[f]||xy,u[f])}function _C(o){switch(o){case 5126:return Q2;case 35664:return J2;case 35665:return $2;case 35666:return tC;case 35674:return eC;case 35675:return nC;case 35676:return iC;case 5124:case 35670:return aC;case 35667:case 35671:return rC;case 35668:case 35672:return sC;case 35669:case 35673:return oC;case 5125:return lC;case 36294:return uC;case 36295:return cC;case 36296:return fC;case 35678:case 36198:case 36298:case 36306:case 35682:return hC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return pC;case 36289:case 36303:case 36311:case 36292:return mC}}class gC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=K2(n.type)}}class vC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_C(n.type)}}class xC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,f=s.length;u!==f;++u){const c=s[u];c.setValue(t,n[c.id],a)}}}const up=/(\w+)(\])?(\[|\.)?/g;function Rx(o,t){o.seq.push(t),o.map[t.id]=t}function SC(o,t,n){const a=o.name,s=a.length;for(up.lastIndex=0;;){const u=up.exec(a),f=up.lastIndex;let c=u[1];const d=u[2]==="]",p=u[3];if(d&&(c=c|0),p===void 0||p==="["&&f+2===s){Rx(n,p===void 0?new gC(c,o,t):new vC(c,o,t));break}else{let g=n.map[c];g===void 0&&(g=new xC(c),Rx(n,g)),n=g}}}class Yc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(n,s),f=t.getUniformLocation(n,u.name);SC(u,f,this)}}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,f=n.length;u!==f;++u){const c=n[u],d=a[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const f=t[s];f.id in n&&a.push(f)}return a}}function Cx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const yC=37297;let MC=0;function EC(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let f=s;f<u;f++){const c=f+1;a.push(`${c===t?">":" "} ${c}: ${n[f]}`)}return a.join(`
`)}function TC(o){const t=Ne.getPrimaries(Ne.workingColorSpace),n=Ne.getPrimaries(o);let a;switch(t===n?a="":t===rf&&n===af?a="LinearDisplayP3ToLinearSRGB":t===af&&n===rf&&(a="LinearSRGBToLinearDisplayP3"),o){case Ia:case ff:return[a,"LinearTransferOETF"];case wn:case im:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[a,"LinearTransferOETF"]}}function wx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(a&&s==="")return"";const u=/ERROR: 0:(\d+)/.exec(s);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+s+`

`+EC(o.getShaderSource(t),f)}else return s}function bC(o,t){const n=TC(t);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AC(o,t){let n;switch(t){case P1:n="Linear";break;case z1:n="Reinhard";break;case B1:n="OptimizedCineon";break;case F1:n="ACESFilmic";break;case H1:n="AgX";break;case I1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RC(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yo).join(`
`)}function CC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(yo).join(`
`)}function wC(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function DC(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),f=u.name;let c=1;u.type===o.FLOAT_MAT2&&(c=2),u.type===o.FLOAT_MAT3&&(c=3),u.type===o.FLOAT_MAT4&&(c=4),n[f]={type:u.type,location:o.getAttribLocation(t,f),locationSize:c}}return n}function yo(o){return o!==""}function Dx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(o){return o.replace(LC,NC)}const UC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NC(o,t){let n=oe[t];if(n===void 0){const a=UC.get(t);if(a!==void 0)n=oe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Pp(n)}const OC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ux(o){return o.replace(OC,PC)}function PC(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function Nx(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===XS?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===u1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Na&&(t="SHADOWMAP_TYPE_VSM"),t}function BC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case No:case Oo:t="ENVMAP_TYPE_CUBE";break;case cf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function FC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Oo:t="ENVMAP_MODE_REFRACTION";break}return t}function IC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case WS:t="ENVMAP_BLENDING_MULTIPLY";break;case N1:t="ENVMAP_BLENDING_MIX";break;case O1:t="ENVMAP_BLENDING_ADD";break}return t}function HC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function GC(o,t,n,a){const s=o.getContext(),u=n.defines;let f=n.vertexShader,c=n.fragmentShader;const d=zC(n),p=BC(n),_=FC(n),g=IC(n),v=HC(n),y=n.isWebGL2?"":RC(n),T=CC(n),M=wC(u),S=s.createProgram();let x,w,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(yo).join(`
`),x.length>0&&(x+=`
`),w=[y,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(yo).join(`
`),w.length>0&&(w+=`
`)):(x=[Nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),w=[y,Nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?oe.tonemapping_pars_fragment:"",n.toneMapping!==wr?AC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,bC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),f=Pp(f),f=Dx(f,n),f=Lx(f,n),c=Pp(c),c=Dx(c,n),c=Lx(c,n),f=Ux(f),c=Ux(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,w=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Qv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const L=A+x+f,F=A+w+c,O=Cx(s,s.VERTEX_SHADER,L),D=Cx(s,s.FRAGMENT_SHADER,F);s.attachShader(S,O),s.attachShader(S,D),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function X($){if(o.debug.checkShaderErrors){const ht=s.getProgramInfoLog(S).trim(),k=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(D).trim();let z=!0,H=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,S,O,D);else{const K=wx(s,O,"vertex"),ot=wx(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Program Info Log: `+ht+`
`+K+`
`+ot)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(k===""||Z==="")&&(H=!1);H&&($.diagnostics={runnable:z,programLog:ht,vertexShader:{log:k,prefix:x},fragmentShader:{log:Z,prefix:w}})}s.deleteShader(O),s.deleteShader(D),b=new Yc(s,S),U=DC(s,S)}let b;this.getUniforms=function(){return b===void 0&&X(this),b};let U;this.getAttributes=function(){return U===void 0&&X(this),U};let J=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(S,yC)),J},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MC++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=D,this}let VC=0;class kC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new XC(t),n.set(t,a)),a}}class XC{constructor(t){this.id=VC++,this.code=t,this.usedTimes=0}}function WC(o,t,n,a,s,u,f){const c=new oy,d=new kC,p=[],_=s.isWebGL2,g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return b===0?"uv":`uv${b}`}function S(b,U,J,$,ht){const k=$.fog,Z=ht.geometry,z=b.isMeshStandardMaterial?$.environment:null,H=(b.isMeshStandardMaterial?n:t).get(b.envMap||z),K=H&&H.mapping===cf?H.image.height:null,ot=T[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,P=ft!==void 0?ft.length:0;let V=0;Z.morphAttributes.position!==void 0&&(V=1),Z.morphAttributes.normal!==void 0&&(V=2),Z.morphAttributes.color!==void 0&&(V=3);let G,Y,dt,xt;if(ot){const tn=aa[ot];G=tn.vertexShader,Y=tn.fragmentShader}else G=b.vertexShader,Y=b.fragmentShader,d.update(b),dt=d.getVertexShaderID(b),xt=d.getFragmentShaderID(b);const Mt=o.getRenderTarget(),Tt=ht.isInstancedMesh===!0,Ot=ht.isBatchedMesh===!0,Wt=!!b.map,ue=!!b.matcap,at=!!H,vn=!!b.aoMap,It=!!b.lightMap,Qt=!!b.bumpMap,Bt=!!b.normalMap,He=!!b.displacementMap,ee=!!b.emissiveMap,B=!!b.metalnessMap,C=!!b.roughnessMap,st=b.anisotropy>0,yt=b.clearcoat>0,St=b.iridescence>0,gt=b.sheen>0,Ht=b.transmission>0,Ct=st&&!!b.anisotropyMap,Nt=yt&&!!b.clearcoatMap,qt=yt&&!!b.clearcoatNormalMap,ie=yt&&!!b.clearcoatRoughnessMap,vt=St&&!!b.iridescenceMap,Me=St&&!!b.iridescenceThicknessMap,le=gt&&!!b.sheenColorMap,Kt=gt&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Dt=!!b.specularColorMap,kt=!!b.specularIntensityMap,Se=Ht&&!!b.transmissionMap,Xe=Ht&&!!b.thicknessMap,re=!!b.gradientMap,Et=!!b.alphaMap,W=b.alphaTest>0,Rt=!!b.alphaHash,bt=!!b.extensions,jt=!!Z.attributes.uv1,Gt=!!Z.attributes.uv2,Ce=!!Z.attributes.uv3;let Te=wr;return b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Te=o.toneMapping),{isWebGL2:_,shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:Y,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ot,instancing:Tt,instancingColor:Tt&&ht.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ia,map:Wt,matcap:ue,envMap:at,envMapMode:at&&H.mapping,envMapCubeUVHeight:K,aoMap:vn,lightMap:It,bumpMap:Qt,normalMap:Bt,displacementMap:v&&He,emissiveMap:ee,normalMapObjectSpace:Bt&&b.normalMapType===$1,normalMapTangentSpace:Bt&&b.normalMapType===J1,metalnessMap:B,roughnessMap:C,anisotropy:st,anisotropyMap:Ct,clearcoat:yt,clearcoatMap:Nt,clearcoatNormalMap:qt,clearcoatRoughnessMap:ie,iridescence:St,iridescenceMap:vt,iridescenceThicknessMap:Me,sheen:gt,sheenColorMap:le,sheenRoughnessMap:Kt,specularMap:Lt,specularColorMap:Dt,specularIntensityMap:kt,transmission:Ht,transmissionMap:Se,thicknessMap:Xe,gradientMap:re,opaque:b.transparent===!1&&b.blending===bo,alphaMap:Et,alphaTest:W,alphaHash:Rt,combine:b.combine,mapUv:Wt&&M(b.map.channel),aoMapUv:vn&&M(b.aoMap.channel),lightMapUv:It&&M(b.lightMap.channel),bumpMapUv:Qt&&M(b.bumpMap.channel),normalMapUv:Bt&&M(b.normalMap.channel),displacementMapUv:He&&M(b.displacementMap.channel),emissiveMapUv:ee&&M(b.emissiveMap.channel),metalnessMapUv:B&&M(b.metalnessMap.channel),roughnessMapUv:C&&M(b.roughnessMap.channel),anisotropyMapUv:Ct&&M(b.anisotropyMap.channel),clearcoatMapUv:Nt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:qt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&M(b.sheenRoughnessMap.channel),specularMapUv:Lt&&M(b.specularMap.channel),specularColorMapUv:Dt&&M(b.specularColorMap.channel),specularIntensityMapUv:kt&&M(b.specularIntensityMap.channel),transmissionMapUv:Se&&M(b.transmissionMap.channel),thicknessMapUv:Xe&&M(b.thicknessMap.channel),alphaMapUv:Et&&M(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Bt||st),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:jt,vertexUv2s:Gt,vertexUv3s:Ce,pointsUvs:ht.isPoints===!0&&!!Z.attributes.uv&&(Wt||Et),fog:!!k,useFog:b.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:ht.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:V,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Te,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Wt&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sa,flipSided:b.side===ai,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:bt&&b.extensions.derivatives===!0,extensionFragDepth:bt&&b.extensions.fragDepth===!0,extensionDrawBuffers:bt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&b.extensions.clipCullDistance&&a.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||a.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function x(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const J in b.defines)U.push(J),U.push(b.defines[J]);return b.isRawShaderMaterial===!1&&(w(U,b),A(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function w(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function A(b,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.matcap&&c.enable(4),U.envMap&&c.enable(5),U.normalMapObjectSpace&&c.enable(6),U.normalMapTangentSpace&&c.enable(7),U.clearcoat&&c.enable(8),U.iridescence&&c.enable(9),U.alphaTest&&c.enable(10),U.vertexColors&&c.enable(11),U.vertexAlphas&&c.enable(12),U.vertexUv1s&&c.enable(13),U.vertexUv2s&&c.enable(14),U.vertexUv3s&&c.enable(15),U.vertexTangents&&c.enable(16),U.anisotropy&&c.enable(17),U.alphaHash&&c.enable(18),U.batching&&c.enable(19),b.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),b.push(c.mask)}function L(b){const U=T[b.type];let J;if(U){const $=aa[U];J=Ab.clone($.uniforms)}else J=b.uniforms;return J}function F(b,U){let J;for(let $=0,ht=p.length;$<ht;$++){const k=p[$];if(k.cacheKey===U){J=k,++J.usedTimes;break}}return J===void 0&&(J=new GC(o,U,b,u),p.push(J)),J}function O(b){if(--b.usedTimes===0){const U=p.indexOf(b);p[U]=p[p.length-1],p.pop(),b.destroy()}}function D(b){d.remove(b)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:L,acquireProgram:F,releaseProgram:O,releaseShaderCache:D,programs:p,dispose:X}}function qC(){let o=new WeakMap;function t(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function n(u){o.delete(u)}function a(u,f,c){o.get(u)[f]=c}function s(){o=new WeakMap}return{get:t,remove:n,update:a,dispose:s}}function YC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ox(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Px(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function f(g,v,y,T,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function c(g,v,y,T,M,S){const x=f(g,v,y,T,M,S);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):n.push(x)}function d(g,v,y,T,M,S){const x=f(g,v,y,T,M,S);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function p(g,v){n.length>1&&n.sort(g||YC),a.length>1&&a.sort(v||Ox),s.length>1&&s.sort(v||Ox)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:c,unshift:d,finish:_,sort:p}}function jC(){let o=new WeakMap;function t(a,s){const u=o.get(a);let f;return u===void 0?(f=new Px,o.set(a,[f])):s>=u.length?(f=new Px,u.push(f)):f=u[s],f}function n(){o=new WeakMap}return{get:t,dispose:n}}function ZC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new Ee};break;case"SpotLight":n={position:new it,direction:new it,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":n={color:new Ee,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=n,n}}}function KC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let QC=0;function JC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $C(o,t){const n=new ZC,a=KC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new it);const u=new it,f=new Mn,c=new Mn;function d(_,g){let v=0,y=0,T=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let M=0,S=0,x=0,w=0,A=0,L=0,F=0,O=0,D=0,X=0,b=0;_.sort(JC);const U=g===!0?Math.PI:1;for(let $=0,ht=_.length;$<ht;$++){const k=_[$],Z=k.color,z=k.intensity,H=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=Z.r*z*U,y+=Z.g*z*U,T+=Z.b*z*U;else if(k.isLightProbe){for(let ot=0;ot<9;ot++)s.probe[ot].addScaledVector(k.sh.coefficients[ot],z);b++}else if(k.isDirectionalLight){const ot=n.get(k);if(ot.color.copy(k.color).multiplyScalar(k.intensity*U),k.castShadow){const ft=k.shadow,P=a.get(k);P.shadowBias=ft.bias,P.shadowNormalBias=ft.normalBias,P.shadowRadius=ft.radius,P.shadowMapSize=ft.mapSize,s.directionalShadow[M]=P,s.directionalShadowMap[M]=K,s.directionalShadowMatrix[M]=k.shadow.matrix,L++}s.directional[M]=ot,M++}else if(k.isSpotLight){const ot=n.get(k);ot.position.setFromMatrixPosition(k.matrixWorld),ot.color.copy(Z).multiplyScalar(z*U),ot.distance=H,ot.coneCos=Math.cos(k.angle),ot.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ot.decay=k.decay,s.spot[x]=ot;const ft=k.shadow;if(k.map&&(s.spotLightMap[D]=k.map,D++,ft.updateMatrices(k),k.castShadow&&X++),s.spotLightMatrix[x]=ft.matrix,k.castShadow){const P=a.get(k);P.shadowBias=ft.bias,P.shadowNormalBias=ft.normalBias,P.shadowRadius=ft.radius,P.shadowMapSize=ft.mapSize,s.spotShadow[x]=P,s.spotShadowMap[x]=K,O++}x++}else if(k.isRectAreaLight){const ot=n.get(k);ot.color.copy(Z).multiplyScalar(z),ot.halfWidth.set(k.width*.5,0,0),ot.halfHeight.set(0,k.height*.5,0),s.rectArea[w]=ot,w++}else if(k.isPointLight){const ot=n.get(k);if(ot.color.copy(k.color).multiplyScalar(k.intensity*U),ot.distance=k.distance,ot.decay=k.decay,k.castShadow){const ft=k.shadow,P=a.get(k);P.shadowBias=ft.bias,P.shadowNormalBias=ft.normalBias,P.shadowRadius=ft.radius,P.shadowMapSize=ft.mapSize,P.shadowCameraNear=ft.camera.near,P.shadowCameraFar=ft.camera.far,s.pointShadow[S]=P,s.pointShadowMap[S]=K,s.pointShadowMatrix[S]=k.shadow.matrix,F++}s.point[S]=ot,S++}else if(k.isHemisphereLight){const ot=n.get(k);ot.skyColor.copy(k.color).multiplyScalar(z*U),ot.groundColor.copy(k.groundColor).multiplyScalar(z*U),s.hemi[A]=ot,A++}}w>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=At.LTC_FLOAT_1,s.rectAreaLTC2=At.LTC_FLOAT_2):(s.rectAreaLTC1=At.LTC_HALF_1,s.rectAreaLTC2=At.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=At.LTC_FLOAT_1,s.rectAreaLTC2=At.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=At.LTC_HALF_1,s.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=T;const J=s.hash;(J.directionalLength!==M||J.pointLength!==S||J.spotLength!==x||J.rectAreaLength!==w||J.hemiLength!==A||J.numDirectionalShadows!==L||J.numPointShadows!==F||J.numSpotShadows!==O||J.numSpotMaps!==D||J.numLightProbes!==b)&&(s.directional.length=M,s.spot.length=x,s.rectArea.length=w,s.point.length=S,s.hemi.length=A,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=O+D-X,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=b,J.directionalLength=M,J.pointLength=S,J.spotLength=x,J.rectAreaLength=w,J.hemiLength=A,J.numDirectionalShadows=L,J.numPointShadows=F,J.numSpotShadows=O,J.numSpotMaps=D,J.numLightProbes=b,s.version=QC++)}function p(_,g){let v=0,y=0,T=0,M=0,S=0;const x=g.matrixWorldInverse;for(let w=0,A=_.length;w<A;w++){const L=_[w];if(L.isDirectionalLight){const F=s.directional[v];F.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(x),v++}else if(L.isSpotLight){const F=s.spot[T];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(x),F.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(x),T++}else if(L.isRectAreaLight){const F=s.rectArea[M];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(x),c.identity(),f.copy(L.matrixWorld),f.premultiply(x),c.extractRotation(f),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const F=s.point[y];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const F=s.hemi[S];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(x),S++}}}return{setup:d,setupView:p,state:s}}function zx(o,t){const n=new $C(o,t),a=[],s=[];function u(){a.length=0,s.length=0}function f(g){a.push(g)}function c(g){s.push(g)}function d(g){n.setup(a,g)}function p(g){n.setupView(a,g)}return{init:u,state:{lightsArray:a,shadowsArray:s,lights:n},setupLights:d,setupLightsView:p,pushLight:f,pushShadow:c}}function tw(o,t){let n=new WeakMap;function a(u,f=0){const c=n.get(u);let d;return c===void 0?(d=new zx(o,t),n.set(u,[d])):f>=c.length?(d=new zx(o,t),c.push(d)):d=c[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}class ew extends uu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nw extends uu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rw(o,t,n){let a=new py;const s=new Oe,u=new Oe,f=new Dn,c=new ew({depthPacking:Q1}),d=new nw,p={},_=n.maxTextureSize,g={[Or]:ai,[ai]:Or,[sa]:sa},v=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:iw,fragmentShader:aw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ha;T.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qi(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XS;let x=this.type;this.render=function(O,D,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),U=o.getActiveCubeFace(),J=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Cr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ht=x!==Na&&this.type===Na,k=x===Na&&this.type!==Na;for(let Z=0,z=O.length;Z<z;Z++){const H=O[Z],K=H.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ot=K.getFrameExtents();if(s.multiply(ot),u.copy(K.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/ot.x),s.x=u.x*ot.x,K.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/ot.y),s.y=u.y*ot.y,K.mapSize.y=u.y)),K.map===null||ht===!0||k===!0){const P=this.type!==Na?{minFilter:kn,magFilter:kn}:{};K.map!==null&&K.map.dispose(),K.map=new vs(s.x,s.y,P),K.map.texture.name=H.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const ft=K.getViewportCount();for(let P=0;P<ft;P++){const V=K.getViewport(P);f.set(u.x*V.x,u.y*V.y,u.x*V.z,u.y*V.w),$.viewport(f),K.updateMatrices(H,P),a=K.getFrustum(),L(D,X,K.camera,H,this.type)}K.isPointLightShadow!==!0&&this.type===Na&&w(K,X),K.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,U,J)};function w(O,D){const X=t.update(M);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new vs(s.x,s.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(D,null,X,v,M,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(D,null,X,y,M,null)}function A(O,D,X,b){let U=null;const J=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(J!==void 0)U=J;else if(U=X.isPointLight===!0?d:c,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const $=U.uuid,ht=D.uuid;let k=p[$];k===void 0&&(k={},p[$]=k);let Z=k[ht];Z===void 0&&(Z=U.clone(),k[ht]=Z,D.addEventListener("dispose",F)),U=Z}if(U.visible=D.visible,U.wireframe=D.wireframe,b===Na?U.side=D.shadowSide!==null?D.shadowSide:D.side:U.side=D.shadowSide!==null?D.shadowSide:g[D.side],U.alphaMap=D.alphaMap,U.alphaTest=D.alphaTest,U.map=D.map,U.clipShadows=D.clipShadows,U.clippingPlanes=D.clippingPlanes,U.clipIntersection=D.clipIntersection,U.displacementMap=D.displacementMap,U.displacementScale=D.displacementScale,U.displacementBias=D.displacementBias,U.wireframeLinewidth=D.wireframeLinewidth,U.linewidth=D.linewidth,X.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const $=o.properties.get(U);$.light=X}return U}function L(O,D,X,b,U){if(O.visible===!1)return;if(O.layers.test(D.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&U===Na)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const ht=t.update(O),k=O.material;if(Array.isArray(k)){const Z=ht.groups;for(let z=0,H=Z.length;z<H;z++){const K=Z[z],ot=k[K.materialIndex];if(ot&&ot.visible){const ft=A(O,ot,b,U);O.onBeforeShadow(o,O,D,X,ht,ft,K),o.renderBufferDirect(X,null,ht,ft,O,K),O.onAfterShadow(o,O,D,X,ht,ft,K)}}}else if(k.visible){const Z=A(O,k,b,U);O.onBeforeShadow(o,O,D,X,ht,Z,null),o.renderBufferDirect(X,null,ht,Z,O,null),O.onAfterShadow(o,O,D,X,ht,Z,null)}}const $=O.children;for(let ht=0,k=$.length;ht<k;ht++)L($[ht],D,X,b,U)}function F(O){O.target.removeEventListener("dispose",F);for(const X in p){const b=p[X],U=O.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function sw(o,t,n){const a=n.isWebGL2;function s(){let W=!1;const Rt=new Dn;let bt=null;const jt=new Dn(0,0,0,0);return{setMask:function(Gt){bt!==Gt&&!W&&(o.colorMask(Gt,Gt,Gt,Gt),bt=Gt)},setLocked:function(Gt){W=Gt},setClear:function(Gt,Ce,Te,Ke,tn){tn===!0&&(Gt*=Ke,Ce*=Ke,Te*=Ke),Rt.set(Gt,Ce,Te,Ke),jt.equals(Rt)===!1&&(o.clearColor(Gt,Ce,Te,Ke),jt.copy(Rt))},reset:function(){W=!1,bt=null,jt.set(-1,0,0,0)}}}function u(){let W=!1,Rt=null,bt=null,jt=null;return{setTest:function(Gt){Gt?Ot(o.DEPTH_TEST):Wt(o.DEPTH_TEST)},setMask:function(Gt){Rt!==Gt&&!W&&(o.depthMask(Gt),Rt=Gt)},setFunc:function(Gt){if(bt!==Gt){switch(Gt){case A1:o.depthFunc(o.NEVER);break;case R1:o.depthFunc(o.ALWAYS);break;case C1:o.depthFunc(o.LESS);break;case ef:o.depthFunc(o.LEQUAL);break;case w1:o.depthFunc(o.EQUAL);break;case D1:o.depthFunc(o.GEQUAL);break;case L1:o.depthFunc(o.GREATER);break;case U1:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=Gt}},setLocked:function(Gt){W=Gt},setClear:function(Gt){jt!==Gt&&(o.clearDepth(Gt),jt=Gt)},reset:function(){W=!1,Rt=null,bt=null,jt=null}}}function f(){let W=!1,Rt=null,bt=null,jt=null,Gt=null,Ce=null,Te=null,Ke=null,tn=null;return{setTest:function(we){W||(we?Ot(o.STENCIL_TEST):Wt(o.STENCIL_TEST))},setMask:function(we){Rt!==we&&!W&&(o.stencilMask(we),Rt=we)},setFunc:function(we,xn,li){(bt!==we||jt!==xn||Gt!==li)&&(o.stencilFunc(we,xn,li),bt=we,jt=xn,Gt=li)},setOp:function(we,xn,li){(Ce!==we||Te!==xn||Ke!==li)&&(o.stencilOp(we,xn,li),Ce=we,Te=xn,Ke=li)},setLocked:function(we){W=we},setClear:function(we){tn!==we&&(o.clearStencil(we),tn=we)},reset:function(){W=!1,Rt=null,bt=null,jt=null,Gt=null,Ce=null,Te=null,Ke=null,tn=null}}}const c=new s,d=new u,p=new f,_=new WeakMap,g=new WeakMap;let v={},y={},T=new WeakMap,M=[],S=null,x=!1,w=null,A=null,L=null,F=null,O=null,D=null,X=null,b=new Ee(0,0,0),U=0,J=!1,$=null,ht=null,k=null,Z=null,z=null;const H=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ot=0;const ft=o.getParameter(o.VERSION);ft.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(ft)[1]),K=ot>=1):ft.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),K=ot>=2);let P=null,V={};const G=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),dt=new Dn().fromArray(G),xt=new Dn().fromArray(Y);function Mt(W,Rt,bt,jt){const Gt=new Uint8Array(4),Ce=o.createTexture();o.bindTexture(W,Ce),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Te=0;Te<bt;Te++)a&&(W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY)?o.texImage3D(Rt,0,o.RGBA,1,1,jt,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Rt+Te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Ce}const Tt={};Tt[o.TEXTURE_2D]=Mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Tt[o.TEXTURE_CUBE_MAP]=Mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),a&&(Tt[o.TEXTURE_2D_ARRAY]=Mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Tt[o.TEXTURE_3D]=Mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ot(o.DEPTH_TEST),d.setFunc(ef),ee(!1),B(gv),Ot(o.CULL_FACE),Bt(Cr);function Ot(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Wt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function ue(W,Rt){return y[W]!==Rt?(o.bindFramebuffer(W,Rt),y[W]=Rt,a&&(W===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function at(W,Rt){let bt=M,jt=!1;if(W)if(bt=T.get(Rt),bt===void 0&&(bt=[],T.set(Rt,bt)),W.isWebGLMultipleRenderTargets){const Gt=W.texture;if(bt.length!==Gt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let Ce=0,Te=Gt.length;Ce<Te;Ce++)bt[Ce]=o.COLOR_ATTACHMENT0+Ce;bt.length=Gt.length,jt=!0}}else bt[0]!==o.COLOR_ATTACHMENT0&&(bt[0]=o.COLOR_ATTACHMENT0,jt=!0);else bt[0]!==o.BACK&&(bt[0]=o.BACK,jt=!0);jt&&(n.isWebGL2?o.drawBuffers(bt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function vn(W){return S!==W?(o.useProgram(W),S=W,!0):!1}const It={[ls]:o.FUNC_ADD,[f1]:o.FUNC_SUBTRACT,[h1]:o.FUNC_REVERSE_SUBTRACT};if(a)It[yv]=o.MIN,It[Mv]=o.MAX;else{const W=t.get("EXT_blend_minmax");W!==null&&(It[yv]=W.MIN_EXT,It[Mv]=W.MAX_EXT)}const Qt={[d1]:o.ZERO,[p1]:o.ONE,[m1]:o.SRC_COLOR,[Ap]:o.SRC_ALPHA,[y1]:o.SRC_ALPHA_SATURATE,[x1]:o.DST_COLOR,[g1]:o.DST_ALPHA,[_1]:o.ONE_MINUS_SRC_COLOR,[Rp]:o.ONE_MINUS_SRC_ALPHA,[S1]:o.ONE_MINUS_DST_COLOR,[v1]:o.ONE_MINUS_DST_ALPHA,[M1]:o.CONSTANT_COLOR,[E1]:o.ONE_MINUS_CONSTANT_COLOR,[T1]:o.CONSTANT_ALPHA,[b1]:o.ONE_MINUS_CONSTANT_ALPHA};function Bt(W,Rt,bt,jt,Gt,Ce,Te,Ke,tn,we){if(W===Cr){x===!0&&(Wt(o.BLEND),x=!1);return}if(x===!1&&(Ot(o.BLEND),x=!0),W!==c1){if(W!==w||we!==J){if((A!==ls||O!==ls)&&(o.blendEquation(o.FUNC_ADD),A=ls,O=ls),we)switch(W){case bo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vv:o.blendFunc(o.ONE,o.ONE);break;case xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Sv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case bo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Sv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,F=null,D=null,X=null,b.set(0,0,0),U=0,w=W,J=we}return}Gt=Gt||Rt,Ce=Ce||bt,Te=Te||jt,(Rt!==A||Gt!==O)&&(o.blendEquationSeparate(It[Rt],It[Gt]),A=Rt,O=Gt),(bt!==L||jt!==F||Ce!==D||Te!==X)&&(o.blendFuncSeparate(Qt[bt],Qt[jt],Qt[Ce],Qt[Te]),L=bt,F=jt,D=Ce,X=Te),(Ke.equals(b)===!1||tn!==U)&&(o.blendColor(Ke.r,Ke.g,Ke.b,tn),b.copy(Ke),U=tn),w=W,J=!1}function He(W,Rt){W.side===sa?Wt(o.CULL_FACE):Ot(o.CULL_FACE);let bt=W.side===ai;Rt&&(bt=!bt),ee(bt),W.blending===bo&&W.transparent===!1?Bt(Cr):Bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const jt=W.stencilWrite;p.setTest(jt),jt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),st(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ot(o.SAMPLE_ALPHA_TO_COVERAGE):Wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(W){$!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),$=W)}function B(W){W!==o1?(Ot(o.CULL_FACE),W!==ht&&(W===gv?o.cullFace(o.BACK):W===l1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Wt(o.CULL_FACE),ht=W}function C(W){W!==k&&(K&&o.lineWidth(W),k=W)}function st(W,Rt,bt){W?(Ot(o.POLYGON_OFFSET_FILL),(Z!==Rt||z!==bt)&&(o.polygonOffset(Rt,bt),Z=Rt,z=bt)):Wt(o.POLYGON_OFFSET_FILL)}function yt(W){W?Ot(o.SCISSOR_TEST):Wt(o.SCISSOR_TEST)}function St(W){W===void 0&&(W=o.TEXTURE0+H-1),P!==W&&(o.activeTexture(W),P=W)}function gt(W,Rt,bt){bt===void 0&&(P===null?bt=o.TEXTURE0+H-1:bt=P);let jt=V[bt];jt===void 0&&(jt={type:void 0,texture:void 0},V[bt]=jt),(jt.type!==W||jt.texture!==Rt)&&(P!==bt&&(o.activeTexture(bt),P=bt),o.bindTexture(W,Rt||Tt[W]),jt.type=W,jt.texture=Rt)}function Ht(){const W=V[P];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ct(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(W){dt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),dt.copy(W))}function Se(W){xt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),xt.copy(W))}function Xe(W,Rt){let bt=g.get(Rt);bt===void 0&&(bt=new WeakMap,g.set(Rt,bt));let jt=bt.get(W);jt===void 0&&(jt=o.getUniformBlockIndex(Rt,W.name),bt.set(W,jt))}function re(W,Rt){const jt=g.get(Rt).get(W);_.get(Rt)!==jt&&(o.uniformBlockBinding(Rt,jt,W.__bindingPointIndex),_.set(Rt,jt))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),a===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},P=null,V={},y={},T=new WeakMap,M=[],S=null,x=!1,w=null,A=null,L=null,F=null,O=null,D=null,X=null,b=new Ee(0,0,0),U=0,J=!1,$=null,ht=null,k=null,Z=null,z=null,dt.set(0,0,o.canvas.width,o.canvas.height),xt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ot,disable:Wt,bindFramebuffer:ue,drawBuffers:at,useProgram:vn,setBlending:Bt,setMaterial:He,setFlipSided:ee,setCullFace:B,setLineWidth:C,setPolygonOffset:st,setScissorTest:yt,activeTexture:St,bindTexture:gt,unbindTexture:Ht,compressedTexImage2D:Ct,compressedTexImage3D:Nt,texImage2D:Lt,texImage3D:Dt,updateUBOMapping:Xe,uniformBlockBinding:re,texStorage2D:le,texStorage3D:Kt,texSubImage2D:qt,texSubImage3D:ie,compressedTexSubImage2D:vt,compressedTexSubImage3D:Me,scissor:kt,viewport:Se,reset:Et}}function ow(o,t,n,a,s,u,f){const c=s.isWebGL2,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(B,C){return y?new OffscreenCanvas(B,C):au("canvas")}function M(B,C,st,yt){let St=1;if((B.width>yt||B.height>yt)&&(St=yt/Math.max(B.width,B.height)),St<1||C===!0)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap){const gt=C?Op:Math.floor,Ht=gt(St*B.width),Ct=gt(St*B.height);g===void 0&&(g=T(Ht,Ct));const Nt=st?T(Ht,Ct):g;return Nt.width=Ht,Nt.height=Ct,Nt.getContext("2d").drawImage(B,0,0,Ht,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+Ht+"x"+Ct+")."),Nt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function S(B){return Jv(B.width)&&Jv(B.height)}function x(B){return c?!1:B.wrapS!==Zi||B.wrapT!==Zi||B.minFilter!==kn&&B.minFilter!==xi}function w(B,C){return B.generateMipmaps&&C&&B.minFilter!==kn&&B.minFilter!==xi}function A(B){o.generateMipmap(B)}function L(B,C,st,yt,St=!1){if(c===!1)return C;if(B!==null){if(o[B]!==void 0)return o[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let gt=C;if(C===o.RED&&(st===o.FLOAT&&(gt=o.R32F),st===o.HALF_FLOAT&&(gt=o.R16F),st===o.UNSIGNED_BYTE&&(gt=o.R8)),C===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(gt=o.R8UI),st===o.UNSIGNED_SHORT&&(gt=o.R16UI),st===o.UNSIGNED_INT&&(gt=o.R32UI),st===o.BYTE&&(gt=o.R8I),st===o.SHORT&&(gt=o.R16I),st===o.INT&&(gt=o.R32I)),C===o.RG&&(st===o.FLOAT&&(gt=o.RG32F),st===o.HALF_FLOAT&&(gt=o.RG16F),st===o.UNSIGNED_BYTE&&(gt=o.RG8)),C===o.RGBA){const Ht=St?nf:Ne.getTransfer(yt);st===o.FLOAT&&(gt=o.RGBA32F),st===o.HALF_FLOAT&&(gt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(gt=Ht===ke?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function F(B,C,st){return w(B,st)===!0||B.isFramebufferTexture&&B.minFilter!==kn&&B.minFilter!==xi?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function O(B){return B===kn||B===Ev||B===Od?o.NEAREST:o.LINEAR}function D(B){const C=B.target;C.removeEventListener("dispose",D),b(C),C.isVideoTexture&&_.delete(C)}function X(B){const C=B.target;C.removeEventListener("dispose",X),J(C)}function b(B){const C=a.get(B);if(C.__webglInit===void 0)return;const st=B.source,yt=v.get(st);if(yt){const St=yt[C.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(B),Object.keys(yt).length===0&&v.delete(st)}a.remove(B)}function U(B){const C=a.get(B);o.deleteTexture(C.__webglTexture);const st=B.source,yt=v.get(st);delete yt[C.__cacheKey],f.memory.textures--}function J(B){const C=B.texture,st=a.get(B),yt=a.get(C);if(yt.__webglTexture!==void 0&&(o.deleteTexture(yt.__webglTexture),f.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(st.__webglFramebuffer[St]))for(let gt=0;gt<st.__webglFramebuffer[St].length;gt++)o.deleteFramebuffer(st.__webglFramebuffer[St][gt]);else o.deleteFramebuffer(st.__webglFramebuffer[St]);st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer[St])}else{if(Array.isArray(st.__webglFramebuffer))for(let St=0;St<st.__webglFramebuffer.length;St++)o.deleteFramebuffer(st.__webglFramebuffer[St]);else o.deleteFramebuffer(st.__webglFramebuffer);if(st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&o.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let St=0;St<st.__webglColorRenderbuffer.length;St++)st.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(st.__webglColorRenderbuffer[St]);st.__webglDepthRenderbuffer&&o.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let St=0,gt=C.length;St<gt;St++){const Ht=a.get(C[St]);Ht.__webglTexture&&(o.deleteTexture(Ht.__webglTexture),f.memory.textures--),a.remove(C[St])}a.remove(C),a.remove(B)}let $=0;function ht(){$=0}function k(){const B=$;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),$+=1,B}function Z(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.wrapR||0),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.colorSpace),C.join()}function z(B,C){const st=a.get(B);if(B.isVideoTexture&&He(B),B.isRenderTargetTexture===!1&&B.version>0&&st.__version!==B.version){const yt=B.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(st,B,C);return}}n.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+C)}function H(B,C){const st=a.get(B);if(B.version>0&&st.__version!==B.version){dt(st,B,C);return}n.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+C)}function K(B,C){const st=a.get(B);if(B.version>0&&st.__version!==B.version){dt(st,B,C);return}n.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+C)}function ot(B,C){const st=a.get(B);if(B.version>0&&st.__version!==B.version){xt(st,B,C);return}n.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+C)}const ft={[Dp]:o.REPEAT,[Zi]:o.CLAMP_TO_EDGE,[Lp]:o.MIRRORED_REPEAT},P={[kn]:o.NEAREST,[Ev]:o.NEAREST_MIPMAP_NEAREST,[Od]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[G1]:o.LINEAR_MIPMAP_NEAREST,[nu]:o.LINEAR_MIPMAP_LINEAR},V={[tb]:o.NEVER,[sb]:o.ALWAYS,[eb]:o.LESS,[ey]:o.LEQUAL,[nb]:o.EQUAL,[rb]:o.GEQUAL,[ib]:o.GREATER,[ab]:o.NOTEQUAL};function G(B,C,st){if(st?(o.texParameteri(B,o.TEXTURE_WRAP_S,ft[C.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,ft[C.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,ft[C.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,P[C.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,P[C.minFilter])):(o.texParameteri(B,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(B,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(C.wrapS!==Zi||C.wrapT!==Zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(B,o.TEXTURE_MAG_FILTER,O(C.magFilter)),o.texParameteri(B,o.TEXTURE_MIN_FILTER,O(C.minFilter)),C.minFilter!==kn&&C.minFilter!==xi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,V[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const yt=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===kn||C.minFilter!==Od&&C.minFilter!==nu||C.type===Tr&&t.has("OES_texture_float_linear")===!1||c===!1&&C.type===iu&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||a.get(C).__currentAnisotropy)&&(o.texParameterf(B,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy)}}function Y(B,C){let st=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",D));const yt=C.source;let St=v.get(yt);St===void 0&&(St={},v.set(yt,St));const gt=Z(C);if(gt!==B.__cacheKey){St[gt]===void 0&&(St[gt]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,st=!0),St[gt].usedTimes++;const Ht=St[B.__cacheKey];Ht!==void 0&&(St[B.__cacheKey].usedTimes--,Ht.usedTimes===0&&U(C)),B.__cacheKey=gt,B.__webglTexture=St[gt].texture}return st}function dt(B,C,st){let yt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(yt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(yt=o.TEXTURE_3D);const St=Y(B,C),gt=C.source;n.bindTexture(yt,B.__webglTexture,o.TEXTURE0+st);const Ht=a.get(gt);if(gt.version!==Ht.__version||St===!0){n.activeTexture(o.TEXTURE0+st);const Ct=Ne.getPrimaries(Ne.workingColorSpace),Nt=C.colorSpace===Fi?null:Ne.getPrimaries(C.colorSpace),qt=C.colorSpace===Fi||Ct===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const ie=x(C)&&S(C.image)===!1;let vt=M(C.image,ie,!1,s.maxTextureSize);vt=ee(C,vt);const Me=S(vt)||c,le=u.convert(C.format,C.colorSpace);let Kt=u.convert(C.type),Lt=L(C.internalFormat,le,Kt,C.colorSpace,C.isVideoTexture);G(yt,C,Me);let Dt;const kt=C.mipmaps,Se=c&&C.isVideoTexture!==!0&&Lt!==$S,Xe=Ht.__version===void 0||St===!0,re=F(C,vt,Me);if(C.isDepthTexture)Lt=o.DEPTH_COMPONENT,c?C.type===Tr?Lt=o.DEPTH_COMPONENT32F:C.type===Er?Lt=o.DEPTH_COMPONENT24:C.type===ms?Lt=o.DEPTH24_STENCIL8:Lt=o.DEPTH_COMPONENT16:C.type===Tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===_s&&Lt===o.DEPTH_COMPONENT&&C.type!==nm&&C.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Er,Kt=u.convert(C.type)),C.format===Po&&Lt===o.DEPTH_COMPONENT&&(Lt=o.DEPTH_STENCIL,C.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ms,Kt=u.convert(C.type))),Xe&&(Se?n.texStorage2D(o.TEXTURE_2D,1,Lt,vt.width,vt.height):n.texImage2D(o.TEXTURE_2D,0,Lt,vt.width,vt.height,0,le,Kt,null));else if(C.isDataTexture)if(kt.length>0&&Me){Se&&Xe&&n.texStorage2D(o.TEXTURE_2D,re,Lt,kt[0].width,kt[0].height);for(let Et=0,W=kt.length;Et<W;Et++)Dt=kt[Et],Se?n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,le,Kt,Dt.data):n.texImage2D(o.TEXTURE_2D,Et,Lt,Dt.width,Dt.height,0,le,Kt,Dt.data);C.generateMipmaps=!1}else Se?(Xe&&n.texStorage2D(o.TEXTURE_2D,re,Lt,vt.width,vt.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,le,Kt,vt.data)):n.texImage2D(o.TEXTURE_2D,0,Lt,vt.width,vt.height,0,le,Kt,vt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Se&&Xe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,re,Lt,kt[0].width,kt[0].height,vt.depth);for(let Et=0,W=kt.length;Et<W;Et++)Dt=kt[Et],C.format!==Ki?le!==null?Se?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,vt.depth,le,Dt.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Lt,Dt.width,Dt.height,vt.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?n.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,vt.depth,le,Kt,Dt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Et,Lt,Dt.width,Dt.height,vt.depth,0,le,Kt,Dt.data)}else{Se&&Xe&&n.texStorage2D(o.TEXTURE_2D,re,Lt,kt[0].width,kt[0].height);for(let Et=0,W=kt.length;Et<W;Et++)Dt=kt[Et],C.format!==Ki?le!==null?Se?n.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,le,Dt.data):n.compressedTexImage2D(o.TEXTURE_2D,Et,Lt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,le,Kt,Dt.data):n.texImage2D(o.TEXTURE_2D,Et,Lt,Dt.width,Dt.height,0,le,Kt,Dt.data)}else if(C.isDataArrayTexture)Se?(Xe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,re,Lt,vt.width,vt.height,vt.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,le,Kt,vt.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,vt.width,vt.height,vt.depth,0,le,Kt,vt.data);else if(C.isData3DTexture)Se?(Xe&&n.texStorage3D(o.TEXTURE_3D,re,Lt,vt.width,vt.height,vt.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,le,Kt,vt.data)):n.texImage3D(o.TEXTURE_3D,0,Lt,vt.width,vt.height,vt.depth,0,le,Kt,vt.data);else if(C.isFramebufferTexture){if(Xe)if(Se)n.texStorage2D(o.TEXTURE_2D,re,Lt,vt.width,vt.height);else{let Et=vt.width,W=vt.height;for(let Rt=0;Rt<re;Rt++)n.texImage2D(o.TEXTURE_2D,Rt,Lt,Et,W,0,le,Kt,null),Et>>=1,W>>=1}}else if(kt.length>0&&Me){Se&&Xe&&n.texStorage2D(o.TEXTURE_2D,re,Lt,kt[0].width,kt[0].height);for(let Et=0,W=kt.length;Et<W;Et++)Dt=kt[Et],Se?n.texSubImage2D(o.TEXTURE_2D,Et,0,0,le,Kt,Dt):n.texImage2D(o.TEXTURE_2D,Et,Lt,le,Kt,Dt);C.generateMipmaps=!1}else Se?(Xe&&n.texStorage2D(o.TEXTURE_2D,re,Lt,vt.width,vt.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,le,Kt,vt)):n.texImage2D(o.TEXTURE_2D,0,Lt,le,Kt,vt);w(C,Me)&&A(yt),Ht.__version=gt.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function xt(B,C,st){if(C.image.length!==6)return;const yt=Y(B,C),St=C.source;n.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+st);const gt=a.get(St);if(St.version!==gt.__version||yt===!0){n.activeTexture(o.TEXTURE0+st);const Ht=Ne.getPrimaries(Ne.workingColorSpace),Ct=C.colorSpace===Fi?null:Ne.getPrimaries(C.colorSpace),Nt=C.colorSpace===Fi||Ht===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const qt=C.isCompressedTexture||C.image[0].isCompressedTexture,ie=C.image[0]&&C.image[0].isDataTexture,vt=[];for(let Et=0;Et<6;Et++)!qt&&!ie?vt[Et]=M(C.image[Et],!1,!0,s.maxCubemapSize):vt[Et]=ie?C.image[Et].image:C.image[Et],vt[Et]=ee(C,vt[Et]);const Me=vt[0],le=S(Me)||c,Kt=u.convert(C.format,C.colorSpace),Lt=u.convert(C.type),Dt=L(C.internalFormat,Kt,Lt,C.colorSpace),kt=c&&C.isVideoTexture!==!0,Se=gt.__version===void 0||yt===!0;let Xe=F(C,Me,le);G(o.TEXTURE_CUBE_MAP,C,le);let re;if(qt){kt&&Se&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,Dt,Me.width,Me.height);for(let Et=0;Et<6;Et++){re=vt[Et].mipmaps;for(let W=0;W<re.length;W++){const Rt=re[W];C.format!==Ki?Kt!==null?kt?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W,0,0,Rt.width,Rt.height,Kt,Rt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W,Dt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W,0,0,Rt.width,Rt.height,Kt,Lt,Rt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W,Dt,Rt.width,Rt.height,0,Kt,Lt,Rt.data)}}}else{re=C.mipmaps,kt&&Se&&(re.length>0&&Xe++,n.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,Dt,vt[0].width,vt[0].height));for(let Et=0;Et<6;Et++)if(ie){kt?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,vt[Et].width,vt[Et].height,Kt,Lt,vt[Et].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Dt,vt[Et].width,vt[Et].height,0,Kt,Lt,vt[Et].data);for(let W=0;W<re.length;W++){const bt=re[W].image[Et].image;kt?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W+1,0,0,bt.width,bt.height,Kt,Lt,bt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W+1,Dt,bt.width,bt.height,0,Kt,Lt,bt.data)}}else{kt?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Kt,Lt,vt[Et]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Dt,Kt,Lt,vt[Et]);for(let W=0;W<re.length;W++){const Rt=re[W];kt?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W+1,0,0,Kt,Lt,Rt.image[Et]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,W+1,Dt,Kt,Lt,Rt.image[Et])}}}w(C,le)&&A(o.TEXTURE_CUBE_MAP),gt.__version=St.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function Mt(B,C,st,yt,St,gt){const Ht=u.convert(st.format,st.colorSpace),Ct=u.convert(st.type),Nt=L(st.internalFormat,Ht,Ct,st.colorSpace);if(!a.get(C).__hasExternalTextures){const ie=Math.max(1,C.width>>gt),vt=Math.max(1,C.height>>gt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?n.texImage3D(St,gt,Nt,ie,vt,C.depth,0,Ht,Ct,null):n.texImage2D(St,gt,Nt,ie,vt,0,Ht,Ct,null)}n.bindFramebuffer(o.FRAMEBUFFER,B),Bt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,St,a.get(st).__webglTexture,0,Qt(C)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,yt,St,a.get(st).__webglTexture,gt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(B,C,st){if(o.bindRenderbuffer(o.RENDERBUFFER,B),C.depthBuffer&&!C.stencilBuffer){let yt=c===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(st||Bt(C)){const St=C.depthTexture;St&&St.isDepthTexture&&(St.type===Tr?yt=o.DEPTH_COMPONENT32F:St.type===Er&&(yt=o.DEPTH_COMPONENT24));const gt=Qt(C);Bt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,yt,C.width,C.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,yt,C.width,C.height)}else o.renderbufferStorage(o.RENDERBUFFER,yt,C.width,C.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,B)}else if(C.depthBuffer&&C.stencilBuffer){const yt=Qt(C);st&&Bt(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,C.width,C.height):Bt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,B)}else{const yt=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let St=0;St<yt.length;St++){const gt=yt[St],Ht=u.convert(gt.format,gt.colorSpace),Ct=u.convert(gt.type),Nt=L(gt.internalFormat,Ht,Ct,gt.colorSpace),qt=Qt(C);st&&Bt(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Nt,C.width,C.height):Bt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Nt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(B,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const yt=a.get(C.depthTexture).__webglTexture,St=Qt(C);if(C.depthTexture.format===_s)Bt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(C.depthTexture.format===Po)Bt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Wt(B){const C=a.get(B),st=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!C.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");Ot(C.__webglFramebuffer,B)}else if(st){C.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)n.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[yt]),C.__webglDepthbuffer[yt]=o.createRenderbuffer(),Tt(C.__webglDepthbuffer[yt],B,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),Tt(C.__webglDepthbuffer,B,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(B,C,st){const yt=a.get(B);C!==void 0&&Mt(yt.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&Wt(B)}function at(B){const C=B.texture,st=a.get(B),yt=a.get(C);B.addEventListener("dispose",X),B.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture()),yt.__version=C.version,f.memory.textures++);const St=B.isWebGLCubeRenderTarget===!0,gt=B.isWebGLMultipleRenderTargets===!0,Ht=S(B)||c;if(St){st.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(c&&C.mipmaps&&C.mipmaps.length>0){st.__webglFramebuffer[Ct]=[];for(let Nt=0;Nt<C.mipmaps.length;Nt++)st.__webglFramebuffer[Ct][Nt]=o.createFramebuffer()}else st.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(c&&C.mipmaps&&C.mipmaps.length>0){st.__webglFramebuffer=[];for(let Ct=0;Ct<C.mipmaps.length;Ct++)st.__webglFramebuffer[Ct]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(gt)if(s.drawBuffers){const Ct=B.texture;for(let Nt=0,qt=Ct.length;Nt<qt;Nt++){const ie=a.get(Ct[Nt]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&B.samples>0&&Bt(B)===!1){const Ct=gt?C:[C];st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Ct.length;Nt++){const qt=Ct[Nt];st.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt]);const ie=u.convert(qt.format,qt.colorSpace),vt=u.convert(qt.type),Me=L(qt.internalFormat,ie,vt,qt.colorSpace,B.isXRRenderTarget===!0),le=Qt(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,le,Me,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(st.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){n.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),G(o.TEXTURE_CUBE_MAP,C,Ht);for(let Ct=0;Ct<6;Ct++)if(c&&C.mipmaps&&C.mipmaps.length>0)for(let Nt=0;Nt<C.mipmaps.length;Nt++)Mt(st.__webglFramebuffer[Ct][Nt],B,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Nt);else Mt(st.__webglFramebuffer[Ct],B,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);w(C,Ht)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(gt){const Ct=B.texture;for(let Nt=0,qt=Ct.length;Nt<qt;Nt++){const ie=Ct[Nt],vt=a.get(ie);n.bindTexture(o.TEXTURE_2D,vt.__webglTexture),G(o.TEXTURE_2D,ie,Ht),Mt(st.__webglFramebuffer,B,ie,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),w(ie,Ht)&&A(o.TEXTURE_2D)}n.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(c?Ct=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ct,yt.__webglTexture),G(Ct,C,Ht),c&&C.mipmaps&&C.mipmaps.length>0)for(let Nt=0;Nt<C.mipmaps.length;Nt++)Mt(st.__webglFramebuffer[Nt],B,C,o.COLOR_ATTACHMENT0,Ct,Nt);else Mt(st.__webglFramebuffer,B,C,o.COLOR_ATTACHMENT0,Ct,0);w(C,Ht)&&A(Ct),n.unbindTexture()}B.depthBuffer&&Wt(B)}function vn(B){const C=S(B)||c,st=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let yt=0,St=st.length;yt<St;yt++){const gt=st[yt];if(w(gt,C)){const Ht=B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ct=a.get(gt).__webglTexture;n.bindTexture(Ht,Ct),A(Ht),n.unbindTexture()}}}function It(B){if(c&&B.samples>0&&Bt(B)===!1){const C=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],st=B.width,yt=B.height;let St=o.COLOR_BUFFER_BIT;const gt=[],Ht=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=a.get(B),Nt=B.isWebGLMultipleRenderTargets===!0;if(Nt)for(let qt=0;qt<C.length;qt++)n.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let qt=0;qt<C.length;qt++){gt.push(o.COLOR_ATTACHMENT0+qt),B.depthBuffer&&gt.push(Ht);const ie=Ct.__ignoreDepthValues!==void 0?Ct.__ignoreDepthValues:!1;if(ie===!1&&(B.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Nt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[qt]),ie===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ht]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ht])),Nt){const vt=a.get(C[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,st,yt,0,0,st,yt,St,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,gt)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let qt=0;qt<C.length;qt++){n.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[qt]);const ie=a.get(C[qt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,ie,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}}function Qt(B){return Math.min(s.maxSamples,B.samples)}function Bt(B){const C=a.get(B);return c&&B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function He(B){const C=f.render.frame;_.get(B)!==C&&(_.set(B,C),B.update())}function ee(B,C){const st=B.colorSpace,yt=B.format,St=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||B.format===Up||st!==Ia&&st!==Fi&&(Ne.getTransfer(st)===ke?c===!1?t.has("EXT_sRGB")===!0&&yt===Ki?(B.format=Up,B.minFilter=xi,B.generateMipmaps=!1):C=iy.sRGBToLinear(C):(yt!==Ki||St!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),C}this.allocateTextureUnit=k,this.resetTextureUnits=ht,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=ot,this.rebindTextures=ue,this.setupRenderTarget=at,this.updateRenderTargetMipmap=vn,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Bt}function lw(o,t,n){const a=n.isWebGL2;function s(u,f=Fi){let c;const d=Ne.getTransfer(f);if(u===Dr)return o.UNSIGNED_BYTE;if(u===jS)return o.UNSIGNED_SHORT_4_4_4_4;if(u===ZS)return o.UNSIGNED_SHORT_5_5_5_1;if(u===V1)return o.BYTE;if(u===k1)return o.SHORT;if(u===nm)return o.UNSIGNED_SHORT;if(u===YS)return o.INT;if(u===Er)return o.UNSIGNED_INT;if(u===Tr)return o.FLOAT;if(u===iu)return a?o.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(u===X1)return o.ALPHA;if(u===Ki)return o.RGBA;if(u===W1)return o.LUMINANCE;if(u===q1)return o.LUMINANCE_ALPHA;if(u===_s)return o.DEPTH_COMPONENT;if(u===Po)return o.DEPTH_STENCIL;if(u===Up)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(u===Y1)return o.RED;if(u===KS)return o.RED_INTEGER;if(u===j1)return o.RG;if(u===QS)return o.RG_INTEGER;if(u===JS)return o.RGBA_INTEGER;if(u===Pd||u===zd||u===Bd||u===Fd)if(d===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(u===Pd)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===zd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Bd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Fd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(u===Pd)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===zd)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Bd)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Fd)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Tv||u===bv||u===Av||u===Rv)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(u===Tv)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===bv)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Av)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Rv)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$S)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Cv||u===wv)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(u===Cv)return d===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(u===wv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Dv||u===Lv||u===Uv||u===Nv||u===Ov||u===Pv||u===zv||u===Bv||u===Fv||u===Iv||u===Hv||u===Gv||u===Vv||u===kv)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(u===Dv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Lv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Uv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Nv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Ov)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Pv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===zv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Bv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Fv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Iv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Hv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Gv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Vv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===kv)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Id||u===Xv||u===Wv)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(u===Id)return d===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Xv)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Wv)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Z1||u===qv||u===Yv||u===jv)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(u===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(u===qv)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Yv)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===jv)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===ms?a?o.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:s}}class uw extends Bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kl extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cw={type:"move"};class cp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,f=null;const c=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,a),x=this._getHandJoint(p,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&v>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new kl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class fw extends Bo{constructor(t,n){super();const a=this;let s=null,u=1,f=null,c="local-floor",d=1,p=null,_=null,g=null,v=null,y=null,T=null;const M=n.getContextAttributes();let S=null,x=null;const w=[],A=[],L=new Oe;let F=null;const O=new Bi;O.layers.enable(1),O.viewport=new Dn;const D=new Bi;D.layers.enable(2),D.viewport=new Dn;const X=[O,D],b=new uw;b.layers.enable(1),b.layers.enable(2);let U=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=w[G];return Y===void 0&&(Y=new cp,w[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=w[G];return Y===void 0&&(Y=new cp,w[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=w[G];return Y===void 0&&(Y=new cp,w[G]=Y),Y.getHandSpace()};function $(G){const Y=A.indexOf(G.inputSource);if(Y===-1)return;const dt=w[Y];dt!==void 0&&(dt.update(G.inputSource,G.frame,p||f),dt.dispatchEvent({type:G.type,data:G.inputSource}))}function ht(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",k);for(let G=0;G<w.length;G++){const Y=A[G];Y!==null&&(A[G]=null,w[G].disconnect(Y))}U=null,J=null,t.setRenderTarget(S),y=null,v=null,g=null,s=null,x=null,V.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){u=G,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){c=G,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await n.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(s,n,Y),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),x=new vs(y.framebufferWidth,y.framebufferHeight,{format:Ki,type:Dr,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let Y=null,dt=null,xt=null;M.depth&&(xt=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=M.stencil?Po:_s,dt=M.stencil?ms:Er);const Mt={colorFormat:n.RGBA8,depthFormat:xt,scaleFactor:u};g=new XRWebGLBinding(s,n),v=g.createProjectionLayer(Mt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),x=new vs(v.textureWidth,v.textureHeight,{format:Ki,type:Dr,depthTexture:new _y(v.textureWidth,v.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Tt=t.properties.get(x);Tt.__ignoreDepthValues=v.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await s.requestReferenceSpace(c),V.setContext(s),V.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(G){for(let Y=0;Y<G.removed.length;Y++){const dt=G.removed[Y],xt=A.indexOf(dt);xt>=0&&(A[xt]=null,w[xt].disconnect(dt))}for(let Y=0;Y<G.added.length;Y++){const dt=G.added[Y];let xt=A.indexOf(dt);if(xt===-1){for(let Tt=0;Tt<w.length;Tt++)if(Tt>=A.length){A.push(dt),xt=Tt;break}else if(A[Tt]===null){A[Tt]=dt,xt=Tt;break}if(xt===-1)break}const Mt=w[xt];Mt&&Mt.connect(dt)}}const Z=new it,z=new it;function H(G,Y,dt){Z.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(dt.matrixWorld);const xt=Z.distanceTo(z),Mt=Y.projectionMatrix.elements,Tt=dt.projectionMatrix.elements,Ot=Mt[14]/(Mt[10]-1),Wt=Mt[14]/(Mt[10]+1),ue=(Mt[9]+1)/Mt[5],at=(Mt[9]-1)/Mt[5],vn=(Mt[8]-1)/Mt[0],It=(Tt[8]+1)/Tt[0],Qt=Ot*vn,Bt=Ot*It,He=xt/(-vn+It),ee=He*-vn;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ee),G.translateZ(He),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const B=Ot+He,C=Wt+He,st=Qt-ee,yt=Bt+(xt-ee),St=ue*Wt/C*B,gt=at*Wt/C*B;G.projectionMatrix.makePerspective(st,yt,St,gt,B,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;b.near=D.near=O.near=G.near,b.far=D.far=O.far=G.far,(U!==b.near||J!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,J=b.far);const Y=G.parent,dt=b.cameras;K(b,Y);for(let xt=0;xt<dt.length;xt++)K(dt[xt],Y);dt.length===2?H(b,O,D):b.projectionMatrix.copy(O.projectionMatrix),ot(G,b,Y)};function ot(G,Y,dt){dt===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(dt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Np*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(G){d=G,v!==null&&(v.fixedFoveation=G),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=G)};let ft=null;function P(G,Y){if(_=Y.getViewerPose(p||f),T=Y,_!==null){const dt=_.views;y!==null&&(t.setRenderTargetFramebuffer(x,y.framebuffer),t.setRenderTarget(x));let xt=!1;dt.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let Mt=0;Mt<dt.length;Mt++){const Tt=dt[Mt];let Ot=null;if(y!==null)Ot=y.getViewport(Tt);else{const ue=g.getViewSubImage(v,Tt);Ot=ue.viewport,Mt===0&&(t.setRenderTargetTextures(x,ue.colorTexture,v.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(x))}let Wt=X[Mt];Wt===void 0&&(Wt=new Bi,Wt.layers.enable(Mt),Wt.viewport=new Dn,X[Mt]=Wt),Wt.matrix.fromArray(Tt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Tt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Mt===0&&(b.matrix.copy(Wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(Wt)}}for(let dt=0;dt<w.length;dt++){const xt=A[dt],Mt=w[dt];xt!==null&&Mt!==void 0&&Mt.update(xt,Y,p||f)}ft&&ft(G,Y),Y.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Y}),T=null}const V=new my;V.setAnimationLoop(P),this.setAnimationLoop=function(G){ft=G},this.dispose=function(){}}}function hw(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,fy(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,w,A,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(S,x):x.isMeshToonMaterial?(u(S,x),g(S,x)):x.isMeshPhongMaterial?(u(S,x),_(S,x)):x.isMeshStandardMaterial?(u(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,L)):x.isMeshMatcapMaterial?(u(S,x),T(S,x)):x.isMeshDepthMaterial?u(S,x):x.isMeshDistanceMaterial?(u(S,x),M(S,x)):x.isMeshNormalMaterial?u(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?d(S,x,w,A):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ai&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ai&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const w=t.get(x).envMap;if(w&&(S.envMap.value=w,S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap){S.lightMap.value=x.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=x.lightMapIntensity*A,n(x.lightMap,S.lightMapTransform)}x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,w,A){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*w,S.scale.value=A*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),t.get(x).envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,w){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&S.clearcoatNormalScale.value.negate())),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const w=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function dw(o,t,n,a){let s={},u={},f=[];const c=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(w,A){const L=A.program;a.uniformBlockBinding(w,L)}function p(w,A){let L=s[w.id];L===void 0&&(T(w),L=_(w),s[w.id]=L,w.addEventListener("dispose",S));const F=A.program;a.updateUBOMapping(w,F);const O=t.render.frame;u[w.id]!==O&&(v(w),u[w.id]=O)}function _(w){const A=g();w.__bindingPointIndex=A;const L=o.createBuffer(),F=w.__size,O=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,F,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,L),L}function g(){for(let w=0;w<c;w++)if(f.indexOf(w)===-1)return f.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const A=s[w.id],L=w.uniforms,F=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let O=0,D=L.length;O<D;O++){const X=Array.isArray(L[O])?L[O]:[L[O]];for(let b=0,U=X.length;b<U;b++){const J=X[b];if(y(J,O,b,F)===!0){const $=J.__offset,ht=Array.isArray(J.value)?J.value:[J.value];let k=0;for(let Z=0;Z<ht.length;Z++){const z=ht[Z],H=M(z);typeof z=="number"||typeof z=="boolean"?(J.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,$+k,J.__data)):z.isMatrix3?(J.__data[0]=z.elements[0],J.__data[1]=z.elements[1],J.__data[2]=z.elements[2],J.__data[3]=0,J.__data[4]=z.elements[3],J.__data[5]=z.elements[4],J.__data[6]=z.elements[5],J.__data[7]=0,J.__data[8]=z.elements[6],J.__data[9]=z.elements[7],J.__data[10]=z.elements[8],J.__data[11]=0):(z.toArray(J.__data,k),k+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,J.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(w,A,L,F){const O=w.value,D=A+"_"+L;if(F[D]===void 0)return typeof O=="number"||typeof O=="boolean"?F[D]=O:F[D]=O.clone(),!0;{const X=F[D];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return F[D]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function T(w){const A=w.uniforms;let L=0;const F=16;for(let D=0,X=A.length;D<X;D++){const b=Array.isArray(A[D])?A[D]:[A[D]];for(let U=0,J=b.length;U<J;U++){const $=b[U],ht=Array.isArray($.value)?$.value:[$.value];for(let k=0,Z=ht.length;k<Z;k++){const z=ht[k],H=M(z),K=L%F;K!==0&&F-K<H.boundary&&(L+=F-K),$.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=H.storage}}}const O=L%F;return O>0&&(L+=F-O),w.__size=L,w.__cache={},this}function M(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function S(w){const A=w.target;A.removeEventListener("dispose",S);const L=f.indexOf(A.__bindingPointIndex);f.splice(L,1),o.deleteBuffer(s[A.id]),delete s[A.id],delete u[A.id]}function x(){for(const w in s)o.deleteBuffer(s[w]);f=[],s={},u={}}return{bind:d,update:p,dispose:x}}class My{constructor(t={}){const{canvas:n=lb(),context:a=null,depth:s=!0,stencil:u=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let v;a!==null?v=a.getContextAttributes().alpha:v=f;const y=new Uint32Array(4),T=new Int32Array(4);let M=null,S=null;const x=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this._useLegacyLights=!1,this.toneMapping=wr,this.toneMappingExposure=1;const A=this;let L=!1,F=0,O=0,D=null,X=-1,b=null;const U=new Dn,J=new Dn;let $=null;const ht=new Ee(0);let k=0,Z=n.width,z=n.height,H=1,K=null,ot=null;const ft=new Dn(0,0,Z,z),P=new Dn(0,0,Z,z);let V=!1;const G=new py;let Y=!1,dt=!1,xt=null;const Mt=new Mn,Tt=new Oe,Ot=new it,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return D===null?H:1}let at=a;function vn(N,Q){for(let lt=0;lt<N.length;lt++){const ut=N[lt],rt=n.getContext(ut,Q);if(rt!==null)return rt}return null}try{const N={alpha:!0,depth:s,stencil:u,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${em}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",Rt,!1),at===null){const Q=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&Q.shift(),at=vn(Q,N),at===null)throw vn(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&at instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),at.getShaderPrecisionFormat===void 0&&(at.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let It,Qt,Bt,He,ee,B,C,st,yt,St,gt,Ht,Ct,Nt,qt,ie,vt,Me,le,Kt,Lt,Dt,kt,Se;function Xe(){It=new E2(at),Qt=new _2(at,It,t),It.init(Qt),Dt=new lw(at,It,Qt),Bt=new sw(at,It,Qt),He=new A2(at),ee=new qC,B=new ow(at,It,Bt,ee,Qt,Dt,He),C=new v2(A),st=new M2(A),yt=new Nb(at,Qt),kt=new p2(at,It,yt,Qt),St=new T2(at,yt,He,kt),gt=new D2(at,St,yt,He),le=new w2(at,Qt,B),ie=new g2(ee),Ht=new WC(A,C,st,It,Qt,kt,ie),Ct=new hw(A,ee),Nt=new jC,qt=new tw(It,Qt),Me=new d2(A,C,st,Bt,gt,v,d),vt=new rw(A,gt,Qt),Se=new dw(at,He,Qt,Bt),Kt=new m2(at,It,He,Qt),Lt=new b2(at,It,He,Qt),He.programs=Ht.programs,A.capabilities=Qt,A.extensions=It,A.properties=ee,A.renderLists=Nt,A.shadowMap=vt,A.state=Bt,A.info=He}Xe();const re=new fw(A,at);this.xr=re,this.getContext=function(){return at},this.getContextAttributes=function(){return at.getContextAttributes()},this.forceContextLoss=function(){const N=It.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=It.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(N){N!==void 0&&(H=N,this.setSize(Z,z,!1))},this.getSize=function(N){return N.set(Z,z)},this.setSize=function(N,Q,lt=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=N,z=Q,n.width=Math.floor(N*H),n.height=Math.floor(Q*H),lt===!0&&(n.style.width=N+"px",n.style.height=Q+"px"),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(Z*H,z*H).floor()},this.setDrawingBufferSize=function(N,Q,lt){Z=N,z=Q,H=lt,n.width=Math.floor(N*lt),n.height=Math.floor(Q*lt),this.setViewport(0,0,N,Q)},this.getCurrentViewport=function(N){return N.copy(U)},this.getViewport=function(N){return N.copy(ft)},this.setViewport=function(N,Q,lt,ut){N.isVector4?ft.set(N.x,N.y,N.z,N.w):ft.set(N,Q,lt,ut),Bt.viewport(U.copy(ft).multiplyScalar(H).floor())},this.getScissor=function(N){return N.copy(P)},this.setScissor=function(N,Q,lt,ut){N.isVector4?P.set(N.x,N.y,N.z,N.w):P.set(N,Q,lt,ut),Bt.scissor(J.copy(P).multiplyScalar(H).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(N){Bt.setScissorTest(V=N)},this.setOpaqueSort=function(N){K=N},this.setTransparentSort=function(N){ot=N},this.getClearColor=function(N){return N.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(N=!0,Q=!0,lt=!0){let ut=0;if(N){let rt=!1;if(D!==null){const wt=D.texture.format;rt=wt===JS||wt===QS||wt===KS}if(rt){const wt=D.texture.type,Pt=wt===Dr||wt===Er||wt===nm||wt===ms||wt===jS||wt===ZS,Xt=Me.getClearColor(),Yt=Me.getClearAlpha(),Ft=Xt.r,Jt=Xt.g,$t=Xt.b;Pt?(y[0]=Ft,y[1]=Jt,y[2]=$t,y[3]=Yt,at.clearBufferuiv(at.COLOR,0,y)):(T[0]=Ft,T[1]=Jt,T[2]=$t,T[3]=Yt,at.clearBufferiv(at.COLOR,0,T))}else ut|=at.COLOR_BUFFER_BIT}Q&&(ut|=at.DEPTH_BUFFER_BIT),lt&&(ut|=at.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",Rt,!1),Nt.dispose(),qt.dispose(),ee.dispose(),C.dispose(),st.dispose(),gt.dispose(),kt.dispose(),Se.dispose(),Ht.dispose(),re.dispose(),re.removeEventListener("sessionstart",tn),re.removeEventListener("sessionend",we),xt&&(xt.dispose(),xt=null),xn.stop()};function Et(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const N=He.autoReset,Q=vt.enabled,lt=vt.autoUpdate,ut=vt.needsUpdate,rt=vt.type;Xe(),He.autoReset=N,vt.enabled=Q,vt.autoUpdate=lt,vt.needsUpdate=ut,vt.type=rt}function Rt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function bt(N){const Q=N.target;Q.removeEventListener("dispose",bt),jt(Q)}function jt(N){Gt(N),ee.remove(N)}function Gt(N){const Q=ee.get(N).programs;Q!==void 0&&(Q.forEach(function(lt){Ht.releaseProgram(lt)}),N.isShaderMaterial&&Ht.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,lt,ut,rt,wt){Q===null&&(Q=Wt);const Pt=rt.isMesh&&rt.matrixWorld.determinant()<0,Xt=Un(N,Q,lt,ut,rt);Bt.setMaterial(ut,Pt);let Yt=lt.index,Ft=1;if(ut.wireframe===!0){if(Yt=St.getWireframeAttribute(lt),Yt===void 0)return;Ft=2}const Jt=lt.drawRange,$t=lt.attributes.position;let be=Jt.start*Ft,sn=(Jt.start+Jt.count)*Ft;wt!==null&&(be=Math.max(be,wt.start*Ft),sn=Math.min(sn,(wt.start+wt.count)*Ft)),Yt!==null?(be=Math.max(be,0),sn=Math.min(sn,Yt.count)):$t!=null&&(be=Math.max(be,0),sn=Math.min(sn,$t.count));const on=sn-be;if(on<0||on===1/0)return;kt.setup(rt,ut,Xt,lt,Yt);let Ai,Ie=Kt;if(Yt!==null&&(Ai=yt.get(Yt),Ie=Lt,Ie.setIndex(Ai)),rt.isMesh)ut.wireframe===!0?(Bt.setLineWidth(ut.wireframeLinewidth*ue()),Ie.setMode(at.LINES)):Ie.setMode(at.TRIANGLES);else if(rt.isLine){let se=ut.linewidth;se===void 0&&(se=1),Bt.setLineWidth(se*ue()),rt.isLineSegments?Ie.setMode(at.LINES):rt.isLineLoop?Ie.setMode(at.LINE_LOOP):Ie.setMode(at.LINE_STRIP)}else rt.isPoints?Ie.setMode(at.POINTS):rt.isSprite&&Ie.setMode(at.TRIANGLES);if(rt.isBatchedMesh)Ie.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else if(rt.isInstancedMesh)Ie.renderInstances(be,on,rt.count);else if(lt.isInstancedBufferGeometry){const se=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ka=Math.min(lt.instanceCount,se);Ie.renderInstances(be,on,ka)}else Ie.render(be,on)};function Ce(N,Q,lt){N.transparent===!0&&N.side===sa&&N.forceSinglePass===!1?(N.side=ai,N.needsUpdate=!0,zr(N,Q,lt),N.side=Or,N.needsUpdate=!0,zr(N,Q,lt),N.side=sa):zr(N,Q,lt)}this.compile=function(N,Q,lt=null){lt===null&&(lt=N),S=qt.get(lt),S.init(),w.push(S),lt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(Q.layers)&&(S.pushLight(rt),rt.castShadow&&S.pushShadow(rt))}),N!==lt&&N.traverseVisible(function(rt){rt.isLight&&rt.layers.test(Q.layers)&&(S.pushLight(rt),rt.castShadow&&S.pushShadow(rt))}),S.setupLights(A._useLegacyLights);const ut=new Set;return N.traverse(function(rt){const wt=rt.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const Xt=wt[Pt];Ce(Xt,lt,rt),ut.add(Xt)}else Ce(wt,lt,rt),ut.add(wt)}),w.pop(),S=null,ut},this.compileAsync=function(N,Q,lt=null){const ut=this.compile(N,Q,lt);return new Promise(rt=>{function wt(){if(ut.forEach(function(Pt){ee.get(Pt).currentProgram.isReady()&&ut.delete(Pt)}),ut.size===0){rt(N);return}setTimeout(wt,10)}It.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Te=null;function Ke(N){Te&&Te(N)}function tn(){xn.stop()}function we(){xn.start()}const xn=new my;xn.setAnimationLoop(Ke),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(N){Te=N,re.setAnimationLoop(N),N===null?xn.stop():xn.start()},re.addEventListener("sessionstart",tn),re.addEventListener("sessionend",we),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Q),Q=re.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Q,D),S=qt.get(N,w.length),S.init(),w.push(S),Mt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G.setFromProjectionMatrix(Mt),dt=this.localClippingEnabled,Y=ie.init(this.clippingPlanes,dt),M=Nt.get(N,x.length),M.init(),x.push(M),li(N,Q,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(K,ot),this.info.render.frame++,Y===!0&&ie.beginShadows();const lt=S.state.shadowsArray;if(vt.render(lt,N,Q),Y===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(M,N),S.setupLights(A._useLegacyLights),Q.isArrayCamera){const ut=Q.cameras;for(let rt=0,wt=ut.length;rt<wt;rt++){const Pt=ut[rt];Io(M,N,Pt,Pt.viewport)}}else Io(M,N,Q);D!==null&&(B.updateMultisampleRenderTarget(D),B.updateRenderTargetMipmap(D)),N.isScene===!0&&N.onAfterRender(A,N,Q),kt.resetDefaultState(),X=-1,b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,x.pop(),x.length>0?M=x[x.length-1]:M=null};function li(N,Q,lt,ut){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)lt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||G.intersectsSprite(N)){ut&&Ot.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Mt);const Pt=gt.update(N),Xt=N.material;Xt.visible&&M.push(N,Pt,Xt,lt,Ot.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||G.intersectsObject(N))){const Pt=gt.update(N),Xt=N.material;if(ut&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ot.copy(N.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ot.copy(Pt.boundingSphere.center)),Ot.applyMatrix4(N.matrixWorld).applyMatrix4(Mt)),Array.isArray(Xt)){const Yt=Pt.groups;for(let Ft=0,Jt=Yt.length;Ft<Jt;Ft++){const $t=Yt[Ft],be=Xt[$t.materialIndex];be&&be.visible&&M.push(N,Pt,be,lt,Ot.z,$t)}}else Xt.visible&&M.push(N,Pt,Xt,lt,Ot.z,null)}}const wt=N.children;for(let Pt=0,Xt=wt.length;Pt<Xt;Pt++)li(wt[Pt],Q,lt,ut)}function Io(N,Q,lt,ut){const rt=N.opaque,wt=N.transmissive,Pt=N.transparent;S.setupLightsView(lt),Y===!0&&ie.setGlobalState(A.clippingPlanes,lt),wt.length>0&&Ho(rt,wt,Q,lt),ut&&Bt.viewport(U.copy(ut)),rt.length>0&&Ga(rt,Q,lt),wt.length>0&&Ga(wt,Q,lt),Pt.length>0&&Ga(Pt,Q,lt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ho(N,Q,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;const wt=Qt.isWebGL2;xt===null&&(xt=new vs(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?iu:Dr,minFilter:nu,samples:wt?4:0})),A.getDrawingBufferSize(Tt),wt?xt.setSize(Tt.x,Tt.y):xt.setSize(Op(Tt.x),Op(Tt.y));const Pt=A.getRenderTarget();A.setRenderTarget(xt),A.getClearColor(ht),k=A.getClearAlpha(),k<1&&A.setClearColor(16777215,.5),A.clear();const Xt=A.toneMapping;A.toneMapping=wr,Ga(N,lt,ut),B.updateMultisampleRenderTarget(xt),B.updateRenderTargetMipmap(xt);let Yt=!1;for(let Ft=0,Jt=Q.length;Ft<Jt;Ft++){const $t=Q[Ft],be=$t.object,sn=$t.geometry,on=$t.material,Ai=$t.group;if(on.side===sa&&be.layers.test(ut.layers)){const Ie=on.side;on.side=ai,on.needsUpdate=!0,Go(be,lt,ut,sn,on,Ai),on.side=Ie,on.needsUpdate=!0,Yt=!0}}Yt===!0&&(B.updateMultisampleRenderTarget(xt),B.updateRenderTargetMipmap(xt)),A.setRenderTarget(Pt),A.setClearColor(ht,k),A.toneMapping=Xt}function Ga(N,Q,lt){const ut=Q.isScene===!0?Q.overrideMaterial:null;for(let rt=0,wt=N.length;rt<wt;rt++){const Pt=N[rt],Xt=Pt.object,Yt=Pt.geometry,Ft=ut===null?Pt.material:ut,Jt=Pt.group;Xt.layers.test(lt.layers)&&Go(Xt,Q,lt,Yt,Ft,Jt)}}function Go(N,Q,lt,ut,rt,wt){N.onBeforeRender(A,Q,lt,ut,rt,wt),N.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),rt.onBeforeRender(A,Q,lt,ut,N,wt),rt.transparent===!0&&rt.side===sa&&rt.forceSinglePass===!1?(rt.side=ai,rt.needsUpdate=!0,A.renderBufferDirect(lt,Q,ut,rt,N,wt),rt.side=Or,rt.needsUpdate=!0,A.renderBufferDirect(lt,Q,ut,rt,N,wt),rt.side=sa):A.renderBufferDirect(lt,Q,ut,rt,N,wt),N.onAfterRender(A,Q,lt,ut,rt,wt)}function zr(N,Q,lt){Q.isScene!==!0&&(Q=Wt);const ut=ee.get(N),rt=S.state.lights,wt=S.state.shadowsArray,Pt=rt.state.version,Xt=Ht.getParameters(N,rt.state,wt,Q,lt),Yt=Ht.getProgramCacheKey(Xt);let Ft=ut.programs;ut.environment=N.isMeshStandardMaterial?Q.environment:null,ut.fog=Q.fog,ut.envMap=(N.isMeshStandardMaterial?st:C).get(N.envMap||ut.environment),Ft===void 0&&(N.addEventListener("dispose",bt),Ft=new Map,ut.programs=Ft);let Jt=Ft.get(Yt);if(Jt!==void 0){if(ut.currentProgram===Jt&&ut.lightsStateVersion===Pt)return rn(N,Xt),Jt}else Xt.uniforms=Ht.getUniforms(N),N.onBuild(lt,Xt,A),N.onBeforeCompile(Xt,A),Jt=Ht.acquireProgram(Xt,Yt),Ft.set(Yt,Jt),ut.uniforms=Xt.uniforms;const $t=ut.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($t.clippingPlanes=ie.uniform),rn(N,Xt),ut.needsLights=Vo(N),ut.lightsStateVersion=Pt,ut.needsLights&&($t.ambientLightColor.value=rt.state.ambient,$t.lightProbe.value=rt.state.probe,$t.directionalLights.value=rt.state.directional,$t.directionalLightShadows.value=rt.state.directionalShadow,$t.spotLights.value=rt.state.spot,$t.spotLightShadows.value=rt.state.spotShadow,$t.rectAreaLights.value=rt.state.rectArea,$t.ltc_1.value=rt.state.rectAreaLTC1,$t.ltc_2.value=rt.state.rectAreaLTC2,$t.pointLights.value=rt.state.point,$t.pointLightShadows.value=rt.state.pointShadow,$t.hemisphereLights.value=rt.state.hemi,$t.directionalShadowMap.value=rt.state.directionalShadowMap,$t.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,$t.spotShadowMap.value=rt.state.spotShadowMap,$t.spotLightMatrix.value=rt.state.spotLightMatrix,$t.spotLightMap.value=rt.state.spotLightMap,$t.pointShadowMap.value=rt.state.pointShadowMap,$t.pointShadowMatrix.value=rt.state.pointShadowMatrix),ut.currentProgram=Jt,ut.uniformsList=null,Jt}function Gi(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=Yc.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function rn(N,Q){const lt=ee.get(N);lt.outputColorSpace=Q.outputColorSpace,lt.batching=Q.batching,lt.instancing=Q.instancing,lt.instancingColor=Q.instancingColor,lt.skinning=Q.skinning,lt.morphTargets=Q.morphTargets,lt.morphNormals=Q.morphNormals,lt.morphColors=Q.morphColors,lt.morphTargetsCount=Q.morphTargetsCount,lt.numClippingPlanes=Q.numClippingPlanes,lt.numIntersection=Q.numClipIntersection,lt.vertexAlphas=Q.vertexAlphas,lt.vertexTangents=Q.vertexTangents,lt.toneMapping=Q.toneMapping}function Un(N,Q,lt,ut,rt){Q.isScene!==!0&&(Q=Wt),B.resetTextureUnits();const wt=Q.fog,Pt=ut.isMeshStandardMaterial?Q.environment:null,Xt=D===null?A.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ia,Yt=(ut.isMeshStandardMaterial?st:C).get(ut.envMap||Pt),Ft=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),$t=!!lt.morphAttributes.position,be=!!lt.morphAttributes.normal,sn=!!lt.morphAttributes.color;let on=wr;ut.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(on=A.toneMapping);const Ai=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ie=Ai!==void 0?Ai.length:0,se=ee.get(ut),ka=S.state.lights;if(Y===!0&&(dt===!0||N!==b)){const Wn=N===b&&ut.id===X;ie.setState(ut,N,Wn)}let Pe=!1;ut.version===se.__version?(se.needsLights&&se.lightsStateVersion!==ka.state.version||se.outputColorSpace!==Xt||rt.isBatchedMesh&&se.batching===!1||!rt.isBatchedMesh&&se.batching===!0||rt.isInstancedMesh&&se.instancing===!1||!rt.isInstancedMesh&&se.instancing===!0||rt.isSkinnedMesh&&se.skinning===!1||!rt.isSkinnedMesh&&se.skinning===!0||rt.isInstancedMesh&&se.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&se.instancingColor===!1&&rt.instanceColor!==null||se.envMap!==Yt||ut.fog===!0&&se.fog!==wt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==ie.numPlanes||se.numIntersection!==ie.numIntersection)||se.vertexAlphas!==Ft||se.vertexTangents!==Jt||se.morphTargets!==$t||se.morphNormals!==be||se.morphColors!==sn||se.toneMapping!==on||Qt.isWebGL2===!0&&se.morphTargetsCount!==Ie)&&(Pe=!0):(Pe=!0,se.__version=ut.version);let Tn=se.currentProgram;Pe===!0&&(Tn=zr(ut,Q,rt));let In=!1,Xa=!1,ko=!1;const ln=Tn.getUniforms(),Ji=se.uniforms;if(Bt.useProgram(Tn.program)&&(In=!0,Xa=!0,ko=!0),ut.id!==X&&(X=ut.id,Xa=!0),In||b!==N){ln.setValue(at,"projectionMatrix",N.projectionMatrix),ln.setValue(at,"viewMatrix",N.matrixWorldInverse);const Wn=ln.map.cameraPosition;Wn!==void 0&&Wn.setValue(at,Ot.setFromMatrixPosition(N.matrixWorld)),Qt.logarithmicDepthBuffer&&ln.setValue(at,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&ln.setValue(at,"isOrthographic",N.isOrthographicCamera===!0),b!==N&&(b=N,Xa=!0,ko=!0)}if(rt.isSkinnedMesh){ln.setOptional(at,rt,"bindMatrix"),ln.setOptional(at,rt,"bindMatrixInverse");const Wn=rt.skeleton;Wn&&(Qt.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),ln.setValue(at,"boneTexture",Wn.boneTexture,B)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}rt.isBatchedMesh&&(ln.setOptional(at,rt,"batchingTexture"),ln.setValue(at,"batchingTexture",rt._matricesTexture,B));const Wa=lt.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&Qt.isWebGL2===!0)&&le.update(rt,lt,Tn),(Xa||se.receiveShadow!==rt.receiveShadow)&&(se.receiveShadow=rt.receiveShadow,ln.setValue(at,"receiveShadow",rt.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Ji.envMap.value=Yt,Ji.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),Xa&&(ln.setValue(at,"toneMappingExposure",A.toneMappingExposure),se.needsLights&&Va(Ji,ko),wt&&ut.fog===!0&&Ct.refreshFogUniforms(Ji,wt),Ct.refreshMaterialUniforms(Ji,ut,H,z,xt),Yc.upload(at,Gi(se),Ji,B)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Yc.upload(at,Gi(se),Ji,B),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&ln.setValue(at,"center",rt.center),ln.setValue(at,"modelViewMatrix",rt.modelViewMatrix),ln.setValue(at,"normalMatrix",rt.normalMatrix),ln.setValue(at,"modelMatrix",rt.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Wn=ut.uniformsGroups;for(let Nn=0,Xo=Wn.length;Nn<Xo;Nn++)if(Qt.isWebGL2){const Wo=Wn[Nn];Se.update(Wo,Tn),Se.bind(Wo,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function Va(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function Vo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(N,Q,lt){ee.get(N.texture).__webglTexture=Q,ee.get(N.depthTexture).__webglTexture=lt;const ut=ee.get(N);ut.__hasExternalTextures=!0,ut.__hasExternalTextures&&(ut.__autoAllocateDepthBuffer=lt===void 0,ut.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,Q){const lt=ee.get(N);lt.__webglFramebuffer=Q,lt.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(N,Q=0,lt=0){D=N,F=Q,O=lt;let ut=!0,rt=null,wt=!1,Pt=!1;if(N){const Yt=ee.get(N);Yt.__useDefaultFramebuffer!==void 0?(Bt.bindFramebuffer(at.FRAMEBUFFER,null),ut=!1):Yt.__webglFramebuffer===void 0?B.setupRenderTarget(N):Yt.__hasExternalTextures&&B.rebindTextures(N,ee.get(N.texture).__webglTexture,ee.get(N.depthTexture).__webglTexture);const Ft=N.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Pt=!0);const Jt=ee.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Jt[Q])?rt=Jt[Q][lt]:rt=Jt[Q],wt=!0):Qt.isWebGL2&&N.samples>0&&B.useMultisampledRTT(N)===!1?rt=ee.get(N).__webglMultisampledFramebuffer:Array.isArray(Jt)?rt=Jt[lt]:rt=Jt,U.copy(N.viewport),J.copy(N.scissor),$=N.scissorTest}else U.copy(ft).multiplyScalar(H).floor(),J.copy(P).multiplyScalar(H).floor(),$=V;if(Bt.bindFramebuffer(at.FRAMEBUFFER,rt)&&Qt.drawBuffers&&ut&&Bt.drawBuffers(N,rt),Bt.viewport(U),Bt.scissor(J),Bt.setScissorTest($),wt){const Yt=ee.get(N.texture);at.framebufferTexture2D(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0,at.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Yt.__webglTexture,lt)}else if(Pt){const Yt=ee.get(N.texture),Ft=Q||0;at.framebufferTextureLayer(at.FRAMEBUFFER,at.COLOR_ATTACHMENT0,Yt.__webglTexture,lt||0,Ft)}X=-1},this.readRenderTargetPixels=function(N,Q,lt,ut,rt,wt,Pt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=ee.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pt!==void 0&&(Xt=Xt[Pt]),Xt){Bt.bindFramebuffer(at.FRAMEBUFFER,Xt);try{const Yt=N.texture,Ft=Yt.format,Jt=Yt.type;if(Ft!==Ki&&Dt.convert(Ft)!==at.getParameter(at.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=Jt===iu&&(It.has("EXT_color_buffer_half_float")||Qt.isWebGL2&&It.has("EXT_color_buffer_float"));if(Jt!==Dr&&Dt.convert(Jt)!==at.getParameter(at.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Jt===Tr&&(Qt.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-ut&&lt>=0&&lt<=N.height-rt&&at.readPixels(Q,lt,ut,rt,Dt.convert(Ft),Dt.convert(Jt),wt)}finally{const Yt=D!==null?ee.get(D).__webglFramebuffer:null;Bt.bindFramebuffer(at.FRAMEBUFFER,Yt)}}},this.copyFramebufferToTexture=function(N,Q,lt=0){const ut=Math.pow(2,-lt),rt=Math.floor(Q.image.width*ut),wt=Math.floor(Q.image.height*ut);B.setTexture2D(Q,0),at.copyTexSubImage2D(at.TEXTURE_2D,lt,0,0,N.x,N.y,rt,wt),Bt.unbindTexture()},this.copyTextureToTexture=function(N,Q,lt,ut=0){const rt=Q.image.width,wt=Q.image.height,Pt=Dt.convert(lt.format),Xt=Dt.convert(lt.type);B.setTexture2D(lt,0),at.pixelStorei(at.UNPACK_FLIP_Y_WEBGL,lt.flipY),at.pixelStorei(at.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),at.pixelStorei(at.UNPACK_ALIGNMENT,lt.unpackAlignment),Q.isDataTexture?at.texSubImage2D(at.TEXTURE_2D,ut,N.x,N.y,rt,wt,Pt,Xt,Q.image.data):Q.isCompressedTexture?at.compressedTexSubImage2D(at.TEXTURE_2D,ut,N.x,N.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Pt,Q.mipmaps[0].data):at.texSubImage2D(at.TEXTURE_2D,ut,N.x,N.y,Pt,Xt,Q.image),ut===0&&lt.generateMipmaps&&at.generateMipmap(at.TEXTURE_2D),Bt.unbindTexture()},this.copyTextureToTexture3D=function(N,Q,lt,ut,rt=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=N.max.x-N.min.x+1,Pt=N.max.y-N.min.y+1,Xt=N.max.z-N.min.z+1,Yt=Dt.convert(ut.format),Ft=Dt.convert(ut.type);let Jt;if(ut.isData3DTexture)B.setTexture3D(ut,0),Jt=at.TEXTURE_3D;else if(ut.isDataArrayTexture||ut.isCompressedArrayTexture)B.setTexture2DArray(ut,0),Jt=at.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}at.pixelStorei(at.UNPACK_FLIP_Y_WEBGL,ut.flipY),at.pixelStorei(at.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),at.pixelStorei(at.UNPACK_ALIGNMENT,ut.unpackAlignment);const $t=at.getParameter(at.UNPACK_ROW_LENGTH),be=at.getParameter(at.UNPACK_IMAGE_HEIGHT),sn=at.getParameter(at.UNPACK_SKIP_PIXELS),on=at.getParameter(at.UNPACK_SKIP_ROWS),Ai=at.getParameter(at.UNPACK_SKIP_IMAGES),Ie=lt.isCompressedTexture?lt.mipmaps[rt]:lt.image;at.pixelStorei(at.UNPACK_ROW_LENGTH,Ie.width),at.pixelStorei(at.UNPACK_IMAGE_HEIGHT,Ie.height),at.pixelStorei(at.UNPACK_SKIP_PIXELS,N.min.x),at.pixelStorei(at.UNPACK_SKIP_ROWS,N.min.y),at.pixelStorei(at.UNPACK_SKIP_IMAGES,N.min.z),lt.isDataTexture||lt.isData3DTexture?at.texSubImage3D(Jt,rt,Q.x,Q.y,Q.z,wt,Pt,Xt,Yt,Ft,Ie.data):lt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),at.compressedTexSubImage3D(Jt,rt,Q.x,Q.y,Q.z,wt,Pt,Xt,Yt,Ie.data)):at.texSubImage3D(Jt,rt,Q.x,Q.y,Q.z,wt,Pt,Xt,Yt,Ft,Ie),at.pixelStorei(at.UNPACK_ROW_LENGTH,$t),at.pixelStorei(at.UNPACK_IMAGE_HEIGHT,be),at.pixelStorei(at.UNPACK_SKIP_PIXELS,sn),at.pixelStorei(at.UNPACK_SKIP_ROWS,on),at.pixelStorei(at.UNPACK_SKIP_IMAGES,Ai),rt===0&&ut.generateMipmaps&&at.generateMipmap(Jt),Bt.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),Bt.unbindTexture()},this.resetState=function(){F=0,O=0,D=null,Bt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===im?"display-p3":"srgb",n.unpackColorSpace=Ne.workingColorSpace===ff?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wn?gs:ty}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===gs?wn:Ia}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class pw extends My{}pw.prototype.isWebGL1Renderer=!0;class mw extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ey extends uu{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bx=new it,Fx=new it,Ix=new Mn,fp=new sy,kc=new hf;class _w extends si{constructor(t=new Ha,n=new Ey){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let s=1,u=n.count;s<u;s++)Bx.fromBufferAttribute(n,s-1),Fx.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=Bx.distanceTo(Fx);t.setAttribute("lineDistance",new ua(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,u=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere),kc.applyMatrix4(s),kc.radius+=u,t.ray.intersectsSphere(kc)===!1)return;Ix.copy(s).invert(),fp.copy(t.ray).applyMatrix4(Ix);const c=u/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=new it,_=new it,g=new it,v=new it,y=this.isLineSegments?2:1,T=a.index,S=a.attributes.position;if(T!==null){const x=Math.max(0,f.start),w=Math.min(T.count,f.start+f.count);for(let A=x,L=w-1;A<L;A+=y){const F=T.getX(A),O=T.getX(A+1);if(p.fromBufferAttribute(S,F),_.fromBufferAttribute(S,O),fp.distanceSqToSegment(p,_,v,g)>d)continue;v.applyMatrix4(this.matrixWorld);const X=t.ray.origin.distanceTo(v);X<t.near||X>t.far||n.push({distance:X,point:g.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,f.start),w=Math.min(S.count,f.start+f.count);for(let A=x,L=w-1;A<L;A+=y){if(p.fromBufferAttribute(S,A),_.fromBufferAttribute(S,A+1),fp.distanceSqToSegment(p,_,v,g)>d)continue;v.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(v);O<t.near||O>t.far||n.push({distance:O,point:g.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=s.length;u<f;u++){const c=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}}const Hx=new it,Gx=new it;class Vx extends _w{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let s=0,u=n.count;s<u;s+=2)Hx.fromBufferAttribute(n,s),Gx.fromBufferAttribute(n,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Hx.distanceTo(Gx);t.setAttribute("lineDistance",new ua(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const kx={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class gw{constructor(t,n,a){const s=this;let u=!1,f=0,c=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(_){c++,u===!1&&s.onStart!==void 0&&s.onStart(_,f,c),u=!0},this.itemEnd=function(_){f++,s.onProgress!==void 0&&s.onProgress(_,f,c),f===c&&(u=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return d?d(_):_},this.setURLModifier=function(_){return d=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=p.length;g<v;g+=2){const y=p[g],T=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null}}}const vw=new gw;class sm{constructor(t){this.manager=t!==void 0?t:vw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(s,u){a.load(t,s,n,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sm.DEFAULT_MATERIAL_NAME="__DEFAULT";class xw extends sm{constructor(t){super(t)}load(t,n,a,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,f=kx.get(t);if(f!==void 0)return u.manager.itemStart(t),setTimeout(function(){n&&n(f),u.manager.itemEnd(t)},0),f;const c=au("img");function d(){_(),kx.add(t,this),n&&n(this),u.manager.itemEnd(t)}function p(g){_(),s&&s(g),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){c.removeEventListener("load",d,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),u.manager.itemStart(t),c.src=t,c}}class Sw extends sm{constructor(t){super(t)}load(t,n,a,s){const u=new ri,f=new xw(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(c){u.image=c,u.needsUpdate=!0,n!==void 0&&n(u)},a,s),u}}class yw{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Xx();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Xx(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);const Mw=({isDarkMode:o})=>{const t=Vn.useRef(null),n=Vn.useRef(null),a=Vn.useRef(null),s=Vn.useRef(null),u=Vn.useRef(null),f=Vn.useRef(null),c=Vn.useRef([]),d=Vn.useRef(0),p=Vn.useRef(null),_=24,g=16,v=6,y=14,T=6,M=4,S=_/T,x=g/M,A=Array.from({length:9},(O,D)=>new URL(`./images/tunnel-${String(D+1).padStart(2,"0")}.svg`,window.location.href).href),L=O=>{const D=new kl;D.position.z=O;const X=_/2,b=g/2,U=v,J=new Ey({color:11579568,transparent:!0,opacity:.5}),$=new Ha,ht=[];for(let Z=0;Z<=T;Z++){const z=-X+Z*S;ht.push(z,-b,0,z,-b,-U),ht.push(z,b,0,z,b,-U)}for(let Z=1;Z<M;Z++){const z=-b+Z*x;ht.push(-X,z,0,-X,z,-U),ht.push(X,z,0,X,z,-U)}ht.push(-X,-b,0,X,-b,0),ht.push(-X,b,0,X,b,0),ht.push(-X,-b,0,-X,b,0),ht.push(X,-b,0,X,b,0),$.setAttribute("position",new ua(ht,3));const k=new Vx($,J);return D.add(k),F(D,X,b,U),D},F=(O,D,X,b)=>{const U=new Sw,J=.4,$=(H,K,ot,ft)=>{const P=A[Math.floor(Math.random()*A.length)],V=new df(ot-J,ft-J),G=new am({transparent:!0,opacity:0,side:sa});U.load(P,dt=>{dt.minFilter=xi,G.map=dt,G.needsUpdate=!0,Yl.to(G,{opacity:.85,duration:1})});const Y=new Qi(V,G);Y.position.copy(H),Y.rotation.copy(K),Y.name="slab_image",O.add(Y)};let ht=-999;for(let H=0;H<T;H++)H>ht+1&&Math.random()>.8&&($(new it(-D+H*S+S/2,-X,-b/2),new br(-Math.PI/2,0,0),S,b),ht=H);let k=-999;for(let H=0;H<T;H++)H>k+1&&Math.random()>.88&&($(new it(-D+H*S+S/2,X,-b/2),new br(Math.PI/2,0,0),S,b),k=H);let Z=-999;for(let H=0;H<M;H++)H>Z+1&&Math.random()>.8&&($(new it(-D,-X+H*x+x/2,-b/2),new br(0,Math.PI/2,0),b,x),Z=H);let z=-999;for(let H=0;H<M;H++)H>z+1&&Math.random()>.8&&($(new it(D,-X+H*x+x/2,-b/2),new br(0,-Math.PI/2,0),b,x),z=H)};return Vn.useEffect(()=>{if(!n.current||!t.current)return;const O=new mw;s.current=O;const D=window.innerWidth,X=window.innerHeight,b=new Bi(70,D/X,.1,1e3);b.position.set(0,0,0),f.current=b;const U=new My({canvas:n.current,antialias:!0,alpha:!1,powerPreference:"high-performance"});U.setSize(D,X),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.current=U;const J=[];for(let K=0;K<y;K++){const ot=-K*v,ft=L(ot);O.add(ft),J.push(ft)}c.current=J;const $=typeof document<"u"&&document.documentElement.dataset.embedDark==="true",ht=55;p.current=new yw;let k;const Z=()=>{if(k=requestAnimationFrame(Z),!f.current||!s.current||!u.current)return;$&&p.current&&(d.current+=ht*p.current.getDelta());const K=-d.current*.05,ot=f.current.position.z;f.current.position.z+=(K-ot)*.1;const ft=y*v,P=f.current.position.z;c.current.forEach(V=>{if(V.position.z>P+v){let G=0;c.current.forEach(Tt=>G=Math.min(G,Tt.position.z)),V.position.z=G-v;const Y=[];V.traverse(Tt=>{Tt.name==="slab_image"&&Y.push(Tt)}),Y.forEach(Tt=>{V.remove(Tt),Tt instanceof Qi&&(Tt.geometry.dispose(),Tt.material.map&&Tt.material.map.dispose(),Tt.material.dispose())});const dt=_/2,xt=g/2;F(V,dt,xt,v)}if(V.position.z<P-ft-v){let G=-999999;c.current.forEach(Tt=>G=Math.max(G,Tt.position.z)),V.position.z=G+v;const Y=[];V.traverse(Tt=>{Tt.name==="slab_image"&&Y.push(Tt)}),Y.forEach(Tt=>{V.remove(Tt),Tt instanceof Qi&&(Tt.geometry.dispose(),Tt.material.map&&Tt.material.map.dispose(),Tt.material.dispose())});const dt=_/2,xt=g/2;F(V,dt,xt,v)}}),u.current.render(s.current,f.current)};Z();const z=()=>{$||(d.current=window.scrollY)};$||window.addEventListener("scroll",z);const H=()=>{const K=window.innerWidth,ot=window.innerHeight;b.aspect=K/ot,b.updateProjectionMatrix(),U.setSize(K,ot)};return window.addEventListener("resize",H),()=>{$||window.removeEventListener("scroll",z),window.removeEventListener("resize",H),cancelAnimationFrame(k),U.dispose()}},[]),Vn.useEffect(()=>{if(!s.current)return;const O=o?328965:16777215,D=o?328965:16777215,X=o?5592405:11579568,b=o?.35:.5;s.current.background=new Ee(O),s.current.fog&&s.current.fog.color.setHex(D),c.current.forEach(U=>{U.children.forEach(J=>{if(J instanceof Vx){const $=J.material;$.color.setHex(X),$.opacity=b,$.needsUpdate=!0}})})},[o]),Vn.useLayoutEffect(()=>{const O=Yl.context(()=>{Yl.fromTo(a.current,{opacity:0,y:30,scale:.95},{opacity:1,y:0,scale:1,duration:1.2,ease:"power3.out",delay:.5})},t);return()=>O.revert()},[]),_e.jsxs("div",{ref:t,className:`relative w-full h-[10000vh] transition-colors duration-700 ${o?"bg-[#050505]":"bg-white"}`,children:[_e.jsx("div",{className:"fixed inset-0 w-full h-full overflow-hidden z-0",children:_e.jsx("canvas",{ref:n,className:"w-full h-full block"})}),_e.jsx("div",{className:"fixed inset-0 z-10 flex items-center justify-center pointer-events-none",children:_e.jsxs("div",{ref:a,className:"text-center flex flex-col items-center max-w-3xl px-6 pointer-events-auto mix-blend-multiply-normal",children:[_e.jsx("h1",{className:`text-[5rem] md:text-[7rem] lg:text-[8rem] leading-[0.85] font-bold tracking-tighter mb-8 transition-colors duration-500 ${o?"text-white":"text-dark"}`,children:"Clone yourself."}),_e.jsxs("p",{className:`text-lg md:text-xl font-normal max-w-lg leading-relaxed mb-10 transition-colors duration-500 ${o?"text-gray-400":"text-muted"}`,children:["Build the digital version of you to scale your expertise and availability, ",_e.jsx("span",{className:"text-accent font-medium",children:"infinitely"})]}),_e.jsxs("div",{className:"flex items-center gap-6",children:[_e.jsx("button",{className:`rounded-full px-8 py-3.5 text-sm font-medium hover:scale-105 transition-all duration-300 ${o?"bg-white text-black hover:bg-gray-200":"bg-dark text-white"}`,children:"Try now"}),_e.jsxs("button",{className:`text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1 ${o?"text-white":"text-dark"}`,children:["See examples ",_e.jsx("span",{children:"→"})]})]})]})})]})},Ew=()=>{const[o,t]=Vn.useState(()=>typeof document<"u"&&document.documentElement.dataset.embedDark==="true"),n=()=>{t(a=>!a)};return Vn.useEffect(()=>{Yl.config({autoSleep:60,force3D:!0})},[]),_e.jsxs("div",{className:`min-h-screen transition-colors duration-700 ${o?"bg-[#050505] text-white selection:bg-orange-900 selection:text-orange-100":"bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900"} overflow-hidden`,children:[_e.jsx(VE,{isDarkMode:o,toggleTheme:n}),_e.jsx("main",{children:_e.jsx(Mw,{isDarkMode:o})}),_e.jsx("footer",{className:`fixed bottom-4 right-6 text-[10px] pointer-events-none z-50 transition-colors duration-500 ${o?"text-white/30":"text-black/30"}`,children:_e.jsxs("p",{children:["© ",new Date().getFullYear()," Delphi Clone."]})})]})},Ty=document.getElementById("root");if(!Ty)throw new Error("Could not find root element to mount to");const Tw=GE.createRoot(Ty);Tw.render(_e.jsx(NE.StrictMode,{children:_e.jsx(Ew,{})}));
