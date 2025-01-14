"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNavDrawerFlyout = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _title = require("../title");

var _nav_drawer_group = require("./nav_drawer_group");

var _list_group = require("../list_group/list_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiNavDrawerFlyout = function EuiNavDrawerFlyout(_ref) {
  var className = _ref.className,
      title = _ref.title,
      isCollapsed = _ref.isCollapsed,
      listItems = _ref.listItems,
      wrapText = _ref.wrapText,
      rest = _objectWithoutProperties(_ref, ["className", "title", "isCollapsed", "listItems", "wrapText"]);

  var classes = (0, _classnames.default)('euiNavDrawerFlyout', {
    'euiNavDrawerFlyout-isCollapsed': isCollapsed,
    'euiNavDrawerFlyout-isExpanded': !isCollapsed
  }, className);
  return _react.default.createElement("div", _extends({
    className: classes,
    "aria-labelledby": "navDrawerFlyoutTitle"
  }, rest), _react.default.createElement(_title.EuiTitle, {
    className: "euiNavDrawerFlyout__title",
    tabIndex: "-1",
    size: "xxs"
  }, _react.default.createElement("div", {
    id: "navDrawerFlyoutTitle"
  }, title)), _react.default.createElement(_nav_drawer_group.EuiNavDrawerGroup, {
    className: "euiNavDrawerFlyout__listGroup",
    listItems: listItems,
    wrapText: wrapText
  }));
};

exports.EuiNavDrawerFlyout = EuiNavDrawerFlyout;
EuiNavDrawerFlyout.propTypes = {
  className: _propTypes.default.string,
  listItems: _list_group.EuiListGroup.propTypes.listItems,
  wrapText: _list_group.EuiListGroup.propTypes.wrapText,

  /**
   * Display a title atop the flyout
   */
  title: _propTypes.default.string,

  /**
   * Toggle the nav drawer between collapsed and expanded
   */
  isCollapsed: _propTypes.default.bool
};
EuiNavDrawerFlyout.defaultProps = {
  isCollapsed: true
};
EuiNavDrawerFlyout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiNavDrawerFlyout",
  "props": {
    "isCollapsed": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Toggle the nav drawer between collapsed and expanded"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "listItems": {
      "type": {
        "name": "custom",
        "raw": "EuiListGroup.propTypes.listItems"
      },
      "required": false,
      "description": ""
    },
    "wrapText": {
      "type": {
        "name": "custom",
        "raw": "EuiListGroup.propTypes.wrapText"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Display a title atop the flyout"
    }
  }
};