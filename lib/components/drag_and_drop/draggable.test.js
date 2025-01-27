"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiDraggable', function () {
  test('is rendered', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDragDropContext, _extends({
      onDragEnd: handler
    }, _required_props.requiredProps), _react.default.createElement(_.EuiDroppable, {
      droppableId: "testDroppable"
    }, _react.default.createElement(_.EuiDraggable, {
      draggableId: "testDraggable",
      index: 0
    }, function () {
      return _react.default.createElement("div", null, "Hello");
    }))));
    expect(component).toMatchSnapshot();
  });
  test('can be given ReactElement children', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDragDropContext, _extends({
      onDragEnd: handler
    }, _required_props.requiredProps), _react.default.createElement(_.EuiDroppable, {
      droppableId: "testDroppable"
    }, _react.default.createElement(_.EuiDraggable, {
      draggableId: "testDraggable",
      index: 0
    }, _react.default.createElement("div", null, "Hello")))));
    expect(component).toMatchSnapshot();
  });
});