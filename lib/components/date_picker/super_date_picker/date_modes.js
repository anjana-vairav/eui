"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateMode = getDateMode;
exports.toAbsoluteString = toAbsoluteString;
exports.toRelativeString = toRelativeString;
exports.DATE_MODES = void 0;

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _relative_utils = require("./relative_utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE_MODES = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
  NOW: 'now'
};
exports.DATE_MODES = DATE_MODES;

function getDateMode(value) {
  if (value === 'now') {
    return DATE_MODES.NOW;
  }

  if (value.includes('now')) {
    return DATE_MODES.RELATIVE;
  }

  return DATE_MODES.ABSOLUTE;
}

function toAbsoluteString(value, roundUp) {
  var valueAsMoment = _datemath.default.parse(value, {
    roundUp: roundUp
  });

  if (!valueAsMoment) {
    return value;
  }

  return valueAsMoment.toISOString();
}

function toRelativeString(value) {
  return (0, _relative_utils.toRelativeStringFromParts)((0, _relative_utils.parseRelativeParts)(value));
}