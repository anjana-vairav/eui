"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _checkbox_group = require("./checkbox_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This exists because we need to run the following tests
// without mocking the Checkbox component, such as testing
// an interaction that is handled by the Checkbox component.
describe('EuiCheckboxGroup behavior', function () {
  test('id is bound to onChange', function () {
    var onChangeHandler = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_checkbox_group.EuiCheckboxGroup, {
      options: [{
        id: '1',
        label: 'kibana',
        disabled: false
      }],
      idToSelectedMap: {
        '1': true
      },
      onChange: onChangeHandler
    }));
    component.find('input[type="checkbox"]').simulate('change');
    expect(onChangeHandler).toBeCalledTimes(1);
    expect(onChangeHandler.mock.calls[0][0]).toBe('1');
  });
});