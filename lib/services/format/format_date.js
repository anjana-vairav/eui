"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = exports.dateFormatAliases = void 0;

var _predicate = require("../predicate");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var calendar = function calendar(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var refTime = options.refTime;
  return (0, _moment.default)(value).calendar(refTime, options);
};

var dateFormatAliases = {
  date: 'D MMM YYYY',
  longDate: 'DD MMMM YYYY',
  shortDate: 'D MMM YY',
  dateTime: 'D MMM YYYY HH:mm',
  longDateTime: 'DD MMMM YYYY HH:mm:ss',
  shortDateTime: 'D MMM YY HH:mm',
  dobShort: 'Do MMM YY',
  dobLong: 'Do MMMM YYYY',
  iso8601: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  calendar: calendar,
  calendarDateTime: function calendarDateTime(value, options) {
    return calendar(value, _objectSpread({
      sameDay: '[Today at] H:mmA',
      nextDay: '[Tomorrow at] H:mmA',
      nextWeek: 'dddd [at] H:mmA',
      lastDay: '[Yesterday at] H:mmA',
      lastWeek: '[Last] dddd [at] H:mmA',
      sameElse: 'Do MMM YYYY [at] H:mmA'
    }, options));
  },
  calendarDate: function calendarDate(value, options) {
    return calendar(value, _objectSpread({
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'Do MMM YYYY'
    }, options));
  }
};
exports.dateFormatAliases = dateFormatAliases;

function isStringADateFormat(x) {
  return dateFormatAliases.hasOwnProperty(x);
}

function instanceOfFormatDateConfig(x) {
  return _typeof(x) === 'object' && (x.hasOwnProperty('format') || x.hasOwnProperty('nil') || x.hasOwnProperty('options'));
}

var formatDate = function formatDate(value) {
  var dateFormatKeyOrConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dateTime';

  if ((0, _predicate.isString)(dateFormatKeyOrConfig)) {
    if ((0, _predicate.isNil)(value)) {
      return '';
    }

    var dateFormatStrOrFunc = isStringADateFormat(dateFormatKeyOrConfig) ? dateFormatAliases[dateFormatKeyOrConfig] : dateFormatKeyOrConfig;

    if ((0, _predicate.isFunction)(dateFormatStrOrFunc)) {
      return dateFormatStrOrFunc(value, {});
    }

    if ((0, _predicate.isString)(dateFormatStrOrFunc)) {
      return (0, _moment.default)(value).format(dateFormatStrOrFunc);
    }
  }

  if (instanceOfFormatDateConfig(dateFormatKeyOrConfig)) {
    var _dateFormatKeyOrConfi = dateFormatKeyOrConfig.format,
        _format = _dateFormatKeyOrConfi === void 0 ? 'dateTime' : _dateFormatKeyOrConfi,
        _dateFormatKeyOrConfi2 = dateFormatKeyOrConfig.nil,
        _nil = _dateFormatKeyOrConfi2 === void 0 ? '' : _dateFormatKeyOrConfi2,
        _options = dateFormatKeyOrConfig.options;

    var dateFormat = dateFormatAliases[_format] || _format;

    if ((0, _predicate.isNil)(value)) {
      return _nil;
    }

    if ((0, _predicate.isFunction)(dateFormat)) {
      return dateFormat(value, _options);
    }

    if ((0, _predicate.isString)(dateFormat)) {
      return (0, _moment.default)(value).format(dateFormat);
    }
  }

  throw new Error("Failed to format value using dateFormatKeyOrConfig: ".concat(dateFormatKeyOrConfig));
};

exports.formatDate = formatDate;