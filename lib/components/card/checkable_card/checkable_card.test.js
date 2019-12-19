"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _checkable_card = require("./checkable_card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var checkablePanelRequiredProps = {
  label: 'Label',
  id: 'id',
  onChange: function onChange() {}
};
describe('EuiCheckableCard', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_checkable_card.EuiCheckableCard, _extends({}, _required_props.requiredProps, checkablePanelRequiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('renders a checkbox when specified', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_checkable_card.EuiCheckableCard, _extends({}, _required_props.requiredProps, checkablePanelRequiredProps, {
      checkableType: "checkbox"
    })));
    expect(component).toMatchSnapshot();
  });
});