"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _popover = require("./popover");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('../portal', function () {
  return {
    EuiPortal: function EuiPortal(_ref) {
      var children = _ref.children;
      return children;
    }
  };
}); // Mock the htmlIdGenerator to generate predictable ids for snapshot tests

jest.mock('../../services/accessibility/html_id_generator', function () {
  return {
    htmlIdGenerator: function htmlIdGenerator() {
      return function () {
        return 'htmlId';
      };
    }
  };
});
var id = 0;

var getId = function getId() {
  return "".concat(id++);
};

describe('EuiPopover', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, _extends({
      id: getId(),
      button: _react.default.createElement("button", null),
      closePopover: function closePopover() {}
    }, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('children is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
      id: getId(),
      button: _react.default.createElement("button", null),
      closePopover: function closePopover() {}
    }, "Children"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('display block', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          display: "block",
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {}
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('anchorClassName', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          anchorClassName: "test",
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {}
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('closePopover', function () {
      it('is called when ESC key is hit and the popover is open', function () {
        var closePopoverHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          withTitle: true,
          button: _react.default.createElement("button", null),
          closePopover: closePopoverHandler,
          isOpen: true
        }));
        component.simulate('keydown', {
          keyCode: _services.keyCodes.ESCAPE
        });
        expect(closePopoverHandler).toBeCalledTimes(1);
      });
      it('is not called when ESC key is hit and the popover is closed', function () {
        var closePopoverHandler = jest.fn();
        var component = (0, _enzyme.mount)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          withTitle: true,
          button: _react.default.createElement("button", null),
          closePopover: closePopoverHandler,
          isOpen: false
        }));
        component.simulate('keydown', {
          keyCode: _services.keyCodes.ESCAPE
        });
        expect(closePopoverHandler).not.toBeCalled();
      });
    });
    describe('anchorPosition', function () {
      test('defaults to centerDown', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {}
        }));
        expect(component).toMatchSnapshot();
      });
      test('leftCenter is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {},
          anchorPosition: "leftCenter"
        }));
        expect(component).toMatchSnapshot();
      });
      test('downRight is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {},
          anchorPosition: "downRight"
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('isOpen', function () {
      test('defaults to false', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {}
        }));
        expect(component).toMatchSnapshot();
      });
      test('renders true', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {},
          isOpen: true
        }))); // console.log(component.debug());

        expect(component.render()).toMatchSnapshot();
      });
    });
    describe('ownFocus', function () {
      test('defaults to false', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          isOpen: true,
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {}
        })));
        expect(component.render()).toMatchSnapshot();
      });
      test('renders true', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          isOpen: true,
          ownFocus: true,
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {}
        })));
        expect(component.render()).toMatchSnapshot();
      });
    });
    describe('panelClassName', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {},
          panelClassName: "test",
          isOpen: true
        })));
        expect(component.render()).toMatchSnapshot();
      });
    });
    describe('panelPaddingSize', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_popover.EuiPopover, {
          id: getId(),
          button: _react.default.createElement("button", null),
          closePopover: function closePopover() {},
          panelPaddingSize: "s",
          isOpen: true
        })));
        expect(component.render()).toMatchSnapshot();
      });
    });
  });
  describe('listener cleanup', function () {
    var _raf;

    var _caf;

    beforeAll(function () {
      jest.useFakeTimers();
      _raf = window.requestAnimationFrame;
      _caf = window.cancelAnimationFrame;
      var activeAnimationFrames = new Map();
      var nextAnimationFrameId = 0;

      window.requestAnimationFrame = function (fn) {
        var animationFrameId = nextAnimationFrameId++;
        activeAnimationFrames.set(animationFrameId, setTimeout(fn));
        return animationFrameId;
      };

      window.cancelAnimationFrame = function (id) {
        var timeoutId = activeAnimationFrames.get(id);

        if (timeoutId) {
          clearTimeout(timeoutId);
          activeAnimationFrames.delete(id);
        }
      };
    });
    afterAll(function () {
      jest.useRealTimers();
      window.requestAnimationFrame = _raf;
      window.cancelAnimationFrame = _caf;
    });
    it('cleans up timeouts and rAFs on unmount', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_popover.EuiPopover, {
        id: getId(),
        button: _react.default.createElement("button", null),
        closePopover: function closePopover() {},
        panelPaddingSize: "s",
        isOpen: false
      }));
      component.setProps({
        isOpen: true
      });
      component.unmount(); // EUI's jest configuration throws an error if there are any console.error calls, like
      // React's setState on an unmounted component warning
      // to be future proof, verify that's still the case

      expect(function () {
        console.error('This is a test');
      }).toThrow(); // execute any pending timeouts or animation frame callbacks
      // and validate the timeout/rAF clearing done by EuiPopover

      jest.advanceTimersByTime(10);
    });
  });
});
describe('getPopoverPositionFromAnchorPosition', function () {
  it('maps the first anchor position in a camel-cased string to a popover position', function () {
    expect((0, _popover.getPopoverPositionFromAnchorPosition)('upLeft')).toBe('top');
    expect((0, _popover.getPopoverPositionFromAnchorPosition)('rightDown')).toBe('right');
    expect((0, _popover.getPopoverPositionFromAnchorPosition)('downRight')).toBe('bottom');
    expect((0, _popover.getPopoverPositionFromAnchorPosition)('leftUp')).toBe('left');
  });
  it('returns undefined when an invalid position is extracted', function () {
    expect((0, _popover.getPopoverPositionFromAnchorPosition)('nowhereNohow')).toBeUndefined();
  });
});
describe('getPopoverAlignFromAnchorPosition', function () {
  it('maps the second anchor position in a camel-cased string to a popover position', function () {
    expect((0, _popover.getPopoverAlignFromAnchorPosition)('upLeft')).toBe('left');
    expect((0, _popover.getPopoverAlignFromAnchorPosition)('rightDown')).toBe('bottom');
    expect((0, _popover.getPopoverAlignFromAnchorPosition)('downRight')).toBe('right');
    expect((0, _popover.getPopoverAlignFromAnchorPosition)('leftUp')).toBe('top');
  });
  it('returns undefined when an invalid position is extracted', function () {
    expect((0, _popover.getPopoverAlignFromAnchorPosition)('nowhereNohow')).toBeUndefined();
  });
});