"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderAlert = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _flex = require("../../flex");

var _make_id = _interopRequireDefault(require("../../form/form_row/make_id"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiHeaderAlert = function EuiHeaderAlert(_ref) {
  var action = _ref.action,
      className = _ref.className,
      date = _ref.date,
      text = _ref.text,
      title = _ref.title,
      badge = _ref.badge,
      rest = _objectWithoutProperties(_ref, ["action", "className", "date", "text", "title", "badge"]);

  var classes = (0, _classnames.default)('euiHeaderAlert', className);
  var ariaId = (0, _make_id.default)();
  return _react.default.createElement("article", _extends({
    "aria-labelledby": "".concat(ariaId, "-title"),
    className: classes
  }, rest), _react.default.createElement(_flex.EuiFlexGroup, {
    justifyContent: "spaceBetween"
  }, _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement("div", {
    className: "euiHeaderAlert__date"
  }, date)), badge && _react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, badge)), _react.default.createElement("h3", {
    id: "".concat(ariaId, "-title"),
    className: "euiHeaderAlert__title"
  }, title), _react.default.createElement("div", {
    className: "euiHeaderAlert__text"
  }, text), action && _react.default.createElement("div", {
    className: "euiHeaderAlert__action euiLink"
  }, action));
};

exports.EuiHeaderAlert = EuiHeaderAlert;
EuiHeaderAlert.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Adds a link to the alert.
       */
  action: _propTypes.default.node,
  date: _propTypes.default.node.isRequired,
  text: _propTypes.default.node,
  title: _propTypes.default.node.isRequired,

  /**
       * Accepts an `EuiBadge` that displays on the alert
       */
  badge: _propTypes.default.node
};
EuiHeaderAlert.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHeaderAlert",
  "props": {
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "action": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Adds a link to the alert."
    },
    "date": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    },
    "text": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    },
    "badge": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Accepts an `EuiBadge` that displays on the alert"
    }
  }
};