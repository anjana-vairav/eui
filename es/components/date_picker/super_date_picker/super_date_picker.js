function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { commonlyUsedRangeShape, recentlyUsedRangeShape, quickSelectPanelShape } from './types';
import { prettyDuration, showPrettyDuration, commonDurationRanges } from './pretty_duration';
import { prettyInterval } from './pretty_interval';
import dateMath from '@elastic/datemath';
import { EuiSuperUpdateButton } from './super_update_button';
import { EuiQuickSelectPopover } from './quick_select_popover/quick_select_popover';
import { EuiDatePopoverButton } from './date_popover/date_popover_button';
import { EuiDatePickerRange } from '../date_picker_range';
import { EuiFormControlLayout } from '../../form';
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import { AsyncInterval } from './async_interval';
import { EuiI18n } from '../../i18n';
import { EuiI18nConsumer } from '../../context';
export { prettyDuration, commonDurationRanges };

function isRangeInvalid(start, end) {
  if (start === 'now' && end === 'now') {
    return true;
  }

  var startMoment = dateMath.parse(start);
  var endMoment = dateMath.parse(end, {
    roundUp: true
  });

  if (!startMoment || !endMoment || !startMoment.isValid() || !endMoment.isValid()) {
    return true;
  }

  if (startMoment.isAfter(endMoment)) {
    return true;
  }

  return false;
}

export var EuiSuperDatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSuperDatePicker, _Component);

  _createClass(EuiSuperDatePicker, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.start !== prevState.prevProps.start || nextProps.end !== prevState.prevProps.end) {
        return {
          prevProps: {
            start: nextProps.start,
            end: nextProps.end
          },
          start: nextProps.start,
          end: nextProps.end,
          isInvalid: isRangeInvalid(nextProps.start, nextProps.end),
          hasChanged: false,
          showPrettyDuration: showPrettyDuration(nextProps.start, nextProps.end, nextProps.commonlyUsedRanges)
        };
      }

      return null;
    }
  }]);

  function EuiSuperDatePicker(props) {
    var _this;

    _classCallCheck(this, EuiSuperDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSuperDatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setTime", function (_ref) {
      var start = _ref.start,
          end = _ref.end;
      var isInvalid = isRangeInvalid(start, end);

      _this.setState({
        start: start,
        end: end,
        isInvalid: isInvalid,
        hasChanged: true
      });

      if (!_this.props.showUpdateButton) {
        _this.props.onTimeChange({
          start: start,
          end: end,
          isQuickSelection: false,
          isInvalid: isInvalid
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (!_this.props.isPaused) {
        _this.startInterval(_this.props.refreshInterval);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function () {
      _this.stopInterval();

      if (!_this.props.isPaused) {
        _this.startInterval(_this.props.refreshInterval);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      _this.stopInterval();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setStart", function (start) {
      _this.setTime({
        start: start,
        end: _this.state.end
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setEnd", function (end) {
      _this.setTime({
        start: _this.state.start,
        end: end
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "applyTime", function () {
      _this.props.onTimeChange({
        start: _this.state.start,
        end: _this.state.end,
        isQuickSelection: false,
        isInvalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "applyQuickTime", function (_ref2) {
      var start = _ref2.start,
          end = _ref2.end;

      _this.setState(function (prevState) {
        return {
          showPrettyDuration: showPrettyDuration(start, end, prevState.commonlyUsedRanges)
        };
      });

      _this.props.onTimeChange({
        start: start,
        end: end,
        isQuickSelection: true,
        isInvalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hidePrettyDuration", function () {
      _this.setState({
        showPrettyDuration: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onStartDatePopoverToggle", function () {
      _this.setState(function (prevState) {
        return {
          isStartDatePopoverOpen: !prevState.isStartDatePopoverOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onStartDatePopoverClose", function () {
      _this.setState({
        isStartDatePopoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndDatePopoverToggle", function () {
      _this.setState(function (prevState) {
        return {
          isEndDatePopoverOpen: !prevState.isEndDatePopoverOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndDatePopoverClose", function () {
      _this.setState({
        isEndDatePopoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRefreshChange", function (_ref3) {
      var refreshInterval = _ref3.refreshInterval,
          isPaused = _ref3.isPaused;

      _this.stopInterval();

      if (!isPaused) {
        _this.startInterval(refreshInterval);
      }

      if (_this.props.onRefreshChange) {
        _this.props.onRefreshChange({
          refreshInterval: refreshInterval,
          isPaused: isPaused
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopInterval", function () {
      if (_this.asyncInterval) {
        _this.asyncInterval.stop();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startInterval", function (refreshInterval) {
      var onRefresh = _this.props.onRefresh;

      if (onRefresh) {
        var handler = function handler() {
          var _this$props = _this.props,
              start = _this$props.start,
              end = _this$props.end;
          onRefresh({
            start: start,
            end: end,
            refreshInterval: refreshInterval
          });
        };

        _this.asyncInterval = new AsyncInterval(handler, refreshInterval);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDatePickerRange", function () {
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end,
          hasChanged = _this$state.hasChanged,
          isInvalid = _this$state.isInvalid;
      var isDisabled = _this.props.isDisabled;

      if (_this.props.isAutoRefreshOnly) {
        return React.createElement(EuiDatePickerRange, {
          className: "euiDatePickerRange--inGroup",
          iconType: false,
          isCustom: true,
          startDateControl: React.createElement("div", null),
          endDateControl: React.createElement("div", null),
          readOnly: true
        }, React.createElement("span", {
          className: "euiSuperDatePicker__prettyFormat"
        }, prettyInterval(_this.props.isPaused, _this.props.refreshInterval)));
      }

      if (_this.state.showPrettyDuration && !_this.state.isStartDatePopoverOpen && !_this.state.isEndDatePopoverOpen) {
        return React.createElement(EuiDatePickerRange, {
          className: "euiDatePickerRange--inGroup",
          iconType: false,
          isCustom: true,
          startDateControl: React.createElement("div", null),
          endDateControl: React.createElement("div", null)
        }, React.createElement("button", {
          className: classNames('euiSuperDatePicker__prettyFormat', {
            'euiSuperDatePicker__prettyFormat--disabled': isDisabled
          }),
          "data-test-subj": "superDatePickerShowDatesButton",
          disabled: isDisabled,
          onClick: _this.hidePrettyDuration
        }, prettyDuration(start, end, _this.props.commonlyUsedRanges, _this.props.dateFormat), React.createElement("span", {
          className: "euiSuperDatePicker__prettyFormatLink"
        }, React.createElement(EuiI18n, {
          token: "euiSuperDatePicker.showDatesButtonLabel",
          default: "Show dates"
        }))));
      }

      return React.createElement(EuiI18nConsumer, null, function (_ref4) {
        var contextLocale = _ref4.locale;
        return React.createElement(EuiDatePickerRange, {
          className: "euiDatePickerRange--inGroup",
          iconType: false,
          isCustom: true,
          startDateControl: React.createElement(EuiDatePopoverButton, {
            className: "euiSuperDatePicker__startPopoverButton",
            position: "start",
            needsUpdating: hasChanged,
            isInvalid: isInvalid,
            isDisabled: isDisabled,
            onChange: _this.setStart,
            value: start,
            dateFormat: _this.props.dateFormat,
            timeFormat: _this.props.timeFormat,
            locale: _this.props.locale || contextLocale,
            isOpen: _this.state.isStartDatePopoverOpen,
            onPopoverToggle: _this.onStartDatePopoverToggle,
            onPopoverClose: _this.onStartDatePopoverClose
          }),
          endDateControl: React.createElement(EuiDatePopoverButton, {
            position: "end",
            needsUpdating: hasChanged,
            isInvalid: isInvalid,
            isDisabled: isDisabled,
            onChange: _this.setEnd,
            value: end,
            dateFormat: _this.props.dateFormat,
            timeFormat: _this.props.timeFormat,
            locale: _this.props.locale || contextLocale,
            roundUp: true,
            isOpen: _this.state.isEndDatePopoverOpen,
            onPopoverToggle: _this.onEndDatePopoverToggle,
            onPopoverClose: _this.onEndDatePopoverClose
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickUpdateButton", function () {
      if (!_this.state.hasChanged && _this.props.onRefresh) {
        var _this$props2 = _this.props,
            start = _this$props2.start,
            end = _this$props2.end,
            refreshInterval = _this$props2.refreshInterval;

        _this.props.onRefresh({
          start: start,
          end: end,
          refreshInterval: refreshInterval
        });
      } else {
        _this.applyTime();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderUpdateButton", function () {
      if (!_this.props.showUpdateButton || _this.props.isAutoRefreshOnly) {
        return;
      }

      return React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiSuperUpdateButton, {
        needsUpdate: _this.state.hasChanged,
        isLoading: _this.props.isLoading,
        isDisabled: _this.props.isDisabled || _this.state.isInvalid,
        onClick: _this.handleClickUpdateButton,
        "data-test-subj": "superDatePickerApplyTimeButton"
      }));
    });

    var _this$props3 = _this.props,
        _start = _this$props3.start,
        _end = _this$props3.end,
        commonlyUsedRanges = _this$props3.commonlyUsedRanges;
    _this.state = {
      prevProps: {
        start: props.start,
        end: props.end
      },
      start: _start,
      end: _end,
      isInvalid: isRangeInvalid(_start, _end),
      hasChanged: false,
      showPrettyDuration: showPrettyDuration(_start, _end, commonlyUsedRanges),
      isStartDatePopoverOpen: false,
      isEndDatePopoverOpen: false
    };
    return _this;
  }

  _createClass(EuiSuperDatePicker, [{
    key: "render",
    value: function render() {
      var quickSelect = React.createElement(EuiQuickSelectPopover, {
        applyTime: this.applyQuickTime,
        start: this.props.start,
        end: this.props.end,
        applyRefreshInterval: this.props.onRefreshChange ? this.onRefreshChange : null,
        isDisabled: this.props.isDisabled,
        isPaused: this.props.isPaused,
        refreshInterval: this.props.refreshInterval,
        commonlyUsedRanges: this.props.commonlyUsedRanges,
        dateFormat: this.props.dateFormat,
        recentlyUsedRanges: this.props.recentlyUsedRanges,
        isAutoRefreshOnly: this.props.isAutoRefreshOnly,
        customQuickSelectPanels: this.props.customQuickSelectPanels
      });
      var flexWrapperClasses = classNames('euiSuperDatePicker__flexWrapper', {
        'euiSuperDatePicker__flexWrapper--noUpdateButton': !this.props.showUpdateButton,
        'euiSuperDatePicker__flexWrapper--isAutoRefreshOnly': this.props.isAutoRefreshOnly
      });
      return React.createElement(EuiFlexGroup, {
        gutterSize: "s",
        responsive: false,
        className: flexWrapperClasses
      }, React.createElement(EuiFlexItem, null, React.createElement(EuiFormControlLayout, {
        className: "euiSuperDatePicker",
        isDisabled: this.props.isDisabled,
        prepend: quickSelect
      }, this.renderDatePickerRange())), this.renderUpdateButton());
    }
  }]);

  return EuiSuperDatePicker;
}(Component);

_defineProperty(EuiSuperDatePicker, "propTypes", {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,

  /**
   * String as either datemath (e.g.: now, now-15m, now-15m/m) or
   * absolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'
   */
  start: PropTypes.string,

  /**
   * String as either datemath (e.g.: now, now-15m, now-15m/m) or
   * absolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'
   */
  end: PropTypes.string,

  /**
   * Callback for when the time changes. Called with { start, end, isQuickSelection, isInvalid }
   */
  onTimeChange: PropTypes.func.isRequired,
  isPaused: PropTypes.bool,

  /**
   * Refresh interval in milliseconds
   */
  refreshInterval: PropTypes.number,

  /**
   * Callback for when the refresh interval changes. Called with { isPaused, refreshInterval }
   * Supply onRefreshChange to show refresh interval inputs in quick select popover
   */
  onRefreshChange: PropTypes.func,

  /**
   * Callback for when the refresh interval is fired. Called with { start, end, refreshInterval }
   * EuiSuperDatePicker will only manage a refresh interval timer when onRefresh callback is supplied
   * If a promise is returned, the next refresh interval will not start until the promise has resolved.
   * If the promise rejects the refresh interval will stop and the error thrown
   */
  onRefresh: PropTypes.func,

  /**
   * 'start' and 'end' must be string as either datemath (e.g.: now, now-15m, now-15m/m) or
   * absolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'
   */
  commonlyUsedRanges: PropTypes.arrayOf(commonlyUsedRangeShape),

  /**
   * Used to localize e.g. month names, passed to `moment`
   */
  locale: PropTypes.string,

  /**
   * Specifies the formatted used when displaying dates and/or datetimes
   */
  dateFormat: PropTypes.string,

  /**
   * Specifies the formatted used when displaying times
   */
  timeFormat: PropTypes.string,

  /**
   * 'start' and 'end' must be string as either datemath (e.g.: now, now-15m, now-15m/m) or
   * absolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'
   */
  recentlyUsedRanges: PropTypes.arrayOf(recentlyUsedRangeShape),

  /**
   * Set showUpdateButton to false to immediately invoke onTimeChange for all start and end changes.
   */
  showUpdateButton: PropTypes.bool,

  /**
   * Set isAutoRefreshOnly to true to limit the component to only display auto refresh content.
   */
  isAutoRefreshOnly: PropTypes.bool,
  customQuickSelectPanels: PropTypes.arrayOf(quickSelectPanelShape)
});

_defineProperty(EuiSuperDatePicker, "defaultProps", {
  start: 'now-15m',
  end: 'now',
  isPaused: true,
  isDisabled: false,
  refreshInterval: 0,
  commonlyUsedRanges: commonDurationRanges,
  dateFormat: 'MMM D, YYYY @ HH:mm:ss.SSS',
  timeFormat: 'HH:mm',
  recentlyUsedRanges: [],
  showUpdateButton: true,
  isAutoRefreshOnly: false
});

EuiSuperDatePicker.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setTime",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{ start, end }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "componentDidMount",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "componentDidUpdate",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "componentWillUnmount",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setStart",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "start",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setEnd",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "end",
      "type": null
    }],
    "returns": null
  }, {
    "name": "applyTime",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "applyQuickTime",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{ start, end }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "hidePrettyDuration",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onStartDatePopoverToggle",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onStartDatePopoverClose",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onEndDatePopoverToggle",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onEndDatePopoverClose",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onRefreshChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{ refreshInterval, isPaused }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "stopInterval",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "startInterval",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "refreshInterval",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderDatePickerRange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "handleClickUpdateButton",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderUpdateButton",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiSuperDatePicker",
  "props": {
    "start": {
      "defaultValue": {
        "value": "'now-15m'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "String as either datemath (e.g.: now, now-15m, now-15m/m) or\nabsolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'"
    },
    "end": {
      "defaultValue": {
        "value": "'now'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "String as either datemath (e.g.: now, now-15m, now-15m/m) or\nabsolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'"
    },
    "isPaused": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "refreshInterval": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Refresh interval in milliseconds"
    },
    "commonlyUsedRanges": {
      "defaultValue": {
        "value": "commonDurationRanges",
        "computed": true
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "commonlyUsedRangeShape"
        }
      },
      "required": false,
      "description": "'start' and 'end' must be string as either datemath (e.g.: now, now-15m, now-15m/m) or\nabsolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'"
    },
    "dateFormat": {
      "defaultValue": {
        "value": "'MMM D, YYYY @ HH:mm:ss.SSS'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Specifies the formatted used when displaying dates and/or datetimes"
    },
    "timeFormat": {
      "defaultValue": {
        "value": "'HH:mm'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Specifies the formatted used when displaying times"
    },
    "recentlyUsedRanges": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "recentlyUsedRangeShape"
        }
      },
      "required": false,
      "description": "'start' and 'end' must be string as either datemath (e.g.: now, now-15m, now-15m/m) or\nabsolute date in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'"
    },
    "showUpdateButton": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set showUpdateButton to false to immediately invoke onTimeChange for all start and end changes."
    },
    "isAutoRefreshOnly": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set isAutoRefreshOnly to true to limit the component to only display auto refresh content."
    },
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onTimeChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": "Callback for when the time changes. Called with { start, end, isQuickSelection, isInvalid }"
    },
    "onRefreshChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Callback for when the refresh interval changes. Called with { isPaused, refreshInterval }\nSupply onRefreshChange to show refresh interval inputs in quick select popover"
    },
    "onRefresh": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Callback for when the refresh interval is fired. Called with { start, end, refreshInterval }\nEuiSuperDatePicker will only manage a refresh interval timer when onRefresh callback is supplied\nIf a promise is returned, the next refresh interval will not start until the promise has resolved.\nIf the promise rejects the refresh interval will stop and the error thrown"
    },
    "locale": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Used to localize e.g. month names, passed to `moment`"
    },
    "customQuickSelectPanels": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "quickSelectPanelShape"
        }
      },
      "required": false,
      "description": ""
    }
  }
};