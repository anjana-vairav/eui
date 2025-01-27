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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import dateMath from '@elastic/datemath';
import { EuiDatePicker } from '../../date_picker';
import { EuiFormRow, EuiFieldText, EuiFormLabel } from '../../../form';
import { toSentenceCase } from '../../../../services/string/to_case';
export var EuiAbsoluteTab =
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
      var date = moment(evt.target.value, _this.props.dateFormat, true);
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

    var parsedValue = dateMath.parse(props.value, {
      roundUp: props.roundUp
    });
    var valueAsMoment = parsedValue && parsedValue.isValid() ? parsedValue : moment();
    var sentenceCasedPosition = toSentenceCase(props.position);
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
      return React.createElement("div", null, React.createElement(EuiDatePicker, {
        inline: true,
        showTimeSelect: true,
        shadow: false,
        selected: this.state.valueAsMoment,
        onChange: this.handleChange,
        dateFormat: this.props.dateFormat,
        timeFormat: this.props.timeFormat,
        locale: this.props.locale
      }), React.createElement(EuiFormRow, {
        className: "euiSuperDatePicker__absoluteDateFormRow",
        isInvalid: this.state.isTextInvalid,
        error: this.state.isTextInvalid ? "Expected format ".concat(this.props.dateFormat) : undefined
      }, React.createElement(EuiFieldText, {
        compressed: true,
        isInvalid: this.state.isTextInvalid,
        value: this.state.textInputValue,
        onChange: this.handleTextChange,
        "data-test-subj": 'superDatePickerAbsoluteDateInput',
        prepend: React.createElement(EuiFormLabel, null, this.state.sentenceCasedPosition, " date")
      })));
    }
  }]);

  return EuiAbsoluteTab;
}(Component);
EuiAbsoluteTab.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  locale: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  roundUp: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['start', 'end'])
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