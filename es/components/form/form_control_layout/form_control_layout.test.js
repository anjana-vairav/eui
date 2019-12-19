import React from 'react';
import { render, mount } from 'enzyme';
import { findTestSubject, requiredProps } from '../../../test';
import { EuiFormControlLayout, ICON_SIDES } from './form_control_layout';
jest.mock('../../', function () {
  return {
    EuiIcon: 'eui_icon',
    EuiLoadingSpinner: 'eui_loading_spinner'
  };
});
describe('EuiFormControlLayout', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFormControlLayout, requiredProps, React.createElement("input", null)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('icon', function () {
      describe('is rendered', function () {
        test('as a string', function () {
          var component = render(React.createElement(EuiFormControlLayout, {
            icon: "alert"
          }));
          expect(component).toMatchSnapshot();
        });
        test('as an object', function () {
          var icon = {
            type: 'alert',
            className: 'customClass',
            'data-test-subj': 'myIcon'
          };
          var component = render(React.createElement(EuiFormControlLayout, {
            icon: icon
          }));
          expect(component).toMatchSnapshot();
        });
      });
      describe('side', function () {
        ICON_SIDES.forEach(function (side) {
          test("".concat(side, " is rendered"), function () {
            var icon = {
              type: 'alert',
              side: side
            };
            var component = render(React.createElement(EuiFormControlLayout, {
              icon: icon
            }));
            expect(component).toMatchSnapshot();
          });
        });
      });
      describe('onClick', function () {
        test('is called when clicked', function () {
          var icon = {
            type: 'alert',
            onClick: jest.fn(),
            'data-test-subj': 'myIcon'
          };
          var component = mount(React.createElement(EuiFormControlLayout, {
            icon: icon
          }));
          var closeButton = findTestSubject(component, 'myIcon');
          closeButton.simulate('click');
          expect(icon.onClick).toBeCalled();
        });
      });
    });
    describe('clear', function () {
      describe('onClick', function () {
        test('is rendered', function () {
          var clear = {
            onClick: function onClick() {},
            className: 'customClass',
            'data-test-subj': 'clearButton'
          };
          var component = render(React.createElement(EuiFormControlLayout, {
            clear: clear
          }));
          expect(component).toMatchSnapshot();
        });
        test('is called when clicked', function () {
          var clear = {
            onClick: jest.fn(),
            'data-test-subj': 'clearButton'
          };
          var component = mount(React.createElement(EuiFormControlLayout, {
            clear: clear
          }));
          var closeButton = findTestSubject(component, 'clearButton');
          closeButton.simulate('click');
          expect(clear.onClick).toBeCalled();
        });
      });
    });
    test('isLoading is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        isLoading: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('fullWidth is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        fullWidth: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('readOnly is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        readOnly: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('one prepend node is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        prepend: React.createElement("span", null, "1")
      }));
      expect(component).toMatchSnapshot();
    });
    test('one prepend string is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        prepend: "1"
      }));
      expect(component).toMatchSnapshot();
    });
    test('one append node is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        append: React.createElement("span", null, "1")
      }));
      expect(component).toMatchSnapshot();
    });
    test('one append string is rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        append: "1"
      }));
      expect(component).toMatchSnapshot();
    });
    test('multiple prepends are rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        prepend: [React.createElement("span", null, "1"), React.createElement("span", null, "2")]
      }));
      expect(component).toMatchSnapshot();
    });
    test('multiple appends are rendered', function () {
      var component = render(React.createElement(EuiFormControlLayout, {
        append: [React.createElement("span", null, "1"), React.createElement("span", null, "2")]
      }));
      expect(component).toMatchSnapshot();
    });
  });
});