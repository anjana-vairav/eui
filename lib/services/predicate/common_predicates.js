"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDateLike = exports.isDate = exports.isMoment = exports.isNil = exports.isNull = exports.isUndefined = exports.never = exports.always = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var always = function always(_value) {
  return true;
};

exports.always = always;

var never = function never(_value) {
  return false;
};

exports.never = never;

var isUndefined = function isUndefined(value) {
  return value === undefined;
};

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var isNil = function isNil(value) {
  return isUndefined(value) || isNull(value);
};

exports.isNil = isNil;

var isMoment = function isMoment(value) {
  return _moment.default.isMoment(value);
};

exports.isMoment = isMoment;

var isDate = function isDate(value) {
  return _moment.default.isDate(value);
};

exports.isDate = isDate;

var isDateLike = function isDateLike(value) {
  return isMoment(value) || isDate(value);
};

exports.isDateLike = isDateLike;