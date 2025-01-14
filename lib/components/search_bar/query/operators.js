"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lte = exports.lt = exports.gte = exports.gt = exports.exact = exports.eq = void 0;

var _date_format = require("./date_format");

var _date_value = require("./date_value");

var _predicate = require("../../../services/predicate");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var utc = _moment.default.utc;

var resolveValueAsDate = function resolveValueAsDate(value) {
  if (_moment.default.isMoment(value)) {
    return value;
  }

  if (_moment.default.isDate(value) || (0, _predicate.isNumber)(value)) {
    return (0, _moment.default)(value);
  }

  return _date_format.dateFormat.parse(value.toString());
};

var defaultEqOptions = {
  ignoreCase: true
};

var eq = function eq(fieldValue, clauseValue) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options = _objectSpread({}, defaultEqOptions, options);

  if ((0, _predicate.isNil)(fieldValue) || (0, _predicate.isNil)(clauseValue)) {
    return fieldValue === clauseValue;
  }

  if ((0, _date_value.isDateValue)(clauseValue)) {
    var dateFieldValue = resolveValueAsDate(fieldValue);

    if (clauseValue.granularity) {
      return clauseValue.granularity.isSame(dateFieldValue, clauseValue.resolve());
    }

    return dateFieldValue.isSame(clauseValue.resolve());
  }

  if ((0, _predicate.isString)(fieldValue)) {
    if (options.exactMatch === true) {
      return options.ignoreCase ? fieldValue.toLowerCase() === clauseValue.toString().toLowerCase() : fieldValue === clauseValue.toString();
    } else {
      return options.ignoreCase ? fieldValue.toLowerCase().includes(clauseValue.toString().toLowerCase()) : fieldValue.includes(clauseValue.toString());
    }
  }

  if ((0, _predicate.isNumber)(fieldValue)) {
    clauseValue = Number(clauseValue);
    return fieldValue === clauseValue;
  }

  if ((0, _predicate.isBoolean)(fieldValue)) {
    return clauseValue === fieldValue;
  }

  if ((0, _predicate.isDateLike)(fieldValue)) {
    var date = resolveValueAsDate(clauseValue);

    if (!date.isValid()) {
      return false;
    }

    var granularity = (0, _date_format.dateGranularity)(date);

    if (!granularity) {
      return utc(fieldValue).isSame(date);
    }

    return granularity.isSame(fieldValue, date);
  }

  if ((0, _predicate.isArray)(fieldValue)) {
    if (fieldValue.length > 0) {
      return fieldValue.some(function (item) {
        return eq(item, clauseValue, options);
      });
    } else {
      return eq('', clauseValue, options);
    }
  }

  return false; // unknown value type
};

exports.eq = eq;

var exact = function exact(fieldValue, clauseValue) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return eq(fieldValue, clauseValue, _objectSpread({}, options, {
    exactMatch: true
  }));
};

exports.exact = exact;

var greaterThen = function greaterThen(fieldValue, clauseValue) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _date_value.isDateValue)(clauseValue)) {
    var clauseDateValue = clauseValue.resolve();

    if (!clauseValue.granularity) {
      return inclusive ? utc(fieldValue).isSameOrAfter(clauseDateValue) : utc(fieldValue).isAfter(clauseDateValue);
    }

    if (inclusive) {
      return utc(fieldValue).isSameOrAfter(clauseValue.granularity.start(clauseDateValue));
    }

    return utc(fieldValue).isSameOrAfter(clauseValue.granularity.startOfNext(clauseDateValue));
  }

  if ((0, _predicate.isString)(fieldValue)) {
    var str = clauseValue.toString();
    return inclusive ? fieldValue >= str : fieldValue > str;
  }

  if ((0, _predicate.isNumber)(fieldValue)) {
    var number = Number(clauseValue);
    return inclusive ? fieldValue >= number : fieldValue > number;
  }

  if ((0, _predicate.isDateLike)(fieldValue)) {
    var date = resolveValueAsDate(clauseValue);
    var granularity = (0, _date_format.dateGranularity)(date);

    if (!granularity) {
      return inclusive ? utc(fieldValue).isSameOrAfter(date) : utc(fieldValue).isAfter(date);
    }

    if (inclusive) {
      return utc(fieldValue).isSameOrAfter(granularity.start(date));
    }

    return utc(fieldValue).isSameOrAfter(granularity.startOfNext(date));
  }

  if ((0, _predicate.isArray)(fieldValue)) {
    return fieldValue.all(function (item) {
      return greaterThen(item, clauseValue, inclusive);
    });
  }

  return false; // unsupported value type
};

var gt = function gt(fieldValue, clauseValue) {
  if ((0, _predicate.isNil)(fieldValue) || (0, _predicate.isNil)(clauseValue)) {
    return false;
  }

  return greaterThen(fieldValue, clauseValue);
};

exports.gt = gt;

var gte = function gte(fieldValue, clauseValue) {
  if ((0, _predicate.isNil)(fieldValue) || (0, _predicate.isNil)(clauseValue)) {
    return fieldValue === clauseValue;
  }

  return greaterThen(fieldValue, clauseValue, true);
};

exports.gte = gte;

var lt = function lt(fieldValue, clauseValue) {
  if ((0, _predicate.isNil)(fieldValue) || (0, _predicate.isNil)(clauseValue)) {
    return false;
  }

  return !greaterThen(fieldValue, clauseValue, true);
};

exports.lt = lt;

var lte = function lte(fieldValue, clauseValue) {
  if ((0, _predicate.isNil)(fieldValue) || (0, _predicate.isNil)(clauseValue)) {
    return fieldValue === clauseValue;
  }

  return !greaterThen(fieldValue, clauseValue);
};

exports.lte = lte;