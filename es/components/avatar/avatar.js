function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import { keysOf } from '../common';
import classNames from 'classnames';
import { isColorDark, hexToRgb } from '../../services/color';
import { VISUALIZATION_COLORS, toInitials } from '../../services';
var sizeToClassNameMap = {
  none: null,
  s: 'euiAvatar--s',
  m: 'euiAvatar--m',
  l: 'euiAvatar--l',
  xl: 'euiAvatar--xl'
};
export var SIZES = keysOf(sizeToClassNameMap);
var typeToClassNameMap = {
  space: 'euiAvatar--space',
  user: 'euiAvatar--user'
};
export var TYPES = keysOf(typeToClassNameMap);
export var EuiAvatar = function EuiAvatar(_ref) {
  var className = _ref.className,
      color = _ref.color,
      imageUrl = _ref.imageUrl,
      initials = _ref.initials,
      initialsLength = _ref.initialsLength,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'user' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["className", "color", "imageUrl", "initials", "initialsLength", "name", "size", "type"]);

  var classes = classNames('euiAvatar', sizeToClassNameMap[size], typeToClassNameMap[type], className);
  checkValidColor(color);
  checkValidInitials(initials);
  var optionalInitial;

  if (name && !imageUrl) {
    // Create the initials
    var calculatedInitials = toInitials(name, initialsLength, initials);
    optionalInitial = React.createElement("span", {
      "aria-hidden": "true"
    }, calculatedInitials);
  }

  var assignedColor = color || VISUALIZATION_COLORS[Math.floor(name.length % VISUALIZATION_COLORS.length)];
  var textColor = isColorDark.apply(void 0, _toConsumableArray(hexToRgb(assignedColor))) ? '#FFFFFF' : '#000000';
  var avatarStyle = {
    backgroundImage: imageUrl ? "url(".concat(imageUrl, ")") : 'none',
    backgroundColor: assignedColor,
    color: textColor
  };
  return React.createElement("div", _extends({
    className: classes,
    style: avatarStyle,
    "aria-label": name,
    title: name
  }, rest), optionalInitial);
}; // TODO: Migrate to a service

EuiAvatar.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Full name of avatar for title attribute and calculating initial if not provided
       */
  name: PropTypes.string.isRequired,

  /**
       * Accepts hex value `#FFFFFF`, `#000` otherwise a viz palette color will be assigned
       */
  color: PropTypes.string,

  /**
       * Custom initials (max 2 characters).
       * By default will take the first character (of each word).
       */
  initials: PropTypes.string,

  /**
       * Specify how many characters to show (max 2 allowed).
       * By default, will show based on number of words.
       */
  initialsLength: PropTypes.oneOf([1, 2]),

  /**
       * The type of avatar this is displaying
       */
  type: PropTypes.oneOf(["space", "user"]),
  imageUrl: PropTypes.string,
  size: PropTypes.oneOf(["none", "s", "m", "l", "xl"])
};

function checkValidColor(color) {
  var validHex = color && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

  if (color && !validHex) {
    throw new Error('EuiAvatar needs to pass a valid color. This can either be a three ' + 'or six character hex value');
  }
}

function checkValidInitials(initials) {
  // Must be a string of 1 or 2 characters
  if (initials && initials.length > 2) {
    // tslint:disable-next-line:no-console
    console.warn('EuiAvatar only accepts a max of 2 characters for the initials as a string. It is displaying only the first 2 characters.');
  }
}

EuiAvatar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiAvatar",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }, {
          "value": "\"xl\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "type": {
      "defaultValue": {
        "value": "'user'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"space\"",
          "computed": false
        }, {
          "value": "\"user\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "The type of avatar this is displaying"
    },
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
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": "Full name of avatar for title attribute and calculating initial if not provided"
    },
    "color": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Accepts hex value `#FFFFFF`, `#000` otherwise a viz palette color will be assigned"
    },
    "initials": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Custom initials (max 2 characters).\nBy default will take the first character (of each word)."
    },
    "initialsLength": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "1",
          "computed": false
        }, {
          "value": "2",
          "computed": false
        }]
      },
      "required": false,
      "description": "Specify how many characters to show (max 2 allowed).\nBy default, will show based on number of words."
    },
    "imageUrl": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};