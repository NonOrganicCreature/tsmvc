/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/fonts/hack-bold.woff":
/*!**********************************!*\
  !*** ./src/fonts/hack-bold.woff ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/hack-bold.woff");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game/Animation/Animation.ts":
/*!*****************************************!*\
  !*** ./src/game/Animation/Animation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityAnimation": () => (/* binding */ EntityAnimation)
/* harmony export */ });
var EntityAnimation = /** @class */ (function () {
    function EntityAnimation(ends, timingFunction, scaleParams) {
        if (scaleParams === void 0) { scaleParams = 1; }
        this.starts = performance.now();
        this.current = this.starts + 1;
        this.ends = ends;
        this.timingFunction = timingFunction;
        this.scaleParams = scaleParams;
    }
    EntityAnimation.prototype.progress = function () {
        return (this.current - this.starts) / (this.ends - this.starts);
    };
    return EntityAnimation;
}());



/***/ }),

/***/ "./src/game/Animation/BotDesctrutionParticleAnimation.ts":
/*!***************************************************************!*\
  !*** ./src/game/Animation/BotDesctrutionParticleAnimation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionParticleAnimation": () => (/* binding */ BotDestructionParticleAnimation)
/* harmony export */ });
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ViewModel/BotDestructionViewModel */ "./src/game/ViewModel/BotDestructionViewModel.ts");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation */ "./src/game/Animation/Animation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BotDestructionParticleAnimation = /** @class */ (function (_super) {
    __extends(BotDestructionParticleAnimation, _super);
    function BotDestructionParticleAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BotDestructionParticleAnimation.prototype.animate = function (currentViewModel) {
        if (!this.startViewModel) {
            this.startViewModel = new _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_1__.BotDestructionViewModel(currentViewModel.radius, currentViewModel.color, currentViewModel.position);
        }
        this.current = performance.now();
        var newPosition = new _Model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(0, 0, this.startViewModel.position.directionX, this.startViewModel.position.directionY);
        newPosition.x =
            this.startViewModel.position.x +
                this.startViewModel.position.directionX *
                    this.timingFunction(this.progress()) *
                    this.scaleParams;
        newPosition.y =
            this.startViewModel.position.y +
                this.startViewModel.position.directionY *
                    this.timingFunction(this.progress()) *
                    this.scaleParams;
        var opacity = (1 - this.progress()) *
            this.startViewModel.opacity;
        return { newPosition: newPosition, opacity: opacity < 0 ? 0 : opacity };
    };
    return BotDestructionParticleAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_2__.EntityAnimation));



/***/ }),

/***/ "./src/game/Animation/PlayerAttackAnimation.ts":
/*!*****************************************************!*\
  !*** ./src/game/Animation/PlayerAttackAnimation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackAnimation": () => (/* binding */ PlayerAttackAnimation)
/* harmony export */ });
/* harmony import */ var _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ViewModel/PlayerAttackViewModel */ "./src/game/ViewModel/PlayerAttackViewModel.ts");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation */ "./src/game/Animation/Animation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PlayerAttackAnimation = /** @class */ (function (_super) {
    __extends(PlayerAttackAnimation, _super);
    function PlayerAttackAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerAttackAnimation.prototype.animate = function (currentViewModel) {
        if (!this.startViewModel) {
            this.startViewModel = new _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_0__.PlayerAttackViewModel(currentViewModel.radius, currentViewModel.color, currentViewModel.position);
        }
        this.current = performance.now();
        var radius = this.scaleParams *
            this.startViewModel.radius *
            this.timingFunction(this.progress());
        return radius;
    };
    return PlayerAttackAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_1__.EntityAnimation));



/***/ }),

/***/ "./src/game/Animation/TimingFunctions.ts":
/*!***********************************************!*\
  !*** ./src/game/Animation/TimingFunctions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimingFunctions": () => (/* binding */ TimingFunctions)
/* harmony export */ });
var TimingFunctions;
(function (TimingFunctions) {
    TimingFunctions.quad = function (progress) {
        return Math.pow(progress, 2);
    };
    TimingFunctions.bow = function (progress, elastic) {
        if (elastic === void 0) { elastic = 0.5; }
        return Math.pow(progress, 2) * ((elastic + 1) * progress - elastic);
    };
})(TimingFunctions || (TimingFunctions = {}));



/***/ }),

/***/ "./src/game/Collisions/CircleCollider.ts":
/*!***********************************************!*\
  !*** ./src/game/Collisions/CircleCollider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleCollider": () => (/* binding */ CircleCollider)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils */ "./src/game/Utils/index.ts");
/* harmony import */ var _Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collider */ "./src/game/Collisions/Collider.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CircleCollider = /** @class */ (function (_super) {
    __extends(CircleCollider, _super);
    function CircleCollider(entity, radius) {
        var _this = _super.call(this, entity) || this;
        _this.radius = 0;
        _this.radius = radius;
        _this.entity.viewModel.registerObserver(_this);
        return _this;
    }
    CircleCollider.prototype.collided = function (target) {
        if (target instanceof CircleCollider) {
            return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.distanceBetween)(this.entity.viewModel.position, target.entity.viewModel.position) <= (target.entity.viewModel.radius + this.radius);
        }
        return false;
    };
    CircleCollider.prototype.onNotifyCallback = function (params) {
        this.radius = params.radius;
    };
    return CircleCollider;
}(_Collider__WEBPACK_IMPORTED_MODULE_1__.Collider));



/***/ }),

/***/ "./src/game/Collisions/Collider.ts":
/*!*****************************************!*\
  !*** ./src/game/Collisions/Collider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collider": () => (/* binding */ Collider)
/* harmony export */ });
/* harmony import */ var _Observing_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observing/Observer */ "./src/game/Observing/Observer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Collider = /** @class */ (function (_super) {
    __extends(Collider, _super);
    function Collider(entity) {
        var _this = _super.call(this) || this;
        _this.entity = entity;
        return _this;
    }
    return Collider;
}(_Observing_Observer__WEBPACK_IMPORTED_MODULE_0__.Observer));



/***/ }),

/***/ "./src/game/Controller/BotController.ts":
/*!**********************************************!*\
  !*** ./src/game/Controller/BotController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotController": () => (/* binding */ BotController)
/* harmony export */ });
/* harmony import */ var _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Decorators/InputableController */ "./src/game/Decorators/InputableController.ts");
/* harmony import */ var _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enum/EntityState */ "./src/game/Enum/EntityState.ts");
/* harmony import */ var _Model_Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotController = /** @class */ (function (_super) {
    __extends(BotController, _super);
    function BotController(botEntity) {
        return _super.call(this, botEntity) || this;
    }
    BotController.prototype.performAction = function () {
        switch (this.entity.state) {
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Idle:
                {
                    // binding this.entity param cause in is only one controller and this.entity changes every frame 
                    setTimeout((function (entity) {
                        entity.state = _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving;
                    }).bind(this, this.entity), 1000);
                    return;
                }
                break;
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving:
                {
                    var x = this.entity.viewModel.position.x;
                    var y = this.entity.viewModel.position.y;
                    this.entity.viewModel.position = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(x + 1 * this.entity.viewModel.position.directionX, y + 1 * this.entity.viewModel.position.directionY, this.entity.viewModel.position.directionX, this.entity.viewModel.position.directionY);
                }
                break;
        }
    };
    BotController.prototype.inputEventHandler = function (event) {
    };
    BotController = __decorate([
        _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__.inputable,
        __metadata("design:paramtypes", [_Model_Entity__WEBPACK_IMPORTED_MODULE_2__.Entity])
    ], BotController);
    return BotController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_4__.EntityController));



/***/ }),

/***/ "./src/game/Controller/EntityController.ts":
/*!*************************************************!*\
  !*** ./src/game/Controller/EntityController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityController": () => (/* binding */ EntityController)
/* harmony export */ });
var EntityController = /** @class */ (function () {
    function EntityController(e) {
        this._entity = e;
    }
    Object.defineProperty(EntityController.prototype, "entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: false,
        configurable: true
    });
    return EntityController;
}());



/***/ }),

/***/ "./src/game/Controller/ParticleController.ts":
/*!***************************************************!*\
  !*** ./src/game/Controller/ParticleController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticleController": () => (/* binding */ ParticleController)
/* harmony export */ });
/* harmony import */ var _Model_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Player */ "./src/game/Model/Player.ts");
/* harmony import */ var _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/PlayerAttackParticle */ "./src/game/Model/PlayerAttackParticle.ts");
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Model_Bot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Bot */ "./src/game/Model/Bot.ts");
/* harmony import */ var _Model_BotDestructionParticle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/BotDestructionParticle */ "./src/game/Model/BotDestructionParticle.ts");
/* harmony import */ var _View_BotDestructionView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../View/BotDestructionView */ "./src/game/View/BotDestructionView.ts");
/* harmony import */ var _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ViewModel/BotDestructionViewModel */ "./src/game/ViewModel/BotDestructionViewModel.ts");
/* harmony import */ var _Animation_BotDesctrutionParticleAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Animation/BotDesctrutionParticleAnimation */ "./src/game/Animation/BotDesctrutionParticleAnimation.ts");
/* harmony import */ var _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Animation/TimingFunctions */ "./src/game/Animation/TimingFunctions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










var ParticleController = /** @class */ (function (_super) {
    __extends(ParticleController, _super);
    function ParticleController(ctx) {
        var _this = _super.call(this, null) || this;
        _this.ctx = ctx;
        return _this;
    }
    ParticleController.prototype.performAction = function () {
        var _this = this;
        // delete expired particles
        _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles = _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.filter(function (particle) { return !!particle.animation; });
        // transform particles
        _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.forEach(function (particle) {
            if (particle.animation) {
                if (particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_1__.PlayerAttackParticle) {
                    particle.viewModel.radius = particle.animation.animate(particle.viewModel);
                }
                if (particle instanceof _Model_BotDestructionParticle__WEBPACK_IMPORTED_MODULE_5__.BotDestructionParticle) {
                    var animationParams = particle.animation.animate(particle.viewModel);
                    particle.viewModel.position = animationParams.newPosition;
                    particle.viewModel.opacity = animationParams.opacity;
                }
                if (particle.animation.progress() >= 1) {
                    particle.animation = null;
                }
            }
        });
        // check collisions
        _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.forEach(function (particle) {
            _Store__WEBPACK_IMPORTED_MODULE_3__.store.entities.forEach(function (entity) {
                if (particle.collider.collided(entity.collider)) {
                    if (particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_1__.PlayerAttackParticle) {
                        if (entity instanceof _Model_Player__WEBPACK_IMPORTED_MODULE_0__.Player) {
                            return;
                        }
                        if (entity instanceof _Model_Bot__WEBPACK_IMPORTED_MODULE_4__.Bot) {
                            var BOT_DESTRUCTION_PARTICLE_COUNT = 7;
                            for (var i = 0; i < BOT_DESTRUCTION_PARTICLE_COUNT; i++) {
                                var randomDirection = __assign({}, entity.viewModel.position);
                                randomDirection.directionX =
                                    -1 + 2 * Math.random();
                                randomDirection.directionY =
                                    -1 + 2 * Math.random();
                                var botDestructionParticle = new _Model_BotDestructionParticle__WEBPACK_IMPORTED_MODULE_5__.BotDestructionParticle(new _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_7__.BotDestructionViewModel(5, "#fff", randomDirection));
                                botDestructionParticle.animation =
                                    new _Animation_BotDesctrutionParticleAnimation__WEBPACK_IMPORTED_MODULE_8__.BotDestructionParticleAnimation(performance.now() + 300, _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_9__.TimingFunctions.quad, 45);
                                botDestructionParticle.viewModel.registerObserver(new _View_BotDestructionView__WEBPACK_IMPORTED_MODULE_6__.BotDestructionView(_this.ctx));
                                _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.push(botDestructionParticle);
                            }
                            _Store__WEBPACK_IMPORTED_MODULE_3__.store.entities = _Store__WEBPACK_IMPORTED_MODULE_3__.store.entities.filter(function (tEntity) { return tEntity !== entity; });
                        }
                    }
                }
            });
        });
    };
    ParticleController.prototype.inputEventHandler = function (event) { };
    return ParticleController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_2__.EntityController));



/***/ }),

/***/ "./src/game/Controller/PlayerController.ts":
/*!*************************************************!*\
  !*** ./src/game/Controller/PlayerController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerController": () => (/* binding */ PlayerController)
/* harmony export */ });
/* harmony import */ var _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Decorators/InputableController */ "./src/game/Decorators/InputableController.ts");
/* harmony import */ var _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enum/EntityState */ "./src/game/Enum/EntityState.ts");
/* harmony import */ var _Model_Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Model/PlayerAttackParticle */ "./src/game/Model/PlayerAttackParticle.ts");
/* harmony import */ var _Animation_PlayerAttackAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Animation/PlayerAttackAnimation */ "./src/game/Animation/PlayerAttackAnimation.ts");
/* harmony import */ var _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Animation/TimingFunctions */ "./src/game/Animation/TimingFunctions.ts");
/* harmony import */ var _View_PlayerAttackParticleView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../View/PlayerAttackParticleView */ "./src/game/View/PlayerAttackParticleView.ts");
/* harmony import */ var _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ViewModel/PlayerAttackViewModel */ "./src/game/ViewModel/PlayerAttackViewModel.ts");
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pageWrapper */ "./src/pageWrapper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController(playerEntity) {
        var _this = _super.call(this, playerEntity) || this;
        _this.keysPressed = {};
        return _this;
    }
    PlayerController.prototype.performAction = function () {
        var _this = this;
        switch (this.entity.state) {
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Idle:
                {
                    this.entity.viewModel.position =
                        this.entity.viewModel.position;
                    return;
                }
                break;
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving:
                {
                    var x = this.entity.viewModel.position.x;
                    var y = this.entity.viewModel.position.y;
                    var dX = this.entity.viewModel.position.directionX;
                    var dY = this.entity.viewModel.position.directionY;
                    this.entity.viewModel.position = __assign(__assign({}, this.entity.viewModel.position), { x: x + 5 * dX, y: y + 5 * dY });
                    _Store__WEBPACK_IMPORTED_MODULE_5__.store.particles.forEach(function (particle) {
                        if (particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__.PlayerAttackParticle) {
                            particle.viewModel.position = __assign({}, _this.entity.viewModel.position);
                        }
                    });
                }
                break;
        }
    };
    PlayerController.prototype.inputEventHandler = function (event) {
        var _this = this;
        // change direction on arrow keys pressed
        var currentPosition = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(this.entity.viewModel.position.x, this.entity.viewModel.position.y, 0, 0);
        if (event.type === "keydown") {
            this.entity.state = _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving;
            this.keysPressed[event.key] = true;
        }
        if (event.type === "keyup") {
            this.keysPressed[event.key] = false;
            this.entity.viewModel.position = currentPosition;
        }
        Object.keys(this.keysPressed).forEach(function (keyName) {
            if (_this.keysPressed[keyName]) {
                switch (keyName) {
                    case "ArrowUp":
                        {
                            currentPosition.directionY = -1;
                        }
                        break;
                    case "ArrowDown":
                        {
                            currentPosition.directionY = 1;
                        }
                        break;
                    case "ArrowLeft":
                        {
                            currentPosition.directionX = -1;
                        }
                        break;
                    case "ArrowRight":
                        {
                            currentPosition.directionX = 1;
                        }
                        break;
                    case " ":
                        {
                            if (_Store__WEBPACK_IMPORTED_MODULE_5__.store.particles.filter(function (particle) {
                                return particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__.PlayerAttackParticle;
                            })[0]) {
                                return;
                            }
                            var playerAttackParticle = new _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__.PlayerAttackParticle(new _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_10__.PlayerAttackViewModel(10, "#00f", _Store__WEBPACK_IMPORTED_MODULE_5__.store.playerEntity.viewModel.position));
                            playerAttackParticle.animation =
                                new _Animation_PlayerAttackAnimation__WEBPACK_IMPORTED_MODULE_7__.PlayerAttackAnimation(performance.now() + 200, _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_8__.TimingFunctions.quad, 3);
                            playerAttackParticle.viewModel.registerObserver(new _View_PlayerAttackParticleView__WEBPACK_IMPORTED_MODULE_9__.PlayerAttackParticleView((0,_pageWrapper__WEBPACK_IMPORTED_MODULE_11__.getCanvasContext)()));
                            _Store__WEBPACK_IMPORTED_MODULE_5__.store.particles.push(playerAttackParticle);
                        }
                        break;
                }
            }
        });
        this.entity.viewModel.position = currentPosition;
    };
    PlayerController = __decorate([
        _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__.inputable,
        __metadata("design:paramtypes", [_Model_Entity__WEBPACK_IMPORTED_MODULE_2__.Entity])
    ], PlayerController);
    return PlayerController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_4__.EntityController));



/***/ }),

/***/ "./src/game/Decorators/InputableController.ts":
/*!****************************************************!*\
  !*** ./src/game/Decorators/InputableController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputable": () => (/* binding */ inputable)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inputable = function (target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            window.addEventListener('keydown', target.prototype.inputEventHandler.bind(_this));
            window.addEventListener('keyup', target.prototype.inputEventHandler.bind(_this));
            window.addEventListener('keypress', target.prototype.inputEventHandler.bind(_this));
            return _this;
        }
        return class_1;
    }(target));
};



/***/ }),

/***/ "./src/game/Enum/EntityState.ts":
/*!**************************************!*\
  !*** ./src/game/Enum/EntityState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityState": () => (/* binding */ EntityState)
/* harmony export */ });
var EntityState;
(function (EntityState) {
    EntityState[EntityState["Idle"] = 0] = "Idle";
    EntityState[EntityState["Moving"] = 1] = "Moving";
    EntityState[EntityState["Attack"] = 2] = "Attack";
    EntityState[EntityState["Dead"] = 3] = "Dead";
})(EntityState || (EntityState = {}));



/***/ }),

/***/ "./src/game/Model/Bot.ts":
/*!*******************************!*\
  !*** ./src/game/Model/Bot.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bot": () => (/* binding */ Bot)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/game/Model/Stats.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Bot = /** @class */ (function (_super) {
    __extends(Bot, _super);
    function Bot(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this._stats = new _Stats__WEBPACK_IMPORTED_MODULE_2__.Stats(2, 100);
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, _this.viewModel.radius);
        return _this;
    }
    Object.defineProperty(Bot.prototype, "stats", {
        get: function () {
            return this._stats;
        },
        set: function (value) {
            this._stats = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bot;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/game/Model/BotDestructionParticle.ts":
/*!**************************************************!*\
  !*** ./src/game/Model/BotDestructionParticle.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionParticle": () => (/* binding */ BotDestructionParticle)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/game/Model/Particle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BotDestructionParticle = /** @class */ (function (_super) {
    __extends(BotDestructionParticle, _super);
    function BotDestructionParticle(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, _this.viewModel.radius);
        return _this;
    }
    return BotDestructionParticle;
}(_Particle__WEBPACK_IMPORTED_MODULE_1__.Particle));



/***/ }),

/***/ "./src/game/Model/Entity.ts":
/*!**********************************!*\
  !*** ./src/game/Model/Entity.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var _Enum_EntityState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enum/EntityState */ "./src/game/Enum/EntityState.ts");

var Entity = /** @class */ (function () {
    function Entity(viewModel) {
        this._currentTarget = null;
        this._state = _Enum_EntityState__WEBPACK_IMPORTED_MODULE_0__.EntityState.Idle;
        this._viewModel = viewModel;
    }
    Object.defineProperty(Entity.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "currentTarget", {
        get: function () {
            return this._currentTarget;
        },
        set: function (value) {
            this._currentTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "collider", {
        get: function () {
            return this._collider;
        },
        set: function (value) {
            this._collider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "animation", {
        get: function () {
            return this._animation;
        },
        set: function (value) {
            this._animation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "viewModel", {
        get: function () {
            return this._viewModel;
        },
        set: function (value) {
            this._viewModel = value;
        },
        enumerable: false,
        configurable: true
    });
    return Entity;
}());



/***/ }),

/***/ "./src/game/Model/Particle.ts":
/*!************************************!*\
  !*** ./src/game/Model/Particle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": () => (/* binding */ Particle)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Particle = /** @class */ (function (_super) {
    __extends(Particle, _super);
    function Particle(viewModel) {
        return _super.call(this, viewModel) || this;
    }
    return Particle;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity));



/***/ }),

/***/ "./src/game/Model/Player.ts":
/*!**********************************!*\
  !*** ./src/game/Model/Player.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/game/Model/Stats.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this._stats = new _Stats__WEBPACK_IMPORTED_MODULE_2__.Stats(2, 100);
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, 0);
        return _this;
    }
    Object.defineProperty(Player.prototype, "stats", {
        get: function () {
            return this._stats;
        },
        set: function (value) {
            this._stats = value;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/game/Model/PlayerAttackParticle.ts":
/*!************************************************!*\
  !*** ./src/game/Model/PlayerAttackParticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackParticle": () => (/* binding */ PlayerAttackParticle)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/game/Model/Particle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PlayerAttackParticle = /** @class */ (function (_super) {
    __extends(PlayerAttackParticle, _super);
    function PlayerAttackParticle(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, _this.viewModel.radius);
        return _this;
    }
    return PlayerAttackParticle;
}(_Particle__WEBPACK_IMPORTED_MODULE_1__.Particle));



/***/ }),

/***/ "./src/game/Model/Position.ts":
/*!************************************!*\
  !*** ./src/game/Model/Position.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => (/* binding */ Position)
/* harmony export */ });
var Position = /** @class */ (function () {
    function Position(x, y, directionX, directionY) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
    }
    return Position;
}());



/***/ }),

/***/ "./src/game/Model/Stats.ts":
/*!*********************************!*\
  !*** ./src/game/Model/Stats.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
var Stats = /** @class */ (function () {
    function Stats(speed, health) {
        this.speed = speed;
        this.health = health;
    }
    return Stats;
}());



/***/ }),

/***/ "./src/game/Observing/Observable.ts":
/*!******************************************!*\
  !*** ./src/game/Observing/Observable.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.notifyObservers = function (params) {
        this.observers.forEach(function (observer) { return observer.onNotifyCallback(params); });
    };
    return Observable;
}());



/***/ }),

/***/ "./src/game/Observing/Observer.ts":
/*!****************************************!*\
  !*** ./src/game/Observing/Observer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => (/* binding */ Observer)
/* harmony export */ });
var Observer = /** @class */ (function () {
    function Observer() {
    }
    return Observer;
}());



/***/ }),

/***/ "./src/game/Store/index.ts":
/*!*********************************!*\
  !*** ./src/game/Store/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Model_Bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Bot */ "./src/game/Model/Bot.ts");
/* harmony import */ var _Model_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Player */ "./src/game/Model/Player.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _View_BotView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View/BotView */ "./src/game/View/BotView.ts");
/* harmony import */ var _View_PlayerView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../View/PlayerView */ "./src/game/View/PlayerView.ts");
/* harmony import */ var _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ViewModel/BotViewModel */ "./src/game/ViewModel/BotViewModel.ts");
/* harmony import */ var _ViewModel_PlayerViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ViewModel/PlayerViewModel */ "./src/game/ViewModel/PlayerViewModel.ts");








var Store = /** @class */ (function () {
    function Store() {
        this._entities = [];
        this._particles = [];
        this._playerEntity = new _Model_Player__WEBPACK_IMPORTED_MODULE_2__.Player(new _ViewModel_PlayerViewModel__WEBPACK_IMPORTED_MODULE_7__.PlayerViewModel(12, "#00f", new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(0, 0, 0, 0)));
    }
    Store.prototype.initializeDB = function (entityCount, viewsRenderContext) {
        var counter = entityCount;
        while (counter > 0) {
            var randomX_1 = viewsRenderContext.canvas.width * Math.random();
            var randomY_1 = viewsRenderContext.canvas.height * Math.random();
            var randomDirectionX_1 = -1 + 2 * Math.random();
            var randomDirectionY_1 = -1 + 2 * Math.random();
            var botEntity = new _Model_Bot__WEBPACK_IMPORTED_MODULE_1__.Bot(new _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_6__.BotViewModel(10, '#fff', new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(randomX_1, randomY_1, randomDirectionX_1, randomDirectionY_1)));
            botEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(botEntity, botEntity.viewModel.radius);
            var botEntityView = new _View_BotView__WEBPACK_IMPORTED_MODULE_4__.BotView(viewsRenderContext);
            botEntity.viewModel.registerObserver(botEntityView);
            this._entities.push(botEntity);
            counter -= 1;
        }
        var randomX = viewsRenderContext.canvas.width * Math.random();
        var randomY = viewsRenderContext.canvas.height * Math.random();
        var randomDirectionX = -1 + 2 * Math.random();
        var randomDirectionY = -1 + 2 * Math.random();
        this._playerEntity.viewModel.position = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(randomX, randomY, randomDirectionX, randomDirectionY);
        this._playerEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(this._playerEntity, this._playerEntity.viewModel.radius);
        this._playerEntity.viewModel.registerObserver(new _View_PlayerView__WEBPACK_IMPORTED_MODULE_5__.PlayerView(viewsRenderContext));
    };
    Object.defineProperty(Store.prototype, "entities", {
        get: function () {
            return this._entities;
        },
        set: function (value) {
            this._entities = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "playerEntity", {
        get: function () {
            return this._playerEntity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "particles", {
        get: function () {
            return this._particles;
        },
        set: function (value) {
            this._particles = value;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.addParticleEntity = function (particle, particleView) {
        // particle.registerObserver(particleView)
        this._entities.push(particle);
    };
    Store.prototype.deleteParticle = function (p) {
        this._entities = this.entities.filter(function (particle) { return particle === p; });
    };
    return Store;
}());
var store = new Store();



/***/ }),

/***/ "./src/game/Utils/index.ts":
/*!*********************************!*\
  !*** ./src/game/Utils/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceBetween": () => (/* binding */ distanceBetween)
/* harmony export */ });
var distanceBetween = function (p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};


/***/ }),

/***/ "./src/game/ViewModel/BotDestructionViewModel.ts":
/*!*******************************************************!*\
  !*** ./src/game/ViewModel/BotDestructionViewModel.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionViewModel": () => (/* binding */ BotDestructionViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotDestructionViewModel = /** @class */ (function (_super) {
    __extends(BotDestructionViewModel, _super);
    function BotDestructionViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._angle = 0;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this._angle = Math.random() * 2 * Math.PI;
        _this.notifyObservers(_this);
        return _this;
    }
    Object.defineProperty(BotDestructionViewModel.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        enumerable: false,
        configurable: true
    });
    return BotDestructionViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/BotViewModel.ts":
/*!********************************************!*\
  !*** ./src/game/ViewModel/BotViewModel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotViewModel": () => (/* binding */ BotViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotViewModel = /** @class */ (function (_super) {
    __extends(BotViewModel, _super);
    function BotViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    return BotViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/PlayerAttackViewModel.ts":
/*!*****************************************************!*\
  !*** ./src/game/ViewModel/PlayerAttackViewModel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackViewModel": () => (/* binding */ PlayerAttackViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerAttackViewModel = /** @class */ (function (_super) {
    __extends(PlayerAttackViewModel, _super);
    function PlayerAttackViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    return PlayerAttackViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/PlayerViewModel.ts":
/*!***********************************************!*\
  !*** ./src/game/ViewModel/PlayerViewModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerViewModel": () => (/* binding */ PlayerViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerViewModel = /** @class */ (function (_super) {
    __extends(PlayerViewModel, _super);
    function PlayerViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    return PlayerViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/ViewMode.ts":
/*!****************************************!*\
  !*** ./src/game/ViewModel/ViewMode.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModel": () => (/* binding */ ViewModel)
/* harmony export */ });
/* harmony import */ var _Observing_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observing/Observable */ "./src/game/Observing/Observable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ViewModel = /** @class */ (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel(radius, color, position) {
        var _this = _super.call(this) || this;
        _this._radius = 30;
        _this._opacity = 1;
        _this._color = "#00f";
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    Object.defineProperty(ViewModel.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (value) {
            this._opacity = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    return ViewModel;
}(_Observing_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable));



/***/ }),

/***/ "./src/game/View/BotDestructionView.ts":
/*!*********************************************!*\
  !*** ./src/game/View/BotDestructionView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionView": () => (/* binding */ BotDestructionView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotDestructionView = /** @class */ (function (_super) {
    __extends(BotDestructionView, _super);
    function BotDestructionView(ctx) {
        return _super.call(this, ctx) || this;
    }
    BotDestructionView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(vm.position.x, vm.position.y);
        this.ctx.rotate(vm.angle);
        this.ctx.fillStyle = vm.color;
        this.ctx.globalAlpha = vm.opacity;
        this.ctx.moveTo(0, 0 - vm.radius);
        this.ctx.lineTo(0 + vm.radius, 0 - vm.radius / 2);
        this.ctx.lineTo(0 - vm.radius / 2, 0 + vm.radius);
        this.ctx.lineTo(0 - vm.radius, 0 - vm.radius / 6);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    };
    return BotDestructionView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/BotView.ts":
/*!**********************************!*\
  !*** ./src/game/View/BotView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotView": () => (/* binding */ BotView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotView = /** @class */ (function (_super) {
    __extends(BotView, _super);
    function BotView(ctx) {
        return _super.call(this, ctx) || this;
    }
    BotView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.beginPath();
        this.ctx.fillStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    return BotView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/EntityView.ts":
/*!*************************************!*\
  !*** ./src/game/View/EntityView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityView": () => (/* binding */ EntityView)
/* harmony export */ });
/* harmony import */ var _Observing_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observing/Observer */ "./src/game/Observing/Observer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EntityView = /** @class */ (function (_super) {
    __extends(EntityView, _super);
    function EntityView(ctx) {
        var _this = _super.call(this) || this;
        _this.ctx = ctx;
        return _this;
    }
    EntityView.prototype.onNotifyCallback = function (params) {
        this.draw(params);
    };
    return EntityView;
}(_Observing_Observer__WEBPACK_IMPORTED_MODULE_0__.Observer));



/***/ }),

/***/ "./src/game/View/PlayerAttackParticleView.ts":
/*!***************************************************!*\
  !*** ./src/game/View/PlayerAttackParticleView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackParticleView": () => (/* binding */ PlayerAttackParticleView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerAttackParticleView = /** @class */ (function (_super) {
    __extends(PlayerAttackParticleView, _super);
    function PlayerAttackParticleView(ctx) {
        return _super.call(this, ctx) || this;
    }
    PlayerAttackParticleView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#000';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 6 < 0 ? 0 : vm.radius - 6, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#001';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 5 < 0 ? 0 : vm.radius - 5, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#003';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 4 < 0 ? 0 : vm.radius - 4, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#005';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 3 < 0 ? 0 : vm.radius - 3, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#007';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 2 < 0 ? 0 : vm.radius - 2, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#00a';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 1 < 0 ? 0 : vm.radius - 1, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    };
    return PlayerAttackParticleView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/PlayerView.ts":
/*!*************************************!*\
  !*** ./src/game/View/PlayerView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerView": () => (/* binding */ PlayerView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerView = /** @class */ (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView(ctx) {
        return _super.call(this, ctx) || this;
    }
    PlayerView.prototype.draw = function (params) {
        var vm = params;
        if (vm.position.directionY !== 0 || vm.position.directionX !== 0) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "#55f";
            this.ctx.arc(vm.position.x - 14 * vm.position.directionX, vm.position.y - 14 * vm.position.directionY, vm.radius - 8, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#66f";
            this.ctx.arc(vm.position.x - 12 * vm.position.directionX, vm.position.y - 12 * vm.position.directionY, vm.radius - 6, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#77f";
            this.ctx.arc(vm.position.x - 8 * vm.position.directionX, vm.position.y - 8 * vm.position.directionY, vm.radius - 4, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#88f";
            this.ctx.arc(vm.position.x - 5 * vm.position.directionX, vm.position.y - 5 * vm.position.directionY, vm.radius - 2, 0, 2 * Math.PI);
            this.ctx.fill();
        }
        this.ctx.beginPath();
        this.ctx.fillStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    return PlayerView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/main.ts":
/*!**************************!*\
  !*** ./src/game/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameStart": () => (/* binding */ gameStart)
/* harmony export */ });
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageWrapper */ "./src/pageWrapper.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Controller_BotController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller/BotController */ "./src/game/Controller/BotController.ts");
/* harmony import */ var _Controller_PlayerController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller/PlayerController */ "./src/game/Controller/PlayerController.ts");
/* harmony import */ var _Controller_ParticleController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controller/ParticleController */ "./src/game/Controller/ParticleController.ts");





var c_ctx = (0,_pageWrapper__WEBPACK_IMPORTED_MODULE_0__.getCanvasContext)();
var botController = new _Controller_BotController__WEBPACK_IMPORTED_MODULE_2__.BotController(null);
var playerController = new _Controller_PlayerController__WEBPACK_IMPORTED_MODULE_3__.PlayerController(null);
var particleController = new _Controller_ParticleController__WEBPACK_IMPORTED_MODULE_4__.ParticleController(c_ctx);
var ENTITY_TO_GENERATE = 30;
var gameStart = function () {
    _Store__WEBPACK_IMPORTED_MODULE_1__.store.initializeDB(ENTITY_TO_GENERATE, (0,_pageWrapper__WEBPACK_IMPORTED_MODULE_0__.getCanvasContext)());
    requestAnimationFrame(main);
};
var main = function () {
    c_ctx.clearRect(0, 0, c_ctx.canvas.width, c_ctx.canvas.height);
    _Store__WEBPACK_IMPORTED_MODULE_1__.store.entities.forEach(function (entity) {
        botController.entity = entity;
        botController.performAction();
    });
    var pc = particleController;
    pc.performAction();
    playerController.entity = _Store__WEBPACK_IMPORTED_MODULE_1__.store.playerEntity;
    playerController.performAction();
    requestAnimationFrame(main);
};



/***/ }),

/***/ "./src/pageWrapper.ts":
/*!****************************!*\
  !*** ./src/pageWrapper.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCanvas": () => (/* binding */ initCanvas),
/* harmony export */   "getCanvasContext": () => (/* binding */ getCanvasContext),
/* harmony export */   "resetPageStyles": () => (/* binding */ resetPageStyles)
/* harmony export */ });
var c_context = document.getElementById('c_game').getContext('2d');
var initCanvas = function () {
    c_context.canvas.width = window.innerWidth;
    c_context.canvas.height = window.innerHeight;
    c_context.canvas.style.backgroundColor = "#000";
};
var getCanvasContext = function () {
    return c_context;
};
window.onresize = function () {
    getCanvasContext().canvas.width = window.innerWidth;
    getCanvasContext().canvas.height = window.innerHeight;
};
var resetPageStyles = function () {
    document.body.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';
    c_context.canvas.style.width = '100%';
    c_context.canvas.style.height = '100%';
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts_hack_bold_woff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/hack-bold.woff */ "./src/fonts/hack-bold.woff");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageWrapper */ "./src/pageWrapper.ts");
/* harmony import */ var _game_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/main */ "./src/game/main.ts");




(0,_pageWrapper__WEBPACK_IMPORTED_MODULE_2__.resetPageStyles)();
(0,_pageWrapper__WEBPACK_IMPORTED_MODULE_2__.initCanvas)();
(0,_game_main__WEBPACK_IMPORTED_MODULE_3__.gameStart)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c212Yy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZm9udHMvaGFjay1ib2xkLndvZmYiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0FuaW1hdGlvbi9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9BbmltYXRpb24vQm90RGVzY3RydXRpb25QYXJ0aWNsZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0FuaW1hdGlvbi9QbGF5ZXJBdHRhY2tBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9BbmltYXRpb24vVGltaW5nRnVuY3Rpb25zLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQ29sbGlzaW9ucy9DaXJjbGVDb2xsaWRlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0NvbGxpc2lvbnMvQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL0JvdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL0VudGl0eUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL1BhcnRpY2xlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0RlY29yYXRvcnMvSW5wdXRhYmxlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0VudW0vRW50aXR5U3RhdGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9Cb3QudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9Cb3REZXN0cnVjdGlvblBhcnRpY2xlLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvRW50aXR5LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9QbGF5ZXJBdHRhY2tQYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL1Bvc2l0aW9uLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9PYnNlcnZpbmcvT2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL09ic2VydmluZy9PYnNlcnZlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvQm90Vmlld01vZGVsLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlld01vZGVsL1BsYXllckF0dGFja1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXdNb2RlbC9QbGF5ZXJWaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvVmlld01vZGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3L0JvdERlc3RydWN0aW9uVmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvQm90Vmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvRW50aXR5Vmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvUGxheWVyQXR0YWNrUGFydGljbGVWaWV3LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlldy9QbGF5ZXJWaWV3LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9wYWdlV3JhcHBlci50cyIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHNtdmMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzbXZjL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHNtdmMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUUvZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQ25DQSxpRUFBZSxxQkFBdUIseUJBQXlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDL0QsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7Ozs7QUFJbkc7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTs7QUFFcEMsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRDs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7Ozs7OztBQ1hBO0lBU0kseUJBQVksSUFBWSxFQUFFLGNBQThDLEVBQUUsV0FBdUI7UUFBdkIsNkNBQXVCO1FBQzdGLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO0lBQ2xDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUdMLHNCQUFDO0FBQUQsQ0FBQztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJrQjtBQUNrQztBQUVqQztBQUU5QztJQUE4QyxtREFBZTtJQUE3RDs7SUFnQ0EsQ0FBQztJQS9CRyxpREFBTyxHQUFQLFVBQVEsZ0JBQTJCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx1RkFBdUIsQ0FDN0MsZ0JBQWdCLENBQUMsTUFBTSxFQUN2QixnQkFBZ0IsQ0FBQyxLQUFLLEVBQ3RCLGdCQUFnQixDQUFDLFFBQVEsQ0FDNUIsQ0FBQztTQUNMO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBTSxXQUFXLEdBQUcsSUFBSSxxREFBUSxDQUM1QixDQUFDLEVBQ0QsQ0FBQyxFQUNELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUMxQyxDQUFDO1FBRUYsV0FBVyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVO29CQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN6QixXQUFXLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVU7b0JBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pCLElBQU0sT0FBTyxHQUNULENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxPQUFPLEVBQUUsV0FBVyxlQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFDTCxzQ0FBQztBQUFELENBQUMsQ0FoQzZDLHVEQUFlLEdBZ0M1RDtBQUUwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2dDO0FBRTdCO0FBRTlDO0lBQW9DLHlDQUFlO0lBQW5EOztJQWlCQSxDQUFDO0lBaEJHLHVDQUFPLEdBQVAsVUFBUSxnQkFBMkI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1GQUFxQixDQUMzQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQ3ZCLGdCQUFnQixDQUFDLEtBQUssRUFDdEIsZ0JBQWdCLENBQUMsUUFBUSxDQUM1QixDQUFDO1NBQ0w7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFNLE1BQU0sR0FDUixJQUFJLENBQUMsV0FBVztZQUNRLElBQUksQ0FBQyxjQUFlLENBQUMsTUFBTTtZQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQ0FqQm1DLHVEQUFlLEdBaUJsRDtBQUVnQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJqQyxJQUFVLGVBQWUsQ0FVeEI7QUFWRCxXQUFVLGVBQWU7SUFHUixvQkFBSSxHQUFtQixVQUFDLFFBQWdCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFWSxtQkFBRyxHQUFtQixVQUFDLFFBQWdCLEVBQUUsT0FBcUI7UUFBckIsdUNBQXFCO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ3ZFLENBQUM7QUFDTCxDQUFDLEVBVlMsZUFBZSxLQUFmLGVBQWUsUUFVeEI7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGdCO0FBRUw7QUFFckM7SUFBNkIsa0NBQVE7SUFJakMsd0JBQVksTUFBYyxFQUFFLE1BQWM7UUFBMUMsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FHaEI7UUFOTyxZQUFNLEdBQVcsQ0FBQztRQUl0QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDOztJQUNoRCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLE1BQWdCO1FBQ3JCLElBQUksTUFBTSxZQUFZLGNBQWMsRUFBRTtZQUNsQyxPQUFPLHVEQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDN0k7UUFDRCxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixNQUFpQjtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNO0lBQy9CLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQ0FyQjRCLCtDQUFRLEdBcUJwQztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCd0I7QUFFakQ7SUFBZ0MsNEJBQVE7SUFDcEMsa0JBQVksTUFBYztRQUExQixZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07O0lBQ3hCLENBQUM7SUFHTCxlQUFDO0FBQUQsQ0FBQyxDQVArQix5REFBUSxHQU92QztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkM7QUFDWjtBQUNUO0FBQ0k7QUFDUztBQUd0RDtJQUE0QixpQ0FBZ0I7SUFFeEMsdUJBQVksU0FBaUI7ZUFDekIsa0JBQU0sU0FBUyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN2QixLQUFLLCtEQUFnQjtnQkFBRTtvQkFDbkIsaUdBQWlHO29CQUNqRyxVQUFVLENBQUMsQ0FBQyxVQUFDLE1BQWM7d0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsaUVBQWtCO29CQUVyQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7b0JBQ2pDLE9BQU07aUJBQ1Q7Z0JBQUMsTUFBTTtZQUVSLEtBQUssaUVBQWtCO2dCQUFFO29CQUNyQixJQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEQsSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLHFEQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUMzRixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7aUJBQ2pEO2dCQUFDLE1BQU07U0FDWDtJQUNMLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsS0FBb0I7SUFDdEMsQ0FBQztJQTdCQyxhQUFhO1FBRGxCLHNFQUFTO3lDQUdpQixpREFBTTtPQUYzQixhQUFhLENBOEJsQjtJQUFELG9CQUFDO0NBQUEsQ0E5QjJCLCtEQUFnQixHQThCM0M7QUFFdUI7Ozs7Ozs7Ozs7Ozs7OztBQ3RDeEI7SUFHSSwwQkFBWSxDQUFTO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQUksb0NBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU87UUFDdkIsQ0FBQzthQUVELFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDeEIsQ0FBQzs7O09BSkE7SUFRTCx1QkFBQztBQUFELENBQUM7QUFFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCYztBQUM0QjtBQUNmO0FBQ3JCO0FBQ0U7QUFDc0M7QUFDVDtBQUNlO0FBQ2dCO0FBQ2hDO0FBRS9EO0lBQWlDLHNDQUFnQjtJQUU3Qyw0QkFBWSxHQUE2QjtRQUF6QyxZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0lBQ25CLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQUEsaUJBZ0ZDO1FBL0VHLDJCQUEyQjtRQUMzQixtREFBZSxHQUFHLDBEQUFzQixDQUNwQyxVQUFDLFFBQVEsSUFBSyxRQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBcEIsQ0FBb0IsQ0FDckMsQ0FBQztRQUVGLHNCQUFzQjtRQUN0QiwyREFBdUIsQ0FBQyxVQUFDLFFBQVE7WUFDN0IsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO2dCQUNwQixJQUFJLFFBQVEsWUFBWSw2RUFBb0IsRUFBRTtvQkFDMUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ2xELFFBQVEsQ0FBQyxTQUFTLENBQ3JCLENBQUM7aUJBQ0w7Z0JBRUQsSUFBSSxRQUFRLFlBQVksaUZBQXNCLEVBQUU7b0JBQzVDLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUM5QyxRQUFRLENBQUMsU0FBUyxDQUNyQixDQUFDO29CQUNGLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxXQUFXO29CQUN6RCxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTztpQkFDdkQ7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDcEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzdCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILG1CQUFtQjtRQUNuQiwyREFBdUIsQ0FBQyxVQUFDLFFBQVE7WUFDN0IsMERBQXNCLENBQUMsVUFBQyxNQUFNO2dCQUMxQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxRQUFRLFlBQVksNkVBQW9CLEVBQUU7d0JBQzFDLElBQUksTUFBTSxZQUFZLGlEQUFNLEVBQUU7NEJBQzFCLE9BQU87eUJBQ1Y7d0JBQ0QsSUFBSSxNQUFNLFlBQVksMkNBQUcsRUFBRTs0QkFDdkIsSUFBTSw4QkFBOEIsR0FBRyxDQUFDLENBQUM7NEJBQ3pDLEtBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyw4QkFBOEIsRUFDbEMsQ0FBQyxFQUFFLEVBQ0w7Z0NBQ0UsSUFBTSxlQUFlLGdCQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUMvQixDQUFDO2dDQUNGLGVBQWUsQ0FBQyxVQUFVO29DQUN0QixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dDQUMzQixlQUFlLENBQUMsVUFBVTtvQ0FDdEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQ0FDM0IsSUFBTSxzQkFBc0IsR0FDeEIsSUFBSSxpRkFBc0IsQ0FDdEIsSUFBSSx1RkFBdUIsQ0FDdkIsQ0FBQyxFQUNELE1BQU0sRUFDTixlQUFlLENBQ2xCLENBQ0osQ0FBQztnQ0FFTixzQkFBc0IsQ0FBQyxTQUFTO29DQUM1QixJQUFJLHVHQUErQixDQUMvQixXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUN2Qiw0RUFBb0IsRUFDcEIsRUFBRSxDQUNMLENBQUM7Z0NBRU4sc0JBQXNCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUM3QyxJQUFJLHdFQUFrQixDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FDbkMsQ0FBQztnQ0FFRix3REFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzZCQUNoRDs0QkFDRCxrREFBYyxHQUFHLHlEQUFxQixDQUNsQyxVQUFDLE9BQU8sSUFBSyxjQUFPLEtBQUssTUFBTSxFQUFsQixDQUFrQixDQUNsQyxDQUFDO3lCQUNMO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4Q0FBaUIsR0FBakIsVUFBa0IsS0FBb0IsSUFBUyxDQUFDO0lBQ3BELHlCQUFDO0FBQUQsQ0FBQyxDQTFGZ0MsK0RBQWdCLEdBMEZoRDtBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R2dDO0FBQ1o7QUFDVDtBQUNJO0FBQ1M7QUFDckI7QUFDb0M7QUFDTTtBQUNaO0FBQ2E7QUFDRDtBQUN0QjtBQUVyRDtJQUErQixvQ0FBZ0I7SUFHM0MsMEJBQVksWUFBb0I7UUFBaEMsWUFDSSxrQkFBTSxZQUFZLENBQUMsU0FDdEI7UUFKTyxpQkFBVyxHQUFRLEVBQUUsQ0FBQzs7SUFJOUIsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFBQSxpQkFpQ0M7UUFoQ0csUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN2QixLQUFLLCtEQUFnQjtnQkFDakI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUTt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO29CQUNuQyxPQUFPO2lCQUNWO2dCQUNELE1BQU07WUFFVixLQUFLLGlFQUFrQjtnQkFDbkI7b0JBQ0ksSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDckQsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSx5QkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUNqQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQ2IsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUNoQixDQUFDO29CQUVGLDJEQUF1QixDQUFDLGtCQUFRO3dCQUM1QixJQUFJLFFBQVEsWUFBWSw2RUFBb0IsRUFBRTs0QkFDMUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLGdCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3BDLENBQUM7eUJBQ0w7b0JBQ0wsQ0FBQyxDQUFDO2lCQUVMO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsS0FBb0I7UUFBdEMsaUJBNkVDO1FBNUVHLHlDQUF5QztRQUN6QyxJQUFNLGVBQWUsR0FBRyxJQUFJLHFEQUFRLENBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2hDLENBQUMsRUFDRCxDQUFDLENBQ0osQ0FBQztRQUVGLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsaUVBQWtCLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGVBQWU7U0FDbkQ7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQzFDLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsUUFBUSxPQUFPLEVBQUU7b0JBQ2IsS0FBSyxTQUFTO3dCQUNWOzRCQUNJLGVBQWUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ25DO3dCQUNELE1BQU07b0JBQ1YsS0FBSyxXQUFXO3dCQUNaOzRCQUNJLGVBQWUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQzt3QkFDRCxNQUFNO29CQUNWLEtBQUssV0FBVzt3QkFDWjs0QkFDSSxlQUFlLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUNuQzt3QkFDRCxNQUFNO29CQUNWLEtBQUssWUFBWTt3QkFDYjs0QkFDSSxlQUFlLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzt5QkFDbEM7d0JBQ0QsTUFBTTtvQkFFVixLQUFLLEdBQUc7d0JBQ0o7NEJBQ0ksSUFDSSwwREFBc0IsQ0FDbEIsVUFBQyxRQUFRO2dDQUNMLGVBQVEsWUFBWSw2RUFBb0I7NEJBQXhDLENBQXdDLENBQy9DLENBQUMsQ0FBQyxDQUFDLEVBQ047Z0NBQ0UsT0FBTzs2QkFDVjs0QkFDRCxJQUFNLG9CQUFvQixHQUN0QixJQUFJLDZFQUFvQixDQUNwQixJQUFJLG9GQUFxQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQ2hDLHlFQUNhLENBQ2hCLENBQ0osQ0FBQzs0QkFDTixvQkFBb0IsQ0FBQyxTQUFTO2dDQUMxQixJQUFJLG1GQUFxQixDQUNyQixXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUN2Qiw0RUFBb0IsRUFDcEIsQ0FBQyxDQUNKLENBQUM7NEJBQ04sb0JBQW9CLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUMzQyxJQUFJLG9GQUF3QixDQUFDLCtEQUFnQixFQUFFLENBQUMsQ0FDbkQsQ0FBQzs0QkFDRix3REFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3lCQUM5Qzt3QkFDRCxNQUFNO2lCQUNiO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7SUFDckQsQ0FBQztJQXZIQyxnQkFBZ0I7UUFEckIsc0VBQVM7eUNBSW9CLGlEQUFNO09BSDlCLGdCQUFnQixDQXdIckI7SUFBRCx1QkFBQztDQUFBLENBeEg4QiwrREFBZ0IsR0F3SDlDO0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2STVCLElBQU0sU0FBUyxHQUFHLFVBQXdDLE1BQVM7SUFDL0Q7UUFBcUIsMkJBQU07UUFDdkI7WUFBWSxjQUFZO2lCQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7Z0JBQVoseUJBQVk7O1lBQXhCLCtCQUNhLElBQUksVUFJaEI7WUFIRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1lBQ2pGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDL0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7UUFDdEYsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLENBUG9CLE1BQU0sR0FPMUI7QUFDTCxDQUFDO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ2JELElBQUssV0FLSjtBQUxELFdBQUssV0FBVztJQUNaLDZDQUFJO0lBQ0osaURBQU07SUFDTixpREFBTTtJQUNOLDZDQUFJO0FBQ1IsQ0FBQyxFQUxJLFdBQVcsS0FBWCxXQUFXLFFBS2Y7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDZEO0FBRTVCO0FBRUY7QUFFaEM7SUFBa0IsdUJBQU07SUFJcEIsYUFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQUduQjtRQUZHLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx5Q0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDL0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNFQUFjLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDOztJQUNuRSxDQUFDO0lBRUQsc0JBQUksc0JBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU07UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBWTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCxVQUFDO0FBQUQsQ0FBQyxDQWpCaUIsMkNBQU0sR0FpQnZCO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I2RDtBQUV4QjtBQUV0QztJQUFxQywwQ0FBUTtJQUN6QyxnQ0FBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQUVuQjtRQURHLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxzRUFBYyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7SUFDbkUsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxDQUxvQywrQ0FBUSxHQUs1QztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUVqRDtJQVFJLGdCQUFZLFNBQW9CO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLCtEQUFnQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVM7SUFDL0IsQ0FBQztJQUVELHNCQUFJLHlCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWtCO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlDQUFhO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYztRQUM5QixDQUFDO2FBRUQsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUs7UUFDL0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw0QkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUztRQUN6QixDQUFDO2FBRUQsVUFBYSxLQUFlO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSztRQUMxQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVO1FBQzFCLENBQUM7YUFFRCxVQUFjLEtBQXNCO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVO1FBQzFCLENBQUM7YUFFRCxVQUFjLEtBQWdCO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSztRQUMzQixDQUFDOzs7T0FKQTtJQU1MLGFBQUM7QUFBRCxDQUFDO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRGlDO0FBRWxDO0lBQXVCLDRCQUFNO0lBQ3pCLGtCQUFZLFNBQW9CO2VBQzVCLGtCQUFNLFNBQVMsQ0FBQztJQUNwQixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQ0FKc0IsMkNBQU0sR0FJNUI7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1QyQztBQUU1QjtBQUVGO0FBRWhDO0lBQXFCLDBCQUFNO0lBR3ZCLGdCQUFZLFNBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sU0FBUyxDQUFDLFNBR25CO1FBRkcsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlDQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0VBQWMsQ0FBQyxLQUFJLEVBQUUsQ0FBQyxDQUFDOztJQUMvQyxDQUFDO0lBRUQsc0JBQUkseUJBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU07UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBWTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCxhQUFDO0FBQUQsQ0FBQyxDQWhCb0IsMkNBQU0sR0FnQjFCO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUI2RDtBQUV4QjtBQUV0QztJQUFtQyx3Q0FBUTtJQUN2Qyw4QkFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQUVuQjtRQURHLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxzRUFBYyxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7SUFDbkUsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxDQUxrQywrQ0FBUSxHQUsxQztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDWC9CO0lBS0ksa0JBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxVQUFrQixFQUFFLFVBQWtCO1FBQ3BFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7SUFDaEMsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtJQUlJLGVBQVksS0FBYSxFQUFFLE1BQWM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN4QixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7SUFHSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUN2QixDQUFDO0lBRUQscUNBQWdCLEdBQWhCLFVBQWlCLFFBQWtCO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRVMsb0NBQWUsR0FBekIsVUFBMEIsTUFBVztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxJQUFJLGVBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtJQUFBO0lBRUEsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjREO0FBQzNCO0FBRU07QUFDSTtBQUNIO0FBRU07QUFDUztBQUNNO0FBRTlEO0lBS0k7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxpREFBTSxDQUFDLElBQUksdUVBQWUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUkscURBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCw0QkFBWSxHQUFaLFVBQWEsV0FBbUIsRUFBRSxrQkFBNEM7UUFDMUUsSUFBSSxPQUFPLEdBQVcsV0FBVztRQUNqQyxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFFaEIsSUFBTSxTQUFPLEdBQVcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZFLElBQU0sU0FBTyxHQUFXLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4RSxJQUFNLGtCQUFnQixHQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZELElBQU0sa0JBQWdCLEdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFFdkQsSUFBTSxTQUFTLEdBQUcsSUFBSSwyQ0FBRyxDQUFDLElBQUksaUVBQVksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUkscURBQVEsQ0FBQyxTQUFPLEVBQUUsU0FBTyxFQUFFLGtCQUFnQixFQUFFLGtCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzSCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksc0VBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUUsSUFBTSxhQUFhLEdBQUcsSUFBSSxrREFBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3JELFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBRW5ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBTSxPQUFPLEdBQVcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3ZFLElBQU0sT0FBTyxHQUFXLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN4RSxJQUFNLGdCQUFnQixHQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3ZELElBQU0sZ0JBQWdCLEdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUkscURBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO1FBQzFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksc0VBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN6RyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLHdEQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUVyRixDQUFDO0lBRUQsc0JBQUksMkJBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVM7UUFDekIsQ0FBQzthQUVELFVBQWEsS0FBZTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDMUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwrQkFBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWE7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVTtRQUMxQixDQUFDO2FBRUQsVUFBYyxLQUFlO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELGlDQUFpQixHQUFqQixVQUFrQixRQUFnQixFQUFFLFlBQXdCO1FBQ3hELDBDQUEwQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFjLEdBQWQsVUFBZSxDQUFTO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQVEsSUFBSSxlQUFRLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQztJQUNyRSxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFJRCxJQUFNLEtBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO0FBS2hDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Rk0sSUFBTSxlQUFlLEdBQUcsVUFBQyxFQUFZLEVBQUUsRUFBWTtJQUN0RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hzQztBQUV2QztJQUFzQywyQ0FBUztJQUUzQyxpQ0FBWSxNQUFjLEVBQUUsS0FBYSxFQUFFLFFBQWtCO1FBQTdELFlBQ0ksa0JBQU0sTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsU0FNakM7UUFSTyxZQUFNLEdBQUcsQ0FBQztRQUdkLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTTtRQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRO1FBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUN6QyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQzs7SUFDOUIsQ0FBQztJQUVELHNCQUFJLDBDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLENBZHFDLGdEQUFTLEdBYzlDO0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJJO0FBRXZDO0lBQTJCLGdDQUFTO0lBQ2hDLHNCQUFZLE1BQWMsRUFBRSxLQUFhLEVBQUUsUUFBa0I7UUFBN0QsWUFDSSxrQkFBTSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUtqQztRQUpHLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTTtRQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRO1FBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDOztJQUM5QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBUjBCLGdEQUFTLEdBUW5DO0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFFdkM7SUFBb0MseUNBQVM7SUFDekMsK0JBQVksTUFBYyxFQUFFLEtBQWEsRUFBRSxRQUFrQjtRQUE3RCxZQUNJLGtCQUFNLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFNBS2pDO1FBSkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNO1FBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7UUFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUM7O0lBQzlCLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQ0FSbUMsZ0RBQVMsR0FRNUM7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTTtBQUV2QztJQUE4QixtQ0FBUztJQUNuQyx5QkFBWSxNQUFjLEVBQUUsS0FBYSxFQUFFLFFBQWtCO1FBQTdELFlBQ0ksa0JBQU0sTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsU0FLakM7UUFKRyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU07UUFDckIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO1FBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQzs7SUFDOUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQVI2QixnREFBUyxHQVF0QztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1owQjtBQUVyRDtJQUF3Qiw2QkFBVTtJQU05QixtQkFBWSxNQUFjLEVBQUUsS0FBYSxFQUFFLFFBQWtCO1FBQTdELFlBQ0ksaUJBQU8sU0FLVjtRQVhELGFBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFNLEdBQVcsTUFBTSxDQUFDO1FBS3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQy9CLENBQUM7SUFFRCxzQkFBSSw2QkFBTTthQWFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFmRCxVQUFXLEtBQWE7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBU0Qsc0JBQUksNEJBQUs7YUFLVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBUEQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQWU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FMQTtJQU1MLGdCQUFDO0FBQUQsQ0FBQyxDQS9DdUIsNkRBQVUsR0ErQ2pDO0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERxQjtBQUUxQztJQUFpQyxzQ0FBVTtJQUV2Qyw0QkFBWSxHQUE2QjtlQUNyQyxrQkFBTSxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRUQsaUNBQUksR0FBSixVQUFLLE1BQWlCO1FBQ2xCLElBQU0sRUFBRSxHQUE2QixNQUFPO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsT0FBTztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUN0QixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLENBdEJnQyxtREFBVSxHQXNCMUM7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFFMUM7SUFBc0IsMkJBQVU7SUFDNUIsaUJBQVksR0FBNkI7ZUFDckMsa0JBQU0sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxNQUFpQjtRQUNsQixJQUFNLEVBQUUsR0FBaUIsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLENBWnFCLG1EQUFVLEdBWS9CO0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkI2QjtBQUdoRDtJQUFrQyw4QkFBUTtJQUd0QyxvQkFBWSxHQUE2QjtRQUF6QyxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7O0lBQ2xCLENBQUM7SUFFRCxxQ0FBZ0IsR0FBaEIsVUFBaUIsTUFBVztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBR0wsaUJBQUM7QUFBRCxDQUFDLENBYmlDLHlEQUFRLEdBYXpDO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlDO0FBRTFDO0lBQXVDLDRDQUFVO0lBRTdDLGtDQUFZLEdBQTZCO2VBQ3JDLGtCQUFNLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCx1Q0FBSSxHQUFKLFVBQUssTUFBaUI7UUFDbEIsSUFBTSxFQUFFLEdBQTJCLE1BQU87UUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1FBRWpCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNiLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckMsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNkLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUVqQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDYixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQixJ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RTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZitCO0FBQ1g7QUFDdUM7QUFDcEI7QUFFdkMsNkRBQWUsRUFBRTtBQUNqQix3REFBVSxFQUFFO0FBRVoscURBQVMsRUFBRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2hhY2stYm9sZC53b2ZmXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCI7XHJcbmltcG9ydCB7IFRpbWluZ0Z1bmN0aW9ucyB9IGZyb20gXCIuL1RpbWluZ0Z1bmN0aW9uc1wiO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgRW50aXR5QW5pbWF0aW9uIHtcclxuICAgIHN0YXJ0czogbnVtYmVyO1xyXG4gICAgZW5kczogbnVtYmVyO1xyXG4gICAgY3VycmVudDogbnVtYmVyO1xyXG4gICAgdGltaW5nRnVuY3Rpb246IFRpbWluZ0Z1bmN0aW9ucy5UaW1pbmdGdW5jdGlvbjtcclxuXHJcbiAgICBzdGFydFZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICBzY2FsZVBhcmFtczogbnVtYmVyXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGVuZHM6IG51bWJlciwgdGltaW5nRnVuY3Rpb246IFRpbWluZ0Z1bmN0aW9ucy5UaW1pbmdGdW5jdGlvbiwgc2NhbGVQYXJhbXM6IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuc3RhcnRzICsgMTtcclxuICAgICAgICB0aGlzLmVuZHMgPSBlbmRzO1xyXG4gICAgICAgIHRoaXMudGltaW5nRnVuY3Rpb24gPSB0aW1pbmdGdW5jdGlvbjtcclxuICAgICAgICB0aGlzLnNjYWxlUGFyYW1zID0gc2NhbGVQYXJhbXNcclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydHMpIC8gKHRoaXMuZW5kcyAtIHRoaXMuc3RhcnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBhbmltYXRlKGN1cnJlbnRWaWV3TW9kZWw6IFZpZXdNb2RlbCk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IHsgRW50aXR5QW5pbWF0aW9uIH07XHJcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9Cb3REZXN0cnVjdGlvblZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCI7XHJcbmltcG9ydCB7IEVudGl0eUFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5cclxuY2xhc3MgQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZUFuaW1hdGlvbiBleHRlbmRzIEVudGl0eUFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRlKGN1cnJlbnRWaWV3TW9kZWw6IFZpZXdNb2RlbCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Vmlld01vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwgPSBuZXcgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZWwuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gbmV3IFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblgsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG5ld1Bvc2l0aW9uLnggPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLnggK1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblggKlxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1pbmdGdW5jdGlvbih0aGlzLnByb2dyZXNzKCkpICpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVQYXJhbXM7XHJcbiAgICAgICAgbmV3UG9zaXRpb24ueSA9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwucG9zaXRpb24ueSArXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWSAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWluZ0Z1bmN0aW9uKHRoaXMucHJvZ3Jlc3MoKSkgKlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZVBhcmFtcztcclxuICAgICAgICBjb25zdCBvcGFjaXR5ID1cclxuICAgICAgICAgICAgKDEgLSB0aGlzLnByb2dyZXNzKCkpICpcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXdNb2RlbC5vcGFjaXR5O1xyXG4gICAgICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uLCBvcGFjaXR5OiBvcGFjaXR5IDwgMCA/IDAgOiBvcGFjaXR5IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGVBbmltYXRpb24gfTtcclxuIiwiaW1wb3J0IHsgUGxheWVyQXR0YWNrVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9QbGF5ZXJBdHRhY2tWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja0FuaW1hdGlvbiBleHRlbmRzIEVudGl0eUFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRlKGN1cnJlbnRWaWV3TW9kZWw6IFZpZXdNb2RlbCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Vmlld01vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwgPSBuZXcgUGxheWVyQXR0YWNrVmlld01vZGVsKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5wb3NpdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBjb25zdCByYWRpdXMgPVxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlUGFyYW1zICpcclxuICAgICAgICAgICAgKDxQbGF5ZXJBdHRhY2tWaWV3TW9kZWw+dGhpcy5zdGFydFZpZXdNb2RlbCkucmFkaXVzICpcclxuICAgICAgICAgICAgdGhpcy50aW1pbmdGdW5jdGlvbih0aGlzLnByb2dyZXNzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFkaXVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tBbmltYXRpb24gfTtcclxuIiwibmFtZXNwYWNlIFRpbWluZ0Z1bmN0aW9ucyB7XHJcbiAgICBleHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbiA9IChwcm9ncmVzczogbnVtYmVyKSA9PiBudW1iZXJcclxuXHJcbiAgICBleHBvcnQgY29uc3QgcXVhZDogVGltaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBib3c6IFRpbWluZ0Z1bmN0aW9uID0gKHByb2dyZXNzOiBudW1iZXIsIGVsYXN0aWM6IG51bWJlciA9IDAuNSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKSAqICgoZWxhc3RpYyArIDEpICogcHJvZ3Jlc3MgLSBlbGFzdGljKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUaW1pbmdGdW5jdGlvbnMgfSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIlxyXG5pbXBvcnQgeyBkaXN0YW5jZUJldHdlZW4gfSBmcm9tIFwiLi4vVXRpbHNcIlxyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCJcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiXHJcblxyXG5jbGFzcyBDaXJjbGVDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcclxuXHJcbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyID0gMFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRW50aXR5LCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGVudGl0eSlcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xyXG4gICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZWQodGFyZ2V0OiBDb2xsaWRlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDaXJjbGVDb2xsaWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VCZXR3ZWVuKHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbiwgdGFyZ2V0LmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24pIDw9ICh0YXJnZXQuZW50aXR5LnZpZXdNb2RlbC5yYWRpdXMgKyB0aGlzLnJhZGl1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IFZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcGFyYW1zLnJhZGl1c1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgQ2lyY2xlQ29sbGlkZXIgfSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIjtcclxuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vT2JzZXJ2aW5nL09ic2VydmVyXCI7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRW50aXR5KSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZW50aXR5OiBFbnRpdHk7XHJcbiAgICBhYnN0cmFjdCBjb2xsaWRlZCh0YXJnZXQ6IENvbGxpZGVyKTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHsgQ29sbGlkZXIgfSIsImltcG9ydCB7IGlucHV0YWJsZSB9IGZyb20gXCIuLi9EZWNvcmF0b3JzL0lucHV0YWJsZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tIFwiLi4vRW51bS9FbnRpdHlTdGF0ZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEVudGl0eUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9FbnRpdHlDb250cm9sbGVyXCI7XHJcblxyXG5AaW5wdXRhYmxlXHJcbmNsYXNzIEJvdENvbnRyb2xsZXIgZXh0ZW5kcyBFbnRpdHlDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib3RFbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIHN1cGVyKGJvdEVudGl0eSlcclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtQWN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5lbnRpdHkuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFbnRpdHlTdGF0ZS5JZGxlOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBiaW5kaW5nIHRoaXMuZW50aXR5IHBhcmFtIGNhdXNlIGluIGlzIG9ubHkgb25lIGNvbnRyb2xsZXIgYW5kIHRoaXMuZW50aXR5IGNoYW5nZXMgZXZlcnkgZnJhbWUgXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgoZW50aXR5OiBFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc3RhdGUgPSBFbnRpdHlTdGF0ZS5Nb3ZpbmdcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcywgdGhpcy5lbnRpdHkpLCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVudGl0eVN0YXRlLk1vdmluZzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeDogbnVtYmVyID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oeCArIDEgKiB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWCxcclxuICAgICAgICAgICAgICAgICAgICB5ICsgMSAqIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25ZKVxyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi9Nb2RlbC9FbnRpdHknXHJcbmFic3RyYWN0IGNsYXNzIEVudGl0eUNvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBfZW50aXR5OiBFbnRpdHlcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlOiBFbnRpdHkpIHtcclxuICAgICAgICB0aGlzLl9lbnRpdHkgPSBlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVudGl0eSgpOiBFbnRpdHkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW50aXR5KHZhbHVlOiBFbnRpdHkpIHtcclxuICAgICAgICB0aGlzLl9lbnRpdHkgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHBlcmZvcm1BY3Rpb24oKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGlucHV0RXZlbnRIYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHsgRW50aXR5Q29udHJvbGxlciB9IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJBdHRhY2tQYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSBcIi4vRW50aXR5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZVwiO1xyXG5pbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vTW9kZWwvQm90XCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGUgfSBmcm9tIFwiLi4vTW9kZWwvQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBCb3REZXN0cnVjdGlvblZpZXcgfSBmcm9tIFwiLi4vVmlldy9Cb3REZXN0cnVjdGlvblZpZXdcIjtcclxuaW1wb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL0JvdERlc3RydWN0aW9uVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGVBbmltYXRpb24gfSBmcm9tIFwiLi4vQW5pbWF0aW9uL0JvdERlc2N0cnV0aW9uUGFydGljbGVBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVGltaW5nRnVuY3Rpb25zIH0gZnJvbSBcIi4uL0FuaW1hdGlvbi9UaW1pbmdGdW5jdGlvbnNcIjtcclxuXHJcbmNsYXNzIFBhcnRpY2xlQ29udHJvbGxlciBleHRlbmRzIEVudGl0eUNvbnRyb2xsZXIge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHN1cGVyKG51bGwpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHBlcmZvcm1BY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZGVsZXRlIGV4cGlyZWQgcGFydGljbGVzXHJcbiAgICAgICAgc3RvcmUucGFydGljbGVzID0gc3RvcmUucGFydGljbGVzLmZpbHRlcihcclxuICAgICAgICAgICAgKHBhcnRpY2xlKSA9PiAhIXBhcnRpY2xlLmFuaW1hdGlvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHRyYW5zZm9ybSBwYXJ0aWNsZXNcclxuICAgICAgICBzdG9yZS5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcnRpY2xlLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlIGluc3RhbmNlb2YgUGxheWVyQXR0YWNrUGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS52aWV3TW9kZWwucmFkaXVzID0gcGFydGljbGUuYW5pbWF0aW9uLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlIGluc3RhbmNlb2YgQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvblBhcmFtcyA9IHBhcnRpY2xlLmFuaW1hdGlvbi5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS52aWV3TW9kZWxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbC5wb3NpdGlvbiA9IGFuaW1hdGlvblBhcmFtcy5uZXdQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbC5vcGFjaXR5ID0gYW5pbWF0aW9uUGFyYW1zLm9wYWNpdHlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZS5hbmltYXRpb24ucHJvZ3Jlc3MoKSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUuYW5pbWF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBjb2xsaXNpb25zXHJcbiAgICAgICAgc3RvcmUucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlLmNvbGxpZGVyLmNvbGxpZGVkKGVudGl0eS5jb2xsaWRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydGljbGUgaW5zdGFuY2VvZiBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIEJvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgQk9UX0RFU1RSVUNUSU9OX1BBUlRJQ0xFX0NPVU5UID0gNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCBCT1RfREVTVFJVQ1RJT05fUEFSVElDTEVfQ09VTlQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24uZGlyZWN0aW9uWCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICsgMiAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLmRpcmVjdGlvblkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSArIDIgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvdERlc3RydWN0aW9uUGFydGljbGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbURpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3REZXN0cnVjdGlvblBhcnRpY2xlLmFuaW1hdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb3REZXN0cnVjdGlvblBhcnRpY2xlQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2Uubm93KCkgKyAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1pbmdGdW5jdGlvbnMucXVhZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdERlc3RydWN0aW9uUGFydGljbGUudmlld01vZGVsLnJlZ2lzdGVyT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb3REZXN0cnVjdGlvblZpZXcodGhpcy5jdHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUucGFydGljbGVzLnB1c2goYm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5lbnRpdGllcyA9IHN0b3JlLmVudGl0aWVzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodEVudGl0eSkgPT4gdEVudGl0eSAhPT0gZW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IHsgUGFydGljbGVDb250cm9sbGVyIH07XHJcbiIsImltcG9ydCB7IGlucHV0YWJsZSB9IGZyb20gXCIuLi9EZWNvcmF0b3JzL0lucHV0YWJsZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tIFwiLi4vRW51bS9FbnRpdHlTdGF0ZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEVudGl0eUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9FbnRpdHlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1BhcnRpY2xlIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllckF0dGFja1BhcnRpY2xlXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja0FuaW1hdGlvbiB9IGZyb20gXCIuLi9BbmltYXRpb24vUGxheWVyQXR0YWNrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFRpbWluZ0Z1bmN0aW9ucyB9IGZyb20gXCIuLi9BbmltYXRpb24vVGltaW5nRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1BhcnRpY2xlVmlldyB9IGZyb20gXCIuLi9WaWV3L1BsYXllckF0dGFja1BhcnRpY2xlVmlld1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJBdHRhY2tWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllckF0dGFja1ZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBnZXRDYW52YXNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VXcmFwcGVyXCI7XHJcbkBpbnB1dGFibGVcclxuY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIEVudGl0eUNvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBrZXlzUHJlc3NlZDogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyRW50aXR5OiBFbnRpdHkpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXJFbnRpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBlcmZvcm1BY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmVudGl0eS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVudGl0eVN0YXRlLklkbGU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFbnRpdHlTdGF0ZS5Nb3Zpbmc6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeDogbnVtYmVyID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZFggPSB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkWSA9IHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25ZO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB4ICsgNSAqIGRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB5ICsgNSAqIGRZLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlIGluc3RhbmNlb2YgUGxheWVyQXR0YWNrUGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbC5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNoYW5nZSBkaXJlY3Rpb24gb24gYXJyb3cga2V5cyBwcmVzc2VkXHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKFxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRpdHkuc3RhdGUgPSBFbnRpdHlTdGF0ZS5Nb3Zpbmc7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1ByZXNzZWRbZXZlbnQua2V5XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1ByZXNzZWRbZXZlbnQua2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMua2V5c1ByZXNzZWQpLmZvckVhY2goKGtleU5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5c1ByZXNzZWRba2V5TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kaXJlY3Rpb25ZID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGlyZWN0aW9uWSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGlyZWN0aW9uWCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0aWNsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlIGluc3RhbmNlb2YgUGxheWVyQXR0YWNrUGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJBdHRhY2tQYXJ0aWNsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllckF0dGFja1BhcnRpY2xlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyQXR0YWNrVmlld01vZGVsKDEwLCBcIiMwMGZcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5wbGF5ZXJFbnRpdHkudmlld01vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckF0dGFja1BhcnRpY2xlLmFuaW1hdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllckF0dGFja0FuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2Uubm93KCkgKyAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbWluZ0Z1bmN0aW9ucy5xdWFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckF0dGFja1BhcnRpY2xlLnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZVZpZXcoZ2V0Q2FudmFzQ29udGV4dCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5wdXNoKHBsYXllckF0dGFja1BhcnRpY2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfTtcclxuIiwiY29uc3QgaW5wdXRhYmxlID0gPFQgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiB7fX0+KHRhcmdldDogVCkgPT4ge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgdGFyZ2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncylcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YXJnZXQucHJvdG90eXBlLmlucHV0RXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRhcmdldC5wcm90b3R5cGUuaW5wdXRFdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGFyZ2V0LnByb3RvdHlwZS5pbnB1dEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGlucHV0YWJsZVxyXG59IiwiZW51bSBFbnRpdHlTdGF0ZSB7XHJcbiAgICBJZGxlLFxyXG4gICAgTW92aW5nLFxyXG4gICAgQXR0YWNrLFxyXG4gICAgRGVhZFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgRW50aXR5U3RhdGVcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL1N0YXRzXCI7XHJcblxyXG5jbGFzcyBCb3QgZXh0ZW5kcyBFbnRpdHkge1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRzOiBTdGF0c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIodmlld01vZGVsKVxyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFN0YXRzKDIsIDEwMClcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENpcmNsZUNvbGxpZGVyKHRoaXMsIHRoaXMudmlld01vZGVsLnJhZGl1cylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHMoKTogU3RhdHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0c1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0cyh2YWx1ZTogU3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCb3RcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5jbGFzcyBCb3REZXN0cnVjdGlvblBhcnRpY2xlIGV4dGVuZHMgUGFydGljbGUge1xyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcih0aGlzLCB0aGlzLnZpZXdNb2RlbC5yYWRpdXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGUgfSIsImltcG9ydCB7IEVudGl0eUFuaW1hdGlvbiB9IGZyb20gJy4uL0FuaW1hdGlvbi9BbmltYXRpb24nXHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vQ29sbGlzaW9ucy9Db2xsaWRlcidcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuLi9FbnVtL0VudGl0eVN0YXRlJ1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvVmlld01vZGUnXHJcbmFic3RyYWN0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2N1cnJlbnRUYXJnZXQ6IEVudGl0eVxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEVudGl0eVN0YXRlXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcjogQ29sbGlkZXJcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogRW50aXR5QW5pbWF0aW9uXHJcbiAgICBwcml2YXRlIF92aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBFbnRpdHlTdGF0ZS5JZGxlXHJcbiAgICAgICAgdGhpcy5fdmlld01vZGVsID0gdmlld01vZGVsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IEVudGl0eVN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodmFsdWU6IEVudGl0eVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50VGFyZ2V0KCk6IEVudGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXJnZXRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY3VycmVudFRhcmdldCh2YWx1ZTogRW50aXR5KSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRhcmdldCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbGxpZGVyKCk6IENvbGxpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGlkZXJcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29sbGlkZXIodmFsdWU6IENvbGxpZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXIgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmltYXRpb24oKTogRW50aXR5QW5pbWF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogRW50aXR5QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlld01vZGVsKCk6IFZpZXdNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNb2RlbFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB2aWV3TW9kZWwodmFsdWU6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBFbnRpdHlcclxufSIsImltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHN1cGVyKHZpZXdNb2RlbClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGFydGljbGUgfSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL1N0YXRzXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgcHJpdmF0ZSBfc3RhdHM6IFN0YXRzXHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgU3RhdHMoMiwgMTAwKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgMClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHMoKTogU3RhdHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0c1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0cyh2YWx1ZTogU3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBQbGF5ZXJcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSBleHRlbmRzIFBhcnRpY2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIodmlld01vZGVsKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgdGhpcy52aWV3TW9kZWwucmFkaXVzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSB9IiwiY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXJcclxuICAgIGRpcmVjdGlvblg6IG51bWJlclxyXG4gICAgZGlyZWN0aW9uWTogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uWDogbnVtYmVyLCBkaXJlY3Rpb25ZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IGRpcmVjdGlvblhcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSBkaXJlY3Rpb25ZXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFBvc2l0aW9uXHJcbn0iLCJjbGFzcyBTdGF0cyB7XHJcbiAgICBzcGVlZDogbnVtYmVyXHJcbiAgICBoZWFsdGg6IG51bWJlciBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzcGVlZDogbnVtYmVyLCBoZWFsdGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZFxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTdGF0c1xyXG59IiwiaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJ1xyXG5hYnN0cmFjdCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIG9ic2VydmVyczogQXJyYXk8T2JzZXJ2ZXI+XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBPYnNlcnZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG5vdGlmeU9ic2VydmVycyhwYXJhbXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIub25Ob3RpZnlDYWxsYmFjayhwYXJhbXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgT2JzZXJ2YWJsZVxyXG59IiwiYWJzdHJhY3QgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgYWJzdHJhY3Qgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBPYnNlcnZlclxyXG59IiwiaW1wb3J0IHsgQ2lyY2xlQ29sbGlkZXIgfSBmcm9tICcuLi9Db2xsaXNpb25zL0NpcmNsZUNvbGxpZGVyJ1xyXG5pbXBvcnQgeyBCb3QgfSBmcm9tICcuLi9Nb2RlbC9Cb3QnXHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL01vZGVsL0VudGl0eSdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vTW9kZWwvUGxheWVyJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL01vZGVsL1Bvc2l0aW9uJ1xyXG5pbXBvcnQgeyBCb3RWaWV3IH0gZnJvbSAnLi4vVmlldy9Cb3RWaWV3J1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSAnLi4vVmlldy9FbnRpdHlWaWV3J1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3IH0gZnJvbSAnLi4vVmlldy9QbGF5ZXJWaWV3J1xyXG5pbXBvcnQgeyBCb3RWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvQm90Vmlld01vZGVsJ1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvUGxheWVyVmlld01vZGVsJ1xyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gICAgX2VudGl0aWVzOiBBcnJheTxFbnRpdHk+XHJcbiAgICBfcGxheWVyRW50aXR5OiBFbnRpdHlcclxuICAgIF9wYXJ0aWNsZXM6IEVudGl0eVtdXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSBbXVxyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlcyA9IFtdXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5ID0gbmV3IFBsYXllcihuZXcgUGxheWVyVmlld01vZGVsKDEyLCBcIiMwMGZcIiwgbmV3IFBvc2l0aW9uKDAsIDAsIDAsIDApKSlcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplREIoZW50aXR5Q291bnQ6IG51bWJlciwgdmlld3NSZW5kZXJDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY291bnRlcjogbnVtYmVyID0gZW50aXR5Q291bnRcclxuICAgICAgICB3aGlsZSAoY291bnRlciA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVg6IG51bWJlciA9IHZpZXdzUmVuZGVyQ29udGV4dC5jYW52YXMud2lkdGggKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVk6IG51bWJlciA9IHZpZXdzUmVuZGVyQ29udGV4dC5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb25YOiBudW1iZXIgPSAtMSArIDIgKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblk6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGJvdEVudGl0eSA9IG5ldyBCb3QobmV3IEJvdFZpZXdNb2RlbCgxMCwgJyNmZmYnLCBuZXcgUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSwgcmFuZG9tRGlyZWN0aW9uWCwgcmFuZG9tRGlyZWN0aW9uWSkpKVxyXG4gICAgICAgICAgICBib3RFbnRpdHkuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIoYm90RW50aXR5LCBib3RFbnRpdHkudmlld01vZGVsLnJhZGl1cylcclxuICAgICAgICAgICAgY29uc3QgYm90RW50aXR5VmlldyA9IG5ldyBCb3RWaWV3KHZpZXdzUmVuZGVyQ29udGV4dClcclxuICAgICAgICAgICAgYm90RW50aXR5LnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKGJvdEVudGl0eVZpZXcpXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbnRpdGllcy5wdXNoKGJvdEVudGl0eSlcclxuICAgICAgICAgICAgY291bnRlciAtPSAxXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByYW5kb21YOiBudW1iZXIgPSB2aWV3c1JlbmRlckNvbnRleHQuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbVk6IG51bWJlciA9IHZpZXdzUmVuZGVyQ29udGV4dC5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblg6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb25ZOiBudW1iZXIgPSAtMSArIDIgKiBNYXRoLnJhbmRvbSgpXHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXllckVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSwgcmFuZG9tRGlyZWN0aW9uWCwgcmFuZG9tRGlyZWN0aW9uWSkgXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5LmNvbGxpZGVyID0gbmV3IENpcmNsZUNvbGxpZGVyKHRoaXMuX3BsYXllckVudGl0eSwgdGhpcy5fcGxheWVyRW50aXR5LnZpZXdNb2RlbC5yYWRpdXMpXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5LnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKG5ldyBQbGF5ZXJWaWV3KHZpZXdzUmVuZGVyQ29udGV4dCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbnRpdGllcygpOiBBcnJheTxFbnRpdHk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXNcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW50aXRpZXModmFsdWU6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGF5ZXJFbnRpdHkoKTogRW50aXR5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyRW50aXR5XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhcnRpY2xlcygpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnRpY2xlc1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwYXJ0aWNsZXModmFsdWU6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYXJ0aWNsZUVudGl0eShwYXJ0aWNsZTogRW50aXR5LCBwYXJ0aWNsZVZpZXc6IEVudGl0eVZpZXcpIHtcclxuICAgICAgICAvLyBwYXJ0aWNsZS5yZWdpc3Rlck9ic2VydmVyKHBhcnRpY2xlVmlldylcclxuICAgICAgICB0aGlzLl9lbnRpdGllcy5wdXNoKHBhcnRpY2xlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhcnRpY2xlKHA6IEVudGl0eSkge1xyXG4gICAgICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5lbnRpdGllcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUgPT09IHApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmU6IFN0b3JlID0gbmV3IFN0b3JlKCk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHN0b3JlXHJcbn0iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlbiA9IChwMTogUG9zaXRpb24sIHAyOiBQb3NpdGlvbik6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSlcclxufSIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuL1ZpZXdNb2RlXCI7XHJcblxyXG5jbGFzcyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBwcml2YXRlIF9hbmdsZSA9IDBcclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihyYWRpdXMsIGNvbG9yLCBwb3NpdGlvbilcclxuICAgICAgICB0aGlzLl9yYWRpdXMgPSByYWRpdXNcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuX2FuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuZ2xlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uVmlld01vZGVsIH07IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIEJvdFZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja1ZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIFBsYXllclZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9PYnNlcnZpbmcvT2JzZXJ2YWJsZVwiO1xyXG5cclxuY2xhc3MgVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBfcmFkaXVzOiBudW1iZXIgPSAzMDtcclxuICAgIF9vcGFjaXR5OiBudW1iZXIgPSAxO1xyXG4gICAgX2NvbG9yOiBzdHJpbmcgPSBcIiMwMGZcIjtcclxuICAgIF9wb3NpdGlvbjogUG9zaXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yYWRpdXMgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGFjaXR5O1xyXG4gICAgfVxyXG4gICAgc2V0IG9wYWNpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX29wYWNpdHkgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcclxuICAgIH1cclxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFZpZXdNb2RlbCB9O1xyXG4iLCJpbXBvcnQgeyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSBcIi4vRW50aXR5Vmlld1wiO1xyXG5cclxuY2xhc3MgQm90RGVzdHJ1Y3Rpb25WaWV3IGV4dGVuZHMgRW50aXR5VmlldyB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyYW1zOiBWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2bSA9ICg8Qm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWw+cGFyYW1zKVxyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKVxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHZtLnBvc2l0aW9uLngsIHZtLnBvc2l0aW9uLnkpXHJcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHZtLmFuZ2xlKVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHZtLmNvbG9yXHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB2bS5vcGFjaXR5XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKDAsIDAgLSB2bS5yYWRpdXMpXHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDAgKyB2bS5yYWRpdXMsIDAgIC0gdm0ucmFkaXVzIC8gMilcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMCAtIHZtLnJhZGl1cyAvIDIsIDAgICsgdm0ucmFkaXVzKVxyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygwIC0gdm0ucmFkaXVzLCAwIC0gdm0ucmFkaXVzIC8gNilcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3REZXN0cnVjdGlvblZpZXcgfSIsImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi9Nb2RlbC9Cb3RcIjtcclxuaW1wb3J0IHsgQm90Vmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9Cb3RWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSBcIi4vRW50aXR5Vmlld1wiO1xyXG5cclxuY2xhc3MgQm90VmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyYW1zOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBjb25zdCB2bSA9IDxCb3RWaWV3TW9kZWw+cGFyYW1zO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHZtLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh2bS5wb3NpdGlvbi54LCB2bS5wb3NpdGlvbi55LCB2bS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdFZpZXcgfTtcclxuIiwiaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vT2JzZXJ2aW5nL09ic2VydmVyXCJcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBFbnRpdHlWaWV3IGV4dGVuZHMgT2JzZXJ2ZXIge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgIH1cclxuXHJcbiAgICBvbk5vdGlmeUNhbGxiYWNrKHBhcmFtczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3KHBhcmFtcylcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBkcmF3KHBhcmFtczogVmlld01vZGVsKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIEVudGl0eVZpZXdcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUGxheWVyQXR0YWNrVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9QbGF5ZXJBdHRhY2tWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSBcIi4vRW50aXR5Vmlld1wiO1xyXG5cclxuY2xhc3MgUGxheWVyQXR0YWNrUGFydGljbGVWaWV3IGV4dGVuZHMgRW50aXR5VmlldyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyYW1zOiBWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2bSA9ICg8UGxheWVyQXR0YWNrVmlld01vZGVsPnBhcmFtcylcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyAtIDYgPCAwID8gMCA6IHZtLnJhZGl1cyAtIDYsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDAxJztcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyAtIDUgPCAwID8gMCA6IHZtLnJhZGl1cyAtIDUsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDAzJztcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyAtIDQgPCAwID8gMCA6IHZtLnJhZGl1cyAtIDQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwNSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSAzIDwgMCA/IDAgOiB2bS5yYWRpdXMgLSAzLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyMwMDcnO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgdm0ucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdm0ucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdm0ucmFkaXVzIC0gMiA8IDAgPyAwIDogdm0ucmFkaXVzIC0gMixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDBhJztcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyAtIDEgPCAwID8gMCA6IHZtLnJhZGl1cyAtIDEsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB2bS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZVZpZXcgfTtcclxuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL01vZGVsL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllclZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCI7XHJcbmltcG9ydCB7IEVudGl0eVZpZXcgfSBmcm9tIFwiLi9FbnRpdHlWaWV3XCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJWaWV3IGV4dGVuZHMgRW50aXR5VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHN1cGVyKGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJhbXM6IFZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZtID0gPFBsYXllclZpZXdNb2RlbD5wYXJhbXM7XHJcblxyXG4gICAgICAgIGlmICh2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZICE9PSAwIHx8IHZtLnBvc2l0aW9uLmRpcmVjdGlvblggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzU1ZlwiO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgICAgICB2bS5wb3NpdGlvbi54IC0gMTQgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDE0ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWSxcclxuICAgICAgICAgICAgICAgIHZtLnJhZGl1cyAtIDgsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjNjZmXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnggLSAxMiAqIHZtLnBvc2l0aW9uLmRpcmVjdGlvblgsXHJcbiAgICAgICAgICAgICAgICB2bS5wb3NpdGlvbi55IC0gMTIgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgdm0ucmFkaXVzIC0gNixcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiM3N2ZcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueCAtIDggKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDggKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgdm0ucmFkaXVzIC0gNCxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiM4OGZcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueCAtIDUgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDUgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgdm0ucmFkaXVzIC0gMixcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHZtLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh2bS5wb3NpdGlvbi54LCB2bS5wb3NpdGlvbi55LCB2bS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllclZpZXcgfTtcclxuIiwiaW1wb3J0IHsgZ2V0Q2FudmFzQ29udGV4dCB9IGZyb20gXCIuLi9wYWdlV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XHJcbmltcG9ydCB7IEJvdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL0JvdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlci9FbnRpdHlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvUGFydGljbGVDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgY19jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGdldENhbnZhc0NvbnRleHQoKTtcclxuY29uc3QgYm90Q29udHJvbGxlcjogRW50aXR5Q29udHJvbGxlciA9IG5ldyBCb3RDb250cm9sbGVyKG51bGwpO1xyXG5jb25zdCBwbGF5ZXJDb250cm9sbGVyOiBFbnRpdHlDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIobnVsbCk7XHJcbmNvbnN0IHBhcnRpY2xlQ29udHJvbGxlcjogRW50aXR5Q29udHJvbGxlciA9IG5ldyBQYXJ0aWNsZUNvbnRyb2xsZXIoY19jdHgpO1xyXG5cclxuXHJcbmNvbnN0IEVOVElUWV9UT19HRU5FUkFURTogbnVtYmVyID0gMzA7XHJcblxyXG5jb25zdCBnYW1lU3RhcnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzdG9yZS5pbml0aWFsaXplREIoRU5USVRZX1RPX0dFTkVSQVRFLCBnZXRDYW52YXNDb250ZXh0KCkpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XHJcbn07XHJcblxyXG5jb25zdCBtYWluID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY19jdHguY2xlYXJSZWN0KDAsIDAsIGNfY3R4LmNhbnZhcy53aWR0aCwgY19jdHguY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgc3RvcmUuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgYm90Q29udHJvbGxlci5lbnRpdHkgPSBlbnRpdHk7XHJcbiAgICAgICAgYm90Q29udHJvbGxlci5wZXJmb3JtQWN0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwYyA9IChwYXJ0aWNsZUNvbnRyb2xsZXIgYXMgUGFydGljbGVDb250cm9sbGVyKVxyXG4gICAgcGMucGVyZm9ybUFjdGlvbigpXHJcbiAgICBcclxuXHJcbiAgICBwbGF5ZXJDb250cm9sbGVyLmVudGl0eSA9IHN0b3JlLnBsYXllckVudGl0eTtcclxuICAgIHBsYXllckNvbnRyb2xsZXIucGVyZm9ybUFjdGlvbigpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdhbWVTdGFydCB9O1xyXG4iLCJjb25zdCBjX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY19nYW1lJykgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldENvbnRleHQoJzJkJylcclxuY29uc3QgaW5pdENhbnZhcyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNfY29udGV4dC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgY19jb250ZXh0LmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwXCJcclxufVxyXG5jb25zdCBnZXRDYW52YXNDb250ZXh0ID0gKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9PiB7XHJcbiAgICByZXR1cm4gY19jb250ZXh0XHJcbn1cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGdldENhbnZhc0NvbnRleHQoKS5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgZ2V0Q2FudmFzQ29udGV4dCgpLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxufVxyXG5cclxuXHJcbmNvbnN0IHJlc2V0UGFnZVN0eWxlcyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9ICcwJ1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCdcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDB2dydcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbn1cclxuZXhwb3J0IHtcclxuICAgIGluaXRDYW52YXMsXHJcbiAgICBnZXRDYW52YXNDb250ZXh0LFxyXG4gICAgcmVzZXRQYWdlU3R5bGVzXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vZm9udHMvaGFjay1ib2xkLndvZmZcIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyBpbml0Q2FudmFzLCByZXNldFBhZ2VTdHlsZXMgfSBmcm9tIFwiLi9wYWdlV3JhcHBlclwiXHJcbmltcG9ydCB7IGdhbWVTdGFydCB9IGZyb20gJy4vZ2FtZS9tYWluJ1xyXG5cclxucmVzZXRQYWdlU3R5bGVzKClcclxuaW5pdENhbnZhcygpXHJcblxyXG5nYW1lU3RhcnQoKSJdLCJzb3VyY2VSb290IjoiIn0=