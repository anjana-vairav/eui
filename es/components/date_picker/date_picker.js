function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import { ReactDatePicker as DatePicker } from '../../../packages';
import { EuiFormControlLayout } from '../form/form_control_layout';
import { EuiValidatableControl } from '../form/validatable_control';
import { EuiErrorBoundary } from '../error_boundary';
import { EuiI18nConsumer } from '../context';
export var euiDatePickerDefaultDateFormat = 'MM/DD/YYYY';
export var euiDatePickerDefaultTimeFormat = 'hh:mm A';
export var EuiDatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiDatePicker, _Component);

  function EuiDatePicker() {
    _classCallCheck(this, EuiDatePicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(EuiDatePicker).apply(this, arguments));
  }

  _createClass(EuiDatePicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          adjustDateOnChange = _this$props.adjustDateOnChange,
          calendarClassName = _this$props.calendarClassName,
          className = _this$props.className,
          customInput = _this$props.customInput,
          dateFormat = _this$props.dateFormat,
          dayClassName = _this$props.dayClassName,
          disabled = _this$props.disabled,
          excludeDates = _this$props.excludeDates,
          filterDates = _this$props.filterDates,
          fullWidth = _this$props.fullWidth,
          injectTimes = _this$props.injectTimes,
          inline = _this$props.inline,
          inputRef = _this$props.inputRef,
          isInvalid = _this$props.isInvalid,
          isLoading = _this$props.isLoading,
          locale = _this$props.locale,
          maxDate = _this$props.maxDate,
          maxTime = _this$props.maxTime,
          minDate = _this$props.minDate,
          minTime = _this$props.minTime,
          onChange = _this$props.onChange,
          onClear = _this$props.onClear,
          openToDate = _this$props.openToDate,
          placeholder = _this$props.placeholder,
          popperClassName = _this$props.popperClassName,
          selected = _this$props.selected,
          shadow = _this$props.shadow,
          shouldCloseOnSelect = _this$props.shouldCloseOnSelect,
          showIcon = _this$props.showIcon,
          showTimeSelect = _this$props.showTimeSelect,
          showTimeSelectOnly = _this$props.showTimeSelectOnly,
          timeFormat = _this$props.timeFormat,
          utcOffset = _this$props.utcOffset,
          rest = _objectWithoutProperties(_this$props, ["adjustDateOnChange", "calendarClassName", "className", "customInput", "dateFormat", "dayClassName", "disabled", "excludeDates", "filterDates", "fullWidth", "injectTimes", "inline", "inputRef", "isInvalid", "isLoading", "locale", "maxDate", "maxTime", "minDate", "minTime", "onChange", "onClear", "openToDate", "placeholder", "popperClassName", "selected", "shadow", "shouldCloseOnSelect", "showIcon", "showTimeSelect", "showTimeSelectOnly", "timeFormat", "utcOffset"]);

      var classes = classNames('euiDatePicker', {
        'euiDatePicker--shadow': shadow,
        'euiDatePicker--inline': inline
      });
      var datePickerClasses = classNames('euiDatePicker', 'euiFieldText', {
        'euiFieldText--fullWidth': fullWidth,
        'euiFieldText-isLoading': isLoading,
        'euiFieldText--withIcon': !inline && showIcon,
        'euiFieldText-isInvalid': isInvalid
      }, className);
      var optionalIcon;

      if (inline || customInput || !showIcon) {
        optionalIcon = null;
      } else if (showTimeSelectOnly) {
        optionalIcon = 'clock';
      } else {
        optionalIcon = 'calendar';
      } // In case the consumer did not alter the default date format but wants
      // to add the time select, we append the default time format


      var fullDateFormat = dateFormat;

      if (showTimeSelect && dateFormat === euiDatePickerDefaultDateFormat) {
        fullDateFormat = "".concat(dateFormat, " ").concat(timeFormat);
      } // EuiDatePicker only supports a subset of props from react-datepicker. Using any of
      // the unsupported props below will spit out an error.


      var PropNotSupported = function PropNotSupported() {
        throw new Error("You are using a prop from react-datepicker that EuiDatePicker\n        does not support. Please check the EUI documentation for more information.");
      };

      if ( // We don't want to show multiple months next to each other
      this.props.monthsShown || // There is no need to show week numbers
      this.props.showWeekNumbers || // Our css adapts to height, no need to fix it
      this.props.fixedHeight || // We force the month / year selection UI. No need to configure it
      this.props.dropdownMode || // Short month is uncessary. Our UI has plenty of room for full months
      this.props.useShortMonthInDropdown || // The today button is not needed. This should always be external to the calendar
      this.props.todayButton || // We hide the time caption, so there is no need to overwrite its text
      this.props.timeCaption || // We always want keyboard accessibility on
      this.props.disabledKeyboardNavigation || // This is easy enough to do. It can conflict with isLoading state
      this.props.isClearable || // There is no reason to launch the datepicker in its own modal. Can always build these ourselves
      this.props.withPortal) {
        return React.createElement(EuiErrorBoundary, null, React.createElement(PropNotSupported, null));
      }

      return React.createElement("span", null, React.createElement("span", {
        className: classes
      }, React.createElement(EuiFormControlLayout, {
        icon: optionalIcon,
        fullWidth: fullWidth,
        clear: selected && onClear ? {
          onClick: onClear
        } : null,
        isLoading: isLoading
      }, React.createElement(EuiValidatableControl, {
        isInvalid: isInvalid
      }, React.createElement(EuiI18nConsumer, null, function (_ref) {
        var contextLocale = _ref.locale;
        return React.createElement(DatePicker, _extends({
          adjustDateOnChange: adjustDateOnChange,
          calendarClassName: calendarClassName,
          className: datePickerClasses,
          customInput: customInput,
          dateFormat: fullDateFormat,
          dayClassName: dayClassName,
          disabled: disabled,
          excludeDates: excludeDates,
          filterDates: filterDates,
          injectTimes: injectTimes,
          inline: inline,
          locale: locale || contextLocale,
          maxDate: maxDate,
          maxTime: maxTime,
          minDate: minDate,
          minTime: minTime,
          onChange: onChange,
          openToDate: openToDate,
          placeholderText: placeholder,
          popperClassName: popperClassName,
          ref: inputRef,
          selected: selected,
          shouldCloseOnSelect: shouldCloseOnSelect,
          showMonthDropdown: true,
          showTimeSelect: showTimeSelect,
          showTimeSelectOnly: showTimeSelectOnly,
          showYearDropdown: true,
          timeFormat: timeFormat,
          utcOffset: utcOffset,
          yearDropdownItemNumber: 7,
          accessibleMode: true
        }, rest));
      })))));
    }
  }]);

  return EuiDatePicker;
}(Component);
EuiDatePicker.propTypes = {
  /**
   * Whether changes to Year and Month (via dropdowns) should trigger `onChange`
   */
  adjustDateOnChange: PropTypes.bool,

  /**
   * Optional class added to the calendar portion of datepicker
   */
  calendarClassName: PropTypes.string,

  /**
   * Added to the actual input of the calendar
   */
  className: PropTypes.string,

  /**
   * Replaces the input with any node, like a button
   */
  customInput: PropTypes.node,

  /**
   * Accepts any moment format string
   */
  dateFormat: PropTypes.string,

  /**
   * Applies classes to the numbered days provided. Check docs for example.
   */
  dayClassName: PropTypes.func,

  /**
   * Array of dates allowed. Check docs for example.
   */
  filterDates: PropTypes.array,

  /**
   * Makes the input full width
   */
  fullWidth: PropTypes.bool,

  /**
   * Adds additional times to the time selector other then :30 increments
   */
  injectTimes: PropTypes.array,

  /**
   * Applies ref to the input
   */
  inputRef: PropTypes.func,

  /**
   * Provides styling to the input when invalid
   */
  isInvalid: PropTypes.bool,

  /**
   * Provides styling to the input when loading
   */
  isLoading: PropTypes.bool,

  /**
   * Switches the locale / display. "en-us", "zn-ch"...etc
   */
  locale: PropTypes.string,

  /**
   * The max date accepted (in moment format) as a selection
   */
  maxDate: PropTypes.instanceOf(moment),

  /**
   * The max time accepted (in moment format) as a selection
   */
  maxTime: PropTypes.instanceOf(moment),

  /**
   * The min date accepted (in moment format) as a selection
   */
  minDate: PropTypes.instanceOf(moment),

  /**
   * The min time accepted (in moment format) as a selection
   */
  minTime: PropTypes.instanceOf(moment),

  /**
   * What to do when the input changes
   */
  onChange: PropTypes.func,

  /**
   * What to do when the input is cleared by the x icon
   */
  onClear: PropTypes.func,

  /**
   * Opens to this date (in moment format) on first press, regardless of selection
   */
  openToDate: PropTypes.instanceOf(moment),

  /**
   * Shows only when no date is selected
   */
  placeholder: PropTypes.string,

  /**
   * Class applied to the popup, when inline is false
   */
  popperClassName: PropTypes.string,

  /**
   * The selected datetime (in moment format)
   */
  selected: PropTypes.instanceOf(moment),

  /**
   * Can turn the shadow off if using the inline prop
   */
  shadow: PropTypes.bool,

  /**
   * Will close the popup on selection
   */
  shouldCloseOnSelect: PropTypes.bool,

  /**
   * Show the icon in input
   */
  showIcon: PropTypes.bool,

  /**
   * Show the time selection alongside the calendar
   */
  showTimeSelect: PropTypes.bool,

  /**
   * Only show the time selector, not the calendar
   */
  showTimeSelectOnly: PropTypes.bool,

  /**
   * The format of the time within the selector, in moment notation
   */
  timeFormat: PropTypes.string
};
EuiDatePicker.defaultProps = {
  adjustDateOnChange: true,
  dateFormat: euiDatePickerDefaultDateFormat,
  fullWidth: false,
  isLoading: false,
  shadow: true,
  shouldCloseOnSelect: true,
  showIcon: true,
  showTimeSelect: false,
  timeFormat: euiDatePickerDefaultTimeFormat
};
EuiDatePicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDatePicker",
  "props": {
    "adjustDateOnChange": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Whether changes to Year and Month (via dropdowns) should trigger `onChange`"
    },
    "dateFormat": {
      "defaultValue": {
        "value": "'MM/DD/YYYY'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Accepts any moment format string"
    },
    "fullWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Makes the input full width"
    },
    "isLoading": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Provides styling to the input when loading"
    },
    "shadow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Can turn the shadow off if using the inline prop"
    },
    "shouldCloseOnSelect": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Will close the popup on selection"
    },
    "showIcon": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Show the icon in input"
    },
    "showTimeSelect": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Show the time selection alongside the calendar"
    },
    "timeFormat": {
      "defaultValue": {
        "value": "'hh:mm A'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "The format of the time within the selector, in moment notation"
    },
    "calendarClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Optional class added to the calendar portion of datepicker"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Added to the actual input of the calendar"
    },
    "customInput": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Replaces the input with any node, like a button"
    },
    "dayClassName": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Applies classes to the numbered days provided. Check docs for example."
    },
    "filterDates": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": "Array of dates allowed. Check docs for example."
    },
    "injectTimes": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": "Adds additional times to the time selector other then :30 increments"
    },
    "inputRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Applies ref to the input"
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Provides styling to the input when invalid"
    },
    "locale": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Switches the locale / display. \"en-us\", \"zn-ch\"...etc"
    },
    "maxDate": {
      "type": {
        "name": "instanceOf",
        "value": "moment"
      },
      "required": false,
      "description": "The max date accepted (in moment format) as a selection"
    },
    "maxTime": {
      "type": {
        "name": "instanceOf",
        "value": "moment"
      },
      "required": false,
      "description": "The max time accepted (in moment format) as a selection"
    },
    "minDate": {
      "type": {
        "name": "instanceOf",
        "value": "moment"
      },
      "required": false,
      "description": "The min date accepted (in moment format) as a selection"
    },
    "minTime": {
      "type": {
        "name": "instanceOf",
        "value": "moment"
      },
      "required": false,
      "description": "The min time accepted (in moment format) as a selection"
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "What to do when the input changes"
    },
    "onClear": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "What to do when the input is cleared by the x icon"
    },
    "openToDate": {
      "type": {
        "name": "instanceOf",
        "value": "moment"
      },
      "required": false,
      "description": "Opens to this date (in moment format) on first press, regardless of selection"
    },
    "placeholder": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Shows only when no date is selected"
    },
    "popperClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Class applied to the popup, when inline is false"
    },
    "selected": {
      "type": {
        "name": "instanceOf",
        "value": "moment"
      },
      "required": false,
      "description": "The selected datetime (in moment format)"
    },
    "showTimeSelectOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Only show the time selector, not the calendar"
    }
  }
};