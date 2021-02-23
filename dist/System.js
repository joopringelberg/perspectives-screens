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
/*! exports provided: perspectivesSystem_User, invitation_Guest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perspectivesSystem_User\", function() { return perspectivesSystem_User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invitation_Guest\", function() { return invitation_Guest; });\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// The screen for model:System$PerspectivesSystem. 51\nvar React = __webpack_require__(/*! react */ \"react\");\n\n\n\nfunction perspectivesSystem_User() {\n  var RepoCard = Object(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addBehaviour\"])(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"NameDescriptionCard\"], [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addFillARole\"]]);\n  var InUseCard = Object(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addBehaviour\"])(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"NameDescriptionCard\"], [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addFillARole\"], perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addRemoveRoleFromContext\"], perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addOpenContextOrRoleForm\"]]);\n  return /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"PerspectivesContainer\"], {\n    role: \"application\",\n    \"aria-labelledby\": \"systemId\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], {\n    defaultActiveKey: \"apps\",\n    id: \"uncontrolled-tab-example\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"apps\",\n    title: \"Apps\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    lg: 6,\n    className: \"border p-3 \"\n  }, /*#__PURE__*/React.createElement(\"h4\", null, \"In use\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleInstances\"], {\n    rol: \"ModelsInUse\"\n  }, /*#__PURE__*/React.createElement(ModelDropZone, null, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"NoInstancesSwitcher\"], null, /*#__PURE__*/React.createElement(\"p\", null, \"Drop a model here\"), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleInstanceIterator\"], null, /*#__PURE__*/React.createElement(InUseCard, {\n    labelProperty: \"Name\"\n  })))))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    lg: 6,\n    className: \"border p-3\"\n  }, /*#__PURE__*/React.createElement(\"h4\", null, \"In Repository\"), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleInstances\"], {\n    rol: \"Modellen\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"NoInstancesSwitcher\"], null, /*#__PURE__*/React.createElement(\"p\", null, \"Did not retrieve any models from your repository(ies). Maybe you have no internet connection?\"), /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleInstanceIterator\"], null, /*#__PURE__*/React.createElement(RepoCard, {\n    labelProperty: \"Name\"\n  }))))))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"user\",\n    title: \"User information\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleForm\"], {\n    rolename: \"User\",\n    viewname: \"VolledigeNaam\",\n    cardprop: \"Achternaam\"\n  })), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    eventKey: \"invitations\",\n    title: \"Pending Invitations\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"RoleTable\"], {\n    viewname: \"ForInvitee\",\n    roletype: \"PendingInvitations\",\n    cardcolumn: \"InviterLastName\",\n    behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"addOpenContextOrRoleForm\"]]\n  }))))));\n} ////////////////////////////////////////////////////////////////////////////////\n// MODELDROPZONE\n// This ModelDropZone is specialised for System. To import a model, we just need to\n// check the binding of the external role of the model description. The model then\n// will load on the fly.\n// The more general case of a RoleDropZone must support explicit dropping.\n////////////////////////////////////////////////////////////////////////////////\n\nvar ModelDropZone = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModelDropZone, _React$PureComponent);\n\n  var _super = _createSuper(ModelDropZone);\n\n  function ModelDropZone(props) {\n    var _this;\n\n    _classCallCheck(this, ModelDropZone);\n\n    _this = _super.call(this, props);\n    _this.eventDiv = React.createRef();\n    return _this;\n  }\n\n  _createClass(ModelDropZone, [{\n    key: \"checkBinding\",\n    value: function checkBinding(event, roleId, setSelectedCard, setPositionToMoveTo) {\n      var component = this;\n      var eventDivRect = component.eventDiv.current.getBoundingClientRect();\n\n      switch (event.keyCode) {\n        case 13: // Enter\n\n        case 32:\n          // space\n          // Unconditionally animate the movement of the card to the dropzone.\n          setPositionToMoveTo({\n            x: eventDivRect.x + \"px\",\n            y: eventDivRect.y + \"px\"\n          }); // Now wait for the animation to end.\n\n          setTimeout(function () {\n            component.context.checkbinding({\n              rolinstance: roleId\n            }, function (bindingAllowed) {\n              if (bindingAllowed) {\n                setSelectedCard();\n                setPositionToMoveTo();\n                component.eventDiv.current.blur();\n              } else {\n                //move back!\n                setPositionToMoveTo({\n                  x: \"-1px\",\n                  y: \"-1px\"\n                });\n              }\n            });\n          }, 900);\n          event.preventDefault();\n          break;\n      }\n    }\n  }, {\n    key: \"handleDrop\",\n    value: function handleDrop(_ref) {\n      var roleData = _ref.roleData;\n      this.context.checkbinding(roleData, function () {});\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var component = this;\n      return /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"AppContext\"].Consumer, null, function (_ref2) {\n        var selectedRole = _ref2.selectedRole,\n            setSelectedCard = _ref2.setSelectedCard,\n            setPositionToMoveTo = _ref2.setPositionToMoveTo;\n        return /*#__PURE__*/React.createElement(\"div\", {\n          ref: component.eventDiv,\n          tabIndex: selectedRole ? 0 : null,\n          onDragOver: function onDragOver(ev) {\n            return ev.preventDefault();\n          } // onDrop={ev => {component.context.checkbinding( JSON.parse( ev.dataTransfer.getData(\"PSRol\") ), function(){} ); ev.target.classList.remove(\"border-primary\", \"border\")}}\n          ,\n          onDrop: function onDrop(ev) {\n            component.handleDrop(JSON.parse(ev.dataTransfer.getData(\"PSRol\")));\n            ev.target.classList.remove(\"border-primary\", \"border\");\n          },\n          onDragEnter: function onDragEnter(ev) {\n            return ev.target.classList.add(\"border-primary\", \"border\");\n          },\n          onDragLeave: function onDragLeave(ev) {\n            return ev.target.classList.remove(\"border-primary\", \"border\");\n          },\n          onKeyDown: function onKeyDown(ev) {\n            return component.checkBinding(ev, selectedRole, setSelectedCard, setPositionToMoveTo);\n          },\n          style: {\n            flexGrow: 1\n          },\n          className: \"p-2 pb-3\",\n          \"aria-dropeffect\": \"execute\",\n          \"aria-label\": \"Drop an App here to get it from the repository.\"\n        }, component.props.children);\n      });\n    }\n  }]);\n\n  return ModelDropZone;\n}(React.PureComponent);\n\nModelDropZone.contextType = perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"PSRoleInstances\"]; ////////////////////////////////////////////////////////////////////////////////\n\nfunction invitation_Guest() {\n  return /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"PerspectivesContainer\"], null, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"LocalRoleSpecialisation\"], {\n    ofrole: \"Invitee\"\n  }, /*#__PURE__*/React.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_0__[\"ViewIncomingInvitation\"], null)));\n}\n\n//# sourceURL=webpack://perspectivesScreens/./src/System.js?");

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


const _perspectivesScreens$perspectivesSystem_User = perspectivesScreens['perspectivesSystem_User'];
const _perspectivesScreens$invitation_Guest = perspectivesScreens['invitation_Guest'];

export {
    _perspectivesScreens$perspectivesSystem_User as perspectivesSystem_User,
    _perspectivesScreens$invitation_Guest as invitation_Guest
}