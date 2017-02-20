/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	Vue.component('navbar',__webpack_require__(1));
	Vue.component('modal_for_login',__webpack_require__(12));
	Vue.component('modal_for_register',__webpack_require__(17));
	Vue.component('modal_for_change_password',__webpack_require__(22));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)
	__webpack_require__(7)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(10),
	  /* template */
	  __webpack_require__(11),
	  /* scopeId */
	  "data-v-77d2480d",
	  /* cssModules */
	  null
	)
	Component.options.__file = "I:\\落尘科技工作室\\网站和域名\\luoc.co\\navbar\\src\\components\\navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-77d2480d", Component.options)
	  } else {
	    hotAPI.reload("data-v-77d2480d", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("12c12ab4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-77d2480d\",\"scoped\":false,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-77d2480d\",\"scoped\":false,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.push([module.id, "@import url(//at.alicdn.com/t/font_1469889758_9089751.css);", ""]);

	// module
	exports.push([module.id, "\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("3750c738", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-77d2480d\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./navbar.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-77d2480d\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./navbar.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.navbar[data-v-77d2480d]\n{\n    font-family:微软雅黑,\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n}\n#logout[data-v-77d2480d]\n{\n    color:#ff1216;\n}\n#logout[data-v-77d2480d]:hover\n{\n    color:orangered;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        name:'navbar',
	        data: function ()
	        {
	            return {
	                online:false,
	                username:'未登录'
	            };
	        },
	        methods:
	        {
	            logout:window.luoc.navbar.logout
	        },
	        mounted:function()
	        {
	            var self=this;
	            document.body.addEventListener('navbar:login:ok',function(e)
	            {
	                console.log(e);
	                $('#modal_for_login').modal('hide');
	                self.username=e.message.email;
	                self.online=true;
	            });
	            document.body.addEventListener('navbar:login:error',function(e)
	            {
	                alert(e.message.message);
	                console.log('登录错误');
	                console.log(e);
	            });
	            document.body.addEventListener('navbar:login:args_not_valid',function(e)
	            {
	                console.log('登录参数检查失败');
	                console.log(e);
	            });
	            document.body.addEventListener('navbar:logout',function(e)
	            {
	                setTimeout(function()
	                {
	                    self.online=false;
	                    self.username='未登录'
	                },0);
	                // TODO : 解决点击穿透的问题
	            });
	        }
	    }


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('nav', {
	    staticClass: "navbar navbar-inverse"
	  }, [_c('div', {
	    staticClass: "container-fluid"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "collapse navbar-collapse"
	  }, [_c('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [(!_vm.online) ? _c('li', [_c('a', {
	    attrs: {
	      "href": "#modal_for_login",
	      "data-toggle": "modal",
	      "id": "login"
	    }
	  }, [_vm._v("登录")])]) : _vm._e(), _vm._v(" "), (!_vm.online) ? _c('li', [_c('a', {
	    attrs: {
	      "href": "#modal_for_register",
	      "data-toggle": "modal",
	      "id": "register"
	    }
	  }, [_vm._v("注册")])]) : _vm._e(), _vm._v(" "), (_vm.online) ? _c('li', [_c('a', {
	    attrs: {
	      "href": "//luoc.co/user",
	      "target": "_blank"
	    }
	  }, [_c('span', {
	    attrs: {
	      "id": "username"
	    }
	  }, [_vm._v(_vm._s(_vm.username))])])]) : _vm._e(), _vm._v(" "), (_vm.online) ? _c('li', [_c('a', {
	    attrs: {
	      "id": "logout",
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        _vm.logout()
	      }
	    }
	  }, [_vm._v("注销")])]) : _vm._e()])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "navbar-header"
	  }, [_c('button', {
	    staticClass: "navbar-toggle collapsed",
	    attrs: {
	      "type": "button",
	      "data-toggle": "collapse",
	      "data-target": "#domain_bar"
	    }
	  }, [_c('span', {
	    staticClass: "icon-bar"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "navbar-brand",
	    attrs: {
	      "href": "//luoc.co"
	    }
	  }, [_c('span', {
	    staticStyle: {
	      "color": "#e14d43"
	    }
	  }, [_vm._v("落尘科技")]), _c('br')])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-77d2480d", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(13)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(15),
	  /* template */
	  __webpack_require__(16),
	  /* scopeId */
	  "data-v-4ccd0098",
	  /* cssModules */
	  null
	)
	Component.options.__file = "I:\\落尘科技工作室\\网站和域名\\luoc.co\\navbar\\src\\components\\modal_for_login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] modal_for_login.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4ccd0098", Component.options)
	  } else {
	    hotAPI.reload("data-v-4ccd0098", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("05a4e9c9", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4ccd0098\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal_for_login.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4ccd0098\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal_for_login.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.modal[data-v-4ccd0098]\n{\n    font-family:微软雅黑,\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n}\n.login-oauth-wrapper img[data-v-4ccd0098]\n{\n    width:40px;\n    height:40px;\n    border-radius:10px;\n}\n.float-right[data-v-4ccd0098]\n{\n    float:right;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function ()
	        {
	            return {};
	        },
	        components: {},
	        methods:
	            {
	                close_this_modal:function()
	                {
	                    $("#modal_for_login").modal('toggle');
	                },
	                start:function start(e)
	                {
	                    console.log(e);
	                    console.log('[ navbar ] 开始登录 ');
	                    window.luoc.navbar.login
	                    (
	                        {
	                            account:$("#login_account").val(),
	                            password:$("#login_password").val()
	                        }
	                    )
	                }
	            },
	        mounted:function()
	        {

	        }
	    }
	;



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "modal fade navbar-modal",
	    attrs: {
	      "id": "modal_for_login"
	    }
	  }, [_c('div', {
	    staticClass: "modal-dialog"
	  }, [_c('div', {
	    staticClass: "modal-content"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "modal-body"
	  }, [_c('form', {
	    staticClass: "form",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.start($event)
	      }
	    }
	  }, [_vm._m(1), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_vm._m(3), _vm._v(" "), _c('span', {
	    staticClass: "float-right"
	  }, [_c('a', {
	    attrs: {
	      "href": "#modal_for_change_password",
	      "id": "find_password",
	      "data-toggle": "modal"
	    },
	    on: {
	      "click": function($event) {
	        _vm.close_this_modal()
	      }
	    }
	  }, [_vm._v("找回密码")]), _vm._v("\n                          |  \n                        "), _c('a', {
	    attrs: {
	      "href": "#modal_for_register",
	      "data-toggle": "modal",
	      "id": "register"
	    },
	    on: {
	      "click": function($event) {
	        _vm.close_this_modal()
	      }
	    }
	  }, [_vm._v("立即注册")])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "btn-primary form-control",
	    attrs: {
	      "type": "submit",
	      "id": "login_button"
	    }
	  }, [_vm._v("登陆")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
	    staticClass: "text-center"
	  }, [_vm._v("合作账号登陆")]), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _c('div', {
	    staticClass: "modal-footer"
	  })])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "modal-header"
	  }, [_c('h4', [_vm._v("欢迎登陆")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "input-group"
	  }, [_c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-people iconfont"
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "id": "login_account",
	      "type": "text",
	      "placeholder": "账号/手机号/邮箱",
	      "required": ""
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "input-group"
	  }, [_c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-lock iconfont"
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "id": "login_password",
	      "type": "password",
	      "placeholder": "密码",
	      "required": ""
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', [_c('input', {
	    attrs: {
	      "type": "checkbox"
	    }
	  }), _vm._v("  记住我\n                        ")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "login-oauth-wrapper text-center"
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "id": "qq_login"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": "//luoc.co/navbar/img/icons/qq.jpg",
	      "alt": "QQ登陆"
	    }
	  })]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#",
	      "id": "wx_login"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": "//luoc.co/navbar/img/icons/wx.jpg",
	      "alt": "微信登陆"
	    }
	  })]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#",
	      "id": "alipay_login"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": "//luoc.co/navbar/img/icons/alipay.png",
	      "alt": "支付宝登陆"
	    }
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4ccd0098", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(18)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(20),
	  /* template */
	  __webpack_require__(21),
	  /* scopeId */
	  "data-v-0c250ca8",
	  /* cssModules */
	  null
	)
	Component.options.__file = "I:\\落尘科技工作室\\网站和域名\\luoc.co\\navbar\\src\\components\\modal_for_register.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] modal_for_register.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0c250ca8", Component.options)
	  } else {
	    hotAPI.reload("data-v-0c250ca8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("47643d24", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-0c250ca8\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal_for_register.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-0c250ca8\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal_for_register.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.modal[data-v-0c250ca8]\n{\n    font-family:微软雅黑,\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function()
	        {
	            return {
	                email:'',
	                code:'',
	                password:'',
	                confirm_password:''
	            };
	        },
	        components: {},
	        methods:
	            {
	                start:function(e)
	                {
	                    if(this.password!=this.confirm_password)
	                    {
	                        alert('两次输入的密码不匹配');
	                        return ;
	                    }
	                    window.luoc.navbar.register
	                    (
	                        {
	                            email:this.email,
	                            password:this.password
	                        }
	                    )
	                }
	            },
	        mounted:function()
	        {
	            document.body.addEventListener('navbar:register:password_not_valid',function(e)
	            {
	                "use strict";
	                alert('密码最少8位长');
	                console.log(e);
	            });
	            document.body.addEventListener('navbar:register:email_not_valid',function(e)
	            {
	                "use strict";
	                alert('email不合法');
	                console.log(e);
	            });
	            document.body.addEventListener('navbar:register:ok',function(e)
	            {
	                "use strict";
	                alert('注册成功');
	                $('#modal_for_register').modal('toggle');
	                console.log(e);
	            });
	            document.body.addEventListener('navbar:register:error',function(e)
	            {
	                "use strict";
	                alert(e.message.message);
	                console.log(e);
	            });
	        }
	    }


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "modal fade navbar-modal",
	    attrs: {
	      "id": "modal_for_register"
	    }
	  }, [_c('div', {
	    staticClass: "modal-dialog"
	  }, [_c('div', {
	    staticClass: "modal-content"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "modal-body"
	  }, [_c('form', {
	    staticClass: "form",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.start($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "input-group"
	  }, [_vm._m(1), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.email),
	      expression: "email"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "id": "register_email",
	      "name": "email",
	      "type": "email",
	      "placeholder": "邮箱",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.email = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_vm._m(3), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.code),
	      expression: "code"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "name": "code",
	      "id": "register_code",
	      "type": "text",
	      "placeholder": "请输入您收到的的验证码"
	    },
	    domProps: {
	      "value": _vm._s(_vm.code)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.code = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_vm._m(4), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.password),
	      expression: "password"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "id": "register_password",
	      "name": "password",
	      "type": "password",
	      "placeholder": "密码",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.password = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_vm._m(5), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.confirm_password),
	      expression: "confirm_password"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "id": "register_confirm_password",
	      "name": "confirm_password",
	      "type": "password",
	      "placeholder": "确认您的密码",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.confirm_password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.confirm_password = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "btn-primary form-control",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("注册")])])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "modal-header"
	  }, [_c('h4', [_vm._v("欢迎注册落尘科技通行证")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-people iconfont"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "input-group-btn"
	  }, [_c('button', {
	    staticClass: "btn btn-default"
	  }, [_vm._v("获取验证码")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-info iconfont"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-lock iconfont"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-lock iconfont"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0c250ca8", module.exports)
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(23)

	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(25),
	  /* template */
	  __webpack_require__(26),
	  /* scopeId */
	  "data-v-002d5b56",
	  /* cssModules */
	  null
	)
	Component.options.__file = "I:\\落尘科技工作室\\网站和域名\\luoc.co\\navbar\\src\\components\\modal_for_change_password.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] modal_for_change_password.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-002d5b56", Component.options)
	  } else {
	    hotAPI.reload("data-v-002d5b56", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("5b3d4479", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-002d5b56\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal_for_change_password.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-002d5b56\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal_for_change_password.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.modal[data-v-002d5b56]\n{\n    font-family:微软雅黑,\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n}\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function () {
	            return {};
	        },
	        components: {}
	    }


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "modal fade navbar-modal",
	    attrs: {
	      "id": "modal_for_change_password"
	    }
	  }, [_c('div', {
	    staticClass: "modal-dialog"
	  }, [_c('div', {
	    staticClass: "modal-content"
	  }, [_c('div', {
	    staticClass: "modal-header"
	  }, [_c('h4', [_vm._v("修改密码")])]), _vm._v(" "), _c('div', {
	    staticClass: "modal-body"
	  }, [_c('h4', {
	    staticClass: "text-center"
	  }, [_vm._v("请选择一种方式接收验证码")]), _vm._v(" "), _c('form', {
	    staticClass: "form"
	  }, [_c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "手机号"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "input-group-btn"
	  }, [_c('button', {
	    staticClass: "btn btn-default"
	  }, [_vm._v("获取验证码")])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "邮箱"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "input-group-btn"
	  }, [_c('button', {
	    staticClass: "btn btn-default"
	  }, [_vm._v("获取验证码")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-info iconfont"
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "name": "code",
	      "type": "text",
	      "placeholder": "请输入您收到的的验证码"
	    }
	  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-lock iconfont"
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "name": "password",
	      "type": "password",
	      "placeholder": "请输入您的新密码"
	    }
	  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('span', {
	    staticClass: "input-group-addon"
	  }, [_c('i', {
	    staticClass: "icon-lock iconfont"
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "form-control",
	    attrs: {
	      "name": "confirm_password",
	      "type": "password",
	      "placeholder": "确认您的密码"
	    }
	  })]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "btn-primary form-control",
	    attrs: {
	      "type": "submit",
	      "id": "login-button"
	    }
	  }, [_vm._v("修改密码")])])]), _vm._v(" "), _c('div', {
	    staticClass: "modal-footer"
	  })])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-002d5b56", module.exports)
	  }
	}

/***/ }
/******/ ]);