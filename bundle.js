/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #191b1f;\n  --secondary-color: #0f1115;\n  --accent-color: #ffff00;\n  --neutral-white: #fff;\n  --neutral-black: #000;\n  --search-colour: #800080;\n\n  --font-big: 3rem;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  overflow: hidden;\n}\n\nmain {\n  background-color: var(--primary-color);\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  gap: 2rem;\n  padding: 20px;\n}\n\n/* ================    Weather Card    ======================= */\n.weather-card {\n  max-width: 400px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.weather-card::before {\n  border-radius: inherit;\n  background: radial-gradient(\n    800px circle at 100px 100px,\n    rgba(97, 130, 228, 0.06),\n    transparent 40%\n  );\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.weather-card,\n.extra-info-card {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 0 6px rgba(47, 47, 47, 0.8);\n  max-height: 600px;\n  border-radius: 1rem;\n  padding: 1.2rem;\n  color: var(--neutral-white);\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Search button ----------------------*/\n\n.search {\n  margin-left: auto;\n  z-index: 800;\n}\n.search > div {\n  display: flex;\n\n  gap: 1rem;\n}\n#error {\n  color: red;\n}\n\n#city-input {\n  min-width: 20px;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid var(--search-colour);\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  color: var(--neutral-white);\n}\n\n#submit-city {\n  min-width: 35px;\n  min-height: 35px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  background-color: var(--search-colour);\n  color: var(--neutral-white);\n  transition: color 0.3s ease-in;\n  transition: background-color 0.2s ease-in;\n}\n\n#submit-city:hover {\n  background-color: var(--neutral-white);\n  color: var(--search-colour);\n  cursor: pointer;\n}\n/* -------------- */\n\n#image-of-weather {\n  scale: 1.6;\n}\n\n#temperature {\n  font-size: var(--font-big);\n  transition: color 0.4s ease-in-out;\n  user-select: none;\n  transition: text-shadow 0.2s ease-in-out;\n  position: relative;\n  z-index: 800;\n}\n\n#temperature:hover,\n#feels-like:hover {\n  cursor: pointer;\n  color: var(--accent-color);\n  text-shadow: 0 0 6px rgba(255, 255, 0, 0.8);\n}\n\n#condition {\n  padding: 0.3rem;\n  padding-bottom: 1.2rem;\n\n  border: none;\n  border-bottom: 2px solid var(--neutral-white);\n}\n\n/* ================================================ */\n\n/* >>>>>>>>>>>>>>   Extra info card              >>>>>>>>>>>>>> */\n.extra-info-card {\n  font-family: \"Poppins\", sans-serif;\n  width: 100%;\n  display: flex;\n\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.extra-info-card h2 {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  z-index: 800;\n}\n.extra-info-card h2::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  width: 0;\n  height: 2px;\n  background-color: var(--neutral-white);\n  transition: width 0.2s ease-in-out;\n}\n\n.extra-info-card h2:hover::after {\n  width: 55%;\n}\n\n.extra-info-card p {\n  font-size: var(--font-big);\n}\n\n.info {\n  display: flex;\n  gap: 0.8rem;\n}\n.info > div {\n  border-radius: 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  flex: 33%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n}\n\n.info > div::before {\n  border-radius: inherit;\n  background: radial-gradient(\n    800px circle at 100px 100px,\n    rgba(170, 170, 170, 0.06),\n    transparent 40%\n  );\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.info-1 {\n  height: 70%;\n}\n.info-2 {\n  height: 30%;\n}\n\n.sun-info-container {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.sun-info-container p {\n  font-size: 1.6rem;\n}\n\n#feels-like {\n  transition: color 0.4s ease-in-out;\n  user-select: none;\n  transition: text-shadow 0.2s ease-in-out;\n  z-index: 800;\n}\n\n/* =============== BLOB ================= ======= */\n\n#blob {\n  position: absolute;\n  border-radius: 50%;\n  aspect-ratio: 1;\n  background-color: pink;\n  height: 500px;\n  left: 50%;\n  right: 50%;\n  translate: -50% -50%;\n  background: linear-gradient(to right, aquamarine, mediumpurple);\n  animation: rotate 20s infinite;\n  filter: blur(200px);\n  opacity: 0.7;\n}\n\n@keyframes rotate {\n  from {\n    rotate: 0deg;\n  }\n\n  50% {\n    scale: 1 1.5;\n  }\n\n  to {\n    rotate: 360deg;\n  }\n}\n@media (max-width: 1500px) {\n  #blob {\n    display: none;\n  }\n  .sun-info-container p {\n    font-size: 1.5rem;\n  }\n  .extra-info-card p {\n    font-size: 2rem;\n  }\n}\n\n@media (max-width: 1200px) {\n  .sun-info-container {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 1000px) {\n  html,\n  body {\n    overflow: scroll;\n  }\n  main {\n    flex-direction: column;\n    height: auto;\n  }\n\n  .extra-info-card {\n    height: 100%;\n  }\n  .weather-card {\n    height: 600px;\n    gap: 1.2rem;\n    max-width: 100%;\n  }\n  .extra-info-card p {\n    font-size: 1.7rem;\n  }\n}\n\n@media (max-width: 650px) {\n  .extra-info-card {\n    height: auto;\n    overflow-y: scroll;\n  }\n  .info {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 400px) {\n  .weather-card {\n    min-width: auto;\n  }\n  #city-input {\n    min-width: 20px;\n  }\n  .search {\n    width: 100%;\n    z-index: 800;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable import/extensions */\n/* eslint-disable no-param-reassign */\n\n\n\nconst cityInput = document.querySelector(\"#city-input\")\nconst submitCity = document.getElementById(\"submit-city\")\nlet tempClickListener = null\nlet feelsLikeClickListener = null\n\n// Weather Card ------------------------\n\nfunction manageCelAndFah(element, cel, fah) {\n  let check = true\n\n  if (!element.classList.contains(\"cel\")) {\n    check = false\n  } else if (element.classList.contains(\"cel\")) {\n    check = true\n  }\n\n  if (check === true) {\n    element.textContent = `${cel}°C`\n  } else if (check === false) {\n    element.textContent = `${fah}°F`\n  }\n}\n\nfunction displayWeatherCard(\n  image,\n  tempC,\n  tempF,\n  condition,\n  city,\n  country,\n  date,\n) {\n  // Selecting all necessary HTML Elements\n\n  const setImage = document.getElementById(\"image-of-weather\")\n  const setTemp = document.getElementById(\"temperature\")\n  const setCondition = document.getElementById(\"condition\")\n  const setLocation = document.getElementById(\"location\")\n  const setDate = document.getElementById(\"date\")\n\n  if (tempClickListener) {\n    setTemp.removeEventListener(\"click\", tempClickListener)\n  }\n\n  tempClickListener = (e) => {\n    e.target.classList.toggle(\"cel\")\n    manageCelAndFah(setTemp, tempC, tempF)\n  }\n  setTemp.addEventListener(\"click\", tempClickListener)\n\n  // Setting all the info to the Weather Card\n  setImage.src = image\n  manageCelAndFah(setTemp, tempC, tempF)\n  setCondition.textContent = condition\n  setLocation.textContent = `${city}, ${country}`\n  setDate.textContent = date\n}\n\nfunction getWeatherCardInfo(info) {\n  const data = info\n  const requiredData = {\n    weatherImage: data.current.condition.icon,\n    temperatureCel: data.current.temp_c,\n    temperatureF: data.current.temp_f,\n    condition: data.current.condition.text,\n    city: data.location.name,\n    country: data.location.country,\n    date: data.current.last_updated,\n  }\n\n  displayWeatherCard(\n    requiredData.weatherImage,\n    requiredData.temperatureCel,\n    requiredData.temperatureF,\n    requiredData.condition,\n    requiredData.city,\n    requiredData.country,\n    requiredData.date,\n  )\n}\n\n// Extra Info Card ----------------------\n\nfunction displayExtraWeatherInfo(\n  wind,\n  uv,\n  sunrise,\n  sunset,\n  humidity,\n  visibility,\n  feelsC,\n  feelsF,\n) {\n  // Selecting all necessary HTML Elements\n\n  const setWindStatus = document.querySelector(\"#wind-status\")\n  const setUV = document.querySelector(\"#uv-index\")\n  const setSunrise = document.querySelector(\"#sunrise\")\n  const setSunset = document.querySelector(\"#sunset\")\n  const setHumidity = document.querySelector(\"#humidity\")\n  const setVisibilty = document.querySelector(\"#visibility\")\n  const setFeelsLike = document.querySelector(\"#feels-like\")\n\n  if (feelsLikeClickListener) {\n    setFeelsLike.removeEventListener(\"click\", feelsLikeClickListener)\n  }\n\n  // Add the new event listener and update the feelsLikeClickListener reference\n  feelsLikeClickListener = (e) => {\n    e.target.classList.toggle(\"cel\")\n    manageCelAndFah(setFeelsLike, feelsC, feelsF)\n  }\n  setFeelsLike.addEventListener(\"click\", feelsLikeClickListener)\n  // Setting all the info to the extra Info Card\n\n  setWindStatus.textContent = `${wind} km/h`\n  setUV.textContent = uv\n\n  setSunrise.textContent = sunrise\n  setSunset.textContent = sunset\n  setHumidity.textContent = `${humidity}%`\n  setVisibilty.textContent = `${visibility} km`\n  manageCelAndFah(setFeelsLike, feelsC, feelsF)\n}\n\nfunction getExtraWeatherInfo(info) {\n  const data = info\n\n  const requiredExtraData = {\n    windSpeed: data.current.wind_kph,\n    uvIndex: data.current.uv,\n    sunRise: data.forecast.forecastday[0].astro.sunrise, // problem\n    sunSet: data.forecast.forecastday[0].astro.sunset,\n    humidity: data.current.humidity,\n    visibility: data.current.vis_km,\n    feelsLikeCel: data.current.feelslike_c,\n    feelsLikeFel: data.current.feelslike_f,\n  }\n\n  displayExtraWeatherInfo(\n    requiredExtraData.windSpeed,\n    requiredExtraData.uvIndex,\n    requiredExtraData.sunRise,\n    requiredExtraData.sunSet,\n    requiredExtraData.humidity,\n    requiredExtraData.visibility,\n    requiredExtraData.feelsLikeCel,\n    requiredExtraData.feelsLikeFel,\n  )\n}\n\n// console.log the weather api info\n\nasync function getWeatherInfo() {\n  const API_KEY = \"bb2c9baed05042f9857155341231206\"\n  try {\n    const weatherInfo = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityInput.value}`,\n\n      { mode: \"cors\" },\n    )\n\n    const info = await weatherInfo.json()\n    document.querySelector(\"#error\").textContent = \"\"\n\n    getWeatherCardInfo(info)\n    getExtraWeatherInfo(info)\n  } catch (error) {\n    document.querySelector(\"#error\").textContent = \"Please Try Again\"\n  }\n}\n\nsubmitCity.addEventListener(\"click\", () => {\n  const temp = document.querySelector(\"#temperature\")\n  const feels = document.querySelector(\"#feels-like\")\n\n  if (!temp.classList.contains(\"cel\") || !feels.classList.contains(\"cel\")) {\n    document.querySelector(\"#temperature\").classList.add(\"cel\")\n    document.querySelector(\"#feels-like\").classList.add(\"cel\")\n  }\n  getWeatherInfo()\n})\n\n// ------- BLOB Logic-------\n\nconst blob = document.getElementById(\"blob\")\n\ndocument.body.onpointermove = (event) => {\n  const { clientX, clientY } = event\n  blob.animate(\n    {\n      left: `${clientX}px`,\n      top: `${clientY}px`,\n    },\n    { duration: 2500, fill: \"forwards\" },\n  )\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;