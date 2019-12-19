"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _radio = require("./radio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiRadio', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_radio.EuiRadio, _extends({
      id: "id",
      onChange: function onChange() {}
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('checked is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_radio.EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        checked: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('label is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_radio.EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        label: _react.default.createElement("span", null, "Label")
      }));
      expect(component).toMatchSnapshot();
    });
    test('value is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_radio.EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        value: 'bobbins'
      }));
      expect(component).toMatchSnapshot();
    });
    test('disabled is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_radio.EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        disabled: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
});