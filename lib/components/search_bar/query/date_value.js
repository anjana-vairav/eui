"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateValueParser = exports.dateValue = exports.isDateValue = exports.dateValuesEqual = exports.DATE_TYPE = void 0;

var _predicate = require("../../../services/predicate");

var _date_format = require("./date_format");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE_TYPE = 'date';
exports.DATE_TYPE = DATE_TYPE;

var dateValuesEqual = function dateValuesEqual(v1, v2) {
  return v1.raw === v2.raw && v1.granularity === v2.granularity && v1.text === v2.text;
};

exports.dateValuesEqual = dateValuesEqual;

var isDateValue = function isDateValue(value) {
  return !!value && value.type === DATE_TYPE && !!value.raw && !!value.text && !!value.resolve;
};

exports.isDateValue = isDateValue;

var dateValue = function dateValue(raw, granularity) {
  var dateFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _date_format.dateFormat;

  if (!raw) {
    return undefined;
  }

  if ((0, _predicate.isDateLike)(raw)) {
    return {
      type: DATE_TYPE,
      raw: raw,
      granularity: granularity,
      text: dateFormat.print(raw),
      resolve: function resolve() {
        return (0, _moment.default)(raw);
      }
    };
  }

  if ((0, _predicate.isNumber)(raw)) {
    return {
      type: DATE_TYPE,
      raw: raw,
      granularity: granularity,
      text: raw.toString(),
      resolve: function resolve() {
        return (0, _moment.default)(raw);
      }
    };
  }

  var text = raw.toString();
  return {
    type: DATE_TYPE,
    raw: raw,
    granularity: granularity,
    text: text,
    resolve: function resolve() {
      return dateFormat.parse(text);
    }
  };
};

exports.dateValue = dateValue;

var dateValueParser = function dateValueParser() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _date_format.dateFormat;
  return function (text) {
    var parsed = format.parse(text);
    return dateValue(text, (0, _date_format.dateGranularity)(parsed), format);
  };
};

exports.dateValueParser = dateValueParser;