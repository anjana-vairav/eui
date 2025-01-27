function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { findTestSubject } from '../../test';
import { requiredProps } from '../../test/required_props';
import { EuiDragDropContext, EuiDroppable } from './';
import { EuiDroppableContext } from './droppable';
describe('EuiDroppable', function () {
  test('is rendered', function () {
    var handler = jest.fn();
    var component = render(React.createElement(EuiDragDropContext, _extends({
      onDragEnd: handler
    }, requiredProps), React.createElement(EuiDroppable, {
      droppableId: "testDroppable"
    }, function () {
      return React.createElement("div", null);
    })));
    expect(component).toMatchSnapshot();
  });
  test('can be given ReactElement children', function () {
    var handler = jest.fn();
    var component = render(React.createElement(EuiDragDropContext, _extends({
      onDragEnd: handler
    }, requiredProps), React.createElement(EuiDroppable, {
      droppableId: "testDroppable"
    }, React.createElement("div", null))));
    expect(component).toMatchSnapshot();
  });
  describe('custom behavior', function () {
    describe('cloneDraggables', function () {
      var handler = jest.fn();
      var component = mount(React.createElement(EuiDragDropContext, _extends({
        onDragEnd: handler
      }, requiredProps), React.createElement(EuiDroppable, {
        droppableId: "testDroppable",
        cloneDraggables: true
      }, React.createElement(EuiDroppableContext.Consumer, null, function (_ref) {
        var cloneItems = _ref.cloneItems;
        return React.createElement("div", {
          "data-test-subj": "child"
        }, cloneItems ? 'true' : 'false');
      }))));
      test('sets `cloneItems` on proprietary context', function () {
        expect(findTestSubject(component, 'child').text()).toBe('true');
      });
      test('sets `isDropDisabled`', function () {
        expect(component.find('.euiDroppable--isDisabled').length).toBe(1);
      });
    });
  });
});