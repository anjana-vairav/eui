"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _required_props = require("../../test/required_props");

var _ = require("./");

var _droppable = require("./droppable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiDroppable', function () {
  test('is rendered', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDragDropContext, _extends({
      onDragEnd: handler
    }, _required_props.requiredProps), _react.default.createElement(_.EuiDroppable, {
      droppableId: "testDroppable"
    }, function () {
      return _react.default.createElement("div", null);
    })));
    expect(component).toMatchSnapshot();
  });
  test('can be given ReactElement children', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDragDropContext, _extends({
      onDragEnd: handler
    }, _required_props.requiredProps), _react.default.createElement(_.EuiDroppable, {
      droppableId: "testDroppable"
    }, _react.default.createElement("div", null))));
    expect(component).toMatchSnapshot();
  });
  describe('custom behavior', function () {
    describe('cloneDraggables', function () {
      var handler = jest.fn();
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDragDropContext, _extends({
        onDragEnd: handler
      }, _required_props.requiredProps), _react.default.createElement(_.EuiDroppable, {
        droppableId: "testDroppable",
        cloneDraggables: true
      }, _react.default.createElement(_droppable.EuiDroppableContext.Consumer, null, function (_ref) {
        var cloneItems = _ref.cloneItems;
        return _react.default.createElement("div", {
          "data-test-subj": "child"
        }, cloneItems ? 'true' : 'false');
      }))));
      test('sets `cloneItems` on proprietary context', function () {
        expect((0, _test.findTestSubject)(component, 'child').text()).toBe('true');
      });
      test('sets `isDropDisabled`', function () {
        expect(component.find('.euiDroppable--isDisabled').length).toBe(1);
      });
    });
  });
});