"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _render_to_text = require("./render_to_text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('useRenderToText', function () {
  it("Returns a ReactNode's rendered string content", function () {
    var renderedTexts = [];

    var Component = function Component(_ref) {
      var children = _ref.children;
      var text = (0, _render_to_text.useRenderToText)(children);
      renderedTexts.push(text);
      return _react.default.createElement("div", null, text);
    };

    var component = (0, _enzyme.mount)(_react.default.createElement(Component, null, _react.default.createElement("div", null, _react.default.createElement("button", null, "Hello There"))));
    component.setProps({
      children: _react.default.createElement("span", null, "and this")
    });
    expect(renderedTexts).toEqual(['', '', 'Hello There', 'Hello There', 'Hello There', 'and this']);
  });
});