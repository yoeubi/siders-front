module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout/DefaultLayout.tsx":
/*!**********************************!*\
  !*** ./Layout/DefaultLayout.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DefaultHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DefaultHeader */ "./components/DefaultHeader.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common */ "./components/common/index.ts");
var _jsxFileName = "C:\\dev\\siders\\Layout\\DefaultLayout.tsx";





const DefaultLayout = ({
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DefaultHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_3__["MainWithFixedHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\dev\\siders\\components\\Card.tsx";


const CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Card__CardWrap",
  componentId: "sc-13o6qwz-0"
})(["flex-basis:48%;margin-bottom:20px;border-radius:5px;overflow:hidden;transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);&:nth-child(2n){margin-left:auto;}&:hover{box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);}"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Card__CardContent",
  componentId: "sc-13o6qwz-1"
})(["padding:10px;h2{font-size:1.5rem;line-height:1.33;margin-bottom:0.5rem;}p{font-size:1.2rem;line-height:1.43;letter-spacing:0.01071em;}"]);

const Card = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/sidus1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\uCC44\uD305\uAE30\uB2A5 \uD3EC\uD568 \uC1FC\uD551\uBAB0 \uC571 \uAD6C\uCD95"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "\uC11C\uC6B8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "2019.08.12")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/CardList.tsx":
/*!*********************************!*\
  !*** ./components/CardList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\dev\\siders\\components\\CardList.tsx";



const CardListWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "CardList__CardListWrap",
  componentId: "sc-1en0xyd-0"
})(["display:flex;flex-wrap:wrap;"]);

const CardList = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardListWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ }),

/***/ "./components/DefaultHeader.tsx":
/*!**************************************!*\
  !*** ./components/DefaultHeader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./components/common/index.ts");
var _jsxFileName = "C:\\dev\\siders\\components\\DefaultHeader.tsx";



const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["CommonHeader"]).withConfig({
  displayName: "DefaultHeader__Header",
  componentId: "esxe4y-0"
})(["position:fixed;top:0;left:0;right:0;display:flex;justify-content:center;align-items:space-between;border-bottom:1px solid #f0f0f0;z-index:10;"]);
const BarIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Icon"]).withConfig({
  displayName: "DefaultHeader__BarIcon",
  componentId: "esxe4y-1"
})([""]);
const SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Icon"]).withConfig({
  displayName: "DefaultHeader__SearchIcon",
  componentId: "esxe4y-2"
})([""]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "DefaultHeader__Logo",
  componentId: "esxe4y-3"
})(["font-size:25px;font-weight:700;line-height:4.8rem;flex-grow:1;"]);

const DefaultHeader = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BarIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/menu.svg",
    alt: "\uBA54\uB274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Siders"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/search.svg",
    alt: "\uCC3E\uAE30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultHeader);

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\dev\\siders\\components\\Footer.tsx";


const FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterWrap",
  componentId: "sc-2ekk7m-0"
})(["background-color:#181818;color:#fff;padding:20px;font-size:1.5rem;"]);

const Footer = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Developer: \uC131\uC911\uC6D0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Email:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto: yoeubi28@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "yoeubi28@gmail.com")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/index.ts":
/*!************************************!*\
  !*** ./components/common/index.ts ***!
  \************************************/
/*! exports provided: Icon, CommonHeader, MainWithFixedHeader, MainWithNormalHeader, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHeader", function() { return CommonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWithFixedHeader", function() { return MainWithFixedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWithNormalHeader", function() { return MainWithNormalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderHeight = `50px`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "common__Main",
  componentId: "sc-1fztl5u-0"
})(["padding:20px;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "common__Icon",
  componentId: "sc-1fztl5u-1"
})(["position:relative;display:inline-block;width:50px;padding:15px;cursor:pointer;"]);
const CommonHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "common__CommonHeader",
  componentId: "sc-1fztl5u-2"
})(["height:", ";background-color:#fff;"], HeaderHeight);
const MainWithFixedHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Main).withConfig({
  displayName: "common__MainWithFixedHeader",
  componentId: "sc-1fztl5u-3"
})(["margin-top:", ";"], HeaderHeight);
const MainWithNormalHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Main).withConfig({
  displayName: "common__MainWithNormalHeader",
  componentId: "sc-1fztl5u-4"
})([""]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "common__Button",
  componentId: "sc-1fztl5u-5"
})(["width:100%;height:50px;border:1px solid #181818;border-radius:5px;font-size:15px;font-weight:700;cursor:pointer;transition:all 0.5s;outline:none;&:hover{background-color:#181818;border:1px solid #fff;color:#fff;}"]);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/CardList */ "./components/CardList.tsx");
/* harmony import */ var _Layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/DefaultLayout */ "./Layout/DefaultLayout.tsx");
var _jsxFileName = "C:\\dev\\siders\\pages\\index.tsx";




function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CardList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\siders\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map