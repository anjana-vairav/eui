"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _basic_table = require("./basic_table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiBasicTable', function () {
  describe('behavior', function () {
    describe('selected items', function () {
      var props;
      var component;
      beforeEach(function () {
        props = {
          items: [{
            id: '1',
            name: 'name1'
          }, {
            id: '2',
            name: 'name2'
          }],
          itemId: 'id',
          columns: [{
            field: 'name',
            name: 'Name',
            description: 'description'
          }],
          selection: {
            onSelectionChange: function onSelectionChange() {}
          },
          onChange: function onChange() {}
        };
        component = (0, _enzyme.mount)(_react.default.createElement(_basic_table.EuiBasicTable, props));
      });
      test('check the select all checkbox when all are selected', function () {
        (0, _test.findTestSubject)(component, 'checkboxSelectRow-1').simulate('change', {
          target: {
            checked: true
          }
        });
        (0, _test.findTestSubject)(component, 'checkboxSelectRow-2').simulate('change', {
          target: {
            checked: true
          }
        });
        expect((0, _test.findTestSubject)(component, 'checkboxSelectAll').prop('checked')).toBe(true);
      });
      test('uncheck the select all checkbox when some are selected', function () {
        (0, _test.findTestSubject)(component, 'checkboxSelectRow-1').simulate('change', {
          target: {
            checked: true
          }
        });
        expect((0, _test.findTestSubject)(component, 'checkboxSelectAll').prop('checked')).toBe(false);
      });
      test('are all selected when the select all checkbox is checked', function () {
        (0, _test.findTestSubject)(component, 'checkboxSelectAll').simulate('change', {
          target: {
            checked: true
          }
        });
        expect((0, _test.findTestSubject)(component, 'checkboxSelectRow-1').prop('checked')).toBe(true);
        expect((0, _test.findTestSubject)(component, 'checkboxSelectRow-2').prop('checked')).toBe(true);
      });
      test('select all checkbox becomes unchecked when selected items are deleted', function () {
        (0, _test.findTestSubject)(component, 'checkboxSelectAll').simulate('change', {
          target: {
            checked: true
          }
        });
        props.items = [];
        component.setProps(props);
        expect((0, _test.findTestSubject)(component, 'checkboxSelectAll').prop('checked')).toBe(false);
      });
    });
  });
});