function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment, cloneElement, useContext } from 'react';
import PropTypes from "prop-types";
import { Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { EuiDroppableContext } from './droppable';
var spacingToClassNameMap = {
  none: null,
  s: 'euiDraggable--s',
  m: 'euiDraggable--m',
  l: 'euiDraggable--l'
};
export var EuiDraggable = function EuiDraggable(_ref) {
  var _ref$customDragHandle = _ref.customDragHandle,
      customDragHandle = _ref$customDragHandle === void 0 ? false : _ref$customDragHandle,
      draggableId = _ref.draggableId,
      _ref$isDragDisabled = _ref.isDragDisabled,
      isDragDisabled = _ref$isDragDisabled === void 0 ? false : _ref$isDragDisabled,
      _ref$isRemovable = _ref.isRemovable,
      isRemovable = _ref$isRemovable === void 0 ? false : _ref$isRemovable,
      index = _ref.index,
      children = _ref.children,
      className = _ref.className,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 'none' : _ref$spacing,
      style = _ref.style,
      _ref$dataTestSubj = _ref['data-test-subj'],
      dataTestSubj = _ref$dataTestSubj === void 0 ? 'draggable' : _ref$dataTestSubj,
      rest = _objectWithoutProperties(_ref, ["customDragHandle", "draggableId", "isDragDisabled", "isRemovable", "index", "children", "className", "spacing", "style", "data-test-subj"]);

  var _useContext = useContext(EuiDroppableContext),
      cloneItems = _useContext.cloneItems;

  return React.createElement(Draggable, _extends({
    draggableId: draggableId,
    index: index,
    isDragDisabled: isDragDisabled
  }, rest), function (provided, snapshot) {
    var classes = classNames('euiDraggable', {
      'euiDraggable--hasClone': cloneItems,
      'euiDraggable--hasCustomDragHandle': customDragHandle,
      'euiDraggable--isDragging': snapshot.isDragging,
      'euiDraggable--withoutDropAnimation': isRemovable
    }, spacingToClassNameMap[spacing], className);
    var childClasses = classNames('euiDraggable__item', {
      'euiDraggable__item--hasCustomDragHandle': customDragHandle,
      'euiDraggable__item--isDisabled': isDragDisabled,
      'euiDraggable__item--isDragging': snapshot.isDragging,
      'euiDraggable__item--isDropAnimating': snapshot.isDropAnimating
    });
    var DraggableElement = typeof children === 'function' ? children(provided, snapshot) : children; // as specified by `DraggableProps`

    return React.createElement(Fragment, null, React.createElement("div", _extends({}, provided.draggableProps, !customDragHandle ? provided.dragHandleProps : {}, {
      ref: provided.innerRef,
      "data-test-subj": dataTestSubj,
      className: classes,
      style: _objectSpread({}, style, provided.draggableProps.style)
    }), cloneElement(DraggableElement, {
      className: classNames(DraggableElement.props.className, childClasses)
    })), cloneItems && snapshot.isDragging && React.createElement("div", {
      className: classNames(classes, 'euiDraggable--clone')
    }, DraggableElement));
  });
};
EuiDraggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.any.isRequired]).isRequired,
  className: PropTypes.string,

  /**
     * Whether the `children` will provide and set up its own drag handle
     */
  customDragHandle: PropTypes.bool,

  /**
     * Whether the item is currently in a position to be removed
     */
  isRemovable: PropTypes.bool,

  /**
     * Adds padding to the draggable item
     */
  spacing: PropTypes.oneOf(["none", "s", "m", "l"]),
  style: PropTypes.any,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiDraggable.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDraggable",
  "props": {
    "customDragHandle": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Whether the `children` will provide and set up its own drag handle"
    },
    "isDragDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "isRemovable": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Whether the item is currently in a position to be removed"
    },
    "spacing": {
      "defaultValue": {
        "value": "'none'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Adds padding to the draggable item"
    },
    "data-test-subj": {
      "defaultValue": {
        "value": "'draggable'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "any"
        }]
      },
      "required": true,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "style": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};