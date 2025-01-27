"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiAvatar = exports.TYPES = exports.SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../common");

var _classnames = _interopRequireDefault(require("classnames"));

var _color = require("../../services/color");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizeToClassNameMap = {
  none: null,
  s: 'euiAvatar--s',
  m: 'euiAvatar--m',
  l: 'euiAvatar--l',
  xl: 'euiAvatar--xl'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;
var typeToClassNameMap = {
  space: 'euiAvatar--space',
  user: 'euiAvatar--user'
};
var TYPES = (0, _common.keysOf)(typeToClassNameMap);
exports.TYPES = TYPES;

var EuiAvatar = function EuiAvatar(_ref) {
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

  var classes = (0, _classnames.default)('euiAvatar', sizeToClassNameMap[size], typeToClassNameMap[type], className);
  checkValidColor(color);
  checkValidInitials(initials);
  var optionalInitial;

  if (name && !imageUrl) {
    // Create the initials
    var calculatedInitials = (0, _services.toInitials)(name, initialsLength, initials);
    optionalInitial = _react.default.createElement("span", {
      "aria-hidden": "true"
    }, calculatedInitials);
  }

  var assignedColor = color || _services.VISUALIZATION_COLORS[Math.floor(name.length % _services.VISUALIZATION_COLORS.length)];

  var textColor = _color.isColorDark.apply(void 0, _toConsumableArray((0, _color.hexToRgb)(assignedColor))) ? '#FFFFFF' : '#000000';
  var avatarStyle = {
    backgroundImage: imageUrl ? "url(".concat(imageUrl, ")") : 'none',
    backgroundColor: assignedColor,
    color: textColor
  };
  return _react.default.createElement("div", _extends({
    className: classes,
    style: avatarStyle,
    "aria-label": name,
    title: name
  }, rest), optionalInitial);
}; // TODO: Migrate to a service


exports.EuiAvatar = EuiAvatar;
EuiAvatar.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Full name of avatar for title attribute and calculating initial if not provided
       */
  name: _propTypes.default.string.isRequired,

  /**
       * Accepts hex value `#FFFFFF`, `#000` otherwise a viz palette color will be assigned
       */
  color: _propTypes.default.string,

  /**
       * Custom initials (max 2 characters).
       * By default will take the first character (of each word).
       */
  initials: _propTypes.default.string,

  /**
       * Specify how many characters to show (max 2 allowed).
       * By default, will show based on number of words.
       */
  initialsLength: _propTypes.default.oneOf([1, 2]),

  /**
       * The type of avatar this is displaying
       */
  type: _propTypes.default.oneOf(["space", "user"]),
  imageUrl: _propTypes.default.string,
  size: _propTypes.default.oneOf(["none", "s", "m", "l", "xl"])
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