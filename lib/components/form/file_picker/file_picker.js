"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFilePicker = exports.DISPLAYS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _validatable_control = require("../validatable_control");

var _button = require("../../button");

var _progress = require("../../progress");

var _icon = require("../../icon");

var _i18n = require("../../i18n");

var _loading = require("../../loading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var displayToClassNameMap = {
  default: null,
  large: 'euiFilePicker--large'
};
var DISPLAYS = Object.keys(displayToClassNameMap);
exports.DISPLAYS = DISPLAYS;

var EuiFilePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiFilePicker, _Component);

  function EuiFilePicker(props) {
    var _this;

    _classCallCheck(this, EuiFilePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiFilePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (filesSelected) {
      if (_this.fileInput.files && _this.fileInput.files.length > 1) {
        _this.setState({
          promptText: "".concat(_this.fileInput.files.length, " ").concat(filesSelected)
        });
      } else if (_this.fileInput.files.length === 0) {
        _this.setState({
          promptText: null
        });
      } else {
        _this.setState({
          promptText: _this.fileInput.value.split('\\').pop()
        });
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(_this.fileInput.files);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeFiles", function (e) {
      e.stopPropagation();
      e.preventDefault();
      _this.fileInput.value = null;

      _this.handleChange();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showDrop", function () {
      if (!_this.props.disabled) {
        _this.setState({
          isHoveringDrop: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideDrop", function () {
      _this.setState({
        isHoveringDrop: false
      });
    });

    _this.state = {
      promptText: null,
      isHoveringDrop: false
    };
    return _this;
  }

  _createClass(EuiFilePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_i18n.EuiI18n, {
        tokens: ['euiFilePicker.clearSelectedFiles', 'euiFilePicker.filesSelected'],
        defaults: ['Clear selected files', 'files selected']
      }, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            clearSelectedFiles = _ref2[0],
            filesSelected = _ref2[1];

        var _this2$props = _this2.props,
            id = _this2$props.id,
            name = _this2$props.name,
            initialPromptText = _this2$props.initialPromptText,
            className = _this2$props.className,
            disabled = _this2$props.disabled,
            compressed = _this2$props.compressed,
            onChange = _this2$props.onChange,
            isInvalid = _this2$props.isInvalid,
            fullWidth = _this2$props.fullWidth,
            isLoading = _this2$props.isLoading,
            display = _this2$props.display,
            rest = _objectWithoutProperties(_this2$props, ["id", "name", "initialPromptText", "className", "disabled", "compressed", "onChange", "isInvalid", "fullWidth", "isLoading", "display"]);

        var isOverridingInitialPrompt = _this2.state.promptText != null;
        var normalFormControl = display === 'default';
        var classes = (0, _classnames.default)('euiFilePicker', displayToClassNameMap[display], {
          euiFilePicker__showDrop: _this2.state.isHoveringDrop,
          'euiFilePicker--compressed': compressed,
          'euiFilePicker--fullWidth': fullWidth,
          'euiFilePicker-isInvalid': isInvalid,
          'euiFilePicker-isLoading': isLoading,
          'euiFilePicker-hasFiles': isOverridingInitialPrompt
        }, className);
        var clearButton;

        if (isLoading && normalFormControl) {
          // Override clear button with loading spinner if it is in loading state
          clearButton = _react.default.createElement(_loading.EuiLoadingSpinner, {
            className: "euiFilePicker__loadingSpinner"
          });
        } else if (isOverridingInitialPrompt) {
          if (normalFormControl) {
            clearButton = _react.default.createElement("button", {
              type: "button",
              "aria-label": clearSelectedFiles,
              className: "euiFilePicker__clearButton",
              onClick: _this2.removeFiles
            }, _react.default.createElement(_icon.EuiIcon, {
              className: "euiFilePicker__clearIcon",
              type: "cross"
            }));
          } else {
            clearButton = _react.default.createElement(_button.EuiButtonEmpty, {
              "aria-label": clearSelectedFiles,
              className: "euiFilePicker__clearButton",
              size: "xs",
              onClick: _this2.removeFiles
            }, "Remove");
          }
        } else {
          clearButton = null;
        }

        var loader = !normalFormControl && isLoading && _react.default.createElement(_progress.EuiProgress, {
          size: "xs",
          color: "accent",
          position: "absolute"
        });

        return _react.default.createElement("div", {
          className: classes
        }, _react.default.createElement("div", {
          className: "euiFilePicker__wrap"
        }, _react.default.createElement(_validatable_control.EuiValidatableControl, {
          isInvalid: isInvalid
        }, _react.default.createElement("input", _extends({
          type: "file",
          id: id,
          name: name,
          className: "euiFilePicker__input",
          onChange: function onChange() {
            return _this2.handleChange(filesSelected);
          },
          ref: function ref(input) {
            _this2.fileInput = input;
          },
          onDragOver: _this2.showDrop,
          onDragLeave: _this2.hideDrop,
          onDrop: _this2.hideDrop,
          disabled: disabled
        }, rest))), _react.default.createElement("div", {
          className: "euiFilePicker__prompt"
        }, _react.default.createElement(_icon.EuiIcon, {
          className: "euiFilePicker__icon",
          type: "importAction",
          size: normalFormControl ? 'm' : 'l',
          "aria-hidden": "true"
        }), _react.default.createElement("div", {
          className: "euiFilePicker__promptText"
        }, _this2.state.promptText || initialPromptText), clearButton, loader)));
      });
    }
  }]);

  return EuiFilePicker;
}(_react.Component);

exports.EuiFilePicker = EuiFilePicker;

_defineProperty(EuiFilePicker, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * The content that appears in the dropzone if no file is attached
   */
  initialPromptText: _propTypes.default.node,

  /**
   * Use as a callback to access the HTML FileList API
   */
  onChange: _propTypes.default.func,

  /**
   * Reduces the size to a typical (compressed) input
   */
  compressed: _propTypes.default.bool,

  /**
   * Size or type of display;
   * `default` for normal height, similar to other controls;
   * `large` for taller size
   */
  display: _propTypes.default.oneOf(DISPLAYS),
  fullWidth: _propTypes.default.bool,
  isInvalid: _propTypes.default.bool,
  isLoading: _propTypes.default.bool
});

_defineProperty(EuiFilePicker, "defaultProps", {
  initialPromptText: 'Select or drag and drop a file',
  compressed: false,
  display: 'large'
});

EuiFilePicker.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "filesSelected",
      "type": null
    }],
    "returns": null
  }, {
    "name": "removeFiles",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "showDrop",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "hideDrop",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiFilePicker",
  "props": {
    "initialPromptText": {
      "defaultValue": {
        "value": "'Select or drag and drop a file'",
        "computed": false
      },
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "The content that appears in the dropzone if no file is attached"
    },
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Reduces the size to a typical (compressed) input"
    },
    "display": {
      "defaultValue": {
        "value": "'large'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"large\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Size or type of display;\n`default` for normal height, similar to other controls;\n`large` for taller size"
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "name": {
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
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Use as a callback to access the HTML FileList API"
    },
    "fullWidth": {
      "type": {
        "name": "bool"
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
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};