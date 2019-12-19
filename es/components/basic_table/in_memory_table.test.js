function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { mount, shallow } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiInMemoryTable } from './in_memory_table';
import { ENTER } from '../../services/key_codes';
import { SortDirection } from '../../services';
describe('EuiInMemoryTable', function () {
  test('empty array', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }]
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with message', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      message: 'where my items at?'
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with message and loading', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      message: 'Loading items....',
      loading: true
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with executeQueryOptions', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      executeQueryOptions: {
        defaultFields: ['name']
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with items', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }]
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with items and expanded item', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      itemIdToExpandedRowMap: {
        '1': React.createElement("div", null, "expanded row content")
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with items and message - expecting to show the items', function () {
    var props = _objectSpread({}, requiredProps, {
      message: 'show me!',
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }]
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      pagination: {
        pageSizeOptions: [2, 4, 6]
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination and default page size and index', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      pagination: {
        initialPageIndex: 1,
        initialPageSize: 2,
        pageSizeOptions: [1, 2, 3]
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, default page size and error', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }],
      error: 'ouch!',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      pagination: {
        initialPageSize: 4,
        pageSizeOptions: [2, 4, 6]
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, hiding the per page options', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      pagination: {
        hidePerPageOptions: true
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  describe('sorting', function () {
    test('with field sorting (off by default)', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: '3',
          name: 'name3'
        }, {
          id: '1',
          name: 'name1'
        }, {
          id: '2',
          name: 'name2'
        }],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description',
          sortable: true
        }],
        sorting: true
      });

      var component = mount(React.createElement(EuiInMemoryTable, props));
      expect(component.find('tbody .euiTableCellContent__text').map(function (cell) {
        return cell.text();
      })).toEqual(['name3', 'name1', 'name2']);
    });
    test('with field sorting (on by default)', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: '3',
          name: 'name3'
        }, {
          id: '1',
          name: 'name1'
        }, {
          id: '2',
          name: 'name2'
        }],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description',
          sortable: true
        }],
        sorting: {
          sort: {
            field: 'name',
            direction: SortDirection.ASC
          }
        }
      });

      var component = mount(React.createElement(EuiInMemoryTable, props));
      expect(component.find('tbody .euiTableCellContent__text').map(function (cell) {
        return cell.text();
      })).toEqual(['name1', 'name2', 'name3']);
    });
    test('with name sorting', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: '3',
          name: 'name3'
        }, {
          id: '1',
          name: 'name1'
        }, {
          id: '2',
          name: 'name2'
        }],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description',
          sortable: true
        }],
        sorting: {
          sort: {
            field: 'Name',
            direction: SortDirection.DESC
          }
        }
      });

      var component = mount(React.createElement(EuiInMemoryTable, props));
      expect(component.find('tbody .euiTableCellContent__text').map(function (cell) {
        return cell.text();
      })).toEqual(['name3', 'name2', 'name1']);
    });
    test('verify field sorting precedes name sorting', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: '1',
          name: 'name3'
        }, {
          id: '3',
          name: 'name1'
        }, {
          id: '2',
          name: 'name2'
        }],
        columns: [{
          field: 'name',
          name: 'Column 1',
          description: 'description',
          sortable: true
        }, {
          field: 'id',
          name: 'name',
          description: 'description',
          sortable: true
        }],
        sorting: {
          sort: {
            field: 'name',
            direction: SortDirection.DESC
          }
        }
      });

      var component = mount(React.createElement(EuiInMemoryTable, props)); // name TDs should be sorted desc, id TDs should be asc,

      expect(component.find('tbody .euiTableCellContent__text').map(function (cell) {
        return cell.text();
      })).toEqual(['name3', '1', 'name2', '2', 'name1', '3']);
    });
    test('verify an invalid sort field does not blow everything up', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: '3',
          name: 'name3'
        }, {
          id: '1',
          name: 'name1'
        }, {
          id: '2',
          name: 'name2'
        }],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description',
          sortable: true
        }],
        sorting: {
          sort: {
            field: 'something_nonexistant',
            direction: SortDirection.ASC
          }
        }
      });

      expect(function () {
        mount(React.createElement(EuiInMemoryTable, props));
      }).not.toThrow();
    });
  });
  test('with initial sorting', function () {
    var items = [{
      id: '1',
      name: 'name1'
    }, {
      id: '2',
      name: 'name2'
    }, {
      id: '3',
      name: 'name3'
    }]; // copy the array to ensure the `items` prop doesn't mutate

    var itemsProp = items.slice(0);

    var props = _objectSpread({}, requiredProps, {
      items: itemsProp,
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description',
        sortable: true
      }],
      sorting: {
        sort: {
          field: 'name',
          direction: SortDirection.DESC
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
    expect(itemsProp).toEqual(items);
  });
  test('with pagination and selection', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      pagination: true,
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection and sorting', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description',
        sortable: true
      }],
      pagination: true,
      sorting: true,
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting and column renderer', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description',
        sortable: true,
        render: function render(name) {
          return name.toUpperCase();
        }
      }],
      pagination: {
        pageSizeOptions: [2, 4, 6]
      },
      sorting: true,
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting and a single record action', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description',
        sortable: true
      }, {
        name: 'Actions',
        actions: [{
          name: 'Edit',
          description: 'edit',
          onClick: function onClick() {
            return undefined;
          }
        }]
      }],
      pagination: true,
      sorting: true,
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting  and simple search', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description',
        sortable: true
      }, {
        name: 'Actions',
        actions: [{
          name: 'Edit',
          description: 'edit',
          onClick: function onClick() {
            return undefined;
          }
        }]
      }],
      pagination: true,
      sorting: true,
      search: true,
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting and configured search', function () {
    var props = _objectSpread({}, requiredProps, {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }, {
        id: '3',
        name: 'name3'
      }],
      itemId: 'id',
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description',
        sortable: true
      }, {
        name: 'Actions',
        actions: [{
          name: 'Edit',
          description: 'edit',
          onClick: function onClick() {
            return undefined;
          }
        }]
      }],
      pagination: true,
      sorting: true,
      search: {
        defaultQuery: 'name:name1',
        box: {
          incremental: true
        },
        filters: [{
          type: 'field_value_toggle',
          field: 'name',
          value: 'name1',
          name: 'Name1',
          negatedName: 'Not Name1'
        }]
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      }
    });

    var component = shallow(React.createElement(EuiInMemoryTable, props));
    expect(component).toMatchSnapshot();
  });
  describe('search interaction & functionality', function () {
    it('updates the results as based on the entered query', function () {
      var props = {
        items: [{
          active: true,
          name: 'Kansas'
        }, {
          active: true,
          name: 'North Dakota'
        }, {
          active: false,
          name: 'Florida'
        }],
        columns: [{
          field: 'active',
          name: 'Is Active'
        }, {
          field: 'name',
          name: 'Name'
        }],
        search: {},
        className: 'testTable'
      };
      var component = mount(React.createElement(EuiInMemoryTable, props)); // should render with all three results visible

      expect(component.find('.testTable EuiTableRow').length).toBe(3);
      var searchField = component.find('EuiFieldSearch input[type="search"]');
      searchField.simulate('keyUp', {
        target: {
          value: 'is:active'
        },
        keyCode: ENTER
      });
      component.update(); // should render with the two active results

      expect(component.find('.testTable EuiTableRow').length).toBe(2);
      searchField.simulate('keyUp', {
        target: {
          value: 'active:false'
        },
        keyCode: ENTER
      });
      component.update(); // should render with the one inactive result

      expect(component.find('.testTable EuiTableRow').length).toBe(1);
    });
    it('passes down the executeQueryOptions properly', function () {
      var props = {
        items: [{
          active: true,
          complex: {
            name: 'Kansas'
          }
        }, {
          active: true,
          complex: {
            name: 'North Dakota'
          }
        }, {
          active: false,
          complex: {
            name: 'Florida'
          }
        }],
        columns: [{
          field: 'active',
          name: 'Is Active'
        }, {
          field: 'complex.name',
          name: 'Name'
        }],
        search: {
          defaultQuery: 'No'
        },
        className: 'testTable',
        message: React.createElement("span", {
          className: "customMessage"
        }, "No items found!")
      };
      var noDefaultFieldsComponent = mount(React.createElement(EuiInMemoryTable, props)); // should render with the no items found text

      expect(noDefaultFieldsComponent.find('.customMessage').length).toBe(1); // With defaultFields and a search query, we should only see one

      var props2 = {
        items: [{
          active: true,
          complex: {
            name: 'Kansas'
          }
        }, {
          active: true,
          complex: {
            name: 'North Dakota'
          }
        }, {
          active: false,
          complex: {
            name: 'Florida'
          }
        }],
        columns: [{
          field: 'active',
          name: 'Is Active'
        }, {
          field: 'complex.name',
          name: 'Name'
        }],
        search: {
          defaultQuery: 'No'
        },
        className: 'testTable',
        message: React.createElement("span", {
          className: "customMessage"
        }, "No items found!")
      };
      var defaultFieldComponent = mount(React.createElement(EuiInMemoryTable, props2));
      expect(defaultFieldComponent.find('.testTable EuiTableRow').length).toBe(1);
    });
  });
  describe('custom column sorting', function () {
    it('calls the sortable function and uses its return value for sorting', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: 7,
          name: 'Alfred'
        }, {
          id: 3,
          name: 'Betty'
        }, {
          id: 5,
          name: 'Charlie'
        }],
        itemId: 'id',
        columns: [{
          field: 'name',
          name: 'Name',
          sortable: function sortable(_ref) {
            var id = _ref.id;
            return id;
          }
        }],
        sorting: {
          sort: {
            field: 'name',
            direction: SortDirection.ASC
          }
        }
      });

      var component = mount(React.createElement(EuiInMemoryTable, props));
      expect(component.find('EuiBasicTable').props().items).toEqual([{
        id: 3,
        name: 'Betty'
      }, {
        id: 5,
        name: 'Charlie'
      }, {
        id: 7,
        name: 'Alfred'
      }]);
    });
  });
  describe('behavior', function () {
    test('pagination',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var props, component;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props = _objectSpread({}, requiredProps, {
                items: [{
                  id: '1',
                  name: 'name1'
                }, {
                  id: '2',
                  name: 'name2'
                }, {
                  id: '3',
                  name: 'name3'
                }, {
                  id: '4',
                  name: 'name4'
                }],
                columns: [{
                  field: 'name',
                  name: 'Name',
                  description: 'description'
                }],
                pagination: {
                  pageSizeOptions: [2, 4, 6]
                }
              });
              component = mount(React.createElement(EuiInMemoryTable, props));
              component.find('[data-test-subj="pagination-button-1"]').first().simulate('click'); // forces EuiInMemoryTable's getDerivedStateFromProps to re-execute
              // this is specifically testing regression against https://github.com/elastic/eui/issues/1007

              component.setProps({});
              expect(component).toMatchSnapshot();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
    test('onTableChange callback', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [{
          id: '1',
          name: 'name1'
        }, {
          id: '2',
          name: 'name2'
        }, {
          id: '3',
          name: 'name3'
        }, {
          id: '4',
          name: 'name4'
        }],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description',
          sortable: true
        }],
        sorting: true,
        pagination: {
          pageSizeOptions: [2, 4, 6]
        },
        onTableChange: jest.fn()
      });

      var component = mount(React.createElement(EuiInMemoryTable, props));
      expect(props.onTableChange).toHaveBeenCalledTimes(0);
      component.find('EuiPaginationButton[data-test-subj="pagination-button-1"]').simulate('click');
      expect(props.onTableChange).toHaveBeenCalledTimes(1);
      expect(props.onTableChange).toHaveBeenCalledWith({
        sort: {},
        page: {
          index: 1,
          size: 2
        }
      });
      props.onTableChange.mockClear();
      component.find('[data-test-subj*="tableHeaderCell_name_0"] [data-test-subj="tableHeaderSortButton"]').simulate('click');
      expect(props.onTableChange).toHaveBeenCalledTimes(1);
      expect(props.onTableChange).toHaveBeenCalledWith({
        sort: {
          direction: SortDirection.ASC,
          field: 'name'
        },
        page: {
          index: 0,
          size: 2
        }
      });
    });
  });
});