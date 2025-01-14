"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDatePopoverContent = EuiDatePopoverContent;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _tabs = require("../../../tabs");

var _text = require("../../../text");

var _button = require("../../../button");

var _absolute_tab = require("./absolute_tab");

var _relative_tab = require("./relative_tab");

var _date_modes = require("../date_modes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EuiDatePopoverContent(_ref) {
  var value = _ref.value,
      roundUp = _ref.roundUp,
      onChange = _ref.onChange,
      dateFormat = _ref.dateFormat,
      timeFormat = _ref.timeFormat,
      locale = _ref.locale,
      position = _ref.position;

  var onTabClick = function onTabClick(selectedTab) {
    switch (selectedTab.id) {
      case _date_modes.DATE_MODES.ABSOLUTE:
        onChange((0, _date_modes.toAbsoluteString)(value, roundUp));
        break;

      case _date_modes.DATE_MODES.RELATIVE:
        onChange((0, _date_modes.toRelativeString)(value));
        break;
    }
  };

  var ariaLabel = "".concat(position === 'start' ? 'Start' : 'End', " date:");

  var renderTabs = function renderTabs() {
    return [{
      id: _date_modes.DATE_MODES.ABSOLUTE,
      name: 'Absolute',
      content: _react.default.createElement(_absolute_tab.EuiAbsoluteTab, {
        dateFormat: dateFormat,
        timeFormat: timeFormat,
        locale: locale,
        value: value,
        onChange: onChange,
        roundUp: roundUp,
        position: position
      }),
      'data-test-subj': 'superDatePickerAbsoluteTab',
      'aria-label': "".concat(ariaLabel, " Absolute")
    }, {
      id: _date_modes.DATE_MODES.RELATIVE,
      name: 'Relative',
      content: _react.default.createElement(_relative_tab.EuiRelativeTab, {
        dateFormat: dateFormat,
        locale: locale,
        value: value,
        onChange: onChange,
        roundUp: roundUp,
        position: position
      }),
      'data-test-subj': 'superDatePickerRelativeTab',
      'aria-label': "".concat(ariaLabel, " Relative")
    }, {
      id: _date_modes.DATE_MODES.NOW,
      name: 'Now',
      content: _react.default.createElement(_text.EuiText, {
        size: "s",
        color: "subdued",
        className: "euiDatePopoverContent__padded--large"
      }, _react.default.createElement("p", null, "Setting the time to \"now\" means that on every refresh this time will be set to the time of the refresh."), _react.default.createElement(_button.EuiButton, {
        "data-test-subj": "superDatePickerNowButton",
        onClick: function onClick() {
          return onChange('now');
        },
        fullWidth: true,
        size: "s",
        fill: true
      }, "Set ", position, " date and time to now")),
      'data-test-subj': 'superDatePickerNowTab',
      'aria-label': "".concat(ariaLabel, " Now")
    }];
  };

  return _react.default.createElement(_tabs.EuiTabbedContent, {
    className: "euiDatePopoverContent",
    tabs: renderTabs(),
    autoFocus: "selected",
    initialSelectedTab: {
      id: (0, _date_modes.getDateMode)(value)
    },
    onTabClick: onTabClick,
    size: "s",
    expand: true
  });
}

EuiDatePopoverContent.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  roundUp: _propTypes.default.bool,
  dateFormat: _propTypes.default.string.isRequired,
  timeFormat: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  position: _propTypes.default.oneOf(['start', 'end'])
};
EuiDatePopoverContent.defaultProps = {
  roundUp: false
};
EuiDatePopoverContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDatePopoverContent",
  "props": {
    "roundUp": {
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