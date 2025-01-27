"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRelativeParts = parseRelativeParts;
exports.toRelativeStringFromParts = toRelativeStringFromParts;

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _moment = _interopRequireDefault(require("moment"));

var _objects = require("../../../services/objects");

var _predicate = require("../../../services/predicate");

var _relative_options = require("./relative_options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROUND_DELIMETER = '/';

function parseRelativeParts(value) {
  var matches = (0, _predicate.isString)(value) && value.match(/now(([\-\+])([0-9]+)([smhdwMy])(\/[smhdwMy])?)?/);
  var isNow = matches && !matches[1];
  var operator = matches && matches[2];
  var count = matches && matches[3];
  var unit = matches && matches[4];
  var roundBy = matches && matches[5];

  if (isNow) {
    return {
      count: 0,
      unit: 's',
      round: false
    };
  }

  if (count && unit) {
    var isRounded = roundBy ? true : false;
    return {
      count: parseInt(count, 10),
      unit: operator === '+' ? "".concat(unit, "+") : unit,
      round: isRounded,
      roundUnit: isRounded ? roundBy.replace(ROUND_DELIMETER, '') : undefined
    };
  }

  var results = {
    count: 0,
    unit: 's',
    round: false
  };

  var duration = _moment.default.duration((0, _moment.default)().diff(_datemath.default.parse(value)));

  var unitOp = '';

  for (var i = 0; i < _relative_options.relativeUnitsFromLargestToSmallest.length; i++) {
    var as = duration.as(_relative_options.relativeUnitsFromLargestToSmallest[i]);
    if (as < 0) unitOp = '+';

    if (Math.abs(as) > 1) {
      results.count = Math.round(Math.abs(as));
      results.unit = _relative_options.relativeUnitsFromLargestToSmallest[i] + unitOp;
      results.round = false;
      break;
    }
  }

  return results;
}

function toRelativeStringFromParts(relativeParts) {
  var count = (0, _objects.get)(relativeParts, 'count', 0);
  var isRounded = (0, _objects.get)(relativeParts, 'round', false);

  if (count === 0 && !isRounded) {
    return 'now';
  }

  var matches = (0, _objects.get)(relativeParts, 'unit', 's').match(/([smhdwMy])(\+)?/);
  var unit = matches[1];
  var operator = matches && matches[2] ? matches[2] : '-';
  var round = isRounded ? "".concat(ROUND_DELIMETER).concat(unit) : '';
  return "now".concat(operator).concat(count).concat(unit).concat(round);
}