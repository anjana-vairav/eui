import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiHeaderSection } from './header_section';
describe('EuiHeaderSection', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderSection, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders optional params', function () {
    var component = render(React.createElement(EuiHeaderSection, {
      style: {
        color: 'blue'
      }
    }, React.createElement("span", null, "Some years ago never mind how long precisely...")));
    expect(component).toMatchSnapshot();
  });
  describe('grow', function () {
    test('defaults to false', function () {
      var component = render(React.createElement(EuiHeaderSection, null));
      expect(component).toMatchSnapshot();
    });
    test('renders true', function () {
      var component = render(React.createElement(EuiHeaderSection, {
        grow: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
  describe('side', function () {
    test('defaults to left', function () {
      var component = render(React.createElement(EuiHeaderSection, null));
      expect(component).toMatchSnapshot();
    });
    test('renders right', function () {
      var component = render(React.createElement(EuiHeaderSection, {
        side: "right"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});