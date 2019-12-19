function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { requiredProps } from '../../test';
import { shallow } from 'enzyme';
import { PaginationBar } from './pagination_bar';
describe('PaginationBar', function () {
  test('render', function () {
    var props = _objectSpread({}, requiredProps, {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
        totalItemCount: 0
      },
      onPageSizeChange: function onPageSizeChange() {},
      onPageChange: function onPageChange() {}
    });

    var component = shallow(React.createElement(PaginationBar, props));
    expect(component).toMatchSnapshot();
  });
  test('render - custom page size options', function () {
    var props = _objectSpread({}, requiredProps, {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
        totalItemCount: 0,
        pageSizeOptions: [1, 2, 3]
      },
      onPageSizeChange: function onPageSizeChange() {},
      onPageChange: function onPageChange() {}
    });

    var component = shallow(React.createElement(PaginationBar, props));
    expect(component).toMatchSnapshot();
  });
  test('render - hiding per page options', function () {
    var props = _objectSpread({}, requiredProps, {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
        totalItemCount: 0,
        hidePerPageOptions: true
      },
      onPageSizeChange: function onPageSizeChange() {},
      onPageChange: function onPageChange() {}
    });

    var component = shallow(React.createElement(PaginationBar, props));
    expect(component).toMatchSnapshot();
  });
});