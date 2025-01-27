"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTreeView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

var _icon = require("../icon");

var _accessibility = require("../accessibility");

var _text = require("../text");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiTreeViewContext = (0, _react.createContext)('');
var treeIdGenerator = (0, _services.htmlIdGenerator)('euiTreeView');

function hasAriaLabel(x) {
  return x.hasOwnProperty('aria-label');
}

var displayToClassNameMap = {
  default: null,
  compressed: 'euiTreeView--compressed'
};

var EuiTreeView =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiTreeView, _Component);

  function EuiTreeView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiTreeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiTreeView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isNested", !!_this.context);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      openItems: _this.props.expandByDefault ? _this.props.items.map(function (_ref) {
        var id = _ref.id,
            children = _ref.children;
        return children ? id : null;
      }).filter(function (x) {
        return x != null;
      }) : [],
      activeItem: '',
      treeID: _this.context || treeIdGenerator(),
      expandChildNodes: _this.props.expandByDefault || false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buttonRef", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setButtonRef", function (ref, index) {
      _this.buttonRef[index] = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNodeClick", function (node) {
      var ignoreCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var index = _this.state.openItems.indexOf(node.id);

      _this.setState({
        expandChildNodes: false
      });

      if (!ignoreCallback && node.callback !== undefined) {
        node.callback();
      }

      if (_this.isNodeOpen(node)) {
        // if the node is part of openItems[] then remove it
        _this.setState({
          openItems: _this.state.openItems.filter(function (_, i) {
            return i !== index;
          })
        });
      } else {
        // if the node isn't part of openItems[] then add it
        _this.setState(function (prevState) {
          return {
            openItems: _toConsumableArray(prevState.openItems).concat([node.id]),
            activeItem: node.id
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isNodeOpen", function (node) {
      return _this.state.openItems.includes(node.id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e, node) {
      switch (e.keyCode) {
        case _services.keyCodes.DOWN:
          {
            var nodeButtons = Array.from(document.querySelectorAll("[data-test-subj=\"euiTreeViewButton-".concat(_this.state.treeID, "\"]")));
            var currentIndex = nodeButtons.indexOf(e.currentTarget);

            if (currentIndex > -1) {
              var nextButton = nodeButtons[currentIndex + 1];

              if (nextButton) {
                e.preventDefault();
                e.stopPropagation();
                nextButton.focus();
              }
            }

            break;
          }

        case _services.keyCodes.UP:
          {
            var _nodeButtons = Array.from(document.querySelectorAll("[data-test-subj=\"euiTreeViewButton-".concat(_this.state.treeID, "\"]")));

            var _currentIndex = _nodeButtons.indexOf(e.currentTarget);

            if (_currentIndex > -1) {
              var prevButton = _nodeButtons[_currentIndex + -1];

              if (prevButton) {
                e.preventDefault();
                e.stopPropagation();
                prevButton.focus();
              }
            }

            break;
          }

        case _services.keyCodes.RIGHT:
          {
            if (!_this.isNodeOpen(node)) {
              e.preventDefault();
              e.stopPropagation();

              _this.handleNodeClick(node, true);
            }

            break;
          }

        case _services.keyCodes.LEFT:
          {
            if (_this.isNodeOpen(node)) {
              e.preventDefault();
              e.stopPropagation();

              _this.handleNodeClick(node, true);
            }
          }

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChildrenKeydown", function (e, index) {
      if (e.keyCode === _services.keyCodes.LEFT) {
        e.preventDefault();
        e.stopPropagation();

        _this.buttonRef[index].focus();
      }
    });

    return _this;
  }

  _createClass(EuiTreeView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          items = _this$props.items,
          _this$props$display = _this$props.display,
          display = _this$props$display === void 0 ? 'default' : _this$props$display,
          expandByDefault = _this$props.expandByDefault,
          showExpansionArrows = _this$props.showExpansionArrows,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "items", "display", "expandByDefault", "showExpansionArrows"]); // Computed classNames


      var classes = (0, _classnames.default)('euiTreeView', display ? displayToClassNameMap[display] : null, {
        'euiTreeView--withArrows': showExpansionArrows
      }, className);
      var instructionsId = "".concat(this.state.treeID, "--instruction");
      return _react.default.createElement(EuiTreeViewContext.Provider, {
        value: this.state.treeID
      }, _react.default.createElement(_text.EuiText, {
        size: display === 'compressed' ? 's' : 'm',
        className: "euiTreeView__wrapper"
      }, !this.isNested && _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement(_i18n.EuiI18n, {
        token: "euiTreeView.listNavigationInstructions",
        default: "You can quickly navigate this list using arrow keys."
      }, function (listNavigationInstructions) {
        return _react.default.createElement("p", {
          id: instructionsId
        }, listNavigationInstructions);
      })), _react.default.createElement("ul", _extends({
        className: classes,
        id: this.state.treeID,
        "aria-describedby": !this.isNested ? instructionsId : undefined
      }, rest), items.map(function (node, index) {
        var buttonId = "".concat(_this2.state.treeID, "--").concat(index, "--node");
        return _react.default.createElement(_i18n.EuiI18n, {
          key: node.label + index,
          token: "euiTreeView.ariaLabel",
          default: "{nodeLabel} child of {ariaLabel}",
          values: {
            nodeLabel: node.label,
            ariaLabel: hasAriaLabel(rest) ? rest['aria-label'] : ''
          }
        }, function (ariaLabel) {
          var label = hasAriaLabel(rest) ? {
            'aria-label': ariaLabel
          } : {
            'aria-labelledby': "".concat(buttonId, " ").concat(rest['aria-labelledby'])
          };
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
            className: (0, _classnames.default)('euiTreeView__node', _this2.isNodeOpen(node) ? 'euiTreeView__node--expanded' : null)
          }, _react.default.createElement("button", {
            id: buttonId,
            "aria-controls": "euiNestedTreeView-".concat(_this2.state.treeID),
            "aria-expanded": _this2.isNodeOpen(node),
            ref: function ref(_ref2) {
              return _this2.setButtonRef(_ref2, index);
            },
            "data-test-subj": "euiTreeViewButton-".concat(_this2.state.treeID),
            onKeyDown: function onKeyDown(event) {
              return _this2.onKeyDown(event, node);
            },
            onClick: function onClick() {
              return _this2.handleNodeClick(node);
            },
            className: (0, _classnames.default)('euiTreeView__nodeInner', showExpansionArrows && node.children ? 'euiTreeView__nodeInner--withArrows' : null, _this2.state.activeItem === node.id ? 'euiTreeView__node--active' : null)
          }, showExpansionArrows && node.children ? _react.default.createElement(_icon.EuiIcon, {
            className: "euiTreeView__expansionArrow",
            size: display === 'compressed' ? 's' : 'm',
            type: _this2.isNodeOpen(node) ? 'arrowDown' : 'arrowRight'
          }) : null, node.icon && !node.useEmptyIcon ? _react.default.createElement("span", {
            className: "euiTreeView__iconWrapper"
          }, _this2.isNodeOpen(node) && node.iconWhenExpanded ? node.iconWhenExpanded : node.icon) : null, node.useEmptyIcon && !node.icon ? _react.default.createElement("span", {
            className: "euiTreeView__iconPlaceholder"
          }) : null, _react.default.createElement("span", {
            className: "euiTreeView__nodeLabel"
          }, node.label)), _react.default.createElement("div", {
            id: "euiNestedTreeView-".concat(_this2.state.treeID),
            onKeyDown: function onKeyDown(event) {
              return _this2.onChildrenKeydown(event, index);
            }
          }, node.children && _this2.isNodeOpen(node) ? _react.default.createElement(EuiTreeView, _extends({
            items: node.children,
            display: display,
            showExpansionArrows: showExpansionArrows,
            expandByDefault: _this2.state.expandChildNodes
          }, label)) : null)));
        });
      }))));
    }
  }]);

  return EuiTreeView;
}(_react.Component);

exports.EuiTreeView = EuiTreeView;

_defineProperty(EuiTreeView, "contextType", EuiTreeViewContext);

EuiTreeView.propTypes = {
  className: _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /** An array of EuiTreeViewNodes
       */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    /** An array of EuiTreeViewNodes to render as children
       */
    children: _propTypes.default.arrayOf(_propTypes.default.any.isRequired),

    /** The readable label for the item
       */
    label: _propTypes.default.string.isRequired,

    /** A unique ID
       */
    id: _propTypes.default.string.isRequired,

    /** An icon to use on the left of the label
       */
    icon: _propTypes.default.element,

    /** Display a differnt icon when the item is expanded.
      For instance, an open folder or a down arrow
      */
    iconWhenExpanded: _propTypes.default.element,

    /** Use an empty icon to keep items without an icon
      lined up with their siblings
      */
    useEmptyIcon: _propTypes.default.bool,

    /** Whether or not the item is expanded.
       */
    isExpanded: _propTypes.default.bool,

    /** Function to call when the item is clicked.
       The open state of the item will always be toggled.
       */
    callback: _propTypes.default.func
  }).isRequired).isRequired,

  /** Optionally use a variation with smaller text and icon sizes
       */
  display: _propTypes.default.oneOf(["default", "compressed"]),

  /** Set all items to open on initial load
       */
  expandByDefault: _propTypes.default.bool,

  /** Display expansion arrows next to all itmes
       * that contain children
       */
  showExpansionArrows: _propTypes.default.bool,
  "aria-label": _propTypes.default.string,
  "aria-labelledby": _propTypes.default.string
};
EuiTreeView.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setButtonRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }, {
      "name": "index",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleNodeClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }, {
      "name": "ignoreCallback",
      "type": null
    }],
    "returns": null
  }, {
    "name": "isNodeOpen",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }, {
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChildrenKeydown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }, {
      "name": "index",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiTreeView",
  "props": {
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "items": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "children": {
              "name": "arrayOf",
              "value": {
                "name": "any"
              },
              "description": "An array of EuiTreeViewNodes to render as children",
              "required": false
            },
            "label": {
              "name": "string",
              "description": "The readable label for the item",
              "required": true
            },
            "id": {
              "name": "string",
              "description": "A unique ID",
              "required": true
            },
            "icon": {
              "name": "element",
              "description": "An icon to use on the left of the label",
              "required": false
            },
            "iconWhenExpanded": {
              "name": "element",
              "description": "Display a differnt icon when the item is expanded.\n      For instance, an open folder or a down arrow",
              "required": false
            },
            "useEmptyIcon": {
              "name": "bool",
              "description": "Use an empty icon to keep items without an icon\n      lined up with their siblings",
              "required": false
            },
            "isExpanded": {
              "name": "bool",
              "description": "Whether or not the item is expanded.",
              "required": false
            },
            "callback": {
              "name": "func",
              "description": "Function to call when the item is clicked.\n       The open state of the item will always be toggled.",
              "required": false
            }
          }
        }
      },
      "required": true,
      "description": "An array of EuiTreeViewNodes"
    },
    "display": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"compressed\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Optionally use a variation with smaller text and icon sizes"
    },
    "expandByDefault": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set all items to open on initial load"
    },
    "showExpansionArrows": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Display expansion arrows next to all itmes\nthat contain children"
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-labelledby": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};