"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _breadcrumbs = require("./breadcrumbs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, _extends({}, _test.requiredProps, {
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
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          responsive: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('truncate as false', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          truncate: false
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('max', function () {
      test('renders 1 item', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 1
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders 2 items', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 2
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders 3 items', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 3
        }));
        expect(component).toMatchSnapshot();
      });
      test("doesn't break when max exceeds the number of breadcrumbs", function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 20
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('render a popover', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, {
          breadcrumbs: breadcrumbs,
          max: 2,
          showMaxPopover: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});