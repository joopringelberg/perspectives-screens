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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Perspectives.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/react-bootstrap/Row.js":
/*!*********************************************!*\
  !*** ./node_modules/react-bootstrap/Row.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/ThemeProvider.js\");\n\nvar Row =\n/*#__PURE__*/\nfunction (_React$Component) {\n  (0, _inheritsLoose2.default)(Row, _React$Component);\n\n  function Row() {\n    return _React$Component.apply(this, arguments) || this;\n  }\n\n  var _proto = Row.prototype;\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        bsPrefix = _this$props.bsPrefix,\n        noGutters = _this$props.noGutters,\n        _this$props$as = _this$props.as,\n        Component = _this$props$as === void 0 ? 'div' : _this$props$as,\n        className = _this$props.className,\n        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, [\"bsPrefix\", \"noGutters\", \"as\", \"className\"]);\n    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {\n      className: (0, _classnames.default)(className, bsPrefix, noGutters && 'no-gutters')\n    }));\n  };\n\n  return Row;\n}(_react.default.Component);\n\nRow.defaultProps = {\n  noGutters: false\n};\n\nvar _default = (0, _ThemeProvider.createBootstrapComponent)(Row, 'row');\n\nexports.default = _default;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://LIB/./node_modules/react-bootstrap/Row.js?");

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

/***/ "./src/Perspectives.js":
/*!*****************************!*\
  !*** ./src/Perspectives.js ***!
  \*****************************/
/*! exports provided: buitenRolBeschrijving */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buitenRolBeschrijving\", function() { return buitenRolBeschrijving; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/Container.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/Row.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/Col.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/Card.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__);\n// The screen for model:Perspectives$PerspectivesSysteem.\n\n\n\n\n\n\nfunction buitenRolBeschrijving() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"Context\"], {\n    contexttype: \"model:Perspectives$PerspectivesSysteem\",\n    contextinstance: \"model:User$MijnSysteem\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"BindRol\"], {\n    rol: \"modelsInUse\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PSRolBinding\"].Consumer, null, value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    lg: 6,\n    onDragOver: ev => ev.preventDefault(),\n    onDrop: ev => value.bindrol(JSON.parse(ev.dataTransfer.getData(\"PSRol\"))),\n    className: \"border p-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"In gebruik\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"Rol\"], {\n    rol: \"modelsInUse\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PSRol\"].Consumer, null, value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    draggable: true,\n    key: value.rolinstance,\n    onDragStart: ev => ev.dataTransfer.setData(\"PSRol\", JSON.stringify(value))\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RolBinding\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"View\"], {\n    viewname: \"allProperties\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PSView\"].Consumer, null, value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, value.contextLabel)))))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    lg: 6,\n    className: \"border p-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Beschikbaar\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"Rol\"], {\n    rol: \"modellen\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"View\"], {\n    viewname: \"allProperties\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PSView\"].Consumer, null, value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    draggable: true,\n    key: value.rolinstance,\n    onDragStart: ev => ev.dataTransfer.setData(\"PSRol\", JSON.stringify(value))\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, value.contextLabel))))))))));\n}\n\n//# sourceURL=webpack://LIB/./src/Perspectives.js?");

/***/ }),

/***/ "perspectives-react":
/*!************************************!*\
  !*** external "PerspectivesReact" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PerspectivesReact;\n\n//# sourceURL=webpack://LIB/external_%22PerspectivesReact%22?");

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

export const buitenRolBeschrijving = LIB['buitenRolBeschrijving'];
