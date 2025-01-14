function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { mount } from 'enzyme';
import { requiredProps } from '../../test';
import { LoadingTableBody } from './loading_table_body';
describe('LoadingTableBody', function () {
  test('render', function () {
    var props = _objectSpread({}, requiredProps);

    var component = mount(React.createElement("table", null, React.createElement(LoadingTableBody, props)));
    expect(component).toMatchSnapshot();
  });
});