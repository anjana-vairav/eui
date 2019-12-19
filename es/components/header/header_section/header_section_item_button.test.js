import React from 'react';
import { render, shallow } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiHeaderSectionItemButton } from './header_section_item_button';
describe('EuiHeaderSectionItemButton', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderSectionItemButton, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders children', function () {
    var component = render(React.createElement(EuiHeaderSectionItemButton, null, React.createElement("span", null, "Ahoy!")));
    expect(component).toMatchSnapshot();
  });
  describe('onClick', function () {
    test("isn't called upon instantiation", function () {
      var onClickHandler = jest.fn();
      shallow(React.createElement(EuiHeaderSectionItemButton, {
        onClick: onClickHandler
      }));
      expect(onClickHandler).not.toHaveBeenCalled();
    });
    test('is called when the button is clicked', function () {
      var onClickHandler = jest.fn();
      var $button = shallow(React.createElement(EuiHeaderSectionItemButton, {
        onClick: onClickHandler
      }));
      $button.simulate('click');
      expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});