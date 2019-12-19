function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import cheerio from 'cheerio';
import { EuiIcon, SIZES, TYPES, COLORS } from './icon';
var prettyHtml = cheerio.load('');

function testIcon(props) {
  return function () {
    expect.assertions(1);
    return new Promise(function (resolve) {
      var onIconLoad = function onIconLoad() {
        component.update();
        expect(prettyHtml(component.html())).toMatchSnapshot();
        resolve();
      };

      var component = mount(React.createElement(EuiIcon, _extends({}, props, {
        onIconLoad: onIconLoad
      })));
    });
  };
}

describe('EuiIcon', function () {
  test('is rendered', testIcon(_objectSpread({
    type: 'search'
  }, requiredProps)));
  describe('props', function () {
    describe('other props', function () {
      test('are passed through to the icon', testIcon({
        type: 'search',
        'aria-label': 'A Search Icon',
        title: 'Search'
      }));
    });
    describe('size', function () {
      SIZES.forEach(function (size) {
        test('${size} is rendered', testIcon({
          type: 'search',
          size: size
        }));
      });
    });
    describe('type', function () {
      TYPES.forEach(function (type) {
        test("".concat(type, " is rendered"), testIcon({
          type: type
        }));
      });
    });
    describe('color', function () {
      _toConsumableArray(COLORS).concat(['#fde', '#885522', 'rgb(100, 150, 200)', 'hsla(270, 60%, 70%, 0.9)']).forEach(function (color) {
        it("".concat(color, " is rendered"), testIcon({
          type: 'search',
          color: color
        }));
      });
    });
    describe('tabIndex', function () {
      it('renders focusable="false" when not provided', testIcon({
        type: 'search'
      }));
      it('renders focusable="false" when -1', testIcon({
        type: 'search',
        tabIndex: -1
      }));
      it('renders focusable="true" when 0', testIcon({
        type: 'search',
        tabIndex: 0
      }));
    });
  });
});