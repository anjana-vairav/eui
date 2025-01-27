function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiExpression, COLORS } from './expression';
describe('EuiExpression', function () {
  test('renders', function () {
    var component = React.createElement(EuiExpression, _extends({
      description: "the answer is",
      value: "42",
      isActive: false // tslint:disable no-empty
      ,
      onClick: function onClick() {}
    }, requiredProps));
    expect(render(component)).toMatchSnapshot();
  });
  describe('props', function () {
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiExpression, _extends({
            description: "the answer is",
            value: "42",
            color: color
          }, requiredProps)));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('uppercase', function () {
      test('true renders uppercase', function () {
        var component = React.createElement(EuiExpression, {
          description: "the answer is",
          value: "42",
          uppercase: true
        });
        expect(render(component)).toMatchSnapshot();
      });
      test('false renders inherted case', function () {
        var component = React.createElement(EuiExpression, {
          description: "the answer is",
          value: "42",
          uppercase: false
        });
        expect(render(component)).toMatchSnapshot();
      });
    });
    describe('isActive', function () {
      test('true renders active', function () {
        var component = React.createElement(EuiExpression, {
          description: "the answer is",
          value: "42",
          isActive: true
        });
        expect(render(component)).toMatchSnapshot();
      });
      test('false renders inactive', function () {
        var component = React.createElement(EuiExpression, {
          description: "the answer is",
          value: "42",
          isActive: false
        });
        expect(render(component)).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('is called when the button is clicked', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiExpression, _extends({
          description: "the answer is",
          value: "42",
          isActive: false,
          onClick: handler
        }, requiredProps)));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});