import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiButtonIcon, COLORS } from './button_icon';
describe('EuiButtonIcon', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiButtonIcon, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButtonIcon, {
          "aria-label": "button",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a button even when href is defined', function () {
        var component = render(React.createElement(EuiButtonIcon, {
          "aria-label": "button",
          href: "#",
          isDisabled: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiButtonIcon, {
          "aria-label": "button",
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiButtonIcon, {
            "aria-label": "button",
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('href', function () {
      it('secures the rel attribute when the target is _blank', function () {
        var component = render(React.createElement(EuiButtonIcon, {
          "aria-label": "button",
          href: "#",
          target: "_blank"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick and href', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiButtonIcon, {
          "aria-label": "hoi",
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = mount(React.createElement(EuiButtonIcon, {
          "aria-label": "hoi",
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});