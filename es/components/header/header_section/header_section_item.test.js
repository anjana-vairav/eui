import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiHeaderSectionItem } from './header_section_item';
describe('EuiHeaderSectionItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderSectionItem, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders children', function () {
    var component = render(React.createElement(EuiHeaderSectionItem, null, React.createElement("span", null, "Call me Ishmael.")));
    expect(component).toMatchSnapshot();
  });
  describe('border', function () {
    test('defaults to left', function () {
      var component = render(React.createElement(EuiHeaderSectionItem, null));
      expect(component).toMatchSnapshot();
    });
    test('renders right', function () {
      var component = render(React.createElement(EuiHeaderSectionItem, {
        border: "right"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});