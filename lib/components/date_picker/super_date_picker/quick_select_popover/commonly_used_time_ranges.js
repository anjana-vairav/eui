"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCommonlyUsedTimeRanges = EuiCommonlyUsedTimeRanges;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _types = require("../types");

var _i18n = require("../../../i18n");

var _flex = require("../../../flex");

var _title = require("../../../title");

var _link = require("../../../link");

var _horizontal_rule = require("../../../horizontal_rule");

var _services = require("../../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateId = (0, _services.htmlIdGenerator)();

function EuiCommonlyUsedTimeRanges(_ref) {
  var applyTime = _ref.applyTime,
      commonlyUsedRanges = _ref.commonlyUsedRanges;
  var legendId = generateId();
  var links = commonlyUsedRanges.map(function (_ref2) {
    var start = _ref2.start,
        end = _ref2.end,
        label = _ref2.label;

    var applyCommonlyUsed = function applyCommonlyUsed() {
      applyTime({
        start: start,
        end: end
      });
    };

    return _react.default.createElement(_flex.EuiFlexItem, {
      key: label,
      component: "li",
      className: "euiCommonlyUsedTimeRanges__item"
    }, _react.default.createElement(_link.EuiLink, {
      onClick: applyCommonlyUsed,
      "data-test-subj": "superDatePickerCommonlyUsed_".concat(label.replace(' ', '_'))
    }, label));
  });
  return _react.default.createElement("fieldset", null, _react.default.createElement(_title.EuiTitle, {
    size: "xxxs"
  }, _react.default.createElement("legend", {
    id: legendId,
    "aria-label": "Commonly used time ranges"
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiCommonlyUsedTimeRanges.legend",
    default: "Commonly used"
  }))), _react.default.createElement("div", {
    className: "euiQuickSelectPopover__section"
  }, _react.default.createElement(_flex.EuiFlexGrid, {
    "aria-labelledby": legendId,
    gutterSize: "s",
    columns: 2,
    direction: "column",
    responsive: false,
    component: "ul"
  }, links)), _react.default.createElement(_horizontal_rule.EuiHorizontalRule, {
    margin: "s"
  }));
}

EuiCommonlyUsedTimeRanges.propTypes = {
  applyTime: _propTypes.default.func.isRequired,
  commonlyUsedRanges: _propTypes.default.arrayOf(_types.commonlyUsedRangeShape).isRequired
};
EuiCommonlyUsedTimeRanges.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCommonlyUsedTimeRanges",
  "props": {
    "applyTime": {
      "type": {
        "name": "func"
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
    }
  }
};