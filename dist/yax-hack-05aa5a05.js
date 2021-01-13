System.register([],function(exports){'use strict';return{execute:function(){/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives=new WeakMap,isDirective=e=>"function"==typeof e&&directives.has(e);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isCEPolyfill="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,removeNodes=(e,l,o=null)=>{for(;l!==o;){const o=l.nextSibling;e.removeChild(l),l=o;}};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const noChange={},nothing={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const marker=`{{lit-${String(Math.random()).slice(2)}}}`,nodeMarker=`\x3c!--${marker}--\x3e`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),boundAttributeSuffix="$lit$";class Template{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],a=document.createTreeWalker(t.content,133,null,!1);let s=0,i=-1,o=0;const{strings:l,values:{length:x}}=e;for(;o<x;){const e=a.nextNode();if(null!==e){if(i++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)endsWith(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=l[o],r=lastAttributeNameRegex.exec(t)[2],n=r.toLowerCase()+"$lit$",a=e.getAttribute(n);e.removeAttribute(n);const s=a.split(markerRegex);this.parts.push({type:"attribute",index:i,name:r,strings:s}),o+=s.length-1;}}"TEMPLATE"===e.tagName&&(n.push(e),a.currentNode=e.content);}else if(3===e.nodeType){const t=e.data;if(t.indexOf(marker)>=0){const n=e.parentNode,a=t.split(markerRegex),s=a.length-1;for(let t=0;t<s;t++){let r,s=a[t];if(""===s)r=createMarker();else {const e=lastAttributeNameRegex.exec(s);null!==e&&endsWith(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(s);}n.insertBefore(r,e),this.parts.push({type:"node",index:++i});}""===a[s]?(n.insertBefore(createMarker(),e),r.push(e)):e.data=a[s],o+=s;}}else if(8===e.nodeType)if(e.data===marker){const t=e.parentNode;null!==e.previousSibling&&i!==s||(i++,t.insertBefore(createMarker(),e)),s=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(r.push(e),i--),o++;}else {let t=-1;for(;-1!==(t=e.data.indexOf(marker,t+1));)this.parts.push({type:"node",index:-1}),o++;}}else a.currentNode=n.pop();}for(const e of r)e.parentNode.removeChild(e);}}const endsWith=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},isTemplatePartActive=e=>-1!==e.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class TemplateInstance{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i;}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit();}_clone(){const t=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,r=0,o=0,a=s.nextNode();for(;r<i.length;)if(n=i[r],isTemplatePartActive(n)){for(;o<n.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t);}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++;}else this.__parts.push(void 0),r++;return isCEPolyfill&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),commentMarker=` ${marker} `;class TemplateResult{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s;}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const r=lastAttributeNameRegex.exec(t);e+=null===r?t+(i?commentMarker:nodeMarker):t.substr(0,r.index)+r[1]+r[2]+boundAttributeSuffix+r[3]+marker;}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==policy&&(e=policy.createHTML(e)),t.innerHTML=e,t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const isPrimitive=t=>null===t||!("object"==typeof t||"function"==typeof t),isIterable=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class AttributeCommitter{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart();}_createPart(){return new AttributePart(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!isIterable(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(isPrimitive(t)||!isIterable(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e);}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()));}}class AttributePart{constructor(t){this.value=void 0,this.committer=t;}setValue(t){t===noChange||isPrimitive(t)&&t===this.value||(this.value=t,isDirective(t)||(this.committer.dirty=!0));}commit(){for(;isDirective(this.value);){const t=this.value;this.value=noChange,t(this);}this.value!==noChange&&this.committer.commit();}}class NodePart{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t;}appendInto(t){this.startNode=t.appendChild(createMarker()),this.endNode=t.appendChild(createMarker());}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling;}appendIntoPart(t){t.__insert(this.startNode=createMarker()),t.__insert(this.endNode=createMarker());}insertAfterPart(t){t.__insert(this.startNode=createMarker()),this.endNode=t.endNode,t.endNode=this.startNode;}setValue(t){this.__pendingValue=t;}commit(){if(null===this.startNode.parentNode)return;for(;isDirective(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=noChange,t(this);}const t=this.__pendingValue;t!==noChange&&(isPrimitive(t)?t!==this.value&&this.__commitText(t):t instanceof TemplateResult?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):isIterable(t)?this.__commitIterable(t):t===nothing?(this.value=nothing,this.clear()):this.__commitText(t));}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode);}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t);}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t;}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof TemplateInstance&&this.value.template===e)this.value.update(t.values);else {const i=new TemplateInstance(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i;}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new NodePart(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode));}clear(t=this.startNode){removeNodes(this.startNode.parentNode,t.nextSibling,this.endNode);}}class BooleanAttributePart{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i;}setValue(t){this.__pendingValue=t;}commit(){for(;isDirective(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=noChange,t(this);}if(this.__pendingValue===noChange)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=noChange;}}class PropertyCommitter extends AttributeCommitter{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1];}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue());}}class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;(()=>{try{const t={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t);}catch(t){}})();class EventPart{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t);}setValue(t){this.__pendingValue=t;}commit(){for(;isDirective(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=noChange,t(this);}if(this.__pendingValue===noChange)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=getOptions(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=noChange;}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t);}}const getOptions=t=>t&&(eventOptionsSupported?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function templateFactory(e){let t=templateCaches.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(marker);return r=t.keyString.get(a),void 0===r&&(r=new Template(e,e.getTemplateElement()),t.keyString.set(a,r)),t.stringsArray.set(e.strings,r),r}const templateCaches=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const parts=new WeakMap,render=(t,e,r)=>{let o=parts.get(e);void 0===o&&(removeNodes(e,e.firstChild),parts.set(e,o=new NodePart(Object.assign({templateFactory:templateFactory},r))),o.appendInto(e)),o.setValue(t),o.commit();};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class DefaultTemplateProcessor{handleAttributeExpressions(t,e,r,a){const s=e[0];if("."===s){return new PropertyCommitter(t,e.slice(1),r).parts}if("@"===s)return [new EventPart(t,e.slice(1),a.eventContext)];if("?"===s)return [new BooleanAttributePart(t,e.slice(1),r)];return new AttributeCommitter(t,e,r).parts}handleTextExpression(t){return new NodePart(t)}}const defaultTemplateProcessor=new DefaultTemplateProcessor;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const html=(t,...e)=>new TemplateResult(t,e,"html",defaultTemplateProcessor);function removeNodesFromTemplate(e,t){const{element:{content:r},parts:n}=e,o=document.createTreeWalker(r,133,null,!1);let a=nextActiveIndexInTemplateParts(n),s=n[a],l=-1,d=0;const i=[];let m=null;for(;o.nextNode();){l++;const e=o.currentNode;for(e.previousSibling===m&&(m=null),t.has(e)&&(i.push(e),null===m&&(m=e)),null!==m&&d++;void 0!==s&&s.index===l;)s.index=null!==m?-1:s.index-d,a=nextActiveIndexInTemplateParts(n,a),s=n[a];}i.forEach((e=>e.parentNode.removeChild(e)));}const countNodes=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},nextActiveIndexInTemplateParts=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(isTemplatePartActive(t))return r}return -1};function insertNodeIntoTemplate(e,t,r=null){const{element:{content:n},parts:o}=e;if(null==r)return void n.appendChild(t);const a=document.createTreeWalker(n,133,null,!1);let s=nextActiveIndexInTemplateParts(o),l=0,d=-1;for(;a.nextNode();){d++;for(a.currentNode===r&&(l=countNodes(t),r.parentNode.insertBefore(t,r));-1!==s&&o[s].index===d;){if(l>0){for(;-1!==s;)o[s].index+=l,s=nextActiveIndexInTemplateParts(o,s);return}s=nextActiveIndexInTemplateParts(o,s);}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const getTemplateCacheKey=(e,t)=>`${e}--${t}`;let compatibleShadyCSSVersion=!0;void 0===window.ShadyCSS?compatibleShadyCSSVersion=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),compatibleShadyCSSVersion=!1);const shadyTemplateFactory=e=>t=>{const r=getTemplateCacheKey(t.type,e);let n=templateCaches.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(r,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(marker);if(o=n.keyString.get(a),void 0===o){const r=t.getTemplateElement();compatibleShadyCSSVersion&&window.ShadyCSS.prepareTemplateDom(r,e),o=new Template(t,r),n.keyString.set(a,o);}return n.stringsArray.set(t.strings,o),o},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=e=>{TEMPLATE_TYPES.forEach((t=>{const r=templateCaches.get(getTemplateCacheKey(t,e));void 0!==r&&r.keyString.forEach((e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{r.add(e);})),removeNodesFromTemplate(e,r);}));}));},shadyRenderSet=new Set,prepareTemplateStyles=(e,t,r)=>{shadyRenderSet.add(e);const n=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:a}=o;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<a;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent;}removeStylesFromLitTemplates(e);const l=n.content;r?insertNodeIntoTemplate(r,s,l.firstChild):l.insertBefore(s,l.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const d=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(r){l.insertBefore(s,l.firstChild);const e=new Set;e.add(s),removeNodesFromTemplate(r,e);}},render$1=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=parts.has(t),a=compatibleShadyCSSVersion&&11===t.nodeType&&!!t.host,s=a&&!shadyRenderSet.has(n),l=s?document.createDocumentFragment():t;if(render(e,l,Object.assign({templateFactory:shadyTemplateFactory(n)},r)),s){const e=parts.get(l);parts.delete(l);const r=e.value instanceof TemplateInstance?e.value.template:void 0;prepareTemplateStyles(n,l,r),removeNodes(t,t.firstChild),t.appendChild(l),parts.set(t,e);}!o&&a&&window.ShadyCSS.styleElement(t.host);};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(t,e)=>t;const defaultConverter={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},notEqual=(t,e)=>e!==t&&(e==e||t==t),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},finalized="finalized";class UpdatingElement extends HTMLElement{constructor(){super(),this.initialize();}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s));})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)));}}static createProperty(t,e=defaultPropertyDeclaration){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,r,e);void 0!==s&&Object.defineProperty(this.prototype,t,s);}static getPropertyDescriptor(t,e,r){return {get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,r);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||defaultPropertyDeclaration}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(finalized)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r]);}}static _attributeNameForProperty(t,e){const r=e.attribute;return !1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=notEqual){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,s=e.converter||defaultConverter,i="function"==typeof s?s:s.fromAttribute;return i?i(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,s=e.converter;return (s&&s.toAttribute||defaultConverter.toAttribute)(t,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal();}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t);}}));}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0;}connectedCallback(){this.enableUpdating();}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0);}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r);}_propertyToAttribute(t,e,r=defaultPropertyDeclaration){const s=this.constructor,i=s._attributeNameForProperty(t,r);if(void 0!==i){const t=s._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState;}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,s=r._attributeToPropertyMap.get(t);if(void 0!==s){const t=r.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState;}}requestUpdateInternal(t,e,r){let s=!0;if(void 0!==t){const i=this.constructor;r=r||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1;}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate());}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise;}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated();}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e));}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState;}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return !0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated();}updated(t){}firstUpdated(t){}}UpdatingElement[finalized]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(t,e){if(e!==constructionToken)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return void 0===this._styleSheet&&(supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const unsafeCSS=t=>new CSSResult(String(t),constructionToken);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const renderNotImplemented={};class LitElement extends UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight(((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e)),s),s=t(e,new Set),n=[];s.forEach((e=>n.unshift(e))),this._styles=n;}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return unsafeCSS(t)}return e}));}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles();}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName));}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this);}update(e){const t=this.render();super.update(e),t!==renderNotImplemented&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t);})));}render(){return renderNotImplemented}}LitElement.finalized=!0,LitElement.render=render$1;class YaxHack extends LitElement{render(){return html`
    <h2>Test</h2>
    <code>import { LitElement, html } from 'https://jspm.dev/lit-element';</code>
    `}}exports('YaxHack',YaxHack);customElements.define("yax-hack",YaxHack);}}});