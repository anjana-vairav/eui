"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiDragDropCopy = exports.euiDragDropMove = exports.euiDragDropReorder = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var euiDragDropReorder = function euiDragDropReorder(list, startIndex, endIndex) {
  var result = _toConsumableArray(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = _slicedToArray(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

exports.euiDragDropReorder = euiDragDropReorder;

var euiDragDropMove = function euiDragDropMove(sourceList, destinationList, dropResultSource, dropResultDestination) {
  var _ref;

  var sourceClone = _toConsumableArray(sourceList);

  var destClone = _toConsumableArray(destinationList);

  var _sourceClone$splice = sourceClone.splice(dropResultSource.index, 1),
      _sourceClone$splice2 = _slicedToArray(_sourceClone$splice, 1),
      removed = _sourceClone$splice2[0];

  destClone.splice(dropResultDestination.index, 0, removed);
  return _ref = {}, _defineProperty(_ref, dropResultSource.droppableId, sourceClone), _defineProperty(_ref, dropResultDestination.droppableId, destClone), _ref;
};

exports.euiDragDropMove = euiDragDropMove;

var euiDragDropCopy = function euiDragDropCopy(sourceList, destinationList, dropResultSource, dropResultDestination, idModification) {
  var _ref2;

  var sourceClone = _toConsumableArray(sourceList);

  var destClone = _toConsumableArray(destinationList);

  destClone.splice(dropResultDestination.index, 0, _objectSpread({}, sourceList[dropResultSource.index], _defineProperty({}, idModification.property, idModification.modifier())));
  return _ref2 = {}, _defineProperty(_ref2, dropResultSource.droppableId, sourceClone), _defineProperty(_ref2, dropResultDestination.droppableId, destClone), _ref2;
};

exports.euiDragDropCopy = euiDragDropCopy;