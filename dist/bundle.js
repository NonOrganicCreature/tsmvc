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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/hack-bold.woff?sha=3114f1256 */ "./src/fonts/hack-bold.woff?sha=3114f1256"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Hack\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,2DAA6D;IAC7D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: \"Hack\";\r\n    src: url(\"fonts/hack-bold.woff?sha=3114f1256\") format(\"woff\");\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/fonts/hack-bold.woff?sha=3114f1256":
/*!************************************************!*\
  !*** ./src/fonts/hack-bold.woff?sha=3114f1256 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e5ee63ed9eec452fb29.woff?sha=3114f1256";

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
/* harmony import */ var _Model_Score__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Model/Score */ "./src/game/Model/Score.ts");
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
                            (_Store__WEBPACK_IMPORTED_MODULE_3__.store.entities.filter(function (tEntity) { return tEntity instanceof _Model_Score__WEBPACK_IMPORTED_MODULE_10__.Score; })[0].viewModel).scoreValue += 1;
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

/***/ "./src/game/Model/Score.ts":
/*!*********************************!*\
  !*** ./src/game/Model/Score.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
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


var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, 0);
        return _this;
    }
    return Score;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



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
        this.score = 0;
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
/* harmony import */ var _Model_Score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Score */ "./src/game/Model/Score.ts");
/* harmony import */ var _View_BotView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../View/BotView */ "./src/game/View/BotView.ts");
/* harmony import */ var _View_PlayerScoreView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../View/PlayerScoreView */ "./src/game/View/PlayerScoreView.ts");
/* harmony import */ var _View_PlayerView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../View/PlayerView */ "./src/game/View/PlayerView.ts");
/* harmony import */ var _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ViewModel/BotViewModel */ "./src/game/ViewModel/BotViewModel.ts");
/* harmony import */ var _ViewModel_PlayerScoreViewModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ViewModel/PlayerScoreViewModel */ "./src/game/ViewModel/PlayerScoreViewModel.ts");
/* harmony import */ var _ViewModel_PlayerViewModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ViewModel/PlayerViewModel */ "./src/game/ViewModel/PlayerViewModel.ts");











var Store = /** @class */ (function () {
    function Store() {
        this._entities = [];
        this._particles = [];
        this._playerEntity = new _Model_Player__WEBPACK_IMPORTED_MODULE_2__.Player(new _ViewModel_PlayerViewModel__WEBPACK_IMPORTED_MODULE_10__.PlayerViewModel(12, "#00f", new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(0, 0, 0, 0)));
    }
    Store.prototype.initializeDB = function (entityCount, viewsRenderContext) {
        var counter = entityCount;
        while (counter > 0) {
            var randomX_1 = viewsRenderContext.canvas.width * Math.random();
            var randomY_1 = viewsRenderContext.canvas.height * Math.random();
            var randomDirectionX_1 = -1 + 2 * Math.random();
            var randomDirectionY_1 = -1 + 2 * Math.random();
            var botEntity = new _Model_Bot__WEBPACK_IMPORTED_MODULE_1__.Bot(new _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_8__.BotViewModel(10, '#fff', new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(randomX_1, randomY_1, randomDirectionX_1, randomDirectionY_1)));
            botEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(botEntity, botEntity.viewModel.radius);
            var botEntityView = new _View_BotView__WEBPACK_IMPORTED_MODULE_5__.BotView(viewsRenderContext);
            botEntity.viewModel.registerObserver(botEntityView);
            this._entities.push(botEntity);
            counter -= 1;
        }
        var scoreEntity = new _Model_Score__WEBPACK_IMPORTED_MODULE_4__.Score(new _ViewModel_PlayerScoreViewModel__WEBPACK_IMPORTED_MODULE_9__.PlayerScoreViewModel(10, "#f00", new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(100, 100, 0, 0), 0));
        var scoreView = new _View_PlayerScoreView__WEBPACK_IMPORTED_MODULE_6__.PlayerScoreView(viewsRenderContext);
        scoreEntity.viewModel.registerObserver(scoreView);
        this._entities.push(scoreEntity);
        var randomX = viewsRenderContext.canvas.width * Math.random();
        var randomY = viewsRenderContext.canvas.height * Math.random();
        var randomDirectionX = -1 + 2 * Math.random();
        var randomDirectionY = -1 + 2 * Math.random();
        this._playerEntity.viewModel.position = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(randomX, randomY, randomDirectionX, randomDirectionY);
        this._playerEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(this._playerEntity, this._playerEntity.viewModel.radius);
        this._playerEntity.viewModel.registerObserver(new _View_PlayerView__WEBPACK_IMPORTED_MODULE_7__.PlayerView(viewsRenderContext));
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

/***/ "./src/game/ViewModel/PlayerScoreViewModel.ts":
/*!****************************************************!*\
  !*** ./src/game/ViewModel/PlayerScoreViewModel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerScoreViewModel": () => (/* binding */ PlayerScoreViewModel)
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

var PlayerScoreViewModel = /** @class */ (function (_super) {
    __extends(PlayerScoreViewModel, _super);
    function PlayerScoreViewModel(radius, color, position, scoreValue) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this._scoreValue = scoreValue;
        _this.notifyObservers(_this);
        return _this;
    }
    Object.defineProperty(PlayerScoreViewModel.prototype, "scoreValue", {
        get: function () {
            return this._scoreValue;
        },
        set: function (value) {
            this._scoreValue = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    return PlayerScoreViewModel;
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

/***/ "./src/game/View/PlayerScoreView.ts":
/*!******************************************!*\
  !*** ./src/game/View/PlayerScoreView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerScoreView": () => (/* binding */ PlayerScoreView)
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

var PlayerScoreView = /** @class */ (function (_super) {
    __extends(PlayerScoreView, _super);
    function PlayerScoreView(ctx) {
        return _super.call(this, ctx) || this;
    }
    PlayerScoreView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.font = '30px Hack';
        this.ctx.fillStyle = vm.color;
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Score: ' + vm.scoreValue, 100, 50);
    };
    return PlayerScoreView;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c212Yy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2ZvbnRzL2hhY2stYm9sZC53b2ZmIiwid2VicGFjazovL3RzbXZjLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90c212Yy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90c212Yy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90c212Yy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9BbmltYXRpb24vQW5pbWF0aW9uLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQW5pbWF0aW9uL0JvdERlc2N0cnV0aW9uUGFydGljbGVBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9BbmltYXRpb24vUGxheWVyQXR0YWNrQW5pbWF0aW9uLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQW5pbWF0aW9uL1RpbWluZ0Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db2xsaXNpb25zL0NvbGxpZGVyLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQ29udHJvbGxlci9Cb3RDb250cm9sbGVyLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQ29udHJvbGxlci9FbnRpdHlDb250cm9sbGVyLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQ29udHJvbGxlci9QYXJ0aWNsZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL1BsYXllckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9EZWNvcmF0b3JzL0lucHV0YWJsZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9FbnVtL0VudGl0eVN0YXRlLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvQm90LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL0VudGl0eS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL1BhcnRpY2xlLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvUGxheWVyLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvUGxheWVyQXR0YWNrUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9Qb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL1Njb3JlLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9PYnNlcnZpbmcvT2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL09ic2VydmluZy9PYnNlcnZlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvQm90Vmlld01vZGVsLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlld01vZGVsL1BsYXllckF0dGFja1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXdNb2RlbC9QbGF5ZXJTY29yZVZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXdNb2RlbC9QbGF5ZXJWaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvVmlld01vZGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3L0JvdERlc3RydWN0aW9uVmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvQm90Vmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvRW50aXR5Vmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvUGxheWVyQXR0YWNrUGFydGljbGVWaWV3LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlldy9QbGF5ZXJTY29yZVZpZXcudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9tYWluLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL3BhZ2VXcmFwcGVyLnRzIiwid2VicGFjazovL3RzbXZjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzbXZjL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RzbXZjL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RzbXZjL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHNtdmMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFxRDtBQUNqRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsOEJBQThCLDhFQUE4RSx5QkFBeUIsMkJBQTJCLDJCQUEyQixLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEs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QVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FB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TztJQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTztJQUNuQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTTtJQUNyQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTTtBQUMxQyxDQUFDO0FBS0E7Ozs7Ozs7VUM1QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSxvQjs7Ozs7Ozs7Ozs7Ozs7O0FDckIrQjtBQUNYO0FBQ3VDO0FBQ3BCO0FBRXZDLDZEQUFlLEVBQUU7QUFDakIsd0RBQVUsRUFBRTtBQUVaLHFEQUFTLEVBQUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL2hhY2stYm9sZC53b2ZmP3NoYT0zMTE0ZjEyNTZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIYWNrXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiwyREFBNkQ7SUFDN0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGFja1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCJmb250cy9oYWNrLWJvbGQud29mZj9zaGE9MzExNGYxMjU2XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9oYWNrLWJvbGQud29mZlwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBUaW1pbmdGdW5jdGlvbnMgfSBmcm9tIFwiLi9UaW1pbmdGdW5jdGlvbnNcIjtcclxuXHJcbmFic3RyYWN0IGNsYXNzIEVudGl0eUFuaW1hdGlvbiB7XHJcbiAgICBzdGFydHM6IG51bWJlcjtcclxuICAgIGVuZHM6IG51bWJlcjtcclxuICAgIGN1cnJlbnQ6IG51bWJlcjtcclxuICAgIHRpbWluZ0Z1bmN0aW9uOiBUaW1pbmdGdW5jdGlvbnMuVGltaW5nRnVuY3Rpb247XHJcblxyXG4gICAgc3RhcnRWaWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgc2NhbGVQYXJhbXM6IG51bWJlclxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihlbmRzOiBudW1iZXIsIHRpbWluZ0Z1bmN0aW9uOiBUaW1pbmdGdW5jdGlvbnMuVGltaW5nRnVuY3Rpb24sIHNjYWxlUGFyYW1zOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnN0YXJ0cyArIDE7XHJcbiAgICAgICAgdGhpcy5lbmRzID0gZW5kcztcclxuICAgICAgICB0aGlzLnRpbWluZ0Z1bmN0aW9uID0gdGltaW5nRnVuY3Rpb247XHJcbiAgICAgICAgdGhpcy5zY2FsZVBhcmFtcyA9IHNjYWxlUGFyYW1zXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZ3Jlc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRzKSAvICh0aGlzLmVuZHMgLSB0aGlzLnN0YXJ0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgYW5pbWF0ZShjdXJyZW50Vmlld01vZGVsOiBWaWV3TW9kZWwpOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEVudGl0eUFuaW1hdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuXHJcbmNsYXNzIEJvdERlc3RydWN0aW9uUGFydGljbGVBbmltYXRpb24gZXh0ZW5kcyBFbnRpdHlBbmltYXRpb24ge1xyXG4gICAgYW5pbWF0ZShjdXJyZW50Vmlld01vZGVsOiBWaWV3TW9kZWwpOiBhbnkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydFZpZXdNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsID0gbmV3IEJvdERlc3RydWN0aW9uVmlld01vZGVsKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5wb3NpdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvbllcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBuZXdQb3NpdGlvbi54ID1cclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXdNb2RlbC5wb3NpdGlvbi54ICtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25YICpcclxuICAgICAgICAgICAgICAgIHRoaXMudGltaW5nRnVuY3Rpb24odGhpcy5wcm9ncmVzcygpKSAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlUGFyYW1zO1xyXG4gICAgICAgIG5ld1Bvc2l0aW9uLnkgPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLnkgK1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblkgKlxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1pbmdGdW5jdGlvbih0aGlzLnByb2dyZXNzKCkpICpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVQYXJhbXM7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9XHJcbiAgICAgICAgICAgICgxIC0gdGhpcy5wcm9ncmVzcygpKSAqXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwub3BhY2l0eTtcclxuICAgICAgICByZXR1cm4geyBuZXdQb3NpdGlvbiwgb3BhY2l0eTogb3BhY2l0eSA8IDAgPyAwIDogb3BhY2l0eSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3REZXN0cnVjdGlvblBhcnRpY2xlQW5pbWF0aW9uIH07XHJcbiIsImltcG9ydCB7IFBsYXllckF0dGFja1ZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvUGxheWVyQXR0YWNrVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5QW5pbWF0aW9uIH0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJBdHRhY2tBbmltYXRpb24gZXh0ZW5kcyBFbnRpdHlBbmltYXRpb24ge1xyXG4gICAgYW5pbWF0ZShjdXJyZW50Vmlld01vZGVsOiBWaWV3TW9kZWwpOiBhbnkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydFZpZXdNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsID0gbmV3IFBsYXllckF0dGFja1ZpZXdNb2RlbChcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZWwucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5jb2xvcixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZWwucG9zaXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID1cclxuICAgICAgICAgICAgdGhpcy5zY2FsZVBhcmFtcyAqXHJcbiAgICAgICAgICAgICg8UGxheWVyQXR0YWNrVmlld01vZGVsPnRoaXMuc3RhcnRWaWV3TW9kZWwpLnJhZGl1cyAqXHJcbiAgICAgICAgICAgIHRoaXMudGltaW5nRnVuY3Rpb24odGhpcy5wcm9ncmVzcygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhZGl1cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyQXR0YWNrQW5pbWF0aW9uIH07XHJcbiIsIm5hbWVzcGFjZSBUaW1pbmdGdW5jdGlvbnMge1xyXG4gICAgZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3M6IG51bWJlcikgPT4gbnVtYmVyXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHF1YWQ6IFRpbWluZ0Z1bmN0aW9uID0gKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMilcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY29uc3QgYm93OiBUaW1pbmdGdW5jdGlvbiA9IChwcm9ncmVzczogbnVtYmVyLCBlbGFzdGljOiBudW1iZXIgPSAwLjUpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMikgKiAoKGVsYXN0aWMgKyAxKSAqIHByb2dyZXNzIC0gZWxhc3RpYylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGltaW5nRnVuY3Rpb25zIH0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCJcclxuaW1wb3J0IHsgZGlzdGFuY2VCZXR3ZWVuIH0gZnJvbSBcIi4uL1V0aWxzXCJcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiXHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSBcIi4vQ29sbGlkZXJcIlxyXG5cclxuY2xhc3MgQ2lyY2xlQ29sbGlkZXIgZXh0ZW5kcyBDb2xsaWRlciB7XHJcblxyXG4gICAgcHJpdmF0ZSByYWRpdXM6IG51bWJlciA9IDBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEVudGl0eSwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihlbnRpdHkpXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcclxuICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucmVnaXN0ZXJPYnNlcnZlcih0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVkKHRhcmdldDogQ29sbGlkZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ2lyY2xlQ29sbGlkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlQmV0d2Vlbih0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24sIHRhcmdldC5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uKSA8PSAodGFyZ2V0LmVudGl0eS52aWV3TW9kZWwucmFkaXVzICsgdGhpcy5yYWRpdXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG9uTm90aWZ5Q2FsbGJhY2socGFyYW1zOiBWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHBhcmFtcy5yYWRpdXNcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IENpcmNsZUNvbGxpZGVyIH0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSBcIi4uL09ic2VydmluZy9PYnNlcnZlclwiO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGVudGl0eTogRW50aXR5O1xyXG4gICAgYWJzdHJhY3QgY29sbGlkZWQodGFyZ2V0OiBDb2xsaWRlcik6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbGxpZGVyIH0iLCJpbXBvcnQgeyBpbnB1dGFibGUgfSBmcm9tIFwiLi4vRGVjb3JhdG9ycy9JbnB1dGFibGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IEVudGl0eVN0YXRlIH0gZnJvbSBcIi4uL0VudW0vRW50aXR5U3RhdGVcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL01vZGVsL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSBcIi4vRW50aXR5Q29udHJvbGxlclwiO1xyXG5cclxuQGlucHV0YWJsZVxyXG5jbGFzcyBCb3RDb250cm9sbGVyIGV4dGVuZHMgRW50aXR5Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm90RW50aXR5OiBFbnRpdHkpIHtcclxuICAgICAgICBzdXBlcihib3RFbnRpdHkpXHJcbiAgICB9XHJcblxyXG4gICAgcGVyZm9ybUFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZW50aXR5LnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRW50aXR5U3RhdGUuSWRsZToge1xyXG4gICAgICAgICAgICAgICAgLy8gYmluZGluZyB0aGlzLmVudGl0eSBwYXJhbSBjYXVzZSBpbiBpcyBvbmx5IG9uZSBjb250cm9sbGVyIGFuZCB0aGlzLmVudGl0eSBjaGFuZ2VzIGV2ZXJ5IGZyYW1lIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKGVudGl0eTogRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnN0YXRlID0gRW50aXR5U3RhdGUuTW92aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMsIHRoaXMuZW50aXR5KSwgMTAwMClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFbnRpdHlTdGF0ZS5Nb3Zpbmc6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHg6IG51bWJlciA9IHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5OiBudW1iZXIgPSB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHggKyAxICogdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSArIDEgKiB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWSlcclxuICAgICAgICAgICAgfSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFdmVudEhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQm90Q29udHJvbGxlciB9IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vTW9kZWwvRW50aXR5J1xyXG5hYnN0cmFjdCBjbGFzcyBFbnRpdHlDb250cm9sbGVyIHtcclxuICAgIHByaXZhdGUgX2VudGl0eTogRW50aXR5XHJcblxyXG4gICAgY29uc3RydWN0b3IoZTogRW50aXR5KSB7XHJcbiAgICAgICAgdGhpcy5fZW50aXR5ID0gZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbnRpdHkoKTogRW50aXR5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVudGl0eSh2YWx1ZTogRW50aXR5KSB7XHJcbiAgICAgICAgdGhpcy5fZW50aXR5ID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBwZXJmb3JtQWN0aW9uKCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEVudGl0eUNvbnRyb2xsZXIgfSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQXR0YWNrUGFydGljbGUgfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyQXR0YWNrUGFydGljbGVcIjtcclxuaW1wb3J0IHsgRW50aXR5Q29udHJvbGxlciB9IGZyb20gXCIuL0VudGl0eUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVcIjtcclxuaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uL01vZGVsL0JvdFwiO1xyXG5pbXBvcnQgeyBCb3REZXN0cnVjdGlvblBhcnRpY2xlIH0gZnJvbSBcIi4uL01vZGVsL0JvdERlc3RydWN0aW9uUGFydGljbGVcIjtcclxuaW1wb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3IH0gZnJvbSBcIi4uL1ZpZXcvQm90RGVzdHJ1Y3Rpb25WaWV3XCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9Cb3REZXN0cnVjdGlvblZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBCb3REZXN0cnVjdGlvblBhcnRpY2xlQW5pbWF0aW9uIH0gZnJvbSBcIi4uL0FuaW1hdGlvbi9Cb3REZXNjdHJ1dGlvblBhcnRpY2xlQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFRpbWluZ0Z1bmN0aW9ucyB9IGZyb20gXCIuLi9BbmltYXRpb24vVGltaW5nRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IFBsYXllclNjb3JlVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9QbGF5ZXJTY29yZVZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuLi9Nb2RlbC9TY29yZVwiO1xyXG5cclxuY2xhc3MgUGFydGljbGVDb250cm9sbGVyIGV4dGVuZHMgRW50aXR5Q29udHJvbGxlciB7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCk7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB9XHJcblxyXG4gICAgcGVyZm9ybUFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICAvLyBkZWxldGUgZXhwaXJlZCBwYXJ0aWNsZXNcclxuICAgICAgICBzdG9yZS5wYXJ0aWNsZXMgPSBzdG9yZS5wYXJ0aWNsZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAocGFydGljbGUpID0+ICEhcGFydGljbGUuYW5pbWF0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gdHJhbnNmb3JtIHBhcnRpY2xlc1xyXG4gICAgICAgIHN0b3JlLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFydGljbGUuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFydGljbGUgaW5zdGFuY2VvZiBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbC5yYWRpdXMgPSBwYXJ0aWNsZS5hbmltYXRpb24uYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudmlld01vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFydGljbGUgaW5zdGFuY2VvZiBCb3REZXN0cnVjdGlvblBhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uUGFyYW1zID0gcGFydGljbGUuYW5pbWF0aW9uLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudmlld01vZGVsLnBvc2l0aW9uID0gYW5pbWF0aW9uUGFyYW1zLm5ld1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbC5vcGFjaXR5ID0gYW5pbWF0aW9uUGFyYW1zLm9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGFydGljbGUuYW5pbWF0aW9uLnByb2dyZXNzKCkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLmFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgY29sbGlzaW9uc1xyXG4gICAgICAgIHN0b3JlLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICBzdG9yZS5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZS5jb2xsaWRlci5jb2xsaWRlZChlbnRpdHkuY29sbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlIGluc3RhbmNlb2YgUGxheWVyQXR0YWNrUGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRpdHkgaW5zdGFuY2VvZiBCb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEJPVF9ERVNUUlVDVElPTl9QQVJUSUNMRV9DT1VOVCA9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgQk9UX0RFU1RSVUNUSU9OX1BBUlRJQ0xFX0NPVU5UO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLmRpcmVjdGlvblggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSArIDIgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbURpcmVjdGlvbi5kaXJlY3Rpb25ZID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgKyAyICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3REZXN0cnVjdGlvblBhcnRpY2xlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvdERlc3RydWN0aW9uUGFydGljbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZS5hbmltYXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZUFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm5vdygpICsgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGltaW5nRnVuY3Rpb25zLnF1YWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3REZXN0cnVjdGlvblBhcnRpY2xlLnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm90RGVzdHJ1Y3Rpb25WaWV3KHRoaXMuY3R4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5wdXNoKGJvdERlc3RydWN0aW9uUGFydGljbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZW50aXRpZXMgPSBzdG9yZS5lbnRpdGllcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRFbnRpdHkpID0+IHRFbnRpdHkgIT09IGVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFBsYXllclNjb3JlVmlld01vZGVsPihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5lbnRpdGllcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0RW50aXR5KSA9PiB0RW50aXR5IGluc3RhbmNlb2YgU2NvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApWzBdLnZpZXdNb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkuc2NvcmVWYWx1ZSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IHsgUGFydGljbGVDb250cm9sbGVyIH07XHJcbiIsImltcG9ydCB7IGlucHV0YWJsZSB9IGZyb20gXCIuLi9EZWNvcmF0b3JzL0lucHV0YWJsZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tIFwiLi4vRW51bS9FbnRpdHlTdGF0ZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEVudGl0eUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9FbnRpdHlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1BhcnRpY2xlIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllckF0dGFja1BhcnRpY2xlXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja0FuaW1hdGlvbiB9IGZyb20gXCIuLi9BbmltYXRpb24vUGxheWVyQXR0YWNrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFRpbWluZ0Z1bmN0aW9ucyB9IGZyb20gXCIuLi9BbmltYXRpb24vVGltaW5nRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1BhcnRpY2xlVmlldyB9IGZyb20gXCIuLi9WaWV3L1BsYXllckF0dGFja1BhcnRpY2xlVmlld1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJBdHRhY2tWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllckF0dGFja1ZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBnZXRDYW52YXNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VXcmFwcGVyXCI7XHJcbkBpbnB1dGFibGVcclxuY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIEVudGl0eUNvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBrZXlzUHJlc3NlZDogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyRW50aXR5OiBFbnRpdHkpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXJFbnRpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBlcmZvcm1BY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmVudGl0eS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVudGl0eVN0YXRlLklkbGU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFbnRpdHlTdGF0ZS5Nb3Zpbmc6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeDogbnVtYmVyID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZFggPSB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkWSA9IHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25ZO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB4ICsgNSAqIGRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB5ICsgNSAqIGRZLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlIGluc3RhbmNlb2YgUGxheWVyQXR0YWNrUGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZpZXdNb2RlbC5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNoYW5nZSBkaXJlY3Rpb24gb24gYXJyb3cga2V5cyBwcmVzc2VkXHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKFxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRpdHkuc3RhdGUgPSBFbnRpdHlTdGF0ZS5Nb3Zpbmc7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1ByZXNzZWRbZXZlbnQua2V5XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1ByZXNzZWRbZXZlbnQua2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMua2V5c1ByZXNzZWQpLmZvckVhY2goKGtleU5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5c1ByZXNzZWRba2V5TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kaXJlY3Rpb25ZID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGlyZWN0aW9uWSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGlyZWN0aW9uWCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0aWNsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlIGluc3RhbmNlb2YgUGxheWVyQXR0YWNrUGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJBdHRhY2tQYXJ0aWNsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllckF0dGFja1BhcnRpY2xlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyQXR0YWNrVmlld01vZGVsKDEwLCBcIiMwMGZcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5wbGF5ZXJFbnRpdHkudmlld01vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckF0dGFja1BhcnRpY2xlLmFuaW1hdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllckF0dGFja0FuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2Uubm93KCkgKyAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbWluZ0Z1bmN0aW9ucy5xdWFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckF0dGFja1BhcnRpY2xlLnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZVZpZXcoZ2V0Q2FudmFzQ29udGV4dCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnBhcnRpY2xlcy5wdXNoKHBsYXllckF0dGFja1BhcnRpY2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfTtcclxuIiwiY29uc3QgaW5wdXRhYmxlID0gPFQgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiB7fX0+KHRhcmdldDogVCkgPT4ge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgdGFyZ2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncylcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YXJnZXQucHJvdG90eXBlLmlucHV0RXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRhcmdldC5wcm90b3R5cGUuaW5wdXRFdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGFyZ2V0LnByb3RvdHlwZS5pbnB1dEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGlucHV0YWJsZVxyXG59IiwiZW51bSBFbnRpdHlTdGF0ZSB7XHJcbiAgICBJZGxlLFxyXG4gICAgTW92aW5nLFxyXG4gICAgQXR0YWNrLFxyXG4gICAgRGVhZFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgRW50aXR5U3RhdGVcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL1N0YXRzXCI7XHJcblxyXG5jbGFzcyBCb3QgZXh0ZW5kcyBFbnRpdHkge1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRzOiBTdGF0c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIodmlld01vZGVsKVxyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFN0YXRzKDIsIDEwMClcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENpcmNsZUNvbGxpZGVyKHRoaXMsIHRoaXMudmlld01vZGVsLnJhZGl1cylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHMoKTogU3RhdHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0c1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0cyh2YWx1ZTogU3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCb3RcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5jbGFzcyBCb3REZXN0cnVjdGlvblBhcnRpY2xlIGV4dGVuZHMgUGFydGljbGUge1xyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcih0aGlzLCB0aGlzLnZpZXdNb2RlbC5yYWRpdXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGUgfSIsImltcG9ydCB7IEVudGl0eUFuaW1hdGlvbiB9IGZyb20gJy4uL0FuaW1hdGlvbi9BbmltYXRpb24nXHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vQ29sbGlzaW9ucy9Db2xsaWRlcidcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuLi9FbnVtL0VudGl0eVN0YXRlJ1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvVmlld01vZGUnXHJcbmFic3RyYWN0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2N1cnJlbnRUYXJnZXQ6IEVudGl0eVxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEVudGl0eVN0YXRlXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcjogQ29sbGlkZXJcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogRW50aXR5QW5pbWF0aW9uXHJcbiAgICBwcml2YXRlIF92aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBFbnRpdHlTdGF0ZS5JZGxlXHJcbiAgICAgICAgdGhpcy5fdmlld01vZGVsID0gdmlld01vZGVsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IEVudGl0eVN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodmFsdWU6IEVudGl0eVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50VGFyZ2V0KCk6IEVudGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXJnZXRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY3VycmVudFRhcmdldCh2YWx1ZTogRW50aXR5KSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRhcmdldCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbGxpZGVyKCk6IENvbGxpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGlkZXJcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29sbGlkZXIodmFsdWU6IENvbGxpZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXIgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmltYXRpb24oKTogRW50aXR5QW5pbWF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogRW50aXR5QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlld01vZGVsKCk6IFZpZXdNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNb2RlbFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB2aWV3TW9kZWwodmFsdWU6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBFbnRpdHlcclxufSIsImltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHN1cGVyKHZpZXdNb2RlbClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGFydGljbGUgfSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL1N0YXRzXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgcHJpdmF0ZSBfc3RhdHM6IFN0YXRzXHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgU3RhdHMoMiwgMTAwKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgMClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHMoKTogU3RhdHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0c1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0cyh2YWx1ZTogU3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBQbGF5ZXJcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSBleHRlbmRzIFBhcnRpY2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIodmlld01vZGVsKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgdGhpcy52aWV3TW9kZWwucmFkaXVzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSB9IiwiY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXJcclxuICAgIGRpcmVjdGlvblg6IG51bWJlclxyXG4gICAgZGlyZWN0aW9uWTogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uWDogbnVtYmVyLCBkaXJlY3Rpb25ZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IGRpcmVjdGlvblhcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSBkaXJlY3Rpb25ZXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFBvc2l0aW9uXHJcbn0iLCJpbXBvcnQgeyBDaXJjbGVDb2xsaWRlciB9IGZyb20gXCIuLi9Db2xsaXNpb25zL0NpcmNsZUNvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5jbGFzcyBTY29yZSBleHRlbmRzIEVudGl0eSB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcih0aGlzLCAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgU2NvcmVcclxufSIsImNsYXNzIFN0YXRzIHtcclxuICAgIHNwZWVkOiBudW1iZXJcclxuICAgIGhlYWx0aDogbnVtYmVyIFxyXG4gICAgc2NvcmU6IG51bWJlclxyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQ6IG51bWJlciwgaGVhbHRoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTdGF0c1xyXG59IiwiaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJ1xyXG5hYnN0cmFjdCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIG9ic2VydmVyczogQXJyYXk8T2JzZXJ2ZXI+XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBPYnNlcnZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG5vdGlmeU9ic2VydmVycyhwYXJhbXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIub25Ob3RpZnlDYWxsYmFjayhwYXJhbXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgT2JzZXJ2YWJsZVxyXG59IiwiYWJzdHJhY3QgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgYWJzdHJhY3Qgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBPYnNlcnZlclxyXG59IiwiaW1wb3J0IHsgQ2lyY2xlQ29sbGlkZXIgfSBmcm9tICcuLi9Db2xsaXNpb25zL0NpcmNsZUNvbGxpZGVyJ1xyXG5pbXBvcnQgeyBCb3QgfSBmcm9tICcuLi9Nb2RlbC9Cb3QnXHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL01vZGVsL0VudGl0eSdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vTW9kZWwvUGxheWVyJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL01vZGVsL1Bvc2l0aW9uJ1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJy4uL01vZGVsL1Njb3JlJ1xyXG5pbXBvcnQgeyBCb3RWaWV3IH0gZnJvbSAnLi4vVmlldy9Cb3RWaWV3J1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSAnLi4vVmlldy9FbnRpdHlWaWV3J1xyXG5pbXBvcnQgeyBQbGF5ZXJTY29yZVZpZXcgfSBmcm9tICcuLi9WaWV3L1BsYXllclNjb3JlVmlldydcclxuaW1wb3J0IHsgUGxheWVyVmlldyB9IGZyb20gJy4uL1ZpZXcvUGxheWVyVmlldydcclxuaW1wb3J0IHsgQm90Vmlld01vZGVsIH0gZnJvbSAnLi4vVmlld01vZGVsL0JvdFZpZXdNb2RlbCdcclxuaW1wb3J0IHsgUGxheWVyU2NvcmVWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvUGxheWVyU2NvcmVWaWV3TW9kZWwnXHJcbmltcG9ydCB7IFBsYXllclZpZXdNb2RlbCB9IGZyb20gJy4uL1ZpZXdNb2RlbC9QbGF5ZXJWaWV3TW9kZWwnXHJcblxyXG5jbGFzcyBTdG9yZSB7XHJcbiAgICBfZW50aXRpZXM6IEFycmF5PEVudGl0eT5cclxuICAgIF9wbGF5ZXJFbnRpdHk6IEVudGl0eVxyXG4gICAgX3BhcnRpY2xlczogRW50aXR5W11cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9lbnRpdGllcyA9IFtdXHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW11cclxuICAgICAgICB0aGlzLl9wbGF5ZXJFbnRpdHkgPSBuZXcgUGxheWVyKG5ldyBQbGF5ZXJWaWV3TW9kZWwoMTIsIFwiIzAwZlwiLCBuZXcgUG9zaXRpb24oMCwgMCwgMCwgMCkpKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVEQihlbnRpdHlDb3VudDogbnVtYmVyLCB2aWV3c1JlbmRlckNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjb3VudGVyOiBudW1iZXIgPSBlbnRpdHlDb3VudFxyXG4gICAgICAgIHdoaWxlIChjb3VudGVyID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tWDogbnVtYmVyID0gdmlld3NSZW5kZXJDb250ZXh0LmNhbnZhcy53aWR0aCAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tWTogbnVtYmVyID0gdmlld3NSZW5kZXJDb250ZXh0LmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblg6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uWTogbnVtYmVyID0gLTEgKyAyICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYm90RW50aXR5ID0gbmV3IEJvdChuZXcgQm90Vmlld01vZGVsKDEwLCAnI2ZmZicsIG5ldyBQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZLCByYW5kb21EaXJlY3Rpb25YLCByYW5kb21EaXJlY3Rpb25ZKSkpXHJcbiAgICAgICAgICAgIGJvdEVudGl0eS5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcihib3RFbnRpdHksIGJvdEVudGl0eS52aWV3TW9kZWwucmFkaXVzKVxyXG4gICAgICAgICAgICBjb25zdCBib3RFbnRpdHlWaWV3ID0gbmV3IEJvdFZpZXcodmlld3NSZW5kZXJDb250ZXh0KVxyXG4gICAgICAgICAgICBib3RFbnRpdHkudmlld01vZGVsLnJlZ2lzdGVyT2JzZXJ2ZXIoYm90RW50aXR5VmlldylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VudGl0aWVzLnB1c2goYm90RW50aXR5KVxyXG4gICAgICAgICAgICBjb3VudGVyIC09IDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3JlRW50aXR5ID0gbmV3IFNjb3JlKG5ldyBQbGF5ZXJTY29yZVZpZXdNb2RlbCgxMCwgXCIjZjAwXCIsIG5ldyBQb3NpdGlvbigxMDAsIDEwMCwgMCwgMCksIDApKTtcclxuICAgICAgICBjb25zdCBzY29yZVZpZXcgPSBuZXcgUGxheWVyU2NvcmVWaWV3KHZpZXdzUmVuZGVyQ29udGV4dClcclxuICAgICAgICBzY29yZUVudGl0eS52aWV3TW9kZWwucmVnaXN0ZXJPYnNlcnZlcihzY29yZVZpZXcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXMucHVzaChzY29yZUVudGl0eSlcclxuICAgICAgICBjb25zdCByYW5kb21YOiBudW1iZXIgPSB2aWV3c1JlbmRlckNvbnRleHQuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbVk6IG51bWJlciA9IHZpZXdzUmVuZGVyQ29udGV4dC5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblg6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb25ZOiBudW1iZXIgPSAtMSArIDIgKiBNYXRoLnJhbmRvbSgpXHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXllckVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSwgcmFuZG9tRGlyZWN0aW9uWCwgcmFuZG9tRGlyZWN0aW9uWSkgXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5LmNvbGxpZGVyID0gbmV3IENpcmNsZUNvbGxpZGVyKHRoaXMuX3BsYXllckVudGl0eSwgdGhpcy5fcGxheWVyRW50aXR5LnZpZXdNb2RlbC5yYWRpdXMpXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5LnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKG5ldyBQbGF5ZXJWaWV3KHZpZXdzUmVuZGVyQ29udGV4dCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbnRpdGllcygpOiBBcnJheTxFbnRpdHk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXNcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW50aXRpZXModmFsdWU6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGF5ZXJFbnRpdHkoKTogRW50aXR5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyRW50aXR5XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhcnRpY2xlcygpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnRpY2xlc1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwYXJ0aWNsZXModmFsdWU6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYXJ0aWNsZUVudGl0eShwYXJ0aWNsZTogRW50aXR5LCBwYXJ0aWNsZVZpZXc6IEVudGl0eVZpZXcpIHtcclxuICAgICAgICAvLyBwYXJ0aWNsZS5yZWdpc3Rlck9ic2VydmVyKHBhcnRpY2xlVmlldylcclxuICAgICAgICB0aGlzLl9lbnRpdGllcy5wdXNoKHBhcnRpY2xlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhcnRpY2xlKHA6IEVudGl0eSkge1xyXG4gICAgICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5lbnRpdGllcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUgPT09IHApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmU6IFN0b3JlID0gbmV3IFN0b3JlKCk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHN0b3JlXHJcbn0iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlbiA9IChwMTogUG9zaXRpb24sIHAyOiBQb3NpdGlvbik6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSlcclxufSIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuL1ZpZXdNb2RlXCI7XHJcblxyXG5jbGFzcyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBwcml2YXRlIF9hbmdsZSA9IDBcclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihyYWRpdXMsIGNvbG9yLCBwb3NpdGlvbilcclxuICAgICAgICB0aGlzLl9yYWRpdXMgPSByYWRpdXNcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuX2FuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuZ2xlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uVmlld01vZGVsIH07IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIEJvdFZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja1ZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIFBsYXllclNjb3JlVmlld01vZGVsIGV4dGVuZHMgVmlld01vZGVsIHtcclxuICAgIF9zY29yZVZhbHVlOiBudW1iZXJcclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24sIHNjb3JlVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHJhZGl1cywgY29sb3IsIHBvc2l0aW9uKVxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1c1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3JcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5fc2NvcmVWYWx1ZSA9IHNjb3JlVmFsdWVcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29yZVZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZVZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNjb3JlVmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Njb3JlVmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllclNjb3JlVmlld01vZGVsIH07XHJcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuL1ZpZXdNb2RlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJWaWV3TW9kZWwgZXh0ZW5kcyBWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKHJhZGl1cywgY29sb3IsIHBvc2l0aW9uKVxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1c1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3JcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyVmlld01vZGVsIH07XHJcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vT2JzZXJ2aW5nL09ic2VydmFibGVcIjtcclxuXHJcbmNsYXNzIFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgX3JhZGl1czogbnVtYmVyID0gMzA7XHJcbiAgICBfb3BhY2l0eTogbnVtYmVyID0gMTtcclxuICAgIF9jb2xvcjogc3RyaW5nID0gXCIjMDBmXCI7XHJcbiAgICBfcG9zaXRpb246IFBvc2l0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhY2l0eTtcclxuICAgIH1cclxuICAgIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb3NpdGlvbih2YWx1ZTogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL0JvdERlc3RydWN0aW9uVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIEJvdERlc3RydWN0aW9uVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHN1cGVyKGN0eClcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmFtczogVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSAoPEJvdERlc3RydWN0aW9uVmlld01vZGVsPnBhcmFtcylcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKClcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh2bS5wb3NpdGlvbi54LCB2bS5wb3NpdGlvbi55KVxyXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh2bS5hbmdsZSlcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB2bS5jb2xvclxyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdm0ub3BhY2l0eVxyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCAwIC0gdm0ucmFkaXVzKVxyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygwICsgdm0ucmFkaXVzLCAwICAtIHZtLnJhZGl1cyAvIDIpXHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDAgLSB2bS5yYWRpdXMgLyAyLCAwICArIHZtLnJhZGl1cylcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMCAtIHZtLnJhZGl1cywgMCAtIHZtLnJhZGl1cyAvIDYpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3IH0iLCJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vTW9kZWwvQm90XCI7XHJcbmltcG9ydCB7IEJvdFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvQm90Vmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIEJvdFZpZXcgZXh0ZW5kcyBFbnRpdHlWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmFtczogVmlld01vZGVsKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSA8Qm90Vmlld01vZGVsPnBhcmFtcztcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB2bS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModm0ucG9zaXRpb24ueCwgdm0ucG9zaXRpb24ueSwgdm0ucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RWaWV3IH07XHJcbiIsImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSBcIi4uL09ic2VydmluZy9PYnNlcnZlclwiXHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIlxyXG5cclxuYWJzdHJhY3QgY2xhc3MgRW50aXR5VmlldyBleHRlbmRzIE9ic2VydmVyIHtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhdyhwYXJhbXMpXHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZHJhdyhwYXJhbXM6IFZpZXdNb2RlbCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBFbnRpdHlWaWV3XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1ZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvUGxheWVyQXR0YWNrVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja1BhcnRpY2xlVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmFtczogVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSAoPFBsYXllckF0dGFja1ZpZXdNb2RlbD5wYXJhbXMpXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSA2IDwgMCA/IDAgOiB2bS5yYWRpdXMgLSA2LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKClcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSA1IDwgMCA/IDAgOiB2bS5yYWRpdXMgLSA1LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKClcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMyc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSA0IDwgMCA/IDAgOiB2bS5yYWRpdXMgLSA0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyMwMDUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgdm0ucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdm0ucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdm0ucmFkaXVzIC0gMyA8IDAgPyAwIDogdm0ucmFkaXVzIC0gMyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDA3JztcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyAtIDIgPCAwID8gMCA6IHZtLnJhZGl1cyAtIDIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwYSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSAxIDwgMCA/IDAgOiB2bS5yYWRpdXMgLSAxLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdm0uY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyQXR0YWNrUGFydGljbGVWaWV3IH07XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2NvcmVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllclNjb3JlVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIFBsYXllclNjb3JlVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyYW1zOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBjb25zdCB2bSA9IDxQbGF5ZXJTY29yZVZpZXdNb2RlbD5wYXJhbXM7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICczMHB4IEhhY2snO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHZtLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTY29yZTogJyArIHZtLnNjb3JlVmFsdWUsIDEwMCwgNTApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJTY29yZVZpZXcgfTtcclxuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL01vZGVsL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllclZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCI7XHJcbmltcG9ydCB7IEVudGl0eVZpZXcgfSBmcm9tIFwiLi9FbnRpdHlWaWV3XCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJWaWV3IGV4dGVuZHMgRW50aXR5VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHN1cGVyKGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJhbXM6IFZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZtID0gPFBsYXllclZpZXdNb2RlbD5wYXJhbXM7XHJcblxyXG4gICAgICAgIGlmICh2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZICE9PSAwIHx8IHZtLnBvc2l0aW9uLmRpcmVjdGlvblggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzU1ZlwiO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgICAgICB2bS5wb3NpdGlvbi54IC0gMTQgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDE0ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWSxcclxuICAgICAgICAgICAgICAgIHZtLnJhZGl1cyAtIDgsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjNjZmXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnggLSAxMiAqIHZtLnBvc2l0aW9uLmRpcmVjdGlvblgsXHJcbiAgICAgICAgICAgICAgICB2bS5wb3NpdGlvbi55IC0gMTIgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgdm0ucmFkaXVzIC0gNixcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiM3N2ZcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueCAtIDggKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDggKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgdm0ucmFkaXVzIC0gNCxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiM4OGZcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueCAtIDUgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDUgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgdm0ucmFkaXVzIC0gMixcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHZtLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh2bS5wb3NpdGlvbi54LCB2bS5wb3NpdGlvbi55LCB2bS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllclZpZXcgfTtcclxuIiwiaW1wb3J0IHsgZ2V0Q2FudmFzQ29udGV4dCB9IGZyb20gXCIuLi9wYWdlV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XHJcbmltcG9ydCB7IEJvdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL0JvdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlci9FbnRpdHlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvUGFydGljbGVDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgY19jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGdldENhbnZhc0NvbnRleHQoKTtcclxuY29uc3QgYm90Q29udHJvbGxlcjogRW50aXR5Q29udHJvbGxlciA9IG5ldyBCb3RDb250cm9sbGVyKG51bGwpO1xyXG5jb25zdCBwbGF5ZXJDb250cm9sbGVyOiBFbnRpdHlDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIobnVsbCk7XHJcbmNvbnN0IHBhcnRpY2xlQ29udHJvbGxlcjogRW50aXR5Q29udHJvbGxlciA9IG5ldyBQYXJ0aWNsZUNvbnRyb2xsZXIoY19jdHgpO1xyXG5cclxuXHJcbmNvbnN0IEVOVElUWV9UT19HRU5FUkFURTogbnVtYmVyID0gMzA7XHJcblxyXG5jb25zdCBnYW1lU3RhcnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzdG9yZS5pbml0aWFsaXplREIoRU5USVRZX1RPX0dFTkVSQVRFLCBnZXRDYW52YXNDb250ZXh0KCkpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XHJcbn07XHJcblxyXG5jb25zdCBtYWluID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY19jdHguY2xlYXJSZWN0KDAsIDAsIGNfY3R4LmNhbnZhcy53aWR0aCwgY19jdHguY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgc3RvcmUuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgYm90Q29udHJvbGxlci5lbnRpdHkgPSBlbnRpdHk7XHJcbiAgICAgICAgYm90Q29udHJvbGxlci5wZXJmb3JtQWN0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwYyA9IChwYXJ0aWNsZUNvbnRyb2xsZXIgYXMgUGFydGljbGVDb250cm9sbGVyKVxyXG4gICAgcGMucGVyZm9ybUFjdGlvbigpXHJcbiAgICBcclxuXHJcbiAgICBwbGF5ZXJDb250cm9sbGVyLmVudGl0eSA9IHN0b3JlLnBsYXllckVudGl0eTtcclxuICAgIHBsYXllckNvbnRyb2xsZXIucGVyZm9ybUFjdGlvbigpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdhbWVTdGFydCB9O1xyXG4iLCJjb25zdCBjX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY19nYW1lJykgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldENvbnRleHQoJzJkJylcclxuY29uc3QgaW5pdENhbnZhcyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNfY29udGV4dC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgY19jb250ZXh0LmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwXCJcclxufVxyXG5jb25zdCBnZXRDYW52YXNDb250ZXh0ID0gKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9PiB7XHJcbiAgICByZXR1cm4gY19jb250ZXh0XHJcbn1cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGdldENhbnZhc0NvbnRleHQoKS5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgZ2V0Q2FudmFzQ29udGV4dCgpLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxufVxyXG5cclxuXHJcbmNvbnN0IHJlc2V0UGFnZVN0eWxlcyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9ICcwJ1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCdcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDB2dydcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbn1cclxuZXhwb3J0IHtcclxuICAgIGluaXRDYW52YXMsXHJcbiAgICBnZXRDYW52YXNDb250ZXh0LFxyXG4gICAgcmVzZXRQYWdlU3R5bGVzXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vZm9udHMvaGFjay1ib2xkLndvZmZcIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyBpbml0Q2FudmFzLCByZXNldFBhZ2VTdHlsZXMgfSBmcm9tIFwiLi9wYWdlV3JhcHBlclwiXHJcbmltcG9ydCB7IGdhbWVTdGFydCB9IGZyb20gJy4vZ2FtZS9tYWluJ1xyXG5cclxucmVzZXRQYWdlU3R5bGVzKClcclxuaW5pdENhbnZhcygpXHJcblxyXG5nYW1lU3RhcnQoKSJdLCJzb3VyY2VSb290IjoiIn0=