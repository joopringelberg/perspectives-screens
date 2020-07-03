var LIB =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/TestBotActie.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://LIB/./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack://LIB/./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nmodule.exports = _inheritsLoose;\n\n//# sourceURL=webpack://LIB/./node_modules/@babel/runtime/helpers/inheritsLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack://LIB/./node_modules/@babel/runtime/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            Object.defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nmodule.exports = _interopRequireWildcard;\n\n//# sourceURL=webpack://LIB/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack://LIB/./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@restart/context/forwardRef.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/context/forwardRef.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.default = forwardRef;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction forwardRef(renderFn, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      propTypes = _ref.propTypes,\n      defaultProps = _ref.defaultProps,\n      _ref$allowFallback = _ref.allowFallback,\n      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,\n      _ref$displayName = _ref.displayName,\n      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;\n\n  var render = function render(props, ref) {\n    return renderFn(props, ref);\n  };\n\n  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {\n    return render(props, null);\n  }, {\n    displayName: displayName,\n    propTypes: propTypes,\n    defaultProps: defaultProps\n  });\n}\n\n//# sourceURL=webpack://LIB/./node_modules/@restart/context/forwardRef.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://LIB/./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelize.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.default = camelize;\nvar rHyphen = /-(.)/g;\n\nfunction camelize(string) {\n  return string.replace(rHyphen, function (_, chr) {\n    return chr.toUpperCase();\n  });\n}\n\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/dom-helpers/util/camelize.js?");

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack://LIB/./node_modules/invariant/browser.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Button.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/Button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ \"./node_modules/react-bootstrap/SafeAnchor.js\"));\n\nvar defaultProps = {\n  variant: 'primary',\n  active: false,\n  disabled: false,\n  type: 'button'\n};\n\nvar Button = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      variant = _ref.variant,\n      size = _ref.size,\n      active = _ref.active,\n      className = _ref.className,\n      block = _ref.block,\n      type = _ref.type,\n      as = _ref.as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"variant\", \"size\", \"active\", \"className\", \"block\", \"type\", \"as\"]);\n  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');\n  var classes = (0, _classnames.default)(className, prefix, active && 'active', prefix + \"-\" + variant, block && prefix + \"-block\", size && prefix + \"-\" + size);\n\n  if (props.href) {\n    return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {\n      as: as,\n      innerRef: ref,\n      className: (0, _classnames.default)(classes, props.disabled && 'disabled')\n    }));\n  }\n\n  var Component = as || 'button';\n  if (ref) props.ref = ref;\n  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    type: type,\n    className: classes\n  }));\n});\n\nButton.displayName = 'Button';\nButton.defaultProps = defaultProps;\nvar _default = Button;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Button.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/ButtonGroup.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/ButtonGroup.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar defaultProps = {\n  vertical: false,\n  toggle: false,\n  role: 'group'\n};\n\nvar ButtonGroup = _react.default.forwardRef(function (props, ref) {\n  var bsPrefix = props.bsPrefix,\n      size = props.size,\n      toggle = props.toggle,\n      vertical = props.vertical,\n      className = props.className,\n      _props$as = props.as,\n      Component = _props$as === void 0 ? 'div' : _props$as,\n      rest = (0, _objectWithoutPropertiesLoose2.default)(props, [\"bsPrefix\", \"size\", \"toggle\", \"vertical\", \"className\", \"as\"]);\n  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-group');\n  var baseClass = prefix;\n  if (vertical) baseClass = prefix + \"-vertical\";\n  return _react.default.createElement(Component, (0, _extends2.default)({}, rest, {\n    ref: ref,\n    className: (0, _classnames.default)(className, baseClass, size && prefix + \"-\" + size, toggle && prefix + \"-toggle\")\n  }));\n});\n\nButtonGroup.displayName = 'ButtonGroup';\nButtonGroup.defaultProps = defaultProps;\nvar _default = ButtonGroup;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/ButtonGroup.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Card.js":
/*!**********************************************!*\
  !*** ./node_modules/react-bootstrap/Card.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./utils/createWithBsPrefix */ \"./node_modules/react-bootstrap/utils/createWithBsPrefix.js\"));\n\nvar _divWithClassName = _interopRequireDefault(__webpack_require__(/*! ./utils/divWithClassName */ \"./node_modules/react-bootstrap/utils/divWithClassName.js\"));\n\nvar _CardContext = _interopRequireDefault(__webpack_require__(/*! ./CardContext */ \"./node_modules/react-bootstrap/CardContext.js\"));\n\nvar _CardImg = _interopRequireDefault(__webpack_require__(/*! ./CardImg */ \"./node_modules/react-bootstrap/CardImg.js\"));\n\nvar DivStyledAsH5 = (0, _divWithClassName.default)('h5');\nvar DivStyledAsH6 = (0, _divWithClassName.default)('h6');\nvar CardBody = (0, _createWithBsPrefix.default)('card-body');\nvar defaultProps = {\n  body: false\n};\n\nvar Card = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      bg = _ref.bg,\n      text = _ref.text,\n      border = _ref.border,\n      body = _ref.body,\n      children = _ref.children,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"className\", \"bg\", \"text\", \"border\", \"body\", \"children\", \"as\"]);\n  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');\n  var cardContext = (0, _react.useMemo)(function () {\n    return {\n      cardHeaderBsPrefix: prefix + \"-header\"\n    };\n  }, [prefix]);\n  return _react.default.createElement(_CardContext.default.Provider, {\n    value: cardContext\n  }, _react.default.createElement(Component, (0, _extends2.default)({\n    ref: ref\n  }, props, {\n    className: (0, _classnames.default)(className, prefix, bg && \"bg-\" + bg, text && \"text-\" + text, border && \"border-\" + border)\n  }), body ? _react.default.createElement(CardBody, null, children) : children));\n});\n\nCard.displayName = 'Card';\nCard.defaultProps = defaultProps;\nCard.Img = _CardImg.default;\nCard.Title = (0, _createWithBsPrefix.default)('card-title', {\n  Component: DivStyledAsH5\n});\nCard.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {\n  Component: DivStyledAsH6\n});\nCard.Body = CardBody;\nCard.Link = (0, _createWithBsPrefix.default)('card-link', {\n  Component: 'a'\n});\nCard.Text = (0, _createWithBsPrefix.default)('card-text', {\n  Component: 'p'\n});\nCard.Header = (0, _createWithBsPrefix.default)('card-header');\nCard.Footer = (0, _createWithBsPrefix.default)('card-footer');\nCard.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');\nvar _default = Card;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Card.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/CardContext.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/CardContext.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _default = _react.default.createContext(null);\n\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/CardContext.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/CardImg.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/CardImg.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar defaultProps = {\n  variant: null\n};\n\nvar CardImg = _react.default.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\nfunction (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      variant = _ref.variant,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'img' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"className\", \"variant\", \"as\"]);\n  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');\n  return _react.default.createElement(Component, (0, _extends2.default)({\n    ref: ref,\n    className: (0, _classnames.default)(variant ? prefix + \"-\" + variant : prefix, className)\n  }, props));\n});\n\nCardImg.displayName = 'CardImg';\nCardImg.defaultProps = defaultProps;\nvar _default = CardImg;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/CardImg.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Col.js":
/*!*********************************************!*\
  !*** ./node_modules/react-bootstrap/Col.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];\n\nvar Col = _react.default.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\nfunction (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"className\", \"as\"]);\n  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');\n  var spans = [];\n  var classes = [];\n  DEVICE_SIZES.forEach(function (brkPoint) {\n    var propValue = props[brkPoint];\n    delete props[brkPoint];\n    var span, offset, order;\n\n    if (propValue != null && typeof propValue === 'object') {\n      var _propValue$span = propValue.span;\n      span = _propValue$span === void 0 ? true : _propValue$span;\n      offset = propValue.offset;\n      order = propValue.order;\n    } else {\n      span = propValue;\n    }\n\n    var infix = brkPoint !== 'xs' ? \"-\" + brkPoint : '';\n    if (span != null) spans.push(span === true ? \"\" + prefix + infix : \"\" + prefix + infix + \"-\" + span);\n    if (order != null) classes.push(\"order\" + infix + \"-\" + order);\n    if (offset != null) classes.push(\"offset\" + infix + \"-\" + offset);\n  });\n\n  if (!spans.length) {\n    spans.push(prefix); // plain 'col'\n  }\n\n  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    ref: ref,\n    className: _classnames.default.apply(void 0, [className].concat(spans, classes))\n  }));\n});\n\nCol.displayName = 'Col';\nvar _default = Col;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Col.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Container.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/Container.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar defaultProps = {\n  fluid: false\n};\n\nvar Container = _react.default.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\nfunction (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      fluid = _ref.fluid,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      className = _ref.className,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"fluid\", \"as\", \"className\"]);\n  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');\n  return _react.default.createElement(Component, (0, _extends2.default)({\n    ref: ref\n  }, props, {\n    className: (0, _classnames.default)(className, fluid ? prefix + \"-fluid\" : prefix)\n  }));\n});\n\nContainer.displayName = 'Container';\nContainer.defaultProps = defaultProps;\nvar _default = Container;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Container.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Feedback.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/Feedback.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar propTypes = {\n  /**\n   * Specify whether the feedback is for valid or invalid fields\n   *\n   * @type {('valid'|'invalid')}\n   */\n  type: _propTypes.default.string.isRequired,\n  as: _propTypes.default.elementType\n};\nvar defaultProps = {\n  type: 'valid'\n};\n\nvar Feedback = _react.default.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\nfunction (_ref, ref) {\n  var _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      className = _ref.className,\n      type = _ref.type,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"as\", \"className\", \"type\"]);\n  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    ref: ref,\n    className: (0, _classnames.default)(className, type && type + \"-feedback\")\n  }));\n});\n\nFeedback.displayName = 'Feedback';\nFeedback.propTypes = propTypes;\nFeedback.defaultProps = defaultProps;\nvar _default = Feedback;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Feedback.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Form.js":
/*!**********************************************!*\
  !*** ./node_modules/react-bootstrap/Form.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./utils/createWithBsPrefix */ \"./node_modules/react-bootstrap/utils/createWithBsPrefix.js\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar _FormGroup = _interopRequireDefault(__webpack_require__(/*! ./FormGroup */ \"./node_modules/react-bootstrap/FormGroup.js\"));\n\nvar _FormControl = _interopRequireDefault(__webpack_require__(/*! ./FormControl */ \"./node_modules/react-bootstrap/FormControl.js\"));\n\nvar _FormCheck = _interopRequireDefault(__webpack_require__(/*! ./FormCheck */ \"./node_modules/react-bootstrap/FormCheck.js\"));\n\nvar _FormLabel = _interopRequireDefault(__webpack_require__(/*! ./FormLabel */ \"./node_modules/react-bootstrap/FormLabel.js\"));\n\nvar _FormText = _interopRequireDefault(__webpack_require__(/*! ./FormText */ \"./node_modules/react-bootstrap/FormText.js\"));\n\nvar defaultProps = {\n  inline: false\n};\n\nvar Form = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      inline = _ref.inline,\n      className = _ref.className,\n      validated = _ref.validated,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'form' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"inline\", \"className\", \"validated\", \"as\"]);\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');\n  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    ref: ref,\n    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + \"-inline\")\n  }));\n});\n\nForm.displayName = 'Form';\nForm.defaultProps = defaultProps;\nForm.Row = (0, _createWithBsPrefix.default)('form-row');\nForm.Group = _FormGroup.default;\nForm.Control = _FormControl.default;\nForm.Check = _FormCheck.default;\nForm.Label = _FormLabel.default;\nForm.Text = _FormText.default;\nvar _default = Form;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Form.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormCheck.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/FormCheck.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ \"./node_modules/react-bootstrap/FormContext.js\"));\n\nvar _Feedback = _interopRequireDefault(__webpack_require__(/*! ./Feedback */ \"./node_modules/react-bootstrap/Feedback.js\"));\n\nvar _FormCheckInput = _interopRequireDefault(__webpack_require__(/*! ./FormCheckInput */ \"./node_modules/react-bootstrap/FormCheckInput.js\"));\n\nvar _FormCheckLabel = _interopRequireDefault(__webpack_require__(/*! ./FormCheckLabel */ \"./node_modules/react-bootstrap/FormCheckLabel.js\"));\n\nvar defaultProps = {\n  type: 'checkbox',\n  inline: false,\n  disabled: false,\n  isValid: false,\n  isInvalid: false,\n  title: ''\n};\n\nvar FormCheck = _react.default.forwardRef(function (_ref, ref) {\n  var id = _ref.id,\n      bsPrefix = _ref.bsPrefix,\n      inline = _ref.inline,\n      disabled = _ref.disabled,\n      isValid = _ref.isValid,\n      isInvalid = _ref.isInvalid,\n      feedback = _ref.feedback,\n      className = _ref.className,\n      style = _ref.style,\n      title = _ref.title,\n      type = _ref.type,\n      label = _ref.label,\n      children = _ref.children,\n      custom = _ref.custom,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"id\", \"bsPrefix\", \"inline\", \"disabled\", \"isValid\", \"isInvalid\", \"feedback\", \"className\", \"style\", \"title\", \"type\", \"label\", \"children\", \"custom\"]);\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check');\n\n  var _useContext = (0, _react.useContext)(_FormContext.default),\n      controlId = _useContext.controlId;\n\n  var innerFormContext = (0, _react.useMemo)(function () {\n    return {\n      controlId: id || controlId,\n      custom: custom\n    };\n  }, [controlId, custom, id]);\n  var hasLabel = label != null && label !== false && !children;\n\n  var input = _react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {\n    type: type,\n    ref: ref,\n    isValid: isValid,\n    isInvalid: isInvalid,\n    isStatic: !hasLabel,\n    disabled: disabled\n  }));\n\n  return _react.default.createElement(_FormContext.default.Provider, {\n    value: innerFormContext\n  }, _react.default.createElement(\"div\", {\n    style: style,\n    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && \"custom-control custom-\" + type, inline && (custom ? 'custom-control' : bsPrefix) + \"-inline\")\n  }, children || _react.default.createElement(_react.default.Fragment, null, input, hasLabel && _react.default.createElement(_FormCheckLabel.default, {\n    title: title\n  }, label), (isValid || isInvalid) && _react.default.createElement(_Feedback.default, {\n    type: isValid ? 'valid' : 'invalid'\n  }, feedback))));\n});\n\nFormCheck.displayName = 'FormCheck';\nFormCheck.defaultProps = defaultProps;\nFormCheck.Input = _FormCheckInput.default;\nFormCheck.Label = _FormCheckLabel.default;\nvar _default = FormCheck;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormCheck.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormCheckInput.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/FormCheckInput.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ \"./node_modules/react-bootstrap/FormContext.js\"));\n\nvar defaultProps = {\n  type: 'checkbox'\n};\n\nvar FormCheckInput = _react.default.forwardRef(function (_ref, ref) {\n  var id = _ref.id,\n      bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      isValid = _ref.isValid,\n      isInvalid = _ref.isInvalid,\n      isStatic = _ref.isStatic,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"id\", \"bsPrefix\", \"className\", \"isValid\", \"isInvalid\", \"isStatic\"]);\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-input');\n\n  var _useContext = (0, _react.useContext)(_FormContext.default),\n      controlId = _useContext.controlId,\n      custom = _useContext.custom;\n\n  return _react.default.createElement(\"input\", (0, _extends2.default)({}, props, {\n    ref: ref,\n    id: id || controlId,\n    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')\n  }));\n});\n\nFormCheckInput.displayName = 'FormCheckInput';\nFormCheckInput.defaultProps = defaultProps;\nvar _default = FormCheckInput;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormCheckInput.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormCheckLabel.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/FormCheckLabel.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ \"./node_modules/react-bootstrap/FormContext.js\"));\n\nvar defaultProps = {\n  type: 'checkbox'\n};\n\nvar FormCheckLabel = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      htmlFor = _ref.htmlFor,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"className\", \"htmlFor\"]);\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-label');\n\n  var _useContext = (0, _react.useContext)(_FormContext.default),\n      controlId = _useContext.controlId,\n      custom = _useContext.custom;\n\n  return _react.default.createElement(\"label\", (0, _extends2.default)({}, props, {\n    ref: ref,\n    htmlFor: htmlFor || controlId,\n    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-label')\n  }));\n});\n\nFormCheckLabel.displayName = 'FormCheckLabel';\nFormCheckLabel.defaultProps = defaultProps;\nvar _default = FormCheckLabel;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormCheckLabel.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormContext.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/FormContext.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar FormContext = _react.default.createContext({\n  controlId: undefined\n});\n\nvar _default = FormContext;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormContext.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormControl.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/FormControl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _warning = _interopRequireDefault(__webpack_require__(/*! warning */ \"./node_modules/warning/warning.js\"));\n\nvar _Feedback = _interopRequireDefault(__webpack_require__(/*! ./Feedback */ \"./node_modules/react-bootstrap/Feedback.js\"));\n\nvar _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ \"./node_modules/react-bootstrap/FormContext.js\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar FormControl = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      type = _ref.type,\n      size = _ref.size,\n      id = _ref.id,\n      className = _ref.className,\n      isValid = _ref.isValid,\n      isInvalid = _ref.isInvalid,\n      plaintext = _ref.plaintext,\n      readOnly = _ref.readOnly,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'input' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"type\", \"size\", \"id\", \"className\", \"isValid\", \"isInvalid\", \"plaintext\", \"readOnly\", \"as\"]);\n\n  var _useContext = (0, _react.useContext)(_FormContext.default),\n      controlId = _useContext.controlId;\n\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-control');\n  var classes;\n\n  if (plaintext) {\n    var _classes;\n\n    classes = (_classes = {}, _classes[bsPrefix + \"-plaintext\"] = true, _classes);\n  } else if (type === 'file') {\n    var _classes2;\n\n    classes = (_classes2 = {}, _classes2[bsPrefix + \"-file\"] = true, _classes2);\n  } else {\n    var _classes3;\n\n    classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + \"-\" + size] = size, _classes3);\n  }\n\n   true ? (0, _warning.default)(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : undefined;\n  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    type: type,\n    ref: ref,\n    readOnly: readOnly,\n    id: id || controlId,\n    className: (0, _classnames.default)(className, classes, isValid && \"is-valid\", isInvalid && \"is-invalid\")\n  }));\n});\n\nFormControl.displayName = 'FormControl';\nFormControl.Feedback = _Feedback.default;\nvar _default = FormControl;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormControl.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/FormGroup.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ \"./node_modules/react-bootstrap/FormContext.js\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar FormGroup = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      children = _ref.children,\n      controlId = _ref.controlId,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"className\", \"children\", \"controlId\", \"as\"]);\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-group');\n  var context = (0, _react.useMemo)(function () {\n    return {\n      controlId: controlId\n    };\n  }, [controlId]);\n  return _react.default.createElement(_FormContext.default.Provider, {\n    value: context\n  }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    ref: ref,\n    className: (0, _classnames.default)(className, bsPrefix)\n  }), children));\n});\n\nFormGroup.displayName = 'FormGroup';\nvar _default = FormGroup;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormGroup.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormLabel.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/FormLabel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _warning = _interopRequireDefault(__webpack_require__(/*! warning */ \"./node_modules/warning/warning.js\"));\n\nvar _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ \"./node_modules/react-bootstrap/Col.js\"));\n\nvar _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ \"./node_modules/react-bootstrap/FormContext.js\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar defaultProps = {\n  column: false,\n  srOnly: false\n};\n\nvar FormLabel = _react.default.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      column = _ref.column,\n      srOnly = _ref.srOnly,\n      className = _ref.className,\n      htmlFor = _ref.htmlFor,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"column\", \"srOnly\", \"className\", \"htmlFor\"]);\n\n  var _useContext = (0, _react.useContext)(_FormContext.default),\n      controlId = _useContext.controlId;\n\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-label');\n  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');\n   true ? (0, _warning.default)(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : undefined;\n  htmlFor = htmlFor || controlId;\n  if (column) return _react.default.createElement(_Col.default, (0, _extends2.default)({\n    as: \"label\",\n    className: classes,\n    htmlFor: htmlFor\n  }, props));\n  return (// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control\n    _react.default.createElement(\"label\", (0, _extends2.default)({\n      ref: ref,\n      className: classes,\n      htmlFor: htmlFor\n    }, props))\n  );\n});\n\nFormLabel.displayName = 'FormLabel';\nFormLabel.defaultProps = defaultProps;\nvar _default = FormLabel;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormLabel.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/FormText.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/FormText.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar FormText = _react.default.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\nfunction (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'small' : _ref$as,\n      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, [\"bsPrefix\", \"className\", \"as\"]);\n  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-text');\n  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n    ref: ref,\n    className: (0, _classnames.default)(className, bsPrefix)\n  }));\n});\n\nFormText.displayName = 'FormText';\nvar _default = FormText;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/FormText.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/Row.js":
/*!*********************************************!*\
  !*** ./node_modules/react-bootstrap/Row.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar Row =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0, _inheritsLoose2.default)(Row, _React$Component);\n\n  function Row() {\n    return _React$Component.apply(this, arguments) || this;\n  }\n\n  var _proto = Row.prototype;\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        bsPrefix = _this$props.bsPrefix,\n        noGutters = _this$props.noGutters,\n        _this$props$as = _this$props.as,\n        Component = _this$props$as === void 0 ? 'div' : _this$props$as,\n        className = _this$props.className,\n        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, [\"bsPrefix\", \"noGutters\", \"as\", \"className\"]);\n    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n      className: (0, _classnames.default)(className, bsPrefix, noGutters && 'no-gutters')\n    }));\n  };\n\n  return Row;\n}(_react.default.Component);\n\nRow.defaultProps = {\n  noGutters: false\n};\n\nvar _default = (0, _ThemeProvider.createBootstrapComponent)(Row, 'row');\n\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Row.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/SafeAnchor.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/SafeAnchor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _createChainedFunction = _interopRequireDefault(__webpack_require__(/*! ./utils/createChainedFunction */ \"./node_modules/react-bootstrap/utils/createChainedFunction.js\"));\n\nfunction isTrivialHref(href) {\n  return !href || href.trim() === '#';\n}\n/**\n * There are situations due to browser quirks or Bootstrap CSS where\n * an anchor tag is needed, when semantically a button tag is the\n * better choice. SafeAnchor ensures that when an anchor is used like a\n * button its accessible. It also emulates input `disabled` behavior for\n * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.\n */\n\n\nvar SafeAnchor =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0, _inheritsLoose2.default)(SafeAnchor, _React$Component);\n\n  function SafeAnchor(props, context) {\n    var _this;\n\n    _this = _React$Component.call(this, props, context) || this;\n    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));\n    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));\n    return _this;\n  }\n\n  var _proto = SafeAnchor.prototype;\n\n  _proto.handleClick = function handleClick(event) {\n    var _this$props = this.props,\n        disabled = _this$props.disabled,\n        href = _this$props.href,\n        onClick = _this$props.onClick;\n\n    if (disabled || isTrivialHref(href)) {\n      event.preventDefault();\n    }\n\n    if (disabled) {\n      event.stopPropagation();\n      return;\n    }\n\n    if (onClick) {\n      onClick(event);\n    }\n  };\n\n  _proto.handleKeyDown = function handleKeyDown(event) {\n    if (event.key === ' ') {\n      event.preventDefault();\n      this.handleClick(event);\n    }\n  };\n\n  _proto.render = function render() {\n    var _this$props2 = this.props,\n        _this$props2$as = _this$props2.as,\n        Component = _this$props2$as === void 0 ? 'a' : _this$props2$as,\n        disabled = _this$props2.disabled,\n        onKeyDown = _this$props2.onKeyDown,\n        innerRef = _this$props2.innerRef,\n        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, [\"as\", \"disabled\", \"onKeyDown\", \"innerRef\"]);\n\n    if (isTrivialHref(props.href)) {\n      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node\n      // otherwise, the cursor incorrectly styled (except with role='button')\n\n      props.href = props.href || '#';\n    }\n\n    if (disabled) {\n      props.tabIndex = -1;\n      props['aria-disabled'] = true;\n    }\n\n    if (innerRef) props.ref = innerRef;\n    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n      onClick: this.handleClick,\n      onKeyDown: (0, _createChainedFunction.default)(this.handleKeyDown, onKeyDown)\n    }));\n  };\n\n  return SafeAnchor;\n}(_react.default.Component);\n\nvar _default = SafeAnchor;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/SafeAnchor.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/ThemeProvider.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/ThemeProvider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.useBootstrapPrefix = useBootstrapPrefix;\nexports.createBootstrapComponent = createBootstrapComponent;\nexports.default = exports.ThemeConsumer = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\"));\n\nvar _forwardRef = _interopRequireDefault(__webpack_require__(/*! @restart/context/forwardRef */ \"./node_modules/@restart/context/forwardRef.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar ThemeContext = _react.default.createContext(new Map());\n\nvar Consumer = ThemeContext.Consumer,\n    Provider = ThemeContext.Provider;\nexports.ThemeConsumer = Consumer;\n\nvar ThemeProvider =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);\n\n  function ThemeProvider() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n    _this.prefixes = new Map();\n    Object.keys(_this.props.prefixes).forEach(function (key) {\n      _this.prefixes.set(key, _this.props.prefixes[key]);\n    });\n    return _this;\n  }\n\n  var _proto = ThemeProvider.prototype;\n\n  _proto.render = function render() {\n    return _react.default.createElement(Provider, {\n      value: this.prefixes\n    }, this.props.children);\n  };\n\n  return ThemeProvider;\n}(_react.default.Component);\n\nfunction useBootstrapPrefix(prefix, defaultPrefix) {\n  var prefixes = (0, _react.useContext)(ThemeContext);\n  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;\n}\n\nfunction createBootstrapComponent(Component, opts) {\n  if (typeof opts === 'string') opts = {\n    prefix: opts\n  };\n  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref\n\n  var _opts = opts,\n      prefix = _opts.prefix,\n      _opts$forwardRefAs = _opts.forwardRefAs,\n      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;\n  return (0, _forwardRef.default)(function (_ref, ref) {\n    var props = (0, _extends2.default)({}, _ref);\n    props[forwardRefAs] = ref;\n    var prefixes = (0, _react.useContext)(ThemeContext);\n    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n      // eslint-disable-next-line react/prop-types\n      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix\n    }));\n  }, {\n    displayName: \"Bootstrap(\" + (Component.displayName || Component.name) + \")\"\n  });\n}\n\nvar _default = ThemeProvider;\nexports.default = _default;\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/ThemeProvider.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/ToggleButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/ToggleButton.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ \"./node_modules/react-bootstrap/Button.js\"));\n\nvar noop = function noop() {};\n\nvar ToggleButton =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0, _inheritsLoose2.default)(ToggleButton, _React$Component);\n\n  function ToggleButton() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n    _this.state = {\n      focused: false\n    };\n\n    _this.handleFocus = function (e) {\n      if (e.target.tagName === 'INPUT') _this.setState({\n        focused: true\n      });\n    };\n\n    _this.handleBlur = function (e) {\n      if (e.target.tagName === 'INPUT') _this.setState({\n        focused: false\n      });\n    };\n\n    return _this;\n  }\n\n  var _proto = ToggleButton.prototype;\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        children = _this$props.children,\n        name = _this$props.name,\n        className = _this$props.className,\n        checked = _this$props.checked,\n        type = _this$props.type,\n        onChange = _this$props.onChange,\n        value = _this$props.value,\n        disabled = _this$props.disabled,\n        inputRef = _this$props.inputRef,\n        innerRef = _this$props.innerRef,\n        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, [\"children\", \"name\", \"className\", \"checked\", \"type\", \"onChange\", \"value\", \"disabled\", \"inputRef\", \"innerRef\"]);\n    var focused = this.state.focused;\n    return _react.default.createElement(_Button.default, (0, _extends2.default)({}, props, {\n      ref: innerRef,\n      className: (0, _classnames.default)(className, focused && 'focus', disabled && 'disabled'),\n      type: null,\n      active: !!checked,\n      as: \"label\"\n    }), _react.default.createElement(\"input\", {\n      name: name,\n      type: type,\n      value: value,\n      ref: inputRef,\n      autoComplete: \"off\",\n      checked: !!checked,\n      disabled: !!disabled,\n      onFocus: this.handleFocus,\n      onBlur: this.handleBlur,\n      onChange: onChange || noop\n    }), children);\n  };\n\n  return ToggleButton;\n}(_react.default.Component);\n\nvar _default = _react.default.forwardRef(function (props, ref) {\n  return _react.default.createElement(ToggleButton, (0, _extends2.default)({\n    innerRef: ref\n  }, props));\n});\n\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/ToggleButton.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/ToggleButtonGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/ToggleButtonGroup.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\"));\n\nvar _uncontrollable = _interopRequireDefault(__webpack_require__(/*! uncontrollable */ \"./node_modules/uncontrollable/index.js\"));\n\nvar _createChainedFunction = _interopRequireDefault(__webpack_require__(/*! ./utils/createChainedFunction */ \"./node_modules/react-bootstrap/utils/createChainedFunction.js\"));\n\nvar _ElementChildren = __webpack_require__(/*! ./utils/ElementChildren */ \"./node_modules/react-bootstrap/utils/ElementChildren.js\");\n\nvar _ButtonGroup = _interopRequireDefault(__webpack_require__(/*! ./ButtonGroup */ \"./node_modules/react-bootstrap/ButtonGroup.js\"));\n\nvar _ToggleButton = _interopRequireDefault(__webpack_require__(/*! ./ToggleButton */ \"./node_modules/react-bootstrap/ToggleButton.js\"));\n\nvar defaultProps = {\n  type: 'radio'\n};\n\nvar ToggleButtonGroup =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0, _inheritsLoose2.default)(ToggleButtonGroup, _React$Component);\n\n  function ToggleButtonGroup() {\n    return _React$Component.apply(this, arguments) || this;\n  }\n\n  var _proto = ToggleButtonGroup.prototype;\n\n  _proto.getValues = function getValues() {\n    var value = this.props.value;\n    return value == null ? [] : [].concat(value);\n  };\n\n  _proto.handleToggle = function handleToggle(value, event) {\n    var _this$props = this.props,\n        type = _this$props.type,\n        onChange = _this$props.onChange;\n    var values = this.getValues();\n    var isActive = values.indexOf(value) !== -1;\n\n    if (type === 'radio') {\n      if (!isActive) onChange(value, event);\n      return;\n    }\n\n    if (isActive) {\n      onChange(values.filter(function (n) {\n        return n !== value;\n      }), event);\n    } else {\n      onChange([].concat(values, [value]), event);\n    }\n  };\n\n  _proto.render = function render() {\n    var _this = this;\n\n    var _this$props2 = this.props,\n        children = _this$props2.children,\n        type = _this$props2.type,\n        name = _this$props2.name,\n        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, [\"children\", \"type\", \"name\"]);\n    delete props.onChange;\n    delete props.value;\n    var values = this.getValues();\n    !(type !== 'radio' || !!name) ?  true ? (0, _invariant.default)(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to \"radio\"') : undefined : void 0;\n    return _react.default.createElement(_ButtonGroup.default, (0, _extends2.default)({}, props, {\n      toggle: true\n    }), (0, _ElementChildren.map)(children, function (child) {\n      var _child$props = child.props,\n          value = _child$props.value,\n          onChange = _child$props.onChange;\n\n      var handler = function handler(e) {\n        return _this.handleToggle(value, e);\n      };\n\n      return _react.default.cloneElement(child, {\n        type: type,\n        name: child.name || name,\n        checked: values.indexOf(value) !== -1,\n        onChange: (0, _createChainedFunction.default)(onChange, handler)\n      });\n    }));\n  };\n\n  return ToggleButtonGroup;\n}(_react.default.Component);\n\nToggleButtonGroup.defaultProps = defaultProps;\nvar UncontrolledToggleButtonGroup = (0, _uncontrollable.default)(ToggleButtonGroup, {\n  value: 'onChange'\n});\nUncontrolledToggleButtonGroup.Button = _ToggleButton.default;\nvar _default = UncontrolledToggleButtonGroup;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/ToggleButtonGroup.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/utils/ElementChildren.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/utils/ElementChildren.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.map = map;\nexports.forEach = forEach;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\n/**\n * Iterates through children that are typically specified as `props.children`,\n * but only maps over children that are \"valid elements\".\n *\n * The mapFunction provided index will be normalised to the components mapped,\n * so an invalid component would not increase the index.\n *\n */\nfunction map(children, func) {\n  var index = 0;\n  return _react.default.Children.map(children, function (child) {\n    return _react.default.isValidElement(child) ? func(child, index++) : child;\n  });\n}\n/**\n * Iterates through children that are \"valid elements\".\n *\n * The provided forEachFunc(child, index) will be called for each\n * leaf child with the index reflecting the position relative to \"valid components\".\n */\n\n\nfunction forEach(children, func) {\n  var index = 0;\n\n  _react.default.Children.forEach(children, function (child) {\n    if (_react.default.isValidElement(child)) func(child, index++);\n  });\n}\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/utils/ElementChildren.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/utils/createChainedFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-bootstrap/utils/createChainedFunction.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.default = void 0;\n\n/**\n * Safe chained function\n *\n * Will only create a new function if needed,\n * otherwise will pass back existing functions or null.\n *\n * @param {function} functions to chain\n * @returns {function|null}\n */\nfunction createChainedFunction() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  return funcs.filter(function (f) {\n    return f != null;\n  }).reduce(function (acc, f) {\n    if (typeof f !== 'function') {\n      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');\n    }\n\n    if (acc === null) return f;\n    return function chainedFunction() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      acc.apply(this, args);\n      f.apply(this, args);\n    };\n  }, null);\n}\n\nvar _default = createChainedFunction;\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/utils/createChainedFunction.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/utils/createWithBsPrefix.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/utils/createWithBsPrefix.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = createWithBsPrefix;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _camelize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/camelize */ \"./node_modules/dom-helpers/util/camelize.js\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ../ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar pascalCase = function pascalCase(str) {\n  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);\n};\n\nfunction createWithBsPrefix(prefix, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$displayName = _ref.displayName,\n      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,\n      _ref$Component = _ref.Component,\n      Component = _ref$Component === void 0 ? 'div' : _ref$Component,\n      defaultProps = _ref.defaultProps;\n\n  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types\n  function (_ref2, ref) {\n    var className = _ref2.className,\n        bsPrefix = _ref2.bsPrefix,\n        _ref2$as = _ref2.as,\n        Tag = _ref2$as === void 0 ? Component : _ref2$as,\n        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, [\"className\", \"bsPrefix\", \"as\"]);\n    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);\n    return _react.default.createElement(Tag, (0, _extends2.default)({\n      ref: ref,\n      className: (0, _classnames.default)(className, resolvedPrefix)\n    }, props));\n  });\n\n  BsComponent.defaultProps = defaultProps;\n  BsComponent.displayName = displayName;\n  return BsComponent;\n}\n\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/utils/createWithBsPrefix.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/utils/divWithClassName.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/utils/divWithClassName.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _default = function _default(className) {\n  return _react.default.forwardRef(function (p, ref) {\n    return _react.default.createElement(\"div\", (0, _extends2.default)({}, p, {\n      ref: ref,\n      className: (0, _classnames.default)(p.className, className)\n    }));\n  });\n};\n\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/utils/divWithClassName.js?");

/***/ }),

/***/ "./node_modules/uncontrollable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/uncontrollable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.default = uncontrollable;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\"));\n\nvar Utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ \"./node_modules/uncontrollable/utils.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nfunction uncontrollable(Component, controlledValues, methods) {\n  if (methods === void 0) {\n    methods = [];\n  }\n\n  var displayName = Component.displayName || Component.name || 'Component';\n  var canAcceptRef = Utils.canAcceptRef(Component);\n  var controlledProps = Object.keys(controlledValues);\n  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);\n  !(canAcceptRef || !methods.length) ?  true ? (0, _invariant.default)(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : undefined : void 0;\n\n  var UncontrolledComponent =\n  /*#__PURE__*/\n  function (_React$Component) {\n    _inheritsLoose(UncontrolledComponent, _React$Component);\n\n    function UncontrolledComponent() {\n      var _this;\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n      _this.handlers = Object.create(null);\n      controlledProps.forEach(function (propName) {\n        var handlerName = controlledValues[propName];\n\n        var handleChange = function handleChange(value) {\n          if (_this.props[handlerName]) {\n            var _this$props;\n\n            _this._notifying = true;\n\n            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n              args[_key2 - 1] = arguments[_key2];\n            }\n\n            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));\n\n            _this._notifying = false;\n          }\n\n          _this._values[propName] = value;\n          if (!_this.unmounted) _this.forceUpdate();\n        };\n\n        _this.handlers[handlerName] = handleChange;\n      });\n      if (methods.length) _this.attachRef = function (ref) {\n        _this.inner = ref;\n      };\n      return _this;\n    }\n\n    var _proto = UncontrolledComponent.prototype;\n\n    _proto.shouldComponentUpdate = function shouldComponentUpdate() {\n      //let the forceUpdate trigger the update\n      return !this._notifying;\n    };\n\n    _proto.componentWillMount = function componentWillMount() {\n      var _this2 = this;\n\n      var props = this.props;\n      this._values = Object.create(null);\n      controlledProps.forEach(function (key) {\n        _this2._values[key] = props[Utils.defaultKey(key)];\n      });\n    };\n\n    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n      var _this3 = this;\n\n      var props = this.props;\n      controlledProps.forEach(function (key) {\n        /**\n         * If a prop switches from controlled to Uncontrolled\n         * reset its value to the defaultValue\n         */\n        if (!Utils.isProp(nextProps, key) && Utils.isProp(props, key)) {\n          _this3._values[key] = nextProps[Utils.defaultKey(key)];\n        }\n      });\n    };\n\n    _proto.componentWillUnmount = function componentWillUnmount() {\n      this.unmounted = true;\n    };\n\n    _proto.render = function render() {\n      var _this4 = this;\n\n      var _this$props2 = this.props,\n          innerRef = _this$props2.innerRef,\n          props = _objectWithoutPropertiesLoose(_this$props2, [\"innerRef\"]);\n\n      PROPS_TO_OMIT.forEach(function (prop) {\n        delete props[prop];\n      });\n      var newProps = {};\n      controlledProps.forEach(function (propName) {\n        var propValue = _this4.props[propName];\n        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];\n      });\n      return _react.default.createElement(Component, _extends({}, props, newProps, this.handlers, {\n        ref: innerRef || this.attachRef\n      }));\n    };\n\n    return UncontrolledComponent;\n  }(_react.default.Component);\n\n  UncontrolledComponent.displayName = \"Uncontrolled(\" + displayName + \")\";\n  UncontrolledComponent.propTypes = _extends({\n    innerRef: function innerRef() {}\n  }, Utils.uncontrolledPropTypes(controlledValues, displayName));\n  methods.forEach(function (method) {\n    UncontrolledComponent.prototype[method] = function $proxiedMethod() {\n      var _this$inner;\n\n      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);\n    };\n  });\n  var WrappedComponent = UncontrolledComponent;\n\n  if (_react.default.forwardRef) {\n    WrappedComponent = _react.default.forwardRef(function (props, ref) {\n      return _react.default.createElement(UncontrolledComponent, _extends({}, props, {\n        innerRef: ref\n      }));\n    });\n    WrappedComponent.propTypes = UncontrolledComponent.propTypes;\n  }\n\n  WrappedComponent.ControlledComponent = Component;\n  /**\n   * useful when wrapping a Component and you want to control\n   * everything\n   */\n\n  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {\n    if (additions === void 0) {\n      additions = {};\n    }\n\n    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);\n  };\n\n  return WrappedComponent;\n}\n\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/uncontrollable/index.js?");

/***/ }),

/***/ "./node_modules/uncontrollable/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/uncontrollable/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.uncontrolledPropTypes = uncontrolledPropTypes;\nexports.isProp = isProp;\nexports.defaultKey = defaultKey;\nexports.canAcceptRef = canAcceptRef;\n\nvar _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar noop = function noop() {};\n\nfunction readOnlyPropType(handler, name) {\n  return function (props, propName) {\n    if (props[propName] !== undefined) {\n      if (!props[handler]) {\n        return new Error(\"You have provided a `\" + propName + \"` prop to `\" + name + \"` \" + (\"without an `\" + handler + \"` handler prop. This will render a read-only field. \") + (\"If the field should be mutable use `\" + defaultKey(propName) + \"`. \") + (\"Otherwise, set `\" + handler + \"`.\"));\n      }\n    }\n  };\n}\n\nfunction uncontrolledPropTypes(controlledValues, displayName) {\n  var propTypes = {};\n  Object.keys(controlledValues).forEach(function (prop) {\n    // add default propTypes for folks that use runtime checks\n    propTypes[defaultKey(prop)] = noop;\n\n    if (true) {\n      var handler = controlledValues[prop];\n      !(typeof handler === 'string' && handler.trim().length) ?  true ? (0, _invariant.default)(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : undefined : void 0;\n      propTypes[prop] = readOnlyPropType(handler, displayName);\n    }\n  });\n  return propTypes;\n}\n\nfunction isProp(props, prop) {\n  return props[prop] !== undefined;\n}\n\nfunction defaultKey(key) {\n  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);\n}\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n\nfunction canAcceptRef(component) {\n  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);\n}\n\n//# sourceURL=webpack://LIB/./node_modules/uncontrollable/utils.js?");

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar __DEV__ = \"development\" !== 'production';\n\nvar warning = function() {};\n\nif (__DEV__) {\n  var printWarning = function printWarning(format, args) {\n    var len = arguments.length;\n    args = new Array(len > 1 ? len - 1 : 0);\n    for (var key = 1; key < len; key++) {\n      args[key - 1] = arguments[key];\n    }\n    var argIndex = 0;\n    var message = 'Warning: ' +\n      format.replace(/%s/g, function() {\n        return args[argIndex++];\n      });\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  }\n\n  warning = function(condition, format, args) {\n    var len = arguments.length;\n    args = new Array(len > 2 ? len - 2 : 0);\n    for (var key = 2; key < len; key++) {\n      args[key - 2] = arguments[key];\n    }\n    if (format === undefined) {\n      throw new Error(\n          '`warning(condition, format, ...args)` requires a warning ' +\n          'message argument'\n      );\n    }\n    if (!condition) {\n      printWarning.apply(null, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n\n\n//# sourceURL=webpack://LIB/./node_modules/warning/warning.js?");

/***/ }),

/***/ "./src/TestBotActie.js":
/*!*****************************!*\
  !*** ./src/TestBotActie.js ***!
  \*****************************/
/*! exports provided: tests_Tester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tests_Tester\", function() { return tests_Tester; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/Button.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/Form.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ToggleButtonGroup */ \"./node_modules/react-bootstrap/ToggleButtonGroup.js\");\n/* harmony import */ var react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ToggleButton */ \"./node_modules/react-bootstrap/ToggleButton.js\");\n/* harmony import */ var react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/Container.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/Row.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/Col.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/Card.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__);\n // 43\n\n\n\n\n\n\n\n\n\n // model:TestBotActie$Tests$Gebruiker\n\nfunction tests_Tester() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"App-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Actie voorbeeld formulier\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"Rol\"], {\n    rol: \"TestInstances\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"ExternalViewOfBoundContext\"], {\n    viewname: \"allProperties\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TestBotActie, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"CreateContext\"], {\n    rolname: \"TestInstances\",\n    contextname: \"model:TestBotActie$Test\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateButton, null)))))));\n}\n\nfunction TestBotActie(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PSView\"].Consumer, null, value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {\n    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a,\n    controlId: \"testBotActie\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, {\n    column: true,\n    sm: \"8\"\n  }, \"Afhankelijke property\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    sm: \"4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {\n    readOnly: true,\n    plaintext: \"true\",\n    value: value.propval(\"V2\")\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {\n    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a,\n    controlId: \"propsEqual\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, {\n    column: true,\n    sm: \"8\"\n  }, \"Zijn properties gelijk?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    sm: \"4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {\n    readOnly: true,\n    plaintext: \"true\",\n    value: value.propval(\"PropsEqual\")\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"SetProperty\"], {\n    propertyname: \"Trigger\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TriggerInput, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"SetProperty\"], {\n    propertyname: \"V1\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(V1Input, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"ContextOfRole\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"DeleteContext\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeleteButton, null))))));\n}\n\nfunction TriggerInput(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {\n    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a,\n    controlId: \"TriggerInput\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    sm: \"8\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, null, \"Actie aan of uit?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {\n    className: \"text-muted\"\n  }, \"Alleen als de trigger 'true' is, wordt de onafhankelijke property naar de afhankelijke gekopieerd.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    sm: \"4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    type: \"checkbox\",\n    defaultValue: props.defaultvalue,\n    onBlur: e => props.setvalue(e.target.value)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    value: \"true\"\n  }, \"true\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    value: \"false\"\n  }, \"false\"))));\n}\n\nfunction V1Input(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {\n    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a,\n    controlId: \"v1Input\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    sm: \"8\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, null, \"Geef de onafhankelijke property een waarde:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    sm: \"4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {\n    defaultValue: props.defaultvalue,\n    onBlur: e => props.setvalue(e.target.value)\n  })));\n}\n\nfunction CreateButton(props) {\n  const ctxt = {\n    \"rollen\": {\n      \"model:TestBotActie$Test$Tester\": [{\n        \"properties\": {},\n        \"binding\": \"usr:Me\"\n      }]\n    },\n    \"externeProperties\": {\n      \"model:TestBotActie$Test$External$Trigger\": [\"true\"]\n    }\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"primary\",\n    onClick: e => props.create(ctxt)\n  }, \"Voeg een test toe\");\n}\n\nfunction DeleteButton(props) {\n  // return (\n  // <PSRol.Consumer>\n  //   {value => <Button variant=\"danger\" onClick={e => {props.delete(); value.removeRol()}}>Verwijder</Button>}\n  // </PSRol.Consumer>\n  // );\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"danger\",\n    onClick: e => props.delete()\n  }, \"Verwijder\");\n}\n\n//# sourceURL=webpack://LIB/./src/TestBotActie.js?");

/***/ }),

/***/ "perspectives-react":
/*!************************************!*\
  !*** external "PerspectivesReact" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PerspectivesReact;\n\n//# sourceURL=webpack://LIB/external_%22PerspectivesReact%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PropTypes;\n\n//# sourceURL=webpack://LIB/external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack://LIB/external_%22React%22?");

/***/ })

/******/ });

export const tests_Tester = LIB['tests_Tester'];
