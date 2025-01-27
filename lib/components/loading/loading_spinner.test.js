"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _loading_spinner = require("./loading_spinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiLoadingSpinner', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_loading_spinner.EuiLoadingSpinner, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('size', function () {
    _loading_spinner.SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_loading_spinner.EuiLoadingSpinner, {
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});