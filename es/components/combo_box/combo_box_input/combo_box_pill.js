function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiBadge } from '../../badge';
import { EuiI18n } from '../../i18n';
export var EuiComboBoxPill =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiComboBoxPill, _Component);

  function EuiComboBoxPill() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiComboBoxPill);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiComboBoxPill)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseButtonClick", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          option = _this$props.option;
      onClose(option);
    });

    return _this;
  }

  _createClass(EuiComboBoxPill, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          option = _this$props2.option,
          onClose = _this$props2.onClose,
          color = _this$props2.color,
          onClick = _this$props2.onClick,
          onClickAriaLabel = _this$props2.onClickAriaLabel,
          asPlainText = _this$props2.asPlainText,
          rest = _objectWithoutProperties(_this$props2, ["children", "className", "option", "onClose", "color", "onClick", "onClickAriaLabel", "asPlainText"]);

      var classes = classNames('euiComboBoxPill', {
        'euiComboBoxPill--plainText': asPlainText
      }, className);

      if (onClose) {
        return React.createElement(EuiI18n, {
          token: "euiComboBoxPill.removeSelection",
          default: "Remove {children} from selection in this group",
          values: {
            children: children
          }
        }, function (removeSelection) {
          return React.createElement(EuiBadge, _extends({
            className: classes,
            title: children,
            iconOnClick: _this2.onCloseButtonClick,
            iconOnClickAriaLabel: removeSelection,
            iconType: "cross",
            iconSide: "right",
            color: color,
            closeButtonProps: {
              tabIndex: '-1'
            },
            onClick: onClick,
            onClickAriaLabel: onClickAriaLabel
          }, rest), children);
        });
      }

      if (asPlainText) {
        return React.createElement("span", _extends({
          className: classes
        }, rest), children);
      }

      return React.createElement(EuiBadge, _extends({
        className: classes,
        title: children,
        color: color
      }, rest, {
        onClick: onClick,
        onClickAriaLabel: onClickAriaLabel
      }), children);
    }
  }]);

  return EuiComboBoxPill;
}(Component);

_defineProperty(EuiComboBoxPill, "propTypes", {
  option: PropTypes.object.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
  asPlainText: PropTypes.bool,
  onClick: PropTypes.func,
  onClickAriaLabel: PropTypes.string
});

_defineProperty(EuiComboBoxPill, "defaultProps", {
  color: 'hollow'
});

EuiComboBoxPill.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onCloseButtonClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiComboBoxPill",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'hollow'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "option": {
      "type": {
        "name": "object"
      },
      "required": true,
      "description": ""
    },
    "children": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onClose": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "asPlainText": {
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
    "onClickAriaLabel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};