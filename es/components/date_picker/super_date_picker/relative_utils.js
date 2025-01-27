import dateMath from '@elastic/datemath';
import moment from 'moment';
import { get } from '../../../services/objects';
import { isString } from '../../../services/predicate';
import { relativeUnitsFromLargestToSmallest } from './relative_options';
var ROUND_DELIMETER = '/';
export function parseRelativeParts(value) {
  var matches = isString(value) && value.match(/now(([\-\+])([0-9]+)([smhdwMy])(\/[smhdwMy])?)?/);
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
  var duration = moment.duration(moment().diff(dateMath.parse(value)));
  var unitOp = '';

  for (var i = 0; i < relativeUnitsFromLargestToSmallest.length; i++) {
    var as = duration.as(relativeUnitsFromLargestToSmallest[i]);
    if (as < 0) unitOp = '+';

    if (Math.abs(as) > 1) {
      results.count = Math.round(Math.abs(as));
      results.unit = relativeUnitsFromLargestToSmallest[i] + unitOp;
      results.round = false;
      break;
    }
  }

  return results;
}
export function toRelativeStringFromParts(relativeParts) {
  var count = get(relativeParts, 'count', 0);
  var isRounded = get(relativeParts, 'round', false);

  if (count === 0 && !isRounded) {
    return 'now';
  }

  var matches = get(relativeParts, 'unit', 's').match(/([smhdwMy])(\+)?/);
  var unit = matches[1];
  var operator = matches && matches[2] ? matches[2] : '-';
  var round = isRounded ? "".concat(ROUND_DELIMETER).concat(unit) : '';
  return "now".concat(operator).concat(count).concat(unit).concat(round);
}