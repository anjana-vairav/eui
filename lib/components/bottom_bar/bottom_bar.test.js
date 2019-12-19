"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _common = require("../common");

var _bottom_bar = require("./bottom_bar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Temporary hack which we can remove once react-test-renderer supports portals.
// More info at https://github.com/facebook/react/issues/11565.
// @ts-ignore
_reactDom.default.createPortal = function (node) {
  return node;
};

describe('EuiBottomBar', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_bottom_bar.EuiBottomBar, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('paddingSize', function () {
      (0, _common.keysOf)(_bottom_bar.paddingSizeToClassNameMap).forEach(function (paddingSize) {
        test("".concat(paddingSize, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_bottom_bar.EuiBottomBar, {
            paddingSize: paddingSize
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});