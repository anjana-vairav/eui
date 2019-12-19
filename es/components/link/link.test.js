import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiLink, COLORS } from './link';
describe('EuiLink', function () {
  test('it errors if an invalid color is provided', function () {
    // @ts-ignore as we're deliberately using a bogus value
    expect(function () {
      return render(React.createElement(EuiLink, {
        href: "#",
        color: "phooey"
      }));
    }).toThrow(/phooey/);
  });
  COLORS.forEach(function (color) {
    test("".concat(color, " is rendered"), function () {
      var component = render(React.createElement(EuiLink, {
        color: color
      }));
      expect(component).toMatchSnapshot();
    });
  });
  test('it supports both href and onClick', function () {
    var component = render(React.createElement(EuiLink, {
      href: "/imalink",
      onClick: function onClick() {
        return null;
      }
    }));
    expect(component).toMatchSnapshot();
  });
  test('it passes the default props through', function () {
    var component = render(React.createElement(EuiLink, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('supports children', function () {
    var component = render(React.createElement(EuiLink, {
      href: "#"
    }, React.createElement("span", null, "Hiya!!!")));
    expect(component).toMatchSnapshot();
  });
  test('it is an external link', function () {
    var component = render(React.createElement(EuiLink, {
      external: true,
      href: "/baz/bing"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports href', function () {
    var component = render(React.createElement(EuiLink, {
      href: "/baz/bing"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports target', function () {
    var component = render(React.createElement(EuiLink, {
      href: "#",
      target: "_parent"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports rel', function () {
    var component = render(React.createElement(EuiLink, {
      href: "hoi",
      rel: "stylesheet"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports disabled', function () {
    var component = render(React.createElement(EuiLink, {
      disabled: true,
      onClick: function onClick() {
        return 'hello, world!';
      }
    }));
    expect(component).toMatchSnapshot();
  });
  test('if href is not specified, it renders a button of type=button', function () {
    var component = render(React.createElement(EuiLink, null));
    expect(component).toMatchSnapshot();
  });
  test('button respects the type property', function () {
    var component = render(React.createElement(EuiLink, {
      type: "submit",
      onClick: function onClick() {
        return 'hello, world!';
      }
    }));
    expect(component).toMatchSnapshot();
  });
  test('onClick fires for buttons', function () {
    var handler = jest.fn();
    var component = mount(React.createElement(EuiLink, {
      onClick: handler
    }));
    component.find('button').simulate('click');
    expect(handler.mock.calls.length).toEqual(1);
  });
  test('onClick fires for links', function () {
    var handler = jest.fn();
    var component = mount(React.createElement(EuiLink, {
      href: "#",
      onClick: handler
    }));
    component.find('a').simulate('click');
    expect(handler.mock.calls.length).toEqual(1);
  });
});