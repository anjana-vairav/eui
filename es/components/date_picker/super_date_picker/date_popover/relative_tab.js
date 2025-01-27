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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import dateMath from '@elastic/datemath';
import { toSentenceCase } from '../../../../services/string/to_case';
import { htmlIdGenerator } from '../../../../services';
import { EuiFlexGroup, EuiFlexItem } from '../../../flex';
import { EuiForm, EuiFormRow, EuiSelect, EuiFieldNumber, EuiFieldText, EuiSwitch, EuiFormLabel } from '../../../form';
import { EuiSpacer } from '../../../spacer';
import { timeUnits } from '../time_units';
import { relativeOptions } from '../relative_options';
import { parseRelativeParts, toRelativeStringFromParts } from '../relative_utils';
import { EuiScreenReaderOnly } from '../../../accessibility';
import { EuiI18n } from '../../../i18n';
export var EuiRelativeTab =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiRelativeTab, _Component);

  function EuiRelativeTab(props) {
    var _this;

    _classCallCheck(this, EuiRelativeTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiRelativeTab).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateId", htmlIdGenerator());

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

      _this.props.onChange(toRelativeStringFromParts(_this.state));
    });

    var sentenceCasedPosition = toSentenceCase(props.position);
    _this.state = _objectSpread({}, parseRelativeParts(_this.props.value), {
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
      var parsedValue = dateMath.parse(this.props.value, {
        roundUp: this.props.roundUp
      });
      var formatedValue = isInvalid || !parsedValue || !parsedValue.isValid() ? '' : parsedValue.locale(this.props.locale || 'en').format(this.props.dateFormat);
      return React.createElement(EuiForm, {
        className: "euiDatePopoverContent__padded"
      }, React.createElement(EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, React.createElement(EuiFlexItem, null, React.createElement(EuiI18n, {
        tokens: ['euiRelativeTab.numberInputError', 'euiRelativeTab.numberInputLabel'],
        defaults: ['Must be >= 0', 'Time span amount']
      }, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            numberInputError = _ref2[0],
            numberInputLabel = _ref2[1];

        return React.createElement(EuiFormRow, {
          isInvalid: isInvalid,
          error: isInvalid ? numberInputError : null
        }, React.createElement(EuiFieldNumber, {
          compressed: true,
          "aria-label": numberInputLabel,
          "aria-describedby": relativeDateInputNumberDescriptionId,
          "data-test-subj": 'superDatePickerRelativeDateInputNumber',
          value: _this2.state.count,
          onChange: _this2.onCountChange,
          isInvalid: isInvalid
        }));
      })), React.createElement(EuiFlexItem, null, React.createElement(EuiI18n, {
        token: "euiRelativeTab.unitInputLabel",
        default: "Relative time span"
      }, function (unitInputLabel) {
        return React.createElement(EuiSelect, {
          compressed: true,
          "aria-label": unitInputLabel,
          "data-test-subj": 'superDatePickerRelativeDateInputUnitSelector',
          value: _this2.state.unit,
          options: relativeOptions,
          onChange: _this2.onUnitChange
        });
      }))), React.createElement(EuiSpacer, {
        size: "m"
      }), React.createElement(EuiI18n, {
        token: "euiRelativeTab.roundingLabel",
        default: "Round to the {unit}",
        values: {
          unit: timeUnits[this.state.unit.substring(0, 1)]
        }
      }, function (roundingLabel) {
        return React.createElement(EuiSwitch, {
          "data-test-subj": 'superDatePickerRelativeDateRoundSwitch',
          label: roundingLabel,
          checked: _this2.state.round,
          onChange: _this2.onRoundChange
        });
      }), React.createElement(EuiSpacer, {
        size: "m"
      }), React.createElement(EuiFieldText, {
        compressed: true,
        value: formatedValue,
        readOnly: true,
        prepend: React.createElement(EuiFormLabel, null, React.createElement(EuiI18n, {
          token: "euiRelativeTab.relativeDate",
          default: "{position} date",
          values: {
            position: this.state.sentenceCasedPosition
          }
        }))
      }), React.createElement(EuiScreenReaderOnly, {
        id: relativeDateInputNumberDescriptionId
      }, React.createElement("p", null, React.createElement(EuiI18n, {
        token: "euiRelativeTab.fullDescription",
        default: "The unit is changeable. Currently set to {unit}.",
        values: {
          unit: this.state.unit
        }
      }))));
    }
  }]);

  return EuiRelativeTab;
}(Component);
EuiRelativeTab.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  locale: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  roundUp: PropTypes.bool,
  position: PropTypes.oneOf(['start', 'end'])
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