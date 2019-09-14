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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/About.svelte.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/About.svelte.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../img/footer.jpg */ "./src/img/footer.jpg"));
// Module
exports.push([module.i, ".root.svelte-1jm3kgc{min-width:100%;min-height:770px;background:url(" + ___CSS_LOADER_URL___0___ + ") center / 100% 100% no-repeat;background-size:cover;color:white}.text_block.svelte-1jm3kgc{padding:80px 0 0 243px;display:flex;flex-direction:column}h2.svelte-1jm3kgc{font-size:64px}p.svelte-1jm3kgc{font-size:36px;font-weight:300;margin-bottom:93px;width:621px}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/AddCart.svelte.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/AddCart.svelte.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h3.svelte-1yoo4hj{font-size:24px;font-weight:500}span.svelte-1yoo4hj{color:green}textarea.svelte-1yoo4hj,input.svelte-1yoo4hj{width:100%;border:none;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.25);background-color:#ffffff;margin-top:20px;height:44px;padding-left:14px}textarea.svelte-1yoo4hj{height:140px;padding-top:8px}.buttons.svelte-1yoo4hj{display:flex;flex-direction:row;justify-content:flex-end}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Auth.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Auth.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".wrapper.svelte-1g2878l{display:flex;justify-content:center;margin-top:200px}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Blur.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Blur.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.svelte-xs6r15{position:fixed;top:0;left:0;height:100vh;width:100%;background:rgba(0,0,0,0.75)}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Card.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Card.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".svelte-a020p1{font-family:'Sarabun', sans-serif}.wrapper.svelte-a020p1{display:flex;flex-direction:column;min-width:300px}img.svelte-a020p1{height:164px;width:100%}.info.svelte-a020p1{display:flex;flex-direction:column}.text.svelte-a020p1{display:flex;justify-content:space-between}.text.svelte-a020p1,.button.svelte-a020p1{padding:0 20px}.name.svelte-a020p1{max-width:200px}.name.svelte-a020p1,.price.svelte-a020p1{font-size:24px;font-weight:100}.desc.svelte-a020p1{font-size:14px;font-weight:100}.button.svelte-a020p1{display:flex;justify-content:flex-end}.buttons.svelte-a020p1{display:flex;justify-content:space-between}button.svelte-a020p1{background:#ced7f9;color:#3b7632;font-size:18px;padding:10px;border:none;margin-top:10px;position:relative;outline:none}.wrap.svelte-a020p1{display:flex;justify-content:space-between;flex-direction:column;height:100%}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CardList.svelte.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CardList.svelte.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".root.svelte-8accb3{width:100%;display:flex;flex-direction:column}h1.svelte-8accb3{font-size:64px;text-align:center;margin-top:64px;margin-bottom:24px}.grid.svelte-8accb3{display:grid;grid-template-columns:repeat(3, 300px);grid-gap:20px;margin:24px auto 64px}.add.svelte-8accb3{width:64px;margin:0 auto 64px}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Cart.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Cart.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".wrapper.svelte-12qj7qp{position:fixed;top:0;right:0;bottom:0;width:300px;background:white;transition:transform .3s ease-out;box-shadow:0 0 40px rgba(0, 0, 0, 0.3)}.description.svelte-12qj7qp{display:flex;flex-direction:row;align-items:center;justify-content:space-around;margin-bottom:24px}.closed.svelte-12qj7qp{transform:translateX(100%)}span.svelte-12qj7qp{cursor:pointer}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CartItem.svelte.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CartItem.svelte.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".root.svelte-10oslm7{display:flex;flex-direction:row;align-items:flex-start;width:100%;margin-top:8px}button.svelte-10oslm7{background:#ced7f9;color:red;font-size:18px;padding:4px;border:none;margin-top:10px;position:relative;outline:none}.info.svelte-10oslm7{display:flex;flex-direction:column;align-items:flex-start;margin-left:8px;width:100%}.info_price.svelte-10oslm7{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}img.svelte-10oslm7{width:80px;min-height:64px}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Checkmark.svelte.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Checkmark.svelte.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../img/ckeck.png */ "./src/img/ckeck.png"));
// Module
exports.push([module.i, ".success.svelte-1iw5x5{position:absolute;right:-25px;top:25%;width:20px;height:20px;background:green;opacity:0;animation:svelte-1iw5x5-success ease-in-out 1s infinite;background:url(" + ___CSS_LOADER_URL___0___ + ") center;background-size:cover}@keyframes svelte-1iw5x5-success{0%{opacity:0;transform:translateY(40%)}40%,60%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-40%)}}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer.svelte.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Footer.svelte.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".root.svelte-1fpx11t{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:32px auto 50px}.link_block.svelte-1fpx11t{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;min-height:54px;padding-left:243px}a.svelte-1fpx11t{font-size:18px;text-decoration:none}.social_block.svelte-1fpx11t{display:flex;flex-direction:row;align-items:center;padding-right:250px}.social_link.svelte-1fpx11t{width:60px;height:60px;margin-right:20px}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Form.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Form.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".form.svelte-1kselyv{background:#e4e4e4;border-radius:12px;padding:35px;width:435px;display:flex;flex-direction:column;position:fixed;top:20vh;left:calc((100% - 435px) / 2)}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Header.svelte.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Header.svelte.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".logo.svelte-1qez6xl{width:170px;height:50px}.black-line.svelte-1qez6xl{width:100%;height:60px;background-color:#15201a}.root.svelte-1qez6xl{padding:16px 250px 16px;display:flex;justify-content:space-between;align-items:flex-end}.text.svelte-1qez6xl{font-size:24px;color:#000000;font-weight:300;cursor:pointer;text-decoration:none}.cart.svelte-1qez6xl{width:32px;height:32px;margin-left:24px;margin-right:4px}.panel.svelte-1qez6xl{display:flex}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Hero.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Hero.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../img/Hero.jpg */ "./src/img/Hero.jpg"));
// Module
exports.push([module.i, ".wrapper.svelte-1e2zi5i{position:relative;overflow-x:hidden}.text.svelte-1e2zi5i{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;color:white}.clean.svelte-1e2zi5i{padding-top:79px}.clean.svelte-1e2zi5i,.ecology.svelte-1e2zi5i{font-size:96px;-webkit-font-smoothing:antialiased}.recycled.svelte-1e2zi5i{font-size:144px}a.svelte-1e2zi5i{display:block;color:black;text-decoration:none;background:#ececec;margin-top:140px;width:300px;height:60px;font-size:24px;font-weight:700;display:flex;align-items:center;justify-content:center}a.svelte-1e2zi5i:active{background:#bbbbbb}.img.svelte-1e2zi5i{min-height:90vh;min-width:100%;background:url(" + ___CSS_LOADER_URL___0___ + ") center;background-size:cover}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Main.svelte.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Main.svelte.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".root.svelte-6w9c5o{width:100%;transition:transform .3s ease-out}.with-cart.svelte-6w9c5o{transform:translateX(-50px)}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/SignButton.svelte.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/SignButton.svelte.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".primary.svelte-4owqyi{background:#3b7632;color:white}.secondary.svelte-4owqyi{background:white;color:#3b7632}button.svelte-4owqyi{border-radius:5px;margin-top:20px;font-size:18px;font-weight:600;padding:10px;width:100%;text-transform:uppercase;border:none}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Sarabun&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Sarabun:100&display=swap);", ""]);
// Module
exports.push([module.i, "* {\r\n  font-family: 'Montserrat', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.sarabun {\r\n  font-family: 'Sarabun', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/svelte-routing/src/Link.svelte":
/*!*****************************************************!*\
  !*** ./node_modules/svelte-routing/src/Link.svelte ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts.js */ "./node_modules/svelte-routing/src/contexts.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.js */ "./node_modules/svelte-routing/src/history.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte-routing/src/utils.js");
/* node_modules\svelte-routing\src\Link.svelte generated by Svelte v3.10.0 */






function create_fragment(ctx) {
	var a, current, dispose;

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	var a_levels = [
		{ href: ctx.href },
		{ "aria-current": ctx.ariaCurrent },
		ctx.props
	];

	var a_data = {};
	for (var i = 0; i < a_levels.length; i += 1) {
		a_data = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(a_data, a_levels[i]);
	}

	return {
		c() {
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");

			if (default_slot) default_slot.c();

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_attributes"])(a, a_data);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(a, "click", ctx.onClick);
		},

		l(nodes) {
			if (default_slot) default_slot.l(a_nodes);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_attributes"])(a, Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(a_levels, [
				(changed.href) && { href: ctx.href },
				(changed.ariaCurrent) && { "aria-current": ctx.ariaCurrent },
				(changed.props) && ctx.props
			]));
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(a);
			}

			if (default_slot) default_slot.d(detaching);
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $base, $location;

	

  let { to = "#", replace = false, state = {}, getProps = () => ({}) } = $$props;

  const { base } = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["getContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_2__["ROUTER"]); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, base, $$value => { $base = $$value; $$invalidate('$base', $base) });
  const location = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["getContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_2__["LOCATION"]); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, location, $$value => { $location = $$value; $$invalidate('$location', $location) });
  const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

  let href, isPartiallyCurrent, isCurrent, props;

  function onClick(event) {
    dispatch("click", event);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["shouldNavigate"])(event)) {
      event.preventDefault();
      // Don't push another entry to the history stack when the user
      // clicks on a Link to the page they are currently on.
      const shouldReplace = $location.pathname === href || replace;
      Object(_history_js__WEBPACK_IMPORTED_MODULE_3__["navigate"])(href, { state, replace: shouldReplace });
    }
  }

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('to' in $$props) $$invalidate('to', to = $$props.to);
		if ('replace' in $$props) $$invalidate('replace', replace = $$props.replace);
		if ('state' in $$props) $$invalidate('state', state = $$props.state);
		if ('getProps' in $$props) $$invalidate('getProps', getProps = $$props.getProps);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	let ariaCurrent;

	$$self.$$.update = ($$dirty = { to: 1, $base: 1, $location: 1, href: 1, isCurrent: 1, getProps: 1, isPartiallyCurrent: 1 }) => {
		if ($$dirty.to || $$dirty.$base) { $$invalidate('href', href = to === "/" ? $base.uri : Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["resolve"])(to, $base.uri)); }
		if ($$dirty.$location || $$dirty.href) { $$invalidate('isPartiallyCurrent', isPartiallyCurrent = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["startsWith"])($location.pathname, href)); }
		if ($$dirty.href || $$dirty.$location) { $$invalidate('isCurrent', isCurrent = href === $location.pathname); }
		if ($$dirty.isCurrent) { $$invalidate('ariaCurrent', ariaCurrent = isCurrent ? "page" : undefined); }
		if ($$dirty.getProps || $$dirty.$location || $$dirty.href || $$dirty.isPartiallyCurrent || $$dirty.isCurrent) { $$invalidate('props', props = getProps({
        location: $location,
        href,
        isPartiallyCurrent,
        isCurrent
      })); }
	};

	return {
		to,
		replace,
		state,
		getProps,
		base,
		location,
		href,
		props,
		onClick,
		ariaCurrent,
		$$slots,
		$$scope
	};
}

class Link extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["to", "replace", "state", "getProps"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Link);


/***/ }),

/***/ "./node_modules/svelte-routing/src/Route.svelte":
/*!******************************************************!*\
  !*** ./node_modules/svelte-routing/src/Route.svelte ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts.js */ "./node_modules/svelte-routing/src/contexts.js");
/* node_modules\svelte-routing\src\Route.svelte generated by Svelte v3.10.0 */




const get_default_slot_changes = ({ routeParams, $location }) => ({ params: routeParams, location: $location });
const get_default_slot_context = ({ routeParams, $location }) => ({
	params: routeParams,
	location: $location
});

// (40:0) {#if $activeRoute !== null && $activeRoute.route === route}
function create_if_block(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block_1,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(changed, ctx) {
		if (ctx.component !== null) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(null, ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(changed, ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

// (43:2) {:else}
function create_else_block(ctx) {
	var current;

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, get_default_slot_context);

	return {
		c() {
			if (default_slot) default_slot.c();
		},

		l(nodes) {
			if (default_slot) default_slot.l(nodes);
		},

		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && (changed.$$scope || changed.routeParams || changed.$location)) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, get_default_slot_changes),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, get_default_slot_context)
				);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (41:2) {#if component !== null}
function create_if_block_1(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		{ location: ctx.$location },
		ctx.routeParams,
		ctx.routeProps
	];

	var switch_value = ctx.component;

	function switch_props(ctx) {
		let switch_instance_props = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(switch_instance_props, switch_instance_spread_levels[i]);
		}
		return { props: switch_instance_props };
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m(target, anchor) {
			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, switch_instance_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			var switch_instance_changes = (changed.$location || changed.routeParams || changed.routeProps) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(switch_instance_spread_levels, [
									(changed.$location) && { location: ctx.$location },
			(changed.routeParams) && ctx.routeParams,
			(changed.routeProps) && ctx.routeProps
								]) : {};

			if (switch_value !== (switch_value = ctx.component)) {
				if (switch_instance) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
					const old_component = switch_instance;
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(old_component.$$.fragment, 1, 0, () => {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(old_component, 1);
					});
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, 1);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},

		i(local) {
			if (current) return;
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, local);

			current = true;
		},

		o(local) {
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(switch_instance.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(switch_instance_anchor);
			}

			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(switch_instance, detaching);
		}
	};
}

function create_fragment(ctx) {
	var if_block_anchor, current;

	var if_block = (ctx.$activeRoute !== null && ctx.$activeRoute.route === ctx.route) && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			if (ctx.$activeRoute !== null && ctx.$activeRoute.route === ctx.route) {
				if (if_block) {
					if_block.p(changed, ctx);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d(detaching) {
			if (if_block) if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $activeRoute, $location;

	

  let { path = "", component = null } = $$props;

  const { registerRoute, unregisterRoute, activeRoute } = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["getContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_2__["ROUTER"]); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, activeRoute, $$value => { $activeRoute = $$value; $$invalidate('$activeRoute', $activeRoute) });
  const location = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["getContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_2__["LOCATION"]); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, location, $$value => { $location = $$value; $$invalidate('$location', $location) });

  const route = {
    path,
    // If no path prop is given, this Route will act as the default Route
    // that is rendered if no other Route in the Router is a match.
    default: path === ""
  };
  let routeParams = {};
  let routeProps = {};

  registerRoute(route);

  // There is no need to unregister Routes in SSR since it will all be
  // thrown away anyway.
  if (typeof window !== "undefined") {
    Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"])(() => {
      unregisterRoute(route);
    });
  }

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, $$props), $$new_props))
		if ('path' in $$new_props) $$invalidate('path', path = $$new_props.path);
		if ('component' in $$new_props) $$invalidate('component', component = $$new_props.component);
		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $activeRoute: 1, $$props: 1 }) => {
		if ($$dirty.$activeRoute) { if ($activeRoute && $activeRoute.route === route) {
        $$invalidate('routeParams', routeParams = $activeRoute.params);
      } }
		{
        const { path, component, ...rest } = $$props;
        $$invalidate('routeProps', routeProps = rest);
      }
	};

	return {
		path,
		component,
		activeRoute,
		location,
		route,
		routeParams,
		routeProps,
		$activeRoute,
		$location,
		$$props: $$props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["exclude_internal_props"])($$props),
		$$slots,
		$$scope
	};
}

class Route extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["path", "component"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Route);


/***/ }),

/***/ "./node_modules/svelte-routing/src/Router.svelte":
/*!*******************************************************!*\
  !*** ./node_modules/svelte-routing/src/Router.svelte ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts.js */ "./node_modules/svelte-routing/src/contexts.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.js */ "./node_modules/svelte-routing/src/history.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte-routing/src/utils.js");
/* node_modules\svelte-routing\src\Router.svelte generated by Svelte v3.10.0 */







function create_fragment(ctx) {
	var current;

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},

		l(nodes) {
			if (default_slot) default_slot.l(nodes);
		},

		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $base, $location, $routes;

	

  let { basepath = "/", url = null } = $$props;

  const locationContext = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["getContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_3__["LOCATION"]);
  const routerContext = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["getContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_3__["ROUTER"]);

  const routes = Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])([]); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, routes, $$value => { $routes = $$value; $$invalidate('$routes', $routes) });
  const activeRoute = Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])(null);
  let hasActiveRoute = false; // Used in SSR to synchronously set that a Route is active.

  // If locationContext is not set, this is the topmost Router in the tree.
  // If the `url` prop is given we force the location to it.
  const location =
    locationContext ||
    Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])(url ? { pathname: url } : _history_js__WEBPACK_IMPORTED_MODULE_4__["globalHistory"].location); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, location, $$value => { $location = $$value; $$invalidate('$location', $location) });

  // If routerContext is set, the routerBase of the parent Router
  // will be the base for this Router's descendants.
  // If routerContext is not set, the path and resolved uri will both
  // have the value of the basepath prop.
  const base = routerContext
    ? routerContext.routerBase
    : Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])({
        path: basepath,
        uri: basepath
      }); Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, base, $$value => { $base = $$value; $$invalidate('$base', $base) });

  const routerBase = Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["derived"])([base, activeRoute], ([base, activeRoute]) => {
    // If there is no activeRoute, the routerBase will be identical to the base.
    if (activeRoute === null) {
      return base;
    }

    const { path: basepath } = base;
    const { route, uri } = activeRoute;
    // Remove the potential /* or /*splatname from
    // the end of the child Routes relative paths.
    const path = route.default ? basepath : route.path.replace(/\*.*$/, "");

    return { path, uri };
  });

  function registerRoute(route) {
    const { path: basepath } = $base;
    let { path } = route;

    // We store the original path in the _path property so we can reuse
    // it when the basepath changes. The only thing that matters is that
    // the route reference is intact, so mutation is fine.
    route._path = path;
    route.path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["combinePaths"])(basepath, path);

    if (typeof window === "undefined") {
      // In SSR we should set the activeRoute immediately if it is a match.
      // If there are more Routes being registered after a match is found,
      // we just skip them.
      if (hasActiveRoute) {
        return;
      }

      const matchingRoute = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["match"])(route, $location.pathname);
      if (matchingRoute) {
        activeRoute.set(matchingRoute);
        hasActiveRoute = true;
      }
    } else {
      routes.update(rs => {
        rs.push(route);
        return rs;
      });
    }
  }

  function unregisterRoute(route) {
    routes.update(rs => {
      const index = rs.indexOf(route);
      rs.splice(index, 1);
      return rs;
    });
  }

  if (!locationContext) {
    // The topmost Router in the tree is responsible for updating
    // the location store and supplying it through context.
    Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
      const unlisten = _history_js__WEBPACK_IMPORTED_MODULE_4__["globalHistory"].listen(history => {
        location.set(history.location);
      });

      return unlisten;
    });

    Object(svelte__WEBPACK_IMPORTED_MODULE_1__["setContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_3__["LOCATION"], location);
  }

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["setContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_3__["ROUTER"], {
    activeRoute,
    base,
    routerBase,
    registerRoute,
    unregisterRoute
  });

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('basepath' in $$props) $$invalidate('basepath', basepath = $$props.basepath);
		if ('url' in $$props) $$invalidate('url', url = $$props.url);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $base: 1, $routes: 1, $location: 1 }) => {
		if ($$dirty.$base) { {
        const { path: basepath } = $base;
        routes.update(rs => {
          rs.forEach(r => (r.path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["combinePaths"])(basepath, r._path)));
          return rs;
        });
      } }
		if ($$dirty.$routes || $$dirty.$location) { {
        const bestMatch = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["pick"])($routes, $location.pathname);
        activeRoute.set(bestMatch);
      } }
	};

	return {
		basepath,
		url,
		routes,
		location,
		base,
		$$slots,
		$$scope
	};
}

class Router extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["basepath", "url"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Router);


/***/ }),

/***/ "./node_modules/svelte-routing/src/actions.js":
/*!****************************************************!*\
  !*** ./node_modules/svelte-routing/src/actions.js ***!
  \****************************************************/
/*! exports provided: link, links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.js */ "./node_modules/svelte-routing/src/history.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte-routing/src/utils.js");



/**
 * A link action that can be added to <a href=""> tags rather
 * than using the <Link> component.
 *
 * Example:
 * ```html
 * <a href="/post/{postId}" use:link>{post.title}</a>
 * ```
 */
function link(node) {
  function onClick(event) {
    const anchor = event.currentTarget;

    if (
      anchor.target === "" &&
      anchor.host === location.host &&
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["shouldNavigate"])(event)
    ) {
      event.preventDefault();
      Object(_history_js__WEBPACK_IMPORTED_MODULE_0__["navigate"])(anchor.pathname, { replace: anchor.hasAttribute("replace") });
    }
  }

  node.addEventListener("click", onClick);

  return {
    destroy() {
      node.removeEventListener("click", onClick);
    }
  };
}

/**
 * An action to be added at a root element of your application to
 * capture all relative links and push them onto the history stack.
 *
 * Example:
 * ```html
 * <div use:links>
 *   <Router>
 *     <Route path="/" component={Home} />
 *     <Route path="/p/:projectId/:docId?" component={ProjectScreen} />
 *     {#each projects as project}
 *       <a href="/p/{project.id}">{project.title}</a>
 *     {/each}
 *   </Router>
 * </div>
 * ```
 */
function links(node) {
  function findClosest(tagName, el) {
    while (el && el.tagName !== tagName) {
      el = el.parentNode;
    }
    return el;
  }

  function onClick(event) {
    const anchor = findClosest("A", event.target);

    if (
      anchor &&
      anchor.target === "" &&
      anchor.host === location.host &&
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["shouldNavigate"])(event) &&
      !anchor.hasAttribute("noroute")
    ) {
      event.preventDefault();
      Object(_history_js__WEBPACK_IMPORTED_MODULE_0__["navigate"])(anchor.pathname, { replace: anchor.hasAttribute("replace") });
    }
  }

  node.addEventListener("click", onClick);

  return {
    destroy() {
      node.removeEventListener("click", onClick);
    }
  };
}




/***/ }),

/***/ "./node_modules/svelte-routing/src/contexts.js":
/*!*****************************************************!*\
  !*** ./node_modules/svelte-routing/src/contexts.js ***!
  \*****************************************************/
/*! exports provided: LOCATION, ROUTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION", function() { return LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER", function() { return ROUTER; });
const LOCATION = {};
const ROUTER = {};


/***/ }),

/***/ "./node_modules/svelte-routing/src/history.js":
/*!****************************************************!*\
  !*** ./node_modules/svelte-routing/src/history.js ***!
  \****************************************************/
/*! exports provided: globalHistory, navigate, createHistory, createMemorySource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalHistory", function() { return globalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return createMemorySource; });
/**
 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/history.js
 *
 * https://github.com/reach/router/blob/master/LICENSE
 * */

function getLocation(source) {
  return {
    ...source.location,
    state: source.history.state,
    key: (source.history.state && source.history.state.key) || "initial"
  };
}

function createHistory(source, options) {
  const listeners = [];
  let location = getLocation(source);

  return {
    get location() {
      return location;
    },

    listen(listener) {
      listeners.push(listener);

      const popstateListener = () => {
        location = getLocation(source);
        listener({ location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return () => {
        source.removeEventListener("popstate", popstateListener);

        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },

    navigate(to, { state, replace = false } = {}) {
      state = { ...state, key: Date.now() + "" };
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      listeners.forEach(listener => listener({ location, action: "PUSH" }));
    }
  };
}

// Stores history entries in memory for testing or other platforms like Native
function createMemorySource(initialPathname = "/") {
  let index = 0;
  const stack = [{ pathname: initialPathname, search: "" }];
  const states = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener(name, fn) {},
    removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({ pathname, search });
        states.push(state);
      },
      replaceState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = { pathname, search };
        states[index] = state;
      }
    }
  };
}

// Global history uses window.history as the source if available,
// otherwise a memory history
const canUseDOM = Boolean(
  typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);
const globalHistory = createHistory(canUseDOM ? window : createMemorySource());
const { navigate } = globalHistory;




/***/ }),

/***/ "./node_modules/svelte-routing/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/svelte-routing/src/index.js ***!
  \**************************************************/
/*! exports provided: Router, Route, Link, navigate, link, links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Router_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.svelte */ "./node_modules/svelte-routing/src/Router.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Route_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route.svelte */ "./node_modules/svelte-routing/src/Route.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Link_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link.svelte */ "./node_modules/svelte-routing/src/Link.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.js */ "./node_modules/svelte-routing/src/history.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return _history_js__WEBPACK_IMPORTED_MODULE_3__["navigate"]; });

/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.js */ "./node_modules/svelte-routing/src/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "link", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_4__["link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "links", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_4__["links"]; });








/***/ }),

/***/ "./node_modules/svelte-routing/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/svelte-routing/src/utils.js ***!
  \**************************************************/
/*! exports provided: startsWith, stripSlashes, pick, match, resolve, combinePaths, shouldNavigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSlashes", function() { return stripSlashes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinePaths", function() { return combinePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldNavigate", function() { return shouldNavigate; });
/**
 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/utils.js
 *
 * https://github.com/reach/router/blob/master/LICENSE
 * */

const paramRe = /^:(.+)/;

const SEGMENT_POINTS = 4;
const STATIC_POINTS = 3;
const DYNAMIC_POINTS = 2;
const SPLAT_PENALTY = 1;
const ROOT_POINTS = 1;

/**
 * Check if `string` starts with `search`
 * @param {string} string
 * @param {string} search
 * @return {boolean}
 */
function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}

/**
 * Check if `segment` is a root segment
 * @param {string} segment
 * @return {boolean}
 */
function isRootSegment(segment) {
  return segment === "";
}

/**
 * Check if `segment` is a dynamic segment
 * @param {string} segment
 * @return {boolean}
 */
function isDynamic(segment) {
  return paramRe.test(segment);
}

/**
 * Check if `segment` is a splat
 * @param {string} segment
 * @return {boolean}
 */
function isSplat(segment) {
  return segment[0] === "*";
}

/**
 * Split up the URI into segments delimited by `/`
 * @param {string} uri
 * @return {string[]}
 */
function segmentize(uri) {
  return (
    uri
      // Strip starting/ending `/`
      .replace(/(^\/+|\/+$)/g, "")
      .split("/")
  );
}

/**
 * Strip `str` of potential start and end `/`
 * @param {string} str
 * @return {string}
 */
function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
}

/**
 * Score a route depending on how its individual segments look
 * @param {object} route
 * @param {number} index
 * @return {object}
 */
function rankRoute(route, index) {
  const score = route.default
    ? 0
    : segmentize(route.path).reduce((score, segment) => {
        score += SEGMENT_POINTS;

        if (isRootSegment(segment)) {
          score += ROOT_POINTS;
        } else if (isDynamic(segment)) {
          score += DYNAMIC_POINTS;
        } else if (isSplat(segment)) {
          score -= SEGMENT_POINTS + SPLAT_PENALTY;
        } else {
          score += STATIC_POINTS;
        }

        return score;
      }, 0);

  return { route, score, index };
}

/**
 * Give a score to all routes and sort them on that
 * @param {object[]} routes
 * @return {object[]}
 */
function rankRoutes(routes) {
  return (
    routes
      .map(rankRoute)
      // If two routes have the exact same score, we go by index instead
      .sort((a, b) =>
        a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index
      )
  );
}

/**
 * Ranks and picks the best route to match. Each segment gets the highest
 * amount of points, then the type of segment gets an additional amount of
 * points where
 *
 *  static > dynamic > splat > root
 *
 * This way we don't have to worry about the order of our routes, let the
 * computers do it.
 *
 * A route looks like this
 *
 *  { path, default, value }
 *
 * And a returned match looks like:
 *
 *  { route, params, uri }
 *
 * @param {object[]} routes
 * @param {string} uri
 * @return {?object}
 */
function pick(routes, uri) {
  let match;
  let default_;

  const [uriPathname] = uri.split("?");
  const uriSegments = segmentize(uriPathname);
  const isRootUri = uriSegments[0] === "";
  const ranked = rankRoutes(routes);

  for (let i = 0, l = ranked.length; i < l; i++) {
    const route = ranked[i].route;
    let missed = false;

    if (route.default) {
      default_ = {
        route,
        params: {},
        uri
      };
      continue;
    }

    const routeSegments = segmentize(route.path);
    const params = {};
    const max = Math.max(uriSegments.length, routeSegments.length);
    let index = 0;

    for (; index < max; index++) {
      const routeSegment = routeSegments[index];
      const uriSegment = uriSegments[index];

      if (routeSegment !== undefined && isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/* or /files/*splatname
        const splatName = routeSegment === "*" ? "*" : routeSegment.slice(1);

        params[splatName] = uriSegments
          .slice(index)
          .map(decodeURIComponent)
          .join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      let dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        const value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route,
        params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}

/**
 * Check if the `path` matches the `uri`.
 * @param {string} path
 * @param {string} uri
 * @return {?object}
 */
function match(route, uri) {
  return pick([route], uri);
}

/**
 * Add the query to the pathname if a query is given
 * @param {string} pathname
 * @param {string} [query]
 * @return {string}
 */
function addQuery(pathname, query) {
  return pathname + (query ? `?${query}` : "");
}

/**
 * Resolve URIs as though every path is a directory, no files. Relative URIs
 * in the browser can feel awkward because not only can you be "in a directory",
 * you can be "at a file", too. For example:
 *
 *  browserSpecResolve('foo', '/bar/') => /bar/foo
 *  browserSpecResolve('foo', '/bar') => /foo
 *
 * But on the command line of a file system, it's not as complicated. You can't
 * `cd` from a file, only directories. This way, links have to know less about
 * their current path. To go deeper you can do this:
 *
 *  <Link to="deeper"/>
 *  // instead of
 *  <Link to=`{${props.uri}/deeper}`/>
 *
 * Just like `cd`, if you want to go deeper from the command line, you do this:
 *
 *  cd deeper
 *  # not
 *  cd $(pwd)/deeper
 *
 * By treating every path as a directory, linking to relative paths should
 * require less contextual information and (fingers crossed) be more intuitive.
 * @param {string} to
 * @param {string} base
 * @return {string}
 */
function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  const [toPathname, toQuery] = to.split("?");
  const [basePathname] = base.split("?");
  const toSegments = segmentize(toPathname);
  const baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    const pathname = baseSegments.concat(toSegments).join("/");

    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./       , /users/123 => /users/123
  // ../      , /users/123 => /users
  // ../..    , /users/123 => /
  // ../../one, /a/b/c/d   => /a/b/one
  // .././one , /a/b/c/d   => /a/b/c/one
  const allSegments = baseSegments.concat(toSegments);
  const segments = [];

  allSegments.forEach(segment => {
    if (segment === "..") {
      segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });

  return addQuery("/" + segments.join("/"), toQuery);
}

/**
 * Combines the `basepath` and the `path` into one path.
 * @param {string} basepath
 * @param {string} path
 */
function combinePaths(basepath, path) {
  return `${stripSlashes(
    path === "/" ? basepath : `${stripSlashes(basepath)}/${stripSlashes(path)}`
  )}/`;
}

/**
 * Decides whether a given `event` should result in a navigation or not.
 * @param {object} event
 */
function shouldNavigate(event) {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
  );
}




/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: afterUpdate, beforeUpdate, createEventDispatcher, getContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, SvelteComponent, SvelteComponentDev, SvelteElement, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, assign, attr, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_element, claim_space, claim_text, clear_loops, component_subscribe, createEventDispatcher, create_animation, create_bidirectional_transition, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, debug, destroy_block, destroy_component, destroy_each, detach, dirty_components, each, element, element_is, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_current_component, get_slot_changes, get_slot_context, get_spread_update, get_store_value, globals, group_outros, handle_promise, identity, init, insert, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, loop, measure, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_input_type, set_input_value, set_now, set_raf, set_style, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_store, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function validate_store(store, name) {
    if (!store || typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, callback) {
    const unsub = store.subscribe(callback);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
        : ctx.$$scope.ctx;
}
function get_slot_changes(definition, ctx, changed, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
        : ctx.$$scope.changed || {};
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
let running = false;
function run_tasks() {
    tasks.forEach(task => {
        if (!task[0](now())) {
            tasks.delete(task);
            task[1]();
        }
    });
    running = tasks.size > 0;
    if (running)
        raf(run_tasks);
}
function clear_loops() {
    // for testing...
    tasks.forEach(task => tasks.delete(task));
    running = false;
}
function loop(fn) {
    let task;
    if (!running) {
        running = true;
        raf(run_tasks);
    }
    return {
        promise: new Promise(fulfil => {
            tasks.add(task = [fn, fulfil]);
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const target = {};
    for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    for (const key in attributes) {
        if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key in node) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group) {
    const value = [];
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.push(group[i].__value);
    }
    return value;
}
function to_number(value) {
    return value === '' ? undefined : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            for (let j = 0; j < node.attributes.length; j += 1) {
                const attribute = node.attributes[j];
                if (!attributes[attribute.name])
                    node.removeAttribute(attribute.name);
            }
            return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_value(input, value) {
    if (value != null || input.value) {
        input.value = value;
    }
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
function add_resize_listener(element, fn) {
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    const object = document.createElement('object');
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    object.type = 'text/html';
    object.tabIndex = -1;
    let win;
    object.onload = () => {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
    };
    if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
    }
    else {
        object.data = 'about:blank';
        element.appendChild(object);
    }
    return {
        cancel: () => {
            win && win.removeEventListener && win.removeEventListener('resize', fn);
            element.removeChild(object);
        }
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}
class HtmlTag {
    constructor(html, anchor = null) {
        this.e = element('div');
        this.a = anchor;
        this.u(html);
    }
    m(target, anchor = null) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(target, this.n[i], anchor);
        }
        this.t = target;
    }
    u(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    p(html) {
        this.d();
        this.u(html);
        this.m(this.t, this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

let stylesheet;
let active = 0;
let current_rules = {};
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    if (!current_rules[name]) {
        if (!stylesheet) {
            const style = element('style');
            document.head.appendChild(style);
            stylesheet = style.sheet;
        }
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '')
        .split(', ')
        .filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    )
        .join(', ');
    if (name && !--active)
        clear_rules();
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        let i = stylesheet.cssRules.length;
        while (i--)
            stylesheet.deleteRule(i);
        current_rules = {};
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = current_component;
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
function flush() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
}
function update($$) {
    if ($$.fragment) {
        $$.update($$.dirty);
        run_all($$.before_update);
        $$.fragment.p($$.dirty, $$.ctx);
        $$.dirty = null;
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = key && { [key]: value };
        const child_ctx = assign(assign({}, info.ctx), info.resolved);
        const block = type && (info.current = type)(child_ctx);
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            flush();
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = { [info.value]: promise };
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(changed, child_ctx);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function measure(blocks) {
    const rects = {};
    let i = blocks.length;
    while (i--)
        rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
    return rects;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args) {
    const attributes = Object.assign({}, ...args);
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === undefined)
            return;
        if (value === true)
            str += " " + name;
        const escaped = String(value)
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#39;');
        str += " " + name + "=" + JSON.stringify(escaped);
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
    if (component.$$.props.indexOf(name) === -1)
        return;
    component.$$.bound[name] = callback;
    callback(component.$$.ctx[name]);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    if (component.$$.fragment) {
        run_all(component.$$.on_destroy);
        component.$$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        component.$$.on_destroy = component.$$.fragment = null;
        component.$$.ctx = {};
    }
}
function make_dirty(component, key) {
    if (!component.$$.dirty) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty = blank_object();
    }
    component.$$.dirty[key] = true;
}
function init(component, options, instance, create_fragment, not_equal, prop_names) {
    const parent_component = current_component;
    set_current_component(component);
    const props = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: prop_names,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty: null
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, props, (key, value) => {
            if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
                if ($$.bound[key])
                    $$.bound[key](value);
                if (ready)
                    make_dirty(component, key);
            }
        })
        : props;
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment($$.ctx);
    if (options.target) {
        if (options.hydrate) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.l(children(options.target));
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement !== 'undefined') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
}




/***/ }),

/***/ "./node_modules/svelte/store/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/svelte/store/index.mjs ***!
  \*********************************************/
/*! exports provided: get, derived, readable, writable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writable", function() { return writable; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["get_store_value"]; });




const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (Object(_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"])(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 * @param {Stores} stores input stores
 * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
 * @param {*=}initial_value when used asynchronously
 */
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = Object(_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(result) ? result : _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            Object(_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(unsubscribers);
            cleanup();
        };
    });
}




/***/ }),

/***/ "./src/App.svelte":
/*!************************!*\
  !*** ./src/App.svelte ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-routing */ "./node_modules/svelte-routing/src/index.js");
/* harmony import */ var _components_Auth_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Auth.svelte */ "./src/components/Auth.svelte");
/* harmony import */ var _components_Main_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Main.svelte */ "./src/components/Main.svelte");
/* src\App.svelte generated by Svelte v3.10.0 */





// (9:0) <Router {url}>
function create_default_slot(ctx) {
	var div, t, current;

	var route0 = new svelte_routing__WEBPACK_IMPORTED_MODULE_1__["Route"]({
		props: { path: "/auth", component: _components_Auth_svelte__WEBPACK_IMPORTED_MODULE_2__["default"] }
	});

	var route1 = new svelte_routing__WEBPACK_IMPORTED_MODULE_1__["Route"]({
		props: { path: "/", component: _components_Main_svelte__WEBPACK_IMPORTED_MODULE_3__["default"] }
	});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			route0.$$.fragment.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			route1.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(route0, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(route1, div, null);
			current = true;
		},

		p(changed, ctx) {
			var route0_changes = {};
			if (changed.Auth) route0_changes.component = _components_Auth_svelte__WEBPACK_IMPORTED_MODULE_2__["default"];
			route0.$set(route0_changes);

			var route1_changes = {};
			if (changed.Main) route1_changes.component = _components_Main_svelte__WEBPACK_IMPORTED_MODULE_3__["default"];
			route1.$set(route1_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(route0.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(route1.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(route0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(route1.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(route0);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(route1);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var router = new svelte_routing__WEBPACK_IMPORTED_MODULE_1__["Router"]({
		props: {
		url: ctx.url,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});

	return {
		c() {
			router.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(router, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var router_changes = {};
			if (changed.url) router_changes.url = ctx.url;
			if (changed.$$scope) router_changes.$$scope = { changed, ctx };
			router.$set(router_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(router.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(router.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(router, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

  let { url = '' } = $$props;

	$$self.$set = $$props => {
		if ('url' in $$props) $$invalidate('url', url = $$props.url);
	};

	return { url };
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["url"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_cards_dishes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/cards/dishes.jpg */ "./src/img/cards/dishes.jpg");
/* harmony import */ var _img_cards_dishes_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_cards_dishes_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_cards_food_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cards/food.jpg */ "./src/img/cards/food.jpg");
/* harmony import */ var _img_cards_food_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_cards_food_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_cards_jacket_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cards/jacket.jpg */ "./src/img/cards/jacket.jpg");
/* harmony import */ var _img_cards_jacket_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_cards_jacket_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_cards_laptop_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cards/laptop.jpg */ "./src/img/cards/laptop.jpg");
/* harmony import */ var _img_cards_laptop_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_cards_laptop_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_cards_shoes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cards/shoes.jpg */ "./src/img/cards/shoes.jpg");
/* harmony import */ var _img_cards_shoes_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_cards_shoes_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_cards_skate_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/cards/skate.jpg */ "./src/img/cards/skate.jpg");
/* harmony import */ var _img_cards_skate_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_cards_skate_jpg__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["default"] = ({
  cards: [
    {
      title: 'Skateboard',
      description: "This my skateboard! It's so cool",
      price: 100,
      img: _img_cards_skate_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      id: 0,
    },
    {
      title: 'Dishes',
      description: 'Dishes for my mom',
      price: 1200,
      img: _img_cards_dishes_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
      id: 1,
    },
    {
      title: 'Food',
      description: 'Itadaki mas',
      price: 100,
      img: _img_cards_food_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      id: 2,
    },
    {
      title: 'Shoes',
      description: 'Govnadavs from Giorgio Armani',
      price: 600,
      img: _img_cards_shoes_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      id: 3,
    },
    {
      title: 'Laptop',
      description: 'Dab dab dab top',
      price: 100,
      img: _img_cards_laptop_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      id: 4,
    },
    {
      title: 'Jacket',
      description: 'Jackie chen wore it',
      price: 100,
      img: _img_cards_jacket_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      id: 5,
    },
  ],
});


/***/ }),

/***/ "./src/components/About.svelte":
/*!*************************************!*\
  !*** ./src/components/About.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _img_footer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/footer.jpg */ "./src/img/footer.jpg");
/* harmony import */ var _img_footer_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_footer_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_About_svelte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/About.svelte.css */ "./src/components/About.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_About_svelte_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_About_svelte_css__WEBPACK_IMPORTED_MODULE_2__);
/* src\components\About.svelte generated by Svelte v3.10.0 */



function create_fragment(ctx) {
	var div_1;

	return {
		c() {
			div_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div_1.innerHTML = `<div class="text_block svelte-1jm3kgc"><h2 class="svelte-1jm3kgc">Something about us</h2> <p class="sarabun svelte-1jm3kgc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris, orci donec platea sed urna orci sed. Integer massa erat venenatis eget habitant sit. Aenean morbi semper venenatis maecenas.</p> <p class="sarabun svelte-1jm3kgc">Pretium tincidunt non dictumst lacus condimentum. Tellus ut vestibulum sem egestas dolor. Odio non id libero odio cursus. Tortor ante sapien pellentesque.</p></div>`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div_1, "class", "root svelte-1jm3kgc");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div_1, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div_1);
			}
		}
	};
}

class About extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (About);




/***/ }),

/***/ "./src/components/About.svelte.css":
/*!*****************************************!*\
  !*** ./src/components/About.svelte.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./About.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/About.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/AddCart.svelte":
/*!***************************************!*\
  !*** ./src/components/AddCart.svelte ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Blur_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blur.svelte */ "./src/components/Blur.svelte");
/* harmony import */ var _Form_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.svelte */ "./src/components/Form.svelte");
/* harmony import */ var _SignButton_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignButton.svelte */ "./src/components/SignButton.svelte");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_AddCart_svelte_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/AddCart.svelte.css */ "./src/components/AddCart.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_AddCart_svelte_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_AddCart_svelte_css__WEBPACK_IMPORTED_MODULE_5__);
/* src\components\AddCart.svelte generated by Svelte v3.10.0 */






// (53:4) <Form>
function create_default_slot(ctx) {
	var h3, t3, input0, t4, input1, t5, textarea, t6, input2, t7, div, t8, current;

	var signbutton = new _SignButton_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({ props: { text: "Add" } });
	signbutton.$on("click", ctx.addNewItem);

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	return {
		c() {
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			h3.innerHTML = `Create <span class="svelte-1yoo4hj">your own</span> product`;
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			textarea = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("textarea");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			signbutton.$$.fragment.c();
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			if (default_slot) default_slot.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h3, "class", "svelte-1yoo4hj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "placeholder", "Product name");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "id", "title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "class", "svelte-1yoo4hj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "placeholder", "Product price");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "id", "price");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "class", "svelte-1yoo4hj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textarea, "placeholder", "Product description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textarea, "id", "description");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textarea, "class", "svelte-1yoo4hj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "placeholder", "Picture link");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "id", "img");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "class", "svelte-1yoo4hj");

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "buttons svelte-1yoo4hj");
		},

		l(nodes) {
			if (default_slot) default_slot.l(div_nodes);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, input0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, input1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, textarea, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t6, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, input2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t7, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(signbutton, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t8);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(signbutton.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(signbutton.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h3);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t5);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(textarea);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t6);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t7);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(signbutton);

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	var div, t, current;

	var blur = new _Blur_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({});

	var form = new _Form_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			blur.$$.fragment.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			form.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(blur, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(form, div, null);
			current = true;
		},

		p(changed, ctx) {
			var form_changes = {};
			if (changed.$$scope) form_changes.$$scope = { changed, ctx };
			form.$set(form_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(blur.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(form.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(blur.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(form.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(blur);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(form);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

    const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

    const addNewItem = () => {
      const title = document.getElementById('title').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;
      const img = document.getElementById('img').value;
      dispatch('ADD_ITEM', {
        title, price, description, img
      })
    };

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { addNewItem, $$slots, $$scope };
}

class AddCart extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (AddCart);




/***/ }),

/***/ "./src/components/AddCart.svelte.css":
/*!*******************************************!*\
  !*** ./src/components/AddCart.svelte.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./AddCart.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/AddCart.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Auth.svelte":
/*!************************************!*\
  !*** ./src/components/Auth.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-routing */ "./node_modules/svelte-routing/src/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _Form_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form.svelte */ "./src/components/Form.svelte");
/* harmony import */ var _SignButton_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignButton.svelte */ "./src/components/SignButton.svelte");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Auth_svelte_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/components/Auth.svelte.css */ "./src/components/Auth.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Auth_svelte_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Auth_svelte_css__WEBPACK_IMPORTED_MODULE_6__);
/* src\components\Auth.svelte generated by Svelte v3.10.0 */







// (25:2) <Form>
function create_default_slot(ctx) {
	var h1, t1, t2, current;

	var signbutton0 = new _SignButton_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: { text: "Login as shopper" } });
	signbutton0.$on("click", ctx.click_handler);

	var signbutton1 = new _SignButton_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
		props: {
		text: "Login as admin",
		isPrimary: false
	}
	});
	signbutton1.$on("click", ctx.click_handler_1);

	return {
		c() {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = "Login";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			signbutton0.$$.fragment.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			signbutton1.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(signbutton0, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(signbutton1, target, anchor);
			current = true;
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(signbutton0.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(signbutton1.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(signbutton0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(signbutton1.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(signbutton0, detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(signbutton1, detaching);
		}
	};
}

function create_fragment(ctx) {
	var div, current;

	var form = new _Form_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			form.$$.fragment.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "wrapper svelte-1g2878l");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(form, div, null);
			current = true;
		},

		p(changed, ctx) {
			var form_changes = {};
			if (changed.$$scope) form_changes.$$scope = { changed, ctx };
			form.$set(form_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(form.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(form.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(form);
		}
	};
}

function instance($$self) {
	

  const onClick = userType => {
    Object(_store__WEBPACK_IMPORTED_MODULE_2__["setUserType"])(userType);
    Object(svelte_routing__WEBPACK_IMPORTED_MODULE_1__["navigate"])('/');
  };

	function click_handler() {
		return onClick(_consts__WEBPACK_IMPORTED_MODULE_3__["USER_TYPE"].user);
	}

	function click_handler_1() {
		return onClick(_consts__WEBPACK_IMPORTED_MODULE_3__["USER_TYPE"].admin);
	}

	return { onClick, click_handler, click_handler_1 };
}

class Auth extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Auth);




/***/ }),

/***/ "./src/components/Auth.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Auth.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Auth.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Auth.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Blur.svelte":
/*!************************************!*\
  !*** ./src/components/Blur.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Blur_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Blur.svelte.css */ "./src/components/Blur.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Blur_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Blur_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\components\Blur.svelte generated by Svelte v3.10.0 */


function create_fragment(ctx) {
	var div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "svelte-xs6r15");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

class Blur extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Blur);




/***/ }),

/***/ "./src/components/Blur.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Blur.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Blur.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Blur.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Card.svelte":
/*!************************************!*\
  !*** ./src/components/Card.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Checkmark_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkmark.svelte */ "./src/components/Checkmark.svelte");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Card_svelte_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/Card.svelte.css */ "./src/components/Card.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Card_svelte_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Card_svelte_css__WEBPACK_IMPORTED_MODULE_4__);
/* src\components\Card.svelte generated by Svelte v3.10.0 */





// (106:6) {:else}
function create_else_block(ctx) {
	var button0, t_1, button1, dispose;

	return {
		c() {
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button0.textContent = "edit item";
			t_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button1.textContent = "remove item";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "class", "svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "class", "svelte-a020p1");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button1, "click", ctx.click_handler_1);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t_1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button1, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t_1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button1);
			}

			dispose();
		}
	};
}

// (101:6) {#if $userType === USER_TYPE.user}
function create_if_block(ctx) {
	var button, t, current, dispose;

	var checkmark = new _Checkmark_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: {
		stack: ctx.successStack,
		popStack: ctx.popStack
	}
	});

	return {
		c() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("add to cart\r\n          ");
			checkmark.$$.fragment.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "svelte-a020p1");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", ctx.click_handler);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(checkmark, button, null);
			current = true;
		},

		p(changed, ctx) {
			var checkmark_changes = {};
			if (changed.successStack) checkmark_changes.stack = ctx.successStack;
			if (changed.popStack) checkmark_changes.popStack = ctx.popStack;
			checkmark.$set(checkmark_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(checkmark.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(checkmark.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(checkmark);

			dispose();
		}
	};
}

function create_fragment(ctx) {
	var div4, img_1, t0, div3, div1, div0, span0, t1, t2, span1, t3, t4, span2, t5, t6, t7, div2, current_block_type_index, if_block, div2_class_value, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(changed, ctx) {
		if (ctx.$userType === _consts__WEBPACK_IMPORTED_MODULE_3__["USER_TYPE"].user) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(null, ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.title);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.description);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("$");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.price);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "src", ctx.img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "alt", "test");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "class", "svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "name svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "desc svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "info svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span2, "class", "price svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "text svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", div2_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.$userType === _consts__WEBPACK_IMPORTED_MODULE_3__["USER_TYPE"].user ? 'button' : 'buttons')) + " svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "wrap svelte-a020p1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "wrapper svelte-a020p1");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, img_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, span2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span2, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			if_blocks[current_block_type_index].m(div2, null);
			current = true;
		},

		p(changed, ctx) {
			if (!current || changed.img) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "src", ctx.img);
			}

			if (!current || changed.title) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, ctx.title);
			}

			if (!current || changed.description) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, ctx.description);
			}

			if (!current || changed.price) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t6, ctx.price);
			}

			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(changed, ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(div2, null);
			}

			if ((!current || changed.$userType) && div2_class_value !== (div2_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])((ctx.$userType === _consts__WEBPACK_IMPORTED_MODULE_3__["USER_TYPE"].user ? 'button' : 'buttons')) + " svelte-a020p1")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", div2_class_value);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div4);
			}

			if_blocks[current_block_type_index].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $userType;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_2__["userType"], $$value => { $userType = $$value; $$invalidate('$userType', $userType); });

	

  let { title, description, price, img, id } = $$props;
  let successStack = [];


  function add(item) {
    Object(_store__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(item);
    $$invalidate('successStack', successStack = [...successStack, 'success']);
  }

  const popStack = () => {
    if (successStack.length > 0) {
      $$invalidate('successStack', successStack = successStack.slice(1, successStack.length));
    }
  };

	function click_handler() {
		return add({ id: new Date().getTime(), title, description, price, img });
	}

	function click_handler_1() {
		return Object(_store__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(id);
	}

	$$self.$set = $$props => {
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('description' in $$props) $$invalidate('description', description = $$props.description);
		if ('price' in $$props) $$invalidate('price', price = $$props.price);
		if ('img' in $$props) $$invalidate('img', img = $$props.img);
		if ('id' in $$props) $$invalidate('id', id = $$props.id);
	};

	return {
		title,
		description,
		price,
		img,
		id,
		successStack,
		add,
		popStack,
		$userType,
		click_handler,
		click_handler_1
	};
}

class Card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["title", "description", "price", "img", "id"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Card);




/***/ }),

/***/ "./src/components/Card.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Card.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Card.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Card.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/CardList.svelte":
/*!****************************************!*\
  !*** ./src/components/CardList.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Card_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.svelte */ "./src/components/Card.svelte");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards */ "./src/cards.js");
/* harmony import */ var _SignButton_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignButton.svelte */ "./src/components/SignButton.svelte");
/* harmony import */ var _AddCart_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddCart.svelte */ "./src/components/AddCart.svelte");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_CardList_svelte_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/components/CardList.svelte.css */ "./src/components/CardList.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_CardList_svelte_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_CardList_svelte_css__WEBPACK_IMPORTED_MODULE_7__);
/* src\components\CardList.svelte generated by Svelte v3.10.0 */








function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.title = list[i].title;
	child_ctx.description = list[i].description;
	child_ctx.price = list[i].price;
	child_ctx.img = list[i].img;
	child_ctx.id = list[i].id;
	return child_ctx;
}

// (46:4) {#each $items as { title, description, price, img, id }}
function create_each_block(ctx) {
	var current;

	var card = new _Card_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: {
		title: ctx.title,
		description: ctx.description,
		price: ctx.price,
		img: ctx.img,
		id: ctx.id
	}
	});

	return {
		c() {
			card.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(card, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var card_changes = {};
			if (changed.$items) card_changes.title = ctx.title;
			if (changed.$items) card_changes.description = ctx.description;
			if (changed.$items) card_changes.price = ctx.price;
			if (changed.$items) card_changes.img = ctx.img;
			if (changed.$items) card_changes.id = ctx.id;
			card.$set(card_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(card.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(card.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(card, detaching);
		}
	};
}

// (50:2) {#if $userType === USER_TYPE.admin}
function create_if_block_1(ctx) {
	var div, current;

	var signbutton = new _SignButton_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: { text: "Add" } });
	signbutton.$on("click", ctx.click_handler);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			signbutton.$$.fragment.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "add svelte-8accb3");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(signbutton, div, null);
			current = true;
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(signbutton.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(signbutton.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(signbutton);
		}
	};
}

// (59:2) {#if openModal}
function create_if_block(ctx) {
	var current;

	var addcart = new _AddCart_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});
	addcart.$on("ADD_ITEM", ctx.onAddItem);

	return {
		c() {
			addcart.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(addcart, target, anchor);
			current = true;
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(addcart.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(addcart.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(addcart, detaching);
		}
	};
}

// (60:4) <AddCart on:ADD_ITEM={onAddItem}>
function create_default_slot(ctx) {
	var current;

	var signbutton = new _SignButton_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
		props: { isPrimary: false, text: "Cancel" }
	});
	signbutton.$on("click", ctx.click_handler_1);

	return {
		c() {
			signbutton.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(signbutton, target, anchor);
			current = true;
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(signbutton.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(signbutton.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(signbutton, detaching);
		}
	};
}

function create_fragment(ctx) {
	var div1, h1, t1, div0, t2, t3, current;

	let each_value = ctx.$items;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	var if_block0 = (ctx.$userType === _consts__WEBPACK_IMPORTED_MODULE_6__["USER_TYPE"].admin) && create_if_block_1(ctx);

	var if_block1 = (ctx.openModal) && create_if_block(ctx);

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = "Our Shop";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block0) if_block0.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h1, "class", "svelte-8accb3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "grid svelte-8accb3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "root svelte-8accb3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "id", "grid");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t2);
			if (if_block0) if_block0.m(div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t3);
			if (if_block1) if_block1.m(div1, null);
			current = true;
		},

		p(changed, ctx) {
			if (changed.$items) {
				each_value = ctx.$items;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (ctx.$userType === _consts__WEBPACK_IMPORTED_MODULE_6__["USER_TYPE"].admin) {
				if (!if_block0) {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
					if_block0.m(div1, t3);
				} else Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
			} else if (if_block0) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0, 1, 1, () => {
					if_block0 = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (ctx.openModal) {
				if (!if_block1) {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
					if_block1.m(div1, null);
				} else Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
			} else if (if_block1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1, 1, 1, () => {
					if_block1 = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},

		i(local) {
			if (current) return;
			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1);
			current = true;
		},

		o(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $items, $userType;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_5__["items"], $$value => { $items = $$value; $$invalidate('$items', $items); });
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_5__["userType"], $$value => { $userType = $$value; $$invalidate('$userType', $userType); });

	

  let { cards } = _cards__WEBPACK_IMPORTED_MODULE_2__["default"];
  let openModal = false;

  const onAddItem = event => {
    Object(_store__WEBPACK_IMPORTED_MODULE_5__["addItem"])(event.detail);
    $$invalidate('openModal', openModal = false);
  };

	function click_handler() {
	          var $$result = (openModal = true); $$invalidate('openModal', openModal); return $$result
	        }

	function click_handler_1() {
	          var $$result = (openModal = false); $$invalidate('openModal', openModal); return $$result
	        }

	return {
		openModal,
		onAddItem,
		$items,
		$userType,
		click_handler,
		click_handler_1
	};
}

class CardList extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (CardList);




/***/ }),

/***/ "./src/components/CardList.svelte.css":
/*!********************************************!*\
  !*** ./src/components/CardList.svelte.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./CardList.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CardList.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Cart.svelte":
/*!************************************!*\
  !*** ./src/components/Cart.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Blur_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blur.svelte */ "./src/components/Blur.svelte");
/* harmony import */ var _CartItem_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartItem.svelte */ "./src/components/CartItem.svelte");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Cart_svelte_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/Cart.svelte.css */ "./src/components/Cart.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Cart_svelte_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Cart_svelte_css__WEBPACK_IMPORTED_MODULE_5__);
/* src\components\Cart.svelte generated by Svelte v3.10.0 */






function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.title = list[i].title;
	child_ctx.price = list[i].price;
	child_ctx.img = list[i].img;
	child_ctx.id = list[i].id;
	return child_ctx;
}

// (47:4) {#each $cartItems as {title, price, img, id}}
function create_each_block(ctx) {
	var current;

	var cartitem = new _CartItem_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
		props: {
		title: ctx.title,
		price: ctx.price,
		img: ctx.img,
		id: ctx.id
	}
	});

	return {
		c() {
			cartitem.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(cartitem, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var cartitem_changes = {};
			if (changed.$cartItems) cartitem_changes.title = ctx.title;
			if (changed.$cartItems) cartitem_changes.price = ctx.price;
			if (changed.$cartItems) cartitem_changes.img = ctx.img;
			if (changed.$cartItems) cartitem_changes.id = ctx.id;
			cartitem.$set(cartitem_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(cartitem.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(cartitem.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(cartitem, detaching);
		}
	};
}

function create_fragment(ctx) {
	var div1, div0, h1, span, t_2, current, dispose;

	let each_value = ctx.$cartItems;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = "Cart";
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "❌";
			t_2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-12qj7qp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "description svelte-12qj7qp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(ctx.classes) + " svelte-12qj7qp");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(span, "click", ctx.cartClick);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t_2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			current = true;
		},

		p(changed, ctx) {
			if (changed.$cartItems) {
				each_value = ctx.$cartItems;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!current || changed.classes) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(ctx.classes) + " svelte-12qj7qp");
			}
		},

		i(local) {
			if (current) return;
			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			current = true;
		},

		o(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $cartItems;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_4__["cartItems"], $$value => { $cartItems = $$value; $$invalidate('$cartItems', $cartItems); });

	

let { open = false } = $$props;
const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

function cartClick() {
  dispatch('cartClick', {});
}

	$$self.$set = $$props => {
		if ('open' in $$props) $$invalidate('open', open = $$props.open);
	};

	let classes;

	$$self.$$.update = ($$dirty = { open: 1 }) => {
		if ($$dirty.open) { $$invalidate('classes', classes = open ? 'wrapper' : 'wrapper closed'); }
	};

	return { open, cartClick, classes, $cartItems };
}

class Cart extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["open"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Cart);




/***/ }),

/***/ "./src/components/Cart.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Cart.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Cart.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Cart.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/CartItem.svelte":
/*!****************************************!*\
  !*** ./src/components/CartItem.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_CartItem_svelte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/CartItem.svelte.css */ "./src/components/CartItem.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_CartItem_svelte_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_CartItem_svelte_css__WEBPACK_IMPORTED_MODULE_2__);
/* src\components\CartItem.svelte generated by Svelte v3.10.0 */



function create_fragment(ctx) {
	var div2, img_1, t0, div1, p, t1, t2, div0, span, t3, t4, button, dispose;

	return {
		c() {
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.title);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.price);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button.textContent = "Delete";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "src", ctx.img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "alt", "cartitem");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "class", "svelte-10oslm7");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "svelte-10oslm7");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "info_price svelte-10oslm7");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "info svelte-10oslm7");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "root svelte-10oslm7");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", ctx.click_handler);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, img_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, button);
		},

		p(changed, ctx) {
			if (changed.img) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img_1, "src", ctx.img);
			}

			if (changed.title) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, ctx.title);
			}

			if (changed.price) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, ctx.price);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div2);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title, price, img, id } = $$props;

	function click_handler() {
		return Object(_store__WEBPACK_IMPORTED_MODULE_1__["removeFromCart"])(id);
	}

	$$self.$set = $$props => {
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('price' in $$props) $$invalidate('price', price = $$props.price);
		if ('img' in $$props) $$invalidate('img', img = $$props.img);
		if ('id' in $$props) $$invalidate('id', id = $$props.id);
	};

	return { title, price, img, id, click_handler };
}

class CartItem extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["title", "price", "img", "id"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (CartItem);




/***/ }),

/***/ "./src/components/CartItem.svelte.css":
/*!********************************************!*\
  !*** ./src/components/CartItem.svelte.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./CartItem.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CartItem.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Checkmark.svelte":
/*!*****************************************!*\
  !*** ./src/components/Checkmark.svelte ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Checkmark_svelte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/Checkmark.svelte.css */ "./src/components/Checkmark.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Checkmark_svelte_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Checkmark_svelte_css__WEBPACK_IMPORTED_MODULE_2__);
/* src\components\Checkmark.svelte generated by Svelte v3.10.0 */



function create_fragment(ctx) {
	var span;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(ctx.classes) + " svelte-1iw5x5");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
		},

		p(changed, ctx) {
			if (changed.classes) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(ctx.classes) + " svelte-1iw5x5");
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { stack = [], popStack } = $$props;
  let classes = '';

  Object(svelte__WEBPACK_IMPORTED_MODULE_1__["afterUpdate"])(() => {
    if (stack.length > 0) {
      if (!classes) {
        $$invalidate('classes', classes = 'success');
        setTimeout(() => {
          $$invalidate('classes', classes = '');
          popStack();
        }, 1000);
      }
    }
  });

	$$self.$set = $$props => {
		if ('stack' in $$props) $$invalidate('stack', stack = $$props.stack);
		if ('popStack' in $$props) $$invalidate('popStack', popStack = $$props.popStack);
	};

	return { stack, popStack, classes };
}

class Checkmark extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["stack", "popStack"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Checkmark);




/***/ }),

/***/ "./src/components/Checkmark.svelte.css":
/*!*********************************************!*\
  !*** ./src/components/Checkmark.svelte.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Checkmark.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Checkmark.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Footer.svelte":
/*!**************************************!*\
  !*** ./src/components/Footer.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-routing */ "./node_modules/svelte-routing/src/index.js");
/* harmony import */ var _img_socials_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/socials/facebook.svg */ "./src/img/socials/facebook.svg");
/* harmony import */ var _img_socials_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_socials_facebook_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_socials_vk_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/socials/vk.svg */ "./src/img/socials/vk.svg");
/* harmony import */ var _img_socials_vk_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_socials_vk_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_socials_inst_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/socials/inst.svg */ "./src/img/socials/inst.svg");
/* harmony import */ var _img_socials_inst_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_socials_inst_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_socials_telegram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/socials/telegram.svg */ "./src/img/socials/telegram.svg");
/* harmony import */ var _img_socials_telegram_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_socials_telegram_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Footer_svelte_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/components/Footer.svelte.css */ "./src/components/Footer.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Footer_svelte_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Footer_svelte_css__WEBPACK_IMPORTED_MODULE_6__);
/* src\components\Footer.svelte generated by Svelte v3.10.0 */







function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.link = list[i].link;
	child_ctx.img = list[i].img;
	return child_ctx;
}

// (52:8) {#each links as {link, img}
function create_each_block(ctx) {
	var div, a, raw_value = ctx.img + "", a_href_value, t;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value = ctx.link);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "class", "svelte-1fpx11t");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "social_link svelte-1fpx11t");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, a);
			a.innerHTML = raw_value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

function create_fragment(ctx) {
	var div2, div0, a0, link_action, t1, a1, link_action_1, t3, div1;

	let each_value = ctx.links;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			a0.textContent = "Contact Us";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			a1.textContent = "Support";
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "href", "/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "class", "svelte-1fpx11t");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "href", "/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "class", "svelte-1fpx11t");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "link_block svelte-1fpx11t");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "social_block svelte-1fpx11t");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "root svelte-1fpx11t");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, a0);
			link_action = svelte_routing__WEBPACK_IMPORTED_MODULE_1__["link"].call(null, a0) || {};
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, a1);
			link_action_1 = svelte_routing__WEBPACK_IMPORTED_MODULE_1__["link"].call(null, a1) || {};
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}
		},

		p(changed, ctx) {
			if (changed.links) {
				each_value = ctx.links;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div2);
			}

			if (link_action && typeof link_action.destroy === 'function') link_action.destroy();
			if (link_action_1 && typeof link_action_1.destroy === 'function') link_action_1.destroy();

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function instance($$self) {
	

  let links = [{img: _img_socials_facebook_svg__WEBPACK_IMPORTED_MODULE_2___default.a, link: 'https://www.facebook.com'}, {img: _img_socials_vk_svg__WEBPACK_IMPORTED_MODULE_3___default.a, link: 'https://www.vk.com'}, {img: _img_socials_inst_svg__WEBPACK_IMPORTED_MODULE_4___default.a, link: 'https://www.instagram.com'}, {img: _img_socials_telegram_svg__WEBPACK_IMPORTED_MODULE_5___default.a, link: 'https://www.telegram.org'}];

	return { links };
}

class Footer extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Footer);




/***/ }),

/***/ "./src/components/Footer.svelte.css":
/*!******************************************!*\
  !*** ./src/components/Footer.svelte.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Footer.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Form.svelte":
/*!************************************!*\
  !*** ./src/components/Form.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Form_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Form.svelte.css */ "./src/components/Form.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Form_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Form_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\components\Form.svelte generated by Svelte v3.10.0 */


function create_fragment(ctx) {
	var div, current;

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			if (default_slot) default_slot.c();

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "form svelte-1kselyv");
		},

		l(nodes) {
			if (default_slot) default_slot.l(div_nodes);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { $$slots, $$scope };
}

class Form extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Form);




/***/ }),

/***/ "./src/components/Form.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Form.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Form.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Form.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Header.svelte":
/*!**************************************!*\
  !*** ./src/components/Header.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-routing */ "./node_modules/svelte-routing/src/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _img_ECO_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/ECO_logo.svg */ "./src/img/ECO_logo.svg");
/* harmony import */ var _img_ECO_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ECO_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/shopping-cart.svg */ "./src/img/shopping-cart.svg");
/* harmony import */ var _img_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Header_svelte_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/components/Header.svelte.css */ "./src/components/Header.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Header_svelte_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Header_svelte_css__WEBPACK_IMPORTED_MODULE_6__);
/* src\components\Header.svelte generated by Svelte v3.10.0 */







function create_fragment(ctx) {
	var div5, div0, t0, div4, div1, t1, div3, a, t2, t3_value = ctx.$userType === '' ? 'in' : 'out' + "", t3, link_action, t4, div2, t5, span, dispose;

	return {
		c() {
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("log ");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "cart";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "black-line svelte-1qez6xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "logo svelte-1qez6xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", "/auth");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "class", "text sarabun svelte-1qez6xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "cart svelte-1qez6xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "text sarabun svelte-1qez6xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "panel svelte-1qez6xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "root svelte-1qez6xl");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(span, "click", ctx.cartClick);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div1);
			div1.innerHTML = _img_ECO_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t3);
			link_action = svelte_routing__WEBPACK_IMPORTED_MODULE_1__["link"].call(null, a) || {};
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			div2.innerHTML = _img_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, span);
		},

		p(changed, ctx) {
			if ((changed.$userType) && t3_value !== (t3_value = ctx.$userType === '' ? 'in' : 'out' + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, t3_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div5);
			}

			if (link_action && typeof link_action.destroy === 'function') link_action.destroy();
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $userType;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_5__["userType"], $$value => { $userType = $$value; $$invalidate('$userType', $userType); });

	

  const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_2__["createEventDispatcher"])();

  function cartClick() {
    dispatch('cartClick', {});
  }

	return { cartClick, $userType };
}

class Header extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Header);




/***/ }),

/***/ "./src/components/Header.svelte.css":
/*!******************************************!*\
  !*** ./src/components/Header.svelte.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Header.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Header.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Hero.svelte":
/*!************************************!*\
  !*** ./src/components/Hero.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _img_Hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Hero.jpg */ "./src/img/Hero.jpg");
/* harmony import */ var _img_Hero_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_Hero_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Hero_svelte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/Hero.svelte.css */ "./src/components/Hero.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Hero_svelte_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Hero_svelte_css__WEBPACK_IMPORTED_MODULE_2__);
/* src\components\Hero.svelte generated by Svelte v3.10.0 */



function create_fragment(ctx) {
	var div_2;

	return {
		c() {
			div_2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div_2.innerHTML = `<div class="img svelte-1e2zi5i"></div> <div class="text svelte-1e2zi5i"><span class="clean svelte-1e2zi5i">clean.</span> <span class="ecology svelte-1e2zi5i">ecology.</span> <span class="recycled svelte-1e2zi5i">recycled.</span> <a href="#grid" class="svelte-1e2zi5i">try it now.</a></div>`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div_2, "class", "wrapper svelte-1e2zi5i");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div_2, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div_2);
			}
		}
	};
}

class Hero extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Hero);




/***/ }),

/***/ "./src/components/Hero.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Hero.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Hero.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Hero.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/Main.svelte":
/*!************************************!*\
  !*** ./src/components/Main.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-routing */ "./node_modules/svelte-routing/src/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Header_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.svelte */ "./src/components/Header.svelte");
/* harmony import */ var _Hero_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.svelte */ "./src/components/Hero.svelte");
/* harmony import */ var _CardList_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardList.svelte */ "./src/components/CardList.svelte");
/* harmony import */ var _About_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.svelte */ "./src/components/About.svelte");
/* harmony import */ var _Footer_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.svelte */ "./src/components/Footer.svelte");
/* harmony import */ var _Cart_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cart.svelte */ "./src/components/Cart.svelte");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Main_svelte_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/components/Main.svelte.css */ "./src/components/Main.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Main_svelte_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_Main_svelte_css__WEBPACK_IMPORTED_MODULE_10__);
/* src\components\Main.svelte generated by Svelte v3.10.0 */











function create_fragment(ctx) {
	var div, t0, t1, t2, t3, t4, aside, current;

	var header = new _Header_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({});
	header.$on("cartClick", ctx.switchCart);

	var hero = new _Hero_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({});

	var cardlist = new _CardList_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({});

	var about = new _About_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({});

	var footer = new _Footer_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({});

	var cart = new _Cart_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({ props: { open: ctx.isCartOpen } });
	cart.$on("cartClick", ctx.switchCart);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			header.$$.fragment.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			hero.$$.fragment.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			cardlist.$$.fragment.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			about.$$.fragment.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			footer.$$.fragment.c();
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			aside = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("aside");
			cart.$$.fragment.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(ctx.rootClasses) + " svelte-6w9c5o");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(header, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(hero, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(cardlist, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(about, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(footer, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, aside, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(cart, aside, null);
			current = true;
		},

		p(changed, ctx) {
			if (!current || changed.rootClasses) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(ctx.rootClasses) + " svelte-6w9c5o");
			}

			var cart_changes = {};
			if (changed.isCartOpen) cart_changes.open = ctx.isCartOpen;
			cart.$set(cart_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(header.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(hero.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(cardlist.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(about.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(footer.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(cart.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(header.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(hero.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(cardlist.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(about.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(footer.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(cart.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(header);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(hero);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(cardlist);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(about);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(footer);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(aside);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(cart);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $userType;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_9__["userType"], $$value => { $userType = $$value; $$invalidate('$userType', $userType); });

	

  let isCartOpen = false;

  function switchCart() {
    $$invalidate('isCartOpen', isCartOpen = !isCartOpen);
  }

  Object(svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"])(() => {
    if ($userType !== 'admin' && $userType !== 'user') {
      Object(svelte_routing__WEBPACK_IMPORTED_MODULE_1__["navigate"])('/auth');
    }
  });

	let rootClasses;

	$$self.$$.update = ($$dirty = { isCartOpen: 1 }) => {
		if ($$dirty.isCartOpen) { $$invalidate('rootClasses', rootClasses = isCartOpen ? 'root with-cart' : 'root'); }
	};

	return { isCartOpen, switchCart, rootClasses };
}

class Main extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Main);




/***/ }),

/***/ "./src/components/Main.svelte.css":
/*!****************************************!*\
  !*** ./src/components/Main.svelte.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Main.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Main.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/SignButton.svelte":
/*!******************************************!*\
  !*** ./src/components/SignButton.svelte ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_SignButton_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/SignButton.svelte.css */ "./src/components/SignButton.svelte.css");
/* harmony import */ var D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_SignButton_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Peace_DOS_MVS_Learning_Svelte_GameView_src_components_SignButton_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src\components\SignButton.svelte generated by Svelte v3.10.0 */


function create_fragment(ctx) {
	var button, t, button_class_value, dispose;

	return {
		c() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.text);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", button_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(((ctx.isPrimary && 'primary') || 'secondary')) + " svelte-4owqyi");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", ctx.click_handler);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t);
		},

		p(changed, ctx) {
			if (changed.text) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, ctx.text);
			}

			if ((changed.isPrimary) && button_class_value !== (button_class_value = "" + Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["null_to_empty"])(((ctx.isPrimary && 'primary') || 'secondary')) + " svelte-4owqyi")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", button_class_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { isPrimary = true, text = 'signin as default' } = $$props;

	function click_handler(event) {
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bubble"])($$self, event);
	}

	$$self.$set = $$props => {
		if ('isPrimary' in $$props) $$invalidate('isPrimary', isPrimary = $$props.isPrimary);
		if ('text' in $$props) $$invalidate('text', text = $$props.text);
	};

	return { isPrimary, text, click_handler };
}

class SignButton extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["isPrimary", "text"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (SignButton);




/***/ }),

/***/ "./src/components/SignButton.svelte.css":
/*!**********************************************!*\
  !*** ./src/components/SignButton.svelte.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./SignButton.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/SignButton.svelte.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: USER_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TYPE", function() { return USER_TYPE; });
const USER_TYPE = {
  user: 'user',
  admin: 'admin'
};

// export const ADD_ITEM = 'ADD_ITEM';

/***/ }),

/***/ "./src/img/ECO_logo.svg":
/*!******************************!*\
  !*** ./src/img/ECO_logo.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 170 52\"><path fill=\"#3B7632\" d=\"M46.097 30.263H6.405c.36 4.742 2.255 8.588 5.683 11.537 3.428 2.892 7.758 4.337 12.99 4.337 2.947 0 5.653-.491 8.119-1.474a18.198 18.198 0 0 0 6.405-4.511l3.608 3.99c-2.105 2.429-4.75 4.28-7.938 5.552-3.127 1.272-6.585 1.908-10.374 1.908-4.872 0-9.202-.983-12.99-2.95-3.729-2.023-6.646-4.799-8.75-8.327C1.051 36.798 0 32.808 0 28.355s.992-8.443 2.977-11.97c2.045-3.528 4.811-6.275 8.3-8.24 3.547-1.967 7.517-2.95 11.907-2.95s8.33.983 11.817 2.95c3.488 1.965 6.225 4.712 8.21 8.24 1.984 3.47 2.976 7.46 2.976 11.97l-.09 1.908zM23.184 10.486c-4.57 0-8.42 1.417-11.547 4.25-3.067 2.776-4.811 6.42-5.232 10.93h33.648c-.421-4.51-2.195-8.154-5.322-10.93-3.068-2.833-6.917-4.25-11.547-4.25zM78.89 51.602c-4.692 0-8.901-.983-12.63-2.95-3.668-1.965-6.555-4.712-8.66-8.24-2.105-3.585-3.157-7.604-3.157-12.057s1.052-8.443 3.157-11.97c2.105-3.528 4.992-6.275 8.66-8.24 3.729-1.967 7.938-2.95 12.63-2.95 4.089 0 7.727.78 10.915 2.342 3.247 1.503 5.803 3.73 7.667 6.68l-4.78 3.122c-1.564-2.255-3.549-3.932-5.954-5.031-2.406-1.157-5.022-1.735-7.849-1.735-3.428 0-6.525.752-9.291 2.255-2.706 1.446-4.841 3.528-6.405 6.246-1.503 2.718-2.255 5.811-2.255 9.281 0 3.528.752 6.65 2.255 9.368a16.714 16.714 0 0 0 6.405 6.246c2.766 1.445 5.863 2.168 9.291 2.168 2.827 0 5.443-.55 7.849-1.648 2.405-1.099 4.39-2.776 5.953-5.03l4.781 3.122c-1.864 2.949-4.42 5.204-7.667 6.766-3.248 1.503-6.886 2.255-10.916 2.255zM165.129 51.602c-1.323 0-2.466-.463-3.428-1.388-.902-.925-1.353-2.053-1.353-3.383s.451-2.429 1.353-3.296c.962-.925 2.105-1.388 3.428-1.388s2.465.463 3.428 1.388c.962.867 1.443 1.966 1.443 3.296 0 1.33-.481 2.458-1.443 3.383-.963.925-2.105 1.388-3.428 1.388z\"></path><path fill=\"#3B7632\" fill-rule=\"evenodd\" d=\"M116.298 48.653c3.669 1.966 7.788 2.949 12.359 2.949 4.57 0 8.69-.983 12.358-2.95 3.669-2.023 6.525-4.799 8.57-8.327 2.105-3.527 3.158-7.517 3.158-11.97s-1.053-8.443-3.158-11.97c-2.045-3.528-4.901-6.275-8.57-8.24l-3.337 4.683c2.706 1.446 4.811 3.528 6.314 6.246 1.504 2.718 2.255 5.811 2.255 9.281 0 3.47-.751 6.564-2.255 9.281-1.503 2.718-3.608 4.83-6.314 6.333-2.647 1.445-5.653 2.168-9.021 2.168-3.368 0-6.405-.723-9.111-2.168-2.647-1.504-4.751-3.615-6.315-6.333-1.504-2.717-2.255-5.811-2.255-9.28 0-3.47.751-6.564 2.255-9.282 1.564-2.718 3.668-4.8 6.315-6.246 2.706-1.503 5.743-2.255 9.111-2.255V5.195c-4.571 0-8.69.983-12.359 2.95-3.668 1.965-6.555 4.712-8.66 8.24-2.105 3.527-3.157 7.517-3.157 11.97s1.052 8.443 3.157 11.97c2.105 3.528 4.992 6.304 8.66 8.328z\" clip-rule=\"evenodd\"></path><path stroke=\"#3B7632\" stroke-linecap=\"square\" stroke-width=\"3\" d=\"M123 2.099l7.821 5.825-6.906 6.683\"></path></svg>"

/***/ }),

/***/ "./src/img/Hero.jpg":
/*!**************************!*\
  !*** ./src/img/Hero.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "70c7f24c83909f0bd63ce68adad5c1e1.jpg";

/***/ }),

/***/ "./src/img/cards/dishes.jpg":
/*!**********************************!*\
  !*** ./src/img/cards/dishes.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce4042312a48adc3ed76209e7e8e93e4.jpg";

/***/ }),

/***/ "./src/img/cards/food.jpg":
/*!********************************!*\
  !*** ./src/img/cards/food.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe49d446609778d99c9ea9c1b8d48bcc.jpg";

/***/ }),

/***/ "./src/img/cards/jacket.jpg":
/*!**********************************!*\
  !*** ./src/img/cards/jacket.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce8a1b8ea725af2f94c45943f4ffe592.jpg";

/***/ }),

/***/ "./src/img/cards/laptop.jpg":
/*!**********************************!*\
  !*** ./src/img/cards/laptop.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e137c8c0d8d6d7be175d252de46ced5.jpg";

/***/ }),

/***/ "./src/img/cards/shoes.jpg":
/*!*********************************!*\
  !*** ./src/img/cards/shoes.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ccd5198715a42a3b0c8de18b2fbb0ec9.jpg";

/***/ }),

/***/ "./src/img/cards/skate.jpg":
/*!*********************************!*\
  !*** ./src/img/cards/skate.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5e232ed74e5f9c6b30b46525c95d5c94.jpg";

/***/ }),

/***/ "./src/img/ckeck.png":
/*!***************************!*\
  !*** ./src/img/ckeck.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "25ffec9e00d9339653da68ccbb7132b1.png";

/***/ }),

/***/ "./src/img/footer.jpg":
/*!****************************!*\
  !*** ./src/img/footer.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "820a6468b7da0178326081d259b92a9b.jpg";

/***/ }),

/***/ "./src/img/shopping-cart.svg":
/*!***********************************!*\
  !*** ./src/img/shopping-cart.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.999 511.999\" style=\"enable-background:new 0 0 511.999 511.999;\" xml:space=\"preserve\"><g><g><path d=\"M214.685,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029 C259.713,423.028,239.513,402.828,214.685,402.828z M214.685,467.742c-10.966,0-19.887-8.922-19.887-19.887 c0-10.966,8.922-19.887,19.887-19.887s19.887,8.922,19.887,19.887C234.572,458.822,225.65,467.742,214.685,467.742z\"></path></g></g><g><g><path d=\"M372.63,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029 C417.658,423.028,397.458,402.828,372.63,402.828z M372.63,467.742c-10.966,0-19.887-8.922-19.887-19.887 c0-10.966,8.922-19.887,19.887-19.887c10.966,0,19.887,8.922,19.887,19.887C392.517,458.822,383.595,467.742,372.63,467.742z\"></path></g></g><g><g><path d=\"M383.716,165.755H203.567c-6.943,0-12.571,5.628-12.571,12.571c0,6.943,5.629,12.571,12.571,12.571h180.149 c6.943,0,12.571-5.628,12.571-12.571C396.287,171.382,390.659,165.755,383.716,165.755z\"></path></g></g><g><g><path d=\"M373.911,231.035H213.373c-6.943,0-12.571,5.628-12.571,12.571s5.628,12.571,12.571,12.571h160.537 c6.943,0,12.571-5.628,12.571-12.571C386.481,236.664,380.853,231.035,373.911,231.035z\"></path></g></g><g><g><path d=\"M506.341,109.744c-4.794-5.884-11.898-9.258-19.489-9.258H95.278L87.37,62.097c-1.651-8.008-7.113-14.732-14.614-17.989 l-55.177-23.95c-6.37-2.767-13.773,0.156-16.536,6.524c-2.766,6.37,0.157,13.774,6.524,16.537L62.745,67.17l60.826,295.261 c2.396,11.628,12.752,20.068,24.625,20.068h301.166c6.943,0,12.571-5.628,12.571-12.571c0-6.943-5.628-12.571-12.571-12.571 H148.197l-7.399-35.916H451.69c11.872,0,22.229-8.44,24.624-20.068l35.163-170.675 C513.008,123.266,511.136,115.627,506.341,109.744z M451.69,296.301H135.619l-35.161-170.674l386.393,0.001L451.69,296.301z\"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/img/socials/facebook.svg":
/*!**************************************!*\
  !*** ./src/img/socials/facebook.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M56.6885 60.0002C58.5171 60.0002 60 58.5176 60 56.6887V3.31148C60 1.48242 58.5171 0 56.6885 0H3.31148C1.48219 0 0 1.48242 0 3.31148V56.6887C0 58.5176 1.48219 60.0002 3.31148 60.0002H56.6885Z\" fill=\"#3B7632\"></path><path d=\"M41.3986 60.0001V36.7649H49.1979L50.3656 27.7098H41.3986V21.9283C41.3986 19.3065 42.1268 17.5199 45.8864 17.5199L50.6815 17.5178V9.41896C49.8518 9.30857 47.0056 9.06201 43.6943 9.06201C36.7807 9.06201 32.0477 13.2819 32.0477 21.0318V27.7098H24.2285V36.7649H32.0477V60.0001H41.3986Z\" fill=\"white\"></path></g><defs><clipPath id=\"clip0\"><rect width=\"60\" height=\"60\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/img/socials/inst.svg":
/*!**********************************!*\
  !*** ./src/img/socials/inst.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M29.9999 5.40551C38.0103 5.40551 38.9591 5.436 42.1225 5.58033C45.0474 5.71383 46.6359 6.20255 47.6931 6.61328C49.0933 7.1575 50.0928 7.8077 51.1426 8.85744C52.1923 9.90717 52.8425 10.9067 53.3866 12.3069C53.7974 13.3641 54.2862 14.9526 54.4197 17.8774C54.564 21.0409 54.5945 21.9897 54.5945 30.0001C54.5945 38.0104 54.564 38.9592 54.4197 42.1226C54.2862 45.0475 53.7974 46.636 53.3866 47.6933C52.8425 49.0935 52.1923 50.0929 51.1426 51.1427C50.0928 52.1924 49.0933 52.8426 47.6931 53.3867C46.6359 53.7976 45.0474 54.2863 42.1225 54.4198C38.9596 54.5641 38.0108 54.5946 29.9999 54.5946C21.9891 54.5946 21.0403 54.5641 17.8774 54.4198C14.9525 54.2863 13.364 53.7976 12.3069 53.3867C10.9065 52.8426 9.90705 52.1924 8.85732 51.1427C7.80758 50.0929 7.15738 49.0935 6.61328 47.6933C6.20243 46.636 5.71371 45.0475 5.58021 42.1227C5.43588 38.9592 5.4054 38.0104 5.4054 30.0001C5.4054 21.9897 5.43588 21.0409 5.58021 17.8775C5.71371 14.9526 6.20243 13.3641 6.61328 12.3069C7.15738 10.9067 7.80758 9.90717 8.85732 8.85744C9.90705 7.8077 10.9065 7.1575 12.3069 6.61328C13.364 6.20255 14.9525 5.71383 17.8773 5.58033C21.0408 5.436 21.9896 5.40551 29.9999 5.40551ZM29.9999 0C21.8524 0 20.8309 0.0345347 17.631 0.180533C14.4378 0.326293 12.2571 0.833358 10.3487 1.57502C8.37598 2.34169 6.70295 3.36749 5.03516 5.03528C3.36737 6.70307 2.34157 8.37609 1.5749 10.3489C0.833239 12.2572 0.326174 14.4379 0.180414 17.6312C0.0344156 20.8309 0 21.8525 0 30.0001C0 38.1476 0.0344156 39.1693 0.180414 42.369C0.326174 45.5622 0.833239 47.7429 1.5749 49.6513C2.34157 51.6239 3.36737 53.2971 5.03516 54.9648C6.70295 56.6326 8.37598 57.6584 10.3487 58.4251C12.2571 59.1668 14.4378 59.6738 17.631 59.8196C20.8309 59.9656 21.8524 60 29.9999 60C38.1475 60 39.1691 59.9656 42.3688 59.8196C45.5621 59.6738 47.7428 59.1668 49.6511 58.4251C51.6239 57.6584 53.2969 56.6326 54.9647 54.9648C56.6325 53.2971 57.6583 51.624 58.425 49.6513C59.1666 47.7429 59.6737 45.5622 59.8195 42.369C59.9655 39.1693 60 38.1476 60 30.0001C60 21.8525 59.9655 20.8309 59.8195 17.6312C59.6737 14.4379 59.1666 12.2572 58.425 10.3489C57.6583 8.37609 56.6325 6.70307 54.9647 5.03528C53.2969 3.36749 51.6239 2.34169 49.6511 1.57502C47.7428 0.833358 45.5621 0.326293 42.3688 0.180533C39.1691 0.0345347 38.1475 0 29.9999 0ZM29.9999 14.5946C21.4918 14.5946 14.5945 21.4919 14.5945 30.0001C14.5945 38.5082 21.4918 45.4055 29.9999 45.4055C38.5081 45.4055 45.4054 38.5082 45.4054 30.0001C45.4054 21.4919 38.5081 14.5946 29.9999 14.5946ZM29.9999 40.0001C24.4771 40.0001 19.9999 35.5229 19.9999 30.0001C19.9999 24.4772 24.4771 20 29.9999 20C35.5228 20 40 24.4772 40 30.0001C40 35.5229 35.5228 40.0001 29.9999 40.0001ZM49.614 13.986C49.614 15.9742 48.0023 17.586 46.014 17.586C44.0258 17.586 42.414 15.9742 42.414 13.986C42.414 11.9977 44.0258 10.386 46.014 10.386C48.0023 10.386 49.614 11.9977 49.614 13.986Z\" fill=\"#3B7632\"></path></svg>"

/***/ }),

/***/ "./src/img/socials/telegram.svg":
/*!**************************************!*\
  !*** ./src/img/socials/telegram.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 0C13.4313 0 0 13.4313 0 30C0 46.5687 13.4313 60 30 60C46.5687 60 60 46.5687 60 30C60 13.4313 46.5687 0 30 0Z\" fill=\"#3B7632\"></path><path d=\"M44.5974 17.2573L39.2391 44.273C39.2391 44.273 38.4898 46.1466 36.4289 45.2473L24.0638 35.7673L19.5675 33.5942L11.9986 31.046C11.9986 31.046 10.8371 30.634 10.7246 29.7347C10.6123 28.8354 12.0361 28.3484 12.0361 28.3484L42.1243 16.5453C42.1243 16.5453 44.5974 15.4587 44.5974 17.2573Z\" fill=\"white\"></path><path d=\"M23.1132 43.9698C23.1132 43.9698 22.7523 43.9361 22.3025 42.512C21.853 41.0882 19.5674 33.5943 19.5674 33.5943L37.7401 22.0536C37.7401 22.0536 38.7894 21.4166 38.7519 22.0536C38.7519 22.0536 38.9392 22.1659 38.3771 22.6904C37.8151 23.2152 24.1011 35.5426 24.1011 35.5426\" fill=\"#3B7632\"></path><path d=\"M28.8048 39.4021L23.9139 43.8613C23.9139 43.8613 23.5316 44.1514 23.1133 43.9696L24.0498 35.6865\" fill=\"#3B7632\"></path></svg>"

/***/ }),

/***/ "./src/img/socials/vk.svg":
/*!********************************!*\
  !*** ./src/img/socials/vk.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.2096 0H20.7904C3.98024 0 0 3.98024 0 20.7904V39.2096C0 56.0198 3.98024 60 20.7904 60H39.2096C56.0198 60 60 56.0198 60 39.2096V20.7904C60 3.98024 55.9774 0 39.2096 0ZM48.4404 42.8087H44.079C42.4277 42.8087 41.9195 41.4961 38.9555 38.4898C36.3726 35.9915 35.2294 35.6528 34.5942 35.6528C33.705 35.6528 33.4509 35.9068 33.4509 37.1348V41.0727C33.4509 42.1313 33.1122 42.7664 30.3176 42.7664C25.7022 42.7664 20.5787 39.9718 16.9795 34.7636C11.5596 27.1418 10.0776 21.4255 10.0776 20.2399C10.0776 19.6048 10.3317 19.012 11.5596 19.012H15.921C17.0219 19.012 17.4453 19.5201 17.8687 20.7057C20.0282 26.9301 23.6274 32.3924 25.1094 32.3924C25.6598 32.3924 25.9139 32.1383 25.9139 30.741V24.3049C25.7445 21.3409 24.1778 21.0868 24.1778 20.0282C24.1778 19.5201 24.6013 19.012 25.2788 19.012H32.1383C33.0699 19.012 33.4086 19.5201 33.4086 20.621V29.3013C33.4086 30.2329 33.832 30.5716 34.0861 30.5716C34.6366 30.5716 35.1023 30.2329 36.1186 29.2167C39.2519 25.7022 41.4961 20.2823 41.4961 20.2823C41.7925 19.6471 42.3006 19.0543 43.4015 19.0543H47.7629C49.0755 19.0543 49.3719 19.7318 49.0755 20.6634C48.5251 23.2039 43.1898 30.741 43.1898 30.741C42.7241 31.5032 42.5547 31.8419 43.1898 32.6888C43.6556 33.3239 45.18 34.6366 46.1962 35.8222C48.0593 37.9393 49.4989 39.7177 49.88 40.9457C50.3035 42.1736 49.6683 42.8087 48.4404 42.8087Z\" fill=\"#3B7632\"></path></svg>"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



const app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
  target: document.body,
});


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: userType, setUserType, cartItems, addToCart, removeFromCart, items, addItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userType", function() { return userType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserType", function() { return setUserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItems", function() { return cartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./src/cards.js");





function getItem (name, defaultValue) {
  const expiration = JSON.parse(localStorage.getItem('expiration'));
  if (expiration && new Date(expiration) > new Date()) {
    return JSON.parse(localStorage.getItem(name)) || defaultValue;
  }
  return defaultValue;
}

function setItemLocally (name, value) {
  localStorage.setItem(name, JSON.stringify(value));
  localStorage.setItem(
    'expiration',
    JSON.stringify(new Date(new Date().getTime() + 600 * 1000))
  );
}

const userType = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])(getItem('userType', ''));

function setUserType (newUserType) {
  if (newUserType === _consts__WEBPACK_IMPORTED_MODULE_1__["USER_TYPE"].user || newUserType === _consts__WEBPACK_IMPORTED_MODULE_1__["USER_TYPE"].admin) {
    userType.set(newUserType);
    setItemLocally('userType', newUserType);
  }
}

const cartItems = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])(getItem('cartItems', []));

function addToCart (item) {
  cartItems.update(oldItems => {
    setItemLocally('cartItems', [...oldItems, item]);
    return [...oldItems, item];
  });
}

function removeFromCart (id) {
  cartItems.update(oldItems => {
    setItemLocally('cartItems', oldItems.filter(item => item.id !== id));
    return oldItems.filter(item => item.id !== id);
  });
}

const items = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])(getItem('items', _cards__WEBPACK_IMPORTED_MODULE_2__["default"].cards));

const addItem = item =>
  items.update(oldItems => {
    const newItems = [...oldItems, { ...item, id: new Date().getTime() }];
    setItemLocally('items', newItems);
    return newItems;
  });

const removeItem = id =>
  items.update(oldItems => {
    const newItems = oldItems.filter(item => item.id !== id);
    setItemLocally('items', newItems);
    return newItems;
  });

// sdsadfasfasdasdasfasfasd


/***/ })

/******/ });
//# sourceMappingURL=index.js.map