function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'; // export interface EuiDragDropContextProps extends DragDropContextProps {}

export var EuiDragDropContextContext = React.createContext({
  isDraggingType: null
});
export var EuiDragDropContext = function EuiDragDropContext(_ref) {
  var onBeforeDragStart = _ref.onBeforeDragStart,
      onDragStart = _ref.onDragStart,
      onDragUpdate = _ref.onDragUpdate,
      onDragEnd = _ref.onDragEnd,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["onBeforeDragStart", "onDragStart", "onDragUpdate", "onDragEnd", "children"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      isDraggingType = _useState2[0],
      setIsDraggingType = _useState2[1];

  var euiOnDragStart = function euiOnDragStart(start, provided) {
    setIsDraggingType(start.type);

    if (onDragStart) {
      onDragStart(start, provided);
    }
  };

  var euiOnDragEnd = function euiOnDragEnd(result, provided) {
    setIsDraggingType(null);

    if (onDragEnd) {
      onDragEnd(result, provided);
    }
  };

  return React.createElement(DragDropContext, _extends({
    onBeforeDragStart: onBeforeDragStart,
    onDragStart: euiOnDragStart,
    onDragUpdate: onDragUpdate,
    onDragEnd: euiOnDragEnd
  }, rest), React.createElement(EuiDragDropContextContext.Provider, {
    value: {
      isDraggingType: isDraggingType
    }
  }, children));
};
EuiDragDropContext.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDragDropContext"
};