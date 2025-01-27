"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCodeEditor = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAce = _interopRequireDefault(require("react-ace"));

var _services = require("../../services");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function setOrRemoveAttribute(element, attributeName, value) {
  if (value === null || value === undefined) {
    element.removeAttribute(attributeName);
  } else {
    element.setAttribute(attributeName, value);
  }
}

var EuiCodeEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiCodeEditor, _Component);

  function EuiCodeEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiCodeEditor);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiCodeEditor)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isHintActive: true,
      isEditing: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "idGenerator", (0, _services.htmlIdGenerator)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "aceEditorRef", function (aceEditor) {
      if (aceEditor) {
        _this.aceEditor = aceEditor;
        var textbox = aceEditor.editor.textInput.getElement();
        textbox.tabIndex = -1;
        textbox.addEventListener('keydown', _this.onKeydownAce);
        setOrRemoveAttribute(textbox, 'aria-label', _this.props['aria-label']);
        setOrRemoveAttribute(textbox, 'aria-labelledby', _this.props['aria-labelledby']);
        setOrRemoveAttribute(textbox, 'aria-describedby', _this.props['aria-describedby']);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeydownAce", function (ev) {
      if (ev.keyCode === _services.keyCodes.ESCAPE) {
        // If the autocompletion context menu is open then we want to let ESCAPE close it but
        // **not** exit out of editing mode.
        if (!_this.aceEditor.editor.completer) {
          ev.preventDefault();
          ev.stopPropagation();

          _this.stopEditing();

          _this.editorHint.focus();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocusAce", function () {
      _this.setState({
        isEditing: true
      });

      if (_this.props.onFocus) {
        var _this$props;

        (_this$props = _this.props).onFocus.apply(_this$props, arguments);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlurAce", function () {
      _this.stopEditing();

      if (_this.props.onBlur) {
        var _this$props2;

        (_this$props2 = _this.props).onBlur.apply(_this$props2, arguments);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDownHint", function (ev) {
      if (ev.keyCode === _services.keyCodes.ENTER) {
        ev.preventDefault();

        _this.startEditing();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startEditing", function () {
      _this.setState({
        isHintActive: false
      });

      _this.aceEditor.editor.textInput.focus();
    });

    return _this;
  }

  _createClass(EuiCodeEditor, [{
    key: "stopEditing",
    value: function stopEditing() {
      this.setState({
        isHintActive: true,
        isEditing: false
      });
    }
  }, {
    key: "isCustomMode",
    value: function isCustomMode() {
      return _typeof(this.props.mode) === 'object';
    }
  }, {
    key: "setCustomMode",
    value: function setCustomMode() {
      this.aceEditor.editor.getSession().setMode(this.props.mode);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isCustomMode()) {
        this.setCustomMode();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.mode !== prevProps.mode && this.isCustomMode()) {
        this.setCustomMode();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          width = _this$props3.width,
          height = _this$props3.height,
          onBlur = _this$props3.onBlur,
          isReadOnly = _this$props3.isReadOnly,
          setOptions = _this$props3.setOptions,
          cursorStart = _this$props3.cursorStart,
          rest = _objectWithoutProperties(_this$props3, ["width", "height", "onBlur", "isReadOnly", "setOptions", "cursorStart"]);

      var classes = (0, _classnames.default)('euiCodeEditorWrapper', {
        'euiCodeEditorWrapper-isEditing': this.state.isEditing
      });
      var promptClasses = (0, _classnames.default)('euiCodeEditorKeyboardHint', {
        'euiCodeEditorKeyboardHint-isInactive': !this.state.isHintActive
      });
      var filteredCursorStart;

      var options = _objectSpread({}, setOptions);

      if (isReadOnly) {
        // Put the cursor at the beginning of the editor, so that it doesn't look like
        // a prompt to begin typing.
        filteredCursorStart = -1;
        Object.assign(options, {
          readOnly: true,
          highlightActiveLine: false,
          highlightGutterLine: false
        });
      } else {
        filteredCursorStart = cursorStart;
      } // Don't use EuiKeyboardAccessible here because it doesn't play nicely with onKeyDown.


      var prompt = _react.default.createElement("div", {
        className: promptClasses,
        id: this.idGenerator('codeEditor'),
        ref: function ref(hint) {
          _this2.editorHint = hint;
        },
        tabIndex: "0",
        role: "button",
        onClick: this.startEditing,
        onKeyDown: this.onKeyDownHint,
        "data-test-subj": "codeEditorHint"
      }, _react.default.createElement("p", {
        className: "euiText"
      }, isReadOnly ? _react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.startInteracting",
        default: "Press Enter to start interacting with the code."
      }) : _react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.startEditing",
        default: "Press Enter to start editing."
      })), _react.default.createElement("p", {
        className: "euiText"
      }, isReadOnly ? _react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.stopInteracting",
        default: "When you're done, press Escape to stop interacting with the code."
      }) : _react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.stopEditing",
        default: "When you're done, press Escape to stop editing."
      })));

      if (this.isCustomMode()) {
        delete rest.mode; // Otherwise, the AceEditor component will complain about wanting a string value for the mode prop.
      }

      return _react.default.createElement("div", {
        className: classes,
        style: {
          width: width,
          height: height
        },
        "data-test-subj": "codeEditorContainer"
      }, prompt, _react.default.createElement(_reactAce.default, _extends({
        name: this.idGenerator(),
        ref: this.aceEditorRef,
        width: width,
        height: height,
        onFocus: this.onFocusAce,
        onBlur: this.onBlurAce,
        setOptions: options,
        editorProps: {
          $blockScrolling: Infinity
        },
        cursorStart: filteredCursorStart
      }, rest)));
    }
  }]);

  return EuiCodeEditor;
}(_react.Component);

exports.EuiCodeEditor = EuiCodeEditor;
EuiCodeEditor.propTypes = {
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  isReadOnly: _propTypes.default.bool,
  setOptions: _propTypes.default.object,
  cursorStart: _propTypes.default.number,

  /**
   * Use string for a built-in mode or object for a custom mode
   */
  mode: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
EuiCodeEditor.defaultProps = {
  setOptions: {}
};
EuiCodeEditor.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "aceEditorRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "aceEditor",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onKeydownAce",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ev",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onFocusAce",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "...args",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onBlurAce",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "...args",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onKeyDownHint",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ev",
      "type": null
    }],
    "returns": null
  }, {
    "name": "startEditing",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "stopEditing",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "isCustomMode",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setCustomMode",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiCodeEditor",
  "props": {
    "setOptions": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "type": {
        "name": "object"
      },
      "required": false,
      "description": ""
    },
    "width": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "height": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onBlur": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isReadOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "cursorStart": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "mode": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "object"
        }]
      },
      "required": false,
      "description": "Use string for a built-in mode or object for a custom mode"
    }
  }
};