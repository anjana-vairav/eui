"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _checkbox = require("./checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

beforeAll(_test.startThrowingReactWarnings);
afterAll(_test.stopThrowingReactWarnings);
var checkboxRequiredProps = {
  id: 'id',
  onChange: function onChange() {}
};
describe('EuiCheckbox', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_checkbox.EuiCheckbox, _extends({
      id: "id",
      onChange: function onChange() {}
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('check is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_checkbox.EuiCheckbox, _extends({}, checkboxRequiredProps, {
        checked: true
      })));
      expect(component).toMatchSnapshot();
    });
    test('label is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_checkbox.EuiCheckbox, _extends({}, checkboxRequiredProps, {
        label: _react.default.createElement("span", null, "Label")
      })));
      expect(component).toMatchSnapshot();
    });
    describe('type', function () {
      _checkbox.TYPES.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_checkbox.EuiCheckbox, _extends({}, checkboxRequiredProps, {
            type: value
          })));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('disabled', function () {
      test('disabled is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_checkbox.EuiCheckbox, _extends({}, checkboxRequiredProps, {
          disabled: true
        })));
        expect(component).toMatchSnapshot();
      });
    });
  });
});