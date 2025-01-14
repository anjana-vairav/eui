function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { findPopoverPosition, getAvailableSpace, getElementBoundingBox, getPopoverScreenCoordinates, getVisibleFit, POSITIONS } from './popover_positioning';

function makeBB(top, right, bottom, left) {
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: right - left,
    height: bottom - top
  };
}

describe('popover_positioning', function () {
  describe('getElementBoundingBox', function () {
    var clientRect = {
      top: 5,
      right: 20,
      left: 5,
      bottom: 50,
      width: 15,
      height: 45
    };
    var origGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    beforeEach(function () {
      return HTMLElement.prototype.getBoundingClientRect = function () {
        return clientRect;
      };
    });
    afterEach(function () {
      return HTMLElement.prototype.getBoundingClientRect = origGetBoundingClientRect;
    });
    it('returns a new JavaScript object with correct values', function () {
      // `getBoundingClientRect` in the browser returns a `DOMRect`
      // and we expect `getElementBoundingBox` to return a plain object representation
      var div = document.createElement('div');
      expect(div.getBoundingClientRect()).toBe(clientRect);
      var boundingBox = getElementBoundingBox(div);
      expect(boundingBox).not.toBe(clientRect);
      expect(boundingBox).toEqual(clientRect);
    });
  });
  describe('getAvailableSpace', function () {
    // 50h x 30w
    var anchorBoundingBox = {
      top: 100,
      right: 60,
      bottom: 150,
      left: 30
    }; // 80h x 65w

    var containerBoundingBox = {
      top: 10,
      right: 90,
      bottom: 190,
      left: 25
    };
    var expectedAvailableSpace = {
      top: 90,
      right: 30,
      bottom: 40,
      left: 5
    };
    it('returns the distance from each side of the anchor to each side of the container', function () {
      POSITIONS.forEach(function (side) {
        expect(getAvailableSpace(anchorBoundingBox, containerBoundingBox, 0, 0, side)).toEqual(expectedAvailableSpace);
      });
    });
    it('subtracts the buffer amount from the returned distances', function () {
      POSITIONS.forEach(function (side) {
        expect(getAvailableSpace(anchorBoundingBox, containerBoundingBox, 5, 0, side)).toEqual({
          top: expectedAvailableSpace.top - 5,
          right: expectedAvailableSpace.right - 5,
          bottom: expectedAvailableSpace.bottom - 5,
          left: expectedAvailableSpace.left - 5
        });
      });
    });
    it('subtracts the offset from the specified offsetSide', function () {
      POSITIONS.forEach(function (side) {
        expect(getAvailableSpace(anchorBoundingBox, containerBoundingBox, 0, 5, side)).toEqual(_objectSpread({}, expectedAvailableSpace, _defineProperty({}, side, expectedAvailableSpace[side] - 5)));
      });
    });
    it('subtracts the buffer and the offset from the specified offsetSide', function () {
      POSITIONS.forEach(function (side) {
        expect(getAvailableSpace(anchorBoundingBox, containerBoundingBox, 3, 1, side)).toEqual(_defineProperty({
          // apply buffer space
          top: expectedAvailableSpace.top - 3,
          right: expectedAvailableSpace.right - 3,
          bottom: expectedAvailableSpace.bottom - 3,
          left: expectedAvailableSpace.left - 3
        }, side, expectedAvailableSpace[side] - 3 - 1));
      });
    });
  });
  describe('getVisibleFit', function () {
    it('calculates full visibility when content is fully enclosed by container', function () {
      var content = {
        top: 25,
        right: 50,
        bottom: 50,
        left: 25
      };
      var container = {
        top: 0,
        right: 500,
        bottom: 500,
        left: 0
      };
      expect(getVisibleFit(content, container)).toBe(1);
    });
    it('calculates full visibility when container is the same size', function () {
      var content = {
        top: 25,
        right: 50,
        bottom: 50,
        left: 25
      };
      var container = {
        top: 25,
        right: 50,
        bottom: 50,
        left: 25
      };
      expect(getVisibleFit(content, container)).toBe(1);
    });
    it('calculates partial visibility when content overflows out of container', function () {
      var content = {
        top: -5,
        right: 5,
        bottom: 5,
        left: -5
      };
      var container = {
        top: 0,
        right: 10,
        bottom: 10,
        left: 0
      };
      expect(getVisibleFit(content, container)).toBe(0.25);
    });
    it('calculates zero visibility when content is not in the container', function () {
      var content = {
        top: -10,
        right: -5,
        bottom: -5,
        left: -10
      };
      var container = {
        top: 0,
        right: 10,
        bottom: 10,
        left: 0
      };
      expect(getVisibleFit(content, container)).toBe(0);
    });
  });
  describe('getPopoverScreenCoordinates', function () {
    describe('not enough space', function () {
      it('returns correct fit when the window does not have space on the primary axis', function () {
        // no window space on top
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(10, 500, 15, 450),
          popoverBoundingBox: makeBB(0, 50, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 0)
        })).toEqual({
          fit: 0.2,
          top: -40,
          left: 450
        });
      });
      it('returns correct fit when the window does not have space on the cross-axis', function () {
        // enough space on top, but anchor width + available window space isn't enough
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(10, 500, 15, 450),
          popoverBoundingBox: makeBB(0, 100, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 430),
          containerBoundingBox: makeBB(0, 1024, 768, 0)
        })).toEqual({
          fit: 0.2,
          top: -40,
          left: 430
        });
      });
      it('returns correct fit when the container does not have space on the primary axis', function () {
        // no window space on top
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(10, 500, 15, 450),
          popoverBoundingBox: makeBB(0, 50, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 0)
        })).toEqual({
          fit: 0.2,
          top: -40,
          left: 450
        });
      });
      it('returns null when the container does not have space on the cross-axis', function () {
        // enough space on top, but anchor width + available window space isn't enough
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(10, 500, 15, 450),
          popoverBoundingBox: makeBB(0, 100, 50, 0),
          windowBoundingBox: makeBB(0, 520, 768, 430),
          containerBoundingBox: makeBB(0, 1024, 768, 0)
        })).toEqual({
          fit: 0.18,
          top: -40,
          left: 430
        });
      });
    });
    describe('enough space', function () {
      it('prefers placing centered along the anchor', function () {
        // no need to shift content, should be positioned at the
        // anchor's right + offset, and centered vertically
        expect(getPopoverScreenCoordinates({
          position: 'right',
          anchorBoundingBox: makeBB(300, 200, 320, 100),
          popoverBoundingBox: makeBB(0, 50, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 0),
          offset: 20
        })).toEqual({
          fit: 1,
          top: 285,
          left: 220
        });
      });
      describe('limited window space', function () {
        it('shifts along the cross axis when needed', function () {
          // bottom space is limited, should shift up to make the difference
          expect(getPopoverScreenCoordinates({
            position: 'right',
            anchorBoundingBox: makeBB(300, 200, 320, 100),
            popoverBoundingBox: makeBB(0, 50, 50, 0),
            windowBoundingBox: makeBB(0, 1024, 330, 0),
            containerBoundingBox: makeBB(0, 1024, 768, 0),
            offset: 20
          })).toEqual({
            fit: 1,
            top: 280,
            left: 220
          }); // top space is limited, should shift down to make the difference

          expect(getPopoverScreenCoordinates({
            position: 'right',
            anchorBoundingBox: makeBB(300, 200, 320, 100),
            popoverBoundingBox: makeBB(0, 50, 50, 0),
            windowBoundingBox: makeBB(300, 1024, 768, 0),
            containerBoundingBox: makeBB(0, 1024, 768, 0),
            offset: 20
          })).toEqual({
            fit: 1,
            top: 300,
            left: 220
          });
        });
      });
      describe('limited container space', function () {
        it('shifts along the cross axis when needed', function () {
          // left space is limited, should shift right to make the difference
          expect(getPopoverScreenCoordinates({
            position: 'bottom',
            anchorBoundingBox: makeBB(300, 110, 400, 100),
            popoverBoundingBox: makeBB(0, 50, 50, 0),
            windowBoundingBox: makeBB(0, 1024, 768, 0),
            containerBoundingBox: makeBB(0, 1024, 768, 90),
            offset: 35
          })).toEqual({
            fit: 1,
            top: 435,
            left: 90
          }); // right space is limited, should shift left to make the difference

          expect(getPopoverScreenCoordinates({
            position: 'top',
            anchorBoundingBox: makeBB(300, 110, 400, 100),
            popoverBoundingBox: makeBB(0, 50, 50, 0),
            windowBoundingBox: makeBB(0, 1024, 768, 0),
            containerBoundingBox: makeBB(0, 125, 768, 0),
            offset: 35
          })).toEqual({
            fit: 1,
            top: 215,
            left: 75
          });
        });
      });
    });
    describe('arrow positioning', function () {
      it('calculates the position for the arrow', function () {
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(100, 100, 100, 0),
          popoverBoundingBox: makeBB(0, 50, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 0),
          offset: 10,
          arrowConfig: {
            arrowWidth: 5,
            arrowBuffer: 0
          }
        })).toEqual({
          fit: 1,
          top: 40,
          left: 25,
          arrow: {
            top: 50,
            left: 22.5
          }
        });
      });
      it('respects the arrow buffer', function () {
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(45, 55, 55, 45),
          popoverBoundingBox: makeBB(0, 50, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 40),
          offset: 10,
          arrowConfig: {
            arrowWidth: 5,
            arrowBuffer: 10
          }
        })).toEqual({
          fit: 0.665,
          top: -15,
          left: 37.5,
          arrow: {
            top: 50,
            left: 10
          }
        });
      });
      it('respects both popover & arrow buffers', function () {
        expect(getPopoverScreenCoordinates({
          position: 'top',
          anchorBoundingBox: makeBB(45, 55, 55, 45),
          popoverBoundingBox: makeBB(0, 50, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 40),
          offset: 10,
          buffer: 15,
          arrowConfig: {
            arrowWidth: 5,
            arrowBuffer: 10
          }
        })).toEqual({
          fit: 0.26,
          top: -15,
          left: 37.5,
          arrow: {
            top: 50,
            left: 10
          }
        });
      });
    });
    describe('align position', function () {
      it('aligns the cross-axis position to align with the anchor boundary', function () {
        expect(getPopoverScreenCoordinates({
          position: 'top',
          align: 'left',
          anchorBoundingBox: makeBB(100, 125, 110, 75),
          popoverBoundingBox: makeBB(0, 100, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 0),
          arrowConfig: {
            arrowWidth: 6,
            arrowBuffer: 10
          }
        })).toEqual({
          fit: 1,
          top: 50,
          left: 75,
          arrow: {
            top: 50,
            left: 22
          }
        });
        expect(getPopoverScreenCoordinates({
          position: 'bottom',
          align: 'right',
          anchorBoundingBox: makeBB(100, 125, 110, 75),
          popoverBoundingBox: makeBB(0, 100, 50, 0),
          windowBoundingBox: makeBB(0, 1024, 768, 0),
          containerBoundingBox: makeBB(0, 1024, 768, 0),
          arrowConfig: {
            arrowWidth: 6,
            arrowBuffer: 20
          }
        })).toEqual({
          fit: 1,
          top: 110,
          left: 25,
          arrow: {
            top: 0,
            left: 72
          }
        });
      });
      it('aligns content best as possible in limited space', function () {
        expect(getPopoverScreenCoordinates({
          position: 'right',
          align: 'bottom',
          anchorBoundingBox: makeBB(100, 125, 110, 75),
          popoverBoundingBox: makeBB(0, 100, 200, 0),
          windowBoundingBox: makeBB(-200, 1024, 768, 0),
          containerBoundingBox: makeBB(-200, 1024, 768, 0),
          arrowConfig: {
            arrowWidth: 6,
            arrowBuffer: 10
          }
        })).toEqual({
          fit: 1,
          top: -82,
          left: 125,
          arrow: {
            top: 184,
            left: 0
          }
        });
      });
    });
  });
  describe('findPopoverPosition', function () {
    beforeEach(function () {
      // reset any scrolling before each test
      // @ts-ignore
      window.pageXOffset = 0; // @ts-ignore

      window.pageYOffset = 0;
    });
    describe('placement in desired position', function () {
      it('finds space in the requested position', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        };

        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(0, 1024, 768, 0);
        };

        expect(findPopoverPosition({
          position: 'top',
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 7
        })).toEqual({
          fit: 1,
          position: 'top',
          top: 43,
          left: 85
        });
      });
    });
    describe('placement falls back to position on same axis', function () {
      it('finds space in the requested position', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        }; // give the container limited space on both left and top, forcing to bottom-right


        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(50, 300, 768, 30);
        };

        expect(findPopoverPosition({
          position: 'left',
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 5
        })).toEqual({
          fit: 1,
          position: 'right',
          top: 85,
          left: 155
        });
      });
    });
    describe('placement falls back to first complementary position', function () {
      it('finds space in the requested position', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        }; // give the container limited space on both left and right, forcing to top


        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(0, 160, 768, 40);
        };

        expect(findPopoverPosition({
          position: 'right',
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 5
        })).toEqual({
          fit: 1,
          position: 'top',
          top: 45,
          left: 85
        });
      });
      it('ignores any specified alignment', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        }; // give the container limited space on both left and right, forcing to top


        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(0, 160, 768, 40);
        };

        expect(findPopoverPosition({
          position: 'right',
          align: 'bottom',
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 5
        })).toEqual({
          fit: 1,
          position: 'top',
          top: 45,
          left: 85
        });
      });
      it('respects forcePosition value', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        }; // give the container limited space on both left and right, forcing to top


        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(0, 160, 768, 40);
        };

        expect(findPopoverPosition({
          position: 'right',
          forcePosition: true,
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 5
        })).toEqual({
          fit: 0,
          position: 'right',
          top: 85,
          left: 155
        });
      });
    });
    describe('placement falls back to second complementary position', function () {
      it('finds space in the requested position', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        }; // give the container limited space on both left, right, and top, forcing to bottom


        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(100, 160, 768, 40);
        };

        expect(findPopoverPosition({
          position: 'right',
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 5
        })).toEqual({
          fit: 1,
          position: 'bottom',
          top: 125,
          left: 85
        });
      });
    });
    describe('scrolling', function () {
      it('adds body scroll position to position values', function () {
        // @ts-ignore
        window.pageYOffset = 100; // @ts-ignore

        window.pageXOffset = 15;
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(100, 150, 120, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 50, 0);
        };

        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(0, 1024, 768, 0);
        };

        expect(findPopoverPosition({
          position: 'top',
          anchor: anchor,
          popover: popover,
          container: container,
          offset: 7
        })).toEqual({
          fit: 1,
          position: 'top',
          top: 143,
          left: 100
        });
      });
    });
    describe('disable positioning on the cross-axis', function () {
      it('forces the popover to stay on the primary axis', function () {
        var anchor = document.createElement('div');

        anchor.getBoundingClientRect = function () {
          return makeBB(450, 150, 550, 50);
        };

        var popover = document.createElement('div');

        popover.getBoundingClientRect = function () {
          return makeBB(0, 30, 100, 0);
        };

        var container = document.createElement('div');

        container.getBoundingClientRect = function () {
          return makeBB(400, 1024, 600, 0);
        };

        expect(findPopoverPosition({
          position: 'top',
          anchor: anchor,
          popover: popover,
          container: container,
          allowCrossAxis: false
        })).toEqual({
          fit: 0.34,
          position: 'top',
          top: 350,
          left: 85
        });
      });
    });
    it('returns anchorBoundingBox if param is specified', function () {
      var anchor = document.createElement('div');

      anchor.getBoundingClientRect = function () {
        return makeBB(100, 150, 120, 50);
      };

      var popover = document.createElement('div');

      popover.getBoundingClientRect = function () {
        return makeBB(0, 30, 50, 0);
      };

      expect(findPopoverPosition({
        position: 'left',
        returnBoundingBox: true,
        anchor: anchor,
        popover: popover
      })).toEqual({
        fit: 1,
        position: 'left',
        top: 85,
        left: 20,
        anchorBoundingBox: {
          bottom: 120,
          height: 20,
          left: 50,
          right: 150,
          top: 100,
          width: 100
        }
      });
    });
  });
});