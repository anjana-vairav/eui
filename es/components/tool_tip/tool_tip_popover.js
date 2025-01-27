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
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiToolTipPopover =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiToolTipPopover, _Component);

  function EuiToolTipPopover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiToolTipPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiToolTipPopover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popover", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateDimensions", function () {
      requestAnimationFrame(function () {
        // Because of this delay, sometimes `positionToolTip` becomes unavailable.
        if (_this.popover) {
          _this.props.positionToolTip(_this.popover.getBoundingClientRect());
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopoverRef", function (ref) {
      _this.popover = ref;

      if (_this.props.popoverRef) {
        _this.props.popoverRef(ref);
      }
    });

    return _this;
  }

  _createClass(EuiToolTipPopover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('euiBody-hasPortalContent');
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('euiBody-hasPortalContent');
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          className = _this$props.className,
          positionToolTip = _this$props.positionToolTip,
          popoverRef = _this$props.popoverRef,
          rest = _objectWithoutProperties(_this$props, ["children", "title", "className", "positionToolTip", "popoverRef"]);

      var classes = classNames('euiToolTipPopover', className);
      var optionalTitle;

      if (title) {
        optionalTitle = React.createElement("div", {
          className: "euiToolTip__title"
        }, title);
      }

      return React.createElement("div", _extends({
        className: classes,
        ref: this.setPopoverRef
      }, rest), optionalTitle, children);
    }
  }]);

  return EuiToolTipPopover;
}(Component);
EuiToolTipPopover.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  positionToolTip: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.node,
  popoverRef: PropTypes.func
};
EuiToolTipPopover.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updateDimensions",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setPopoverRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiToolTipPopover",
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
    "positionToolTip": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "popoverRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};