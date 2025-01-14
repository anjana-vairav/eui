function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import makeId from '../../form/form_row/make_id';
export var EuiHeaderAlert = function EuiHeaderAlert(_ref) {
  var action = _ref.action,
      className = _ref.className,
      date = _ref.date,
      text = _ref.text,
      title = _ref.title,
      badge = _ref.badge,
      rest = _objectWithoutProperties(_ref, ["action", "className", "date", "text", "title", "badge"]);

  var classes = classNames('euiHeaderAlert', className);
  var ariaId = makeId();
  return React.createElement("article", _extends({
    "aria-labelledby": "".concat(ariaId, "-title"),
    className: classes
  }, rest), React.createElement(EuiFlexGroup, {
    justifyContent: "spaceBetween"
  }, React.createElement(EuiFlexItem, null, React.createElement("div", {
    className: "euiHeaderAlert__date"
  }, date)), badge && React.createElement(EuiFlexItem, {
    grow: false
  }, badge)), React.createElement("h3", {
    id: "".concat(ariaId, "-title"),
    className: "euiHeaderAlert__title"
  }, title), React.createElement("div", {
    className: "euiHeaderAlert__text"
  }, text), action && React.createElement("div", {
    className: "euiHeaderAlert__action euiLink"
  }, action));
};
EuiHeaderAlert.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Adds a link to the alert.
       */
  action: PropTypes.node,
  date: PropTypes.node.isRequired,
  text: PropTypes.node,
  title: PropTypes.node.isRequired,

  /**
       * Accepts an `EuiBadge` that displays on the alert
       */
  badge: PropTypes.node
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