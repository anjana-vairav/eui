function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiHeaderBreadcrumbs } from './header_breadcrumbs';
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
    var component = render(React.createElement(EuiHeaderBreadcrumbs, _extends({
      breadcrumbs: breadcrumbs
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
});