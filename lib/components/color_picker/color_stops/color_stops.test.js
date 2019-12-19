"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _color_stops = require("./color_stops");

var _services = require("../../../services");

var _test = require("../../../test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('../../portal', function () {
  return {
    // @ts-ignore
    EuiPortal: function EuiPortal(_ref) {
      var children = _ref.children;
      return children;
    }
  };
});
var onChange = jest.fn();
var colorStopsArray = [{
  stop: 0,
  color: '#FF0000'
}, {
  stop: 25,
  color: '#00FF00'
}, {
  stop: 35,
  color: '#0000FF'
}]; // Note: A couple tests that would be nice, but can't be accomplished at the moment:
// - Tab to bypass thumbs (tabindex="-1" not respected)
// - Drag to reposition thumb (we can't get real page position info)

test('renders EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders free-range EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: []
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders min-only EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: [],
    min: 0
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders max-only EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: [],
    max: 100
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders compressed EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100,
    compressed: true
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders readOnly EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100,
    readOnly: true
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders fullWidth EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100,
    fullWidth: true
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders disabled EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100,
    disabled: true
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders fixed stop EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100,
    stopType: "fixed"
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('renders empty EuiColorStops', function () {
  var colorStops = (0, _enzyme.render)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: [],
    min: 0,
    max: 100
  }, _test.requiredProps)));
  expect(colorStops).toMatchSnapshot();
});
test('popover color selector is shown when the thumb is clicked', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb').first().simulate('mousedown', {
    pageX: 0,
    pageY: 0
  });
  var colorSelector = (0, _test.findTestSubject)(colorStops, 'euiColorStopPopover');
  expect(colorSelector.length).toBe(1);
});
test('stop input updates stops', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb').first().simulate('mousedown', {
    pageX: 0,
    pageY: 0
  });
  var event = {
    target: {
      value: '10'
    }
  };
  var inputs = colorStops.find('input[type="number"]');
  expect(inputs.length).toBe(1);
  inputs.simulate('change', event);
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith([{
    color: '#FF0000',
    stop: 10
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], false);
});
test('stop input updates stops with error prevention (reset to bounds)', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb').first().simulate('mousedown', {
    pageX: 0,
    pageY: 0
  });
  var event = {
    target: {
      value: '1000'
    }
  };
  var inputs = colorStops.find('input[type="number"]');
  inputs.simulate('change', event);
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith([{
    color: '#FF0000',
    stop: 100
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], false);
});
test('hex input updates stops', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb').first().simulate('mousedown', {
    pageX: 0,
    pageY: 0
  });
  var event = {
    target: {
      value: '#FFFFFF'
    }
  };
  var inputs = colorStops.find('input[type="text"]');
  expect(inputs.length).toBe(1);
  inputs.simulate('change', event);
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith([{
    color: '#FFFFFF',
    stop: 0
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], false);
});
test('hex input updates stops with error', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb').first().simulate('mousedown', {
    pageX: 0,
    pageY: 0
  });
  var event = {
    target: {
      value: '#FFFFF'
    }
  };
  var inputs = colorStops.find('input[type="text"]');
  inputs.simulate('change', event);
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith([{
    color: '#FFFFF',
    stop: 0
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], true // isInvalid
  );
});
test('picker updates stops', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb').first().simulate('mousedown', {
    pageX: 0,
    pageY: 0
  });
  var swatches = colorStops.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(_services.VISUALIZATION_COLORS.length);
  swatches.first().simulate('click');
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith([{
    color: _services.VISUALIZATION_COLORS[0],
    stop: 0
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], false);
});
test('thumb focus changes', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  var wrapper = (0, _test.findTestSubject)(colorStops, 'euiColorStops');
  var thumbs = (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb');
  wrapper.simulate('focus');
  wrapper.simulate('keydown', {
    keyCode: _services.keyCodes.DOWN
  });
  expect(thumbs.first().getDOMNode()).toEqual(document.activeElement);
  thumbs.first().simulate('keydown', {
    keyCode: _services.keyCodes.DOWN
  });
  expect(thumbs.at(1).getDOMNode()).toEqual(document.activeElement);
});
test('thumb direction movement', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  var wrapper = (0, _test.findTestSubject)(colorStops, 'euiColorStops');
  var thumbs = (0, _test.findTestSubject)(colorStops, 'euiColorStopThumb');
  wrapper.simulate('focus');
  wrapper.simulate('keydown', {
    keyCode: _services.keyCodes.DOWN
  });
  expect(thumbs.first().getDOMNode()).toEqual(document.activeElement);
  thumbs.first().simulate('keydown', {
    keyCode: _services.keyCodes.RIGHT
  });
  expect(onChange).toBeCalledWith([{
    color: '#FF0000',
    stop: 1
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], false);
  thumbs.first().simulate('keydown', {
    keyCode: _services.keyCodes.LEFT
  });
  expect(onChange).toBeCalledWith([{
    color: '#FF0000',
    stop: 0
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }], false);
});
test('add new thumb via keyboard', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  var wrapper = (0, _test.findTestSubject)(colorStops, 'euiColorStops');
  wrapper.simulate('focus');
  wrapper.simulate('keydown', {
    keyCode: _services.keyCodes.ENTER
  });
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith([{
    color: '#FF0000',
    stop: 0
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }, {
    color: _services.DEFAULT_VISUALIZATION_COLOR,
    stop: 45
  }], false);
});
test('add new thumb via click', function () {
  var colorStops = (0, _enzyme.mount)(_react.default.createElement(_color_stops.EuiColorStops, _extends({
    label: "Test",
    onChange: onChange,
    colorStops: colorStopsArray,
    min: 0,
    max: 100
  }, _test.requiredProps)));
  var wrapper = (0, _test.findTestSubject)(colorStops, 'euiColorStopsAdd');
  wrapper.simulate('click', {
    pageX: 45,
    pageY: 0
  });
  expect(onChange).toBeCalled(); // This is a very odd expecation.
  // But we can't get actual page positions in this environment (no getBoundingClientRect)
  // So we'll expect the _correct_ color and _incorrect_ stop value (NaN),
  // with the `isInvalid` arg _correctly_ true as a result.

  expect(onChange).toBeCalledWith([{
    color: '#FF0000',
    stop: 0
  }, {
    color: '#00FF00',
    stop: 25
  }, {
    color: '#0000FF',
    stop: 35
  }, {
    color: _services.DEFAULT_VISUALIZATION_COLOR,
    stop: NaN
  }], true // isInvalid
  );
});