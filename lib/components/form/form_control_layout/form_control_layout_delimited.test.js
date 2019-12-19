"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _form_control_layout_delimited = require("./form_control_layout_delimited");

var _icon = require("../../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiFormControlLayoutDelimited', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout_delimited.EuiFormControlLayoutDelimited, _extends({
      startControl: _react.default.createElement("span", null, "start"),
      endControl: _react.default.createElement("span", null, "end")
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('delimiter', function () {
      describe('is rendered', function () {
        test('as a string', function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout_delimited.EuiFormControlLayoutDelimited, {
            startControl: _react.default.createElement("span", null, "start"),
            endControl: _react.default.createElement("span", null, "end"),
            delimiter: "+"
          }));
          expect(component).toMatchSnapshot();
        });
        test('as a node', function () {
          var icon = _react.default.createElement(_icon.EuiIcon, {
            type: "alert"
          });

          var component = (0, _enzyme.render)(_react.default.createElement(_form_control_layout_delimited.EuiFormControlLayoutDelimited, {
            startControl: _react.default.createElement("span", null, "start"),
            endControl: _react.default.createElement("span", null, "end"),
            delimiter: icon
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});