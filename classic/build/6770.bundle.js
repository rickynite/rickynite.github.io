(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6770],{29590:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Cache:()=>g,Selector:()=>y,Style:()=>p,Rule:()=>m,FreeStyle:()=>v,create:()=>S});let s=0;const r=Object.create(null),i=["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","columns","counter-increment","counter-reset","flex","flex-grow","flex-positive","flex-shrink","flex-negative","flex-order","font-weight","grid-area","grid-column","grid-column-end","grid-column-span","grid-column-start","grid-row","grid-row-end","grid-row-span","grid-row-start","line-clamp","line-height","opacity","order","orphans","tab-size","widows","z-index","zoom","fill-opacity","flood-opacity","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width"];for(const e of i)for(const t of["-webkit-","-ms-","-moz-","-o-",""])r[t+e]=!0;function o(e,t){return t&&"number"==typeof t&&!r[e]?`${e}:${t}px`:`${e}:${t}`}function a(e){return e.sort(((e,t)=>e[0]>t[0]?1:-1))}function c(e){return e.map((([e,t])=>Array.isArray(t)?t.map((t=>o(e,t))).join(";"):o(e,t))).join(";")}function h(e,t){return-1===e.indexOf("&")?`${t} ${e}`:e.replace(/&/g,t)}function l(e,t,n,s,r){const{style:i,nested:o,isUnique:u}=function(e,t){const n=[],s=[];for(const t of Object.keys(e)){const i=t.trim(),o=e[t];36!==i.charCodeAt(0)&&null!=o&&("object"!=typeof o||Array.isArray(o)?n.push([(r=i,r.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`)).replace(/^ms-/,"-ms-")),o]):s.push([i,o]))}var r;return{style:c(a(n)),nested:t?s:a(s),isUnique:!!e.$unique}}(t,""!==e);let d=i;if(64===e.charCodeAt(0)){const t={selector:e,styles:[],rules:[],style:r?"":i};n.push(t),i&&r&&t.styles.push({selector:r,style:i,isUnique:u});for(const[e,n]of o)d+=e+l(e,n,t.rules,t.styles,r)}else{const t=r?h(e,r):e;i&&s.push({selector:t,style:i,isUnique:u});for(const[e,r]of o)d+=e+l(e,r,n,s,t)}return d}function u(e,t,n,r,i,o){for(const{selector:n,style:a,isUnique:c}of r){const r=o?h(n,i):n,l=c?`u\0${(++s).toString(36)}`:`s\0${t}\0${a}`,u=new p(a,l);u.add(new y(r,`k\0${t}\0${r}`)),e.add(u)}for(const{selector:s,style:r,rules:a,styles:c}of n){const n=new m(s,r,`r\0${t}\0${s}\0${r}`);u(n,t,a,c,i,o),e.add(n)}}function d(e){let t="";for(let n=0;n<e.length;n++)t+=e[n];return t}const f={add:()=>{},change:()=>{},remove:()=>{}};class g{constructor(e=f){this.changes=e,this.sheet=[],this.changeId=0,this._keys=[],this._children=Object.create(null),this._counters=Object.create(null)}add(e){const t=this._counters[e.id]||0,n=this._children[e.id]||e.clone();if(this._counters[e.id]=t+1,0===t)this._children[n.id]=n,this._keys.push(n.id),this.sheet.push(n.getStyles()),this.changeId++,this.changes.add(n,this._keys.length-1);else if(n instanceof g&&e instanceof g){const t=this._keys.indexOf(e.id),s=n.changeId;n.merge(e),n.changeId!==s&&(this.sheet.splice(t,1,n.getStyles()),this.changeId++,this.changes.change(n,t,t))}}remove(e){const t=this._counters[e.id];if(t){this._counters[e.id]=t-1;const n=this._children[e.id],s=this._keys.indexOf(n.id);if(1===t)delete this._counters[e.id],delete this._children[e.id],this._keys.splice(s,1),this.sheet.splice(s,1),this.changeId++,this.changes.remove(n,s);else if(n instanceof g&&e instanceof g){const t=n.changeId;n.unmerge(e),n.changeId!==t&&(this.sheet.splice(s,1,n.getStyles()),this.changeId++,this.changes.change(n,s,s))}}}values(){return this._keys.map((e=>this._children[e]))}merge(e){for(const t of e.values())this.add(t);return this}unmerge(e){for(const t of e.values())this.remove(t);return this}clone(){return(new g).merge(this)}}class y{constructor(e,t){this.selector=e,this.id=t}getStyles(){return this.selector}clone(){return this}}class p extends g{constructor(e,t){super(),this.style=e,this.id=t}getStyles(){return`${this.sheet.join(",")}{${this.style}}`}clone(){return new p(this.style,this.id).merge(this)}}class m extends g{constructor(e,t,n){super(),this.rule=e,this.style=t,this.id=n}getStyles(){return`${this.rule}{${this.style}${d(this.sheet)}}`}clone(){return new m(this.rule,this.style,this.id).merge(this)}}function _(e,t){return`f${function(e){let t=5381,n=e.length;for(;n--;)t=33*t^e.charCodeAt(n);return(t>>>0).toString(36)}(e)}`}class v extends g{constructor(e,t){super(t),this.id=e}registerStyle(e){const t=[],n=[],s=l("&",e,t,n),r=_(s);return u(this,s,t,n,`.${r}`,!0),r}registerKeyframes(e){return this.registerHashRule("@keyframes",e)}registerHashRule(e,t){const n=[],s=[],r=l("",t,n,s),i=_(r),o=new m(`${e} ${i}`,"",`h\0${r}\0${e}`);return u(o,r,n,s,"",!1),this.add(o),i}registerRule(e,t){const n=[],s=[];u(this,l(e,t,n,s),n,s,"",!1)}registerCss(e){return this.registerRule("",e)}getStyles(){return d(this.sheet)}clone(){return new v(this.id,this.changes).merge(this)}}function S(e){return new v(`f${(++s).toString(36)}`,e)}},66770:(e,t,n)=>{"use strict";var s=n(90223);s.TypeStyle,n(43379);var r=n(27750);r.extend,t.Sh=r.classes,r.media;var i=new s.TypeStyle({autoGenerateTag:!0});i.setStylesTarget,i.cssRaw,i.cssRule,i.forceRenderStyles,i.fontFace,i.getStyles,i.keyframes,i.reinit,t.oB=i.style,i.stylesheet},37024:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertToStyles=function e(t){var n={};for(var s in t){var r=t[s];if("$nest"===s){var i=r;for(var o in i){var a=i[o];n[o]=e(a)}}else"$debugName"===s?n.$displayName=r:n[s]=r}return n},t.convertToKeyframes=function(e){var t={};for(var n in e)"$debugName"!==n&&(t[n]=e[n]);return e.$debugName&&(t.$displayName=e.$debugName),t}},90223:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(29590),r=n(37024),i=n(27750),o=function(){return s.create()},a=function(){function e(e){var t=this,n=e.autoGenerateTag;this.cssRaw=function(e){e&&(t._raw+=e||"",t._pendingRawChange=!0,t._styleUpdated())},this.cssRule=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];var o=r.convertToStyles(i.extend.apply(void 0,n));t._freeStyle.registerRule(e,o),t._styleUpdated()},this.forceRenderStyles=function(){var e=t._getTag();e&&(e.textContent=t.getStyles())},this.fontFace=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var s=t._freeStyle,r=0,i=e;r<i.length;r++){var o=i[r];s.registerRule("@font-face",o)}t._styleUpdated()},this.getStyles=function(){return(t._raw||"")+t._freeStyle.getStyles()},this.keyframes=function(e){var n=r.convertToKeyframes(e),s=t._freeStyle.registerKeyframes(n);return t._styleUpdated(),s},this.reinit=function(){var e=o();t._freeStyle=e,t._lastFreeStyleChangeId=e.changeId,t._raw="",t._pendingRawChange=!1;var n=t._getTag();n&&(n.textContent="")},this.setStylesTarget=function(e){t._tag&&(t._tag.textContent=""),t._tag=e,t.forceRenderStyles()},this.stylesheet=function(e){for(var n={},s=0,r=Object.getOwnPropertyNames(e);s<r.length;s++){var i=r[s],o=e[i];o&&(o.$debugName=i,n[i]=t.style(o))}return n};var s=o();this._autoGenerateTag=n,this._freeStyle=s,this._lastFreeStyleChangeId=s.changeId,this._pending=0,this._pendingRawChange=!1,this._raw="",this._tag=void 0,this.style=this.style.bind(this)}return e.prototype._afterAllSync=function(e){var t=this;this._pending++;var n=this._pending;i.raf((function(){n===t._pending&&e()}))},e.prototype._getTag=function(){if(this._tag)return this._tag;if(this._autoGenerateTag){var e="undefined"==typeof window?{textContent:""}:document.createElement("style");return"undefined"!=typeof document&&document.head.appendChild(e),this._tag=e,e}},e.prototype._styleUpdated=function(){var e=this,t=this._freeStyle.changeId,n=this._lastFreeStyleChangeId;(this._pendingRawChange||t!==n)&&(this._lastFreeStyleChangeId=t,this._pendingRawChange=!1,this._afterAllSync((function(){return e.forceRenderStyles()})))},e.prototype.style=function(){var e=this._freeStyle.registerStyle(r.convertToStyles(i.extend.apply(void 0,arguments)));return this._styleUpdated(),e},e}();t.TypeStyle=a},27750:(e,t)=>{"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var s={},r=0,i=e;r<i.length;r++){var o=i[r];if(null!=o&&!1!==o)for(var a in o){var c=o[a];(c||0===c)&&("$nest"===a&&c?s[a]=s.$nest?n(s.$nest,c):c:-1!==a.indexOf("&")||0===a.indexOf("@media")?s[a]=s[a]?n(s[a],c):c:s[a]=c)}}return s}Object.defineProperty(t,"__esModule",{value:!0}),t.raf="undefined"==typeof requestAnimationFrame?function(e){return setTimeout(e)}:"undefined"==typeof window?requestAnimationFrame:requestAnimationFrame.bind(window),t.classes=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.map((function(e){return e&&"object"==typeof e?Object.keys(e).map((function(t){return!!e[t]&&t})):[e]})).reduce((function(e,t){return e.concat(t)}),[]).filter((function(e){return!!e})).join(" ")},t.extend=n,t.media=function(e){for(var t,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=[];e.type&&o.push(e.type),e.orientation&&o.push("(orientation: "+e.orientation+")"),e.minWidth&&o.push("(min-width: "+s(e.minWidth)+")"),e.maxWidth&&o.push("(max-width: "+s(e.maxWidth)+")"),e.minHeight&&o.push("(min-height: "+s(e.minHeight)+")"),e.maxHeight&&o.push("(max-height: "+s(e.maxHeight)+")");var a="@media "+o.join(" and "),c={$nest:(t={},t[a]=n.apply(void 0,r),t)};return c};var s=function(e){return"string"==typeof e?e:e+"px"}},43379:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})}}]);
//# sourceMappingURL=6770.bundle.js.map