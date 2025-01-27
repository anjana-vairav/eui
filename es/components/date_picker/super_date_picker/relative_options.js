export var relativeOptions = [{
  text: 'Seconds ago',
  value: 's'
}, {
  text: 'Minutes ago',
  value: 'm'
}, {
  text: 'Hours ago',
  value: 'h'
}, {
  text: 'Days ago',
  value: 'd'
}, {
  text: 'Weeks ago',
  value: 'w'
}, {
  text: 'Months ago',
  value: 'M'
}, {
  text: 'Years ago',
  value: 'y'
}, {
  text: 'Seconds from now',
  value: 's+'
}, {
  text: 'Minutes from now',
  value: 'm+'
}, {
  text: 'Hours from now',
  value: 'h+'
}, {
  text: 'Days from now',
  value: 'd+'
}, {
  text: 'Weeks from now',
  value: 'w+'
}, {
  text: 'Months from now',
  value: 'M+'
}, {
  text: 'Years from now',
  value: 'y+'
}];
export var relativeUnitsFromLargestToSmallest = relativeOptions.filter(function (_ref) {
  var value = _ref.value;
  return !value.includes('+');
}).map(function (_ref2) {
  var value = _ref2.value;
  return value;
}).reverse();