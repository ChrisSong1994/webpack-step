/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([33,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stores", function() { return Stores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stores", function() { return stores; });
var context = __webpack_require__(31);

var keys = context.keys().filter(function (path) {
  return path !== './index.js';
});
var Stores = {};
var stores = {};
keys.forEach(function (path) {
  var Store = context(path).default;
  var name = path.match(/.\/(\w+)\.js/)[1];
  Stores["".concat(name, "Store")] = Store;
  stores["".concat(name, "Store")] = new Store();
});

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./globle.js": 32,
	"./index.js": 14
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var Global = (_class = (_temp =
/*#__PURE__*/
function () {
  function Global() {
    _classCallCheck(this, Global);

    _initializerDefineProperty(this, "background", _descriptor, this);
  }

  _createClass(Global, [{
    key: "setBg",
    value: function setBg(value) {
      this.background = value;
    }
  }]);

  return Global;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "background", [mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "j"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "#ccc";
  }
}), _applyDecoratedDescriptor(_class.prototype, "setBg", [mobx__WEBPACK_IMPORTED_MODULE_0__[/* action */ "b"]], Object.getOwnPropertyDescriptor(_class.prototype, "setBg"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (Global);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/asset/style/style.css
var style = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobx-react.module.js + 1 modules
var mobx_react_module = __webpack_require__(10);

// CONCATENATED MODULE: ./src/pages/home.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var home_Home = (_dec = Object(mobx_react_module["b" /* inject */])("globleStore"), _dec(_class = Object(mobx_react_module["c" /* observer */])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var background = this.props.globleStore.background;
      return react["createElement"]("div", {
        style: {
          background: background
        }
      }, "Home", react["createElement"]("h4", {
        class: "h4_css"
      }, "step_02_webpack\u914D\u7F6E\u4E30\u5BCC"), react["createElement"]("h4", {
        class: "h4_less"
      }, "step_02_webpack\u914D\u7F6E\u4E30\u5BCC"), react["createElement"]("h4", {
        class: "h4_scss"
      }, "step_02_webpack\u914D\u7F6E\u4E30\u5BCC"), react["createElement"]("div", {
        class: "image_test"
      }));
    }
  }]);

  return Home;
}(react["Component"])) || _class) || _class);
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./src/pages/NotFound.js
function NotFound_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NotFound_typeof = function _typeof(obj) { return typeof obj; }; } else { NotFound_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NotFound_typeof(obj); }

function NotFound_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NotFound_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NotFound_createClass(Constructor, protoProps, staticProps) { if (protoProps) NotFound_defineProperties(Constructor.prototype, protoProps); if (staticProps) NotFound_defineProperties(Constructor, staticProps); return Constructor; }

function NotFound_possibleConstructorReturn(self, call) { if (call && (NotFound_typeof(call) === "object" || typeof call === "function")) { return call; } return NotFound_assertThisInitialized(self); }

function NotFound_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NotFound_getPrototypeOf(o) { NotFound_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NotFound_getPrototypeOf(o); }

function NotFound_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NotFound_setPrototypeOf(subClass, superClass); }

function NotFound_setPrototypeOf(o, p) { NotFound_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NotFound_setPrototypeOf(o, p); }



var NotFound_NotFound =
/*#__PURE__*/
function (_React$Component) {
  NotFound_inherits(NotFound, _React$Component);

  function NotFound() {
    NotFound_classCallCheck(this, NotFound);

    return NotFound_possibleConstructorReturn(this, NotFound_getPrototypeOf(NotFound).apply(this, arguments));
  }

  NotFound_createClass(NotFound, [{
    key: "render",
    value: function render() {
      return react["createElement"]("div", null, "404");
    }
  }]);

  return NotFound;
}(react["Component"]);

/* harmony default export */ var pages_NotFound = (NotFound_NotFound);
// CONCATENATED MODULE: ./src/pages/List.js
function List_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { List_typeof = function _typeof(obj) { return typeof obj; }; } else { List_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return List_typeof(obj); }

function List_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function List_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function List_createClass(Constructor, protoProps, staticProps) { if (protoProps) List_defineProperties(Constructor.prototype, protoProps); if (staticProps) List_defineProperties(Constructor, staticProps); return Constructor; }

function List_possibleConstructorReturn(self, call) { if (call && (List_typeof(call) === "object" || typeof call === "function")) { return call; } return List_assertThisInitialized(self); }

function List_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function List_getPrototypeOf(o) { List_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return List_getPrototypeOf(o); }

function List_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) List_setPrototypeOf(subClass, superClass); }

function List_setPrototypeOf(o, p) { List_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return List_setPrototypeOf(o, p); }



var List_List =
/*#__PURE__*/
function (_React$Component) {
  List_inherits(List, _React$Component);

  function List() {
    List_classCallCheck(this, List);

    return List_possibleConstructorReturn(this, List_getPrototypeOf(List).apply(this, arguments));
  }

  List_createClass(List, [{
    key: "render",
    value: function render() {
      return react["createElement"]("div", null, "List");
    }
  }]);

  return List;
}(react["Component"]);

/* harmony default export */ var pages_List = (List_List);
// CONCATENATED MODULE: ./src/router.js
function router_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { router_typeof = function _typeof(obj) { return typeof obj; }; } else { router_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return router_typeof(obj); }

function router_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function router_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function router_createClass(Constructor, protoProps, staticProps) { if (protoProps) router_defineProperties(Constructor.prototype, protoProps); if (staticProps) router_defineProperties(Constructor, staticProps); return Constructor; }

function router_possibleConstructorReturn(self, call) { if (call && (router_typeof(call) === "object" || typeof call === "function")) { return call; } return router_assertThisInitialized(self); }

function router_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function router_getPrototypeOf(o) { router_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return router_getPrototypeOf(o); }

function router_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) router_setPrototypeOf(subClass, superClass); }

function router_setPrototypeOf(o, p) { router_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return router_setPrototypeOf(o, p); }







var router_App =
/*#__PURE__*/
function (_React$Component) {
  router_inherits(App, _React$Component);

  function App() {
    router_classCallCheck(this, App);

    return router_possibleConstructorReturn(this, router_getPrototypeOf(App).apply(this, arguments));
  }

  router_createClass(App, [{
    key: "render",
    value: function render() {
      return react["createElement"](react_router_dom["a" /* BrowserRouter */], null, react["createElement"]("div", null, react["createElement"]("ul", null, react["createElement"]("li", null, react["createElement"](react_router_dom["b" /* Link */], {
        to: "/"
      }, "Home")), react["createElement"]("li", null, react["createElement"](react_router_dom["b" /* Link */], {
        to: "/list"
      }, "list")), react["createElement"]("li", null, react["createElement"](react_router_dom["b" /* Link */], {
        to: "/404"
      }, "404"))), react["createElement"](react_router["d" /* Switch */], null, react["createElement"](react_router["b" /* Route */], {
        exact: true,
        path: "/",
        component: home
      }), react["createElement"](react_router["b" /* Route */], {
        path: "/list",
        component: pages_List
      }), react["createElement"](react_router["b" /* Route */], {
        path: "/notFound",
        component: pages_NotFound
      }), react["createElement"](react_router["a" /* Redirect */], {
        to: "/notFound"
      }))));
    }
  }]);

  return App;
}(react["Component"]);

/* harmony default export */ var router = (router_App);
// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__(14);

// CONCATENATED MODULE: ./src/index.js






react_dom["render"](react["createElement"](mobx_react_module["a" /* Provider */], store["stores"], react["createElement"](router, null)), document.getElementById("app")); // 实现热更新

if (false) {}

/***/ })

/******/ });