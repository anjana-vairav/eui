import React from 'react';
import { mount } from 'enzyme';
import { useRenderToText } from './render_to_text';
describe('useRenderToText', function () {
  it("Returns a ReactNode's rendered string content", function () {
    var renderedTexts = [];

    var Component = function Component(_ref) {
      var children = _ref.children;
      var text = useRenderToText(children);
      renderedTexts.push(text);
      return React.createElement("div", null, text);
    };

    var component = mount(React.createElement(Component, null, React.createElement("div", null, React.createElement("button", null, "Hello There"))));
    component.setProps({
      children: React.createElement("span", null, "and this")
    });
    expect(renderedTexts).toEqual(['', '', 'Hello There', 'Hello There', 'Hello There', 'and this']);
  });
});