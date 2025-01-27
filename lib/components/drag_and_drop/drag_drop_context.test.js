"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _required_props = require("../../test/required_props");

var _ = require("./");

var _drag_drop_context = require("./drag_drop_context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiDragDropContext', function () {
  test('is rendered', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDragDropContext, _extends({
      onDragEnd: handler
    }, _required_props.requiredProps), _react.default.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  describe('custom behavior', function () {
    describe('isDraggingType', function () {
      test('is set on proprietary context', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDragDropContext, _extends({
          onDragEnd: handler
        }, _required_props.requiredProps), _react.default.createElement(_drag_drop_context.EuiDragDropContextContext.Consumer, null, function (value) {
          return _react.default.createElement("div", {
            "data-test-subj": "child"
          }, value.hasOwnProperty('isDraggingType') ? 'true' : 'false');
        })));
        expect((0, _test.findTestSubject)(component, 'child').text()).toBe('true');
      });
    });
  });
});