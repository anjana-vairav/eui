function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Children, cloneElement, Component } from 'react';
import PropTypes from "prop-types";
export var EuiValidatableControl =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiValidatableControl, _Component);

  function EuiValidatableControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiValidatableControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiValidatableControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "control", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRef", function (element) {
      _this.control = element; // Call the original ref, if any

      var ref = _this.props.children.ref;

      if (typeof ref === 'function') {
        ref(element);
      }
    });

    return _this;
  }

  _createClass(EuiValidatableControl, [{
    key: "updateValidity",
    value: function updateValidity() {
      if (this.control == null || typeof this.control.setCustomValidity !== 'function') {
        return; // jsdom doesn't polyfill this for the server-side
      }

      if (this.props.isInvalid) {
        this.control.setCustomValidity('Invalid');
      } else {
        this.control.setCustomValidity('');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateValidity();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateValidity();
    }
  }, {
    key: "render",
    value: function render() {
      var child = Children.only(this.props.children);
      return cloneElement(child, {
        ref: this.setRef
      });
    }
  }]);

  return EuiValidatableControl;
}(Component);
EuiValidatableControl.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  isInvalid: PropTypes.bool,
  children: PropTypes.shape({
    ref: PropTypes.func
  }).isRequired
};
EuiValidatableControl.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updateValidity",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "element",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiValidatableControl",
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
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "shape",
        "value": {
          "ref": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": true,
      "description": ""
    }
  }
};