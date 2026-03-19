//#region \0rolldown/runtime.js
var __create$2 = Object.create;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __getProtoOf$2 = Object.getPrototypeOf;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin$2 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$3(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$3(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps$2 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$2(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$2.call(to, key) && key !== except) __defProp$3(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM$2 = (mod, isNodeMode, target) => (target = mod != null ? __create$2(__getProtoOf$2(mod)) : {}, __copyProps$2(isNodeMode || !mod || !mod.__esModule ? __defProp$3(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/* @__NO_SIDE_EFFECTS__ */
function makeMap(str) {
	const map = /* @__PURE__ */ Object.create(null);
	for (const key of str.split(",")) map[key] = 1;
	return (val) => val in map;
}
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var NOOP = () => {};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
	const i = arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
};
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
var isArray$3 = Array.isArray;
var isMap$1 = (val) => toTypeString(val) === "[object Map]";
var isSet$1 = (val) => toTypeString(val) === "[object Set]";
var isDate$1 = (val) => toTypeString(val) === "[object Date]";
var isFunction$1 = (val) => typeof val === "function";
var isString$2 = (val) => typeof val === "string";
var isSymbol$1 = (val) => typeof val === "symbol";
var isObject$1 = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return (isObject$1(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
	return toTypeString(value).slice(8, -1);
};
var isPlainObject$3 = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString$2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
var cacheStringFunction$1 = (fn) => {
	const cache = /* @__PURE__ */ Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
};
var camelizeRE$1 = /-\w/g;
var camelize$1 = cacheStringFunction$1((str) => {
	return str.replace(camelizeRE$1, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE$1 = /\B([A-Z])/g;
var hyphenate$1 = cacheStringFunction$1((str) => str.replace(hyphenateRE$1, "-$1").toLowerCase());
var capitalize = cacheStringFunction$1((str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction$1((str) => {
	return str ? `on${capitalize(str)}` : ``;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
	for (let i = 0; i < fns.length; i++) fns[i](...arg);
};
var def = (obj, key, value, writable = false) => {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: false,
		writable,
		value
	});
};
var looseToNumber = (val) => {
	const n = parseFloat(val);
	return isNaN(n) ? val : n;
};
var toNumber = (val) => {
	const n = isString$2(val) ? Number(val) : NaN;
	return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
	if (isArray$3(value)) {
		const res = {};
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			const normalized = isString$2(item) ? parseStringStyle(item) : normalizeStyle(item);
			if (normalized) for (const key in normalized) res[key] = normalized[key];
		}
		return res;
	} else if (isString$2(value) || isObject$1(value)) return value;
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
	const ret = {};
	cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
		if (item) {
			const tmp = item.split(propertyDelimiterRE);
			tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
		}
	});
	return ret;
}
function stringifyStyle(styles) {
	if (!styles) return "";
	if (isString$2(styles)) return styles;
	let ret = "";
	for (const key in styles) {
		const value = styles[key];
		if (isString$2(value) || typeof value === "number") {
			const normalizedKey = key.startsWith(`--`) ? key : hyphenate$1(key);
			ret += `${normalizedKey}:${value};`;
		}
	}
	return ret;
}
function normalizeClass(value) {
	let res = "";
	if (isString$2(value)) res = value;
	else if (isArray$3(value)) for (let i = 0; i < value.length; i++) {
		const normalized = normalizeClass(value[i]);
		if (normalized) res += normalized + " ";
	}
	else if (isObject$1(value)) {
		for (const name in value) if (value[name]) res += name + " ";
	}
	return res.trim();
}
var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
	return !!value || value === "";
}
var isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
var isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function isRenderableAttrValue(value) {
	if (value == null) return false;
	const type = typeof value;
	return type === "string" || type === "number" || type === "boolean";
}
var cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
	return key.replace(cssVarNameEscapeSymbolsRE, (s) => doubleEscape ? s === "\"" ? "\\\\\\\"" : `\\\\${s}` : `\\${s}`);
}
function looseCompareArrays(a, b) {
	if (a.length !== b.length) return false;
	let equal = true;
	for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i]);
	return equal;
}
function looseEqual(a, b) {
	if (a === b) return true;
	let aValidType = isDate$1(a);
	let bValidType = isDate$1(b);
	if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
	aValidType = isSymbol$1(a);
	bValidType = isSymbol$1(b);
	if (aValidType || bValidType) return a === b;
	aValidType = isArray$3(a);
	bValidType = isArray$3(b);
	if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
	aValidType = isObject$1(a);
	bValidType = isObject$1(b);
	if (aValidType || bValidType) {
		if (!aValidType || !bValidType) return false;
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (const key in a) {
			const aHasKey = a.hasOwnProperty(key);
			const bHasKey = b.hasOwnProperty(key);
			if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
		}
	}
	return String(a) === String(b);
}
var isRef$2 = (val) => {
	return !!(val && val["__v_isRef"] === true);
};
var toDisplayString = (val) => {
	return isString$2(val) ? val : val == null ? "" : isArray$3(val) || isObject$1(val) && (val.toString === objectToString || !isFunction$1(val.toString)) ? isRef$2(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
	if (isRef$2(val)) return replacer(_key, val.value);
	else if (isMap$1(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
		entries[stringifySymbol(key, i) + " =>"] = val2;
		return entries;
	}, {}) };
	else if (isSet$1(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
	else if (isSymbol$1(val)) return stringifySymbol(val);
	else if (isObject$1(val) && !isArray$3(val) && !isPlainObject$3(val)) return String(val);
	return val;
};
var stringifySymbol = (v, i = "") => {
	var _a;
	return isSymbol$1(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
function normalizeCssVarValue(value) {
	if (value == null) return "initial";
	if (typeof value === "string") return value === "" ? " " : value;
	if (typeof value !== "number" || !Number.isFinite(value)) console.warn("[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:", value);
	return String(value);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg, ...args) {
	console.warn(`[Vue warn] ${msg}`, ...args);
}
var activeEffectScope;
var EffectScope = class {
	constructor(detached = false) {
		this.detached = detached;
		/**
		* @internal
		*/
		this._active = true;
		/**
		* @internal track `on` calls, allow `on` call multiple times
		*/
		this._on = 0;
		/**
		* @internal
		*/
		this.effects = [];
		/**
		* @internal
		*/
		this.cleanups = [];
		this._isPaused = false;
		this.__v_skip = true;
		this.parent = activeEffectScope;
		if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = true;
			let i, l;
			if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].pause();
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
		}
	}
	/**
	* Resumes the effect scope, including all child scopes and effects.
	*/
	resume() {
		if (this._active) {
			if (this._isPaused) {
				this._isPaused = false;
				let i, l;
				if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].resume();
				for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].resume();
			}
		}
	}
	run(fn) {
		if (this._active) {
			const currentEffectScope = activeEffectScope;
			try {
				activeEffectScope = this;
				return fn();
			} finally {
				activeEffectScope = currentEffectScope;
			}
		} else warn$2(`cannot run an inactive effect scope.`);
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	on() {
		if (++this._on === 1) {
			this.prevScope = activeEffectScope;
			activeEffectScope = this;
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	off() {
		if (this._on > 0 && --this._on === 0) {
			activeEffectScope = this.prevScope;
			this.prevScope = void 0;
		}
	}
	stop(fromParent) {
		if (this._active) {
			this._active = false;
			let i, l;
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
			this.effects.length = 0;
			for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
			this.cleanups.length = 0;
			if (this.scopes) {
				for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].stop(true);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !fromParent) {
				const last = this.parent.scopes.pop();
				if (last && last !== this) {
					this.parent.scopes[this.index] = last;
					last.index = this.index;
				}
			}
			this.parent = void 0;
		}
	}
};
function getCurrentScope() {
	return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
	if (activeEffectScope) activeEffectScope.cleanups.push(fn);
	else if (!failSilently) warn$2(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
	constructor(fn) {
		this.fn = fn;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 5;
		/**
		* @internal
		*/
		this.next = void 0;
		/**
		* @internal
		*/
		this.cleanup = void 0;
		this.scheduler = void 0;
		if (activeEffectScope && activeEffectScope.active) activeEffectScope.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		if (this.flags & 64) {
			this.flags &= -65;
			if (pausedQueueEffects.has(this)) {
				pausedQueueEffects.delete(this);
				this.trigger();
			}
		}
	}
	/**
	* @internal
	*/
	notify() {
		if (this.flags & 2 && !(this.flags & 32)) return;
		if (!(this.flags & 8)) batch(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2;
		cleanupEffect(this);
		prepareDeps(this);
		const prevEffect = activeSub;
		const prevShouldTrack = shouldTrack;
		activeSub = this;
		shouldTrack = true;
		try {
			return this.fn();
		} finally {
			if (activeSub !== this) warn$2("Active effect was not restored correctly - this is likely a Vue internal bug.");
			cleanupDeps(this);
			activeSub = prevEffect;
			shouldTrack = prevShouldTrack;
			this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let link = this.deps; link; link = link.nextDep) removeSub(link);
			this.deps = this.depsTail = void 0;
			cleanupEffect(this);
			this.onStop && this.onStop();
			this.flags &= -2;
		}
	}
	trigger() {
		if (this.flags & 64) pausedQueueEffects.add(this);
		else if (this.scheduler) this.scheduler();
		else this.runIfDirty();
	}
	/**
	* @internal
	*/
	runIfDirty() {
		if (isDirty(this)) this.run();
	}
	get dirty() {
		return isDirty(this);
	}
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
	sub.flags |= 8;
	if (isComputed) {
		sub.next = batchedComputed;
		batchedComputed = sub;
		return;
	}
	sub.next = batchedSub;
	batchedSub = sub;
}
function startBatch() {
	batchDepth++;
}
function endBatch() {
	if (--batchDepth > 0) return;
	if (batchedComputed) {
		let e = batchedComputed;
		batchedComputed = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			e = next;
		}
	}
	let error;
	while (batchedSub) {
		let e = batchedSub;
		batchedSub = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			if (e.flags & 1) try {
				e.trigger();
			} catch (err) {
				if (!error) error = err;
			}
			e = next;
		}
	}
	if (error) throw error;
}
function prepareDeps(sub) {
	for (let link = sub.deps; link; link = link.nextDep) {
		link.version = -1;
		link.prevActiveLink = link.dep.activeLink;
		link.dep.activeLink = link;
	}
}
function cleanupDeps(sub) {
	let head;
	let tail = sub.depsTail;
	let link = tail;
	while (link) {
		const prev = link.prevDep;
		if (link.version === -1) {
			if (link === tail) tail = prev;
			removeSub(link);
			removeDep(link);
		} else head = link;
		link.dep.activeLink = link.prevActiveLink;
		link.prevActiveLink = void 0;
		link = prev;
	}
	sub.deps = head;
	sub.depsTail = tail;
}
function isDirty(sub) {
	for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
	if (sub._dirty) return true;
	return false;
}
function refreshComputed(computed) {
	if (computed.flags & 4 && !(computed.flags & 16)) return;
	computed.flags &= -17;
	if (computed.globalVersion === globalVersion) return;
	computed.globalVersion = globalVersion;
	if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
	computed.flags |= 2;
	const dep = computed.dep;
	const prevSub = activeSub;
	const prevShouldTrack = shouldTrack;
	activeSub = computed;
	shouldTrack = true;
	try {
		prepareDeps(computed);
		const value = computed.fn(computed._value);
		if (dep.version === 0 || hasChanged(value, computed._value)) {
			computed.flags |= 128;
			computed._value = value;
			dep.version++;
		}
	} catch (err) {
		dep.version++;
		throw err;
	} finally {
		activeSub = prevSub;
		shouldTrack = prevShouldTrack;
		cleanupDeps(computed);
		computed.flags &= -3;
	}
}
function removeSub(link, soft = false) {
	const { dep, prevSub, nextSub } = link;
	if (prevSub) {
		prevSub.nextSub = nextSub;
		link.prevSub = void 0;
	}
	if (nextSub) {
		nextSub.prevSub = prevSub;
		link.nextSub = void 0;
	}
	if (dep.subsHead === link) dep.subsHead = nextSub;
	if (dep.subs === link) {
		dep.subs = prevSub;
		if (!prevSub && dep.computed) {
			dep.computed.flags &= -5;
			for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
		}
	}
	if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
	const { prevDep, nextDep } = link;
	if (prevDep) {
		prevDep.nextDep = nextDep;
		link.prevDep = void 0;
	}
	if (nextDep) {
		nextDep.prevDep = prevDep;
		link.nextDep = void 0;
	}
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
	trackStack.push(shouldTrack);
	shouldTrack = false;
}
function resetTracking() {
	const last = trackStack.pop();
	shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
	const { cleanup } = e;
	e.cleanup = void 0;
	if (cleanup) {
		const prevSub = activeSub;
		activeSub = void 0;
		try {
			cleanup();
		} finally {
			activeSub = prevSub;
		}
	}
}
var globalVersion = 0;
var Link = class {
	constructor(sub, dep) {
		this.sub = sub;
		this.dep = dep;
		this.version = dep.version;
		this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
};
var Dep = class {
	constructor(computed) {
		this.computed = computed;
		this.version = 0;
		/**
		* Link between this dep and the current active effect
		*/
		this.activeLink = void 0;
		/**
		* Doubly linked list representing the subscribing effects (tail)
		*/
		this.subs = void 0;
		/**
		* For object property deps cleanup
		*/
		this.map = void 0;
		this.key = void 0;
		/**
		* Subscriber counter
		*/
		this.sc = 0;
		/**
		* @internal
		*/
		this.__v_skip = true;
		this.subsHead = void 0;
	}
	track(debugInfo) {
		if (!activeSub || !shouldTrack || activeSub === this.computed) return;
		let link = this.activeLink;
		if (link === void 0 || link.sub !== activeSub) {
			link = this.activeLink = new Link(activeSub, this);
			if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
			else {
				link.prevDep = activeSub.depsTail;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
			}
			addSub(link);
		} else if (link.version === -1) {
			link.version = this.version;
			if (link.nextDep) {
				const next = link.nextDep;
				next.prevDep = link.prevDep;
				if (link.prevDep) link.prevDep.nextDep = next;
				link.prevDep = activeSub.depsTail;
				link.nextDep = void 0;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
				if (activeSub.deps === link) activeSub.deps = next;
			}
		}
		if (activeSub.onTrack) activeSub.onTrack(extend({ effect: activeSub }, debugInfo));
		return link;
	}
	trigger(debugInfo) {
		this.version++;
		globalVersion++;
		this.notify(debugInfo);
	}
	notify(debugInfo) {
		startBatch();
		try {
			for (let head = this.subsHead; head; head = head.nextSub) if (head.sub.onTrigger && !(head.sub.flags & 8)) head.sub.onTrigger(extend({ effect: head.sub }, debugInfo));
			for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
		} finally {
			endBatch();
		}
	}
};
function addSub(link) {
	link.dep.sc++;
	if (link.sub.flags & 4) {
		const computed = link.dep.computed;
		if (computed && !link.dep.subs) {
			computed.flags |= 20;
			for (let l = computed.deps; l; l = l.nextDep) addSub(l);
		}
		const currentTail = link.dep.subs;
		if (currentTail !== link) {
			link.prevSub = currentTail;
			if (currentTail) currentTail.nextSub = link;
		}
		if (link.dep.subsHead === void 0) link.dep.subsHead = link;
		link.dep.subs = link;
	}
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol("Object iterate");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol("Map keys iterate");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol("Array iterate");
function track(target, type, key) {
	if (shouldTrack && activeSub) {
		let depsMap = targetMap.get(target);
		if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
		let dep = depsMap.get(key);
		if (!dep) {
			depsMap.set(key, dep = new Dep());
			dep.map = depsMap;
			dep.key = key;
		}
		dep.track({
			target,
			type,
			key
		});
	}
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
	const depsMap = targetMap.get(target);
	if (!depsMap) {
		globalVersion++;
		return;
	}
	const run = (dep) => {
		if (dep) dep.trigger({
			target,
			type,
			key,
			newValue,
			oldValue,
			oldTarget
		});
	};
	startBatch();
	if (type === "clear") depsMap.forEach(run);
	else {
		const targetIsArray = isArray$3(target);
		const isArrayIndex = targetIsArray && isIntegerKey(key);
		if (targetIsArray && key === "length") {
			const newLength = Number(newValue);
			depsMap.forEach((dep, key2) => {
				if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol$1(key2) && key2 >= newLength) run(dep);
			});
		} else {
			if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
			if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
			switch (type) {
				case "add":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap$1(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					} else if (isArrayIndex) run(depsMap.get("length"));
					break;
				case "delete":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap$1(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					}
					break;
				case "set":
					if (isMap$1(target)) run(depsMap.get(ITERATE_KEY));
					break;
			}
		}
	}
	endBatch();
}
function getDepFromReactive(object, key) {
	const depMap = targetMap.get(object);
	return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
	const raw = /* @__PURE__ */ toRaw(array);
	if (raw === array) return raw;
	track(raw, "iterate", ARRAY_ITERATE_KEY);
	return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
	track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
	return arr;
}
function toWrapped(target, item) {
	if (/* @__PURE__ */ isReadonly$1(target)) return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
	return toReactive(item);
}
var arrayInstrumentations = {
	__proto__: null,
	[Symbol.iterator]() {
		return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
	},
	concat(...args) {
		return reactiveReadArray(this).concat(...args.map((x) => isArray$3(x) ? reactiveReadArray(x) : x));
	},
	entries() {
		return iterator(this, "entries", (value) => {
			value[1] = toWrapped(this, value[1]);
			return value;
		});
	},
	every(fn, thisArg) {
		return apply(this, "every", fn, thisArg, void 0, arguments);
	},
	filter(fn, thisArg) {
		return apply(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
	},
	find(fn, thisArg) {
		return apply(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findIndex(fn, thisArg) {
		return apply(this, "findIndex", fn, thisArg, void 0, arguments);
	},
	findLast(fn, thisArg) {
		return apply(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findLastIndex(fn, thisArg) {
		return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
	},
	forEach(fn, thisArg) {
		return apply(this, "forEach", fn, thisArg, void 0, arguments);
	},
	includes(...args) {
		return searchProxy(this, "includes", args);
	},
	indexOf(...args) {
		return searchProxy(this, "indexOf", args);
	},
	join(separator) {
		return reactiveReadArray(this).join(separator);
	},
	lastIndexOf(...args) {
		return searchProxy(this, "lastIndexOf", args);
	},
	map(fn, thisArg) {
		return apply(this, "map", fn, thisArg, void 0, arguments);
	},
	pop() {
		return noTracking(this, "pop");
	},
	push(...args) {
		return noTracking(this, "push", args);
	},
	reduce(fn, ...args) {
		return reduce(this, "reduce", fn, args);
	},
	reduceRight(fn, ...args) {
		return reduce(this, "reduceRight", fn, args);
	},
	shift() {
		return noTracking(this, "shift");
	},
	some(fn, thisArg) {
		return apply(this, "some", fn, thisArg, void 0, arguments);
	},
	splice(...args) {
		return noTracking(this, "splice", args);
	},
	toReversed() {
		return reactiveReadArray(this).toReversed();
	},
	toSorted(comparer) {
		return reactiveReadArray(this).toSorted(comparer);
	},
	toSpliced(...args) {
		return reactiveReadArray(this).toSpliced(...args);
	},
	unshift(...args) {
		return noTracking(this, "unshift", args);
	},
	values() {
		return iterator(this, "values", (item) => toWrapped(this, item));
	}
};
function iterator(self, method, wrapValue) {
	const arr = shallowReadArray(self);
	const iter = arr[method]();
	if (arr !== self && !/* @__PURE__ */ isShallow(self)) {
		iter._next = iter.next;
		iter.next = () => {
			const result = iter._next();
			if (!result.done) result.value = wrapValue(result.value);
			return result;
		};
	}
	return iter;
}
var arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	const methodFn = arr[method];
	if (methodFn !== arrayProto[method]) {
		const result2 = methodFn.apply(self, args);
		return needsWrap ? toReactive(result2) : result2;
	}
	let wrappedFn = fn;
	if (arr !== self) {
		if (needsWrap) wrappedFn = function(item, index) {
			return fn.call(this, toWrapped(self, item), index, self);
		};
		else if (fn.length > 2) wrappedFn = function(item, index) {
			return fn.call(this, item, index, self);
		};
	}
	const result = methodFn.call(arr, wrappedFn, thisArg);
	return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	let wrappedFn = fn;
	let wrapInitialAccumulator = false;
	if (arr !== self) {
		if (needsWrap) {
			wrapInitialAccumulator = args.length === 0;
			wrappedFn = function(acc, item, index) {
				if (wrapInitialAccumulator) {
					wrapInitialAccumulator = false;
					acc = toWrapped(self, acc);
				}
				return fn.call(this, acc, toWrapped(self, item), index, self);
			};
		} else if (fn.length > 3) wrappedFn = function(acc, item, index) {
			return fn.call(this, acc, item, index, self);
		};
	}
	const result = arr[method](wrappedFn, ...args);
	return wrapInitialAccumulator ? toWrapped(self, result) : result;
}
function searchProxy(self, method, args) {
	const arr = /* @__PURE__ */ toRaw(self);
	track(arr, "iterate", ARRAY_ITERATE_KEY);
	const res = arr[method](...args);
	if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
		args[0] = /* @__PURE__ */ toRaw(args[0]);
		return arr[method](...args);
	}
	return res;
}
function noTracking(self, method, args = []) {
	pauseTracking();
	startBatch();
	const res = (/* @__PURE__ */ toRaw(self))[method].apply(self, args);
	endBatch();
	resetTracking();
	return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1));
function hasOwnProperty(key) {
	if (!isSymbol$1(key)) key = String(key);
	const obj = /* @__PURE__ */ toRaw(this);
	track(obj, "has", key);
	return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
	constructor(_isReadonly = false, _isShallow = false) {
		this._isReadonly = _isReadonly;
		this._isShallow = _isShallow;
	}
	get(target, key, receiver) {
		if (key === "__v_skip") return target["__v_skip"];
		const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_isShallow") return isShallow2;
		else if (key === "__v_raw") {
			if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
			return;
		}
		const targetIsArray = isArray$3(target);
		if (!isReadonly2) {
			let fn;
			if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
			if (key === "hasOwnProperty") return hasOwnProperty;
		}
		const res = Reflect.get(target, key, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
		if (!isReadonly2) track(target, "get", key);
		if (isShallow2) return res;
		if (/* @__PURE__ */ isRef(res)) {
			const value = targetIsArray && isIntegerKey(key) ? res : res.value;
			return isReadonly2 && isObject$1(value) ? /* @__PURE__ */ readonly(value) : value;
		}
		if (isObject$1(res)) return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
		return res;
	}
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(false, isShallow2);
	}
	set(target, key, value, receiver) {
		let oldValue = target[key];
		const isArrayWithIntegerKey = isArray$3(target) && isIntegerKey(key);
		if (!this._isShallow) {
			const isOldValueReadonly = /* @__PURE__ */ isReadonly$1(oldValue);
			if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly$1(value)) {
				oldValue = /* @__PURE__ */ toRaw(oldValue);
				value = /* @__PURE__ */ toRaw(value);
			}
			if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) if (isOldValueReadonly) {
				warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target[key]);
				return true;
			} else {
				oldValue.value = value;
				return true;
			}
		}
		const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
		const result = Reflect.set(target, key, value, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (target === /* @__PURE__ */ toRaw(receiver)) {
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
		}
		return result;
	}
	deleteProperty(target, key) {
		const hadKey = hasOwn(target, key);
		const oldValue = target[key];
		const result = Reflect.deleteProperty(target, key);
		if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
		return result;
	}
	has(target, key) {
		const result = Reflect.has(target, key);
		if (!isSymbol$1(key) || !builtInSymbols.has(key)) track(target, "has", key);
		return result;
	}
	ownKeys(target) {
		track(target, "iterate", isArray$3(target) ? "length" : ITERATE_KEY);
		return Reflect.ownKeys(target);
	}
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(true, isShallow2);
	}
	set(target, key) {
		warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
		return true;
	}
	deleteProperty(target, key) {
		warn$2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
		return true;
	}
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
	return function(...args) {
		const target = this["__v_raw"];
		const rawTarget = /* @__PURE__ */ toRaw(target);
		const targetIsMap = isMap$1(rawTarget);
		const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
		const isKeyOnly = method === "keys" && targetIsMap;
		const innerIterator = target[method](...args);
		const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
		!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
		return extend(Object.create(innerIterator), { next() {
			const { value, done } = innerIterator.next();
			return done ? {
				value,
				done
			} : {
				value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
				done
			};
		} });
	};
}
function createReadonlyMethod(type) {
	return function(...args) {
		{
			const key = args[0] ? `on key "${args[0]}" ` : ``;
			warn$2(`${capitalize(type)} operation ${key}failed: target is readonly.`, /* @__PURE__ */ toRaw(this));
		}
		return type === "delete" ? false : type === "clear" ? void 0 : this;
	};
}
function createInstrumentations(readonly, shallow) {
	const instrumentations = {
		get(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
				track(rawTarget, "get", rawKey);
			}
			const { has } = getProto(rawTarget);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			if (has.call(rawTarget, key)) return wrap(target.get(key));
			else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
			else if (target !== rawTarget) target.get(key);
		},
		get size() {
			const target = this["__v_raw"];
			!readonly && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
			return target.size;
		},
		has(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
				track(rawTarget, "has", rawKey);
			}
			return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
		},
		forEach(callback, thisArg) {
			const observed = this;
			const target = observed["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			!readonly && track(rawTarget, "iterate", ITERATE_KEY);
			return target.forEach((value, key) => {
				return callback.call(thisArg, wrap(value), wrap(key), observed);
			});
		}
	};
	extend(instrumentations, readonly ? {
		add: createReadonlyMethod("add"),
		set: createReadonlyMethod("set"),
		delete: createReadonlyMethod("delete"),
		clear: createReadonlyMethod("clear")
	} : {
		add(value) {
			const target = /* @__PURE__ */ toRaw(this);
			const proto = getProto(target);
			const rawValue = /* @__PURE__ */ toRaw(value);
			const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly$1(value) ? rawValue : value;
			if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
				target.add(valueToAdd);
				trigger(target, "add", valueToAdd, valueToAdd);
			}
			return this;
		},
		set(key, value) {
			if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly$1(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			} else checkIdentityKeys(target, has, key);
			const oldValue = get.call(target, key);
			target.set(key, value);
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
			return this;
		},
		delete(key) {
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			} else checkIdentityKeys(target, has, key);
			const oldValue = get ? get.call(target, key) : void 0;
			const result = target.delete(key);
			if (hadKey) trigger(target, "delete", key, void 0, oldValue);
			return result;
		},
		clear() {
			const target = /* @__PURE__ */ toRaw(this);
			const hadItems = target.size !== 0;
			const oldTarget = isMap$1(target) ? new Map(target) : new Set(target);
			const result = target.clear();
			if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
			return result;
		}
	});
	[
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((method) => {
		instrumentations[method] = createIterableMethod(method, readonly, shallow);
	});
	return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
	const instrumentations = createInstrumentations(isReadonly2, shallow);
	return (target, key, receiver) => {
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_raw") return target;
		return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
	};
}
var mutableCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, false) };
var shallowCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, true) };
var readonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, false) };
var shallowReadonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, true) };
function checkIdentityKeys(target, has, key) {
	const rawKey = /* @__PURE__ */ toRaw(key);
	if (rawKey !== key && has.call(target, rawKey)) {
		const type = toRawType(target);
		warn$2(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	}
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
	switch (rawType) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function getTargetType(value) {
	return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
/* @__NO_SIDE_EFFECTS__ */
function reactive(target) {
	if (/* @__PURE__ */ isReadonly$1(target)) return target;
	return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowReactive(target) {
	return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/* @__NO_SIDE_EFFECTS__ */
function readonly(target) {
	return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowReadonly(target) {
	return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	if (!isObject$1(target)) {
		warn$2(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
		return target;
	}
	if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
	const targetType = getTargetType(target);
	if (targetType === 0) return target;
	const existingProxy = proxyMap.get(target);
	if (existingProxy) return existingProxy;
	const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
	proxyMap.set(target, proxy);
	return proxy;
}
/* @__NO_SIDE_EFFECTS__ */
function isReactive(value) {
	if (/* @__PURE__ */ isReadonly$1(value)) return /* @__PURE__ */ isReactive(value["__v_raw"]);
	return !!(value && value["__v_isReactive"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isReadonly$1(value) {
	return !!(value && value["__v_isReadonly"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isShallow(value) {
	return !!(value && value["__v_isShallow"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isProxy(value) {
	return value ? !!value["__v_raw"] : false;
}
/* @__NO_SIDE_EFFECTS__ */
function toRaw(observed) {
	const raw = observed && observed["__v_raw"];
	return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
	if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
	return value;
}
var toReactive = (value) => isObject$1(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject$1(value) ? /* @__PURE__ */ readonly(value) : value;
/* @__NO_SIDE_EFFECTS__ */
function isRef(r) {
	return r ? r["__v_isRef"] === true : false;
}
/* @__NO_SIDE_EFFECTS__ */
function ref(value) {
	return createRef(value, false);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowRef(value) {
	return createRef(value, true);
}
function createRef(rawValue, shallow) {
	if (/* @__PURE__ */ isRef(rawValue)) return rawValue;
	return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
	constructor(value, isShallow2) {
		this.dep = new Dep();
		this["__v_isRef"] = true;
		this["__v_isShallow"] = false;
		this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
		this._value = isShallow2 ? value : toReactive(value);
		this["__v_isShallow"] = isShallow2;
	}
	get value() {
		this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		return this._value;
	}
	set value(newValue) {
		const oldValue = this._rawValue;
		const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly$1(newValue);
		newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
		if (hasChanged(newValue, oldValue)) {
			this._rawValue = newValue;
			this._value = useDirectValue ? newValue : toReactive(newValue);
			this.dep.trigger({
				target: this,
				type: "set",
				key: "value",
				newValue,
				oldValue
			});
		}
	}
};
function unref(ref2) {
	return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
	return isFunction$1(source) ? source() : unref(source);
}
var shallowUnwrapHandlers = {
	get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
	set: (target, key, value, receiver) => {
		const oldValue = target[key];
		if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
			oldValue.value = value;
			return true;
		} else return Reflect.set(target, key, value, receiver);
	}
};
function proxyRefs(objectWithRefs) {
	return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var CustomRefImpl = class {
	constructor(factory) {
		this["__v_isRef"] = true;
		this._value = void 0;
		const dep = this.dep = new Dep();
		const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
		this._get = get;
		this._set = set;
	}
	get value() {
		return this._value = this._get();
	}
	set value(newVal) {
		this._set(newVal);
	}
};
function customRef(factory) {
	return new CustomRefImpl(factory);
}
var ObjectRefImpl = class {
	constructor(_object, _key, _defaultValue) {
		this._object = _object;
		this._key = _key;
		this._defaultValue = _defaultValue;
		this["__v_isRef"] = true;
		this._value = void 0;
		this._raw = /* @__PURE__ */ toRaw(_object);
		let shallow = true;
		let obj = _object;
		if (!isArray$3(_object) || !isIntegerKey(String(_key))) do
			shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
		while (shallow && (obj = obj["__v_raw"]));
		this._shallow = shallow;
	}
	get value() {
		let val = this._object[this._key];
		if (this._shallow) val = unref(val);
		return this._value = val === void 0 ? this._defaultValue : val;
	}
	set value(newVal) {
		if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
			const nestedRef = this._object[this._key];
			if (/* @__PURE__ */ isRef(nestedRef)) {
				nestedRef.value = newVal;
				return;
			}
		}
		this._object[this._key] = newVal;
	}
	get dep() {
		return getDepFromReactive(this._raw, this._key);
	}
};
var GetterRefImpl = class {
	constructor(_getter) {
		this._getter = _getter;
		this["__v_isRef"] = true;
		this["__v_isReadonly"] = true;
		this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function toRef$1(source, key, defaultValue) {
	if (/* @__PURE__ */ isRef(source)) return source;
	else if (isFunction$1(source)) return new GetterRefImpl(source);
	else if (isObject$1(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
	else return /* @__PURE__ */ ref(source);
}
function propertyToRef(source, key, defaultValue) {
	return new ObjectRefImpl(source, key, defaultValue);
}
var ComputedRefImpl = class {
	constructor(fn, setter, isSSR) {
		this.fn = fn;
		this.setter = setter;
		/**
		* @internal
		*/
		this._value = void 0;
		/**
		* @internal
		*/
		this.dep = new Dep(this);
		/**
		* @internal
		*/
		this.__v_isRef = true;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 16;
		/**
		* @internal
		*/
		this.globalVersion = globalVersion - 1;
		/**
		* @internal
		*/
		this.next = void 0;
		this.effect = this;
		this["__v_isReadonly"] = !setter;
		this.isSSR = isSSR;
	}
	/**
	* @internal
	*/
	notify() {
		this.flags |= 16;
		if (!(this.flags & 8) && activeSub !== this) {
			batch(this, true);
			return true;
		}
	}
	get value() {
		const link = this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		refreshComputed(this);
		if (link) link.version = this.dep.version;
		return this._value;
	}
	set value(newValue) {
		if (this.setter) this.setter(newValue);
		else warn$2("Write operation failed: computed value is readonly");
	}
};
/* @__NO_SIDE_EFFECTS__ */
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
	let getter;
	let setter;
	if (isFunction$1(getterOrOptions)) getter = getterOrOptions;
	else {
		getter = getterOrOptions.get;
		setter = getterOrOptions.set;
	}
	const cRef = new ComputedRefImpl(getter, setter, isSSR);
	if (debugOptions && !isSSR) {
		cRef.onTrack = debugOptions.onTrack;
		cRef.onTrigger = debugOptions.onTrigger;
	}
	return cRef;
}
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
	if (owner) {
		let cleanups = cleanupMap.get(owner);
		if (!cleanups) cleanupMap.set(owner, cleanups = []);
		cleanups.push(cleanupFn);
	} else if (!failSilently) warn$2(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
}
function watch$1(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, once, scheduler, augmentJob, call } = options;
	const warnInvalidSource = (s) => {
		(options.onWarn || warn$2)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
	};
	const reactiveGetter = (source2) => {
		if (deep) return source2;
		if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0) return traverse$1(source2, 1);
		return traverse$1(source2);
	};
	let effect;
	let getter;
	let cleanup;
	let boundCleanup;
	let forceTrigger = false;
	let isMultiSource = false;
	if (/* @__PURE__ */ isRef(source)) {
		getter = () => source.value;
		forceTrigger = /* @__PURE__ */ isShallow(source);
	} else if (/* @__PURE__ */ isReactive(source)) {
		getter = () => reactiveGetter(source);
		forceTrigger = true;
	} else if (isArray$3(source)) {
		isMultiSource = true;
		forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
		getter = () => source.map((s) => {
			if (/* @__PURE__ */ isRef(s)) return s.value;
			else if (/* @__PURE__ */ isReactive(s)) return reactiveGetter(s);
			else if (isFunction$1(s)) return call ? call(s, 2) : s();
			else warnInvalidSource(s);
		});
	} else if (isFunction$1(source)) if (cb) getter = call ? () => call(source, 2) : source;
	else getter = () => {
		if (cleanup) {
			pauseTracking();
			try {
				cleanup();
			} finally {
				resetTracking();
			}
		}
		const currentEffect = activeWatcher;
		activeWatcher = effect;
		try {
			return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
		} finally {
			activeWatcher = currentEffect;
		}
	};
	else {
		getter = NOOP;
		warnInvalidSource(source);
	}
	if (cb && deep) {
		const baseGetter = getter;
		const depth = deep === true ? Infinity : deep;
		getter = () => traverse$1(baseGetter(), depth);
	}
	const scope = getCurrentScope();
	const watchHandle = () => {
		effect.stop();
		if (scope && scope.active) remove(scope.effects, effect);
	};
	if (once && cb) {
		const _cb = cb;
		cb = (...args) => {
			_cb(...args);
			watchHandle();
		};
	}
	let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	const job = (immediateFirstRun) => {
		if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
		if (cb) {
			const newValue = effect.run();
			if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
				if (cleanup) cleanup();
				const currentWatcher = activeWatcher;
				activeWatcher = effect;
				try {
					const args = [
						newValue,
						oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
						boundCleanup
					];
					oldValue = newValue;
					call ? call(cb, 3, args) : cb(...args);
				} finally {
					activeWatcher = currentWatcher;
				}
			}
		} else effect.run();
	};
	if (augmentJob) augmentJob(job);
	effect = new ReactiveEffect(getter);
	effect.scheduler = scheduler ? () => scheduler(job, false) : job;
	boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
	cleanup = effect.onStop = () => {
		const cleanups = cleanupMap.get(effect);
		if (cleanups) {
			if (call) call(cleanups, 4);
			else for (const cleanup2 of cleanups) cleanup2();
			cleanupMap.delete(effect);
		}
	};
	effect.onTrack = options.onTrack;
	effect.onTrigger = options.onTrigger;
	if (cb) if (immediate) job(true);
	else oldValue = effect.run();
	else if (scheduler) scheduler(job.bind(null, true), true);
	else effect.run();
	watchHandle.pause = effect.pause.bind(effect);
	watchHandle.resume = effect.resume.bind(effect);
	watchHandle.stop = watchHandle;
	return watchHandle;
}
function traverse$1(value, depth = Infinity, seen) {
	if (depth <= 0 || !isObject$1(value) || value["__v_skip"]) return value;
	seen = seen || /* @__PURE__ */ new Map();
	if ((seen.get(value) || 0) >= depth) return value;
	seen.set(value, depth);
	depth--;
	if (/* @__PURE__ */ isRef(value)) traverse$1(value.value, depth, seen);
	else if (isArray$3(value)) for (let i = 0; i < value.length; i++) traverse$1(value[i], depth, seen);
	else if (isSet$1(value) || isMap$1(value)) value.forEach((v) => {
		traverse$1(v, depth, seen);
	});
	else if (isPlainObject$3(value)) {
		for (const key in value) traverse$1(value[key], depth, seen);
		for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse$1(value[key], depth, seen);
	}
	return value;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var stack = [];
function pushWarningContext(vnode) {
	stack.push(vnode);
}
function popWarningContext() {
	stack.pop();
}
var isWarning = false;
function warn$1$1(msg, ...args) {
	if (isWarning) return;
	isWarning = true;
	pauseTracking();
	const instance = stack.length ? stack[stack.length - 1].component : null;
	const appWarnHandler = instance && instance.appContext.config.warnHandler;
	const trace = getComponentTrace();
	if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11, [
		msg + args.map((a) => {
			var _a, _b;
			return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
		}).join(""),
		instance && instance.proxy,
		trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
		trace
	]);
	else {
		const warnArgs = [`[Vue warn]: ${msg}`, ...args];
		if (trace.length && true) warnArgs.push(`
`, ...formatTrace(trace));
		console.warn(...warnArgs);
	}
	resetTracking();
	isWarning = false;
}
function getComponentTrace() {
	let currentVNode = stack[stack.length - 1];
	if (!currentVNode) return [];
	const normalizedStack = [];
	while (currentVNode) {
		const last = normalizedStack[0];
		if (last && last.vnode === currentVNode) last.recurseCount++;
		else normalizedStack.push({
			vnode: currentVNode,
			recurseCount: 0
		});
		const parentInstance = currentVNode.component && currentVNode.component.parent;
		currentVNode = parentInstance && parentInstance.vnode;
	}
	return normalizedStack;
}
function formatTrace(trace) {
	const logs = [];
	trace.forEach((entry, i) => {
		logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
	});
	return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
	const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
	const isRoot = vnode.component ? vnode.component.parent == null : false;
	const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
	const close = `>` + postfix;
	return vnode.props ? [
		open,
		...formatProps(vnode.props),
		close
	] : [open + close];
}
function formatProps(props) {
	const res = [];
	const keys = Object.keys(props);
	keys.slice(0, 3).forEach((key) => {
		res.push(...formatProp(key, props[key]));
	});
	if (keys.length > 3) res.push(` ...`);
	return res;
}
function formatProp(key, value, raw) {
	if (isString$2(value)) {
		value = JSON.stringify(value);
		return raw ? value : [`${key}=${value}`];
	} else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [`${key}=${value}`];
	else if (/* @__PURE__ */ isRef(value)) {
		value = formatProp(key, /* @__PURE__ */ toRaw(value.value), true);
		return raw ? value : [
			`${key}=Ref<`,
			value,
			`>`
		];
	} else if (isFunction$1(value)) return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
	else {
		value = /* @__PURE__ */ toRaw(value);
		return raw ? value : [`${key}=`, value];
	}
}
function assertNumber(val, type) {
	if (val === void 0) return;
	else if (typeof val !== "number") warn$1$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
	else if (isNaN(val)) warn$1$1(`${type} is NaN - the duration expression might be incorrect.`);
}
var ErrorTypeStrings$1 = {
	["sp"]: "serverPrefetch hook",
	["bc"]: "beforeCreate hook",
	["c"]: "created hook",
	["bm"]: "beforeMount hook",
	["m"]: "mounted hook",
	["bu"]: "beforeUpdate hook",
	["u"]: "updated",
	["bum"]: "beforeUnmount hook",
	["um"]: "unmounted hook",
	["a"]: "activated hook",
	["da"]: "deactivated hook",
	["ec"]: "errorCaptured hook",
	["rtc"]: "renderTracked hook",
	["rtg"]: "renderTriggered hook",
	[0]: "setup function",
	[1]: "render function",
	[2]: "watcher getter",
	[3]: "watcher callback",
	[4]: "watcher cleanup function",
	[5]: "native event handler",
	[6]: "component event handler",
	[7]: "vnode hook",
	[8]: "directive hook",
	[9]: "transition hook",
	[10]: "app errorHandler",
	[11]: "app warnHandler",
	[12]: "ref function",
	[13]: "async component loader",
	[14]: "scheduler flush",
	[15]: "component update",
	[16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
	try {
		return args ? fn(...args) : fn();
	} catch (err) {
		handleError(err, instance, type);
	}
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
	if (isFunction$1(fn)) {
		const res = callWithErrorHandling(fn, instance, type, args);
		if (res && isPromise(res)) res.catch((err) => {
			handleError(err, instance, type);
		});
		return res;
	}
	if (isArray$3(fn)) {
		const values = [];
		for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
		return values;
	} else warn$1$1(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`);
}
function handleError(err, instance, type, throwInDev = true) {
	const contextVNode = instance ? instance.vnode : null;
	const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
	if (instance) {
		let cur = instance.parent;
		const exposedInstance = instance.proxy;
		const errorInfo = ErrorTypeStrings$1[type];
		while (cur) {
			const errorCapturedHooks = cur.ec;
			if (errorCapturedHooks) {
				for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
			}
			cur = cur.parent;
		}
		if (errorHandler) {
			pauseTracking();
			callWithErrorHandling(errorHandler, null, 10, [
				err,
				exposedInstance,
				errorInfo
			]);
			resetTracking();
			return;
		}
	}
	logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
	{
		const info = ErrorTypeStrings$1[type];
		if (contextVNode) pushWarningContext(contextVNode);
		warn$1$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
		if (contextVNode) popWarningContext();
		if (throwInDev) throw err;
		else console.error(err);
	}
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
var RECURSION_LIMIT = 100;
function nextTick(fn) {
	const p = currentFlushPromise || resolvedPromise;
	return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex$1(id) {
	let start = flushIndex + 1;
	let end = queue.length;
	while (start < end) {
		const middle = start + end >>> 1;
		const middleJob = queue[middle];
		const middleJobId = getId(middleJob);
		if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
		else end = middle;
	}
	return start;
}
function queueJob(job) {
	if (!(job.flags & 1)) {
		const jobId = getId(job);
		const lastJob = queue[queue.length - 1];
		if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
		else queue.splice(findInsertionIndex$1(jobId), 0, job);
		job.flags |= 1;
		queueFlush();
	}
}
function queueFlush() {
	if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
}
function queuePostFlushCb(cb) {
	if (!isArray$3(cb)) {
		if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
		else if (!(cb.flags & 1)) {
			pendingPostFlushCbs.push(cb);
			cb.flags |= 1;
		}
	} else pendingPostFlushCbs.push(...cb);
	queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
	seen = seen || /* @__PURE__ */ new Map();
	for (; i < queue.length; i++) {
		const cb = queue[i];
		if (cb && cb.flags & 2) {
			if (instance && cb.id !== instance.uid) continue;
			if (checkRecursiveUpdates(seen, cb)) continue;
			queue.splice(i, 1);
			i--;
			if (cb.flags & 4) cb.flags &= -2;
			cb();
			if (!(cb.flags & 4)) cb.flags &= -2;
		}
	}
}
function flushPostFlushCbs(seen) {
	if (pendingPostFlushCbs.length) {
		const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
		pendingPostFlushCbs.length = 0;
		if (activePostFlushCbs) {
			activePostFlushCbs.push(...deduped);
			return;
		}
		activePostFlushCbs = deduped;
		seen = seen || /* @__PURE__ */ new Map();
		for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
			const cb = activePostFlushCbs[postFlushIndex];
			if (checkRecursiveUpdates(seen, cb)) continue;
			if (cb.flags & 4) cb.flags &= -2;
			if (!(cb.flags & 8)) cb();
			cb.flags &= -2;
		}
		activePostFlushCbs = null;
		postFlushIndex = 0;
	}
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
	seen = seen || /* @__PURE__ */ new Map();
	const check = (job) => checkRecursiveUpdates(seen, job);
	try {
		for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job && !(job.flags & 8)) {
				if (check(job)) continue;
				if (job.flags & 4) job.flags &= -2;
				callWithErrorHandling(job, job.i, job.i ? 15 : 14);
				if (!(job.flags & 4)) job.flags &= -2;
			}
		}
	} finally {
		for (; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job) job.flags &= -2;
		}
		flushIndex = -1;
		queue.length = 0;
		flushPostFlushCbs(seen);
		currentFlushPromise = null;
		if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
	}
}
function checkRecursiveUpdates(seen, fn) {
	const count = seen.get(fn) || 0;
	if (count > RECURSION_LIMIT) {
		const instance = fn.i;
		const componentName = instance && getComponentName(instance.type);
		handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
		return true;
	}
	seen.set(fn, count + 1);
	return false;
}
var isHmrUpdating = false;
var hmrDirtyComponents = /* @__PURE__ */ new Map();
getGlobalThis().__VUE_HMR_RUNTIME__ = {
	createRecord: tryWrap(createRecord),
	rerender: tryWrap(rerender),
	reload: tryWrap(reload)
};
var map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
	const id = instance.type.__hmrId;
	let record = map.get(id);
	if (!record) {
		createRecord(id, instance.type);
		record = map.get(id);
	}
	record.instances.add(instance);
}
function unregisterHMR(instance) {
	map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
	if (map.has(id)) return false;
	map.set(id, {
		initialDef: normalizeClassComponent(initialDef),
		instances: /* @__PURE__ */ new Set()
	});
	return true;
}
function normalizeClassComponent(component) {
	return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
	const record = map.get(id);
	if (!record) return;
	record.initialDef.render = newRender;
	[...record.instances].forEach((instance) => {
		if (newRender) {
			instance.render = newRender;
			normalizeClassComponent(instance.type).render = newRender;
		}
		instance.renderCache = [];
		isHmrUpdating = true;
		if (!(instance.job.flags & 8)) instance.update();
		isHmrUpdating = false;
	});
}
function reload(id, newComp) {
	const record = map.get(id);
	if (!record) return;
	newComp = normalizeClassComponent(newComp);
	updateComponentDef(record.initialDef, newComp);
	const instances = [...record.instances];
	for (let i = 0; i < instances.length; i++) {
		const instance = instances[i];
		const oldComp = normalizeClassComponent(instance.type);
		let dirtyInstances = hmrDirtyComponents.get(oldComp);
		if (!dirtyInstances) {
			if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
			hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
		}
		dirtyInstances.add(instance);
		instance.appContext.propsCache.delete(instance.type);
		instance.appContext.emitsCache.delete(instance.type);
		instance.appContext.optionsCache.delete(instance.type);
		if (instance.ceReload) {
			dirtyInstances.add(instance);
			instance.ceReload(newComp.styles);
			dirtyInstances.delete(instance);
		} else if (instance.parent) queueJob(() => {
			if (!(instance.job.flags & 8)) {
				isHmrUpdating = true;
				instance.parent.update();
				isHmrUpdating = false;
				dirtyInstances.delete(instance);
			}
		});
		else if (instance.appContext.reload) instance.appContext.reload();
		else if (typeof window !== "undefined") window.location.reload();
		else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
		if (instance.root.ce && instance !== instance.root) instance.root.ce._removeChildStyle(oldComp);
	}
	queuePostFlushCb(() => {
		hmrDirtyComponents.clear();
	});
}
function updateComponentDef(oldComp, newComp) {
	extend(oldComp, newComp);
	for (const key in oldComp) if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
	return (id, arg) => {
		try {
			return fn(id, arg);
		} catch (e) {
			console.error(e);
			console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
		}
	};
}
var devtools$1;
var buffer = [];
var devtoolsNotInstalled = false;
function emit$1(event, ...args) {
	if (devtools$1) devtools$1.emit(event, ...args);
	else if (!devtoolsNotInstalled) buffer.push({
		event,
		args
	});
}
function setDevtoolsHook$1(hook, target) {
	var _a, _b;
	devtools$1 = hook;
	if (devtools$1) {
		devtools$1.enabled = true;
		buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
		buffer = [];
	} else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
		(target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((newHook) => {
			setDevtoolsHook$1(newHook, target);
		});
		setTimeout(() => {
			if (!devtools$1) {
				target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
				devtoolsNotInstalled = true;
				buffer = [];
			}
		}, 3e3);
	} else {
		devtoolsNotInstalled = true;
		buffer = [];
	}
}
function devtoolsInitApp(app, version) {
	emit$1("app:init", app, version, {
		Fragment,
		Text,
		Comment,
		Static
	});
}
function devtoolsUnmountApp(app) {
	emit$1("app:unmount", app);
}
var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
var devtoolsComponentRemoved = (component) => {
	if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && !devtools$1.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
};
/* @__NO_SIDE_EFFECTS__ */
function createDevtoolsComponentHook(hook) {
	return (component) => {
		emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
	};
}
var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
function createDevtoolsPerformanceHook(hook) {
	return (component, type, time) => {
		emit$1(hook, component.appContext.app, component.uid, component, type, time);
	};
}
function devtoolsComponentEmit(component, event, params) {
	emit$1("component:emit", component.appContext.app, component, event, params);
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
	const prev = currentRenderingInstance;
	currentRenderingInstance = instance;
	currentScopeId = instance && instance.type.__scopeId || null;
	return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
	if (!ctx) return fn;
	if (fn._n) return fn;
	const renderFnWithContext = (...args) => {
		if (renderFnWithContext._d) setBlockTracking(-1);
		const prevInstance = setCurrentRenderingInstance(ctx);
		let res;
		try {
			res = fn(...args);
		} finally {
			setCurrentRenderingInstance(prevInstance);
			if (renderFnWithContext._d) setBlockTracking(1);
		}
		devtoolsComponentUpdated(ctx);
		return res;
	};
	renderFnWithContext._n = true;
	renderFnWithContext._c = true;
	renderFnWithContext._d = true;
	return renderFnWithContext;
}
function validateDirectiveName(name) {
	if (isBuiltInDirective(name)) warn$1$1("Do not use built-in directive ids as custom directive id: " + name);
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	const bindings = vnode.dirs;
	const oldBindings = prevVNode && prevVNode.dirs;
	for (let i = 0; i < bindings.length; i++) {
		const binding = bindings[i];
		if (oldBindings) binding.oldValue = oldBindings[i].value;
		let hook = binding.dir[name];
		if (hook) {
			pauseTracking();
			callWithAsyncErrorHandling(hook, instance, 8, [
				vnode.el,
				binding,
				vnode,
				prevVNode
			]);
			resetTracking();
		}
	}
}
function provide(key, value) {
	if (!currentInstance || currentInstance.isMounted) warn$1$1(`provide() can only be used inside setup().`);
	if (currentInstance) {
		let provides = currentInstance.provides;
		const parentProvides = currentInstance.parent && currentInstance.parent.provides;
		if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
		provides[key] = value;
	}
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
	const instance = getCurrentInstance();
	if (instance || currentApp) {
		let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
		if (provides && key in provides) return provides[key];
		else if (arguments.length > 1) return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
		else warn$1$1(`injection "${String(key)}" not found.`);
	} else warn$1$1(`inject() can only be used inside setup() or functional components.`);
}
function hasInjectionContext() {
	return !!(getCurrentInstance() || currentApp);
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
	{
		const ctx = inject(ssrContextKey);
		if (!ctx) warn$1$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
		return ctx;
	}
};
function watchEffect(effect, options) {
	return doWatch(effect, null, options);
}
function watch(source, cb, options) {
	if (!isFunction$1(cb)) warn$1$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
	return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, flush, once } = options;
	if (!cb) {
		if (immediate !== void 0) warn$1$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
		if (deep !== void 0) warn$1$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
		if (once !== void 0) warn$1$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
	}
	const baseWatchOptions = extend({}, options);
	baseWatchOptions.onWarn = warn$1$1;
	const runsImmediately = cb && immediate || !cb && flush !== "post";
	let ssrCleanup;
	if (isInSSRComponentSetup) {
		if (flush === "sync") {
			const ctx = useSSRContext();
			ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
		} else if (!runsImmediately) {
			const watchStopHandle = () => {};
			watchStopHandle.stop = NOOP;
			watchStopHandle.resume = NOOP;
			watchStopHandle.pause = NOOP;
			return watchStopHandle;
		}
	}
	const instance = currentInstance;
	baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
	let isPre = false;
	if (flush === "post") baseWatchOptions.scheduler = (job) => {
		queuePostRenderEffect(job, instance && instance.suspense);
	};
	else if (flush !== "sync") {
		isPre = true;
		baseWatchOptions.scheduler = (job, isFirstRun) => {
			if (isFirstRun) job();
			else queueJob(job);
		};
	}
	baseWatchOptions.augmentJob = (job) => {
		if (cb) job.flags |= 4;
		if (isPre) {
			job.flags |= 2;
			if (instance) {
				job.id = instance.uid;
				job.i = instance;
			}
		}
	};
	const watchHandle = watch$1(source, cb, baseWatchOptions);
	if (isInSSRComponentSetup) {
		if (ssrCleanup) ssrCleanup.push(watchHandle);
		else if (runsImmediately) watchHandle();
	}
	return watchHandle;
}
function instanceWatch(source, value, options) {
	const publicThis = this.proxy;
	const getter = isString$2(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
	let cb;
	if (isFunction$1(value)) cb = value;
	else {
		cb = value.handler;
		options = value;
	}
	const reset = setCurrentInstance(this);
	const res = doWatch(getter, cb.bind(publicThis), options);
	reset();
	return res;
}
function createPathGetter(ctx, path) {
	const segments = path.split(".");
	return () => {
		let cur = ctx;
		for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
		return cur;
	};
}
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
	const targetSelector = props && props.to;
	if (isString$2(targetSelector)) if (!select) {
		warn$1$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
		return null;
	} else {
		const target = select(targetSelector);
		if (!target && !isTeleportDisabled(props)) warn$1$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
		return target;
	}
	else {
		if (!targetSelector && !isTeleportDisabled(props)) warn$1$1(`Invalid Teleport target: ${targetSelector}`);
		return targetSelector;
	}
};
var TeleportImpl = {
	name: "Teleport",
	__isTeleport: true,
	process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
		const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
		const disabled = isTeleportDisabled(n2.props);
		let { shapeFlag, children, dynamicChildren } = n2;
		if (isHmrUpdating) {
			optimized = false;
			dynamicChildren = null;
		}
		if (n1 == null) {
			const placeholder = n2.el = createComment("teleport start");
			const mainAnchor = n2.anchor = createComment("teleport end");
			insert(placeholder, container, anchor);
			insert(mainAnchor, container, anchor);
			const mount = (container2, anchor2) => {
				if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			};
			const mountToTarget = () => {
				const target = n2.target = resolveTarget(n2.props, querySelector);
				const targetAnchor = prepareAnchor(target, n2, createText, insert);
				if (target) {
					if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
					else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
					if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
					if (!disabled) {
						mount(target, targetAnchor);
						updateCssVars(n2, false);
					}
				} else if (!disabled) warn$1$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
			};
			if (disabled) {
				mount(container, mainAnchor);
				updateCssVars(n2, true);
			}
			if (isTeleportDeferred(n2.props)) {
				n2.el.__isMounted = false;
				queuePostRenderEffect(() => {
					mountToTarget();
					delete n2.el.__isMounted;
				}, parentSuspense);
			} else mountToTarget();
		} else {
			if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
				queuePostRenderEffect(() => {
					TeleportImpl.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
				}, parentSuspense);
				return;
			}
			n2.el = n1.el;
			n2.targetStart = n1.targetStart;
			const mainAnchor = n2.anchor = n1.anchor;
			const target = n2.target = n1.target;
			const targetAnchor = n2.targetAnchor = n1.targetAnchor;
			const wasDisabled = isTeleportDisabled(n1.props);
			const currentContainer = wasDisabled ? container : target;
			const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
			if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
			else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
			if (dynamicChildren) {
				patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
				traverseStaticChildren(n1, n2, false);
			} else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
			if (disabled) {
				if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
				else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
			} else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
				const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
				if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
				else warn$1$1("Invalid Teleport target on update:", target, `(${typeof target})`);
			} else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
			updateCssVars(n2, disabled);
		}
	},
	remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
		const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
		if (target) {
			hostRemove(targetStart);
			hostRemove(targetAnchor);
		}
		doRemove && hostRemove(anchor);
		if (shapeFlag & 16) {
			const shouldRemove = doRemove || !isTeleportDisabled(props);
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
			}
		}
	},
	move: moveTeleport,
	hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
	if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
	const { el, anchor, shapeFlag, children, props } = vnode;
	const isReorder = moveType === 2;
	if (isReorder) insert(el, container, parentAnchor);
	if (!isReorder || isTeleportDisabled(props)) {
		if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
	}
	if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
	function hydrateAnchor(target2, targetNode) {
		let targetAnchor = targetNode;
		while (targetAnchor) {
			if (targetAnchor && targetAnchor.nodeType === 8) {
				if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
				else if (targetAnchor.data === "teleport anchor") {
					vnode.targetAnchor = targetAnchor;
					target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
					break;
				}
			}
			targetAnchor = nextSibling(targetAnchor);
		}
	}
	function hydrateDisabledTeleport(node2, vnode2) {
		vnode2.anchor = hydrateChildren(nextSibling(node2), vnode2, parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
	}
	const target = vnode.target = resolveTarget(vnode.props, querySelector);
	const disabled = isTeleportDisabled(vnode.props);
	if (target) {
		const targetNode = target._lpa || target.firstChild;
		if (vnode.shapeFlag & 16) if (disabled) {
			hydrateDisabledTeleport(node, vnode);
			hydrateAnchor(target, targetNode);
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert, parentNode(node) === target ? node : null);
		} else {
			vnode.anchor = nextSibling(node);
			hydrateAnchor(target, targetNode);
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
			hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
		}
		updateCssVars(vnode, disabled);
	} else if (disabled) {
		if (vnode.shapeFlag & 16) {
			hydrateDisabledTeleport(node, vnode);
			vnode.targetStart = node;
			vnode.targetAnchor = nextSibling(node);
		}
	}
	return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
	const ctx = vnode.ctx;
	if (ctx && ctx.ut) {
		let node, anchor;
		if (isDisabled) {
			node = vnode.el;
			anchor = vnode.anchor;
		} else {
			node = vnode.targetStart;
			anchor = vnode.targetAnchor;
		}
		while (node && node !== anchor) {
			if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
			node = node.nextSibling;
		}
		ctx.ut();
	}
}
function prepareAnchor(target, vnode, createText, insert, anchor = null) {
	const targetStart = vnode.targetStart = createText("");
	const targetAnchor = vnode.targetAnchor = createText("");
	targetStart[TeleportEndKey] = targetAnchor;
	if (target) {
		insert(targetStart, target, anchor);
		insert(targetAnchor, target, anchor);
	}
	return targetAnchor;
}
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
var enterCbKey$1 = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
	const state = {
		isMounted: false,
		isLeaving: false,
		isUnmounting: false,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	onMounted(() => {
		state.isMounted = true;
	});
	onBeforeUnmount(() => {
		state.isUnmounting = true;
	});
	return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionPropsValidators = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: TransitionHookValidator,
	onEnter: TransitionHookValidator,
	onAfterEnter: TransitionHookValidator,
	onEnterCancelled: TransitionHookValidator,
	onBeforeLeave: TransitionHookValidator,
	onLeave: TransitionHookValidator,
	onAfterLeave: TransitionHookValidator,
	onLeaveCancelled: TransitionHookValidator,
	onBeforeAppear: TransitionHookValidator,
	onAppear: TransitionHookValidator,
	onAfterAppear: TransitionHookValidator,
	onAppearCancelled: TransitionHookValidator
};
var recursiveGetSubtree = (instance) => {
	const subTree = instance.subTree;
	return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
var BaseTransitionImpl = {
	name: `BaseTransition`,
	props: BaseTransitionPropsValidators,
	setup(props, { slots }) {
		const instance = getCurrentInstance();
		const state = useTransitionState();
		return () => {
			const children = slots.default && getTransitionRawChildren(slots.default(), true);
			if (!children || !children.length) return;
			const child = findNonCommentChild(children);
			const rawProps = /* @__PURE__ */ toRaw(props);
			const { mode } = rawProps;
			if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn$1$1(`invalid <transition> mode: ${mode}`);
			if (state.isLeaving) return emptyPlaceholder(child);
			const innerChild = getInnerChild$1(child);
			if (!innerChild) return emptyPlaceholder(child);
			let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance, (hooks) => enterHooks = hooks);
			if (innerChild.type !== Comment) setTransitionHooks(innerChild, enterHooks);
			let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
			if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
				let leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
				setTransitionHooks(oldInnerChild, leavingHooks);
				if (mode === "out-in" && innerChild.type !== Comment) {
					state.isLeaving = true;
					leavingHooks.afterLeave = () => {
						state.isLeaving = false;
						if (!(instance.job.flags & 8)) instance.update();
						delete leavingHooks.afterLeave;
						oldInnerChild = void 0;
					};
					return emptyPlaceholder(child);
				} else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
					const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
					leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
					el[leaveCbKey] = () => {
						earlyRemove();
						el[leaveCbKey] = void 0;
						delete enterHooks.delayedLeave;
						oldInnerChild = void 0;
					};
					enterHooks.delayedLeave = () => {
						delayedLeave();
						delete enterHooks.delayedLeave;
						oldInnerChild = void 0;
					};
				};
				else oldInnerChild = void 0;
			} else if (oldInnerChild) oldInnerChild = void 0;
			return child;
		};
	}
};
function findNonCommentChild(children) {
	let child = children[0];
	if (children.length > 1) {
		let hasFound = false;
		for (const c of children) if (c.type !== Comment) {
			if (hasFound) {
				warn$1$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
				break;
			}
			child = c;
			hasFound = true;
		}
	}
	return child;
}
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
	const { leavingVNodes } = state;
	let leavingVNodesCache = leavingVNodes.get(vnode.type);
	if (!leavingVNodesCache) {
		leavingVNodesCache = /* @__PURE__ */ Object.create(null);
		leavingVNodes.set(vnode.type, leavingVNodesCache);
	}
	return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
	const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
	const key = String(vnode.key);
	const leavingVNodesCache = getLeavingNodesForType(state, vnode);
	const callHook = (hook, args) => {
		hook && callWithAsyncErrorHandling(hook, instance, 9, args);
	};
	const callAsyncHook = (hook, args) => {
		const done = args[1];
		callHook(hook, args);
		if (isArray$3(hook)) {
			if (hook.every((hook2) => hook2.length <= 1)) done();
		} else if (hook.length <= 1) done();
	};
	const hooks = {
		mode,
		persisted,
		beforeEnter(el) {
			let hook = onBeforeEnter;
			if (!state.isMounted) if (appear) hook = onBeforeAppear || onBeforeEnter;
			else return;
			if (el[leaveCbKey]) el[leaveCbKey](true);
			const leavingVNode = leavingVNodesCache[key];
			if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
			callHook(hook, [el]);
		},
		enter(el) {
			if (leavingVNodesCache[key] === vnode) return;
			let hook = onEnter;
			let afterHook = onAfterEnter;
			let cancelHook = onEnterCancelled;
			if (!state.isMounted) if (appear) {
				hook = onAppear || onEnter;
				afterHook = onAfterAppear || onAfterEnter;
				cancelHook = onAppearCancelled || onEnterCancelled;
			} else return;
			let called = false;
			el[enterCbKey$1] = (cancelled) => {
				if (called) return;
				called = true;
				if (cancelled) callHook(cancelHook, [el]);
				else callHook(afterHook, [el]);
				if (hooks.delayedLeave) hooks.delayedLeave();
				el[enterCbKey$1] = void 0;
			};
			const done = el[enterCbKey$1].bind(null, false);
			if (hook) callAsyncHook(hook, [el, done]);
			else done();
		},
		leave(el, remove) {
			const key2 = String(vnode.key);
			if (el[enterCbKey$1]) el[enterCbKey$1](true);
			if (state.isUnmounting) return remove();
			callHook(onBeforeLeave, [el]);
			let called = false;
			el[leaveCbKey] = (cancelled) => {
				if (called) return;
				called = true;
				remove();
				if (cancelled) callHook(onLeaveCancelled, [el]);
				else callHook(onAfterLeave, [el]);
				el[leaveCbKey] = void 0;
				if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
			};
			const done = el[leaveCbKey].bind(null, false);
			leavingVNodesCache[key2] = vnode;
			if (onLeave) callAsyncHook(onLeave, [el, done]);
			else done();
		},
		clone(vnode2) {
			const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
			if (postClone) postClone(hooks2);
			return hooks2;
		}
	};
	return hooks;
}
function emptyPlaceholder(vnode) {
	if (isKeepAlive(vnode)) {
		vnode = cloneVNode(vnode);
		vnode.children = null;
		return vnode;
	}
}
function getInnerChild$1(vnode) {
	if (!isKeepAlive(vnode)) {
		if (isTeleport(vnode.type) && vnode.children) return findNonCommentChild(vnode.children);
		return vnode;
	}
	if (vnode.component) return vnode.component.subTree;
	const { shapeFlag, children } = vnode;
	if (children) {
		if (shapeFlag & 16) return children[0];
		if (shapeFlag & 32 && isFunction$1(children.default)) return children.default();
	}
}
function setTransitionHooks(vnode, hooks) {
	if (vnode.shapeFlag & 6 && vnode.component) {
		vnode.transition = hooks;
		setTransitionHooks(vnode.component.subTree, hooks);
	} else if (vnode.shapeFlag & 128) {
		vnode.ssContent.transition = hooks.clone(vnode.ssContent);
		vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
	} else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
	let ret = [];
	let keyedFragmentCount = 0;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
		if (child.type === Fragment) {
			if (child.patchFlag & 128) keyedFragmentCount++;
			ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
		} else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, { key }) : child);
	}
	if (keyedFragmentCount > 1) for (let i = 0; i < ret.length; i++) ret[i].patchFlag = -2;
	return ret;
}
/* @__NO_SIDE_EFFECTS__ */
function defineComponent(options, extraOptions) {
	return isFunction$1(options) ? extend({ name: options.name }, extraOptions, { setup: options }) : options;
}
function useId() {
	const i = getCurrentInstance();
	if (i) return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
	else warn$1$1(`useId() is called when there is no active component instance to be associated with.`);
	return "";
}
function markAsyncBoundary(instance) {
	instance.ids = [
		instance.ids[0] + instance.ids[2]++ + "-",
		0,
		0
	];
}
var knownTemplateRefs = /* @__PURE__ */ new WeakSet();
function isTemplateRefKey(refs, key) {
	let desc;
	return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
	if (isArray$3(rawRef)) {
		rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$3(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
		return;
	}
	if (isAsyncWrapper(vnode) && !isUnmount) {
		if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
		return;
	}
	const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
	const value = isUnmount ? null : refValue;
	const { i: owner, r: ref } = rawRef;
	if (!owner) {
		warn$1$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
		return;
	}
	const oldRef = oldRawRef && oldRawRef.r;
	const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	const setupState = owner.setupState;
	const rawSetupState = /* @__PURE__ */ toRaw(setupState);
	const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
		if (hasOwn(rawSetupState, key) && !/* @__PURE__ */ isRef(rawSetupState[key])) warn$1$1(`Template ref "${key}" used on a non-ref value. It will not work in the production build.`);
		if (knownTemplateRefs.has(rawSetupState[key])) return false;
		if (isTemplateRefKey(refs, key)) return false;
		return hasOwn(rawSetupState, key);
	};
	const canSetRef = (ref2, key) => {
		if (knownTemplateRefs.has(ref2)) return false;
		if (key && isTemplateRefKey(refs, key)) return false;
		return true;
	};
	if (oldRef != null && oldRef !== ref) {
		invalidatePendingSetRef(oldRawRef);
		if (isString$2(oldRef)) {
			refs[oldRef] = null;
			if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
		} else if (/* @__PURE__ */ isRef(oldRef)) {
			const oldRawRefAtom = oldRawRef;
			if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
			if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
		}
	}
	if (isFunction$1(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
	else {
		const _isString = isString$2(ref);
		const _isRef = /* @__PURE__ */ isRef(ref);
		if (_isString || _isRef) {
			const doSet = () => {
				if (rawRef.f) {
					const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
					if (isUnmount) isArray$3(existing) && remove(existing, refValue);
					else if (!isArray$3(existing)) if (_isString) {
						refs[ref] = [refValue];
						if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
					} else {
						const newVal = [refValue];
						if (canSetRef(ref, rawRef.k)) ref.value = newVal;
						if (rawRef.k) refs[rawRef.k] = newVal;
					}
					else if (!existing.includes(refValue)) existing.push(refValue);
				} else if (_isString) {
					refs[ref] = value;
					if (canSetSetupRef(ref)) setupState[ref] = value;
				} else if (_isRef) {
					if (canSetRef(ref, rawRef.k)) ref.value = value;
					if (rawRef.k) refs[rawRef.k] = value;
				} else warn$1$1("Invalid template ref type:", ref, `(${typeof ref})`);
			};
			if (value) {
				const job = () => {
					doSet();
					pendingSetRefMap.delete(rawRef);
				};
				job.id = -1;
				pendingSetRefMap.set(rawRef, job);
				queuePostRenderEffect(job, parentSuspense);
			} else {
				invalidatePendingSetRef(rawRef);
				doSet();
			}
		} else warn$1$1("Invalid template ref type:", ref, `(${typeof ref})`);
	}
}
function invalidatePendingSetRef(rawRef) {
	const pendingSetRef = pendingSetRefMap.get(rawRef);
	if (pendingSetRef) {
		pendingSetRef.flags |= 8;
		pendingSetRefMap.delete(rawRef);
	}
}
var hasLoggedMismatchError = false;
var logMismatchError = () => {
	if (hasLoggedMismatchError) return;
	console.error("Hydration completed but contains mismatches.");
	hasLoggedMismatchError = true;
};
var isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
var isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
var getContainerType = (container) => {
	if (container.nodeType !== 1) return void 0;
	if (isSVGContainer(container)) return "svg";
	if (isMathMLContainer(container)) return "mathml";
};
var isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
	const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
	const hydrate = (vnode, container) => {
		if (!container.hasChildNodes()) {
			warn$1$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
			patch(null, vnode, container);
			flushPostFlushCbs();
			container._vnode = vnode;
			return;
		}
		hydrateNode(container.firstChild, vnode, null, null, null);
		flushPostFlushCbs();
		container._vnode = vnode;
	};
	const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
		optimized = optimized || !!vnode.dynamicChildren;
		const isFragmentStart = isComment(node) && node.data === "[";
		const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
		const { type, ref, shapeFlag, patchFlag } = vnode;
		let domType = node.nodeType;
		vnode.el = node;
		def(node, "__vnode", vnode, true);
		def(node, "__vueParentComponent", parentComponent, true);
		if (patchFlag === -2) {
			optimized = false;
			vnode.dynamicChildren = null;
		}
		let nextNode = null;
		switch (type) {
			case Text:
				if (domType !== 3) if (vnode.children === "") {
					insert(vnode.el = createText(""), parentNode(node), node);
					nextNode = node;
				} else nextNode = onMismatch();
				else {
					if (node.data !== vnode.children) {
						warn$1$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
						logMismatchError();
						node.data = vnode.children;
					}
					nextNode = nextSibling(node);
				}
				break;
			case Comment:
				if (isTemplateNode(node)) {
					nextNode = nextSibling(node);
					replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
				} else if (domType !== 8 || isFragmentStart) nextNode = onMismatch();
				else nextNode = nextSibling(node);
				break;
			case Static:
				if (isFragmentStart) {
					node = nextSibling(node);
					domType = node.nodeType;
				}
				if (domType === 1 || domType === 3) {
					nextNode = node;
					const needToAdoptContent = !vnode.children.length;
					for (let i = 0; i < vnode.staticCount; i++) {
						if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
						if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
						nextNode = nextSibling(nextNode);
					}
					return isFragmentStart ? nextSibling(nextNode) : nextNode;
				} else onMismatch();
				break;
			case Fragment:
				if (!isFragmentStart) nextNode = onMismatch();
				else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
			else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
			else if (shapeFlag & 6) {
				vnode.slotScopeIds = slotScopeIds;
				const container = parentNode(node);
				if (isFragmentStart) nextNode = locateClosingAnchor(node);
				else if (isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
				else nextNode = nextSibling(node);
				mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
				if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
					let subTree;
					if (isFragmentStart) {
						subTree = createVNode(Fragment);
						subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
					} else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
					subTree.el = node;
					vnode.component.subTree = subTree;
				}
			} else if (shapeFlag & 64) if (domType !== 8) nextNode = onMismatch();
			else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
			else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
			else warn$1$1("Invalid HostVNode type:", type, `(${typeof type})`);
		}
		if (ref != null) setRef(ref, null, parentSuspense, vnode);
		return nextNode;
	};
	const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
		optimized = optimized || !!vnode.dynamicChildren;
		const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
		const forcePatch = type === "input" || type === "option";
		{
			if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
			let needCallTransitionHooks = false;
			if (isTemplateNode(el)) {
				needCallTransitionHooks = needTransition(null, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
				const content = el.content.firstChild;
				if (needCallTransitionHooks) {
					const cls = content.getAttribute("class");
					if (cls) content.$cls = cls;
					transition.beforeEnter(content);
				}
				replaceNode(content, el, parentComponent);
				vnode.el = el = content;
			}
			if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
				let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
				let hasWarned = false;
				while (next) {
					if (!isMismatchAllowed(el, 1)) {
						if (!hasWarned) {
							warn$1$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
							hasWarned = true;
						}
						logMismatchError();
					}
					const cur = next;
					next = next.nextSibling;
					remove(cur);
				}
			} else if (shapeFlag & 8) {
				let clientText = vnode.children;
				if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) clientText = clientText.slice(1);
				const { textContent } = el;
				if (textContent !== clientText && textContent !== clientText.replace(/\r\n|\r/g, "\n")) {
					if (!isMismatchAllowed(el, 0)) {
						warn$1$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${textContent}
  - expected on client: ${clientText}`);
						logMismatchError();
					}
					el.textContent = vnode.children;
				}
			}
			if (props) {
				const isCustomElement = el.tagName.includes("-");
				for (const key in props) {
					if (!(dirs && dirs.some((d) => d.dir.created)) && propHasMismatch(el, key, props[key], vnode, parentComponent)) logMismatchError();
					if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || key[0] === "." || isCustomElement && !isReservedProp(key)) patchProp(el, key, null, props[key], void 0, parentComponent);
				}
			}
			let vnodeHooks;
			if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
			if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
			if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) queueEffectWithSuspense(() => {
				vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
				needCallTransitionHooks && transition.enter(el);
				dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
			}, parentSuspense);
		}
		return el.nextSibling;
	};
	const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
		optimized = optimized || !!parentVNode.dynamicChildren;
		const children = parentVNode.children;
		const l = children.length;
		let hasWarned = false;
		for (let i = 0; i < l; i++) {
			const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
			const isText = vnode.type === Text;
			if (node) {
				if (isText && !optimized) {
					if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
						insert(createText(node.data.slice(vnode.children.length)), container, nextSibling(node));
						node.data = vnode.children;
					}
				}
				node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
			} else if (isText && !vnode.children) insert(vnode.el = createText(""), container);
			else {
				if (!isMismatchAllowed(container, 1)) {
					if (!hasWarned) {
						warn$1$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
						hasWarned = true;
					}
					logMismatchError();
				}
				patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
			}
		}
		return node;
	};
	const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
		const { slotScopeIds: fragmentSlotScopeIds } = vnode;
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		const container = parentNode(node);
		const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
		if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
		else {
			logMismatchError();
			insert(vnode.anchor = createComment(`]`), container, next);
			return next;
		}
	};
	const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
		if (!isMismatchAllowed(node.parentElement, 1)) {
			warn$1$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
			logMismatchError();
		}
		vnode.el = null;
		if (isFragment) {
			const end = locateClosingAnchor(node);
			while (true) {
				const next2 = nextSibling(node);
				if (next2 && next2 !== end) remove(next2);
				else break;
			}
		}
		const next = nextSibling(node);
		const container = parentNode(node);
		remove(node);
		patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
		if (parentComponent) {
			parentComponent.vnode.el = vnode.el;
			updateHOCHostEl(parentComponent, vnode.el);
		}
		return next;
	};
	const locateClosingAnchor = (node, open = "[", close = "]") => {
		let match = 0;
		while (node) {
			node = nextSibling(node);
			if (node && isComment(node)) {
				if (node.data === open) match++;
				if (node.data === close) if (match === 0) return nextSibling(node);
				else match--;
			}
		}
		return node;
	};
	const replaceNode = (newNode, oldNode, parentComponent) => {
		const parentNode2 = oldNode.parentNode;
		if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
		let parent = parentComponent;
		while (parent) {
			if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
			parent = parent.parent;
		}
	};
	const isTemplateNode = (node) => {
		return node.nodeType === 1 && node.tagName === "TEMPLATE";
	};
	return [hydrate, hydrateNode];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
	let mismatchType;
	let mismatchKey;
	let actual;
	let expected;
	if (key === "class") {
		if (el.$cls) {
			actual = el.$cls;
			delete el.$cls;
		} else actual = el.getAttribute("class");
		expected = normalizeClass(clientValue);
		if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
			mismatchType = 2;
			mismatchKey = `class`;
		}
	} else if (key === "style") {
		actual = el.getAttribute("style") || "";
		expected = isString$2(clientValue) ? clientValue : stringifyStyle(normalizeStyle(clientValue));
		const actualMap = toStyleMap(actual);
		const expectedMap = toStyleMap(expected);
		if (vnode.dirs) {
			for (const { dir, value } of vnode.dirs) if (dir.name === "show" && !value) expectedMap.set("display", "none");
		}
		if (instance) resolveCssVars(instance, vnode, expectedMap);
		if (!isMapEqual(actualMap, expectedMap)) {
			mismatchType = 3;
			mismatchKey = "style";
		}
	} else if (el instanceof SVGElement && isKnownSvgAttr(key) || el instanceof HTMLElement && (isBooleanAttr(key) || isKnownHtmlAttr(key))) {
		if (isBooleanAttr(key)) {
			actual = el.hasAttribute(key);
			expected = includeBooleanAttr(clientValue);
		} else if (clientValue == null) {
			actual = el.hasAttribute(key);
			expected = false;
		} else {
			if (el.hasAttribute(key)) actual = el.getAttribute(key);
			else if (key === "value" && el.tagName === "TEXTAREA") actual = el.value;
			else actual = false;
			expected = isRenderableAttrValue(clientValue) ? String(clientValue) : false;
		}
		if (actual !== expected) {
			mismatchType = 4;
			mismatchKey = key;
		}
	}
	if (mismatchType != null && !isMismatchAllowed(el, mismatchType)) {
		const format = (v) => v === false ? `(not rendered)` : `${mismatchKey}="${v}"`;
		warn$1$1(`Hydration ${MismatchTypeString[mismatchType]} mismatch on`, el, `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`);
		return true;
	}
	return false;
}
function toClassSet(str) {
	return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
	if (a.size !== b.size) return false;
	for (const s of a) if (!b.has(s)) return false;
	return true;
}
function toStyleMap(str) {
	const styleMap = /* @__PURE__ */ new Map();
	for (const item of str.split(";")) {
		let [key, value] = item.split(":");
		key = key.trim();
		value = value && value.trim();
		if (key && value) styleMap.set(key, value);
	}
	return styleMap;
}
function isMapEqual(a, b) {
	if (a.size !== b.size) return false;
	for (const [key, value] of a) if (value !== b.get(key)) return false;
	return true;
}
function resolveCssVars(instance, vnode, expectedMap) {
	const root = instance.subTree;
	if (instance.getCssVars && (vnode === root || root && root.type === Fragment && root.children.includes(vnode))) {
		const cssVars = instance.getCssVars();
		for (const key in cssVars) {
			const value = normalizeCssVarValue(cssVars[key]);
			expectedMap.set(`--${getEscapedCssVarName(key, false)}`, value);
		}
	}
	if (vnode === root && instance.parent) resolveCssVars(instance.parent, instance.vnode, expectedMap);
}
var allowMismatchAttr = "data-allow-mismatch";
var MismatchTypeString = {
	[0]: "text",
	[1]: "children",
	[2]: "class",
	[3]: "style",
	[4]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
	if (allowedType === 0 || allowedType === 1) while (el && !el.hasAttribute(allowMismatchAttr)) el = el.parentElement;
	const allowedAttr = el && el.getAttribute(allowMismatchAttr);
	if (allowedAttr == null) return false;
	else if (allowedAttr === "") return true;
	else {
		const list = allowedAttr.split(",");
		if (allowedType === 0 && list.includes("children")) return true;
		return list.includes(MismatchTypeString[allowedType]);
	}
}
getGlobalThis().requestIdleCallback;
getGlobalThis().cancelIdleCallback;
function forEachElement(node, cb) {
	if (isComment(node) && node.data === "[") {
		let depth = 1;
		let next = node.nextSibling;
		while (next) {
			if (next.nodeType === 1) {
				if (cb(next) === false) break;
			} else if (isComment(next)) {
				if (next.data === "]") {
					if (--depth === 0) break;
				} else if (next.data === "[") depth++;
			}
			next = next.nextSibling;
		}
	} else cb(node);
}
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/* @__NO_SIDE_EFFECTS__ */
function defineAsyncComponent(source) {
	if (isFunction$1(source)) source = { loader: source };
	const { loader, loadingComponent, errorComponent, delay = 200, hydrate: hydrateStrategy, timeout, suspensible = true, onError: userOnError } = source;
	let pendingRequest = null;
	let resolvedComp;
	let retries = 0;
	const retry = () => {
		retries++;
		pendingRequest = null;
		return load();
	};
	const load = () => {
		let thisRequest;
		return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
			err = err instanceof Error ? err : new Error(String(err));
			if (userOnError) return new Promise((resolve, reject) => {
				const userRetry = () => resolve(retry());
				const userFail = () => reject(err);
				userOnError(err, userRetry, userFail, retries + 1);
			});
			else throw err;
		}).then((comp) => {
			if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
			if (!comp) warn$1$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
			if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
			if (comp && !isObject$1(comp) && !isFunction$1(comp)) throw new Error(`Invalid async component load result: ${comp}`);
			resolvedComp = comp;
			return comp;
		}));
	};
	return /* @__PURE__ */ defineComponent({
		name: "AsyncComponentWrapper",
		__asyncLoader: load,
		__asyncHydrate(el, instance, hydrate) {
			let patched = false;
			(instance.bu || (instance.bu = [])).push(() => patched = true);
			const performHydrate = () => {
				if (patched) {
					warn$1$1(`Skipping lazy hydration for component '${getComponentName(resolvedComp) || resolvedComp.__file}': it was updated before lazy hydration performed.`);
					return;
				}
				hydrate();
			};
			const doHydrate = hydrateStrategy ? () => {
				const teardown = hydrateStrategy(performHydrate, (cb) => forEachElement(el, cb));
				if (teardown) (instance.bum || (instance.bum = [])).push(teardown);
			} : performHydrate;
			if (resolvedComp) doHydrate();
			else load().then(() => !instance.isUnmounted && doHydrate());
		},
		get __asyncResolved() {
			return resolvedComp;
		},
		setup() {
			const instance = currentInstance;
			markAsyncBoundary(instance);
			if (resolvedComp) return () => createInnerComp(resolvedComp, instance);
			const onError = (err) => {
				pendingRequest = null;
				handleError(err, instance, 13, !errorComponent);
			};
			if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp) => {
				return () => createInnerComp(comp, instance);
			}).catch((err) => {
				onError(err);
				return () => errorComponent ? createVNode(errorComponent, { error: err }) : null;
			});
			const loaded = /* @__PURE__ */ ref(false);
			const error = /* @__PURE__ */ ref();
			const delayed = /* @__PURE__ */ ref(!!delay);
			if (delay) setTimeout(() => {
				delayed.value = false;
			}, delay);
			if (timeout != null) setTimeout(() => {
				if (!loaded.value && !error.value) {
					const err = /* @__PURE__ */ new Error(`Async component timed out after ${timeout}ms.`);
					onError(err);
					error.value = err;
				}
			}, timeout);
			load().then(() => {
				loaded.value = true;
				if (instance.parent && isKeepAlive(instance.parent.vnode)) instance.parent.update();
			}).catch((err) => {
				onError(err);
				error.value = err;
			});
			return () => {
				if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
				else if (error.value && errorComponent) return createVNode(errorComponent, { error: error.value });
				else if (loadingComponent && !delayed.value) return createInnerComp(loadingComponent, instance);
			};
		}
	});
}
function createInnerComp(comp, parent) {
	const { ref: ref2, props, children, ce } = parent.vnode;
	const vnode = createVNode(comp, props, children);
	vnode.ref = ref2;
	vnode.ce = ce;
	delete parent.vnode.ce;
	return vnode;
}
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
	registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
	registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
	const wrappedHook = hook.__wdc || (hook.__wdc = () => {
		let current = target;
		while (current) {
			if (current.isDeactivated) return;
			current = current.parent;
		}
		return hook();
	});
	injectHook(type, wrappedHook, target);
	if (target) {
		let current = target.parent;
		while (current && current.parent) {
			if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
			current = current.parent;
		}
	}
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	const injected = injectHook(type, hook, keepAliveRoot, true);
	onUnmounted(() => {
		remove(keepAliveRoot[type], injected);
	}, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
	if (target) {
		const hooks = target[type] || (target[type] = []);
		const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
			pauseTracking();
			const reset = setCurrentInstance(target);
			const res = callWithAsyncErrorHandling(hook, target, type, args);
			reset();
			resetTracking();
			return res;
		});
		if (prepend) hooks.unshift(wrappedHook);
		else hooks.push(wrappedHook);
		return wrappedHook;
	} else warn$1$1(`${toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
	if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
	injectHook("ec", hook, target);
}
var COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
	return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
	const instance = currentRenderingInstance || currentInstance;
	if (instance) {
		const Component = instance.type;
		if (type === COMPONENTS) {
			const selfName = getComponentName(Component, false);
			if (selfName && (selfName === name || selfName === camelize$1(name) || selfName === capitalize(camelize$1(name)))) return Component;
		}
		const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
		if (!res && maybeSelfReference) return Component;
		if (warnMissing && !res) {
			const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
			warn$1$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
		}
		return res;
	} else warn$1$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
}
function resolve(registry, name) {
	return registry && (registry[name] || registry[camelize$1(name)] || registry[capitalize(camelize$1(name))]);
}
var getPublicInstance = (i) => {
	if (!i) return null;
	if (isStatefulComponent(i)) return getComponentPublicInstance(i);
	return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	$: (i) => i,
	$el: (i) => i.vnode.el,
	$data: (i) => i.data,
	$props: (i) => /* @__PURE__ */ shallowReadonly(i.props),
	$attrs: (i) => /* @__PURE__ */ shallowReadonly(i.attrs),
	$slots: (i) => /* @__PURE__ */ shallowReadonly(i.slots),
	$refs: (i) => /* @__PURE__ */ shallowReadonly(i.refs),
	$parent: (i) => getPublicInstance(i.parent),
	$root: (i) => getPublicInstance(i.root),
	$host: (i) => i.ce,
	$emit: (i) => i.emit,
	$options: (i) => resolveMergedOptions(i),
	$forceUpdate: (i) => i.f || (i.f = () => {
		queueJob(i.update);
	}),
	$nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
	$watch: (i) => instanceWatch.bind(i)
});
var isReservedPrefix = (key) => key === "_" || key === "$";
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
	get({ _: instance }, key) {
		if (key === "__v_skip") return true;
		const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
		if (key === "__isVue") return true;
		if (key[0] !== "$") {
			const n = accessCache[key];
			if (n !== void 0) switch (n) {
				case 1: return setupState[key];
				case 2: return data[key];
				case 4: return ctx[key];
				case 3: return props[key];
			}
			else if (hasSetupBinding(setupState, key)) {
				accessCache[key] = 1;
				return setupState[key];
			} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
				accessCache[key] = 2;
				return data[key];
			} else if (hasOwn(props, key)) {
				accessCache[key] = 3;
				return props[key];
			} else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
				accessCache[key] = 4;
				return ctx[key];
			} else if (shouldCacheAccess) accessCache[key] = 0;
		}
		const publicGetter = publicPropertiesMap[key];
		let cssModule, globalProperties;
		if (publicGetter) {
			if (key === "$attrs") {
				track(instance.attrs, "get", "");
				markAttrsAccessed();
			} else if (key === "$slots") track(instance, "get", key);
			return publicGetter(instance);
		} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
		else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
			accessCache[key] = 4;
			return ctx[key];
		} else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
		else if (currentRenderingInstance && (!isString$2(key) || key.indexOf("__v") !== 0)) {
			if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) warn$1$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
			else if (instance === currentRenderingInstance) warn$1$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
		}
	},
	set({ _: instance }, key, value) {
		const { data, setupState, ctx } = instance;
		if (hasSetupBinding(setupState, key)) {
			setupState[key] = value;
			return true;
		} else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
			warn$1$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
			return false;
		} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
			data[key] = value;
			return true;
		} else if (hasOwn(instance.props, key)) {
			warn$1$1(`Attempting to mutate prop "${key}". Props are readonly.`);
			return false;
		}
		if (key[0] === "$" && key.slice(1) in instance) {
			warn$1$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
			return false;
		} else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			value
		});
		else ctx[key] = value;
		return true;
	},
	has({ _: { data, setupState, accessCache, ctx, appContext, props, type } }, key) {
		let cssModules;
		return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
	},
	defineProperty(target, key, descriptor) {
		if (descriptor.get != null) target._.accessCache[key] = 0;
		else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
		return Reflect.defineProperty(target, key, descriptor);
	}
};
PublicInstanceProxyHandlers.ownKeys = (target) => {
	warn$1$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
	return Reflect.ownKeys(target);
};
function createDevRenderContext(instance) {
	const target = {};
	Object.defineProperty(target, `_`, {
		configurable: true,
		enumerable: false,
		get: () => instance
	});
	Object.keys(publicPropertiesMap).forEach((key) => {
		Object.defineProperty(target, key, {
			configurable: true,
			enumerable: false,
			get: () => publicPropertiesMap[key](instance),
			set: NOOP
		});
	});
	return target;
}
function exposePropsOnRenderContext(instance) {
	const { ctx, propsOptions: [propsOptions] } = instance;
	if (propsOptions) Object.keys(propsOptions).forEach((key) => {
		Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => instance.props[key],
			set: NOOP
		});
	});
}
function exposeSetupStateOnRenderContext(instance) {
	const { ctx, setupState } = instance;
	Object.keys(/* @__PURE__ */ toRaw(setupState)).forEach((key) => {
		if (!setupState.__isScriptSetup) {
			if (isReservedPrefix(key[0])) {
				warn$1$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
				return;
			}
			Object.defineProperty(ctx, key, {
				enumerable: true,
				configurable: true,
				get: () => setupState[key],
				set: NOOP
			});
		}
	});
}
function normalizePropsOrEmits(props) {
	return isArray$3(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
function createDuplicateChecker() {
	const cache = /* @__PURE__ */ Object.create(null);
	return (type, key) => {
		if (cache[key]) warn$1$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
		else cache[key] = type;
	};
}
var shouldCacheAccess = true;
function applyOptions(instance) {
	const options = resolveMergedOptions(instance);
	const publicThis = instance.proxy;
	const ctx = instance.ctx;
	shouldCacheAccess = false;
	if (options.beforeCreate) callHook$1(options.beforeCreate, instance, "bc");
	const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
	const checkDuplicateProperties = createDuplicateChecker();
	{
		const [propsOptions] = instance.propsOptions;
		if (propsOptions) for (const key in propsOptions) checkDuplicateProperties("Props", key);
	}
	if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	if (methods) for (const key in methods) {
		const methodHandler = methods[key];
		if (isFunction$1(methodHandler)) {
			Object.defineProperty(ctx, key, {
				value: methodHandler.bind(publicThis),
				configurable: true,
				enumerable: true,
				writable: true
			});
			checkDuplicateProperties("Methods", key);
		} else warn$1$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
	}
	if (dataOptions) {
		if (!isFunction$1(dataOptions)) warn$1$1(`The data option must be a function. Plain object usage is no longer supported.`);
		const data = dataOptions.call(publicThis, publicThis);
		if (isPromise(data)) warn$1$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
		if (!isObject$1(data)) warn$1$1(`data() should return an object.`);
		else {
			instance.data = /* @__PURE__ */ reactive(data);
			for (const key in data) {
				checkDuplicateProperties("Data", key);
				if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
					configurable: true,
					enumerable: true,
					get: () => data[key],
					set: NOOP
				});
			}
		}
	}
	shouldCacheAccess = true;
	if (computedOptions) for (const key in computedOptions) {
		const opt = computedOptions[key];
		const get = isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
		if (get === NOOP) warn$1$1(`Computed property "${key}" has no getter.`);
		const c = computed({
			get,
			set: !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : () => {
				warn$1$1(`Write operation failed: computed property "${key}" is readonly.`);
			}
		});
		Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => c.value,
			set: (v) => c.value = v
		});
		checkDuplicateProperties("Computed", key);
	}
	if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
	if (provideOptions) {
		const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
		Reflect.ownKeys(provides).forEach((key) => {
			provide(key, provides[key]);
		});
	}
	if (created) callHook$1(created, instance, "c");
	function registerLifecycleHook(register, hook) {
		if (isArray$3(hook)) hook.forEach((_hook) => register(_hook.bind(publicThis)));
		else if (hook) register(hook.bind(publicThis));
	}
	registerLifecycleHook(onBeforeMount, beforeMount);
	registerLifecycleHook(onMounted, mounted);
	registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	registerLifecycleHook(onUpdated, updated);
	registerLifecycleHook(onActivated, activated);
	registerLifecycleHook(onDeactivated, deactivated);
	registerLifecycleHook(onErrorCaptured, errorCaptured);
	registerLifecycleHook(onRenderTracked, renderTracked);
	registerLifecycleHook(onRenderTriggered, renderTriggered);
	registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	registerLifecycleHook(onUnmounted, unmounted);
	registerLifecycleHook(onServerPrefetch, serverPrefetch);
	if (isArray$3(expose)) {
		if (expose.length) {
			const exposed = instance.exposed || (instance.exposed = {});
			expose.forEach((key) => {
				Object.defineProperty(exposed, key, {
					get: () => publicThis[key],
					set: (val) => publicThis[key] = val,
					enumerable: true
				});
			});
		} else if (!instance.exposed) instance.exposed = {};
	}
	if (render && instance.render === NOOP) instance.render = render;
	if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
	if (components) instance.components = components;
	if (directives) instance.directives = directives;
	if (serverPrefetch) markAsyncBoundary(instance);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
	if (isArray$3(injectOptions)) injectOptions = normalizeInject(injectOptions);
	for (const key in injectOptions) {
		const opt = injectOptions[key];
		let injected;
		if (isObject$1(opt)) if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
		else injected = inject(opt.from || key);
		else injected = inject(opt);
		if (/* @__PURE__ */ isRef(injected)) Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => injected.value,
			set: (v) => injected.value = v
		});
		else ctx[key] = injected;
		checkDuplicateProperties("Inject", key);
	}
}
function callHook$1(hook, instance, type) {
	callWithAsyncErrorHandling(isArray$3(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
	let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
	if (isString$2(raw)) {
		const handler = ctx[raw];
		if (isFunction$1(handler)) watch(getter, handler);
		else warn$1$1(`Invalid watch handler specified by key "${raw}"`, handler);
	} else if (isFunction$1(raw)) watch(getter, raw.bind(publicThis));
	else if (isObject$1(raw)) if (isArray$3(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
	else {
		const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
		if (isFunction$1(handler)) watch(getter, handler, raw);
		else warn$1$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
	}
	else warn$1$1(`Invalid watch option: "${key}"`, raw);
}
function resolveMergedOptions(instance) {
	const base = instance.type;
	const { mixins, extends: extendsOptions } = base;
	const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
	const cached = cache.get(base);
	let resolved;
	if (cached) resolved = cached;
	else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
	else {
		resolved = {};
		if (globalMixins.length) globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
		mergeOptions$1(resolved, base, optionMergeStrategies);
	}
	if (isObject$1(base)) cache.set(base, resolved);
	return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
	const { mixins, extends: extendsOptions } = from;
	if (extendsOptions) mergeOptions$1(to, extendsOptions, strats, true);
	if (mixins) mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
	for (const key in from) if (asMixin && key === "expose") warn$1$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
	else {
		const strat = internalOptionMergeStrats[key] || strats && strats[key];
		to[key] = strat ? strat(to[key], from[key]) : from[key];
	}
	return to;
}
var internalOptionMergeStrats = {
	data: mergeDataFn,
	props: mergeEmitsOrPropsOptions,
	emits: mergeEmitsOrPropsOptions,
	methods: mergeObjectOptions,
	computed: mergeObjectOptions,
	beforeCreate: mergeAsArray,
	created: mergeAsArray,
	beforeMount: mergeAsArray,
	mounted: mergeAsArray,
	beforeUpdate: mergeAsArray,
	updated: mergeAsArray,
	beforeDestroy: mergeAsArray,
	beforeUnmount: mergeAsArray,
	destroyed: mergeAsArray,
	unmounted: mergeAsArray,
	activated: mergeAsArray,
	deactivated: mergeAsArray,
	errorCaptured: mergeAsArray,
	serverPrefetch: mergeAsArray,
	components: mergeObjectOptions,
	directives: mergeObjectOptions,
	watch: mergeWatchOptions,
	provide: mergeDataFn,
	inject: mergeInject
};
function mergeDataFn(to, from) {
	if (!from) return to;
	if (!to) return from;
	return function mergedDataFn() {
		return extend(isFunction$1(to) ? to.call(this, this) : to, isFunction$1(from) ? from.call(this, this) : from);
	};
}
function mergeInject(to, from) {
	return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
	if (isArray$3(raw)) {
		const res = {};
		for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
		return res;
	}
	return raw;
}
function mergeAsArray(to, from) {
	return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
	return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
	if (to) {
		if (isArray$3(to) && isArray$3(from)) return [.../* @__PURE__ */ new Set([...to, ...from])];
		return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
	} else return from;
}
function mergeWatchOptions(to, from) {
	if (!to) return from;
	if (!from) return to;
	const merged = extend(/* @__PURE__ */ Object.create(null), to);
	for (const key in from) merged[key] = mergeAsArray(to[key], from[key]);
	return merged;
}
function createAppContext() {
	return {
		app: null,
		config: {
			isNativeTag: NO,
			performance: false,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
	return function createApp(rootComponent, rootProps = null) {
		if (!isFunction$1(rootComponent)) rootComponent = extend({}, rootComponent);
		if (rootProps != null && !isObject$1(rootProps)) {
			warn$1$1(`root props passed to app.mount() must be an object.`);
			rootProps = null;
		}
		const context = createAppContext();
		const installedPlugins = /* @__PURE__ */ new WeakSet();
		const pluginCleanupFns = [];
		let isMounted = false;
		const app = context.app = {
			_uid: uid$1++,
			_component: rootComponent,
			_props: rootProps,
			_container: null,
			_context: context,
			_instance: null,
			version,
			get config() {
				return context.config;
			},
			set config(v) {
				warn$1$1(`app.config cannot be replaced. Modify individual options instead.`);
			},
			use(plugin, ...options) {
				if (installedPlugins.has(plugin)) warn$1$1(`Plugin has already been applied to target app.`);
				else if (plugin && isFunction$1(plugin.install)) {
					installedPlugins.add(plugin);
					plugin.install(app, ...options);
				} else if (isFunction$1(plugin)) {
					installedPlugins.add(plugin);
					plugin(app, ...options);
				} else warn$1$1(`A plugin must either be a function or an object with an "install" function.`);
				return app;
			},
			mixin(mixin) {
				if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
				else warn$1$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
				return app;
			},
			component(name, component) {
				validateComponentName(name, context.config);
				if (!component) return context.components[name];
				if (context.components[name]) warn$1$1(`Component "${name}" has already been registered in target app.`);
				context.components[name] = component;
				return app;
			},
			directive(name, directive) {
				validateDirectiveName(name);
				if (!directive) return context.directives[name];
				if (context.directives[name]) warn$1$1(`Directive "${name}" has already been registered in target app.`);
				context.directives[name] = directive;
				return app;
			},
			mount(rootContainer, isHydrate, namespace) {
				if (!isMounted) {
					if (rootContainer.__vue_app__) warn$1$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
					const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
					vnode.appContext = context;
					if (namespace === true) namespace = "svg";
					else if (namespace === false) namespace = void 0;
					context.reload = () => {
						const cloned = cloneVNode(vnode);
						cloned.el = null;
						render(cloned, rootContainer, namespace);
					};
					if (isHydrate && hydrate) hydrate(vnode, rootContainer);
					else render(vnode, rootContainer, namespace);
					isMounted = true;
					app._container = rootContainer;
					rootContainer.__vue_app__ = app;
					app._instance = vnode.component;
					devtoolsInitApp(app, version);
					return getComponentPublicInstance(vnode.component);
				} else warn$1$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
			},
			onUnmount(cleanupFn) {
				if (typeof cleanupFn !== "function") warn$1$1(`Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`);
				pluginCleanupFns.push(cleanupFn);
			},
			unmount() {
				if (isMounted) {
					callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
					render(null, app._container);
					app._instance = null;
					devtoolsUnmountApp(app);
					delete app._container.__vue_app__;
				} else warn$1$1(`Cannot unmount an app that is not mounted.`);
			},
			provide(key, value) {
				if (key in context.provides) if (hasOwn(context.provides, key)) warn$1$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
				else warn$1$1(`App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`);
				context.provides[key] = value;
				return app;
			},
			runWithContext(fn) {
				const lastApp = currentApp;
				currentApp = app;
				try {
					return fn();
				} finally {
					currentApp = lastApp;
				}
			}
		};
		return app;
	};
}
var currentApp = null;
var getModelModifiers = (props, modelName) => {
	return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize$1(modelName)}Modifiers`] || props[`${hyphenate$1(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
	if (instance.isUnmounted) return;
	const props = instance.vnode.props || EMPTY_OBJ;
	{
		const { emitsOptions, propsOptions: [propsOptions] } = instance;
		if (emitsOptions) if (!(event in emitsOptions) && true) {
			if (!propsOptions || !(toHandlerKey(camelize$1(event)) in propsOptions)) warn$1$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize$1(event))}" prop.`);
		} else {
			const validator = emitsOptions[event];
			if (isFunction$1(validator)) {
				if (!validator(...rawArgs)) warn$1$1(`Invalid event arguments: event validation failed for event "${event}".`);
			}
		}
	}
	let args = rawArgs;
	const isModelListener = event.startsWith("update:");
	const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
	if (modifiers) {
		if (modifiers.trim) args = rawArgs.map((a) => isString$2(a) ? a.trim() : a);
		if (modifiers.number) args = rawArgs.map(looseToNumber);
	}
	devtoolsComponentEmit(instance, event, args);
	{
		const lowerCaseEvent = event.toLowerCase();
		if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) warn$1$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate$1(event)}" instead of "${event}".`);
	}
	let handlerName;
	let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize$1(event))];
	if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate$1(event))];
	if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
	const onceHandler = props[handlerName + `Once`];
	if (onceHandler) {
		if (!instance.emitted) instance.emitted = {};
		else if (instance.emitted[handlerName]) return;
		instance.emitted[handlerName] = true;
		callWithAsyncErrorHandling(onceHandler, instance, 6, args);
	}
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
	const cached = cache.get(comp);
	if (cached !== void 0) return cached;
	const raw = comp.emits;
	let normalized = {};
	let hasExtends = false;
	if (!isFunction$1(comp)) {
		const extendEmits = (raw2) => {
			const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
			if (normalizedFromExtend) {
				hasExtends = true;
				extend(normalized, normalizedFromExtend);
			}
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
		if (comp.extends) extendEmits(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendEmits);
	}
	if (!raw && !hasExtends) {
		if (isObject$1(comp)) cache.set(comp, null);
		return null;
	}
	if (isArray$3(raw)) raw.forEach((key) => normalized[key] = null);
	else extend(normalized, raw);
	if (isObject$1(comp)) cache.set(comp, normalized);
	return normalized;
}
function isEmitListener(options, key) {
	if (!options || !isOn(key)) return false;
	key = key.slice(2).replace(/Once$/, "");
	return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate$1(key)) || hasOwn(options, key);
}
var accessedAttrs = false;
function markAttrsAccessed() {
	accessedAttrs = true;
}
function renderComponentRoot(instance) {
	const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
	const prev = setCurrentRenderingInstance(instance);
	let result;
	let fallthroughAttrs;
	accessedAttrs = false;
	try {
		if (vnode.shapeFlag & 4) {
			const proxyToUse = withProxy || proxy;
			const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, { get(target, key, receiver) {
				warn$1$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
				return Reflect.get(target, key, receiver);
			} }) : proxyToUse;
			result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, /* @__PURE__ */ shallowReadonly(props), setupState, data, ctx));
			fallthroughAttrs = attrs;
		} else {
			const render2 = Component;
			if (attrs === props) markAttrsAccessed();
			result = normalizeVNode(render2.length > 1 ? render2(/* @__PURE__ */ shallowReadonly(props), {
				get attrs() {
					markAttrsAccessed();
					return /* @__PURE__ */ shallowReadonly(attrs);
				},
				slots,
				emit
			}) : render2(/* @__PURE__ */ shallowReadonly(props), null));
			fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
		}
	} catch (err) {
		blockStack.length = 0;
		handleError(err, instance, 1);
		result = createVNode(Comment);
	}
	let root = result;
	let setRoot = void 0;
	if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = getChildRoot(result);
	if (fallthroughAttrs && inheritAttrs !== false) {
		const keys = Object.keys(fallthroughAttrs);
		const { shapeFlag } = root;
		if (keys.length) {
			if (shapeFlag & 7) {
				if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
				root = cloneVNode(root, fallthroughAttrs, false, true);
			} else if (!accessedAttrs && root.type !== Comment) {
				const allAttrs = Object.keys(attrs);
				const eventAttrs = [];
				const extraAttrs = [];
				for (let i = 0, l = allAttrs.length; i < l; i++) {
					const key = allAttrs[i];
					if (isOn(key)) {
						if (!isModelListener(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
					} else extraAttrs.push(key);
				}
				if (extraAttrs.length) warn$1$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`);
				if (eventAttrs.length) warn$1$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
			}
		}
	}
	if (vnode.dirs) {
		if (!isElementRoot(root)) warn$1$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
		root = cloneVNode(root, null, false, true);
		root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	}
	if (vnode.transition) {
		if (!isElementRoot(root)) warn$1$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
		setTransitionHooks(root, vnode.transition);
	}
	if (setRoot) setRoot(root);
	else result = root;
	setCurrentRenderingInstance(prev);
	return result;
}
var getChildRoot = (vnode) => {
	const rawChildren = vnode.children;
	const dynamicChildren = vnode.dynamicChildren;
	const childRoot = filterSingleRoot(rawChildren, false);
	if (!childRoot) return [vnode, void 0];
	else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) return getChildRoot(childRoot);
	const index = rawChildren.indexOf(childRoot);
	const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
	const setRoot = (updatedRoot) => {
		rawChildren[index] = updatedRoot;
		if (dynamicChildren) {
			if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
			else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
		}
	};
	return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
	let singleRoot;
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (isVNode(child)) {
			if (child.type !== Comment || child.children === "v-if") if (singleRoot) return;
			else {
				singleRoot = child;
				if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) return filterSingleRoot(singleRoot.children);
			}
		} else return;
	}
	return singleRoot;
}
var getFunctionalFallthrough = (attrs) => {
	let res;
	for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
	return res;
};
var filterModelListeners = (attrs, props) => {
	const res = {};
	for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
	return res;
};
var isElementRoot = (vnode) => {
	return vnode.shapeFlag & 7 || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	const { props: prevProps, children: prevChildren, component } = prevVNode;
	const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	const emits = component.emitsOptions;
	if ((prevChildren || nextChildren) && isHmrUpdating) return true;
	if (nextVNode.dirs || nextVNode.transition) return true;
	if (optimized && patchFlag >= 0) {
		if (patchFlag & 1024) return true;
		if (patchFlag & 16) {
			if (!prevProps) return !!nextProps;
			return hasPropsChanged(prevProps, nextProps, emits);
		} else if (patchFlag & 8) {
			const dynamicProps = nextVNode.dynamicProps;
			for (let i = 0; i < dynamicProps.length; i++) {
				const key = dynamicProps[i];
				if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) return true;
			}
		}
	} else {
		if (prevChildren || nextChildren) {
			if (!nextChildren || !nextChildren.$stable) return true;
		}
		if (prevProps === nextProps) return false;
		if (!prevProps) return !!nextProps;
		if (!nextProps) return true;
		return hasPropsChanged(prevProps, nextProps, emits);
	}
	return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	const nextKeys = Object.keys(nextProps);
	if (nextKeys.length !== Object.keys(prevProps).length) return true;
	for (let i = 0; i < nextKeys.length; i++) {
		const key = nextKeys[i];
		if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) return true;
	}
	return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
	const nextProp = nextProps[key];
	const prevProp = prevProps[key];
	if (key === "style" && isObject$1(nextProp) && isObject$1(prevProp)) return !looseEqual(nextProp, prevProp);
	return nextProp !== prevProp;
}
function updateHOCHostEl({ vnode, parent }, el) {
	while (parent) {
		const root = parent.subTree;
		if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
		if (root === vnode) {
			(vnode = parent.vnode).el = el;
			parent = parent.parent;
		} else break;
	}
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
	const props = {};
	const attrs = createInternalObject();
	instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	setFullProps(instance, rawProps, props, attrs);
	for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
	validateProps(rawProps || {}, props, instance);
	if (isStateful) instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
	else if (!instance.type.props) instance.props = attrs;
	else instance.props = props;
	instance.attrs = attrs;
}
function isInHmrContext(instance) {
	while (instance) {
		if (instance.type.__hmrId) return true;
		instance = instance.parent;
	}
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
	const { props, attrs, vnode: { patchFlag } } = instance;
	const rawCurrentProps = /* @__PURE__ */ toRaw(props);
	const [options] = instance.propsOptions;
	let hasAttrsChanged = false;
	if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
		if (patchFlag & 8) {
			const propsToUpdate = instance.vnode.dynamicProps;
			for (let i = 0; i < propsToUpdate.length; i++) {
				let key = propsToUpdate[i];
				if (isEmitListener(instance.emitsOptions, key)) continue;
				const value = rawProps[key];
				if (options) if (hasOwn(attrs, key)) {
					if (value !== attrs[key]) {
						attrs[key] = value;
						hasAttrsChanged = true;
					}
				} else {
					const camelizedKey = camelize$1(key);
					props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
				}
				else if (value !== attrs[key]) {
					attrs[key] = value;
					hasAttrsChanged = true;
				}
			}
		}
	} else {
		if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
		let kebabKey;
		for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate$1(key)) === key || !hasOwn(rawProps, kebabKey))) if (options) {
			if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
		} else delete props[key];
		if (attrs !== rawCurrentProps) {
			for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
				delete attrs[key];
				hasAttrsChanged = true;
			}
		}
	}
	if (hasAttrsChanged) trigger(instance.attrs, "set", "");
	validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
	const [options, needCastKeys] = instance.propsOptions;
	let hasAttrsChanged = false;
	let rawCastValues;
	if (rawProps) for (let key in rawProps) {
		if (isReservedProp(key)) continue;
		const value = rawProps[key];
		let camelKey;
		if (options && hasOwn(options, camelKey = camelize$1(key))) if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
		else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
		else if (!isEmitListener(instance.emitsOptions, key)) {
			if (!(key in attrs) || value !== attrs[key]) {
				attrs[key] = value;
				hasAttrsChanged = true;
			}
		}
	}
	if (needCastKeys) {
		const rawCurrentProps = /* @__PURE__ */ toRaw(props);
		const castValues = rawCastValues || EMPTY_OBJ;
		for (let i = 0; i < needCastKeys.length; i++) {
			const key = needCastKeys[i];
			props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
		}
	}
	return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
	const opt = options[key];
	if (opt != null) {
		const hasDefault = hasOwn(opt, "default");
		if (hasDefault && value === void 0) {
			const defaultValue = opt.default;
			if (opt.type !== Function && !opt.skipFactory && isFunction$1(defaultValue)) {
				const { propsDefaults } = instance;
				if (key in propsDefaults) value = propsDefaults[key];
				else {
					const reset = setCurrentInstance(instance);
					value = propsDefaults[key] = defaultValue.call(null, props);
					reset();
				}
			} else value = defaultValue;
			if (instance.ce) instance.ce._setProp(key, value);
		}
		if (opt[0]) {
			if (isAbsent && !hasDefault) value = false;
			else if (opt[1] && (value === "" || value === hyphenate$1(key))) value = true;
		}
	}
	return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinPropsCache : appContext.propsCache;
	const cached = cache.get(comp);
	if (cached) return cached;
	const raw = comp.props;
	const normalized = {};
	const needCastKeys = [];
	let hasExtends = false;
	if (!isFunction$1(comp)) {
		const extendProps = (raw2) => {
			hasExtends = true;
			const [props, keys] = normalizePropsOptions(raw2, appContext, true);
			extend(normalized, props);
			if (keys) needCastKeys.push(...keys);
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
		if (comp.extends) extendProps(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendProps);
	}
	if (!raw && !hasExtends) {
		if (isObject$1(comp)) cache.set(comp, EMPTY_ARR);
		return EMPTY_ARR;
	}
	if (isArray$3(raw)) for (let i = 0; i < raw.length; i++) {
		if (!isString$2(raw[i])) warn$1$1(`props must be strings when using array syntax.`, raw[i]);
		const normalizedKey = camelize$1(raw[i]);
		if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
	}
	else if (raw) {
		if (!isObject$1(raw)) warn$1$1(`invalid props options`, raw);
		for (const key in raw) {
			const normalizedKey = camelize$1(key);
			if (validatePropName(normalizedKey)) {
				const opt = raw[key];
				const prop = normalized[normalizedKey] = isArray$3(opt) || isFunction$1(opt) ? { type: opt } : extend({}, opt);
				const propType = prop.type;
				let shouldCast = false;
				let shouldCastTrue = true;
				if (isArray$3(propType)) for (let index = 0; index < propType.length; ++index) {
					const type = propType[index];
					const typeName = isFunction$1(type) && type.name;
					if (typeName === "Boolean") {
						shouldCast = true;
						break;
					} else if (typeName === "String") shouldCastTrue = false;
				}
				else shouldCast = isFunction$1(propType) && propType.name === "Boolean";
				prop[0] = shouldCast;
				prop[1] = shouldCastTrue;
				if (shouldCast || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
			}
		}
	}
	const res = [normalized, needCastKeys];
	if (isObject$1(comp)) cache.set(comp, res);
	return res;
}
function validatePropName(key) {
	if (key[0] !== "$" && !isReservedProp(key)) return true;
	else warn$1$1(`Invalid prop name: "${key}" is a reserved property.`);
	return false;
}
function getType$2(ctor) {
	if (ctor === null) return "null";
	if (typeof ctor === "function") return ctor.name || "";
	else if (typeof ctor === "object") return ctor.constructor && ctor.constructor.name || "";
	return "";
}
function validateProps(rawProps, props, instance) {
	const resolvedValues = /* @__PURE__ */ toRaw(props);
	const options = instance.propsOptions[0];
	const camelizePropsKey = Object.keys(rawProps).map((key) => camelize$1(key));
	for (const key in options) {
		let opt = options[key];
		if (opt == null) continue;
		validateProp(key, resolvedValues[key], opt, /* @__PURE__ */ shallowReadonly(resolvedValues), !camelizePropsKey.includes(key));
	}
}
function validateProp(name, value, prop, props, isAbsent) {
	const { type, required, validator, skipCheck } = prop;
	if (required && isAbsent) {
		warn$1$1("Missing required prop: \"" + name + "\"");
		return;
	}
	if (value == null && !required) return;
	if (type != null && type !== true && !skipCheck) {
		let isValid = false;
		const types = isArray$3(type) ? type : [type];
		const expectedTypes = [];
		for (let i = 0; i < types.length && !isValid; i++) {
			const { valid, expectedType } = assertType(value, types[i]);
			expectedTypes.push(expectedType || "");
			isValid = valid;
		}
		if (!isValid) {
			warn$1$1(getInvalidTypeMessage(name, value, expectedTypes));
			return;
		}
	}
	if (validator && !validator(value, props)) warn$1$1("Invalid prop: custom validator check failed for prop \"" + name + "\".");
}
var isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
	let valid;
	const expectedType = getType$2(type);
	if (expectedType === "null") valid = value === null;
	else if (isSimpleType(expectedType)) {
		const t = typeof value;
		valid = t === expectedType.toLowerCase();
		if (!valid && t === "object") valid = value instanceof type;
	} else if (expectedType === "Object") valid = isObject$1(value);
	else if (expectedType === "Array") valid = isArray$3(value);
	else valid = value instanceof type;
	return {
		valid,
		expectedType
	};
}
function getInvalidTypeMessage(name, value, expectedTypes) {
	if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
	let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
	const expectedType = expectedTypes[0];
	const receivedType = toRawType(value);
	const expectedValue = styleValue(value, expectedType);
	const receivedValue = styleValue(value, receivedType);
	if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean$1(expectedType, receivedType)) message += ` with value ${expectedValue}`;
	message += `, got ${receivedType} `;
	if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
	return message;
}
function styleValue(value, type) {
	if (type === "String") return `"${value}"`;
	else if (type === "Number") return `${Number(value)}`;
	else return `${value}`;
}
function isExplicable(type) {
	return [
		"string",
		"number",
		"boolean"
	].some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
	return args.some((elem) => elem.toLowerCase() === "boolean");
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray$3(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot$1 = (key, rawSlot, ctx) => {
	if (rawSlot._n) return rawSlot;
	const normalized = withCtx((...args) => {
		if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) warn$1$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
		return normalizeSlotValue(rawSlot(...args));
	}, ctx);
	normalized._c = false;
	return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
	const ctx = rawSlots._ctx;
	for (const key in rawSlots) {
		if (isInternalKey(key)) continue;
		const value = rawSlots[key];
		if (isFunction$1(value)) slots[key] = normalizeSlot$1(key, value, ctx);
		else if (value != null) {
			warn$1$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
			const normalized = normalizeSlotValue(value);
			slots[key] = () => normalized;
		}
	}
};
var normalizeVNodeSlots = (instance, children) => {
	if (!isKeepAlive(instance.vnode) && true) warn$1$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
	const normalized = normalizeSlotValue(children);
	instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
	for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
};
var initSlots = (instance, children, optimized) => {
	const slots = instance.slots = createInternalObject();
	if (instance.vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			assignSlots(slots, children, optimized);
			if (optimized) def(slots, "_", type, true);
		} else normalizeObjectSlots(children, slots);
	} else if (children) normalizeVNodeSlots(instance, children);
};
var updateSlots = (instance, children, optimized) => {
	const { vnode, slots } = instance;
	let needDeletionCheck = true;
	let deletionComparisonTarget = EMPTY_OBJ;
	if (vnode.shapeFlag & 32) {
		const type = children._;
		if (type) if (isHmrUpdating) {
			assignSlots(slots, children, optimized);
			trigger(instance, "set", "$slots");
		} else if (optimized && type === 1) needDeletionCheck = false;
		else assignSlots(slots, children, optimized);
		else {
			needDeletionCheck = !children.$stable;
			normalizeObjectSlots(children, slots);
		}
		deletionComparisonTarget = children;
	} else if (children) {
		normalizeVNodeSlots(instance, children);
		deletionComparisonTarget = { default: 1 };
	}
	if (needDeletionCheck) {
		for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
	}
};
var supported$1;
var perf$1;
function startMeasure(instance, type) {
	if (instance.appContext.config.performance && isSupported()) perf$1.mark(`vue-${type}-${instance.uid}`);
	devtoolsPerfStart(instance, type, isSupported() ? perf$1.now() : Date.now());
}
function endMeasure(instance, type) {
	if (instance.appContext.config.performance && isSupported()) {
		const startTag = `vue-${type}-${instance.uid}`;
		const endTag = startTag + `:end`;
		const measureName = `<${formatComponentName(instance, instance.type)}> ${type}`;
		perf$1.mark(endTag);
		perf$1.measure(measureName, startTag, endTag);
		perf$1.clearMeasures(measureName);
		perf$1.clearMarks(startTag);
		perf$1.clearMarks(endTag);
	}
	devtoolsPerfEnd(instance, type, isSupported() ? perf$1.now() : Date.now());
}
function isSupported() {
	if (supported$1 !== void 0) return supported$1;
	if (typeof window !== "undefined" && window.performance) {
		supported$1 = true;
		perf$1 = window.performance;
	} else supported$1 = false;
	return supported$1;
}
function initFeatureFlags() {
	const needWarn = [];
	if (needWarn.length) {
		const multi = needWarn.length > 1;
		console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
	}
}
var queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
	return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
	initFeatureFlags();
	const target = getGlobalThis();
	target.__VUE__ = true;
	setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
	const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
	const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
		if (n1 === n2) return;
		if (n1 && !isSameVNodeType(n1, n2)) {
			anchor = getNextHostNode(n1);
			unmount(n1, parentComponent, parentSuspense, true);
			n1 = null;
		}
		if (n2.patchFlag === -2) {
			optimized = false;
			n2.dynamicChildren = null;
		}
		const { type, ref, shapeFlag } = n2;
		switch (type) {
			case Text:
				processText(n1, n2, container, anchor);
				break;
			case Comment:
				processCommentNode(n1, n2, container, anchor);
				break;
			case Static:
				if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
				else patchStaticNode(n1, n2, container, namespace);
				break;
			case Fragment:
				processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			else warn$1$1("Invalid VNode type:", type, `(${typeof type})`);
		}
		if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
		else if (ref == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
	};
	const processText = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
		else {
			const el = n2.el = n1.el;
			if (n2.children !== n1.children) hostSetText(el, n2.children);
		}
	};
	const processCommentNode = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
		else n2.el = n1.el;
	};
	const mountStaticNode = (n2, container, anchor, namespace) => {
		[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
	};
	const patchStaticNode = (n1, n2, container, namespace) => {
		if (n2.children !== n1.children) {
			const anchor = hostNextSibling(n1.anchor);
			removeStaticNode(n1);
			[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
		} else {
			n2.el = n1.el;
			n2.anchor = n1.anchor;
		}
	};
	const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostInsert(el, container, nextSibling);
			el = next;
		}
		hostInsert(anchor, container, nextSibling);
	};
	const removeStaticNode = ({ el, anchor }) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostRemove(el);
			el = next;
		}
		hostRemove(anchor);
	};
	const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		if (n2.type === "svg") namespace = "svg";
		else if (n2.type === "math") namespace = "mathml";
		if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else {
			const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
			try {
				if (customElement) customElement._beginPatch();
				patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			} finally {
				if (customElement) customElement._endPatch();
			}
		}
	};
	const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let el;
		let vnodeHook;
		const { props, shapeFlag, transition, dirs } = vnode;
		el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
		if (shapeFlag & 8) hostSetElementText(el, vnode.children);
		else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
		setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
		if (props) {
			for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
			if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
			if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		}
		def(el, "__vnode", vnode, true);
		def(el, "__vueParentComponent", parentComponent, true);
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
		const needCallTransitionHooks = needTransition(parentSuspense, transition);
		if (needCallTransitionHooks) transition.beforeEnter(el);
		hostInsert(el, container, anchor);
		if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			needCallTransitionHooks && transition.enter(el);
			dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
		}, parentSuspense);
	};
	const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
		if (scopeId) hostSetScopeId(el, scopeId);
		if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
		if (parentComponent) {
			let subTree = parentComponent.subTree;
			if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = filterSingleRoot(subTree.children) || subTree;
			if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
				const parentVNode = parentComponent.vnode;
				setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
			}
		}
	};
	const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
		for (let i = start; i < children.length; i++) patch(null, children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const el = n2.el = n1.el;
		el.__vnode = n2;
		let { patchFlag, dynamicChildren, dirs } = n2;
		patchFlag |= n1.patchFlag & 16;
		const oldProps = n1.props || EMPTY_OBJ;
		const newProps = n2.props || EMPTY_OBJ;
		let vnodeHook;
		parentComponent && toggleRecurse(parentComponent, false);
		if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
		if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
		parentComponent && toggleRecurse(parentComponent, true);
		if (isHmrUpdating) {
			patchFlag = 0;
			optimized = false;
			dynamicChildren = null;
		}
		if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
		if (dynamicChildren) {
			patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
			traverseStaticChildren(n1, n2);
		} else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
		if (patchFlag > 0) {
			if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
			else {
				if (patchFlag & 2) {
					if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
				}
				if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
				if (patchFlag & 8) {
					const propsToUpdate = n2.dynamicProps;
					for (let i = 0; i < propsToUpdate.length; i++) {
						const key = propsToUpdate[i];
						const prev = oldProps[key];
						const next = newProps[key];
						if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
					}
				}
			}
			if (patchFlag & 1) {
				if (n1.children !== n2.children) hostSetElementText(el, n2.children);
			}
		} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
		if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
			dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
		}, parentSuspense);
	};
	const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
		for (let i = 0; i < newChildren.length; i++) {
			const oldVNode = oldChildren[i];
			const newVNode = newChildren[i];
			patch(oldVNode, newVNode, oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
		}
	};
	const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
		if (oldProps !== newProps) {
			if (oldProps !== EMPTY_OBJ) {
				for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
			}
			for (const key in newProps) {
				if (isReservedProp(key)) continue;
				const next = newProps[key];
				const prev = oldProps[key];
				if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
			}
			if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
		}
	};
	const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
		const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
		let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
		if (isHmrUpdating || patchFlag & 2048) {
			patchFlag = 0;
			optimized = false;
			dynamicChildren = null;
		}
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		if (n1 == null) {
			hostInsert(fragmentStartAnchor, container, anchor);
			hostInsert(fragmentEndAnchor, container, anchor);
			mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
			patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
			traverseStaticChildren(n1, n2);
		} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		n2.slotScopeIds = slotScopeIds;
		if (n1 == null) if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
		else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
		else updateComponent(n1, n2, optimized);
	};
	const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
		const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
		if (instance.type.__hmrId) registerHMR(instance);
		pushWarningContext(initialVNode);
		startMeasure(instance, `mount`);
		if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
		startMeasure(instance, `init`);
		setupComponent(instance, false, optimized);
		endMeasure(instance, `init`);
		if (isHmrUpdating) initialVNode.el = null;
		if (instance.asyncDep) {
			parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
			if (!initialVNode.el) {
				const placeholder = instance.subTree = createVNode(Comment);
				processCommentNode(null, placeholder, container, anchor);
				initialVNode.placeholder = placeholder.el;
			}
		} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
		popWarningContext();
		endMeasure(instance, `mount`);
	};
	const updateComponent = (n1, n2, optimized) => {
		const instance = n2.component = n1.component;
		if (shouldUpdateComponent(n1, n2, optimized)) if (instance.asyncDep && !instance.asyncResolved) {
			pushWarningContext(n2);
			updateComponentPreRender(instance, n2, optimized);
			popWarningContext();
			return;
		} else {
			instance.next = n2;
			instance.update();
		}
		else {
			n2.el = n1.el;
			instance.vnode = n2;
		}
	};
	const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
		const componentUpdateFn = () => {
			if (!instance.isMounted) {
				let vnodeHook;
				const { el, props } = initialVNode;
				const { bm, m, parent, root, type } = instance;
				const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
				toggleRecurse(instance, false);
				if (bm) invokeArrayFns(bm);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
				toggleRecurse(instance, true);
				if (el && hydrateNode) {
					const hydrateSubTree = () => {
						startMeasure(instance, `render`);
						instance.subTree = renderComponentRoot(instance);
						endMeasure(instance, `render`);
						startMeasure(instance, `hydrate`);
						hydrateNode(el, instance.subTree, instance, parentSuspense, null);
						endMeasure(instance, `hydrate`);
					};
					if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
					else hydrateSubTree();
				} else {
					if (root.ce && root.ce._hasShadowRoot()) root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
					startMeasure(instance, `render`);
					const subTree = instance.subTree = renderComponentRoot(instance);
					endMeasure(instance, `render`);
					startMeasure(instance, `patch`);
					patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
					endMeasure(instance, `patch`);
					initialVNode.el = subTree.el;
				}
				if (m) queuePostRenderEffect(m, parentSuspense);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
					const scopedInitialVNode = initialVNode;
					queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
				}
				if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
				instance.isMounted = true;
				devtoolsComponentAdded(instance);
				initialVNode = container = anchor = null;
			} else {
				let { next, bu, u, parent, vnode } = instance;
				{
					const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
					if (nonHydratedAsyncRoot) {
						if (next) {
							next.el = vnode.el;
							updateComponentPreRender(instance, next, optimized);
						}
						nonHydratedAsyncRoot.asyncDep.then(() => {
							queuePostRenderEffect(() => {
								if (!instance.isUnmounted) update();
							}, parentSuspense);
						});
						return;
					}
				}
				let originNext = next;
				let vnodeHook;
				pushWarningContext(next || instance.vnode);
				toggleRecurse(instance, false);
				if (next) {
					next.el = vnode.el;
					updateComponentPreRender(instance, next, optimized);
				} else next = vnode;
				if (bu) invokeArrayFns(bu);
				if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
				toggleRecurse(instance, true);
				startMeasure(instance, `render`);
				const nextTree = renderComponentRoot(instance);
				endMeasure(instance, `render`);
				const prevTree = instance.subTree;
				instance.subTree = nextTree;
				startMeasure(instance, `patch`);
				patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, namespace);
				endMeasure(instance, `patch`);
				next.el = nextTree.el;
				if (originNext === null) updateHOCHostEl(instance, nextTree.el);
				if (u) queuePostRenderEffect(u, parentSuspense);
				if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
				devtoolsComponentUpdated(instance);
				popWarningContext();
			}
		};
		instance.scope.on();
		const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
		instance.scope.off();
		const update = instance.update = effect.run.bind(effect);
		const job = instance.job = effect.runIfDirty.bind(effect);
		job.i = instance;
		job.id = instance.uid;
		effect.scheduler = () => queueJob(job);
		toggleRecurse(instance, true);
		effect.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
		effect.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
		update();
	};
	const updateComponentPreRender = (instance, nextVNode, optimized) => {
		nextVNode.component = instance;
		const prevProps = instance.vnode.props;
		instance.vnode = nextVNode;
		instance.next = null;
		updateProps(instance, nextVNode.props, prevProps, optimized);
		updateSlots(instance, nextVNode.children, optimized);
		pauseTracking();
		flushPreFlushCbs(instance);
		resetTracking();
	};
	const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
		const c1 = n1 && n1.children;
		const prevShapeFlag = n1 ? n1.shapeFlag : 0;
		const c2 = n2.children;
		const { patchFlag, shapeFlag } = n2;
		if (patchFlag > 0) {
			if (patchFlag & 128) {
				patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			} else if (patchFlag & 256) {
				patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			}
		}
		if (shapeFlag & 8) {
			if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
			if (c2 !== c1) hostSetElementText(container, c2);
		} else if (prevShapeFlag & 16) if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else unmountChildren(c1, parentComponent, parentSuspense, true);
		else {
			if (prevShapeFlag & 8) hostSetElementText(container, "");
			if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
	};
	const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		c1 = c1 || EMPTY_ARR;
		c2 = c2 || EMPTY_ARR;
		const oldLength = c1.length;
		const newLength = c2.length;
		const commonLength = Math.min(oldLength, newLength);
		let i;
		for (i = 0; i < commonLength; i++) {
			const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
		if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
		else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
	};
	const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let i = 0;
		const l2 = c2.length;
		let e1 = c1.length - 1;
		let e2 = l2 - 1;
		while (i <= e1 && i <= e2) {
			const n1 = c1[i];
			const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			i++;
		}
		while (i <= e1 && i <= e2) {
			const n1 = c1[e1];
			const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			e1--;
			e2--;
		}
		if (i > e1) {
			if (i <= e2) {
				const nextPos = e2 + 1;
				const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
				while (i <= e2) {
					patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					i++;
				}
			}
		} else if (i > e2) while (i <= e1) {
			unmount(c1[i], parentComponent, parentSuspense, true);
			i++;
		}
		else {
			const s1 = i;
			const s2 = i;
			const keyToNewIndexMap = /* @__PURE__ */ new Map();
			for (i = s2; i <= e2; i++) {
				const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				if (nextChild.key != null) {
					if (keyToNewIndexMap.has(nextChild.key)) warn$1$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
					keyToNewIndexMap.set(nextChild.key, i);
				}
			}
			let j;
			let patched = 0;
			const toBePatched = e2 - s2 + 1;
			let moved = false;
			let maxNewIndexSoFar = 0;
			const newIndexToOldIndexMap = new Array(toBePatched);
			for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
			for (i = s1; i <= e1; i++) {
				const prevChild = c1[i];
				if (patched >= toBePatched) {
					unmount(prevChild, parentComponent, parentSuspense, true);
					continue;
				}
				let newIndex;
				if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
				else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
					newIndex = j;
					break;
				}
				if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
				else {
					newIndexToOldIndexMap[newIndex - s2] = i + 1;
					if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
					else moved = true;
					patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					patched++;
				}
			}
			const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
			j = increasingNewIndexSequence.length - 1;
			for (i = toBePatched - 1; i >= 0; i--) {
				const nextIndex = s2 + i;
				const nextChild = c2[nextIndex];
				const anchorVNode = c2[nextIndex + 1];
				const anchor = nextIndex + 1 < l2 ? anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode) : parentAnchor;
				if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (moved) if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
				else j--;
			}
		}
	};
	const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
		const { el, type, transition, children, shapeFlag } = vnode;
		if (shapeFlag & 6) {
			move(vnode.component.subTree, container, anchor, moveType);
			return;
		}
		if (shapeFlag & 128) {
			vnode.suspense.move(container, anchor, moveType);
			return;
		}
		if (shapeFlag & 64) {
			type.move(vnode, container, anchor, internals);
			return;
		}
		if (type === Fragment) {
			hostInsert(el, container, anchor);
			for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
			hostInsert(vnode.anchor, container, anchor);
			return;
		}
		if (type === Static) {
			moveStaticNode(vnode, container, anchor);
			return;
		}
		if (moveType !== 2 && shapeFlag & 1 && transition) if (moveType === 0) {
			transition.beforeEnter(el);
			hostInsert(el, container, anchor);
			queuePostRenderEffect(() => transition.enter(el), parentSuspense);
		} else {
			const { leave, delayLeave, afterLeave } = transition;
			const remove2 = () => {
				if (vnode.ctx.isUnmounted) hostRemove(el);
				else hostInsert(el, container, anchor);
			};
			const performLeave = () => {
				if (el._isLeaving) el[leaveCbKey](true);
				leave(el, () => {
					remove2();
					afterLeave && afterLeave();
				});
			};
			if (delayLeave) delayLeave(el, remove2, performLeave);
			else performLeave();
		}
		else hostInsert(el, container, anchor);
	};
	const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
		const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex } = vnode;
		if (patchFlag === -2) optimized = false;
		if (ref != null) {
			pauseTracking();
			setRef(ref, null, parentSuspense, vnode, true);
			resetTracking();
		}
		if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
		if (shapeFlag & 256) {
			parentComponent.ctx.deactivate(vnode);
			return;
		}
		const shouldInvokeDirs = shapeFlag & 1 && dirs;
		const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
		let vnodeHook;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
		else {
			if (shapeFlag & 128) {
				vnode.suspense.unmount(parentSuspense, doRemove);
				return;
			}
			if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
			if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
			else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
			else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
			if (doRemove) remove(vnode);
		}
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
		}, parentSuspense);
	};
	const remove = (vnode) => {
		const { type, el, anchor, transition } = vnode;
		if (type === Fragment) {
			if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child) => {
				if (child.type === Comment) hostRemove(child.el);
				else remove(child);
			});
			else removeFragment(el, anchor);
			return;
		}
		if (type === Static) {
			removeStaticNode(vnode);
			return;
		}
		const performRemove = () => {
			hostRemove(el);
			if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
		};
		if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
			const { leave, delayLeave } = transition;
			const performLeave = () => leave(el, performRemove);
			if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
			else performLeave();
		} else performRemove();
	};
	const removeFragment = (cur, end) => {
		let next;
		while (cur !== end) {
			next = hostNextSibling(cur);
			hostRemove(cur);
			cur = next;
		}
		hostRemove(end);
	};
	const unmountComponent = (instance, parentSuspense, doRemove) => {
		if (instance.type.__hmrId) unregisterHMR(instance);
		const { bum, scope, job, subTree, um, m, a } = instance;
		invalidateMount(m);
		invalidateMount(a);
		if (bum) invokeArrayFns(bum);
		scope.stop();
		if (job) {
			job.flags |= 8;
			unmount(subTree, instance, parentSuspense, doRemove);
		}
		if (um) queuePostRenderEffect(um, parentSuspense);
		queuePostRenderEffect(() => {
			instance.isUnmounted = true;
		}, parentSuspense);
		devtoolsComponentRemoved(instance);
	};
	const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
		for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	};
	const getNextHostNode = (vnode) => {
		if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
		if (vnode.shapeFlag & 128) return vnode.suspense.next();
		const el = hostNextSibling(vnode.anchor || vnode.el);
		const teleportEnd = el && el[TeleportEndKey];
		return teleportEnd ? hostNextSibling(teleportEnd) : el;
	};
	let isFlushing = false;
	const render = (vnode, container, namespace) => {
		let instance;
		if (vnode == null) {
			if (container._vnode) {
				unmount(container._vnode, null, null, true);
				instance = container._vnode.component;
			}
		} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
		container._vnode = vnode;
		if (!isFlushing) {
			isFlushing = true;
			flushPreFlushCbs(instance);
			flushPostFlushCbs();
			isFlushing = false;
		}
	};
	const internals = {
		p: patch,
		um: unmount,
		m: move,
		r: remove,
		mt: mountComponent,
		mc: mountChildren,
		pc: patchChildren,
		pbc: patchBlockChildren,
		n: getNextHostNode,
		o: options
	};
	let hydrate;
	let hydrateNode;
	if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
	return {
		render,
		hydrate,
		createApp: createAppAPI(render, hydrate)
	};
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
	return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
	if (allowed) {
		effect.flags |= 32;
		job.flags |= 4;
	} else {
		effect.flags &= -33;
		job.flags &= -5;
	}
}
function needTransition(parentSuspense, transition) {
	return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
	const ch1 = n1.children;
	const ch2 = n2.children;
	if (isArray$3(ch1) && isArray$3(ch2)) for (let i = 0; i < ch1.length; i++) {
		const c1 = ch1[i];
		let c2 = ch2[i];
		if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
			if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
				c2 = ch2[i] = cloneIfMounted(ch2[i]);
				c2.el = c1.el;
			}
			if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
		}
		if (c2.type === Text) {
			if (c2.patchFlag === -1) c2 = ch2[i] = cloneIfMounted(c2);
			c2.el = c1.el;
		}
		if (c2.type === Comment && !c2.el) c2.el = c1.el;
		c2.el && (c2.el.__vnode = c2);
	}
}
function getSequence(arr) {
	const p = arr.slice();
	const result = [0];
	let i, j, u, v, c;
	const len = arr.length;
	for (i = 0; i < len; i++) {
		const arrI = arr[i];
		if (arrI !== 0) {
			j = result[result.length - 1];
			if (arr[j] < arrI) {
				p[i] = j;
				result.push(i);
				continue;
			}
			u = 0;
			v = result.length - 1;
			while (u < v) {
				c = u + v >> 1;
				if (arr[result[c]] < arrI) u = c + 1;
				else v = c;
			}
			if (arrI < arr[result[u]]) {
				if (u > 0) p[i] = result[u - 1];
				result[u] = i;
			}
		}
	}
	u = result.length;
	v = result[u - 1];
	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}
	return result;
}
function locateNonHydratedAsyncRoot(instance) {
	const subComponent = instance.subTree.component;
	if (subComponent) if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
	else return locateNonHydratedAsyncRoot(subComponent);
}
function invalidateMount(hooks) {
	if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
	if (anchorVnode.placeholder) return anchorVnode.placeholder;
	const instance = anchorVnode.component;
	if (instance) return resolveAsyncComponentPlaceholder(instance.subTree);
	return null;
}
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
	if (suspense && suspense.pendingBranch) if (isArray$3(fn)) suspense.effects.push(...fn);
	else suspense.effects.push(fn);
	else queuePostFlushCb(fn);
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
	blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
	blockStack.pop();
	currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
	isBlockTreeEnabled += value;
	if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
}
function setupBlock(vnode) {
	vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
	closeBlock();
	if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
	return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
	return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
	return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
	return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
	if (n2.shapeFlag & 6 && n1.component) {
		const dirtyInstances = hmrDirtyComponents.get(n2.type);
		if (dirtyInstances && dirtyInstances.has(n1.component)) {
			n1.shapeFlag &= -257;
			n2.shapeFlag &= -513;
			return false;
		}
	}
	return n1.type === n2.type && n1.key === n2.key;
}
var vnodeArgsTransformer;
var createVNodeWithArgsTransform = (...args) => {
	return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref, ref_key, ref_for }) => {
	if (typeof ref === "number") ref = "" + ref;
	return ref != null ? isString$2(ref) || /* @__PURE__ */ isRef(ref) || isFunction$1(ref) ? {
		i: currentRenderingInstance,
		r: ref,
		k: ref_key,
		f: !!ref_for
	} : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
	const vnode = {
		__v_isVNode: true,
		__v_skip: true,
		type,
		props,
		key: props && normalizeKey(props),
		ref: props && normalizeRef(props),
		scopeId: currentScopeId,
		slotScopeIds: null,
		children,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag,
		patchFlag,
		dynamicProps,
		dynamicChildren: null,
		appContext: null,
		ctx: currentRenderingInstance
	};
	if (needFullChildrenNormalization) {
		normalizeChildren(vnode, children);
		if (shapeFlag & 128) type.normalize(vnode);
	} else if (children) vnode.shapeFlag |= isString$2(children) ? 8 : 16;
	if (vnode.key !== vnode.key) warn$1$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
	if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
	return vnode;
}
var createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	if (!type || type === NULL_DYNAMIC_COMPONENT) {
		if (!type) warn$1$1(`Invalid vnode type when creating vnode: ${type}.`);
		type = Comment;
	}
	if (isVNode(type)) {
		const cloned = cloneVNode(type, props, true);
		if (children) normalizeChildren(cloned, children);
		if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
		else currentBlock.push(cloned);
		cloned.patchFlag = -2;
		return cloned;
	}
	if (isClassComponent(type)) type = type.__vccOpts;
	if (props) {
		props = guardReactiveProps(props);
		let { class: klass, style } = props;
		if (klass && !isString$2(klass)) props.class = normalizeClass(klass);
		if (isObject$1(style)) {
			if (/* @__PURE__ */ isProxy(style) && !isArray$3(style)) style = extend({}, style);
			props.style = normalizeStyle(style);
		}
	}
	const shapeFlag = isString$2(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction$1(type) ? 2 : 0;
	if (shapeFlag & 4 && /* @__PURE__ */ isProxy(type)) {
		type = /* @__PURE__ */ toRaw(type);
		warn$1$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
	}
	return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
	if (!props) return null;
	return /* @__PURE__ */ isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
	const { props, ref, patchFlag, children, transition } = vnode;
	const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	const cloned = {
		__v_isVNode: true,
		__v_skip: true,
		type: vnode.type,
		props: mergedProps,
		key: mergedProps && normalizeKey(mergedProps),
		ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray$3(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
		scopeId: vnode.scopeId,
		slotScopeIds: vnode.slotScopeIds,
		children: patchFlag === -1 && isArray$3(children) ? children.map(deepCloneVNode) : children,
		target: vnode.target,
		targetStart: vnode.targetStart,
		targetAnchor: vnode.targetAnchor,
		staticCount: vnode.staticCount,
		shapeFlag: vnode.shapeFlag,
		patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
		dynamicProps: vnode.dynamicProps,
		dynamicChildren: vnode.dynamicChildren,
		appContext: vnode.appContext,
		dirs: vnode.dirs,
		transition,
		component: vnode.component,
		suspense: vnode.suspense,
		ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
		ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
		placeholder: vnode.placeholder,
		el: vnode.el,
		anchor: vnode.anchor,
		ctx: vnode.ctx,
		ce: vnode.ce
	};
	if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
	return cloned;
}
function deepCloneVNode(vnode) {
	const cloned = cloneVNode(vnode);
	if (isArray$3(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
	return cloned;
}
function createTextVNode(text = " ", flag = 0) {
	return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
	const vnode = createVNode(Static, null, content);
	vnode.staticCount = numberOfNodes;
	return vnode;
}
function normalizeVNode(child) {
	if (child == null || typeof child === "boolean") return createVNode(Comment);
	else if (isArray$3(child)) return createVNode(Fragment, null, child.slice());
	else if (isVNode(child)) return cloneIfMounted(child);
	else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
	return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
	let type = 0;
	const { shapeFlag } = vnode;
	if (children == null) children = null;
	else if (isArray$3(children)) type = 16;
	else if (typeof children === "object") if (shapeFlag & 65) {
		const slot = children.default;
		if (slot) {
			slot._c && (slot._d = false);
			normalizeChildren(vnode, slot());
			slot._c && (slot._d = true);
		}
		return;
	} else {
		type = 32;
		const slotFlag = children._;
		if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
		else if (slotFlag === 3 && currentRenderingInstance) if (currentRenderingInstance.slots._ === 1) children._ = 1;
		else {
			children._ = 2;
			vnode.patchFlag |= 1024;
		}
	}
	else if (isFunction$1(children)) {
		children = {
			default: children,
			_ctx: currentRenderingInstance
		};
		type = 32;
	} else {
		children = String(children);
		if (shapeFlag & 64) {
			type = 16;
			children = [createTextVNode(children)];
		} else type = 8;
	}
	vnode.children = children;
	vnode.shapeFlag |= type;
}
function mergeProps(...args) {
	const ret = {};
	for (let i = 0; i < args.length; i++) {
		const toMerge = args[i];
		for (const key in toMerge) if (key === "class") {
			if (ret.class !== toMerge.class) ret.class = normalizeClass([ret.class, toMerge.class]);
		} else if (key === "style") ret.style = normalizeStyle([ret.style, toMerge.style]);
		else if (isOn(key)) {
			const existing = ret[key];
			const incoming = toMerge[key];
			if (incoming && existing !== incoming && !(isArray$3(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
		} else if (key !== "") ret[key] = toMerge[key];
	}
	return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
	const type = vnode.type;
	const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	const instance = {
		uid: uid++,
		vnode,
		type,
		parent,
		appContext,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new EffectScope(true),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: parent ? parent.provides : Object.create(appContext.provides),
		ids: parent ? parent.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: normalizePropsOptions(type, appContext),
		emitsOptions: normalizeEmitsOptions(type, appContext),
		emit: null,
		emitted: null,
		propsDefaults: EMPTY_OBJ,
		inheritAttrs: type.inheritAttrs,
		ctx: EMPTY_OBJ,
		data: EMPTY_OBJ,
		props: EMPTY_OBJ,
		attrs: EMPTY_OBJ,
		slots: EMPTY_OBJ,
		refs: EMPTY_OBJ,
		setupState: EMPTY_OBJ,
		setupContext: null,
		suspense,
		suspenseId: suspense ? suspense.pendingId : 0,
		asyncDep: null,
		asyncResolved: false,
		isMounted: false,
		isUnmounted: false,
		isDeactivated: false,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	instance.ctx = createDevRenderContext(instance);
	instance.root = parent ? parent.root : instance;
	instance.emit = emit.bind(null, instance);
	if (vnode.ce) vnode.ce(instance);
	return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
	const g = getGlobalThis();
	const registerGlobalSetter = (key, setter) => {
		let setters;
		if (!(setters = g[key])) setters = g[key] = [];
		setters.push(setter);
		return (v) => {
			if (setters.length > 1) setters.forEach((set) => set(v));
			else setters[0](v);
		};
	};
	internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
	setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
}
var setCurrentInstance = (instance) => {
	const prev = currentInstance;
	internalSetCurrentInstance(instance);
	instance.scope.on();
	return () => {
		instance.scope.off();
		internalSetCurrentInstance(prev);
	};
};
var unsetCurrentInstance = () => {
	currentInstance && currentInstance.scope.off();
	internalSetCurrentInstance(null);
};
var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, { isNativeTag }) {
	if (isBuiltInTag(name) || isNativeTag(name)) warn$1$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
	return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
	isSSR && setInSSRSetupState(isSSR);
	const { props, children } = instance.vnode;
	const isStateful = isStatefulComponent(instance);
	initProps(instance, props, isStateful, isSSR);
	initSlots(instance, children, optimized || isSSR);
	const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	isSSR && setInSSRSetupState(false);
	return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
	const Component = instance.type;
	if (Component.name) validateComponentName(Component.name, instance.appContext.config);
	if (Component.components) {
		const names = Object.keys(Component.components);
		for (let i = 0; i < names.length; i++) validateComponentName(names[i], instance.appContext.config);
	}
	if (Component.directives) {
		const names = Object.keys(Component.directives);
		for (let i = 0; i < names.length; i++) validateDirectiveName(names[i]);
	}
	if (Component.compilerOptions && isRuntimeOnly()) warn$1$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
	instance.accessCache = /* @__PURE__ */ Object.create(null);
	instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	exposePropsOnRenderContext(instance);
	const { setup } = Component;
	if (setup) {
		pauseTracking();
		const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
		const reset = setCurrentInstance(instance);
		const setupResult = callWithErrorHandling(setup, instance, 0, [/* @__PURE__ */ shallowReadonly(instance.props), setupContext]);
		const isAsyncSetup = isPromise(setupResult);
		resetTracking();
		reset();
		if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
		if (isAsyncSetup) {
			setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
			if (isSSR) return setupResult.then((resolvedResult) => {
				handleSetupResult(instance, resolvedResult, isSSR);
			}).catch((e) => {
				handleError(e, instance, 0);
			});
			else {
				instance.asyncDep = setupResult;
				if (!instance.suspense) warn$1$1(`Component <${formatComponentName(instance, Component)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
			}
		} else handleSetupResult(instance, setupResult, isSSR);
	} else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
	if (isFunction$1(setupResult)) if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
	else instance.render = setupResult;
	else if (isObject$1(setupResult)) {
		if (isVNode(setupResult)) warn$1$1(`setup() should not return VNodes directly - return a render function instead.`);
		instance.devtoolsRawSetupState = setupResult;
		instance.setupState = proxyRefs(setupResult);
		exposeSetupStateOnRenderContext(instance);
	} else if (setupResult !== void 0) warn$1$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
	finishComponentSetup(instance, isSSR);
}
var compile;
var installWithProxy;
var isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
	const Component = instance.type;
	if (!instance.render) {
		if (!isSSR && compile && !Component.render) {
			const template = Component.template || resolveMergedOptions(instance).template;
			if (template) {
				startMeasure(instance, `compile`);
				const { isCustomElement, compilerOptions } = instance.appContext.config;
				const { delimiters, compilerOptions: componentCompilerOptions } = Component;
				Component.render = compile(template, extend(extend({
					isCustomElement,
					delimiters
				}, compilerOptions), componentCompilerOptions));
				endMeasure(instance, `compile`);
			}
		}
		instance.render = Component.render || NOOP;
		if (installWithProxy) installWithProxy(instance);
	}
	{
		const reset = setCurrentInstance(instance);
		pauseTracking();
		try {
			applyOptions(instance);
		} finally {
			resetTracking();
			reset();
		}
	}
	if (!Component.render && instance.render === NOOP && !isSSR) if (!compile && Component.template) warn$1$1("Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\".");
	else warn$1$1(`Component is missing template or render function: `, Component);
}
var attrsProxyHandlers = {
	get(target, key) {
		markAttrsAccessed();
		track(target, "get", "");
		return target[key];
	},
	set() {
		warn$1$1(`setupContext.attrs is readonly.`);
		return false;
	},
	deleteProperty() {
		warn$1$1(`setupContext.attrs is readonly.`);
		return false;
	}
};
function getSlotsProxy(instance) {
	return new Proxy(instance.slots, { get(target, key) {
		track(instance, "get", "$slots");
		return target[key];
	} });
}
function createSetupContext(instance) {
	const expose = (exposed) => {
		if (instance.exposed) warn$1$1(`expose() should be called only once per setup().`);
		if (exposed != null) {
			let exposedType = typeof exposed;
			if (exposedType === "object") {
				if (isArray$3(exposed)) exposedType = "array";
				else if (/* @__PURE__ */ isRef(exposed)) exposedType = "ref";
			}
			if (exposedType !== "object") warn$1$1(`expose() should be passed a plain object, received ${exposedType}.`);
		}
		instance.exposed = exposed || {};
	};
	{
		let attrsProxy;
		let slotsProxy;
		return Object.freeze({
			get attrs() {
				return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
			},
			get slots() {
				return slotsProxy || (slotsProxy = getSlotsProxy(instance));
			},
			get emit() {
				return (event, ...args) => instance.emit(event, ...args);
			},
			expose
		});
	}
}
function getComponentPublicInstance(instance) {
	if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
		get(target, key) {
			if (key in target) return target[key];
			else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
		},
		has(target, key) {
			return key in target || key in publicPropertiesMap;
		}
	}));
	else return instance.proxy;
}
var classifyRE$1 = /(?:^|[-_])\w/g;
var classify$1 = (str) => str.replace(classifyRE$1, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
	return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
	let name = getComponentName(Component);
	if (!name && Component.__file) {
		const match = Component.__file.match(/([^/\\]+)\.\w+$/);
		if (match) name = match[1];
	}
	if (!name && instance) {
		const inferFromRegistry = (registry) => {
			for (const key in registry) if (registry[key] === Component) return key;
		};
		name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
	}
	return name ? classify$1(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
	return isFunction$1(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
	const c = /* @__PURE__ */ computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
	{
		const i = getCurrentInstance();
		if (i && i.appContext.config.warnRecursiveComputed) c._warnRecursive = true;
	}
	return c;
};
function h$5(type, propsOrChildren, children) {
	try {
		setBlockTracking(-1);
		const l = arguments.length;
		if (l === 2) if (isObject$1(propsOrChildren) && !isArray$3(propsOrChildren)) {
			if (isVNode(propsOrChildren)) return createVNode(type, null, [propsOrChildren]);
			return createVNode(type, propsOrChildren);
		} else return createVNode(type, null, propsOrChildren);
		else {
			if (l > 3) children = Array.prototype.slice.call(arguments, 2);
			else if (l === 3 && isVNode(children)) children = [children];
			return createVNode(type, propsOrChildren, children);
		}
	} finally {
		setBlockTracking(1);
	}
}
function initCustomFormatter() {
	if (typeof window === "undefined") return;
	const vueStyle = { style: "color:#3ba776" };
	const numberStyle = { style: "color:#1677ff" };
	const stringStyle = { style: "color:#f5222d" };
	const keywordStyle = { style: "color:#eb2f96" };
	const formatter = {
		__vue_custom_formatter: true,
		header(obj) {
			if (!isObject$1(obj)) return null;
			if (obj.__isVue) return [
				"div",
				vueStyle,
				`VueInstance`
			];
			else if (/* @__PURE__ */ isRef(obj)) {
				pauseTracking();
				const value = obj.value;
				resetTracking();
				return [
					"div",
					{},
					[
						"span",
						vueStyle,
						genRefFlag(obj)
					],
					"<",
					formatValue(value),
					`>`
				];
			} else if (/* @__PURE__ */ isReactive(obj)) return [
				"div",
				{},
				[
					"span",
					vueStyle,
					/* @__PURE__ */ isShallow(obj) ? "ShallowReactive" : "Reactive"
				],
				"<",
				formatValue(obj),
				`>${/* @__PURE__ */ isReadonly$1(obj) ? ` (readonly)` : ``}`
			];
			else if (/* @__PURE__ */ isReadonly$1(obj)) return [
				"div",
				{},
				[
					"span",
					vueStyle,
					/* @__PURE__ */ isShallow(obj) ? "ShallowReadonly" : "Readonly"
				],
				"<",
				formatValue(obj),
				">"
			];
			return null;
		},
		hasBody(obj) {
			return obj && obj.__isVue;
		},
		body(obj) {
			if (obj && obj.__isVue) return [
				"div",
				{},
				...formatInstance(obj.$)
			];
		}
	};
	function formatInstance(instance) {
		const blocks = [];
		if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", /* @__PURE__ */ toRaw(instance.props)));
		if (instance.setupState !== EMPTY_OBJ) blocks.push(createInstanceBlock("setup", instance.setupState));
		if (instance.data !== EMPTY_OBJ) blocks.push(createInstanceBlock("data", /* @__PURE__ */ toRaw(instance.data)));
		const computed = extractKeys(instance, "computed");
		if (computed) blocks.push(createInstanceBlock("computed", computed));
		const injected = extractKeys(instance, "inject");
		if (injected) blocks.push(createInstanceBlock("injected", injected));
		blocks.push([
			"div",
			{},
			[
				"span",
				{ style: keywordStyle.style + ";opacity:0.66" },
				"$ (internal): "
			],
			["object", { object: instance }]
		]);
		return blocks;
	}
	function createInstanceBlock(type, target) {
		target = extend({}, target);
		if (!Object.keys(target).length) return ["span", {}];
		return [
			"div",
			{ style: "line-height:1.25em;margin-bottom:0.6em" },
			[
				"div",
				{ style: "color:#476582" },
				type
			],
			[
				"div",
				{ style: "padding-left:1.25em" },
				...Object.keys(target).map((key) => {
					return [
						"div",
						{},
						[
							"span",
							keywordStyle,
							key + ": "
						],
						formatValue(target[key], false)
					];
				})
			]
		];
	}
	function formatValue(v, asRaw = true) {
		if (typeof v === "number") return [
			"span",
			numberStyle,
			v
		];
		else if (typeof v === "string") return [
			"span",
			stringStyle,
			JSON.stringify(v)
		];
		else if (typeof v === "boolean") return [
			"span",
			keywordStyle,
			v
		];
		else if (isObject$1(v)) return ["object", { object: asRaw ? /* @__PURE__ */ toRaw(v) : v }];
		else return [
			"span",
			stringStyle,
			String(v)
		];
	}
	function extractKeys(instance, type) {
		const Comp = instance.type;
		if (isFunction$1(Comp)) return;
		const extracted = {};
		for (const key in instance.ctx) if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
		return extracted;
	}
	function isKeyOfType(Comp, key, type) {
		const opts = Comp[type];
		if (isArray$3(opts) && opts.includes(key) || isObject$1(opts) && key in opts) return true;
		if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
		if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) return true;
	}
	function genRefFlag(v) {
		if (/* @__PURE__ */ isShallow(v)) return `ShallowRef`;
		if (v.effect) return `ComputedRef`;
		return `Ref`;
	}
	if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
	else window.devtoolsFormatters = [formatter];
}
var version = "3.5.30";
var warn = warn$1$1;
//#endregion
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) try {
	policy = /* @__PURE__ */ tt.createPolicy("vue", { createHTML: (val) => val });
} catch (e) {
	warn(`Error creating trusted types policy: ${e}`);
}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
	insert: (child, parent, anchor) => {
		parent.insertBefore(child, anchor || null);
	},
	remove: (child) => {
		const parent = child.parentNode;
		if (parent) parent.removeChild(child);
	},
	createElement: (tag, namespace, is, props) => {
		const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
		if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
		return el;
	},
	createText: (text) => doc.createTextNode(text),
	createComment: (text) => doc.createComment(text),
	setText: (node, text) => {
		node.nodeValue = text;
	},
	setElementText: (el, text) => {
		el.textContent = text;
	},
	parentNode: (node) => node.parentNode,
	nextSibling: (node) => node.nextSibling,
	querySelector: (selector) => doc.querySelector(selector),
	setScopeId(el, id) {
		el.setAttribute(id, "");
	},
	insertStaticContent(content, parent, anchor, namespace, start, end) {
		const before = anchor ? anchor.previousSibling : parent.lastChild;
		if (start && (start === end || start.nextSibling)) while (true) {
			parent.insertBefore(start.cloneNode(true), anchor);
			if (start === end || !(start = start.nextSibling)) break;
		}
		else {
			templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
			const template = templateContainer.content;
			if (namespace === "svg" || namespace === "mathml") {
				const wrapper = template.firstChild;
				while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
				template.removeChild(wrapper);
			}
			parent.insertBefore(template, anchor);
		}
		return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
	}
};
var TRANSITION = "transition";
var ANIMATION = "animation";
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
var DOMTransitionPropsValidators = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: true
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
};
var TransitionPropsValidators = /* @__PURE__ */ extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
var decorate$1 = (t) => {
	t.displayName = "Transition";
	t.props = TransitionPropsValidators;
	return t;
};
var Transition = /* @__PURE__ */ decorate$1((props, { slots }) => h$5(BaseTransition, resolveTransitionProps(props), slots));
var callHook = (hook, args = []) => {
	if (isArray$3(hook)) hook.forEach((h2) => h2(...args));
	else if (hook) hook(...args);
};
var hasExplicitCallback = (hook) => {
	return hook ? isArray$3(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
	const baseProps = {};
	for (const key in rawProps) if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
	if (rawProps.css === false) return baseProps;
	const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
	const durations = normalizeDuration(duration);
	const enterDuration = durations && durations[0];
	const leaveDuration = durations && durations[1];
	const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
	const finishEnter = (el, isAppear, done, isCancelled) => {
		el._enterCancelled = isCancelled;
		removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
		removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
		done && done();
	};
	const finishLeave = (el, done) => {
		el._isLeaving = false;
		removeTransitionClass(el, leaveFromClass);
		removeTransitionClass(el, leaveToClass);
		removeTransitionClass(el, leaveActiveClass);
		done && done();
	};
	const makeEnterHook = (isAppear) => {
		return (el, done) => {
			const hook = isAppear ? onAppear : onEnter;
			const resolve = () => finishEnter(el, isAppear, done);
			callHook(hook, [el, resolve]);
			nextFrame(() => {
				removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
				addTransitionClass(el, isAppear ? appearToClass : enterToClass);
				if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
			});
		};
	};
	return extend(baseProps, {
		onBeforeEnter(el) {
			callHook(onBeforeEnter, [el]);
			addTransitionClass(el, enterFromClass);
			addTransitionClass(el, enterActiveClass);
		},
		onBeforeAppear(el) {
			callHook(onBeforeAppear, [el]);
			addTransitionClass(el, appearFromClass);
			addTransitionClass(el, appearActiveClass);
		},
		onEnter: makeEnterHook(false),
		onAppear: makeEnterHook(true),
		onLeave(el, done) {
			el._isLeaving = true;
			const resolve = () => finishLeave(el, done);
			addTransitionClass(el, leaveFromClass);
			if (!el._enterCancelled) {
				forceReflow(el);
				addTransitionClass(el, leaveActiveClass);
			} else {
				addTransitionClass(el, leaveActiveClass);
				forceReflow(el);
			}
			nextFrame(() => {
				if (!el._isLeaving) return;
				removeTransitionClass(el, leaveFromClass);
				addTransitionClass(el, leaveToClass);
				if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
			});
			callHook(onLeave, [el, resolve]);
		},
		onEnterCancelled(el) {
			finishEnter(el, false, void 0, true);
			callHook(onEnterCancelled, [el]);
		},
		onAppearCancelled(el) {
			finishEnter(el, true, void 0, true);
			callHook(onAppearCancelled, [el]);
		},
		onLeaveCancelled(el) {
			finishLeave(el);
			callHook(onLeaveCancelled, [el]);
		}
	});
}
function normalizeDuration(duration) {
	if (duration == null) return null;
	else if (isObject$1(duration)) return [NumberOf(duration.enter), NumberOf(duration.leave)];
	else {
		const n = NumberOf(duration);
		return [n, n];
	}
}
function NumberOf(val) {
	const res = toNumber(val);
	assertNumber(res, "<transition> explicit duration");
	return res;
}
function addTransitionClass(el, cls) {
	cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
	(el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
	cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
	const _vtc = el[vtcKey];
	if (_vtc) {
		_vtc.delete(cls);
		if (!_vtc.size) el[vtcKey] = void 0;
	}
}
function nextFrame(cb) {
	requestAnimationFrame(() => {
		requestAnimationFrame(cb);
	});
}
var endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
	const id = el._endId = ++endId;
	const resolveIfNotStale = () => {
		if (id === el._endId) resolve();
	};
	if (explicitTimeout != null) return setTimeout(resolveIfNotStale, explicitTimeout);
	const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
	if (!type) return resolve();
	const endEvent = type + "end";
	let ended = 0;
	const end = () => {
		el.removeEventListener(endEvent, onEnd);
		resolveIfNotStale();
	};
	const onEnd = (e) => {
		if (e.target === el && ++ended >= propCount) end();
	};
	setTimeout(() => {
		if (ended < propCount) end();
	}, timeout + 1);
	el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
	const styles = window.getComputedStyle(el);
	const getStyleProperties = (key) => (styles[key] || "").split(", ");
	const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
	const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
	const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
	const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
	const animationTimeout = getTimeout(animationDelays, animationDurations);
	let type = null;
	let timeout = 0;
	let propCount = 0;
	if (expectedType === TRANSITION) {
		if (transitionTimeout > 0) {
			type = TRANSITION;
			timeout = transitionTimeout;
			propCount = transitionDurations.length;
		}
	} else if (expectedType === ANIMATION) {
		if (animationTimeout > 0) {
			type = ANIMATION;
			timeout = animationTimeout;
			propCount = animationDurations.length;
		}
	} else {
		timeout = Math.max(transitionTimeout, animationTimeout);
		type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
		propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	}
	const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
	return {
		type,
		timeout,
		propCount,
		hasTransform
	};
}
function getTimeout(delays, durations) {
	while (delays.length < durations.length) delays = delays.concat(delays);
	return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
	if (s === "auto") return 0;
	return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
	return (el ? el.ownerDocument : document).body.offsetHeight;
}
function patchClass(el, value, isSVG) {
	const transitionClasses = el[vtcKey];
	if (transitionClasses) value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
	if (value == null) el.removeAttribute("class");
	else if (isSVG) el.setAttribute("class", value);
	else el.className = value;
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol("CSS_VAR_TEXT");
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
	const style = el.style;
	const isCssString = isString$2(next);
	let hasControlledDisplay = false;
	if (next && !isCssString) {
		if (prev) if (!isString$2(prev)) {
			for (const key in prev) if (next[key] == null) setStyle(style, key, "");
		} else for (const prevStyle of prev.split(";")) {
			const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
			if (next[key] == null) setStyle(style, key, "");
		}
		for (const key in next) {
			if (key === "display") hasControlledDisplay = true;
			setStyle(style, key, next[key]);
		}
	} else if (isCssString) {
		if (prev !== next) {
			const cssVarText = style[CSS_VAR_TEXT];
			if (cssVarText) next += ";" + cssVarText;
			style.cssText = next;
			hasControlledDisplay = displayRE.test(next);
		}
	} else if (prev) el.removeAttribute("style");
	if (vShowOriginalDisplay in el) {
		el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
		if (el[vShowHidden]) style.display = "none";
	}
}
var semicolonRE = /[^\\];\s*$/;
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
	if (isArray$3(val)) val.forEach((v) => setStyle(style, name, v));
	else {
		if (val == null) val = "";
		if (semicolonRE.test(val)) warn(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
		if (name.startsWith("--")) style.setProperty(name, val);
		else {
			const prefixed = autoPrefix(style, name);
			if (importantRE.test(val)) style.setProperty(hyphenate$1(prefixed), val.replace(importantRE, ""), "important");
			else style[prefixed] = val;
		}
	}
}
var prefixes = [
	"Webkit",
	"Moz",
	"ms"
];
var prefixCache = {};
function autoPrefix(style, rawName) {
	const cached = prefixCache[rawName];
	if (cached) return cached;
	let name = camelize$1(rawName);
	if (name !== "filter" && name in style) return prefixCache[rawName] = name;
	name = capitalize(name);
	for (let i = 0; i < prefixes.length; i++) {
		const prefixed = prefixes[i] + name;
		if (prefixed in style) return prefixCache[rawName] = prefixed;
	}
	return rawName;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
	if (isSVG && key.startsWith("xlink:")) if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
	else el.setAttributeNS(xlinkNS, key, value);
	else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
	else el.setAttribute(key, isBoolean ? "" : isSymbol$1(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
	if (key === "innerHTML" || key === "textContent") {
		if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
		return;
	}
	const tag = el.tagName;
	if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
		const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
		const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
		if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
		if (value == null) el.removeAttribute(key);
		el._value = value;
		return;
	}
	let needRemove = false;
	if (value === "" || value == null) {
		const type = typeof el[key];
		if (type === "boolean") value = includeBooleanAttr(value);
		else if (value == null && type === "string") {
			value = "";
			needRemove = true;
		} else if (type === "number") {
			value = 0;
			needRemove = true;
		}
	}
	try {
		el[key] = value;
	} catch (e) {
		if (!needRemove) warn(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
	}
	needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
	el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
	el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	const invokers = el[veiKey] || (el[veiKey] = {});
	const existingInvoker = invokers[rawName];
	if (nextValue && existingInvoker) existingInvoker.value = sanitizeEventValue(nextValue, rawName);
	else {
		const [name, options] = parseName(rawName);
		if (nextValue) addEventListener(el, name, invokers[rawName] = createInvoker(sanitizeEventValue(nextValue, rawName), instance), options);
		else if (existingInvoker) {
			removeEventListener(el, name, existingInvoker, options);
			invokers[rawName] = void 0;
		}
	}
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
	let options;
	if (optionsModifierRE.test(name)) {
		options = {};
		let m;
		while (m = name.match(optionsModifierRE)) {
			name = name.slice(0, name.length - m[0].length);
			options[m[0].toLowerCase()] = true;
		}
	}
	return [name[2] === ":" ? name.slice(3) : hyphenate$1(name.slice(2)), options];
}
var cachedNow = 0;
var p$5 = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p$5.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
	const invoker = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= invoker.attached) return;
		callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
	};
	invoker.value = initialValue;
	invoker.attached = getNow();
	return invoker;
}
function sanitizeEventValue(value, propName) {
	if (isFunction$1(value) || isArray$3(value)) return value;
	warn(`Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`);
	return NOOP;
}
function patchStopImmediatePropagation(e, value) {
	if (isArray$3(value)) {
		const originalStop = e.stopImmediatePropagation;
		e.stopImmediatePropagation = () => {
			originalStop.call(e);
			e._stopped = true;
		};
		return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
	} else return value;
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
	const isSVG = namespace === "svg";
	if (key === "class") patchClass(el, nextValue, isSVG);
	else if (key === "style") patchStyle(el, prevValue, nextValue);
	else if (isOn(key)) {
		if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
	} else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
		patchDOMProp(el, key, nextValue);
		if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
	} else if (el._isVueCE && (shouldSetAsPropForVueCE(el, key) || el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString$2(nextValue)))) patchDOMProp(el, camelize$1(key), nextValue, parentComponent, key);
	else {
		if (key === "true-value") el._trueValue = nextValue;
		else if (key === "false-value") el._falseValue = nextValue;
		patchAttr(el, key, nextValue, isSVG);
	}
};
function shouldSetAsProp(el, key, value, isSVG) {
	if (isSVG) {
		if (key === "innerHTML" || key === "textContent") return true;
		if (key in el && isNativeOn(key) && isFunction$1(value)) return true;
		return false;
	}
	if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
	if (key === "sandbox" && el.tagName === "IFRAME") return false;
	if (key === "form") return false;
	if (key === "list" && el.tagName === "INPUT") return false;
	if (key === "type" && el.tagName === "TEXTAREA") return false;
	if (key === "width" || key === "height") {
		const tag = el.tagName;
		if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
	}
	if (isNativeOn(key) && isString$2(value)) return false;
	return key in el;
}
function shouldSetAsPropForVueCE(el, key) {
	const props = el._def.props;
	if (!props) return false;
	const camelKey = camelize$1(key);
	return Array.isArray(props) ? props.some((prop) => camelize$1(prop) === camelKey) : Object.keys(props).some((prop) => camelize$1(prop) === camelKey);
}
var positionMap = /* @__PURE__ */ new WeakMap();
var newPositionMap = /* @__PURE__ */ new WeakMap();
var moveCbKey = /* @__PURE__ */ Symbol("_moveCb");
var enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
var decorate = (t) => {
	delete t.props.mode;
	return t;
};
var TransitionGroup = /* @__PURE__ */ decorate({
	name: "TransitionGroup",
	props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
		tag: String,
		moveClass: String
	}),
	setup(props, { slots }) {
		const instance = getCurrentInstance();
		const state = useTransitionState();
		let prevChildren;
		let children;
		onUpdated(() => {
			if (!prevChildren.length) return;
			const moveClass = props.moveClass || `${props.name || "v"}-move`;
			if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
				prevChildren = [];
				return;
			}
			prevChildren.forEach(callPendingCbs);
			prevChildren.forEach(recordPosition);
			const movedChildren = prevChildren.filter(applyTranslation);
			forceReflow(instance.vnode.el);
			movedChildren.forEach((c) => {
				const el = c.el;
				const style = el.style;
				addTransitionClass(el, moveClass);
				style.transform = style.webkitTransform = style.transitionDuration = "";
				const cb = el[moveCbKey] = (e) => {
					if (e && e.target !== el) return;
					if (!e || e.propertyName.endsWith("transform")) {
						el.removeEventListener("transitionend", cb);
						el[moveCbKey] = null;
						removeTransitionClass(el, moveClass);
					}
				};
				el.addEventListener("transitionend", cb);
			});
			prevChildren = [];
		});
		return () => {
			const rawProps = /* @__PURE__ */ toRaw(props);
			const cssTransitionProps = resolveTransitionProps(rawProps);
			let tag = rawProps.tag || Fragment;
			prevChildren = [];
			if (children) for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (child.el && child.el instanceof Element) {
					prevChildren.push(child);
					setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
					positionMap.set(child, getPosition(child.el));
				}
			}
			children = slots.default ? getTransitionRawChildren(slots.default()) : [];
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (child.key != null) setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
				else if (child.type !== Text) warn(`<TransitionGroup> children must be keyed.`);
			}
			return createVNode(tag, null, children);
		};
	}
});
function callPendingCbs(c) {
	const el = c.el;
	if (el[moveCbKey]) el[moveCbKey]();
	if (el[enterCbKey]) el[enterCbKey]();
}
function recordPosition(c) {
	newPositionMap.set(c, getPosition(c.el));
}
function applyTranslation(c) {
	const oldPos = positionMap.get(c);
	const newPos = newPositionMap.get(c);
	const dx = oldPos.left - newPos.left;
	const dy = oldPos.top - newPos.top;
	if (dx || dy) {
		const el = c.el;
		const s = el.style;
		const rect = el.getBoundingClientRect();
		let scaleX = 1;
		let scaleY = 1;
		if (el.offsetWidth) scaleX = rect.width / el.offsetWidth;
		if (el.offsetHeight) scaleY = rect.height / el.offsetHeight;
		if (!Number.isFinite(scaleX) || scaleX === 0) scaleX = 1;
		if (!Number.isFinite(scaleY) || scaleY === 0) scaleY = 1;
		if (Math.abs(scaleX - 1) < .01) scaleX = 1;
		if (Math.abs(scaleY - 1) < .01) scaleY = 1;
		s.transform = s.webkitTransform = `translate(${dx / scaleX}px,${dy / scaleY}px)`;
		s.transitionDuration = "0s";
		return c;
	}
}
function getPosition(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left,
		top: rect.top
	};
}
function hasCSSTransform(el, root, moveClass) {
	const clone = el.cloneNode();
	const _vtc = el[vtcKey];
	if (_vtc) _vtc.forEach((cls) => {
		cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
	});
	moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
	clone.style.display = "none";
	const container = root.nodeType === 1 ? root : root.parentNode;
	container.appendChild(clone);
	const { hasTransform } = getTransitionInfo(clone);
	container.removeChild(clone);
	return hasTransform;
}
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
var enabledHydration = false;
function ensureHydrationRenderer() {
	renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
	enabledHydration = true;
	return renderer;
}
var createSSRApp = ((...args) => {
	const app = ensureHydrationRenderer().createApp(...args);
	injectNativeTagCheck(app);
	injectCompilerOptionsCheck(app);
	const { mount } = app;
	app.mount = (containerOrSelector) => {
		const container = normalizeContainer(containerOrSelector);
		if (container) return mount(container, true, resolveRootNamespace(container));
	};
	return app;
});
function resolveRootNamespace(container) {
	if (container instanceof SVGElement) return "svg";
	if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function injectNativeTagCheck(app) {
	Object.defineProperty(app.config, "isNativeTag", {
		value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
		writable: false
	});
}
function injectCompilerOptionsCheck(app) {
	if (isRuntimeOnly()) {
		const isCustomElement = app.config.isCustomElement;
		Object.defineProperty(app.config, "isCustomElement", {
			get() {
				return isCustomElement;
			},
			set() {
				warn(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
			}
		});
		const compilerOptions = app.config.compilerOptions;
		const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
		Object.defineProperty(app.config, "compilerOptions", {
			get() {
				warn(msg);
				return compilerOptions;
			},
			set() {
				warn(msg);
			}
		});
	}
}
function normalizeContainer(container) {
	if (isString$2(container)) {
		const res = document.querySelector(container);
		if (!res) warn(`Failed to mount app: mount target selector "${container}" returned null.`);
		return res;
	}
	if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
	return container;
}
//#endregion
//#region node_modules/vue/dist/vue.runtime.esm-bundler.js
/**
* vue v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function initDev() {
	initCustomFormatter();
}
initDev();
//#endregion
//#region node_modules/.pnpm/@vuepress+shared@2.0.0-rc.26/node_modules/@vuepress/shared/dist/index.js
var isLinkWithProtocol = (link) => /^[a-z][a-z0-9+.-]*:/.test(link) || link.startsWith("//");
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => isLinkWithProtocol(link) || link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link);
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var inferRoutePath = (rawPath) => {
	if (!rawPath || rawPath.endsWith("/")) return rawPath;
	let routePath = rawPath.replace(/(^|\/)README.md$/i, "$1index.html");
	if (routePath.endsWith(".md")) routePath = `${routePath.substring(0, routePath.length - 3)}.html`;
	else if (!routePath.endsWith(".html")) routePath = `${routePath}.html`;
	if (routePath.endsWith("/index.html")) routePath = routePath.substring(0, routePath.length - 10);
	return routePath;
};
var FAKE_HOST = "http://.";
var normalizeRoutePath = (pathname, current) => {
	if (!pathname.startsWith("/") && current) {
		const loc = current.slice(0, current.lastIndexOf("/"));
		return inferRoutePath(new URL(`${loc}/${pathname}`, FAKE_HOST).pathname);
	}
	return inferRoutePath(pathname);
};
var resolveLocalePath = (locales, routePath) => {
	const localePaths = Object.keys(locales).sort((a, b) => {
		const levelDelta = b.split("/").length - a.split("/").length;
		if (levelDelta !== 0) return levelDelta;
		return b.length - a.length;
	});
	for (const localePath of localePaths) if (routePath.startsWith(localePath)) return localePath;
	return "/";
};
var SPLIT_CHAR_REGEXP = /(#|\?)/;
var splitPath = (path) => {
	const [pathname, ...hashAndQueries] = path.split(SPLIT_CHAR_REGEXP);
	return {
		pathname,
		hashAndQueries: hashAndQueries.join("")
	};
};
var TAGS_ALLOWED = [
	"link",
	"meta",
	"script",
	"style",
	"noscript",
	"template"
];
var TAGS_UNIQUE = ["title", "base"];
var resolveHeadIdentifier = ([tag, attrs, content]) => {
	if (TAGS_UNIQUE.includes(tag)) return tag;
	if (!TAGS_ALLOWED.includes(tag)) return null;
	if (tag === "meta" && attrs.name) return `${tag}.${attrs.name}`;
	if (tag === "template" && attrs.id) return `${tag}.${attrs.id}`;
	return JSON.stringify([
		tag,
		Object.entries(attrs).map(([key, value]) => {
			if (typeof value === "boolean") return value ? [key, ""] : null;
			return [key, value];
		}).filter((item) => item != null).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
		content
	]);
};
var dedupeHead = (head) => {
	const identifierSet = /* @__PURE__ */ new Set();
	const result = [];
	head.forEach((item) => {
		const identifier = resolveHeadIdentifier(item);
		if (identifier && !identifierSet.has(identifier)) {
			identifierSet.add(identifier);
			result.push(item);
		}
	});
	return result;
};
var ensureLeadingSlash = (str) => str.startsWith("/") ? str : `/${str}`;
var ensureEndingSlash = (str) => str.endsWith("/") || str.endsWith(".html") ? str : `${str}/`;
var removeEndingSlash = (str) => str.endsWith("/") ? str.slice(0, -1) : str;
var removeLeadingSlash = (str) => str.startsWith("/") ? str.slice(1) : str;
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isString$1 = (val) => typeof val === "string";
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region docs/.vuepress/.temp/internal/routes.js
var redirects$1 = JSON.parse("{}");
var routes$1 = Object.fromEntries([
	["/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "index.html" */
			"./index.html-BWJaLuYx.js"
), []),
		meta: {
			"title": "首页",
			"icon": "home"
		}
	}],
	["/%E5%B7%A5%E7%A8%8B%E6%96%87%E6%A1%A3.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "工程文档.html" */
			"./工程文档.html-4ye3eTw_.js"
), []),
		meta: { "title": "LinuxArsenal 技术博客工程文档" }
	}],
	["/about/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "about_index.html" */
			"./index.html-DsU1CR8f.js"
), []),
		meta: {
			"title": "关于",
			"icon": "info"
		}
	}],
	["/embedded/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "embedded_index.html" */
			"./index.html-DlpCS3s1.js"
), []),
		meta: {
			"title": "嵌入式Linux",
			"icon": "code"
		}
	}],
	["/os/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_index.html" */
			"./index.html-CAszXbfN.js"
), []),
		meta: {
			"title": "操作系统",
			"icon": "computer"
		}
	}],
	["/embedded/driver/char-device.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "embedded_driver_char-device.html" */
			"./char-device.html-CpzqKQAO.js"
), []),
		meta: {
			"title": "字符设备驱动",
			"icon": "code",
			"order": 1
		}
	}],
	["/os/filesystem/intro.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_filesystem_intro.html" */
			"./intro.html-Dq_vpA9D.js"
), []),
		meta: {
			"title": "文件系统基础",
			"icon": "folder",
			"order": 1
		}
	}],
	["/os/memory/page-replace.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_memory_page-replace.html" */
			"./page-replace.html-K3Da_ahW.js"
), []),
		meta: {
			"title": "页面置换算法",
			"icon": "shuffle",
			"order": 2
		}
	}],
	["/os/memory/virtual.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_memory_virtual.html" */
			"./virtual.html-t34eQ7E5.js"
), []),
		meta: {
			"title": "虚拟内存",
			"icon": "memory",
			"order": 1
		}
	}],
	["/os/network/io-multiplex.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_network_io-multiplex.html" */
			"./io-multiplex.html-B_FbkhN9.js"
), []),
		meta: {
			"title": "IO 多路复用",
			"icon": "network",
			"order": 1
		}
	}],
	["/os/process/intro.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_process_intro.html" */
			"./intro.html-B_PQf5J_.js"
), []),
		meta: {
			"title": "进程与线程",
			"icon": "process",
			"order": 1
		}
	}],
	["/os/process/ipc.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_process_ipc.html" */
			"./ipc.html-iqZtAnCm.js"
), []),
		meta: {
			"title": "进程通信（IPC）",
			"icon": "share",
			"order": 3
		}
	}],
	["/os/process/schedule.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_process_schedule.html" */
			"./schedule.html-wVkGgn2T.js"
), []),
		meta: {
			"title": "进程调度",
			"icon": "sort",
			"order": 2
		}
	}],
	["/404.html", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "404.html" */
			"./404.html-BKBpl-iE.js"
), []),
		meta: { "title": "" }
	}],
	["/embedded/driver/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "embedded_driver_index.html" */
			"./index.html-Bt_2FV4b.js"
), []),
		meta: { "title": "Driver" }
	}],
	["/os/filesystem/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_filesystem_index.html" */
			"./index.html-CFm-5B2W.js"
), []),
		meta: { "title": "Filesystem" }
	}],
	["/os/memory/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_memory_index.html" */
			"./index.html-D4nGV6iH.js"
), []),
		meta: { "title": "Memory" }
	}],
	["/os/network/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_network_index.html" */
			"./index.html-BRfQ1Seo.js"
), []),
		meta: { "title": "Network" }
	}],
	["/os/process/", {
		loader: () => __vitePreload(() => import(
			/* webpackChunkName: "os_process_index.html" */
			"./index.html-BtHqw0S7.js"
), []),
		meta: { "title": "Process" }
	}]
]);
//#endregion
//#region node_modules/.pnpm/@vue+devtools-api@6.6.4/node_modules/@vue/devtools-api/lib/esm/env.js
function getDevtoolsGlobalHook() {
	return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
	return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
var isProxyAvailable = typeof Proxy === "function";
//#endregion
//#region node_modules/.pnpm/@vue+devtools-api@6.6.4/node_modules/@vue/devtools-api/lib/esm/const.js
var HOOK_SETUP = "devtools-plugin:setup";
var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
//#endregion
//#region node_modules/.pnpm/@vue+devtools-api@6.6.4/node_modules/@vue/devtools-api/lib/esm/time.js
var supported;
var perf;
function isPerformanceSupported() {
	var _a;
	if (supported !== void 0) return supported;
	if (typeof window !== "undefined" && window.performance) {
		supported = true;
		perf = window.performance;
	} else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
		supported = true;
		perf = globalThis.perf_hooks.performance;
	} else supported = false;
	return supported;
}
function now() {
	return isPerformanceSupported() ? perf.now() : Date.now();
}
//#endregion
//#region node_modules/.pnpm/@vue+devtools-api@6.6.4/node_modules/@vue/devtools-api/lib/esm/proxy.js
var ApiProxy = class {
	constructor(plugin, hook) {
		this.target = null;
		this.targetQueue = [];
		this.onQueue = [];
		this.plugin = plugin;
		this.hook = hook;
		const defaultSettings = {};
		if (plugin.settings) for (const id in plugin.settings) defaultSettings[id] = plugin.settings[id].defaultValue;
		const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
		let currentSettings = Object.assign({}, defaultSettings);
		try {
			const raw = localStorage.getItem(localSettingsSaveId);
			const data = JSON.parse(raw);
			Object.assign(currentSettings, data);
		} catch (e) {}
		this.fallbacks = {
			getSettings() {
				return currentSettings;
			},
			setSettings(value) {
				try {
					localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
				} catch (e) {}
				currentSettings = value;
			},
			now() {
				return now();
			}
		};
		if (hook) hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
			if (pluginId === this.plugin.id) this.fallbacks.setSettings(value);
		});
		this.proxiedOn = new Proxy({}, { get: (_target, prop) => {
			if (this.target) return this.target.on[prop];
			else return (...args) => {
				this.onQueue.push({
					method: prop,
					args
				});
			};
		} });
		this.proxiedTarget = new Proxy({}, { get: (_target, prop) => {
			if (this.target) return this.target[prop];
			else if (prop === "on") return this.proxiedOn;
			else if (Object.keys(this.fallbacks).includes(prop)) return (...args) => {
				this.targetQueue.push({
					method: prop,
					args,
					resolve: () => {}
				});
				return this.fallbacks[prop](...args);
			};
			else return (...args) => {
				return new Promise((resolve) => {
					this.targetQueue.push({
						method: prop,
						args,
						resolve
					});
				});
			};
		} });
	}
	async setRealTarget(target) {
		this.target = target;
		for (const item of this.onQueue) this.target.on[item.method](...item.args);
		for (const item of this.targetQueue) item.resolve(await this.target[item.method](...item.args));
	}
};
//#endregion
//#region node_modules/.pnpm/@vue+devtools-api@6.6.4/node_modules/@vue/devtools-api/lib/esm/index.js
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
	const descriptor = pluginDescriptor;
	const target = getTarget();
	const hook = getDevtoolsGlobalHook();
	const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
	if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
	else {
		const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
		(target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: descriptor,
			setupFn,
			proxy
		});
		if (proxy) setupFn(proxy.proxiedTarget);
	}
}
//#endregion
//#region node_modules/.pnpm/vue-router@4.6.4_vue@3.5.30/node_modules/vue-router/dist/devtools-EWN81iOl.mjs
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var isBrowser$1 = typeof document !== "undefined";
/**
* Allows differentiating lazy components from functional components and vue-class-component
* @internal
*
* @param component
*/
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop$1 = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*
* @internal
*/
var isArray = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
function warn$1(msg) {
	const args = Array.from(arguments).slice(1);
	console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
/**
* Encoding Rules (␣ = Space)
* - Path: ␣ " < > # ? { }
* - Query: ␣ " < > # & =
* - Hash: ␣ " < > `
*
* On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
* defines some extra characters to be encoded. Most browsers do not encode them
* in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
* also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
* plus `-._~`. This extra safety should be applied to query by patching the
* string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
* should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
* into a `/` if directly typed in. The _backtick_ (`````) should also be
* encoded everywhere because some browsers like FF encode it when directly
* written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
*/
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
/**
* NOTE: It's not clear to me if we should encode the + symbol in queries, it
* seems to be less flexible than not doing so and I can't find out the legacy
* systems requiring this for regular requests like text/html. In the standard,
* the encoding of the plus character is only mentioned for
* application/x-www-form-urlencoded
* (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
* leave the plus character as is in queries. To be more flexible, we allow the
* plus character on the query, but it can also be manually encoded by the user.
*
* Resources:
* - https://url.spec.whatwg.org/#urlencoded-parsing
* - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
*/
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
/**
* Encode characters that need to be encoded on the path, search and hash
* sections of the URL.
*
* @internal
* @param text - string to encode
* @returns encoded string
*/
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
* Encode characters that need to be encoded on the hash section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Encode characters that need to be encoded query values on the query
* section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Like `encodeQueryValue` but also encodes the `=` character.
*
* @param text - string to encode
*/
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
* Encode characters that need to be encoded on the path section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
* Encode characters that need to be encoded on the path section of the URL as a
* param. This function encodes everything {@link encodePath} does plus the
* slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
* string instead.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch (err) {
		warn$1(`Error decoding "${text}". Using original value`);
	}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
/**
* Transforms a URI into a normalized history location
*
* @param parseQuery
* @param location - URI to normalize
* @param currentLocation - current absolute location. Allows resolving relative
* paths. Must start with `/`. Defaults to `/`
* @returns a normalized history location
*/
function parseURL(parseQuery$1, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos, hashPos > 0 ? hashPos : location.length);
		query = parseQuery$1(searchString.slice(1));
	}
	if (hashPos >= 0) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
/**
* Stringifies a URL object
*
* @param stringifyQuery
* @param location
*/
function stringifyURL(stringifyQuery$1, location) {
	const query = location.query ? stringifyQuery$1(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
/**
* Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
*
* @param pathname - location.pathname
* @param base - base to strip off
*/
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
/**
* Checks if two RouteLocation are equal. This means that both locations are
* pointing towards the same {@link RouteRecord} and that all `params`, `query`
* parameters and `hash` are the same
*
* @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
* @param a - first {@link RouteLocation}
* @param b - second {@link RouteLocation}
*/
function isSameRouteLocation(stringifyQuery$1, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery$1(a.query) === stringifyQuery$1(b.query) && a.hash === b.hash;
}
/**
* Check if two `RouteRecords` are equal. Takes into account aliases: they are
* considered equal to the `RouteRecord` they are aliasing.
*
* @param a - first {@link RouteRecord}
* @param b - second {@link RouteRecord}
*/
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (var key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a?.valueOf() === b?.valueOf();
}
/**
* Check if two arrays are the same or if an array with one single entry is the
* same as another primitive value. Used to check query and parameters
*
* @param a - array of values
* @param b - array of values or a single value
*/
function isEquivalentArray(a, b) {
	return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
* Resolves a relative path that starts with `.`.
*
* @param to - path location we are resolving
* @param from - currentLocation.path, should start with `/`
*/
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (!from.startsWith("/")) {
		warn$1(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
		return to;
	}
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
/**
* Initial route location where the router is. Can be used in navigation guards
* to differentiate the initial navigation.
*
* @example
* ```js
* import { START_LOCATION } from 'vue-router'
*
* router.beforeEach((to, from) => {
*   if (from === START_LOCATION) {
*     // initial navigation
*   }
* })
* ```
*/
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType = /* @__PURE__ */ function(NavigationType$1) {
	NavigationType$1["pop"] = "pop";
	NavigationType$1["push"] = "push";
	return NavigationType$1;
}({});
var NavigationDirection = /* @__PURE__ */ function(NavigationDirection$1) {
	NavigationDirection$1["back"] = "back";
	NavigationDirection$1["forward"] = "forward";
	NavigationDirection$1["unknown"] = "";
	return NavigationDirection$1;
}({});
/**
* Normalizes a base by removing any trailing slash and reading the base tag if
* present.
*
* @param base - base to normalize
*/
function normalizeBase(base) {
	if (!base) if (isBrowser$1) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		/**
		* `id`s can accept pretty much any characters, including CSS combinators
		* like `>` or `~`. It's still possible to retrieve elements using
		* `document.getElementById('~')` but it needs to be escaped when using
		* `document.querySelector('#\\~')` for it to be valid. The only
		* requirements for `id`s are them to be unique on the page and to not be
		* empty (`id=""`). Because of that, when passing an id selector, it should
		* be properly escaped for it to work with `querySelector`. We could check
		* for the id selector to be simple (no CSS combinators `+ >~`) but that
		* would make things inconsistent since they are valid characters for an
		* `id` but would need to be escaped when using `querySelector`, breaking
		* their usage and ending up in no selector returned. Selectors need to be
		* escaped:
		*
		* - `#1-thing` becomes `#\31 -thing`
		* - `#with~symbols` becomes `#with\\~symbols`
		*
		* - More information about  the topic can be found at
		*   https://mathiasbynens.be/notes/html5-id-class.
		* - Practical example: https://mathiasbynens.be/demo/html5-id
		*/
		if (typeof position.el === "string") {
			if (!isIdSelector || !document.getElementById(position.el.slice(1))) try {
				const foundEl = document.querySelector(position.el);
				if (isIdSelector && foundEl) {
					warn$1(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
					return;
				}
			} catch (err) {
				warn$1(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
				return;
			}
		}
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) {
			warn$1(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
			return;
		}
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
/**
* ScrollBehavior instance used by the router to compute and restore the scroll
* position when navigating.
*/
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
/**
* Flags so we can combine them when checking for multiple errors. This is the internal version of
* {@link NavigationFailureType}.
*
* @internal
*/
var ErrorTypes = /* @__PURE__ */ function(ErrorTypes$1) {
	ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
	return ErrorTypes$1;
}({});
var NavigationFailureSymbol = Symbol("navigation failure");
var ErrorTypeMessages = {
	[ErrorTypes.MATCHER_NOT_FOUND]({ location, currentLocation }) {
		return `No match for\n ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
	},
	[ErrorTypes.NAVIGATION_GUARD_REDIRECT]({ from, to }) {
		return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
	},
	[ErrorTypes.NAVIGATION_ABORTED]({ from, to }) {
		return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
	},
	[ErrorTypes.NAVIGATION_CANCELLED]({ from, to }) {
		return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
	},
	[ErrorTypes.NAVIGATION_DUPLICATED]({ from, to }) {
		return `Avoided redundant navigation to current location: "${from.fullPath}".`;
	}
};
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	return assign(new Error(ErrorTypeMessages[type](params)), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
var propertiesToLog = [
	"params",
	"query",
	"hash"
];
function stringifyRoute(to) {
	if (typeof to === "string") return to;
	if (to.path != null) return to.path;
	const location = {};
	for (const key of propertiesToLog) if (key in to) location[key] = to[key];
	return JSON.stringify(location, null, 2);
}
/**
* Transforms a queryString into a {@link LocationQuery} object. Accept both, a
* version with the leading `?` and without Should work as URLSearchParams

* @internal
*
* @param search - search string to parse
* @returns a query object
*/
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
/**
* Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
* doesn't prepend a `?`
*
* @internal
*
* @param query - query object to stringify
* @returns string version of the query without the leading `?`
*/
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
			if (value$1 !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value$1 != null) search += "=" + value$1;
			}
		});
	}
	return search;
}
/**
* Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
* numbers into strings, removing keys with an undefined value and replacing
* undefined with null in arrays
*
* @param query - query object to normalize
* @returns a normalized query object
*/
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
/**
* RouteRecord being rendered by the closest ancestor Router View. Used for
* `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
* Location Matched
*
* @internal
*/
var matchedRouteKey = Symbol("router view location matched");
/**
* Allows overriding the router view depth to control which component in
* `matched` is rendered. rvd stands for Router View Depth
*
* @internal
*/
var viewDepthKey = Symbol("router view depth");
/**
* Allows overriding the router instance returned by `useRouter` in tests. r
* stands for router
*
* @internal
*/
var routerKey = Symbol("router");
/**
* Allows overriding the current route returned by `useRoute` in tests. rl
* stands for route location
*
* @internal
*/
var routeLocationKey = Symbol("route location");
/**
* Allows overriding the current route used by router-view. Internally this is
* used when the `route` prop is passed.
*
* @internal
*/
var routerViewLocationKey = Symbol("router view location");
/**
* Create a list of callbacks that can be reset. Used to create before and after navigation guards list
*/
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from)));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		if (guard.length > 2) {
			const message = `The "next" callback was never called inside of ${guard.name ? "\"" + guard.name + "\"" : ""}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
			if (typeof guardReturn === "object" && "then" in guardReturn) guardCall = guardCall.then((resolvedValue) => {
				if (!next._called) {
					warn$1(message);
					return Promise.reject(/* @__PURE__ */ new Error("Invalid navigation guard"));
				}
				return resolvedValue;
			});
			else if (guardReturn !== void 0) {
				if (!next._called) {
					warn$1(message);
					reject(/* @__PURE__ */ new Error("Invalid navigation guard"));
					return;
				}
			}
		}
		guardCall.catch((err) => reject(err));
	});
}
function canOnlyBeCalledOnce(next, to, from) {
	let called = 0;
	return function() {
		if (called++ === 1) warn$1(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
		next._called = true;
		if (called === 1) next.apply(null, arguments);
	};
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) {
		if (!record.components && record.children && !record.children.length) warn$1(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
		for (const name in record.components) {
			let rawComponent = record.components[name];
			if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
				warn$1(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
				throw new Error("Invalid route component");
			} else if ("then" in rawComponent) {
				warn$1(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
				const promise = rawComponent;
				rawComponent = () => promise;
			} else if (rawComponent.__asyncLoader && !rawComponent.__warnedDefineAsync) {
				rawComponent.__warnedDefineAsync = true;
				warn$1(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
			}
			if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
			if (isRouteComponent(rawComponent)) {
				const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
				guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
			} else {
				let componentPromise = rawComponent();
				if (!("catch" in componentPromise)) {
					warn$1(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
					componentPromise = Promise.resolve(componentPromise);
				}
				guards.push(() => componentPromise.then((resolved) => {
					if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
					const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
					record.mods[name] = resolved;
					record.components[name] = resolvedComponent;
					const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
					return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
				}));
			}
		}
	}
	return guards;
}
/**
* Split the leaving, updating, and entering records.
* @internal
*
* @param  to - Location we are navigating to
* @param from - Location we are navigating from
*/
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
/**
* Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
*
* @param routeLocation - routeLocation to format
* @param tooltip - optional tooltip
* @returns a copy of the routeLocation
*/
function formatRouteLocation(routeLocation, tooltip) {
	const copy = assign({}, routeLocation, { matched: routeLocation.matched.map((matched) => omit(matched, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: true,
		display: routeLocation.fullPath,
		tooltip,
		value: copy
	} };
}
function formatDisplay(display) {
	return { _custom: { display } };
}
var routerId = 0;
function addDevtools(app, router, matcher) {
	if (router.__hasDevtools) return;
	router.__hasDevtools = true;
	const id = routerId++;
	setupDevtoolsPlugin({
		id: "org.vuejs.router" + (id ? "." + id : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app
	}, (api) => {
		if (typeof api.now !== "function") warn$1("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
		api.on.inspectComponent((payload, ctx) => {
			if (payload.instanceData) payload.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: false,
				value: formatRouteLocation(router.currentRoute.value, "Current Route")
			});
		});
		api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
			if (componentInstance.__vrv_devtools) {
				const info = componentInstance.__vrv_devtools;
				node.tags.push({
					label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: PINK_500
				});
			}
			if (isArray(componentInstance.__vrl_devtools)) {
				componentInstance.__devtoolsApi = api;
				componentInstance.__vrl_devtools.forEach((devtoolsData) => {
					let label = devtoolsData.route.path;
					let backgroundColor = ORANGE_400;
					let tooltip = "";
					let textColor = 0;
					if (devtoolsData.error) {
						label = devtoolsData.error;
						backgroundColor = RED_100;
						textColor = RED_700;
					} else if (devtoolsData.isExactActive) {
						backgroundColor = LIME_500;
						tooltip = "This is exactly active";
					} else if (devtoolsData.isActive) {
						backgroundColor = BLUE_600;
						tooltip = "This link is active";
					}
					node.tags.push({
						label,
						textColor,
						tooltip,
						backgroundColor
					});
				});
			}
		});
		watch(router.currentRoute, () => {
			refreshRoutesView();
			api.notifyComponentUpdate();
			api.sendInspectorTree(routerInspectorId);
			api.sendInspectorState(routerInspectorId);
		});
		const navigationsLayerId = "router:navigations:" + id;
		api.addTimelineLayer({
			id: navigationsLayerId,
			label: `Router${id ? " " + id : ""} Navigations`,
			color: 4237508
		});
		router.onError((error, to) => {
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					title: "Error during Navigation",
					subtitle: to.fullPath,
					logType: "error",
					time: api.now(),
					data: { error },
					groupId: to.meta.__navigationId
				}
			});
		});
		let navigationId = 0;
		router.beforeEach((to, from) => {
			const data = {
				guard: formatDisplay("beforeEach"),
				from: formatRouteLocation(from, "Current Location during this navigation"),
				to: formatRouteLocation(to, "Target location")
			};
			Object.defineProperty(to.meta, "__navigationId", { value: navigationId++ });
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					time: api.now(),
					title: "Start of navigation",
					subtitle: to.fullPath,
					data,
					groupId: to.meta.__navigationId
				}
			});
		});
		router.afterEach((to, from, failure) => {
			const data = { guard: formatDisplay("afterEach") };
			if (failure) {
				data.failure = { _custom: {
					type: Error,
					readOnly: true,
					display: failure ? failure.message : "",
					tooltip: "Navigation Failure",
					value: failure
				} };
				data.status = formatDisplay("❌");
			} else data.status = formatDisplay("✅");
			data.from = formatRouteLocation(from, "Current Location during this navigation");
			data.to = formatRouteLocation(to, "Target location");
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					title: "End of navigation",
					subtitle: to.fullPath,
					time: api.now(),
					data,
					logType: failure ? "warning" : "default",
					groupId: to.meta.__navigationId
				}
			});
		});
		/**
		* Inspector of Existing routes
		*/
		const routerInspectorId = "router-inspector:" + id;
		api.addInspector({
			id: routerInspectorId,
			label: "Routes" + (id ? " " + id : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function refreshRoutesView() {
			if (!activeRoutesPayload) return;
			const payload = activeRoutesPayload;
			let routes = matcher.getRoutes().filter((route) => !route.parent || !route.parent.record.components);
			routes.forEach(resetMatchStateOnRouteRecord);
			if (payload.filter) routes = routes.filter((route) => isRouteMatching(route, payload.filter.toLowerCase()));
			routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
			payload.rootNodes = routes.map(formatRouteRecordForInspector);
		}
		let activeRoutesPayload;
		api.on.getInspectorTree((payload) => {
			activeRoutesPayload = payload;
			if (payload.app === app && payload.inspectorId === routerInspectorId) refreshRoutesView();
		});
		/**
		* Display information about the currently selected route record
		*/
		api.on.getInspectorState((payload) => {
			if (payload.app === app && payload.inspectorId === routerInspectorId) {
				const route = matcher.getRoutes().find((route$1) => route$1.record.__vd_id === payload.nodeId);
				if (route) payload.state = { options: formatRouteRecordMatcherForStateInspector(route) };
			}
		});
		api.sendInspectorTree(routerInspectorId);
		api.sendInspectorState(routerInspectorId);
	});
}
function modifierForKey(key) {
	if (key.optional) return key.repeatable ? "*" : "?";
	else return key.repeatable ? "+" : "";
}
function formatRouteRecordMatcherForStateInspector(route) {
	const { record } = route;
	const fields = [{
		editable: false,
		key: "path",
		value: record.path
	}];
	if (record.name != null) fields.push({
		editable: false,
		key: "name",
		value: record.name
	});
	fields.push({
		editable: false,
		key: "regexp",
		value: route.re
	});
	if (route.keys.length) fields.push({
		editable: false,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: true,
			display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
			tooltip: "Param keys",
			value: route.keys
		} }
	});
	if (record.redirect != null) fields.push({
		editable: false,
		key: "redirect",
		value: record.redirect
	});
	if (route.alias.length) fields.push({
		editable: false,
		key: "aliases",
		value: route.alias.map((alias) => alias.record.path)
	});
	if (Object.keys(route.record.meta).length) fields.push({
		editable: false,
		key: "meta",
		value: route.record.meta
	});
	fields.push({
		key: "score",
		editable: false,
		value: { _custom: {
			type: null,
			readOnly: true,
			display: route.score.map((score) => score.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: route.score
		} }
	});
	return fields;
}
/**
* Extracted from tailwind palette
*/
var PINK_500 = 15485081;
var BLUE_600 = 2450411;
var LIME_500 = 8702998;
var CYAN_400 = 2282478;
var ORANGE_400 = 16486972;
var DARK = 6710886;
var RED_100 = 16704226;
var RED_700 = 12131356;
function formatRouteRecordForInspector(route) {
	const tags = [];
	const { record } = route;
	if (record.name != null) tags.push({
		label: String(record.name),
		textColor: 0,
		backgroundColor: CYAN_400
	});
	if (record.aliasOf) tags.push({
		label: "alias",
		textColor: 0,
		backgroundColor: ORANGE_400
	});
	if (route.__vd_match) tags.push({
		label: "matches",
		textColor: 0,
		backgroundColor: PINK_500
	});
	if (route.__vd_exactActive) tags.push({
		label: "exact",
		textColor: 0,
		backgroundColor: LIME_500
	});
	if (route.__vd_active) tags.push({
		label: "active",
		textColor: 0,
		backgroundColor: BLUE_600
	});
	if (record.redirect) tags.push({
		label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: DARK
	});
	let id = record.__vd_id;
	if (id == null) {
		id = String(routeRecordId++);
		record.__vd_id = id;
	}
	return {
		id,
		label: record.path,
		tags,
		children: route.children.map(formatRouteRecordForInspector)
	};
}
var routeRecordId = 0;
var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
	const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
	route.__vd_exactActive = route.__vd_active = isExactActive;
	if (!isExactActive) route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
	route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
	route.__vd_match = false;
	route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
	const found = String(route.re).match(EXTRACT_REGEXP_RE);
	route.__vd_match = false;
	if (!found || found.length < 3) return false;
	if (new RegExp(found[1].replace(/\$$/, ""), found[2]).test(filter)) {
		route.children.forEach((child) => isRouteMatching(child, filter));
		if (route.record.path !== "/" || filter === "/") {
			route.__vd_match = route.re.test(filter);
			return true;
		}
		return false;
	}
	const path = route.record.path.toLowerCase();
	const decodedPath = decode(path);
	if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter))) return true;
	if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
	if (route.record.name && String(route.record.name).includes(filter)) return true;
	return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
	const ret = {};
	for (const key in obj) if (!keys.includes(key)) ret[key] = obj[key];
	return ret;
}
//#endregion
//#region node_modules/.pnpm/vue-router@4.6.4_vue@3.5.30/node_modules/vue-router/dist/vue-router.mjs
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var createBaseLocation = () => location.protocol + "//" + location.host;
/**
* Creates a normalized history location from a window.location object
* @param base - The base path
* @param location - The window.location object
*/
function createCurrentLocation(base, location$1) {
	const { pathname, search, hash } = location$1;
	const hashPos = base.indexOf("#");
	if (hashPos > -1) {
		let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
		let pathFromHash = hash.slice(slicePos);
		if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
		return stripBase(pathFromHash, "");
	}
	return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
	let listeners = [];
	let teardowns = [];
	let pauseState = null;
	const popStateHandler = ({ state }) => {
		const to = createCurrentLocation(base, location);
		const from = currentLocation.value;
		const fromState = historyState.value;
		let delta = 0;
		if (state) {
			currentLocation.value = to;
			historyState.value = state;
			if (pauseState && pauseState === from) {
				pauseState = null;
				return;
			}
			delta = fromState ? state.position - fromState.position : 0;
		} else replace(to);
		listeners.forEach((listener) => {
			listener(currentLocation.value, from, {
				delta,
				type: NavigationType.pop,
				direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
			});
		});
	};
	function pauseListeners() {
		pauseState = currentLocation.value;
	}
	function listen(callback) {
		listeners.push(callback);
		const teardown = () => {
			const index = listeners.indexOf(callback);
			if (index > -1) listeners.splice(index, 1);
		};
		teardowns.push(teardown);
		return teardown;
	}
	function beforeUnloadListener() {
		if (document.visibilityState === "hidden") {
			const { history: history$1 } = window;
			if (!history$1.state) return;
			history$1.replaceState(assign({}, history$1.state, { scroll: computeScrollPosition() }), "");
		}
	}
	function destroy() {
		for (const teardown of teardowns) teardown();
		teardowns = [];
		window.removeEventListener("popstate", popStateHandler);
		window.removeEventListener("pagehide", beforeUnloadListener);
		document.removeEventListener("visibilitychange", beforeUnloadListener);
	}
	window.addEventListener("popstate", popStateHandler);
	window.addEventListener("pagehide", beforeUnloadListener);
	document.addEventListener("visibilitychange", beforeUnloadListener);
	return {
		pauseListeners,
		listen,
		destroy
	};
}
/**
* Creates a state object
*/
function buildState(back, current, forward, replaced = false, computeScroll = false) {
	return {
		back,
		current,
		forward,
		replaced,
		position: window.history.length,
		scroll: computeScroll ? computeScrollPosition() : null
	};
}
function useHistoryStateNavigation(base) {
	const { history: history$1, location: location$1 } = window;
	const currentLocation = { value: createCurrentLocation(base, location$1) };
	const historyState = { value: history$1.state };
	if (!historyState.value) changeLocation(currentLocation.value, {
		back: null,
		current: currentLocation.value,
		forward: null,
		position: history$1.length - 1,
		replaced: true,
		scroll: null
	}, true);
	function changeLocation(to, state, replace$1) {
		/**
		* if a base tag is provided, and we are on a normal domain, we have to
		* respect the provided `base` attribute because pushState() will use it and
		* potentially erase anything before the `#` like at
		* https://github.com/vuejs/router/issues/685 where a base of
		* `/folder/#` but a base of `/` would erase the `/folder/` section. If
		* there is no host, the `<base>` tag makes no sense and if there isn't a
		* base tag we can just use everything after the `#`.
		*/
		const hashIndex = base.indexOf("#");
		const url = hashIndex > -1 ? (location$1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
		try {
			history$1[replace$1 ? "replaceState" : "pushState"](state, "", url);
			historyState.value = state;
		} catch (err) {
			warn$1("Error with push/replace State", err);
			location$1[replace$1 ? "replace" : "assign"](url);
		}
	}
	function replace(to, data) {
		changeLocation(to, assign({}, history$1.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
		currentLocation.value = to;
	}
	function push(to, data) {
		const currentState = assign({}, historyState.value, history$1.state, {
			forward: to,
			scroll: computeScrollPosition()
		});
		if (!history$1.state) warn$1("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\nhistory.replaceState(history.state, '', url)\n\nYou can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state");
		changeLocation(currentState.current, currentState, true);
		changeLocation(to, assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
		currentLocation.value = to;
	}
	return {
		location: currentLocation,
		state: historyState,
		push,
		replace
	};
}
/**
* Creates an HTML5 history. Most common history for single page applications.
*
* @param base -
*/
function createWebHistory(base) {
	base = normalizeBase(base);
	const historyNavigation = useHistoryStateNavigation(base);
	const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	function go(delta, triggerListeners = true) {
		if (!triggerListeners) historyListeners.pauseListeners();
		history.go(delta);
	}
	const routerHistory = assign({
		location: "",
		base,
		go,
		createHref: createHref.bind(null, base)
	}, historyNavigation, historyListeners);
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => historyNavigation.location.value
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => historyNavigation.state.value
	});
	return routerHistory;
}
var TokenType = /* @__PURE__ */ function(TokenType$1) {
	TokenType$1[TokenType$1["Static"] = 0] = "Static";
	TokenType$1[TokenType$1["Param"] = 1] = "Param";
	TokenType$1[TokenType$1["Group"] = 2] = "Group";
	return TokenType$1;
}({});
var TokenizerState = /* @__PURE__ */ function(TokenizerState$1) {
	TokenizerState$1[TokenizerState$1["Static"] = 0] = "Static";
	TokenizerState$1[TokenizerState$1["Param"] = 1] = "Param";
	TokenizerState$1[TokenizerState$1["ParamRegExp"] = 2] = "ParamRegExp";
	TokenizerState$1[TokenizerState$1["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
	TokenizerState$1[TokenizerState$1["EscapeNext"] = 4] = "EscapeNext";
	return TokenizerState$1;
}(TokenizerState || {});
var ROOT_TOKEN = {
	type: TokenType.Static,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = TokenizerState.Static;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === TokenizerState.Static) segment.push({
			type: TokenType.Static,
			value: buffer
		});
		else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: TokenType.Param,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		if (char === "\\" && state !== TokenizerState.ParamRegExp) {
			previousState = state;
			state = TokenizerState.EscapeNext;
			continue;
		}
		switch (state) {
			case TokenizerState.Static:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = TokenizerState.Param;
				} else addCharToBuffer();
				break;
			case TokenizerState.EscapeNext:
				addCharToBuffer();
				state = previousState;
				break;
			case TokenizerState.Param:
				if (char === "(") state = TokenizerState.ParamRegExp;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = TokenizerState.Static;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case TokenizerState.ParamRegExp:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = TokenizerState.ParamRegExpEnd;
				else customRe += char;
				break;
			case TokenizerState.ParamRegExpEnd:
				consumeBuffer();
				state = TokenizerState.Static;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === TokenizerState.ParamRegExp) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var PathScore = /* @__PURE__ */ function(PathScore$1) {
	PathScore$1[PathScore$1["_multiplier"] = 10] = "_multiplier";
	PathScore$1[PathScore$1["Root"] = 90] = "Root";
	PathScore$1[PathScore$1["Segment"] = 40] = "Segment";
	PathScore$1[PathScore$1["SubSegment"] = 30] = "SubSegment";
	PathScore$1[PathScore$1["Static"] = 40] = "Static";
	PathScore$1[PathScore$1["Dynamic"] = 20] = "Dynamic";
	PathScore$1[PathScore$1["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
	PathScore$1[PathScore$1["BonusWildcard"] = -50] = "BonusWildcard";
	PathScore$1[PathScore$1["BonusRepeatable"] = -20] = "BonusRepeatable";
	PathScore$1[PathScore$1["BonusOptional"] = -8] = "BonusOptional";
	PathScore$1[PathScore$1["BonusStrict"] = .7000000000000001] = "BonusStrict";
	PathScore$1[PathScore$1["BonusCaseSensitive"] = .25] = "BonusCaseSensitive";
	return PathScore$1;
}(PathScore || {});
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [PathScore.Root];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
			if (token.type === TokenType.Static) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += PathScore.Static;
			} else if (token.type === TokenType.Param) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re$1 !== BASE_PARAM_PATTERN) {
					subSegmentScore += PathScore.BonusCustomRegExp;
					try {
						`${re$1}`;
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += PathScore.Dynamic;
				if (optional) subSegmentScore += PathScore.BonusOptional;
				if (repeatable) subSegmentScore += PathScore.BonusRepeatable;
				if (re$1 === ".*") subSegmentScore += PathScore.BonusWildcard;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += PathScore.BonusStrict;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === TokenType.Static) path += token.value;
			else if (token.type === TokenType.Param) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const parser = tokensToParser(tokenizePath(record.path), options);
	{
		const existingKeys = /* @__PURE__ */ new Set();
		for (const key of parser.keys) {
			if (existingKeys.has(key.name)) warn$1(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
			existingKeys.add(key.name);
		}
	}
	const matcher = assign(parser, {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			if (normalizedRecord.path === "*") throw new Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (parent && path[0] === "/") checkMissingParamsInAbsolutePath(matcher, parent);
			if (originalRecord) {
				originalRecord.alias.push(matcher);
				checkSameParams(originalRecord, matcher);
			} else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) {
					checkSameNameAsAncestor(record, parent);
					removeRoute(record.name);
				}
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop$1;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location$1, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location$1 && location$1.name) {
			matcher = matcherMap.get(location$1.name);
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location: location$1 });
			{
				const invalidParams = Object.keys(location$1.params || {}).filter((paramName) => !matcher.keys.find((k) => k.name === paramName));
				if (invalidParams.length) warn$1(`Discarded invalid param(s) "${invalidParams.join("\", \"")}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
			}
			name = matcher.record.name;
			params = assign(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location$1.params && pickParams(location$1.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location$1.path != null) {
			path = location$1.path;
			if (!path.startsWith("/")) warn$1(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
				location: location$1,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location$1.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function isSameParam(a, b) {
	return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
* Check if a path and its alias have the same required params
*
* @param a - original record
* @param b - alias record
*/
function checkSameParams(a, b) {
	for (const key of a.keys) if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn$1(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
	for (const key of b.keys) if (!key.optional && !a.keys.find(isSameParam.bind(null, key))) return warn$1(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
}
/**
* A route with a name and a child with an empty path without a name should warn when adding the route
*
* @param mainNormalizedRecord - RouteRecordNormalized
* @param parent - RouteRecordMatcher
*/
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
	if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) warn$1(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function checkSameNameAsAncestor(record, parent) {
	for (let ancestor = parent; ancestor; ancestor = ancestor.parent) if (ancestor.record.name === record.name) throw new Error(`A route named "${String(record.name)}" has been added as a ${parent === ancestor ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function checkMissingParamsInAbsolutePath(record, parent) {
	for (const key of parent.keys) if (!record.keys.find(isSameParam.bind(null, key))) return warn$1(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) {
		upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
		if (upper < 0) warn$1(`Finding ancestor route "${insertionAncestor.record.path}" failed for "${matcher.record.path}"`);
	}
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = inject(routerKey);
	const currentRoute = inject(routeLocationKey);
	let hasPrevious = false;
	let previousTo = null;
	const route = computed(() => {
		const to = unref(props.to);
		if (!hasPrevious || to !== previousTo) {
			if (!isRouteLocation(to)) if (hasPrevious) warn$1(`Invalid value for prop "to" in useLink()\n- to:`, to, `\n- previous to:`, previousTo, `\n- props:`, props);
			else warn$1(`Invalid value for prop "to" in useLink()\n- to:`, to, `\n- props:`, props);
			previousTo = to;
			hasPrevious = true;
		}
		return router.resolve(to);
	});
	const activeRecordIndex = computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent$1(e)) {
			const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	if (isBrowser$1) {
		const instance = getCurrentInstance();
		if (instance) {
			const linkContextDevtools = {
				route: route.value,
				isActive: isActive.value,
				isExactActive: isExactActive.value,
				error: null
			};
			instance.__vrl_devtools = instance.__vrl_devtools || [];
			instance.__vrl_devtools.push(linkContextDevtools);
			watchEffect(() => {
				linkContextDevtools.route = route.value;
				linkContextDevtools.isActive = isActive.value;
				linkContextDevtools.isExactActive = isExactActive.value;
				linkContextDevtools.error = isRouteLocation(unref(props.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = /* @__PURE__ */ reactive(useLink(props));
		const { options } = inject(routerKey);
		const elClass = computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : h$5("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent$1(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		warnDeprecatedUsage();
		const injectedRoute = inject(routerViewLocationKey);
		const routeToDisplay = computed(() => props.route || injectedRoute.value);
		const injectedDepth = inject(viewDepthKey, 0);
		const depth = computed(() => {
			let initialDepth = unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = /* @__PURE__ */ ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = h$5(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			if (isBrowser$1 && component.ref) {
				const info = {
					depth: depth.value,
					name: matchedRoute.name,
					path: matchedRoute.path,
					meta: matchedRoute.meta
				};
				(isArray(component.ref) ? component.ref.map((r) => r.i) : [component.ref.i]).forEach((instance) => {
					instance.__vrv_devtools = info;
				});
			}
			return normalizeSlot(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
	const instance = getCurrentInstance();
	const parentName = instance.parent && instance.parent.type.name;
	const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
	if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
		const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
		warn$1(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>\n    <component :is="Component" />\n  </${comp}>\n</router-view>`);
	}
}
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	if (!routerHistory) throw new Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = /* @__PURE__ */ shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser$1 && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			if (!parent) warn$1(`Parent route "${String(parentOrRoute)}" not found when adding child route`, route);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
		else warn$1(`Cannot remove non-existent route "${String(name)}"`);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute$1 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href$1 = routerHistory.createHref(locationNormalized.fullPath);
			if (href$1.startsWith("//")) warn$1(`Location "${rawLocation}" resolved to "${href$1}". A resolved location cannot start with multiple slashes.`);
			else if (!matchedRoute$1.matched.length) warn$1(`No match found for location with path "${rawLocation}"`);
			return assign(locationNormalized, matchedRoute$1, {
				params: decodeParams(matchedRoute$1.params),
				hash: decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href: href$1
			});
		}
		if (!isRouteLocation(rawLocation)) {
			warn$1(`router.resolve() was passed an invalid location. This will fail in production.\n- Location:`, rawLocation);
			return resolve({});
		}
		let matcherLocation;
		if (rawLocation.path != null) {
			if ("params" in rawLocation && !("name" in rawLocation) && Object.keys(rawLocation.params).length) warn$1(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
			matcherLocation = assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		} else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		if (hash && !hash.startsWith("#")) warn$1(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		if (href.startsWith("//")) warn$1(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
		else if (!matchedRoute.matched.length) warn$1(`No match found for location with path "${rawLocation.path != null ? rawLocation.path : rawLocation}"`);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			if (newTargetLocation.path == null && !("name" in newTargetLocation)) {
				warn$1(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
				throw new Error("Invalid redirect");
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace$1 = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace: replace$1
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure$1) => {
			if (failure$1) {
				if (isNavigationFailure(failure$1, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					if (isSameRouteLocation(stringifyQuery$1, resolve(failure$1.to), toLocation) && redirectedFrom && (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 30) {
						warn$1(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.\n Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
						return Promise.reject(/* @__PURE__ */ new Error("Infinite redirect in navigation guard"));
					}
					return pushWithRedirect(assign({ replace: replace$1 }, locationAsObject(failure$1.to), {
						state: typeof failure$1.to === "object" ? assign({}, data, failure$1.to.state) : data,
						force
					}), redirectedFrom || toLocation);
				}
			} else failure$1 = finalizeNavigation(toLocation, from, true, replace$1, data);
			triggerAfterEach(toLocation, from, failure$1);
			return failure$1;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace$1, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = !isBrowser$1 ? {} : history.state;
		if (isPush) if (replace$1 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop$1);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			if (isBrowser$1) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED)) return error;
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop$1);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop$1);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else {
			warn$1("uncaught error during route navigation:");
			console.error(error);
		}
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve$1, reject) => {
			readyHandlers.add([resolve$1, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve$1, reject]) => err ? reject(err) : resolve$1());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser$1 || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			if (isBrowser$1 && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {
					warn$1("Unexpected error when starting the router:", err);
				});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, /* @__PURE__ */ shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
			if (isBrowser$1) addDevtools(app, router, matcher);
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
/**
* Returns the router instance. Equivalent to using `$router` inside
* templates.
*/
function useRouter() {
	return inject(routerKey);
}
/**
* Returns the current route location. Equivalent to using `$route` inside
* templates.
*/
function useRoute(_name) {
	return inject(routeLocationKey);
}
//#endregion
//#region node_modules/.pnpm/@vuepress+client@2.0.0-rc.26/node_modules/@vuepress/client/dist/chunk-YWDQ52BP.js
var clientDataSymbol = Symbol("");
var useClientData = () => {
	const clientData = inject(clientDataSymbol);
	if (!clientData) throw new Error("useClientData() is called without provider.");
	return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutePath = () => useClientData().routePath;
var useSiteData = () => useClientData().siteData;
var useData = useClientData;
var useFrontmatter = usePageFrontmatter;
var useLang = usePageLang;
var usePage = usePageData;
var contentUpdatedCallbacks = /* @__PURE__ */ new Set();
var onContentUpdated = (fn) => {
	contentUpdatedCallbacks.add(fn);
	onUnmounted(() => {
		contentUpdatedCallbacks.delete(fn);
	});
};
var updateHeadSymbol = Symbol("");
var redirects = /* @__PURE__ */ shallowRef(redirects$1);
var routes = /* @__PURE__ */ shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
	const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
	if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
	const encodedRoutePath = encodeURI(normalizedRoutePath);
	if (routes.value[encodedRoutePath]) return encodedRoutePath;
	const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
	if (redirectedRoutePath) return redirectedRoutePath;
	return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
	const { pathname, hashAndQueries } = splitPath(path);
	const routePath = resolveRoutePath(pathname, currentPath);
	const routeFullPath = routePath + hashAndQueries;
	if (!routes.value[routePath]) return {
		...routes.value["/404.html"],
		path: routeFullPath,
		notFound: true
	};
	return {
		...routes.value[routePath],
		path: routeFullPath,
		notFound: false
	};
};
var resolveRouteFullPath = (path, currentPath) => {
	const { pathname, hashAndQueries } = splitPath(path);
	return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event) => {
	if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;
	if (event.button !== void 0 && event.button !== 0) return;
	if (event.currentTarget) {
		if (event.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)) return;
	}
	event.preventDefault();
	return true;
};
var RouteLink = /* @__PURE__ */ defineComponent({
	name: "RouteLink",
	props: {
		to: {
			type: String,
			required: true
		},
		active: Boolean,
		activeClass: {
			type: String,
			default: "route-link-active"
		}
	},
	slots: Object,
	setup(props, { slots }) {
		const router = useRouter();
		const route = useRoute();
		const path = computed(() => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `/${resolveRouteFullPath(props.to, route.path).substring(1)}`);
		return () => h$5("a", {
			class: ["route-link", { [props.activeClass]: props.active }],
			href: path.value,
			onClick: (event = {}) => {
				if (guardEvent(event)) router.push(props.to).catch();
			}
		}, slots.default());
	}
});
var AutoLink = /* @__PURE__ */ defineComponent({
	name: "AutoLink",
	props: { config: {
		type: Object,
		required: true
	} },
	slots: Object,
	setup(props, { slots }) {
		const config = /* @__PURE__ */ toRef$1(props, "config");
		const route = useRoute();
		const siteData = useSiteData();
		const withProtocol = computed(() => isLinkWithProtocol(config.value.link));
		const linkTarget = computed(() => config.value.target || (withProtocol.value ? "_blank" : void 0));
		const isBlankTarget = computed(() => linkTarget.value === "_blank");
		const isInternal = computed(() => !withProtocol.value && !isBlankTarget.value);
		const linkRel = computed(() => config.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null));
		const linkAriaLabel = computed(() => config.value.ariaLabel ?? config.value.text);
		const shouldBeActiveInSubpath = computed(() => {
			if (config.value.exact) return false;
			const localePaths = Object.keys(siteData.value.locales);
			return localePaths.length ? localePaths.every((key) => key !== config.value.link) : config.value.link !== "/";
		});
		const isActive = computed(() => {
			if (!isInternal.value) return false;
			if (config.value.activeMatch) return (config.value.activeMatch instanceof RegExp ? config.value.activeMatch : new RegExp(config.value.activeMatch, "u")).test(route.path);
			if (shouldBeActiveInSubpath.value) return route.path.startsWith(config.value.link);
			return route.path === config.value.link;
		});
		return () => {
			const { before, after, default: defaultSlot } = slots;
			const content = defaultSlot?.(config.value) ?? [
				before?.(config.value),
				config.value.text,
				after?.(config.value)
			];
			return isInternal.value ? h$5(RouteLink, {
				"class": "auto-link",
				"to": config.value.link,
				"active": isActive.value,
				"aria-label": linkAriaLabel.value
			}, () => content) : h$5("a", {
				"class": "auto-link external-link",
				"href": config.value.link,
				"aria-label": linkAriaLabel.value,
				"rel": linkRel.value,
				"target": linkTarget.value
			}, content);
		};
	}
});
var ClientOnly = /* @__PURE__ */ defineComponent({
	name: "ClientOnly",
	setup(_, ctx) {
		const isMounted = /* @__PURE__ */ ref(false);
		onMounted(() => {
			isMounted.value = true;
		});
		return () => isMounted.value ? ctx.slots.default?.() : null;
	}
});
var runContentUpdatedCallbacks = (reason) => {
	contentUpdatedCallbacks.forEach((fn) => fn(reason));
};
var Content = /* @__PURE__ */ defineComponent({
	name: "Content",
	props: { path: {
		type: String,
		required: false,
		default: ""
	} },
	setup(props) {
		const pageComponent = usePageComponent();
		const ContentComponent = computed(() => {
			if (!props.path) return pageComponent.value;
			const route = resolveRoute(props.path);
			return /* @__PURE__ */ defineAsyncComponent(async () => route.loader().then(({ comp }) => comp));
		});
		watch(usePageFrontmatter(), () => {
			runContentUpdatedCallbacks("updated");
		}, {
			deep: true,
			flush: "post"
		});
		return () => h$5(ContentComponent.value, {
			onVnodeMounted: () => {
				runContentUpdatedCallbacks("mounted");
			},
			onVnodeUpdated: () => {
				runContentUpdatedCallbacks("updated");
			},
			onVnodeBeforeUnmount: () => {
				runContentUpdatedCallbacks("beforeUnmount");
			}
		});
	}
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = /* @__PURE__ */ reactive({
	resolveLayouts: (clientConfigs) => clientConfigs.reduce((prev, item) => ({
		...prev,
		...item.layouts
	}), {}),
	resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
		const description = isString$1(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
		return dedupeHead([
			...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
			...siteLocaleDate.head,
			[
				"title",
				{},
				pageHeadTitle
			],
			["meta", {
				name: "description",
				content: description
			}]
		]);
	},
	resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
	resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
	resolvePageLayout: (pageData, layouts) => {
		const layoutName = isString$1(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
		if (!layouts[layoutName]) throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
		return layouts[layoutName];
	},
	resolveRouteLocale: (locales, routePath) => resolveLocalePath(locales, decodeURI(routePath)),
	resolveSiteLocaleData: ({ base, locales, ...siteData }, routeLocale) => ({
		...siteData,
		...locales[routeLocale],
		head: [...locales[routeLocale]?.head ?? [], ...siteData.head]
	})
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
	if (isLinkHttp(url)) return url;
	return `/${removeLeadingSlash(url)}`;
};
//#endregion
//#region node_modules/.pnpm/@vuepress+client@2.0.0-rc.26/node_modules/@vuepress/client/dist/chunk-MLKGABMK.js
var __defProp$2 = Object.defineProperty;
var __export = (target, all) => {
	for (var name in all) __defProp$2(target, name, {
		get: all[name],
		enumerable: true
	});
};
//#endregion
//#region node_modules/.pnpm/@vuepress+client@2.0.0-rc.26/node_modules/@vuepress/client/dist/chunk-XZCIWC7J.js
var constants_exports = {};
__export(constants_exports, {
	COMPONENT_STATE_TYPE: () => COMPONENT_STATE_TYPE,
	INSPECTOR_ID: () => INSPECTOR_ID,
	INSPECTOR_LABEL: () => INSPECTOR_LABEL,
	INSPECTOR_NODES: () => INSPECTOR_NODES,
	INSPECTOR_STATE_SECTION_NAME: () => INSPECTOR_STATE_SECTION_NAME,
	PLUGIN_ID: () => PLUGIN_ID,
	PLUGIN_LABEL: () => PLUGIN_LABEL
});
var PLUGIN_ID = "org.vuejs.vuepress";
var PLUGIN_LABEL = "VuePress";
var COMPONENT_STATE_TYPE = PLUGIN_LABEL;
var INSPECTOR_ID = PLUGIN_ID;
var INSPECTOR_LABEL = PLUGIN_LABEL;
var INSPECTOR_NODE_INTERNAL = {
	id: "INTERNAL",
	label: "Internal",
	keys: [
		"layouts",
		"routes",
		"redirects"
	]
};
var INSPECTOR_NODE_SITE = {
	id: "SITE",
	label: "Site",
	keys: ["siteData", "siteLocaleData"]
};
var INSPECTOR_NODE_ROUTE = {
	id: "ROUTE",
	label: "Route",
	keys: ["routePath", "routeLocale"]
};
var INSPECTOR_NODE_PAGE = {
	id: "PAGE",
	label: "Page",
	keys: [
		"pageData",
		"pageFrontmatter",
		"pageLang",
		"pageHead",
		"pageHeadTitle",
		"pageLayout",
		"pageComponent"
	]
};
var INSPECTOR_NODES = {
	[INSPECTOR_NODE_INTERNAL.id]: INSPECTOR_NODE_INTERNAL,
	[INSPECTOR_NODE_SITE.id]: INSPECTOR_NODE_SITE,
	[INSPECTOR_NODE_ROUTE.id]: INSPECTOR_NODE_ROUTE,
	[INSPECTOR_NODE_PAGE.id]: INSPECTOR_NODE_PAGE
};
var INSPECTOR_STATE_SECTION_NAME = "State", r$8 = (r = !0) => {
	let { frontmatter: i, page: a } = useData();
	return computed(() => i.value.contributors === !1 || !toValue(r) ? [] : a.value.git.contributors ?? []);
}, p$4 = (e) => e !== void 0, h$4 = (e) => typeof e == `number`, g$2 = (e) => Array.isArray(e), v$3 = (e, t) => isString$1(e) && e.startsWith(t), y$2 = (e, t) => isString$1(e) && e.endsWith(t), { entries: b$3 } = Object, { fromEntries: x$3 } = Object, S$2 = (e) => Object.keys(e), { values: C$3 } = Object, w = (e, ...t) => {
	if (t.length === 0) return e;
	let n = t.shift();
	return n && b$3(n).forEach(([t, r]) => {
		t === `__proto__` || t === `constructor` || (isPlainObject(e[t]) && isPlainObject(r) ? w(e[t], r) : g$2(r) ? e[t] = [...r] : isPlainObject(r) ? e[t] = { ...r } : e[t] = n[t]);
	}), w(e, ...t);
}, T$1 = (e) => {
	if (e) {
		if (typeof e == `number`) return new Date(e);
		let t = Date.parse(e.toString());
		if (!Number.isNaN(t)) return new Date(t);
	}
	return null;
}, D$1 = (e) => v$3(e, `/`) && e[1] !== `/`;
//#endregion
//#region node_modules/.pnpm/fflate@0.8.2/node_modules/fflate/esm/browser.js
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new i32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return {
		b,
		r
	};
};
var _a$1 = freb(fleb, 2), fl = _a$1.b, revfl = _a$1.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
_b.b;
_b.r;
var rev = new u16(32768);
for (var i$7 = 0; i$7 < 32768; ++i$7) {
	var x$2 = (i$7 & 43690) >> 1 | (i$7 & 21845) << 1;
	x$2 = (x$2 & 52428) >> 2 | (x$2 & 13107) << 2;
	x$2 = (x$2 & 61680) >> 4 | (x$2 & 3855) << 4;
	rev[i$7] = ((x$2 & 65280) >> 8 | (x$2 & 255) << 8) >> 1;
}
var flt = new u8(288);
for (var i$7 = 0; i$7 < 144; ++i$7) flt[i$7] = 8;
for (var i$7 = 144; i$7 < 256; ++i$7) flt[i$7] = 9;
for (var i$7 = 256; i$7 < 280; ++i$7) flt[i$7] = 7;
for (var i$7 = 280; i$7 < 288; ++i$7) flt[i$7] = 8;
var fdt = new u8(32);
for (var i$7 = 0; i$7 < 32; ++i$7) fdt[i$7] = 5;
var ec = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
];
var err = function(ind, msg, nt) {
	var e = new Error(msg || ec[ind]);
	e.code = ind;
	if (Error.captureStackTrace) Error.captureStackTrace(e, err);
	if (!nt) throw e;
	return e;
};
var ln = function(n, l, d) {
	return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var et = /* @__PURE__ */ new u8(0);
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
try {
	td.decode(et, { stream: true });
} catch (e) {}
//#endregion
//#region node_modules/.pnpm/@vueuse+shared@14.2.1_vue@3.5.30/node_modules/@vueuse/shared/dist/index.js
/**
* Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
*
* @param fn
*/
function tryOnScopeDispose(fn, failSilently) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
		return true;
	}
	return false;
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
/**
* On the basis of `inject`, it is allowed to directly call inject to obtain the value after call provide in the same component.
*
* @example
* ```ts
* injectLocal('MyInjectionKey', 1)
* const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
* ```
*
* @__NO_SIDE_EFFECTS__
*/
var injectLocal = (...args) => {
	var _getCurrentInstance;
	const key = args[0];
	const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
	const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
	if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
	if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
	return inject(...args);
};
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {};
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _window, _window2, _window3;
	return isClient && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function toRef(...args) {
	if (args.length !== 1) return /* @__PURE__ */ toRef$1(...args);
	const r = args[0];
	return typeof r === "function" ? /* @__PURE__ */ readonly(customRef(() => ({
		get: r,
		set: noop
	}))) : /* @__PURE__ */ ref(r);
}
/**
* @internal
*/
function createFilterWrapper(filter, fn) {
	function wrapper(...args) {
		return new Promise((resolve, reject) => {
			Promise.resolve(filter(() => fn.apply(this, args), {
				fn,
				thisArg: this,
				args
			})).then(resolve).catch(reject);
		});
	}
	return wrapper;
}
var bypassFilter = (invoke$1) => {
	return invoke$1();
};
/**
* Create an EventFilter that debounce the events
*/
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	const _clearTimeout = (timer$1) => {
		clearTimeout(timer$1);
		lastRejector();
		lastRejector = noop;
	};
	let lastInvoker;
	const filter = (invoke$1) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = void 0;
			}
			return Promise.resolve(invoke$1());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			lastInvoker = invoke$1;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = void 0;
				resolve(lastInvoker());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = void 0;
				resolve(invoke$1());
			}, duration);
		});
	};
	return filter;
}
function throttleFilter(...args) {
	let lastExec = 0;
	let timer;
	let isLeading = true;
	let lastRejector = noop;
	let lastValue;
	let ms;
	let trailing;
	let leading;
	let rejectOnCancel;
	if (!/* @__PURE__ */ isRef(args[0]) && typeof args[0] === "object") ({delay: ms, trailing = true, leading = true, rejectOnCancel = false} = args[0]);
	else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
	const clear = () => {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
			lastRejector();
			lastRejector = noop;
		}
	};
	const filter = (_invoke) => {
		const duration = toValue(ms);
		const elapsed = Date.now() - lastExec;
		const invoke$1 = () => {
			return lastValue = _invoke();
		};
		clear();
		if (duration <= 0) {
			lastExec = Date.now();
			return invoke$1();
		}
		if (elapsed > duration) {
			lastExec = Date.now();
			if (leading || !isLeading) invoke$1();
		} else if (trailing) lastValue = new Promise((resolve, reject) => {
			lastRejector = rejectOnCancel ? reject : resolve;
			timer = setTimeout(() => {
				lastExec = Date.now();
				isLeading = true;
				resolve(invoke$1());
				clear();
			}, Math.max(0, duration - elapsed));
		});
		if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
		isLeading = false;
		return lastValue;
	};
	return filter;
}
/**
* EventFilter that gives extra controls to pause and resume the filter
*
* @param extendFilter  Extra filter to apply when the PausableFilter is active, default to none
* @param options Options to configure the filter
*/
function pausableFilter(extendFilter = bypassFilter, options = {}) {
	const { initialState = "active" } = options;
	const isActive = toRef(initialState === "active");
	function pause() {
		isActive.value = false;
	}
	function resume() {
		isActive.value = true;
	}
	const eventFilter = (...args) => {
		if (isActive.value) extendFilter(...args);
	};
	return {
		isActive: /* @__PURE__ */ readonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
/**
* Create singleton promise function
*
* @example
* ```
* const promise = createSingletonPromise(async () => { ... })
*
* await promise()
* await promise() // all of them will be bind to a single promise instance
* await promise() // and be resolved together
* ```
*/
function createSingletonPromise(fn) {
	let _promise;
	function wrapper() {
		if (!_promise) _promise = fn();
		return _promise;
	}
	wrapper.reset = async () => {
		const _prev = _promise;
		_promise = void 0;
		if (_prev) await _prev;
	};
	return wrapper;
}
/**
* Get a px value for SSR use, do not rely on this method outside of SSR as REM unit is assumed at 16px, which might not be the case on the client
*/
function pxValue(px) {
	return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function cacheStringFunction(fn) {
	const cache = Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
/**
* Debounce execution of a function.
*
* @see https://vueuse.org/useDebounceFn
* @param  fn          A function to be executed after delay milliseconds debounced.
* @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
* @param  options     Options
*
* @return A new, debounce, function.
*
* @__NO_SIDE_EFFECTS__
*/
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
/**
* Throttle execution of a function. Especially useful for rate limiting
* execution of handlers on events like resize and scroll.
*
* @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
*                                    to `callback` when the throttled-function is executed.
* @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
*                                    (default value: 200)
*
* @param [trailing] if true, call fn again after the time is up (default value: false)
*
* @param [leading] if true, call fn on the leading edge of the ms timeout (default value: true)
*
* @param [rejectOnCancel] if true, reject the last call if it's been cancel (default value: false)
*
* @return  A new, throttled, function.
*
* @__NO_SIDE_EFFECTS__
*/
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
	return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
/** @deprecated Use Vue's built-in `watch` instead. This function will be removed in future version. */
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
	return {
		stop: watchWithFilter(source, cb, {
			...watchOptions,
			eventFilter
		}),
		pause,
		resume,
		isActive
	};
}
/**
* Call onMounted() if it's inside a component lifecycle, if not, just call the function
*
* @param fn
* @param sync if set to false, it will run in the nextTick() of Vue
* @param target
*/
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget(target)) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
/**
* Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
*
* @param fn
* @param target
*/
function tryOnUnmounted(fn, target) {
	if (getLifeCycleTarget(target)) onUnmounted(fn, target);
}
/**
* Wrapper for `setTimeout` with controls.
*
* @param cb
* @param interval
* @param options
*/
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const isPending = /* @__PURE__ */ shallowRef(false);
	let timer;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		if (immediateCallback) cb();
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = void 0;
			cb(...args);
		}, toValue(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: /* @__PURE__ */ shallowReadonly(isPending),
		start,
		stop
	};
}
/**
* A boolean ref with a toggler
*
* @see https://vueuse.org/useToggle
* @param [initialValue]
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useToggle(initialValue = false, options = {}) {
	const { truthyValue = true, falsyValue = false } = options;
	const valueIsRef = /* @__PURE__ */ isRef(initialValue);
	const _value = /* @__PURE__ */ shallowRef(initialValue);
	function toggle(value) {
		if (arguments.length) {
			_value.value = value;
			return _value.value;
		} else {
			const truthy = toValue(truthyValue);
			_value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
			return _value.value;
		}
	}
	if (valueIsRef) return toggle;
	else return [_value, toggle];
}
/**
* Shorthand for watching value with {immediate: true}
*
* @see https://vueuse.org/watchImmediate
*/
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
//#endregion
//#region node_modules/.pnpm/@vueuse+core@14.2.1_vue@3.5.30/node_modules/@vueuse/core/dist/index.js
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
isClient && window.location;
/**
* Get the dom element of a ref of element or Vue component instance
*
* @param elRef
*/
function unrefElement(elRef) {
	var _$el;
	const plain = toValue(elRef);
	return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	return watchImmediate(() => {
		var _firstParamTargets$va, _firstParamTargets$va2;
		return [
			(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
		if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
		const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
		onCleanup(() => {
			cleanups.forEach((fn) => fn());
		});
	}, { flush: "post" });
}
/**
* Mounted state in ref.
*
* @see https://vueuse.org/useMounted
*
* @__NO_SIDE_EFFECTS__
*/
function useMounted() {
	const isMounted = /* @__PURE__ */ shallowRef(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
/* @__NO_SIDE_EFFECTS__ */
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
/**
* Watch for changes being made to the DOM tree.
*
* @see https://vueuse.org/useMutationObserver
* @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
* @param target
* @param callback
* @param options
*/
function useMutationObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, ...mutationOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "MutationObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const items = toArray(toValue(target)).map(unrefElement).filter(notNullish);
		return new Set(items);
	}), (newTargets) => {
		cleanup();
		if (isSupported.value && newTargets.size) {
			observer = new MutationObserver(callback);
			newTargets.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
/**
* Fires when the element or any element containing it is removed.
*
* @param target
* @param callback
* @param options
*/
function onElementRemoval(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, document: document$1 = window$1 === null || window$1 === void 0 ? void 0 : window$1.document, flush = "sync" } = options;
	if (!window$1 || !document$1) return noop;
	let stopFn;
	const cleanupAndUpdate = (fn) => {
		stopFn === null || stopFn === void 0 || stopFn();
		stopFn = fn;
	};
	const stopWatch = watchEffect(() => {
		const el = unrefElement(target);
		if (el) {
			const { stop } = useMutationObserver(document$1, (mutationsList) => {
				if (mutationsList.map((mutation) => [...mutation.removedNodes]).flat().some((node) => node === el || node.contains(el))) callback(mutationsList);
			}, {
				window: window$1,
				childList: true,
				subtree: true
			});
			cleanupAndUpdate(stop);
		}
	}, { flush });
	const stopHandle = () => {
		stopWatch();
		cleanupAndUpdate();
	};
	tryOnScopeDispose(stopHandle);
	return stopHandle;
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function useSSRWidth() {
	const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
	return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
/**
* Reactive Media Query.
*
* @see https://vueuse.org/useMediaQuery
* @param query
* @param options
*/
function useMediaQuery(query, options = {}) {
	const { window: window$1 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "matchMedia" in window$1 && typeof window$1.matchMedia === "function");
	const ssrSupport = /* @__PURE__ */ shallowRef(typeof ssrWidth === "number");
	const mediaQuery = /* @__PURE__ */ shallowRef();
	const matches = /* @__PURE__ */ shallowRef(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	watchEffect(() => {
		if (ssrSupport.value) {
			ssrSupport.value = !isSupported.value;
			matches.value = toValue(query).split(",").some((queryString) => {
				const not = queryString.includes("not all");
				const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				let res = Boolean(minWidth || maxWidth);
				if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
				if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
				return not ? !res : res;
			});
			return;
		}
		if (!isSupported.value) return;
		mediaQuery.value = window$1.matchMedia(toValue(query));
		matches.value = mediaQuery.value.matches;
	});
	useEventListener(mediaQuery, "change", handler, { passive: true });
	return computed(() => matches.value);
}
/**
* Reactive Permissions API.
*
* @see https://vueuse.org/usePermission
*
* @__NO_SIDE_EFFECTS__
*/
function usePermission(permissionDesc, options = {}) {
	const { controls = false, navigator: navigator$1 = defaultNavigator } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => navigator$1 && "permissions" in navigator$1);
	const permissionStatus = /* @__PURE__ */ shallowRef();
	const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
	const state = /* @__PURE__ */ shallowRef();
	const update = () => {
		var _permissionStatus$val, _permissionStatus$val2;
		state.value = (_permissionStatus$val = (_permissionStatus$val2 = permissionStatus.value) === null || _permissionStatus$val2 === void 0 ? void 0 : _permissionStatus$val2.state) !== null && _permissionStatus$val !== void 0 ? _permissionStatus$val : "prompt";
	};
	useEventListener(permissionStatus, "change", update, { passive: true });
	const query = createSingletonPromise(async () => {
		if (!isSupported.value) return;
		if (!permissionStatus.value) try {
			permissionStatus.value = await navigator$1.permissions.query(desc);
		} catch (_unused) {
			permissionStatus.value = void 0;
		} finally {
			update();
		}
		if (controls) return /* @__PURE__ */ toRaw(permissionStatus.value);
	});
	query();
	if (controls) return {
		state,
		isSupported,
		query
	};
	else return state;
}
function useClipboard(options = {}) {
	const { navigator: navigator$1 = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
	const isClipboardApiSupported = /* @__PURE__ */ useSupported(() => navigator$1 && "clipboard" in navigator$1);
	const permissionRead = usePermission("clipboard-read");
	const permissionWrite = usePermission("clipboard-write");
	const isSupported = computed(() => isClipboardApiSupported.value || legacy);
	const text = /* @__PURE__ */ shallowRef("");
	const copied = /* @__PURE__ */ shallowRef(false);
	const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
	async function updateText() {
		let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionRead.value));
		if (!useLegacy) try {
			text.value = await navigator$1.clipboard.readText();
		} catch (_unused) {
			useLegacy = true;
		}
		if (useLegacy) text.value = legacyRead();
	}
	if (isSupported.value && read) useEventListener(["copy", "cut"], updateText, { passive: true });
	async function copy(value = toValue(source)) {
		if (isSupported.value && value != null) {
			let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionWrite.value));
			if (!useLegacy) try {
				await navigator$1.clipboard.writeText(value);
			} catch (_unused2) {
				useLegacy = true;
			}
			if (useLegacy) legacyCopy(value);
			text.value = value;
			copied.value = true;
			timeout.start();
		}
	}
	function legacyCopy(value) {
		const ta = document.createElement("textarea");
		ta.value = value;
		ta.style.position = "absolute";
		ta.style.opacity = "0";
		ta.setAttribute("readonly", "");
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	function legacyRead() {
		var _document$getSelectio, _document, _document$getSelectio2;
		return (_document$getSelectio = (_document = document) === null || _document === void 0 || (_document$getSelectio2 = _document.getSelection) === null || _document$getSelectio2 === void 0 || (_document$getSelectio2 = _document$getSelectio2.call(_document)) === null || _document$getSelectio2 === void 0 ? void 0 : _document$getSelectio2.toString()) !== null && _document$getSelectio !== void 0 ? _document$getSelectio : "";
	}
	function isAllowed(status) {
		return status === "granted" || status === "prompt";
	}
	return {
		isSupported,
		text: /* @__PURE__ */ readonly(text),
		copied: /* @__PURE__ */ readonly(copied),
		copy
	};
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
	if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
	return _global[globalKey];
}
function getSSRHandler(key, fallback) {
	return handlers[key] || fallback;
}
/**
* Reactive dark theme preference.
*
* @see https://vueuse.org/usePreferredDark
* @param [options]
*
* @__NO_SIDE_EFFECTS__
*/
function usePreferredDark(options) {
	return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function guessSerializerType(rawInit) {
	return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
	boolean: {
		read: (v) => v === "true",
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
};
var customStorageEventName = "vueuse-storage";
/**
* Reactive LocalStorage/SessionStorage.
*
* @see https://vueuse.org/useStorage
*/
function useStorage(key, defaults$1, storage, options = {}) {
	var _options$serializer;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window$1 = defaultWindow, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults$1 === "function" ? defaults$1() : defaults$1);
	const keyComputed = computed(() => toValue(key));
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults$1);
	const type = guessSerializerType(rawInit);
	const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
		flush,
		deep,
		eventFilter
	});
	watch(keyComputed, () => update(), { flush });
	let firstMounted = false;
	const onStorageEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		update(ev);
	};
	const onStorageCustomEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		updateFromCustomEvent(ev);
	};
	/**
	* The custom event is needed for same-document syncing when using custom
	* storage backends, but it doesn't work across different documents.
	*
	* TODO: Consider implementing a BroadcastChannel-based solution that fixes this.
	*/
	if (window$1 && listenToStorageChanges) if (storage instanceof Storage) useEventListener(window$1, "storage", onStorageEvent, { passive: true });
	else useEventListener(window$1, customStorageEventName, onStorageCustomEvent);
	if (initOnMounted) tryOnMounted(() => {
		firstMounted = true;
		update();
	});
	else update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window$1) {
			const payload = {
				key: keyComputed.value,
				oldValue,
				newValue,
				storageArea: storage
			};
			window$1.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
		}
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(keyComputed.value);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(keyComputed.value);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(keyComputed.value, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
			return rawInit;
		} else if (!event && mergeDefaults) {
			const value = serializer.read(rawValue);
			if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
			else if (type === "object" && !Array.isArray(value)) return {
				...rawInit,
				...value
			};
			return value;
		} else if (typeof rawValue !== "string") return rawValue;
		else return serializer.read(rawValue);
	}
	function update(event) {
		if (event && event.storageArea !== storage) return;
		if (event && event.key == null) {
			data.value = rawInit;
			return;
		}
		if (event && event.key !== keyComputed.value) return;
		pauseWatch();
		try {
			const serializedData = serializer.write(data.value);
			if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
		} catch (e) {
			onError(e);
		} finally {
			if (event) nextTick(resumeWatch);
			else resumeWatch();
		}
	}
	function updateFromCustomEvent(event) {
		update(event.detail);
	}
	return data;
}
/**
* Reports changes to the dimensions of an Element's content or the border-box
*
* @see https://vueuse.org/useResizeObserver
* @param target
* @param callback
* @param options
*/
function useResizeObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "ResizeObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const _targets = toValue(target);
		return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
	}), (els) => {
		cleanup();
		if (isSupported.value && window$1) {
			observer = new ResizeObserver(callback);
			for (const _el of els) if (_el) observer.observe(_el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
function useElementHover(el, options = {}) {
	const { delayEnter = 0, delayLeave = 0, triggerOnRemoval = false, window: window$1 = defaultWindow } = options;
	const isHovered = /* @__PURE__ */ shallowRef(false);
	let timer;
	const toggle = (entering) => {
		const delay = entering ? delayEnter : delayLeave;
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
		if (delay) timer = setTimeout(() => isHovered.value = entering, delay);
		else isHovered.value = entering;
	};
	if (!window$1) return isHovered;
	useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
	useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
	if (triggerOnRemoval) onElementRemoval(computed(() => unrefElement(el)), () => toggle(false));
	return isHovered;
}
/**
* Reactive size of an HTML element.
*
* @see https://vueuse.org/useElementSize
*/
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window: window$1 = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
	});
	const width = /* @__PURE__ */ shallowRef(initialSize.width);
	const height = /* @__PURE__ */ shallowRef(initialSize.height);
	const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
		const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
		if (window$1 && isSVG.value) {
			const $elem = unrefElement(target);
			if ($elem) {
				const rect = $elem.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else if (boxSize) {
			const formatBoxSize = toArray(boxSize);
			width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
			height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
		} else {
			width.value = entry.contentRect.width;
			height.value = entry.contentRect.height;
		}
	}, options);
	tryOnMounted(() => {
		const ele = unrefElement(target);
		if (ele) {
			width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
			height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
		}
	});
	const stop2 = watch(() => unrefElement(target), (ele) => {
		width.value = ele ? initialSize.width : 0;
		height.value = ele ? initialSize.height : 0;
	});
	function stop() {
		stop1();
		stop2();
	}
	return {
		width,
		height,
		stop
	};
}
var eventHandlers = [
	"fullscreenchange",
	"webkitfullscreenchange",
	"webkitendfullscreen",
	"mozfullscreenchange",
	"MSFullscreenChange"
];
/**
* Reactive Fullscreen API.
*
* @see https://vueuse.org/useFullscreen
* @param target
* @param options
*/
function useFullscreen(target, options = {}) {
	const { document: document$1 = defaultDocument, autoExit = false } = options;
	const targetRef = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement(target)) !== null && _unrefElement !== void 0 ? _unrefElement : document$1 === null || document$1 === void 0 ? void 0 : document$1.documentElement;
	});
	const isFullscreen = /* @__PURE__ */ shallowRef(false);
	const requestMethod = computed(() => {
		return [
			"requestFullscreen",
			"webkitRequestFullscreen",
			"webkitEnterFullscreen",
			"webkitEnterFullScreen",
			"webkitRequestFullScreen",
			"mozRequestFullScreen",
			"msRequestFullscreen"
		].find((m) => document$1 && m in document$1 || targetRef.value && m in targetRef.value);
	});
	const exitMethod = computed(() => {
		return [
			"exitFullscreen",
			"webkitExitFullscreen",
			"webkitExitFullScreen",
			"webkitCancelFullScreen",
			"mozCancelFullScreen",
			"msExitFullscreen"
		].find((m) => document$1 && m in document$1 || targetRef.value && m in targetRef.value);
	});
	const fullscreenEnabled = computed(() => {
		return [
			"fullScreen",
			"webkitIsFullScreen",
			"webkitDisplayingFullscreen",
			"mozFullScreen",
			"msFullscreenElement"
		].find((m) => document$1 && m in document$1 || targetRef.value && m in targetRef.value);
	});
	const fullscreenElementMethod = [
		"fullscreenElement",
		"webkitFullscreenElement",
		"mozFullScreenElement",
		"msFullscreenElement"
	].find((m) => document$1 && m in document$1);
	const isSupported = /* @__PURE__ */ useSupported(() => targetRef.value && document$1 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
	const isCurrentElementFullScreen = () => {
		if (fullscreenElementMethod) return (document$1 === null || document$1 === void 0 ? void 0 : document$1[fullscreenElementMethod]) === targetRef.value;
		return false;
	};
	const isElementFullScreen = () => {
		if (fullscreenEnabled.value) if (document$1 && document$1[fullscreenEnabled.value] != null) return document$1[fullscreenEnabled.value];
		else {
			const target$1 = targetRef.value;
			if ((target$1 === null || target$1 === void 0 ? void 0 : target$1[fullscreenEnabled.value]) != null) return Boolean(target$1[fullscreenEnabled.value]);
		}
		return false;
	};
	async function exit() {
		if (!isSupported.value || !isFullscreen.value) return;
		if (exitMethod.value) if ((document$1 === null || document$1 === void 0 ? void 0 : document$1[exitMethod.value]) != null) await document$1[exitMethod.value]();
		else {
			const target$1 = targetRef.value;
			if ((target$1 === null || target$1 === void 0 ? void 0 : target$1[exitMethod.value]) != null) await target$1[exitMethod.value]();
		}
		isFullscreen.value = false;
	}
	async function enter() {
		if (!isSupported.value || isFullscreen.value) return;
		if (isElementFullScreen()) await exit();
		const target$1 = targetRef.value;
		if (requestMethod.value && (target$1 === null || target$1 === void 0 ? void 0 : target$1[requestMethod.value]) != null) {
			await target$1[requestMethod.value]();
			isFullscreen.value = true;
		}
	}
	async function toggle() {
		await (isFullscreen.value ? exit() : enter());
	}
	const handlerCallback = () => {
		const isElementFullScreenValue = isElementFullScreen();
		if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
	};
	const listenerOptions = {
		capture: false,
		passive: true
	};
	useEventListener(document$1, eventHandlers, handlerCallback, listenerOptions);
	useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, listenerOptions);
	tryOnMounted(handlerCallback, false);
	if (autoExit) tryOnScopeDispose(exit);
	return {
		isSupported,
		isFullscreen,
		enter,
		exit,
		toggle
	};
}
/**
* Resolves an element from a given element, window, or document.
*
* @internal
*/
function resolveElement(el) {
	if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
	if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
	return el;
}
/**
* We have to check if the scroll amount is close enough to some threshold in order to
* more accurately calculate arrivedState. This is because scrollTop/scrollLeft are non-rounded
* numbers, while scrollHeight/scrollWidth and clientHeight/clientWidth are rounded.
* https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
*/
var ARRIVED_STATE_THRESHOLD_PIXELS = 1;
/**
* Reactive scroll.
*
* @see https://vueuse.org/useScroll
* @param element
* @param options
*/
function useScroll(element, options = {}) {
	const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, observe: _observe = { mutation: false }, eventListenerOptions = {
		capture: false,
		passive: true
	}, behavior = "auto", window: window$1 = defaultWindow, onError = (e) => {
		console.error(e);
	} } = options;
	const observe = typeof _observe === "boolean" ? { mutation: _observe } : _observe;
	const internalX = /* @__PURE__ */ shallowRef(0);
	const internalY = /* @__PURE__ */ shallowRef(0);
	const x = computed({
		get() {
			return internalX.value;
		},
		set(x$1) {
			scrollTo(x$1, void 0);
		}
	});
	const y = computed({
		get() {
			return internalY.value;
		},
		set(y$1) {
			scrollTo(void 0, y$1);
		}
	});
	function scrollTo(_x, _y) {
		var _ref, _toValue, _toValue2, _document;
		if (!window$1) return;
		const _element = toValue(element);
		if (!_element) return;
		(_ref = _element instanceof Document ? window$1.document.body : _element) === null || _ref === void 0 || _ref.scrollTo({
			top: (_toValue = toValue(_y)) !== null && _toValue !== void 0 ? _toValue : y.value,
			left: (_toValue2 = toValue(_x)) !== null && _toValue2 !== void 0 ? _toValue2 : x.value,
			behavior: toValue(behavior)
		});
		const scrollContainer = (_element === null || _element === void 0 || (_document = _element.document) === null || _document === void 0 ? void 0 : _document.documentElement) || (_element === null || _element === void 0 ? void 0 : _element.documentElement) || _element;
		if (x != null) internalX.value = scrollContainer.scrollLeft;
		if (y != null) internalY.value = scrollContainer.scrollTop;
	}
	const isScrolling = /* @__PURE__ */ shallowRef(false);
	const arrivedState = /* @__PURE__ */ reactive({
		left: true,
		right: false,
		top: true,
		bottom: false
	});
	const directions = /* @__PURE__ */ reactive({
		left: false,
		right: false,
		top: false,
		bottom: false
	});
	const onScrollEnd = (e) => {
		if (!isScrolling.value) return;
		isScrolling.value = false;
		directions.left = false;
		directions.right = false;
		directions.top = false;
		directions.bottom = false;
		onStop(e);
	};
	const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
	const setArrivedState = (target) => {
		var _document2;
		if (!window$1) return;
		const el = (target === null || target === void 0 || (_document2 = target.document) === null || _document2 === void 0 ? void 0 : _document2.documentElement) || (target === null || target === void 0 ? void 0 : target.documentElement) || unrefElement(target);
		const { display, flexDirection, direction } = window$1.getComputedStyle(el);
		const directionMultipler = direction === "rtl" ? -1 : 1;
		const scrollLeft = el.scrollLeft;
		directions.left = scrollLeft < internalX.value;
		directions.right = scrollLeft > internalX.value;
		const left = Math.abs(scrollLeft * directionMultipler) <= (offset.left || 0);
		const right = Math.abs(scrollLeft * directionMultipler) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "row-reverse") {
			arrivedState.left = right;
			arrivedState.right = left;
		} else {
			arrivedState.left = left;
			arrivedState.right = right;
		}
		internalX.value = scrollLeft;
		let scrollTop = el.scrollTop;
		if (target === window$1.document && !scrollTop) scrollTop = window$1.document.body.scrollTop;
		directions.top = scrollTop < internalY.value;
		directions.bottom = scrollTop > internalY.value;
		const top = Math.abs(scrollTop) <= (offset.top || 0);
		const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		/**
		* reverse columns and rows behave exactly the other way around,
		* bottom is treated as top and top is treated as the negative version of bottom
		*/
		if (display === "flex" && flexDirection === "column-reverse") {
			arrivedState.top = bottom;
			arrivedState.bottom = top;
		} else {
			arrivedState.top = top;
			arrivedState.bottom = bottom;
		}
		internalY.value = scrollTop;
	};
	const onScrollHandler = (e) => {
		var _documentElement;
		if (!window$1) return;
		setArrivedState((_documentElement = e.target.documentElement) !== null && _documentElement !== void 0 ? _documentElement : e.target);
		isScrolling.value = true;
		onScrollEndDebounced(e);
		onScroll(e);
	};
	useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
	tryOnMounted(() => {
		try {
			const _element = toValue(element);
			if (!_element) return;
			setArrivedState(_element);
		} catch (e) {
			onError(e);
		}
	});
	if ((observe === null || observe === void 0 ? void 0 : observe.mutation) && element != null && element !== window$1 && element !== document) useMutationObserver(element, () => {
		const _element = toValue(element);
		if (!_element) return;
		setArrivedState(_element);
	}, {
		attributes: true,
		childList: true,
		subtree: true
	});
	useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
	return {
		x,
		y,
		isScrolling,
		arrivedState,
		directions,
		measure() {
			const _element = toValue(element);
			if (window$1 && _element) setArrivedState(_element);
		}
	};
}
/**
* Reactive LocalStorage.
*
* @see https://vueuse.org/useLocalStorage
* @param key
* @param initialValue
* @param options
*/
function useLocalStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 === null || window$1 === void 0 ? void 0 : window$1.localStorage, options);
}
/**
* Reactive Navigator Languages.
*
* @see https://vueuse.org/usePreferredLanguages
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function usePreferredLanguages(options = {}) {
	const { window: window$1 = defaultWindow } = options;
	if (!window$1) return /* @__PURE__ */ shallowRef(["en"]);
	const navigator$1 = window$1.navigator;
	const value = /* @__PURE__ */ shallowRef(navigator$1.languages);
	useEventListener(window$1, "languagechange", () => {
		value.value = navigator$1.languages;
	}, { passive: true });
	return value;
}
/**
* Async script tag loading.
*
* @see https://vueuse.org/useScriptTag
* @param src
* @param onLoaded
* @param options
*/
function useScriptTag(src, onLoaded = noop, options = {}) {
	const { immediate = true, manual = false, type = "text/javascript", async = true, crossOrigin, referrerPolicy, noModule, defer, document: document$1 = defaultDocument, attrs = {}, nonce = void 0 } = options;
	const scriptTag = /* @__PURE__ */ shallowRef(null);
	let _promise = null;
	/**
	* Load the script specified via `src`.
	*
	* @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
	* @returns Promise<HTMLScriptElement>
	*/
	const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
		const resolveWithElement = (el$1) => {
			scriptTag.value = el$1;
			resolve(el$1);
			return el$1;
		};
		if (!document$1) {
			resolve(false);
			return;
		}
		let shouldAppend = false;
		let el = document$1.querySelector(`script[src="${toValue(src)}"]`);
		if (!el) {
			el = document$1.createElement("script");
			el.type = type;
			el.async = async;
			el.src = toValue(src);
			if (defer) el.defer = defer;
			if (crossOrigin) el.crossOrigin = crossOrigin;
			if (noModule) el.noModule = noModule;
			if (referrerPolicy) el.referrerPolicy = referrerPolicy;
			if (nonce) el.nonce = nonce;
			Object.entries(attrs).forEach(([name, value]) => el === null || el === void 0 ? void 0 : el.setAttribute(name, value));
			shouldAppend = true;
		} else if (el.hasAttribute("data-loaded")) resolveWithElement(el);
		const listenerOptions = { passive: true };
		useEventListener(el, "error", (event) => reject(event), listenerOptions);
		useEventListener(el, "abort", (event) => reject(event), listenerOptions);
		useEventListener(el, "load", () => {
			el.setAttribute("data-loaded", "true");
			onLoaded(el);
			resolveWithElement(el);
		}, listenerOptions);
		if (shouldAppend) el = document$1.head.appendChild(el);
		if (!waitForScriptLoad) resolveWithElement(el);
	});
	/**
	* Exposed singleton wrapper for `loadScript`, avoiding calling it twice.
	*
	* @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
	* @returns Promise<HTMLScriptElement>
	*/
	const load = (waitForScriptLoad = true) => {
		if (!_promise) _promise = loadScript(waitForScriptLoad);
		return _promise;
	};
	/**
	* Unload the script specified by `src`.
	*/
	const unload = () => {
		if (!document$1) return;
		_promise = null;
		if (scriptTag.value) scriptTag.value = null;
		const el = document$1.querySelector(`script[src="${toValue(src)}"]`);
		if (el) document$1.head.removeChild(el);
	};
	if (immediate && !manual) tryOnMounted(load);
	if (!manual) tryOnUnmounted(unload);
	return {
		scriptTag,
		load,
		unload
	};
}
function checkOverflowScroll(ele) {
	const style = window.getComputedStyle(ele);
	if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
	else {
		const parent = ele.parentNode;
		if (!parent || parent.tagName === "BODY") return false;
		return checkOverflowScroll(parent);
	}
}
function preventDefault(rawEvent) {
	const e = rawEvent || window.event;
	const _target = e.target;
	if (checkOverflowScroll(_target)) return false;
	if (e.touches.length > 1) return true;
	if (e.preventDefault) e.preventDefault();
	return false;
}
var elInitialOverflow = /* @__PURE__ */ new WeakMap();
/**
* Lock scrolling of the element.
*
* @see https://vueuse.org/useScrollLock
* @param element
*/
function useScrollLock(element, initialState = false) {
	const isLocked = /* @__PURE__ */ shallowRef(initialState);
	let stopTouchMoveListener = null;
	let initialOverflow = "";
	watch(toRef(element), (el) => {
		const target = resolveElement(toValue(el));
		if (target) {
			const ele = target;
			if (!elInitialOverflow.get(ele)) elInitialOverflow.set(ele, ele.style.overflow);
			if (ele.style.overflow !== "hidden") initialOverflow = ele.style.overflow;
			if (ele.style.overflow === "hidden") return isLocked.value = true;
			if (isLocked.value) return ele.style.overflow = "hidden";
		}
	}, { immediate: true });
	const lock = () => {
		const el = resolveElement(toValue(element));
		if (!el || isLocked.value) return;
		if (isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", (e) => {
			preventDefault(e);
		}, { passive: false });
		el.style.overflow = "hidden";
		isLocked.value = true;
	};
	const unlock = () => {
		const el = resolveElement(toValue(element));
		if (!el || !isLocked.value) return;
		if (isIOS) stopTouchMoveListener === null || stopTouchMoveListener === void 0 || stopTouchMoveListener();
		el.style.overflow = initialOverflow;
		elInitialOverflow.delete(el);
		isLocked.value = false;
	};
	tryOnScopeDispose(unlock);
	return computed({
		get() {
			return isLocked.value;
		},
		set(v) {
			if (v) lock();
			else unlock();
		}
	});
}
/**
* Reactive SessionStorage.
*
* @see https://vueuse.org/useSessionStorage
* @param key
* @param initialValue
* @param options
*/
function useSessionStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 === null || window$1 === void 0 ? void 0 : window$1.sessionStorage, options);
}
Number.POSITIVE_INFINITY;
/**
* Reactive window scroll.
*
* @see https://vueuse.org/useWindowScroll
* @param options
*/
function useWindowScroll(options = {}) {
	const { window: window$1 = defaultWindow, ...rest } = options;
	return useScroll(window$1, rest);
}
/**
* Reactive window size.
*
* @see https://vueuse.org/useWindowSize
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useWindowSize(options = {}) {
	const { window: window$1 = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true, type = "inner" } = options;
	const width = /* @__PURE__ */ shallowRef(initialWidth);
	const height = /* @__PURE__ */ shallowRef(initialHeight);
	const update = () => {
		if (window$1) if (type === "outer") {
			width.value = window$1.outerWidth;
			height.value = window$1.outerHeight;
		} else if (type === "visual" && window$1.visualViewport) {
			const { width: visualViewportWidth, height: visualViewportHeight, scale } = window$1.visualViewport;
			width.value = Math.round(visualViewportWidth * scale);
			height.value = Math.round(visualViewportHeight * scale);
		} else if (includeScrollbar) {
			width.value = window$1.innerWidth;
			height.value = window$1.innerHeight;
		} else {
			width.value = window$1.document.documentElement.clientWidth;
			height.value = window$1.document.documentElement.clientHeight;
		}
	};
	update();
	tryOnMounted(update);
	const listenerOptions = { passive: true };
	useEventListener("resize", update, listenerOptions);
	if (window$1 && type === "visual" && window$1.visualViewport) useEventListener(window$1.visualViewport, "resize", update, listenerOptions);
	if (listenOrientation) watch(useMediaQuery("(orientation: portrait)"), () => update());
	return {
		width,
		height
	};
}
//#endregion
//#region node_modules/.pnpm/@vuepress+helper@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0_@vu_cd216afb0c86c62c6103c8e42d7e3c6c/node_modules/@vuepress/helper/lib/client/index.js
var N$3 = (e) => {
	let t = e.replaceAll(`<br>`, `<br />`).replaceAll(`%`, `%25`).replaceAll(`"`, `%22`).replaceAll(`'`, `%27`).replaceAll(`&`, `%26`).replaceAll(`#`, `%23`).replaceAll(`{`, `%7B`).replaceAll(`}`, `%7D`).replaceAll(`<`, `%3C`).replaceAll(`>`, `%3E`);
	return e.includes(`xmlns`) || (t = t.replace(`<svg`, `<svg xmlns="http://www.w3.org/2000/svg"`)), `data:image/svg+xml;charset=utf8,${t}`;
}, z$3 = () => document.documentElement.dataset.theme === `dark`, B = Array.from({ length: 6 }, (e, t) => `[vp-content] h${t + 1}`).join(`,`), V$2 = (e, t = 2) => {
	if (t === !1) return [];
	let [n, r] = typeof t == `number` ? [t, t] : t === `deep` ? [2, 6] : t, i = e.filter((e) => e.level >= n && e.level <= r), a = [];
	outer: for (let e = 0; e < i.length; e++) {
		let t = i[e];
		if (e === 0) a.push(t);
		else {
			for (let n = e - 1; n >= 0; n--) {
				let e = i[n];
				if (e.level < t.level) {
					e.children.push(t);
					continue outer;
				}
			}
			a.push(t);
		}
	}
	return a;
}, Se$1 = (e, t = []) => {
	let n;
	if (t.length > 0) {
		let r = e.cloneNode(!0);
		r.querySelectorAll(t.join(`,`)).forEach((e) => {
			e.remove();
		}), n = r.textContent || ``;
	} else n = e.textContent || ``;
	return n.trim();
}, H$2 = (e = B, t = []) => [...document.querySelectorAll(e)].filter((e) => e.id && e.hasChildNodes()).map((e) => ({
	element: e,
	title: Se$1(e, t),
	link: `#${e.id}`,
	slug: e.id,
	level: Number(e.tagName[1]),
	children: []
})), U = ({ selector: e = B, levels: t = 2, ignore: n = [] } = {}) => V$2(H$2(e, n), t), G$1 = (e) => e.every((e) => e.type === Comment ? !0 : e.type === Fragment ? e.children == null || g$2(e.children) && G$1(e.children) : !1), Ce$1 = (e) => e == null ? !0 : g$2(e) ? G$1(e) : !1, we = (e, t) => {
	let n = (t?._instance ?? getCurrentInstance())?.appContext.components;
	return n ? e in n || camelize$1(e) in n || capitalize(camelize$1(e)) in n : !1;
}, q = `message-container`;
var Te$2 = class e {
	elements;
	constructor() {
		this.elements = {};
	}
	static get containerElement() {
		let e = document.querySelector(`#${q}`);
		return e || (e = document.createElement(`div`), e.id = q, document.body.append(e), e);
	}
	getElement(e) {
		return this.elements[e];
	}
	pop(t, n = 2e3, r = !0) {
		let i = Date.now(), a = document.createElement(`div`);
		return a.className = `message-item move-in`, a.innerHTML = t, e.containerElement.append(a), this.elements[i] = a, r && a.addEventListener(`click`, () => {
			this.close(i);
		}), n > 0 && setTimeout(() => {
			this.close(i);
		}, n), i;
	}
	close(e) {
		if (e == null) S$2(this.elements).forEach((e) => {
			this.close(Number(e));
		});
		else {
			let t = this.elements[e];
			t.classList.remove(`move-in`), t.classList.add(`move-out`), t.addEventListener(`animationend`, () => {
				t.remove(), delete this.elements[e];
			});
		}
	}
	destroy() {
		document.querySelector(`#${q}`)?.remove(), this.elements = {};
	}
}, J = (e) => typeof e == `number` ? `${e}px` : e, Y$1 = ({ size: e = 48, stroke: t = 4, wrapper: n = !0, height: r = 2 * e }) => {
	let i = h$5(`span`, { style: `\
--loading-icon: url("${N$3(`<svg preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg>`)}");\
--icon-size: ${J(e)};\
display: inline-block;\
width: var(--icon-size);\
height: var(--icon-size);\
background-color: currentcolor;\
-webkit-mask-image: var(--loading-icon);\
mask-image: var(--loading-icon)\
` });
	return n ? h$5(`div`, { style: `\
display: flex;\
align-items: center;\
justify-content: center;\
height: ${J(r)}\
` }, i) : i;
};
Y$1.displayName = `LoadingIcon`;
var X$1 = (e, { slots: t }) => t.default(), Q = /* @__PURE__ */ ref(!1);
typeof document < `u` && (Q.value = z$3(), new MutationObserver(() => {
	Q.value = z$3();
}).observe(document.documentElement, {
	attributeFilter: [`data-theme`],
	attributes: !0
}));
var ke = (e = {}) => {
	let t = /* @__PURE__ */ ref([]);
	return onContentUpdated((n) => {
		t.value = n === `beforeUnmount` ? [] : U(toValue(e));
	}), t;
}, $$1 = (e) => {
	let t = useRouteLocale();
	return computed(() => {
		let n = toValue(e);
		return n[t.value] ?? n[`/`] ?? Object.values(n)[0];
	});
}, Ae$2 = $$1;
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0_f455e7db2d24c91b90826fbb22b7819a/node_modules/@vuepress/plugin-git/lib/VPHeader-DbNPTjtk.js
var n$6 = { "/": {
	"contributors": "贡献者",
	"changelog": "更新日志",
	"timeOn": "于",
	"viewChangelog": "查看所有更新日志",
	"latestUpdateAt": "最近更新"
} }, r$7 = () => Ae$2(n$6), i$6 = ({ level: t = 2, text: n, anchor: r }) => h$5(`h${t || 2}`, {
	id: r,
	tabindex: `-1`
}, h$5(`a`, {
	href: `#${r}`,
	class: `header-anchor`
}, h$5(`span`, n)));
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0_f455e7db2d24c91b90826fbb22b7819a/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js
var a$8 = ({ name: e, url: t, avatar: n }) => h$5(t ? `a` : `span`, {
	href: t,
	target: `_blank`,
	rel: `noreferrer`,
	class: `vp-contributor`
}, [n ? h$5(`img`, {
	src: n,
	alt: ``,
	class: `vp-contributor-avatar`
}) : null, h$5(`span`, { class: `vp-contributor-name` }, e)]), o$8 = /* @__PURE__ */ defineComponent({
	name: `GitContributors`,
	props: {
		title: String,
		headerLevel: {
			type: Number,
			default: 2
		}
	},
	setup(r) {
		let o = r$8(), s = r$7();
		return () => o.value.length > 0 ? [h$5(i$6, {
			level: r.headerLevel,
			anchor: `doc-contributors`,
			text: r.title || s.value.contributors
		}), h$5(`div`, { class: `vp-contributors` }, o.value.map((e) => h$5(a$8, e)))] : null;
	}
});
//#endregion
//#region docs/.vuepress/.temp/git/config.js
var config_exports$14 = /* @__PURE__ */ __exportAll({ default: () => config_default$5 });
var config_default$5 = { enhance: ({ app }) => {
	app.component("GitContributors", o$8);
} };
//#endregion
//#region node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.124_@vuepress+helper@2.0.0-rc.124_@vuepress+bundl_35b4f756b69584887d6e2739d4a87179/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css
var init_base = __esmMin((() => {}));
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-shiki@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5_00cf7a204064702f560f9ad2fb9cad7d/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css
var init_shiki = __esmMin((() => {}));
//#endregion
//#region node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.124_@vuepress+helper@2.0.0-rc.124_@vuepress+bundl_35b4f756b69584887d6e2739d4a87179/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css
var init_line_numbers = __esmMin((() => {}));
//#endregion
//#region node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.124_@vuepress+helper@2.0.0-rc.124_@vuepress+bundl_35b4f756b69584887d6e2739d4a87179/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css
var init_notation_highlight = __esmMin((() => {}));
//#endregion
//#region node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.124_@vuepress+helper@2.0.0-rc.124_@vuepress+bundl_35b4f756b69584887d6e2739d4a87179/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css
var init_code_block_title = __esmMin((() => {}));
//#endregion
//#region docs/.vuepress/.temp/shiki/config.js
var require_config$2 = /* @__PURE__ */ __commonJSMin$2((() => {
	init_base();
	init_shiki();
	init_line_numbers();
	init_notation_highlight();
	init_code_block_title();
}));
//#endregion
//#region docs/.vuepress/.temp/sass-palette/hope-inject.scss
var init_hope_inject = __esmMin((() => {}));
//#endregion
//#region docs/.vuepress/.temp/markdown-chart/config.js
var import_load_hope = /* @__PURE__ */ __toESM$2((/* @__PURE__ */ __commonJSMin$2((() => {
	init_hope_inject();
})))());
var import_config = /* @__PURE__ */ __toESM$2(require_config$2());
var config_exports$13 = /* @__PURE__ */ __exportAll({ default: () => config_default$4 });
var config_default$4 = defineClientConfig({ enhance: ({ app }) => {} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-markdown-ext@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+no_b925d6bb127fee5f4ef2a09a72b5a09e/node_modules/@vuepress/plugin-markdown-ext/lib/client/styles/tasklist.css
var init_tasklist = __esmMin((() => {}));
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-markdown-hint@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+n_cec689b2311742d720d1f904d2641fba/node_modules/@vuepress/plugin-markdown-hint/lib/client/styles/hint.css
var import_config$1 = /* @__PURE__ */ __toESM$2((/* @__PURE__ */ __commonJSMin$2((() => {
	init_tasklist();
})))());
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-markdown-hint@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+n_cec689b2311742d720d1f904d2641fba/node_modules/@vuepress/plugin-markdown-hint/lib/client/config.js
var config_exports$12 = /* @__PURE__ */ __exportAll({ default: () => n$5 });
var n$5 = defineClientConfig({ setup() {
	useEventListener(`beforeprint`, () => {
		document.querySelectorAll(`details`).forEach((e) => {
			e.open = !0;
		});
	}, { passive: !0 });
} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+no_88d747f22c5fae830b82ff64b2f7d265/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js
var c$8 = useStorage(`VUEPRESS_CODE_TAB_STORE`, {}), l$7 = /* @__PURE__ */ defineComponent({
	name: `CodeTabs`,
	props: {
		active: {
			type: Number,
			default: 0
		},
		data: {
			type: Array,
			required: !0
		},
		tabId: String
	},
	slots: Object,
	setup(e, { slots: t }) {
		let l = e.data.map(() => useId()), u = /* @__PURE__ */ ref(e.active), d = /* @__PURE__ */ shallowRef([]), f = () => {
			e.tabId && (c$8.value[e.tabId] = e.data[u.value].id);
		}, p = (e = u.value) => {
			u.value = e < d.value.length - 1 ? e + 1 : 0, d.value[u.value].focus();
		}, m = (e = u.value) => {
			u.value = e > 0 ? e - 1 : d.value.length - 1, d.value[u.value].focus();
		}, h = (t, n) => {
			t.key === ` ` || t.key === `Enter` ? (t.preventDefault(), u.value = n) : t.key === `ArrowRight` ? (t.preventDefault(), p()) : t.key === `ArrowLeft` && (t.preventDefault(), m()), e.tabId && (c$8.value[e.tabId] = e.data[u.value].id);
		}, g = () => {
			if (e.tabId) {
				let t = e.data.findIndex(({ id: t }) => c$8.value[e.tabId] === t);
				if (t !== -1) return t;
			}
			return e.active;
		};
		return onMounted(() => {
			u.value = g(), watch(() => e.tabId && c$8.value[e.tabId], (t, n) => {
				if (e.tabId && t !== n) {
					let n = e.data.findIndex(({ id: e }) => e === t);
					n !== -1 && (u.value = n);
				}
			});
		}), () => e.data.length ? h$5(`div`, { class: `vp-code-tabs` }, [h$5(`div`, {
			class: `vp-code-tabs-nav`,
			role: `tablist`
		}, e.data.map(({ id: e }, r) => {
			let i = r === u.value;
			return h$5(`button`, {
				type: `button`,
				ref: (e) => {
					e && (d.value[r] = e);
				},
				class: [`vp-code-tab-nav`, { active: i }],
				role: `tab`,
				"aria-controls": l[r],
				"aria-selected": i,
				onClick: () => {
					u.value = r, f();
				},
				onKeydown: (e) => {
					h(e, r);
				}
			}, t[`title${r}`]({
				value: e,
				isActive: i
			}));
		})), e.data.map(({ id: e }, r) => {
			let i = r === u.value;
			return h$5(`div`, {
				class: [`vp-code-tab`, { active: i }],
				id: l[r],
				role: `tabpanel`,
				"aria-expanded": i
			}, [h$5(`div`, { class: `vp-code-tab-title` }, t[`title${r}`]({
				value: e,
				isActive: i
			})), t[`tab${r}`]({
				value: e,
				isActive: i
			})]);
		})]) : null;
	}
});
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+no_88d747f22c5fae830b82ff64b2f7d265/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js
var c$7 = useStorage(`VUEPRESS_TAB_STORE`, {}), l$6 = /* @__PURE__ */ defineComponent({
	name: `Tabs`,
	props: {
		active: {
			type: Number,
			default: 0
		},
		data: {
			type: Array,
			required: !0
		},
		tabId: String
	},
	slots: Object,
	setup(e, { slots: t }) {
		let l = e.data.map(() => useId()), u = /* @__PURE__ */ ref(e.active), d = /* @__PURE__ */ shallowRef([]), f = () => {
			e.tabId && (c$7.value[e.tabId] = e.data[u.value].id);
		}, p = (e = u.value) => {
			u.value = e < d.value.length - 1 ? e + 1 : 0, d.value[u.value].focus();
		}, m = (e = u.value) => {
			u.value = e > 0 ? e - 1 : d.value.length - 1, d.value[u.value].focus();
		}, h = (e, t) => {
			e.key === ` ` || e.key === `Enter` ? (e.preventDefault(), u.value = t) : e.key === `ArrowRight` ? (e.preventDefault(), p()) : e.key === `ArrowLeft` && (e.preventDefault(), m()), f();
		}, g = () => {
			if (e.tabId) {
				let t = e.data.findIndex(({ id: t }) => c$7.value[e.tabId] === t);
				if (t !== -1) return t;
			}
			return e.active;
		};
		return onMounted(() => {
			u.value = g(), watch(() => e.tabId && c$7.value[e.tabId], (t, n) => {
				if (e.tabId && t !== n) {
					let n = e.data.findIndex(({ id: e }) => e === t);
					n !== -1 && (u.value = n);
				}
			});
		}), () => e.data.length ? h$5(`div`, { class: `vp-tabs` }, [h$5(`div`, {
			class: `vp-tabs-nav`,
			role: `tablist`
		}, e.data.map(({ id: e }, r) => {
			let i = r === u.value;
			return h$5(`button`, {
				type: `button`,
				ref: (e) => {
					e && (d.value[r] = e);
				},
				class: [`vp-tab-nav`, { active: i }],
				role: `tab`,
				"aria-controls": l[r],
				"aria-selected": i,
				onClick: () => {
					u.value = r, f();
				},
				onKeydown: (e) => {
					h(e, r);
				}
			}, t[`title${r}`]({
				value: e,
				isActive: i
			}));
		})), e.data.map(({ id: e }, r) => {
			let i = r === u.value;
			return h$5(`div`, {
				class: [`vp-tab`, { active: i }],
				id: l[r],
				role: `tabpanel`,
				"aria-expanded": i
			}, [h$5(`div`, { class: `vp-tab-title` }, t[`title${r}`]({
				value: e,
				isActive: i
			})), t[`tab${r}`]({
				value: e,
				isActive: i
			})]);
		})]) : null;
	}
});
//#endregion
//#region docs/.vuepress/.temp/markdown-tab/config.js
var config_exports$11 = /* @__PURE__ */ __exportAll({ default: () => config_default$3 });
var config_default$3 = { enhance: ({ app }) => {
	app.component("CodeTabs", l$7);
	app.component("Tabs", l$6);
} };
//#endregion
//#region docs/.vuepress/.temp/markdown-image/client.js
var require_client = /* @__PURE__ */ __commonJSMin$2((() => {}));
//#endregion
//#region node_modules/.pnpm/@mdit+plugin-spoiler@0.23.1_markdown-it@14.1.1/node_modules/@mdit/plugin-spoiler/spoiler.css
var init_spoiler = __esmMin((() => {}));
//#endregion
//#region docs/.vuepress/.temp/markdown-stylize/config.js
var require_config = /* @__PURE__ */ __commonJSMin$2((() => {
	init_spoiler();
}));
//#endregion
//#region node_modules/.pnpm/@vue+devtools-shared@8.1.0/node_modules/@vue/devtools-shared/dist/index.js
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJSMin$1 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps$1 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var isBrowser = typeof navigator !== "undefined";
var target = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : {};
typeof target.chrome !== "undefined" && target.chrome.devtools;
isBrowser && (target.self, target.top);
typeof navigator !== "undefined" && navigator.userAgent?.toLowerCase().includes("electron");
typeof window !== "undefined" && window.__NUXT__;
var import_rfdc = /* @__PURE__ */ __toESM$1((/* @__PURE__ */ __commonJSMin$1(((exports, module) => {
	module.exports = rfdc;
	function copyBuffer(cur) {
		if (cur instanceof Buffer) return Buffer.from(cur);
		return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
	}
	function rfdc(opts) {
		opts = opts || {};
		if (opts.circles) return rfdcCircles(opts);
		const constructorHandlers = /* @__PURE__ */ new Map();
		constructorHandlers.set(Date, (o) => new Date(o));
		constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
		constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
		if (opts.constructorHandlers) for (const handler of opts.constructorHandlers) constructorHandlers.set(handler[0], handler[1]);
		let handler = null;
		return opts.proto ? cloneProto : clone;
		function cloneArray(a, fn) {
			const keys = Object.keys(a);
			const a2 = new Array(keys.length);
			for (let i = 0; i < keys.length; i++) {
				const k = keys[i];
				const cur = a[k];
				if (typeof cur !== "object" || cur === null) a2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
				else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
				else a2[k] = fn(cur);
			}
			return a2;
		}
		function clone(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, clone);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, clone);
			const o2 = {};
			for (const k in o) {
				if (Object.hasOwnProperty.call(o, k) === false) continue;
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, clone);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else o2[k] = clone(cur);
			}
			return o2;
		}
		function cloneProto(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, cloneProto);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, cloneProto);
			const o2 = {};
			for (const k in o) {
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, cloneProto);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else o2[k] = cloneProto(cur);
			}
			return o2;
		}
	}
	function rfdcCircles(opts) {
		const refs = [];
		const refsNew = [];
		const constructorHandlers = /* @__PURE__ */ new Map();
		constructorHandlers.set(Date, (o) => new Date(o));
		constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
		constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
		if (opts.constructorHandlers) for (const handler of opts.constructorHandlers) constructorHandlers.set(handler[0], handler[1]);
		let handler = null;
		return opts.proto ? cloneProto : clone;
		function cloneArray(a, fn) {
			const keys = Object.keys(a);
			const a2 = new Array(keys.length);
			for (let i = 0; i < keys.length; i++) {
				const k = keys[i];
				const cur = a[k];
				if (typeof cur !== "object" || cur === null) a2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
				else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
				else {
					const index = refs.indexOf(cur);
					if (index !== -1) a2[k] = refsNew[index];
					else a2[k] = fn(cur);
				}
			}
			return a2;
		}
		function clone(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, clone);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, clone);
			const o2 = {};
			refs.push(o);
			refsNew.push(o2);
			for (const k in o) {
				if (Object.hasOwnProperty.call(o, k) === false) continue;
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, clone);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else {
					const i = refs.indexOf(cur);
					if (i !== -1) o2[k] = refsNew[i];
					else o2[k] = clone(cur);
				}
			}
			refs.pop();
			refsNew.pop();
			return o2;
		}
		function cloneProto(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, cloneProto);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, cloneProto);
			const o2 = {};
			refs.push(o);
			refsNew.push(o2);
			for (const k in o) {
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, cloneProto);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else {
					const i = refs.indexOf(cur);
					if (i !== -1) o2[k] = refsNew[i];
					else o2[k] = cloneProto(cur);
				}
			}
			refs.pop();
			refsNew.pop();
			return o2;
		}
	}
})))(), 1);
var classifyRE = /(?:^|[-_/])(\w)/g;
function toUpper(_, c) {
	return c ? c.toUpperCase() : "";
}
function classify(str) {
	return str && `${str}`.replace(classifyRE, toUpper);
}
function basename(filename, ext) {
	let normalizedFilename = filename.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	if (normalizedFilename.endsWith(`index${ext}`)) normalizedFilename = normalizedFilename.replace(`/index${ext}`, ext);
	const lastSlashIndex = normalizedFilename.lastIndexOf("/");
	const baseNameWithExt = normalizedFilename.substring(lastSlashIndex + 1);
	if (ext) {
		const extIndex = baseNameWithExt.lastIndexOf(ext);
		return baseNameWithExt.substring(0, extIndex);
	}
	return "";
}
/**
* @copyright [rfdc](https://github.com/davidmarkclements/rfdc)
* @description A really fast deep clone alternative
*/
var deepClone = (0, import_rfdc.default)({ circles: true });
//#endregion
//#region node_modules/.pnpm/perfect-debounce@2.1.0/node_modules/perfect-debounce/dist/index.mjs
var DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}
//#endregion
//#region node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs
function flatHooks(configHooks, hooks = {}, parentName) {
	for (const key in configHooks) {
		const subHook = configHooks[key];
		const name = parentName ? `${parentName}:${key}` : key;
		if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
		else if (typeof subHook === "function") hooks[name] = subHook;
	}
	return hooks;
}
var defaultTask = { run: (function_) => function_() };
var _createTask = () => defaultTask;
var createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
	const task = createTask(args.shift());
	return hooks.reduce((promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))), Promise.resolve());
}
function parallelTaskCaller(hooks, args) {
	const task = createTask(args.shift());
	return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
	for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
	constructor() {
		this._hooks = {};
		this._before = void 0;
		this._after = void 0;
		this._deprecatedMessages = void 0;
		this._deprecatedHooks = {};
		this.hook = this.hook.bind(this);
		this.callHook = this.callHook.bind(this);
		this.callHookWith = this.callHookWith.bind(this);
	}
	hook(name, function_, options = {}) {
		if (!name || typeof function_ !== "function") return () => {};
		const originalName = name;
		let dep;
		while (this._deprecatedHooks[name]) {
			dep = this._deprecatedHooks[name];
			name = dep.to;
		}
		if (dep && !options.allowDeprecated) {
			let message = dep.message;
			if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
			if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
			if (!this._deprecatedMessages.has(message)) {
				console.warn(message);
				this._deprecatedMessages.add(message);
			}
		}
		if (!function_.name) try {
			Object.defineProperty(function_, "name", {
				get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
				configurable: true
			});
		} catch {}
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(function_);
		return () => {
			if (function_) {
				this.removeHook(name, function_);
				function_ = void 0;
			}
		};
	}
	hookOnce(name, function_) {
		let _unreg;
		let _function = (...arguments_) => {
			if (typeof _unreg === "function") _unreg();
			_unreg = void 0;
			_function = void 0;
			return function_(...arguments_);
		};
		_unreg = this.hook(name, _function);
		return _unreg;
	}
	removeHook(name, function_) {
		if (this._hooks[name]) {
			const index = this._hooks[name].indexOf(function_);
			if (index !== -1) this._hooks[name].splice(index, 1);
			if (this._hooks[name].length === 0) delete this._hooks[name];
		}
	}
	deprecateHook(name, deprecated) {
		this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
		const _hooks = this._hooks[name] || [];
		delete this._hooks[name];
		for (const hook of _hooks) this.hook(name, hook);
	}
	deprecateHooks(deprecatedHooks) {
		Object.assign(this._deprecatedHooks, deprecatedHooks);
		for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
	}
	addHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
		return () => {
			for (const unreg of removeFns.splice(0, removeFns.length)) unreg();
		};
	}
	removeHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		for (const key in hooks) this.removeHook(key, hooks[key]);
	}
	removeAllHooks() {
		for (const key in this._hooks) delete this._hooks[key];
	}
	callHook(name, ...arguments_) {
		arguments_.unshift(name);
		return this.callHookWith(serialTaskCaller, name, ...arguments_);
	}
	callHookParallel(name, ...arguments_) {
		arguments_.unshift(name);
		return this.callHookWith(parallelTaskCaller, name, ...arguments_);
	}
	callHookWith(caller, name, ...arguments_) {
		const event = this._before || this._after ? {
			name,
			args: arguments_,
			context: {}
		} : void 0;
		if (this._before) callEachWith(this._before, event);
		const result = caller(name in this._hooks ? [...this._hooks[name]] : [], arguments_);
		if (result instanceof Promise) return result.finally(() => {
			if (this._after && event) callEachWith(this._after, event);
		});
		if (this._after && event) callEachWith(this._after, event);
		return result;
	}
	beforeEach(function_) {
		this._before = this._before || [];
		this._before.push(function_);
		return () => {
			if (this._before !== void 0) {
				const index = this._before.indexOf(function_);
				if (index !== -1) this._before.splice(index, 1);
			}
		};
	}
	afterEach(function_) {
		this._after = this._after || [];
		this._after.push(function_);
		return () => {
			if (this._after !== void 0) {
				const index = this._after.indexOf(function_);
				if (index !== -1) this._after.splice(index, 1);
			}
		};
	}
};
function createHooks() {
	return new Hookable();
}
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
function getComponentTypeName(options) {
	if (typeof options === "function") return options.displayName || options.name || options.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	const name = options.name || options._componentTag || options.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || options.__name;
	if (name === "index" && options.__file?.endsWith("index.vue")) return "";
	return name;
}
function getComponentFileName(options) {
	const file = options.__file;
	if (file) return classify(basename(file, ".vue"));
}
function saveComponentGussedName(instance, name) {
	instance.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = name;
	return name;
}
function getAppRecord(instance) {
	if (instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	else if (instance.root) return instance.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function isFragment(instance) {
	const subTreeType = instance.subTree?.type;
	const appRecord = getAppRecord(instance);
	if (appRecord) return appRecord?.types?.Fragment === subTreeType;
	return false;
}
/**
* Get the appropriate display name for an instance.
*
* @param {Vue} instance
* @return {string}
*/
function getInstanceName(instance) {
	const name = getComponentTypeName(instance?.type || {});
	if (name) return name;
	if (instance?.root === instance) return "Root";
	for (const key in instance.parent?.type?.components) if (instance.parent.type.components[key] === instance?.type) return saveComponentGussedName(instance, key);
	for (const key in instance.appContext?.components) if (instance.appContext.components[key] === instance?.type) return saveComponentGussedName(instance, key);
	const fileName = getComponentFileName(instance?.type || {});
	if (fileName) return fileName;
	return "Anonymous Component";
}
/**
* Returns a devtools unique id for instance.
* @param {Vue} instance
*/
function getUniqueComponentId(instance) {
	return `${instance?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${instance === instance?.root ? "root" : instance.uid}`;
}
function getComponentInstance(appRecord, instanceId) {
	instanceId = instanceId || `${appRecord.id}:root`;
	return appRecord.instanceMap.get(instanceId) || appRecord.instanceMap.get(":root");
}
function createRect() {
	const rect = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return rect.right - rect.left;
		},
		get height() {
			return rect.bottom - rect.top;
		}
	};
	return rect;
}
var range;
function getTextRect(node) {
	if (!range) range = document.createRange();
	range.selectNode(node);
	return range.getBoundingClientRect();
}
function getFragmentRect(vnode) {
	const rect = createRect();
	if (!vnode.children) return rect;
	for (let i = 0, l = vnode.children.length; i < l; i++) {
		const childVnode = vnode.children[i];
		let childRect;
		if (childVnode.component) childRect = getComponentBoundingRect(childVnode.component);
		else if (childVnode.el) {
			const el = childVnode.el;
			if (el.nodeType === 1 || el.getBoundingClientRect) childRect = el.getBoundingClientRect();
			else if (el.nodeType === 3 && el.data.trim()) childRect = getTextRect(el);
		}
		if (childRect) mergeRects(rect, childRect);
	}
	return rect;
}
function mergeRects(a, b) {
	if (!a.top || b.top < a.top) a.top = b.top;
	if (!a.bottom || b.bottom > a.bottom) a.bottom = b.bottom;
	if (!a.left || b.left < a.left) a.left = b.left;
	if (!a.right || b.right > a.right) a.right = b.right;
	return a;
}
var DEFAULT_RECT = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function getComponentBoundingRect(instance) {
	const el = instance.subTree.el;
	if (typeof window === "undefined") return DEFAULT_RECT;
	if (isFragment(instance)) return getFragmentRect(instance.subTree);
	else if (el?.nodeType === 1) return el?.getBoundingClientRect();
	else if (instance.subTree.component) return getComponentBoundingRect(instance.subTree.component);
	else return DEFAULT_RECT;
}
function getRootElementsFromComponentInstance(instance) {
	if (isFragment(instance)) return getFragmentRootElements(instance.subTree);
	if (!instance.subTree) return [];
	return [instance.subTree.el];
}
function getFragmentRootElements(vnode) {
	if (!vnode.children) return [];
	const list = [];
	vnode.children.forEach((childVnode) => {
		if (childVnode.component) list.push(...getRootElementsFromComponentInstance(childVnode.component));
		else if (childVnode?.el) list.push(childVnode.el);
	});
	return list;
}
var CONTAINER_ELEMENT_ID = "__vue-devtools-component-inspector__";
var CARD_ELEMENT_ID = "__vue-devtools-component-inspector__card__";
var COMPONENT_NAME_ELEMENT_ID = "__vue-devtools-component-inspector__name__";
var INDICATOR_ELEMENT_ID = "__vue-devtools-component-inspector__indicator__";
var containerStyles = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
};
var cardStyles = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
};
var indicatorStyles = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function getContainerElement() {
	return document.getElementById(CONTAINER_ELEMENT_ID);
}
function getCardElement() {
	return document.getElementById(CARD_ELEMENT_ID);
}
function getIndicatorElement() {
	return document.getElementById(INDICATOR_ELEMENT_ID);
}
function getNameElement() {
	return document.getElementById(COMPONENT_NAME_ELEMENT_ID);
}
function getStyles(bounds) {
	return {
		left: `${Math.round(bounds.left * 100) / 100}px`,
		top: `${Math.round(bounds.top * 100) / 100}px`,
		width: `${Math.round(bounds.width * 100) / 100}px`,
		height: `${Math.round(bounds.height * 100) / 100}px`
	};
}
function create(options) {
	const containerEl = document.createElement("div");
	containerEl.id = options.elementId ?? CONTAINER_ELEMENT_ID;
	Object.assign(containerEl.style, {
		...containerStyles,
		...getStyles(options.bounds),
		...options.style
	});
	const cardEl = document.createElement("span");
	cardEl.id = CARD_ELEMENT_ID;
	Object.assign(cardEl.style, {
		...cardStyles,
		top: options.bounds.top < 35 ? 0 : "-35px"
	});
	const nameEl = document.createElement("span");
	nameEl.id = COMPONENT_NAME_ELEMENT_ID;
	nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
	const indicatorEl = document.createElement("i");
	indicatorEl.id = INDICATOR_ELEMENT_ID;
	indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
	Object.assign(indicatorEl.style, indicatorStyles);
	cardEl.appendChild(nameEl);
	cardEl.appendChild(indicatorEl);
	containerEl.appendChild(cardEl);
	document.body.appendChild(containerEl);
	return containerEl;
}
function update(options) {
	const containerEl = getContainerElement();
	const cardEl = getCardElement();
	const nameEl = getNameElement();
	const indicatorEl = getIndicatorElement();
	if (containerEl) {
		Object.assign(containerEl.style, {
			...containerStyles,
			...getStyles(options.bounds)
		});
		Object.assign(cardEl.style, { top: options.bounds.top < 35 ? 0 : "-35px" });
		nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
		indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
	}
}
function highlight(instance) {
	const bounds = getComponentBoundingRect(instance);
	if (!bounds.width && !bounds.height) return;
	const name = getInstanceName(instance);
	getContainerElement() ? update({
		bounds,
		name
	}) : create({
		bounds,
		name
	});
}
function unhighlight() {
	const el = getContainerElement();
	if (el) el.style.display = "none";
}
var inspectInstance = null;
function inspectFn(e) {
	const target = e.target;
	if (target) {
		const instance = target.__vueParentComponent;
		if (instance) {
			inspectInstance = instance;
			if (instance.vnode.el) {
				const bounds = getComponentBoundingRect(instance);
				const name = getInstanceName(instance);
				getContainerElement() ? update({
					bounds,
					name
				}) : create({
					bounds,
					name
				});
			}
		}
	}
}
function selectComponentFn(e, cb) {
	e.preventDefault();
	e.stopPropagation();
	if (inspectInstance) cb(getUniqueComponentId(inspectInstance));
}
var inspectComponentHighLighterSelectFn = null;
function cancelInspectComponentHighLighter() {
	unhighlight();
	window.removeEventListener("mouseover", inspectFn);
	window.removeEventListener("click", inspectComponentHighLighterSelectFn, true);
	inspectComponentHighLighterSelectFn = null;
}
function inspectComponentHighLighter() {
	window.addEventListener("mouseover", inspectFn);
	return new Promise((resolve) => {
		function onSelect(e) {
			e.preventDefault();
			e.stopPropagation();
			selectComponentFn(e, (id) => {
				window.removeEventListener("click", onSelect, true);
				inspectComponentHighLighterSelectFn = null;
				window.removeEventListener("mouseover", inspectFn);
				const el = getContainerElement();
				if (el) el.style.display = "none";
				resolve(JSON.stringify({ id }));
			});
		}
		inspectComponentHighLighterSelectFn = onSelect;
		window.addEventListener("click", onSelect, true);
	});
}
function scrollToComponent(options) {
	const instance = getComponentInstance(activeAppRecord.value, options.id);
	if (instance) {
		const [el] = getRootElementsFromComponentInstance(instance);
		if (typeof el.scrollIntoView === "function") el.scrollIntoView({ behavior: "smooth" });
		else {
			const bounds = getComponentBoundingRect(instance);
			const scrollTarget = document.createElement("div");
			const styles = {
				...getStyles(bounds),
				position: "absolute"
			};
			Object.assign(scrollTarget.style, styles);
			document.body.appendChild(scrollTarget);
			scrollTarget.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => {
				document.body.removeChild(scrollTarget);
			}, 2e3);
		}
		setTimeout(() => {
			const bounds = getComponentBoundingRect(instance);
			if (bounds.width || bounds.height) {
				const name = getInstanceName(instance);
				const el = getContainerElement();
				el ? update({
					...options,
					name,
					bounds
				}) : create({
					...options,
					name,
					bounds
				});
				setTimeout(() => {
					if (el) el.style.display = "none";
				}, 1500);
			}
		}, 1200);
	}
}
target.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= true;
function waitForInspectorInit(cb) {
	let total = 0;
	const timer = setInterval(() => {
		if (target.__VUE_INSPECTOR__) {
			clearInterval(timer);
			total += 30;
			cb();
		}
		if (total >= 5e3) clearInterval(timer);
	}, 30);
}
function setupInspector() {
	const inspector = target.__VUE_INSPECTOR__;
	const _openInEditor = inspector.openInEditor;
	inspector.openInEditor = async (...params) => {
		inspector.disable();
		_openInEditor(...params);
	};
}
function getComponentInspector() {
	return new Promise((resolve) => {
		function setup() {
			setupInspector();
			resolve(target.__VUE_INSPECTOR__);
		}
		if (!target.__VUE_INSPECTOR__) waitForInspectorInit(() => {
			setup();
		});
		else setup();
	});
}
/**
* To prevent include a **HUGE** vue package in the final bundle of chrome ext / electron
* we stub the necessary vue module.
* This implementation is based on the 1c3327a0fa5983aa9078e3f7bb2330f572435425 commit
*/
/**
* @from [@vue/reactivity](https://github.com/vuejs/core/blob/1c3327a0fa5983aa9078e3f7bb2330f572435425/packages/reactivity/src/constants.ts#L17-L23)
*/
var ReactiveFlags = /* @__PURE__ */ function(ReactiveFlags) {
	ReactiveFlags["SKIP"] = "__v_skip";
	ReactiveFlags["IS_REACTIVE"] = "__v_isReactive";
	ReactiveFlags["IS_READONLY"] = "__v_isReadonly";
	ReactiveFlags["IS_SHALLOW"] = "__v_isShallow";
	ReactiveFlags["RAW"] = "__v_raw";
	return ReactiveFlags;
}({});
/**
* @from [@vue/reactivity](https://github.com/vuejs/core/blob/1c3327a0fa5983aa9078e3f7bb2330f572435425/packages/reactivity/src/reactive.ts#L330-L332)
*/
function isReadonly(value) {
	return !!(value && value[ReactiveFlags.IS_READONLY]);
}
/**
* @from [@vue/reactivity](https://github.com/vuejs/core/blob/1c3327a0fa5983aa9078e3f7bb2330f572435425/packages/reactivity/src/reactive.ts#L312-L317)
*/
function isReactive$1(value) {
	if (isReadonly(value)) return isReactive$1(value[ReactiveFlags.RAW]);
	return !!(value && value[ReactiveFlags.IS_REACTIVE]);
}
function isRef$1(r) {
	return !!(r && r.__v_isRef === true);
}
/**
* @from [@vue/reactivity](https://github.com/vuejs/core/blob/1c3327a0fa5983aa9078e3f7bb2330f572435425/packages/reactivity/src/reactive.ts#L372-L375)
*/
function toRaw$1(observed) {
	const raw = observed && observed[ReactiveFlags.RAW];
	return raw ? toRaw$1(raw) : observed;
}
var StateEditor = class {
	constructor() {
		this.refEditor = new RefStateEditor();
	}
	set(object, path, value, cb) {
		const sections = Array.isArray(path) ? path : path.split(".");
		while (sections.length > 1) {
			const section = sections.shift();
			if (object instanceof Map) object = object.get(section);
			else if (object instanceof Set) object = Array.from(object.values())[section];
			else object = object[section];
			if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
		}
		const field = sections[0];
		const item = this.refEditor.get(object)[field];
		if (cb) cb(object, field, value);
		else if (this.refEditor.isRef(item)) this.refEditor.set(item, value);
		else object[field] = value;
	}
	get(object, path) {
		const sections = Array.isArray(path) ? path : path.split(".");
		for (let i = 0; i < sections.length; i++) {
			if (object instanceof Map) object = object.get(sections[i]);
			else object = object[sections[i]];
			if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
			if (!object) return void 0;
		}
		return object;
	}
	has(object, path, parent = false) {
		if (typeof object === "undefined") return false;
		const sections = Array.isArray(path) ? path.slice() : path.split(".");
		const size = !parent ? 1 : 2;
		while (object && sections.length > size) {
			const section = sections.shift();
			object = object[section];
			if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
		}
		return object != null && Object.prototype.hasOwnProperty.call(object, sections[0]);
	}
	createDefaultSetCallback(state) {
		return (object, field, value) => {
			if (state.remove || state.newKey) if (Array.isArray(object)) object.splice(field, 1);
			else if (toRaw$1(object) instanceof Map) object.delete(field);
			else if (toRaw$1(object) instanceof Set) object.delete(Array.from(object.values())[field]);
			else Reflect.deleteProperty(object, field);
			if (!state.remove) {
				const target = object[state.newKey || field];
				if (this.refEditor.isRef(target)) this.refEditor.set(target, value);
				else if (toRaw$1(object) instanceof Map) object.set(state.newKey || field, value);
				else if (toRaw$1(object) instanceof Set) object.add(value);
				else object[state.newKey || field] = value;
			}
		};
	}
};
var RefStateEditor = class {
	set(ref, value) {
		if (isRef$1(ref)) ref.value = value;
		else {
			if (ref instanceof Set && Array.isArray(value)) {
				ref.clear();
				value.forEach((v) => ref.add(v));
				return;
			}
			const currentKeys = Object.keys(value);
			if (ref instanceof Map) {
				const previousKeysSet = new Set(ref.keys());
				currentKeys.forEach((key) => {
					ref.set(key, Reflect.get(value, key));
					previousKeysSet.delete(key);
				});
				previousKeysSet.forEach((key) => ref.delete(key));
				return;
			}
			const previousKeysSet = new Set(Object.keys(ref));
			currentKeys.forEach((key) => {
				Reflect.set(ref, key, Reflect.get(value, key));
				previousKeysSet.delete(key);
			});
			previousKeysSet.forEach((key) => Reflect.deleteProperty(ref, key));
		}
	}
	get(ref) {
		return isRef$1(ref) ? ref.value : ref;
	}
	isRef(ref) {
		return isRef$1(ref) || isReactive$1(ref);
	}
};
new StateEditor();
var TIMELINE_LAYERS_STATE_STORAGE_ID = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function getTimelineLayersStateFromStorage() {
	if (typeof window === "undefined" || !isBrowser || typeof localStorage === "undefined" || localStorage === null) return {
		recordingState: false,
		mouseEventEnabled: false,
		keyboardEventEnabled: false,
		componentEventEnabled: false,
		performanceEventEnabled: false,
		selected: ""
	};
	const state = typeof localStorage.getItem !== "undefined" ? localStorage.getItem(TIMELINE_LAYERS_STATE_STORAGE_ID) : null;
	return state ? JSON.parse(state) : {
		recordingState: false,
		mouseEventEnabled: false,
		keyboardEventEnabled: false,
		componentEventEnabled: false,
		performanceEventEnabled: false,
		selected: ""
	};
}
target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var devtoolsTimelineLayers = new Proxy(target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(target, prop, receiver) {
	return Reflect.get(target, prop, receiver);
} });
function addTimelineLayer(options, descriptor) {
	devtoolsState.timelineLayersState[descriptor.id] = false;
	devtoolsTimelineLayers.push({
		...options,
		descriptorId: descriptor.id,
		appRecord: getAppRecord(descriptor.app)
	});
}
target.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var devtoolsInspector = new Proxy(target.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(target, prop, receiver) {
	return Reflect.get(target, prop, receiver);
} });
var callInspectorUpdatedHook = debounce(() => {
	devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.SEND_INSPECTOR_TO_CLIENT, getActiveInspectors());
});
function addInspector(inspector, descriptor) {
	devtoolsInspector.push({
		options: inspector,
		descriptor,
		treeFilterPlaceholder: inspector.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: inspector.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: getAppRecord(descriptor.app)
	});
	callInspectorUpdatedHook();
}
function getActiveInspectors() {
	return devtoolsInspector.filter((inspector) => inspector.descriptor.app === activeAppRecord.value.app).filter((inspector) => inspector.descriptor.id !== "components").map((inspector) => {
		const descriptor = inspector.descriptor;
		const options = inspector.options;
		return {
			id: options.id,
			label: options.label,
			logo: descriptor.logo,
			icon: `custom-ic-baseline-${options?.icon?.replace(/_/g, "-")}`,
			packageName: descriptor.packageName,
			homepage: descriptor.homepage,
			pluginId: descriptor.id
		};
	});
}
function getInspector(id, app) {
	return devtoolsInspector.find((inspector) => inspector.options.id === id && (app ? inspector.descriptor.app === app : true));
}
var DevToolsV6PluginAPIHookKeys = /* @__PURE__ */ function(DevToolsV6PluginAPIHookKeys) {
	DevToolsV6PluginAPIHookKeys["VISIT_COMPONENT_TREE"] = "visitComponentTree";
	DevToolsV6PluginAPIHookKeys["INSPECT_COMPONENT"] = "inspectComponent";
	DevToolsV6PluginAPIHookKeys["EDIT_COMPONENT_STATE"] = "editComponentState";
	DevToolsV6PluginAPIHookKeys["GET_INSPECTOR_TREE"] = "getInspectorTree";
	DevToolsV6PluginAPIHookKeys["GET_INSPECTOR_STATE"] = "getInspectorState";
	DevToolsV6PluginAPIHookKeys["EDIT_INSPECTOR_STATE"] = "editInspectorState";
	DevToolsV6PluginAPIHookKeys["INSPECT_TIMELINE_EVENT"] = "inspectTimelineEvent";
	DevToolsV6PluginAPIHookKeys["TIMELINE_CLEARED"] = "timelineCleared";
	DevToolsV6PluginAPIHookKeys["SET_PLUGIN_SETTINGS"] = "setPluginSettings";
	return DevToolsV6PluginAPIHookKeys;
}({});
var DevToolsContextHookKeys = /* @__PURE__ */ function(DevToolsContextHookKeys) {
	DevToolsContextHookKeys["ADD_INSPECTOR"] = "addInspector";
	DevToolsContextHookKeys["SEND_INSPECTOR_TREE"] = "sendInspectorTree";
	DevToolsContextHookKeys["SEND_INSPECTOR_STATE"] = "sendInspectorState";
	DevToolsContextHookKeys["CUSTOM_INSPECTOR_SELECT_NODE"] = "customInspectorSelectNode";
	DevToolsContextHookKeys["TIMELINE_LAYER_ADDED"] = "timelineLayerAdded";
	DevToolsContextHookKeys["TIMELINE_EVENT_ADDED"] = "timelineEventAdded";
	DevToolsContextHookKeys["GET_COMPONENT_INSTANCES"] = "getComponentInstances";
	DevToolsContextHookKeys["GET_COMPONENT_BOUNDS"] = "getComponentBounds";
	DevToolsContextHookKeys["GET_COMPONENT_NAME"] = "getComponentName";
	DevToolsContextHookKeys["COMPONENT_HIGHLIGHT"] = "componentHighlight";
	DevToolsContextHookKeys["COMPONENT_UNHIGHLIGHT"] = "componentUnhighlight";
	return DevToolsContextHookKeys;
}({});
var DevToolsMessagingHookKeys = /* @__PURE__ */ function(DevToolsMessagingHookKeys) {
	DevToolsMessagingHookKeys["SEND_INSPECTOR_TREE_TO_CLIENT"] = "sendInspectorTreeToClient";
	DevToolsMessagingHookKeys["SEND_INSPECTOR_STATE_TO_CLIENT"] = "sendInspectorStateToClient";
	DevToolsMessagingHookKeys["SEND_TIMELINE_EVENT_TO_CLIENT"] = "sendTimelineEventToClient";
	DevToolsMessagingHookKeys["SEND_INSPECTOR_TO_CLIENT"] = "sendInspectorToClient";
	DevToolsMessagingHookKeys["SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT"] = "sendActiveAppUpdatedToClient";
	DevToolsMessagingHookKeys["DEVTOOLS_STATE_UPDATED"] = "devtoolsStateUpdated";
	DevToolsMessagingHookKeys["DEVTOOLS_CONNECTED_UPDATED"] = "devtoolsConnectedUpdated";
	DevToolsMessagingHookKeys["ROUTER_INFO_UPDATED"] = "routerInfoUpdated";
	return DevToolsMessagingHookKeys;
}({});
function createDevToolsCtxHooks() {
	const hooks = createHooks();
	hooks.hook(DevToolsContextHookKeys.ADD_INSPECTOR, ({ inspector, plugin }) => {
		addInspector(inspector, plugin.descriptor);
	});
	const debounceSendInspectorTree = debounce(async ({ inspectorId, plugin }) => {
		if (!inspectorId || !plugin?.descriptor?.app || devtoolsState.highPerfModeEnabled) return;
		const inspector = getInspector(inspectorId, plugin.descriptor.app);
		const _payload = {
			app: plugin.descriptor.app,
			inspectorId,
			filter: inspector?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((resolve) => {
			hooks.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb(_payload)));
				resolve();
			}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE);
		});
		hooks.callHookWith(async (callbacks) => {
			await Promise.all(callbacks.map((cb) => cb({
				inspectorId,
				rootNodes: _payload.rootNodes
			})));
		}, DevToolsMessagingHookKeys.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	hooks.hook(DevToolsContextHookKeys.SEND_INSPECTOR_TREE, debounceSendInspectorTree);
	const debounceSendInspectorState = debounce(async ({ inspectorId, plugin }) => {
		if (!inspectorId || !plugin?.descriptor?.app || devtoolsState.highPerfModeEnabled) return;
		const inspector = getInspector(inspectorId, plugin.descriptor.app);
		const _payload = {
			app: plugin.descriptor.app,
			inspectorId,
			nodeId: inspector?.selectedNodeId || "",
			state: null
		};
		const ctx = { currentTab: `custom-inspector:${inspectorId}` };
		if (_payload.nodeId) await new Promise((resolve) => {
			hooks.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
				resolve();
			}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE);
		});
		hooks.callHookWith(async (callbacks) => {
			await Promise.all(callbacks.map((cb) => cb({
				inspectorId,
				nodeId: _payload.nodeId,
				state: _payload.state
			})));
		}, DevToolsMessagingHookKeys.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	hooks.hook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, debounceSendInspectorState);
	hooks.hook(DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId, nodeId, plugin }) => {
		const inspector = getInspector(inspectorId, plugin.descriptor.app);
		if (!inspector) return;
		inspector.selectedNodeId = nodeId;
	});
	hooks.hook(DevToolsContextHookKeys.TIMELINE_LAYER_ADDED, ({ options, plugin }) => {
		addTimelineLayer(options, plugin.descriptor);
	});
	hooks.hook(DevToolsContextHookKeys.TIMELINE_EVENT_ADDED, ({ options, plugin }) => {
		if (devtoolsState.highPerfModeEnabled || !devtoolsState.timelineLayersState?.[plugin.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(options.layerId)) return;
		hooks.callHookWith(async (callbacks) => {
			await Promise.all(callbacks.map((cb) => cb(options)));
		}, DevToolsMessagingHookKeys.SEND_TIMELINE_EVENT_TO_CLIENT);
	});
	hooks.hook(DevToolsContextHookKeys.GET_COMPONENT_INSTANCES, async ({ app }) => {
		const appRecord = app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!appRecord) return null;
		const appId = appRecord.id.toString();
		return [...appRecord.instanceMap].filter(([key]) => key.split(":")[0] === appId).map(([, instance]) => instance);
	});
	hooks.hook(DevToolsContextHookKeys.GET_COMPONENT_BOUNDS, async ({ instance }) => {
		return getComponentBoundingRect(instance);
	});
	hooks.hook(DevToolsContextHookKeys.GET_COMPONENT_NAME, ({ instance }) => {
		return getInstanceName(instance);
	});
	hooks.hook(DevToolsContextHookKeys.COMPONENT_HIGHLIGHT, ({ uid }) => {
		const instance = activeAppRecord.value.instanceMap.get(uid);
		if (instance) highlight(instance);
	});
	hooks.hook(DevToolsContextHookKeys.COMPONENT_UNHIGHLIGHT, () => {
		unhighlight();
	});
	return hooks;
}
target.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [];
target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {};
target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "";
target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [];
target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var STATE_KEY = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function initStateFactory() {
	return {
		connected: false,
		clientConnected: false,
		vitePluginDetected: true,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: true,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: getTimelineLayersStateFromStorage()
	};
}
target[STATE_KEY] ??= initStateFactory();
var callStateUpdatedHook = debounce((state) => {
	devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.DEVTOOLS_STATE_UPDATED, { state });
});
debounce((state, oldState) => {
	devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.DEVTOOLS_CONNECTED_UPDATED, {
		state,
		oldState
	});
});
var devtoolsAppRecords = new Proxy(target.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(_target, prop, receiver) {
	if (prop === "value") return target.__VUE_DEVTOOLS_KIT_APP_RECORDS__;
	return target.__VUE_DEVTOOLS_KIT_APP_RECORDS__[prop];
} });
var activeAppRecord = new Proxy(target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(_target, prop, receiver) {
	if (prop === "value") return target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__;
	else if (prop === "id") return target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__;
	return target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[prop];
} });
function updateAllStates() {
	callStateUpdatedHook({
		...target[STATE_KEY],
		appRecords: devtoolsAppRecords.value,
		activeAppRecordId: activeAppRecord.id,
		tabs: target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function setActiveAppRecord(app) {
	target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = app;
	updateAllStates();
}
function setActiveAppRecordId(id) {
	target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = id;
	updateAllStates();
}
var devtoolsState = new Proxy(target[STATE_KEY], {
	get(target$3, property) {
		if (property === "appRecords") return devtoolsAppRecords;
		else if (property === "activeAppRecordId") return activeAppRecord.id;
		else if (property === "tabs") return target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;
		else if (property === "commands") return target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
		return target[STATE_KEY][property];
	},
	deleteProperty(target, property) {
		delete target[property];
		return true;
	},
	set(target$4, property, value) {
		target$4[property] = value;
		target[STATE_KEY][property] = value;
		return true;
	}
});
function openInEditor(options = {}) {
	const { file, host, baseUrl = window.location.origin, line = 0, column = 0 } = options;
	if (file) {
		if (host === "chrome-extension") {
			const fileName = file.replace(/\\/g, "\\\\");
			const _baseUrl = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${_baseUrl}__open-in-editor?file=${encodeURI(file)}`).then((response) => {
				if (!response.ok) {
					const msg = `Opening component ${fileName} failed`;
					console.log(`%c${msg}`, "color:red");
				}
			});
		} else if (devtoolsState.vitePluginDetected) {
			const _baseUrl = target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? baseUrl;
			target.__VUE_INSPECTOR__.openInEditor(_baseUrl, file, line, column);
		}
	}
}
target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var devtoolsPluginBuffer = new Proxy(target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(target, prop, receiver) {
	return Reflect.get(target, prop, receiver);
} });
function _getSettings(settings) {
	const _settings = {};
	Object.keys(settings).forEach((key) => {
		_settings[key] = settings[key].defaultValue;
	});
	return _settings;
}
function getPluginLocalKey(pluginId) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${pluginId}__`;
}
function getPluginSettingsOptions(pluginId) {
	return (devtoolsPluginBuffer.find((item) => item[0].id === pluginId && !!item[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function getPluginSettings(pluginId, fallbackValue) {
	const localKey = getPluginLocalKey(pluginId);
	if (localKey) {
		const localSettings = localStorage.getItem(localKey);
		if (localSettings) return JSON.parse(localSettings);
	}
	if (pluginId) return _getSettings((devtoolsPluginBuffer.find((item) => item[0].id === pluginId)?.[0] ?? null)?.settings ?? {});
	return _getSettings(fallbackValue);
}
function initPluginSettings(pluginId, settings) {
	const localKey = getPluginLocalKey(pluginId);
	if (!localStorage.getItem(localKey)) localStorage.setItem(localKey, JSON.stringify(_getSettings(settings)));
}
function setPluginSettings(pluginId, key, value) {
	const localKey = getPluginLocalKey(pluginId);
	const localSettings = localStorage.getItem(localKey);
	const parsedLocalSettings = JSON.parse(localSettings || "{}");
	const updated = {
		...parsedLocalSettings,
		[key]: value
	};
	localStorage.setItem(localKey, JSON.stringify(updated));
	devtoolsContext.hooks.callHookWith((callbacks) => {
		callbacks.forEach((cb) => cb({
			pluginId,
			key,
			oldValue: parsedLocalSettings[key],
			newValue: value,
			settings: updated
		}));
	}, DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS);
}
var DevToolsHooks = /* @__PURE__ */ function(DevToolsHooks) {
	DevToolsHooks["APP_INIT"] = "app:init";
	DevToolsHooks["APP_UNMOUNT"] = "app:unmount";
	DevToolsHooks["COMPONENT_UPDATED"] = "component:updated";
	DevToolsHooks["COMPONENT_ADDED"] = "component:added";
	DevToolsHooks["COMPONENT_REMOVED"] = "component:removed";
	DevToolsHooks["COMPONENT_EMIT"] = "component:emit";
	DevToolsHooks["PERFORMANCE_START"] = "perf:start";
	DevToolsHooks["PERFORMANCE_END"] = "perf:end";
	DevToolsHooks["ADD_ROUTE"] = "router:add-route";
	DevToolsHooks["REMOVE_ROUTE"] = "router:remove-route";
	DevToolsHooks["RENDER_TRACKED"] = "render:tracked";
	DevToolsHooks["RENDER_TRIGGERED"] = "render:triggered";
	DevToolsHooks["APP_CONNECTED"] = "app:connected";
	DevToolsHooks["SETUP_DEVTOOLS_PLUGIN"] = "devtools-plugin:setup";
	return DevToolsHooks;
}({});
var devtoolsHooks = target.__VUE_DEVTOOLS_HOOK ??= createHooks();
var hook = {
	on: {
		vueAppInit(fn) {
			devtoolsHooks.hook(DevToolsHooks.APP_INIT, fn);
		},
		vueAppUnmount(fn) {
			devtoolsHooks.hook(DevToolsHooks.APP_UNMOUNT, fn);
		},
		vueAppConnected(fn) {
			devtoolsHooks.hook(DevToolsHooks.APP_CONNECTED, fn);
		},
		componentAdded(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_ADDED, fn);
		},
		componentEmit(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_EMIT, fn);
		},
		componentUpdated(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_UPDATED, fn);
		},
		componentRemoved(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_REMOVED, fn);
		},
		setupDevtoolsPlugin(fn) {
			devtoolsHooks.hook(DevToolsHooks.SETUP_DEVTOOLS_PLUGIN, fn);
		},
		perfStart(fn) {
			return devtoolsHooks.hook(DevToolsHooks.PERFORMANCE_START, fn);
		},
		perfEnd(fn) {
			return devtoolsHooks.hook(DevToolsHooks.PERFORMANCE_END, fn);
		}
	},
	setupDevToolsPlugin(pluginDescriptor, setupFn) {
		return devtoolsHooks.callHook(DevToolsHooks.SETUP_DEVTOOLS_PLUGIN, pluginDescriptor, setupFn);
	}
};
var DevToolsV6PluginAPI = class {
	constructor({ plugin, ctx }) {
		this.hooks = ctx.hooks;
		this.plugin = plugin;
	}
	get on() {
		return {
			visitComponentTree: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE, handler);
			},
			inspectComponent: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT, handler);
			},
			editComponentState: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE, handler);
			},
			getInspectorTree: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE, handler);
			},
			getInspectorState: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE, handler);
			},
			editInspectorState: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE, handler);
			},
			inspectTimelineEvent: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT, handler);
			},
			timelineCleared: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED, handler);
			},
			setPluginSettings: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS, handler);
			}
		};
	}
	notifyComponentUpdate(instance) {
		if (devtoolsState.highPerfModeEnabled) return;
		const inspector = getActiveInspectors().find((i) => i.packageName === this.plugin.descriptor.packageName);
		if (inspector?.id) {
			if (instance) {
				const args = [
					instance.appContext.app,
					instance.uid,
					instance.parent?.uid,
					instance
				];
				devtoolsHooks.callHook(DevToolsHooks.COMPONENT_UPDATED, ...args);
			} else devtoolsHooks.callHook(DevToolsHooks.COMPONENT_UPDATED);
			this.hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, {
				inspectorId: inspector.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(options) {
		this.hooks.callHook(DevToolsContextHookKeys.ADD_INSPECTOR, {
			inspector: options,
			plugin: this.plugin
		});
		if (this.plugin.descriptor.settings) initPluginSettings(options.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(inspectorId) {
		if (devtoolsState.highPerfModeEnabled) return;
		this.hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_TREE, {
			inspectorId,
			plugin: this.plugin
		});
	}
	sendInspectorState(inspectorId) {
		if (devtoolsState.highPerfModeEnabled) return;
		this.hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, {
			inspectorId,
			plugin: this.plugin
		});
	}
	selectInspectorNode(inspectorId, nodeId) {
		this.hooks.callHook(DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId,
			nodeId,
			plugin: this.plugin
		});
	}
	visitComponentTree(payload) {
		return this.hooks.callHook(DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE, payload);
	}
	now() {
		if (devtoolsState.highPerfModeEnabled) return 0;
		return Date.now();
	}
	addTimelineLayer(options) {
		this.hooks.callHook(DevToolsContextHookKeys.TIMELINE_LAYER_ADDED, {
			options,
			plugin: this.plugin
		});
	}
	addTimelineEvent(options) {
		if (devtoolsState.highPerfModeEnabled) return;
		this.hooks.callHook(DevToolsContextHookKeys.TIMELINE_EVENT_ADDED, {
			options,
			plugin: this.plugin
		});
	}
	getSettings(pluginId) {
		return getPluginSettings(pluginId ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(app) {
		return this.hooks.callHook(DevToolsContextHookKeys.GET_COMPONENT_INSTANCES, { app });
	}
	getComponentBounds(instance) {
		return this.hooks.callHook(DevToolsContextHookKeys.GET_COMPONENT_BOUNDS, { instance });
	}
	getComponentName(instance) {
		return this.hooks.callHook(DevToolsContextHookKeys.GET_COMPONENT_NAME, { instance });
	}
	highlightElement(instance) {
		const uid = instance.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(DevToolsContextHookKeys.COMPONENT_HIGHLIGHT, { uid });
	}
	unhighlightElement() {
		return this.hooks.callHook(DevToolsContextHookKeys.COMPONENT_UNHIGHLIGHT);
	}
};
var DevToolsPluginAPI = DevToolsV6PluginAPI;
var UNDEFINED = "__vue_devtool_undefined__";
var INFINITY = "__vue_devtool_infinity__";
var NEGATIVE_INFINITY = "__vue_devtool_negative_infinity__";
var NAN = "__vue_devtool_nan__";
Object.entries({
	[UNDEFINED]: "undefined",
	[NAN]: "NaN",
	[INFINITY]: "Infinity",
	[NEGATIVE_INFINITY]: "-Infinity"
}).reduce((acc, [key, value]) => {
	acc[value] = key;
	return acc;
}, {});
target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function setupDevToolsPlugin(pluginDescriptor, setupFn) {
	return hook.setupDevToolsPlugin(pluginDescriptor, setupFn);
}
function callDevToolsPluginSetupFn(plugin, app) {
	const [pluginDescriptor, setupFn] = plugin;
	if (pluginDescriptor.app !== app) return;
	const api = new DevToolsPluginAPI({
		plugin: {
			setupFn,
			descriptor: pluginDescriptor
		},
		ctx: devtoolsContext
	});
	if (pluginDescriptor.packageName === "vuex") api.on.editInspectorState((payload) => {
		api.sendInspectorState(payload.inspectorId);
	});
	setupFn(api);
}
function registerDevToolsPlugin(app, options) {
	if (target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(app)) return;
	if (devtoolsState.highPerfModeEnabled && !options?.inspectingComponent) return;
	target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(app);
	devtoolsPluginBuffer.forEach((plugin) => {
		callDevToolsPluginSetupFn(plugin, app);
	});
}
var ROUTER_KEY = "__VUE_DEVTOOLS_ROUTER__";
var ROUTER_INFO_KEY = "__VUE_DEVTOOLS_ROUTER_INFO__";
target[ROUTER_INFO_KEY] ??= {
	currentRoute: null,
	routes: []
};
target[ROUTER_KEY] ??= {};
new Proxy(target[ROUTER_INFO_KEY], { get(target$1, property) {
	return target[ROUTER_INFO_KEY][property];
} });
new Proxy(target[ROUTER_KEY], { get(target$2, property) {
	if (property === "value") return target[ROUTER_KEY];
} });
function getRoutes(router) {
	const routesMap = /* @__PURE__ */ new Map();
	return (router?.getRoutes() || []).filter((i) => !routesMap.has(i.path) && routesMap.set(i.path, 1));
}
function filterRoutes(routes) {
	return routes.map((item) => {
		let { path, name, children, meta } = item;
		if (children?.length) children = filterRoutes(children);
		return {
			path,
			name,
			children,
			meta
		};
	});
}
function filterCurrentRoute(route) {
	if (route) {
		const { fullPath, hash, href, path, name, matched, params, query } = route;
		return {
			fullPath,
			hash,
			href,
			path,
			name,
			params,
			query,
			matched: filterRoutes(matched)
		};
	}
	return route;
}
function normalizeRouterInfo(appRecord, activeAppRecord) {
	function init() {
		const router = appRecord.app?.config.globalProperties.$router;
		const currentRoute = filterCurrentRoute(router?.currentRoute.value);
		const routes = filterRoutes(getRoutes(router));
		const c = console.warn;
		console.warn = () => {};
		target[ROUTER_INFO_KEY] = {
			currentRoute: currentRoute ? deepClone(currentRoute) : {},
			routes: deepClone(routes)
		};
		target[ROUTER_KEY] = router;
		console.warn = c;
	}
	init();
	hook.on.componentUpdated(debounce(() => {
		if (activeAppRecord.value?.app !== appRecord.app) return;
		init();
		if (devtoolsState.highPerfModeEnabled) return;
		devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.ROUTER_INFO_UPDATED, { state: target[ROUTER_INFO_KEY] });
	}, 200));
}
function createDevToolsApi(hooks) {
	return {
		async getInspectorTree(payload) {
			const _payload = {
				...payload,
				app: activeAppRecord.value.app,
				rootNodes: []
			};
			await new Promise((resolve) => {
				hooks.callHookWith(async (callbacks) => {
					await Promise.all(callbacks.map((cb) => cb(_payload)));
					resolve();
				}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE);
			});
			return _payload.rootNodes;
		},
		async getInspectorState(payload) {
			const _payload = {
				...payload,
				app: activeAppRecord.value.app,
				state: null
			};
			const ctx = { currentTab: `custom-inspector:${payload.inspectorId}` };
			await new Promise((resolve) => {
				hooks.callHookWith(async (callbacks) => {
					await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
					resolve();
				}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE);
			});
			return _payload.state;
		},
		editInspectorState(payload) {
			const stateEditor = new StateEditor();
			const _payload = {
				...payload,
				app: activeAppRecord.value.app,
				set: (obj, path = payload.path, value = payload.state.value, cb) => {
					stateEditor.set(obj, path, value, cb || stateEditor.createDefaultSetCallback(payload.state));
				}
			};
			hooks.callHookWith((callbacks) => {
				callbacks.forEach((cb) => cb(_payload));
			}, DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(inspectorId) {
			const inspector = getInspector(inspectorId);
			hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, {
				inspectorId,
				plugin: {
					descriptor: inspector.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return inspectComponentHighLighter();
		},
		cancelInspectComponentInspector() {
			return cancelInspectComponentHighLighter();
		},
		getComponentRenderCode(id) {
			const instance = getComponentInstance(activeAppRecord.value, id);
			if (instance) return !(typeof instance?.type === "function") ? instance.render.toString() : instance.type.toString();
		},
		scrollToComponent(id) {
			return scrollToComponent({ id });
		},
		openInEditor,
		getVueInspector: getComponentInspector,
		toggleApp(id, options) {
			const appRecord = devtoolsAppRecords.value.find((record) => record.id === id);
			if (appRecord) {
				setActiveAppRecordId(id);
				setActiveAppRecord(appRecord);
				normalizeRouterInfo(appRecord, activeAppRecord);
				callInspectorUpdatedHook();
				registerDevToolsPlugin(appRecord.app, options);
			}
		},
		inspectDOM(instanceId) {
			const instance = getComponentInstance(activeAppRecord.value, instanceId);
			if (instance) {
				const [el] = getRootElementsFromComponentInstance(instance);
				if (el) target.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = el;
			}
		},
		updatePluginSettings(pluginId, key, value) {
			setPluginSettings(pluginId, key, value);
		},
		getPluginSettings(pluginId) {
			return {
				options: getPluginSettingsOptions(pluginId),
				values: getPluginSettings(pluginId)
			};
		}
	};
}
target.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: false };
var hooks = createDevToolsCtxHooks();
target.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks,
	get state() {
		return {
			...devtoolsState,
			activeAppRecordId: activeAppRecord.id,
			activeAppRecord: activeAppRecord.value,
			appRecords: devtoolsAppRecords.value
		};
	},
	api: createDevToolsApi(hooks)
};
var devtoolsContext = target.__VUE_DEVTOOLS_KIT_CONTEXT__;
var require_speakingurl$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root) {
		"use strict";
		/**
		* charMap
		* @type {Object}
		*/
		var charMap = {
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "Ae",
			"Å": "A",
			"Æ": "AE",
			"Ç": "C",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"Ð": "D",
			"Ñ": "N",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "Oe",
			"Ő": "O",
			"Ø": "O",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "Ue",
			"Ű": "U",
			"Ý": "Y",
			"Þ": "TH",
			"ß": "ss",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "ae",
			"å": "a",
			"æ": "ae",
			"ç": "c",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"ð": "d",
			"ñ": "n",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "oe",
			"ő": "o",
			"ø": "o",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "ue",
			"ű": "u",
			"ý": "y",
			"þ": "th",
			"ÿ": "y",
			"ẞ": "SS",
			"ا": "a",
			"أ": "a",
			"إ": "i",
			"آ": "aa",
			"ؤ": "u",
			"ئ": "e",
			"ء": "a",
			"ب": "b",
			"ت": "t",
			"ث": "th",
			"ج": "j",
			"ح": "h",
			"خ": "kh",
			"د": "d",
			"ذ": "th",
			"ر": "r",
			"ز": "z",
			"س": "s",
			"ش": "sh",
			"ص": "s",
			"ض": "dh",
			"ط": "t",
			"ظ": "z",
			"ع": "a",
			"غ": "gh",
			"ف": "f",
			"ق": "q",
			"ك": "k",
			"ل": "l",
			"م": "m",
			"ن": "n",
			"ه": "h",
			"و": "w",
			"ي": "y",
			"ى": "a",
			"ة": "h",
			"ﻻ": "la",
			"ﻷ": "laa",
			"ﻹ": "lai",
			"ﻵ": "laa",
			"گ": "g",
			"چ": "ch",
			"پ": "p",
			"ژ": "zh",
			"ک": "k",
			"ی": "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			"က": "k",
			"ခ": "kh",
			"ဂ": "g",
			"ဃ": "ga",
			"င": "ng",
			"စ": "s",
			"ဆ": "sa",
			"ဇ": "z",
			"စျ": "za",
			"ည": "ny",
			"ဋ": "t",
			"ဌ": "ta",
			"ဍ": "d",
			"ဎ": "da",
			"ဏ": "na",
			"တ": "t",
			"ထ": "ta",
			"ဒ": "d",
			"ဓ": "da",
			"န": "n",
			"ပ": "p",
			"ဖ": "pa",
			"ဗ": "b",
			"ဘ": "ba",
			"မ": "m",
			"ယ": "y",
			"ရ": "ya",
			"လ": "l",
			"ဝ": "w",
			"သ": "th",
			"ဟ": "h",
			"ဠ": "la",
			"အ": "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			"ဧ": "e",
			"၏": "-e",
			"ဣ": "i",
			"ဤ": "-i",
			"ဉ": "u",
			"ဦ": "-u",
			"ဩ": "aw",
			"သြော": "aw",
			"ဪ": "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			"č": "c",
			"ď": "d",
			"ě": "e",
			"ň": "n",
			"ř": "r",
			"š": "s",
			"ť": "t",
			"ů": "u",
			"ž": "z",
			"Č": "C",
			"Ď": "D",
			"Ě": "E",
			"Ň": "N",
			"Ř": "R",
			"Š": "S",
			"Ť": "T",
			"Ů": "U",
			"Ž": "Z",
			"ހ": "h",
			"ށ": "sh",
			"ނ": "n",
			"ރ": "r",
			"ބ": "b",
			"ޅ": "lh",
			"ކ": "k",
			"އ": "a",
			"ވ": "v",
			"މ": "m",
			"ފ": "f",
			"ދ": "dh",
			"ތ": "th",
			"ލ": "l",
			"ގ": "g",
			"ޏ": "gn",
			"ސ": "s",
			"ޑ": "d",
			"ޒ": "z",
			"ޓ": "t",
			"ޔ": "y",
			"ޕ": "p",
			"ޖ": "j",
			"ޗ": "ch",
			"ޘ": "tt",
			"ޙ": "hh",
			"ޚ": "kh",
			"ޛ": "th",
			"ޜ": "z",
			"ޝ": "sh",
			"ޞ": "s",
			"ޟ": "d",
			"ޠ": "t",
			"ޡ": "z",
			"ޢ": "a",
			"ޣ": "gh",
			"ޤ": "q",
			"ޥ": "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			"ა": "a",
			"ბ": "b",
			"გ": "g",
			"დ": "d",
			"ე": "e",
			"ვ": "v",
			"ზ": "z",
			"თ": "t",
			"ი": "i",
			"კ": "k",
			"ლ": "l",
			"მ": "m",
			"ნ": "n",
			"ო": "o",
			"პ": "p",
			"ჟ": "zh",
			"რ": "r",
			"ს": "s",
			"ტ": "t",
			"უ": "u",
			"ფ": "p",
			"ქ": "k",
			"ღ": "gh",
			"ყ": "q",
			"შ": "sh",
			"ჩ": "ch",
			"ც": "ts",
			"ძ": "dz",
			"წ": "ts",
			"ჭ": "ch",
			"ხ": "kh",
			"ჯ": "j",
			"ჰ": "h",
			"α": "a",
			"β": "v",
			"γ": "g",
			"δ": "d",
			"ε": "e",
			"ζ": "z",
			"η": "i",
			"θ": "th",
			"ι": "i",
			"κ": "k",
			"λ": "l",
			"μ": "m",
			"ν": "n",
			"ξ": "ks",
			"ο": "o",
			"π": "p",
			"ρ": "r",
			"σ": "s",
			"τ": "t",
			"υ": "y",
			"φ": "f",
			"χ": "x",
			"ψ": "ps",
			"ω": "o",
			"ά": "a",
			"έ": "e",
			"ί": "i",
			"ό": "o",
			"ύ": "y",
			"ή": "i",
			"ώ": "o",
			"ς": "s",
			"ϊ": "i",
			"ΰ": "y",
			"ϋ": "y",
			"ΐ": "i",
			"Α": "A",
			"Β": "B",
			"Γ": "G",
			"Δ": "D",
			"Ε": "E",
			"Ζ": "Z",
			"Η": "I",
			"Θ": "TH",
			"Ι": "I",
			"Κ": "K",
			"Λ": "L",
			"Μ": "M",
			"Ν": "N",
			"Ξ": "KS",
			"Ο": "O",
			"Π": "P",
			"Ρ": "R",
			"Σ": "S",
			"Τ": "T",
			"Υ": "Y",
			"Φ": "F",
			"Χ": "X",
			"Ψ": "PS",
			"Ω": "O",
			"Ά": "A",
			"Έ": "E",
			"Ί": "I",
			"Ό": "O",
			"Ύ": "Y",
			"Ή": "I",
			"Ώ": "O",
			"Ϊ": "I",
			"Ϋ": "Y",
			"ā": "a",
			"ē": "e",
			"ģ": "g",
			"ī": "i",
			"ķ": "k",
			"ļ": "l",
			"ņ": "n",
			"ū": "u",
			"Ā": "A",
			"Ē": "E",
			"Ģ": "G",
			"Ī": "I",
			"Ķ": "k",
			"Ļ": "L",
			"Ņ": "N",
			"Ū": "U",
			"Ќ": "Kj",
			"ќ": "kj",
			"Љ": "Lj",
			"љ": "lj",
			"Њ": "Nj",
			"њ": "nj",
			"Тс": "Ts",
			"тс": "ts",
			"ą": "a",
			"ć": "c",
			"ę": "e",
			"ł": "l",
			"ń": "n",
			"ś": "s",
			"ź": "z",
			"ż": "z",
			"Ą": "A",
			"Ć": "C",
			"Ę": "E",
			"Ł": "L",
			"Ń": "N",
			"Ś": "S",
			"Ź": "Z",
			"Ż": "Z",
			"Є": "Ye",
			"І": "I",
			"Ї": "Yi",
			"Ґ": "G",
			"є": "ye",
			"і": "i",
			"ї": "yi",
			"ґ": "g",
			"ă": "a",
			"Ă": "A",
			"ș": "s",
			"Ș": "S",
			"ț": "t",
			"Ț": "T",
			"ţ": "t",
			"Ţ": "T",
			"а": "a",
			"б": "b",
			"в": "v",
			"г": "g",
			"д": "d",
			"е": "e",
			"ё": "yo",
			"ж": "zh",
			"з": "z",
			"и": "i",
			"й": "i",
			"к": "k",
			"л": "l",
			"м": "m",
			"н": "n",
			"о": "o",
			"п": "p",
			"р": "r",
			"с": "s",
			"т": "t",
			"у": "u",
			"ф": "f",
			"х": "kh",
			"ц": "c",
			"ч": "ch",
			"ш": "sh",
			"щ": "sh",
			"ъ": "",
			"ы": "y",
			"ь": "",
			"э": "e",
			"ю": "yu",
			"я": "ya",
			"А": "A",
			"Б": "B",
			"В": "V",
			"Г": "G",
			"Д": "D",
			"Е": "E",
			"Ё": "Yo",
			"Ж": "Zh",
			"З": "Z",
			"И": "I",
			"Й": "I",
			"К": "K",
			"Л": "L",
			"М": "M",
			"Н": "N",
			"О": "O",
			"П": "P",
			"Р": "R",
			"С": "S",
			"Т": "T",
			"У": "U",
			"Ф": "F",
			"Х": "Kh",
			"Ц": "C",
			"Ч": "Ch",
			"Ш": "Sh",
			"Щ": "Sh",
			"Ъ": "",
			"Ы": "Y",
			"Ь": "",
			"Э": "E",
			"Ю": "Yu",
			"Я": "Ya",
			"ђ": "dj",
			"ј": "j",
			"ћ": "c",
			"џ": "dz",
			"Ђ": "Dj",
			"Ј": "j",
			"Ћ": "C",
			"Џ": "Dz",
			"ľ": "l",
			"ĺ": "l",
			"ŕ": "r",
			"Ľ": "L",
			"Ĺ": "L",
			"Ŕ": "R",
			"ş": "s",
			"Ş": "S",
			"ı": "i",
			"İ": "I",
			"ğ": "g",
			"Ğ": "G",
			"ả": "a",
			"Ả": "A",
			"ẳ": "a",
			"Ẳ": "A",
			"ẩ": "a",
			"Ẩ": "A",
			"đ": "d",
			"Đ": "D",
			"ẹ": "e",
			"Ẹ": "E",
			"ẽ": "e",
			"Ẽ": "E",
			"ẻ": "e",
			"Ẻ": "E",
			"ế": "e",
			"Ế": "E",
			"ề": "e",
			"Ề": "E",
			"ệ": "e",
			"Ệ": "E",
			"ễ": "e",
			"Ễ": "E",
			"ể": "e",
			"Ể": "E",
			"ỏ": "o",
			"ọ": "o",
			"Ọ": "o",
			"ố": "o",
			"Ố": "O",
			"ồ": "o",
			"Ồ": "O",
			"ổ": "o",
			"Ổ": "O",
			"ộ": "o",
			"Ộ": "O",
			"ỗ": "o",
			"Ỗ": "O",
			"ơ": "o",
			"Ơ": "O",
			"ớ": "o",
			"Ớ": "O",
			"ờ": "o",
			"Ờ": "O",
			"ợ": "o",
			"Ợ": "O",
			"ỡ": "o",
			"Ỡ": "O",
			"Ở": "o",
			"ở": "o",
			"ị": "i",
			"Ị": "I",
			"ĩ": "i",
			"Ĩ": "I",
			"ỉ": "i",
			"Ỉ": "i",
			"ủ": "u",
			"Ủ": "U",
			"ụ": "u",
			"Ụ": "U",
			"ũ": "u",
			"Ũ": "U",
			"ư": "u",
			"Ư": "U",
			"ứ": "u",
			"Ứ": "U",
			"ừ": "u",
			"Ừ": "U",
			"ự": "u",
			"Ự": "U",
			"ữ": "u",
			"Ữ": "U",
			"ử": "u",
			"Ử": "ư",
			"ỷ": "y",
			"Ỷ": "y",
			"ỳ": "y",
			"Ỳ": "Y",
			"ỵ": "y",
			"Ỵ": "Y",
			"ỹ": "y",
			"Ỹ": "Y",
			"ạ": "a",
			"Ạ": "A",
			"ấ": "a",
			"Ấ": "A",
			"ầ": "a",
			"Ầ": "A",
			"ậ": "a",
			"Ậ": "A",
			"ẫ": "a",
			"Ẫ": "A",
			"ắ": "a",
			"Ắ": "A",
			"ằ": "a",
			"Ằ": "A",
			"ặ": "a",
			"Ặ": "A",
			"ẵ": "a",
			"Ẵ": "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			"ƒ": "f",
			"™": "(TM)",
			"©": "(C)",
			"œ": "oe",
			"Œ": "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			"º": "o",
			"ª": "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			"$": "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			"元": "CNY",
			"円": "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			"лв": "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			"ден": "MKD",
			"zł": "PLN",
			"₽": "RUB",
			"₾": "GEL"
		};
		/**
		* special look ahead character array
		* These characters form with consonants to become 'single'/consonant combo
		* @type [Array]
		*/
		var lookAheadCharArray = ["်", "ް"];
		/**
		* diatricMap for languages where transliteration changes entirely as more diatrics are added
		* @type {Object}
		*/
		var diatricMap = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			"က်": "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			"င်": "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			"စ်": "it",
			"ည်": "i",
			"တ်": "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			"ဒ်": "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			"န်": "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			"ပ်": "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			"န်ုပ်": "nub",
			"မ်": "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			"ယ်": "e",
			"ိုလ်": "ol",
			"ဉ်": "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		};
		/**
		* langCharMap language specific characters translations
		* @type   {Object}
		*/
		var langCharMap = {
			"en": {},
			"az": {
				"ç": "c",
				"ə": "e",
				"ğ": "g",
				"ı": "i",
				"ö": "o",
				"ş": "s",
				"ü": "u",
				"Ç": "C",
				"Ə": "E",
				"Ğ": "G",
				"İ": "I",
				"Ö": "O",
				"Ş": "S",
				"Ü": "U"
			},
			"cs": {
				"č": "c",
				"ď": "d",
				"ě": "e",
				"ň": "n",
				"ř": "r",
				"š": "s",
				"ť": "t",
				"ů": "u",
				"ž": "z",
				"Č": "C",
				"Ď": "D",
				"Ě": "E",
				"Ň": "N",
				"Ř": "R",
				"Š": "S",
				"Ť": "T",
				"Ů": "U",
				"Ž": "Z"
			},
			"fi": {
				"ä": "a",
				"Ä": "A",
				"ö": "o",
				"Ö": "O"
			},
			"hu": {
				"ä": "a",
				"Ä": "A",
				"ö": "o",
				"Ö": "O",
				"ü": "u",
				"Ü": "U",
				"ű": "u",
				"Ű": "U"
			},
			"lt": {
				"ą": "a",
				"č": "c",
				"ę": "e",
				"ė": "e",
				"į": "i",
				"š": "s",
				"ų": "u",
				"ū": "u",
				"ž": "z",
				"Ą": "A",
				"Č": "C",
				"Ę": "E",
				"Ė": "E",
				"Į": "I",
				"Š": "S",
				"Ų": "U",
				"Ū": "U"
			},
			"lv": {
				"ā": "a",
				"č": "c",
				"ē": "e",
				"ģ": "g",
				"ī": "i",
				"ķ": "k",
				"ļ": "l",
				"ņ": "n",
				"š": "s",
				"ū": "u",
				"ž": "z",
				"Ā": "A",
				"Č": "C",
				"Ē": "E",
				"Ģ": "G",
				"Ī": "i",
				"Ķ": "k",
				"Ļ": "L",
				"Ņ": "N",
				"Š": "S",
				"Ū": "u",
				"Ž": "Z"
			},
			"pl": {
				"ą": "a",
				"ć": "c",
				"ę": "e",
				"ł": "l",
				"ń": "n",
				"ó": "o",
				"ś": "s",
				"ź": "z",
				"ż": "z",
				"Ą": "A",
				"Ć": "C",
				"Ę": "e",
				"Ł": "L",
				"Ń": "N",
				"Ó": "O",
				"Ś": "S",
				"Ź": "Z",
				"Ż": "Z"
			},
			"sv": {
				"ä": "a",
				"Ä": "A",
				"ö": "o",
				"Ö": "O"
			},
			"sk": {
				"ä": "a",
				"Ä": "A"
			},
			"sr": {
				"љ": "lj",
				"њ": "nj",
				"Љ": "Lj",
				"Њ": "Nj",
				"đ": "dj",
				"Đ": "Dj"
			},
			"tr": {
				"Ü": "U",
				"Ö": "O",
				"ü": "u",
				"ö": "o"
			}
		};
		/**
		* symbolMap language specific symbol translations
		* translations must be transliterated already
		* @type   {Object}
		*/
		var symbolMap = {
			"ar": {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			"az": {},
			"ca": {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			"cs": {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			"de": {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			"dv": {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			"en": {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			"es": {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			"fa": {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			"fi": {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			"fr": {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			"ge": {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			"gr": {},
			"hu": {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			"it": {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			"lt": {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			"lv": {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			"my": {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			"mk": {},
			"nl": {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			"pl": {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			"pt": {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			"ro": {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			"ru": {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			"sk": {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			"sr": {},
			"tr": {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			"uk": {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			"vn": {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		};
		var uricChars = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join("");
		var uricNoSlashChars = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join("");
		var markChars = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join("");
		/**
		* getSlug
		* @param  {string} input input string
		* @param  {object|string} opts config object or separator string/char
		* @api    public
		* @return {string}  sluggified string
		*/
		var getSlug = function getSlug(input, opts) {
			var separator = "-";
			var result = "";
			var diatricString = "";
			var convertSymbols = true;
			var customReplacements = {};
			var maintainCase;
			var titleCase;
			var truncate;
			var uricFlag;
			var uricNoSlashFlag;
			var markFlag;
			var symbol;
			var langChar;
			var lucky;
			var i;
			var ch;
			var l;
			var lastCharWasSymbol;
			var lastCharWasDiatric;
			var allowedChars = "";
			if (typeof input !== "string") return "";
			if (typeof opts === "string") separator = opts;
			symbol = symbolMap.en;
			langChar = langCharMap.en;
			if (typeof opts === "object") {
				maintainCase = opts.maintainCase || false;
				customReplacements = opts.custom && typeof opts.custom === "object" ? opts.custom : customReplacements;
				truncate = +opts.truncate > 1 && opts.truncate || false;
				uricFlag = opts.uric || false;
				uricNoSlashFlag = opts.uricNoSlash || false;
				markFlag = opts.mark || false;
				convertSymbols = opts.symbols === false || opts.lang === false ? false : true;
				separator = opts.separator || separator;
				if (uricFlag) allowedChars += uricChars;
				if (uricNoSlashFlag) allowedChars += uricNoSlashChars;
				if (markFlag) allowedChars += markChars;
				symbol = opts.lang && symbolMap[opts.lang] && convertSymbols ? symbolMap[opts.lang] : convertSymbols ? symbolMap.en : {};
				langChar = opts.lang && langCharMap[opts.lang] ? langCharMap[opts.lang] : opts.lang === false || opts.lang === true ? {} : langCharMap.en;
				if (opts.titleCase && typeof opts.titleCase.length === "number" && Array.prototype.toString.call(opts.titleCase)) {
					opts.titleCase.forEach(function(v) {
						customReplacements[v + ""] = v + "";
					});
					titleCase = true;
				} else titleCase = !!opts.titleCase;
				if (opts.custom && typeof opts.custom.length === "number" && Array.prototype.toString.call(opts.custom)) opts.custom.forEach(function(v) {
					customReplacements[v + ""] = v + "";
				});
				Object.keys(customReplacements).forEach(function(v) {
					var r;
					if (v.length > 1) r = new RegExp("\\b" + escapeChars(v) + "\\b", "gi");
					else r = new RegExp(escapeChars(v), "gi");
					input = input.replace(r, customReplacements[v]);
				});
				for (ch in customReplacements) allowedChars += ch;
			}
			allowedChars += separator;
			allowedChars = escapeChars(allowedChars);
			input = input.replace(/(^\s+|\s+$)/g, "");
			lastCharWasSymbol = false;
			lastCharWasDiatric = false;
			for (i = 0, l = input.length; i < l; i++) {
				ch = input[i];
				if (isReplacedCustomChar(ch, customReplacements)) lastCharWasSymbol = false;
				else if (langChar[ch]) {
					ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? " " + langChar[ch] : langChar[ch];
					lastCharWasSymbol = false;
				} else if (ch in charMap) {
					if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
						diatricString += ch;
						ch = "";
					} else if (lastCharWasDiatric === true) {
						ch = diatricMap[diatricString] + charMap[ch];
						diatricString = "";
					} else ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? " " + charMap[ch] : charMap[ch];
					lastCharWasSymbol = false;
					lastCharWasDiatric = false;
				} else if (ch in diatricMap) {
					diatricString += ch;
					ch = "";
					if (i === l - 1) ch = diatricMap[diatricString];
					lastCharWasDiatric = true;
				} else if (symbol[ch] && !(uricFlag && uricChars.indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars.indexOf(ch) !== -1)) {
					ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
					ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : "";
					lastCharWasSymbol = true;
				} else {
					if (lastCharWasDiatric === true) {
						ch = diatricMap[diatricString] + ch;
						diatricString = "";
						lastCharWasDiatric = false;
					} else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) ch = " " + ch;
					lastCharWasSymbol = false;
				}
				result += ch.replace(new RegExp("[^\\w\\s" + allowedChars + "_-]", "g"), separator);
			}
			if (titleCase) result = result.replace(/(\w)(\S*)/g, function(_, i, r) {
				var j = i.toUpperCase() + (r !== null ? r : "");
				return Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0 ? j : j.toLowerCase();
			});
			result = result.replace(/\s+/g, separator).replace(new RegExp("\\" + separator + "+", "g"), separator).replace(new RegExp("(^\\" + separator + "+|\\" + separator + "+$)", "g"), "");
			if (truncate && result.length > truncate) {
				lucky = result.charAt(truncate) === separator;
				result = result.slice(0, truncate);
				if (!lucky) result = result.slice(0, result.lastIndexOf(separator));
			}
			if (!maintainCase && !titleCase) result = result.toLowerCase();
			return result;
		};
		/**
		* createSlug curried(opts)(input)
		* @param   {object|string} opts config object or input string
		* @return  {Function} function getSlugWithConfig()
		**/
		var createSlug = function createSlug(opts) {
			/**
			* getSlugWithConfig
			* @param   {string} input string
			* @return  {string} slug string
			*/
			return function getSlugWithConfig(input) {
				return getSlug(input, opts);
			};
		};
		/**
		* escape Chars
		* @param   {string} input string
		*/
		var escapeChars = function escapeChars(input) {
			return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		};
		/**
		* check if the char is an already converted char from custom list
		* @param   {char} ch character to check
		* @param   {object} customReplacements custom translation map
		*/
		var isReplacedCustomChar = function(ch, customReplacements) {
			for (var c in customReplacements) if (customReplacements[c] === ch) return true;
		};
		if (typeof module !== "undefined" && module.exports) {
			module.exports = getSlug;
			module.exports.createSlug = createSlug;
		} else if (typeof define !== "undefined" && define.amd) define([], function() {
			return getSlug;
		});
		else try {
			if (root.getSlug || root.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			else {
				root.getSlug = getSlug;
				root.createSlug = createSlug;
			}
		} catch (e) {}
	})(exports);
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_speakingurl$1();
})))();
target.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function toggleHighPerfMode(state) {
	devtoolsState.highPerfModeEnabled = state ?? !devtoolsState.highPerfModeEnabled;
	if (!state && activeAppRecord.value) registerDevToolsPlugin(activeAppRecord.value.app);
}
function updateDevToolsClientDetected(params) {
	devtoolsState.devtoolsClientDetected = {
		...devtoolsState.devtoolsClientDetected,
		...params
	};
	toggleHighPerfMode(!Object.values(devtoolsState.devtoolsClientDetected).some(Boolean));
}
target.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= updateDevToolsClientDetected;
var DoubleIndexedKV = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map();
		this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(key, value) {
		this.keyToValue.set(key, value);
		this.valueToKey.set(value, key);
	}
	getByKey(key) {
		return this.keyToValue.get(key);
	}
	getByValue(value) {
		return this.valueToKey.get(value);
	}
	clear() {
		this.keyToValue.clear();
		this.valueToKey.clear();
	}
};
var Registry = class {
	constructor(generateIdentifier) {
		this.generateIdentifier = generateIdentifier;
		this.kv = new DoubleIndexedKV();
	}
	register(value, identifier) {
		if (this.kv.getByValue(value)) return;
		if (!identifier) identifier = this.generateIdentifier(value);
		this.kv.set(identifier, value);
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(value) {
		return this.kv.getByValue(value);
	}
	getValue(identifier) {
		return this.kv.getByKey(identifier);
	}
};
var ClassRegistry = class extends Registry {
	constructor() {
		super((c) => c.name);
		this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(value, options) {
		if (typeof options === "object") {
			if (options.allowProps) this.classToAllowedProps.set(value, options.allowProps);
			super.register(value, options.identifier);
		} else super.register(value, options);
	}
	getAllowedProps(value) {
		return this.classToAllowedProps.get(value);
	}
};
function valuesOfObj(record) {
	if ("values" in Object) return Object.values(record);
	const values = [];
	for (const key in record) if (record.hasOwnProperty(key)) values.push(record[key]);
	return values;
}
function find(record, predicate) {
	const values = valuesOfObj(record);
	if ("find" in values) return values.find(predicate);
	const valuesNotNever = values;
	for (let i = 0; i < valuesNotNever.length; i++) {
		const value = valuesNotNever[i];
		if (predicate(value)) return value;
	}
}
function forEach(record, run) {
	Object.entries(record).forEach(([key, value]) => run(value, key));
}
function includes(arr, value) {
	return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
	for (let i = 0; i < record.length; i++) {
		const value = record[i];
		if (predicate(value)) return value;
	}
}
var CustomTransformerRegistry = class {
	constructor() {
		this.transfomers = {};
	}
	register(transformer) {
		this.transfomers[transformer.name] = transformer;
	}
	findApplicable(v) {
		return find(this.transfomers, (transformer) => transformer.isApplicable(v));
	}
	findByName(name) {
		return this.transfomers[name];
	}
};
var getType$1 = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
var isUndefined$1 = (payload) => typeof payload === "undefined";
var isNull$1 = (payload) => payload === null;
var isPlainObject$2 = (payload) => {
	if (typeof payload !== "object" || payload === null) return false;
	if (payload === Object.prototype) return false;
	if (Object.getPrototypeOf(payload) === null) return true;
	return Object.getPrototypeOf(payload) === Object.prototype;
};
var isEmptyObject = (payload) => isPlainObject$2(payload) && Object.keys(payload).length === 0;
var isArray$2 = (payload) => Array.isArray(payload);
var isString = (payload) => typeof payload === "string";
var isNumber = (payload) => typeof payload === "number" && !isNaN(payload);
var isBoolean = (payload) => typeof payload === "boolean";
var isRegExp = (payload) => payload instanceof RegExp;
var isMap = (payload) => payload instanceof Map;
var isSet = (payload) => payload instanceof Set;
var isSymbol = (payload) => getType$1(payload) === "Symbol";
var isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
var isError = (payload) => payload instanceof Error;
var isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
var isPrimitive = (payload) => isBoolean(payload) || isNull$1(payload) || isUndefined$1(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
var isBigint = (payload) => typeof payload === "bigint";
var isInfinite = (payload) => payload === Infinity || payload === -Infinity;
var isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
var isURL = (payload) => payload instanceof URL;
var escapeKey = (key) => key.replace(/\./g, "\\.");
var stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
var parsePath = (string) => {
	const result = [];
	let segment = "";
	for (let i = 0; i < string.length; i++) {
		let char = string.charAt(i);
		if (char === "\\" && string.charAt(i + 1) === ".") {
			segment += ".";
			i++;
			continue;
		}
		if (char === ".") {
			result.push(segment);
			segment = "";
			continue;
		}
		segment += char;
	}
	const lastSegment = segment;
	result.push(lastSegment);
	return result;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
	return {
		isApplicable,
		annotation,
		transform,
		untransform
	};
}
var simpleRules = [
	simpleTransformation(isUndefined$1, "undefined", () => null, () => void 0),
	simpleTransformation(isBigint, "bigint", (v) => v.toString(), (v) => {
		if (typeof BigInt !== "undefined") return BigInt(v);
		console.error("Please add a BigInt polyfill.");
		return v;
	}),
	simpleTransformation(isDate, "Date", (v) => v.toISOString(), (v) => new Date(v)),
	simpleTransformation(isError, "Error", (v, superJson) => {
		const baseError = {
			name: v.name,
			message: v.message
		};
		superJson.allowedErrorProps.forEach((prop) => {
			baseError[prop] = v[prop];
		});
		return baseError;
	}, (v, superJson) => {
		const e = new Error(v.message);
		e.name = v.name;
		e.stack = v.stack;
		superJson.allowedErrorProps.forEach((prop) => {
			e[prop] = v[prop];
		});
		return e;
	}),
	simpleTransformation(isRegExp, "regexp", (v) => "" + v, (regex) => {
		const body = regex.slice(1, regex.lastIndexOf("/"));
		const flags = regex.slice(regex.lastIndexOf("/") + 1);
		return new RegExp(body, flags);
	}),
	simpleTransformation(isSet, "set", (v) => [...v.values()], (v) => new Set(v)),
	simpleTransformation(isMap, "map", (v) => [...v.entries()], (v) => new Map(v)),
	simpleTransformation((v) => isNaNValue(v) || isInfinite(v), "number", (v) => {
		if (isNaNValue(v)) return "NaN";
		if (v > 0) return "Infinity";
		else return "-Infinity";
	}, Number),
	simpleTransformation((v) => v === 0 && 1 / v === -Infinity, "number", () => {
		return "-0";
	}, Number),
	simpleTransformation(isURL, "URL", (v) => v.toString(), (v) => new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
	return {
		isApplicable,
		annotation,
		transform,
		untransform
	};
}
var symbolRule = compositeTransformation((s, superJson) => {
	if (isSymbol(s)) return !!superJson.symbolRegistry.getIdentifier(s);
	return false;
}, (s, superJson) => {
	return ["symbol", superJson.symbolRegistry.getIdentifier(s)];
}, (v) => v.description, (_, a, superJson) => {
	const value = superJson.symbolRegistry.getValue(a[1]);
	if (!value) throw new Error("Trying to deserialize unknown symbol");
	return value;
});
var constructorToName = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((obj, ctor) => {
	obj[ctor.name] = ctor;
	return obj;
}, {});
var typedArrayRule = compositeTransformation(isTypedArray, (v) => ["typed-array", v.constructor.name], (v) => [...v], (v, a) => {
	const ctor = constructorToName[a[1]];
	if (!ctor) throw new Error("Trying to deserialize unknown typed array");
	return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
	if (potentialClass?.constructor) return !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
	return false;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
	return ["class", superJson.classRegistry.getIdentifier(clazz.constructor)];
}, (clazz, superJson) => {
	const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
	if (!allowedProps) return { ...clazz };
	const result = {};
	allowedProps.forEach((prop) => {
		result[prop] = clazz[prop];
	});
	return result;
}, (v, a, superJson) => {
	const clazz = superJson.classRegistry.getValue(a[1]);
	if (!clazz) throw new Error(`Trying to deserialize unknown class '${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(clazz.prototype), v);
});
var customRule = compositeTransformation((value, superJson) => {
	return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson) => {
	return ["custom", superJson.customTransformerRegistry.findApplicable(value).name];
}, (value, superJson) => {
	return superJson.customTransformerRegistry.findApplicable(value).serialize(value);
}, (v, a, superJson) => {
	const transformer = superJson.customTransformerRegistry.findByName(a[1]);
	if (!transformer) throw new Error("Trying to deserialize unknown custom value");
	return transformer.deserialize(v);
});
var compositeRules = [
	classRule,
	symbolRule,
	customRule,
	typedArrayRule
];
var transformValue = (value, superJson) => {
	const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
	if (applicableCompositeRule) return {
		value: applicableCompositeRule.transform(value, superJson),
		type: applicableCompositeRule.annotation(value, superJson)
	};
	const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
	if (applicableSimpleRule) return {
		value: applicableSimpleRule.transform(value, superJson),
		type: applicableSimpleRule.annotation
	};
};
var simpleRulesByAnnotation = {};
simpleRules.forEach((rule) => {
	simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = (json, type, superJson) => {
	if (isArray$2(type)) switch (type[0]) {
		case "symbol": return symbolRule.untransform(json, type, superJson);
		case "class": return classRule.untransform(json, type, superJson);
		case "custom": return customRule.untransform(json, type, superJson);
		case "typed-array": return typedArrayRule.untransform(json, type, superJson);
		default: throw new Error("Unknown transformation: " + type);
	}
	else {
		const transformation = simpleRulesByAnnotation[type];
		if (!transformation) throw new Error("Unknown transformation: " + type);
		return transformation.untransform(json, superJson);
	}
};
var getNthKey = (value, n) => {
	if (n > value.size) throw new Error("index out of bounds");
	const keys = value.keys();
	while (n > 0) {
		keys.next();
		n--;
	}
	return keys.next().value;
};
function validatePath(path) {
	if (includes(path, "__proto__")) throw new Error("__proto__ is not allowed as a property");
	if (includes(path, "prototype")) throw new Error("prototype is not allowed as a property");
	if (includes(path, "constructor")) throw new Error("constructor is not allowed as a property");
}
var getDeep = (object, path) => {
	validatePath(path);
	for (let i = 0; i < path.length; i++) {
		const key = path[i];
		if (isSet(object)) object = getNthKey(object, +key);
		else if (isMap(object)) {
			const row = +key;
			const type = +path[++i] === 0 ? "key" : "value";
			const keyOfRow = getNthKey(object, row);
			switch (type) {
				case "key":
					object = keyOfRow;
					break;
				case "value":
					object = object.get(keyOfRow);
					break;
			}
		} else object = object[key];
	}
	return object;
};
var setDeep = (object, path, mapper) => {
	validatePath(path);
	if (path.length === 0) return mapper(object);
	let parent = object;
	for (let i = 0; i < path.length - 1; i++) {
		const key = path[i];
		if (isArray$2(parent)) {
			const index = +key;
			parent = parent[index];
		} else if (isPlainObject$2(parent)) parent = parent[key];
		else if (isSet(parent)) {
			const row = +key;
			parent = getNthKey(parent, row);
		} else if (isMap(parent)) {
			if (i === path.length - 2) break;
			const row = +key;
			const type = +path[++i] === 0 ? "key" : "value";
			const keyOfRow = getNthKey(parent, row);
			switch (type) {
				case "key":
					parent = keyOfRow;
					break;
				case "value":
					parent = parent.get(keyOfRow);
					break;
			}
		}
	}
	const lastKey = path[path.length - 1];
	if (isArray$2(parent)) parent[+lastKey] = mapper(parent[+lastKey]);
	else if (isPlainObject$2(parent)) parent[lastKey] = mapper(parent[lastKey]);
	if (isSet(parent)) {
		const oldValue = getNthKey(parent, +lastKey);
		const newValue = mapper(oldValue);
		if (oldValue !== newValue) {
			parent.delete(oldValue);
			parent.add(newValue);
		}
	}
	if (isMap(parent)) {
		const row = +path[path.length - 2];
		const keyToRow = getNthKey(parent, row);
		switch (+lastKey === 0 ? "key" : "value") {
			case "key": {
				const newKey = mapper(keyToRow);
				parent.set(newKey, parent.get(keyToRow));
				if (newKey !== keyToRow) parent.delete(keyToRow);
				break;
			}
			case "value":
				parent.set(keyToRow, mapper(parent.get(keyToRow)));
				break;
		}
	}
	return object;
};
function traverse(tree, walker, origin = []) {
	if (!tree) return;
	if (!isArray$2(tree)) {
		forEach(tree, (subtree, key) => traverse(subtree, walker, [...origin, ...parsePath(key)]));
		return;
	}
	const [nodeValue, children] = tree;
	if (children) forEach(children, (child, key) => {
		traverse(child, walker, [...origin, ...parsePath(key)]);
	});
	walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
	traverse(annotations, (type, path) => {
		plain = setDeep(plain, path, (v) => untransformValue(v, type, superJson));
	});
	return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
	function apply(identicalPaths, path) {
		const object = getDeep(plain, parsePath(path));
		identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
			plain = setDeep(plain, identicalObjectPath, () => object);
		});
	}
	if (isArray$2(annotations)) {
		const [root, other] = annotations;
		root.forEach((identicalPath) => {
			plain = setDeep(plain, parsePath(identicalPath), () => plain);
		});
		if (other) forEach(other, apply);
	} else forEach(annotations, apply);
	return plain;
}
var isDeep = (object, superJson) => isPlainObject$2(object) || isArray$2(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
	const existingSet = identities.get(object);
	if (existingSet) existingSet.push(path);
	else identities.set(object, [path]);
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
	const result = {};
	let rootEqualityPaths = void 0;
	identitites.forEach((paths) => {
		if (paths.length <= 1) return;
		if (!dedupe) paths = paths.map((path) => path.map(String)).sort((a, b) => a.length - b.length);
		const [representativePath, ...identicalPaths] = paths;
		if (representativePath.length === 0) rootEqualityPaths = identicalPaths.map(stringifyPath);
		else result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
	});
	if (rootEqualityPaths) if (isEmptyObject(result)) return [rootEqualityPaths];
	else return [rootEqualityPaths, result];
	else return isEmptyObject(result) ? void 0 : result;
}
var walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
	const primitive = isPrimitive(object);
	if (!primitive) {
		addIdentity(object, path, identities);
		const seen = seenObjects.get(object);
		if (seen) return dedupe ? { transformedValue: null } : seen;
	}
	if (!isDeep(object, superJson)) {
		const transformed = transformValue(object, superJson);
		const result = transformed ? {
			transformedValue: transformed.value,
			annotations: [transformed.type]
		} : { transformedValue: object };
		if (!primitive) seenObjects.set(object, result);
		return result;
	}
	if (includes(objectsInThisPath, object)) return { transformedValue: null };
	const transformationResult = transformValue(object, superJson);
	const transformed = transformationResult?.value ?? object;
	const transformedValue = isArray$2(transformed) ? [] : {};
	const innerAnnotations = {};
	forEach(transformed, (value, index) => {
		if (index === "__proto__" || index === "constructor" || index === "prototype") throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
		const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
		transformedValue[index] = recursiveResult.transformedValue;
		if (isArray$2(recursiveResult.annotations)) innerAnnotations[index] = recursiveResult.annotations;
		else if (isPlainObject$2(recursiveResult.annotations)) forEach(recursiveResult.annotations, (tree, key) => {
			innerAnnotations[escapeKey(index) + "." + key] = tree;
		});
	});
	const result = isEmptyObject(innerAnnotations) ? {
		transformedValue,
		annotations: !!transformationResult ? [transformationResult.type] : void 0
	} : {
		transformedValue,
		annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
	};
	if (!primitive) seenObjects.set(object, result);
	return result;
};
function getType(payload) {
	return Object.prototype.toString.call(payload).slice(8, -1);
}
function isArray$1(payload) {
	return getType(payload) === "Array";
}
function isPlainObject$1(payload) {
	if (getType(payload) !== "Object") return false;
	const prototype = Object.getPrototypeOf(payload);
	return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isNull(payload) {
	return getType(payload) === "Null";
}
function isOneOf(a, b, c, d, e) {
	return (value) => a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}
function isUndefined(payload) {
	return getType(payload) === "Undefined";
}
isOneOf(isNull, isUndefined);
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
	const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
	if (propType === "enumerable") carry[key] = newVal;
	if (includeNonenumerable && propType === "nonenumerable") Object.defineProperty(carry, key, {
		value: newVal,
		enumerable: false,
		writable: true,
		configurable: true
	});
}
function copy(target, options = {}) {
	if (isArray$1(target)) return target.map((item) => copy(item, options));
	if (!isPlainObject$1(target)) return target;
	const props = Object.getOwnPropertyNames(target);
	const symbols = Object.getOwnPropertySymbols(target);
	return [...props, ...symbols].reduce((carry, key) => {
		if (isArray$1(options.props) && !options.props.includes(key)) return carry;
		const val = target[key];
		assignProp(carry, key, copy(val, options), target, options.nonenumerable);
		return carry;
	}, {});
}
var SuperJSON = class {
	/**
	* @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
	*/
	constructor({ dedupe = false } = {}) {
		this.classRegistry = new ClassRegistry();
		this.symbolRegistry = new Registry((s) => s.description ?? "");
		this.customTransformerRegistry = new CustomTransformerRegistry();
		this.allowedErrorProps = [];
		this.dedupe = dedupe;
	}
	serialize(object) {
		const identities = /* @__PURE__ */ new Map();
		const output = walker(object, identities, this, this.dedupe);
		const res = { json: output.transformedValue };
		if (output.annotations) res.meta = {
			...res.meta,
			values: output.annotations
		};
		const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
		if (equalityAnnotations) res.meta = {
			...res.meta,
			referentialEqualities: equalityAnnotations
		};
		return res;
	}
	deserialize(payload) {
		const { json, meta } = payload;
		let result = copy(json);
		if (meta?.values) result = applyValueAnnotations(result, meta.values, this);
		if (meta?.referentialEqualities) result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
		return result;
	}
	stringify(object) {
		return JSON.stringify(this.serialize(object));
	}
	parse(string) {
		return this.deserialize(JSON.parse(string));
	}
	registerClass(v, options) {
		this.classRegistry.register(v, options);
	}
	registerSymbol(v, identifier) {
		this.symbolRegistry.register(v, identifier);
	}
	registerCustom(transformer, name) {
		this.customTransformerRegistry.register({
			name,
			...transformer
		});
	}
	allowErrorProps(...props) {
		this.allowedErrorProps.push(...props);
	}
};
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
SuperJSON.serialize;
SuperJSON.deserialize;
SuperJSON.stringify;
SuperJSON.parse;
SuperJSON.registerClass;
SuperJSON.registerCustom;
SuperJSON.registerSymbol;
SuperJSON.allowErrorProps;
target.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [];
target.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null;
target.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null;
target.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null;
target.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null;
target.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
//#endregion
//#region docs/.vuepress/.temp/internal/themeData.js
var import_config$2 = /* @__PURE__ */ __toESM$2(require_config());
var import_client = /* @__PURE__ */ __toESM$2(require_client());
var themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"/pics/logo.png\",\"docsDir\":\"docs\",\"darkmode\":\"toggle\",\"pageInfo\":[\"Author\",\"Date\",\"ReadingTime\",\"Category\",\"Tag\"],\"blog\":false,\"footer\":\"LinuxArsenal | 嵌入式Linux技术分享\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routerLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"home\"},{\"text\":\"操作系统\",\"link\":\"/os/\",\"icon\":\"desktop\"},{\"text\":\"嵌入式Linux\",\"link\":\"/embedded/\",\"icon\":\"microchip\"},{\"text\":\"关于\",\"link\":\"/about/\",\"icon\":\"info\"}],\"sidebar\":{\"/\":[{\"text\":\"快速导航\",\"icon\":\"home\",\"children\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"关于\",\"link\":\"/about/\"}]}],\"/os/\":[{\"text\":\"操作系统\",\"icon\":\"computer\",\"children\":[{\"text\":\"概述\",\"link\":\"/os/\"}]},{\"text\":\"进程管理\",\"icon\":\"process\",\"prefix\":\"/os/process/\",\"collapsible\":true,\"children\":[{\"text\":\"进程与线程\",\"link\":\"intro\"},{\"text\":\"进程调度\",\"link\":\"schedule\"},{\"text\":\"进程通信\",\"link\":\"ipc\"}]},{\"text\":\"内存管理\",\"icon\":\"memory\",\"prefix\":\"/os/memory/\",\"collapsible\":true,\"children\":[{\"text\":\"虚拟内存\",\"link\":\"virtual\"},{\"text\":\"页面置换算法\",\"link\":\"page-replace\"}]},{\"text\":\"文件系统\",\"icon\":\"folder\",\"prefix\":\"/os/filesystem/\",\"collapsible\":true,\"children\":[{\"text\":\"文件系统基础\",\"link\":\"intro\"}]},{\"text\":\"网络系统\",\"icon\":\"network\",\"prefix\":\"/os/network/\",\"collapsible\":true,\"children\":[{\"text\":\"IO 多路复用\",\"link\":\"io-multiplex\"}]}],\"/embedded/\":[{\"text\":\"嵌入式Linux\",\"icon\":\"code\",\"children\":[{\"text\":\"概述\",\"link\":\"/embedded/\"}]},{\"text\":\"Linux 驱动开发\",\"icon\":\"code\",\"prefix\":\"/embedded/driver/\",\"collapsible\":true,\"children\":[{\"text\":\"字符设备驱动\",\"link\":\"char-device\"}]}],\"/about/\":[{\"text\":\"关于\",\"icon\":\"info\",\"children\":[{\"text\":\"关于作者\",\"link\":\"/about/\"}]}]}}}}");
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-theme-data@2.0.0-rc.124_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2._61a1492adfcfd669c1f0699bc64d709f/node_modules/@vuepress/plugin-theme-data/lib/useThemeLocaleData-Px-kSq-k.js
var o$7 = `THEME_DATA`, s$7 = `Theme Data`, c$6 = (e, t, a) => {
	setupDevToolsPlugin({
		app: e,
		id: `org.vuejs.vuepress.plugin-theme-data`,
		label: `VuePress Theme Data`,
		packageName: `@vuepress/plugin-theme-data`,
		homepage: `https://vuepress.vuejs.org`,
		logo: `https://vuepress.vuejs.org/images/hero.png`,
		componentStateTypes: [constants_exports.COMPONENT_STATE_TYPE]
	}, (e) => {
		e.on.inspectComponent((e) => {
			e.instanceData.state.push({
				type: `VuePress`,
				key: `themeData`,
				editable: !1,
				value: t.value
			}, {
				type: `VuePress`,
				key: `themeLocaleData`,
				editable: !1,
				value: a.value
			});
		}), e.addInspector({
			id: constants_exports.INSPECTOR_ID,
			label: constants_exports.INSPECTOR_LABEL,
			icon: `article`
		}), e.on.getInspectorTree((e) => {
			e.inspectorId === constants_exports.INSPECTOR_ID && e.rootNodes.push({
				id: o$7,
				label: s$7,
				children: [{
					id: `themeData`,
					label: `themeData`
				}, {
					id: `themeLocaleData`,
					label: `themeLocaleData`
				}]
			});
		}), e.on.getInspectorState((e) => {
			e.inspectorId === constants_exports.INSPECTOR_ID && (e.nodeId === o$7 && e.state[s$7].push({
				key: `themeData`,
				value: t.value
			}, {
				key: `themeLocaleData`,
				value: a.value
			}), [`themeData`, `themeLocaleData`].includes(e.nodeId) && (e.state = { [constants_exports.INSPECTOR_STATE_SECTION_NAME]: [{
				key: e.nodeId,
				value: e.nodeId === `themeData` ? t.value : a.value
			}] }));
		}), watch([t, a], () => {
			e.notifyComponentUpdate(), e.sendInspectorState(constants_exports.INSPECTOR_ID);
		});
	});
}, l$5 = /* @__PURE__ */ ref(themeData), u$4 = () => l$5;
var d$2 = Symbol(``), f$4 = () => {
	let t = inject(d$2);
	if (!t) throw Error(`useThemeLocaleData() is called without provider.`);
	return t;
}, p$3 = (e, t) => {
	let { locales: n, ...r } = e;
	return {
		...r,
		...n?.[t]
	};
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-theme-data@2.0.0-rc.124_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2._61a1492adfcfd669c1f0699bc64d709f/node_modules/@vuepress/plugin-theme-data/lib/client/config.js
var config_exports$10 = /* @__PURE__ */ __exportAll({ default: () => s$6 });
var s$6 = defineClientConfig({ enhance({ app: o }) {
	let s = u$4(), c = o._context.provides[clientDataSymbol], l = computed(() => p$3(s.value, c.routeLocale.value));
	o.provide(d$2, l), Object.defineProperties(o.config.globalProperties, {
		$theme: { get() {
			return s.value;
		} },
		$themeLocale: { get() {
			return l.value;
		} }
	}), c$6(o, s, l);
} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-back-to-top@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+nod_9daf98253ea1a8f016b1af2f655d8dff/node_modules/@vuepress/plugin-back-to-top/lib/BackToTop-vE_V-VXq.js
var d$1 = /* @__PURE__ */ defineComponent({
	name: `BackToTop`,
	setup() {
		let s = useFrontmatter(), d = Ae$2({ "/": { "backToTop": "返回顶部" } }), f = /* @__PURE__ */ shallowRef(), { height: p } = useElementSize(f), { height: m } = useWindowSize(), { y: h } = useWindowScroll(), g = computed(() => (s.value.backToTop ?? !0) && h.value > 100), _ = computed(() => h.value / (p.value - m.value) * 100);
		return onMounted(() => {
			f.value = document.body;
		}), () => h$5(Transition, { name: `fade-in` }, () => g.value ? h$5(`button`, {
			type: `button`,
			class: `vp-back-to-top-button`,
			"aria-label": d.value.backToTop,
			onClick: () => {
				window.scrollTo({
					top: 0,
					behavior: `smooth`
				});
			}
		}, [h$5(`span`, {
			class: `vp-scroll-progress`,
			role: `progressbar`,
			"aria-labelledby": `loadinglabel`,
			"aria-valuenow": _.value
		}, h$5(`svg`, h$5(`circle`, {
			cx: `26`,
			cy: `26`,
			r: `24`,
			fill: `none`,
			stroke: `currentColor`,
			"stroke-width": `4`,
			"stroke-dasharray": `${Math.PI * _.value * .48} ${Math.PI * (100 - _.value) * .48}`
		}))), h$5(`div`, { class: `back-to-top-icon` })]) : null);
	}
});
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-back-to-top@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+nod_9daf98253ea1a8f016b1af2f655d8dff/node_modules/@vuepress/plugin-back-to-top/lib/client/config.js
var config_exports$9 = /* @__PURE__ */ __exportAll({ default: () => n$4 });
var n$4 = defineClientConfig({ rootComponents: [d$1] });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-copy-code@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@_316c0a60f2320c751df12959b598207f/node_modules/@vuepress/plugin-copy-code/lib/useCopyCode-B5yKmolr.js
var l$4 = /language-(shellscript|shell|bash|sh|zsh)/, u$3 = ({ selector: u, ignoreSelector: d, inlineSelector: f, duration: p = 2e3, locales: m, showInMobile: h, transform: g }) => {
	let _ = useMediaQuery(`(max-width: 419px)`), v = computed(() => !_.value || h), y = Ae$2(m), b = (e) => {
		if (e.hasAttribute(`copy-code`)) return;
		let t = document.createElement(`button`);
		t.type = `button`, t.classList.add(`vp-copy-code-button`), t.setAttribute(`aria-label`, y.value.copy), t.dataset.copied = y.value.copied, e.parentElement?.insertBefore(t, e), e.setAttribute(`copy-code`, ``);
	}, x = () => {
		document.body.classList.toggle(`no-copy-code`, !v.value), v.value && document.querySelectorAll(u).forEach((e) => {
			b(e);
		});
	};
	watchImmediate(v, () => nextTick(x), { flush: `post` }), onContentUpdated((e) => {
		e !== `beforeUnmount` && x();
	});
	let { copy: S } = useClipboard({ legacy: !0 }), C = /* @__PURE__ */ new WeakMap(), w = null, T = async (e, t, n) => {
		let r = t.cloneNode(!0);
		d && r.querySelectorAll(d).forEach((e) => {
			e.remove();
		}), g && g(r);
		let i = r.textContent || ``;
		if (l$4.test(e.className) && (i = i.replaceAll(/^ *(\$|>) /gm, ``)), await S(i), p <= 0) return;
		n.classList.add(`copied`), clearTimeout(C.get(n));
		let a = setTimeout(() => {
			n.classList.remove(`copied`), n.blur(), C.delete(n);
		}, p);
		C.set(n, a);
	};
	useEventListener(`click`, (e) => {
		let t = e.target;
		if (v.value && t.matches(`div[class*="language-"] > button.vp-copy-code-button`)) {
			let e = t.parentElement, n = t.nextElementSibling;
			if (!e || !n) return;
			T(e, n, t);
		}
	}, { passive: !0 }), f && useEventListener(`dblclick`, (e) => {
		let n = e.target;
		if (v.value && n.matches(f)) {
			let e = window.getSelection();
			e && (n.contains(e.anchorNode) || n.contains(e.focusNode)) && e.removeAllRanges(), S(n.textContent || ``), (w ??= new Te$2()).pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${y.value.copied} </span>`, p);
		}
	}, { passive: !0 });
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-copy-code@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@_316c0a60f2320c751df12959b598207f/node_modules/@vuepress/plugin-copy-code/lib/client/config.js
var config_exports$8 = /* @__PURE__ */ __exportAll({ default: () => n$3 });
var n$3 = defineClientConfig({ setup: () => {
	u$3({
		selector: "[vp-content] div[class*=\"language-\"] pre",
		ignoreSelector: "",
		inlineSelector: "",
		locales: { "/": {
			"copy": "复制代码",
			"copied": "已复制"
		} },
		duration: 2e3,
		showInMobile: false
	});
} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5._7de6d5fb13ab4c6190590fa984adec00/node_modules/@vuepress/plugin-icon/lib/client/index.js
var s$5 = (e) => e.includes(`fa-`) || /^fa.$/.test(e) ? e : `fa-${e}`, c$5 = /* @__PURE__ */ defineComponent({
	name: `VPIcon`,
	props: {
		type: {
			type: String,
			default: `unknown`
		},
		prefix: String,
		icon: String,
		color: String,
		size: [String, Number],
		verticalAlign: String,
		sizing: {
			type: String,
			default: `height`
		}
	},
	setup(i) {
		let c = computed(() => i.icon ? isLinkHttp(i.icon) ? i.icon : D$1(i.icon) ? withBase(i.icon) : null : null), l = computed(() => {
			let e = {}, { type: t, verticalAlign: r, size: a, sizing: o } = i, s = { sizing: o };
			return i.color && (e.color = i.color), a && (e[`--icon-size`] = Number.isNaN(Number(a)) ? a : `${a}px`), r && (e[`--icon-vertical-align`] = r), t === `iconify` && (o !== `height` && (s.width = i.size || `1em`), o !== `width` && (s.height = i.size || `1em`)), S$2(e).length > 0 && (s.style = e), s;
		});
		return () => {
			let { type: e, icon: t, prefix: n = ``, sizing: r } = i;
			if (!t) return null;
			if (c.value) return h$5(`img`, {
				class: `vp-icon`,
				src: c.value,
				alt: ``,
				"aria-hidden": ``,
				"no-view": ``,
				...l.value
			});
			if (e === `iconify`) return h$5(`iconify-icon`, {
				key: t,
				class: `vp-icon`,
				icon: t.includes(`:`) ? t : `${n}${t}`,
				...l.value
			});
			if (e === `fontawesome`) {
				let [e, n] = t.includes(`:`) ? t.split(`:`, 2) : [`fas`, t];
				return h$5(`i`, {
					key: t,
					class: [
						`vp-icon`,
						e.length === 1 ? `fa${e}` : s$5(e),
						...n.split(` `).map((e) => s$5(e)),
						r === `height` ? `` : `fa-fw`
					],
					...l.value
				});
			}
			return h$5(`i`, {
				key: t,
				class: [`vp-icon`, t.includes(` `) ? t : `${n}${t}`],
				...l.value
			});
		};
	}
});
//#endregion
//#region docs/.vuepress/.temp/icon/config.js
var config_exports$7 = /* @__PURE__ */ __exportAll({ default: () => config_default$2 });
var config_default$2 = {
	enhance: ({ app }) => {
		if (!we("VPIcon")) app.component("VPIcon", (props) => h$5(c$5, {
			type: "fontawesome",
			prefix: "",
			...props
		}));
	},
	setup: () => {
		useScriptTag(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`, () => {}, { attrs: { "data-auto-replace-svg": "nest" } });
		useScriptTag(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/regular.min.js`, () => {}, { attrs: { "data-auto-replace-svg": "nest" } });
		useScriptTag(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`, () => {}, { attrs: { "data-auto-replace-svg": "nest" } });
	}
}, m$2 = /* @__PURE__ */ ref({}), h$3 = Symbol(``), _$1 = () => inject(h$3), v$2 = (e) => {
	e.provide(h$3, m$2);
}, y$1 = async (e) => {
	try {
		await e.decode();
	} catch {
		throw Error(`Image decoding failed: ${e.src}`);
	}
	return {
		type: `image`,
		element: e,
		src: e.src,
		width: e.naturalWidth,
		height: e.naturalHeight,
		alt: e.alt,
		msrc: e.src
	};
}, x$1 = `<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>`, S$1 = (e, { download: t = !0, fullscreen: n = !0 } = {}) => {
	e.on(`uiRegister`, () => {
		if (e.ui.registerElement({
			name: `bulletsIndicator`,
			className: `photo-swipe-bullets-indicator`,
			appendTo: `wrapper`,
			onInit: (t) => {
				let n = [], r = -1;
				for (let r = 0; r < e.getNumItems(); r++) {
					let r = document.createElement(`div`);
					r.className = `photo-swipe-bullet`, r.addEventListener(`click`, (t) => {
						e.goTo(n.indexOf(t.target));
					}), n.push(r), t.append(r);
				}
				e.on(`change`, () => {
					r >= 0 && n[r].classList.remove(`active`), n[e.currIndex].classList.add(`active`), r = e.currIndex;
				});
			}
		}), n) {
			let { isSupported: t, toggle: n } = useFullscreen();
			t.value && e.ui.registerElement({
				name: `fullscreen`,
				order: 7,
				isButton: !0,
				html: `<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>`,
				onClick: () => {
					n();
				}
			});
		}
		t && e.ui.registerElement({
			name: `download`,
			order: 8,
			isButton: !0,
			tagName: `a`,
			html: {
				isCustomSVG: !0,
				inner: `<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>`,
				outlineID: `pswp__icn-download`
			},
			onInit: (t) => {
				t.setAttribute(`download`, ``), t.setAttribute(`target`, `_blank`), t.setAttribute(`rel`, `noopener`), e.on(`change`, () => {
					t.setAttribute(`href`, e.currSlide.data.src);
				});
			}
		});
	});
}, C$2 = ({ selector: n, locales: o, download: s = !0, fullscreen: l = !0, scrollToClose: u = !0 }) => {
	let p = _$1(), m = Ae$2(o), h = useFrontmatter(), g = computed(() => {
		let { photoSwipe: e } = h.value;
		return e === !1 ? null : isString$1(e) ? e : g$2(n) ? n.join(`, `) : n;
	}), v = computed(() => ({
		...p.value,
		...m.value,
		download: s,
		fullscreen: l,
		scrollToClose: u
	})), b = null, C = 0, w = null;
	useEventListener(`click`, async (e) => {
		let t = e.target;
		if (!g.value || !b || !t.matches(g.value)) return;
		C !== 0 && w.destroy();
		let n = Date.now(), r = await b, i = [...document.querySelectorAll(g.value)], a = i.map((e) => ({
			html: x$1,
			element: e,
			msrc: e.src
		}));
		w = new r({
			preloaderDelay: 0,
			showHideAnimationType: `zoom`,
			...v.value,
			dataSource: a,
			index: i.indexOf(t),
			...u ? {
				closeOnVerticalDrag: !0,
				wheelToZoom: !1
			} : {}
		}), C = n, S$1(w, {
			download: s,
			fullscreen: l
		}), w.init(), w.on(`destroy`, () => {
			w = null, C = 0;
		}), i.map((e, t) => y$1(e).then((e) => {
			C === n && (a.splice(t, 1, e), w?.refreshSlideContent(t));
		}));
	}, { passive: !0 }), useEventListener(`wheel`, () => {
		v.value.scrollToClose && w?.close();
	}), onMounted(() => {
		(`requestIdleCallback` in window ? window.requestIdleCallback : setTimeout)(() => {
			b = __vitePreload(async () => {
				const { default: e } = await import("./photoswipe.esm-Bi-pNxMn.js");
				return { default: e };
			}, []).then(({ default: e }) => e);
		});
	}), onUnmounted(() => {
		w?.destroy();
	});
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-photo-swipe@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+nod_ac9acecbecec3985b713a0c7ebc70d82/node_modules/@vuepress/plugin-photo-swipe/lib/client/config.js
var config_exports$6 = /* @__PURE__ */ __exportAll({ default: () => c$4 });
var r$6 = "[vp-content] :not(a) > img:not([no-view])", i$5 = { "/": {
	"closeTitle": "关闭",
	"downloadTitle": "下载图片",
	"fullscreenTitle": "切换全屏",
	"zoomTitle": "缩放",
	"arrowPrevTitle": "上一个 (左箭头)",
	"arrowNextTitle": "下一个 (右箭头)"
} }, a$7 = true, o$6 = true, s$4 = true;
var c$4 = defineClientConfig({
	enhance: ({ app: t }) => {
		v$2(t);
	},
	setup: () => {
		C$2({
			selector: r$6,
			locales: i$5,
			download: a$7,
			fullscreen: o$6,
			scrollToClose: s$4
		});
	}
});
//#endregion
//#region node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.103_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@_cf1f016ff1ca2e2f664982341b0c7b74/node_modules/vuepress-plugin-components/lib/client/components/Badge.js
var a$6 = ({ type: e = "info", text: s = "", vertical: t, color: o, bgColor: l }, { slots: r }) => h$5("span", {
	class: [
		"vp-badge",
		e,
		{ diy: !!(o || l) }
	],
	style: {
		backgroundColor: l ?? !1,
		color: o ?? !1,
		verticalAlign: t ?? !1
	}
}, r.default?.() ?? s);
a$6.displayName = "Badge";
//#endregion
//#region docs/.vuepress/.temp/components/config.js
var config_exports$5 = /* @__PURE__ */ __exportAll({ default: () => config_default$1 });
var config_default$1 = {
	enhance: ({ app }) => {
		if (!we("Badge")) app.component("Badge", a$6);
	},
	setup: () => {},
	rootComponents: []
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-active-header-links@2.0.0-rc.124_vuepress@2.0.0-rc.26_@vuepress+bundle_1a827b785b857a26eff0b01fddab199b/node_modules/@vuepress/plugin-active-header-links/lib/useActiveHeaderLinks-ES-jYG-f.js
var r$5 = async (e, t) => {
	let { path: n, query: r } = e.currentRoute.value, { scrollBehavior: i } = e.options;
	e.options.scrollBehavior = void 0, await e.replace({
		path: n,
		query: r,
		hash: t
	}), e.options.scrollBehavior = i;
}, i$4 = ({ headerLinkSelector: i, headerAnchorSelector: a, delay: o, offset: s = 5 }) => {
	let c = useRouter();
	useEventListener(`scroll`, useDebounceFn(() => {
		let e = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
		if (Math.abs(e) < s) {
			r$5(c, ``);
			return;
		}
		let t = window.innerHeight + e, n = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), o = Math.abs(n - t) < s, l = [...document.querySelectorAll(i)], u = [...document.querySelectorAll(a)].filter((e) => l.some((t) => t.hash === e.hash));
		for (let t = 0; t < u.length; t++) {
			let n = u[t], i = u[t + 1], a = e >= (n.parentElement?.offsetTop ?? 0) - s, l = !i || e < (i.parentElement?.offsetTop ?? 0) - s;
			if (!(a && l)) continue;
			let d = decodeURIComponent(c.currentRoute.value.hash), f = decodeURIComponent(n.hash);
			if (d === f) return;
			if (o) {
				for (let e = t + 1; e < u.length; e++) if (d === decodeURIComponent(u[e].hash)) return;
			}
			r$5(c, f);
			return;
		}
	}, o));
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-active-header-links@2.0.0-rc.124_vuepress@2.0.0-rc.26_@vuepress+bundle_1a827b785b857a26eff0b01fddab199b/node_modules/@vuepress/plugin-active-header-links/lib/client/config.js
var config_exports$4 = /* @__PURE__ */ __exportAll({ default: () => o$5 });
var n$2 = ".vp-sidebar-link, .vp-toc-link", r$4 = ".header-anchor", i$3 = 200, a$5 = 5;
var o$5 = defineClientConfig({ setup() {
	i$4({
		headerLinkSelector: n$2,
		headerAnchorSelector: r$4,
		delay: i$3,
		offset: a$5
	});
} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25_3c76872f699adfe7811bfb12779bb9be/node_modules/@vuepress/plugin-catalog/lib/useCatalogInfoGetter-BSIWoZfb.js
var n$1 = (t) => isString$1(t.title) ? { title: t.title } : null;
var r$3 = Symbol(``), i$2 = (e) => {
	n$1 = e;
}, a$4 = () => inject(r$3), o$4 = (e) => {
	e.provide(r$3, n$1);
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25_3c76872f699adfe7811bfb12779bb9be/node_modules/@vuepress/plugin-catalog/lib/client/config.js
var config_exports$3 = /* @__PURE__ */ __exportAll({ default: () => x });
var b$1 = /* @__PURE__ */ defineComponent({
	name: `Catalog`,
	props: {
		base: String,
		level: {
			type: Number,
			default: 3
		},
		index: Boolean,
		hideHeading: Boolean
	},
	setup(e) {
		let { page: o, routes: m, site: _ } = useData(), b = a$4(), x = Ae$2({ "/": {
			"title": "目录",
			"empty": "暂无目录"
		} }), S = /* @__PURE__ */ shallowRef(b$3(m.value).map(([e, { meta: t }]) => {
			let r = b(t);
			if (!r) return null;
			let i = e.split(`/`).length;
			return Object.assign({
				level: y$2(e, `/`) ? i - 2 : i - 1,
				base: e.replace(/\/[^/]+\/?$/, `/`),
				path: e
			}, r);
		}).filter((e) => isPlainObject(e) && isString$1(e.title))), C = computed(() => {
			let t = e.base ? ensureLeadingSlash(ensureEndingSlash(e.base)) : o.value.path.replace(/\/[^/]+$/, `/`), n = t.split(`/`).length - 2, a = [];
			return S.value.filter(({ level: r, path: i }) => {
				if (!v$3(i, t) || i === t) return !1;
				if (t === `/`) {
					let e = S$2(_.value.locales).filter((e) => e !== `/`);
					if (i === `/404.html` || e.some((e) => v$3(i, e))) return !1;
				}
				return r - n <= e.level;
			}).sort(({ title: e, level: t, order: n }, { title: r, level: i, order: a }) => t - i || (h$4(n) ? h$4(a) ? n > 0 ? a > 0 ? n - a : -1 : a < 0 ? n - a : 1 : n : h$4(a) ? a : e.localeCompare(r))).forEach((e) => {
				let { base: t, level: r } = e;
				switch (r - n) {
					case 1:
						a.push(e);
						break;
					case 2: {
						let n = a.find((e) => e.path === t);
						n && (n.children ??= []).push(e);
						break;
					}
					default: {
						let n = a.find((e) => e.path === t.replace(/\/[^/]+\/$/, `/`));
						if (n) {
							let r = n.children?.find((e) => e.path === t);
							r && (r.children ??= []).push(e);
						}
					}
				}
			}), a;
		});
		return () => {
			let t = C.value.some((e) => e.children);
			return h$5(`div`, { class: [`vp-catalog`, { index: e.index }] }, [e.hideHeading ? null : h$5(`h2`, { class: `vp-catalog-main-title` }, x.value.title), C.value.length > 0 ? h$5(e.index ? `ol` : `ul`, { class: [`vp-catalog-list`, { deep: t }] }, C.value.map(({ children: n = [], title: r, path: i, content: a }) => {
				let o = h$5(RouteLink, {
					class: `vp-catalog-title`,
					to: i
				}, () => a ? h$5(a) : r);
				return h$5(`li`, { class: `vp-catalog-item` }, t ? [h$5(`h3`, {
					id: r,
					class: [`vp-catalog-child-title`, { "has-children": n.length }]
				}, [h$5(`a`, {
					href: `#${r}`,
					class: `vp-catalog-header-anchor`,
					"aria-hidden": !0
				}), o]), n.length > 0 ? h$5(e.index ? `ol` : `ul`, { class: `vp-child-catalogs` }, n.map(({ children: t = [], content: n, path: r, title: i }) => h$5(`li`, { class: `vp-child-catalog` }, [h$5(`div`, { class: [`vp-catalog-sub-title`, { "has-children": t.length }] }, [h$5(`a`, {
					href: `#${i}`,
					class: `vp-catalog-header-anchor`
				}), h$5(RouteLink, {
					class: `vp-catalog-title`,
					to: r
				}, () => n ? h$5(n) : i)]), t.length > 0 ? h$5(e.index ? `ol` : `div`, { class: e.index ? `vp-sub-catalogs` : `vp-sub-catalogs-wrapper` }, t.map(({ content: t, path: n, title: r }) => e.index ? h$5(`li`, { class: `vp-sub-catalog` }, h$5(RouteLink, { to: n }, () => t ? h$5(t) : r)) : h$5(RouteLink, {
					class: `vp-sub-catalog-link`,
					to: n
				}, () => t ? h$5(t) : r))) : null]))) : null] : h$5(`div`, { class: `vp-catalog-child-title` }, o));
			})) : h$5(`p`, { class: `vp-empty-catalog` }, x.value.empty)]);
		};
	}
}), x = defineClientConfig({ enhance: ({ app: t }) => {
	o$4(t), we(`Catalog`, t) || t.component(`Catalog`, b$1);
} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-nprogress@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@_921b0673b70447183c7bae255916751b/node_modules/@vuepress/plugin-nprogress/lib/useNprogress-4E4ZNLoA.js
/**
* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT
*/
var i$1 = (e, t) => {
	e.classList.add(t);
}, a$3 = (e, t) => {
	e.classList.remove(t);
}, o$3 = (e) => {
	e?.remove();
}, s$3 = (e, t, n) => e < t ? t : e > n ? n : e, c$3 = (e) => (-1 + e) * 100, l$3 = (() => {
	let e = [], t = () => {
		let n = e.shift();
		n && n(t);
	};
	return (n) => {
		e.push(n), e.length === 1 && t();
	};
})(), u$2 = (e) => e.replace(/^-ms-/, `ms-`).replaceAll(/-([\da-z])/gi, (e, t) => t.toUpperCase()), d = (() => {
	let e = [
		`Webkit`,
		`O`,
		`Moz`,
		`ms`
	], t = {}, i = (t) => {
		let { style: n } = document.body;
		if (t in n) return t;
		let r = t.charAt(0).toUpperCase() + t.slice(1), i = e.length;
		for (; i--;) {
			let t = `${e[i]}${r}`;
			if (t in n) return t;
		}
		return t;
	}, a = (e) => {
		let n = u$2(e);
		return t[n] ??= i(n);
	}, o = (e, t, n) => {
		e.style[a(t)] = n;
	};
	return (e, t) => {
		for (let [i, a] of b$3(t)) p$4(a) && o(e, i, a);
	};
})(), f$3 = {
	minimum: .08,
	easing: `ease`,
	speed: 200,
	trickle: !0,
	trickleRate: .02,
	trickleSpeed: 800,
	barSelector: `[role="bar"]`,
	parent: `body`,
	template: `<div class="bar" role="bar"></div>`
}, p$2 = {
	percent: null,
	isRendered: () => !!document.querySelector(`#nprogress`),
	set: (e) => {
		let { speed: t, easing: n } = f$3, r = p$2.isStarted(), i = s$3(e, f$3.minimum, 1);
		p$2.percent = i === 1 ? null : i;
		let a = p$2.render(!r), o = a.querySelector(f$3.barSelector);
		return a.offsetWidth, l$3((e) => {
			d(o, {
				transform: `translate3d(${c$3(i)}%,0,0)`,
				transition: `all ${t}ms ${n}`
			}), i === 1 ? (d(a, {
				transition: `none`,
				opacity: `1`
			}), a.offsetWidth, setTimeout(() => {
				d(a, {
					transition: `all ${t}ms linear`,
					opacity: `0`
				}), setTimeout(() => {
					p$2.remove(), e();
				}, t);
			}, t)) : setTimeout(() => {
				e();
			}, t);
		}), p$2;
	},
	isStarted: () => typeof p$2.percent == `number`,
	start: () => {
		p$2.percent || p$2.set(0);
		let e = () => {
			setTimeout(() => {
				p$2.percent && (p$2.trickle(), e());
			}, f$3.trickleSpeed);
		};
		return f$3.trickle && e(), p$2;
	},
	done: (e) => !e && !p$2.percent ? p$2 : p$2.increase(.3 + .5 * Math.random()).set(1),
	increase: (e) => {
		let { percent: t } = p$2;
		return t ? (t = s$3(t + (typeof e == `number` ? e : (1 - t) * s$3(Math.random() * t, .1, .95)), 0, .994), p$2.set(t)) : p$2.start();
	},
	trickle: () => p$2.increase(Math.random() * f$3.trickleRate),
	render: (e) => {
		if (p$2.isRendered()) return document.querySelector(`#nprogress`);
		i$1(document.documentElement, `nprogress-busy`);
		let t = document.createElement(`div`);
		t.id = `nprogress`, t.innerHTML = f$3.template;
		let n = t.querySelector(f$3.barSelector), r = document.querySelector(f$3.parent);
		return d(n, {
			transition: `all 0 linear`,
			transform: `translate3d(${e ? `-100` : c$3(p$2.percent ?? 0)}%,0,0)`
		}), r && (r !== document.body && i$1(r, `nprogress-custom-parent`), r.append(t)), t;
	},
	remove: () => {
		a$3(document.documentElement, `nprogress-busy`), a$3(document.querySelector(f$3.parent), `nprogress-custom-parent`), o$3(document.querySelector(`#nprogress`));
	}
}, m$1 = () => {
	onMounted(() => {
		let t = useRouter(), n = /* @__PURE__ */ new Set();
		n.add(t.currentRoute.value.path), t.beforeEach((e) => {
			n.has(e.path) || p$2.start();
		}), t.afterEach((e) => {
			n.add(e.path), p$2.done();
		});
	});
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-nprogress@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@_921b0673b70447183c7bae255916751b/node_modules/@vuepress/plugin-nprogress/lib/client/config.js
var config_exports$2 = /* @__PURE__ */ __exportAll({ default: () => n });
var n = defineClientConfig({ setup() {
	m$1();
} });
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-redirect@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@2_a484920e69f50dbee59f5c14e57e5718/node_modules/@vuepress/plugin-redirect/lib/useRedirectInfo-BhfN7KrZ.js
var o$2 = `VUEPRESS_REDIRECT_STATUS`, s$2 = useLocalStorage(o$2, {}), c$2 = useSessionStorage(o$2, {}), l$2 = (e) => {
	let n = usePreferredLanguages(), o = useRouteLocale(), s = b$3(e.config);
	return computed(() => {
		if (s.some(([e]) => o.value === e)) {
			for (let e of n.value) for (let [t, n] of s) if (n.includes(e)) return t === o.value ? null : {
				lang: e,
				localePath: t
			};
		}
		return null;
	});
};
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-redirect@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@2_a484920e69f50dbee59f5c14e57e5718/node_modules/@vuepress/plugin-redirect/lib/client/components/RedirectModal.js
var h$2 = /* @__PURE__ */ defineComponent({
	name: `RedirectModal`,
	props: {
		config: {
			type: Object,
			required: !0
		},
		locales: {
			type: Object,
			required: !0
		}
	},
	setup(o) {
		let h = useRouter(), { routeLocale: g, routePath: _ } = useData(), v = l$2(o.config), y = /* @__PURE__ */ ref(), b = useScrollLock(y), x = /* @__PURE__ */ ref(!1), S = computed(() => {
			if (!v.value) return null;
			let { lang: e, localePath: t } = v.value, n = [o.locales[t], o.locales[g.value]];
			return {
				hint: n.map(({ hint: t }) => t.replace(`$1`, e)),
				switch: n.map(({ switch: t }) => t.replace(`$1`, e)).join(` / `),
				cancel: n.map(({ cancel: e }) => e).join(` / `),
				remember: n.map(({ remember: e }) => e).join(` / `)
			};
		}), C = () => {
			c$2.value[g.value] = !0, x.value && (s$2.value[g.value] = !0), b.value = !1;
		};
		return watch(_, () => {
			b.value = !1;
		}), onMounted(async () => {
			y.value = document.body, await nextTick(), v.value && !c$2.value[g.value] && !s$2.value[g.value] && (b.value = !0);
		}), onBeforeUnmount(() => {
			b.value = !1;
		}), () => h$5(TransitionGroup, { name: `fade-in-scale-up` }, () => b.value ? h$5(`div`, {
			key: `mask`,
			class: `redirect-modal-mask`
		}, h$5(`div`, {
			key: `popup`,
			class: `redirect-modal-wrapper`
		}, [
			h$5(`div`, { class: `redirect-modal-content` }, S.value?.hint.map((e) => h$5(`p`, e))),
			h$5(`div`, { class: `redirect-modal-hint` }, [h$5(`input`, {
				id: `remember-redirect`,
				type: `checkbox`,
				value: x.value,
				onChange: () => {
					x.value = !x.value;
				}
			}), h$5(`label`, { for: `remember-redirect` }, S.value?.remember)]),
			h$5(`button`, {
				type: `button`,
				class: `redirect-modal-action primary`,
				onClick: () => {
					C(), h.replace(_.value.replace(g.value, v.value.localePath));
				}
			}, S.value?.switch),
			h$5(`button`, {
				type: `button`,
				class: `redirect-modal-action`,
				onClick: () => {
					C();
				}
			}, S.value?.cancel)
		])) : null);
	}
});
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-redirect@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@2_a484920e69f50dbee59f5c14e57e5718/node_modules/@vuepress/plugin-redirect/lib/client/config.js
var config_exports$1 = /* @__PURE__ */ __exportAll({
	config: () => a$2,
	default: () => o$1
});
var a$2 = {
	"config": {},
	"autoLocale": false,
	"localeFallback": true,
	"defaultBehavior": "defaultLocale"
};
var o$1 = defineClientConfig({
	setup() {},
	rootComponents: [() => h$5(h$2, {
		config: a$2,
		locales: { "/": {
			"name": "简体中文",
			"hint": "你的首选语言是 $1，是否切换到该语言？",
			"switch": "切换到 $1",
			"cancel": "取消",
			"remember": "记住我的选择"
		} }
	})]
});
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-reading-time@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+no_49ab0b580b3168e477a681ad3a85340a/node_modules/@vuepress/plugin-reading-time/lib/client/index.js
var r$2 = () => {
	let n = usePage();
	return computed(() => n.value.readingTime ?? null);
}, i = (e, t) => {
	let { minutes: n, words: r } = e, { less1Minute: i, word: a, time: o } = t;
	return {
		time: n < 1 ? i : o.replace(`$time`, Math.round(n).toString()),
		words: a.replace(`$word`, r.toString())
	};
}, a$1 = {
	words: ``,
	time: ``
}, o = { "/": {
	"word": "约 $word 字",
	"less1Minute": "小于 1 分钟",
	"time": "大约 $time 分钟"
} }, s$1 = () => o ? Ae$2(o) : computed(() => null), c$1 = () => {
	if (o == null) return computed(() => a$1);
	let t = r$2(), n = s$1();
	return computed(() => t.value && n.value ? i(t.value, n.value) : a$1);
};
//#endregion
//#region node_modules/.pnpm/@vuepress+helper@2.0.0-rc.124_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0_@vu_cd216afb0c86c62c6103c8e42d7e3c6c/node_modules/@vuepress/helper/lib/client/noopComponent.js
var e = () => null;
//#endregion
//#region node_modules/.pnpm/vuepress-shared@2.0.0-rc.103_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0_@vue_0b8026d4fd8ef8aa3fd1755b4ec92452/node_modules/vuepress-shared/lib/client/index.js
var s = ({ name: t = "", color: c = "currentColor", ariaLabel: e }, { attrs: n, slots: a }) => h$5("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	class: ["icon", `${t}-icon`],
	viewBox: "0 0 1024 1024",
	fill: c,
	"aria-label": e ?? `${t} icon`,
	...n
}, a.default());
s.displayName = "IconBase";
var v$1 = () => h$5(s, { name: "enter-fullscreen" }, () => h$5("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
v$1.displayName = "EnterFullScreenIcon";
var z$2 = () => h$5(s, { name: "cancel-fullscreen" }, () => h$5("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
z$2.displayName = "CancelFullScreenIcon";
var H$1 = (t) => isLinkHttp(t) ? t : `https://github.com/${t}`, g = (t = "") => !isLinkHttp(t) || t.includes("github.com") ? "GitHub" : t.includes("bitbucket.org") ? "Bitbucket" : t.includes("gitlab.com") ? "GitLab" : t.includes("gitee.com") ? "Gitee" : null, r$1 = () => h$5(s, { name: "github" }, () => h$5("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
r$1.displayName = "GitHubIcon";
var M = () => h$5(s, { name: "gitlab" }, () => h$5("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
M.displayName = "GitLabIcon";
var p$1 = () => h$5(s, { name: "gitee" }, () => h$5("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
p$1.displayName = "GiteeIcon";
var h$1 = () => h$5(s, { name: "bitbucket" }, () => h$5("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
h$1.displayName = "BitbucketIcon";
var m = () => h$5(s, { name: "source" }, () => h$5("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
m.displayName = "SourceIcon";
var k$1 = ({ link: t, type: c = g(t ?? "") }) => {
	if (!c) return null;
	const e = c.toLowerCase();
	return h$5(e === "bitbucket" ? h$1 : e === "github" ? r$1 : e === "gitlab" ? "GitLab" : e === "gitee" ? p$1 : m);
}, E$2 = (t, c = 0) => {
	let e = 3735928559 ^ c, n = 1103547991 ^ c;
	for (let a = 0; a < t.length; a++) {
		const i = t.charCodeAt(a);
		e = Math.imul(e ^ i, 2654435761), n = Math.imul(n ^ i, 1597334677);
	}
	return e = Math.imul(e ^ e >>> 16, 2246822507), e ^= Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(e ^ e >>> 13, 3266489909), 4294967296 * (2097151 & n) + (e >>> 0);
}, $ = (t, c) => E$2(t) % c, L$1 = /#.*$/u, f$2 = (t) => {
	const c = L$1.exec(t);
	return c ? c[0] : "";
}, u$1 = (t) => decodeURI(t).replace(L$1, "").replace(/\/index\.html$/iu, "/").replace(/\/(README|index)\.md$/iu, "/").replace(/\.(?:html|md)$/iu, ""), N$2 = (t, c) => {
	if (!p$4(c)) return !1;
	const e = u$1(t.path), n = u$1(c), a = f$2(c);
	return a ? a === t.hash && (!n || e === n) : e === n;
};
var variables_module_default = {
	mobileBreakPoint: "719px",
	pcBreakPoint: "1440px",
	colorNumber: "9",
	hasMultipleThemeColors: "false"
};
//#endregion
//#region node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.103_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0__ff723f685cecb53adad4b6d162f6f6c3/node_modules/vuepress-theme-hope/lib/bundle/PageInfo-Jp5rlqAu.js
var f$1 = () => u$4(), v = () => f$4(), I = () => ({
	...useData(),
	theme: f$1(),
	themeLocale: v()
}), u = () => {
	const e = f$1();
	return computed(() => !!e.value.pure);
}, V$1 = () => {
	const e = v();
	return computed(() => e.value.author);
}, z$1 = (e) => isPlainObject(e) && isString$1(e.name), y = (e, r = !1) => e ? g$2(e) ? e.map((a) => isString$1(a) ? { name: a } : z$1(a) ? a : null).filter((a) => a != null) : isString$1(e) ? [{ name: e }] : z$1(e) ? [e] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${r ? "" : "| false"} | undefined\`, but got`, e), []) : [], b = (e, r) => {
	if (e) {
		if (g$2(e) && e.every((a) => isString$1(a))) return e;
		if (isString$1(e)) return [e];
		console.error(`Expect ${r} to be \`string[] | string | undefined\`, but got`, e);
	}
	return [];
}, C$1 = (e) => b(e, "category"), L = (e) => b(e, "tag"), N$1 = () => {
	const e = useFrontmatter(), r = V$1();
	return computed(() => {
		const { author: a } = e.value;
		return a ? y(a) : a === !1 ? [] : y(r.value, !1);
	});
}, i3 = () => {
	const e = useFrontmatter(), r = inject(Symbol.for("categoryMap"), null);
	return computed(() => C$1(e.value.category ?? e.value.categories).map((a) => ({
		name: a,
		path: r?.value.map[a]?.path ?? ""
	})));
}, c3 = () => {
	const e = useFrontmatter(), r = inject(Symbol.for("tagMap"), null);
	return computed(() => L(e.value.tag ?? e.value.tags).map((a) => ({
		name: a,
		path: r?.value.map[a]?.path ?? ""
	})));
}, u3 = () => {
	const { frontmatter: e, page: r } = I();
	return computed(() => {
		const a = T$1(e.value.date);
		if (a) return a;
		const { createdTime: n } = r.value.git ?? {};
		return n ? new Date(n) : null;
	});
}, p3 = () => {
	const { frontmatter: e, themeLocale: r } = I(), a = N$1(), n = i3(), o = c3(), s = u3(), m = r$2(), x = c$1();
	return {
		info: computed(() => ({
			author: a.value,
			category: n.value,
			date: s.value,
			tag: o.value,
			isOriginal: e.value.isOriginal ?? !1,
			readingTime: m.value,
			readingTimeLocale: x.value,
			pageview: e.value.pageview ?? !0
		})),
		items: computed(() => e.value.pageInfo ?? r.value.pageInfo ?? null)
	};
}, p = () => {
	const e = v();
	return computed(() => e.value.metaLocales);
}, m3 = "http://.", T = () => {
	const e = useRouter(), r = useRoute();
	return (a) => {
		if (!a) return;
		if (isLinkWithProtocol(a)) return window.open(a);
		if (D$1(a)) return r.fullPath === a ? void 0 : void e.push(a);
		const n = r.path.slice(0, r.path.lastIndexOf("/"));
		e.push(new URL(`${n}/${encodeURI(a)}`, m3).pathname);
	};
}, H = () => h$5(s, { name: "author" }, () => h$5("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
H.displayName = "AuthorIcon";
var O = () => h$5(s, { name: "calendar" }, () => h$5("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
O.displayName = "CalendarIcon";
var D = () => h$5(s, { name: "category" }, () => h$5("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
D.displayName = "CategoryIcon";
var R = () => h$5(s, { name: "eye" }, () => h$5("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
R.displayName = "EyeIcon";
var _ = () => h$5(s, { name: "fire" }, () => h$5("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
_.displayName = "FireIcon";
var j = () => h$5(s, { name: "print" }, () => h$5("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
j.displayName = "PrintIcon";
var S = () => h$5(s, { name: "tag" }, () => h$5("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
S.displayName = "TagIcon";
var k = () => h$5(s, { name: "timer" }, () => h$5("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
k.displayName = "TimerIcon";
var E$1 = () => h$5(s, { name: "word" }, () => [h$5("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h$5("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
E$1.displayName = "WordIcon";
var A3 = /* @__PURE__ */ defineComponent({
	name: "PageInfo",
	components: {
		AuthorInfo: /* @__PURE__ */ defineComponent({
			name: "AuthorInfo",
			inheritAttrs: !1,
			props: { author: {
				type: Array,
				required: !0
			} },
			setup(e) {
				const r = p(), a = u();
				return () => e.author.length > 0 ? h$5("span", {
					class: "page-author-info",
					"aria-label": `${r.value.author}${a.value ? "" : "🖊"}`,
					...a.value ? {} : { "data-balloon-pos": "up" }
				}, [
					h$5(H),
					h$5("span", e.author.map((n) => n.url ? h$5("a", {
						class: "page-author-item",
						href: n.url,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.name) : h$5("span", { class: "page-author-item" }, n.name))),
					h$5("span", {
						property: "author",
						content: e.author.map((n) => n.name).join(", ")
					})
				]) : null;
			}
		}),
		CategoryInfo: /* @__PURE__ */ defineComponent({
			name: "CategoryInfo",
			inheritAttrs: !1,
			props: { category: {
				type: Array,
				required: !0
			} },
			setup(e) {
				const r = p(), a = T(), n = u();
				return () => e.category.length > 0 ? h$5("span", {
					class: "page-category-info",
					"aria-label": `${r.value.category}${n.value ? "" : "🌈"}`,
					...n.value ? {} : { "data-balloon-pos": "up" }
				}, [
					h$5(D),
					e.category.map(({ name: o, path: s }) => h$5("span", {
						class: ["page-category-item", {
							[`color${$(o, Number(variables_module_default.colorNumber))}`]: !n.value,
							clickable: s
						}],
						role: s ? "navigation" : "",
						onClick: () => {
							s && a(s);
						}
					}, o)),
					h$5("meta", {
						property: "articleSection",
						content: e.category.map(({ name: o }) => o).join(",")
					})
				]) : null;
			}
		}),
		DateInfo: /* @__PURE__ */ defineComponent({
			name: "DateInfo",
			inheritAttrs: !1,
			props: { date: Object },
			setup(e) {
				const r = useLang(), a = p(), n = u(), o = computed(() => new Intl.DateTimeFormat(r.value, { dateStyle: "short" })), s = computed(() => e.date ? o.value.format(e.date) : null);
				return () => e.date ? h$5("span", {
					class: "page-date-info",
					"aria-label": `${a.value.date}${n.value ? "" : "📅"}`,
					...n.value ? {} : { "data-balloon-pos": "up" }
				}, [
					h$5(O),
					h$5("span", { "data-allow-mismatch": "text" }, s.value),
					h$5("meta", {
						property: "datePublished",
						content: e.date.toISOString() || ""
					})
				]) : null;
			}
		}),
		OriginalInfo: /* @__PURE__ */ defineComponent({
			name: "OriginalInfo",
			inheritAttrs: !1,
			props: { isOriginal: Boolean },
			setup(e) {
				const r = p();
				return () => e.isOriginal ? h$5("span", { class: "page-original-info" }, r.value.origin) : null;
			}
		}),
		PageViewInfo: e,
		ReadingTimeInfo: /* @__PURE__ */ defineComponent({
			name: "ReadingTimeInfo",
			inheritAttrs: !1,
			props: {
				readingTime: Object,
				readingTimeLocale: Object
			},
			setup(e) {
				const r = p(), a = u(), n = computed(() => {
					if (!e.readingTime) return null;
					const { minutes: o } = e.readingTime;
					return o < 1 ? "PT1M" : `PT${Math.round(o)}M`;
				});
				return () => e.readingTimeLocale?.time ? h$5("span", {
					class: "page-reading-time-info",
					"aria-label": `${r.value.readingTime}${a.value ? "" : "⌛"}`,
					...a.value ? {} : { "data-balloon-pos": "up" }
				}, [
					h$5(k),
					h$5("span", e.readingTimeLocale.time),
					h$5("meta", {
						property: "timeRequired",
						content: n.value
					})
				]) : null;
			}
		}),
		TagInfo: /* @__PURE__ */ defineComponent({
			name: "TagInfo",
			inheritAttrs: !1,
			props: { tag: Array },
			setup(e) {
				const r = p(), a = T(), n = u();
				return () => e.tag?.length ? h$5("span", {
					class: "page-tag-info",
					"aria-label": `${r.value.tag}${n.value ? "" : "🏷"}`,
					...n.value ? {} : { "data-balloon-pos": "up" }
				}, [
					h$5(S),
					e.tag.map(({ name: o, path: s }) => h$5("span", {
						class: ["page-tag-item", {
							[`color${$(o, Number(variables_module_default.colorNumber))}`]: !n.value,
							clickable: s
						}],
						role: s ? "navigation" : "",
						onClick: () => {
							s && a(s);
						}
					}, o)),
					h$5("meta", {
						property: "keywords",
						content: e.tag.map(({ name: o }) => o).join(",")
					})
				]) : null;
			}
		}),
		WordInfo: /* @__PURE__ */ defineComponent({
			name: "ReadTimeInfo",
			inheritAttrs: !1,
			props: {
				readingTime: Object,
				readingTimeLocale: Object
			},
			setup(e) {
				const r = p(), a = u();
				return () => e.readingTimeLocale?.words ? h$5("span", {
					class: "page-word-info",
					"aria-label": `${r.value.words}${a.value ? "" : "🔠"}`,
					...a.value ? {} : { "data-balloon-pos": "up" }
				}, [
					h$5(E$1),
					h$5("span", e.readingTimeLocale.words),
					h$5("meta", {
						property: "wordCount",
						content: e.readingTime?.words
					})
				]) : null;
			}
		})
	},
	props: {
		items: [Boolean, Array],
		info: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		const r = u();
		return () => {
			const a = e.items ?? [
				"Author",
				"Original",
				"Date",
				"PageView",
				"ReadingTime",
				"Category",
				"Tag"
			];
			return a ? h$5("div", { class: "page-info" }, a.map((n) => h$5(resolveComponent(`${n}Info`), {
				...e.info,
				isPure: r.value
			}))) : null;
		};
	}
});
//#endregion
//#region docs/.vuepress/.temp/theme-hope/sidebar.js
var sidebarData = {};
//#endregion
//#region node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.103_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0__ff723f685cecb53adad4b6d162f6f6c3/node_modules/vuepress-theme-hope/lib/bundle/DropTransition-Bj6cgygi.js
var $e = Symbol(""), E = () => {
	const e = inject($e);
	if (!e) throw new Error("useDarkMode() is called without provider.");
	return e;
}, La = (e) => {
	const l = usePreferredDark(), t = f$1(), s = computed(() => t.value.darkmode ?? "switch"), n = useStorage("vuepress-theme-hope-scheme", "auto"), o = computed(() => {
		switch (s.value) {
			case "disable": return !1;
			case "enable": return !0;
			case "auto": return l.value;
			case "switch": return n.value === "dark" || n.value === "auto" && l.value;
			case "toggle": return n.value === "dark";
			default: return n.value === "dark" || n.value === "auto" && l.value;
		}
	}), r = computed(() => {
		const u = s.value;
		return u === "switch" || u === "toggle";
	});
	e.provide($e, {
		canToggle: r,
		config: s,
		isDarkMode: o,
		status: n
	}), Object.defineProperties(e.config.globalProperties, { $isDarkMode: { get: () => o.value } });
}, Sa = () => {
	const { config: e, isDarkMode: l, status: t } = E();
	watchEffect(() => {
		e.value === "disable" ? t.value = "light" : e.value === "enable" ? t.value = "dark" : e.value === "toggle" && t.value === "auto" && (t.value = "light");
	}), useEventListener("beforeprint", () => {
		l.value && (document.documentElement.dataset.theme = "light");
	}), useEventListener("afterprint", () => {
		l.value && (document.documentElement.dataset.theme = "dark");
	}), onMounted(() => {
		watchImmediate(l, (s) => {
			document.documentElement.dataset.theme = s ? "dark" : "light";
		});
	});
}, te$1 = (e) => !isLinkWithProtocol(e) && !isLinkExternal(e), ne = (e, l = !1, t) => {
	const { meta: s, path: n, notFound: o } = resolveRoute(e, t);
	return o ? {
		text: n,
		link: n
	} : {
		text: !l && s.shortTitle ? s.shortTitle : s.title || n,
		link: n,
		icon: s.icon
	};
}, C = (e = "", l = "") => isLinkWithProtocol(l) || D$1(l) ? l : `${ensureEndingSlash(e)}${l}`, Te$1 = (e, l) => {
	const t = isString$1(e) ? ne(C(l, e)) : isString$1(e.link) ? {
		...e,
		link: te$1(e.link) ? resolveRoute(C(l, e.link)).path : e.link
	} : e;
	if ("children" in t) {
		const s = C(l, t.prefix), n = t.children === "structure" ? sidebarData[s] : t.children;
		return {
			...t,
			prefix: s,
			children: n.map((o) => Te$1(o, s))
		};
	}
	return { ...t };
}, oe = ({ config: e, prefix: l = "" }) => e.map((t) => Te$1(t, l)), xa = ({ config: e, routePath: l }) => {
	const t = S$2(e).sort((s, n) => n.length - s.length);
	for (const s of t) if (v$3(decodeURI(l), s)) {
		const n = e[s];
		return oe({
			config: n === "structure" ? sidebarData[s] : n || [],
			prefix: s
		});
	}
	return console.warn(`${decodeURI(l)} is missing it's sidebar config.`), [];
}, Ma = ({ config: e, routeLocale: l, routePath: t }) => e === "structure" ? oe({
	config: sidebarData[l],
	prefix: l
}) : g$2(e) ? oe({ config: e }) : isPlainObject(e) ? xa({
	config: e,
	routePath: t
}) : [], Ie = Symbol(""), Ca = () => {
	const { frontmatter: e, routeLocale: l, routePath: t, themeLocale: s } = I(), n = computed(() => e.value.home ? !1 : e.value.sidebar ?? s.value.sidebar ?? "structure");
	provide(Ie, computed(() => Ma({
		config: n.value,
		routeLocale: l.value,
		routePath: t.value
	})));
}, se = () => {
	const e = inject(Ie);
	if (!e) throw new Error("useSidebarItems() is called without provider.");
	return e;
};
var $a = /* @__PURE__ */ defineComponent({
	name: "PageFooter",
	setup() {
		const { frontmatter: e, theme: l, themeLocale: t } = I(), s = N$1(), n = computed(() => {
			const { copyright: c, footer: v } = e.value;
			return v !== !1 && !!(c || v || t.value.displayFooter);
		}), o = computed(() => {
			const { footer: c } = e.value;
			return isString$1(c) ? c : t.value.footer ?? "";
		}), r = computed(() => s.value.map(({ name: c }) => c).join(", ")), u = (c) => `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${r.value} ${c ? `${c} Licensed` : ""}`, p = computed(() => {
			const { copyright: c, license: v = "" } = e.value, { license: h } = l.value, { copyright: k } = t.value;
			return c ?? (v ? u(v) : k ?? (r.value || h ? u(h) : !1));
		});
		return () => n.value ? h$5("footer", {
			class: "vp-footer-wrapper",
			"vp-footer": ""
		}, [o.value ? h$5("div", {
			class: "vp-footer",
			innerHTML: o.value
		}) : null, p.value ? h$5("div", {
			class: "vp-copyright",
			innerHTML: p.value
		}) : null]) : null;
	}
});
var Ee$1 = () => h$5(s, { name: "outlook" }, () => [h$5("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
Ee$1.displayName = "AppearanceIcon";
var ze = () => h$5(s, { name: "auto" }, () => h$5("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
ze.displayName = "AutoColorModeIcon";
var Ne$1 = () => h$5(s, { name: "light" }, () => h$5("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
Ne$1.displayName = "LightColorModeIcon";
var Pe = () => h$5(s, { name: "dark" }, () => h$5("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
Pe.displayName = "DarkColorModeIcon";
var re = /* @__PURE__ */ defineComponent({
	name: "ColorModeSwitch",
	setup() {
		const { config: e, isDarkMode: l, status: t } = E(), s = u(), n = () => {
			e.value === "switch" ? t.value = {
				light: "dark",
				dark: "auto",
				auto: "light"
			}[t.value] : t.value = t.value === "light" ? "dark" : "light";
		}, o = async (r) => {
			if (!(document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !s.value)) {
				n();
				return;
			}
			const u = r.clientX, p = r.clientY, c = Math.hypot(Math.max(u, innerWidth - u), Math.max(p, innerHeight - p)), v = l.value;
			await document.startViewTransition(async () => {
				n(), await nextTick();
			}).ready, l.value !== v && document.documentElement.animate({ clipPath: l.value ? [`circle(${c}px at ${u}px ${p}px)`, `circle(0px at ${u}px ${p}px)`] : [`circle(0px at ${u}px ${p}px)`, `circle(${c}px at ${u}px ${p}px)`] }, {
				duration: 400,
				pseudoElement: l.value ? "::view-transition-old(root)" : "::view-transition-new(root)"
			});
		};
		return () => h$5("button", {
			type: "button",
			class: "vp-color-mode-switch",
			id: "color-mode-switch",
			onClick: o
		}, [
			h$5(ze, { style: { display: t.value === "auto" ? "block" : "none" } }),
			h$5(Pe, { style: { display: t.value === "dark" ? "block" : "none" } }),
			h$5(Ne$1, { style: { display: t.value === "light" ? "block" : "none" } })
		]);
	}
});
var ue = () => {
	const e = v();
	return computed(() => e.value.outlookLocales);
};
var Ta = /* @__PURE__ */ defineComponent({
	name: "ColorMode",
	setup() {
		const e = ue(), { canToggle: l } = E();
		return () => l.value ? h$5("div", { class: "vp-color-mode" }, [h$5("label", {
			class: "vp-color-mode-title",
			for: "color-mode-switch"
		}, e.value.darkmode), h$5(re)]) : null;
	}
});
var ie = "VUEPRESS_THEME_COLOR";
var Be$1 = /* @__PURE__ */ defineComponent({
	name: "ThemeColorPicker",
	props: { themeColors: {
		type: Object,
		required: !0
	} },
	setup(e) {
		const { isDarkMode: l } = E(), t = computed(() => {
			const n = { ...e.themeColors };
			for (const [o, r] of Object.entries(n)) o.includes("light") && (l.value || (n[o.replace("light-", "")] = r), delete n[o]), o.includes("dark") && (l.value && (n[o.replace("dark-", "")] = r), delete n[o]);
			return Object.entries(n).map(([o, r]) => ({
				name: o,
				color: r
			}));
		}), s = (n = "") => {
			const o = document.documentElement.classList, r = t.value.map(({ name: u }) => u);
			if (!n) {
				localStorage.removeItem(ie), o.remove(...r);
				return;
			}
			o.remove(...r.filter((u) => u !== n)), o.add(n), localStorage.setItem(ie, n);
		};
		return onMounted(() => {
			const n = localStorage.getItem(ie);
			n && s(n);
		}), () => h$5("ul", {
			class: "vp-theme-color-picker",
			id: "theme-color-picker"
		}, [h$5("li", h$5("span", {
			class: "theme-color",
			onClick: () => {
				s();
			}
		})), t.value.map(({ name: n, color: o }) => h$5("li", h$5("span", {
			style: { background: o },
			onClick: () => {
				s(n);
			}
		})))]);
	}
});
var z = variables_module_default.hasMultipleThemeColors === "true", Ia = z ? x$3(b$3(variables_module_default).filter(([e]) => e.startsWith("theme-"))) : {};
var Ea = /* @__PURE__ */ defineComponent({
	name: "ThemeColor",
	setup() {
		const e = ue();
		return () => z ? h$5("div", { class: "vp-theme-color" }, [h$5("label", {
			class: "vp-theme-color-title",
			for: "theme-color-picker"
		}, e.value.themeColor), h$5(Be$1, { themeColors: Ia })]) : null;
	}
});
var Ae$1 = () => h$5(s, { name: "cancel-fullscreen" }, () => h$5("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
Ae$1.displayName = "CancelFullScreenIcon";
var De = () => h$5(s, { name: "enter-fullscreen" }, () => h$5("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
De.displayName = "EnterFullScreenIcon";
var ce = /* @__PURE__ */ defineComponent({
	name: "ToggleFullScreenButton",
	setup() {
		const { isSupported: e, isFullscreen: l, toggle: t } = useFullscreen();
		return () => e.value ? h$5("button", {
			type: "button",
			id: "full-screen-switch",
			class: "full-screen",
			ariaPressed: l.value,
			onClick: () => t()
		}, l.value ? h$5(Ae$1) : h$5(De)) : null;
	}
}), za = /* @__PURE__ */ defineComponent({
	name: "ToggleFullScreenButton",
	setup() {
		const e = ue(), { isSupported: l } = useFullscreen();
		return () => l.value ? h$5("div", { class: "full-screen-wrapper" }, [h$5("label", {
			class: "full-screen-title",
			for: "full-screen-switch"
		}, e.value.fullscreen), h$5(ce)]) : null;
	}
}), Ve$1 = /* @__PURE__ */ defineComponent({
	name: "AppearanceSettings",
	setup() {
		const e = f$1(), l = u(), t = computed(() => !l.value && e.value.fullscreen);
		return () => h$5(ClientOnly, () => [
			z ? h$5(Ea) : null,
			h$5(Ta),
			t.value ? h$5(za) : null
		]);
	}
}), Na = /* @__PURE__ */ defineComponent({
	name: "AppearanceButton",
	setup() {
		const e = f$1(), { canToggle: l } = E(), { isSupported: t } = useFullscreen(), s = u(), n = /* @__PURE__ */ ref(!1), o = computed(() => !s.value && e.value.fullscreen && t), r = computed(() => z || l.value || o.value);
		return onContentUpdated(() => {
			n.value = !1;
		}), () => r.value ? h$5("div", { class: "vp-nav-item hide-in-mobile" }, l.value && !o.value && !z ? h$5(re) : o.value && !l.value && !z ? h$5(ce) : h$5("button", {
			type: "button",
			class: ["vp-appearance-button", { open: n.value }],
			tabindex: "-1",
			"aria-hidden": !0
		}, [h$5(Ee$1), h$5("div", { class: "vp-appearance-dropdown" }, h$5(Ve$1))])) : null;
	}
});
var Re$1 = () => h$5(s, { name: "i18n" }, () => [h$5("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
Re$1.displayName = "I18nIcon";
var f = ({ config: e, iconSizing: l = "both" }, { emit: t, slots: s }) => {
	const { icon: n } = e;
	return h$5(AutoLink, {
		config: e,
		onFocusout: () => {
			t("focusout");
		}
	}, {
		...s,
		before: s.before ?? (n ? () => h$5(resolveComponent("VPIcon"), {
			icon: n,
			sizing: l
		}) : null)
	});
};
f.displayName = "AutoLink";
var Oe$1 = /* @__PURE__ */ defineComponent({
	name: "NavbarDropdown",
	props: { config: {
		type: Object,
		required: !0
	} },
	slots: Object,
	setup(e, { slots: l }) {
		const t = /* @__PURE__ */ toRef$1(e, "config"), s = computed(() => t.value.ariaLabel ?? t.value.text), n = /* @__PURE__ */ ref(!1), o = (r) => {
			r.detail === 0 && (n.value = !n.value);
		};
		return onContentUpdated(() => {
			n.value = !1;
		}), () => h$5("div", { class: ["vp-dropdown-wrapper", { open: n.value }] }, [h$5("button", {
			type: "button",
			class: "vp-dropdown-title",
			"aria-label": s.value,
			onClick: o
		}, [
			l.title?.() ?? [h$5(resolveComponent("VPIcon"), { icon: t.value.icon }), e.config.text],
			h$5("span", { class: "arrow" }),
			h$5("ul", { class: "vp-dropdown" }, t.value.children.map((r, u) => {
				const p = u === t.value.children.length - 1;
				return h$5("li", { class: "vp-dropdown-item" }, "children" in r ? [h$5("h4", { class: "vp-dropdown-subtitle" }, r.link ? h$5(f, {
					config: r,
					onFocusout: () => {
						r.children.length === 0 && p && (n.value = !1);
					}
				}) : r.text), h$5("ul", { class: "vp-dropdown-subitems" }, r.children.map((c, v) => h$5("li", { class: "vp-dropdown-subitem" }, h$5(f, {
					config: c,
					onFocusout: () => {
						v === r.children.length - 1 && p && (n.value = !1);
					}
				}))))] : h$5(f, {
					config: r,
					onFocusout: () => {
						p && (n.value = !1);
					}
				}));
			}))
		])]);
	}
});
var G = (e, l) => l[l.length - 1] === e;
var Aa = /* @__PURE__ */ defineComponent({
	name: "NavScreenMenu",
	props: { config: {
		type: Object,
		required: !0
	} },
	setup(e) {
		const l = /* @__PURE__ */ toRef$1(e, "config"), t = useRoute(), s = computed(() => l.value.ariaLabel ?? l.value.text), n = /* @__PURE__ */ ref(!1);
		return onContentUpdated(() => {
			n.value = !1;
		}), watch(() => t.fullPath, () => {
			n.value = !1;
		}), () => [h$5("button", {
			type: "button",
			class: ["vp-nav-screen-menu-title", { active: n.value }],
			"aria-label": s.value,
			onClick: () => {
				n.value = !n.value;
			}
		}, [h$5("span", { class: "text" }, [h$5(resolveComponent("VPIcon"), {
			icon: l.value.icon,
			sizing: "both"
		}), e.config.text]), h$5("span", { class: ["arrow", n.value ? "down" : "end"] })]), h$5("ul", { class: ["vp-nav-screen-menu", { hide: !n.value }] }, l.value.children.map((o) => h$5("li", { class: "vp-nav-screen-menu-item" }, "children" in o ? [h$5("h4", { class: "vp-nav-screen-menu-subtitle" }, o.link ? h$5(f, {
			config: o,
			onFocusout: () => {
				G(o, l.value.children) && o.children.length === 0 && (n.value = !1);
			}
		}) : o.text), h$5("ul", { class: "vp-nav-screen-menu-subitems" }, o.children.map((r) => h$5("li", { class: "vp-nav-screen-menu-subitem" }, h$5(f, {
			config: r,
			onFocusout: () => {
				G(r, o.children) && G(o, l.value.children) && (n.value = !1);
			}
		}))))] : h$5(f, {
			config: o,
			onFocusout: () => {
				G(o, l.value.children) && (n.value = !1);
			}
		}))))];
	}
});
var je$1 = (e, l = "") => isString$1(e) ? ne(C(l, e)) : "children" in e ? {
	...e,
	...e.link && te$1(e.link) ? { link: resolveRoute(C(l, e.link)).path } : {},
	children: e.children.map((t) => je$1(t, C(l, e.prefix)))
} : {
	...e,
	link: te$1(e.link) ? resolveRoute(C(l, e.link)).path : e.link
}, _e = () => {
	const e = v();
	return computed(() => (e.value.navbar || []).map((l) => je$1(l)));
};
var Da = /* @__PURE__ */ defineComponent({
	name: "NavScreenLinks",
	setup() {
		const e = _e();
		return () => e.value.length > 0 ? h$5("nav", { class: "nav-screen-links" }, e.value.map((l) => h$5("div", { class: "navbar-links-item" }, "children" in l ? h$5(Aa, { config: l }) : h$5(f, { config: l })))) : null;
	}
});
var { mobileBreakPoint: Va, pcBreakPoint: Ra } = variables_module_default, Fe$1 = (e) => e.endsWith("px") ? Number(e.slice(0, -2)) : null, W = () => {
	const e = /* @__PURE__ */ ref(!1), l = /* @__PURE__ */ ref(!1), t = () => {
		e.value = window.innerWidth <= (Fe$1(Va) ?? 719), l.value = window.innerWidth >= (Fe$1(Ra) ?? 1440);
	};
	return useEventListener("resize", t, !1), useEventListener("orientationchange", t, !1), onMounted(() => {
		t();
	}), {
		isMobile: e,
		isPC: l
	};
};
var Oa = /* @__PURE__ */ defineComponent({
	name: "NavScreen",
	props: { show: Boolean },
	slots: Object,
	setup(e, { slots: l }) {
		const { isMobile: t } = W(), s = /* @__PURE__ */ shallowRef(), n = useScrollLock(s);
		return onContentUpdated(() => {
			n.value = !1;
		}), watch(t, (o) => {
			!o && e.show && (n.value = !1);
		}), onMounted(() => {
			s.value = document.body;
		}), onUnmounted(() => {
			n.value = !1;
		}), () => h$5(Transition, {
			name: "fade-in-down",
			onEnter: () => {
				n.value = !0;
			},
			onAfterLeave: () => {
				n.value = !1;
			}
		}, () => e.show ? h$5("div", {
			id: "nav-screen",
			class: "vp-nav-screen"
		}, h$5("div", { class: "vp-nav-screen-container" }, [
			l.navScreenTop?.(),
			h$5(Da),
			h$5("div", { class: "vp-appearance-wrapper" }, h$5(Ve$1)),
			l.navScreenBottom?.()
		])) : null);
	}
}), ja = /* @__PURE__ */ defineComponent({
	name: "NavbarBrand",
	setup() {
		const { routeLocale: e, siteLocale: l, themeLocale: t } = I(), s = computed(() => t.value.home ?? e.value), n = computed(() => l.value.title), o = computed(() => t.value.navbarTitle ?? n.value), r = computed(() => t.value.logo ? withBase(t.value.logo) : null), u = computed(() => t.value.logoDark ? withBase(t.value.logoDark) : null);
		return () => h$5(RouteLink, {
			to: s.value,
			class: "vp-brand",
			"aria-label": t.value.routerLocales.home
		}, () => [
			r.value ? h$5("img", {
				class: ["vp-nav-logo", { light: !!u.value }],
				src: r.value,
				alt: ""
			}) : null,
			u.value ? h$5("img", {
				class: ["vp-nav-logo dark"],
				src: u.value,
				alt: ""
			}) : null,
			o.value ? h$5("span", { class: ["vp-site-name", { "hide-in-pad": r.value && (t.value.hideSiteNameOnMobile ?? !0) }] }, o.value) : null
		]);
	}
}), _a = /* @__PURE__ */ defineComponent({
	name: "NavbarLinks",
	setup() {
		const e = _e();
		return () => e.value.length > 0 ? h$5("nav", { class: "vp-nav-links" }, e.value.map((l) => h$5("div", { class: "vp-nav-item hide-in-mobile" }, "children" in l ? h$5(Oe$1, { config: l }) : h$5(f, {
			config: l,
			iconSizing: "height"
		})))) : null;
	}
});
var Fa = () => {
	const e = v(), l = computed(() => e.value.repo), t = computed(() => l.value ? H$1(l.value) : null), s = computed(() => l.value ? g(l.value) : null), n = computed(() => t.value ? e.value.repoLabel ?? s.value ?? "Source" : null);
	return computed(() => !t.value || !n.value || e.value.repoDisplay === !1 ? null : {
		type: s.value ?? "Source",
		label: n.value,
		link: t.value
	});
};
var Ha = /* @__PURE__ */ defineComponent({
	name: "RepoLink",
	setup() {
		const e = Fa();
		return () => e.value ? h$5("div", { class: "vp-nav-item vp-action" }, h$5("a", {
			class: "vp-action-link",
			href: e.value.link,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": e.value.label
		}, h$5(k$1, {
			type: e.value.type,
			style: {
				width: "1.25rem",
				height: "1.25rem",
				verticalAlign: "middle"
			}
		}))) : null;
	}
});
var He$1 = ({ active: e = !1 }, { emit: l }) => h$5("button", {
	type: "button",
	class: ["vp-toggle-navbar-button", { "is-active": e }],
	"aria-label": "Toggle Navbar",
	"aria-expanded": e,
	"aria-controls": "nav-screen",
	onClick: () => {
		l("toggle");
	}
}, h$5("span", [
	h$5("span", { class: "vp-top" }),
	h$5("span", { class: "vp-middle" }),
	h$5("span", { class: "vp-bottom" })
]));
He$1.displayName = "ToggleNavbarButton";
var ve = (e, { emit: l }) => h$5("button", {
	type: "button",
	class: "vp-toggle-sidebar-button",
	title: "Toggle Sidebar",
	onClick: () => {
		l("toggle");
	}
}, h$5("span", { class: "icon" }));
ve.displayName = "ToggleSidebarButton", ve.emits = ["toggle"];
var qa = /* @__PURE__ */ defineComponent({
	name: "NavBar",
	emits: ["toggleSidebar"],
	slots: Object,
	setup(e$1, { emit: l, slots: t }) {
		const s = v(), { isMobile: n } = W(), o = /* @__PURE__ */ ref(!1), r = computed(() => {
			const { navbarAutoHide: v = "mobile" } = s.value;
			return v !== "none" && (v === "always" || n.value);
		}), u = computed(() => s.value.navbarLayout ?? {
			start: ["Brand"],
			center: ["Links"],
			end: [
				"Language",
				"Repo",
				"Outlook",
				"Search"
			]
		}), p = {
			Brand: ja,
			Language: e,
			Links: _a,
			Repo: Ha,
			Outlook: Na,
			Search: we("SearchBox") ? resolveComponent("SearchBox") : e
		}, c = (v) => p[v] ?? (we(v) ? resolveComponent(v) : e);
		return onContentUpdated(() => {
			o.value = !1;
		}), watch(n, (v) => {
			v || (o.value = !1);
		}), () => [h$5("header", {
			key: "navbar",
			id: "navbar",
			class: ["vp-navbar", { "auto-hide": r.value }],
			"vp-navbar": ""
		}, [
			h$5("div", { class: "vp-navbar-start" }, [h$5(ve, { onToggle: () => {
				o.value && (o.value = !1), l("toggleSidebar");
			} }), u.value.start?.map((v) => h$5(c(v)))]),
			h$5("div", { class: "vp-navbar-center" }, [u.value.center?.map((v) => h$5(c(v)))]),
			h$5("div", { class: "vp-navbar-end" }, [u.value.end?.map((v) => h$5(c(v))), h$5(He$1, {
				active: o.value,
				onToggle: () => {
					o.value = !o.value;
				}
			})])
		]), h$5(Oa, { show: o.value }, t)];
	}
});
var pe = (e, l) => l.activeMatch ? new RegExp(l.activeMatch, "u").test(e.path) : N$2(e, l.link);
var Ua = /* @__PURE__ */ defineComponent({
	name: "SidebarChild",
	props: { config: {
		type: Object,
		required: !0
	} },
	setup(e) {
		const l = useRoute();
		return () => isString$1(e.config.link) ? h$5(f, {
			class: ["vp-sidebar-link", { active: pe(l, e.config) }],
			config: {
				...e.config,
				exact: !0
			}
		}) : h$5("p", e, [h$5(resolveComponent("VPIcon"), {
			icon: e.config.icon,
			sizing: "both"
		}), e.config.text]);
	}
});
var de = (e, l) => "children" in l ? !!l.prefix && N$2(e, l.prefix) || l.children.some((t) => de(e, t)) : pe(e, l);
var Ga = /* @__PURE__ */ defineComponent({
	name: "SidebarGroup",
	props: {
		config: {
			type: Object,
			required: !0
		},
		open: {
			type: Boolean,
			required: !0
		}
	},
	emits: ["toggle"],
	setup(e, { emit: l }) {
		const t = useRoute(), s = /* @__PURE__ */ ref(!1), n = computed(() => de(t, e.config)), o = computed(() => pe(t, e.config)), r = computed(() => e.open || e.config.expanded && !s.value);
		return () => {
			const { collapsible: u, children: p, icon: c, prefix: v, link: h, text: k } = e.config;
			return h$5("section", { class: "vp-sidebar-group" }, [h$5(u ? "button" : "p", {
				class: ["vp-sidebar-header", {
					clickable: u || h,
					exact: o.value,
					active: n.value
				}],
				...u ? {
					type: "button",
					onClick: () => {
						s.value = !0, l("toggle");
					}
				} : {}
			}, [
				h$5(resolveComponent("VPIcon"), {
					icon: c,
					sizing: "both"
				}),
				h ? h$5(f, {
					class: "vp-sidebar-title no-external-link-icon",
					config: {
						text: k,
						link: h
					}
				}) : h$5("span", { class: "vp-sidebar-title" }, k),
				u ? h$5("span", { class: ["vp-arrow", r.value ? "down" : "end"] }) : null
			]), r.value || !u ? h$5(qe, {
				key: v,
				config: p
			}) : null]);
		};
	}
}), qe = /* @__PURE__ */ defineComponent({
	name: "SidebarLinks",
	props: { config: {
		type: Array,
		required: !0
	} },
	setup(e) {
		const l = useRoute(), t = useRoutePath(), s = /* @__PURE__ */ ref(-1), n = (o) => {
			s.value = o === s.value ? -1 : o;
		};
		return watchImmediate(t, () => {
			s.value = e.config.findIndex((r) => de(l, r));
		}, { flush: "post" }), () => h$5("ul", { class: "vp-sidebar-links" }, e.config.map((o, r) => h$5("li", "children" in o ? h$5(Ga, {
			config: o,
			open: r === s.value,
			onToggle: () => {
				n(r);
			}
		}) : h$5(Ua, { config: o }))));
	}
}), Wa = /* @__PURE__ */ defineComponent({
	name: "SideBar",
	slots: Object,
	setup(e, { slots: l }) {
		const t = useRoute(), s = se(), n = /* @__PURE__ */ shallowRef();
		return onMounted(() => {
			watchImmediate(() => t.hash, (o) => {
				const r = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${o}"]`);
				if (!r) return;
				const { top: u, height: p } = n.value.getBoundingClientRect(), { top: c, height: v } = r.getBoundingClientRect();
				c < u ? r.scrollIntoView(!0) : c + v > u + p && r.scrollIntoView(!1);
			});
		}), () => h$5("aside", {
			ref: n,
			key: "sidebar",
			id: "sidebar",
			class: "vp-sidebar",
			"vp-sidebar": ""
		}, [
			l.sidebarTop?.(),
			l.sidebarItems?.(s.value) ?? h$5(qe, { config: s.value }),
			l.sidebarBottom?.()
		]);
	}
}), Ya = /* @__PURE__ */ defineComponent({
	name: "MainLayout",
	props: {
		containerClass: String,
		noNavbar: Boolean,
		noSidebar: Boolean,
		noToc: Boolean
	},
	slots: Object,
	setup(e, { slots: l }) {
		const { frontmatter: t, theme: s, themeLocale: n } = I(), { isMobile: o, isPC: r } = W(), u$5 = u(), [p, c] = useToggle(!1), [v, h] = useToggle(!1), k = se(), y = /* @__PURE__ */ shallowRef(), x = useScrollLock(y), $ = /* @__PURE__ */ ref(!1), O = computed(() => e.noNavbar || t.value.navbar === !1 || n.value.navbar === !1 ? !1 : !!(n.value.logo ?? n.value.repo ?? n.value.navbar)), Y = computed(() => t.value.externalLinkIcon ?? s.value.externalLinkIcon ?? !0), N = computed(() => !e.noToc && !t.value.home && !!(t.value.toc ?? n.value.toc ?? !0)), w = {
			x: 0,
			y: 0
		}, X = (m) => {
			w.x = m.changedTouches[0].clientX, w.y = m.changedTouches[0].clientY;
		}, Ye = (m) => {
			const P = m.changedTouches[0].clientX - w.x, Z = m.changedTouches[0].clientY - w.y;
			Math.abs(P) > Math.abs(Z) * 1.5 && Math.abs(P) > 40 && (P > 0 && w.x <= 80 ? c(!0) : c(!1));
		};
		let J = 0;
		return useEventListener("scroll", useThrottleFn(() => {
			const m = window.scrollY;
			m <= 58 || m < J ? $.value = !1 : J + 200 < m && !p.value && ($.value = !0), J = m;
		}, 300, !0)), watch(o, (m) => {
			m || c(!1);
		}), watch(p, (m) => {
			x.value = m;
		}), onContentUpdated(() => {
			c(!1);
		}), onMounted(() => {
			y.value = document.body;
		}), onUnmounted(() => {
			x.value = !1;
		}), () => {
			const m = l.sidebarTop?.(), P = l.sidebarItems?.(k.value), Z = l.sidebarBottom?.(), Xe = Ce$1(m) && Ce$1(P) && Ce$1(Z), he = e.noSidebar || t.value.sidebar === !1 || (t.value.home || k.value.length === 0) && Xe;
			return h$5(we("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : X$1, () => h$5("div", {
				class: [
					"theme-container",
					{
						"hide-navbar": $.value,
						"no-navbar": !O.value,
						"sidebar-collapsed": !o.value && !r.value && v.value,
						"sidebar-open": o.value && p.value,
						"no-sidebar": he,
						"external-link-icon": Y.value,
						pure: u$5.value,
						"has-toc": N.value
					},
					e.containerClass ?? "",
					t.value.containerClass ?? ""
				],
				"vp-container": "",
				onTouchStart: X,
				onTouchEnd: Ye
			}, [
				O.value ? h$5(qa, { onToggleSidebar: () => c() }, l) : null,
				h$5(Transition, { name: "fade-in" }, () => p.value ? h$5("div", {
					class: "vp-sidebar-mask",
					onClick: () => c(!1)
				}) : null),
				h$5(Transition, { name: "fade-in" }, () => o.value ? null : h$5("div", {
					class: "toggle-sidebar-wrapper",
					onClick: () => h()
				}, h$5("span", { class: ["arrow", v.value ? "end" : "start"] }))),
				he ? null : h$5(Wa, null, l),
				l.default(),
				h$5($a)
			]));
		};
	}
});
var Ue = () => {
	const { frontmatter: e, themeLocale: l } = I();
	return {
		changelog: computed(() => e.value.changelog ?? ((l.value.changelog ?? !1) && !e.value.home)),
		contributors: computed(() => {
			const { contributors: o, home: r } = e.value;
			return g$2(o) ? r ? !1 : l.value.contributors ?? !0 : o ?? (r ? !1 : l.value.contributors ?? !0);
		}),
		lastUpdated: computed(() => e.value.lastUpdated ?? l.value.lastUpdated ?? !0)
	};
};
var Xa = /* @__PURE__ */ defineComponent({
	name: "MarkdownContent",
	props: { custom: Boolean },
	slots: Object,
	setup(e, { slots: l }) {
		const t = f$1(), { changelog: s, contributors: n } = Ue(), o = /* @__PURE__ */ ref(), r = useElementHover(o, {
			delayEnter: h$4(t.value.focus) ? t.value.focus : 1500,
			delayLeave: 0
		}), u = computed(() => !!(t.value.focus ?? t.value.pure) && r.value);
		return onMounted(() => {
			const p = document.documentElement;
			watchImmediate(u, (c) => {
				p.classList.toggle("is-focusing", c);
			});
		}), () => h$5("div", {
			class: { custom: e.custom },
			"vp-content": ""
		}, [
			l.contentBefore?.(),
			h$5(Content, {
				ref: o,
				id: "markdown-content"
			}),
			l.contentAfter?.(),
			s.value && we("GitChangelog") ? h$5(resolveComponent("GitChangelog")) : null,
			n.value === "content" && we("GitContributors") ? h$5(resolveComponent("GitContributors")) : null
		]);
	}
});
var Ja = ({ target: e }) => {
	const l = document.querySelector(e.hash);
	if (l) {
		const t = () => {
			l.removeAttribute("tabindex"), l.removeEventListener("blur", t);
		};
		l.setAttribute("tabindex", "-1"), l.addEventListener("blur", t), l.focus(), window.scrollTo(0, 0);
	}
};
var Za = /* @__PURE__ */ defineComponent({
	name: "SkipLink",
	props: { content: {
		type: String,
		default: "main-content"
	} },
	setup(e) {
		const l = v(), t = /* @__PURE__ */ shallowRef();
		return onContentUpdated(() => {
			t.value?.focus();
		}), () => [h$5("span", {
			ref: t,
			tabindex: "-1"
		}), h$5("a", {
			href: `#${e.content}`,
			class: "vp-skip-link sr-only",
			onClick: Ja
		}, l.value.routerLocales.skipToContent)];
	}
});
var me = () => h$5(s, { name: "slide-down" }, () => h$5("path", { d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z" }));
me.displayName = "SlideDownIcon";
var Ge = (e, { emit: l }) => h$5("button", {
	type: "button",
	class: "vp-hero-slide-down-button",
	onClick: () => {
		l("click");
	}
}, [h$5(me), h$5(me)]);
Ge.displayName = "HeroSlideDownButton";
var We = (e) => {
	e.style.transform = "translateY(0)", e.style.opacity = "1";
};
var Ka = /* @__PURE__ */ defineComponent({
	name: "DropTransition",
	props: {
		delay: {
			type: Number,
			default: 0
		},
		duration: {
			type: Number,
			default: .25
		},
		group: Boolean,
		appear: Boolean
	},
	slots: Object,
	setup(e, { slots: l }) {
		const t = (s) => {
			s.style.transition = `transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`, s.style.transform = "translateY(-20px)", s.style.opacity = "0";
		};
		return () => {
			const s = {
				name: "drop",
				appear: e.appear,
				onAppear: t,
				onAfterAppear: We,
				onEnter: t,
				onAfterEnter: We,
				onBeforeLeave: t
			};
			return e.group ? h$5(TransitionGroup, s, l.default) : h$5(Transition, s, l.default);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.103_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0__ff723f685cecb53adad4b6d162f6f6c3/node_modules/vuepress-theme-hope/lib/bundle/PageTitle-C4_2RsZX.js
var a = null, l$1 = null;
var r = {
	wait: () => a,
	pending: () => {
		a = new Promise((n) => {
			l$1 = n;
		});
	},
	resolve: () => {
		l$1?.(), a = null, l$1 = null;
	}
};
var P = /* @__PURE__ */ defineComponent({
	name: "MainFadeInUpTransition",
	slots: Object,
	setup(n, { slots: t }) {
		const o = u();
		return () => o.value ? h$5(X$1, t.default) : h$5(Transition, {
			name: "fade-in-up",
			mode: "out-in",
			onBeforeEnter: r.resolve,
			onBeforeLeave: r.pending
		}, t.default);
	}
}), h = /* @__PURE__ */ defineComponent({
	name: "PageTitle",
	setup() {
		const { frontmatter: n, page: t, themeLocale: o } = I(), { info: i, items: u } = p3();
		return () => h$5("div", { class: "vp-page-title" }, [
			h$5("h1", [o.value.titleIcon === !1 ? null : h$5(resolveComponent("VPIcon"), { icon: n.value.icon }), t.value.title]),
			h$5(A3, {
				info: i.value,
				items: u.value
			}),
			h$5("hr")
		]);
	}
}), l = (i = !0) => {
	let { lang: a, page: o } = useData(), s = r$7();
	return computed(() => {
		if (!toValue(i)) return null;
		let e = o.value.git?.updatedTime ?? o.value.git?.changelog?.[0].time;
		if (!e) return null;
		let t = new Date(e);
		return {
			date: t,
			text: new Intl.DateTimeFormat(a.value, {
				dateStyle: `short`,
				timeStyle: `short`
			}).format(e),
			iso: t.toISOString(),
			locale: s.value.latestUpdateAt
		};
	});
};
//#endregion
//#region node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.103_@vuepress+bundler-vite@2.0.0-rc.27_@types+node@25.5.0__ff723f685cecb53adad4b6d162f6f6c3/node_modules/vuepress-theme-hope/lib/bundle/NotFound-Ce5oVz89.js
var Se = (t, l) => {
	const r = t.replace(l, "/").split("/"), n = [];
	let o = removeEndingSlash(l);
	return r.forEach((a, i) => {
		i !== r.length - 1 ? (o += `${a}/`, n.push({
			link: o,
			name: a || "Home"
		})) : a !== "" && (o += a, n.push({
			link: o,
			name: a
		}));
	}), n;
};
var Te = /* @__PURE__ */ defineComponent({
	name: "BreadCrumb",
	setup() {
		const { frontmatter: t, page: l, routeLocale: r, routePath: n, themeLocale: o } = I(), a = /* @__PURE__ */ shallowRef([]), i = computed(() => (t.value.breadcrumb ?? o.value.breadcrumb ?? !0) && a.value.length > 1), d = computed(() => t.value.breadcrumbIcon ?? o.value.breadcrumbIcon ?? !0), s = () => {
			const u = Se(l.value.path, r.value).map(({ link: c, name: h }) => {
				const { path: p, meta: v, notFound: g } = resolveRoute(c);
				return g || v.breadcrumbExclude ? null : {
					title: v.shortTitle || v.title || h,
					icon: v.icon,
					path: p
				};
			}).filter((c) => c != null);
			u.length > 1 && (a.value = u);
		};
		return onMounted(() => {
			watchImmediate(n, s);
		}), () => h$5("nav", { class: ["vp-breadcrumb", { disable: !i.value }] }, i.value ? h$5("ol", {
			vocab: "https://schema.org/",
			typeof: "BreadcrumbList"
		}, a.value.map((u, c) => h$5("li", {
			class: { "is-active": a.value.length - 1 === c },
			property: "itemListElement",
			typeof: "ListItem"
		}, [h$5(RouteLink, {
			to: u.path,
			property: "item",
			typeof: "WebPage"
		}, () => [d.value ? h$5(resolveComponent("VPIcon"), { icon: u.icon }) : null, h$5("span", { property: "name" }, u.title || "Unknown")]), h$5("meta", {
			property: "position",
			content: c + 1
		})]))) : []);
	}
});
var X = (t, l) => t === !1 ? t : isPlainObject(t) ? {
	...t,
	link: ne(t.link, !0, l).link
} : isString$1(t) ? ne(t, !0, l) : null, V = (t, l, r) => {
	const n = t.findIndex((a) => a.link === l);
	if (n !== -1) {
		if (!t[n + r]) return null;
		const a = t[n + r];
		return a.link ? a : "prefix" in a && !resolveRoute(a.prefix).notFound ? {
			...a,
			link: a.prefix
		} : null;
	}
	for (const a of t) if ("children" in a) {
		const i = V(a.children, l, r);
		if (i) return i;
	}
	const o = t.findIndex((a) => "prefix" in a && a.prefix === l);
	if (o !== -1) {
		if (!t[o + r]) return null;
		const a = t[o + r];
		return a.link ? a : "prefix" in a && !resolveRoute(a.prefix).notFound ? {
			...a,
			link: a.prefix
		} : null;
	}
	return null;
}, Y = () => {
	const { frontmatter: t, routePath: l, themeLocale: r } = I(), n = se();
	return {
		prevLink: computed(() => {
			const i = X(t.value.prev, l.value);
			return i === !1 ? null : i ?? (r.value.prevLink === !1 ? null : V(n.value, l.value, -1));
		}),
		nextLink: computed(() => {
			const i = X(t.value.next, l.value);
			return i === !1 ? null : i ?? (r.value.nextLink === !1 ? null : V(n.value, l.value, 1));
		})
	};
};
var Ce = /* @__PURE__ */ defineComponent({
	name: "PageNav",
	setup() {
		const t = p(), l = T(), { prevLink: r, nextLink: n } = Y();
		return useEventListener("keydown", (o) => {
			if (o.altKey) switch (o.key) {
				case "ArrowRight":
					n.value && (l(n.value.link), o.preventDefault());
					break;
				case "ArrowLeft":
					r.value && (l(r.value.link), o.preventDefault());
					break;
			}
		}), () => r.value || n.value ? h$5("nav", { class: "vp-page-nav" }, [r.value ? h$5(f, {
			class: "prev",
			config: r.value
		}, () => [h$5("div", { class: "hint" }, [h$5("span", { class: "arrow start" }), t.value.prev]), h$5("div", { class: "link" }, [h$5(resolveComponent("VPIcon"), { icon: r.value?.icon }), r.value?.text])]) : null, n.value ? h$5(f, {
			class: "next",
			config: n.value
		}, () => [h$5("div", { class: "hint" }, [t.value.next, h$5("span", { class: "arrow end" })]), h$5("div", { class: "link" }, [n.value?.text, h$5(resolveComponent("VPIcon"), { icon: n.value?.icon })])]) : null]) : null;
	}
}), Z = /* @__PURE__ */ defineComponent({
	name: "PrintButton",
	setup() {
		const t = p(), l = f$1();
		return () => l.value.print === !1 ? null : h$5("button", {
			type: "button",
			class: "print-button",
			title: t.value.print,
			onClick: () => {
				window.print();
			}
		}, h$5(j));
	}
});
var ee = {
	selector: [...Array.from({ length: 6 }).map((t, l) => `#markdown-content > h${l + 1}`), "[vp-content] > h2"].join(", "),
	levels: "deep",
	ignore: [".vp-badge", ".vp-icon"]
};
var He = /* @__PURE__ */ defineComponent({
	name: "TOC",
	props: { items: Array },
	slots: Object,
	setup(t, { slots: l }) {
		const { frontmatter: r, themeLocale: n } = I(), o = computed(() => {
			const m = r.value.toc ?? n.value.toc;
			return isPlainObject(m) ? {
				...ee,
				...m
			} : m ?? !0 ? ee : void 0;
		}), a = ke(o), i = useRoute(), d = p(), [s, u] = useToggle(), c = /* @__PURE__ */ shallowRef(), h = /* @__PURE__ */ ref("-2rem"), p$6 = (m) => {
			c.value?.scrollTo({
				top: m,
				behavior: "smooth"
			});
		}, v = () => {
			if (c.value) {
				const m = document.querySelector(".vp-toc-item.active");
				m ? h.value = `${m.getBoundingClientRect().top - c.value.getBoundingClientRect().top + c.value.scrollTop}px` : h.value = "-2rem";
			} else h.value = "-2rem";
		};
		onMounted(() => {
			watchImmediate(() => i.hash, (m) => {
				if (c.value) {
					const w = document.querySelector(`#toc a.vp-toc-link[href$="${m}"]`);
					if (!w) return;
					const { top: y, height: D } = c.value.getBoundingClientRect(), { top: C, height: G } = w.getBoundingClientRect();
					C < y ? p$6(c.value.scrollTop + C - y) : C + G > y + D && p$6(c.value.scrollTop + C + G - y - D);
				}
			}, { flush: "post" }), watchImmediate(() => i.fullPath, v, { flush: "post" });
		});
		const g = ({ title: m, level: w, slug: y }) => h$5(RouteLink, {
			to: `#${y}`,
			class: ["vp-toc-link", `level${w}`],
			onClick: () => {
				u();
			}
		}, () => m), f = (m) => m.length > 0 ? h$5("ul", { class: "vp-toc-list" }, m.map((w) => {
			const y = f(w.children);
			return [h$5("li", { class: ["vp-toc-item", { active: i.hash === `#${w.slug}` }] }, g(w)), y ? h$5("li", y) : null];
		})) : null;
		return () => o.value || t.items?.length ? h$5(ClientOnly, () => {
			const m = t.items?.length ? f(t.items) : f(a.value), w = l.toc?.(a.value) ?? (m ? [h$5("div", {
				class: "vp-toc-header",
				onClick: () => {
					u();
				}
			}, [
				d.value.toc,
				h$5(Z),
				h$5("div", { class: ["arrow", s.value ? "down" : "end"] })
			]), h$5("div", {
				class: ["vp-toc-wrapper", s.value ? "open" : ""],
				ref: c
			}, [m, h$5("div", {
				class: "vp-toc-marker",
				style: { top: h.value }
			})])] : null), y = l.tocBefore?.(), D = l.tocAfter?.();
			return Ce$1(w) && Ce$1(y) && Ce$1(D) ? null : h$5("div", { class: "vp-toc-placeholder" }, [h$5("aside", {
				id: "toc",
				"vp-toc": ""
			}, [
				y,
				w,
				D
			])]);
		}) : null;
	}
});
var le = () => h$5(s, { name: "edit" }, () => [h$5("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h$5("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
le.displayName = "EditIcon";
var Be = {
	GitHub: ":repo/edit/:branch/:path",
	GitLab: ":repo/-/edit/:branch/:path",
	Gitee: ":repo/edit/:branch/:path",
	Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
}, Me = ({ docsRepo: t, docsBranch: l, docsDir: r, filePathRelative: n, editLinkPattern: o }) => {
	if (!n) return null;
	const a = g(t);
	let i = "";
	return o ? i = o : a != null && (i = Be[a]), i ? i.replace(/:repo/u, isLinkHttp(t) ? t : `https://github.com/${t}`).replace(/:branch/u, l).replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(r)}/${n}`)) : null;
}, Re = () => {
	const { frontmatter: t, page: l, themeLocale: r } = I(), n = p();
	return computed(() => {
		const { repo: o, docsRepo: a = o, docsBranch: i = "main", docsDir: d = "", editLink: s, editLinkPattern: u = "" } = r.value;
		if (!(t.value.editLink ?? s ?? !0) || !a) return null;
		const c = Me({
			docsRepo: a,
			docsBranch: i,
			docsDir: d,
			editLinkPattern: u,
			filePathRelative: l.value.filePathRelative
		});
		return c ? {
			text: n.value.editLink,
			link: c
		} : null;
	});
};
var Ae = /* @__PURE__ */ defineComponent({
	name: "PageMeta",
	setup() {
		const t = Ue(), l$8 = r$8(), r = Re(), n = l(t.lastUpdated), o = p();
		return () => h$5("footer", { class: "vp-page-meta" }, [r.value ? h$5("div", { class: "vp-meta-item edit-link" }, h$5(f, {
			class: "vp-meta-label",
			config: r.value
		}, { before: () => h$5(le) })) : null, h$5("div", { class: "vp-meta-item git-info" }, [(!t.changelog.value || !we("GitChangelog")) && n.value ? h$5("div", { class: "update-time" }, [h$5("span", { class: "vp-meta-label" }, `${n.value.locale}: `), h$5("time", {
			class: "vp-meta-info",
			datetime: n.value.iso,
			"data-allow-mismatch": ""
		}, n.value.text)]) : null, t.contributors.value && t.contributors.value !== "content" && l$8.value.length > 0 ? h$5("div", { class: "contributors" }, [h$5("span", { class: "vp-meta-label" }, `${o.value.contributors}: `), l$8.value.map(({ email: a, name: i }, d, s) => [h$5("span", {
			class: "vp-meta-info",
			title: `email: ${a}`
		}, i), d === s.length - 1 ? "" : ","])]) : null])]);
	}
}), ae = /* @__PURE__ */ defineComponent({
	name: "PageContent",
	slots: Object,
	setup(t, { slots: l }) {
		const { frontmatter: r } = I(), { isDarkMode: n } = E();
		return () => h$5("main", {
			id: "main-content",
			class: "vp-page"
		}, h$5(we("LocalEncrypt") ? resolveComponent("LocalEncrypt") : X$1, () => [
			l.pageTop?.(),
			r.value.cover ? h$5("div", { class: "page-cover" }, h$5("img", {
				src: withBase(r.value.cover),
				alt: "",
				"no-view": ""
			})) : null,
			h$5(Te),
			h$5(h),
			h$5(He, null, l),
			l.content?.() ?? h$5(Xa, null, l),
			h$5(Ae),
			h$5(Ce),
			we("CommentService") ? h$5(resolveComponent("CommentService"), { darkmode: n.value }) : null,
			l.pageBottom?.()
		]));
	}
});
var N = (t, { slots: l }) => {
	const { bgImage: r, bgImageDark: n, bgImageStyle: o, color: a, description: i, image: d, imageDark: s, header: u, features: c } = t;
	return h$5("div", { class: "vp-feature-wrapper" }, [
		r ? h$5("div", {
			class: ["vp-feature-bg", { light: n }],
			style: [{ "background-image": `url(${r})` }, o]
		}) : null,
		n ? h$5("div", {
			class: "vp-feature-bg dark",
			style: [{ "background-image": `url(${n})` }, o]
		}) : null,
		h$5("div", {
			class: "vp-feature",
			style: a ? { color: a } : {}
		}, [
			l.image?.(t) ?? [d ? h$5("img", {
				class: ["vp-feature-image", { light: s }],
				src: withBase(d),
				alt: ""
			}) : null, s ? h$5("img", {
				class: "vp-feature-image dark",
				src: withBase(s),
				alt: ""
			}) : null],
			l.info?.(t) ?? [u ? h$5("h2", { class: "vp-feature-header" }, u) : null, i ? h$5("div", {
				class: "vp-feature-description",
				innerHTML: i
			}) : null],
			c.length > 0 ? h$5("div", { class: "vp-features" }, c.map(({ icon: h, title: p, details: v, link: g }) => {
				const f = [h$5("h3", { class: "vp-feature-title" }, [h$5(resolveComponent("VPIcon"), { icon: h }), h$5("span", { innerHTML: p })]), h$5("div", {
					class: "vp-feature-details",
					innerHTML: v
				})];
				return g ? isLinkExternal(g) ? h$5("a", {
					class: "vp-feature-item link",
					href: g,
					"aria-label": p,
					target: "_blank"
				}, f) : h$5(RouteLink, {
					class: "vp-feature-item link",
					to: g,
					"aria-label": p
				}, () => f) : h$5("div", { class: "vp-feature-item" }, f);
			})) : null
		])
	]);
};
N.displayName = "FeaturePanel";
var Fe = /* @__PURE__ */ defineComponent({
	name: "HeroInfo",
	slots: Object,
	setup(t, { slots: l }) {
		const { frontmatter: r, siteLocale: n } = I(), o = computed(() => {
			const { heroText: s, tagline: u, heroStyle: c, heroFullScreen: h = !1 } = r.value;
			return {
				text: s ?? (n.value.title || "Hello"),
				tagline: u ?? n.value.description,
				style: c ?? null,
				isFullScreen: h
			};
		}), a = computed(() => {
			const { heroImage: s, heroImageDark: u, heroAlt: c, heroImageStyle: h } = r.value;
			return {
				image: s ? withBase(s) : null,
				imageDark: u ? withBase(u) : null,
				style: h ?? null,
				alt: c ?? ""
			};
		}), i = computed(() => {
			const { bgImage: s, bgImageDark: u, bgImageStyle: c } = r.value;
			return {
				image: isString$1(s) ? withBase(s) : null,
				imageDark: isString$1(u) ? withBase(u) : null,
				style: c ?? null
			};
		}), d = computed(() => r.value.actions ?? []);
		return () => h$5("header", {
			class: ["vp-hero-info-wrapper", { "hero-fullscreen": o.value.isFullScreen }],
			style: o.value.style
		}, [
			l.heroBg?.(i.value) ?? [i.value.image ? h$5("div", {
				class: ["vp-hero-mask", { light: i.value.imageDark }],
				style: [{ "background-image": `url(${i.value.image})` }, i.value.style]
			}) : null, i.value.imageDark ? h$5("div", {
				class: "vp-hero-mask dark",
				style: [{ "background-image": `url(${i.value.imageDark})` }, i.value.style]
			}) : null],
			h$5("div", { class: "vp-hero-info" }, [l.heroLogo?.(a.value) ?? h$5(Ka, {
				appear: !0,
				group: !0
			}, () => {
				const { image: s, imageDark: u, style: c, alt: h } = a.value;
				return [s ? h$5("img", {
					key: "light",
					class: ["vp-hero-image", { light: u }],
					style: c,
					src: s,
					alt: h
				}) : null, u ? h$5("img", {
					key: "dark",
					class: "vp-hero-image dark",
					style: c,
					src: u,
					alt: h
				}) : null];
			}), l.heroInfo?.(o.value) ?? h$5("div", { class: "vp-hero-infos" }, [
				o.value.text ? h$5(Ka, {
					appear: !0,
					delay: .04
				}, () => h$5("h1", {
					id: "main-title",
					class: "vp-hero-title"
				}, o.value.text)) : null,
				o.value.tagline ? h$5(Ka, {
					appear: !0,
					delay: .08
				}, () => h$5("div", {
					id: "main-description",
					innerHTML: o.value.tagline
				})) : null,
				d.value.length > 0 ? h$5(Ka, {
					appear: !0,
					delay: .12
				}, () => h$5("p", { class: "vp-hero-actions" }, d.value.map((s) => h$5(f, {
					class: [
						"vp-hero-action",
						s.type ?? "default",
						"no-external-link-icon"
					],
					config: s
				})))) : null
			])]),
			o.value.isFullScreen ? h$5(Ge, { onClick: () => {
				window.scrollTo({
					top: window.innerHeight - (document.querySelector("[vp-navbar]")?.clientHeight ?? 0),
					behavior: "smooth"
				});
			} }) : null
		]);
	}
});
var te = (t, { slots: l }) => {
	const { bgImage: r, bgImageDark: n, bgImageStyle: o, color: a, description: i, image: d, imageDark: s, header: u, highlights: c = [], type: h = "un-order" } = t;
	return h$5("div", {
		class: "vp-highlight-wrapper",
		style: a ? { color: a } : {}
	}, [
		r ? h$5("div", {
			class: ["vp-highlight-bg", { light: n }],
			style: [{ "background-image": `url(${r})` }, o]
		}) : null,
		n ? h$5("div", {
			class: "vp-highlight-bg dark",
			style: [{ "background-image": `url(${n})` }, o]
		}) : null,
		h$5("div", { class: "vp-highlight" }, [l.image?.(t) ?? [d ? h$5("img", {
			class: ["vp-highlight-image", { light: s }],
			src: withBase(d),
			alt: ""
		}) : null, s ? h$5("img", {
			class: "vp-highlight-image dark",
			src: withBase(s),
			alt: ""
		}) : null], l.info?.(t) ?? [h$5("div", { class: "vp-highlight-info-wrapper" }, h$5("div", { class: "vp-highlight-info" }, [
			u ? h$5("h2", {
				class: "vp-highlight-header",
				innerHTML: u
			}) : null,
			i ? h$5("div", {
				class: "vp-highlight-description",
				innerHTML: i
			}) : null,
			l.highlights?.(c) ?? h$5(h === "order" ? "ol" : h === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, c.map(({ icon: p, title: v, details: g, link: f }) => {
				const m = [h$5(h === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [p ? h$5(resolveComponent("VPIcon"), {
					class: "vp-highlight-icon",
					icon: p
				}) : null, h$5("span", { innerHTML: v })]), g ? h$5(h === "no-order" ? "dd" : "div", {
					class: "vp-highlight-details",
					innerHTML: g
				}) : null];
				return h$5(h === "no-order" ? "div" : "li", { class: ["vp-highlight-item-wrapper", { link: f }] }, f ? isLinkExternal(f) ? h$5("a", {
					class: "vp-highlight-item link",
					href: f,
					"aria-label": v,
					target: "_blank"
				}, m) : h$5(RouteLink, {
					class: "vp-highlight-item link",
					to: f,
					"aria-label": v
				}, () => m) : h$5("div", { class: "vp-highlight-item" }, m));
			}))
		]))]])
	]);
};
te.displayName = "HighlightSection";
var je = /* @__PURE__ */ defineComponent({
	name: "HomePage",
	slots: Object,
	setup(t, { slots: l }) {
		const r = useFrontmatter();
		return () => {
			const { features: n, highlights: o } = r.value;
			return h$5("main", {
				id: "main-content",
				class: "vp-page vp-project-home",
				"aria-labelledby": r.value.heroText === "" ? "" : "main-title"
			}, [
				l.heroBefore?.(),
				h$5(Fe, null, l),
				l.heroAfter?.(),
				g$2(o) ? o.map((a) => "features" in a ? h$5(N, a) : h$5(te, a)) : g$2(n) ? h$5(Ka, {
					appear: !0,
					delay: .24
				}, () => h$5(N, { features: n })) : null,
				l.content?.() ?? h$5(Ka, {
					appear: !0,
					delay: .32
				}, () => h$5(Xa, null, l))
			]);
		};
	}
}), Ee = /* @__PURE__ */ defineComponent({
	name: "PortfolioHero",
	slots: Object,
	setup(t, { slots: l }) {
		const r = V$1(), n = useFrontmatter(), o = /* @__PURE__ */ ref(0), a = computed(() => n.value.titles?.[o.value] ?? ""), i = /* @__PURE__ */ ref(""), d = computed(() => {
			const { name: p, avatar: v, avatarDark: g, avatarAlt: f, avatarStyle: m } = n.value;
			return {
				name: p ?? r.value.name,
				avatar: v ? withBase(v) : null,
				avatarDark: g ? withBase(g) : null,
				alt: (f || p) ?? "",
				style: m ?? null
			};
		}), s = computed(() => {
			const { bgImage: p, bgImageDark: v, bgImageStyle: g } = n.value;
			return {
				image: isString$1(p) ? withBase(p) : null,
				imageDark: isString$1(v) ? withBase(v) : null,
				style: g ?? null
			};
		}), u = computed(() => {
			const { welcome: p, name: v, titles: g = [], medias: f } = n.value;
			return {
				name: v ?? r.value.name,
				welcome: p ?? "👋 Hi There, I'm",
				title: i.value,
				titles: g,
				medias: f ?? null
			};
		}), c = () => {
			i.value = "";
			let p = 0, v = !1;
			const g = async () => {
				if (!v) if (i.value += a.value[p], p += 1, await nextTick(), p < a.value.length) setTimeout(() => {
					g();
				}, 150);
				else {
					const { length: f } = u.value.titles;
					setTimeout(() => {
						o.value = f <= 1 || o.value === u.value.titles.length - 1 ? 0 : o.value + 1;
					}, 1e3);
				}
			};
			return g(), () => {
				v = !0;
			};
		};
		let h;
		return onMounted(() => {
			watchImmediate(a, () => {
				h?.(), h = c();
			});
		}), () => h$5("section", {
			id: "portfolio",
			class: ["vp-portfolio", { bg: s.value.image }]
		}, [
			l.portfolioBg?.(s.value) ?? [s.value.image ? h$5("div", {
				class: ["vp-portfolio-mask", { light: s.value.imageDark }],
				style: [{ background: `url(${s.value.image}) center/cover no-repeat` }, s.value.style]
			}) : null, s.value.imageDark ? h$5("div", {
				class: "vp-portfolio-mask dark",
				style: [{ background: `url(${s.value.imageDark}) center/cover no-repeat` }, s.value.style]
			}) : null],
			l.portfolioAvatar?.(d.value) ?? h$5("div", { class: "vp-portfolio-avatar" }, [h$5(Ka, { delay: .04 }, () => {
				const { avatar: p, avatarDark: v, name: g, alt: f, style: m } = d.value;
				return [p ? h$5("img", {
					key: "light",
					class: { light: v },
					src: p,
					title: g,
					alt: f,
					style: m
				}) : null, v ? h$5("img", {
					key: "dark",
					class: "dark",
					src: v,
					title: i,
					alt: f,
					style: m
				}) : null];
			})]),
			h$5("div", { class: "vp-portfolio-container" }, l.portfolioInfo?.(u.value) ?? h$5("div", { class: "vp-portfolio-info" }, [
				h$5(Ka, {
					appear: !0,
					delay: .08
				}, () => h$5("h6", { class: "vp-portfolio-welcome" }, u.value.welcome)),
				h$5(Ka, {
					appear: !0,
					delay: .12
				}, () => h$5("h1", {
					class: "vp-portfolio-name",
					id: "main-title"
				}, u.value.name)),
				h$5(Ka, {
					appear: !0,
					delay: .16
				}, () => h$5("h2", { class: "vp-portfolio-title" }, i.value)),
				h$5(Ka, {
					appear: !0,
					delay: .2
				}, () => u.value.medias ? h$5("div", { class: "vp-portfolio-medias" }, u.value.medias.map(({ name: p, url: v, icon: g }) => h$5("a", {
					class: "vp-portfolio-media",
					href: v,
					rel: "noopener noreferrer",
					target: "_blank",
					title: p
				}, h$5(resolveComponent("VPIcon"), {
					icon: g,
					sizing: "both"
				})))) : we("SocialMedias") ? h$5(resolveComponent("SocialMedias")) : null)
			]))
		]);
	}
}), Oe = /* @__PURE__ */ defineComponent({
	name: "PortfolioHome",
	slots: Object,
	setup(t, { slots: l }) {
		const r = useFrontmatter();
		return () => {
			const n = r.value.content ?? "portfolio";
			return h$5("main", {
				id: "main-content",
				class: "vp-page vp-portfolio-home",
				"aria-labelledby": "main-title"
			}, [h$5(Ee, null, l), n === "none" ? null : l.content?.() ?? h$5("div", h$5(Ka, {
				appear: !0,
				delay: .24
			}, () => h$5(Xa, { class: { "vp-portfolio-content": n === "portfolio" } }, l)))]);
		};
	}
}), Ve = /* @__PURE__ */ defineComponent({
	name: "Layout",
	slots: Object,
	setup(t, { slots: l }) {
		const { frontmatter: r, page: n } = I();
		return () => [h$5(Za), h$5(Ya, null, {
			...l,
			default: l.default ?? (() => r.value.portfolio ? h$5(Oe, null, l) : r.value.home ? h$5(je, null, l) : h$5(P, () => h$5(ae, { key: n.value.path }, l))),
			navScreenBottom: l.navScreenBottom ?? (we("BloggerInfo") ? () => h$5(resolveComponent("BloggerInfo")) : null)
		})];
	}
}), Ne = /* @__PURE__ */ defineComponent({
	name: "NotFound",
	slots: Object,
	setup(t, { slots: l }) {
		const { routeLocale: r, theme: n, themeLocale: o } = I(), a = useRouter(), i = /* @__PURE__ */ ref(!1), d = computed(() => n.value.locales[i.value ? r.value : "/"].routerLocales), s = () => {
			if (!i.value) return d.value.notFoundMsg[0];
			const u = d.value.notFoundMsg;
			return u[Math.floor(Math.random() * u.length)];
		};
		return onMounted(() => {
			i.value = !0;
		}), () => [h$5(Za), h$5(Ya, { noSidebar: !0 }, {
			...l,
			default: () => h$5("main", {
				id: "main-content",
				class: "vp-page not-found"
			}, l.default?.() ?? [h$5("div", { class: "not-found-hint" }, [
				h$5("p", { class: "error-code" }, "404"),
				h$5("h1", { class: "error-title" }, d.value.notFoundTitle),
				h$5("p", { class: "error-hint" }, s())
			]), h$5("div", { class: "actions" }, [h$5("button", {
				type: "button",
				class: "action-button",
				onClick: () => {
					window.history.go(-1);
				}
			}, d.value.back), h$5("button", {
				type: "button",
				class: "action-button",
				onClick: () => {
					a.push(o.value.home ?? r.value);
				}
			}, d.value.home)])])
		})];
	}
});
//#endregion
//#region docs/.vuepress/.temp/theme-hope/config.js
var config_exports = /* @__PURE__ */ __exportAll({ default: () => config_default });
i$2((meta) => {
	const title = meta.title;
	const shouldIndex = meta.index ?? true;
	const icon = meta.icon;
	return shouldIndex ? {
		title,
		content: icon ? () => [h$5(resolveComponent("VPIcon"), {
			icon,
			sizing: "both"
		}), title] : null,
		order: meta.order,
		index: meta.index
	} : null;
});
var config_default = {
	enhance: ({ app, router }) => {
		const { scrollBehavior } = router.options;
		router.options.scrollBehavior = async (...args) => {
			await r.wait();
			return scrollBehavior(...args);
		};
		La(app);
	},
	setup: () => {
		Sa();
		Ca();
	},
	layouts: {
		Layout: Ve,
		NotFound: Ne
	}
};
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region docs/.vuepress/components/RightActionBar.vue
var _sfc_main = {
	__name: "RightActionBar",
	setup(__props, { expose: __expose }) {
		__expose();
		const isDark = /* @__PURE__ */ ref(false);
		const tocVisible = /* @__PURE__ */ ref(false);
		const sidebarHidden = /* @__PURE__ */ ref(false);
		onMounted(() => {
			isDark.value = document.documentElement.getAttribute("data-theme") === "dark";
		});
		function toggleDark() {
			isDark.value = !isDark.value;
			document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
			localStorage.setItem("vuepress-theme-hope-scheme", isDark.value ? "dark" : "light");
		}
		function toggleToc() {
			tocVisible.value = !tocVisible.value;
			document.body.classList.toggle("rab-hide-toc", !tocVisible.value);
		}
		function toggleSidebar() {
			sidebarHidden.value = !sidebarHidden.value;
			document.body.classList.toggle("rab-hide-sidebar", sidebarHidden.value);
		}
		function scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
		const __returned__ = {
			isDark,
			tocVisible,
			sidebarHidden,
			toggleDark,
			toggleToc,
			toggleSidebar,
			scrollToTop,
			ref,
			onMounted
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
};
var _hoisted_1 = { class: "rab-wrap" };
var _hoisted_2 = { class: "rab-bar" };
var _hoisted_3 = {
	class: "rab-icon",
	style: {
		"background": "#edf2ff",
		"color": "#6366f1"
	}
};
var _hoisted_4 = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2.2",
	"stroke-linecap": "round"
};
var _hoisted_5 = {
	key: 0,
	viewBox: "0 0 24 24",
	fill: "currentColor"
};
var _hoisted_6 = {
	key: 1,
	viewBox: "0 0 24 24",
	fill: "currentColor"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ClientOnly = resolveComponent("ClientOnly");
	return openBlock(), createBlock(_component_ClientOnly, null, {
		default: withCtx(() => [(openBlock(), createBlock(Teleport, { to: "body" }, [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
			createBaseVNode("div", {
				class: normalizeClass(["rab-item", { active: $setup.tocVisible }]),
				onClick: $setup.toggleToc,
				title: "文章目录"
			}, [..._cache[0] || (_cache[0] = [createBaseVNode("div", {
				class: "rab-icon",
				style: {
					"background": "#e8f4fd",
					"color": "#3b82f6"
				}
			}, [createBaseVNode("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2.2",
				"stroke-linecap": "round"
			}, [
				createBaseVNode("line", {
					x1: "3",
					y1: "6",
					x2: "21",
					y2: "6"
				}),
				createBaseVNode("line", {
					x1: "3",
					y1: "12",
					x2: "16",
					y2: "12"
				}),
				createBaseVNode("line", {
					x1: "3",
					y1: "18",
					x2: "19",
					y2: "18"
				})
			])], -1), createBaseVNode("span", null, "目录", -1)])], 2),
			createBaseVNode("div", {
				class: normalizeClass(["rab-item", { active: $setup.sidebarHidden }]),
				onClick: $setup.toggleSidebar,
				title: "切换侧边栏"
			}, [createBaseVNode("div", _hoisted_3, [(openBlock(), createElementBlock("svg", _hoisted_4, [!$setup.sidebarHidden ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_cache[1] || (_cache[1] = createBaseVNode("polyline", { points: "15 18 9 12 15 6" }, null, -1)), _cache[2] || (_cache[2] = createBaseVNode("polyline", { points: "11 18 5 12 11 6" }, null, -1))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [_cache[3] || (_cache[3] = createBaseVNode("polyline", { points: "9 18 15 12 9 6" }, null, -1)), _cache[4] || (_cache[4] = createBaseVNode("polyline", { points: "13 18 19 12 13 6" }, null, -1))], 64))]))]), _cache[5] || (_cache[5] = createBaseVNode("span", null, "侧边栏", -1))], 2),
			_cache[9] || (_cache[9] = createBaseVNode("div", { class: "rab-divider" }, null, -1)),
			createBaseVNode("div", {
				class: "rab-item",
				onClick: $setup.toggleDark,
				title: "夜间模式"
			}, [createBaseVNode("div", {
				class: "rab-icon",
				style: normalizeStyle($setup.isDark ? "background:#1e1b4b;color:#a5b4fc" : "background:#fef3c7;color:#f59e0b")
			}, [!$setup.isDark ? (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[6] || (_cache[6] = [createBaseVNode("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)])])) : (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[7] || (_cache[7] = [createBaseVNode("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}, null, -1), createBaseVNode("path", { d: "M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" }, null, -1)])]))], 4), createBaseVNode("span", null, toDisplayString($setup.isDark ? "日间" : "夜间"), 1)]),
			_cache[10] || (_cache[10] = createBaseVNode("div", { class: "rab-divider" }, null, -1)),
			_cache[11] || (_cache[11] = createBaseVNode("div", {
				class: "rab-item rab-qr-host",
				title: "关注公众号"
			}, [
				createBaseVNode("div", {
					class: "rab-icon",
					style: {
						"background": "#e6f9f0",
						"color": "#07c160"
					}
				}, [createBaseVNode("svg", {
					viewBox: "0 0 24 24",
					fill: "currentColor"
				}, [createBaseVNode("path", { d: "M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.47-1.32A8.7 8.7 0 0 0 9.5 16c.17 0 .34 0 .5-.01A5.52 5.52 0 0 1 9.5 14c0-3.04 2.69-5.5 6-5.5.18 0 .35.01.52.02C15.29 6.13 12.65 4 9.5 4zm8.5 6.5c-2.76 0-5 1.79-5 4s2.24 4 5 4c.62 0 1.22-.1 1.77-.28L22 19.5l-.63-2.11A3.67 3.67 0 0 0 23 14.5c0-2.21-2.24-4-5-4z" })])]),
				createBaseVNode("span", null, "公众号"),
				createBaseVNode("div", { class: "rab-qr-popup" }, [
					createBaseVNode("img", {
						src: "/pics/gzh.jpg",
						alt: "公众号"
					}),
					createBaseVNode("p", null, "扫码关注"),
					createBaseVNode("strong", null, "Linux兵工厂")
				])
			], -1)),
			_cache[12] || (_cache[12] = createBaseVNode("a", {
				class: "rab-item",
				href: "https://github.com",
				target: "_blank",
				rel: "noopener",
				title: "GitHub"
			}, [createBaseVNode("div", {
				class: "rab-icon",
				style: {
					"background": "#f0f0f0",
					"color": "#24292e"
				}
			}, [createBaseVNode("svg", {
				viewBox: "0 0 24 24",
				fill: "currentColor"
			}, [createBaseVNode("path", { d: "M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.04c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56C20.21 21.41 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z" })])]), createBaseVNode("span", null, "GitHub")], -1)),
			createBaseVNode("div", {
				class: "rab-item",
				onClick: $setup.scrollToTop,
				title: "返回顶部"
			}, [..._cache[8] || (_cache[8] = [createBaseVNode("div", {
				class: "rab-icon",
				style: {
					"background": "#fff0f0",
					"color": "#ef4444"
				}
			}, [createBaseVNode("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, [createBaseVNode("polyline", { points: "18 15 12 9 6 15" })])], -1), createBaseVNode("span", null, "顶部", -1)])])
		])])]))]),
		_: 1
	});
}
var RightActionBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [
	["render", _sfc_render],
	["__scopeId", "data-v-c47bd5d2"],
	["__file", "RightActionBar.vue"]
]);
//#endregion
//#region docs/.vuepress/client.ts
var client_exports = /* @__PURE__ */ __exportAll({ default: () => client_default });
var client_default = defineClientConfig({ rootComponents: [RightActionBar_default] });
//#endregion
//#region docs/.vuepress/.temp/internal/clientConfigs.js
var clientConfigs = [
	config_exports$14,
	import_config,
	import_load_hope,
	config_exports$13,
	import_config$1,
	config_exports$12,
	config_exports$11,
	import_client,
	import_config$2,
	config_exports$10,
	config_exports$9,
	config_exports$8,
	config_exports$7,
	config_exports$6,
	config_exports$5,
	config_exports$4,
	config_exports$3,
	config_exports$2,
	config_exports$1,
	config_exports,
	client_exports
].map((m) => m.default).filter(Boolean);
//#endregion
//#region node_modules/.pnpm/@vuepress+client@2.0.0-rc.26/node_modules/@vuepress/client/dist/app.js
var siteData = /* @__PURE__ */ shallowRef(JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"LinuxArsenal\",\"description\":\"Linux 技术分享\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/pics/logo.png\"}]],\"locales\":{}}"));
var historyCreator = createWebHistory;
var createVueRouter = () => {
	const router = createRouter({
		history: historyCreator(removeEndingSlash("/")),
		routes: [{
			name: "vuepress-route",
			path: "/:catchAll(.*)",
			components: {}
		}],
		scrollBehavior: (to, _from, savedPosition) => {
			if (savedPosition) return savedPosition;
			if (to.hash) return { el: to.hash };
			return { top: 0 };
		}
	});
	router.beforeResolve(async (to, from) => {
		if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
			const route = resolveRoute(to.fullPath);
			if (route.path !== to.fullPath) return route.path;
			const pageChunk = await route.loader();
			to.meta = {
				...route.meta,
				_pageChunk: pageChunk
			};
		} else if (to.path === from.path) to.meta = from.meta;
	});
	return router;
};
var setupGlobalComponents = (app) => {
	app.component("ClientOnly", ClientOnly);
	app.component("Content", Content);
	app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
	const routePath = computed(() => router.currentRoute.value.path);
	const pageChunk = customRef((track, trigger) => ({
		get() {
			track();
			return router.currentRoute.value.meta._pageChunk;
		},
		set(value) {
			router.currentRoute.value.meta._pageChunk = value;
			trigger();
		}
	}));
	const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
	const routeLocale = computed(() => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value));
	const siteLocaleData = computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
	const pageComponent = computed(() => pageChunk.value.comp);
	const pageData = computed(() => pageChunk.value.data);
	const pageFrontmatter = computed(() => pageData.value.frontmatter);
	const pageHeadTitle = computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
	const pageHead = computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
	const pageLang = computed(() => resolvers.resolvePageLang(pageData.value, siteLocaleData.value));
	const clientData = {
		layouts,
		pageData,
		pageComponent,
		pageFrontmatter,
		pageHead,
		pageHeadTitle,
		pageLang,
		pageLayout: computed(() => resolvers.resolvePageLayout(pageData.value, layouts.value)),
		redirects,
		routeLocale,
		routePath,
		routes,
		siteData,
		siteLocaleData,
		frontmatter: pageFrontmatter,
		head: pageHead,
		headTitle: pageHeadTitle,
		lang: pageLang,
		page: pageData,
		site: siteData,
		siteLocale: siteLocaleData
	};
	app.provide(clientDataSymbol, clientData);
	Object.defineProperties(app.config.globalProperties, {
		$pageFrontmatter: { get: () => pageFrontmatter.value },
		$pageHead: { get: () => pageHead.value },
		$pageHeadTitle: { get: () => pageHeadTitle.value },
		$pageLang: { get: () => pageLang.value },
		$pageData: { get: () => pageData.value },
		$routeLocale: { get: () => routeLocale.value },
		$withBase: { get: () => withBase },
		$frontmatter: { get: () => pageFrontmatter.value },
		$head: { get: () => pageHead.value },
		$headTitle: { get: () => pageHeadTitle.value },
		$lang: { get: () => pageLang.value },
		$page: { get: () => pageData.value },
		$site: { get: () => siteData.value },
		$siteLocale: { get: () => siteLocaleData.value }
	});
	return clientData;
};
var queryHeadElement = ([tagName, attrs, content = ""]) => {
	const selector = `head > ${tagName}${Object.entries(attrs).map(([key, value]) => {
		if (isString$1(value)) return `[${key}=${JSON.stringify(value)}]`;
		if (value) return `[${key}]`;
		return "";
	}).join("")}`;
	return Array.from(document.querySelectorAll(selector)).find((item) => item.innerText === content) ?? null;
};
var createHeadElement = ([tagName, attrs, content]) => {
	if (!isString$1(tagName)) return null;
	const headElement = document.createElement(tagName);
	if (isPlainObject(attrs)) Object.entries(attrs).forEach(([key, value]) => {
		if (isString$1(value)) headElement.setAttribute(key, value);
		else if (value) headElement.setAttribute(key, "");
	});
	if (isString$1(content)) headElement.appendChild(document.createTextNode(content));
	return headElement;
};
var setupUpdateHead = () => {
	const head = usePageHead();
	const lang = usePageLang();
	let managedHeadElements = [];
	const takeOverHeadElements = () => {
		head.value.forEach((item) => {
			const headElement = queryHeadElement(item);
			if (headElement) managedHeadElements.push(headElement);
		});
	};
	const generateHeadElements = () => {
		const result = [];
		head.value.forEach((item) => {
			const headElement = createHeadElement(item);
			if (headElement) result.push(headElement);
		});
		return result;
	};
	const updateHead = () => {
		document.documentElement.lang = lang.value;
		const newHeadElements = generateHeadElements();
		managedHeadElements.forEach((oldEl, oldIndex) => {
			const matchedIndex = newHeadElements.findIndex((newEl) => oldEl.isEqualNode(newEl));
			if (matchedIndex === -1) {
				oldEl.remove();
				delete managedHeadElements[oldIndex];
			} else newHeadElements.splice(matchedIndex, 1);
		});
		newHeadElements.forEach((el) => document.head.appendChild(el));
		managedHeadElements = [...managedHeadElements.filter((item) => !!item), ...newHeadElements];
	};
	provide(updateHeadSymbol, updateHead);
	onMounted(() => {
		takeOverHeadElements();
		watch(head, updateHead, { immediate: false });
	});
};
var appCreator = createSSRApp;
var createVueApp = async () => {
	const app = appCreator({
		name: "Vuepress",
		setup() {
			setupUpdateHead();
			for (const clientConfig of clientConfigs) clientConfig.setup?.();
			const clientRootComponents = clientConfigs.flatMap(({ rootComponents = [] }) => rootComponents.map((component) => h$5(component)));
			const pageLayout = usePageLayout();
			return () => [h$5(pageLayout.value), clientRootComponents];
		}
	});
	const router = createVueRouter();
	setupGlobalComponents(app);
	const globalComputed = setupGlobalComputed(app, router, clientConfigs);
	{
		const { setupDevtools } = await __vitePreload(async () => {
			const { setupDevtools } = await import("./setupDevtools-QXEOFQJV-CfTDXPxI.js");
			return { setupDevtools };
		}, []);
		setupDevtools(app, globalComputed);
	}
	for (const clientConfig of clientConfigs) await clientConfig.enhance?.({
		app,
		router,
		siteData
	});
	app.use(router);
	return {
		app,
		router
	};
};
createVueApp().then(({ app, router }) => {
	router.isReady().then(() => {
		app.mount("#app");
	});
});
//#endregion
export { watch as _, INSPECTOR_LABEL as a, PLUGIN_ID as c, createVueApp, createElementBlock as d, createStaticVNode as f, resolveComponent as g, openBlock as h, INSPECTOR_ID as i, PLUGIN_LABEL as l, createVNode as m, setupDevToolsPlugin as n, INSPECTOR_NODES as o, createTextVNode as p, COMPONENT_STATE_TYPE as r, INSPECTOR_STATE_SECTION_NAME as s, _plugin_vue_export_helper_default as t, createBaseVNode as u, withCtx as v };
