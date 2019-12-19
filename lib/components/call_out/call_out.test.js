"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _call_out = require("./call_out");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiCallOut', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_call_out.EuiCallOut, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('title', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_call_out.EuiCallOut, {
          title: "Title"
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('iconType', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_call_out.EuiCallOut, {
          iconType: "user"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _call_out.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_call_out.EuiCallOut, {
            color: color
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('heading', function () {
      _call_out.HEADINGS.forEach(function (heading) {
        test("".concat(heading, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_call_out.EuiCallOut, {
            heading: heading
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});