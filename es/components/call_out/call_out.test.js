import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiCallOut, COLORS, HEADINGS } from './call_out';
describe('EuiCallOut', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiCallOut, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('title', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiCallOut, {
          title: "Title"
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiCallOut, {
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiCallOut, {
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('heading', function () {
      HEADINGS.forEach(function (heading) {
        test("".concat(heading, " is rendered"), function () {
          var component = render(React.createElement(EuiCallOut, {
            heading: heading
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});