function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
 * NOTE: We can't test this component because Enzyme doesn't support rendering
 * into portals.
 */
import { Component } from 'react';
import PropTypes from "prop-types";
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { keysOf } from '../common';
export var EuiOverlayMask =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiOverlayMask, _Component);

  function EuiOverlayMask(props) {
    var _this;

    _classCallCheck(this, EuiOverlayMask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiOverlayMask).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "overlayMaskNode", void 0);

    var _this$props = _this.props,
        className = _this$props.className,
        children = _this$props.children,
        onClick = _this$props.onClick,
        rest = _objectWithoutProperties(_this$props, ["className", "children", "onClick"]);

    _this.overlayMaskNode = document.createElement('div');
    _this.overlayMaskNode.className = classNames('euiOverlayMask', className);

    if (onClick) {
      _this.overlayMaskNode.addEventListener('click', onClick);
    }

    keysOf(rest).forEach(function (key) {
      if (typeof rest[key] !== 'string') {
        throw new Error("Unhandled property type. EuiOverlayMask property ".concat(key, " is not a string."));
      }

      _this.overlayMaskNode.setAttribute(key, rest[key]);
    });
    document.body.appendChild(_this.overlayMaskNode);
    return _this;
  }

  _createClass(EuiOverlayMask, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('euiBody-hasOverlayMask');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('euiBody-hasOverlayMask');

      if (this.props.onClick) {
        this.overlayMaskNode.removeEventListener('click', this.props.onClick);
      }

      document.body.removeChild(this.overlayMaskNode);
      this.overlayMaskNode = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      return createPortal(this.props.children, this.overlayMaskNode);
    }
  }]);

  return EuiOverlayMask;
}(Component);
EuiOverlayMask.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};
EuiOverlayMask.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiOverlayMask",
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
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    }
  }
};