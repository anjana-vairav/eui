"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _button_group = require("./button_group");

var _button = require("../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SIZES = ['s', 'm', 'compressed'];
var options = [{
  id: 'button00',
  label: 'Option one'
}, {
  id: 'button01',
  label: 'Option two'
}, {
  id: 'button02',
  label: 'Option three'
}];
describe('EuiButtonGroup', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, _extends({
      onChange: function onChange() {}
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('options', function () {
      it('are rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
      it('can pass down data-test-subj', function () {
        var options2 = [{
          id: 'button00',
          label: 'Option one',
          'data-test-subj': 'test'
        }];
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          options: options2
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('buttonSize', function () {
      SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
            onChange: function onChange() {},
            buttonSize: size,
            options: options
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('isDisabled', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          isDisabled: true,
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isFullWidth', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          isFullWidth: true,
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isIconOnly', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          isIconOnly: true,
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _button.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
            onChange: function onChange() {},
            color: color,
            options: options
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('legend', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          legend: "legend",
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('name', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          name: "name",
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('idSelected', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          idSelected: "button00",
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('type of multi', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          type: "multi",
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
      it('idToSelectedMap is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_button_group.EuiButtonGroup, {
          onChange: function onChange() {},
          type: "multi",
          idToSelectedMap: {
            button00: true,
            button01: true
          },
          options: options
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});