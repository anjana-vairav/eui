"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _selectable_search = require("./selectable_search");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiSelectableSearch', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_selectable_search.EuiSelectableSearch, _extends({
      options: []
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('defaultValue', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_selectable_search.EuiSelectableSearch, {
        options: [],
        defaultValue: "Mi"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});