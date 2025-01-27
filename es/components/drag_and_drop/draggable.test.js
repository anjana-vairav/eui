function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme'; // import { findTestSubject } from '../../test';

import { requiredProps } from '../../test/required_props';
import { EuiDragDropContext, EuiDraggable, EuiDroppable } from './';
describe('EuiDraggable', function () {
  test('is rendered', function () {
    var handler = jest.fn();
    var component = render(React.createElement(EuiDragDropContext, _extends({
      onDragEnd: handler
    }, requiredProps), React.createElement(EuiDroppable, {
      droppableId: "testDroppable"
    }, React.createElement(EuiDraggable, {
      draggableId: "testDraggable",
      index: 0
    }, function () {
      return React.createElement("div", null, "Hello");
    }))));
    expect(component).toMatchSnapshot();
  });
  test('can be given ReactElement children', function () {
    var handler = jest.fn();
    var component = render(React.createElement(EuiDragDropContext, _extends({
      onDragEnd: handler
    }, requiredProps), React.createElement(EuiDroppable, {
      droppableId: "testDroppable"
    }, React.createElement(EuiDraggable, {
      draggableId: "testDraggable",
      index: 0
    }, React.createElement("div", null, "Hello")))));
    expect(component).toMatchSnapshot();
  });
});