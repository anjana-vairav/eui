"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRelativeTab = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _to_case = require("../../../../services/string/to_case");

var _services = require("../../../../services");

var _flex = require("../../../flex");

var _form = require("../../../form");

var _spacer = require("../../../spacer");

var _time_units = require("../time_units");

var _relative_options = require("../relative_options");

var _relative_utils = require("../relative_utils");

var _accessibility = require("../../../accessibility");

var _i18n = require("../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiRelativeTab =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiRelativeTab, _Component);

  function EuiRelativeTab(props) {
    var _this;

    _classCallCheck(this, EuiRelativeTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiRelativeTab).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateId", (0, _services.htmlIdGenerator)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCountChange", function (evt) {
      var sanitizedValue = parseInt(evt.target.value, 10);

      _this.setState({
        count: isNaN(sanitizedValue) ? '' : sanitizedValue
      }, _this.handleChange);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onUnitChange", function (evt) {
      _this.setState({
        unit: evt.target.value
      }, _this.handleChange);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRoundChange", function (evt) {
      _this.setState({
        round: evt.target.checked
      }, _this.handleChange);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function () {
      if (_this.state.count === '' || _this.state.count < 0) {
        return;
      }

      _this.props.onChange((0, _relative_utils.toRelativeStringFromParts)(_this.state));
    });

    var sentenceCasedPosition = (0, _to_case.toSentenceCase)(props.position);
    _this.state = _objectSpread({}, (0, _relative_utils.parseRelativeParts)(_this.props.value), {
      sentenceCasedPosition: sentenceCasedPosition
    });
    return _this;
  }

  _createClass(EuiRelativeTab, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var relativeDateInputNumberDescriptionId = this.generateId();
      var isInvalid = this.state.count < 0;

      var parsedValue = _datemath.default.parse(this.props.value, {
        roundUp: this.props.roundUp
      });

      var formatedValue = isInvalid || !parsedValue || !parsedValue.isValid() ? '' : parsedValue.locale(this.props.locale || 'en').format(this.props.dateFormat);
      return _react.default.createElement(_form.EuiForm, {
        className: "euiDatePopoverContent__padded"
      }, _react.default.createElement(_flex.EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement(_i18n.EuiI18n, {
        tokens: ['euiRelativeTab.numberInputError', 'euiRelativeTab.numberInputLabel'],
        defaults: ['Must be >= 0', 'Time span amount']
      }, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            numberInputError = _ref2[0],
            numberInputLabel = _ref2[1];

        return _react.default.createElement(_form.EuiFormRow, {
          isInvalid: isInvalid,
          error: isInvalid ? numberInputError : null
        }, _react.default.createElement(_form.EuiFieldNumber, {
          compressed: true,
          "aria-label": numberInputLabel,
          "aria-describedby": relativeDateInputNumberDescriptionId,
          "data-test-subj": 'superDatePickerRelativeDateInputNumber',
          value: _this2.state.count,
          onChange: _this2.onCountChange,
          isInvalid: isInvalid
        }));
      })), _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement(_i18n.EuiI18n, {
        token: "euiRelativeTab.unitInputLabel",
        default: "Relative time span"
      }, function (unitInputLabel) {
        return _react.default.createElement(_form.EuiSelect, {
          compressed: true,
          "aria-label": unitInputLabel,
          "data-test-subj": 'superDatePickerRelativeDateInputUnitSelector',
          value: _this2.state.unit,
          options: _relative_options.relativeOptions,
          onChange: _this2.onUnitChange
        });
      }))), _react.default.createElement(_spacer.EuiSpacer, {
        size: "m"
      }), _react.default.createElement(_i18n.EuiI18n, {
        token: "euiRelativeTab.roundingLabel",
        default: "Round to the {unit}",
        values: {
          unit: _time_units.timeUnits[this.state.unit.substring(0, 1)]
        }
      }, function (roundingLabel) {
        return _react.default.createElement(_form.EuiSwitch, {
          "data-test-subj": 'superDatePickerRelativeDateRoundSwitch',
          label: roundingLabel,
          checked: _this2.state.round,
          onChange: _this2.onRoundChange
        });
      }), _react.default.createElement(_spacer.EuiSpacer, {
        size: "m"
      }), _react.default.createElement(_form.EuiFieldText, {
        compressed: true,
        value: formatedValue,
        readOnly: true,
        prepend: _react.default.createElement(_form.EuiFormLabel, null, _react.default.createElement(_i18n.EuiI18n, {
          token: "euiRelativeTab.relativeDate",
          default: "{position} date",
          values: {
            position: this.state.sentenceCasedPosition
          }
        }))
      }), _react.default.createElement(_accessibility.EuiScreenReaderOnly, {
        id: relativeDateInputNumberDescriptionId
      }, _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
        token: "euiRelativeTab.fullDescription",
        default: "The unit is changeable. Currently set to {unit}.",
        values: {
          unit: this.state.unit
        }
      }))));
    }
  }]);

  return EuiRelativeTab;
}(_react.Component);

exports.EuiRelativeTab = EuiRelativeTab;
EuiRelativeTab.propTypes = {
  dateFormat: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  roundUp: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['start', 'end'])
};
EuiRelativeTab.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onCountChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onUnitChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onRoundChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiRelativeTab",
  "props": {
    "dateFormat": {
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
      "required": false,
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