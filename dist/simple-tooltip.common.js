module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('tooltip', {
  bind: function (el, binding) {
    createTooltip(el, binding)
  },
  update: function (el, binding) {
    let oldTooltipElements = el.querySelectorAll('.directive-tooltip-selector')
    el.removeChild(oldTooltipElements[0])
    el.removeChild(oldTooltipElements[1])
    createTooltip(el, binding)
  }
}));
function createTooltip(el, binding) {
  el.style.position = 'relative'
  let tooltipBox = document.createElement('div')
  let tooltipArrow = document.createElement('div')
  let tooltipText = document.createElement('div')
  tooltipText.innerHTML = binding.value
  console.log(binding.value)
  switch (binding.arg) {
    case 'bottom':
      tooltipBox.style.top = '100%'
      tooltipBox.style.left = '50%'
      tooltipBox.style.transform = 'translate(-50%, 10px)'
      tooltipArrow.style.top = '100%'
      tooltipArrow.style.left = '50%'
      tooltipArrow.style.borderColor = 'transparent transparent black transparent'
      tooltipArrow.style.marginLeft = '-5px'
      break
    case 'left':
      tooltipBox.style.right = '100%'
      tooltipBox.style.top = '50%'
      tooltipBox.style.transform = 'translate(-10px, -50%)'
      tooltipArrow.style.right = '100%'
      tooltipArrow.style.top = '50%'
      tooltipArrow.style.borderColor = 'transparent transparent transparent black'
      tooltipArrow.style.marginTop = '-5px'
      break
    case 'right':
      tooltipBox.style.left = '100%'
      tooltipBox.style.top = '50%'
      tooltipBox.style.transform = 'translate(10px, -50%)'
      tooltipArrow.style.left = '100%'
      tooltipArrow.style.top = '50%'
      tooltipArrow.style.borderColor = 'transparent black transparent transparent'
      tooltipArrow.style.marginTop = '-5px'
      break
    default:
      tooltipBox.style.bottom = '100%'
      tooltipBox.style.left = '50%'
      tooltipBox.style.transform = 'translate(-50%, -10px)'
      tooltipArrow.style.bottom = '100%'
      tooltipArrow.style.left = '50%'
      tooltipArrow.style.borderColor = 'black transparent transparent transparent'
      tooltipArrow.style.marginLeft = '-5px'
      break
  }
  tooltipBox.style.position = 'absolute'
  tooltipBox.style.minWidth = '100px'
  tooltipBox.style.zIndex = '2'
  tooltipBox.style.backgroundColor = 'black'
  tooltipBox.style.color = '#fff'
  tooltipBox.style.textAlign = 'center'
  tooltipBox.style.padding = '5px'
  tooltipBox.style.borderRadius = '6px'
  tooltipBox.style.visibility = 'hidden'

  tooltipArrow.style.content = ''
  tooltipArrow.style.position = 'absolute'
  tooltipArrow.style.zIndex = '2'
  tooltipArrow.style.borderWidth = '5px'
  tooltipArrow.style.borderStyle = 'solid'
  tooltipArrow.style.visibility = 'hidden'
  tooltipBox.appendChild(tooltipText)
  tooltipBox.classList.add('directive-tooltip-selector')
  tooltipArrow.classList.add('directive-tooltip-selector')
  el.appendChild(tooltipBox)
  el.appendChild(tooltipArrow)
  el.onmouseover = function () {
    tooltipBox.style.visibility = 'visible'
    tooltipArrow.style.visibility = 'visible'
  }
  el.onmouseleave = function () {
    tooltipBox.style.visibility = 'hidden'
    tooltipArrow.style.visibility = 'hidden'
  }
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=simple-tooltip.common.js.map