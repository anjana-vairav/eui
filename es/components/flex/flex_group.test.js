import React from 'react';
import { render } from 'enzyme';
import { requiredProps, startThrowingReactWarnings, stopThrowingReactWarnings } from '../../test';
import { EuiFlexGroup, GUTTER_SIZES, ALIGN_ITEMS, JUSTIFY_CONTENTS, DIRECTIONS } from './flex_group';
beforeAll(startThrowingReactWarnings);
afterAll(stopThrowingReactWarnings);
describe('EuiFlexGroup', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlexGroup, requiredProps, React.createElement("h2", null, "My Child")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('responsive', function () {
      [true, false].forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            responsive: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('gutterSize', function () {
      GUTTER_SIZES.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            gutterSize: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('alignItems', function () {
      ALIGN_ITEMS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            alignItems: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('justifyContent', function () {
      JUSTIFY_CONTENTS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            justifyContent: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('direction', function () {
      DIRECTIONS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            direction: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('component', function () {
      ['div', 'span'].forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            component: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
      ['h2'].forEach(function (value) {
        test("".concat(value, " is not rendered"), function () {
          expect(function () {
            return render( // intentionally passing an invalid value
            // @ts-ignore
            React.createElement(EuiFlexGroup, {
              component: value
            }));
          }).toThrow();
        });
      });
    });
    describe('wrap', function () {
      [true, false].forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGroup, {
            wrap: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});