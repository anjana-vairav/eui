function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { cloneElement, Component } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
import { EuiIcon } from '../icon';
import { EuiToolTip } from '../tool_tip';
import { getSecureRelForTarget } from '../../services';
var layoutAlignToClassNames = {
  center: null,
  top: 'euiContextMenu__itemLayout--top',
  bottom: 'euiContextMenu__itemLayout--bottom'
};
export var LAYOUT_ALIGN = keysOf(layoutAlignToClassNames);
export var EuiContextMenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiContextMenuItem, _Component);

  function EuiContextMenuItem() {
    _classCallCheck(this, EuiContextMenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(EuiContextMenuItem).apply(this, arguments));
  }

  _createClass(EuiContextMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          hasPanel = _this$props.hasPanel,
          icon = _this$props.icon,
          buttonRef = _this$props.buttonRef,
          disabled = _this$props.disabled,
          _this$props$layoutAli = _this$props.layoutAlign,
          layoutAlign = _this$props$layoutAli === void 0 ? 'center' : _this$props$layoutAli,
          toolTipTitle = _this$props.toolTipTitle,
          toolTipContent = _this$props.toolTipContent,
          _this$props$toolTipPo = _this$props.toolTipPosition,
          toolTipPosition = _this$props$toolTipPo === void 0 ? 'right' : _this$props$toolTipPo,
          href = _this$props.href,
          target = _this$props.target,
          rel = _this$props.rel,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "hasPanel", "icon", "buttonRef", "disabled", "layoutAlign", "toolTipTitle", "toolTipContent", "toolTipPosition", "href", "target", "rel"]);

      var iconInstance;

      if (icon) {
        switch (_typeof(icon)) {
          case 'string':
            iconInstance = React.createElement(EuiIcon, {
              type: icon,
              size: "m",
              className: "euiContextMenu__icon"
            });
            break;

          default:
            // Assume it's already an instance of an icon.
            iconInstance = cloneElement(icon, {
              className: 'euiContextMenu__icon'
            });
        }
      }

      var arrow;

      if (hasPanel) {
        arrow = React.createElement(EuiIcon, {
          type: "arrowRight",
          size: "m",
          className: "euiContextMenu__arrow"
        });
      }

      var classes = classNames('euiContextMenuItem', className, {
        'euiContextMenuItem-isDisabled': disabled
      });
      var layoutClasses = classNames('euiContextMenu__itemLayout', layoutAlignToClassNames[layoutAlign]);
      var buttonInner = React.createElement("span", {
        className: layoutClasses
      }, iconInstance, React.createElement("span", {
        className: "euiContextMenuItem__text"
      }, children), arrow);
      var button; // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
      // this is a button and piggyback off its disabled styles.

      if (href && !disabled) {
        var secureRel = getSecureRelForTarget({
          href: href,
          target: target,
          rel: rel
        });
        button = React.createElement("a", _extends({
          className: classes,
          href: href,
          target: target,
          rel: secureRel,
          ref: buttonRef
        }, rest), buttonInner);
      } else {
        button = React.createElement("button", _extends({
          disabled: disabled,
          className: classes,
          type: "button",
          ref: buttonRef
        }, rest), buttonInner);
      }

      if (toolTipContent) {
        return React.createElement(EuiToolTip, {
          title: toolTipTitle ? toolTipTitle : null,
          content: toolTipContent,
          anchorClassName: "eui-displayBlock",
          position: toolTipPosition
        }, button);
      } else {
        return button;
      }
    }
  }]);

  return EuiContextMenuItem;
}(Component);
EuiContextMenuItem.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string.isRequired, PropTypes.any.isRequired]),
  hasPanel: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  buttonRef: PropTypes.any,

  /**
     * Required if using a tooltip. Add an optional tooltip on hover
     */
  toolTipContent: PropTypes.node,

  /**
     * Optional title for the tooltip
     */
  toolTipTitle: PropTypes.node,

  /**
     * Dictates the position of the tooltip.
     */
  toolTipPosition: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,

  /**
     * How to align icon with content of button
     */
  layoutAlign: PropTypes.oneOf(["center", "top", "bottom"])
};
EuiContextMenuItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiContextMenuItem",
  "props": {
    "className": {
      "type": {
        "name": "string"
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
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "icon": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "string"
        }, {
          "name": "any"
        }]
      },
      "required": false,
      "description": ""
    },
    "hasPanel": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "buttonRef": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "toolTipContent": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Required if using a tooltip. Add an optional tooltip on hover"
    },
    "toolTipTitle": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Optional title for the tooltip"
    },
    "toolTipPosition": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"top\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }, {
          "value": "\"bottom\"",
          "computed": false
        }, {
          "value": "\"left\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Dictates the position of the tooltip."
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "target": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "rel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "layoutAlign": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"top\"",
          "computed": false
        }, {
          "value": "\"bottom\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "How to align icon with content of button"
    }
  }
};