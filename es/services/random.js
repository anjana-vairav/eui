function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import moment from 'moment';
import { isNil } from './predicate';
import { times } from './utils';
var defaultRand = Math.random;
export var Random = function Random() {
  var _this = this;

  var rand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRand;

  _classCallCheck(this, Random);

  _defineProperty(this, "rand", void 0);

  _defineProperty(this, "boolean", function () {
    return _this.rand() > 0.5;
  });

  _defineProperty(this, "number", function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var min = isNil(options.min) ? Number.MIN_VALUE : options.min;
      var max = isNil(options.max) ? Number.MAX_VALUE : options.max;
      var delta = _this.rand() * (max - min);
      return min + delta;
    }();
  });

  _defineProperty(this, "integer", function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var min = Math.ceil(isNil(options.min) ? Number.MIN_VALUE : options.min);
      var max = Math.floor(isNil(options.max) ? Number.MAX_VALUE : options.max);
      var delta = Math.floor(_this.rand() * (max - min + 1));
      return min + delta;
    }();
  });

  _defineProperty(this, "oneOf", function (values) {
    return values[Math.floor(_this.rand() * values.length)];
  });

  _defineProperty(this, "oneToOne", function (values, index) {
    return values[index];
  });

  _defineProperty(this, "setOf", function (values) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var count = _this.integer(_objectSpread({
      min: 0,
      max: values.length
    }, options));

    var copy = _toConsumableArray(values);

    return times(count, function () {
      var value = _this.oneOf(copy);

      copy.splice(copy.indexOf(value), 1);
      return value;
    });
  });

  _defineProperty(this, "date", function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var min = isNil(options.min) ? new Date(0) : options.min;
      var max = isNil(options.max) ? new Date(Date.now()) : options.max;
      var minMls = min.getTime();
      var maxMls = max.getTime();

      var time = _this.integer({
        min: minMls,
        max: maxMls
      });

      return new Date(time);
    }();
  });

  _defineProperty(this, "moment", function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var min = isNil(options.min) ? moment(0) : options.min;
      var max = isNil(options.max) ? moment() : options.max;
      var minMls = +min;
      var maxMls = +max;

      var time = _this.integer({
        min: minMls,
        max: maxMls
      });

      return moment(time);
    }();
  });

  this.rand = rand;
};