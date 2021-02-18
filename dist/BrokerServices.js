var perspectivesScreens =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/BrokerServices.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BrokerServices.js":
/*!*******************************!*\
  !*** ./src/BrokerServices.js ***!
  \*******************************/
/*! exports provided: brokerServices_Guest, brokerService_Administrator, brokerContract_Administrator, brokerContract_AccountHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brokerServices_Guest\", function() { return brokerServices_Guest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brokerService_Administrator\", function() { return brokerService_Administrator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brokerContract_Administrator\", function() { return brokerContract_Administrator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brokerContract_AccountHolder\", function() { return brokerContract_AccountHolder; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n // ###11###\n\n\n\nfunction brokerServices_Guest() {\n  function BrokersAndContracts() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      id: \"managedModelBrokerId\"\n    }, \"Managed brokers\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n      viewname: \"allProperties\",\n      roletype: \"ManagedBrokers\",\n      cardcolumn: \"Name\",\n      contexttocreate: \"model:BrokerServices$BrokerService\",\n      behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"]]\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      id: \"managedModelId\"\n    }, \"Broker contracts\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n      viewname: \"Account\",\n      roletype: \"Contracts\",\n      cardcolumn: \"LastNameOfAccountHolder\",\n      createButton: false,\n      behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"]]\n    }))));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PerspectivesContainer\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"managedModelBrokerId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrokersAndContracts, null));\n}\nfunction brokerService_Administrator() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PerspectivesContainer\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"pb-3 pt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"BackButton\"], {\n    buttontext: \"Back to Brokers and Contracts\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Broker Service\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"Administrator\",\n    viewname: \"Admin\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"External\",\n    viewname: \"allProperties\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"pb-3 pt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Accounts\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"pb-3 pt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n    viewname: \"Account\",\n    roletype: \"Accounts\",\n    cardcolumn: \"FirstNameOfAccountHolder\",\n    contexttocreate: \"model:BrokerServices$BrokerContract\",\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"]]\n  }))));\n}\nfunction brokerContract_Administrator() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PerspectivesContainer\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"pb-3 pt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"BackButton\"], {\n    buttontext: \"Back to Brokers and Contracts\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Broker Contract\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"Administrator\",\n    viewname: \"Confirmation\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"AccountHolder\",\n    viewname: \"ForAdministrator\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"Invitation\"], null));\n}\nfunction brokerContract_AccountHolder() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"PerspectivesContainer\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"pb-3 pt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"BackButton\"], {\n    buttontext: \"Back to Brokers and Contracts\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Broker Contract\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"External\",\n    viewname: \"ForAccountHolder\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"AccountHolder\",\n    viewname: \"ForAccountHolder\"\n  }));\n}\n\n//# sourceURL=webpack://perspectivesScreens/./src/BrokerServices.js?");

/***/ }),

/***/ "perspectives-react":
/*!************************************!*\
  !*** external "PerspectivesReact" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PerspectivesReact;\n\n//# sourceURL=webpack://perspectivesScreens/external_%22PerspectivesReact%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack://perspectivesScreens/external_%22React%22?");

/***/ }),

/***/ "react-bootstrap":
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactBootstrap;\n\n//# sourceURL=webpack://perspectivesScreens/external_%22ReactBootstrap%22?");

/***/ })

/******/ });


const _perspectivesScreens$brokerServices_Guest = perspectivesScreens['brokerServices_Guest'];
const _perspectivesScreens$brokerService_Administrator = perspectivesScreens['brokerService_Administrator'];
const _perspectivesScreens$brokerContract_Administrator = perspectivesScreens['brokerContract_Administrator'];
const _perspectivesScreens$brokerContract_AccountHolder = perspectivesScreens['brokerContract_AccountHolder'];

export {
    _perspectivesScreens$brokerServices_Guest as brokerServices_Guest,
    _perspectivesScreens$brokerService_Administrator as brokerService_Administrator,
    _perspectivesScreens$brokerContract_Administrator as brokerContract_Administrator,
    _perspectivesScreens$brokerContract_AccountHolder as brokerContract_AccountHolder
}