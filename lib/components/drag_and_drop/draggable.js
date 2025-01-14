"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDraggable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _classnames = _interopRequireDefault(require("classnames"));

var _droppable = require("./droppable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var spacingToClassNameMap = {
  none: null,
  s: 'euiDraggable--s',
  m: 'euiDraggable--m',
  l: 'euiDraggable--l'
};

var EuiDraggable = function EuiDraggable(_ref) {
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

  var _useContext = (0, _react.useContext)(_droppable.EuiDroppableContext),
      cloneItems = _useContext.cloneItems;

  return _react.default.createElement(_reactBeautifulDnd.Draggable, _extends({
    draggableId: draggableId,
    index: index,
    isDragDisabled: isDragDisabled
  }, rest), function (provided, snapshot) {
    var classes = (0, _classnames.default)('euiDraggable', {
      'euiDraggable--hasClone': cloneItems,
      'euiDraggable--hasCustomDragHandle': customDragHandle,
      'euiDraggable--isDragging': snapshot.isDragging,
      'euiDraggable--withoutDropAnimation': isRemovable
    }, spacingToClassNameMap[spacing], className);
    var childClasses = (0, _classnames.default)('euiDraggable__item', {
      'euiDraggable__item--hasCustomDragHandle': customDragHandle,
      'euiDraggable__item--isDisabled': isDragDisabled,
      'euiDraggable__item--isDragging': snapshot.isDragging,
      'euiDraggable__item--isDropAnimating': snapshot.isDropAnimating
    });
    var DraggableElement = typeof children === 'function' ? children(provided, snapshot) : children; // as specified by `DraggableProps`

    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", _extends({}, provided.draggableProps, !customDragHandle ? provided.dragHandleProps : {}, {
      ref: provided.innerRef,
      "data-test-subj": dataTestSubj,
      className: classes,
      style: _objectSpread({}, style, provided.draggableProps.style)
    }), (0, _react.cloneElement)(DraggableElement, {
      className: (0, _classnames.default)(DraggableElement.props.className, childClasses)
    })), cloneItems && snapshot.isDragging && _react.default.createElement("div", {
      className: (0, _classnames.default)(classes, 'euiDraggable--clone')
    }, DraggableElement));
  });
};

exports.EuiDraggable = EuiDraggable;
EuiDraggable.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.any.isRequired]).isRequired,
  className: _propTypes.default.string,

  /**
     * Whether the `children` will provide and set up its own drag handle
     */
  customDragHandle: _propTypes.default.bool,

  /**
     * Whether the item is currently in a position to be removed
     */
  isRemovable: _propTypes.default.bool,

  /**
     * Adds padding to the draggable item
     */
  spacing: _propTypes.default.oneOf(["none", "s", "m", "l"]),
  style: _propTypes.default.any,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
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