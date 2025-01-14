"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiAbsoluteTab = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _date_picker = require("../../date_picker");

var _form = require("../../../form");

var _to_case = require("../../../../services/string/to_case");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var EuiAbsoluteTab =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiAbsoluteTab, _Component);

  function EuiAbsoluteTab(props) {
    var _this;

    _classCallCheck(this, EuiAbsoluteTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiAbsoluteTab).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (date) {
      _this.props.onChange(date.toISOString());

      _this.setState({
        valueAsMoment: date,
        textInputValue: date.format(_this.props.dateFormat),
        isTextInvalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTextChange", function (evt) {
      var date = (0, _moment.default)(evt.target.value, _this.props.dateFormat, true);
      var updatedState = {
        textInputValue: evt.target.value,
        isTextInvalid: !date.isValid()
      };

      if (date.isValid()) {
        _this.props.onChange(date.toISOString());

        updatedState.valueAsMoment = date;
      }

      _this.setState(updatedState);
    });

    var parsedValue = _datemath.default.parse(props.value, {
      roundUp: props.roundUp
    });

    var valueAsMoment = parsedValue && parsedValue.isValid() ? parsedValue : (0, _moment.default)();
    var sentenceCasedPosition = (0, _to_case.toSentenceCase)(props.position);
    _this.state = {
      valueAsMoment: valueAsMoment,
      textInputValue: valueAsMoment.locale(_this.props.locale || 'en').format(_this.props.dateFormat),
      isTextInvalid: false,
      sentenceCasedPosition: sentenceCasedPosition
    };
    return _this;
  }

  _createClass(EuiAbsoluteTab, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_date_picker.EuiDatePicker, {
        inline: true,
        showTimeSelect: true,
        shadow: false,
        selected: this.state.valueAsMoment,
        onChange: this.handleChange,
        dateFormat: this.props.dateFormat,
        timeFormat: this.props.timeFormat,
        locale: this.props.locale
      }), _react.default.createElement(_form.EuiFormRow, {
        className: "euiSuperDatePicker__absoluteDateFormRow",
        isInvalid: this.state.isTextInvalid,
        error: this.state.isTextInvalid ? "Expected format ".concat(this.props.dateFormat) : undefined
      }, _react.default.createElement(_form.EuiFieldText, {
        compressed: true,
        isInvalid: this.state.isTextInvalid,
        value: this.state.textInputValue,
        onChange: this.handleTextChange,
        "data-test-subj": 'superDatePickerAbsoluteDateInput',
        prepend: _react.default.createElement(_form.EuiFormLabel, null, this.state.sentenceCasedPosition, " date")
      })));
    }
  }]);

  return EuiAbsoluteTab;
}(_react.Component);

exports.EuiAbsoluteTab = EuiAbsoluteTab;
EuiAbsoluteTab.propTypes = {
  dateFormat: _propTypes.default.string.isRequired,
  timeFormat: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  roundUp: _propTypes.default.bool.isRequired,
  position: _propTypes.default.oneOf(['start', 'end'])
};
EuiAbsoluteTab.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "date",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleTextChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiAbsoluteTab",
  "props": {
    "dateFormat": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "timeFormat": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "locale": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "roundUp": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "position": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'start'",
          "computed": false
        }, {
          "value": "'end'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    }
  }
};