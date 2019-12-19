"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _empty_prompt = require("./empty_prompt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiEmptyPrompt', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_empty_prompt.EuiEmptyPrompt, _extends({
      iconType: "arrowUp",
      title: _react.default.createElement("h2", null, "Title"),
      body: _react.default.createElement("p", null, "Body"),
      actions: _react.default.createElement("div", null, "Actions")
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('iconType', function () {
      test('renders alone', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_empty_prompt.EuiEmptyPrompt, {
          iconType: "arrowUp"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('title', function () {
      test('renders alone', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_empty_prompt.EuiEmptyPrompt, {
          title: _react.default.createElement("div", null, "title")
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('body', function () {
      test('renders alone', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_empty_prompt.EuiEmptyPrompt, {
          body: "body"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('actions', function () {
      test('renders alone', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_empty_prompt.EuiEmptyPrompt, {
          actions: "actions"
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders an array', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_empty_prompt.EuiEmptyPrompt, {
          actions: ['action1', 'action2']
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});