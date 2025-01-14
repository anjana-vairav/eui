"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsvToHex = hsvToHex;

var _hsv_to_rgb = require("./hsv_to_rgb");

var _rgb_to_hex = require("./rgb_to_hex");

function hsvToHex(_ref) {
  var h = _ref.h,
      s = _ref.s,
      v = _ref.v;

  var _hsvToRgb = (0, _hsv_to_rgb.hsvToRgb)({
    h: h,
    s: s,
    v: v
  }),
      r = _hsvToRgb.r,
      g = _hsvToRgb.g,
      b = _hsvToRgb.b;

  return (0, _rgb_to_hex.rgbToHex)("rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")"));
}