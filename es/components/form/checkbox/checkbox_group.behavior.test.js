import React from 'react';
import { mount } from 'enzyme';
import { EuiCheckboxGroup } from './checkbox_group'; // This exists because we need to run the following tests
// without mocking the Checkbox component, such as testing
// an interaction that is handled by the Checkbox component.

describe('EuiCheckboxGroup behavior', function () {
  test('id is bound to onChange', function () {
    var onChangeHandler = jest.fn();
    var component = mount(React.createElement(EuiCheckboxGroup, {
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