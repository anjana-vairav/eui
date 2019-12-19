"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _image = require("./image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiImage', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_image.EuiImage, _extends({
      alt: "alt",
      size: "l",
      url: "/cat.jpg"
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('is rendered and allows full screen', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_image.EuiImage, _extends({
      alt: "alt",
      size: "l",
      url: "/cat.jpg",
      allowFullScreen: true
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
});