var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,u;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function h(){return d(" ")}function g(){return d("")}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t,n,r){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function b(e,t){return new e(t)}function y(e){u=e}function _(){if(!u)throw new Error("Function called outside component initialization");return u}function k(){const e=_();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const s=function(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}(t,n,{cancelable:r});return o.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}function x(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const q=[],E=[];let S=[];const j=[],A=Promise.resolve();let C=!1;function T(){C||(C=!0,A.then(M))}function I(e){S.push(e)}const L=new Set;let N=0;function M(){if(0!==N)return;const e=u;do{try{for(;N<q.length;){const e=q[N];N++,y(e),O(e.$$)}}catch(e){throw q.length=0,N=0,e}for(y(null),q.length=0,N=0;E.length;)E.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];L.has(t)||(L.add(t),t())}S.length=0}while(q.length);for(;j.length;)j.pop()();C=!1,L.clear(),y(e)}function O(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const W=new Set;let P;function R(){P={r:0,c:[],p:P}}function F(){P.r||o(P.c),P=P.p}function Q(e,t){e&&e.i&&(W.delete(e),e.i(t))}function Y(e,t,n,r){if(e&&e.o){if(W.has(e))return;W.add(e),P.c.push((()=>{W.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function H(e,t){Y(e,1,1,(()=>{t.delete(e.key)}))}function V(e,t,n,r,s,i,a,u,c,l,f,m){let p=e.length,d=i.length,h=p;const g={};for(;h--;)g[e[h].key]=h;const $=[],v=new Map,w=new Map,b=[];for(h=d;h--;){const e=m(s,i,h),o=n(e);let u=a.get(o);u?r&&b.push((()=>u.p(e,t))):(u=l(o,e),u.c()),v.set(o,$[h]=u),o in g&&w.set(o,Math.abs(h-g[o]))}const y=new Set,_=new Set;function k(e){Q(e,1),e.m(u,f),a.set(e.key,e),f=e.first,d--}for(;p&&d;){const t=$[d-1],n=e[p-1],r=t.key,o=n.key;t===n?(f=t.first,p--,d--):v.has(o)?!a.has(r)||y.has(r)?k(t):_.has(o)?p--:w.get(r)>w.get(o)?(_.add(r),k(t)):(y.add(o),p--):(c(n,a),p--)}for(;p--;){const t=e[p];v.has(t.key)||c(t,a)}for(;d;)k($[d-1]);return o(b),$}function D(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function X(e){return"object"==typeof e&&null!==e?e:{}}function z(e){e&&e.c()}function Z(e,t,r,i){const{fragment:a,after_update:u}=e.$$;a&&a.m(t,r),i||I((()=>{const t=e.$$.on_mount.map(n).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(I)}function J(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];S.forEach((r=>-1===e.indexOf(r)?t.push(r):n.push(r))),n.forEach((e=>e())),S=t}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,n,s,i,a,c,l,f=[-1]){const p=u;y(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:n.target||p.$$.root};l&&l(d.root);let h=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),h&&function(e,t){-1===e.$$.dirty[0]&&(q.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&Q(t.$$.fragment),Z(t,n.target,n.anchor,n.customElement),M()}y(p)}class U{$destroy(){J(this,1),this.$destroy=e}$on(t,n){if(!s(n))return e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const B=[];function G(e,t){return{subscribe:ee(e,t).subscribe}}function ee(t,n=e){let r;const o=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!B.length;for(const e of o)e[1](),B.push(e,t);if(e){for(let e=0;e<B.length;e+=2)B[e][0](B[e+1]);B.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const u=[i,a];return o.add(u),1===o.size&&(r=n(s)||e),i(t),()=>{o.delete(u),0===o.size&&r&&(r(),r=null)}}}}function te(t,n,r){const i=!Array.isArray(t),a=i?[t]:t,u=n.length<2;return G(r,(t=>{let r=!1;const c=[];let l=0,f=e;const m=()=>{if(l)return;f();const r=n(i?c[0]:c,t);u?t(r):f=s(r)?r:e},p=a.map(((t,n)=>function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(t,(e=>{c[n]=e,l&=~(1<<n),r&&m()}),(()=>{l|=1<<n}))));return r=!0,m(),function(){o(p),f(),r=!1}}))}function ne(e){let n,r,o;const s=[e[2]];var i=e[0];function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=b(i,a()),n.$on("routeEvent",e[7])),{c(){n&&z(n.$$.fragment),r=g()},m(e,t){n&&Z(n,e,t),f(e,r,t),o=!0},p(e,t){const o=4&t?D(s,[X(e[2])]):{};if(1&t&&i!==(i=e[0])){if(n){R();const e=n;Y(e.$$.fragment,1,0,(()=>{J(e,1)})),F()}i?(n=b(i,a()),n.$on("routeEvent",e[7]),z(n.$$.fragment),Q(n.$$.fragment,1),Z(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&Q(n.$$.fragment,e),o=!0)},o(e){n&&Y(n.$$.fragment,e),o=!1},d(e){e&&m(r),n&&J(n,e)}}}function re(e){let n,r,o;const s=[{params:e[1]},e[2]];var i=e[0];function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=b(i,a()),n.$on("routeEvent",e[6])),{c(){n&&z(n.$$.fragment),r=g()},m(e,t){n&&Z(n,e,t),f(e,r,t),o=!0},p(e,t){const o=6&t?D(s,[2&t&&{params:e[1]},4&t&&X(e[2])]):{};if(1&t&&i!==(i=e[0])){if(n){R();const e=n;Y(e.$$.fragment,1,0,(()=>{J(e,1)})),F()}i?(n=b(i,a()),n.$on("routeEvent",e[6]),z(n.$$.fragment),Q(n.$$.fragment,1),Z(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&Q(n.$$.fragment,e),o=!0)},o(e){n&&Y(n.$$.fragment,e),o=!1},d(e){e&&m(r),n&&J(n,e)}}}function oe(e){let t,n,r,o;const s=[re,ne],i=[];function a(e,t){return e[1]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=g()},m(e,n){i[t].m(e,n),f(e,r,n),o=!0},p(e,[o]){let u=t;t=a(e),t===u?i[t].p(e,o):(R(),Y(i[u],1,1,(()=>{i[u]=null})),F(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),Q(n,1),n.m(r.parentNode,r))},i(e){o||(Q(n),o=!0)},o(e){Y(n),o=!1},d(e){i[t].d(e),e&&m(r)}}}function se(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let r="";return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const ie=G(null,(function(e){e(se());const t=()=>{e(se())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}));te(ie,(e=>e.location)),te(ie,(e=>e.querystring));const ae=ee(void 0);function ue(e,t){if(t=le(t),!e||!e.tagName||"a"!=e.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return ce(e,t),{update(t){t=le(t),ce(e,t)}}}function ce(e,t){let n=t.href||e.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);e.setAttribute("href",n),e.addEventListener("click",(e=>{e.preventDefault(),t.disabled||function(e){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=e}(e.currentTarget.getAttribute("href"))}))}function le(e){return e&&"string"==typeof e?{href:e}:e||{}}function fe(e,t,n){let{routes:r={}}=t,{prefix:o=""}=t,{restoreScrollState:s=!1}=t;class i{constructor(e,t){if(!t||"function"!=typeof t&&("object"!=typeof t||!0!==t._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,o,s,i=[],a="",u=e.split("/");for(u[0]||u.shift();o=u.shift();)"*"===(n=o[0])?(i.push("wild"),a+="/(.*)"):":"===n?(r=o.indexOf("?",1),s=o.indexOf(".",1),i.push(o.substring(1,~r?r:~s?s:o.length)),a+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~r?"?":"")+"\\"+o.substring(s))):a+="/"+o;return{keys:i,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}(e);this.path=e,"object"==typeof t&&!0===t._sveltesparouter?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(e){if(o)if("string"==typeof o){if(!e.startsWith(o))return null;e=e.substr(o.length)||"/"}else if(o instanceof RegExp){const t=e.match(o);if(!t||!t[0])return null;e=e.substr(t[0].length)||"/"}const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(t[r+1]||"")||null}catch(e){n[this._keys[r]]=null}r++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}const a=[];r instanceof Map?r.forEach(((e,t)=>{a.push(new i(t,e))})):Object.keys(r).forEach((e=>{a.push(new i(e,r[e]))}));let u=null,c=null,l={};const f=k();async function m(e,t){await(T(),A),f(e,t)}let p=null,d=null;var h;s&&(d=e=>{p=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener("popstate",d),h=()=>{var e;(e=p)?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)},_().$$.after_update.push(h));let g=null,$=null;const v=ie.subscribe((async e=>{g=e;let t=0;for(;t<a.length;){const r=a[t].match(e.location);if(!r){t++;continue}const o={route:a[t].path,location:e.location,querystring:e.querystring,userData:a[t].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await a[t].checkConditions(o))return n(0,u=null),$=null,void m("conditionsFailed",o);m("routeLoading",Object.assign({},o));const s=a[t].component;if($!=s){s.loading?(n(0,u=s.loading),$=s,n(1,c=s.loadingParams),n(2,l={}),m("routeLoaded",Object.assign({},o,{component:u,name:u.name,params:c}))):(n(0,u=null),$=null);const t=await s();if(e!=g)return;n(0,u=t&&t.default||t),$=s}return r&&"object"==typeof r&&Object.keys(r).length?n(1,c=r):n(1,c=null),n(2,l=a[t].props),void m("routeLoaded",Object.assign({},o,{component:u,name:u.name,params:c})).then((()=>{ae.set(c)}))}n(0,u=null),$=null,ae.set(void 0)}));return function(e){_().$$.on_destroy.push(e)}((()=>{v(),d&&window.removeEventListener("popstate",d)})),e.$$set=e=>{"routes"in e&&n(3,r=e.routes),"prefix"in e&&n(4,o=e.prefix),"restoreScrollState"in e&&n(5,s=e.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,c,l,r,o,s,function(t){x.call(this,e,t)},function(t){x.call(this,e,t)}]}class me extends U{constructor(e){super(),K(this,e,fe,oe,i,{routes:3,prefix:4,restoreScrollState:5})}}function pe(t){let n,r,o,i,a;return{c(){n=p("button"),r=p("a"),o=d(t[1]),$(r,"href",t[0]),$(r,"class","navlink")},m(t,u){var c;f(t,n,u),l(n,r),l(r,o),i||(c=ue.call(null,r),a=c&&s(c.destroy)?c.destroy:e,i=!0)},p(e,[t]){2&t&&v(o,e[1]),1&t&&$(r,"href",e[0])},i:e,o:e,d(e){e&&m(n),i=!1,a()}}}function de(e,t,n){let{to:r}=t,{name:o}=t;return e.$$set=e=>{"to"in e&&n(0,r=e.to),"name"in e&&n(1,o=e.name)},[r,o]}class he extends U{constructor(e){super(),K(this,e,de,pe,i,{to:0,name:1})}}function ge(t){let n,r,o,s,i,a,u,c,d,g,v,w,b,y,_,k,x,q,E,S,j,A;return u=new he({props:{to:"/",name:"Home"}}),d=new he({props:{to:"/about",name:"About"}}),v=new he({props:{to:"/team",name:"Team"}}),b=new he({props:{to:"/outreach",name:"Community Engagement"}}),_=new he({props:{to:"/contact",name:"Contact"}}),x=new he({props:{to:"/resources",name:"Resources"}}),E=new he({props:{to:"/faq",name:"FAQ"}}),j=new he({props:{to:"/curriculum",name:"Curriculum"}}),{c(){n=p("head"),n.innerHTML='<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>',r=h(),o=p("header"),s=p("div"),s.innerHTML='<img class="title-sides svelte-14091bj" src="/logo.png" alt="ThinkNeuro Logo"/> \n        <div class="title svelte-14091bj"><h1 class="svelte-14091bj">ThinkNeuro</h1> \n            <p>ThinkNeuro is a wonderful organization</p></div> \n        <div class="title-sides svelte-14091bj"></div>',i=h(),a=p("nav"),z(u.$$.fragment),c=h(),z(d.$$.fragment),g=h(),z(v.$$.fragment),w=h(),z(b.$$.fragment),y=h(),z(_.$$.fragment),k=h(),z(x.$$.fragment),q=h(),z(E.$$.fragment),S=h(),z(j.$$.fragment),$(s,"class","logo-items svelte-14091bj"),$(o,"class","svelte-14091bj")},m(e,t){f(e,n,t),f(e,r,t),f(e,o,t),l(o,s),l(o,i),l(o,a),Z(u,a,null),l(a,c),Z(d,a,null),l(a,g),Z(v,a,null),l(a,w),Z(b,a,null),l(a,y),Z(_,a,null),l(a,k),Z(x,a,null),l(a,q),Z(E,a,null),l(a,S),Z(j,a,null),A=!0},p:e,i(e){A||(Q(u.$$.fragment,e),Q(d.$$.fragment,e),Q(v.$$.fragment,e),Q(b.$$.fragment,e),Q(_.$$.fragment,e),Q(x.$$.fragment,e),Q(E.$$.fragment,e),Q(j.$$.fragment,e),A=!0)},o(e){Y(u.$$.fragment,e),Y(d.$$.fragment,e),Y(v.$$.fragment,e),Y(b.$$.fragment,e),Y(_.$$.fragment,e),Y(x.$$.fragment,e),Y(E.$$.fragment,e),Y(j.$$.fragment,e),A=!1},d(e){e&&m(n),e&&m(r),e&&m(o),J(u),J(d),J(v),J(b),J(_),J(x),J(E),J(j)}}}class $e extends U{constructor(e){super(),K(this,e,null,ge,i,{})}}function ve(t){let n;return{c(){n=p("footer"),n.innerHTML="<p>© ThinkNeuro 2023</p>",$(n,"class","svelte-1ascqsi")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}class we extends U{constructor(e){super(),K(this,e,null,ve,i,{})}}function be(t){let n;return{c(){n=p("div"),n.innerHTML='<p>Think Neuro is dedicated to facilitating health education to a diverse demographic range. Through delivery of intellectual presentations and sponsorship of community service, we aim to inspire families to advocate and improve the environmental and neurological health of their respective communities. Intersecting collaboration of highly motivated academics with our emphasis on scholarly research, Think Neuro strives to increase overall scientific literacy and community engagement, particularly among underserved sectors across the US.</p> \n\n    <br/> \n\n    <p>Visit our other pages:</p> \n    <div><div><a class="main-nav-sm-el svelte-qmxqei" href="/about">About Us</a> \n            <a class="main-nav-sm-el svelte-qmxqei" href="/team">Meet the team!</a></div> \n        <a href="outreach">Learn about our community engagement platforms!</a></div> \n\n    <br/> \n\n    <img src="/logo.png" alt="Logo"/>'},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function ye(t){let n;return{c(){n=p("div"),n.innerHTML="<p>ThinkNeuro was founded in 2022.</p>"},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function _e(t){let n;return{c(){n=p("p"),n.textContent="404!"},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function ke(t){let n;return{c(){n=p("div"),n.textContent="Resources"},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function xe(t){let n;return{c(){n=p("div"),n.innerHTML='<ul class="svelte-qeztfn"><li>Contact us at <a href="mailto:thinkneuro.usa@gmail.com">thinkneuro.usa@gmail.com</a>!</li> \n        <li>Find us on Instagram at <a href="https://www.instagram.com/thinkneuro.usa/">https://www.instagram.com/thinkneuro.usa/</a></li> \n        <li>Volunteer with us through this form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSewoq9Qq9I-CaZe4Q8JVegRKZc7u4TbIEY_aEgYj0XSvVky_Q/viewform">https://docs.google.com/forms/d/e/1FAIpQLSewoq9Qq9I-CaZe4Q8JVegRKZc7u4TbIEY_aEgYj0XSvVky_Q/viewform</a></li></ul>'},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function qe(t){let n;return{c(){n=p("div"),n.textContent="Curriculum"},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Ee(t){let n;return{c(){n=p("div"),n.textContent="Community engagement"},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Se(t){let n,r,o,s,i,a,u;return{c(){n=p("div"),r=p("h2"),o=d(t[0]),s=d(":"),i=h(),a=p("p"),u=d(t[1])},m(e,t){f(e,n,t),l(n,r),l(r,o),l(r,s),l(n,i),l(n,a),l(a,u)},p(e,[t]){1&t&&v(o,e[0]),2&t&&v(u,e[1])},i:e,o:e,d(e){e&&m(n)}}}function je(e,t,n){let{q:r}=t,{a:o}=t;return e.$$set=e=>{"q"in e&&n(0,r=e.q),"a"in e&&n(1,o=e.a)},[r,o]}class Ae extends U{constructor(e){super(),K(this,e,je,Se,i,{q:0,a:1})}}function Ce(e,t,n){const r=e.slice();return r[1]=t[n],r}function Te(e,t){let n,r,o;return r=new Ae({props:{q:t[1].question,a:t[1].answer}}),{key:e,first:null,c(){n=g(),z(r.$$.fragment),this.first=n},m(e,t){f(e,n,t),Z(r,e,t),o=!0},p(e,n){t=e},i(e){o||(Q(r.$$.fragment,e),o=!0)},o(e){Y(r.$$.fragment,e),o=!1},d(e){e&&m(n),J(r,e)}}}function Ie(e){let t,n,r,o,s,i=[],a=new Map,u=e[0];const c=e=>e[1].question;for(let t=0;t<u.length;t+=1){let n=Ce(e,u,t),r=c(n);a.set(r,i[t]=Te(r,n))}return{c(){t=p("div"),n=p("div"),r=p("h1"),r.textContent="Frequently Asked Questions",o=h();for(let e=0;e<i.length;e+=1)i[e].c();w(t,"display","flex")},m(e,a){f(e,t,a),l(t,n),l(n,r),l(n,o);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(n,null);s=!0},p(e,[t]){1&t&&(u=e[0],R(),i=V(i,t,c,1,e,u,a,n,H,Te,null,Ce),F())},i(e){if(!s){for(let e=0;e<u.length;e+=1)Q(i[e]);s=!0}},o(e){for(let e=0;e<i.length;e+=1)Y(i[e]);s=!1},d(e){e&&m(t);for(let e=0;e<i.length;e+=1)i[e].d()}}}function Le(e){return[[{question:"What kind of volunteer work or activities will I be involved in?",answer:"A few topics we will cover this summer includes an overview of the nervous system encompassing a neuron model construction project along with understanding academic journals followed by crafting a research poster."},{question:"Where will this program take place? Is it virtual or in person?",answer:"Our health modules are virtual and asynchronous while the last week of our program will be in person volunteering in your local community. This can take place in local community centers, parks, neighborhoods, libraries, etc."},{question:"When will the program take place?",answer:"Our program runs from June 26th to August 1st."},{question:"What is the time commitment for this program?",answer:"There is a 3 hour time commitment per week."},{question:"Who can participate in this program?",answer:"We encourage students enrolled in a K-12 academic school as well as undergraduates to apply for our program here. Our learning modules are tailored to each age group, from Elementary and Middle School to High School and undergraduate levels."},{question:"I have a vacation planned during the program. Can I still participate?",answer:"Yes! We would love for everyone to have a chance to participate in our program which is why our program is virtual and asynchronous. This means you can hop online from anywhere, including your vacation spot. As for the in person volunteering week, we are also offering a makeup week for missed assignments from August 14-18th."},{question:"I have a question about this week’s assignments. What can I do?",answer:"We have weekly office hours where you can ask our team any questions. Check out our calendar here! You can also email us at thinkneuro.usa@gmail.com."},{question:"I’m interested in leadership positions with Think Neuro. What can I do?",answer:"We also offer research, leadership, and internship opportunities to high school and undergraduate students. Please stay tuned for more information about these opportunities."}]]}function Ne(t){let n,r,o,s,i,a,u,g,b,y,_,k;return{c(){n=p("div"),r=p("div"),o=p("img"),a=h(),u=p("div"),g=p("h2"),b=d(t[0]),y=h(),_=p("p"),k=d(t[1]),c(o.src,s=t[2])||$(o,"src",s),$(o,"alt",i="Picture of "+t[0]),w(o,"max-width","100%"),w(o,"height","20vh"),w(o,"margin","auto "),w(r,"flex-basis","33%"),w(r,"display","flex"),w(r,"align-items","center"),$(_,"class","svelte-49c25w"),w(u,"flex-basis","66%"),w(n,"display","flex")},m(e,t){f(e,n,t),l(n,r),l(r,o),l(n,a),l(n,u),l(u,g),l(g,b),l(u,y),l(u,_),l(_,k)},p(e,[t]){4&t&&!c(o.src,s=e[2])&&$(o,"src",s),1&t&&i!==(i="Picture of "+e[0])&&$(o,"alt",i),1&t&&v(b,e[0]),2&t&&v(k,e[1])},i:e,o:e,d(e){e&&m(n)}}}function Me(e,t,n){let{name:r}=t,{desc:o}=t,{img_src:s}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"desc"in e&&n(1,o=e.desc),"img_src"in e&&n(2,s=e.img_src)},[r,o,s]}class Oe extends U{constructor(e){super(),K(this,e,Me,Ne,i,{name:0,desc:1,img_src:2})}}function We(e,t,n){const r=e.slice();return r[1]=t[n],r}function Pe(e,t){let n,r,o;return r=new Oe({props:{name:t[1].name,desc:t[1].description,img_src:t[1].img_src}}),{key:e,first:null,c(){n=g(),z(r.$$.fragment),this.first=n},m(e,t){f(e,n,t),Z(r,e,t),o=!0},p(e,n){t=e},i(e){o||(Q(r.$$.fragment,e),o=!0)},o(e){Y(r.$$.fragment,e),o=!1},d(e){e&&m(n),J(r,e)}}}function Re(e){let t,n,r,o,s,i=[],a=new Map,u=e[0];const c=e=>e[1].name;for(let t=0;t<u.length;t+=1){let n=We(e,u,t),r=c(n);a.set(r,i[t]=Pe(r,n))}return{c(){t=p("div"),n=p("h1"),n.textContent="Meet the team!",r=h(),o=p("div");for(let e=0;e<i.length;e+=1)i[e].c()},m(e,a){f(e,t,a),l(t,n),l(t,r),l(t,o);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(o,null);s=!0},p(e,[t]){1&t&&(u=e[0],R(),i=V(i,t,c,1,e,u,a,o,H,Pe,null,We),F())},i(e){if(!s){for(let e=0;e<u.length;e+=1)Q(i[e]);s=!0}},o(e){for(let e=0;e<i.length;e+=1)Y(i[e]);s=!1},d(e){e&&m(t);for(let e=0;e<i.length;e+=1)i[e].d()}}}function Fe(e){return[[{name:"Ronit Nath",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae consequat quam. Suspendisse sed ipsum eget nisl consectetur consequat. Sed tincidunt feugiat est, at laoreet lorem venenatis non. Sed vel tristique mauris, non bibendum nunc. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vitae interdum diam. Donec nec neque nec odio semper pharetra. Aliquam euismod aliquet sem vitae aliquam. Nunc vel ligula mi. Fusce consequat ex in libero feugiat, ut fermentum quam cursus. Proin vitae pulvinar velit. Suspendisse finibus, arcu non volutpat eleifend, risus turpis auctor ex, ac tincidunt arcu nisl in nunc.",img_src:"https://avatarfiles.alphacoders.com/291/291019.jpg"},{name:"Fengyi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae consequat quam. Suspendisse sed ipsum eget nisl consectetur consequat. Sed tincidunt feugiat est, at laoreet lorem venenatis non. Sed vel tristique mauris, non bibendum nunc. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vitae interdum diam. Donec nec neque nec odio semper pharetra. Aliquam euismod aliquet sem vitae aliquam. Nunc vel ligula mi. Fusce consequat ex in libero feugiat, ut fermentum quam cursus. Proin vitae pulvinar velit. Suspendisse finibus, arcu non volutpat eleifend, risus turpis auctor ex, ac tincidunt arcu nisl in nunc.",img_src:"https://avatarfiles.alphacoders.com/291/291019.jpg"}]]}const Qe={"/":class extends U{constructor(e){super(),K(this,e,null,be,i,{})}},"/about":class extends U{constructor(e){super(),K(this,e,null,ye,i,{})}},"/team":class extends U{constructor(e){super(),K(this,e,Fe,Re,i,{})}},"/resources":class extends U{constructor(e){super(),K(this,e,null,ke,i,{})}},"/contact":class extends U{constructor(e){super(),K(this,e,null,xe,i,{})}},"/curriculum":class extends U{constructor(e){super(),K(this,e,null,qe,i,{})}},"/outreach":class extends U{constructor(e){super(),K(this,e,null,Ee,i,{})}},"/faq":class extends U{constructor(e){super(),K(this,e,Le,Ie,i,{})}},"*":class extends U{constructor(e){super(),K(this,e,null,_e,i,{})}}};function Ye(t){let n,r,o,s,i,a,u,c,d,g,v,w,b,y;return r=new $e({}),v=new me({props:{routes:Qe}}),b=new we({}),{c(){n=p("main"),z(r.$$.fragment),o=h(),s=p("br"),i=h(),a=p("hr"),u=h(),c=p("br"),d=h(),g=p("div"),z(v.$$.fragment),w=h(),z(b.$$.fragment),$(g,"class","content wrapper svelte-hxcaqs"),$(n,"class","svelte-hxcaqs")},m(e,t){f(e,n,t),Z(r,n,null),l(n,o),l(n,s),l(n,i),l(n,a),l(n,u),l(n,c),l(n,d),l(n,g),Z(v,g,null),l(n,w),Z(b,n,null),y=!0},p:e,i(e){y||(Q(r.$$.fragment,e),Q(v.$$.fragment,e),Q(b.$$.fragment,e),y=!0)},o(e){Y(r.$$.fragment,e),Y(v.$$.fragment,e),Y(b.$$.fragment,e),y=!1},d(e){e&&m(n),J(r),J(v),J(b)}}}return new class extends U{constructor(e){super(),K(this,e,null,Ye,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
