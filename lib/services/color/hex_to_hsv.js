"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToHsv = hexToHsv;

var _hex_to_rgb = require("./hex_to_rgb");

var _rgb_to_hsv = require("./rgb_to_hsv");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function hexToHsv(hex) {
  var _hexToRgb = (0, _hex_to_rgb.hexToRgb)(hex),
      _hexToRgb2 = _slicedToArray(_hexToRgb, 3),
      r = _hexToRgb2[0],
      g = _hexToRgb2[1],
      b = _hexToRgb2[2];

  return (0, _rgb_to_hsv.rgbToHsv)({
    r: r,
    g: g,
    b: b
  });
}