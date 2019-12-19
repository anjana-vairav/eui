"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _card = require("./card");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('./../form/form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiCard', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, _extends({
      title: "Card title",
      description: "Card description"
    }, _test.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('icon', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        icon: _react.default.createElement(_icon.EuiIcon, {
          className: "myIconClass",
          type: "apmApp"
        })
      }));
      expect(component).toMatchSnapshot();
    });
    test('horizontal', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        layout: "horizontal"
      }));
      expect(component).toMatchSnapshot();
    });
    describe('href', function () {
      it('supports href as a link', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_card.EuiCard, {
          title: "Hoi",
          description: "There",
          href: "#"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('onClick', function () {
      it('supports onClick as a link', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_card.EuiCard, {
          title: "Hoi",
          description: "There",
          href: "#",
          onClick: handler
        }));
        component.find('a').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
      it('supports onClick as a button', function () {
        var handler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_card.EuiCard, {
          title: "Hoi",
          description: "There",
          onClick: handler
        }));
        component.find('button').simulate('click');
        expect(handler.mock.calls.length).toEqual(1);
      });
    });
    test('titleElement', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        titleElement: "h4"
      }));
      expect(component).toMatchSnapshot();
    });
    test('titleSize', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        titleSize: "xs"
      }));
      expect(component).toMatchSnapshot();
    });
    test('footer', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        footer: _react.default.createElement("span", null, "Footer")
      }));
      expect(component).toMatchSnapshot();
    });
    test('children', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description"
      }, "Child"));
      expect(component).toMatchSnapshot();
    });
    test('textAlign', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        textAlign: "right"
      }));
      expect(component).toMatchSnapshot();
    });
    test('display', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        display: "plain"
      }));
      expect(component).toMatchSnapshot();
    });
    test('selectable', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_card.EuiCard, {
        title: "Card title",
        description: "Card description",
        selectable: {
          onClick: function onClick() {}
        }
      }));
      expect(component).toMatchSnapshot();
    });
  });
});