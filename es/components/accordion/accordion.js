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
import { keysOf } from '../common';
import { EuiIcon } from '../icon';
import { EuiMutationObserver } from '../observer/mutation_observer';
import { getDurationAndPerformOnFrame } from '../../services';
var MUTATION_ATTRIBUTE_FILTER = ['style'];
var paddingSizeToClassNameMap = {
  none: null,
  xs: 'euiAccordion__padding--xs',
  s: 'euiAccordion__padding--s',
  m: 'euiAccordion__padding--m',
  l: 'euiAccordion__padding--l',
  xl: 'euiAccordion__padding--xl'
};
export var PADDING_SIZES = keysOf(paddingSizeToClassNameMap);
export var EuiAccordion =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiAccordion, _Component);

  function EuiAccordion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiAccordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiAccordion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "childContent", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "childWrapper", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: _this.props.initialIsOpen
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setChildContentHeight", function () {
      requestAnimationFrame(function () {
        var height = _this.childContent && _this.state.isOpen ? _this.childContent.clientHeight : 0;
        _this.childWrapper && _this.childWrapper.setAttribute('style', "height: ".concat(height, "px"));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMutation", function (records) {
      var isChildStyleMutation = records.find(function (record) {
        return record.attributeName ? MUTATION_ATTRIBUTE_FILTER.indexOf(record.attributeName) > -1 : false;
      });

      if (isChildStyleMutation) {
        getDurationAndPerformOnFrame(records, _this.setChildContentHeight);
      } else {
        _this.setChildContentHeight();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      }, function () {
        _this.props.onToggle && _this.props.onToggle(_this.state.isOpen);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setChildContentRef", function (node) {
      _this.childContent = node;
    });

    return _this;
  }

  _createClass(EuiAccordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setChildContentHeight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setChildContentHeight();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          buttonContent = _this$props.buttonContent,
          className = _this$props.className,
          id = _this$props.id,
          buttonClassName = _this$props.buttonClassName,
          buttonContentClassName = _this$props.buttonContentClassName,
          extraAction = _this$props.extraAction,
          paddingSize = _this$props.paddingSize,
          initialIsOpen = _this$props.initialIsOpen,
          rest = _objectWithoutProperties(_this$props, ["children", "buttonContent", "className", "id", "buttonClassName", "buttonContentClassName", "extraAction", "paddingSize", "initialIsOpen"]);

      var classes = classNames('euiAccordion', {
        'euiAccordion-isOpen': this.state.isOpen
      }, className);
      var paddingClass = classNames(paddingSizeToClassNameMap[paddingSize]);
      var buttonClasses = classNames('euiAccordion__button', buttonClassName);
      var iconClasses = classNames('euiAccordion__icon', {
        'euiAccordion__icon-isOpen': this.state.isOpen
      });
      var icon = React.createElement(EuiIcon, {
        className: iconClasses,
        type: "arrowRight",
        size: "m"
      });
      var optionalAction = null;

      if (extraAction) {
        optionalAction = React.createElement("div", {
          className: "euiAccordion__optionalAction"
        }, extraAction);
      }

      return React.createElement("div", _extends({
        className: classes
      }, rest), React.createElement("div", {
        className: "euiAccordion__triggerWrapper"
      }, React.createElement("button", {
        "aria-controls": id,
        "aria-expanded": !!this.state.isOpen,
        onClick: this.onToggle,
        className: buttonClasses,
        type: "button"
      }, React.createElement("span", {
        className: "euiAccordion__iconWrapper"
      }, icon), React.createElement("span", {
        className: buttonContentClassName
      }, buttonContent)), optionalAction), React.createElement("div", {
        className: "euiAccordion__childWrapper",
        ref: function ref(node) {
          _this2.childWrapper = node;
        },
        id: id
      }, React.createElement(EuiMutationObserver, {
        observerOptions: {
          childList: true,
          subtree: true,
          attributeFilter: MUTATION_ATTRIBUTE_FILTER
        },
        onMutation: this.onMutation
      }, function (mutationRef) {
        return React.createElement("div", {
          ref: function ref(_ref) {
            _this2.setChildContentRef(_ref);

            mutationRef(_ref);
          }
        }, React.createElement("div", {
          className: paddingClass
        }, children));
      })));
    }
  }]);

  return EuiAccordion;
}(Component);

_defineProperty(EuiAccordion, "defaultProps", {
  initialIsOpen: false,
  paddingSize: 'none'
});

EuiAccordion.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  id: PropTypes.string.isRequired,

  /**
       * Class that will apply to the trigger for the accordion.
       */
  buttonClassName: PropTypes.string,

  /**
       * Class that will apply to the trigger content for the accordion.
       */
  buttonContentClassName: PropTypes.string,

  /**
       * The content of the clickable trigger
       */
  buttonContent: PropTypes.node,

  /**
       * Will appear right aligned against the button. Useful for separate actions like deletions.
       */
  extraAction: PropTypes.node,

  /**
       * The accordion will start in the open state.
       */
  initialIsOpen: PropTypes.bool.isRequired,

  /**
       * Optional callback method called on open and close with a single `isOpen` parameter
       */
  onToggle: PropTypes.func,

  /**
       * The padding around the exposed accordion content.
       */
  paddingSize: PropTypes.oneOf(["none", "xs", "s", "m", "l", "xl"]).isRequired
};
EuiAccordion.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setChildContentHeight",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onMutation",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "records",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onToggle",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setChildContentRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiAccordion",
  "props": {
    "initialIsOpen": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "The accordion will start in the open state."
    },
    "paddingSize": {
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
          "value": "\"xs\"",
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
        }, {
          "value": "\"xl\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "The padding around the exposed accordion content."
    },
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
    "id": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "buttonClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Class that will apply to the trigger for the accordion."
    },
    "buttonContentClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Class that will apply to the trigger content for the accordion."
    },
    "buttonContent": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "The content of the clickable trigger"
    },
    "extraAction": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Will appear right aligned against the button. Useful for separate actions like deletions."
    },
    "onToggle": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Optional callback method called on open and close with a single `isOpen` parameter"
    }
  }
};