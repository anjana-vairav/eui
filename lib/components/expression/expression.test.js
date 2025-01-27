"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _expression = require("./expression");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiExpression', function () {
  test('renders', function () {
    var component = _react.default.createElement(_expression.EuiExpression, _extends({
      description: "the answer is",
      value: "42",
      isActive: false // tslint:disable no-empty
      ,
      onClick: function onClick() {}
    }, _required_props.requiredProps));

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  describe('props', function () {
    describe('color', function () {
      _expression.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_expression.EuiExpression, _extends({
            description: "the answer is",
            value: "42",
            color: color
          }, _required_props.requiredProps)));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('uppercase', function () {
      test('true renders uppercase', function () {
        var component = _react.default.createElement(_expression.EuiExpression, {
          description: "the answer is",
          value: "42",
          uppercase: true
        });

        expect((0, _enzyme.render)(component)).toMatchSnapshot();
      });
      test('false renders inherted case', function () {
        var component = _react.default.createElement(_expression.EuiExpression, {
          description: "the answer is",
          value: "42",
          uppercase: false
        });

        expect((0, _enzyme.render)(component)).toMatchSnapshot();
      });
    });
    describe('isActive', function () {
      test('true renders active', function () {
        var component = _react.default.createElement(_expression.EuiExpression, {
          description: "the answer is",
          value: "42",
          isActive: true
        });

        expect((0, _enzyme.render)(component)).toMatchSnapshot();
      });
      test('false renders inactive', function () {
        var component = _react.default.createElement(_expression.EuiExpression, {
          description: "the answer is",
          value: "42",
          isActive: false
        });

        expect((0, _enzyme.render)(component)).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('is called when the button is clicked', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_expression.EuiExpression, _extends({
          description: "the answer is",
          value: "42",
          isActive: false,
          onClick: handler
        }, _required_props.requiredProps)));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
  });
});