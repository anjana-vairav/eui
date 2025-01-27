"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _flex_group = require("./flex_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

beforeAll(_test.startThrowingReactWarnings);
afterAll(_test.stopThrowingReactWarnings);
describe('EuiFlexGroup', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, _test.requiredProps, _react.default.createElement("h2", null, "My Child")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('responsive', function () {
      [true, false].forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            responsive: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('gutterSize', function () {
      _flex_group.GUTTER_SIZES.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            gutterSize: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('alignItems', function () {
      _flex_group.ALIGN_ITEMS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            alignItems: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('justifyContent', function () {
      _flex_group.JUSTIFY_CONTENTS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            justifyContent: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('direction', function () {
      _flex_group.DIRECTIONS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            direction: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('component', function () {
      ['div', 'span'].forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            component: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
      ['h2'].forEach(function (value) {
        test("".concat(value, " is not rendered"), function () {
          expect(function () {
            return (0, _enzyme.render)( // intentionally passing an invalid value
            // @ts-ignore
            _react.default.createElement(_flex_group.EuiFlexGroup, {
              component: value
            }));
          }).toThrow();
        });
      });
    });
    describe('wrap', function () {
      [true, false].forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_group.EuiFlexGroup, {
            wrap: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});