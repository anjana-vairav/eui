function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiBreadcrumbs } from './breadcrumbs';
describe('EuiBreadcrumbs', function () {
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
      href: '#',
      truncate: true
    }, {
      text: 'Edit'
    }];
    var component = render(React.createElement(EuiBreadcrumbs, _extends({}, requiredProps, {
      breadcrumbs: breadcrumbs
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    var breadcrumbs = [{
      text: 'Animals'
    }, {
      text: 'Reptiles'
    }, {
      text: 'Boa constrictor'
    }, {
      text: 'Edit'
    }];
    describe('responsive', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          responsive: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('truncate as false', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          truncate: false
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('max', function () {
      test('renders 1 item', function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 1
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders 2 items', function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 2
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders 3 items', function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 3
        }));
        expect(component).toMatchSnapshot();
      });
      test("doesn't break when max exceeds the number of breadcrumbs", function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 20
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('render a popover', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 2,
          showMaxPopover: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});