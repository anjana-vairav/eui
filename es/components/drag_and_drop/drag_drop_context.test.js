function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { findTestSubject } from '../../test';
import { requiredProps } from '../../test/required_props';
import { EuiDragDropContext } from './';
import { EuiDragDropContextContext } from './drag_drop_context';
describe('EuiDragDropContext', function () {
  test('is rendered', function () {
    var handler = jest.fn();
    var component = render(React.createElement(EuiDragDropContext, _extends({
      onDragEnd: handler
    }, requiredProps), React.createElement("div", null)));
    expect(component).toMatchSnapshot();
  });
  describe('custom behavior', function () {
    describe('isDraggingType', function () {
      test('is set on proprietary context', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiDragDropContext, _extends({
          onDragEnd: handler
        }, requiredProps), React.createElement(EuiDragDropContextContext.Consumer, null, function (value) {
          return React.createElement("div", {
            "data-test-subj": "child"
          }, value.hasOwnProperty('isDraggingType') ? 'true' : 'false');
        })));
        expect(findTestSubject(component, 'child').text()).toBe('true');
      });
    });
  });
});