function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiRadioGroup } from './radio_group';
jest.mock('../radio', function () {
  return {
    EuiRadio: 'eui_radio'
  };
});
describe('EuiRadioGroup', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiRadioGroup, _extends({}, requiredProps, {
      options: [],
      onChange: function onChange() {}
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('options are rendered', function () {
      var component = render(React.createElement(EuiRadioGroup, {
        options: [{
          id: '1',
          label: 'Option #1'
        }, {
          id: '2',
          label: 'Option #2',
          disabled: true
        }],
        onChange: function onChange() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('name is propagated to radios', function () {
      var component = render(React.createElement(EuiRadioGroup, {
        name: "radiogroupname",
        options: [{
          id: '1',
          label: 'Option #1'
        }, {
          id: '2',
          label: 'Option #2'
        }],
        onChange: function onChange() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('idSelected is rendered', function () {
      var component = render(React.createElement(EuiRadioGroup, {
        options: [{
          id: '1',
          label: 'Option #1'
        }, {
          id: '2',
          label: 'Option #2'
        }],
        idSelected: "1",
        onChange: function onChange() {}
      }));
      expect(component).toMatchSnapshot();
    });
    test('value is propagated to radios', function () {
      var component = render(React.createElement(EuiRadioGroup, {
        name: "radiogroupname",
        options: [{
          id: '1',
          label: 'Option #1',
          value: 'Value #1'
        }, {
          id: '2',
          label: 'Option #2',
          value: 'Value #2'
        }],
        onChange: function onChange() {}
      }));
      expect(component).toMatchSnapshot();
    });
  });
  describe('callbacks', function () {
    test('id is used in callbacks when no value is available', function () {
      var callback = jest.fn();
      var component = mount(React.createElement(EuiRadioGroup, {
        name: "radiogroupname",
        options: [{
          id: '1',
          label: 'Option #1'
        }, {
          id: '2',
          label: 'Option #2'
        }],
        onChange: callback
      }));
      component.find('input[id="2"]').simulate('change');
      expect(callback).toHaveBeenCalledTimes(1);
      var event = expect.any(Object);
      expect(callback).toHaveBeenCalledWith('2', undefined, event);
    });
    test('value is used in callbacks when available', function () {
      var callback = jest.fn();
      var component = mount(React.createElement(EuiRadioGroup, {
        name: "radiogroupname",
        options: [{
          id: '1',
          label: 'Option #1',
          value: 'Value #1'
        }, {
          id: '2',
          label: 'Option #2',
          value: 'Value #2'
        }],
        onChange: callback
      }));
      component.find('input[id="2"]').simulate('change');
      expect(callback).toHaveBeenCalledTimes(1);
      var event = expect.any(Object);
      expect(callback).toHaveBeenCalledWith('2', 'Value #2', event);
    });
  });
});