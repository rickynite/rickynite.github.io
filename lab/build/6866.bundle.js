(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6866],{27639:(o,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var e=t(1799),c=t.n(e),n=t(82609),a=t.n(n)()(c());a.push([o.id,".cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/cobalt.css"],names:[],mappings:"AAAA,0BAA0B,mBAAmB,EAAE,YAAY,EAAE;AAC7D,uCAAuC,mBAAmB,EAAE;AAC5D,oJAAoJ,mCAAmC,EAAE;AACzL,mKAAmK,mCAAmC,EAAE;AACxM,mCAAmC,mBAAmB,EAAE,4BAA4B,EAAE;AACtF,wCAAwC,cAAc,EAAE;AACxD,+CAA+C,cAAc,EAAE;AAC/D,sCAAsC,cAAc,EAAE;AACtD,kCAAkC,4BAA4B,EAAE;;AAEhE,+BAA+B,WAAW,EAAE;AAC5C,4BAA4B,cAAc,EAAE;AAC5C,8DAA8D,cAAc,EAAE;AAC9E,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,4BAA4B,cAAc,EAAE;AAC5C,4DAA4D,cAAc,EAAE;AAC5E,mFAAmF,YAAY,EAAE;AACjG,+BAA+B,cAAc,EAAE;AAC/C,6DAA6D,cAAc,EAAE;AAC7E,4BAA4B,cAAc,EAAE;AAC5C,6BAA6B,cAAc,EAAE;;AAE7C,iDAAiD,mBAAmB,EAAE;AACtE,2CAA2C,sBAAsB,CAAC,sBAAsB,EAAE",sourcesContent:[".cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n"],sourceRoot:""}]);const s=a},82609:o=>{"use strict";o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var t=o(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(o,t,e){"string"==typeof o&&(o=[[null,o,""]]);var c={};if(e)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(c[a]=!0)}for(var s=0;s<o.length;s++){var i=[].concat(o[s]);e&&c[i[0]]||(t&&(i[2]?i[2]="".concat(t," and ").concat(i[2]):i[2]=t),r.push(i))}},r}},1799:o=>{"use strict";function r(o,r){(null==r||r>o.length)&&(r=o.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=o[t];return e}o.exports=function(o){var t,e,c=(e=4,function(o){if(Array.isArray(o))return o}(t=o)||function(o,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var t=[],e=!0,c=!1,n=void 0;try{for(var a,s=o[Symbol.iterator]();!(e=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);e=!0);}catch(o){c=!0,n=o}finally{try{e||null==s.return||s.return()}finally{if(c)throw n}}return t}}(t,e)||function(o,t){if(o){if("string"==typeof o)return r(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);return"Object"===e&&o.constructor&&(e=o.constructor.name),"Map"===e||"Set"===e?Array.from(o):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(o,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=c[1],a=c[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(i," */"),A=a.sources.map((function(o){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(o," */")}));return[n].concat(A).concat([l]).join("\n")}return[n].join("\n")}},66866:(o,r,t)=>{var e=t(27639);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[o.id,e,""]]);t(46062)(e,{insert:"head",singleton:!1}),e.locals&&(o.exports=e.locals)},46062:(o,r,t)=>{"use strict";var e,c={},n=function(){var o={};return function(r){if(void 0===o[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}o[r]=t}return o[r]}}();function a(o,r){for(var t=[],e={},c=0;c<o.length;c++){var n=o[c],a=r.base?n[0]+r.base:n[0],s={css:n[1],media:n[2],sourceMap:n[3]};e[a]?e[a].parts.push(s):t.push(e[a]={id:a,parts:[s]})}return t}function s(o,r){for(var t=0;t<o.length;t++){var e=o[t],n=c[e.id],a=0;if(n){for(n.refs++;a<n.parts.length;a++)n.parts[a](e.parts[a]);for(;a<e.parts.length;a++)n.parts.push(p(e.parts[a],r))}else{for(var s=[];a<e.parts.length;a++)s.push(p(e.parts[a],r));c[e.id]={id:e.id,refs:1,parts:s}}}}function i(o){var r=document.createElement("style");if(void 0===o.attributes.nonce){var e=t.nc;e&&(o.attributes.nonce=e)}if(Object.keys(o.attributes).forEach((function(t){r.setAttribute(t,o.attributes[t])})),"function"==typeof o.insert)o.insert(r);else{var c=n(o.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(r)}return r}var l,A=(l=[],function(o,r){return l[o]=r,l.filter(Boolean).join("\n")});function m(o,r,t,e){var c=t?"":e.css;if(o.styleSheet)o.styleSheet.cssText=A(r,c);else{var n=document.createTextNode(c),a=o.childNodes;a[r]&&o.removeChild(a[r]),a.length?o.insertBefore(n,a[r]):o.appendChild(n)}}function d(o,r,t){var e=t.css,c=t.media,n=t.sourceMap;if(c&&o.setAttribute("media",c),n&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}var u=null,b=0;function p(o,r){var t,e,c;if(r.singleton){var n=b++;t=u||(u=i(r)),e=m.bind(null,t,n,!1),c=m.bind(null,t,n,!0)}else t=i(r),e=d.bind(null,t,r),c=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)};return e(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap)return;e(o=r)}else c()}}o.exports=function(o,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=a(o,r);return s(t,r),function(o){for(var e=[],n=0;n<t.length;n++){var i=t[n],l=c[i.id];l&&(l.refs--,e.push(l))}o&&s(a(o,r),r);for(var A=0;A<e.length;A++){var m=e[A];if(0===m.refs){for(var d=0;d<m.parts.length;d++)m.parts[d]();delete c[m.id]}}}}}}]);
//# sourceMappingURL=6866.bundle.js.map