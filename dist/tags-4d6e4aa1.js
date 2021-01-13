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
const directives=new WeakMap,directive=e=>(...i)=>{const t=e(...i);return directives.set(t,!0),t},isDirective=e=>"function"==typeof e&&directives.has(e);/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const renderNotImplemented={};class LitElement extends UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight(((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e)),s),s=t(e,new Set),n=[];s.forEach((e=>n.unshift(e))),this._styles=n;}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return unsafeCSS(t)}return e}));}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles();}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName));}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this);}update(e){const t=this.render();super.update(e),t!==renderNotImplemented&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t);})));}render(){return renderNotImplemented}}LitElement.finalized=!0,LitElement.render=render$1;/**
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
 */const _state=new WeakMap,_infinity=2147483647,until=directive(((...e)=>t=>{let i=_state.get(t);void 0===i&&(i={lastRenderedIndex:_infinity,values:[]},_state.set(t,i));const n=i.values;let s=n.length;i.values=e;for(let l=0;l<e.length&&!(l>i.lastRenderedIndex);l++){const r=e[l];if(isPrimitive(r)||"function"!=typeof r.then){t.setValue(r),i.lastRenderedIndex=l;break}l<s&&r===n[l]||(i.lastRenderedIndex=_infinity,s=0,Promise.resolve(r).then((e=>{const n=i.values.indexOf(r);n>-1&&n<i.lastRenderedIndex&&(i.lastRenderedIndex=n,t.setValue(e),t.commit());})));}}));/**
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
const previousValues=new WeakMap,unsafeHTML=directive((e=>t=>{if(!(t instanceof NodePart))throw new Error("unsafeHTML can only be used in text bindings");const i=previousValues.get(t);if(void 0!==i&&isPrimitive(e)&&e===i.value&&t.value===i.fragment)return;const r=document.createElement("template");r.innerHTML=e;const o=document.importNode(r.content,!0);t.setValue(o),previousValues.set(t,{value:e,fragment:o});}));class YaxArticlesList extends LitElement{createRenderRoot(){return this}load(){return fetch("/articles/manifest.json").then((t=>{if(!t.ok)throw new Error("Could not find manifest file");return t.json()})).then((t=>t.pages)).then((t=>{let e="";for(const[r,n]of Object.entries(t))e+='<span><a href="',e+=n.url,e+='">',e+=n.title,e+="</a></span>",e+="<br>\n";return html`
      <div>
        ${unsafeHTML(e)}
      </div>
      `})).catch((t=>(console.error("Fetch failure:",t),html`<h4>Error</h4>`)))}render(){return until(this.load().then((t=>t)),html`<h4>Loading...</h4>`)}}customElements.define("yax-articles-list",YaxArticlesList);class YaxAuthorKehoe extends LitElement{createRenderRoot(){return this}render(){return html`
      <style>
        .card-author {
          border-radius: 6px;
          overflow: hidden;
          max-width: 300px;
          max-height: 380px;
          margin: 0 auto;
        }
        .card-author .header {
          height: 60px;
          background: #e3efee;
        }
        .card-author .header .avatar {
          width: 80px;
          height: 100%;
          position: relative;
          margin: 0 auto;
        }
        .card-author .header .avatar img {
          display: block;
          border-radius: 50%;
          position: absolute;
          bottom: -42px;
          border: 4px solid white;
        }
        .card-author .card-body {
          padding: 30px;
        }
        .card-author .card-body .author-meta {
          padding-top: 20px;
        }
        .card-author .card-body .author-meta .author-name {
          font-size: 18px;
          font-weight: 600;
        }
        .card-author .card-body .author-meta .author-about {
          font-size: 90%;
          color: #8fada9;
        }
        .card-author .author-bio {
          padding-top: 8px;
          font-size: 92%;
          color: #999;
        }
      </style>
      <aside>
      	<div class="card card-author">
      		<div class="header">
      			<div class="avatar">
      				<a href="https://danielkehoe.com/">
      					<img src="https://assets.yax.com/images/danielkehoe-color-192px.png" loading="eager" alt="Daniel Kehoe" />
      				</a>
      			</div>
      		</div>
      		<div class="card-body">
      			<div class="author-meta has-text-centered">
      				<h5 class="author-about">About the Author</h5>
      				<h3 class="author-name">Daniel Kehoe</h3>
      			</div>
      			<div class="author-bio has-text-centered is-size-7">
      				<p>Daniel Kehoe is the founder of yax.com, past founder of the RailsApps open source project, and author of the book "Learn Ruby on Rails." Get his Twitter updates at <a target="blank" href="https://twitter.com/yaxdotcom">@yaxdotcom</a>.
              </p>
      			</div>
      		</div>
      	</div>
      </aside>
  `}}customElements.define("yax-author-kehoe",YaxAuthorKehoe);class YaxFooter extends LitElement{createRenderRoot(){return this}render(){return html`
    <style>
      .footer a:hover {
        color: white;
      }
    </style>
    <div class="footer has-text-white has-text-weight-semibold has-background-black">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-5">
          <h2 class="title is-5 has-text-white">Yax.com</h2>
          <p class="block">Build a website for free with <a href="https://yax.com/">Yax.com</a>, the do-it-yourself alternative
          to commercial site builders. Own the code you create and take it anywhere, without
          vendor lock-in, using quality web components. Our tutorials will get you started.</p>
          <div>
          <p class="buttons">
            <a target="blank" href="https://github.com/yaxdotcom" class="button is-black">
            <span class="image is-24x24">
            <svg id="Layer_1" version="1.1"><path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z" fill="#FFFFFF"/></svg>
            </span>
            <span class="ml-2">GitHub</span>
            </a>
            <a target="blank" href="https://twitter.com/yaxdotcom" class="button is-black">
            <span class="image is-24x24">
              <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
            </span>
            <span class="ml-2">Twitter</span>
            </a>
            <a target="blank" href="https://www.instagram.com/yaxdotcom/" class="button is-black">
            <span class="image is-24x24" style="margin-top:-10px; margin-left:-10px;">
              <svg width="36" height="36" id="Layer_1" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="24" cy="24" fill="#000000" r="24"/><path d="M31.2,12.3H16.8c-2.5,0-4.5,2-4.5,4.5v4.8v9.6c0,2.5,2,4.5,4.5,4.5h14.4c2.5,0,4.5-2,4.5-4.5v-9.6v-4.8  C35.7,14.3,33.7,12.3,31.2,12.3z M32.5,15l0.5,0v0.5V19l-4,0l0-4L32.5,15z M20.7,21.6c0.7-1,2-1.7,3.3-1.7s2.6,0.7,3.3,1.7  c0.5,0.7,0.8,1.5,0.8,2.4c0,2.3-1.9,4.1-4.1,4.1s-4.1-1.8-4.1-4.1C19.9,23.1,20.2,22.3,20.7,21.6z M33.4,31.2c0,1.2-1,2.2-2.2,2.2  H16.8c-1.2,0-2.2-1-2.2-2.2v-9.6h3.5c-0.3,0.7-0.5,1.6-0.5,2.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4c0-0.8-0.2-1.7-0.5-2.4  h3.5V31.2z" fill="#FFFFFF"/></svg>
            </span>
            <span class="ml-3">Instagram</span>
            </a>
          </p>
          </div>
          </div>
          <div class="column">
          <h3 class="title is-6 has-text-white">Get a Site</h3>
          <p>Build a website using Yax.com</p>
          <ul style="list-style-type: circle; list-style-position: inside;">
            <li><a href="https://try.yax.com/">Try Yax</a></li>
            <li><a href="https://sites.yax.com/#tiny_sites">Tiny Sites</a></li>
            <li><a href="https://sites.yax.com/#framework_forest">Framework Forest</a></li>
            <li><a href="https://sites.yax.com/#designer_showcase">Designer Showcase</a></li>
          </ul>
          </div>
          <div class="column">
          <h6 class="title is-6 has-text-white">Tutorials</h6>
          <p>Learn more. And <br>support the project  <br>with a subscription <br>to our tutorials</p>
          <ul style="list-style-type: circle; list-style-position: inside;">
            <li><a href="https://tutorials.yax.com/">Free</a></li>
            <li><a href="https://tutorials.yax.com/">Patron</a></li>
            <li><a href="https://tutorials.yax.com/">Premier</a></li>
          </ul>
          </div>
          <div class="column">
          <h6 class="title is-6 has-text-white">Resources</h6>
          <ul style="list-style-type: circle; list-style-position: inside;">
            <li><a href="https://yax.zulipchat.com/">Community discussion</a></li>
            <li><a href="https://blog.yax.com/">Blog</a></li>
            <li><a href="https://yax.com/pricing.html">Pricing &amp; Comparison</a></li>
            <li><a href="mailto:support@yax.com">support@yax.com</a></li>
          </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column">
          <p class="subtitle is-7 has-text-white">© ${(new Date).getFullYear()} Yax.com. All rights reserved.</p>
          </div>
        </div>
        </div>
      </div>
    `}}customElements.define("yax-footer",YaxFooter);const ALLOWED_THEMES=["coy","dark","funky","okaidia","solarizedlight","tomorrow","twilight"];class YaxMarkdown extends LitElement{static get properties(){return {mdsrc:String,markdown:String,safe:Boolean,theme:String,customtheme:String,__markdownRendered:String,__styles:String}}constructor(){super(),this.safe=!0,this.mdsrc="",this.markdown="",this.theme="",this.customtheme="",this.__styles="",this.__markdownRendered="",this.__reader=new commonmark.Parser,this.__writer=new commonmark.HtmlRenderer({safe:this.safe});}connectedCallback(){super.connectedCallback();const t=this.getAttribute("customtheme");null===this.getAttribute("theme")&&null===t&&this.setAttribute("theme","default");}attributeChangedCallback(t,e,n){switch(t){case"mdsrc":return void this.fetchMd(n).then((t=>{this.setAttribute("markdown",t);})).catch((t=>t));case"markdown":return void(this.__markdownRendered=this.parseMarkdown(n));case"theme":case"customtheme":let e={};return e[t]=n,void this.fetchStyles(e).then((t=>{this.__styles=html`${unsafeHTML(t)}`;}))}}fetchMd(t){let e=window.location.href.split("/").pop().replace(".html","");if(""==e&&(e="index"),""==t&&(t=e+".md"),t.includes(".md"))return fetch(t).then((t=>t.text())).then((t=>t))}async fetchStyles({customtheme:t,theme:e}){const n=ALLOWED_THEMES.includes(e)?`prism-${e}.min.css`:"prism.min.css",i=void 0!==t?t:`https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/${n}`;return `<style>\n    :host {\n      display: block;\n    }\n    ${await fetch(i).then((async t=>await t.text())).catch((t=>""))}\n    code {\n      background-color: #e6ffed;\n      font-size: 0.9rem;\n    }\n    code::before {\n      content: '\\2006';\n    }\n    code::after {\n      content: '\\2006';\n    }\n    img {\n      width: 100%;\n      max-width: 650px;\n      display: block;\n      margin: 0 auto;\n    }\n    img + em {\n      font-style: italic;\n      display: inherit;\n      text-align: center;\n      font-size: 0.7rem;\n    }\n    @media only screen and (min-width : 768px) {\n      blockquote {\n        font-style: italic;\n        font-weight: bold;\n        font-family: serif;\n        float: left;\n        margin-left: 15px;\n        width: 150px;\n        font-size: 1.2rem;\n        line-height: 1.2rem;\n        color: #655c9d;\n      }\n      blockquote p {\n        display: inline;\n      }\n    }\n    @media only screen and (max-width : 768px) {\n      blockquote {\n        font-style: italic;\n        font-weight: bold;\n        font-family: serif;\n        margin-left: 15px;\n        font-size: 1.2rem;\n        line-height: 1.2rem;\n        color: #655c9d;\n      }\n      blockquote p {\n        display: inline;\n      }\n    }\n    </style>`}parseMarkdown(t){return html`${unsafeHTML(this.__writer.render(this.__reader.parse(t)))}`}updated(){Prism.highlightAllUnder(this.shadowRoot);}render(){return html`
      ${this.__styles}
      ${this.__markdownRendered}`}}customElements.define("yax-markdown",YaxMarkdown);class YaxNavbar extends LitElement{async performUpdate(){super.performUpdate();const a=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);a.length>0&&a.forEach((a=>{a.addEventListener("click",(()=>{const t=a.dataset.target,e=document.getElementById(t);a.classList.toggle("is-active"),e.classList.toggle("is-active");}));}));}createRenderRoot(){return this}render(){return html`
    <nav class="navbar is-transparent is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://yax.com/">
        <figure class="image is-36x36" style="margin-left:-60px;margin-right:-60px;">
            <img src="https://assets.yax.com/images/icons/yax-cap-white-solid.svg" />
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://github.com/yaxdotcom">
          <figure class="image is-24x24">
            <svg id="Layer_1" version="1.1"><path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z" fill="#FFFFFF"/></svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://twitter.com/yaxdotcom">
          <figure class="image is-24x24" style="">
            <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://www.instagram.com/yaxdotcom/">
          <figure class="image is-32x32" style="margin-left:-8px;">
            <svg width="36" height="36" id="Layer_1" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="24" cy="24" fill="#000000" r="24"/><path d="M31.2,12.3H16.8c-2.5,0-4.5,2-4.5,4.5v4.8v9.6c0,2.5,2,4.5,4.5,4.5h14.4c2.5,0,4.5-2,4.5-4.5v-9.6v-4.8  C35.7,14.3,33.7,12.3,31.2,12.3z M32.5,15l0.5,0v0.5V19l-4,0l0-4L32.5,15z M20.7,21.6c0.7-1,2-1.7,3.3-1.7s2.6,0.7,3.3,1.7  c0.5,0.7,0.8,1.5,0.8,2.4c0,2.3-1.9,4.1-4.1,4.1s-4.1-1.8-4.1-4.1C19.9,23.1,20.2,22.3,20.7,21.6z M33.4,31.2c0,1.2-1,2.2-2.2,2.2  H16.8c-1.2,0-2.2-1-2.2-2.2v-9.6h3.5c-0.3,0.7-0.5,1.6-0.5,2.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4c0-0.8-0.2-1.7-0.5-2.4  h3.5V31.2z" fill="#FFFFFF"/></svg>
          </figure>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu has-background-black">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://try.yax.com/">
              <span itemprop="name">Try Yax</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://sites.yax.com/">
              <span itemprop="name">Websites</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://tutorials.yax.com/">
              <span itemprop="name">Tutorials</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://yax.com/pricing.html">
              <span itemprop="name">Pricing</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://blog.yax.com/">
              <span itemprop="name">Blog</span></a>
          </div>
        </div>
      </div>
    </nav>
    `}}customElements.define("yax-navbar",YaxNavbar);class YaxTutorialCrumbs extends LitElement{createRenderRoot(){return this}load(){return fetch("manifest.json").then((t=>{if(!t.ok)throw new Error("Could not find manifest file");return t.json()})).then((t=>{let e="";if(e+='\n        <nav class="breadcrumb">\n        <ul>\n          <li><a href="https://yax.com" style="padding-left: 0">Yax.com</a></li>\n          <li><a href="/learn/index.html">Tutorials</a></li>\n      ',null!=t.title&&(e+=`\n          <li class="is-active"><a>${t.title}</a></li>\n        `),e+="\n        </ul>\n      ",null!=t.pubdate){e+=`\n          <span class="is-size-7 is-italic">Published ${new Date(t.pubdate).toDateString().substring(4)}</span>\n        `;}return e+="\n        </nav>\n      ",html`
        ${unsafeHTML(e)}
      `})).catch((t=>(console.error("Fetch failure:",t),html`<h4>Error</h4>`)))}render(){return until(this.load().then((t=>t)),html`<h4>Loading...</h4>`)}}customElements.define("yax-tutorial-crumbs",YaxTutorialCrumbs);class YaxTutorialHero extends LitElement{createRenderRoot(){return this}load(){return fetch("manifest.json").then((s=>{if(!s.ok)throw new Error("Could not find manifest file");return s.json()})).then((s=>{let t="is-success";switch(s.level){case"intermediate":t="is-warning";break;case"advanced":t="is-danger";}let n="";return "string"==typeof s.audience&&s.audience.length>0&&(n+=`\n          <div class="control">\n            <div class="tags has-addons">\n              <span class="tag is-dark">audience</span>\n              <span class="tag is-info">${s.audience}</span>\n            </div>\n          </div>\n        `),"string"==typeof s.level&&s.level.length>0&&(n+=`\n          <div class="control">\n            <div class="tags has-addons">\n              <span class="tag is-dark">level</span>\n              <span class="tag ${t}">${s.level}</span>\n            </div>\n          </div>\n        `),"string"==typeof s.topic&&s.topic.length>0&&(n+=`\n          <div class="control">\n            <div class="tags has-addons">\n              <span class="tag is-dark">topic</span>\n              <span class="tag is-primary">${s.topic}</span>\n            </div>\n          </div>\n        `),"string"==typeof s.subtopic&&s.subtopic.length>0&&(n+=`\n          <div class="control">\n            <div class="tags has-addons">\n              <span class="tag is-dark">subtopic</span>\n              <span class="tag is-primary">${s.subtopic}</span>\n            </div>\n          </div>\n        `),html`
      <section class="hero has-background-white-ter">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">${s.title}</h1>
          </div>
          <div class="field is-grouped is-grouped-multiline is-grouped-centered mt-5">
            ${unsafeHTML(n)}
          </div>
        </div>
      </section>
      `})).catch((s=>(console.error("Fetch failure:",s),html`<h4>Error</h4>`)))}render(){return until(this.load().then((s=>s)),html`<h4>Loading...</h4>`)}}customElements.define("yax-tutorial-hero",YaxTutorialHero);class YaxTutorialPaginate extends LitElement{createRenderRoot(){return this}load(){return fetch("manifest.json").then((e=>{if(!e.ok)throw new Error("Could not find manifest file");return e.json()})).then((e=>"onepage"==e.pagination?Promise.reject(html`&nbsp;`):e.pages)).then((e=>{let t=window.location.href.split("/").pop().replace(".html","");""==t&&(t="index");let l=0;if("index"!==t&&(l=parseInt(t,10)),Number.isNaN(l))throw new Error("yax-tutorial-paginate tag fails unless filename is index or an integer");let n,i=html`&nbsp;`;return 1==l?n=html`<a href="index.html" class="button prev">≪ ${e[l-1].title}</a>`:l>1&&(n=html`<a href="${l-1}.html" class="button prev">≪ Page ${l}: ${e[l-1].title}</a>`),l<e.length-1&&(i=html`<a href="${l+1}.html" class="button next">Page ${l+2}:&nbsp;<em><strong>${e[l+1].title}</strong></em>&nbsp;≫</a>`),html`
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
          ${n}
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
          ${i}
          </div>
        </div>
      </nav>
      `})).catch((e=>(console.error(e),html`&nbsp;`)))}render(){return until(this.load().then((e=>e)),html`<h4>Loading...</h4>`)}}customElements.define("yax-tutorial-paginate",YaxTutorialPaginate);class YaxTutorialToc extends LitElement{createRenderRoot(){return this}load(){let t="multipage";return fetch("manifest.json").then((t=>{if(!t.ok)throw new Error("Could not find manifest file");return t.json()})).then((e=>("onepage"==e.pagination&&(t="onepage"),e.pages))).then((e=>{let o="Contents/Pages",a="";"onepage"==t&&(o="Collected Articles");for(const[t,o]of Object.entries(e))a+='<li><a href="',a+=o.url,a+='">',a+=o.title,a+="</a></li>",a+="\n";return html`
          <style>
            .card-toc {
              border-radius: 6px;
              overflow: hidden;
              max-height: 100%;
              max-width: 300px;
              margin: 0 auto;
            }
            .card-toc .header {
              height: 60px;
              background: #e3efee;
            }
            .card-toc .header .avatar {
              width: 80px;
              position: relative;
              margin: 0 auto;
            }
            .card-toc .header .avatar img {
              display: block;
              border-radius: 50%;
              position: absolute;
              bottom: -42px;
              border: 4px solid white;
            }
            .card-toc .card-body {
              padding: 30px;
            }
            .card-toc .card-body .toc-headline {
              font-size: 90%;
              color: #8fada9;
            }
            .card-toc .toc-list {
              padding-top: 8px;
              font-size: 92%;
              color: #999;
            }
          </style>
          <aside class="mt-6">
            <div class="card card-toc">
              <div class="header"></div>
              <div class="card-body">
                <h5 class="toc-headline">${o}</h5>
                <div class="toc-list is-size-7">
                  <ul class="menu-list">
                  ${unsafeHTML(a)}
                </ul>
                </div>
              </div>
            </div>
          </aside>
      `})).catch((t=>(console.error("Fetch failure:",t),html`<h4>Error</h4>`)))}render(){return until(this.load().then((t=>t)),html`<h4>Loading...</h4>`)}}customElements.define("yax-tutorial-toc",YaxTutorialToc);const YaxTags=exports('YaxTags',{YaxArticlesList:YaxArticlesList,YaxAuthorKehoe:YaxAuthorKehoe,YaxFooter:YaxFooter,YaxMarkdown:YaxMarkdown,YaxNavbar:YaxNavbar,YaxTutorialCrumbs:YaxTutorialCrumbs,YaxTutorialHero:YaxTutorialHero,YaxTutorialPaginate:YaxTutorialPaginate,YaxTutorialToc:YaxTutorialToc});}}});