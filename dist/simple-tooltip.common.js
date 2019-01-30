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
    if (binding.value && binding.value !== '') {
      createTooltip(el, binding)
    }
  },
  inserted(el, binding) {
    // Update z-Index
    if (el.tooltip) {
      let zIndex = findParentZIndex(el)
      if (!zIndex || zIndex === 'auto' || zIndex === '') {
        zIndex = '10'
      }
      zIndex = parseInt(zIndex)
      zIndex += 10
      zIndex = zIndex.toString()
      let oldTooltipElements = document.getElementsByClassName(el.tooltip)
      for (let i = 0; i < oldTooltipElements.length; i++) {
        oldTooltipElements[i].style.zIndex = zIndex
      }
    }
  },
  unbind: function (el, binding) {
    if (el.tooltip) {
      let oldTooltipElements = document.getElementsByClassName(el.tooltip)
      for (let i = 0; oldTooltipElements.length; i++) {
        if (oldTooltipElements[i]) {
          oldTooltipElements[i].parentNode.removeChild(oldTooltipElements[i])
          i--
        }
      }
    }
  },
  componentUpdated: function (el, binding) {
    if (el.tooltip) {
      let oldTooltipElements = document.getElementsByClassName(el.tooltip)
      for (let i = 0; oldTooltipElements.length; i++) {
        if (oldTooltipElements[i]) {
          oldTooltipElements[i].parentNode.removeChild(oldTooltipElements[i])
          i--
        }
      }
    }
    if (binding.value && binding.value !== '') {
      createTooltip(el, binding)
    }
  }
}));
function createTooltip(el, binding) {
  let tooltipBox = document.createElement('div')
  let tooltipArrow = document.createElement('div')
  let tooltipText = document.createElement('span')

  tooltipText.innerHTML = binding.value
  let zIndex = findParentZIndex(el)
  if (!zIndex || zIndex === 'auto' || zIndex === '') {
    zIndex = '10'
  }
  zIndex = parseInt(zIndex)
  zIndex += 10
  zIndex = zIndex.toString()

  tooltipBox.style.wordBreak = 'break-word'
  tooltipBox.style.position = 'absolute'
  tooltipBox.style.zIndex = zIndex
  tooltipBox.style.backgroundColor = 'black'
  tooltipBox.style.color = '#fff'
  tooltipBox.style.padding = '5px 20px 5px 20px'
  tooltipBox.style.borderRadius = '6px'
  tooltipBox.style.display = 'none'
  tooltipBox.style.fontSize = '12px'
  tooltipBox.style.maxWidth = '320px'

  tooltipArrow.style.content = ''
  tooltipArrow.style.position = 'absolute'
  tooltipArrow.style.zIndex = zIndex
  tooltipArrow.style.borderWidth = '5px'
  tooltipArrow.style.borderStyle = 'solid'
  tooltipArrow.style.display = 'none'

  tooltipBox.appendChild(tooltipText)
  let idClass = makeId()
  tooltipBox.classList.add(idClass)
  tooltipArrow.classList.add(idClass)
  el.tooltip = idClass

  let body = document.getElementsByTagName('body')[0]
  body.appendChild(tooltipBox)
  body.appendChild(tooltipArrow)
  el.onmouseover = function () {
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    tooltipBox.style.display = 'inline-block'
    tooltipArrow.style.display = 'inline-block'
    switch (binding.arg) {
      case 'bottom':
        tooltipBox.style.left = el.getBoundingClientRect().left - tooltipBox.getBoundingClientRect().width / 2 + el.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipBox.style.top = el.getBoundingClientRect().top + el.getBoundingClientRect().height + tooltipArrow.getBoundingClientRect().height / 2 + scrollTop + 'px'
        tooltipArrow.style.left = el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipArrow.style.top = el.getBoundingClientRect().top + el.getBoundingClientRect().height - tooltipArrow.getBoundingClientRect().height / 2  + scrollTop + 'px'
        tooltipArrow.style.borderColor = 'transparent transparent black transparent'
        tooltipArrow.style.marginLeft = '-5px'
        break
      case 'right':
        tooltipBox.style.left = el.getBoundingClientRect().left + el.getBoundingClientRect().width + tooltipArrow.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipBox.style.top = el.getBoundingClientRect().top - tooltipBox.getBoundingClientRect().height / 2 + el.getBoundingClientRect().height / 2   + scrollTop + 'px'
        tooltipArrow.style.left = el.getBoundingClientRect().left + el.getBoundingClientRect().width - tooltipArrow.getBoundingClientRect().width /2 + scrollLeft + 'px'
        tooltipArrow.style.top = el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2 + scrollTop + 'px'
        tooltipArrow.style.borderColor = 'transparent black transparent transparent'
        tooltipArrow.style.marginTop = '-5px'
        break
      case 'left':
        tooltipBox.style.left = el.getBoundingClientRect().left - tooltipBox.getBoundingClientRect().width - tooltipArrow.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipBox.style.top = el.getBoundingClientRect().top - tooltipBox.getBoundingClientRect().height / 2 + el.getBoundingClientRect().height / 2   + scrollTop + 'px'
        tooltipArrow.style.left = el.getBoundingClientRect().left - tooltipArrow.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipArrow.style.top = el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2 + scrollTop + 'px'
        tooltipArrow.style.borderColor = 'transparent transparent transparent black'
        tooltipArrow.style.marginTop = '-5px'
        break
      default:
        tooltipBox.style.left = el.getBoundingClientRect().left - tooltipBox.getBoundingClientRect().width / 2 + el.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipBox.style.top = el.getBoundingClientRect().top - tooltipBox.getBoundingClientRect().height - tooltipArrow.getBoundingClientRect().height / 2 + scrollTop + 'px'
        tooltipArrow.style.left = el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2 + scrollLeft + 'px'
        tooltipArrow.style.top = el.getBoundingClientRect().top - tooltipArrow.getBoundingClientRect().height / 2 + scrollTop + 'px'
        tooltipArrow.style.borderColor = 'black transparent transparent transparent'
        tooltipArrow.style.marginLeft = '-5px'
        break
    }
  }
  el.onmouseleave = function () {
    tooltipBox.style.display = 'none'
    tooltipArrow.style.display = 'none'
  }
  tooltipArrow.onmouseover = function () {
    tooltipBox.style.display = 'inline-block'
    tooltipArrow.style.display = 'inline-block'
  }
  tooltipArrow.onmouseleave = function () {
    tooltipBox.style.display = 'none'
    tooltipArrow.style.display = 'none'
  }
  tooltipBox.onmouseover = function () {
    tooltipBox.style.display = 'inline-block'
    tooltipArrow.style.display = 'inline-block'
  }
  tooltipBox.onmouseleave = function () {
    tooltipBox.style.display = 'none'
    tooltipArrow.style.display = 'none'
  }
}
function findParentZIndex(el) {
  let zIndex
  if (el && el.tagName !== 'BODY') {
    zIndex = document.defaultView.getComputedStyle(el).getPropertyValue('z-index')
    if (zIndex === 'auto' || zIndex === '') {
      zIndex = findParentZIndex(el.parentElement)
    }
  }
  return zIndex
}
function makeId() {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=simple-tooltip.common.js.map