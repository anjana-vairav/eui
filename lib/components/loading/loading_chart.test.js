"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _loading_chart = require("./loading_chart");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiLoadingChart', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_loading_chart.EuiLoadingChart, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('mono is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_loading_chart.EuiLoadingChart, {
      mono: true
    }));
    expect(component).toMatchSnapshot();
  });
  describe('size', function () {
    _loading_chart.SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_loading_chart.EuiLoadingChart, {
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});