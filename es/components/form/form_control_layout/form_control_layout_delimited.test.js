function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiFormControlLayoutDelimited } from './form_control_layout_delimited';
import { EuiIcon } from '../../icon';
describe('EuiFormControlLayoutDelimited', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFormControlLayoutDelimited, _extends({
      startControl: React.createElement("span", null, "start"),
      endControl: React.createElement("span", null, "end")
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('delimiter', function () {
      describe('is rendered', function () {
        test('as a string', function () {
          var component = render(React.createElement(EuiFormControlLayoutDelimited, {
            startControl: React.createElement("span", null, "start"),
            endControl: React.createElement("span", null, "end"),
            delimiter: "+"
          }));
          expect(component).toMatchSnapshot();
        });
        test('as a node', function () {
          var icon = React.createElement(EuiIcon, {
            type: "alert"
          });
          var component = render(React.createElement(EuiFormControlLayoutDelimited, {
            startControl: React.createElement("span", null, "start"),
            endControl: React.createElement("span", null, "end"),
            delimiter: icon
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});