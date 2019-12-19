"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _card_select = require("./card_select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiCardSelect', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_card_select.EuiCardSelect, _extends({
      onClick: function onClick() {}
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('isSelected', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card_select.EuiCardSelect, {
        onClick: function onClick() {},
        isSelected: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('isDisabled', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card_select.EuiCardSelect, {
        onClick: function onClick() {},
        isDisabled: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('can override color', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card_select.EuiCardSelect, {
        onClick: function onClick() {},
        color: "danger"
      }));
      expect(component).toMatchSnapshot();
    });
    test('can override text', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card_select.EuiCardSelect, {
        onClick: function onClick() {},
        children: "Custom text"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});