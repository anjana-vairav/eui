"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.times = times;
exports.memoize = memoize;
exports.browserTick = void 0;

var _times2 = _interopRequireDefault(require("lodash/times"));

var _memoize2 = _interopRequireDefault(require("lodash/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function times(count, iteratee) {
  if (iteratee === undefined) {
    return (0, _times2.default)(count);
  }

  return (0, _times2.default)(count, iteratee);
}
/* eslint-enable import/export */
// eslint-disable-next-line space-before-function-paren


function memoize(func, resolver) {
  return (0, _memoize2.default)(func, resolver);
}

var browserTick = function browserTick(callback) {
  requestAnimationFrame(callback);
};

exports.browserTick = browserTick;