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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ModelManagement.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ModelManagement.js":
/*!********************************!*\
  !*** ./src/ModelManagement.js ***!
  \********************************/
/*! exports provided: modelManagementApp_Manager_disabled, managedModel_Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modelManagementApp_Manager_disabled\", function() { return modelManagementApp_Manager_disabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"managedModel_Author\", function() { return managedModel_Author; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! perspectives-react */ \"perspectives-react\");\n/* harmony import */ var perspectives_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perspectives_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n //5\n\n\n\n\nfunction modelManagementApp_Manager_disabled() {\n  // A ref to dispatch an event from.\n  var modelListRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  function setSelectedModel(r) {\n    modelListRef.current.dispatchEvent(new CustomEvent('OpenContext', {\n      detail: r,\n      bubbles: true\n    }));\n  }\n\n  function ModelsAndRepositories() {\n    var SingleManagedModel = perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addBehaviour\"](perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"makeRoleInListPresentation\"](\n    /*#__PURE__*/\n    // eslint-disable-next-line react/display-name\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        ref: ref,\n        tabIndex: props.tabIndex,\n        \"aria-label\": props[\"aria-label\"][0]\n      }, props[\"aria-label\"][0] || \"New Managed Model\");\n    })), [perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addOpenContextOrRoleForm\"], perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addRemoveRoleFromContext\"]]);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n      ref: modelListRef\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      id: \"managedModelsId\"\n    }, \"Models\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      className: \"text-right\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"RoleInstance\"], {\n      role: \"Manager\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"PSRol\"].Consumer, null, function (props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"CreateContext\"], {\n        contextname: \"model:ModelManagement$ManagedModel\",\n        rolname: \"Models\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateButton, {\n        binding: props.rolinstance\n      }));\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"Rol\"], {\n      rol: \"Models\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleManagedModel, {\n      labelProperty: \"Name\"\n    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      id: \"managedModelId\"\n    }, \"Repositories\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"RoleTable\"], {\n      viewname: \"allProperties\",\n      cardcolumn: \"Name\",\n      roletype: \"Repository\" // contexttocreate\n      ,\n      createButton: true // roleRepresentation\n      ,\n      behaviours: [perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addRemoveRoleFromContext\"], perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addFillARole\"]]\n    }))));\n  }\n\n  function CreateButton(props) {\n    var ctxt = {\n      \"rollen\": {\n        \"model:ModelManagement$ManagedModel$Author\": [{\n          \"properties\": {},\n          \"binding\": props.binding\n        }]\n      },\n      \"externeProperties\": {}\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"light\",\n      onClick: function onClick() {\n        return props.create(ctxt).then(function (erole) {\n          return setSelectedModel(erole);\n        });\n      }\n    }, \"New model\");\n  }\n\n  CreateButton.propTypes = {\n    binding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"managedModelsId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModelsAndRepositories, null));\n}\nfunction managedModel_Author() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      lastReloadTime = _useState2[0],\n      setLastReloadTime = _useState2[1];\n\n  function ShowReloadTime() {\n    if (lastReloadTime == 0) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Text, null, \"This model hasn't been loaded yet during this session\");\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Text, null, \"Last reload at: \", lastReloadTime.toLocaleTimeString('en-UK'));\n    }\n  }\n\n  var RoleCard = perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addBehaviour\"](perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"NameDescriptionCard\"], [perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addRemoveRoleFromContext\"], perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addFillARole\"], perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addRemoveFiller\"], perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"addFillWithRole\"]]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    className: \"border border-secondary rounded p-3 mt-3\",\n    role: \"application\",\n    \"aria-labelledby\": \"managedModelId\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    className: \"pb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"BackButton\"], {\n    buttontext: \"Back to all models\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    id: \"managedModelId\"\n  }, \"Model\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header, null, \"Model description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"RoleInstance\"], {\n    role: \"ModelDescription\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"PSRol\"].Consumer, null, function (psrol) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"RoleDropZone\"], {\n      ariaLabel: \"Drop a Model role here\",\n      bind: psrol.bind,\n      checkbinding: psrol.checkbinding\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Drop a Model role here\"));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RoleCard, {\n    labelProperty: \"Name\"\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header, null, \"Repository for this model\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"RoleInstance\"], {\n    role: \"Repository\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"PSRol\"].Consumer, null, function (psrol) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"RoleDropZone\"], {\n      ariaLabel: \"Drop a Repository role here\",\n      bind: psrol.bind,\n      checkbinding: psrol.checkbinding\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Drop a Repository role here\"));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RoleCard, {\n    labelProperty: \"Name\"\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"ExternalRole\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"View\"], {\n    viewname: \"allProperties\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"PSView\"].Consumer, null, function (psview) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header, null, \"Arc file parse results\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, {\n      message: psview.propval(\"ArcFeedback\")\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"primary\",\n      onClick: function onClick() {\n        setLastReloadTime(new Date());\n        psview.propdel(\"ArcFeedback\");\n      }\n    }, \"Reload Arc file\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShowReloadTime, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header, null, \"Crl file parse results\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, {\n      message: psview.propval(\"CrlFeedback\")\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"primary\",\n      onClick: function onClick() {\n        setLastReloadTime(new Date());\n        psview.propdel(\"CrlFeedback\");\n      }\n    }, \"Reload Crl file\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShowReloadTime, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"FileDropZone\"], {\n      tooltiptext: \"Drop an .arc file here or press enter/space\",\n      handlefile: function handlefile(file) {\n        file.text().then(function (source) {\n          return psview.propset(\"ArcSource\", source);\n        });\n      },\n      extension: \"arc\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header, null, \"Arc file path\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, null, psview.propval(\"ArcSource\")[0] ? psview.propval(\"ArcSource\")[0].match(/[^\\r\\n]+/g)[0] : \"Drop .arc file here, or click / select + press space to open file selector.\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(perspectives_react__WEBPACK_IMPORTED_MODULE_2__[\"FileDropZone\"], {\n      tooltiptext: \"Drop an .arc file here or press enter/space\",\n      handlefile: function handlefile(file) {\n        file.text().then(function (source) {\n          return psview.propset(\"CrlSource\", source);\n        });\n      },\n      extension: \"crl\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      tabIndex: \"-1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header, null, \"Crl file path\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, null, psview.propval(\"CrlSource\")[0] ? psview.propval(\"CrlSource\")[0].match(/[^\\r\\n]+/g)[0] : \"Drop .crl file here, or click / select + press space to open file selector.\"))))));\n  }))));\n} // Use like this: <Feedback message={psview.propval(\"CrlFeedback\")}/>.\n\nfunction Feedback(props) {\n  if (props.message[0] && props.message[0].match(/.*[\\r\\t\\n]/)) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, props.message[0]);\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Text, null, props.message[0]);\n  }\n}\n\nFeedback.propTypes = {\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired)\n};\n\n//# sourceURL=webpack://perspectivesScreens/./src/ModelManagement.js?");

/***/ }),

/***/ "perspectives-react":
/*!************************************!*\
  !*** external "PerspectivesReact" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PerspectivesReact;\n\n//# sourceURL=webpack://perspectivesScreens/external_%22PerspectivesReact%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PropTypes;\n\n//# sourceURL=webpack://perspectivesScreens/external_%22PropTypes%22?");

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


const _perspectivesScreens$modelManagementApp_Manager_disabled = perspectivesScreens['modelManagementApp_Manager_disabled'];
const _perspectivesScreens$managedModel_Author = perspectivesScreens['managedModel_Author'];

export {
    _perspectivesScreens$modelManagementApp_Manager_disabled as modelManagementApp_Manager_disabled,
    _perspectivesScreens$managedModel_Author as managedModel_Author
}