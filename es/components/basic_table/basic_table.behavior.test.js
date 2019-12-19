import React from 'react';
import { mount } from 'enzyme';
import { findTestSubject } from '../../test';
import { EuiBasicTable } from './basic_table';
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
        component = mount(React.createElement(EuiBasicTable, props));
      });
      test('check the select all checkbox when all are selected', function () {
        findTestSubject(component, 'checkboxSelectRow-1').simulate('change', {
          target: {
            checked: true
          }
        });
        findTestSubject(component, 'checkboxSelectRow-2').simulate('change', {
          target: {
            checked: true
          }
        });
        expect(findTestSubject(component, 'checkboxSelectAll').prop('checked')).toBe(true);
      });
      test('uncheck the select all checkbox when some are selected', function () {
        findTestSubject(component, 'checkboxSelectRow-1').simulate('change', {
          target: {
            checked: true
          }
        });
        expect(findTestSubject(component, 'checkboxSelectAll').prop('checked')).toBe(false);
      });
      test('are all selected when the select all checkbox is checked', function () {
        findTestSubject(component, 'checkboxSelectAll').simulate('change', {
          target: {
            checked: true
          }
        });
        expect(findTestSubject(component, 'checkboxSelectRow-1').prop('checked')).toBe(true);
        expect(findTestSubject(component, 'checkboxSelectRow-2').prop('checked')).toBe(true);
      });
      test('select all checkbox becomes unchecked when selected items are deleted', function () {
        findTestSubject(component, 'checkboxSelectAll').simulate('change', {
          target: {
            checked: true
          }
        });
        props.items = [];
        component.setProps(props);
        expect(findTestSubject(component, 'checkboxSelectAll').prop('checked')).toBe(false);
      });
    });
  });
});