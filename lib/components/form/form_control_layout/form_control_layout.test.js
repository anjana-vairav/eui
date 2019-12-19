"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _form_control_layout = require("./form_control_layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../', function () {
  return {
    EuiIcon: 'eui_icon',
    EuiLoadingSpinner: 'eui_loading_spinner'
  };
});
describe('EuiFormControlLayout', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, _test.requiredProps, _react.default.createElement("input", null)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('icon', function () {
      describe('is rendered', function () {
        test('as a string', function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
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
          var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
            icon: icon
          }));
          expect(component).toMatchSnapshot();
        });
      });
      describe('side', function () {
        _form_control_layout.ICON_SIDES.forEach(function (side) {
          test("".concat(side, " is rendered"), function () {
            var icon = {
              type: 'alert',
              side: side
            };
            var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
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
          var component = (0, _enzyme.mount)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
            icon: icon
          }));
          var closeButton = (0, _test.findTestSubject)(component, 'myIcon');
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
          var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
            clear: clear
          }));
          expect(component).toMatchSnapshot();
        });
        test('is called when clicked', function () {
          var clear = {
            onClick: jest.fn(),
            'data-test-subj': 'clearButton'
          };
          var component = (0, _enzyme.mount)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
            clear: clear
          }));
          var closeButton = (0, _test.findTestSubject)(component, 'clearButton');
          closeButton.simulate('click');
          expect(clear.onClick).toBeCalled();
        });
      });
    });
    test('isLoading is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        isLoading: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('fullWidth is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        fullWidth: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('readOnly is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        readOnly: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('one prepend node is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        prepend: _react.default.createElement("span", null, "1")
      }));
      expect(component).toMatchSnapshot();
    });
    test('one prepend string is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        prepend: "1"
      }));
      expect(component).toMatchSnapshot();
    });
    test('one append node is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        append: _react.default.createElement("span", null, "1")
      }));
      expect(component).toMatchSnapshot();
    });
    test('one append string is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        append: "1"
      }));
      expect(component).toMatchSnapshot();
    });
    test('multiple prepends are rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        prepend: [_react.default.createElement("span", null, "1"), _react.default.createElement("span", null, "2")]
      }));
      expect(component).toMatchSnapshot();
    });
    test('multiple appends are rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        append: [_react.default.createElement("span", null, "1"), _react.default.createElement("span", null, "2")]
      }));
      expect(component).toMatchSnapshot();
    });
  });
});