"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPositionFromStop = exports.getStopFromMouseLocation = exports.calculateScale = exports.isInvalid = exports.isStopInvalid = exports.isColorInvalid = exports.addStop = exports.addDefinedStop = exports.removeStop = void 0;

var _utils = require("../utils");

var _services = require("../../../services");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var EUI_THUMB_SIZE = 16; // Same as $euiRangeThumbHeight & $euiRangeThumbWidth

var removeStop = function removeStop(colorStops, index) {
  if (colorStops.length === 1) {
    return colorStops;
  }

  return _toConsumableArray(colorStops.slice(0, index)).concat(_toConsumableArray(colorStops.slice(index + 1)));
};

exports.removeStop = removeStop;

var addDefinedStop = function addDefinedStop(colorStops, stop) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _services.DEFAULT_VISUALIZATION_COLOR;
  var newStop = {
    stop: stop,
    color: color
  };
  return _toConsumableArray(colorStops).concat([newStop]);
};

exports.addDefinedStop = addDefinedStop;

var addStop = function addStop(colorStops) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _services.DEFAULT_VISUALIZATION_COLOR;
  var max = arguments.length > 2 ? arguments[2] : undefined;
  var index = colorStops.length ? colorStops.length - 1 : 0;
  var stops = colorStops.map(function (el) {
    return el.stop;
  });
  var currentStop = stops[index] != null ? stops[index] : max;
  var delta = 1;

  if (index !== 0) {
    var prevStop = stops[index - 1];
    delta = currentStop - prevStop;
  }

  var stop = currentStop + delta;

  if (stop > max) {
    stop = max;
  } // We've reached the max, so start working backwards


  while (stops.indexOf(stop) > -1) {
    stop--;
  }

  var newStop = {
    stop: stop,
    color: color
  };
  return _toConsumableArray(colorStops.slice(0, index + 1)).concat([newStop], _toConsumableArray(colorStops.slice(index + 1)));
};

exports.addStop = addStop;

var isColorInvalid = function isColorInvalid(color) {
  return !(0, _services.isValidHex)(color) || color === '';
};

exports.isColorInvalid = isColorInvalid;

var isStopInvalid = function isStopInvalid(stop) {
  return stop == null || isNaN(stop);
};

exports.isStopInvalid = isStopInvalid;

var isInvalid = function isInvalid(colorStops) {
  return colorStops.some(function (colorStop) {
    return isColorInvalid(colorStop.color) || isStopInvalid(colorStop.stop);
  });
};

exports.isInvalid = isInvalid;

var calculateScale = function calculateScale(trackWidth) {
  var thumbToTrackRatio = EUI_THUMB_SIZE / trackWidth;
  return (1 - thumbToTrackRatio) * 100;
};

exports.calculateScale = calculateScale;

var getStopFromMouseLocation = function getStopFromMouseLocation(location, ref, min, max) {
  var box = (0, _utils.getEventPosition)(location, ref);
  return Math.round(box.left / box.width * (max - min) + min);
};

exports.getStopFromMouseLocation = getStopFromMouseLocation;

var getPositionFromStop = function getPositionFromStop(stop, ref, min, max) {
  // For wide implementations, integer percentages can be visually off.
  // Use 1 decimal place for more accuracy
  return parseFloat(((stop - min) / (max - min) * calculateScale(ref ? ref.clientWidth : 100)).toFixed(1));
};

exports.getPositionFromStop = getPositionFromStop;