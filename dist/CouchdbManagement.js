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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CouchdbManagement.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CouchdbManagement.js":
/*!**********************************!*\
  !*** ./src/CouchdbManagement.js ***!
  \**********************************/
/*! exports provided: couchdbManagementApp_Manager, couchdbServer_Admin, repository_ServerAdmin, repository_Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"couchdbManagementApp_Manager\", function() { return couchdbManagementApp_Manager; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"couchdbServer_Admin\", function() { return couchdbServer_Admin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repository_ServerAdmin\", function() { return repository_ServerAdmin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repository_Admin\", function() { return repository_Admin; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n //1\n\n\n\nfunction couchdbManagementApp_Manager() {\n  function CouchdbServers() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      id: \"couchdbServerId\"\n    }, \"Couchdb servers\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n      viewname: \"allProperties\",\n      cardcolumn: \"Name\",\n      roletype: \"CouchdbServers\",\n      contexttocreate: \"model:CouchdbManagement$CouchdbServer\",\n      createButton: true // roleRepresentation\n      ,\n      behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addRemoveRoleFromContext\"]]\n    }))));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"couchdbServerId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CouchdbServers, null));\n}\nfunction couchdbServer_Admin() {\n  function Repositories() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      id: \"repositoryId\"\n    }, \"Repositories\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n      viewname: \"allProperties\",\n      cardcolumn: \"Name\",\n      roletype: \"Repositories\",\n      contexttocreate: \"model:CouchdbManagement$Repository\",\n      createButton: true // roleRepresentation\n      ,\n      behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addRemoveRoleFromContext\"]]\n    }))));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"repositoryId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"This Server\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"External\",\n    viewname: \"allProperties\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"My credentials on this server\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"Admin\",\n    viewname: \"AdminProps\",\n    cardprop: \"Achternaam\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Repositories, null));\n}\nfunction repository_ServerAdmin() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"thisRepositoryId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    id: \"thisRepositoryId\"\n  }, \"This Repository\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"External\",\n    viewname: \"allProperties\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleForm\"], {\n    rolename: \"Admin\",\n    viewname: \"allProperties\"\n  }));\n}\nfunction repository_Admin() {\n  // Authors, Accounts, AvailableModels\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"thisRepositoryId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    id: \"couchdbServerId\"\n  }, \"This Repository\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n    viewname: \"AuthorForAdmin\",\n    cardcolumn: \"Voornaam\",\n    roletype: \"Authors\",\n    createButton: true // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addRemoveRoleFromContext\"], perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addFillWithRole\"]]\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n    viewname: \"allProperties\",\n    cardcolumn: \"Voornaam\",\n    roletype: \"Accounts\",\n    createButton: true // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addRemoveRoleFromContext\"]]\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"RoleTable\"], {\n    viewname: \"allProperties\",\n    cardcolumn: \"Name\",\n    roletype: \"AvailableModels\",\n    createButton: true // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_1__[\"addRemoveRoleFromContext\"]]\n  }))));\n}\n\n//# sourceURL=webpack://perspectivesScreens/./src/CouchdbManagement.js?");

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


const _perspectivesScreens$couchdbManagementApp_Manager = perspectivesScreens['couchdbManagementApp_Manager'];
const _perspectivesScreens$couchdbServer_Admin = perspectivesScreens['couchdbServer_Admin'];
const _perspectivesScreens$repository_ServerAdmin = perspectivesScreens['repository_ServerAdmin'];
const _perspectivesScreens$repository_Admin = perspectivesScreens['repository_Admin'];

export {
    _perspectivesScreens$couchdbManagementApp_Manager as couchdbManagementApp_Manager,
    _perspectivesScreens$couchdbServer_Admin as couchdbServer_Admin,
    _perspectivesScreens$repository_ServerAdmin as repository_ServerAdmin,
    _perspectivesScreens$repository_Admin as repository_Admin
}