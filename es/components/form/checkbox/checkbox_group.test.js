function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiCheckboxGroup } from './checkbox_group';
jest.mock('./checkbox', function () {
  return {
    EuiCheckbox: 'eui_checkbox'
  };
});
var checkboxGroupRequiredProps = {
  options: [],
  idToSelectedMap: {},
  onChange: function onChange() {}
};
describe('EuiCheckboxGroup (mocked checkbox)', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiCheckboxGroup, _extends({
      onChange: function onChange() {}
    }, checkboxGroupRequiredProps, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('options are rendered', function () {
    var component = render(React.createElement(EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
      options: [{
        id: '1',
        label: 'kibana'
      }, {
        id: '2',
        label: 'elastic'
      }],
      onChange: function onChange() {}
    })));
    expect(component).toMatchSnapshot();
  });
  test('idToSelectedMap is rendered', function () {
    var component = render(React.createElement(EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
      options: [{
        id: '1',
        label: 'kibana'
      }, {
        id: '2',
        label: 'elastic'
      }],
      idToSelectedMap: {
        '1': true,
        '2': false
      },
      onChange: function onChange() {}
    })));
    expect(component).toMatchSnapshot();
  });
  test('disabled is rendered', function () {
    var component = render(React.createElement(EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
      options: [{
        id: '1',
        label: 'kibana'
      }, {
        id: '2',
        label: 'elastic'
      }],
      idToSelectedMap: {
        '1': true,
        '2': false
      },
      onChange: function onChange() {},
      disabled: true
    })));
    expect(component).toMatchSnapshot();
  });
  test('individual disabled is rendered', function () {
    var component = render(React.createElement(EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
      options: [{
        id: '1',
        label: 'kibana',
        disabled: true
      }, {
        id: '2',
        label: 'elastic'
      }],
      idToSelectedMap: {
        '1': true,
        '2': false
      },
      onChange: function onChange() {}
    })));
    expect(component).toMatchSnapshot();
  });
});