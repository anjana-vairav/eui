(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/charts/themes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/sass-vars-to-js-loader/index.js!./global_styling/variables/_colors.scss":
/*!**************************************************************************************!*\
  !*** ../node_modules/sass-vars-to-js-loader!./global_styling/variables/_colors.scss ***!
  \**************************************************************************************/
/*! exports provided: euiColorPrimary, euiColorSecondary, euiColorAccent, euiColorHighlight, euiColorGhost, euiColorInk, euiColorSuccess, euiColorDanger, euiColorWarning, euiColorEmptyShade, euiColorLightestShade, euiColorLightShade, euiColorMediumShade, euiColorDarkShade, euiColorDarkestShade, euiColorFullShade, euiTextColor, euiTitleColor, euiLinkColor, euiFocusBackgroundColor, euiPageBackgroundColor, euiColorVis0, euiColorVis1, euiColorVis2, euiColorVis3, euiColorVis4, euiColorVis5, euiColorVis6, euiColorVis7, euiColorVis8, euiColorVis9, euiColorChartLines, euiColorChartBand, euiCodeBlockBackgroundColor, euiCodeBlockColor, euiCodeBlockSelectedBackgroundColor, euiCodeBlockCommentColor, euiCodeBlockSelectorTagColor, euiCodeBlockStringColor, euiCodeBlockNumberColor, euiCodeBlockKeywordColor, euiCodeBlockFunctionTitleColor, euiCodeBlockTagColor, euiCodeBlockNameColor, euiCodeBlockTypeColor, euiCodeBlockAttributeColor, euiCodeBlockSymbolColor, euiCodeBlockParamsColor, euiCodeBlockMetaColor, euiCodeBlockTitleColor, euiCodeBlockRegexpColor, euiCodeBlockBuiltInColor, euiCodeBlockSectionColor, euiCodeBlockAdditionBackgroundColor, euiCodeBlockAdditionColor, euiCodeBlockDeletionBackgroundColor, euiCodeBlockDeletionColor, euiCodeBlockSelectorClassColor, euiCodeBlockSelectorIdColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorPrimary", function() { return euiColorPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorSecondary", function() { return euiColorSecondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorAccent", function() { return euiColorAccent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorHighlight", function() { return euiColorHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorGhost", function() { return euiColorGhost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorInk", function() { return euiColorInk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorSuccess", function() { return euiColorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorDanger", function() { return euiColorDanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorWarning", function() { return euiColorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorEmptyShade", function() { return euiColorEmptyShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorLightestShade", function() { return euiColorLightestShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorLightShade", function() { return euiColorLightShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorMediumShade", function() { return euiColorMediumShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorDarkShade", function() { return euiColorDarkShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorDarkestShade", function() { return euiColorDarkestShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorFullShade", function() { return euiColorFullShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiTextColor", function() { return euiTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiTitleColor", function() { return euiTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiLinkColor", function() { return euiLinkColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiFocusBackgroundColor", function() { return euiFocusBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiPageBackgroundColor", function() { return euiPageBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis0", function() { return euiColorVis0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis1", function() { return euiColorVis1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis2", function() { return euiColorVis2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis3", function() { return euiColorVis3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis4", function() { return euiColorVis4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis5", function() { return euiColorVis5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis6", function() { return euiColorVis6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis7", function() { return euiColorVis7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis8", function() { return euiColorVis8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis9", function() { return euiColorVis9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorChartLines", function() { return euiColorChartLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorChartBand", function() { return euiColorChartBand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockBackgroundColor", function() { return euiCodeBlockBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockColor", function() { return euiCodeBlockColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectedBackgroundColor", function() { return euiCodeBlockSelectedBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockCommentColor", function() { return euiCodeBlockCommentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectorTagColor", function() { return euiCodeBlockSelectorTagColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockStringColor", function() { return euiCodeBlockStringColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockNumberColor", function() { return euiCodeBlockNumberColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockKeywordColor", function() { return euiCodeBlockKeywordColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockFunctionTitleColor", function() { return euiCodeBlockFunctionTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockTagColor", function() { return euiCodeBlockTagColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockNameColor", function() { return euiCodeBlockNameColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockTypeColor", function() { return euiCodeBlockTypeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockAttributeColor", function() { return euiCodeBlockAttributeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSymbolColor", function() { return euiCodeBlockSymbolColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockParamsColor", function() { return euiCodeBlockParamsColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockMetaColor", function() { return euiCodeBlockMetaColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockTitleColor", function() { return euiCodeBlockTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockRegexpColor", function() { return euiCodeBlockRegexpColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockBuiltInColor", function() { return euiCodeBlockBuiltInColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSectionColor", function() { return euiCodeBlockSectionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockAdditionBackgroundColor", function() { return euiCodeBlockAdditionBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockAdditionColor", function() { return euiCodeBlockAdditionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockDeletionBackgroundColor", function() { return euiCodeBlockDeletionBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockDeletionColor", function() { return euiCodeBlockDeletionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectorClassColor", function() { return euiCodeBlockSelectorClassColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectorIdColor", function() { return euiCodeBlockSelectorIdColor; });
var euiColorPrimary = {"r":0,"g":107,"b":180,"a":1,"rgba":"rgba(0, 107, 180, 1)"}
var euiColorSecondary = {"r":1,"g":125,"b":115,"a":1,"rgba":"rgba(1, 125, 115, 1)"}
var euiColorAccent = {"r":221,"g":10,"b":115,"a":1,"rgba":"rgba(221, 10, 115, 1)"}
var euiColorHighlight = {"r":255,"g":252,"b":221,"a":1,"rgba":"rgba(255, 252, 221, 1)"}
var euiColorGhost = {"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"}
var euiColorInk = {"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"}
var euiColorSuccess = {"r":1,"g":125,"b":115,"a":1,"rgba":"rgba(1, 125, 115, 1)"}
var euiColorDanger = {"r":189,"g":39,"b":30,"a":1,"rgba":"rgba(189, 39, 30, 1)"}
var euiColorWarning = {"r":245,"g":167,"b":0,"a":1,"rgba":"rgba(245, 167, 0, 1)"}
var euiColorEmptyShade = {"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"}
var euiColorLightestShade = {"r":245,"g":247,"b":250,"a":1,"rgba":"rgba(245, 247, 250, 1)"}
var euiColorLightShade = {"r":211,"g":218,"b":230,"a":1,"rgba":"rgba(211, 218, 230, 1)"}
var euiColorMediumShade = {"r":152,"g":162,"b":179,"a":1,"rgba":"rgba(152, 162, 179, 1)"}
var euiColorDarkShade = {"r":105,"g":112,"b":125,"a":1,"rgba":"rgba(105, 112, 125, 1)"}
var euiColorDarkestShade = {"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"}
var euiColorFullShade = {"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"}
var euiTextColor = {"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"}
var euiTitleColor = "shadeOrTint(#343741, 50%, 0%)"
var euiLinkColor = {"r":0,"g":107,"b":180,"a":1,"rgba":"rgba(0, 107, 180, 1)"}
var euiFocusBackgroundColor = "tintOrShade(#006bb4, 90%, 50%)"
var euiPageBackgroundColor = "tintOrShade(#f5f7fa, 50%, 30%)"
var euiColorVis0 = {"r":0,"g":179,"b":164,"a":1,"rgba":"rgba(0, 179, 164, 1)"}
var euiColorVis1 = {"r":49,"g":133,"b":252,"a":1,"rgba":"rgba(49, 133, 252, 1)"}
var euiColorVis2 = {"r":219,"g":19,"b":116,"a":1,"rgba":"rgba(219, 19, 116, 1)"}
var euiColorVis3 = {"r":73,"g":0,"b":146,"a":1,"rgba":"rgba(73, 0, 146, 1)"}
var euiColorVis4 = {"r":254,"g":182,"b":219,"a":1,"rgba":"rgba(254, 182, 219, 1)"}
var euiColorVis5 = {"r":230,"g":194,"b":32,"a":1,"rgba":"rgba(230, 194, 32, 1)"}
var euiColorVis6 = {"r":191,"g":161,"b":128,"a":1,"rgba":"rgba(191, 161, 128, 1)"}
var euiColorVis7 = {"r":249,"g":133,"b":16,"a":1,"rgba":"rgba(249, 133, 16, 1)"}
var euiColorVis8 = {"r":70,"g":26,"b":10,"a":1,"rgba":"rgba(70, 26, 10, 1)"}
var euiColorVis9 = {"r":146,"g":0,"b":0,"a":1,"rgba":"rgba(146, 0, 0, 1)"}
var euiColorChartLines = {"r":239,"g":241,"b":244,"a":1,"rgba":"rgba(239, 241, 244, 1)"}
var euiColorChartBand = {"r":245,"g":247,"b":250,"a":1,"rgba":"rgba(245, 247, 250, 1)"}
var euiCodeBlockBackgroundColor = {"r":245,"g":247,"b":250,"a":1,"rgba":"rgba(245, 247, 250, 1)"}
var euiCodeBlockColor = {"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"}
var euiCodeBlockSelectedBackgroundColor = "inherit"
var euiCodeBlockCommentColor = {"r":153,"g":153,"b":136,"a":1,"rgba":"rgba(153, 153, 136, 1)"}
var euiCodeBlockSelectorTagColor = "inherit"
var euiCodeBlockStringColor = {"r":221,"g":10,"b":115,"a":1,"rgba":"rgba(221, 10, 115, 1)"}
var euiCodeBlockNumberColor = {"r":0,"g":166,"b":155,"a":1,"rgba":"rgba(0, 166, 155, 1)"}
var euiCodeBlockKeywordColor = {"r":51,"g":51,"b":51,"a":1,"rgba":"rgba(51, 51, 51, 1)"}
var euiCodeBlockFunctionTitleColor = "inherit"
var euiCodeBlockTagColor = {"r":0,"g":121,"b":165,"a":1,"rgba":"rgba(0, 121, 165, 1)"}
var euiCodeBlockNameColor = "inherit"
var euiCodeBlockTypeColor = {"r":0,"g":121,"b":165,"a":1,"rgba":"rgba(0, 121, 165, 1)"}
var euiCodeBlockAttributeColor = "inherit"
var euiCodeBlockSymbolColor = {"r":153,"g":0,"b":115,"a":1,"rgba":"rgba(153, 0, 115, 1)"}
var euiCodeBlockParamsColor = "inherit"
var euiCodeBlockMetaColor = {"r":153,"g":153,"b":153,"a":1,"rgba":"rgba(153, 153, 153, 1)"}
var euiCodeBlockTitleColor = {"r":153,"g":0,"b":0,"a":1,"rgba":"rgba(153, 0, 0, 1)"}
var euiCodeBlockRegexpColor = {"r":0,"g":153,"b":38,"a":1,"rgba":"rgba(0, 153, 38, 1)"}
var euiCodeBlockBuiltInColor = {"r":0,"g":134,"b":179,"a":1,"rgba":"rgba(0, 134, 179, 1)"}
var euiCodeBlockSectionColor = {"r":255,"g":198,"b":109,"a":1,"rgba":"rgba(255, 198, 109, 1)"}
var euiCodeBlockAdditionBackgroundColor = {"r":221,"g":255,"b":221,"a":1,"rgba":"rgba(221, 255, 221, 1)"}
var euiCodeBlockAdditionColor = "inherit"
var euiCodeBlockDeletionBackgroundColor = {"r":255,"g":221,"b":221,"a":1,"rgba":"rgba(255, 221, 221, 1)"}
var euiCodeBlockDeletionColor = "inherit"
var euiCodeBlockSelectorClassColor = "inherit"
var euiCodeBlockSelectorIdColor = "inherit"
/* harmony default export */ __webpack_exports__["default"] = ({"euiColorPrimary":{"r":0,"g":107,"b":180,"a":1,"rgba":"rgba(0, 107, 180, 1)"},"euiColorSecondary":{"r":1,"g":125,"b":115,"a":1,"rgba":"rgba(1, 125, 115, 1)"},"euiColorAccent":{"r":221,"g":10,"b":115,"a":1,"rgba":"rgba(221, 10, 115, 1)"},"euiColorHighlight":{"r":255,"g":252,"b":221,"a":1,"rgba":"rgba(255, 252, 221, 1)"},"euiColorGhost":{"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"},"euiColorInk":{"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"},"euiColorSuccess":{"r":1,"g":125,"b":115,"a":1,"rgba":"rgba(1, 125, 115, 1)"},"euiColorDanger":{"r":189,"g":39,"b":30,"a":1,"rgba":"rgba(189, 39, 30, 1)"},"euiColorWarning":{"r":245,"g":167,"b":0,"a":1,"rgba":"rgba(245, 167, 0, 1)"},"euiColorEmptyShade":{"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"},"euiColorLightestShade":{"r":245,"g":247,"b":250,"a":1,"rgba":"rgba(245, 247, 250, 1)"},"euiColorLightShade":{"r":211,"g":218,"b":230,"a":1,"rgba":"rgba(211, 218, 230, 1)"},"euiColorMediumShade":{"r":152,"g":162,"b":179,"a":1,"rgba":"rgba(152, 162, 179, 1)"},"euiColorDarkShade":{"r":105,"g":112,"b":125,"a":1,"rgba":"rgba(105, 112, 125, 1)"},"euiColorDarkestShade":{"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"},"euiColorFullShade":{"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"},"euiTextColor":{"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"},"euiTitleColor":"shadeOrTint(#343741, 50%, 0%)","euiLinkColor":{"r":0,"g":107,"b":180,"a":1,"rgba":"rgba(0, 107, 180, 1)"},"euiFocusBackgroundColor":"tintOrShade(#006bb4, 90%, 50%)","euiPageBackgroundColor":"tintOrShade(#f5f7fa, 50%, 30%)","euiColorVis0":{"r":0,"g":179,"b":164,"a":1,"rgba":"rgba(0, 179, 164, 1)"},"euiColorVis1":{"r":49,"g":133,"b":252,"a":1,"rgba":"rgba(49, 133, 252, 1)"},"euiColorVis2":{"r":219,"g":19,"b":116,"a":1,"rgba":"rgba(219, 19, 116, 1)"},"euiColorVis3":{"r":73,"g":0,"b":146,"a":1,"rgba":"rgba(73, 0, 146, 1)"},"euiColorVis4":{"r":254,"g":182,"b":219,"a":1,"rgba":"rgba(254, 182, 219, 1)"},"euiColorVis5":{"r":230,"g":194,"b":32,"a":1,"rgba":"rgba(230, 194, 32, 1)"},"euiColorVis6":{"r":191,"g":161,"b":128,"a":1,"rgba":"rgba(191, 161, 128, 1)"},"euiColorVis7":{"r":249,"g":133,"b":16,"a":1,"rgba":"rgba(249, 133, 16, 1)"},"euiColorVis8":{"r":70,"g":26,"b":10,"a":1,"rgba":"rgba(70, 26, 10, 1)"},"euiColorVis9":{"r":146,"g":0,"b":0,"a":1,"rgba":"rgba(146, 0, 0, 1)"},"euiColorChartLines":{"r":239,"g":241,"b":244,"a":1,"rgba":"rgba(239, 241, 244, 1)"},"euiColorChartBand":{"r":245,"g":247,"b":250,"a":1,"rgba":"rgba(245, 247, 250, 1)"},"euiCodeBlockBackgroundColor":{"r":245,"g":247,"b":250,"a":1,"rgba":"rgba(245, 247, 250, 1)"},"euiCodeBlockColor":{"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"},"euiCodeBlockSelectedBackgroundColor":"inherit","euiCodeBlockCommentColor":{"r":153,"g":153,"b":136,"a":1,"rgba":"rgba(153, 153, 136, 1)"},"euiCodeBlockSelectorTagColor":"inherit","euiCodeBlockStringColor":{"r":221,"g":10,"b":115,"a":1,"rgba":"rgba(221, 10, 115, 1)"},"euiCodeBlockNumberColor":{"r":0,"g":166,"b":155,"a":1,"rgba":"rgba(0, 166, 155, 1)"},"euiCodeBlockKeywordColor":{"r":51,"g":51,"b":51,"a":1,"rgba":"rgba(51, 51, 51, 1)"},"euiCodeBlockFunctionTitleColor":"inherit","euiCodeBlockTagColor":{"r":0,"g":121,"b":165,"a":1,"rgba":"rgba(0, 121, 165, 1)"},"euiCodeBlockNameColor":"inherit","euiCodeBlockTypeColor":{"r":0,"g":121,"b":165,"a":1,"rgba":"rgba(0, 121, 165, 1)"},"euiCodeBlockAttributeColor":"inherit","euiCodeBlockSymbolColor":{"r":153,"g":0,"b":115,"a":1,"rgba":"rgba(153, 0, 115, 1)"},"euiCodeBlockParamsColor":"inherit","euiCodeBlockMetaColor":{"r":153,"g":153,"b":153,"a":1,"rgba":"rgba(153, 153, 153, 1)"},"euiCodeBlockTitleColor":{"r":153,"g":0,"b":0,"a":1,"rgba":"rgba(153, 0, 0, 1)"},"euiCodeBlockRegexpColor":{"r":0,"g":153,"b":38,"a":1,"rgba":"rgba(0, 153, 38, 1)"},"euiCodeBlockBuiltInColor":{"r":0,"g":134,"b":179,"a":1,"rgba":"rgba(0, 134, 179, 1)"},"euiCodeBlockSectionColor":{"r":255,"g":198,"b":109,"a":1,"rgba":"rgba(255, 198, 109, 1)"},"euiCodeBlockAdditionBackgroundColor":{"r":221,"g":255,"b":221,"a":1,"rgba":"rgba(221, 255, 221, 1)"},"euiCodeBlockAdditionColor":"inherit","euiCodeBlockDeletionBackgroundColor":{"r":255,"g":221,"b":221,"a":1,"rgba":"rgba(255, 221, 221, 1)"},"euiCodeBlockDeletionColor":"inherit","euiCodeBlockSelectorClassColor":"inherit","euiCodeBlockSelectorIdColor":"inherit"});


/***/ }),

/***/ "../node_modules/sass-vars-to-js-loader/index.js!./themes/eui/eui_colors_dark.scss":
/*!********************************************************************************!*\
  !*** ../node_modules/sass-vars-to-js-loader!./themes/eui/eui_colors_dark.scss ***!
  \********************************************************************************/
/*! exports provided: euiColorPrimary, euiColorSecondary, euiColorAccent, euiColorHighlight, euiColorGhost, euiColorInk, euiColorSuccess, euiColorWarning, euiColorDanger, euiColorEmptyShade, euiColorLightestShade, euiColorLightShade, euiColorMediumShade, euiColorDarkShade, euiColorDarkestShade, euiColorFullShade, euiTextColor, euiLinkColor, euiFocusBackgroundColor, euiShadowColor, euiShadowColorLarge, euiColorVis0, euiColorVis1, euiColorVis2, euiColorVis3, euiColorVis4, euiColorVis5, euiColorVis6, euiColorVis7, euiColorVis8, euiColorVis9, euiColorChartLines, euiColorChartBand, euiCodeBlockCommentColor, euiCodeBlockSelectorTagColor, euiCodeBlockStringColor, euiCodeBlockNumberColor, euiCodeBlockKeywordColor, euiCodeBlockFunctionTitleColor, euiCodeBlockTagColor, euiCodeBlockNameColor, euiCodeBlockTypeColor, euiCodeBlockAttributeColor, euiCodeBlockSymbolColor, euiCodeBlockParamsColor, euiCodeBlockMetaColor, euiCodeBlockTitleColor, euiCodeBlockSectionColor, euiCodeBlockAdditionBackgroundColor, euiCodeBlockAdditionColor, euiCodeBlockDeletionBackgroundColor, euiCodeBlockDeletionColor, euiCodeBlockSelectorClassColor, euiCodeBlockSelectorIdColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorPrimary", function() { return euiColorPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorSecondary", function() { return euiColorSecondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorAccent", function() { return euiColorAccent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorHighlight", function() { return euiColorHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorGhost", function() { return euiColorGhost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorInk", function() { return euiColorInk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorSuccess", function() { return euiColorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorWarning", function() { return euiColorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorDanger", function() { return euiColorDanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorEmptyShade", function() { return euiColorEmptyShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorLightestShade", function() { return euiColorLightestShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorLightShade", function() { return euiColorLightShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorMediumShade", function() { return euiColorMediumShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorDarkShade", function() { return euiColorDarkShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorDarkestShade", function() { return euiColorDarkestShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorFullShade", function() { return euiColorFullShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiTextColor", function() { return euiTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiLinkColor", function() { return euiLinkColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiFocusBackgroundColor", function() { return euiFocusBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiShadowColor", function() { return euiShadowColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiShadowColorLarge", function() { return euiShadowColorLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis0", function() { return euiColorVis0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis1", function() { return euiColorVis1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis2", function() { return euiColorVis2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis3", function() { return euiColorVis3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis4", function() { return euiColorVis4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis5", function() { return euiColorVis5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis6", function() { return euiColorVis6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis7", function() { return euiColorVis7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis8", function() { return euiColorVis8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorVis9", function() { return euiColorVis9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorChartLines", function() { return euiColorChartLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiColorChartBand", function() { return euiColorChartBand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockCommentColor", function() { return euiCodeBlockCommentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectorTagColor", function() { return euiCodeBlockSelectorTagColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockStringColor", function() { return euiCodeBlockStringColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockNumberColor", function() { return euiCodeBlockNumberColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockKeywordColor", function() { return euiCodeBlockKeywordColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockFunctionTitleColor", function() { return euiCodeBlockFunctionTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockTagColor", function() { return euiCodeBlockTagColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockNameColor", function() { return euiCodeBlockNameColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockTypeColor", function() { return euiCodeBlockTypeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockAttributeColor", function() { return euiCodeBlockAttributeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSymbolColor", function() { return euiCodeBlockSymbolColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockParamsColor", function() { return euiCodeBlockParamsColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockMetaColor", function() { return euiCodeBlockMetaColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockTitleColor", function() { return euiCodeBlockTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSectionColor", function() { return euiCodeBlockSectionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockAdditionBackgroundColor", function() { return euiCodeBlockAdditionBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockAdditionColor", function() { return euiCodeBlockAdditionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockDeletionBackgroundColor", function() { return euiCodeBlockDeletionBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockDeletionColor", function() { return euiCodeBlockDeletionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectorClassColor", function() { return euiCodeBlockSelectorClassColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euiCodeBlockSelectorIdColor", function() { return euiCodeBlockSelectorIdColor; });
var euiColorPrimary = {"r":27,"g":169,"b":245,"a":1,"rgba":"rgba(27, 169, 245, 1)"}
var euiColorSecondary = {"r":125,"g":226,"b":209,"a":1,"rgba":"rgba(125, 226, 209, 1)"}
var euiColorAccent = {"r":249,"g":144,"b":192,"a":1,"rgba":"rgba(249, 144, 192, 1)"}
var euiColorHighlight = {"r":46,"g":45,"b":37,"a":1,"rgba":"rgba(46, 45, 37, 1)"}
var euiColorGhost = {"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"}
var euiColorInk = {"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"}
var euiColorSuccess = {"r":125,"g":226,"b":209,"a":1,"rgba":"rgba(125, 226, 209, 1)"}
var euiColorWarning = {"r":255,"g":206,"b":122,"a":1,"rgba":"rgba(255, 206, 122, 1)"}
var euiColorDanger = {"r":255,"g":102,"b":102,"a":1,"rgba":"rgba(255, 102, 102, 1)"}
var euiColorEmptyShade = {"r":29,"g":30,"b":36,"a":1,"rgba":"rgba(29, 30, 36, 1)"}
var euiColorLightestShade = {"r":37,"g":38,"b":46,"a":1,"rgba":"rgba(37, 38, 46, 1)"}
var euiColorLightShade = {"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"}
var euiColorMediumShade = {"r":83,"g":89,"b":102,"a":1,"rgba":"rgba(83, 89, 102, 1)"}
var euiColorDarkShade = {"r":152,"g":162,"b":179,"a":1,"rgba":"rgba(152, 162, 179, 1)"}
var euiColorDarkestShade = {"r":212,"g":218,"b":229,"a":1,"rgba":"rgba(212, 218, 229, 1)"}
var euiColorFullShade = {"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"}
var euiTextColor = {"r":223,"g":229,"b":239,"a":1,"rgba":"rgba(223, 229, 239, 1)"}
var euiLinkColor = {"r":27,"g":169,"b":245,"a":1,"rgba":"rgba(27, 169, 245, 1)"}
var euiFocusBackgroundColor = {"r":35,"g":38,"b":53,"a":1,"rgba":"rgba(35, 38, 53, 1)"}
var euiShadowColor = {"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"}
var euiShadowColorLarge = {"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"}
var euiColorVis0 = {"r":0,"g":179,"b":164,"a":1,"rgba":"rgba(0, 179, 164, 1)"}
var euiColorVis1 = {"r":49,"g":133,"b":252,"a":1,"rgba":"rgba(49, 133, 252, 1)"}
var euiColorVis2 = {"r":219,"g":19,"b":116,"a":1,"rgba":"rgba(219, 19, 116, 1)"}
var euiColorVis3 = {"r":73,"g":0,"b":146,"a":1,"rgba":"rgba(73, 0, 146, 1)"}
var euiColorVis4 = {"r":254,"g":182,"b":219,"a":1,"rgba":"rgba(254, 182, 219, 1)"}
var euiColorVis5 = {"r":230,"g":194,"b":32,"a":1,"rgba":"rgba(230, 194, 32, 1)"}
var euiColorVis6 = {"r":191,"g":161,"b":128,"a":1,"rgba":"rgba(191, 161, 128, 1)"}
var euiColorVis7 = {"r":249,"g":133,"b":16,"a":1,"rgba":"rgba(249, 133, 16, 1)"}
var euiColorVis8 = {"r":70,"g":26,"b":10,"a":1,"rgba":"rgba(70, 26, 10, 1)"}
var euiColorVis9 = {"r":146,"g":0,"b":0,"a":1,"rgba":"rgba(146, 0, 0, 1)"}
var euiColorChartLines = {"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"}
var euiColorChartBand = {"r":42,"g":44,"b":53,"a":1,"rgba":"rgba(42, 44, 53, 1)"}
var euiCodeBlockCommentColor = {"r":101,"g":101,"b":101,"a":1,"rgba":"rgba(101, 101, 101, 1)"}
var euiCodeBlockSelectorTagColor = {"r":199,"g":146,"b":234,"a":1,"rgba":"rgba(199, 146, 234, 1)"}
var euiCodeBlockStringColor = {"r":195,"g":232,"b":141,"a":1,"rgba":"rgba(195, 232, 141, 1)"}
var euiCodeBlockNumberColor = {"r":247,"g":118,"b":105,"a":1,"rgba":"rgba(247, 118, 105, 1)"}
var euiCodeBlockKeywordColor = {"r":199,"g":146,"b":234,"a":1,"rgba":"rgba(199, 146, 234, 1)"}
var euiCodeBlockFunctionTitleColor = {"r":117,"g":165,"b":255,"a":1,"rgba":"rgba(117, 165, 255, 1)"}
var euiCodeBlockTagColor = {"r":171,"g":178,"b":191,"a":1,"rgba":"rgba(171, 178, 191, 1)"}
var euiCodeBlockNameColor = {"r":224,"g":108,"b":117,"a":1,"rgba":"rgba(224, 108, 117, 1)"}
var euiCodeBlockTypeColor = {"r":218,"g":73,"b":57,"a":1,"rgba":"rgba(218, 73, 57, 1)"}
var euiCodeBlockAttributeColor = {"r":128,"g":203,"b":191,"a":1,"rgba":"rgba(128, 203, 191, 1)"}
var euiCodeBlockSymbolColor = {"r":199,"g":146,"b":234,"a":1,"rgba":"rgba(199, 146, 234, 1)"}
var euiCodeBlockParamsColor = {"r":238,"g":255,"b":247,"a":1,"rgba":"rgba(238, 255, 247, 1)"}
var euiCodeBlockMetaColor = {"r":117,"g":165,"b":255,"a":1,"rgba":"rgba(117, 165, 255, 1)"}
var euiCodeBlockTitleColor = {"r":117,"g":165,"b":255,"a":1,"rgba":"rgba(117, 165, 255, 1)"}
var euiCodeBlockSectionColor = {"r":255,"g":198,"b":109,"a":1,"rgba":"rgba(255, 198, 109, 1)"}
var euiCodeBlockAdditionBackgroundColor = {"r":20,"g":66,"b":18,"a":1,"rgba":"rgba(20, 66, 18, 1)"}
var euiCodeBlockAdditionColor = {"r":230,"g":225,"b":220,"a":1,"rgba":"rgba(230, 225, 220, 1)"}
var euiCodeBlockDeletionBackgroundColor = {"r":102,"g":0,"b":0,"a":1,"rgba":"rgba(102, 0, 0, 1)"}
var euiCodeBlockDeletionColor = {"r":230,"g":225,"b":220,"a":1,"rgba":"rgba(230, 225, 220, 1)"}
var euiCodeBlockSelectorClassColor = {"r":255,"g":203,"b":104,"a":1,"rgba":"rgba(255, 203, 104, 1)"}
var euiCodeBlockSelectorIdColor = {"r":247,"g":118,"b":105,"a":1,"rgba":"rgba(247, 118, 105, 1)"}
/* harmony default export */ __webpack_exports__["default"] = ({"euiColorPrimary":{"r":27,"g":169,"b":245,"a":1,"rgba":"rgba(27, 169, 245, 1)"},"euiColorSecondary":{"r":125,"g":226,"b":209,"a":1,"rgba":"rgba(125, 226, 209, 1)"},"euiColorAccent":{"r":249,"g":144,"b":192,"a":1,"rgba":"rgba(249, 144, 192, 1)"},"euiColorHighlight":{"r":46,"g":45,"b":37,"a":1,"rgba":"rgba(46, 45, 37, 1)"},"euiColorGhost":{"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"},"euiColorInk":{"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"},"euiColorSuccess":{"r":125,"g":226,"b":209,"a":1,"rgba":"rgba(125, 226, 209, 1)"},"euiColorWarning":{"r":255,"g":206,"b":122,"a":1,"rgba":"rgba(255, 206, 122, 1)"},"euiColorDanger":{"r":255,"g":102,"b":102,"a":1,"rgba":"rgba(255, 102, 102, 1)"},"euiColorEmptyShade":{"r":29,"g":30,"b":36,"a":1,"rgba":"rgba(29, 30, 36, 1)"},"euiColorLightestShade":{"r":37,"g":38,"b":46,"a":1,"rgba":"rgba(37, 38, 46, 1)"},"euiColorLightShade":{"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"},"euiColorMediumShade":{"r":83,"g":89,"b":102,"a":1,"rgba":"rgba(83, 89, 102, 1)"},"euiColorDarkShade":{"r":152,"g":162,"b":179,"a":1,"rgba":"rgba(152, 162, 179, 1)"},"euiColorDarkestShade":{"r":212,"g":218,"b":229,"a":1,"rgba":"rgba(212, 218, 229, 1)"},"euiColorFullShade":{"r":255,"g":255,"b":255,"a":1,"rgba":"rgba(255, 255, 255, 1)"},"euiTextColor":{"r":223,"g":229,"b":239,"a":1,"rgba":"rgba(223, 229, 239, 1)"},"euiLinkColor":{"r":27,"g":169,"b":245,"a":1,"rgba":"rgba(27, 169, 245, 1)"},"euiFocusBackgroundColor":{"r":35,"g":38,"b":53,"a":1,"rgba":"rgba(35, 38, 53, 1)"},"euiShadowColor":{"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"},"euiShadowColorLarge":{"r":0,"g":0,"b":0,"a":1,"rgba":"rgba(0, 0, 0, 1)"},"euiColorVis0":{"r":0,"g":179,"b":164,"a":1,"rgba":"rgba(0, 179, 164, 1)"},"euiColorVis1":{"r":49,"g":133,"b":252,"a":1,"rgba":"rgba(49, 133, 252, 1)"},"euiColorVis2":{"r":219,"g":19,"b":116,"a":1,"rgba":"rgba(219, 19, 116, 1)"},"euiColorVis3":{"r":73,"g":0,"b":146,"a":1,"rgba":"rgba(73, 0, 146, 1)"},"euiColorVis4":{"r":254,"g":182,"b":219,"a":1,"rgba":"rgba(254, 182, 219, 1)"},"euiColorVis5":{"r":230,"g":194,"b":32,"a":1,"rgba":"rgba(230, 194, 32, 1)"},"euiColorVis6":{"r":191,"g":161,"b":128,"a":1,"rgba":"rgba(191, 161, 128, 1)"},"euiColorVis7":{"r":249,"g":133,"b":16,"a":1,"rgba":"rgba(249, 133, 16, 1)"},"euiColorVis8":{"r":70,"g":26,"b":10,"a":1,"rgba":"rgba(70, 26, 10, 1)"},"euiColorVis9":{"r":146,"g":0,"b":0,"a":1,"rgba":"rgba(146, 0, 0, 1)"},"euiColorChartLines":{"r":52,"g":55,"b":65,"a":1,"rgba":"rgba(52, 55, 65, 1)"},"euiColorChartBand":{"r":42,"g":44,"b":53,"a":1,"rgba":"rgba(42, 44, 53, 1)"},"euiCodeBlockCommentColor":{"r":101,"g":101,"b":101,"a":1,"rgba":"rgba(101, 101, 101, 1)"},"euiCodeBlockSelectorTagColor":{"r":199,"g":146,"b":234,"a":1,"rgba":"rgba(199, 146, 234, 1)"},"euiCodeBlockStringColor":{"r":195,"g":232,"b":141,"a":1,"rgba":"rgba(195, 232, 141, 1)"},"euiCodeBlockNumberColor":{"r":247,"g":118,"b":105,"a":1,"rgba":"rgba(247, 118, 105, 1)"},"euiCodeBlockKeywordColor":{"r":199,"g":146,"b":234,"a":1,"rgba":"rgba(199, 146, 234, 1)"},"euiCodeBlockFunctionTitleColor":{"r":117,"g":165,"b":255,"a":1,"rgba":"rgba(117, 165, 255, 1)"},"euiCodeBlockTagColor":{"r":171,"g":178,"b":191,"a":1,"rgba":"rgba(171, 178, 191, 1)"},"euiCodeBlockNameColor":{"r":224,"g":108,"b":117,"a":1,"rgba":"rgba(224, 108, 117, 1)"},"euiCodeBlockTypeColor":{"r":218,"g":73,"b":57,"a":1,"rgba":"rgba(218, 73, 57, 1)"},"euiCodeBlockAttributeColor":{"r":128,"g":203,"b":191,"a":1,"rgba":"rgba(128, 203, 191, 1)"},"euiCodeBlockSymbolColor":{"r":199,"g":146,"b":234,"a":1,"rgba":"rgba(199, 146, 234, 1)"},"euiCodeBlockParamsColor":{"r":238,"g":255,"b":247,"a":1,"rgba":"rgba(238, 255, 247, 1)"},"euiCodeBlockMetaColor":{"r":117,"g":165,"b":255,"a":1,"rgba":"rgba(117, 165, 255, 1)"},"euiCodeBlockTitleColor":{"r":117,"g":165,"b":255,"a":1,"rgba":"rgba(117, 165, 255, 1)"},"euiCodeBlockSectionColor":{"r":255,"g":198,"b":109,"a":1,"rgba":"rgba(255, 198, 109, 1)"},"euiCodeBlockAdditionBackgroundColor":{"r":20,"g":66,"b":18,"a":1,"rgba":"rgba(20, 66, 18, 1)"},"euiCodeBlockAdditionColor":{"r":230,"g":225,"b":220,"a":1,"rgba":"rgba(230, 225, 220, 1)"},"euiCodeBlockDeletionBackgroundColor":{"r":102,"g":0,"b":0,"a":1,"rgba":"rgba(102, 0, 0, 1)"},"euiCodeBlockDeletionColor":{"r":230,"g":225,"b":220,"a":1,"rgba":"rgba(230, 225, 220, 1)"},"euiCodeBlockSelectorClassColor":{"r":255,"g":203,"b":104,"a":1,"rgba":"rgba(255, 203, 104, 1)"},"euiCodeBlockSelectorIdColor":{"r":247,"g":118,"b":105,"a":1,"rgba":"rgba(247, 118, 105, 1)"}});


/***/ }),

/***/ "./services/color/eui_palettes.ts":
/*!****************************************!*\
  !*** ./services/color/eui_palettes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.palettes = void 0;
var euiPaletteColorBlind = {
  colors: ['#1EA593', '#2B70F7', '#CE0060', '#38007E', '#FCA5D3', '#F37020', '#E49E29', '#B0916F', '#7B000B', '#34130C']
};
var euiPaletteForLightBackground = {
  colors: ['#006BB4', '#017D73', '#F5A700', '#BD271E', '#DD0A73']
};
var euiPaletteForDarkBackground = {
  colors: ['#1BA9F5', '#7DE2D1', '#F990C0', '#F66', '#FFCE7A']
};
var euiPaletteForStatus = {
  colors: ['#58BA6D', '#6ECE67', '#A5E26A', '#D2E26A', '#EBDF61', '#EBD361', '#EBC461', '#D99D4C', '#D97E4C', '#D75949']
};
var palettes = {
  euiPaletteColorBlind: euiPaletteColorBlind,
  euiPaletteForLightBackground: euiPaletteForLightBackground,
  euiPaletteForDarkBackground: euiPaletteForDarkBackground,
  euiPaletteForStatus: euiPaletteForStatus
};
exports.palettes = palettes;

/***/ }),

/***/ "./services/color/visualization_colors.ts":
/*!************************************************!*\
  !*** ./services/color/visualization_colors.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_VISUALIZATION_COLOR = exports.VISUALIZATION_COLORS = void 0;
// Array of color-blind safe colors to use in visualizations or other
// spots that need a large range of varied, qualitative colors.
var VISUALIZATION_COLORS = ['#00B3A4', '#3185FC', '#DB1374', '#490092', '#FEB6DB', '#E6C220', '#F98510', '#BFA180', '#461A0A', '#920000'];
exports.VISUALIZATION_COLORS = VISUALIZATION_COLORS;
var DEFAULT_VISUALIZATION_COLOR = VISUALIZATION_COLORS[1];
exports.DEFAULT_VISUALIZATION_COLOR = DEFAULT_VISUALIZATION_COLOR;

/***/ }),

/***/ "./themes/charts/themes.ts":
/*!*********************************!*\
  !*** ./themes/charts/themes.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EUI_SPARKLINE_THEME_PARTIAL = exports.EUI_CHARTS_THEME_DARK = exports.EUI_CHARTS_THEME_LIGHT = void 0;

var _eui_palettes = __webpack_require__(/*! ../../services/color/eui_palettes */ "./services/color/eui_palettes.ts");

var _visualization_colors = __webpack_require__(/*! ../../services/color/visualization_colors */ "./services/color/visualization_colors.ts");

var _colors = _interopRequireDefault(__webpack_require__(/*! !sass-vars-to-js-loader!../../global_styling/variables/_colors.scss */ "../node_modules/sass-vars-to-js-loader/index.js!./global_styling/variables/_colors.scss"));

var _eui_colors_dark = _interopRequireDefault(__webpack_require__(/*! !sass-vars-to-js-loader!../../themes/eui/eui_colors_dark.scss */ "../node_modules/sass-vars-to-js-loader/index.js!./themes/eui/eui_colors_dark.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var fontFamily = "'Inter UI', -apple-system, BlinkMacSystemFont,\n  'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

function createTheme(colors) {
  return {
    lineAnnotation: {
      line: {
        strokeWidth: 1,
        stroke: colors.euiColorDarkShade.rgba,
        opacity: 1
      },
      details: {
        fontSize: 10,
        fontFamily: fontFamily,
        fill: colors.euiColorDarkShade.rgba,
        padding: 0
      }
    },
    theme: {
      chartMargins: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      lineSeriesStyle: {
        line: {
          strokeWidth: 2
        },
        point: {
          fill: colors.euiColorEmptyShade.rgba,
          strokeWidth: 2,
          radius: 3
        }
      },
      areaSeriesStyle: {
        area: {
          opacity: 0.3
        },
        line: {
          strokeWidth: 2
        },
        point: {
          visible: false,
          fill: colors.euiColorEmptyShade.rgba,
          strokeWidth: 2,
          radius: 3
        }
      },
      barSeriesStyle: {
        displayValue: {
          fontSize: 8,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkShade.rgba
        }
      },
      scales: {
        barsPadding: 0.25,
        histogramPadding: 0.05
      },
      axes: {
        axisTitleStyle: {
          fontSize: 12,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkestShade.rgba,
          padding: 10
        },
        axisLineStyle: {
          stroke: colors.euiColorChartLines.rgba
        },
        tickLabelStyle: {
          fontSize: 10,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkShade.rgba,
          padding: 8
        },
        tickLineStyle: {
          visible: false,
          stroke: colors.euiColorChartLines.rgba,
          strokeWidth: 1
        },
        gridLineStyle: {
          horizontal: {
            visible: true,
            stroke: colors.euiColorChartLines.rgba,
            strokeWidth: 1,
            opacity: 1,
            dash: [0, 0]
          },
          vertical: {
            visible: true,
            stroke: colors.euiColorChartLines.rgba,
            strokeWidth: 1,
            opacity: 1,
            dash: [4, 4]
          }
        }
      },
      colors: {
        vizColors: _eui_palettes.palettes.euiPaletteColorBlind.colors,
        defaultVizColor: _visualization_colors.DEFAULT_VISUALIZATION_COLOR
      },
      crosshair: {
        band: {
          fill: colors.euiColorChartBand.rgba
        },
        line: {
          stroke: colors.euiColorDarkShade.rgba,
          strokeWidth: 1,
          dash: [4, 4]
        }
      }
    }
  };
}

var EUI_CHARTS_THEME_LIGHT = createTheme(_colors.default);
exports.EUI_CHARTS_THEME_LIGHT = EUI_CHARTS_THEME_LIGHT;
var EUI_CHARTS_THEME_DARK = createTheme(_eui_colors_dark.default);
exports.EUI_CHARTS_THEME_DARK = EUI_CHARTS_THEME_DARK;
var EUI_SPARKLINE_THEME_PARTIAL = {
  lineSeriesStyle: {
    point: {
      visible: false,
      strokeWidth: 1,
      radius: 1
    }
  },
  areaSeriesStyle: {
    point: {
      visible: false,
      strokeWidth: 1,
      radius: 1
    }
  }
};
exports.EUI_SPARKLINE_THEME_PARTIAL = EUI_SPARKLINE_THEME_PARTIAL;

/***/ })

/******/ })));
//# sourceMappingURL=eui_charts_theme.js.map