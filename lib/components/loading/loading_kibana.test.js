"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _loading_kibana = require("./loading_kibana");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiLoadingKibana', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_loading_kibana.EuiLoadingKibana, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('size', function () {
    _loading_kibana.SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_loading_kibana.EuiLoadingKibana, {
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});