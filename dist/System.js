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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/System.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/System.js":
/*!***********************!*\
  !*** ./src/System.js ***!
  \***********************/
/*! exports provided: perspectivesSystem_User_uitgeschakeld, invitation_Guest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perspectivesSystem_User_uitgeschakeld\", function() { return perspectivesSystem_User_uitgeschakeld; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invitation_Guest\", function() { return invitation_Guest; });\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n// The screen for model:System$PerspectivesSystem. 63\nvar React = __webpack_require__(/*! react */ \"react\");\n\n\n\nfunction perspectivesSystem_User_uitgeschakeld() {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    role: \"application\",\n    \"aria-labelledby\": \"systemId\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], {\n    defaultActiveKey: \"chooseapp\",\n    id: \"uncontrolled-tab-example\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"chooseapp\",\n    title: \"Installed Apps\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"border p-3 \"\n  }, /*#__PURE__*/React.createElement(\"h4\", null, \"Apps\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"allProperties\",\n    cardcolumn: \"Name\",\n    roletype: \"IndexedContexts\" // contexttocreate\n    ,\n    createButton: false // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addFillARole\"]]\n  })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"apps\",\n    title: \"Add Apps\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"border p-3 \"\n  }, /*#__PURE__*/React.createElement(\"h4\", null, \"In use\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"ModelInUsePresentation\",\n    cardcolumn: \"Name\",\n    roletype: \"ModelsInUse\" // contexttocreate\n    ,\n    createButton: false // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addFillARole\"], perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addRemoveRoleFromContext\"]]\n  }))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"border p-3\"\n  }, /*#__PURE__*/React.createElement(\"h4\", null, \"In Repository\"), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleForm\"], {\n    rolename: \"External\",\n    viewname: \"ShowLibraries\"\n  }), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"ModelPresentation\",\n    cardcolumn: \"Name\",\n    roletype: \"Modellen\" // contexttocreate\n    ,\n    createButton: false // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addFillARole\"]]\n  })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"user\",\n    title: \"User information\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleForm\"], {\n    rolename: \"User\",\n    viewname: \"VolledigeNaam\",\n    cardprop: \"LastName\"\n  })), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"invitations\",\n    title: \"Pending Invitations\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"ForInvitee\",\n    cardcolumn: \"InviterLastName\",\n    roletype: \"PendingInvitations\" // contexttocreate\n    // createButton\n    // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addOpenContextOrRoleForm\"]]\n  })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"contacts\",\n    title: \"Contacts\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"VolledigeNaam\",\n    cardcolumn: \"LastName\",\n    roletype: \"model:System$PerspectivesSystem$Contacts\" //contexttocreate\n    // createButton\n    // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addFillARole\"]]\n  })), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"notifications\",\n    title: \"All Notifications\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"allProperties\",\n    cardcolumn: \"Message\",\n    roletype: \"model:System$ContextWithNotification$Notifications\" //contexttocreate\n    // createButton\n    // roleRepresentation\n    ,\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addRemoveRoleFromContext\"]]\n  }))));\n} ////////////////////////////////////////////////////////////////////////////////\n\nfunction invitation_Guest() {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"LocalRoleSpecialisation\"], {\n    ofrole: \"Invitee\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"ViewIncomingInvitation\"], null)));\n}\n\n//# sourceURL=webpack://perspectivesScreens/./src/System.js?");

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


const _perspectivesScreens$perspectivesSystem_User_uitgeschakeld = perspectivesScreens['perspectivesSystem_User_uitgeschakeld'];
const _perspectivesScreens$invitation_Guest = perspectivesScreens['invitation_Guest'];

export {
    _perspectivesScreens$perspectivesSystem_User_uitgeschakeld as perspectivesSystem_User_uitgeschakeld,
    _perspectivesScreens$invitation_Guest as invitation_Guest
}