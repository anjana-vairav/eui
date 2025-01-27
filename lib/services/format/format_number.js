"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumber = void 0;

var _numeral = _interopRequireDefault(require("numeral"));

var _predicate = require("../predicate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberFormatAliases = {
  decimal1: '0,0.0',
  decimal2: '0,0.00',
  decimal3: '0,0.000',
  ordinal: '0o',
  integer: '0,0'
};

var formatNumber = function formatNumber(value) {
  var numberFormatOrConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var format;
  var nil = '';
  var round;

  if ((0, _predicate.isString)(numberFormatOrConfig)) {
    format = numberFormatOrConfig;
  } else {
    format = numberFormatOrConfig.format;
    nil = numberFormatOrConfig.nil || '';
    round = numberFormatOrConfig.round;
  }

  if (!format) {
    return (0, _predicate.isNil)(value) ? nil : value.toString();
  }

  var roundingFunc = round ? Math.round : Math.floor;
  var numberFormat = numberFormatAliases[format] || format;
  return (0, _predicate.isNil)(value) ? nil : (0, _numeral.default)(value).format(numberFormat, roundingFunc);
};

exports.formatNumber = formatNumber;