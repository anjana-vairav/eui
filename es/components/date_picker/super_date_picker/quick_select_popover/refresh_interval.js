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
import { timeUnits, timeUnitsPlural } from '../time_units';
import { EuiI18n } from '../../../i18n';
import { EuiFlexGroup, EuiFlexItem } from '../../../flex';
import { EuiTitle } from '../../../title';
import { EuiSpacer } from '../../../spacer';
import { EuiSelect, EuiFieldNumber } from '../../../form';
import { EuiButton } from '../../../button';
import { htmlIdGenerator } from '../../../../services';
import { EuiScreenReaderOnly } from '../../../accessibility';
var refreshUnitsOptions = Object.keys(timeUnits).filter(function (timeUnit) {
  return timeUnit === 'h' || timeUnit === 'm' || timeUnit === 's';
}).map(function (timeUnit) {
  return {
    value: timeUnit,
    text: timeUnitsPlural[timeUnit]
  };
});
var MILLISECONDS_IN_SECOND = 1000;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

function fromMilliseconds(milliseconds) {
  function round(value) {
    return parseFloat(value.toFixed(2));
  }

  if (milliseconds > MILLISECONDS_IN_HOUR) {
    return {
      units: 'h',
      value: round(milliseconds / MILLISECONDS_IN_HOUR)
    };
  }

  if (milliseconds > MILLISECONDS_IN_MINUTE) {
    return {
      units: 'm',
      value: round(milliseconds / MILLISECONDS_IN_MINUTE)
    };
  }

  return {
    units: 's',
    value: round(milliseconds / MILLISECONDS_IN_SECOND)
  };
}

function toMilliseconds(units, value) {
  switch (units) {
    case 'h':
      return Math.round(value * MILLISECONDS_IN_HOUR);

    case 'm':
      return Math.round(value * MILLISECONDS_IN_MINUTE);

    case 's':
    default:
      return Math.round(value * MILLISECONDS_IN_SECOND);
  }
}

export var EuiRefreshInterval =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiRefreshInterval, _Component);

  function EuiRefreshInterval(props) {
    var _this;

    _classCallCheck(this, EuiRefreshInterval);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiRefreshInterval).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateId", htmlIdGenerator());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onValueChange", function (evt) {
      var sanitizedValue = parseFloat(evt.target.value);

      _this.setState({
        value: isNaN(sanitizedValue) ? '' : sanitizedValue
      }, _this.applyRefreshInterval);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onUnitsChange", function (evt) {
      _this.setState({
        units: evt.target.value
      }, _this.applyRefreshInterval);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "applyRefreshInterval", function () {
      if (_this.state.value === '') {
        return;
      }

      var valueInMilliSeconds = toMilliseconds(_this.state.units, _this.state.value);

      _this.props.applyRefreshInterval({
        refreshInterval: valueInMilliSeconds,
        isPaused: valueInMilliSeconds <= 0 ? true : _this.props.isPaused
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toogleRefresh", function () {
      _this.props.applyRefreshInterval({
        refreshInterval: toMilliseconds(_this.state.units, _this.state.value),
        isPaused: !_this.props.isPaused
      });
    });

    var _fromMilliseconds = fromMilliseconds(props.refreshInterval),
        value = _fromMilliseconds.value,
        units = _fromMilliseconds.units;

    _this.state = {
      value: value,
      units: units
    };
    return _this;
  }

  _createClass(EuiRefreshInterval, [{
    key: "render",
    value: function render() {
      var legendId = this.generateId();
      var refreshSelectionId = this.generateId();
      var _this$state = this.state,
          value = _this$state.value,
          units = _this$state.units;

      if (!this.props.applyRefreshInterval) {
        return null;
      }

      return React.createElement("fieldset", null, React.createElement(EuiTitle, {
        size: "xxxs"
      }, React.createElement("legend", {
        id: legendId
      }, React.createElement(EuiI18n, {
        token: "euiRefreshInterval.legend",
        default: "Refresh every"
      }))), React.createElement(EuiSpacer, {
        size: "s"
      }), React.createElement(EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, React.createElement(EuiFlexItem, null, React.createElement(EuiFieldNumber, {
        compressed: true,
        value: value,
        onChange: this.onValueChange,
        "aria-label": "Refresh interval value",
        "aria-describedby": "".concat(refreshSelectionId, " ").concat(legendId),
        "data-test-subj": "superDatePickerRefreshIntervalInput"
      })), React.createElement(EuiFlexItem, null, React.createElement(EuiSelect, {
        compressed: true,
        "aria-label": "Refresh interval units",
        "aria-describedby": "".concat(refreshSelectionId, " ").concat(legendId),
        value: units,
        options: refreshUnitsOptions,
        onChange: this.onUnitsChange,
        "data-test-subj": "superDatePickerRefreshIntervalUnitsSelect"
      })), React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiButton, {
        className: "euiRefreshInterval__startButton",
        iconType: this.props.isPaused ? 'play' : 'stop',
        size: "s",
        onClick: this.toogleRefresh,
        disabled: value === '' || value <= 0,
        "data-test-subj": "superDatePickerToggleRefreshButton",
        "aria-describedby": "".concat(refreshSelectionId, " ").concat(legendId)
      }, this.props.isPaused ? React.createElement(EuiI18n, {
        token: "euiRefreshInterval.start",
        default: "Start"
      }) : React.createElement(EuiI18n, {
        token: "euiRefreshInterval.stop",
        default: "Stop"
      })))), React.createElement(EuiScreenReaderOnly, {
        id: refreshSelectionId
      }, React.createElement("p", null, React.createElement(EuiI18n, {
        token: "euiRefreshInterval.fullDescription",
        default: "Currently set to {optionValue} {optionText}.",
        values: {
          optionValue: value,
          optionText: refreshUnitsOptions.find(function (option) {
            return option.value === units;
          }).text
        }
      }))));
    }
  }]);

  return EuiRefreshInterval;
}(Component);
EuiRefreshInterval.propTypes = {
  applyRefreshInterval: PropTypes.func,
  isPaused: PropTypes.bool.isRequired,
  refreshInterval: PropTypes.number.isRequired
};
EuiRefreshInterval.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onValueChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onUnitsChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "applyRefreshInterval",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "toogleRefresh",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiRefreshInterval",
  "props": {
    "applyRefreshInterval": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isPaused": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "refreshInterval": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    }
  }
};