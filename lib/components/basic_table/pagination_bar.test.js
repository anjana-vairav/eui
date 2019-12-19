"use strict";

var _react = _interopRequireDefault(require("react"));

var _test = require("../../test");

var _enzyme = require("enzyme");

var _pagination_bar = require("./pagination_bar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('PaginationBar', function () {
  test('render', function () {
    var props = _objectSpread({}, _test.requiredProps, {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
        totalItemCount: 0
      },
      onPageSizeChange: function onPageSizeChange() {},
      onPageChange: function onPageChange() {}
    });

    var component = (0, _enzyme.shallow)(_react.default.createElement(_pagination_bar.PaginationBar, props));
    expect(component).toMatchSnapshot();
  });
  test('render - custom page size options', function () {
    var props = _objectSpread({}, _test.requiredProps, {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
        totalItemCount: 0,
        pageSizeOptions: [1, 2, 3]
      },
      onPageSizeChange: function onPageSizeChange() {},
      onPageChange: function onPageChange() {}
    });

    var component = (0, _enzyme.shallow)(_react.default.createElement(_pagination_bar.PaginationBar, props));
    expect(component).toMatchSnapshot();
  });
  test('render - hiding per page options', function () {
    var props = _objectSpread({}, _test.requiredProps, {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
        totalItemCount: 0,
        hidePerPageOptions: true
      },
      onPageSizeChange: function onPageSizeChange() {},
      onPageChange: function onPageChange() {}
    });

    var component = (0, _enzyme.shallow)(_react.default.createElement(_pagination_bar.PaginationBar, props));
    expect(component).toMatchSnapshot();
  });
});