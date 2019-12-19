"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _link = require("./link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiLink', function () {
  test('it errors if an invalid color is provided', function () {
    // @ts-ignore as we're deliberately using a bogus value
    expect(function () {
      return (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
        href: "#",
        color: "phooey"
      }));
    }).toThrow(/phooey/);
  });

  _link.COLORS.forEach(function (color) {
    test("".concat(color, " is rendered"), function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
        color: color
      }));
      expect(component).toMatchSnapshot();
    });
  });

  test('it supports both href and onClick', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      href: "/imalink",
      onClick: function onClick() {
        return null;
      }
    }));
    expect(component).toMatchSnapshot();
  });
  test('it passes the default props through', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('supports children', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      href: "#"
    }, _react.default.createElement("span", null, "Hiya!!!")));
    expect(component).toMatchSnapshot();
  });
  test('it is an external link', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      external: true,
      href: "/baz/bing"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports href', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      href: "/baz/bing"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports target', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      href: "#",
      target: "_parent"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports rel', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      href: "hoi",
      rel: "stylesheet"
    }));
    expect(component).toMatchSnapshot();
  });
  test('supports disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      disabled: true,
      onClick: function onClick() {
        return 'hello, world!';
      }
    }));
    expect(component).toMatchSnapshot();
  });
  test('if href is not specified, it renders a button of type=button', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, null));
    expect(component).toMatchSnapshot();
  });
  test('button respects the type property', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_link.EuiLink, {
      type: "submit",
      onClick: function onClick() {
        return 'hello, world!';
      }
    }));
    expect(component).toMatchSnapshot();
  });
  test('onClick fires for buttons', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_link.EuiLink, {
      onClick: handler
    }));
    component.find('button').simulate('click');
    expect(handler.mock.calls.length).toEqual(1);
  });
  test('onClick fires for links', function () {
    var handler = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_link.EuiLink, {
      href: "#",
      onClick: handler
    }));
    component.find('a').simulate('click');
    expect(handler.mock.calls.length).toEqual(1);
  });
});