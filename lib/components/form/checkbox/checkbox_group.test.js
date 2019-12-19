"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _checkbox_group = require("./checkbox_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    var component = (0, _enzyme.render)(_react.default.createElement(_checkbox_group.EuiCheckboxGroup, _extends({
      onChange: function onChange() {}
    }, checkboxGroupRequiredProps, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('options are rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_checkbox_group.EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
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
    var component = (0, _enzyme.render)(_react.default.createElement(_checkbox_group.EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
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
    var component = (0, _enzyme.render)(_react.default.createElement(_checkbox_group.EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
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
    var component = (0, _enzyme.render)(_react.default.createElement(_checkbox_group.EuiCheckboxGroup, _extends({}, checkboxGroupRequiredProps, {
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