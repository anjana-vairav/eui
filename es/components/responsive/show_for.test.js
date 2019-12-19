function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiShowFor } from './show_for';
var BREAKPOINTS = ['xs', 's', 'm', 'l', 'xl'];
var DISPLAYS = ['block', 'inlineBlock', 'flex'];
describe('EuiShowFor', function () {
  test('renders wraps children in a span', function () {
    var component = render(React.createElement(EuiShowFor, _extends({
      sizes: ['xs']
    }, requiredProps), "Child"));
    expect(component).toMatchSnapshot();
  });
  test('renders and copies classes', function () {
    var component = render(React.createElement(EuiShowFor, {
      sizes: ['xs']
    }, React.createElement("div", null, "Child")));
    expect(component).toMatchSnapshot();
  });
  BREAKPOINTS.forEach(function (size) {
    test("".concat(size, " is rendered"), function () {
      var component = render(React.createElement(EuiShowFor, {
        sizes: [size]
      }));
      expect(component).toMatchSnapshot();
    });
  });
  test('renders for multiple breakpoints', function () {
    var component = render(React.createElement(EuiShowFor, {
      sizes: ['xs', 'l']
    }, "Child"));
    expect(component).toMatchSnapshot();
  });
  DISPLAYS.forEach(function (display) {
    test("".concat(display, " is rendered"), function () {
      var component = render(React.createElement(EuiShowFor, {
        sizes: ['xs'],
        display: display
      }));
      expect(component).toMatchSnapshot();
    });
  });
});