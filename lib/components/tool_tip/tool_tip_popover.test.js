"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _tool_tip_popover = require("./tool_tip_popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiToolTipPopover', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)( // tslint:disable-next-line:no-empty
    _react.default.createElement(_tool_tip_popover.EuiToolTipPopover, _extends({
      positionToolTip: function positionToolTip() {}
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
});