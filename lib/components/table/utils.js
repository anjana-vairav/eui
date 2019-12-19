"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveWidthAsStyle = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var resolveWidthAsStyle = function resolveWidthAsStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var width = arguments.length > 1 ? arguments[1] : undefined;

  var styleWidth = style.width,
      styleRest = _objectWithoutProperties(style, ["width"]);

  var attrWidth = width;

  if (attrWidth != null && (typeof attrWidth === 'number' || !isNaN(Number(attrWidth))) // transform {number} or unitless 'number' to px string
  ) {
      attrWidth = "".concat(attrWidth, "px");
    }

  if (styleWidth && attrWidth) {
    console.warn('Two `width` properties were provided. Provide only one of `style.width` or `width` to avoid conflicts.');
  }

  return _objectSpread({}, styleRest, {
    width: attrWidth || styleWidth
  });
};

exports.resolveWidthAsStyle = resolveWidthAsStyle;