"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _aspect_ratio = require("./aspect_ratio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiAspectRatio', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_aspect_ratio.EuiAspectRatio, _extends({
      height: 4,
      width: 9
    }, _required_props.requiredProps), _react.default.createElement("iframe", {
      title: "Elastic is a search company",
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/yJarWSLRM24",
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('maxWidth', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_aspect_ratio.EuiAspectRatio, _extends({
          height: 16,
          width: 9,
          maxWidth: 500
        }, _required_props.requiredProps), _react.default.createElement("iframe", {
          title: "Elastic is a search company",
          width: "560",
          height: "315",
          src: "https://www.youtube.com/embed/yJarWSLRM24",
          frameBorder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })));
        expect(component).toMatchSnapshot();
      });
    });
  });
});