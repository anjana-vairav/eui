"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _context = require("../context");

var _i18n = require("./i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable local/i18n */
describe('EuiI18n', function () {
  describe('default rendering', function () {
    describe('rendering to dom', function () {
      it('renders a basic string to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a basic string."
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders a string with placeholders to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a {type} with {special}.",
          values: {
            type: 'string',
            special: 'values'
          }
        }));
        expect(component).toMatchSnapshot();
      });
      it('calls a function and renders the result to the dom', function () {
        var values = {
          type: 'callback',
          special: 'values'
        };
        var renderCallback = jest.fn(function (_ref) {
          var type = _ref.type,
              special = _ref.special;
          return "This is a ".concat(type, " with ").concat(special, ".");
        });
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: renderCallback,
          values: values
        }));
        expect(component).toMatchSnapshot();
        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });
    describe('render prop with single token', function () {
      it('renders render prop result to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a basic string."
        }, function (result) {
          return "A nifty thing: ".concat(result);
        }));
        expect(component).toMatchSnapshot();
      });
      it('renders render prop result with placeholders to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a {type} with {special}.",
          values: {
            type: 'string',
            special: 'values'
          }
        }, function (result) {
          return "Here's something cool: ".concat(result);
        }));
        expect(component).toMatchSnapshot();
      });
      it('calls a function and renders render prop result to the dom', function () {
        var values = {
          type: 'callback',
          special: 'values'
        };
        var renderCallback = jest.fn(function (_ref2) {
          var type = _ref2.type,
              special = _ref2.special;
          return "This is a ".concat(type, " with ").concat(special, ".");
        });
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: renderCallback,
          values: values
        }, function (result) {
          return "Here's something neat: ".concat(result);
        }));
        expect(component).toMatchSnapshot();
        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });
    describe('render prop with multiple tokens', function () {
      it('renders render prop result to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_i18n.EuiI18n, {
          tokens: ['test1', 'test2'],
          defaults: ['This is the first basic string.', 'This is the second basic string.']
        }, function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              one = _ref4[0],
              two = _ref4[1];

          return _react.default.createElement("div", null, one, " ", two);
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('reading values from context', function () {
    describe('rendering to dom', function () {
      it('renders a mapped basic string to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test: 'An overridden string.'
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a basic string."
        })));
        expect(component).toMatchSnapshot();
      });
      it('renders a mapped string with placeholders to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test: 'An overridden {type} with {special}.'
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a {type} with {special}.",
          values: {
            type: 'string',
            special: 'values'
          }
        })));
        expect(component).toMatchSnapshot();
      });
      it('calls a mapped function and renders the result to the dom', function () {
        var values = {
          type: 'callback',
          special: 'values'
        };
        var renderCallback = jest.fn(function (_ref5) {
          var type = _ref5.type,
              special = _ref5.special;
          return "This is a mapped ".concat(type, " with ").concat(special, ".");
        });
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test: renderCallback
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: function _default() {
            return '';
          },
          values: values
        })));
        expect(component).toMatchSnapshot();
        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });
    describe('render prop with single token', function () {
      it('renders mapped render prop result to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test: 'An overridden string.'
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a basic string."
        }, function (result) {
          return "A nifty thing: ".concat(result);
        })));
        expect(component).toMatchSnapshot();
      });
      it('renders mapped render prop result with placeholders to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test: 'An overridden {type} with {special}.'
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: "This is a {type} with {special}.",
          values: {
            type: 'string',
            special: 'values'
          }
        }, function (result) {
          return "Here's something cool: ".concat(result);
        })));
        expect(component).toMatchSnapshot();
      });
      it('calls a mapped function and renders render prop result to the dom', function () {
        var values = {
          type: 'callback',
          special: 'values'
        };
        var renderCallback = jest.fn(function (_ref6) {
          var type = _ref6.type,
              special = _ref6.special;
          return "This is a ".concat(type, " with ").concat(special, ".");
        });
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test: renderCallback
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test",
          default: renderCallback,
          values: values
        }, function (result) {
          return "Here's something neat: ".concat(result);
        })));
        expect(component).toMatchSnapshot();
        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });
    describe('render prop with multiple tokens', function () {
      it('renders mapped render prop result to the dom', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test1: 'This is the first mapped value.',
              test2: 'This is the second mapped value.'
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          tokens: ['test1', 'test2'],
          defaults: ['This is the first basic string.', 'This is the second basic string.']
        }, function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              one = _ref8[0],
              two = _ref8[1];

          return _react.default.createElement("div", null, one, " ", two);
        })));
        expect(component).toMatchSnapshot();
      });
    });
    describe('mappingFunc', function () {
      it('calls the mapping function with the source string', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_context.EuiContext, {
          i18n: {
            mapping: {
              test1: 'This is the mapped value.'
            },
            mappingFunc: function mappingFunc(value) {
              return value.toUpperCase();
            }
          }
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "test1",
          default: "This is the basic string."
        }, function (one) {
          return _react.default.createElement("div", {
            "aria-label": one
          }, one);
        })));
        expect(component).toMatchSnapshot();
      });
    });
  });
});