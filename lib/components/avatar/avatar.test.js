"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _avatar = require("./avatar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiAvatar', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, _extends({
      name: "name"
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('allows a name composed entirely of whitespace', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, _extends({
      name: "  "
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('imageUrl', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
          name: "name",
          imageUrl: "image url"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('size', function () {
      _avatar.SIZES.forEach(function (size) {
        it("".concat(size, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
            name: "name",
            size: size
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('initials', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
          name: "name",
          initials: "lo"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('initialsLength', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
          name: "name",
          initialsLength: 2
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('type', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
          name: "name",
          type: "space"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
          name: "name",
          color: "#000"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
  test('should throw error if color is not a hex', function () {
    var component = function component() {
      return (0, _enzyme.render)(_react.default.createElement(_avatar.EuiAvatar, {
        name: "name",
        color: "rgba(0,0,0,0)"
      }));
    };

    expect(component).toThrowErrorMatchingSnapshot();
  });
});