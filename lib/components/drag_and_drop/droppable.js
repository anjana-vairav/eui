"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDroppable = exports.EuiDroppableContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _classnames = _interopRequireDefault(require("classnames"));

var _drag_drop_context = require("./drag_drop_context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var spacingToClassNameMap = {
  none: null,
  s: 'euiDroppable--s',
  m: 'euiDroppable--m',
  l: 'euiDroppable--l'
};

var EuiDroppableContext = _react.default.createContext({
  cloneItems: false
});

exports.EuiDroppableContext = EuiDroppableContext;

var EuiDroppable = function EuiDroppable(_ref) {
  var droppableId = _ref.droppableId,
      direction = _ref.direction,
      _ref$isDropDisabled = _ref.isDropDisabled,
      isDropDisabled = _ref$isDropDisabled === void 0 ? false : _ref$isDropDisabled,
      children = _ref.children,
      className = _ref.className,
      _ref$cloneDraggables = _ref.cloneDraggables,
      cloneDraggables = _ref$cloneDraggables === void 0 ? false : _ref$cloneDraggables,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 'none' : _ref$spacing,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'EUI_DEFAULT' : _ref$type,
      _ref$withPanel = _ref.withPanel,
      withPanel = _ref$withPanel === void 0 ? false : _ref$withPanel,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? false : _ref$grow,
      _ref$dataTestSubj = _ref['data-test-subj'],
      dataTestSubj = _ref$dataTestSubj === void 0 ? 'droppable' : _ref$dataTestSubj,
      rest = _objectWithoutProperties(_ref, ["droppableId", "direction", "isDropDisabled", "children", "className", "cloneDraggables", "spacing", "style", "type", "withPanel", "grow", "data-test-subj"]);

  var _useContext = (0, _react.useContext)(_drag_drop_context.EuiDragDropContextContext),
      isDraggingType = _useContext.isDraggingType;

  var dropIsDisabled = cloneDraggables ? true : isDropDisabled;
  return _react.default.createElement(_reactBeautifulDnd.Droppable, _extends({
    isDropDisabled: dropIsDisabled,
    droppableId: droppableId,
    direction: direction,
    type: type
  }, rest), function (provided, snapshot) {
    var classes = (0, _classnames.default)('euiDroppable', {
      'euiDroppable--isDisabled': dropIsDisabled,
      'euiDroppable--isDraggingOver': snapshot.isDraggingOver,
      'euiDroppable--isDraggingType': isDraggingType === type,
      'euiDroppable--withPanel': withPanel,
      'euiDroppable--grow': grow,
      'euiDroppable--noGrow': !grow
    }, spacingToClassNameMap[spacing], className);
    var placeholderClasses = (0, _classnames.default)('euiDroppable__placeholder', {
      'euiDroppable__placeholder--isHidden': cloneDraggables
    });
    var DroppableElement = typeof children === 'function' ? children(provided, snapshot) : children;
    return _react.default.createElement("div", _extends({}, provided.droppableProps, {
      ref: provided.innerRef,
      style: style,
      "data-test-subj": dataTestSubj,
      className: classes
    }), _react.default.createElement(EuiDroppableContext.Provider, {
      value: {
        cloneItems: cloneDraggables
      }
    }, DroppableElement), _react.default.createElement("div", {
      className: placeholderClasses
    }, provided.placeholder));
  });
};

exports.EuiDroppable = EuiDroppable;
EuiDroppable.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.any.isRequired]).isRequired,
  className: _propTypes.default.string,

  /**
     * Makes its items immutable. Dragging creates cloned items that can be dropped elsewhere.
     */
  cloneDraggables: _propTypes.default.bool,
  style: _propTypes.default.any,

  /**
     * Adds padding to the droppable area
     */
  spacing: _propTypes.default.oneOf(["none", "s", "m", "l"]),

  /**
     * Adds an EuiPanel style to the droppable area
     */
  withPanel: _propTypes.default.bool,

  /**
     * Allow the panel to flex-grow?
     */
  grow: _propTypes.default.bool,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiDroppable.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDroppable",
  "props": {
    "isDropDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "cloneDraggables": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Makes its items immutable. Dragging creates cloned items that can be dropped elsewhere."
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
      "description": "Adds padding to the droppable area"
    },
    "type": {
      "defaultValue": {
        "value": "'EUI_DEFAULT'",
        "computed": false
      },
      "required": false
    },
    "withPanel": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Adds an EuiPanel style to the droppable area"
    },
    "grow": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Allow the panel to flex-grow?"
    },
    "data-test-subj": {
      "defaultValue": {
        "value": "'droppable'",
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