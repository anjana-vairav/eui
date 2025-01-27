"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePopoverPosition = calculatePopoverPosition;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getVisibleArea = function getVisibleArea(bounds, windowWidth, windowHeight) {
  var left = bounds.left,
      top = bounds.top,
      width = bounds.width,
      height = bounds.height; // This is a common algorithm for finding the intersected area among two rectangles.

  var dx = Math.min(left + width, windowWidth) - Math.max(left, 0);
  var dy = Math.min(top + height, windowHeight) - Math.max(top, 0);
  return dx * dy;
};

var positionAtTop = function positionAtTop(anchorBounds, width, height, buffer) {
  var widthDifference = width - anchorBounds.width;
  var left = anchorBounds.left - widthDifference * 0.5;
  var top = anchorBounds.top - height - buffer;
  return {
    left: left,
    top: top,
    width: width,
    height: height
  };
};

var positionAtRight = function positionAtRight(anchorBounds, width, height, buffer) {
  var left = anchorBounds.right + buffer;
  var heightDifference = height - anchorBounds.height;
  var top = anchorBounds.top - heightDifference * 0.5;
  return {
    left: left,
    top: top,
    width: width,
    height: height
  };
};

var positionAtBottom = function positionAtBottom(anchorBounds, width, height, buffer) {
  var widthDifference = width - anchorBounds.width;
  var left = anchorBounds.left - widthDifference * 0.5;
  var top = anchorBounds.bottom + buffer;
  return {
    left: left,
    top: top,
    width: width,
    height: height
  };
};

var positionAtLeft = function positionAtLeft(anchorBounds, width, height, buffer) {
  var left = anchorBounds.left - width - buffer;
  var heightDifference = height - anchorBounds.height;
  var top = anchorBounds.top - heightDifference * 0.5;
  return {
    left: left,
    top: top,
    width: width,
    height: height
  };
};

var positionToPositionerMap = {
  top: positionAtTop,
  right: positionAtRight,
  bottom: positionAtBottom,
  left: positionAtLeft
};
/**
 * Determine the best position for a popover that avoids clipping by the window view port.
 *
 * @param {Object} anchorBounds - getBoundingClientRect() of the node the popover is tethered to (e.g. a button).
 * @param {Object} popoverBounds - getBoundingClientRect() of the popover node (e.g. the tooltip).
 * @param {string} requestedPosition - Position the user wants. One of ["top", "right", "bottom", "left"]
 * @param {number} buffer - The space between the wrapper and the popover. Also the minimum space between the
 * popover and the window.
 * @param {Array} positions - List of acceptable positions. Defaults to ["top", "right", "bottom", "left"].
 *
 * @returns {Object} With properties position (one of ["top", "right", "bottom", "left"]), left, top, width, and height.
 */

function calculatePopoverPosition(anchorBounds, popoverBounds, requestedPosition) {
  var buffer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16;
  var positions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'right', 'bottom', 'left'];

  if (typeof buffer !== 'number') {
    throw new Error("calculatePopoverPosition received a buffer argument of ".concat(buffer, "' but expected a number"));
  }

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var popoverWidth = popoverBounds.width,
      popoverHeight = popoverBounds.height;
  var positionToBoundsMap = {};
  var positionToVisibleAreaMap = {};
  positions.forEach(function (position) {
    var bounds = positionToPositionerMap[position](anchorBounds, popoverWidth, popoverHeight, buffer);
    positionToBoundsMap[position] = bounds; // Calculate how much area of the popover is visible at each position.

    positionToVisibleAreaMap[position] = getVisibleArea(bounds, windowWidth, windowHeight);
  }); // If the requested position clips the popover, find the position which clips the popover the least.
  // Default to use the requested position.

  var calculatedPopoverPosition = positions.reduce(function (mostVisiblePosition, position) {
    if (positionToVisibleAreaMap[position] > positionToVisibleAreaMap[mostVisiblePosition]) {
      return position;
    }

    return mostVisiblePosition;
  }, requestedPosition);
  return _objectSpread({
    position: calculatedPopoverPosition
  }, positionToBoundsMap[calculatedPopoverPosition]);
}