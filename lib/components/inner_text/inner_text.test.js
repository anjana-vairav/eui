"use strict";

var _react = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _enzyme = require("enzyme");

var _test = require("../../test");

var _inner_text = require("./inner_text");

var _badge = require("../badge");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

describe('useInnerText', function () {
  test('provides a callback `ref`', function () {
    var ref;

    var App = function App() {
      var _useInnerText = (0, _inner_text.useInnerText)();

      var _useInnerText2 = _slicedToArray(_useInnerText, 1);

      ref = _useInnerText2[0];
      return _react.default.createElement("span", null);
    };

    (0, _enzyme.mount)(_react.default.createElement(App, null));
    expect(ref).toBeInstanceOf(Function);
  });
  test('provides the result of `innerText`', function () {
    var text = 'Test';
    var ref;
    var innerText;

    var App = function App() {
      var _useInnerText3 = (0, _inner_text.useInnerText)();

      var _useInnerText4 = _slicedToArray(_useInnerText3, 2);

      ref = _useInnerText4[0];
      innerText = _useInnerText4[1];
      return _react.default.createElement("span", {
        ref: ref
      }, text);
    };

    (0, _enzyme.mount)(_react.default.createElement(App, null));
    expect(innerText).toEqual(text);
  });
  test('accepts a fallback value', function () {
    var text = 'Test';
    var fallback = 'Fallback';
    var innerText;

    var App = function App() {
      var _useInnerText5 = (0, _inner_text.useInnerText)(fallback);

      var _useInnerText6 = _slicedToArray(_useInnerText5, 2);

      innerText = _useInnerText6[1];
      return _react.default.createElement("span", null, text);
    };

    (0, _enzyme.mount)(_react.default.createElement(App, null));
    expect(innerText).toEqual(fallback);
  });
  test('handles updated elements',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var timeout, first, second, innerText, ref, App;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timeout = 500;
            first = 'First';
            second = 'Second';

            App = function App() {
              var _useState = (0, _react.useState)([first, 'span']),
                  _useState2 = _slicedToArray(_useState, 2),
                  _useState2$ = _slicedToArray(_useState2[0], 2),
                  thing = _useState2$[0],
                  type = _useState2$[1],
                  setThing = _useState2[1];

              (0, _react.useEffect)(function () {
                setTimeout(function () {
                  (0, _testUtils.act)(function () {
                    return setThing([second, 'div']);
                  });
                }, timeout);
              }, [setThing]);

              var _useInnerText7 = (0, _inner_text.useInnerText)();

              var _useInnerText8 = _slicedToArray(_useInnerText7, 2);

              ref = _useInnerText8[0];
              innerText = _useInnerText8[1];
              return _react.default.createElement("div", null, _react.default.createElement(type, {
                ref: ref,
                title: innerText
              }, thing));
            };

            (0, _enzyme.mount)(_react.default.createElement(App, null));
            expect(innerText).toEqual(first);
            _context.next = 8;
            return (0, _test.sleep)(timeout + 10);

          case 8:
            expect(innerText).toEqual(second);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  test('handles updated content',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var timeout, first, second, innerText, ref, App, mutationObserverPolyfillPeriod;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            timeout = 500;
            first = 'First';
            second = 'Second';

            App = function App() {
              var _useState3 = (0, _react.useState)(first),
                  _useState4 = _slicedToArray(_useState3, 2),
                  thing = _useState4[0],
                  setThing = _useState4[1];

              (0, _react.useEffect)(function () {
                setTimeout(function () {
                  (0, _testUtils.act)(function () {
                    return setThing(second);
                  });
                }, timeout);
              }, [setThing]);

              var _useInnerText9 = (0, _inner_text.useInnerText)();

              var _useInnerText10 = _slicedToArray(_useInnerText9, 2);

              ref = _useInnerText10[0];
              innerText = _useInnerText10[1];
              return _react.default.createElement("div", null, _react.default.createElement("span", {
                ref: ref,
                title: innerText
              }, thing));
            };

            (0, _enzyme.mount)(_react.default.createElement(App, null));
            expect(innerText).toEqual(first); // MutationObserver polyfill institues a 30ms mutation timeout period

            mutationObserverPolyfillPeriod = 30;
            _context2.next = 9;
            return (0, _test.sleep)(timeout + mutationObserverPolyfillPeriod + 10);

          case 9:
            expect(innerText).toEqual(second);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
});
describe('EuiInnerText', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_inner_text.EuiInnerText, _test.requiredProps, function (ref, innerText) {
      return _react.default.createElement("span", {
        ref: ref,
        title: innerText
      }, "Test");
    }));
    expect(component).toMatchSnapshot();
  });
  test('uses innerText', function () {
    var text = 'Test';
    var component = (0, _enzyme.mount)(_react.default.createElement(_inner_text.EuiInnerText, _test.requiredProps, function (ref, innerText) {
      return _react.default.createElement("span", {
        ref: ref,
        title: innerText,
        "data-test-subj": "span"
      }, text);
    }));
    var span = (0, _test.findTestSubject)(component, 'span');
    expect(span.props().title).toBe(text);
  });
  test('accepts fallback prop', function () {
    var text = 'Test';
    var fallback = 'Fallback';
    var component = (0, _enzyme.mount)(_react.default.createElement(_inner_text.EuiInnerText, _extends({}, _test.requiredProps, {
      fallback: fallback
    }), function (_, innerText) {
      return _react.default.createElement("span", {
        title: innerText,
        "data-test-subj": "span"
      }, text);
    }));
    var span = (0, _test.findTestSubject)(component, 'span');
    expect(span.props().title).toBe(fallback);
  });
  test('works with wrapper and interspersed DOM elements', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_inner_text.EuiInnerText, _test.requiredProps, function (ref, innerText) {
      return _react.default.createElement("span", {
        ref: ref,
        title: innerText,
        "data-test-subj": "span"
      }, _react.default.createElement("div", null, "I", ' ', _react.default.createElement("span", null, "can", ' ', _react.default.createElement("em", null, "still ", _react.default.createElement("strong", null, "read "), _react.default.createElement(_badge.EuiBadge, null, "this")))));
    }));
    var span = (0, _test.findTestSubject)(component, 'span');
    expect(span.props().title).toBe('I can still read this');
  });
});