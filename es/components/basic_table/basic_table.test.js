function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { shallow } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiBasicTable, getItemId } from './basic_table';
import { SortDirection } from '../../services';
describe('getItemId', function () {
  it('returns undefined if no itemId prop is given', function () {
    expect(getItemId({
      id: 5
    })).toBeUndefined();
    expect(getItemId({
      itemId: 5
    })).toBeUndefined();
    expect(getItemId({
      _itemId: 5
    })).toBeUndefined();
  });
  it('returns the correct id when a string itemId is given', function () {
    expect(getItemId({
      id: 5
    }, 'id')).toBe(5);
    expect(getItemId({
      thing: '5'
    }, 'thing')).toBe('5');
  });
  it('returns the correct id when a function itemId is given', function () {
    expect(getItemId({
      id: 5
    }, function () {
      return '6';
    })).toBe('6');
    expect(getItemId({
      x: 2,
      y: 4
    }, function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      return "".concat(x * y);
    })).toBe('8');
  });
});
var basicColumns = [{
  field: 'name',
  name: 'Name',
  description: 'description'
}];
describe('EuiBasicTable', function () {
  describe('empty', function () {
    test('is rendered', function () {
      var props = _objectSpread({}, requiredProps, {
        items: [],
        columns: basicColumns
      });

      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
    test('renders a string as a custom message', function () {
      var props = {
        items: [],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description'
        }],
        noItemsMessage: 'where my items at?'
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
    test('renders a node as a custom message', function () {
      var props = {
        items: [],
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'description'
        }],
        noItemsMessage: React.createElement("p", null, "no items, click ", React.createElement("a", {
          href: ""
        }, "here"), " to make some")
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
  });
  describe('rowProps', function () {
    test('renders rows with custom props from a callback', function () {
      var props = {
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
        rowProps: function rowProps(item) {
          var id = item.id;
          return {
            'data-test-subj': "row-".concat(id),
            className: 'customRowClass',
            onClick: function onClick() {}
          };
        }
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
    test('renders rows with custom props from an object', function () {
      var props = {
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
        rowProps: {
          'data-test-subj': 'row',
          className: 'customClass',
          onClick: function onClick() {}
        }
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
  });
  describe('cellProps', function () {
    test('renders cells with custom props from a callback', function () {
      var props = {
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
        cellProps: function cellProps(item, column) {
          var id = item.id;
          var _ref2 = column,
              field = _ref2.field;
          return {
            'data-test-subj': "cell-".concat(id, "-").concat(field),
            className: 'customRowClass',
            onClick: function onClick() {}
          };
        }
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
    test('renders rows with custom props from an object', function () {
      var props = {
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
        cellProps: {
          'data-test-subj': 'cell',
          className: 'customClass',
          onClick: function onClick() {}
        }
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
  });
  test('itemIdToExpandedRowMap renders an expanded row', function () {
    var props = {
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
        '1': React.createElement("div", null, "Expanded row")
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination', function () {
    var props = {
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
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination - 2nd page', function () {
    var props = {
      items: [{
        id: '1',
        name: 'name1'
      }, {
        id: '2',
        name: 'name2'
      }],
      columns: [{
        field: 'name',
        name: 'Name',
        description: 'description'
      }],
      pagination: {
        pageIndex: 1,
        pageSize: 3,
        totalItemCount: 5
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination and error', function () {
    var props = {
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
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      onChange: function onChange() {},
      error: 'no can do'
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, hiding the per page options', function () {
    var props = {
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
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5,
        hidePerPageOptions: true
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with sorting', function () {
    var props = {
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
        description: 'description',
        sortable: true
      }],
      sorting: {
        sort: {
          field: 'name',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with sortable columns and sorting disabled', function () {
    var props = {
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
        description: 'description',
        sortable: true
      }],
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination and selection', function () {
    var props = {
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
      pagination: {
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection and sorting', function () {
    var props = {
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
      pagination: {
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      sorting: {
        sort: {
          field: 'name',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  describe('footers', function () {
    test('do not render without a column footer definition', function () {
      var props = {
        items: [{
          id: '1',
          name: 'name1',
          age: 20
        }, {
          id: '2',
          name: 'name2',
          age: 21
        }, {
          id: '3',
          name: 'name3',
          age: 22
        }],
        itemId: 'id',
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'your name'
        }, {
          field: 'id',
          name: 'ID',
          description: 'your id'
        }, {
          field: 'age',
          name: 'Age',
          description: 'your age'
        }],
        onChange: function onChange() {}
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
    test('render with pagination, selection, sorting, and footer', function () {
      var props = {
        items: [{
          id: '1',
          name: 'name1',
          age: 20
        }, {
          id: '2',
          name: 'name2',
          age: 21
        }, {
          id: '3',
          name: 'name3',
          age: 22
        }],
        itemId: 'id',
        columns: [{
          field: 'name',
          name: 'Name',
          description: 'your name',
          sortable: true,
          footer: React.createElement("strong", null, "Name")
        }, {
          field: 'id',
          name: 'ID',
          description: 'your id',
          footer: 'ID'
        }, {
          field: 'age',
          name: 'Age',
          description: 'your age',
          footer: function footer(_ref3) {
            var items = _ref3.items,
                pagination = _ref3.pagination;
            return React.createElement("strong", null, "sum:", items.reduce(function (acc, cur) {
              return acc + cur.age;
            }, 0), React.createElement("br", null), "total items:", pagination.totalItemCount);
          }
        }],
        pagination: {
          pageIndex: 0,
          pageSize: 3,
          totalItemCount: 5
        },
        selection: {
          onSelectionChange: function onSelectionChange() {
            return undefined;
          }
        },
        sorting: {
          sort: {
            field: 'name',
            direction: SortDirection.ASC
          }
        },
        onChange: function onChange() {}
      };
      var component = shallow(React.createElement(EuiBasicTable, props));
      expect(component).toMatchSnapshot();
    });
  });
  test('with pagination, selection, sorting and column renderer', function () {
    var props = {
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
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      sorting: {
        sort: {
          field: 'name',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting and column dataType', function () {
    var props = {
      items: [{
        id: '1',
        count: 1
      }, {
        id: '2',
        count: 2
      }, {
        id: '3',
        count: 3
      }],
      itemId: 'id',
      columns: [{
        field: 'count',
        name: 'Count',
        description: 'description of count',
        sortable: true,
        dataType: 'number'
      }],
      pagination: {
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      sorting: {
        sort: {
          field: 'count',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  }); // here we want to verify that the column renderer takes precedence over the column data type

  test('with pagination, selection, sorting, column renderer and column dataType', function () {
    var props = {
      items: [{
        id: '1',
        count: 1
      }, {
        id: '2',
        count: 2
      }, {
        id: '3',
        count: 3
      }],
      itemId: 'id',
      columns: [{
        field: 'count',
        name: 'Count',
        description: 'description of count',
        sortable: true,
        dataType: 'number',
        render: function render(count) {
          return 'x'.repeat(count);
        }
      }],
      pagination: {
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      sorting: {
        sort: {
          field: 'count',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting and a single record action', function () {
    var props = {
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
          type: 'button',
          name: 'Edit',
          description: 'edit',
          onClick: function onClick() {
            return undefined;
          }
        }]
      }],
      pagination: {
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      sorting: {
        sort: {
          field: 'name',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
  test('with pagination, selection, sorting and multiple record actions', function () {
    var props = {
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
          type: 'button',
          name: 'Edit',
          description: 'edit',
          onClick: function onClick() {
            return undefined;
          }
        }, {
          type: 'button',
          name: 'Delete',
          description: 'delete',
          onClick: function onClick() {
            return undefined;
          }
        }]
      }],
      pagination: {
        pageIndex: 0,
        pageSize: 3,
        totalItemCount: 5
      },
      selection: {
        onSelectionChange: function onSelectionChange() {
          return undefined;
        }
      },
      sorting: {
        sort: {
          field: 'name',
          direction: SortDirection.ASC
        }
      },
      onChange: function onChange() {}
    };
    var component = shallow(React.createElement(EuiBasicTable, props));
    expect(component).toMatchSnapshot();
  });
});