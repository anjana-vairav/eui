"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSuggestInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _filter_group = require("../filter_group");

var _form = require("../form");

var _tool_tip = require("../tool_tip");

var _icon = require("../icon");

var _popover = require("../popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var statusMap = {
  unsaved: {
    icon: 'dot',
    color: 'accent',
    tooltip: 'Changes have not been saved.'
  },
  saved: {
    icon: 'checkInCircleFilled',
    color: 'secondary',
    tooltip: 'Saved.'
  },
  unchanged: {
    icon: '',
    color: 'secondary'
  }
};

var EuiSuggestInput =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSuggestInput, _Component);

  function EuiSuggestInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiSuggestInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiSuggestInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      isPopoverOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFieldChange", function (e) {
      _this.setState({
        value: e.target.value,
        isPopoverOpen: e.target.value !== '' ? true : false
      });

      _this.props.sendValue(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.setState({
        isPopoverOpen: false
      });
    });

    return _this;
  }

  _createClass(EuiSuggestInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          status = _this$props.status,
          append = _this$props.append,
          tooltipContent = _this$props.tooltipContent,
          suggestions = _this$props.suggestions,
          sendValue = _this$props.sendValue,
          rest = _objectWithoutProperties(_this$props, ["className", "status", "append", "tooltipContent", "suggestions", "sendValue"]);

      var icon;
      var color;

      if (statusMap[status]) {
        icon = statusMap[status].icon;
        color = statusMap[status].color;
      }

      var classes = (0, _classnames.default)('euiSuggestInput', className); // EuiFieldText's append accepts an array of elements so start by creating an empty array

      var appendArray = [];

      var statusElement = (status === 'saved' || status === 'unsaved') && _react.default.createElement(_tool_tip.EuiToolTip, {
        position: "left",
        content: tooltipContent || statusMap[status].tooltip
      }, _react.default.createElement(_icon.EuiIcon, {
        className: "euiSuggestInput__statusIcon",
        color: color,
        type: icon
      })); // Push the status element to the array if it is not undefined


      if (statusElement) appendArray.push(statusElement); // Check to see if consumer passed an append item and if so, add it to the array

      if (append) appendArray.push(append);

      var customInput = _react.default.createElement(_form.EuiFieldText, _extends({
        value: this.state.value,
        fullWidth: true,
        append: appendArray,
        isLoading: status === 'loading' ? true : false,
        onChange: this.onFieldChange
      }, rest));

      return _react.default.createElement("div", {
        className: classes
      }, _react.default.createElement(_popover.EuiInputPopover, {
        id: "popover",
        input: customInput,
        isOpen: this.state.isPopoverOpen,
        panelPaddingSize: "none",
        fullWidth: true,
        closePopover: this.closePopover
      }, _react.default.createElement("div", null, suggestions)));
    }
  }]);

  return EuiSuggestInput;
}(_react.Component);

exports.EuiSuggestInput = EuiSuggestInput;
EuiSuggestInput.propTypes = {
  className: _propTypes.default.string,

  /**
   * Status of the current query 'unsaved', 'saved', 'unchanged' or 'loading'.
   */
  status: _propTypes.default.oneOf(['unsaved', 'saved', 'unchanged', 'loading']),
  tooltipContent: _propTypes.default.string,

  /**
   * Element to be appended to the input bar.
   */
  append: _propTypes.default.node,

  /**
   * List of suggestions to display using 'suggestItem'.
   */
  suggestions: _propTypes.default.array
};
EuiSuggestInput.defaultProps = {
  status: 'unchanged'
};
EuiSuggestInput.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onFieldChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "closePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiSuggestInput",
  "props": {
    "status": {
      "defaultValue": {
        "value": "'unchanged'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'unsaved'",
          "computed": false
        }, {
          "value": "'saved'",
          "computed": false
        }, {
          "value": "'unchanged'",
          "computed": false
        }, {
          "value": "'loading'",
          "computed": false
        }]
      },
      "required": false,
      "description": "Status of the current query 'unsaved', 'saved', 'unchanged' or 'loading'."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "tooltipContent": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "append": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Element to be appended to the input bar."
    },
    "suggestions": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": "List of suggestions to display using 'suggestItem'."
    }
  }
};