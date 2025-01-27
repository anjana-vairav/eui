function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiText } from './text';
describe('EuiText', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiText, requiredProps, React.createElement("p", null, "Content")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('grow', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiText, _extends({}, requiredProps, {
          grow: true
        }), React.createElement("p", null, "Content")));
        expect(component).toMatchSnapshot();
      });
    });
  });
});