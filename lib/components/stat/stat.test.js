"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _stat = require("./stat");

var _title = require("../title/title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('./../form/form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiStat', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_stat.EuiStat, _extends({
      title: "title",
      description: "description"
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('loading is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_stat.EuiStat, _extends({
        title: "title",
        description: "description",
        isLoading: true
      }, _test.requiredProps)));
      expect(component).toMatchSnapshot();
    });
    test('title and description are reversed', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_stat.EuiStat, {
        title: "title",
        description: "description",
        reverse: true
      }));
      expect(component).toMatchSnapshot();
    });

    _stat.ALIGNMENTS.forEach(function (alignment) {
      test("".concat(alignment, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_stat.EuiStat, {
          title: "title",
          description: "description",
          textAlign: alignment
        }));
        expect(component).toMatchSnapshot();
      });
    });

    _stat.COLORS.forEach(function (color) {
      test("".concat(color, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_stat.EuiStat, {
          title: "title",
          description: "description",
          titleColor: color
        }));
        expect(component).toMatchSnapshot();
      });
    });

    _title.TITLE_SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_stat.EuiStat, {
          title: "title",
          description: "description",
          titleSize: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});