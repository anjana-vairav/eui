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
import React, { Component, Fragment } from 'react';
import { commonlyUsedRangeShape, recentlyUsedRangeShape, quickSelectPanelShape } from '../types';
import { EuiButtonEmpty } from '../../../button';
import { EuiIcon } from '../../../icon';
import { EuiPopover } from '../../../popover';
import { EuiTitle } from '../../../title';
import { EuiSpacer } from '../../../spacer';
import { EuiHorizontalRule } from '../../../horizontal_rule';
import { EuiText } from '../../../text';
import { EuiQuickSelect } from './quick_select';
import { EuiCommonlyUsedTimeRanges } from './commonly_used_time_ranges';
import { EuiRecentlyUsed } from './recently_used';
import { EuiRefreshInterval } from './refresh_interval';
export var EuiQuickSelectPopover =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiQuickSelectPopover, _Component);

  function EuiQuickSelectPopover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiQuickSelectPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiQuickSelectPopover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePopover", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "applyTime", function (_ref) {
      var start = _ref.start,
          end = _ref.end,
          quickSelect = _ref.quickSelect,
          _ref$keepPopoverOpen = _ref.keepPopoverOpen,
          keepPopoverOpen = _ref$keepPopoverOpen === void 0 ? false : _ref$keepPopoverOpen;

      _this.props.applyTime({
        start: start,
        end: end
      });

      if (quickSelect) {
        _this.setState({
          prevQuickSelect: quickSelect
        });
      }

      if (!keepPopoverOpen) {
        _this.closePopover();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDateTimeSections", function () {
      if (_this.props.isAutoRefreshOnly) {
        return null;
      }

      return React.createElement(Fragment, null, React.createElement(EuiQuickSelect, {
        applyTime: _this.applyTime,
        start: _this.props.start,
        end: _this.props.end,
        prevQuickSelect: _this.state.prevQuickSelect
      }), React.createElement(EuiCommonlyUsedTimeRanges, {
        applyTime: _this.applyTime,
        commonlyUsedRanges: _this.props.commonlyUsedRanges
      }), React.createElement(EuiRecentlyUsed, {
        applyTime: _this.applyTime,
        commonlyUsedRanges: _this.props.commonlyUsedRanges,
        dateFormat: _this.props.dateFormat,
        recentlyUsedRanges: _this.props.recentlyUsedRanges
      }), _this.renderCustomQuickSelectPanels());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCustomQuickSelectPanels", function () {
      if (!_this.props.customQuickSelectPanels) {
        return null;
      }

      return _this.props.customQuickSelectPanels.map(function (_ref2) {
        var title = _ref2.title,
            content = _ref2.content;
        return React.createElement(Fragment, {
          key: title
        }, React.createElement(EuiTitle, {
          size: "xxxs"
        }, React.createElement("span", null, title)), React.createElement(EuiSpacer, {
          size: "s"
        }), React.createElement(EuiText, {
          size: "s",
          className: "euiQuickSelectPopover__section"
        }, React.cloneElement(content, {
          applyTime: _this.applyTime
        })), React.createElement(EuiHorizontalRule, {
          margin: "s"
        }));
      });
    });

    return _this;
  }

  _createClass(EuiQuickSelectPopover, [{
    key: "render",
    value: function render() {
      var quickSelectButton = React.createElement(EuiButtonEmpty, {
        className: "euiFormControlLayout__prepend",
        textProps: {
          className: 'euiQuickSelectPopover__buttonText'
        },
        onClick: this.togglePopover,
        "aria-label": "Date quick select",
        size: "xs",
        iconType: "arrowDown",
        iconSide: "right",
        isDisabled: this.props.isDisabled,
        "data-test-subj": "superDatePickerToggleQuickMenuButton"
      }, React.createElement(EuiIcon, {
        type: !this.props.isAutoRefreshOnly && this.props.isPaused ? 'calendar' : 'clock'
      }));
      return React.createElement(EuiPopover, {
        id: "QuickSelectPopover",
        button: quickSelectButton,
        isOpen: this.state.isOpen,
        closePopover: this.closePopover,
        anchorPosition: "downLeft",
        anchorClassName: "euiQuickSelectPopover__anchor",
        ownFocus: true
      }, React.createElement("div", {
        className: "euiQuickSelectPopover__content",
        "data-test-subj": "superDatePickerQuickMenu"
      }, this.renderDateTimeSections(), React.createElement(EuiRefreshInterval, {
        applyRefreshInterval: this.props.applyRefreshInterval,
        isPaused: this.props.isPaused,
        refreshInterval: this.props.refreshInterval
      })));
    }
  }]);

  return EuiQuickSelectPopover;
}(Component);
EuiQuickSelectPopover.propTypes = {
  applyTime: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  applyRefreshInterval: PropTypes.func,
  isDisabled: PropTypes.bool.isRequired,
  isPaused: PropTypes.bool.isRequired,
  refreshInterval: PropTypes.number.isRequired,
  commonlyUsedRanges: PropTypes.arrayOf(commonlyUsedRangeShape).isRequired,
  dateFormat: PropTypes.string.isRequired,
  recentlyUsedRanges: PropTypes.arrayOf(recentlyUsedRangeShape).isRequired,
  isAutoRefreshOnly: PropTypes.bool.isRequired,
  customQuickSelectPanels: PropTypes.arrayOf(quickSelectPanelShape)
};
EuiQuickSelectPopover.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "closePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "togglePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "applyTime",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{ start, end, quickSelect, keepPopoverOpen = false }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderDateTimeSections",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderCustomQuickSelectPanels",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiQuickSelectPopover",
  "props": {
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
    },
    "applyRefreshInterval": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": true,
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
    },
    "commonlyUsedRanges": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "commonlyUsedRangeShape"
        }
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
    "recentlyUsedRanges": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "recentlyUsedRangeShape"
        }
      },
      "required": true,
      "description": ""
    },
    "isAutoRefreshOnly": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
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