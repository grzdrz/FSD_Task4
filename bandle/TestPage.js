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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/TestPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/RangeSlider/RangeSlider.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/RangeSlider/RangeSlider.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/RangeSlider/RangeSlider.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/TestPage.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/TestPage.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/TestPage.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/RangeSlider/RangeSlider.js":
/*!***************************************************!*\
  !*** ./src/components/RangeSlider/RangeSlider.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mvc_SliderView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvc/SliderView.js */ \"./src/components/RangeSlider/mvc/SliderView.js\");\n/* harmony import */ var _mvc_InputsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mvc/InputsView.js */ \"./src/components/RangeSlider/mvc/InputsView.js\");\n/* harmony import */ var _mvc_Model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mvc/Model.js */ \"./src/components/RangeSlider/mvc/Model.js\");\n/* harmony import */ var _mvc_Controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvc/Controller.js */ \"./src/components/RangeSlider/mvc/Controller.js\");\n/* harmony import */ var _RangeSlider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RangeSlider.scss */ \"./src/components/RangeSlider/RangeSlider.scss\");\n/* harmony import */ var _RangeSlider_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RangeSlider_scss__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n/* import { View } from \"./mvc/View.js\"; */\r\n\r\n\r\n/* let controller = new Controller(); */\r\n\r\nlet rangeSliders = document.querySelectorAll(\".range-slider\");\r\nrangeSliders.forEach(e => {\r\n    //типо создали элементы для ренж слайдера\r\n    let slidersContainer = e.querySelector(\".range-slider__slider-container\");\r\n    let firstSlider = e.querySelector(\".range-slider__first-slider\");\r\n    let firstSliderBorder = e.querySelector(\".range-slider__first-slider-outside\");\r\n    let lastSlider = e.querySelector(\".range-slider__last-slider\");\r\n    let lastSliderBorder = e.querySelector(\".range-slider__last-slider-outside\");\r\n    let firstInput = e.querySelector(\".range-slider__first-input\");\r\n    let lastInput = e.querySelector(\".range-slider__last-input\");\r\n    let filledStrip = e.querySelector(\".range-slider__slider-body-filled\");\r\n    let emptyStrip = e.querySelector(\".range-slider__slider-body-empty\");\r\n\r\n\r\n    let model = new _mvc_Model_js__WEBPACK_IMPORTED_MODULE_2__[\"Model\"]({\r\n        maxValue: 15000,\r\n        minValue: -5000,\r\n        outsideWidth: 2,\r\n        firstValue: 2000,\r\n        lastValue: 6000,\r\n        valueType: \"₽\",\r\n        valueRound: 100,\r\n    });\r\n\r\n    let sliderView = new _mvc_SliderView_js__WEBPACK_IMPORTED_MODULE_0__[\"SliderView\"]({\r\n        sliderComponent: e,\r\n        slidersContainer: slidersContainer,\r\n\r\n        firstSlider: firstSlider,\r\n        firstSliderBorder: firstSliderBorder,\r\n\r\n        lastSlider: lastSlider,\r\n        lastSliderBorder: lastSliderBorder,\r\n\r\n        emptyStrip: emptyStrip,\r\n        filledStrip: filledStrip,\r\n    });\r\n\r\n    let inputsView = new _mvc_InputsView_js__WEBPACK_IMPORTED_MODULE_1__[\"InputsView\"]({\r\n        firstInput: firstInput,\r\n        lastInput: lastInput,\r\n    });\r\n\r\n    let controller = new _mvc_Controller_js__WEBPACK_IMPORTED_MODULE_3__[\"Controller\"](model, sliderView, inputsView);\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Пропорция\r\n//(x1_input - xMin_input) / d_MaxMin_input = x_slider / d_MaxMin_slider;\r\n\r\n\r\n//функции расчета пропорциональных друг другу значений инпутов и X координат ползунков(в пикселях).\r\n//x1_input = (d_MaxMin_input * x_slider) / d_MaxMin_slider + xMin_input;\r\n//x1_slider = ((x_input - xMin_input) * d_MaxMin_slider) / d_MaxMin_input;\r\n//x2_input = (d_MaxMin_input * x_slider) / d_MaxMin_slider + xMin_input;\r\n//x2_slider = ((x_input - xMin_input) * d_MaxMin_slider) / d_MaxMin_input + slider_width;\r\n//где: \r\n//  x_input - текущее значение инпута,\r\n//  x_slider - текущая X координата ползунка относительно левой границы контейнера(левый марджин),\r\n//  xMin_input/xMax_input - минимальные/максимальные значения инпутов,\r\n//  xMin_slider/xMax_slider - минимальные/максимальные X координаты ползунков,\r\n//  d_... - приращения соответствующих величин\r\n\r\n//Вышеописанные формулы расчета устроены так что бы соответствовать следующим условиям:\r\n// 1)Значение инпута соответсвующего 2му ползунку расчитывается относительно визуального положения левой границы 2го ползунка.\r\n// 2)Значение инпута соответсвующего 1му ползунку расчитывается относительно визуального положения правой границы 1го ползунка.\r\n//Это нужно чтобы при смыкании ближайших друг к другу границ ползунков их соответствующие значения инпутов были равны\r\n//(т.е. при смыкании ползунков дельта инпут === 0). При этом если развести ползунки по крайним границам, то значения их\r\n//соответствующих инпутов будут равны крайним значениям инпутов. \r\n\r\n//На деле чтобы достичь такого эффекта расчет пропорций ведется от левой границы 1го ползунка и \r\n//левой границы 2го ползунка минус ширина ползунка.\n\n//# sourceURL=webpack:///./src/components/RangeSlider/RangeSlider.js?");

/***/ }),

/***/ "./src/components/RangeSlider/RangeSlider.scss":
/*!*****************************************************!*\
  !*** ./src/components/RangeSlider/RangeSlider.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./RangeSlider.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/RangeSlider/RangeSlider.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/RangeSlider/RangeSlider.scss?");

/***/ }),

/***/ "./src/components/RangeSlider/elements/Element.js":
/*!********************************************************!*\
  !*** ./src/components/RangeSlider/elements/Element.js ***!
  \********************************************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Element\", function() { return Element; });\nclass Element {\r\n    constructor(view, DOMElement) {//под позицией имеется ввиду левый маргин относительно контейнера\r\n        this.DOMElement = DOMElement;\r\n        this.view = view;\r\n\r\n        this.position = {};\r\n        this.size = this.DOMElement.getBoundingClientRect();\r\n    }\r\n\r\n    calculatePosition() {\r\n    }\r\n\r\n    setPosition() {\r\n        this.view.setLeftMargin(this.DOMElement, this.position.x);\r\n    }\r\n\r\n    setSize(size) {\r\n        this.size = size;\r\n        this.view.setSize(this.DOMElement, this.size.width);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/elements/Element.js?");

/***/ }),

/***/ "./src/components/RangeSlider/elements/EmptyStrip.js":
/*!***********************************************************!*\
  !*** ./src/components/RangeSlider/elements/EmptyStrip.js ***!
  \***********************************************************/
/*! exports provided: EmptyStrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmptyStrip\", function() { return EmptyStrip; });\n/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ \"./src/components/RangeSlider/elements/Element.js\");\n\r\n\r\nclass EmptyStrip extends _Element_js__WEBPACK_IMPORTED_MODULE_0__[\"Element\"] {\r\n    constructor(view, DOMElement) {\r\n        super(view, DOMElement);\r\n\r\n        /* this.position.x = this.calculatePosition(); */\r\n        this.calculatePosition = this.calculatePosition.bind(this);\r\n    }\r\n\r\n    calculatePosition() {\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/elements/EmptyStrip.js?");

/***/ }),

/***/ "./src/components/RangeSlider/elements/FilledStrip.js":
/*!************************************************************!*\
  !*** ./src/components/RangeSlider/elements/FilledStrip.js ***!
  \************************************************************/
/*! exports provided: FilledStrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilledStrip\", function() { return FilledStrip; });\n/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ \"./src/components/RangeSlider/elements/Element.js\");\n\r\n\r\nclass FilledStrip extends _Element_js__WEBPACK_IMPORTED_MODULE_0__[\"Element\"] {\r\n    constructor(view, DOMElement) {\r\n        super(view, DOMElement);\r\n\r\n        /* this.position.x = this.calculatePosition(); */\r\n        this.calculatePosition = this.calculatePosition.bind(this);\r\n    }\r\n\r\n    calculatePosition(){\r\n        let firstSlider = this.view.firstSliderInstance;\r\n        let lastSlider = this.view.lastSliderInstance;\r\n        this.position.x = firstSlider.position.x + firstSlider.size.width / 2;\r\n\r\n        let width = lastSlider.position.x - firstSlider.position.x;\r\n\r\n        this.setPosition();\r\n        this.setSize({width: width});\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/elements/FilledStrip.js?");

/***/ }),

/***/ "./src/components/RangeSlider/elements/Slider.js":
/*!*******************************************************!*\
  !*** ./src/components/RangeSlider/elements/Slider.js ***!
  \*******************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ \"./src/components/RangeSlider/elements/Element.js\");\n\r\n\r\nclass Slider extends _Element_js__WEBPACK_IMPORTED_MODULE_0__[\"Element\"] {\r\n    constructor(view, mainDOMElement, outsideDOMElement, number) {\r\n        super(view, mainDOMElement);\r\n\r\n        this.number = number;\r\n        this.outsideDOMElement = outsideDOMElement;\r\n\r\n        this.calculatePosition = this.calculatePosition.bind(this);\r\n    }\r\n\r\n    calculatePosition() {\r\n        let modelData = this.view.getModelData();\r\n        let slidersContainerWidth = this.view.slidersContainerInstance.size.width;\r\n\r\n        let dSliderInputFullValue = modelData.maxValue - modelData.minValue;\r\n        let dSliderStripFullValue = slidersContainerWidth - this.size.width * 2;\r\n\r\n        if (this.number === 1) {\r\n            if (modelData.firstValue < modelData.minValue) {\r\n                this.position.x = 0;\r\n            }\r\n            else if (modelData.firstValue > modelData.maxValue) {\r\n                this.position.x = ((modelData.lastValue - modelData.minValue) * dSliderStripFullValue) / dSliderInputFullValue;\r\n            }\r\n            else if (modelData.firstValue > modelData.lastValue)\r\n                this.position.x = ((modelData.lastValue - modelData.minValue) * dSliderStripFullValue) / dSliderInputFullValue;\r\n            else\r\n                this.position.x = ((modelData.firstValue - modelData.minValue) * dSliderStripFullValue) / dSliderInputFullValue;\r\n        }\r\n        else {\r\n\r\n            this.position.x = (((modelData.lastValue - modelData.minValue) * dSliderStripFullValue) / dSliderInputFullValue) + this.size.width;\r\n        }\r\n\r\n        this.outsidePosition = this.calculateOutsidePosition();\r\n\r\n\r\n        this.setPosition();\r\n    }\r\n\r\n    calculateOutsidePosition() {\r\n        let modelData = this.view.getModelData();\r\n        return this.position.x - modelData.outsideWidth;///\r\n    }\r\n\r\n    setPosition() {\r\n        super.setPosition();\r\n        this.view.setLeftMargin(this.outsideDOMElement, this.outsidePosition);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/elements/Slider.js?");

/***/ }),

/***/ "./src/components/RangeSlider/elements/SlidersContainer.js":
/*!*****************************************************************!*\
  !*** ./src/components/RangeSlider/elements/SlidersContainer.js ***!
  \*****************************************************************/
/*! exports provided: SlidersContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlidersContainer\", function() { return SlidersContainer; });\n/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ \"./src/components/RangeSlider/elements/Element.js\");\n\r\n\r\nclass SlidersContainer extends _Element_js__WEBPACK_IMPORTED_MODULE_0__[\"Element\"] {\r\n    constructor(view, DOMElement) {\r\n        super(view, DOMElement);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/elements/SlidersContainer.js?");

/***/ }),

/***/ "./src/components/RangeSlider/mvc/Controller.js":
/*!******************************************************!*\
  !*** ./src/components/RangeSlider/mvc/Controller.js ***!
  \******************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\nclass Controller {\r\n    constructor(model, sliderView, inputsView) {\r\n        this.model = model;\r\n        this.sliderView = sliderView;\r\n        this.inputsView = inputsView;\r\n\r\n        this.getModelData = this.getModelData.bind(this);\r\n        this.sliderView.getModelData = this.getModelData;\r\n        this.inputsView.getModelData = this.getModelData;\r\n\r\n        this.updateInputs = this.updateInputs.bind(this);\r\n        this.sliderView.updateInputs = this.updateInputs;\r\n\r\n        this.updateSliders = this.updateSliders.bind(this);\r\n        this.inputsView.updateSliders = this.updateSliders;\r\n\r\n        this.initialize();\r\n    }\r\n\r\n    initialize() {\r\n        this.sliderView.initialize();\r\n        this.inputsView.initialize();\r\n    }\r\n\r\n    getModelData() {\r\n        return this.model.getOptions();\r\n    }\r\n\r\n    updateInputs(data) {\r\n        this.model.updateOptions(data);\r\n        this.inputsView.update(data);\r\n    }\r\n    updateSliders(data) {\r\n        this.model.updateOptions(data);\r\n        this.sliderView.update();\r\n    }\r\n}\r\n\r\n\r\n/* let slidersContainerWidth = elements.slidersContainer.getBoundingClientRect().width;\r\n            let sliderWidth = elements.firstSlider.getBoundingClientRect().width;\r\n            let filledStripBoundingRect = elements.filledStrip.getBoundingClientRect();\r\n            let emptyStripSizeBoundingRect = elements.emptyStrip.getBoundingClientRect();\r\nlet inputMaxValue = this.model.options.maxValue;\r\nlet inputMinValue = this.model.options.minValue;\r\n\r\nlet dSliderInputFullValue = inputMaxValue - inputMinValue;\r\nlet dSliderStripFullValue = slidersContainerWidth - sliderWidth * 2;\r\n\r\n\r\nlet x1_slider = ((elements.firstInput.value - inputMinValue) * dSliderStripFullValue) / dSliderInputFullValue;\r\nlet x2_slider = (((elements.lastInput.value - inputMinValue) * dSliderStripFullValue) / dSliderInputFullValue) + sliderWidth;\r\n\r\n\r\nthis.view.setLeftMargin(elements.firstSlider, x1_slider)\r\nthis.view.setLeftMargin(elements.lastSlider, x2_slider);\r\nthis.view.setLeftMargin(elements.firstSliderBorder, x1_slider - 2);\r\nthis.view.setLeftMargin(elements.lastSliderBorder, x2_slider - 2);\r\nthis.view.setWidth(elements.filledStrip, x2_slider - x1_slider);\r\nthis.view.setLeftMargin(elements.filledStrip, x1_slider + sliderWidth / 2); */\n\n//# sourceURL=webpack:///./src/components/RangeSlider/mvc/Controller.js?");

/***/ }),

/***/ "./src/components/RangeSlider/mvc/InputsView.js":
/*!******************************************************!*\
  !*** ./src/components/RangeSlider/mvc/InputsView.js ***!
  \******************************************************/
/*! exports provided: InputsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputsView\", function() { return InputsView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/components/RangeSlider/mvc/View.js\");\n\r\n\r\nclass InputsView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"] {\r\n    constructor(inputs) {\r\n        super();\r\n\r\n        this.firstInputDOMElement = inputs.firstInput;\r\n        this.lastInputDOMElement = inputs.lastInput;\r\n\r\n        this.getModelData = () => { };\r\n        this.updateSliders = function () { };\r\n\r\n        this.onFirstInputChange = this.onFirstInputChange.bind(this);\r\n        this.onLastInputChange = this.onLastInputChange.bind(this);\r\n    }\r\n\r\n    initialize() {\r\n        this.firstInputDOMElement.addEventListener(\"change\", this.onFirstInputChange);\r\n        this.lastInputDOMElement.addEventListener(\"change\", this.onLastInputChange);\r\n    }\r\n\r\n    update(data) {\r\n        data.firstValue ? this.firstInputDOMElement.value = data.firstValue : this.firstInputDOMElement.value;\r\n        data.lastValue ? this.lastInputDOMElement.value = data.lastValue : this.lastInputDOMElement.value;\r\n    }\r\n\r\n    onFirstInputChange(event) {\r\n        let value = Number.parseInt(event.currentTarget.value);\r\n        let modelData = this.getModelData();\r\n\r\n        if (value > modelData.maxValue || value > modelData.lastValue)\r\n            value = modelData.lastValue;\r\n\r\n        else if (value < modelData.minValue)\r\n            value = modelData.minValue;\r\n\r\n        event.currentTarget.value = value;\r\n        this.updateSliders({ firstValue: value });\r\n    }\r\n    onLastInputChange(event) {\r\n        let value = Number.parseInt(event.currentTarget.value);\r\n        let modelData = this.getModelData();\r\n\r\n        if (value > modelData.maxValue)\r\n            value = modelData.maxValue;\r\n        else if (value < modelData.minValue || value < modelData.firstValue)\r\n            value = modelData.firstValue;\r\n\r\n        event.currentTarget.value = value;\r\n        this.updateSliders({ lastValue: value });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/mvc/InputsView.js?");

/***/ }),

/***/ "./src/components/RangeSlider/mvc/Model.js":
/*!*************************************************!*\
  !*** ./src/components/RangeSlider/mvc/Model.js ***!
  \*************************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\nclass Model {\r\n    constructor(options) {\r\n        this._options = {};\r\n        for (let optionName of Object.keys(options)) {\r\n            this._options[optionName] = options[optionName];\r\n        }\r\n    }\r\n\r\n    addOption(optionName, optonValue) {\r\n        this._options[optionName] = optonValue;\r\n    }\r\n\r\n    deleteOptions(optionName) {\r\n        delete this._options[optionName];\r\n    }\r\n\r\n    getOption(optionName) {\r\n        return this._options[optionName];\r\n    }\r\n\r\n    getOptions() {\r\n        let result = {};\r\n        for (let optionName of Object.keys(this._options)) {\r\n            result[optionName] = this._options[optionName];\r\n        }\r\n        return result;\r\n    }\r\n\r\n    updateOptions(options) {\r\n        for (let optionName of Object.keys(options)) {\r\n            this._options[optionName] = options[optionName];\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/mvc/Model.js?");

/***/ }),

/***/ "./src/components/RangeSlider/mvc/SliderView.js":
/*!******************************************************!*\
  !*** ./src/components/RangeSlider/mvc/SliderView.js ***!
  \******************************************************/
/*! exports provided: SliderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderView\", function() { return SliderView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/components/RangeSlider/mvc/View.js\");\n/* harmony import */ var _elements_SlidersContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/SlidersContainer.js */ \"./src/components/RangeSlider/elements/SlidersContainer.js\");\n/* harmony import */ var _elements_Slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Slider.js */ \"./src/components/RangeSlider/elements/Slider.js\");\n/* harmony import */ var _elements_FilledStrip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/FilledStrip.js */ \"./src/components/RangeSlider/elements/FilledStrip.js\");\n/* harmony import */ var _elements_EmptyStrip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/EmptyStrip.js */ \"./src/components/RangeSlider/elements/EmptyStrip.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SliderView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"] {\r\n    constructor(elements) {\r\n        super();\r\n\r\n        this.onSliderMouseDown = this.onSliderMouseDown.bind(this);\r\n\r\n        this.getModelData = () => { };\r\n        this.updateInputs = () => { };\r\n\r\n\r\n        this.slidersContainerInstance = new _elements_SlidersContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"SlidersContainer\"](this, elements.slidersContainer);\r\n        this.firstSliderInstance = new _elements_Slider_js__WEBPACK_IMPORTED_MODULE_2__[\"Slider\"](this, elements.firstSlider, elements.firstSliderBorder, 1);\r\n        this.lastSliderInstance = new _elements_Slider_js__WEBPACK_IMPORTED_MODULE_2__[\"Slider\"](this, elements.lastSlider, elements.lastSliderBorder, 2);\r\n        this.emptyStripInstance = new _elements_EmptyStrip_js__WEBPACK_IMPORTED_MODULE_4__[\"EmptyStrip\"](this, elements.emptyStrip);\r\n        this.filledStripInstance = new _elements_FilledStrip_js__WEBPACK_IMPORTED_MODULE_3__[\"FilledStrip\"](this, elements.filledStrip);\r\n    }\r\n\r\n\r\n    initialize() {\r\n        this.slidersContainerInstance.calculatePosition();\r\n        this.firstSliderInstance.calculatePosition();\r\n        this.lastSliderInstance.calculatePosition();\r\n        this.emptyStripInstance.calculatePosition();\r\n        this.filledStripInstance.calculatePosition();\r\n\r\n\r\n        this.firstSliderInstance.DOMElement.ondragstart = function () {\r\n            return false;\r\n        };\r\n        this.lastSliderInstance.DOMElement.ondragstart = function () {\r\n            return false;\r\n        };\r\n\r\n        this.firstSliderInstance.DOMElement.addEventListener(\"mousedown\", this.onSliderMouseDown);\r\n        this.lastSliderInstance.DOMElement.addEventListener(\"mousedown\", this.onSliderMouseDown);\r\n\r\n        this.firstSliderInstance.DOMElement.addEventListener(\"touchstart\", this.onSliderMouseDown);\r\n        this.lastSliderInstance.DOMElement.addEventListener(\"touchstart\", this.onSliderMouseDown);\r\n    }\r\n\r\n    update() {\r\n        this.slidersContainerInstance.calculatePosition();\r\n        this.firstSliderInstance.calculatePosition();\r\n        this.lastSliderInstance.calculatePosition();\r\n        this.emptyStripInstance.calculatePosition();\r\n        this.filledStripInstance.calculatePosition();\r\n    }\r\n\r\n    //d&d\r\n    onSliderMouseDown(event) {\r\n        let view = this;\r\n        let modelData = view.getModelData();\r\n\r\n        let cursorMouseDownPosX;//место нажатия левой кнопки мыши\r\n        if (event.changedTouches) cursorMouseDownPosX = event.changedTouches[0].pageX;\r\n        else cursorMouseDownPosX = event.clientX;\r\n\r\n        let targetSlider;\r\n        let otherSlider;\r\n        let targetSliderBorder;\r\n        let otherSliderBorder;\r\n        let targetSlidersContainer;\r\n        let targetSliderIndex;\r\n        let targetInput;\r\n        let otherInput;\r\n        let inputMaxValue;\r\n        let inputMinValue;\r\n        let inputsValueRangeInTitle;\r\n\r\n        if (event.currentTarget.className) {//чтобы не вылететь при кликах по document\r\n            let classArray = event.currentTarget.className.split(/\\s/i);\r\n            if (classArray.includes(\"range-slider__first-slider\")) {\r\n                targetSlider = event.currentTarget;\r\n                targetSliderIndex = 0;\r\n\r\n                otherSlider = targetSlider.parentElement.querySelector(\".range-slider__last-slider\");\r\n\r\n                targetInput = targetSlider.parentElement.querySelector(\".range-slider__first-input\");\r\n                otherInput = targetSlider.parentElement.querySelector(\".range-slider__last-input\");\r\n\r\n                targetSliderBorder = targetSlider.parentElement.querySelector(\".range-slider__first-slider-outside\");\r\n                otherSliderBorder = targetSlider.parentElement.querySelector(\".range-slider__last-slider-outside\");\r\n            }\r\n            else if (classArray.includes(\"range-slider__last-slider\")) {\r\n                targetSlider = event.currentTarget;\r\n                targetSliderIndex = 1;\r\n\r\n                otherSlider = targetSlider.parentElement.querySelector(\".range-slider__first-slider\");\r\n\r\n                otherInput = targetSlider.parentElement.querySelector(\".range-slider__first-input\");\r\n                targetInput = targetSlider.parentElement.querySelector(\".range-slider__last-input\");\r\n\r\n                otherSliderBorder = targetSlider.parentElement.querySelector(\".range-slider__first-slider-outside\");\r\n                targetSliderBorder = targetSlider.parentElement.querySelector(\".range-slider__last-slider-outside\");\r\n            }\r\n            else return;\r\n        }\r\n        else return;\r\n\r\n        targetSlidersContainer = targetSlider.closest(\".range-slider\");\r\n        inputMaxValue = Number.parseInt(modelData.maxValue);\r\n        inputMinValue = Number.parseInt(modelData.minValue);\r\n        inputsValueRangeInTitle = targetSlider.parentElement.parentElement.querySelector(\".range-slider__inputs-value-range\");\r\n\r\n        let slidersFilledStrip = targetSlider.parentElement.querySelector(\".range-slider__slider-body-filled\");\r\n\r\n        let slidersContainerBoundingCoords = targetSlider.parentElement.getBoundingClientRect();\r\n        let slidersContainerWidth = slidersContainerBoundingCoords.width;\r\n\r\n        let targetSliderBoundingCoords = targetSlider.getBoundingClientRect();\r\n        let otherSliderCoordinates = otherSlider.getBoundingClientRect();\r\n        let sliderWidth = targetSliderBoundingCoords.width;\r\n\r\n        //расстояние между местом нажатия кнопки мыши внутри бегунка и левым краем бегунка(где внутри бегунка находится курсор)\r\n        let mouseXPosInsideTargetSlider = cursorMouseDownPosX - targetSliderBoundingCoords.x;\r\n\r\n\r\n        document.addEventListener(\"mousemove\", mouseMove);\r\n        document.addEventListener(\"mouseup\", mouseUp);\r\n        document.addEventListener(\"touchmove\", mouseMove);\r\n        document.addEventListener(\"touchend\", mouseUp);\r\n\r\n        function mouseMove(event) {\r\n            if (event.changedTouches) cursorMouseDownPosX = event.changedTouches[0].pageX;\r\n            else cursorMouseDownPosX = event.clientX;\r\n\r\n            if (!event.isLastUpdate) {\r\n                //дистанция между левой границей контейнера и левой границей целевого ползунка зависящая от позиции курсора\r\n                let newDeltaXForTargetSlider = Math.round(cursorMouseDownPosX - slidersContainerBoundingCoords.x - mouseXPosInsideTargetSlider);\r\n                view.setLeftMarginTEMP(targetSlider, newDeltaXForTargetSlider);\r\n                //проверка на выход за граничные значения\r\n                if (newDeltaXForTargetSlider < 0)\r\n                    view.setLeftMarginTEMP(targetSlider, 0);\r\n                else if (newDeltaXForTargetSlider + sliderWidth > slidersContainerWidth)\r\n                    view.setLeftMarginTEMP(targetSlider, slidersContainerWidth - sliderWidth);\r\n            }\r\n\r\n            //обновленные координаты целевого ползунка после изменения позиции курсора\r\n            let newTargetSliderBoundingCoords = targetSlider.getBoundingClientRect();\r\n            if (targetSliderIndex === 0) {//для первого ползунка\r\n                if (newTargetSliderBoundingCoords.x + sliderWidth > otherSliderCoordinates.x) {\r\n                    let newTargetSliderPosInContainer = otherSliderCoordinates.x - slidersContainerBoundingCoords.x - sliderWidth;\r\n                    view.setLeftMarginTEMP(targetSlider, newTargetSliderPosInContainer);\r\n                }\r\n                else {\r\n                    //изменение отступа и размера закрашенной полосы\r\n                    let filledStripPosInContainer = newTargetSliderBoundingCoords.x - slidersContainerBoundingCoords.x + sliderWidth / 2;\r\n                    view.setLeftMarginTEMP(slidersFilledStrip, filledStripPosInContainer);\r\n                    let filledStripWidth = otherSliderCoordinates.x - newTargetSliderBoundingCoords.x;\r\n                    view.setWidthTEMP(slidersFilledStrip, filledStripWidth);\r\n\r\n                    //запись значения в первый инпут\r\n                    let targetSliderPosXInContainer = newTargetSliderBoundingCoords.x - slidersContainerBoundingCoords.x;\r\n                    let maxDistanceBetweenSliders = slidersContainerBoundingCoords.width - newTargetSliderBoundingCoords.width * 2;\r\n\r\n                    let maxInputDeltaValue = inputMaxValue - inputMinValue;\r\n                    let newTargetInputValue = Math.round((maxInputDeltaValue * targetSliderPosXInContainer) / maxDistanceBetweenSliders + inputMinValue);\r\n\r\n                    let temp1 = newTargetInputValue / Number.parseInt(modelData.valueRound);\r\n                    let temp2 = Math.round(temp1);\r\n                    let temp3 = temp2 * Number.parseInt(modelData.valueRound);\r\n                    newTargetInputValue = temp3;\r\n\r\n                    //targetInput.value = newTargetInputValue;\r\n                    view.updateInputs({ firstValue: newTargetInputValue });\r\n                    //view.firstSliderInstance.inputDOMElement.value = newTargetInputValue;\r\n\r\n                    let inputsValueRangeTextInTitle = inputsValueRangeInTitle.textContent;\r\n                    let splitedInputsValueRangeTextInTitle = inputsValueRangeTextInTitle.split(/\\s/i);\r\n                    splitedInputsValueRangeTextInTitle[0] = newTargetInputValue.toString() + modelData.valueType;\r\n                    inputsValueRangeTextInTitle = splitedInputsValueRangeTextInTitle.join(\" \");\r\n                    inputsValueRangeInTitle.textContent = inputsValueRangeTextInTitle;\r\n                }\r\n            }\r\n            else if (targetSliderIndex === 1) {//для второго ползунка\r\n                if (newTargetSliderBoundingCoords.x < otherSliderCoordinates.x + sliderWidth) {\r\n                    let newTargetSliderPosInContainer = otherSliderCoordinates.x - slidersContainerBoundingCoords.x + sliderWidth;\r\n                    view.setLeftMarginTEMP(targetSlider, newTargetSliderPosInContainer);\r\n                }\r\n                else {\r\n                    //изменение отступа и размера закрашенной полосы\r\n                    let filledStripPosInContainer = otherSliderCoordinates.x - slidersContainerBoundingCoords.x + sliderWidth / 2;\r\n                    view.setLeftMarginTEMP(slidersFilledStrip, filledStripPosInContainer);\r\n                    let filledStripWidth = newTargetSliderBoundingCoords.x - otherSliderCoordinates.x;\r\n                    view.setWidthTEMP(slidersFilledStrip, filledStripWidth);\r\n\r\n                    //запись значения во второй инпут\r\n                    let targetSliderPosXInContainer = newTargetSliderBoundingCoords.x - slidersContainerBoundingCoords.x - newTargetSliderBoundingCoords.width;\r\n                    let maxDistanceBetweenSliders = slidersContainerBoundingCoords.width - newTargetSliderBoundingCoords.width * 2;\r\n\r\n                    let maxInputDeltaValue = inputMaxValue - inputMinValue;\r\n                    let newTargetInputValue = Math.round((maxInputDeltaValue * targetSliderPosXInContainer) / maxDistanceBetweenSliders + inputMinValue);\r\n\r\n                    let temp1 = newTargetInputValue / Number.parseInt(modelData.valueRound);\r\n                    let temp2 = Math.round(temp1);\r\n                    let temp3 = temp2 * Number.parseInt(modelData.valueRound);\r\n                    newTargetInputValue = temp3;\r\n\r\n                    //targetInput.value = newTargetInputValue;\r\n                    view.updateInputs({ lastValue: newTargetInputValue });\r\n                    //view.lastSliderInstance.inputDOMElement.value = newTargetInputValue;\r\n\r\n                    let inputsValueRangeTextInTitle = inputsValueRangeInTitle.textContent;\r\n                    let splitedInputsValueRangeTextInTitle = inputsValueRangeTextInTitle.split(/\\s/i);\r\n                    splitedInputsValueRangeTextInTitle[2] = newTargetInputValue.toString() + modelData.valueType;\r\n                    inputsValueRangeTextInTitle = splitedInputsValueRangeTextInTitle.join(\" \");\r\n                    inputsValueRangeInTitle.textContent = inputsValueRangeTextInTitle;\r\n                }\r\n            }\r\n            view.setLeftMarginTEMP(targetSliderBorder, Number.parseInt(targetSlider.style.marginLeft) - 2);\r\n            view.setLeftMarginTEMP(otherSliderBorder, Number.parseInt(otherSlider.style.marginLeft) - 2);\r\n        }\r\n\r\n        function mouseUp(event) {\r\n            document.removeEventListener(\"mousemove\", mouseMove);\r\n            document.removeEventListener(\"mouseup\", mouseUp);\r\n            document.removeEventListener(\"touchmove\", mouseMove);\r\n            document.removeEventListener(\"touchend\", mouseUp);\r\n\r\n            mouseMove({ isLastUpdate: true });\r\n\r\n            view.update();//вызывается update() из контроллера, который обновляет все представления(или какието определенные) и модель(если нужно)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/RangeSlider/mvc/SliderView.js?");

/***/ }),

/***/ "./src/components/RangeSlider/mvc/View.js":
/*!************************************************!*\
  !*** ./src/components/RangeSlider/mvc/View.js ***!
  \************************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\nclass View {\r\n    constructor() {\r\n    }\r\n\r\n    setLeftMargin(element, marginValue) {\r\n        let result = marginValue + \"px\";\r\n        element.style.marginLeft = result;\r\n        return result;\r\n    }\r\n    setSize(element, widthValue) {\r\n        let result = widthValue + \"px\";\r\n        element.style.width = result;\r\n        return result;\r\n    }\r\n    setLeftMarginTEMP(element, marginValue) {\r\n        let result = marginValue + \"px\";\r\n        element.style.marginLeft = result;\r\n        return result;\r\n    }\r\n    setWidthTEMP(element, widthValue) {\r\n        let result = widthValue + \"px\";\r\n        element.style.width = result;\r\n        return result;\r\n    }\r\n}\r\n\r\n/* class OptionsPanelView extends View {\r\n    constructor(elements) {\r\n        super(elements);\r\n        //...\r\n    }\r\n} */\n\n//# sourceURL=webpack:///./src/components/RangeSlider/mvc/View.js?");

/***/ }),

/***/ "./src/pages/TestPage.js":
/*!*******************************!*\
  !*** ./src/pages/TestPage.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_RangeSlider_RangeSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/RangeSlider/RangeSlider.js */ \"./src/components/RangeSlider/RangeSlider.js\");\n/* harmony import */ var _TestPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestPage.scss */ \"./src/pages/TestPage.scss\");\n/* harmony import */ var _TestPage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TestPage_scss__WEBPACK_IMPORTED_MODULE_1__);\n//import { app } from \"../app.js\";\r\n/* import { rangeSliderScript } from \"../components/RangeSlider/RangeSlider.js\";\r\nrangeSliderScript(); */\r\n\r\n\r\n\r\n \n\n//# sourceURL=webpack:///./src/pages/TestPage.js?");

/***/ }),

/***/ "./src/pages/TestPage.scss":
/*!*********************************!*\
  !*** ./src/pages/TestPage.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./TestPage.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/TestPage.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/pages/TestPage.scss?");

/***/ })

/******/ });