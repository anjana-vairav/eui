"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _header_breadcrumbs = require("./header_breadcrumbs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiHeaderBreadcrumbs', function () {
  test('is rendered', function () {
    var breadcrumbs = [{
      text: 'Animals',
      href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        console.log('You clicked Animals');
      },
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass'
    }, {
      text: 'Reptiles',
      onClick: function onClick(e) {
        e.preventDefault();
        console.log('You clicked Reptiles');
      }
    }, {
      text: 'Boa constrictor',
      href: '#'
    }, {
      text: 'Edit'
    }];
    var component = (0, _enzyme.render)(_react.default.createElement(_header_breadcrumbs.EuiHeaderBreadcrumbs, _extends({
      breadcrumbs: breadcrumbs
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
});