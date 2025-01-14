function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import moment from 'moment';
import dateMath from '@elastic/datemath';
import { htmlIdGenerator } from '../../../../services';
import { EuiButton, EuiButtonIcon } from '../../../button';
import { EuiFlexGroup, EuiFlexItem } from '../../../flex';
import { EuiSpacer } from '../../../spacer';
import { EuiSelect, EuiFieldNumber } from '../../../form';
import { EuiToolTip } from '../../../tool_tip';
import { EuiHorizontalRule } from '../../../horizontal_rule';
import { EuiI18n } from '../../../i18n';
import { timeUnits } from '../time_units';
import { EuiScreenReaderOnly } from '../../../accessibility';
var LAST = 'last';
var NEXT = 'next';
var timeTenseOptions = [{
  value: LAST,
  text: 'Last'
}, {
  value: NEXT,
  text: 'Next'
}];
var timeUnitsOptions = Object.keys(timeUnits).map(function (key) {
  return {
    value: key,
    text: "".concat(timeUnits[key], "s")
  };
});
export var EuiQuickSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiQuickSelect, _Component);

  function EuiQuickSelect(props) {
    var _this;

    _classCallCheck(this, EuiQuickSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiQuickSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateId", htmlIdGenerator());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeTenseChange", function (evt) {
      _this.setState({
        timeTense: evt.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeValueChange", function (evt) {
      var sanitizedValue = parseInt(evt.target.value, 10);

      _this.setState({
        timeValue: isNaN(sanitizedValue) ? '' : sanitizedValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeUnitsChange", function (evt) {
      _this.setState({
        timeUnits: evt.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "applyQuickSelect", function () {
      var _this$state = _this.state,
          timeTense = _this$state.timeTense,
          timeValue = _this$state.timeValue,
          timeUnits = _this$state.timeUnits;

      if (timeTense === NEXT) {
        _this.props.applyTime({
          start: 'now',
          end: "now+".concat(timeValue).concat(timeUnits),
          quickSelect: _objectSpread({}, _this.state)
        });

        return;
      }

      _this.props.applyTime({
        start: "now-".concat(timeValue).concat(timeUnits),
        end: 'now',
        quickSelect: _objectSpread({}, _this.state)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getBounds", function () {
      var startMoment = dateMath.parse(_this.props.start);
      var endMoment = dateMath.parse(_this.props.end, {
        roundUp: true
      });
      return {
        min: startMoment && startMoment.isValid() ? startMoment : moment().subtract(15, 'minute'),
        max: endMoment && endMoment.isValid() ? endMoment : moment()
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stepForward", function () {
      var _this$getBounds = _this.getBounds(),
          min = _this$getBounds.min,
          max = _this$getBounds.max;

      var diff = max.diff(min);

      _this.props.applyTime({
        start: moment(max).add(1, 'ms').toISOString(),
        end: moment(max).add(diff + 1, 'ms').toISOString(),
        keepPopoverOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stepBackward", function () {
      var _this$getBounds2 = _this.getBounds(),
          min = _this$getBounds2.min,
          max = _this$getBounds2.max;

      var diff = max.diff(min);

      _this.props.applyTime({
        start: moment(min).subtract(diff + 1, 'ms').toISOString(),
        end: moment(min).subtract(1, 'ms').toISOString(),
        keepPopoverOpen: true
      });
    });

    var _this$props$prevQuick = _this.props.prevQuickSelect,
        _timeTense = _this$props$prevQuick.timeTense,
        _timeValue = _this$props$prevQuick.timeValue,
        _timeUnits = _this$props$prevQuick.timeUnits;
    _this.state = {
      timeTense: _timeTense ? _timeTense : LAST,
      timeValue: _timeValue ? _timeValue : 15,
      timeUnits: _timeUnits ? _timeUnits : 'm'
    };
    return _this;
  }

  _createClass(EuiQuickSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          timeTense = _this$state2.timeTense,
          timeValue = _this$state2.timeValue,
          timeUnits = _this$state2.timeUnits;
      var timeSelectionId = this.generateId();
      var legendId = this.generateId();
      return React.createElement("fieldset", null, React.createElement(EuiI18n, {
        token: "euiQuickSelect.legendText",
        default: "Quick select a time range"
      }, function (legendText) {
        return (// Legend needs to be the first thing in a fieldset, but we want the visible title within the flex.
          // So we hide it, but allow screen readers to see it
          React.createElement(EuiScreenReaderOnly, null, React.createElement("legend", {
            id: legendId,
            className: "euiFormLabel"
          }, legendText))
        );
      }), React.createElement(EuiFlexGroup, {
        responsive: false,
        alignItems: "center",
        justifyContent: "spaceBetween",
        gutterSize: "s"
      }, React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiI18n, {
        token: "euiQuickSelect.quickSelectTitle",
        default: "Quick select"
      }, function (quickSelectTitle) {
        return React.createElement("div", {
          "aria-hidden": true,
          className: "euiFormLabel"
        }, quickSelectTitle);
      })), React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiFlexGroup, {
        alignItems: "center",
        gutterSize: "s",
        responsive: false
      }, React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiI18n, {
        token: "euiQuickSelect.previousLabel",
        default: "Previous time window"
      }, function (previousLabel) {
        return React.createElement(EuiToolTip, {
          content: previousLabel
        }, React.createElement(EuiButtonIcon, {
          "aria-label": previousLabel,
          iconType: "arrowLeft",
          onClick: _this2.stepBackward
        }));
      })), React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiI18n, {
        token: "euiQuickSelect.nextLabel",
        default: "Next time window"
      }, function (nextLabel) {
        return React.createElement(EuiToolTip, {
          content: nextLabel
        }, React.createElement(EuiButtonIcon, {
          "aria-label": nextLabel,
          iconType: "arrowRight",
          onClick: _this2.stepForward
        }));
      }))))), React.createElement(EuiSpacer, {
        size: "s"
      }), React.createElement(EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, React.createElement(EuiFlexItem, null, React.createElement(EuiI18n, {
        token: "euiQuickSelect.tenseLabel",
        default: "Time tense"
      }, function (tenseLabel) {
        return React.createElement(EuiSelect, {
          compressed: true,
          "aria-label": tenseLabel,
          "aria-describedby": "".concat(timeSelectionId, " ").concat(legendId),
          value: timeTense,
          options: timeTenseOptions,
          onChange: _this2.onTimeTenseChange
        });
      })), React.createElement(EuiFlexItem, null, React.createElement(EuiI18n, {
        token: "euiQuickSelect.valueLabel",
        default: "Time value"
      }, function (valueLabel) {
        return React.createElement(EuiFieldNumber, {
          compressed: true,
          "aria-describedby": "".concat(timeSelectionId, " ").concat(legendId),
          "aria-label": valueLabel,
          value: timeValue,
          onChange: _this2.onTimeValueChange
        });
      })), React.createElement(EuiFlexItem, null, React.createElement(EuiI18n, {
        token: "euiQuickSelect.unitLabel",
        default: "Time unit"
      }, function (unitLabel) {
        return React.createElement(EuiSelect, {
          compressed: true,
          "aria-label": unitLabel,
          "aria-describedby": "".concat(timeSelectionId, " ").concat(legendId),
          value: timeUnits,
          options: timeUnitsOptions,
          onChange: _this2.onTimeUnitsChange
        });
      })), React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiButton, {
        "aria-describedby": "".concat(timeSelectionId, " ").concat(legendId),
        className: "euiQuickSelect__applyButton",
        size: "s",
        onClick: this.applyQuickSelect,
        disabled: timeValue === '' || timeValue <= 0
      }, React.createElement(EuiI18n, {
        token: "euiQuickSelect.applyButton",
        default: "Apply"
      })))), React.createElement(EuiHorizontalRule, {
        margin: "s"
      }), React.createElement(EuiScreenReaderOnly, {
        id: timeSelectionId
      }, React.createElement("p", null, React.createElement(EuiI18n, {
        token: "euiQuickSelect.fullDescription",
        default: "Currently set to {timeTense} {timeValue} {timeUnit}.",
        values: {
          timeTense: timeTense,
          timeValue: timeValue,
          timeUnit: timeUnitsOptions.find(function (option) {
            return option.value === timeUnits;
          }).text
        }
      }))));
    }
  }]);

  return EuiQuickSelect;
}(Component);
EuiQuickSelect.propTypes = {
  applyTime: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  prevQuickSelect: PropTypes.object
};
EuiQuickSelect.defaultProps = {
  prevQuickSelect: {}
};
EuiQuickSelect.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onTimeTenseChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onTimeValueChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onTimeUnitsChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "evt",
      "type": null
    }],
    "returns": null
  }, {
    "name": "applyQuickSelect",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getBounds",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "stepForward",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "stepBackward",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiQuickSelect",
  "props": {
    "prevQuickSelect": {
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
    "applyTime": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "start": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "end": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};