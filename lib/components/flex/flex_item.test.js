"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _flex_item = require("./flex_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

beforeAll(_test.startThrowingReactWarnings);
afterAll(_test.stopThrowingReactWarnings);
describe('EuiFlexItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flex_item.EuiFlexItem, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('grow', function () {
    _flex_item.GROW_SIZES.concat([true, false]).forEach(function (value) {
      test("".concat(value, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_flex_item.EuiFlexItem, {
          grow: value
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});