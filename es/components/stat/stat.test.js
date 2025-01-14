function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiStat, COLORS, ALIGNMENTS } from './stat';
import { TITLE_SIZES } from '../title/title';
jest.mock('./../form/form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiStat', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiStat, _extends({
      title: "title",
      description: "description"
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('loading is rendered', function () {
      var component = render(React.createElement(EuiStat, _extends({
        title: "title",
        description: "description",
        isLoading: true
      }, requiredProps)));
      expect(component).toMatchSnapshot();
    });
    test('title and description are reversed', function () {
      var component = render(React.createElement(EuiStat, {
        title: "title",
        description: "description",
        reverse: true
      }));
      expect(component).toMatchSnapshot();
    });
    ALIGNMENTS.forEach(function (alignment) {
      test("".concat(alignment, " is rendered"), function () {
        var component = render(React.createElement(EuiStat, {
          title: "title",
          description: "description",
          textAlign: alignment
        }));
        expect(component).toMatchSnapshot();
      });
    });
    COLORS.forEach(function (color) {
      test("".concat(color, " is rendered"), function () {
        var component = render(React.createElement(EuiStat, {
          title: "title",
          description: "description",
          titleColor: color
        }));
        expect(component).toMatchSnapshot();
      });
    });
    TITLE_SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = render(React.createElement(EuiStat, {
          title: "title",
          description: "description",
          titleSize: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});