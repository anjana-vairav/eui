"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _keyboard_accessible = require("./keyboard_accessible");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/tabindex-no-positive */
var noop = function noop() {// eslint-disable-line no-empty
};

describe('EuiKeyboardAccessible', function () {
  describe('throws an error', function () {
    // tslint:disable-next-line:no-console
    var oldConsoleError = console.error;
    var consoleStub;
    beforeEach(function () {
      // We don't use jest.spyOn() here, because EUI's tests apply a global
      // console.error() override that throws an exception. For these
      // tests, we just want to know if console.error() was called.
      // tslint:disable-next-line:no-console
      console.error = consoleStub = jest.fn();
    });
    afterEach(function () {
      // tslint:disable-next-line:no-console
      console.error = oldConsoleError;
    });
    test("when there's no child", function () {
      // @ts-ignore unused var
      var component = _react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null); // eslint-disable-line @typescript-eslint/no-unused-vars


      expect(consoleStub).toBeCalled();
      expect(consoleStub.mock.calls[0][0]).toMatch('needs to wrap an element with which the user interacts.');
    });
    test('when the child is a button', function () {
      // @ts-ignore unused var
      var component = // eslint-disable-line @typescript-eslint/no-unused-vars
      _react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("button", {
        onClick: noop
      }));

      expect(consoleStub).toBeCalled();
      expect(consoleStub.mock.calls[0][0]).toMatch("doesn't need to be used on a button.");
    });
    test('when the child is a link with an href', function () {
      // @ts-ignore unused var
      var component = // eslint-disable-line @typescript-eslint/no-unused-vars
      _react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("a", {
        href: "#",
        onClick: noop
      }, "Click me"));

      expect(consoleStub).toBeCalled();
      expect(consoleStub.mock.calls[0][0]).toMatch("doesn't need to be used on a link if it has a href attribute.");
    });
    test("when the child doesn't have an onClick prop", function () {
      // @ts-ignore unused var
      var component = // eslint-disable-line @typescript-eslint/no-unused-vars
      _react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", null));

      expect(consoleStub).toBeCalled();
      expect(consoleStub.mock.calls[0][0]).toMatch('needs to wrap an element which has an onClick prop assigned.');
    });
    test("when the child's onClick prop isn't a function", function () {
      // @ts-ignore unused var
      var component = // eslint-disable-line @typescript-eslint/no-unused-vars
      _react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        // @ts-ignore not a valid prop type
        onClick: "notAFunction"
      }));

      expect(consoleStub).toBeCalled();
      expect(consoleStub.mock.calls[0][0]).toMatch("child's onClick prop needs to be a function.");
    });
  });
  describe("doesn't throw an error", function () {
    var oldConsoleError;
    var consoleStub;
    beforeEach(function () {
      // tslint:disable-next-line:no-console
      oldConsoleError = console.error; // tslint:disable-next-line:no-console

      console.error = consoleStub = jest.fn();
    });
    afterEach(function () {
      // tslint:disable-next-line:no-console
      console.error = oldConsoleError;
    });
    test('when the element is a link without an href', function () {
      // @ts-ignore unused var
      var component = // eslint-disable-line @typescript-eslint/no-unused-vars
      _react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("a", {
        onClick: noop
      }, "Click me"));

      expect(consoleStub).not.toBeCalled();
    });
  });
  describe('adds accessibility attributes', function () {
    test('tabindex and role', function () {
      var $button = (0, _enzyme.render)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        onClick: noop
      })));
      expect($button).toMatchSnapshot();
    });
  });
  describe("doesn't override pre-existing accessibility attributes", function () {
    test('tabindex', function () {
      var $button = (0, _enzyme.render)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        onClick: noop,
        tabIndex: 1
      })));
      expect($button).toMatchSnapshot();
    });
    test('role', function () {
      var $button = (0, _enzyme.render)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        onClick: noop,
        role: "button",
        tabIndex: 0
      })));
      expect($button).toMatchSnapshot();
    });
  });
  describe('calls onClick', function () {
    test('on ENTER keyup', function () {
      var onClickHandler = jest.fn();
      var $button = (0, _enzyme.shallow)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        "data-div": true,
        onClick: onClickHandler
      })));
      $button.find('[data-div]').simulate('keyup', {
        keyCode: _services.keyCodes.ENTER
      });
      expect(onClickHandler).toBeCalled();
    });
    test('on SPACE keyup', function () {
      var onClickHandler = jest.fn();
      var $button = (0, _enzyme.shallow)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        "data-div": true,
        onClick: onClickHandler
      })));
      $button.find('[data-div]').simulate('keyup', {
        keyCode: _services.keyCodes.SPACE
      });
      expect(onClickHandler).toBeCalled();
    });
  });
  describe("child's props", function () {
    test('onKeyUp handler is called', function () {
      var onKeyUpHandler = jest.fn();
      var $button = (0, _enzyme.shallow)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        "data-div": true,
        onKeyUp: onKeyUpHandler
      })));
      $button.find('[data-div]').simulate('keyup', {
        keyCode: 0
      });
      expect(onKeyUpHandler).toBeCalled();
    });
    test('onKeyDown handler is called', function () {
      var onKeyDownHandler = jest.fn();
      var $button = (0, _enzyme.shallow)(_react.default.createElement(_keyboard_accessible.EuiKeyboardAccessible, null, _react.default.createElement("div", {
        "data-div": true,
        onKeyDown: onKeyDownHandler
      })));
      $button.find('[data-div]').simulate('keydown', {
        keyCode: 0
      });
      expect(onKeyDownHandler).toBeCalled();
    });
  });
});